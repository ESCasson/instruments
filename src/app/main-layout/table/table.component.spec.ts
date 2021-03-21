import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('sorting', ()=> {
    beforeEach(()=>{
      component.data = [
          {
            "ticker": "ALPHA",
            "price": 3150.67,
            "assetClass": "Credit"
          },
          {
            "ticker": "BETA",
            "price": 3791.37,
            "assetClass": "Equities"
          },
          {
            "ticker": "GAMMA",
            "price": 2299.1,
            "assetClass": "Equities"
          },
          {
            "ticker": "ALPHA",
            "price": 3150.67,
            "assetClass": "Credit"
          },
          {
            "ticker": "BETA",
            "price": 3791.37,
            "assetClass": "SomethingElse"
          },
          {
            "ticker": "GAMMA",
            "price": -2299.1,
            "assetClass": "Equities"
          },
      ]
    })
    describe('handleSort', ()=>{
      
      it('should call sortAssetClass when passed Asset Class', ()=> {
        const sortAssetClassSpy = jest.spyOn(component, 'sortAssetClass')
         component.handleSort('Asset Class');
         expect(sortAssetClassSpy).toBeCalled();
      })

      it('should call sortPriceDescending when passed Price', ()=> {
        const sortPriceDescendingSpy = jest.spyOn(component, 'sortPriceDescending')
        component.handleSort('Price');
        expect(sortPriceDescendingSpy).toBeCalled();
     })
     it('should call sortAssetClass when passed Ticker', ()=> {
      const sortTickerSpy = jest.spyOn(component, 'sortTicker')
      component.handleSort('Ticker');
      expect(sortTickerSpy).toBeCalled();
   })
   it('should NOT call any sort function when passed random string', ()=> {
    const sortAssetClassSpy = jest.spyOn(component, 'sortAssetClass')
    const sortPriceDescendingSpy = jest.spyOn(component, 'sortPriceDescending')
    const sortTickerSpy = jest.spyOn(component, 'sortTicker')
    component.handleSort('aaa');
    expect(sortTickerSpy).toBeCalledTimes(0);
    expect(sortPriceDescendingSpy).toBeCalledTimes(0);
    expect(sortAssetClassSpy).toBeCalledTimes(0);
 })
    })

    describe('sortAssetClass', ()=> {
      const sortedArray = [
        {
          "ticker": "BETA",
          "price": 3791.37,
          "assetClass": "Equities"
        },
        {
          "ticker": "GAMMA",
          "price": 2299.1,
          "assetClass": "Equities"
        },
        {
          "ticker": "GAMMA",
          "price": -2299.1,
          "assetClass": "Equities"
        },
        {
          "ticker": "ALPHA",
          "price": 3150.67,
          "assetClass": "Credit"
        },
        {
          "ticker": "ALPHA",
          "price": 3150.67,
          "assetClass": "Credit"
        },
        {
          "ticker": "BETA",
          "price": 3791.37,
          "assetClass": "SomethingElse"
        }  
    ]

    it('should sort array macro, equities, credit, other', ()=>{
      component.sortAssetClass();
      expect(component.data).toEqual(sortedArray)
    })

    })

    describe('sortPriceDesending', ()=> {
      const sortedArray = [
        {
          "ticker": "BETA",
          "price": 3791.37,
          "assetClass": "Equities"
        },
        {
          "ticker": "BETA",
          "price": 3791.37,
          "assetClass": "SomethingElse"
        } ,
        {
          "ticker": "ALPHA",
          "price": 3150.67,
          "assetClass": "Credit"
        },
        {
          "ticker": "ALPHA",
          "price": 3150.67,
          "assetClass": "Credit"
        },
        {
          "ticker": "GAMMA",
          "price": 2299.1,
          "assetClass": "Equities"
        },
        {
          "ticker": "GAMMA",
          "price": -2299.1,
          "assetClass": "Equities"
        }, 
    ]
    it('should sort array by price desending', ()=>{
      component.sortPriceDescending();
      expect(component.data).toEqual(sortedArray)
    })

    })
    describe('sortTicker', ()=> {
      const sortedArray = [
        {
          "ticker": "ALPHA",
          "price": 3150.67,
          "assetClass": "Credit"
        },
        {
          "ticker": "ALPHA",
          "price": 3150.67,
          "assetClass": "Credit"
        },
        {
          "ticker": "BETA",
          "price": 3791.37,
          "assetClass": "Equities"
        },
        {
          "ticker": "BETA",
          "price": 3791.37,
          "assetClass": "SomethingElse"
        } ,
       
        {
          "ticker": "GAMMA",
          "price": 2299.1,
          "assetClass": "Equities"
        },
        {
          "ticker": "GAMMA",
          "price": -2299.1,
          "assetClass": "Equities"
        }, 
    ]
    it('should sort array by ticker', ()=>{
      component.sortTicker();
      expect(component.data).toEqual(sortedArray)
    })

    })
  })

});
