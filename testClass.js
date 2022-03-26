function testFunc(kind, name, age) {
    this.kind = kind;
    this.name = name;
    this.age = age;
}

testFunc.prototype.getName = function () {
    return this.name;
}

testFunc.prototype.getKind = function () {
    return this.kind;
}

testFunc.prototype.contructor = testFunc;

module.exports = testFunc;

