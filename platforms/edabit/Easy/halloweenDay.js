function halloween(dt) {
	let valcheck = new Date("2013/10/31");
    let checkmon = valcheck.getMonth();
    let checkdat = valcheck.getDate();
	if (checkmon == dt.getMonth() && checkdat == dt.getDate()){
			return "Bonfire toffee";
	}	else{
			return "toffee";
	}
}

console.log(halloween(new Date("2013/10/31")));