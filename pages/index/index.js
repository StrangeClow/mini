//index.js
//获取应用实例
var app = getApp()
// page({ 
//   data:{
//         imgUrls: [
//           'images/lunbo-one.jpg',
//           'images/lunbo-two.jpg',
//           'images/lunbo-three.jpg',
//           'images/lunbo-four.jpg' 
//         ],
//         indicatorDots:true, 
//         autoplay:true,   
//         interval:3000,  
//         duration:1000 
//   } 
// }) 
 
Page({ 
  data: {   
    imgUrls: [    
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true, 
    autoplay: true, 
    interval: 3000, 
    duration: 1000
  }
})