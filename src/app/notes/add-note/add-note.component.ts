import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  noteContent:string;
  noteId:number = 0;
  noteTitle:string;
  @Output() createNoteEvent = new EventEmitter<{id:number,content:string,title:string}>();
  send(){
    
    this.noteId++;
    this.createNoteEvent.emit({id:this.noteId,content:this.noteContent,title:this.noteTitle});
   this.cleanFormSession();
  }
  cleanFormSession(){
    this.noteContent = '';
    this.noteTitle = ''
  }
  constructor() { }

  ngOnInit() {
  }

}
