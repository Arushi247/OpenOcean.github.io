var http = require("http");
var fs = require('fs');


http.createServer(function (request, response) {

   response.writeHead(200, {'Content-Type': 'text/html'});
   var file = fs.createReadStream('index.html');
   file.pipe(response);

}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');


var Web3 = require('web3');

var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
web3.eth.getAccounts(console.log);
var Contract = require('web3-eth-contract');

Contract.setProvider('ws://localhost:8545');

var contract = new Contract(jsonInterface, address);
