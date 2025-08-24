// test.js - Simple test suite

const lorem = require('./index.js');

function test(description, fn) {
  try {
    fn();
    console.log(`✅ ${description}`);
  } catch (error) {
    console.log(`❌ ${description}: ${error.message}`);
    process.exit(1);
  }
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

console.log('Running tests for flex-lorem...\n');

// Test words function
test('words() generates default 10 words', () => {
  const result = lorem.words();
  const wordCount = result.split(' ').length;
  assert(wordCount === 10, `Expected 10 words, got ${wordCount}`);
  assert(result.startsWith('Lorem ipsum'), 'Should start with "Lorem ipsum"');
  assert(result.endsWith('.'), 'Should end with a period');
});

test('words(5) generates 5 words', () => {
  const result = lorem.words(5);
  const wordCount = result.split(' ').length;
  assert(wordCount === 5, `Expected 5 words, got ${wordCount}`);
});

test('words(3, false) does not start with Lorem ipsum', () => {
  const result = lorem.words(3, false);
  assert(
    !result.startsWith('Lorem ipsum'),
    'Should not start with "Lorem ipsum"'
  );
  assert(
    result.charAt(0) === result.charAt(0).toUpperCase(),
    'Should start with capital letter'
  );
});

// Test characters function
test('characters(50) generates approximately 50 characters', () => {
  const result = lorem.characters(50);
  assert(
    result.length <= 60 && result.length >= 40,
    `Expected ~50 characters, got ${result.length}`
  );
});

test('characters() throws error for invalid input', () => {
  try {
    lorem.characters('invalid');
    assert(false, 'Should throw error for invalid input');
  } catch (error) {
    assert(
      error.message.includes('Character count must be a positive number'),
      'Correct error message'
    );
  }
});

// Test paragraphs function
test('paragraphs() generates 1 paragraph by default', () => {
  const result = lorem.paragraphs();
  assert(typeof result === 'string', 'Should return string');
  assert(result.length > 0, 'Should not be empty');
});

test('paragraphs(3) generates 3 paragraphs', () => {
  const result = lorem.paragraphs(3);
  const paragraphCount = result.split('\n\n').length;
  assert(paragraphCount === 3, `Expected 3 paragraphs, got ${paragraphCount}`);
});

// Test sentence function
test('sentence() generates a sentence', () => {
  const result = lorem.sentence();
  assert(result.endsWith('.'), 'Should end with a period');
  assert(
    result.charAt(0) === result.charAt(0).toUpperCase(),
    'Should start with capital letter'
  );
});

test('sentence(8) generates sentence with 8 words', () => {
  const result = lorem.sentence(8);
  const wordCount = result.replace(/\.$/, '').split(' ').length;
  assert(wordCount === 8, `Expected 8 words, got ${wordCount}`);
});

// Test list function
test('list() generates array of 5 items by default', () => {
  const result = lorem.list();
  assert(Array.isArray(result), 'Should return array');
  assert(result.length === 5, `Expected 5 items, got ${result.length}`);
  assert(typeof result[0] === 'string', 'Items should be strings');
});

test('list(3, "numbered") generates numbered list', () => {
  const result = lorem.list(3, 'numbered');
  assert(typeof result === 'string', 'Should return string');
  assert(result.includes('1.'), 'Should contain numbered items');
  assert(result.includes('2.'), 'Should contain numbered items');
  assert(result.includes('3.'), 'Should contain numbered items');
});

test('list(3, "bulleted") generates bulleted list', () => {
  const result = lorem.list(3, 'bulleted');
  assert(typeof result === 'string', 'Should return string');
  assert(result.includes('•'), 'Should contain bullet points');
});

// Test aliases
test('Short aliases work correctly', () => {
  assert(typeof lorem.w === 'function', 'w alias should exist');
  assert(typeof lorem.c === 'function', 'c alias should exist');
  assert(typeof lorem.p === 'function', 'p alias should exist');
  assert(typeof lorem.s === 'function', 's alias should exist');
  assert(typeof lorem.l === 'function', 'l alias should exist');

  const wordsResult = lorem.w(5);
  assert(wordsResult.split(' ').length === 5, 'w alias should work like words');
});

// Test error handling
test('Error handling for invalid inputs', () => {
  try {
    lorem.words(-1);
    assert(false, 'Should throw error for negative word count');
  } catch (error) {
    assert(error.message.includes('positive number'), 'Correct error message');
  }
});

console.log('\n🎉 All tests passed!');
console.log('\nExample outputs:');
console.log('\nwords(8):', lorem.words(8));
console.log('\ncharacters(80):', lorem.characters(80));
console.log('\nsentence():', lorem.sentence());
console.log('\nlist(3, "bulleted"):');
console.log(lorem.list(3, 'bulleted'));
console.log('\nparagraphs(2):');
console.log(lorem.paragraphs(2));
