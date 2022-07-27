# E-commerce Database

## Description

This is a back-end API that can be called on to get, post, update, or delete products, categories, and tags for a theoretical e-commerce site

## How to use

To use this application you must first sign into mysql and drop/create a new fresh database. Then you need to call on the index file in the seeds folder to seed the database. Then if you call on server.js it will start the connection with localhost.

After it is connected with localhost you are able to use insomnia to make get/post requests on any of the ../api/tags, ../api/categories, or ../api/products. To search for just one or to update/delete you must declare the id after ex."../api/tags/1".

## Resources used

1. mysql2
2. Sequelize
3. Express
4. Nodejs

## Github Repo

<a href = "https://github.com/jgood13/e-commerce-database"
target="_blank">Github Repo</a>

## Screenshot/Gif

![Screencapture of page](./assets/images/ecommerce_gif.gif "Page GIF")
