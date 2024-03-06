import { Component, Input } from '@angular/core';
import { Question } from '../Models/question';
import { QuestionService } from '../Service/question.service';
import { QuizService } from '../Service/quiz.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-affichagequestion',
  templateUrl: './affichagequestion.component.html',
  styleUrls: ['./affichagequestion.component.css']
})
export class AffichagequestionComponent {

  quizId: any;
  title = null;
  quizTitle = null;
  questions: Question[] = [];
  mailcandidat: any = sessionStorage.getItem('email');
  currentQuestionIndex: number = 0;
  listofcurrentQuest: any[] = [];

  constructor(private router: Router, private questionService: QuestionService, private quizService: QuizService, private route: ActivatedRoute) { }

 ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizId = params['quizId'];
      this.getQuizQuestions();
    });
}


  getQuizQuestions() {
    this.questionService.getQuestionsForQuiz(this.quizId, this.mailcandidat).subscribe(
      (data) => {
        this.questions = data;
        console.log(data);
      },
      (error) => {
        console.log("Error: Questions can't be loaded due to some problems. Try again!", error);
      }
    )
  }

  submitAnswer(option: string): void {
    if (option !== undefined && this.currentQuestionIndex < this.questions.length) {
     
      // Call the evaluateQuiz method for the current question
      this.quizService.evaluateQuiz(this.questions[this.currentQuestionIndex].idQuest, option, this.mailcandidat).subscribe(
        (response) => {
          console.log('Quiz evaluated successfully:', response);
          // Handle the response as needed
        },
        (error) => {
          console.error('Error occurred while evaluating quiz:', error);
          // Handle errors
        }
      );

      // Move to the next question if available
      this.currentQuestionIndex++;
    } else {
      console.log('No more questions or option is undefined.');
    }
}

}
