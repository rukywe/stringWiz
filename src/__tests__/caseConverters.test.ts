import {
  toDotCase,
  toConstantCase,
  toSnakeCase,
  toPascalCase
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
});
