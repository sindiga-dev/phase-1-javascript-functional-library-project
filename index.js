const objValues = (collection) => Object.values(collection);

function myEach(collection, callback) {
	objValues(collection).forEach((value) => callback(value));
	return collection;
}

function myMap(collection, callback) {
	const newCol = objValues(collection);
	const newArray = [];
	let val;
	for (val = 0; val < newCol.length; val++) {
		newArray.push(callback(newCol[val]));
	}
	return newArray;
}

function myReduce(collection, callback, acc) {
	let values = Object.values(collection);
	if (!acc) {
		acc = values[0];
		values = values.slice(1);
	}
	let val;
	for (val = 0; val < values.length; val++) {
		acc = callback(acc, values[val]);
	}
	return acc;
}

function myFind(collection, predicate) {
	const newCol = objValues(collection);
	let val;
	for (val = 0; val < newCol.length; val++) {
		if (predicate(newCol[val])) return newCol[val];
	}
	return undefined;
}

function myFilter(collection, predicate) {
	const newCol = objValues(collection);
	const newArray = [];
	let val;
	for (val = 0; val < newCol.length; val++) {
		if (predicate(newCol[val])) newArray.push(newCol[val]);
	}
	return newArray;
}

function mySize(collection) {
	return objValues(collection).length;
}

function myFirst(array, n) {
	let result;
	if (n) {
		result = array.slice(0, n);
	} else {
		result = array[0];
	}
	return result;
}

function myLast(array, n) {
	let result;
	if (n) {
		result = array.slice(array.length - n, array.length);
	} else {
		result = array[array.length - 1];
	}
	return result;
}

//Bonus
function mySortBy(array, callback) {
	const newArray = [...array];
	return newArray.sort((x, y) => {
		callback(x) > callback(y) ? 1 : 0;
		callback(y) > callback(x) ? -1 : 0;
	});
}

function myFlatten(array, [shallow], newArr = []) {}

function myKeys(object) {
	const mykeys = [];
	for (let val in object) {
		mykeys.push(val);
	}
	return mykeys;
}

function myValues(object) {
	const myvalues = [];
	for (let val in object) {
		myvalues.push(object[val]);
	}
	return myvalues;
}