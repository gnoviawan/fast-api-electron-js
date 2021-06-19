![Electron JS Python Fast API](https://raw.githubusercontent.com/gnoviawan/fast-api-electron-js/main/public/assets/media/logo/electron-fastapi.png)

# Electron JS x Python Fast API
> Modern web UI x Python FAST API

## Preview
![Fast API Electron JS Preview](https://raw.githubusercontent.com/gnoviawan/fast-api-electron-js/main/public/assets/media/logo/python-electronjs.gif)



## Prerequisite

- Working Python environment (virtual environment is recommended), Python 3
- Know how to use Node.js command



## Features

 1. Python Backend - do as you wish with python, do AI / ML / etc and send those data to modern web UI
 2. Cross Platform APP using web UI



## Installing / Getting started

clone this git

```shell
git clone https://github.com/gnoviawan/fast-api-electron-js.git
```



## Initial Configuration

change directory to cloned git

```shell
cd fast-api-electron-js
```

install all python dependencies

```shell
npm run py-install
```

install all node js dependencies

```shell
npm install
```



## Developing

##### Directory Structure :

`engine/` : a python directory for Fast API, create/modify all python module there, keep the `api.py` file name if you want to easily building the app later.

`public/`: all frontend related files

`public/assets/js/python.js`: is responsible to communicate between our frontend and backend.

`public/assets/js/main.js`: electron main window

##### Preview your Application :

run this command to preview your app

```shell
npm run electron-dev
```



## Deploying / Publishing

##### Building Python :

before we building our app we have to build our Python FastAPI to .exe file ( windows ) or other executable format for each OS using PyInstaller and then call our Python Fast api as a child process inside electron js.

run this command to build python using `PyInstaller` library

please adjust the `api.spec` if you want to modify the build process or icon, please refer to the [PyInstaller documentation](https://pyinstaller.readthedocs.io/en/stable/spec-files.html)

```shell
npm run py-build
```

also if you are not using Windows change this code inside `public/assets/js/main.js` to another OS executable format ( not tested )

```javascript
const  API_PROD_PATH = path.join(process.resourcesPath, "../lib/api/api.exe")
```
##### Build the application :

after we build our fast API it's time to build our main APP, run this command to build it

```shell
npm run electron-build
```

our app are published to this path `dist`
if you want to change the build options modify this config file `electron-builder.config.json` more about the options please check [electron-builder](https://www.electron.build/) documentation



## All Related Links for this project

###### Server / Backend API ( Python )

[Python Fast API](https://fastapi.tiangolo.com/) = main module that create our API application
[uvicorn](https://www.uvicorn.org/) = Main module that create local server

###### Middleware (Javascript)

[Axios JS](https://axios-http.com/docs/intro) = module to communicate beetwen Python and Frontend

###### Frontend ( HTML, CSS, Javascript )

[Electron JS](https://www.electronjs.org/) = main module that create standalone application
[Tabler](https://tabler.io/) = Front end UI Kit / Framework

###### Utility

[Electron Builder](electron.build/) = module to package our Electron APP
[Electron Reloader](https://www.npmjs.com/package/electron-reloader) = to automatic reload our Electron APP when in development stage
[Python Shell](https://github.com/extrabacon/python-shell) = to create Python shell inside Node.js Application



## [Licensing](https://github.com/gnoviawan/fast-api-electron-js/blob/main/LICENSE.md)

