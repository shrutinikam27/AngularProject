import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery {
  images = [
    '/1.png',
    '/2.png',
    '/3.png',
    '/4.png',

  ];
}
