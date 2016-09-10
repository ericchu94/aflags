import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }   from './app.component';
import { routing }        from './app.routing';

import { BrowseComponent }     from './browse.component';
import { FlagsComponent }     from './flags.component';
import { FlagService }     from './flag.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
  ],
  declarations: [
    AppComponent,
    BrowseComponent,
    FlagsComponent,
  ],
  providers: [
    FlagService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

