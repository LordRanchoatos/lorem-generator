# flex-lorem

A flexible Lorem Ipsum generator for developers. Generate placeholder text by words, characters, paragraphs, or lists with simple, intuitive functions.

## Installation

```bash
npm install flex-lorem
```

## Usage

### Basic Usage

```javascript
const lorem = require('flex-lorem');

// Generate 10 words (default)
console.log(lorem.words());
// "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do."

// Generate 5 words
console.log(lorem.words(5));
// "Lorem ipsum dolor sit amet."

// Generate 50 characters (approximate)
console.log(lorem.characters(50));
// "Lorem ipsum dolor sit amet consectetur."
```

### ES6 Imports

```javascript
import lorem from 'flex-lorem';
// or
import { words, characters, paragraphs } from 'flex-lorem';

console.log(words(8));
console.log(characters(100));
```

## API Reference

### `words(count, startWithLorem)`
Generate text by word count.

- `count` (number, default: 10) - Number of words to generate
- `startWithLorem` (boolean, default: true) - Whether to start with "Lorem ipsum"

```javascript
lorem.words(15);
lorem.words(20, false); // Don't start with "Lorem ipsum"
```

### `characters(count, startWithLorem)`
Generate text by approximate character count.

- `count` (number, required) - Approximate number of characters
- `startWithLorem` (boolean, default: true) - Whether to start with "Lorem ipsum"

```javascript
lorem.characters(100);
lorem.characters(200, false);
```

### `paragraphs(count, sentencesPerParagraph, startWithLorem)`
Generate multiple paragraphs.

- `count` (number, default: 1) - Number of paragraphs
- `sentencesPerParagraph` (number, default: random 3-6) - Sentences per paragraph
- `startWithLorem` (boolean, default: true) - Whether to start with "Lorem ipsum"

```javascript
lorem.paragraphs(3);
lorem.paragraphs(2, 4); // 2 paragraphs, 4 sentences each
lorem.paragraphs(3, 5, false);
```

### `sentence(wordCount, startWithLorem)`
Generate a single sentence.

- `wordCount` (number, default: random 8-20) - Number of words in the sentence
- `startWithLorem` (boolean, default: true) - Whether to start with "Lorem ipsum"

```javascript
lorem.sentence();
lorem.sentence(12);
lorem.sentence(15, false);
```

### `list(itemCount, format)`
Generate list items.

- `itemCount` (number, default: 5) - Number of list items
- `format` (string, default: 'array') - Format: 'array', 'numbered', or 'bulleted'

```javascript
lorem.list(3);                    // Returns array: ['Lorem ipsum dolor', 'sit amet consectetur', 'adipiscing elit sed']
lorem.list(3, 'numbered');        // Returns string: "1. Lorem ipsum dolor\n2. sit amet consectetur\n3. adipiscing elit sed"
lorem.list(3, 'bulleted');        // Returns string: "• Lorem ipsum dolor\n• sit amet consectetur\n• adipiscing elit sed"
```

## Short Aliases

For convenience, short aliases are available:

```javascript
lorem.w(10);        // same as lorem.words(10)
lorem.c(100);       // same as lorem.characters(100)
lorem.p(2);         // same as lorem.paragraphs(2)
lorem.s();          // same as lorem.sentence()
lorem.l(5);         // same as lorem.list(5)
```

## Common Use Cases

### React Components

```jsx
import { words, paragraphs } from 'flex-lorem';

function BlogPost() {
  return (
    <div>
      <h1>{words(4, false)}</h1>
      <p>{paragraphs(3)}</p>
    </div>
  );
}
```

### Testing

```javascript
const lorem = require('flex-lorem');

// Generate test data
const testUser = {
  name: lorem.words(2, false),
  bio: lorem.characters(150),
  posts: Array.from({length: 5}, () => ({
    title: lorem.words(6, false),
    content: lorem.paragraphs(2)
  }))
};
```

### Form Placeholders

```html
<input type="text" placeholder="<%= lorem.words(3, false) %>">
<textarea placeholder="<%= lorem.sentence(12, false) %>"></textarea>
```

### API Responses

```javascript
// Generate mock API response
const mockPosts = Array.from({length: 10}, (_, i) => ({
  id: i + 1,
  title: lorem.words(5, false),
  excerpt: lorem.sentence(15, false),
  content: lorem.paragraphs(3),
  tags: lorem.list(3, 'array')
}));
```

## Features

- 🎯 **Flexible**: Generate by words, characters, paragraphs, sentences, or lists
- 📦 **Zero dependencies**: Lightweight and fast
- 🔧 **TypeScript support**: Full TypeScript definitions included
- 🚀 **Easy to use**: Simple API with sensible defaults
- 🔀 **Randomized**: Different output each time
- 📝 **Proper formatting**: Capitalization and punctuation handled automatically

## License

MIT License - see LICENSE file for details.

## Contributing

Contributions welcome! Please feel free to submit a Pull Request.