import { Component, OnInit, Input } from '@angular/core';
import { ICredit } from 'src/app/Services/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() data: Array<ICredit | null>

  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
