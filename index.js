const fs = require('fs');
const marked = require('marked');

if (!fs.existsSync("dist")) {
  fs.mkdirSync("dist");
}

const md = marked.parse(fs.readFileSync("README.md", "utf-8")).split(/\r\n|\n/)
const css = fs.readFileSync("src/style.css", "utf-8").split(/\r\n|\n/)
const base = fs.readFileSync("src/index.html", "utf-8").split(/\r\n|\n/)

let html = ''
base.forEach((item, i) => {
  if (i === 16) {
    html += "<style>"
    for (j of css) {
      html += j
    }
    html += "</style>"
  }
  if (i === 26) {
    for (j of md) {
      html += j
    }
  }
  html += item
})

// ファイル書き出し
fs.writeFile('dist/index.html', html, function (err) {})
const clock = fs.readFileSync("src/clock.html", "utf-8")
fs.writeFile('dist/clock.html', clock, function (err) {})