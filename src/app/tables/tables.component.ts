import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData;

  constructor() { }

  ngOnInit() {
      this.tableData1 = {
          headerRow: [ 'ID' , 'Username', 'Nom', 'Prénom' ],
          dataRows: [
              ['1', 'Ahmedbrahim', 'Ben brahim', 'ahmed'],
              ['2', 'mouradak', 'Akrmi', 'Mourad'],
              ['3', 'User Test', 'User', 'Test',],
              ['4', 'HediLakhal', 'Lakhal', 'Hedi'],
              ['5', 'Lorem Ipsum', 'Lorem', 'Ipsum'],
              ['6', 'Mohamedkhmiri', 'Khmiri', 'Mohamed'],
          ]
      };
      this.tableData2 = {
          headerRow: [ 'ID', 'Name',  'Salary', 'Country', 'City' ],
          dataRows: [
            ['1', 'Dakota Rice', 'Dakota', 'Rice', '4'],
            ['2', 'Minerva Hooper', 'Minerva', 'Hooper', '5'],
            ['3', 'User Test', 'User', 'Test', '0'],
            ['4', 'Philip Chaney', 'Philip', 'Chaney', '3'],
            ['5', 'Lorem Ipsum', 'Lorem', 'Ipsum', '4'],
            ['6', 'Mason Porter', 'Mason', 'Porter', '7']
          ]
      };
  }

}
