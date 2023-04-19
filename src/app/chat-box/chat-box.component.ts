import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent {

  items: string[] = [];

  msgInput: string = "";
  errorMessage: string = "";

  enviar() {
    if (this.msgInput !== "") {
      this.items.push(
        this.msgInput
      );
      this.msgInput = "";
      this.errorMessage = "";
    } else {
      this.errorMessage = "Por favor, preencha os campos corretamente.";
    }
  }
  deleting(){
    this.items = [];
  }
}