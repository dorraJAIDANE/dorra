import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidat } from '../Models/candidat';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  constructor(private http: HttpClient) { }

  apiUrl = 'http://localhost:8082/candidat/';
apiurl1='http://localhost:8082/quizzes/verifyexistedmail/'






  ajoutercandidat(candidat: Candidat): Observable<Candidat> {
    return this.http.post<Candidat>(this.apiUrl + 'createcandidat', candidat);
}


submitAnswer(candidat: Candidat): Observable<Candidat> {
  return this.http.post<Candidat>(this.apiUrl + 'ajouter', candidat);
}

getSelectedAnswersByCandidat(candidatId: number): Observable<string[]> {
  const url = `${this.apiUrl}/selected-answers/${candidatId}`;
  return this.http.get<string[]>(url);
}
existedmail(mail:string):Observable<boolean>{
return this.http.post<boolean>(this.apiurl1+mail,null)
}
}
