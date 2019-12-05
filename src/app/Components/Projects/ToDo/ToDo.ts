import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../../Services/todo.service';

import * as moment from 'moment';

@Component({
    selector: 'ToDo',
    templateUrl: './ToDo.html'
})

export class ToDo implements OnInit {

    toDoListArray: any[];

    constructor(private toDoService: TodoService) { }

    ngOnInit() {
        this.getToDoList();
    }

    getToDoList() {
        this.toDoService.getToDoList().snapshotChanges()
            .subscribe(item => {
                this.toDoListArray = [];
                item.forEach(element => {
                    var x = element.payload.toJSON();
                    x["$key"] = element.key;
                    this.toDoListArray.push(x);
                });

                this.toDoListArray.sort((a, b) => { return a.isChecked - b.isChecked });

            });
    }

    onAdd(itemTitle) {
        if (!itemTitle.value) return;
        this.toDoService.addTitle(itemTitle.value, moment().format('L'));
        itemTitle.value = null;
    }

    onChangeTitleState(item) {
        item.isChecked = !item.isChecked;
        this.toDoService.changeTitleState(item.$key, item.isChecked);
    }

    onDelete($key: string) {
        this.toDoService.removeTitle($key);
    }


}

