import {
  toDotCase,
  toConstantCase,
  toSnakeCase,
  toPascalCase,
  snakeToCamelCase,
  camelToSnakeCase
} from '../functions/caseConverters';

describe('Case Converters', () => {
  it('converts to Dot Case', () => {
    expect(toDotCase('hello world')).toBe('hello.world');
  });

  it('converts to Constant Case', () => {
    expect(toConstantCase('hello world')).toBe('HELLO_WORLD');
  });

  it('converts to Snake Case', () => {
    expect(toSnakeCase('hello world')).toBe('hello_world');
  });

  it('converts to Pascal Case', () => {
    expect(toPascalCase('hello world')).toBe('HelloWorld');
  });

  it('converts snake_case to camelCase', () => {
    expect(snakeToCamelCase('hello_world')).toBe('helloWorld');
  });

  it('handles an already camelCase string', () => {
    expect(snakeToCamelCase('helloWorld')).toBe('helloWorld');
  });

  it('converts camelCase to snake_case', () => {
    expect(camelToSnakeCase('helloWorld')).toBe('hello_world');
  });

  it('handles an already snake_case string', () => {
    expect(camelToSnakeCase('hello_world')).toBe('hello_world');
  });
});
