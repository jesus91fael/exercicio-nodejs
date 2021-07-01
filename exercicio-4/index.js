//04 - Crie uma api que receba o objeto abaixo, retorne a propriedade last_name e retorne o tamanho do objeto
//{
//    name: "Fulano",
//    last_name: "Ciclano",
//    birthday: "01/01/1990",
//    age: 30,
//    department: "Software Engineering"
// }
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.post('/', function (req, res) {
    last_name = req.body.last_name;
    const valor = last_name.length;
    res.send({
        "last_name": last_name,
        "total": valor
    });


});



app.listen(3000, function () {
    console.log('Server is running!')
});