import { Component } from '@angular/core';
import { Router }   from '@angular/router';

@Component({
  templateUrl: 'app/browse.component.html',
})

export class BrowseComponent {
  user: string;

  constructor(private router: Router) {}

  go(): void {
    this.router.navigate([this.user]);
  }

  keyup(event: any): void {
    if (event.keyCode == 13)
      this.go();
  }
}


