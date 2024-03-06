import { Component } from '@angular/core';
import { Candidat } from '../Models/candidat';
import { CandidatService } from '../Service/candidat.service';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent {
  candidat: Candidat = new Candidat(); // Modèle pour collecter les informations sur le nouveau candidat

  constructor(private candidatService: CandidatService) {}

  // Méthode pour ajouter un candidat
  ajoutercandidat(): void {
    this.candidatService.ajoutercandidat(this.candidat)
      .subscribe(
        (response) => {
          sessionStorage.setItem('email', response.email);
          console.log('Candidat ajouté avec succès:', response);

          console.log('Candidat ajouté avec succès:', response);
          // Réinitialiser le modèle de candidat après l'ajout réussi
          this.candidat = new Candidat();
        },
        (error) => {
          console.error('Erreur lors de l\'ajout du candidat:', error);
        }
      );
  }

}
