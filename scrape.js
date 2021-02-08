//cheerio & request
const request = require('request');
const cheerio = require('cheerio');
var url = ('https://hungry-carson-df6d18.netlify.app/');
if (url != null){
request('https://hungry-carson-df6d18.netlify.app/', (error, response, html) => {
if(!error && response.statusCode == 200){
const $ = cheerio.load(html);
const siteHeading = $('<head>...</head>');
        console.log($.text());
        }
    })
} 

//puppeteer & Node
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const puppeteer = require('puppeteer');
const takescreenshot = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const options = {
        path: 'images/website.png',
       // encoding: 'base64',
        fullpage: true,
        omitBackground: true,

    };    
    
    await page.goto('https://natebennettsoundboard.tk/');
    await page.screenshot(options);
    await browser.close();
};



