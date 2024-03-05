import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Hero } from '../../hero';
import { HeroService } from '../../services/hero.service';

import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  //   Mocking==faking
  let mockHeroService: jasmine.SpyObj<HeroService>;
  let HeroArr: Hero[];

  beforeEach(() => {
    HeroArr = [
      {
        id: 100,
        name: 'superMan',
        strength: 120,
      },
      {
        id: 101,
        name: 'spiderMAn',
        strength: 140,
      },
    ];

    mockHeroService = jasmine.createSpyObj([
      'getHeroes',
      'addHero',
      'deleteHero',
    ]);
    mockHeroService.getHeroes.and.returnValue(of(HeroArr));
    TestBed.configureTestingModule({
      imports: [HeroesComponent],
    }).overrideComponent(HeroesComponent, {
      set: {
        providers: [{ provide: HeroService, useValue: mockHeroService }],
      },
    });

    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
  });
  it('Test heroes initial value should be empty', () => {
    expect(component.heroes).toHaveSize(0);
  });
  it('test that heros not empty after call ngOnInit',()=>{
    //   spyOn(mockHeroService,'getHeroes')
      component.ngOnInit()
      expect(component.heroes).toHaveSize(2)
      expect(mockHeroService.getHeroes).toHaveBeenCalled()
  })
});
