import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AsyncComponent } from './async/async.component';
import { AsyncObservablePipeComponent } from './async-observable-pipe/async-observable-pipe.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
    RouterModule.forRoot([
      {path: '', component: AsyncObservablePipeComponent}

    ]

    )
  ],
  declarations: [ AppComponent, HelloComponent, AsyncComponent, AsyncObservablePipeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
