// index.js - Main module file

/**
 * Lorem Ipsum Generator
 * A flexible utility for generating placeholder text
 */

// Standard Lorem Ipsum words
const LOREM_WORDS = [
  'lorem',
  'ipsum',
  'dolor',
  'sit',
  'amet',
  'consectetur',
  'adipiscing',
  'elit',
  'sed',
  'do',
  'eiusmod',
  'tempor',
  'incididunt',
  'ut',
  'labore',
  'et',
  'dolore',
  'magna',
  'aliqua',
  'enim',
  'ad',
  'minim',
  'veniam',
  'quis',
  'nostrud',
  'exercitation',
  'ullamco',
  'laboris',
  'nisi',
  'aliquip',
  'ex',
  'ea',
  'commodo',
  'consequat',
  'duis',
  'aute',
  'irure',
  'in',
  'reprehenderit',
  'voluptate',
  'velit',
  'esse',
  'cillum',
  'fugiat',
  'nulla',
  'pariatur',
  'excepteur',
  'sint',
  'occaecat',
  'cupidatat',
  'non',
  'proident',
  'sunt',
  'culpa',
  'qui',
  'officia',
  'deserunt',
  'mollit',
  'anim',
  'id',
  'est',
  'laborum',
  'at',
  'vero',
  'eos',
  'accusamus',
  'accusantium',
  'doloremque',
  'laudantium',
  'totam',
  'rem',
  'aperiam',
  'eaque',
  'ipsa',
  'quae',
  'ab',
  'illo',
  'inventore',
  'veritatis',
  'et',
  'quasi',
  'architecto',
  'beatae',
  'vitae',
  'dicta',
  'sunt',
  'explicabo',
  'nemo',
  'ipsam',
  'quia',
  'voluptas',
  'aspernatur',
  'aut',
  'odit',
  'fugit',
  'sed',
  'quia',
  'consequuntur',
  'magni',
  'dolores',
  'ratione',
  'sequi',
  'nesciunt',
  'neque',
  'porro',
  'quisquam',
  'dolorem',
  'adipisci',
  'numquam',
  'eius',
  'modi',
  'tempora',
  'incidunt',
  'magnam',
  'quaerat',
  'voluptatem',
];

/**
 * Generate Lorem Ipsum text by word count
 * @param {number} wordCount - Number of words to generate (default: 10)
 * @param {boolean} startWithLorem - Whether to start with "Lorem ipsum" (default: true)
 * @returns {string} Generated Lorem Ipsum text
 */
function words(wordCount = 10, startWithLorem = true) {
  if (typeof wordCount !== 'number' || wordCount < 1) {
    throw new Error('Word count must be a positive number');
  }

  const result = [];

  // Add "Lorem ipsum" at the beginning if requested and wordCount >= 2
  if (startWithLorem && wordCount >= 2) {
    result.push('Lorem', 'ipsum');
    wordCount -= 2;
  } else if (startWithLorem && wordCount === 1) {
    result.push('Lorem');
    wordCount -= 1;
  }

  // Fill remaining words
  for (let i = 0; i < wordCount; i++) {
    const randomIndex = Math.floor(Math.random() * LOREM_WORDS.length);
    result.push(LOREM_WORDS[randomIndex]);
  }

  // Capitalize first letter and add period at the end
  if (result.length > 0) {
    result[0] = result[0].charAt(0).toUpperCase() + result[0].slice(1);
  }

  return result.join(' ') + '.';
}

/**
 * Generate Lorem Ipsum text by character count (approximate)
 * @param {number} charCount - Approximate number of characters to generate
 * @param {boolean} startWithLorem - Whether to start with "Lorem ipsum" (default: true)
 * @returns {string} Generated Lorem Ipsum text
 */
function characters(charCount, startWithLorem = true) {
  if (typeof charCount !== 'number' || charCount < 1) {
    throw new Error('Character count must be a positive number');
  }

  // Estimate words needed (average 5.1 characters per word including spaces)
  const estimatedWords = Math.ceil(charCount / 5.1);
  let text = words(estimatedWords, startWithLorem);

  // Trim to approximate character count if too long
  if (text.length > charCount) {
    text = text.substring(0, charCount);
    // Try to end at a word boundary
    const lastSpaceIndex = text.lastIndexOf(' ');
    if (lastSpaceIndex > charCount * 0.8) {
      text = text.substring(0, lastSpaceIndex);
    }
    // Add period if it doesn't end with punctuation
    if (!/[.!?]$/.test(text.trim())) {
      text = text.trim() + '.';
    }
  }

  return text;
}

/**
 * Generate Lorem Ipsum paragraphs
 * @param {number} paragraphCount - Number of paragraphs to generate (default: 1)
 * @param {number} sentencesPerParagraph - Sentences per paragraph (default: 3-6 random)
 * @param {boolean} startWithLorem - Whether to start with "Lorem ipsum" (default: true)
 * @returns {string} Generated Lorem Ipsum paragraphs
 */
function paragraphs(
  paragraphCount = 1,
  sentencesPerParagraph = null,
  startWithLorem = true
) {
  if (typeof paragraphCount !== 'number' || paragraphCount < 1) {
    throw new Error('Paragraph count must be a positive number');
  }

  const result = [];

  for (let p = 0; p < paragraphCount; p++) {
    const sentences = [];
    const numSentences =
      sentencesPerParagraph || Math.floor(Math.random() * 4) + 3; // 3-6 sentences

    for (let s = 0; s < numSentences; s++) {
      const wordsInSentence = Math.floor(Math.random() * 15) + 8; // 8-22 words per sentence
      const shouldStartWithLorem = startWithLorem && p === 0 && s === 0;

      let sentence = words(wordsInSentence, shouldStartWithLorem);
      // Remove the period that words() adds, we'll add our own
      sentence = sentence.replace(/\.$/, '');

      sentences.push(sentence);
    }

    result.push(sentences.join('. ') + '.');
  }

  return result.join('\n\n');
}

/**
 * Generate a single Lorem Ipsum sentence
 * @param {number} wordCount - Number of words in the sentence (default: random 8-20)
 * @param {boolean} startWithLorem - Whether to start with "Lorem ipsum" (default: true)
 * @returns {string} Generated Lorem Ipsum sentence
 */
function sentence(wordCount = null, startWithLorem = true) {
  const actualWordCount = wordCount || Math.floor(Math.random() * 13) + 8; // 8-20 words
  return words(actualWordCount, startWithLorem);
}

/**
 * Generate Lorem Ipsum list items
 * @param {number} itemCount - Number of list items to generate (default: 5)
 * @param {string} format - Format: 'array', 'numbered', or 'bulleted' (default: 'array')
 * @returns {string|Array} Generated list items
 */
function list(itemCount = 5, format = 'array') {
  if (typeof itemCount !== 'number' || itemCount < 1) {
    throw new Error('Item count must be a positive number');
  }

  const items = [];
  for (let i = 0; i < itemCount; i++) {
    const wordsInItem = Math.floor(Math.random() * 8) + 3; // 3-10 words per item
    let item = words(wordsInItem, false);
    // Remove period for list items
    item = item.replace(/\.$/, '');
    items.push(item);
  }

  switch (format.toLowerCase()) {
    case 'numbered':
      return items.map((item, index) => `${index + 1}. ${item}`).join('\n');
    case 'bulleted':
      return items.map((item) => `• ${item}`).join('\n');
    case 'array':
    default:
      return items;
  }
}

// Export all functions
module.exports = {
  words,
  characters,
  paragraphs,
  sentence,
  list,
  // Aliases for convenience
  w: words,
  c: characters,
  p: paragraphs,
  s: sentence,
  l: list,
};

// For ES6 imports
module.exports.default = module.exports;
