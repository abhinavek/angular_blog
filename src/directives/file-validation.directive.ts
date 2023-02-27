import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from "@angular/forms";

@Directive({
  selector: '[appFileValidation]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: FileValidationDirective, multi: true },
  ]
})
export class FileValidationDirective implements Validator{

  validate(control: AbstractControl) : {[key: string]: any} | null {
    console.log("file",control.value)
    if (!control.value) {
      return { 'file_required': true };
    }
    return null;
  }

}
