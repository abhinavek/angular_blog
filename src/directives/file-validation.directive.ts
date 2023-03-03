import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from "@angular/forms";

@Directive({
  selector: '[appFileValidation]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: FileValidationDirective, multi: true },
  ]
})
export class FileValidationDirective implements Validator{
  @Input() imageVal: string | undefined;
  validate(control: AbstractControl) : {[key: string]: any} | null {
    console.log("file",control.value)
    console.log("file from api", !control.value && this.imageVal== '')
    if (!control.value && this.imageVal== '') {
      return { 'file_required': true };
    }
    return null;
  }

}
