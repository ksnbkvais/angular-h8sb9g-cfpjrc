export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    link: string;
    rating: number;
    category: number;
  }
  
  export const products = [
    {
      id: 1,
      name: 'iPhone 13 128Gb',
      price: 372870,
      description: 'Ceramic Shield front glass back and aluminum design',
      image: '../assets/img/1.jpg',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000#!/item',
      category: 1
    },
    {
      id: 2,
      name: 'iPhone 14 128Gb',
      price: 420770,
      description: 'iOS 16 lets you customize your Lock Screen in fun new ways. Layer a photo to make it pop. Track your Activity rings. And see live updates from your favorite apps.',
      image: '../assets/img/2.jpg',
      rating:  5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-goluboi-106363150/?c=750000000#!/item',
      category: 1
    },
    {
      id: 3,
      name: 'iPhone 14 Pro Max 256Gb',
      price: 695370,
      description: 'Ceramic Shield front, Textured matte glass back and stainless steel design',
      image: '../assets/img/3.jpg',
      rating: 61536,
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-zolotistyi-106363335/?c=750000000#!/item',
      category: 1
    },
    {
      id: 4,
      name: 'iPhone 13 Pro Max 128Gb',
      price: 662490,
      description: 'colour:Alpine Green. Ceramic Shield front, Textured matte glass back and stainless steel design',
      image: '../assets/img/4.jpg',
      rating:  5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-pro-max-128gb-zelenyi-104079084/?c=750000000#!/item',
      category: 1
    },
  
    {
      id: 5,
      name: 'iPhone 12 128Gb',
      price: 375050,
      description: 'A powerful chip. Two-camera system. Incredibly durable Ceramic Shield front panel. And a gorgeous bright OLED display.',
      image: '../assets/img/5.jpg',
      rating:  5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-12-128gb-belyi-100656959/?c=750000000#!/item',
      category: 1
    },
    {
      id: 6,
      name: 'Fujifilm',
      price: 15.15,
      description: 'Fujifilm Instax Mini Instant Film Twin Pack (White)',
      image: '../assets/img/6.jpg',
      rating:  86634,
      link: 'https://www.amazon.com/Fujifilm-INSTAX-Instant-Twin-Pack/dp/B00EB4ADQW/ref=sr_1_21?qid=1647153263&s=electronics&sr=1-21&th=1',
      category: 2
    },
    { 
      id: 7,
      name: 'SanDisk',
      price: 16.09,
      description: 'SanDisk 128GB Ultra MicroSDXC UHS-I Memory Card with Adapter - 120MB/s, C10, U1, Full HD, A1, Micro SD Card - SDSQUA4-128G-GN6MA',
      image: '../assets/img/7.jpg',
      rating: 130950,
      link: 'https://www.amazon.com/SanDisk-128GB-MicroSDXC-Memory-Adapter/dp/B08GYKNCCP/ref=sr_1_23?qid=1647153263&s=electronics&sr=1-23',
      category: 2
    },
    {
      id: 8,
      name: 'WAVLINK USB 3.0',
      price: 99.86,
      description: 'WAVLINK USB 3.0 and USB C Universal Laptop Docking Station Dual Monitor with HDMI & DVI/VGA with Gigabit Ethernet, 6 USB Ports, Audio for Laptop, Ultrabook and PCs, More Efficient Home Office',
      image: '../assets/img/8.jpg',
      rating:  130950,
      link: 'https://www.amazon.com/Wavlink-Universal-Docking-Ethernet-Ultrabook/dp/B019XOJ874/ref=pd_rhf_se_s_pd_crcd_4/131-8933816-4140524?pd_rd_w=RitiD&pf_rd_p=ecb2692f-0365-4eca-a102-58ef51a608ce&pf_rd_r=Q9VVVYSQDGB5YAY7T9N3&pd_rd_r=ae01eb34-b655-42b5-aacd-3f6ee25f1684&pd_rd_wg=ioIHM&pd_rd_i=B019XOJ874&th=1',
      category: 2
    },
    {
      id: 9,
      name: 'Case for iPhone 11',
      price: 28.70,
      description: 'OTTERBOX COMMUTER SERIES Case for iPhone 11 - MINT WAY (SURF SPRAY/AQUIFER)',
      image: '../assets/img/9.jpg',
      rating: 2741,
      link: 'https://www.amazon.com/OtterBox-COMMUTER-Case-iPhone-11/dp/B07W3Q2HLX/ref=pd_rhf_se_s_pd_crcd_15/131-8933816-4140524?pd_rd_w=RitiD&pf_rd_p=ecb2692f-0365-4eca-a102-58ef51a608ce&pf_rd_r=Q9VVVYSQDGB5YAY7T9N3&pd_rd_r=ae01eb34-b655-42b5-aacd-3f6ee25f1684&pd_rd_wg=ioIHM&pd_rd_i=B07W3Q2HLX&psc=1',
      category: 2
    },
    {
      id: 10,
      name: 'Monitor',
      price: 213.00,
      description: 'LG 24MP400-B 24” Full HD (1920 x 1080) IPS Display with 3-Side Virtually Borderless Design, AMD FreeSync and OnScreen Control – Black',
      image: '../assets/img/10.jpg',
      rating:  4581,
      link: 'https://www.amazon.com/LG-24MP400-B-Virtually-Borderless-FreeSync/dp/B097NWD3TL/ref=pd_rhf_se_s_pd_crcd_18/131-8933816-4140524?pd_rd_w=RitiD&pf_rd_p=ecb2692f-0365-4eca-a102-58ef51a608ce&pf_rd_r=Q9VVVYSQDGB5YAY7T9N3&pd_rd_r=ae01eb34-b655-42b5-aacd-3f6ee25f1684&pd_rd_wg=ioIHM&pd_rd_i=B097NWD3TL&psc=1',
      category: 2
    },
  
  ];
  
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */