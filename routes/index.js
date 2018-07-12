var express = require('express');
var router = express.Router();

// firebase ref
var database = require('../firebaseConfig');



/* GET home page. */
router.get('/',function(req, res) {
  var databaseRef = database.collection('items_collection');
  var allitems = databaseRef.get()
    .then(snapshot => { 
      var productArray = [];
      snapshot.forEach(doc => {
        if(!productArray.includes(doc.data())){
          productArray.push(doc.data());
          console.log('length of productarray inside if', productArray.length);
        }
        console.log('length of productarray outside if', productArray.length);
      //  console.log('the product array', productArray);
        // console.log(doc.id, '=>', doc.data());
      });
      console.log('length of productarray outside snapshot', productArray.length);
      var productChunks = [];
      var chunkSize = 3;
      for(var i = 0; i < productArray.length; i+=chunkSize){
        productChunks.push(productArray.slice(i, i + chunkSize));
      }
      res.render('shop/index', { title: 'Express', products: productArray });
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
    

   

});



router.get('/admin',function(req,res){
  res.render('admin/AddProduct');
});

router.get('/user/signin',function(req,res){
  res.render('user/signIn');
});

router.get('/user/profile',function(req,res){
  res.render('user/profile');
});

router.get('/add-to-cart/:id', function(req , res){
var productID = req.params.id;
var cart = new cart(req.session.cart ? req.session.cart : {})


})
module.exports = router;
