const dataService = require("../service/datas");

class Data {

  async getSum(req, res) {        
    const sum = await dataService.getSum(1, 2);
    res.send(`<h2> Sum: ${sum} </h2>`)
  }

  async showMessage(req, res) {    
    res.send(`<h2> Message1</h2>`)
  }
  
}

module.exports = new Data();