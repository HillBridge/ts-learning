function getInputSomething() {
    return "1341534";
}
function loadFromDatabase(id) {
    return {
        id: id,
        name: "张三",
        age: 25,
    };
}
var str = getInputSomething();
var id = parseInt(str);
var _a = loadFromDatabase(id), name = _a.name, age = _a.age;
console.log(name, age);
