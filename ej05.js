let obj = require("./ej05modulo.js")

todosPaises = obj.paises.a.concat(obj.paises.b, obj.paises.c)

console.log(`Los paises favoritos de ${obj.nombre} son: `)

for (let i = 0; i < obj.favoritos.length; i++) {
    console.log(`${i + 1}: ${todosPaises[parseInt(obj.favoritos[i])]}`)
}