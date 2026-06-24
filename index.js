function add(a, b) {
  return a + b;
}

function greet(name) {
  return `Hello, ${name}!`;
}

function main() {
  console.log(greet('World'));
  console.log('2 + 3 =', add(2, 3));
}

if (require.main === module) {
  main();
}

module.exports = { add, greet };
