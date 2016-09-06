import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { Flag } from './flag';
import { FlagService } from './flag.service';

@Component({
  templateUrl: 'app/flags.component.html',
})

export class FlagsComponent implements OnInit {
  @Input()
  user: string;
  name: string;
  flags: Flag[];

  constructor(private route: ActivatedRoute, private flagService: FlagService) {
    this.flagService.on('getFlags', data => {
      if (this.user !== data.user)
        return;

      this.flags = data.flags as Flag[];
    });
    this.flagService.on('setFlag', data => {
      if (this.user !== data.user)
        return;

      this.flags.filter(f => f.name == data.flag.name).forEach(f => {
        f.enabled = data.flag.enabled;
      });
    });
    this.flagService.on('deleteFlag', data => {
      if (this.user !== data.user)
        return;

      this.flags = this.flags.filter(f => f.name !== data.flag.name);
    });
    this.flagService.on('createFlag', data => {
      if (this.user !== data.user)
        return;

      this.flags.push(data.flag as Flag);
    });
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.user = params['user'];
    });
    this.getFlags();
  }

  deleteFlag(flag: Flag): void {
    this.flagService.deleteFlag(this.user, flag.name)
  }

  getFlags(): void {
    this.flagService.getFlags(this.user);
  }

  toggleFlag(flag: Flag): void {
    this.flagService.setFlag(this.user, flag.name, !flag.enabled);
  }

  createFlag(): void {
    this.flagService.createFlag(this.user, this.name);
    this.name = '';
  }

  keyup(event: any): void {
    if (event.keyCode == 13)
      this.createFlag();
  }
}

