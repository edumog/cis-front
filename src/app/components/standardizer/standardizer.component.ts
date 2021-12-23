import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/models/client.model';
import { StandardizationModel } from 'src/app/models/standardization.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-standardizer',
  templateUrl: './standardizer.component.html',
  styleUrls: ['./standardizer.component.css']
})
export class StandardizerComponent implements OnInit {

  public form: FormGroup = new FormGroup({});
  public propertiesControl: FormControl = new FormControl('');
  public columns: { columnName: string }[] = [];
  public displayedColumns: string[] = ['columnName'];
  public file: any;
  public clients: Client[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.propertiesControl.setValidators(Validators.required)
    this.form = new FormGroup({
      columnDelimiter: new FormControl(''),
      rowDelimiter: new FormControl(''),
      nameComposition: new FormControl(''),
      lastNameComposition: new FormControl(''),
      phoneDelimiter: new FormControl(''),
      phoneNumbers: new FormControl(''),
      addressDelimiter: new FormControl(''),
      addresses: new FormControl(''),
    })
  }

  public addToColumns() {
    if(this.propertiesControl.valid) {
      let column: { columnName: string } = { columnName: this.propertiesControl.value }
      this.columns.push(column);
      this.propertiesControl.reset();
    }
  }

  public onFileSelected(file: any) {
    this.file = file[0];
  }

  public submit() {
    if(this.form.valid || this.file) {
      let parameters: StandardizationModel = { ...this.form.value, file: this.file }
      this.httpService.standardizationClients(parameters)
      .subscribe((response: any) => {
        this.clients = response
        console.log('Clientes: ', this.clients);
      });
    }
  }
}
