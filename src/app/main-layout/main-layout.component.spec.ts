import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayoutComponent } from './main-layout.component';


describe('MainLayoutComponent', () => {
  let fixture: MainLayoutComponent;
  let dataServiceMock;


  beforeEach(() => {
    fixture = new MainLayoutComponent(
      dataServiceMock
    )

  });

  it('should create', () => {
    
    expect(fixture).toBeTruthy();
  });

  
});
