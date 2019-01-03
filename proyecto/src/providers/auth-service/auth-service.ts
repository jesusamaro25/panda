import { Injectable } from '@angular/core';
import { Headers,Http } from '@angular/http'

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
let apiurl='http://localhost:3000/'

@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

  postRegistro(credentials,type: String){

    return new Promise((resolve,reject)=>{

      let headers=new Headers({'content-type': 'application/json'});

      this.http.post(apiurl+type,JSON.stringify(credentials),{headers: headers}).subscribe(res=>{

        resolve(res.json())

      },(err)=>{

        reject(err)

      });

    });

  }

}
