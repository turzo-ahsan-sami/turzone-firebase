import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { Home } from './Components/Home/Home';
import { Resume } from './Components/Resume/Resume';
import { Navbar } from './Components/Navbar/Navbar';
import { NotFound } from './Components/NotFound/NotFound';


// Projects
import { VocabHelper } from './Components/Projects/VocabHelper/VocabHelper';
import { BookList } from './Components/Projects/BookList/BookList';
import { DisplayBookList } from './Components/Projects/BookList/DisplayBookList/DisplayBookList';
import { BookEntryForm } from './Components/Projects/BookList/BookEntryForm/BookEntryForm';


import { Countdown } from './Components/Projects/Countdown/Countdown';


// Services
import { MasterService } from './Services/master.service';

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
<<<<<<< HEAD
      Home, Resume, Navbar, NotFound, VocabHelper, Countdown,
=======
      Home, Navbar, NotFound, VocabHelper, Countdown, Resume,
>>>>>>> 298a094a225266ef746f5d0030ddacea8f709350

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
  ],

  providers:[
      // Services
      MasterService,
  ],

  bootstrap: [AppComponent]
})

export class AppModule { 

}
