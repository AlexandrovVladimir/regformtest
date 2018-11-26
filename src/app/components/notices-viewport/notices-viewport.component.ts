import {Component, Input, OnInit, Output} from '@angular/core';
import { NoticesService } from "../../services/notices.service";
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators }  from '@angular/forms';

@Component({
  selector: 'app-notices-viewport',
  templateUrl: './notices-viewport.component.html',
  styleUrls: ['./notices-viewport.component.styl']
})
export class NoticesViewportComponent implements OnInit {
  notesHtml: string;
  currentUser: string;
  currentId: string;
  noticesForm: FormGroup;
  submitted = false;
  noteEditStatus = false;
  selectedIndex: null;

  @Input() noticesItem;

  constructor(private currentNotice: NoticesService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.currentUser = localStorage.getItem('currentUser');
    this.currentId = JSON.parse(this.currentUser )[0]._id;

    console.log('input', this.noticesItem);
  }

  toggleEdit(){
    this.noteEditStatus = !this.noteEditStatus;
  }

}
