import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Person} from "../dashboard/dashboard.component";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private _fakeUri: string = 'assets/HalResources/contacts.json';

  constructor(private _http: HttpClient) {
  }
  getAllContacts(): Observable<Person[]> {
    return this._http.get<Person[]>(this._fakeUri);
  }
}
