import { readFile } from 'fs';

readFile(`${__dirname}/../package.json`, (err, data) => {
  if (err) throw err;
  // eslint-disable-next-line no-console
  console.log(`The package.json file: ${data}`);
});
