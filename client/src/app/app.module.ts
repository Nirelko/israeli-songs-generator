import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { MainComponent } from './shell/main/main.component';
import { PreviewComponent } from './shell/main/preview/preview.component';
import { ArtistComponent } from './shell/main/artist/artist.component';


@NgModule({
  declarations: [
    ShellComponent,
    HeaderComponent,
    MainComponent,
    PreviewComponent,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [ShellComponent]
})
export class AppModule { }
