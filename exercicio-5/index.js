const fs = require('fs')

const valor = 'Aprendendo JS';
fs.writeFile('arquivo.txt', valor, (err) => {
  if(err) throw err;
  console.log('O arquivo foi criado!')
})