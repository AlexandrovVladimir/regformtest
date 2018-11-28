import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-notice',
  templateUrl: './add-notice.component.html',
  styleUrls: ['./add-notice.component.styl']
})
export class AddNoticeComponent implements OnInit {

  noticeStatus = false;

  constructor() { }

  ngOnInit() {
  }

}
