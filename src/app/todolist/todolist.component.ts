import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-todolist",
  templateUrl: "./todolist.component.html",
  styleUrls: ["./todolist.component.css"],
})
export class TodolistComponent {
  taskArray = [
    { taskName: "Comprar carne moída", isCompleted: false, isEditable: false },
    { taskName: "Ir na Creusa", isCompleted: false, isEditable: false },
    {
      taskName: "Comprar peça do monza na feira da marreta",
      isCompleted: false,
      isEditable: false,
    },
    {
      taskName: "Fazer o Palmeiras ganhar um mundial",
      isCompleted: false,
      isEditable: false,
    },
  ];

  ngOnInit(): void {
    this.getFromLocalStorage();
  }

  onSubmit(form: NgForm) {
    console.log(form);

    this.taskArray.push({
      taskName: form.controls["tarefa"].value,
      isCompleted: false,
      isEditable: false,
    });

    this.saveToLocalStorage();

    form.reset();
  }

  saveToLocalStorage() {
    let stringJSON = JSON.stringify(this.taskArray);
    localStorage.setItem("todolist", stringJSON);
  }

  getFromLocalStorage() {
    let itemsJSONString = localStorage.getItem("todolist");
    if (itemsJSONString != null) {
      this.taskArray = JSON.parse(itemsJSONString);
    }
  }

  deleteAll<T>(taskArray: T[]) {
    taskArray.length = 0;

    this.saveToLocalStorage();
  }

  onDelete(index: number) {
    console.log(index);
    this.taskArray.splice(index, 1);

    this.saveToLocalStorage();
  }

  onCheck(index: number) {
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
    console.log(this.taskArray[index]);

    this.saveToLocalStorage();
  }

  onSave(index: number, newtask: string) {
    this.taskArray[index].taskName = newtask;
    this.taskArray[index].isEditable = false;

    this.saveToLocalStorage();
  }

  onEdit(index: number) {
    this.taskArray[index].isEditable = true;

    this.saveToLocalStorage();
  }
}
