import { readFile, writeFile } from 'node:fs/promises'
import { renderToString } from 'react-dom/server'
import App from '../src/App'

const path = new URL('../dist/index.html', import.meta.url)
const template = await readFile(path, 'utf8')
if (!template.includes('<!--app-html-->'))
    throw new Error('Missing prerender placeholder')
await writeFile(
    path,
    template.replace('<!--app-html-->', renderToString(<App />))
)
console.log('Prerendered portfolio content into dist/index.html')
