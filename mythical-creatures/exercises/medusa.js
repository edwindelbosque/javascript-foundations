class Medusa {
	constructor(name) {
		this.name = name;
		this.statues = [];
	}

	stare(victim) {
		if (this.statues.length <= 2) {
			this.statues.push(victim);
			this.statues[0].stoned = true;
		} else if (this.statues.length >= 3) {
			this.statues.shift();
			this.statues.push(victim);
		}
	}
};

module.exports = Medusa