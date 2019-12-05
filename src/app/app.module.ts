import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { config } from './config';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { Home } from './Components/Home/Home';
import { Resume } from './Components/Resume/Resume';
import { Navbar } from './Components/Navbar/Navbar';
import { NotFound } from './Components/NotFound/NotFound';


// Projects
import { ToDo } from './Components/Projects/ToDo/ToDo';
import { VocabHelper } from './Components/Projects/VocabHelper/VocabHelper';
import { BookList } from './Components/Projects/BookList/BookList';
import { DisplayBookList } from './Components/Projects/BookList/DisplayBookList/DisplayBookList';
import { BookEntryForm } from './Components/Projects/BookList/BookEntryForm/BookEntryForm';


import { Countdown } from './Components/Projects/Countdown/Countdown';


// Services
import { MasterService } from './Services/master.service';
import { TodoService } from './Services/todo.service';

// Directives
import { TimeCounterDirective } from './Directives/timeCounter.directive';

// Pipes
import { FilterPipe } from './Pipes/Filter.pipe';
import { RemoveZeroPipe } from './Pipes/RemoveZero.pipe';
import { RoundNumberPipe } from './Pipes/RoundNumber.pipe';
import { SortPipe } from './Pipes/Sort.pipe';
import { ChangeStatusPipe } from './Pipes/ChangeStatus.pipe';
import { ShortNamePipe } from './Pipes/ShortName.pipe';
import { DoubleDigit } from './Pipes/DoubleDigit.pipe';
import { AmountInWords } from './Pipes/AmountInWords.pipe';
import { NumberToRoman } from './Pipes/NumberToRoman.pipe';



@NgModule({
  declarations:[
      AppComponent,

      // Components
      Home, Navbar, NotFound, VocabHelper, Countdown, Resume, ToDo,

      BookList, DisplayBookList, BookEntryForm,


      // Pipes
      FilterPipe, RemoveZeroPipe, RoundNumberPipe, SortPipe, ChangeStatusPipe, ShortNamePipe, AmountInWords, DoubleDigit, NumberToRoman,


      // Directives
      TimeCounterDirective

  ],

  imports:[
    BrowserModule,
    HttpClientModule,     
    ReactiveFormsModule, 
    FormsModule,      
    AppRoutingModule, 
    AngularFireModule.initializeApp(config.firebaseConfig),
    AngularFireDatabaseModule
  ],

  providers:[
      // Services
      MasterService,
      TodoService
  ],

  bootstrap: [AppComponent]
})

export class AppModule { 

}
