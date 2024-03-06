import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { QuizComponent } from './quiz/quiz.component';
import { AffichagequizComponent } from './affichagequiz/affichagequiz.component';
import { UpdatequizComponent } from './updatequiz/updatequiz.component';
import { AffichagequestionComponent } from './affichagequestion/affichagequestion.component';
import { CandidatComponent } from './candidat/candidat.component';


const routes: Routes = [
  {path:"question",component:QuestionComponent},
  {path:"quiz",component:QuizComponent},
  {path:"affichagequiz",component:AffichagequizComponent},
 {path:"updatequiz",component:UpdatequizComponent},
 { path: 'Affichagequestion/:quizId/:mailcandidat', component: AffichagequestionComponent },
 {path:'ajoutcandidat',component:CandidatComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
