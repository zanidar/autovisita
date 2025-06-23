const puppeteer = require("puppeteer");

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });

    const page = await browser.newPage();
    const url = "https://telegram-bot-cron.onrender.com"; // 🔁 reemplaza con tu URL

    console.log(`🌐 Visitando: ${url}`);
    await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });

    console.log("⏳ Esperando 20 segundos para asegurar carga completa...");
    await page.waitForTimeout(20000); // Espera 20 segundos (20,000 ms)

    console.log("✅ Visita completada.");
    await browser.close();
  } catch (error) {
    console.error("❌ Error durante la visita:", error);
    process.exit(1);
  }
})();
