import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {

  constructor() { }

  public getValue(){
    return 'Sample value';
  }

}
