const dataService = require("../service/datas");

class Data {

  async getSum(req, res) {        
    const sum = await dataService.getSum(1, 2);
    res.send(`<h2> Sum: ${sum} </h2>`)
  }

  async getSubstraction(req, res) {
    const substraction = await dataService.getSubstraction(7, 2);
    res.send(`<h2> Substraction: ${substraction} </h2>`)
  }
  
}

module.exports = new Data();