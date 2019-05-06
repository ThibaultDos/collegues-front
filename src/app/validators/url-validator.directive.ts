import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appUrlValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: UrlValidatorDirective, multi: true }]
})
export class UrlValidatorDirective {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value.startsWith('http://')) {
      return null;
    } else if (control.value.startsWith('https://')) {
      return null;
    } else {
      return { urlInvalide: true }
    }
  }
}
