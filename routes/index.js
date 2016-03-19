var express = require('express');
var router = express.Router();

/* GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

var pages = {
  '1': {'name': '360 aframe iphone hack', url: '/360-mobile.html', description: '360° video playback using a-frame. Hack to make this work on iphone (for use with cardboard adapter). On iOS, you must save as an app on your homescreen before video object can be mapped to inner sphere texture with autoplay.'},
  '2': {'name': '360 aframe no hack', url: '/360-aframe', description: '360° video playback using a-frame "native" video sphere.'},
  '3': {'name': '360 bg still', url: '/360-still', description: '360° jpeg still using a-frame'},
  '4': {'name': '360 bg still with video', url: '/360-still-video', description: '360° jpeg still with video in foreground'},
  '5': {'name': '360 bg still with video iphone hack', url: '/360-still-video-hack', description: '360° jpeg still with video in foreground with iphone video hack'}
}

var media = {
  '1': {'name': '360° mp4 equirectangular - scooting', 'path': '360Videos/sample-scooter-R0010118_er.mp4'}, // default
  '2': {'name': '360° m4v dual fisheye - biking', 'path': '360Videos/sample-biking-R0010056_360.m4v'},
  '3': {'name': '360° jpg equirectangular - reception', 'path': '360Photos/sample-reception-er-478325259.855159.jpg'},
  '4': {'name': '360° jpg equirectangular - warehouse', 'path': '360Photos/warehouse-bg-IXWL1980.jpg'},
  '5': {'name': '360° jpg equirectangular - crowd', 'path': '360Photos/crowd-478332738.104256.jpg'},
  '6': {'name': '16:9 webm - big buck bunny', 'path': 'images/big-buck-bunny_trailer.webm'}
}

router.get('/', function(req, res, next) {
  res.render('index.html', {pages: pages});
});

router.get('/360-aframe', function(req, res, next) {
  res.render('360-aframe.html', {media: media['1']});
});

router.get('/360-still', function(req, res, next) {

  function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  res.render('360-still.html', {media: media[getRandomInteger(3, 5).toString()]});
});

router.get('/360-still-video', function(req, res, next) {
  res.render('360-still-video.html', {bg: media['4'], media: media['6']});
});

router.get('/360-still-video-hack', function(req, res, next) {
  res.render('360-still-video-hack.html', {bg: media['4'], media: media['6']});
});

module.exports = router;
