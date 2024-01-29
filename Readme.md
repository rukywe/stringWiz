# StringWiz

StringWiz is a powerful and easy-to-use JavaScript library for efficient string manipulation. It offers a wide range of functions to handle common string operations, making it an ideal choice for developers working on JavaScript projects that require extensive string handling.

## Features

- Wide range of string manipulation functions.
- Easy integration into any JavaScript project.
- Optimized for performance.

## Installation

```bash
npm install stringwiz
```

## Usage

Here's a quick example of how to use StringWiz:

```javascript
import { reverseString } from 'stringwiz';

const reversed = reverseString('Hello World');
console.log(reversed); // Outputs: dlroW olleH
```

## API Reference

Below are some of the key functions available in StringWiz:

### `reverseString(str: string): string`

Reverses the given string.

```javascript
reverseString('Hello World'); // 'dlroW olleH'
```

### `capitalizeWords(str: string): string`

Capitalizes the first letter of each word in a string.

```javascript
capitalizeWords('hello world'); // 'Hello World'
```

### `generateAcronym(str: string): string`

Generates an acronym from the given string.

```javascript
generateAcronym('For your information'); // 'FYI'
```

### `toConstantCase(str: string): string`

Converts a string to constant case.

```javascript
toConstantCase('Hello World'); // 'HELLO_WORLD'
```

### `toDotCase(str: string): string`

Converts a string to dot case.

```javascript
toDotCase('Hello World'); // 'hello.world'
```

### `toPascalCase(str: string): string`

Converts a string to Pascal case.

```javascript
toPascalCase('hello world'); // 'HelloWorld'
```

### `toSnakeCase(str: string): string`

Converts a string to snake case.

```javascript
toSnakeCase('Hello World'); // 'hello_world'
```

### `isPalindrome(str: string): boolean`

Checks if a string is a palindrome.

```javascript
isPalindrome('racecar'); // true
isPalindrome('hello'); // false
```

### `truncateMiddle(str: string, maxLength: number, separator: string = '...'): string`

Truncates a string in the middle to a specified length.

```javascript
truncateMiddle('Hello World', 7); // 'He...ld'
```

### `toHeaderCase(str: string): string`

Converts a string to HTTP header case.

```javascript
toHeaderCase('content type'); // 'Content-Type'
```

### `replaceAllOccurrences(str: string, search: string, replacement: string): string`

Replaces all occurrences of a substring within a string.

```javascript
replaceAllOccurrences('Hello World', 'o', 'a'); // 'Hella Warld'
```

### `countWords(str: string): number`

Counts the number of words in a string.

```javascript
countWords('Hello World'); // 2
```
