import {Component, OnInit} from '@angular/core';
import {Note} from '../model/note';

@Component({
  selector: 'app-notes-view',
  templateUrl: './notes-view.component.html',
  styleUrls: ['./notes-view.component.css']
})
export class NotesViewComponent implements OnInit {

  public notes: Note[];

  constructor() {
  }

  ngOnInit() {
    this.notes = [];
    this.notes.push(
      {
        noteId: 1,
        noteTitle: 'Go to shop',
        noteText: 'Buy fruits, meat and other shit',
        noteColor: 'red'
      },
      {
        noteId: 2,
        noteTitle: 'Go to school',
        noteText: 'fuck school',
        noteColor: 'aqua'
      },
      {
        noteId: 3,
        noteTitle: 'Read a book',
        noteText: 'Pick some book and read',
        noteColor: 'green'
      },
      {
        noteId: 4,
        noteTitle: 'Got to sleep',
        noteText: 'Sleeeep!',
        noteColor: 'azure'
      }
    );
  }

}
