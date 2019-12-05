import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  toDoList: AngularFireList<any>;

  constructor(private firebaseDB: AngularFireDatabase) { }

  getToDoList(){
    this.toDoList = this.firebaseDB.list('ToDoList');
    return this.toDoList;
  }

  addTitle(title: string, time: string){
    this.toDoList.push({
      title: title,
      isChecked: false,
      time: time
    });
  }

  changeTitleState($key: string, flag: boolean){
    this.toDoList.update($key, {isChecked : flag});
  }

  removeTitle($key: string){
    this.toDoList.remove($key);
  }

}
