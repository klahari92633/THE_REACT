
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/api/restaurants", async (req, res) => {
  try {
    const url =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3532727&lng=78.52309&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

    const response = await fetch(url);

console.log("Status:", response.status);
console.log("Content-Type:", response.headers.get("content-type"));

const text = await response.text();
console.log(text.slice(0, 200));

res.status(response.status).send(text);
return;

    res.json(data);
  }catch (error) {
  console.error(error);

  res.status(500).json({
    message: error.message,
  });
}
});

app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
