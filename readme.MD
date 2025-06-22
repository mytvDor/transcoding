# 📺 Adaptive Video Streaming with MPEG-DASH and Shaka Player

This project demonstrates how to stream videos using the MPEG-DASH protocol with a custom Express.js server and a Shaka Player frontend. It automatically switches video quality based on the user's network speed (e.g. 2G, 3G, 4G), and allows manual resolution switching while maintaining playback position.

---

## 🚀 Features

- 🎞️ Adaptive video streaming with MPEG-DASH
- 📡 Network-based quality auto-switching (2G → 144p, 3G → 360p, 4G → 720p)
- 🔘 Manual quality buttons: 144p, 360p, 720p
- 🕒 Seamless playback position during quality switch
- 📈 Realtime quality and network info display
- 🖥️ Built with Node.js, Express, FFmpeg, and Shaka Player

---

## 📁 Project Structure

```

project-root/
├── server/
│ └── server.js # Express server to serve video and frontend
├── static/
│ └── index.html # Frontend video player with Shaka Player
├── output/
│ ├── 144p/144p.mpd # MPEG-DASH 144p stream
│ ├── 360p/360p.mpd # MPEG-DASH 360p stream
│ └── 720p/720p.mpd # MPEG-DASH 720p stream
└── README.md

```

---

## 🧰 Requirements

- [Node.js](https://nodejs.org/)
- [FFmpeg](https://ffmpeg.org/)
- A video file to convert (e.g., `input.mp4`)

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/mytvDor/transcoding.git
cd your-repo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Encode video into MPEG-DASH

Use FFmpeg to generate segmented `.mpd` files:

```bash
ffmpeg -i input.mp4 -vf scale=w=1280:h=720 -c:v libx264 -b:v 2000k -f dash output/720p/720p.mpd
ffmpeg -i input.mp4 -vf scale=w=640:h=360 -c:v libx264 -b:v 500k -f dash output/360p/360p.mpd
ffmpeg -i input.mp4 -vf scale=w=256:h=144 -c:v libx264 -b:v 200k -f dash output/144p/144p.mpd
```

> Make sure `output/720p`, `output/360p`, and `output/144p` folders exist.

### 4. Start the server

```bash
node server/server.js
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 📦 Technologies Used

- Node.js
- Express.js
- FFmpeg
- Shaka Player
- HTML/CSS/JavaScript

---

## 🙌 Acknowledgments

- [Shaka Player](https://github.com/shaka-project/shaka-player)
- [FFmpeg](https://ffmpeg.org/)
- [MPEG-DASH Standard](https://mpeg.chiariglione.org/standards/mpeg-dash)

---
