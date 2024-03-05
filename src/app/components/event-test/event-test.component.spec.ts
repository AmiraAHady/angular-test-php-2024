import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { EventTestComponent } from './event-test.component';

describe('EventTestComponent', () => {
  let component: EventTestComponent;
  let fixture: ComponentFixture<EventTestComponent>;
  let de:DebugElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EventTestComponent);
    // class
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test initial value of countClicks', () => {
    expect(component.countClicks).toEqual(0);
  });
  it('test that countClicks increase after click button btnAddClick', () => {
    let btn = fixture.debugElement.query(By.css('#btnAddClick'));
    btn.triggerEventHandler('click');
    expect(component.countClicks).toEqual(1);
  });
  it('test that countClicks decrease after click button btnRemoveClick', () => {
    let btn = de.query(By.css('#btnRemoveClick'));
    btn.triggerEventHandler('click');
    expect(component.countClicks).toEqual(-1);
  });
  it('Test that h1 bind countClicks correctly', () => {
    let h1=de.query(By.css('h1'))
    let btn = fixture.debugElement.query(By.css('#btnAddClick'));
    btn.triggerEventHandler('click');
    fixture.detectChanges();
    expect(h1.nativeElement.textContent).toBe('1')
  });
});
