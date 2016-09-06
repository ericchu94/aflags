import { Component } from '@angular/core';
import { Router }    from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
    <div class="row">
      <div class="col-xs-12">
        <h1><a routerLink="/">{{ title }}</a></h1>
      </div>
    </div>
    <router-outlet></router-outlet>
    `,
})

export class AppComponent {
  title = 'Flags';
  user: string;

  constructor(private router: Router) {}

  go(): void {
    this.router.navigate([this.user]);
  }
}
