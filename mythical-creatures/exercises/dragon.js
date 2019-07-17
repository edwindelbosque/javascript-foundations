class Dragon {
	constructor(name, rider) {
		this.name = name;
		this.rider = rider;
		this.color = "blue";
		this.hungry = true;
		this.count = 0;
	}
	eat() {
		this.count = this.count + 1;

		if (this.count > 2) {
			this.hungry = false;
		}
	}
}

module.exports = Dragon