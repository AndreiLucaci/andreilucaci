import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
const html = await readFile('dist/index.html', 'utf8');
for (const forbidden of [/mailto:/i, /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i, /\u2014/, /Resume-Andrei-Lucaci/i]) {
  if (forbidden.test(html)) throw new Error(`Public content failed privacy/copy check: ${forbidden}`);
}
async function checkFiles(directory) {
  for (const item of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, item.name);
    if (item.isDirectory()) await checkFiles(file);
    else if (/\.pdf$/i.test(item.name)) throw new Error(`Unexpected public document: ${file}`);
  }
}
await checkFiles('dist');
for (const text of ['Everforest Pro', 'Scriptum Deus', 'PrayPoint', 'studiu.net', 'God Mindset']) {
  if (!html.includes(text)) throw new Error(`Missing featured initiative: ${text}`);
}
for (const role of ['Code4Nord', 'NTT DATA Romania', 'NetMatch', 'Bettersoft']) {
  if (!html.includes(role)) throw new Error(`Missing career entry: ${role}`);
}
if (!html.includes('theme-toggle')) throw new Error('Missing theme control');
console.log('Public content verified: no email links, email addresses, em dashes, or PDFs; all initiatives present.');
