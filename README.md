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
```
