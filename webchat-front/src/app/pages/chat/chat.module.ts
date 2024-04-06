import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { MessageListingModule } from './message-listing/message-listing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    CommonModule,
    MessageListingModule,
    FormsModule
  ],
  exports: [ChatComponent]
})
export class ChatModule { }
