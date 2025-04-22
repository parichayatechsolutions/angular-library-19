import { Component } from '@angular/core';
import { HelloWorldComponent } from 'shared-wc-lib'
@Component({
  selector: 'app-root',
  imports: [HelloWorldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wc-consumer-web';
}
