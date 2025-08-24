// index.d.ts - TypeScript definitions

declare module 'flex-lorem' {
  /**
   * Generate Lorem Ipsum text by word count
   * @param wordCount Number of words to generate (default: 10)
   * @param startWithLorem Whether to start with "Lorem ipsum" (default: true)
   * @returns Generated Lorem Ipsum text
   */
  export function words(wordCount?: number, startWithLorem?: boolean): string;

  /**
   * Generate Lorem Ipsum text by character count (approximate)
   * @param charCount Approximate number of characters to generate
   * @param startWithLorem Whether to start with "Lorem ipsum" (default: true)
   * @returns Generated Lorem Ipsum text
   */
  export function characters(
    charCount: number,
    startWithLorem?: boolean
  ): string;

  /**
   * Generate Lorem Ipsum paragraphs
   * @param paragraphCount Number of paragraphs to generate (default: 1)
   * @param sentencesPerParagraph Sentences per paragraph (default: 3-6 random)
   * @param startWithLorem Whether to start with "Lorem ipsum" (default: true)
   * @returns Generated Lorem Ipsum paragraphs
   */
  export function paragraphs(
    paragraphCount?: number,
    sentencesPerParagraph?: number | null,
    startWithLorem?: boolean
  ): string;

  /**
   * Generate a single Lorem Ipsum sentence
   * @param wordCount Number of words in the sentence (default: random 8-20)
   * @param startWithLorem Whether to start with "Lorem ipsum" (default: true)
   * @returns Generated Lorem Ipsum sentence
   */
  export function sentence(
    wordCount?: number | null,
    startWithLorem?: boolean
  ): string;

  /**
   * Generate Lorem Ipsum list items
   * @param itemCount Number of list items to generate (default: 5)
   * @param format Format: 'array', 'numbered', or 'bulleted' (default: 'array')
   * @returns Generated list items
   */
  export function list(
    itemCount?: number,
    format?: 'array' | 'numbered' | 'bulleted'
  ): string[] | string;

  // Short aliases
  export const w: typeof words;
  export const c: typeof characters;
  export const p: typeof paragraphs;
  export const s: typeof sentence;
  export const l: typeof list;

  // Default export
  const flexLorem: {
    words: typeof words;
    characters: typeof characters;
    paragraphs: typeof paragraphs;
    sentence: typeof sentence;
    list: typeof list;
    w: typeof words;
    c: typeof characters;
    p: typeof paragraphs;
    s: typeof sentence;
    l: typeof list;
  };

  export default flexLorem;
}
