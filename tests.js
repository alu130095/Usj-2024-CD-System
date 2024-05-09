
// Test Cases for convertIntegerToRoman
test("TC-1: convertIntegerToRoman(1)", function(assert) {
  assert.propEqual(convertIntegerToRoman(1), {value: "I", message: '', result: true}, "Passes - converts 1 to I");
});

test("TC-2: convertIntegerToRoman(3999)", function(assert) {
  assert.propEqual(convertIntegerToRoman(3999), {value: "MMMCMXCIX", message: '', result: true}, "Passes - converts 3999 to MMMCMXCIX");
});

test("TC-3: convertIntegerToRoman(1954)", function(assert) {
  assert.propEqual(convertIntegerToRoman(1954), {value: "MCMLIV", message: '', result: true}, "Passes - converts 1954 to MCMLIV");
});

test("TC-4: convertIntegerToRoman('X')", function(assert) {
  assert.propEqual(convertIntegerToRoman("X"), {value: 0, message: 'Please enter a valid integer', result: false}, "Fails - input is not an integer");
});

test("TC-5: convertIntegerToRoman(500.5)", function(assert) {
  assert.propEqual(convertIntegerToRoman(500.5), {value: 0, message: 'Please enter a valid integer', result: false}, "Fails - input is a float, not an integer");
});

test("TC-6: convertIntegerToRoman(0)", function(assert) {
  assert.propEqual(convertIntegerToRoman(0), {value: 0, message: 'Out of range (1-3999)', result: false}, "Fails - input is out of range");
});

test("TC-7: convertIntegerToRoman(4000)", function(assert) {
  assert.propEqual(convertIntegerToRoman(4000), {value: 0, message: 'Out of range (1-3999)', result: false}, "Fails - input is out of range");
});

// Test Cases for convertRomanToInteger
test("TC-8: convertRomanToInteger('V')", function(assert) {
  assert.propEqual(convertRomanToInteger("V"), {value: 5, message: '', result: true}, "Passes - converts V to 5");
});

test("TC-9: convertRomanToInteger('MCMXC')", function(assert) {
  assert.propEqual(convertRomanToInteger("MCMXC"), {value: 1990, message: '', result: true}, "Passes - converts MCMXC to 1990");
});

test("TC-10: convertRomanToInteger('I')", function(assert) {
  assert.propEqual(convertRomanToInteger("I"), {value: 1, message: '', result: true}, "Passes - converts I to 1");
});

test("TC-11: convertRomanToInteger('MMMCMXCIX')", function(assert) {
  assert.propEqual(convertRomanToInteger("MMMCMXCIX"), {value: 3999, message: '', result: true}, "Passes - converts MMMCMXCIX to 3999");
});

test("TC-12: convertRomanToInteger('IC')", function(assert) {
  assert.propEqual(convertRomanToInteger("IC"), {value: 0, message: 'Please enter a valid roman', result: false}, "Fails - IC is not a valid Roman numeral");
});

test("TC-13: convertRomanToInteger('')", function(assert) {
  assert.propEqual(convertRomanToInteger(""), {value: 0, message: 'Please enter a valid roman', result: false}, "Fails - Empty string is not a valid Roman numeral");
});

test("TC-14: convertRomanToInteger('ABCD')", function(assert) {
  assert.propEqual(convertRomanToInteger("ABCD"), {value: 0, message: 'Please enter a valid roman', result: false}, "Fails - ABCD contains invalid Roman numeral characters");
});

test("TC-15: convertRomanToInteger('MXD')", function(assert) {
  assert.propEqual(convertRomanToInteger("MXD"), {value: 0, message: 'Please enter a valid roman', result: false}, "Fails - MXD is not a valid Roman numeral");
});
