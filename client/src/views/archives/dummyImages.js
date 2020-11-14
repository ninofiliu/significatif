const randString = () => Math.random().toFixed(10).substring(2);
const randDate = () => {
  const d0 = new Date('2017-01-01');
  const d1 = new Date('2020-12-31');
  const c = Math.random();
  return new Date(c * d0 + (1 - c) * d1);
};

export default (new Array(100)).fill().map(() => ({
  date: randDate(),
  name: randString(),
  location: randString(),
  src: `${Math.floor(Math.random() * 10)}.jpg`,
  serie: 'cross-the-borders',
  seriePosition: 0,
}));
