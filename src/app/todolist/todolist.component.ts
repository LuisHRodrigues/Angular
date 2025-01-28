import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent {
  taskArray = [
    { taskName: 'Comprar carne moída', isCompleted: false, isEditable: false},
    { taskName: 'Ir na Creusa', isCompleted: false, isEditable: false },
    { taskName: 'Comprar peça do monza na feira da marreta', isCompleted: false, isEditable: false },
    { taskName: 'Fazer o Palmeiras ganhar um mundial', isCompleted: false, isEditable: false},
  ];

  onSubmit(form: NgForm) {
    console.log(form);

    this.taskArray.push({
      taskName: form.controls['tarefa'].value,
      isCompleted: false,
      isEditable: false
    });

    form.reset();
  }

 deleteAll<T>(taskArray: T[]){
  taskArray.length = 0;

 }

  onDelete(index: number) {
    console.log(index);
    this.taskArray.splice(index, 1);
  }

  onCheck(index: number) {
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
    console.log(this.taskArray[index]);
  }

  onSave(index: number, newtask: string) {
    this.taskArray[index].taskName= newtask;
    this.taskArray[index].isEditable=false;
  }

  onEdit(index: number) {
    this.taskArray[index].isEditable=true; 

  }
}
