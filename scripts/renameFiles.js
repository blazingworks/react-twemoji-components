const { parse } = require("csv-parse/sync");
const fs = require("fs");

const csv = fs.readFileSync("./data/emojis.csv", "utf8");
const records = parse(csv, { columns: true });

const files = fs.readdirSync("./svg");

for (const file of files) {
  if (!file.charAt(0).match(/[0-9a-z]/) || !file.endsWith(".svg")) continue;
  const emoji = records.find((record) => {
    return record.CodePoint.toLowerCase().replaceAll(" ", "-") === file.replace(".svg", "");
  });
  if (!emoji) {
    console.log(`No emoji found for ${file}`);
    continue;
  }
  const newName = `${camelize(emoji.Name)}.svg`.replace("1st", "First").replace("2nd", "Second").replace("3rd", "Third");
  fs.renameSync(`./svg/${file}`, `./svg/${newName}`);
}

function camelize(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return word.toUpperCase();
    })
    .replace(/\s+/g, "");
}
