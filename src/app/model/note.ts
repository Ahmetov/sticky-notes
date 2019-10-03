export class Note {
  public noteId: number;
  public noteTitle: string;
  public noteText: string;
  public noteColor: string;

  constructor(noteId: number, noteTitle: string, noteText: string) {
    this.noteId = noteId;
    this.noteTitle = noteTitle;
    this.noteText = noteText;
  }
}
