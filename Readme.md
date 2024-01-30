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

### `obfuscateEmail(email: string): string`

This function obfuscates an email address for privacy (e.g., for display purposes).

```javascript
obfuscateEmail('test@example.com'); // t**t@example.com
```

### `generateAcronym(str: string): string`

Generates an acronym from the given string.

```javascript
generateAcronym('For your information'); // 'FYI'
```

### `maskSensitiveData(str: string, visibleCount: number = 4): string`

Masks all but the last specified number of characters of a string. This function is commonly used for masking sensitive data like API keys or credit card numbers.

```javascript
maskSensitiveData('1234567890123456'); // '************3456'
maskSensitiveData('12345678', 3); // '*****678'
maskSensitiveData('MySecretPassword', 5); // '*********sword'
```

### `truncateMiddle(str: string, maxLength: number, separator: string = '...'): string`

Truncates a string in the middle to a specified length.

```javascript
truncateMiddle('Hello World', 7); // 'He...ld'
```

### `stripHtmlTags(str: string): string`

Removes HTML tags from a string.

```javascript
stripHtmlTags('<p>Hello World</p>'); // 'Hello World'
```

### `formatCurrency(amount: number, currencySymbol: string = '$', decimalPlaces: number = 2): string`

This function formats a numeric amount as a currency string, allowing customization for the currency symbol and the number of decimal places.

```javascript
formatCurrency('1234.56'); // '$1,234.56'
formatCurrency('1234.56', '£'); // '£1,234.56'
```

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

### `snakeToCamelCase(str: string): string`

Converts a string from snake_case to camelCase. It does not alter strings that are already in camelCase.

```javascript
snakeToCamelCase('hello_world'); // 'helloWorld'
snakeToCamelCase('helloWorld'); // 'helloWorld'
```

### `camelToSnakeCase(str: string): string`

Converts a string from camelCase to snake_case. It handles strings that are already in snake_case without further modification.

```javascript
camelToSnakeCase('helloWorld'); // 'hello_world'
camelToSnakeCase('hello_world'); // 'hello_world'
```

## Contributing

Contributions are always welcome! Feel free to fork the repository and submit pull requests.

## Commit Guide

This project uses [`semantic-release`](https://github.com/semantic-release/semantic-release) for automating the versioning and release process. To comply with `semantic-release`, following the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages.

### Committing Changes

I use `commitizen` to help write good commit messages. To commit your changes, please follow these steps:

1. **Stage Changes**:
   Use `git add` to stage changes for commit.

2. **Run Commit Command**:
   Use the `npm run commit` command to start the commit process. This will launch `commitizen`.

3. **Follow Prompts**:
   `commitizen` will prompt you to fill out any required commit fields.

4. **Push Changes**:
   After committing, push your changes to the repository with `npm run acp`.

### Commit Message Format

Each commit message should follow this format: `<type>(<scope>): <subject>`

1. **Type**:
   This indicates the type of change you're making. Common types include:

   - `feat`: A new feature.
   - `fix`: A bug fix.
   - `docs`: Changes to documentation.
   - `test`: Adding or updating tests.
   - `refactor`: Code change that neither fixes a bug nor adds a feature.

2. **Scope** (optional):
   A scope may be provided to a commit’s type, to provide additional contextual information and is contained within parenthesis.

3. **Subject**:
   A brief description of the change.

### Examples

- `feat(Functions): add two new string functions`
- `docs(readme): update installation instructions`

### Mandatory Tests

Before committing, ensure that all tests pass. Tests are mandatory for this package to maintain code quality and stability.
