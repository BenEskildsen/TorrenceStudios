#!/bin/bash

# do babel transform into temp_bin
mkdir temp_bin
npm run babel -- js/ -d temp_bin/


# make the bundle for each page and put it in the page's bin directory
mkdir www/bin
npm run browserify -- temp_bin/home.js -o www/bin/bundle.js -p esmify

rm -rf temp_bin


