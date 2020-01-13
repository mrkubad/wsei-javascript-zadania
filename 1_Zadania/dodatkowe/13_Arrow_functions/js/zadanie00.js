let Students = function(array) {
	this.students = array;
	this.numberOfLetters = [];
}
Students.prototype.countLetters = function() { 
	this.numberOfLetters = this.students.map(e=>e.length);
};

let students = new Students(["Ania", "Kamil", "Mariusz"]);
students.countLetters();
console.log(students.numberOfLetters);