const animali = [ 
    { nome: `leone`, famiglia: `felidi`, classe: `mammiferi` }, 
    { nome: `cane`, famiglia: `canidi`, classe: `mammiferi` }, 
    { nome: `gallina`, famiglia: `fasianidi`, classe: `uccelli` }, 
    { nome: `pavone`, famiglia: `fasianidi`, classe: `uccelli` }, 
    { nome: `lupo`, famiglia: `canidi`, classe: `mammiferi`}
  ]
  const mammiferi = []

 for (let i = 0; i < animali.length; i++) {
    const animaleCorrente = animali[i];
    const classeAnimale = animaleCorrente.classe;
    if (classeAnimale === `mammiferi`) {
        mammiferi.push(animaleCorrente)
    }
}

console.log(mammiferi);
