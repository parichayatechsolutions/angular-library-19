import { Component } from '@angular/core';
import { HelloWorldComponent } from 'shared-wc-lib'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [
    HelloWorldComponent,
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    NgIf
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-US' } // Optional: Set locale
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wc-consumer-web';
  yourAnswer: any;
  termsNumber: any;
  selectedDate: any;
  selectedOption: any;
  firstRowAnswer: string = '';
  secondRowAnswer: string = '';
  userComments: string = ''

  section1Answer = '';
  section1SubAnswer = '';
  section1Comment = '';

  section2Answer = '';
  section2SubAnswer = '';
  section2Comment = '';

  section3Answer = '';
  section3SubAnswer = '';
  section3Comment = '';

  section4Answer = '';
  section4SubAnswer = '';
  section4Comment = '';

  section5Answer = '';
  section5SubAnswer = '';
  section5Comment = '';
}
