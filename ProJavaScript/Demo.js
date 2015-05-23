function displayInfo(args)
{
	var output = "";

	if (typeof args.name == "string"){
		output += "Name: " + args.name + "\n";
	}

	if (typeof args.age == "number"){
		output += "Age: " + args.age + "\n";
	}

	return output;
}

function demo1() {
	alert(displayInfo({
		name: "Huangjueming",
		age: 32
	}));

	alert(displayInfo({
			name: "Matianying",
		}));
}

