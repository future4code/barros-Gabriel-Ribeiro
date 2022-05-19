```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
const fixo = 2000
let bonus1 = 100 * qtdeCarrosVendidos
let bonus2 = 0,05 * valorTotalVendas
let final = fixo + bonus1 + bonus2
return final
}

```