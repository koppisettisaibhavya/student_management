import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stud } from './modal';

@Injectable({
  providedIn: 'root'
})
export class StudService {
  studData:Array<Stud> = [];
  constructor(private http:HttpClient) { }
  saveStud(stud:Stud){
    // this.userData.push(user)
    return this.http.post(`https://studapimean.herokuapp.com/studadd`,stud)
  }
  getAllStud(){
    return this.http.get<Array<Stud>>(`https://studapimean.herokuapp.com/studlist`)
  }
  getStudByID(id:string){
    return this.http.get<Stud>(`https://studapimean.herokuapp.com/studlist/${id}`)
  }

  updateStudById(userId:string,userdata:Stud){
    console.log("^^^")
    return this.http.put(`https://studapimean.herokuapp.com/studlist/${userId}`,userdata)
  }

  deleteUserById(id?:string){
    return this.http.delete(`https://studapimean.herokuapp.com/studlist/${id}`)
  }
}
