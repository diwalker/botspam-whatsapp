const puppeteer = require("puppeteer");

(async function main(){
    try{

        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36");
        
        await page.goto("https://web.whatsapp.com/");

        await page.waitForSelector("class here"); //procurar a classe no Inspector do Chrome
        await delay(4000);

        const contactName = ""; //nome do contato que deseja enviar a mensagem entre aspas duplas
        await page.click(`span[title='${contactName}']`);
        await waitForSelector("class here"); //procurar a classe no Inspector do Chrome

        const editor = await page.$("div[tabindex='-1']");
        await editor.focus();

        const spamAmount = 1000; //quantidade de mensagens que deseja enviar

        for (var i = 0; i < spamAmount; i++) {
            await page.evaluate(() => {
                const message = ""; //texto para ser spamma entre aspas duplas
                document.execCommand("insertText", false, message);    
            
               });
            await page.click("span[data-testid='send']");
            await delay(400)
            }
            await delay(1000);
        }


    catch(e){
        console.error("error mine", e);
    }
})();

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}