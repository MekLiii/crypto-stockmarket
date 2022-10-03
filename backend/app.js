require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

app.get("/infoAboutCrypto/:symbol", (req, res) => {
  const isSlugOrSybmol = req.params.symbol.length > 3 ? "slug" : "symbol";
  const symbol = req.params.symbol;
  const getInfoAboutCrypto = async () => {
    const response = await fetch(
      `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?${isSlugOrSybmol}=${symbol}`,
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
    if (data.status.error_code === 400) {
      res.send({
        status: "error",
        statusCode: 400,
        ok: false,
        text: req.params.symbol + " is not a valid symbol or slug",
        data: null,
      });
      return;
    }
    if (data) {
      const signToDto = req.params.symbol.length > 3 ? "1" : req.params.symbol.toUpperCase();
      console.log(data.data[signToDto][0])
      const dto = {
        id: data.data[signToDto][0].id || null,
        name: data.data[signToDto][0].name || null,
        symbol: data.data[signToDto][0].symbol || null,
        slug: data.data[signToDto][0].slug || null,
        description: data.data[signToDto][0].description || null,
        logo: data.data[signToDto][0].logo || null,
      };
      res.send({
        status: "succes",
        statusCode: 200,
        ok: true,
        text: req.params.symbol + " has been found",
        data: dto,
      });
      return;
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
