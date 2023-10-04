const operationService = require("../service/operations");

class Operation {

  async getSum(req, res) {      
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);  

    const sum = await operationService.getSum(num1, num2);
    res.send(`<h2> Sum: ${sum} </h2>`)
  }

  async getSubstraction(req, res) {
    const substraction = await operationService.getSubstraction(7, 2);
    res.send(`<h2> Substraction!=1: ${substraction} </h2>`)
  }
  
}

module.exports = new Operation();