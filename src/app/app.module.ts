import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NotesViewComponent} from './notes-view/notes-view.component';
import {NoteComponent} from './note/note.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesViewComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
