import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes = [];

  getNote(note: {noteText:string,id:number}){
    this.notes.push({text: note.noteText,id: note.id});

    console.log(this.notes);
  }


  constructor() { }

  ngOnInit() {
  }

}
