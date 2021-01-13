/* eslint-disable no-console */
const fs = require('fs');

const storyIds = [
  'cross-the-borders',
  'taste-of-farniente',
  'humans',
  'vous-etes-des-animaux',
  'silent-photography',
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

      const splitBasename = basename.split('.');
      if (splitBasename.length !== 4) throw new Error(`Invalid file ${storyId}/${basename}: should be formatted as DATE.NAME.PLACE.EXTENSION`);
      const [rawDate, rawTitle, rawPlace] = splitBasename;

      const rawDateMatch = rawDate.match(/([a-z]*)([0-9]*)/);
      if (!rawDateMatch) throw new Error(`Invalid file ${storyId}/${basename}: DATE should look like janvier2000`);
      const [, rawMonth, year] = rawDateMatch;
      if (!(rawMonth && year && year.length === 4)) throw new Error(`Invalid file ${storyId}/${basename}: DATE should look like janvier2000`);

      const months = ['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre'];
      if (!months.includes(rawMonth)) throw new Error(`Invalid file ${storyId}/${basename}: ${rawMonth} is not a valid month`);
      const month = ['', ...months]
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
