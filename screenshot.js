import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  
  // Light mode screenshot
  await page.evaluate(() => {
    document.documentElement.classList.remove('dark');
  });
  await page.screenshot({ path: 'light_mode.png', fullPage: true });

  // Dark mode screenshot
  await page.evaluate(() => {
    document.documentElement.classList.add('dark');
  });
  await page.screenshot({ path: 'dark_mode.png', fullPage: true });

  await browser.close();
})();
