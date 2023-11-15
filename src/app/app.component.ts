import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.sass'],
  //Används för att kunna använda mig av angular animations(bara en fade in när man startar webapplikationen)
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0 
      })),
      transition(':enter, :leave', [
        animate(700)
      ]),
    ])
  ]
})
export class AppComponent {

  constructor(private router: Router) { }

  ngOnInit(): void {}
}
