import { AtiDocumentValidator } from './../index';

test('Only numbers', () => {
  expect(AtiDocumentValidator.cedulaValidator('123xxcd').result).toStrictEqual(false);
});

test('length less than 10', () => {
  expect(AtiDocumentValidator.cedulaValidator('123').result).toStrictEqual(false);
});

test('greater than 10', () => {
  expect(AtiDocumentValidator.cedulaValidator('12345678901').result).toStrictEqual(false);
});

test('valid Document', () => {
  expect(AtiDocumentValidator.cedulaValidator('1003503198').result).toStrictEqual(true);
});

test('invalid Document', () => {
  expect(AtiDocumentValidator.cedulaValidator('1003503199').result).toStrictEqual(false);
});
