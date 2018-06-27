import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes = [];
  addNote(note:{id:number,content:string,title:string}){
   this.notes.push({id:note.id,content:note.content,title:note.title});
  }

  constructor() { }

  ngOnInit() {
  }

}
