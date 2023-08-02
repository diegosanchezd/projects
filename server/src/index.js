const express = require('express');
const app = express();
const cors = require('cors');
const mp = require('mercadopago');

mp.configure({
  access_token: "TEST-2575467556180890-080206-978a2358fb44efb3ad30beb7b368cd54-1256065380",
});

app.use(express.json());
app.use(cors())

app.get("/", (req, res)=> {
  res.send("Welcome...")
})

app.post("/create_preference", (req, res) => {
  let preference = {
    items: [
      {
        title: req.body.description,
        unit_price: Number(req.body.price),
        quantity: Number(req.body.quantity),
      },
    ],
    back_urls: {
      success: "http://localhost:5173",
      failure: "http://localhost:5173",
      pending: "",
    },
    auto_return: "approved",
  };

  mp.preferences
    .create(preference)
    .then(function (response) {
      res.json({
        id: response.body.id,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.listen(8080, () => {
  console.log("the server is now running on port 8080...");
});