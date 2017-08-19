import {Component} from '@angular/core';
import {Images} from '../variable/my-variable';

@Component({
selector: 'my-slide',
template: `
 <div class="carousel">
 <ul class="slides">
 <li *ngFor="let image of images">
      <h2>{{image.title}}</h2>
      <img src="{{image.url}}" alt="">
</li>
</ul>
</div>
  `,
  styleUrls:['app/home/home.component.css']
  ,
})
export class CSSCarouselComponent {
	public images = IMAGES;
}
var IMAGES: Images[] = [
	{ "title": "Good Food", "url": "/images/cook1.jpg" },
	{ "title": "Love Cooking", "url": "/images/cook2.jpg" },
	{ "title": "Great Cooking", "url": "/images/cook3.jpg" },
	{ "title": "Great Cooks", "url": "/images/cook4.jpg" },
	{ "title": "Great Cook !! Great Food", "url": "/images/cook1.jpg" }	
];