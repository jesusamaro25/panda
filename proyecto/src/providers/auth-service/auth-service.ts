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

  postData(credentials,type: String){

    return new Promise((resolve,reject)=>{

      let headers=new Headers({'content-type': 'application/json'});

      this.http.post(apiurl+type,JSON.stringify(credentials),{headers: headers}).subscribe(res=>{

        resolve(res.json())

      },(err)=>{

        reject(err)

      });

    });

  }

  putData(credentials,type,id){
    
    return new Promise((resolve,reject)=>{

      let url=type+id;

      let headers=new Headers({'content-type': 'application/json'});

      this.http.put(apiurl+url,JSON.stringify(credentials),{headers: headers}).subscribe(res=>{

        resolve(res.json())

      },(err)=>{

        reject(err)

      });

    });

  }


  getDataByID(type: String,id: string){

    return new Promise((resolve,reject)=>{

      let headers=new Headers({'content-type': 'application/json'});

      this.http.get(apiurl+type+id,{headers: headers}).subscribe(res=>{

        resolve(res.json())

      },(err)=>{

        reject(err)

      });

    });

  }

  getDataByOneParam(type: String,key,value){

    return new Promise((resolve,reject)=>{

      let headers=new Headers({'content-type': 'application/json'});

      this.http.get(apiurl+type+"?"+key+"="+value,{headers: headers}).subscribe(res=>{

        resolve(res.json())

      },(err)=>{

        reject(err)

      });

    });
    
  }


}
