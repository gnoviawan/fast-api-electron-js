const axios = require("axios").default

const base_url = 'http://127.0.0.1:7777/'

const options = {
  headers: {
    'Content-Type': 'application/json'
  }
}

function hello() {
  let endpoint = base_url + "hello/" + inputName.value
  axios.get(endpoint)
    .then(function (res) {
      dataResult.innerHTML = res['data']
    })
}

function readFile() {
  let endpoint = base_url + "read-file/"
  let req_data = {
    path: inputFile.value
  }
  console.log(req_data)
  axios.post(endpoint, req_data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((res) => {
      dataResult.innerHTML = res['data']
    })
    .catch((err) => {
      console.log("ERR:: ", err.response.data)
    })

}

function open_explorer() {
  let path_to_open = inputPath.value
  let endpoint = base_url + "open-explorer/"
  let req_data = {
    path: path_to_open
  }

  axios.post(endpoint, req_data, options)
    .then((res) => {
      dataResult.innerHTML = res['data']
    })
    .catch((err) => {
      console.log("ERR:: ", err.response.data)
    })
}