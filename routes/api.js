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

module.exports = router;