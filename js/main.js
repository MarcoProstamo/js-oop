class Veicolo {
  constructor(anno, colore, marca) {
    this.anno = anno;
    this.colore = colore;
    this.marca = marca;
  }

  calcolaEta() {
    const dataCorrente = new Date();
    const annoCorrente = dataCorrente.getFullYear();
    return `Il Veicolo ha: ${annoCorrente - this.anno} anni`;
  }

  informazioni() {
    return `Marca: ${this.marca}\nAnno di Immatricolazione: ${this.anno}\nColore: ${this.colore}`;
  }
}

const veicolo = new Veicolo(2019, "Blu", "Fiat");

console.log(veicolo.informazioni());
console.log(veicolo.calcolaEta());

class Automobile extends Veicolo {
  constructor(alimentazione, anno, colore, marca, numeroPorte) {
    super(anno, colore, marca);
    this.alimentazione = alimentazione;
    this.numeroPorte = numeroPorte;
  }
}

const automobile = new Automobile("Benzina", 2020, "Nera", "Opel", 4);

console.log(
  `L'${automobile.marca} è alimentata a ${automobile.alimentazione} e ha ${automobile.numeroPorte} porte`
);
