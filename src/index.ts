export class AtiValidatorResult {
  result: boolean;
  message: string;
  constructor(result: boolean, message: string) {
    this.result = result;
    this.message = message;
  }
}

export const AtiDocumentValidator = {
  cedulaValidator: (cedula: string): AtiValidatorResult => {
    const validationResult: AtiValidatorResult = new AtiValidatorResult(false, '');
    const onlyNumbersRegex = new RegExp('^[0-9]+$');

    if(!onlyNumbersRegex.test(cedula)) {
        validationResult.message = 'Documento solo debe constar de numeros';
        return validationResult;
    }

    if (cedula.length !== 10) {
        validationResult.message = 'Longitud de documento menor que 10';
        return validationResult;
    }
    let total = 0;
    for(let i = 0; i < cedula.length - 1 ; i++){
        if(i%2 === 0) {
           let acumulator = parseInt(cedula.charAt(i)) * 2;
           if(acumulator > 9) {
                acumulator -= 9;
           }
           total += acumulator;

        } else {
            total += parseInt(cedula.charAt(i));
        }
    }
   
    total = total % 10 ? 10 - total % 10 : 0;

    if (parseInt(cedula.charAt(cedula.length - 1)) == total) {
        validationResult.result = true;
    } else {
        validationResult.message = 'Número de documento incorrecto';
    }

    return validationResult;
  },
};
