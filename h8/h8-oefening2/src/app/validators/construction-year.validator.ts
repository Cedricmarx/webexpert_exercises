import { FormControl } from '@angular/forms';

export function validateConstructionYear(control: FormControl) {
    if (typeof (control.value) === 'string') {
        if (!isNaN(parseInt(control.value))) {
            if (parseInt(control.value) < 2018) {
                return null;
            } else {
                return { validateConstructionYear: { valid: false } };
            }
        } else {
            return { validateNumber: { valid: false } };
        }
    }
}
