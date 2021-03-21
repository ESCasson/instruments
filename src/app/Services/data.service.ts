import { Injectable } from '@angular/core';
import data from './data.json';

@Injectable({
  providedIn: 'root'
})


export class DataService {


  data: Array<ICredit | null> = [];

  constructor() { 
  }

  getData(){
    this.data = data;
    return this.data
  }
}

export interface ICredit {
  ticker: string;
  price: number;
  assetClass: string;
}


