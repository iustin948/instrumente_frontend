import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  images: any[] = [
    { source: 'https://rvb-img.reverb.com/image/upload/s--ZKsK0EM6--/a_0/f_auto,t_supersize/v1703820874/gnm4t32nh3xym53u1u2o.jpg', alt: 'Image 1' },
    { source: 'https://rvb-img.reverb.com/image/upload/s--blgAcTjM--/a_0/f_auto,t_supersize/v1703820883/zxm1tk5ux7xup1b5uknu.jpg', alt: 'Image 2' },
    { source: 'https://rvb-img.reverb.com/image/upload/s--5I6DjPJZ--/a_0/f_auto,t_supersize/v1703820889/q0fagowsjprcdfyhedwu.jpg', alt: 'Image 2' },
    { source: 'https://rvb-img.reverb.com/image/upload/s--AC6kzcw0--/a_0/f_auto,t_large/v1703820879/d95t4ejewdqyg3tyrvbx.jpg', alt: 'Image 2' },
    { source: 'https://rvb-img.reverb.com/image/upload/s--Ob_yZf8P--/a_0/f_auto,t_large/v1703820886/ullrzqub9zscm6jhhwor.jpg', alt: 'Image 2' },
    { source: 'https://rvb-img.reverb.com/image/upload/s--jhHun4wQ--/a_0/f_auto,t_supersize/v1703820886/ukhfg5s1thqlmjm7ndcc.jpg', alt: 'Image 2' },
    { source: 'https://rvb-img.reverb.com/image/upload/s--7t74NGdA--/a_0/f_auto,t_supersize/v1703820896/yxw9kukc58wkjzupniyw.jpg  ', alt: 'Image 2' },
    { source: 'https://rvb-img.reverb.com/image/upload/s--QiV5BErZ--/a_0/f_auto,t_supersize/v1703820889/bavk3sljj5kzybhpqau0.jpg', alt: 'Image 2' },

    // Add more images as needed
  ];

  constructor() { }

  ngOnInit() {
  }

}
