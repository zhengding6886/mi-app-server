var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/telephone',function(req, res, next) {
  readTelePhone(function(arr){
    res.send(arr);
  })
});
router.get('/detail',function(req,res,next) {
  let pid = req.query.pid;
  readTelePhone(function(arr){
    for(item of arr){
      if(item.goods_id == pid){
        res.send(item);
        break;
      }
    }
  })
})

router.get('/relate',function(req,res,next){
    readDate('./data/related_recommend.json',function(obj){
        res.send(obj);
    })
})
router.get('/comments',function(req,res,next){
    readDate('./data/comments.json',function(obj){
        res.send(obj);
    })
})
router.get('/recommend',function(req,res,next){
    readDate('./data/recommend.json',function(obj){
        res.send(obj);
    })
})
router.get('/addcart',function(req,res,next){
    let pid = req.query.pid;
    let product = null;
    readTelePhone(function(arr){
        for(item of arr){
            if(item.goods_id == pid){
                product = item;
                break;
            }
        }
        addCart(product,function(result){
            res.send(result);
        })
    })

})
router.get('/cartNum',function(req,res,next){
    let obj = {};
    readCart(function(arr){
        obj.length = arr.length;
        obj.data = arr;
        res.send(obj);
    })
})

router.get('/deleteCart',function(req,res,next){
    let index = req.query.index;
    let result = {};
    readCart(function(arr){
        arr.splice(index,1);
        let length = arr.length;
        fs.writeFile('./data/cart.json',JSON.stringify(arr),err=>{
            if(!err){
                result.code = 200;
                result.msg = '加入购物车成功';
                result.length = length;
            }else{
                result.code = 500,
                result.msg = '加入购物车失败'
            }
            res.send(result);
        })
    })
})

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
        ]

        res.send(obj);
});

router.get('/parameters',function(req,res,next){
  readParameter(function(obj){
    res.send(obj);
  })
})
router.post('/user/login', function(req, res) {
    console.log(req.body)
    let obj={
        uName:'mi15539001368',
        uHeaderSrc:'https://avatars3.githubusercontent.com/u/52197755?s=460&v=4'
    }
    res.send(obj);

});
/** 读取手机参数的方法 */
function readParameter(fn){
  let obj = {};
  fs.readFile('./data/parameters.json','utf-8',(err,data)=>{
    if(!err){
      obj = JSON.parse(data);
    }else{
      console.log('数据读取失败',err);
    }
    fn(obj);
  })
}

/** 读取手机信息的方法 */
function readTelePhone(fn){
  let arr = [];
  fs.readFile('./data/telephone.json','utf-8',(err,data)=>{
    if(!err){
      arr = JSON.parse(data);
    }else{
      console.log('数据读取失败',err);
    }
    fn(arr);
  })
}

function addCart(data,fn){
    let result = {}
    readCart(function(arr){
        arr.push(data);
        let length = arr.length;
        fs.writeFile('./data/cart.json',JSON.stringify(arr),err=>{
            if(!err){
                result.code = 200;
                result.msg = '加入购物车成功';
                result.length = length;
            }else{
                result.code = 500,
                result.msg = '加入购物车失败'
            }
            fn(result)
        })
    })
}
function readCart(fn){
    let arr = [];
    fs.readFile('./data/cart.json','utf-8',(err,data)=>{
        if(!err){
            arr = JSON.parse(data);
        }else{
            console.log('数据读取失败',err);
        }
        fn(arr);
    })
}

/** 
 * 读取数据的方法
 * path: 文件路径
 * fn 回调函数
 *  */
function readDate(path,fn){
    let obj = null;
    fs.readFile(path,'utf-8',(err,data)=>{
        if(!err){
            obj = JSON.parse(data);
        }else{
            console.log('数据读取失败',err);
        }
        fn(obj);
    })
}

module.exports = router;