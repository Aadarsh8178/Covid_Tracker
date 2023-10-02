# Project Intro

This is an end to end project built with React and Express, It was built during covid to track active cases and other covid related matrics in India using web scrapping (using puppeteer) and a web api. It is built from sratch using webpack and babel for building client side bundle no CRA.
Backend have in memory caching for web scrapped data to prevent frequent scrapping.
Frontend app have service worker setup for caching using SWR (stale while revalidate strategy) for api and cache first for static resources.

This is a PWA you can install it in your phone and laptop and it support offline mode using service worker.

Check Live App [here](https://covid-tracker-1sxa.onrender.com/)

# Prerequisites

You need to have node js 14.x version to run this project you can easily update it to support new node version as well.

# Local Setup Steps

1. Clone repo
2. Run npm install in root directory
3. Run npm start ( this will start server on [http://localhost:8080/](http://localhost:8080/) )
4. cd client run npm install
5. Run npm start ( this will start webpack dev server on [http://localhost:3000/](http://localhost:3000/) )

# Build

1. Run npm run build in root directory
   This will create a dist folder in client for your frontend, server.js file is made to server dist/index.html on any request in production mode so your node sever will server your react app in production mode.
