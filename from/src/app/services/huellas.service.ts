import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HuellasService {

  inicio

  constructor(private http:HttpClient) { }

  iniciar(){

    const Header = { 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Accept': 'application/json, text/plain',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
      "Access-Control-Allow-Credentials": "true"
    }

    const headers = new HttpHeaders(Header)

    this.http.get('http://localhost:3000',{headers}).subscribe(resp=>{
      this.inicio=resp
      console.log("inicio: ",this.inicio)
    })
  }


  identify(tem){

    const Header = { 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Accept': 'application/json, text/plain',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
      "Access-Control-Allow-Credentials": "true"
    }

    const headers = new HttpHeaders(Header)

    // let body={
    //   templateXML: tem.templateXML,
    //   access_token:this.inicio.access_token
    // }
    let body={
      templateXML: tem,
      access_token:this.inicio.access_token
    }

    // console.log("body: ",body)
    // return
    this.http.post('http://localhost:3000/identify',body,{headers}).subscribe(resp=>{
      console.log("resp: ",resp)
    })
  }
}
