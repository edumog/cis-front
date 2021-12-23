import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StandardizationModel } from '../models/standardization.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private standardizationUrl: string = 'https://localhost:7129/api/Standardizer';

  constructor(private http: HttpClient) { }

  public standardizationClients(parameters: StandardizationModel) {
    let formData = new FormData();
    formData.append('columnDelimiter', parameters.columnDelimiter);
    formData.append('rowDelimiter', parameters.rowDelimiter);
    this.setFormDataArray('nameComposition', parameters.nameComposition, formData);
    this.setFormDataArray('lastNameComposition', parameters.lastNameComposition, formData);
    this.setFormDataArray('phoneNumbers', parameters.phoneNumbers, formData);
    formData.append('phoneDelimiter', parameters.phoneDelimiter ?? '');
    this.setFormDataArray('addresses', parameters.addresses, formData);
    formData.append('addressDelimiter', parameters.addressDelimiter ?? '');
    formData.append('file', parameters.file, parameters.file.name);
    return this.http.post<StandardizationModel>(this.standardizationUrl, formData);
  }
  private setFormDataArray(name: string, values: string[], formData: FormData) {
    values.forEach(value => {
      formData.append(name, value)
    });
  }
}
