import path from 'path';
import fs from 'fs';
import klawSync from 'klaw-sync';

export default function loadExpects(expectDirPath) {
  const files = klawSync(expectDirPath, {
    nodir: true,
  });

  const expects = {
    asis: {},
    tobe: {},
  };
  files.forEach((file) => {
    const ext = path.extname(file.path).substr(1);
    const basename = path.basename(file.path, `.${ext}`);
    expects[ext][basename] = fs.readFileSync(file.path, 'utf-8');
  });
  return expects;
}
