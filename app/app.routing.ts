import { Routes, RouterModule } from '@angular/router';

import { BrowseComponent } from './browse.component';
import { FlagsComponent } from './flags.component';

const appRoutes: Routes = [
  {
    path: '',
    component: BrowseComponent
  },
  {
    path: ':user',
    component: FlagsComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
