import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-chat-group',
  templateUrl: './chat-group.component.html',
  styleUrls: ['./chat-group.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatMenuModule,
  ],
})
export class ChatGroupComponent implements OnInit {
  chatGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.chatGroup = this.formBuilder.group({
      message: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[^\s].*$/),
      ]),
    });
  }

  ngOnInit(): void {
    this.scrollToEnd();
  }

  scrollToEnd() {
    const container: any = document.getElementById('chatContainer');
    container.scrollTop = container.scrollHeight;
  }

  sendMessage() {
    const payload = this.chatGroup.value;
    console.log(payload);
    this.chatGroup.reset();
  }
}
