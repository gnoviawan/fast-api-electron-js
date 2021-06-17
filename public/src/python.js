const axios = require("axios").default
var nodeConsole = require('console');

const base_url = 'http://127.0.0.1:7777/'

async function hello() {
  axios.get(base_url)
    .then(function (res) {
      console.log(res)
    })
}

function open_explorer() {
  let path_to_open = inputPath.value
  axios.get(base_url + "open-explorer/" + path_to_open)
    .then((res) => {
      console.log(res)
    })
}