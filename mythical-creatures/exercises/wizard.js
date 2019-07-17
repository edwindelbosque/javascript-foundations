class Wizard {
	constructor(object) {
		this.name = object.name;
		this.bearded = object.bearded;
		this.bearded = this.bearded === undefined;
		this.isRested = true;
		this.count = 0
	}

	incantation(magic) {
		return magic.toUpperCase();
	}

	cast() {
		this.count++;
		if (this.count < 3) {
			return "MAGIC BULLET";
		} else {
			this.isRested = false;
			return "I SHALL NOT CAST!";
		}
	}
};

module.exports = Wizard