const express = require('express');
const router = express.Router();
const path= require('path');
const blogs= require('../data/blogs');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../templates/index.html'));
  })

  router.get('/blog', (req, res) => {
    // blogs.forEach(element => {
    //     console.log(element.title);
    // });
    res.sendFile(path.join(__dirname,'../templates/blogHome.html'));
  })

  router.get('/blogpost/:slug', (req, res) => {
    myblog= blogs.filter((e)=>
    {
           return e.slug == req.params.slug;
    })
    res.sendFile(path.join(__dirname,'../templates/'+req.params.slug+'.html'));
  })
  module.exports=router;