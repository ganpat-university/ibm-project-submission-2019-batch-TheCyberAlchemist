import { Component } from '@angular/core';
import { invoke } from '@tauri-apps/api';
import { NavbarService } from './shared/navbar/navbar.service';
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from "@angular/material/core";

export const MY_FORMATS = {
  parse: {
    dateInput: "LL"
  },
  display: {
    dateInput: "DD-MM-YYYY",
    monthYearLabel: "YYYY",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "YYYY"
  }
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NavbarService,
    {
    provide: DateAdapter,
    useClass: MomentDateAdapter,
    deps: [MAT_DATE_LOCALE]
  },

  { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }]
})
export class AppComponent {
  title = 'abc';
  constructor() {
  }

}
