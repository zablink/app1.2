export const sampleShops = [
  {
    id: 's1',
    name: 'ก๋วยเตี๋ยวปากหม้อ',
    address: { subdistrict:'ถนนพญาไท', district:'ราชเทวี', province:'กรุงเทพมหานคร', lat:13.764, lng:100.536 },
    categories:['ก๋วยเตี๋ยว','อาหารจานเดียว'],
    menu:[{name:'ปากหม้อหมูเด้ง', price:55},{name:'หมูตุ๋น',price:65}],
    delivery:[{name:'Grab', url:'#'}],
    package: 2
  },
  {
    id: 's2',
    name: 'ข้าวมันไก่นาย A',
    address: { subdistrict:'ถนนพญาไท', district:'ราชเทวี', province:'กรุงเทพมหานคร', lat:13.768, lng:100.541 },
    categories:['ข้าวมันไก่'],
    menu:[{name:'ข้าวมันไก่ต้ม', price:50},{name:'ไก่ทอด',price:55}],
    delivery:[{name:'LINE MAN', url:'#'}],
    package: 0
  },
  {
    id: 's3',
    name: 'ชาบูบ้านๆ',
    address: { subdistrict:'มักกะสัน', district:'ราชเทวี', province:'กรุงเทพมหานคร', lat:13.752, lng:100.56 },
    categories:['ชาบู','ปิ้งย่าง'],
    menu:[{name:'หมูสไลซ์', price:199}],
    delivery:[{name:'foodpanda', url:'#'}],
    package: 3
  }
];
