var express = require('express');
var router = express.Router();
router.get('/list', function (req, res, next) {
    let obj = 
        [{
                "id": "15201",
                "left": "手机",
                "info": [{
                    "title_img": "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/69bf9d06a7285a70adbec96448d5377c.jpg?thumb=1&w=500&h=200",
                    "title": "手机",
                    "list": [{
                            "img": "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/fd53fdc35128c8d02db7f43d2c79ab74.png?thumb=1&w=120&h=120",
                            "name": "小米9"
                        },
                        {
                            "img": "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/fd53fdc35128c8d02db7f43d2c79ab74.png?thumb=1&w=120&h=120",
                            "name": "小米9"
                        },
                        {
                            "img": "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/fd53fdc35128c8d02db7f43d2c79ab74.png?thumb=1&w=120&h=120",
                            "name": "小米9"
                        },
                        {
                            "img": "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/fd53fdc35128c8d02db7f43d2c79ab74.png?thumb=1&w=120&h=120",
                            "name": "小米9"
                        }
                    ]
                }]
            },
            {
                "id": "15202",
                "left": "电视",
                "info": [{
                    "title_img": "//i8.mifile.cn/v1/a1/250eae49-3536-0d22-4f3a-5041affcb1f9!500x200.webp",
                    "title": "电视",
                    "list": [{
                            "img": "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b57a5efcc161ecb4020b930d5904349f.jpg?thumb=1&w=120&h=120",
                            "name": "75英寸 4S"
                        },
                        {
                            "img": "//i8.mifile.cn/b2c-mimall-media/90553f751c9eb6bda9a2ae7c4bce012b!120x120.jpg",
                            "name": "58英寸电视4A"
                        },
                        {
                            "img": "//i8.mifile.cn/b2c-mimall-media/2996355ec2c73f64f77b3abaae900958!120x120.jpg",
                            "name": "43英寸 4X"
                        },
                        {
                            "img": "//i8.mifile.cn/b2c-mimall-media/dd9d4b0def5801e3cadd96c69dae6976!120x120.jpg",
                            "name": "55英寸 4X"
                        }
                    ]
                }]
            },
            {
                "id": "15202",
                "left": "电脑",
                "info": [{
                    "title_img": "//i8.mifile.cn/v1/a1/efdcf401-f553-aef7-1751-43854b6f4a20!500x200.webp",
                    "title": "电脑",
                    "list": [{
                            "img": "//i8.mifile.cn/b2c-mimall-media/b082be9c2d30f3994a557a4aca91d341!120x120.jpg",
                            "name": "小米Air 12.5\""
                        },
                        {
                            "img": "//i8.mifile.cn/b2c-mimall-media/3385f8309f3e90669d7ea94ad7d3bab4!120x120.jpg",
                            "name": "小米Air 13.3\""
                        },
                        {
                            "img": "//i8.mifile.cn/b2c-mimall-media/017f3d87c70b1f5ad1be446549d36de5!120x120.png",
                            "name": "小米笔记本 15.6\""
                        },
                        {
                            "img": "//i8.mifile.cn/b2c-mimall-media/0643559b70964014c1d672cc783121d2!120x120.jpg",
                            "name": "小米Pro 15.6\""
                        }
                    ]
                }]
            },
            {
                "id": "15202",
                "left": "家电",
                "info": [{
                    "title_img": "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/17dbc837b82de528f8f4abf4ede0753a.jpg?thumb=1&w=500&h=200",
                    "title": "家电",
                    "list": [{
                            "img": "//i8.mifile.cn/b2c-mimall-media/3f00551566f5b5f08f843403d8688a84!120x120.png",
                            "name": "空调"
                        },
                        {
                            "img": "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8e6ced64092a564e21ec942684bc8fd6.jpg?thumb=1&w=120&h=120",
                            "name": "洗烘一体机"
                        },
                        {
                            "img": "//i8.mifile.cn/b2c-mimall-media/91eae10cc3b97bbb31d17048689a3e64!120x120.jpg",
                            "name": "净化器"
                        },
                        {
                            "img": "//i8.mifile.cn/b2c-mimall-media/8067837a77601ae4c7c784b97378c352!120x120.jpg",
                            "name": "净水器"
                        }
                    ]
                }]
            },
            {
                "id": "15202",
                "left": "路由",
                "info": [{
                    "title_img": "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f1042af20f63f37c30bd9399efdc0b7a.jpg?thumb=1&w=500&h=200",
                    "title": "路由器",
                    "list": [{
                            "img": "//i8.mifile.cn/b2c-mimall-media/d476bc82dbb8e04cfbd4191bb5099ac0!120x120.jpg",
                            "name": "路由4C 300M"
                        },
                        {
                            "img": "//i8.mifile.cn/b2c-mimall-media/45783652edc68726f36e97c76551da18!120x120.png",
                            "name": "路由4C 300M"
                        },
                        {
                            "img": "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/651a9878ffafc9e9a053d430fedddaa1.png?thumb=1&w=120&h=120",
                            "name": "路由4C 300M"
                        },
                        {
                            "img": "//i8.mifile.cn/b2c-mimall-media/57a598ecdccfd96d2006028d590699e3!120x120.jpg",
                            "name": "路由4C 300M"
                        }
                    ]
                }]
            },
            {
                "id": "15202",
                "left": "出行",
                "info": [{
                    "title_img": "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/55a9f5db1e6cd217a27b6b59d64509cd.jpg?thumb=1&w=500&h=200",
                    "title": "穿戴",
                    "list": [{
                            "img": "//i8.mifile.cn/b2c-mimall-media/aba8aeb2ae0b44e46fd9d5ed83bb3a99!120x120.png",
                            "name": "手环"
                        },
                        {
                            "img": "//i8.mifile.cn/b2c-mimall-media/d15b7dc7adbf00177677b22166e66a55!120x120.png",
                            "name": "智能手表"
                        },
                        {
                            "img": "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/20dd3bca5a12f85a6b51877926074768.jpg?thumb=1&w=120&h=120",
                            "name": "VR"
                        },
                        {
                            "img": "//i8.mifile.cn/b2c-mimall-media/aba8aeb2ae0b44e46fd9d5ed83bb3a99!120x120.png",
                            "name": "手环"
                        }
                    ]
                }]
            },
            {
                "id": "15202",
                "left": "出行",
                "info": [{
                    "title_img": "//i8.mifile.cn/v1/a1/ff205815-61e1-ef9f-d7d2-5650f1224c4b!500x200.webp",
                    "title": "出行",
                    "list": [{
                            "img": "//i8.mifile.cn/b2c-mimall-media/6c35232de6adf01edf626a01c7947f1c!120x120.png",
                            "name": "平衡车"
                        },
                        {
                            "img": "//i8.mifile.cn/b2c-mimall-media/13434bffc3b94eccc70f29ac2ede378a!120x120.jpg",
                            "name": "滑板车"
                        },
                        {
                            "img": "//i8.mifile.cn/b2c-mimall-media/50658c6368c4638b15eb692a9c2e31e5!120x120.jpg",
                            "name": "智能记录仪"
                        },
                        {
                            "img": "//i8.mifile.cn/b2c-mimall-media/ce8b3a94134ddf69f89fb4fe7ed72e96!120x120.jpg",
                            "name": "车载空气净化器"
                        }
                    ]
                }]
            },
            {
                "id": "15202",
                "left": "智能",
                "info": [{
                    "title_img": "//i8.mifile.cn/v1/a1/12ff1518-0d4e-516d-173b-97451db7e71d!500x200.webp",
                    "title": "智能",
                    "list": [{
                            "img": "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/60c481917f13192c4c98e1503c967b4a.png?thumb=1&w=120&h=120",
                            "name": "智能家庭"
                        },
                        {
                            "img": "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c97e1f3665ce0d2b1fe33f917c6a38ef.png?thumb=1&w=120&h=120",
                            "name": "无人机"
                        },
                        {
                            "img": "//i8.mifile.cn/b2c-mimall-media/39d9e95e0eca92582b61820a7bee39cf!120x120.jpg",
                            "name": "摄像机"
                        },
                        {
                            "img": "//i8.mifile.cn/b2c-mimall-media/1f389ef88be348742bc660d26facf5d6!120x120.jpg",
                            "name": "小爱音箱"
                        }
                    ]
                }]
            },
            {
                "id": "15288",
                "left": "灯具",
                "info": [{
                    "title_img": "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/0c177037f9584ae4a0d0f15928f36602.jpg?thumb=1&w=500&h=200",
                    "title": "灯具",
                    "list": [{
                            "img": "//i8.mifile.cn/b2c-mimall-media/407abb8cd9df8e5b524e43bc2f7048c6!120x120.jpg",
                            "name": "吸顶灯"
                        },
                        {
                            "img": "//i8.mifile.cn/b2c-mimall-media/015406a29c57c055210fd2364ab06a07!120x120.jpg",
                            "name": "床头灯"
                        },
                        {
                            "img": "//i8.mifile.cn/b2c-mimall-media/8df34177bd33bc990b90d4505fa0eaf2!120x120.jpg",
                            "name": "筒灯"
                        },
                        {
                            "img": "//i8.mifile.cn/b2c-mimall-media/c4ecc8b98846f10c1b36cd503723d405!120x120.jpg",
                            "name": "灯泡"
                        }
                    ]
                }]
            },
            {
                "id": "15202",
                "left": "家电",
                "info": [{
                    "title_img": "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/17dbc837b82de528f8f4abf4ede0753a.jpg?thumb=1&w=500&h=200",
                    "title": "家电",
                    "list": [{
                            "img": "//i8.mifile.cn/b2c-mimall-media/3f00551566f5b5f08f843403d8688a84!120x120.png",
                            "name": "空调"
                        },
                        {
                            "img": "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8e6ced64092a564e21ec942684bc8fd6.jpg?thumb=1&w=120&h=120",
                            "name": "洗烘一体机"
                        },
                        {
                            "img": "//i8.mifile.cn/b2c-mimall-media/91eae10cc3b97bbb31d17048689a3e64!120x120.jpg",
                            "name": "净化器"
                        },
                        {
                            "img": "//i8.mifile.cn/b2c-mimall-media/8067837a77601ae4c7c784b97378c352!120x120.jpg",
                            "name": "净水器"
                        }
                    ]
                }]
            },
            {
                "id": "15202",
                "left": "电脑",
                "info": [{
                    "title_img": "//i8.mifile.cn/v1/a1/efdcf401-f553-aef7-1751-43854b6f4a20!500x200.webp",
                    "title": "电脑",
                    "list": [{
                            "img": "//i8.mifile.cn/b2c-mimall-media/b082be9c2d30f3994a557a4aca91d341!120x120.jpg",
                            "name": "小米Air 12.5\""
                        },
                        {
                            "img": "//i8.mifile.cn/b2c-mimall-media/3385f8309f3e90669d7ea94ad7d3bab4!120x120.jpg",
                            "name": "小米Air 13.3\""
                        },
                        {
                            "img": "//i8.mifile.cn/b2c-mimall-media/017f3d87c70b1f5ad1be446549d36de5!120x120.png",
                            "name": "小米笔记本 15.6\""
                        },
                        {
                            "img": "//i8.mifile.cn/b2c-mimall-media/0643559b70964014c1d672cc783121d2!120x120.jpg",
                            "name": "小米Pro 15.6\""
                        }
                    ]
                }]
            },
            {
                "id": "15202",
                "left": "路由",
                "info": [{
                    "title_img": "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f1042af20f63f37c30bd9399efdc0b7a.jpg?thumb=1&w=500&h=200",
                    "title": "路由器",
                    "list": [{
                            "img": "//i8.mifile.cn/b2c-mimall-media/d476bc82dbb8e04cfbd4191bb5099ac0!120x120.jpg",
                            "name": "路由4C 300M"
                        },
                        {
                            "img": "//i8.mifile.cn/b2c-mimall-media/45783652edc68726f36e97c76551da18!120x120.png",
                            "name": "路由4C 300M"
                        },
                        {
                            "img": "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/651a9878ffafc9e9a053d430fedddaa1.png?thumb=1&w=120&h=120",
                            "name": "路由4C 300M"
                        },
                        {
                            "img": "//i8.mifile.cn/b2c-mimall-media/57a598ecdccfd96d2006028d590699e3!120x120.jpg",
                            "name": "路由4C 300M"
                        }
                    ]
                }]
            },
            {
                "id": "15202",
                "left": "手机",
                "info": [{
                    "title_img": "//i8.mifile.cn/v1/a1/250eae49-3536-0d22-4f3a-5041affcb1f9!500x200.webp",
                    "title": "手机",
                    "list": [{
                            "img": "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/fd53fdc35128c8d02db7f43d2c79ab74.png?thumb=1&w=120&h=120",
                            "name": "小米9"
                        },
                        {
                            "img": "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/fd53fdc35128c8d02db7f43d2c79ab74.png?thumb=1&w=120&h=120",
                            "name": "小米9"
                        },
                        {
                            "img": "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/fd53fdc35128c8d02db7f43d2c79ab74.png?thumb=1&w=120&h=120",
                            "name": "小米9"
                        },
                        {
                            "img": "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/fd53fdc35128c8d02db7f43d2c79ab74.png?thumb=1&w=120&h=120",
                            "name": "小米9"
                        }
                    ]
                }]
            },
            {
                "id": "15202",
                "left": "出行",
                "info": [{
                    "title_img": "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/55a9f5db1e6cd217a27b6b59d64509cd.jpg?thumb=1&w=500&h=200",
                    "title": "穿戴",
                    "list": [{
                            "img": "//i8.mifile.cn/b2c-mimall-media/aba8aeb2ae0b44e46fd9d5ed83bb3a99!120x120.png",
                            "name": "手环"
                        },
                        {
                            "img": "//i8.mifile.cn/b2c-mimall-media/d15b7dc7adbf00177677b22166e66a55!120x120.png",
                            "name": "智能手表"
                        },
                        {
                            "img": "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/20dd3bca5a12f85a6b51877926074768.jpg?thumb=1&w=120&h=120",
                            "name": "VR"
                        },
                        {
                            "img": "//i8.mifile.cn/b2c-mimall-media/aba8aeb2ae0b44e46fd9d5ed83bb3a99!120x120.png",
                            "name": "手环"
                        }
                    ]
                }]
            }
        ]

        res.send(obj);
});
router.get('/telephone', function (req, res, next) {
    let obj = {
        id: 1,
        titleImg: 'https://i8.mifile.cn/v1/a1/5e6f96ac-352f-2522-caaa-d7e41f4dc601.webp',
        name: '小米MIX 3',
        newprice: 2599,
        oldprice: 3599,
        describe: 'DxO百分相机，四曲面陶瓷机身',
        result: [{
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
            }, {
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
            }, {
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
            }, {
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
            }, {
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