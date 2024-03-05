import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';import { EventTestComponent } from './components/event-test/event-test.component';
;


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EventTestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'phptest';
}
