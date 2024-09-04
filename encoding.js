const { exec } = require("child_process");
const path = require("path");

function encodeVideo(inputFile) {
  const outputDir = path.join(__dirname, "output");

  const command720p = `
    ffmpeg -i "${inputFile}" \
    -vf "scale=w=1280:h=720" -c:v libx264 -b:v 2000k -f dash "${outputDir}/720p/720p.mpd"
  `.replace(/\s+/g, " ");

  const command360p = `
    ffmpeg -i "${inputFile}" \
    -vf "scale=w=640:h=360" -c:v libx264 -b:v 500k -f dash "${outputDir}/360p/360p.mpd"
  `.replace(/\s+/g, " ");

  exec(command720p, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error encoding 720p video: ${error.message}`);
      return;
    }
    console.log("720p Encoding complete");
    console.log("stdout:", stdout);
    console.error("stderr:", stderr);
  });

  exec(command360p, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error encoding 360p video: ${error.message}`);
      return;
    }
    console.log("360p Encoding complete");
    console.log("stdout:", stdout);
    console.error("stderr:", stderr);
  });
}

encodeVideo("input/input.mp4"); 
