# Electron App
- Build app, wrapped and packaged.

## Install Electron packager:

### for use in npm scripts
````
$ npm install electron-packager --save-dev
````

### for use from cli
````
$ npm install electron-packager -g
````

### Set product name
````
$npm install --save-dev electron
````

### Add in package.json
- In script:
````
electron-packager . --overwrite --platform=darwin --arch=x64 --icon=assets/icons/mac/icon.icns --prune=true --out=release-builds
````

### Finally
- Can run and build the application

	````
$ npm run package-mac
````