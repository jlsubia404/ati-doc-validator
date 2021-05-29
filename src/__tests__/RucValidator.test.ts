import { AtiDocumentValidator } from './../index';
const instanceVal = new AtiDocumentValidator();
test('Only numbers', () => {
  expect(instanceVal.rucValidator('123xxcd').result).toStrictEqual(false);
});


test('length greater', () => {
    expect(instanceVal.rucValidator('1234567890123123').result).toStrictEqual(false);
  });


  test('length less', () => {
    expect(instanceVal.rucValidator('12345676').result).toStrictEqual(false);
  });

  test('not end in 001', () => {
    expect(instanceVal.rucValidator('1003503198123').result).toStrictEqual(false);
  });


  test('ruc ok', () => {
    expect(instanceVal.rucValidator('1003503198001').result).toStrictEqual(true);
  });

  test('ruc ok private society no-resident', () => {
    expect(instanceVal.rucValidator('0296537341001').result).toStrictEqual(true);
  });

  test('ruc ok public society', () => {
    expect(instanceVal.rucValidator('0266537340001').result).toStrictEqual(true);
  });


  test('ruc not ok public society', () => {
    expect(instanceVal.rucValidator('0266537348001').result).toStrictEqual(false);
  });


  test('ruc not ok public society', () => {
    expect(instanceVal.rucValidator('0256537340001').result).toStrictEqual(false);
  });