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
    return this.http.post(`https://applicstud.herokuapp.com/studadd`,stud)
  }
  getAllStud(){
    return this.http.get<Array<Stud>>(`https://applicstud.herokuapp.com/studlist`)
  }
  getStudByID(id:number){
    return this.http.get<Stud>(`https://applicstud.herokuapp.com/studlist/${id}`)
  }

  updateStudById(userId:number,userdata:Stud){
    return this.http.put(`https://applicstud.herokuapp.com/studlist/${userId}`,userdata)
  }

  deleteUserById(id?:number){
    return this.http.delete(`https://applicstud.herokuapp.com/studlist/${id}`)
  }
}
