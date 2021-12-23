import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.css']
})
export class ClientsTableComponent implements OnInit, AfterViewInit {

  public displayColumns: string[] = ['name', 'lastName'];

  @Input() clients: Client[] = [];

  public dataSource = new MatTableDataSource<Client>(this.clients);

  constructor() { }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {

  }

}
