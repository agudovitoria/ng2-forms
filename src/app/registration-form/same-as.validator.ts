import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[sameAs][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => SameAsValidator), multi: true }
  ]
})
export class SameAsValidator implements Validator {

  constructor(@Attribute('sameAs')public sameAs:string) { }

  validate(c: AbstractControl): {[key: string]: any} {
    let areEquals = c.value === c.root.get(this.sameAs).value;

    console.log('sameAs validation result is', areEquals);

    if(!areEquals) {
      return {"sameAs": false};
    }

    return null;
  }

}
