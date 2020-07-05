import { Component } from '@angular/core';
import { Tarea } from './models/tarea';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista-de-tareas';
  public tarea: Tarea;
  public tareas: Tarea[];

  constructor(){
    this.tarea = new Tarea('', false);
    this.tareas = [];
  }

  onSubmit(form)
  {
    let tareaSave = new Tarea (this.tarea.contenido, false);
    this.tareas.push(tareaSave);
    console.log(this.tareas);
    form.reset();
  }
}
