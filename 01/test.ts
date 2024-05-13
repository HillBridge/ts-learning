function getInputSomething() {
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

let str = getInputSomething();
const id = parseInt(str);

let { name, age } = loadFromDatabase(id);
console.log(name, age);
