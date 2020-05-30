import { AtiDocumentValidator, AtiValidatorResult } from './../index';

const lengthLessThan10 = new AtiValidatorResult(false,'');

test('Only numbers', () => {
    lengthLessThan10.message = 'Documento solo debe constar de numeros';
    expect(AtiDocumentValidator.cedulaValidator('123xxcd')).toStrictEqual(lengthLessThan10);
});

test('length less than 10', () => {
    lengthLessThan10.message = 'Longitud de documento menor que 10';
    expect(AtiDocumentValidator.cedulaValidator('123')).toStrictEqual(lengthLessThan10);
});

test('valid Document', () => {
    lengthLessThan10.message = '';
    lengthLessThan10.result = true;
    expect(AtiDocumentValidator.cedulaValidator('1003503198')).toStrictEqual(lengthLessThan10);
});


test('invalid Document', () => {
    lengthLessThan10.message = 'Número de documento incorrecto';
    lengthLessThan10.result = false;
    expect(AtiDocumentValidator.cedulaValidator('1003503199')).toStrictEqual(lengthLessThan10);
});