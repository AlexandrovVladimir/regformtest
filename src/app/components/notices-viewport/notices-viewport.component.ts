import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { NoticesService } from "../../services/notices.service";
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators }  from '@angular/forms';

@Component({
  selector: 'app-notices-viewport',
  templateUrl: './notices-viewport.component.html',
  styleUrls: ['./notices-viewport.component.styl']
})
export class NoticesViewportComponent implements OnInit {
  currentUser: string;
  currentId: string;
  submitted = false;
  noteEditStatus = false;
  selectedIndex: null;
  onDeleteStatus = '';
  onDeleteNotice = new EventEmitter<any>();

  @Input() noticesItem;

  constructor(private currentNotice: NoticesService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.currentUser = localStorage.getItem('currentUser');
    this.currentId = JSON.parse(this.currentUser )[0]._id;
  }

  toggleEdit() {
    this.noteEditStatus = !this.noteEditStatus;
  }

  deleteNotice() {
    this.onDeleteStatus = 'Заметка удалена';
  }

}
