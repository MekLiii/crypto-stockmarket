require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

app.get("/infoAboutCrypto/:slug", (req, res) => {
  const symbol = req.params.slug.toLocaleLowerCase();
  const getInfoAboutCrypto = async () => {
    const response = await fetch(
      `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?slug=${symbol}`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-CMC_PRO_API_KEY": process.env.COINMARKETCAP_API_KEY,
        },
      }
    );
    return response.json();
  };
  getInfoAboutCrypto().then((data) => {
    if (!data.data) return;
    if (data.status.error_code === 400) {
      res.send({
        status: "error",
        statusCode: 400,
        ok: false,
        text: `${req.params.slug} is not a valid slug`,
        data: null,
      });
      return;
    }

    const dto = {
      id: Object.values(data.data)[0].id || null,
      name: Object.values(data.data)[0].name || null,
      symbol: Object.values(data.data)[0].symbol || null,
      slug: Object.values(data.data)[0].slug || null,
      description: Object.values(data.data)[0].description || null,
      logo: Object.values(data.data)[0].logo || null,
    };
    if (data) {
      res.send({
        status: "succes",
        statusCode: 200,
        ok: true,
        text: req.params.slug + " has been found",
        data: dto,
      });
      return;
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
