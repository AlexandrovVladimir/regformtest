import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {NoticesService} from '../../services/notices.service';

@Component({
  selector: 'app-add-notice',
  templateUrl: './add-notice.component.html',
  styleUrls: ['./add-notice.component.styl']
})
export class AddNoticeComponent implements OnInit {

  notesHtml: string;
  currentUser: string;
  currentId: string;
  submitted = false;

  @Output() onAddNotice = new EventEmitter<any>();

  arrayDisplay = [];

  constructor(private currentNotice: NoticesService) { }

  ngOnInit() {}

  getNotices() {
    this.currentNotice.getCurrentNotice(JSON.parse(this.currentUser)[0]._id)
      .subscribe(result => {
        this.notesHtml = result;
      }, error => {
        console.log('getCurrentNotice: ', error);
      });
  }

  onSubmit(noticesAddForm: NgForm) {
    this.currentUser = localStorage.getItem('currentUser');
    this.currentId = JSON.parse(this.currentUser )[0]._id;
    this.submitted = true;

    this.onAddNotice.emit(this.getNotices());


    this.currentNotice.addNewNotice(this.currentId, noticesAddForm.value)
      .subscribe(result => {
        this.notesHtml = result;
      }, error => {
        console.log('#noticesAddForm', error);
      });

  }

}
