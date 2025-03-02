const persone = [
    {nome: `Andrea`, cognome: `Napoletano`, eta: `24`},
    {nome: `Pippo`, cognome: `Franco`, eta: `45`},
    {nome: `Topolino`, cognome: `Eccetera`,  eta: `8`},
    {nome: `Paperino`, cognome: `Pallo`, eta: `4`},
    {nome: `Pluto`, cognome: `Martini`, eta: `80`},
    {nome: `Ernesto`, cognome: `Chevanton`, eta: `27`},
    {nome: `Joao`, cognome: `Consao`, eta: `12`},
    {nome: `Theo`, cognome: `Fenf`, eta: `19`},
]

const guidatori = []
for (let i = 0; i < persone.length; i++) {
    const personeCorrente = persone[i];
    const etaPersone = personeCorrente.eta
    const nomePersone = personeCorrente.nome
    const cognomePersone = personeCorrente.cognome
    let frase
    if (etaPersone >= 18 ) {
        frase = `Il signor ${nomePersone} ${cognomePersone}, avendo l'eta di ${etaPersone} anni e abilitato a guidare`
    } else {
        frase = `Avendo solo ${etaPersone} anni, ${nomePersone} ${cognomePersone} non e abilitato alla guida`
    }
    guidatori.push(frase)
}

console.log(guidatori);
