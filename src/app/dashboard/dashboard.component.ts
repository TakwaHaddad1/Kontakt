import {Component, OnInit, Output} from '@angular/core';
import {ContactsService} from "../services/contacts.service";
import {Router} from "@angular/router";

export interface Person {
  'id': string,
  'firstName': string,
  'lastName': string,
  'email': string,
  
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public contacts: Person[] = [];

  public show_add_form = true;
  public selectedContact: Person | null = null; // Initialize selectedContact


  constructor(private _contactService: ContactsService,
              private _router: Router) {
  }

  ngOnInit(): void {
    this.getAllContacts();

  }

  getAllContacts(): void {
    this._contactService.getAllContacts().subscribe((contacts) => {
      this.contacts = contacts;
      console.log(this.contacts);
    })
  }

  showContactForm(params? : boolean) {
    if (params) {
      this.show_add_form = params
    } else {
      this.show_add_form = !this.show_add_form;
    }
  }
  showUpdateForm(contact: Person) {
    this.selectedContact = contact;
    this.show_add_form = false;
  }
  

  addNewContact (contact : Person) {
    this.contacts.push(contact);
  }

  deleteContactFromList(index : number) {
    console.count()
    this.contacts.splice(index, 1)
    console.log(this.contacts);
  }
  updateExistingContact(updatedContact: Person) {
    const index = this.contacts.findIndex(contact => contact.id === updatedContact.id);
    if (index !== -1) {
      this.contacts[index] = updatedContact;
    }
    this.show_add_form = true;
  }
  
}
