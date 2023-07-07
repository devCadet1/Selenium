const{Builder,By, Key} = require("selenium-webdriver");
require("chromedriver")

async function test() {
    // Launch browser
    let driver = await new Builder().forBrowser("chrome").build();

    // navigate to our web application
    await driver.get("https://lambdatest.github.io/sample-todo-app/")

    // add a task in the application
    await driver.findElement(By.id("sampletodotext")).sendKeys("learn selenium", Key.RETURN)

    // close the browser
    await driver.quit();
}

test();