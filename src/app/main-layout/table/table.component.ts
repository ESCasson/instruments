import { Component, OnInit, Input } from '@angular/core';
import { ICredit } from 'src/app/Services/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() data: Array< ICredit | null> = [];

  types = ['Asset Class', 'Price', 'Ticker'];

  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

  handleSort(type: string){

    switch (type){
      case 'Asset Class' :
        this.sortAssetClass();
        break;
      case 'Price':
        this.sortPriceDesending();
        break;
      case 'Ticker':
        this.sortTicker();
        break;
      default:
        break ;
    }
    
  }
  sortTicker() {
    throw new Error("Method not implemented.");
  }
  sortPriceDesending() {
    this.data.sort((a, b) => {
    if (a.price < b.price) {
      return 1;
    }
    if (a.price > b.price) {
      return -1;
    }

    return 0;
  })
  }



  sortAssetClass() {
    throw new Error("Method not implemented.");
  }

  getCSSClasses(entry: ICredit, cell: any ){
    switch (entry.assetClass) {
      case 'Macro': 
       return this.getPriceCSSClass('macro', cell);
    
      case 'Equities': 
       return this.getPriceCSSClass('equities', cell);

      case 'Credit':
        return this.getPriceCSSClass('credit', cell);
      default: 
      break;
    }
  }

  getPriceCSSClass(assetClass: string, cell: any){
    if(cell.key === 'price'){
      if(cell.value >= 0){
        return assetClass +' ' + 'positive';
      } else {
        return assetClass + ' ' + 'negative';
      }
    } else return assetClass;

  }


}
