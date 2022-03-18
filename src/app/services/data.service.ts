import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllProvinces(): Observable<any> {
    return this.httpClient.get('https://www.el-tiempo.net/api/json/v2/provincias');
  }

  getProvinceInfo(id: string): Observable<any>{
    return this.httpClient.get(`https://www.el-tiempo.net/api/json/v2/provincias/${id}`);
  }
}
