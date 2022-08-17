import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { DateAdapter, ErrorStateMatcher, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { DateFnsAdapter, MAT_DATE_FNS_FORMATS } from '@angular/material-date-fns-adapter';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { map, Observable, startWith } from 'rxjs';
import { enAU, enUS, enGB, ja, zhCN } from 'date-fns/locale';
import { Locale } from 'date-fns';

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
    { provide: MAT_DATE_LOCALE, useValue: enAU },
    {
      provide: DateAdapter,
      useClass: DateFnsAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_DATE_FNS_FORMATS },
  ],
})
export class InputsComponent {
  value = 'Clear me';

  formFieldAppearance: MatFormFieldAppearance = 'fill';
  appearanceFormControl = new FormControl(this.formFieldAppearance);

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  matcher = new MyErrorStateMatcher();

  autocompleteControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  localeFormat = 'DD/MM/YYYY';
  localeValue = 'en-AU';
  localeFormControl = new FormControl(this.localeValue);

  constructor(private _adapter: DateAdapter<any>, @Inject(MAT_DATE_LOCALE) private _locale: Locale) {
    this.filteredOptions = this.autocompleteControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) => option.toLowerCase().includes(filterValue));
  }

  setLocale() {
    switch (this.localeValue) {
      case 'en-AU':
        this._locale = enUS;
        this.localeFormat = 'DD/MM/YYYY';
        break;
      case 'en-US':
        this._locale = enUS;
        this.localeFormat = 'MM/DD/YYYY';
        break;
      case 'en-GB':
        this._locale = enGB;
        this.localeFormat = 'DD/MM/YYYY';
        break;
      case 'ja':
        this._locale = ja;
        this.localeFormat = 'YYYY/MM/DD';
        break;
      case 'zh-CN':
        this._locale = zhCN;
        this.localeFormat = 'YY-MM-DD';
        break;
    }
    this._adapter.setLocale(this._locale);
  }
}
