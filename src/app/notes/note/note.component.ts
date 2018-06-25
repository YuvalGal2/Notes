import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  note:string;
  noteId:number = 0;
  @Output() createNoteEvent = new EventEmitter<{noteText:string,id:number}>();
  send(){
    this.noteId++;
    this.createNoteEvent.emit({noteText: this.note, id:this.noteId});
  }
  constructor() { }

  ngOnInit() {
  }

}
