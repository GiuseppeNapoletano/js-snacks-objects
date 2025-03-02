const nomi = [`pippo`, `PLUTO`, `pAPERINO`, `tOpOlInO`];
const nomiFixed = []

for (let i = 0; i < nomi.length; i++) {
    const parole = nomi[i];
    const finale = reset(parole)
    nomiFixed.push(finale)
}

console.log(nomiFixed);




function reset(parolaDaResettare) {
    const primaLettera = parolaDaResettare.charAt(0)
    const lettereRimanenti = parolaDaResettare.substring(1)
    const primaLetteraMaiuscola = primaLettera.toUpperCase()
    const lettereRimanentiMinuscole = lettereRimanenti.toLowerCase()
    
   
    let result = primaLetteraMaiuscola + lettereRimanentiMinuscole
    return result
}
