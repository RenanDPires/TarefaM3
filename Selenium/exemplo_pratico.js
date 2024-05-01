const { Builder, By, Key} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

const service = () =>
chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build())

async function run(){
    let navigation = await new Builder().forBrowser('chrome').build();
    await navigation.get('https://api.new.mentorama.com.br/storage/media-files/QA1/M1/pratica_1.html')

    const input = await navigation.findElement(By.xpath('//*[@id="start-screen"]/div/form/input'));
    await input.sendKeys('teste');
    
    const sendPhone = await navigation.findElement(By.xpath('//*[@id="start-screen"]/div/form/button'));
    await sendPhone.click();

    const message = await navigation.findElement(By.xpath('//*[@id="start-screen"]/p'));
    // Daqui pra frente, deveria testar os inputs e seus retornos.
}

run();