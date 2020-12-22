/* eslint-disable no-console */
const fs = require('fs');

const storyIds = [
  'cross-the-borders',
  'taste-of-farniente',
  'photo-seduction',
  'vous-etes-des-animaux',
  'architecture-silence',
  'pedal-to-the-metal',
];

const stories = [];
for (const storyId of storyIds) {
  const story = { id: storyId, pictures: [] };
  const storyPath = `${__dirname}/../../static/${storyId}`;
  if (fs.existsSync(storyPath)) {
    story.pictures = fs.readdirSync(storyPath).map((basename) => `${storyId}/${basename}`);
  } else {
    console.warn(`[WARN] ${storyId} does not exists, a story with no content will be created`);
  }
  stories.push(story);
}
fs.writeFileSync(`${__dirname}/content/stories.json`, JSON.stringify(stories, null, 2));
console.log('[INFO] Built stories.json');

const pictures = [];
for (const storyId of storyIds) {
  const storyPath = `${__dirname}/../../static/${storyId}`;
  if (fs.existsSync(storyPath)) {
    for (const basename of fs.readdirSync(storyPath)) {
      const src = `${storyId}/${basename}`;
      const [rawDate, rawTitle, rawPlace] = basename.split('.');
      const [, rawMonth, year] = rawDate.match(/([a-z]*)([0-9]*)/);
      const month = ['', 'janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre']
        .indexOf(rawMonth)
        .toString()
        .padStart(2, '0');
      const date = `${year}-${month}-01`;
      const title = rawTitle.replace(/-/g, ' ');
      const place = rawPlace.replace(/-/g, ' ');
      pictures.push({
        src,
        title,
        date,
        place,
      });
    }
  }
}
fs.writeFileSync(`${__dirname}/content/pictures.json`, JSON.stringify(pictures, null, 2));
console.log('[INFO] Built pictures.json');
