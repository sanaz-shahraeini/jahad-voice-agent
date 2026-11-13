const {chromium}=require('playwright');
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 const page=await browser.newPage();
 page.on('pageerror',e=>console.log('PAGE ERROR',e.message));
 page.on('requestfailed',r=>console.log('REQUEST FAILED',r.url(),r.failure()?.errorText));
 await page.goto('file:///D:/my-Projects/Jahad-voice-agent/jahad-mashhad-center1-voice-assistant.html');
 await page.waitForTimeout(12000);
 console.log(await page.locator('elevenlabs-convai').evaluate(e=>({host:e.getBoundingClientRect().toJSON(),nodes:Array.from(e.shadowRoot.querySelectorAll('div')).slice(0,5).map(n=>({cls:n.className,style:n.getAttribute('style'),rect:n.getBoundingClientRect().toJSON()}))})));
 await page.locator('#assistant').scrollIntoViewIfNeeded();
 await page.waitForTimeout(900);
 await page.screenshot({path:'widget-check.png',fullPage:true});
 console.log('Visible buttons',await page.locator('elevenlabs-convai button:visible').count());
 await browser.close();
})();
