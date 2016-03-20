var express = require('express');
var router = express.Router();

var pages = {
  '1': {'name': '360 aframe iphone hack', url: '/360-mobile.html', description: '360° video playback using a-frame. This works on both iphone safari and android chrome, however on iOS, you must save as an app on your homescreen first (to allow for inline playback). Hack from https://github.com/gtk2k/gtk2k.github.io'},
  '2': {'name': '360 aframe no hack', url: '/360-aframe', description: '360° video playback using a-frame "native" video sphere. This does not appear to work on either iOS nor Android Chrome '},
  '3': {'name': '360 bg still', url: '/360-still', description: '360° jpeg still using a-frame, works on all devices.'},
  '4': {'name': '360 bg still with video', url: '/360-still-video', description: '360° jpeg still with video in foreground, video does not play back on mobile.'},
  '5': {'name': '360 bg still with video iphone hack', url: '/360-still-video-hack', description: '360° jpeg still with video in foreground with iphone video hack - work in progress to adapter gtk2k mobile hack to a non-360 video object (a plane with video texture)'},
  '6': {'name': 'file system navigator', url: '/fsn', description: '<a href="https://www.youtube.com/watch?v=dxIPcbmo1_U">It\'s a unix system!</a><a href=https://en.wikipedia.org/wiki/Fsn">FSN</a>'},

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

router.get('/fsn', function(req, res, next) {
  res.render('fsn.html', {media: media, pages: pages});
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
