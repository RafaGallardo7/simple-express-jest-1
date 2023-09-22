const functionService = require("../service/functions");

class Function {

  async getLowestValue(req, res) {        
    const example = [2, 5, 3, 6, 8]
    const value = await functionService.getLowestValue(example);
    res.send(`<h2> Sum: ${value} </h2>`)
  }

  async getSubstraction(req, res) {
    const substraction = await functionService.getSubstraction(7, 2);
    res.send(`<h2> Substraction: ${substraction} </h2>`)
  }
  
}

module.exports = new Function();