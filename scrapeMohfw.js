const puppeteer = require("puppeteer-extra");

const fetchCountryData = async (page) => {
  await page.waitForSelector(".site-stats-count");
  const active = await page.$eval(
    ".bg-blue strong:nth-child(2)",
    (element) => element.innerHTML.split("<span")[0]
  );
  const recovered = await page.$eval(
    ".bg-green strong:nth-child(2)",
    (element) => element.innerHTML.split("<span")[0]
  );
  const deaths = await page.$eval(
    ".bg-red strong:nth-child(2)",
    (element) => element.innerHTML.split("&nbsp")[0]
  );
  return { active, recovered, deaths };
};

const fetchStateData = async (page) => {
  await page.waitForSelector(".statetable tbody");
  let statesData = {};
  const promises = Array(36)
    .fill()
    .map((val, ind) => {
      return page.$eval(
        `.statetable tbody tr:nth-child(${ind + 1})`,
        (element) => {
          const data = element.innerHTML.split("<td>");
          let name = data[2].split("</td>")[0];
          let active = data[3].split("</td>")[0];
          let recovered = data[5].split("</td>")[0];
          let deaths = data[7].split("</td>")[0];
          return { name, active, recovered, deaths };
        }
      );
    });
  const data = await Promise.all(promises);
  data.forEach((stateData) => (statesData[stateData.name] = stateData));

  return statesData;
};

const fetchData = () => {
  setTimeout(() => {}, 3000);

  const url = "https://www.mohfw.gov.in/";

  return new Promise(async (resolve, reject) => {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    try {
      const page = await browser.newPage();
      await page.setDefaultNavigationTimeout(6000);
      await page.goto(url);

      let covidData = {};
      try {
        covidData["country"] = await fetchCountryData(page);
        covidData["states"] = await fetchStateData(page);
        browser.close();
        resolve(covidData);
      } catch (e) {
        reject({ error: e, ...covidData });
        browser.close();
      }
    } catch (e) {
      reject({ error: e });
      browser.close();
    }
  });
};

module.exports = fetchData;
