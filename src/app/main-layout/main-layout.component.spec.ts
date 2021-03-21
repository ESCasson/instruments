import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayoutComponent } from './main-layout.component';


describe('MainLayoutComponent', () => {
  let fixture: MainLayoutComponent;
  let dataServiceMock;


  beforeEach(() => {
    dataServiceMock = {
      getData: jest.fn() 
    }
    fixture = new MainLayoutComponent(
      dataServiceMock
    )

  });

  it('should create', () => {
    
    expect(fixture).toBeTruthy();
  });
  describe('ngOnInit', ()=> {
    it('should add data to data variable', ()=>{ 
      dataServiceMock.getData.mockReturnValueOnce([1,2,3])
      expect(fixture.data.length).toEqual(0);
      fixture.ngOnInit();
      expect(dataServiceMock.getData()).toBeCalled;
      expect(fixture.data.length).toEqual(3);
      
    })
  })

  
});
