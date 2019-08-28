var express = require('express');
var router = express.Router();

router.get('/telephone',function(req, res, next) {
  let obj = {
      id: 1,
      titleImg: 'https://i8.mifile.cn/v1/a1/5e6f96ac-352f-2522-caaa-d7e41f4dc601.webp',
      name: '小米MIX 3',
      newprice: 2599,
      oldprice: 3599,
      describe: 'DxO百分相机，四曲面陶瓷机身',
      result: [
        {
          pid: 1,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/905c13a84d8b70c9b9f4e3dee10a9515.jpg?thumb=1&w=344&h=280',
          name: 'Redmi Note 7',
          describe: '4800万拍照 长续航',
          newprice: '999起',
          oldprice: '￥1199'
        },
        {
          pid: 2,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/905c13a84d8b70c9b9f4e3dee10a9515.jpg?thumb=1&w=344&h=280',
          name: 'Redmi Note 7 Pro',
          describe: '索尼4800万超清拍照',
          newprice: 1399,
          oldprice: '￥1599'
        },
        {
          pid: 3,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dc1255fd3e70b6cdd6409627ca59d3f7.jpg?thumb=1&w=344&h=280',
          name: 'Redmi K20 Pro',
          describe: '骁龙855， 弹出全面屏',
          newprice: '2299起',
          oldprice: '￥2599'
        },
        {
          pid: 4,
          img: 'https://i8.mifile.cn/v1/a1/734e5838-b80a-a49f-ea12-5ef05eb513a5.webp',
          name: '小米CC9e',
          describe: '3200万自拍，4800万三摄',
          newprice: '1299起'
        },
        {
          pid: 5,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f5e8faabd72ee160e245447357f1708e.jpg?thumb=1&w=344&h=280',
          name: 'Redmi 7 ',
          describe: '4000mAh超长续航',
          newprice: '699起',
          oldprice: '￥799'
        },
        {
          pid: 6,
          img: 'https://i8.mifile.cn/v1/a1/22f203ab-44f4-6b89-06b4-e01e6f00c7f8.webp',
          name: 'Redmi 7A',
          describe: '骁龙8核处理器',
          newprice: '579起',
          oldprice: '￥599'
        },
        {
          pid: 7,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/baf1995a35e823c99e7c8ffd287d64ee.jpg?thumb=1&w=344&h=280',
          name: '小米9',
          describe: '全息幻彩机身，骁龙855',
          newprice: '2599起',
          oldprice: '￥2999'
        },
        {
          pid: 8,
          img: 'https://i8.mifile.cn/v1/a1/7d583942-b8f9-951a-1f27-c836b86c1473.webp',
          name: '小米CC9',
          describe: '3200万自拍，4800万三摄',
          newprice: '1799起'
        },
        {
          pid: 9,
          img: 'https://i8.mifile.cn/v1/a1/b7aa0b1e-90bb-725d-fbd1-1bb26a051606.webp',
          name: '小米MIX 2S',
          describe: '四曲面陶瓷机身，骁龙845',
          newprice: '1799起',
          oldprice: '￥2999'
        },
        {
          pid: 10,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9dfc8cb973124fddf32067b76dfb3e8f.jpg?thumb=1&w=344&h=280',
          name: '小米CC9 美图定制版',
          describe: '8GB+256GB，100%美图相机',
          newprice: '2599'
        },
        {
          pid: 11,
          img: 'https://i8.mifile.cn/v1/a1/86143982-11ca-5249-e90c-eecfdb9b98a0.webp',
          name: 'Redmi K20',
          describe: '弹出全面屏，4800万三摄',
          newprice: '1999起',
          oldprice: '￥2099'
        },
        {
          pid: 12,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c423f95037aba13b7c7fa5c583fe3dda.jpg?thumb=1&w=344&h=280',
          name: '小米Max 3',
          describe: '超大屏，超大电量',
          newprice: '1299起',
          oldprice: '￥1699'
        },
        {
          pid: 13,
          img: 'https://i8.mifile.cn/v1/a1/111cd2ee-0e6a-b286-d713-30a7fce817a3.webp',
          name: '黑鲨游戏手机 2',
          describe: '骁龙855，立体触控',
          newprice: '2699起',
          oldprice: '￥3499'
        },
        {
          pid: 14,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a20b33a5ee800e73a65e2f0e151b4a73.jpg?thumb=1&w=344&h=280',
          name: '小米9 SE',
          describe: '索尼4800万三摄，骁龙712',
          newprice: '1799起',
          oldprice: '￥1999'
        },
        {
          pid: 15,
          img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a9e3c6b607eb337e5a0d1330563e3eff.jpg?thumb=1&w=344&h=280',
          name: '红米6A',
          describe: '好看耐用/轻巧省心',
          newprice: 649,
          oldprice: '￥699'
        },
        {
          pid: 16,
          img: 'https://i8.mifile.cn/v1/a1/01669a1a-aa77-77bd-5425-2709a7451858.webp',
          name: '小米平板4',
          describe: '大屏、长续航、超薄电脑',
          newprice: '1399起'
        }
      ]
  }
  res.send(obj);
});

module.exports = router;