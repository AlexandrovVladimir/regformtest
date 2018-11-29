import { Component, OnInit } from '@angular/core';
import { NoticesService } from '../../services/notices.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.styl']
})
export class NoticesComponent implements OnInit {
  notesHtml: string;
  currentUser: string;
  currentId: string;
  submitted = false;
  arrayDisplay = [];

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
        console.log(result);
        return this.notesHtml;
      }, error => {
        console.log('getCurrentNotice: ', error);
      });
  }

  updateNoticesList() {
    this.arrayDisplay.push(this.getNotices());
  }

  deleteNotice(id: string) {
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
