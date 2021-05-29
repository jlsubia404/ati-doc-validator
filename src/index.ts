interface AtiValidatorResult {
  result: boolean;
  message: string;
}
class AtiDocumentValidatorClass {
  private provinceCodes = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
  ];

  private _regexOnlyTenNumbers = new RegExp('^[0-9]{10}$');

  private _regexOnly13Numbers = new RegExp('^([0-9]{10})001$');

  private _regexRucPrvtSocNoResident = new RegExp(`^(${this.provinceCodes.join('|')})9([0-9]{7})001$`);

  private _regexPublicSociety = new RegExp(`^(${this.provinceCodes.join('|')})6([0-9]{6})0001$`);

  private isNullOrUndefined(value: any): boolean {
    return value === undefined || value === null;
  }

  cedulaValidator = (cedula: string): AtiValidatorResult  => {
    const validationResult: AtiValidatorResult = {
      result: false,
      message: '',
    };

    if (this.isNullOrUndefined(cedula)) {
      validationResult.message = 'Parámetro de entrada incorrecto';
      return validationResult;
    }

    if (!this._regexOnlyTenNumbers.test(cedula)) {
      validationResult.message = 'Documento no cumple formato. Solo se permiten 10 dígitos';
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

  rucValidator = (ruc: string): AtiValidatorResult => {
    const validationResult: AtiValidatorResult = {
      result: false,
      message: '',
    };

    if (!this._regexOnly13Numbers.test(ruc)) {
      validationResult.message = 'Documento no cumple formato. Solo se permiten 13 dígitos.';
      return validationResult;
    }

    validationResult.result =
      this.cedulaValidator(ruc.substring(0, 10)).result ||
      this._regexRucPrvtSocNoResident.test(ruc) ||
      this._regexPublicSociety.test(ruc);

    if( !validationResult.result ){
      validationResult.message = 'Número de RUC incorrecto';
    }

    return validationResult;

  }
}

export const AtiDocumentValidator =  AtiDocumentValidatorClass;
