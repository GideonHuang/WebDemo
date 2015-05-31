//program section for demo1()
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

function demo1() 
{
	alert(displayInfo({
		name: "Huangjueming",
		age: 32
	}));

	alert(displayInfo({
			name: "Matianying",
		}));
}

//program section for demo2()
function demo2()
{
	alert(callSomeFunction(add20, 5));

	alert(callSomeFunction(sayHello, "Ma Tianying"));
}

function callSomeFunction(funcName, funcArg)
{
	return funcName(funcArg);
}

function add20(baseNum)
{
	return baseNum + 20;
}

function sayHello(guestName)
{
	return "Good Morning, " + guestName;
}

//program section for demo3()
function demo3()
{
	var data = [{name: "Huangjueming", age: 32}, {name: "Matianying", age: 28}];

	data.sort(createComparisonFunction("age"));
	var firstNameSortByAge = data[0].name;
	alert(firstNameSortByAge);

	data.sort(createComparisonFunction("name"));
	var firstNameSortByName = data[0].name;
	alert(firstNameSortByName);
}

function createComparisonFunction(propertyName) {
	return function(obj1, obj2) {
		return obj1[propertyName] - obj2[propertyName];
	}
}

//program section for demo4()
function demo4()
{
	window.color = "red";

	var obj = {color: "blue"};

	function sayColor()
	{
		alert(this.color);
	}

	sayColor.call(this);
	sayColor.call(window);
	sayColor.call(obj);
}