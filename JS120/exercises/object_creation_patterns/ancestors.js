// Implement an ancestors method that returns the prototype chain (ancestors) of a calling object as an array of object names.

// name property added to make objects easier to identify
const foo = {name: 'foo'};
foo.ancestors = function () {
  let protoChain = [];
  let currentObj = this;
  while (currentObj !== Object.prototype) {
    protoChain.push(currentObj.name);
    currentObj = Object.getPrototypeOf(currentObj);
  }

  if (currentObj) {
    protoChain.push("Object.prototype");
  }

  return protoChain;
}

const bar = Object.create(foo);
bar.name = 'bar';
const baz = Object.create(bar);
baz.name = 'baz';
const qux = Object.create(baz);
qux.name = 'qux';

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']