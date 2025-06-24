const puppeteer = require("puppeteer");

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });

    const page = await browser.newPage();
    const url = "https://telegram-bot-cron.onrender.com";

    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36"
    );

    console.log(`🌐 Visitando: ${url}`);

    // Intentar navegar con más tolerancia
    const response = await page.goto(url, {
      waitUntil: 'domcontentloaded',
      timeout: 60000 // permite hasta 60 segundos
    });

    console.log("📡 Código de respuesta:", response.status());

    console.log("⏳ Esperando 30 segundos...");
    await new Promise(resolve => setTimeout(resolve, 30000));

    await browser.close();
    console.log("✅ Visita finalizada.");
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
})();


