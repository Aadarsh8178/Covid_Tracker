const express = require("express");
const timeout = require("connect-timeout");
const path = require("path");
const app = express();
const cors = require("cors"); // allows/disallows cross-site communication
const fetchData = require("./scrapeMohfw");
const cacheMiddleware = require("./cacheMiddlewares");
const fs = require("fs");
app.use(express.json());
app.use(timeout(120000));
// --> Add this
// ** MIDDLEWARE ** //
const whitelist = [
  "http://localhost:3000",
  "http://localhost:8080",
  "https://bpc-covid-tracker.herokuapp.com/",
];
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin);
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable");
      callback(null, true);
    } else {
      console.log("Origin rejected");
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors(corsOptions));

//caching the api response for 5 minutes
app.get("/api/covid", cacheMiddleware(300), async (req, res) => {
  try {
    const data = await fetchData();
    res.status(200).send(data);
    fs.writeFile("./lastResponse.json", JSON.stringify(data), () => {});
  } catch (e) {
    fs.readFile("./lastResponse.json", (err, data) => {
      if (err) {
        res.status(500).send(e);
      }
      if (data) {
        data = JSON.parse(data);
        res.status(200).send({ ...data, error: e.error, oldData: true });
      }
    });
    console.log(e);
  }
});

// --> Add this
if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static("client/dist"));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
  });
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, (req, res) => {
  console.log(`server listening on port: ${PORT}`);
});
