import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

declare let AOS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
})
export class HomeComponent implements OnInit {
  title = 'mumtaz-shop';
  countdown: string = '';
  intervalId: any;

  constructor() {}

  ngOnInit(): void {
    this.startCountdown();

    AOS.init({
      offset: 20,
      duration: 800,
      // easing: 'ease-in-sine',
      delay: 100,
    });
  }

  startCountdown(): void {
    const startDate = new Date(); // Current date and time
    const endDate = new Date(startDate.getTime() + 10 * 24 * 60 * 60 * 1000); // 10 days later

    this.intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      // Time calculations for days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the UI
      this.countdown = `${days} : ${hours} : ${minutes} : ${seconds} `;

      // If the countdown is over, clear the interval
      if (distance < 0) {
        clearInterval(this.intervalId);
        this.countdown = 'EXPIRED';
      }
    }, 1000); // Update every second
  }

  // downloadImage() {
  //   const link = document.createElement('a');
  //   link.href = 'https://example.com/image.jpg';
  //   link.download = 'image.jpg';
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // }
}
