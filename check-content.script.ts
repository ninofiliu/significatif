import { execSync } from "child_process";
import { readFileSync } from "fs";

const actualFiles = new Set(
  execSync("echo ./static/**/*.*").toString("utf8").split(/\s/).filter(Boolean)
);

const covers = JSON.parse(
  readFileSync("./client/src/content/covers.json").toString("utf8")
) as { [storyId: string]: { html: string; img: string; txt: string[] } };
for (const storyId in covers) {
  const { img } = covers[storyId];
  const expectedPath = `./static/${img}`;
  if (!actualFiles.has(expectedPath))
    console.log(`covers > ${storyId} > ${expectedPath}`);
}

const home = JSON.parse(
  readFileSync("./client/src/content/home.json").toString("utf8")
) as string[];
for (const file of home) {
  const expectedPath = `./static/${file}`;
  if (!actualFiles.has(expectedPath)) console.log(`home > ${expectedPath}`);
}

const manifesto = JSON.parse(
  readFileSync("./client/src/content/manifesto.json").toString("utf8")
) as {
  leftText: string;
  rightText: { type: "text" | "image"; content: string }[];
};
for (const { type, content } of manifesto.rightText) {
  if (type === "image") {
    const expectedPath = `./static/${content}`;
    if (!actualFiles.has(expectedPath))
      console.log(`manifesto > ${expectedPath}`);
  }
}
