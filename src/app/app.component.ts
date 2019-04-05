import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  notes=[
    {id: 1, title:'Nota 1', descripcion:'Esta es la nota 1'},
    {id: 2, title:'Nota 2', descripcion:'Esta es la nota 2'},
    {id: 3, title:'Nota 3', descripcion:'Esta es la nota 3'},
    {id: 4, title:'Nota 4', descripcion:'Esta es la nota 4'},
    {id: 5, title:'Nota 5', descripcion:'Esta es la nota 5'},
    {id: 6, title:'Nota 6', descripcion:'Esta es la nota 6'},
  ];
  note={id:null, title:null, descripcion:null}

  public showform=false;
  public editing=false;

  showForm(){
    this.showform=true;
  }
  cancel(){
    this.showform=false;
  }
  
  viewNote(note){
    this.editing=true;
    this.note=note;
    this.showform=true;
  }
  delete(){
   var me=this;
   this.notes.forEach(function(el,i){
    if(el==me.note){
      me.notes.splice(i,1);
    }
   });
   this.showform=false;
   this.note={id:null, title:null, descripcion:null}
  }

  createNote(){
    if(this.editing){
      var me=this;
      this.notes.forEach(function(el, i){
        if(el.id==me.note.id)
        {
          me.notes[i]=me.note; 
        }
      });
      this.showform=false;
      this.note={id:null, title:null, descripcion:null}
    }else{
    this.note.id=Date.now();
    this.notes.push(this.note);
    this.note={id:null, title:null, descripcion:null}
    this.showform=false;
    this.editing=false;
  }
  }
}
