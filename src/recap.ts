const myName = 'Jair';
const myAge = 35;
const suma = (a: number, b: number) => {
  return a + b;
};
suma(35, 33);

class Persona {
  constructor(private age: number, private name: string) {}

  getSummary() {
    return `my name is ${this.name}, ${this.age}`;
  }
}

const jair = new Persona(35, 'jair');
jair.getSummary();
