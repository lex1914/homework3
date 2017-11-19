;
function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev) {
	ev.dataTransfer.setData("imag", ev.target.id);
}

function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("imag");
	ev.target.appendChild(document.getElementById(data));
}

// Simple statement

var myString = '"Hello World!"';
var num = 142;
var myBool = true;
var myNull = null;
var myUndefined = undefined;

console.log('varible Str:', myString,'|', 'type data:', typeof myString);
console.log('varible Num:', num, '|', 'type data:', typeof num);
console.log('varible Null:', myNull, '|', 'type data:', typeof myNull);
console.log('varible Bool:', myBool, '|', 'type data:', typeof myBool);
console.log('varible Undef:', myUndefined, '|', 'type data:', typeof myUndefined);

// Оbject type

var obj = {name: "Alex", volume: 100};
Myarray = [1, 2, 3];
regexp = /w+/g;
func = function(){};
console.log(obj);
console.log(Myarray);

console.log('######################################################');
console.log(typeof(obj));
console.log(typeof(Myarray));
console.log(typeof(regexp));
console.log(typeof(func));

obj.name = 'Geis';
console.log(obj.name);
Myarray[0] = 'art';
Myarray[2] = 100;
console.log(Myarray);