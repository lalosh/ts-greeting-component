#!/bin/bash

rm -rf ./dist/

npx webpack

mv ./dist/src/* ./dist/
rm -rf ./dist/src
rm ./dist/webpack*

yarn unlink
yarn link