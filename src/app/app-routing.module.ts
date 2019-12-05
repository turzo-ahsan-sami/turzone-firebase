import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Components

import { Home } from './Components/Home/Home';
import { Resume } from './Components/Resume/Resume';
import { NotFound } from './Components/NotFound/NotFound';

import { VocabHelper } from './Components/Projects/VocabHelper/VocabHelper';
import { Countdown } from './Components/Projects/Countdown/Countdown';
import { BookList } from './Components/Projects/BookList/BookList';
import { ToDo } from './Components/Projects/ToDo/ToDo';

const APP_ROUTES: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', pathMatch: 'full', component: Home },
  { path: 'resume', pathMatch: 'full', component: Resume },

  { path: 'vocabhelper', pathMatch: 'full', component: VocabHelper },
  { path: 'booklist', pathMatch: 'full', component: BookList },
  { path: 'countdown', pathMatch: 'full', component: Countdown },
  { path: 'todo', pathMatch: 'full', component: ToDo },
  
  { path: '**', component: NotFound },

];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
