import { Component } from '@angular/core';
import { Quiz } from '../Models/quiz';
import { QuizService } from '../Service/quiz.service';
import { CandidatService } from '../Service/candidat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-affichagequiz',
  templateUrl: './affichagequiz.component.html',
  styleUrls: ['./affichagequiz.component.css']
})
export class AffichagequizComponent {
quizzes: Quiz[]=[];


  constructor(private quizService: QuizService, private router: Router,private candidatservice:CandidatService) {}
  mailcandidat:any=  sessionStorage.getItem('email');

  ngOnInit(): void {
    this.loadQuizzes();
  }

  loadQuizzes(): void {
    this.quizService.getAllQuizzes()
      .subscribe(
        (quizzeslist) => {
          this.quizzes = quizzeslist;
          console.log('Quizzes are loaded'+quizzeslist);
        },
        (error) => {
          console.error('Erreur lors du chargement des quizzes :', error);
        }
      );
  }

  viewQuestions(quizId: number): void {
    // Appel de la méthode pour récupérer les questions du quiz sélectionné
    this.quizService.getQuestionsForQuiz(quizId)
      .subscribe(
        (questions) => {
          console.log("mes question sont",questions);
          this.router.navigate(['Affichagequestion', quizId,this.mailcandidat]);
          
        },
        (error) => {
          console.error('Erreur lors du chargement des questions du quiz :', error);
        }
      );
  }

  
}