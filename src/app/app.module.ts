import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { AffichagequizComponent } from './affichagequiz/affichagequiz.component';
import { QuizComponent } from './quiz/quiz.component';
import { UpdatequizComponent } from './updatequiz/updatequiz.component';
import { CommonModule } from '@angular/common';
import { AffichagequestionComponent } from './affichagequestion/affichagequestion.component';
import { CandidatComponent } from './candidat/candidat.component';



@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    AffichagequizComponent,
    QuizComponent,
    UpdatequizComponent,
    AffichagequestionComponent,
    CandidatComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    CommonModule,



    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
