import { Component } from '@angular/core';
import { AnimeService } from '../services/anime.service';
import { Observable, of } from 'rxjs';
import { Anime } from '../models/anime.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private animeOrigin: Anime[] = []

  anime$: Observable<Anime[]> = this.animeService.index$()

  constructor(private animeService: AnimeService) {
    this.anime$.subscribe(anime => {
      this.animeOrigin = anime
    })
  }

  searchAnime(event: CustomEvent) {
    const filteredAnime = this.animeOrigin.filter(anime => {
      return anime.title.toLowerCase().includes(event.detail.value.toLowerCase())
    })

    this.anime$ = of(filteredAnime)
  }

  transferAnime(anime: Anime) {
    this.animeService.anime = anime
  }
}
