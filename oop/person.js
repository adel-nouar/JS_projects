class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.likes = likes;
    }
    getBio() {
        let bio = `${ this.firstName } is ${ this.age }.`;
        this.likes.forEach((like) => {
            bio = bio + `${ this.firstName } likes ${ like }.`;
        });
        return bio;
    }
    setName(fullName) {
        this.firstName = fullName.split(' ')[0];
        this.lastName = fullName.split(' ')[1];
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes ){
        super(firstName, lastName, age, likes );
        this.position = position;
    }
    getBio() {
        return `${this.firstName} ${this.lastName} is a ${this.position}`;
    }
    getYearsLeft() {
        return 65 - this.age;
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes);
        this.grade = grade;
    }
    updateGrade(change) {
        this.grade += change;
    }
    getBio() {
        const status = this.grade >= 70 ? 'passing' : 'failing';
        return `${this.firstName} is ${status} the class.`
    }
}

const me = new Student('first', 'last', 27, 88, []);
me.updateGrade(20);
console.log(me.getBio());