import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class SheardServicesService {

constructor(private http:HttpClient) { }

post(obj:any,endpoint:any):any{
   return this.http.post<any>(`${environment.apiUrl}${endpoint}`,obj).subscribe(res=>{
    res
    },
    error=>{
        error
    }
    )
}

}
