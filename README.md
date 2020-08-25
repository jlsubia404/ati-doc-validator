# Ati doc validator

Libreria para validacion de documentos de Ecuador

## Installation

```shell
npm i -g npm
npm i @devoxs/ati-doc-validator
```
Note: add --save if you are using npm < 5.0.0

## Usage

```js
import {AtiDocumentValidator} from '@devoxs/ati-doc-validator';

const documentToValidate = '1234567890';
/**
 * valResult contains:
 * - a flag result -> true if document number is valid
 * - a message in case of validation results false
**/
const valResult = AtiDocumentValidator.cedulaValidator(documentToValidate);
// for RUC validator
const valResult1 = AtiDocumentValidator.rucValidator(documentToValidate);
```
## References
RUC format: https://www.sri.gob.ec/web/guest/RUC#:~:text=Est%C3%A1%20conformado%20por%2013%20d%C3%ADgitos,emite%20el%20n%C3%BAmero%20de%20RUC.