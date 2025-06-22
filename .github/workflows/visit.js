const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const url = 'https://telegram-bot-cron.onrender.com'; // ⬅️ Cambia esto por tu URL real
  await page.goto(url, { waitUntil: 'networkidle2' });
  console.log(`✅ Sitio visitado: ${url}`);
  await browser.close();
})();
