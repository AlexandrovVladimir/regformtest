import { Component, OnInit } from '@angular/core';
import { NoticesService } from "../../services/notices.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.styl']
})
export class NoticesComponent implements OnInit {
  notesHtml: string;
  currentUser: string;
  currentId: string;

  constructor(private currentNotice: NoticesService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.allNotes.getAllNotices()
    //   .subscribe(
    //   result => {
    //     this.notesHtml = result;
    //   },
    //   error => {
    //     console.log('allNotes: ', error);
    //   });


    // this.currentId = JSON.parse(this.currentUser )[0]._id;
    this.currentUser = localStorage.getItem('currentUser');
    this.currentId = JSON.parse(this.currentUser )[0]._id;

    console.log('1111111', JSON.parse(this.currentUser )[0]._id);

    this.currentNotice.getCurrentNotice(JSON.parse(this.currentUser)[0]._id)
      .subscribe(result => {
        this.notesHtml = result;
      }, error => {
        console.log('getCurrentNotice: ', error);
      })
  }

}
