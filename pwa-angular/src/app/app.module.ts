import { BrowserModule } from '@angular/platform-browser';
 import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
 import { MaterialModule } from '@angular/material';

import { HttpModule } from '@angular/http';
//import { PostComponent } from './post/post.component';
import { AppShellModule } from '@angular/app-shell';
import 'hammerjs';
import { MdToolbarModule, MdToolbarRow } from '@angular/material/toolbar';
import {ChallengeService} from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    //PostComponent
 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    MaterialModule,
    AppShellModule.runtime(),
    HttpModule,
    MdToolbarModule.forRoot(),   
  ],
  providers: [ChallengeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
