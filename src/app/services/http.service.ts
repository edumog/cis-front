import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StandardizationModel } from '../models/standardization.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private standardizationUrl: string = 'https://localhost:7129/api/Standardizer';

  constructor(private http: HttpClient) { }

  public standardizationClients(parameters: StandardizationModel) {
    //return this.http.get(this.standardizationUrl);

    return this.http.post(this.standardizationUrl, parameters);
  }
}
