import puppeteer from 'puppeteer';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const htmlPath = join(__dirname, 'public', 'capabilities.html');
const htmlContent = readFileSync(htmlPath, 'utf-8');

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();

await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
await page.emulateMediaType('print');

await page.pdf({
  path: join(__dirname, 'public', 'capabilities.pdf'),
  format: 'Letter',
  printBackground: true,
  margin: { top: '0', right: '0', bottom: '0', left: '0' },
});

await browser.close();
console.log('PDF saved to public/capabilities.pdf');
