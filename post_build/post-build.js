const fs = require("fs");
const path = require("path");

const distPath = path.join(__dirname, "dist/your-project-name/assets/themes");
const srcPath = path.join(__dirname, "src/assets/themes");

if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath, { recursive: true });
}

fs.copyFileSync(
  path.join(srcPath, "theme-light-blue.css"),
  path.join(distPath, "theme-light-blue.css")
);
fs.copyFileSync(
  path.join(srcPath, "theme-dark-blue.css"),
  path.join(distPath, "theme-dark-blue.css")
);
