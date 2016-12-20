import { FormControl, AbstractControl, ValidatorFn } from '@angular/forms';

const EMAIL_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export class RegistrationFormValidators {
    static email(control: FormControl): {[key: string]: any} {
        return EMAIL_PATTERN.test(control.value) ? null : { validateEmail: { valid: false }};
    }

    static sameAs(sameAs: string, reverse: boolean = false): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            console.log(sameAs, reverse, control);
            const comparedControl = control.root.get(sameAs);

            if(!comparedControl) {
                return null;
            }

            const areEquals = control.value === comparedControl.value;

            if(!reverse && !areEquals) {
                return { validateSameAs: { valid: false }};
            } else if(reverse) {
                if(areEquals) {
                    delete comparedControl.errors['validateSameAs'];

                    if (!Object.keys(comparedControl.errors).length){ 
                        comparedControl.setErrors(null);
                    }
                } else {
                    comparedControl.setErrors({validateSameAs: false});
                }
            }
            
            return null;
        };
  }

    /*satic sameAs(sameAs:String, reverse: boolean): ValidatorFn {
        return (control: FormControl): {[key: string]: any} => {
            debugger; 

            return null;
        }
    }*/
}