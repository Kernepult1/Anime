import { Injectable } from '@angular/core';
import { Anime } from '../models/anime.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  anime?: Anime
  constructor(private http: HttpClient) { 

  }

  index$(): Observable<Anime[]> {
    return this.http.get<any>(`${environment.apiUrl}/anime`)
    .pipe(
      map(anime => {
        return anime.data.map((anime:Anime) => {
          return {
            ...anime
          }
        })
      })
    )
  }
}
