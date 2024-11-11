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
