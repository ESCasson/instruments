import { Component, OnInit } from '@angular/core';
import { DataService, ICredit } from '../Services/data.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  data: Array<ICredit | null> = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.data = this.dataService.getData()
    console.log('mainlayout', this.data[0])
  }

}
