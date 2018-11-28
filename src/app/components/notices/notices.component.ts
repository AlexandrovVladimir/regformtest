import {Component, EventEmitter, OnInit} from '@angular/core';
import { NoticesService } from '../../services/notices.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.styl']
})
export class NoticesComponent implements OnInit {
  notesHtml: string;
  currentUser: string;
  currentId: string;
  // noticesForm: FormGroup;
  submitted = false;
  // noteEditStatus = false;

  noticeStatus = false;

  constructor(private currentNotice: NoticesService) { }

  ngOnInit() {
    this.currentUser = localStorage.getItem('currentUser');
    this.currentId = JSON.parse(this.currentUser )[0]._id;
    this.getNotices();
  }


  getNotices() {
    this.currentNotice.getCurrentNotice(JSON.parse(this.currentUser)[0]._id)
      .subscribe(result => {
        this.notesHtml = result;

        console.log('result', this.notesHtml);
        return this.notesHtml;
      }, error => {
        console.log('getCurrentNotice: ', error);
      });
  }

  onSubmit(noticesAddForm: NgForm) {
    this.currentUser = localStorage.getItem('currentUser');
    this.currentId = JSON.parse(this.currentUser )[0]._id;
    this.noticeStatus = true;
    this.submitted = true;

    this.currentNotice.addNewNotice(this.currentId, noticesAddForm.value)
      .subscribe(result => {
        console.log('#noticesAddForm', result);
      }, error => {
        console.log(error);
      });
  }

  deleteNotice(id: string) {
    console.log(this.notesHtml);
    // this.currentUser = localStorage.getItem('currentUser');
    // console.log(this.currentUser);
    // this.currentId = JSON.parse(this.currentUser )[0]._id;

    // this.currentNotice.deleteNotice(id)
    //   .subscribe(result => {
    //     this.getNotices();
    //     console.log(result);
    //   }, error => {
    //     this.notesHtml = error;
    //     console.log('deleteNotice: ', error);
    //   });
  }

  // editNotice(id: string, data) {
  //   this.currentUser = localStorage.getItem('currentUser');
  //   this.currentId = JSON.parse(this.currentUser )[0]._id;
  //
  //   this.currentNotice.editNotice(id, data)
  //     .subscribe(result => {
  //       this.notesHtml = result;
  //     }, error => {
  //       this.notesHtml = error;
  //       console.log('deleteNotice: ', error);
  //     });
  // }
}
