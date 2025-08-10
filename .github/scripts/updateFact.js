const fs = require("fs");
const fetch = require("node-fetch");

(async () => {
  try {
    const res = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
    const data = await res.json();
    const fact = data.text;

    let readme = fs.readFileSync("README.md", "utf-8");
    const start = "<!-- RANDOM_FACT_START -->";
    const end = "<!-- RANDOM_FACT_END -->";
    const regex = new RegExp(`${start}[\\s\\S]*${end}`, "m");

    const replacement = `${start}\n${fact}\n${end}`;
    readme = readme.replace(regex, replacement);

    fs.writeFileSync("README.md", readme);
    console.log("Updated README with new fact!");
  } catch (error) {
    console.error("Error fetching fact:", error);
  }
})();
