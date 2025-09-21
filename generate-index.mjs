import fs from "fs/promises";
import path from "path";

async function main() {
  const cwd = process.cwd();
  const entries = await fs.readdir(cwd, { withFileTypes: true });
  const problems = [];

  for (const entry of entries) {
    if (entry.isDirectory() && /^\d{3}-.+/.test(entry.name)) {
      const metaPath = path.join(cwd, entry.name, "meta.json");
      try {
        const meta = JSON.parse(await fs.readFile(metaPath, "utf8"));
        problems.push(meta);
      } catch (e) {
        // skip if meta.json missing or invalid
      }
    }
  }

  // Markdown table header
  let md = `# Problem Index\n\n`;
  md +=
    "| ID | Title | Difficulty | Topics | Sources | Status | Last Reviewed |\n";
  md +=
    "|----|-------|------------|--------|---------|--------|---------------|\n";
  for (const p of problems) {
    md += `| ${p.id} | [${p.title}](./${p.id}-${p.slug}/README.md) | ${
      p.difficulty
    } | ${(p.topics || []).join(", ")} | ${(p.sources || []).join(", ")} | ${
      p.status
    } | ${p.lastReviewed || ""} |\n`;
  }
  await fs.writeFile(path.join(cwd, "PROBLEMS.md"), md);
  console.log("PROBLEMS.md generated.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
