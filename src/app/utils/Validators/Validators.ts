import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class Validators {

  // Validador para campos requeridos
  static required(control: AbstractControl): ValidationErrors | null {
    return control.value ? null : { required: true };
  }

  // Validador para solo letras (sin números ni caracteres especiales)
  static lettersOnly(control: AbstractControl): ValidationErrors | null {
    const regex = /^[A-Za-z]+$/;
    return regex.test(control.value) ? null : { lettersOnly: true };
  }

  // Validador para solo números
  static numbersOnly(control: AbstractControl): ValidationErrors | null {
    const regex = /^[0-9]+$/;
    return regex.test(control.value) ? null : { numbersOnly: true };
  }

  // Validador para un número de teléfono (ejemplo básico con solo números)
  static phoneNumber(control: AbstractControl): ValidationErrors | null {
    const regex = /^[0-9]{10}$/;  // Ajustar al formato de teléfono que se desee
    return regex.test(control.value) ? null : { phoneNumber: true };
  }

  // Validador para el correo electrónico
  static email(control: AbstractControl): ValidationErrors | null {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(control.value) ? null : { email: true };
  }

  // Validador para verificar longitud mínima
  static minLength(min: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value && control.value.length >= min ? null : { minLength: true };
    };
  }

  // Validador para verificar longitud máxima
  static maxLength(max: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value && control.value.length <= max ? null : { maxLength: true };
    };
  }

  // Validador para comparar dos campos
  static match(controlName: string, matchingControlName: string): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const control = formGroup.get(controlName);
      const matchingControl = formGroup.get(matchingControlName);

      if (matchingControl?.errors && !matchingControl.errors['matching']) {
        return null;
      }

      if (control?.value !== matchingControl?.value) {
        matchingControl?.setErrors({ matching: true });
        return { matching: true };
      } else {
        return null;
      }
    };
  }
}
