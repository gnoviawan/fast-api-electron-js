![Electron JS Python Fast API](https://raw.githubusercontent.com/gnoviawan/fast-api-electron-js/main/public/assets/media/logo/electron-fastapi.png?token=ARKGJ22WCRI52GIWXEUV44TAZRIME)

# Electron JS x Python Fast API
> Modern web UI x Python FAST API



## Installing / Getting started

clone this git

```shell
git clone https://github.com/gnoviawan/fast-api-electron-js.git
```

### Initial Configuration
change directory to cloned git

    cd fast-api-electron-js

install all python dependencies

    npm run py-install

install all node js dependencies

    npm install

## Developing

Fast API Direcotry Path `engine/` , you can create/modify all python module/api there

Electron JS ( Frontend ) Path `public/`, all frontend related files are in this folder

`public/assets/js/public.js` is responsible to communicate between our frontend and backend.

run this command to preview your app

    npm run electron-dev

### Building

before we building our app we have to build our Python FastAPI to .exe file ( windows ) or other executable format for each OS using PyInstaller and then call our Python Fast api as child process inside electron js.

run this command to build python and open `auto-py-to-exe` GUI

    npm run py-build

after `auto-py-to-exe` open, click `Convert .PY to .EXE`

if you are not in Windows change this code inside `public/assets/js/main.js`

    const  API_PROD_PATH = path.join(process.resourcesPath, "../lib/api/api.exe")
to another OS executable format ( not tested, and will update `auto-py-to-exe` to `PyInstaller` later

### Deploying / Publishing

after you build your fast API it's time to build our main APP, run this command to build it

    npm run electron-build

our app are published on this path `dist`
if you want to change the build options modify this config file `electron-builder.config.json` more about the options please check [electron-builder](https://www.electron.build/) documentation
## Features

 1. Python Backend - do as you wish with python, do AI / ML / etc and send those data to modern web UI
 2. Cross Platform APP using web UI
 

## Configuration





## Contributing



## All Related Links for this project

Server / Backend API ( Python )
[Python Fast API](https://fastapi.tiangolo.com/) = main module that create our API application
[uvicorn](https://www.uvicorn.org/) = Main module that create local server

Middleware (Javascript)
[Axios JS](https://axios-http.com/docs/intro) = module to communicate beetwen Python and Frontend

Frontend ( HTML, CSS, Javascript )
[Electron JS](https://www.electronjs.org/) = main module that create standalone application
[Tabler](https://tabler.io/) = Front end UI Kit / Framework

Utility
[Electron Builder](electron.build/) = module to package our Electron APP
[Electron Reloader](https://www.npmjs.com/package/electron-reloader) = to automatic reload our Electron APP when in development stage
[Python Shell](https://github.com/extrabacon/python-shell) = to create Python shell inside Node.js Application

## Licensing


MIT License

Copyright (c) 2021 Ginanjar Noviawan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
