class Centaur {
	constructor(name, palomino) {
		this.breed = "Palomino";
		this.count = 0
		this.cranky = false;
		this.layingDown = false;
		this.name = name;
		this.standing = true;
		this.rested = false;
	}

	shoot() {
		this.count++;
		this.cranky = this.count >= 3;
			//return "Twang!!!";
		return this.cranky || this.layingDown ? "NO!" : "Twang!!!"
	}

	run() {
		this.count++;
		this.cranky = this.count >= 3;
		return this.layingDown ? "NO!" : "Clop clop clop clop!!!"
}

	sleep() {
		if(this.layingDown) {
			this.cranky = false;
			this.count = 0;
		}
		// if (this.standing = true) {
		// 	return "NO!";
		return this.layingDown ? "ZZZZ" : "NO!";
	}

	layDown() {
		this.standing = false;
		this.layingDown = true;
		this.cranky = false;
	}

	standUp() {
		this.standing = true;
		this.layingDown = false;
	}

	drinkPotion() {
		if (this.standing && this.cranky == false) {
			this.cranky = false;
			this.rested = true;
		}
		if (this.rested) {
			this.cranky = true;
		}
		return "Not while I\'m laying down!";
	}
}

module.exports = Centaur