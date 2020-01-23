import { FormControl } from '@angular/forms';

export function validateNumber(control: FormControl) {
    if (typeof (control.value) === 'string') {
        if (!isNaN(parseInt(control.value))) {
            return null;
        } else {
            return { validateNumber: { valid: false } };
        }
    }
}
