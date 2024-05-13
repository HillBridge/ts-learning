function getInputSomething(): string {
  return "1341534";
}

function loadFromDatabase(id: number) {
  // if(isNaN(id)) return
  return {
    id,
    name: "张三",
    age: 25,
  };
}

const str: string = getInputSomething();
const id: number = parseInt(str);

const { name, age } = loadFromDatabase(id);
console.log(name, age);
