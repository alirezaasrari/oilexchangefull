import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { Observable } from 'rxjs';
import { IPlaqueObject } from '../../InterFaces/IPlaqueObject';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  readonly oilexchangeserverurl = environment.baseApiUrl;

  constructor(private http : HttpClient) { }

  public checkHistory(num:string):Observable<IPlaqueObject[]>
{
  return this.http.get<any[]>(this.oilexchangeserverurl + `/HistoryCheck/historycheck?plaquenumber=${num}`);
}
}
