import { AtiDocumentValidator } from './../index';
const instancia = new AtiDocumentValidator();
test('Only numbers', () => {
  expect(instancia .cedulaValidator('123xxcd').result).toStrictEqual(false);
});

test('length less than 10', () => {
  expect(instancia.cedulaValidator('123').result).toStrictEqual(false);
});

test('greater than 10', () => {
  expect(instancia.cedulaValidator('12345678901').result).toStrictEqual(false);
});

test('valid Document', () => {
  expect(instancia.cedulaValidator('1003503198').result).toStrictEqual(true);
});

test('invalid Document', () => {
  expect(instancia.cedulaValidator('1003503199').result).toStrictEqual(false);
});
