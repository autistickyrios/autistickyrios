const fetch = require("node-fetch");
const fs = require("fs");

// README file path
const readmePath = "./README.md";

// Fetch a random fact from the API
async function getFact() {
  const res = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
  const data = await res.json();
  return data.text;
}

(async () => {
  try {
    const fact = await getFact();
    let readme = fs.readFileSync(readmePath, "utf8");

    // Replace between markers
    const updated = readme.replace(
      /(<!-- START_FACT -->)([\s\S]*?)(<!-- END_FACT -->)/,
      `$1\n${fact}\n$3`
    );

    fs.writeFileSync(readmePath, updated);
    console.log("✅ README updated with new fact:", fact);
  } catch (error) {
    console.error("❌ Failed to update fact:", error);
    process.exit(1);
  }
})();
