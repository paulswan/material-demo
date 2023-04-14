import { Component, Inject } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { DateFnsAdapter, MAT_DATE_FNS_FORMATS } from '@angular/material-date-fns-adapter';
import { DateAdapter, ErrorStateMatcher, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { MatRadioChange } from '@angular/material/radio';
import { Locale } from 'date-fns';
import * as locale from 'date-fns/locale';
import { Observable, map, startWith } from 'rxjs';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: locale.enAU },
    {
      provide: DateAdapter,
      useClass: DateFnsAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_DATE_FNS_FORMATS },
  ],
})
export class InputsComponent {
  clearableInput = new FormControl('Clear me');

  formFieldAppearance: MatFormFieldAppearance = 'fill';
  appearanceFormControl = new FormControl(this.formFieldAppearance);

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  matcher = new MyErrorStateMatcher();

  autocompleteControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  localeFormat = 'DD/MM/YYYY';
  localeFormControl = new FormControl('en-AU');

  constructor(private _adapter: DateAdapter<unknown>, @Inject(MAT_DATE_LOCALE) private _locale: Locale) {
    this.filteredOptions = this.autocompleteControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) => option.toLowerCase().includes(filterValue));
  }

  setLocale(localeFormControl: MatRadioChange) {
    switch (localeFormControl.value) {
      case 'en-AU':
        this._locale = locale.enAU;
        this.localeFormat = 'DD/MM/YYYY';
        break;
      case 'en-US':
        this._locale = locale.enUS;
        this.localeFormat = 'MM/DD/YYYY';
        break;
      case 'en-GB':
        this._locale = locale.enGB;
        this.localeFormat = 'DD/MM/YYYY';
        break;
      case 'ja':
        this._locale = locale.ja;
        this.localeFormat = 'YYYY/MM/DD';
        break;
      case 'zh-CN':
        this._locale = locale.zhCN;
        this.localeFormat = 'YY-MM-DD';
        break;
    }
    this._adapter.setLocale(this._locale);
  }

  setFormFieldAppearance(appearance: MatFormFieldAppearance) {
    this.formFieldAppearance = appearance;
  }
}
