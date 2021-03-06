import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule, MatCardModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import { TypingModule } from 'ng-typing';
import 'hammerjs';

import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { MainComponent } from './shell/main/main.component';
import { ArtistSelector } from './shell/main/artist-selector/artist-selector.component';
import { GeneratedSong } from './shell/main/generated-song/generated-song.component';
import { WaveLoading } from './shell/main/generated-song/wave-loading/wave-loading.component';
import { Song } from './shell/main/generated-song/song/song.component';
import { Sentence } from './shell/main/generated-song/song/sentence/sentence.component';
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
    Song,
    Sentence
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    HttpClientModule,
    TypingModule
  ],
  bootstrap: [ShellComponent],
  providers: [ArtistsService]
})
export class AppModule { }
