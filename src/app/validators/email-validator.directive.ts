import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';


@Directive({
  selector: '[appEmailValidator]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: EmailValidatorDirective, multi: true }]
})
export class EmailValidatorDirective implements AsyncValidator {

  constructor() { }

  validate(control: AbstractControl): Observable<ValidationErrors> | null {
    if (control.value.includes('@')) {

      return null;
    }
  }

}
