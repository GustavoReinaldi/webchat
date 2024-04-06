import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageListingComponent } from './message-listing.component';



@NgModule({
  declarations: [
    MessageListingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [MessageListingComponent]
})
export class MessageListingModule { }
