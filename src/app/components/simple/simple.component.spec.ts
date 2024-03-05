// import { ComponentFixture, TestBed } from '@angular/core/testing';

import { fakeAsync, tick } from '@angular/core/testing';
import { SimpleComponent } from './simple.component';

describe('SimpleComponent', () => {
  let component: SimpleComponent;
 

  beforeEach( () => {
    component=new SimpleComponent()
  });

  it('Test initial value of num is 10',()=>{
    expect(component.num).toBe(10)
  })
  it('Test that value of num is 100 after call changeNum',()=>{
    component.changeNum()
    expect(component.num).toBe(100)
  })
  it('Test that value of num is 200 after call changeAfterTime',fakeAsync(()=>{
    component.changeAfterTime()
    tick(3000)
    expect(component.num).toBe(200)
  }))

 
});
