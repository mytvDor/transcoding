const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Middleware to set proper MIME types for DASH manifests
app.use((req, res, next) => {
  if (req.url.endsWith(".mpd")) {
    res.setHeader("Content-Type", "application/dash+xml");
  }
  next();
});

// Serve video segments and manifest files
app.use("/video", express.static(path.join(__dirname, "../output")));

// Serve the HTML file for video playback
app.use(express.static(path.join(__dirname, "static")));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
