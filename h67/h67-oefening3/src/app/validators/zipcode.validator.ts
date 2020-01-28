import { FormControl } from '@angular/forms';

export function validateZipCode(control: FormControl) {
    if (typeof (control.value) === 'number') {
        if (control.value >= 1000 && control.value <= 8000) {
            return null;
        } else {
            return { validateZipCode: { valid: false } };
        }
    }
}