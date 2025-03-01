const automobili = [
    {
        marca: `Alfa Romeo`,
        modello: `Giulietta`,
        alimentazione: `benzina`,
    },
    {
        marca: `Volkswagen`,
        modello: `Golf`,
        alimentazione: `diesel`,
    }, 
    {
        marca: `Fiat`,
        modello: `Punto`,
        alimentazione: `gpl`,
    },
    {
        marca: `Mercedes`,
        modello: `AMG`,
        alimentazione: `benzina`,
    },
    {
        marca: `Fiat`,
        modello: `Panda`,
        alimentazione: `metano`,
    },
    {
        marca: `Fiat`,
        modello: `Tipo`,
        alimentazione: `gpl`,
    },
    {
        marca: `Alfa Romeo`,
        modello: `Stelvio`,
        alimentazione: `diesel`,
    },
    {
        marca: `Subaru`,
        modello: `Baracca`,
        alimentazione: `diesel`,
    },
    {
        marca: `Skoda`,
        modello: `Yeti`,
        alimentazione: `benzina`,
    },
    {
        marca: `Citroen`,
        modello: `C3`,
        alimentazione: `benzina`,
    }
]


const autoBenzina = [];
const autoDiesel = [];
const autoRestanti = [];

for (let i = 0; i < automobili.length; i++) {
    const autoCorrente = automobili[i];
    const alimentazioneAuto = autoCorrente.alimentazione;
    if (alimentazioneAuto === `benzina`) {
        autoBenzina.push(autoCorrente)
    } else if (alimentazioneAuto === `diesel`) {
        autoDiesel.push(autoCorrente)
    } else {
        autoRestanti.push(autoCorrente)
    }
}

console.log(autoBenzina, autoDiesel, autoRestanti);
