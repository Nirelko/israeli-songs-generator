import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import 'hammerjs';

import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { MainComponent } from './shell/main/main.component';
import { ArtistSelector } from './shell/main/artist-selector/artist-selector.component';
import { GeneratedSong } from './shell/main/generated-song/generated-song.component';
import { WaveLoading } from './shell/main/generated-song/wave-loading/wave-loading.component';
import { Song } from './shell/main/generated-song/song/song.component';
import { PreviewComponent } from './shell/main/artist-selector/preview/preview.component';
import { ArtistComponent } from './shell/main/artist-selector/artist/artist.component';
import { ArtistsService } from './services/artists.service';


@NgModule({
  declarations: [
    ShellComponent,
    HeaderComponent,
    MainComponent,
    ArtistSelector,
    GeneratedSong,
    WaveLoading,
    PreviewComponent,
    ArtistComponent,
    Song
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  bootstrap: [ShellComponent],
  providers: [ArtistsService]
})
export class AppModule { }
