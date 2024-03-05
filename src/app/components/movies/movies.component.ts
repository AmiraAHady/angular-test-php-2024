import { Component, OnInit } from '@angular/core';
import { MoviesDataService } from '../../services/movies-data.service';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent implements OnInit {
  constructor(private movieServ: MoviesDataService) {}

  ngOnInit(): void {
    this.movieServ.getValue();
  }
}
