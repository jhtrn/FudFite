# FUD FITE

Users are able to upload their food pictures and argue about whose food looks tastier.
This is for **Project 1 - CPSC 473 Front-End Development course**.

## Installation/Configuration Documentation

**Clone** or **download** the repo

### Install

[`Node.js`](https://nodejs.org/en/) and follow the prompts.

[`MongoDB`](https://docs.mongodb.com/manual/administration/install-community/) for backend.

[`Deployd`](https://github.com/deployd/deployd#install-from-npm) for backend.

`npm init` on terminal to initialize package.json

`npm install forever` on terminal

### Front-End -> Run In Terminal

`cd/directory-of-Fud-Fite/fud-fite-frontend` change _directory-of-Fud-Fite_ to the directory in which you downloaded the repo

`npm install gulp` on terminal to install gulp

`npm start` on terminal and **localhost:3000/index.html** will show up on your browser

### Back-End -> Run In Terminal

Open another terminal window (CMD+T or CNTRL+T) for the backend.

`cd/directory-of-Fud-Fite/fud-fite-backend` change _directory-of-Fud-Fite_ to the directory in which you downloaded the repo

`forever start run_dpd.js` on terminal

`sudo mongod` on terminal

In your browser, type in **localhost:2403/dashboard**

## User Documentation

### New Users

Click on the **Sign up** and enter username, password, and email

Click the **Sign up** button

Proceed to log in with newly created username and password

### Returning Users

Log in with username and password

### Food Categories

Allows users to view food images by categories

### Food Feed

Allows users to view all food images from newest to oldest

### My Foods

Allows users to view only the food images that they have posted

### Upload

Allows users to upload pictures of their Food

Pick a category from the dropdown menu

Click **Choose files** to pick an image to Upload

Click **Post** button, an "upload successful" message will appear

Exit out of the upload window to view newly posted image
