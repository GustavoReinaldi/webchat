import { Component, Input, OnInit } from '@angular/core';
import { MessageModel } from 'src/app/interface/message-interface';

@Component({
  selector: 'app-message-listing',
  templateUrl: './message-listing.component.html',
  styleUrls: ['./message-listing.component.scss']
})
export class MessageListingComponent implements OnInit {
  @Input()
  messages : MessageModel [] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
