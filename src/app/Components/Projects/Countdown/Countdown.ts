import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { take, map } from 'rxjs/operators';

import * as moment from 'moment';
import * as _ from 'underscore';

@Component({
    selector: 'Countdown',
    templateUrl: './Countdown.html'
})

export class Countdown implements OnInit {

    minute: number = 0;
    second: number = 10;
    counter: Observable<number>;
    
    message: string = "START";

    audio = new Audio();
    

    constructor() { }

    ngOnInit() {
        this.audio.src = "../../../assets/audio/bell.wav";
        this.audio.load();
    }


    StartCounter() {

        
        var secondsToStart = 3000;
        var interval = 1000;
        var totalSeconds = this.minute * 60 + this.second;       
        
        setTimeout(() => { this.message = 'READY...'; }, 0);
        setTimeout(() => { this.message = ''; }, secondsToStart);

        
        this.counter = timer(secondsToStart, interval).pipe(
            take(totalSeconds),
            map(() => --totalSeconds)
        );

        setTimeout(() => {
            this.ResetCounter();
            this.audio.play();
        }, totalSeconds * interval + secondsToStart);
    }

    ResetCounter() {
        this.message = 'START';
        this.minute = 0;
        this.second = 10;
        this.counter = null;
    }

    StopCounter(){
        this.ResetCounter();
    }

    playAudio(){        
        this.audio.play();
    }
    
}