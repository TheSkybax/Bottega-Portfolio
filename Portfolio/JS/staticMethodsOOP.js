class Instructor {
    constructor({ name, role = "assistant" }) {
      this.role = role;
      this.name = name;
    }
  
    // Instance method
    renderDetails() {
      console.log(`${this.name} - ${this.role}`);
    }
  
    // Base case static method
    static helloWorld() {
        console.log("Hi there");
    }

    // Static method
    static canTeach(instructor) {
        return (instructor.role === 'classroom');
    }
}

Instructor.helloWorld();

let jon = new Instructor({ 'name': 'Jon' });
jon.renderDetails();
console.log(
    `${jon.name} can teach: ${Instructor.canTeach(jon)}`
);

let alice = new Instructor({ 'name': 'Alice', 'role': 'classroom' });
alice.renderDetails();
console.log(
    `${alice.name} can teach: ${Instructor.canTeach(alice)}`
);