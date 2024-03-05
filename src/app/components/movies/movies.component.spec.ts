import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesDataService } from '../../services/movies-data.service';

import { MoviesComponent } from './movies.component';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;
  let moviesDataServ:MoviesDataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    moviesDataServ=TestBed.inject(MoviesDataService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test ngOnInit Logic',()=>{
    spyOn(moviesDataServ,'getValue')
    component.ngOnInit()
    expect(moviesDataServ.getValue).toHaveBeenCalled()
  })
});
