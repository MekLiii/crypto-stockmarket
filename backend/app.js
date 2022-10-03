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
  console.log(process.env.COINMARKETCAP_API_KEY);
  getInfoAboutCrypto().then((data) => {
    if (data.status.error_code === 400) {
      console.log("400");
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
      const dto = {
        id: data.data[signToDto].id,
        name: data.data[signToDto].name,
        symbol: data.data[signToDto].symbol,
        slug: data.data[signToDto].slug,
        description: data.data[signToDto].description,
        logo: data.data[signToDto].logo,
      };
      res.send({
        status: "succes",
        statusCode: 200,
        ok: true,
        text: req.params.symbol + " has been found",
        data: dto,
        test:data,
      });
      return;
    }
  });

  //   const symbol = req.params.symbol;
  //   res.send(getInfoAboutCrypto() || "Sorry, we don't have that symbol");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
