const http = require("http");
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "dist");
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".json": "application/json", ".jpg": "image/jpeg", ".svg": "image/svg+xml; charset=utf-8", ".pdf": "application/pdf", ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document" };
http.createServer((request, response) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname); }
  catch { response.writeHead(400).end("Bad request"); return; }
  if (pathname === "/") pathname = "/index.html";
  const filename = path.join(root, pathname);
  if (!filename.startsWith(root + path.sep) && filename !== path.join(root, "index.html")) { response.writeHead(403).end("Forbidden"); return; }
  fs.readFile(filename, (error, data) => {
    if (error) { response.writeHead(404).end("Not found"); return; }
    response.writeHead(200, { "Content-Type": types[path.extname(filename)] || "application/octet-stream" });
    response.end(data);
  });
}).listen(Number(process.env.PORT) || 4173, "127.0.0.1");
