import inquirer from "inquirer";
import fetch from "node-fetch";
import fs from "fs/promises";
import path from "path";

const LANGS = [
  { key: "python3", ext: "py", comment: "#" },
  { key: "javascript", ext: "js", comment: "//" },
  { key: "typescript", ext: "ts", comment: "//" },
];

async function getLeetCodeProblem(slug) {
  const query = `\
    query getQuestionDetail($titleSlug: String!) {\n      question(titleSlug: $titleSlug) {\n        questionId\n        title\n        content\n        difficulty\n        topicTags { name }\n        codeSnippets {\n          lang\n          langSlug\n          code\n        }\n      }\n    }\n  `;
  const response = await fetch("https://leetcode.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables: { titleSlug: slug } }),
  });
  const data = await response.json();
  return data.data.question;
}

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

async function main() {
  const { slugOrUrl } = await inquirer.prompt([
    {
      type: "input",
      name: "slugOrUrl",
      message: "Enter LeetCode problem slug or URL:",
    },
  ]);

  let slug = slugOrUrl.trim();
  if (slug.startsWith("http")) {
    const match = slug.match(/problems\/([\w-]+)/);
    if (match) slug = match[1];
    else throw new Error("Could not extract slug from URL.");
  }

  const problem = await getLeetCodeProblem(slug);
  if (!problem) throw new Error("Problem not found on LeetCode.");

  const folderName = `${problem.questionId.padStart(3, "0")}-${slugify(
    problem.title
  )}`;
  const folderPath = path.join(process.cwd(), folderName);
  await fs.mkdir(folderPath, { recursive: true });

  // Prompt for sources (comma separated)
  const { sources } = await inquirer.prompt([
    {
      type: "input",
      name: "sources",
      message:
        "Sources (comma separated, e.g. grind75, top-interview-150, grokking):",
      default: "",
    },
  ]);

  // Write README.md
  const readme = `# ${problem.title}\n\n${problem.content.replace(
    /<[^>]+>/g,
    ""
  )}\n`;
  await fs.writeFile(path.join(folderPath, "README.md"), readme);

  // Write meta.json
  const today = new Date().toISOString().slice(0, 10);
  const meta = {
    id: problem.questionId.padStart(3, "0"),
    title: problem.title,
    slug: slug,
    difficulty: (problem.difficulty || "").toLowerCase() || "unknown",
    topics: (problem.topicTags || []).map((t) => t.name.toLowerCase()),
    sources: sources
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean),
    status: "solved",
    lastReviewed: today,
    reviewNotes: "",
  };
  await fs.writeFile(
    path.join(folderPath, "meta.json"),
    JSON.stringify(meta, null, 2)
  );

  // Write solution files with default code and description
  for (const lang of LANGS) {
    const snippet = problem.codeSnippets.find((s) => s.langSlug === lang.key);
    const desc = `${lang.comment} ${problem.title}\n${lang.comment} https://leetcode.com/problems/${slug}/\n`;
    const code = snippet ? snippet.code : "";
    await fs.writeFile(
      path.join(folderPath, `solution.${lang.ext}`),
      desc + "\n" + code + "\n"
    );
  }

  console.log(`Created folder: ${folderName}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
