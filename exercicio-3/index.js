//Crie uma api que utilizando 
//o método POST que receba o salário bruto e retorne o salário líquido

const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.post('/', function (req, res) {
    const salarioBruto = req.body.salario;
    const liquid = (sal) => {
        sal -= sal * 0.1
        return sal.toFixed(2)
    }
    res.send({
        "salarioLiquido": liquid(salarioBruto),     
    });


});



app.listen(3000, function () {
    console.log('Server is running!')
});
