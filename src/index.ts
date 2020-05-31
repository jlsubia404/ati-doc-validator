interface AtiValidatorResult {
  result: boolean;
  message: string;
}
class AtiDocumentValidatorClass {
  private _regexOnlyTenNumbers = new RegExp('^[0-9]{10}$');

  private isNullOrUndefined(value: any): boolean {
    return value === undefined || value === null;
  }

  cedulaValidator(cedula: string): AtiValidatorResult {
    const validationResult: AtiValidatorResult = {
      result: false,
      message: '',
    };

    if (this.isNullOrUndefined(cedula)) {
      validationResult.message = 'Parametro de entrada incorrecto';
      return validationResult;
    }

    if (!this._regexOnlyTenNumbers.test(cedula)) {
      validationResult.message = 'Documento no cumple formato. Solo 10 dígitos';
      return validationResult;
    }

    let total = 0;
    for (let i = 0; i < cedula.length - 1; i++) {
      if (i % 2 === 0) {
        let acumulator = Number(cedula.charAt(i)) * 2;
        if (acumulator > 9) {
          acumulator -= 9;
        }
        total += acumulator;
      } else {
        total += Number(cedula.charAt(i));
      }
    }

    total = total % 10 ? 10 - (total % 10) : 0;

    if (Number(cedula.charAt(cedula.length - 1)) === total) {
      validationResult.result = true;
    } else {
      validationResult.message = 'Número de documento incorrecto';
    }

    return validationResult;
  }
}

export const AtiDocumentValidator = new AtiDocumentValidatorClass();
