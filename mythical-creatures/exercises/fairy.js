class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = { dresses: ['Iris'] };
    this.disposition = 'Good natured';
    this.humanWards = [];
  }

  receiveBelief() {
    this.dust++;
  }

  believe() {
    this.dust = this.dust + 10;
  }

  makeDresses(dressesArray) {
    this.clothes.dresses = this.clothes.dresses.concat(dressesArray);
  }

  provoke() {
    this.disposition = 'Vengeful';
  }

  replaceInfant(infant) {
    if (this.disposition = 'Vengeful' && this.humanWards.length < 4) {
      infant.disposition = 'Malicious';
      this.humanWards.push(infant);
    }
    this.disposition = 'Good natured';
    return infant;
  }
}

module.exports = Fairy;