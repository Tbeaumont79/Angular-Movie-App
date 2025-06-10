import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-movie-details',
  imports: [],
  templateUrl: './movie-details.html',
})
export class MovieDetails {
  movieId: number | null = null;
  route: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.movieId = parseInt(
      this.route.snapshot.paramMap.get('movieId') || '',
      10
    );
    if (isNaN(this.movieId)) {
      console.error(
        'Invalid movieId:',
        this.route.snapshot.paramMap.get('movieId')
      );
      this.movieId = null;
      throw new Error('Invalid movieId provided in the route movie details');
    }
  }
}
