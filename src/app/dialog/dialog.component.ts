import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Person} from "../dashboard/dashboard.component";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Output() newContact = new EventEmitter<Person>();
  @Output() disable = new EventEmitter<boolean>();
  contact: Person = { firstName : '', lastName : '', email : '', id : '' };

  constructor() {
  }

  ngOnInit(): void {
  }

  addNewContact() {
    this.contact.id = Math.floor(Math.random() * (99) + 1).toString()
    this.contact.firstName = (<HTMLInputElement> document.getElementById('fname')).value;
    this.contact.lastName = (<HTMLInputElement> document.getElementById('lname')).value;
    this.contact.email = (<HTMLInputElement> document.getElementById('age')).value;
   
    console.log(this.contact);
   this.newContact.emit(this.contact);
   this.disable.emit(true);
  }

  cancel() {
    this.disable.emit(true);
  }
}
