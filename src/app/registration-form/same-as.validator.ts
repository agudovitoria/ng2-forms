import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

const VALIDATOR_KEY = 'sameAs';
const VALIDATOR_ERROR = {[VALIDATOR_KEY]: false};

@Directive({
  selector: '[sameAs][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => SameAsValidator), multi: true }
  ]
})
export class SameAsValidator implements Validator {

  constructor(@Attribute('sameAs')public sameAs:string, @Attribute('reverse')public reverse:boolean=false) { }

  validate(control: AbstractControl): {[key: string]: any} {
    let comparedControl = control.root.get(this.sameAs);

    if(!comparedControl) {
      return null;
    }

    let areEquals = control.value === comparedControl.value;

    console.log('sameAs validation result is', areEquals);

    if(!this.reverse && !areEquals) {
        return VALIDATOR_ERROR;
    } else if(this.reverse) {
      if(areEquals) {
        delete comparedControl.errors[VALIDATOR_KEY];

        if (!Object.keys(comparedControl.errors).length){ 
          comparedControl.setErrors(null);
        }
      } else {
        comparedControl.setErrors(VALIDATOR_ERROR);
      }
    }

    return null;
  }

}
