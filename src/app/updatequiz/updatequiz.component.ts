import { Component } from '@angular/core';
import { QuizService } from '../Service/quiz.service';
import { Quiz } from '../Models/quiz';

@Component({
  selector: 'app-updatequiz',
  templateUrl: './updatequiz.component.html',
  styleUrls: ['./updatequiz.component.css']
})
export class UpdatequizComponent {
  quizzes: Quiz[] = [];

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.loadQuizzes();
  }

  loadQuizzes(): void {
    this.quizService.getAllQuizzes()
      .subscribe(
        (quizzes: Quiz[]) => {
          this.quizzes = quizzes;
        },
        (error) => {
          console.error('Erreur lors du chargement des quizzes :', error);
        }
      );
  }

  updateQuiz(quiz: Quiz): void {
    this.quizService.updateQuiz(quiz)
      .subscribe(
        (updatedQuiz: Quiz) => {
          console.log('Quiz mis à jour avec succès :', updatedQuiz);
          // Mettez à jour le quiz dans la liste des quizzes si nécessaire
        },
        (error) => {
          console.error('Erreur lors de la mise à jour du quiz :', error);
        }
      );
  }

}
