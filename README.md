# aframe-theta-playground
    playing around with mozilla aframe mixed with the theta s camera
    
## what does this do?
This app takes a picture from your theta s camera and displays it on a webpage accessible to your local computer rendered in 3d/vr via mozilla aframe.

## how to use?
* you need to connect theta s camera to wifi
* run npm start
* then hit localhost:3000
* the index page will prompt the theta s camera to take a still image
* it will take ~10 seconds doing these things
* the still image will then be visible in your browser
* you can use the aframe built-in vr functionality to switch to you oculus or cardboard device

## why?
* this is an experimental project to take advantage of both vr and 360' cameras. they pair very well as a "poor man's" augmented reality to mix real life imagery with the power of image processing and virtual reality displays.
* Future iterations of this could include scanning the scene for objects of interest via opencv or other image processing libraries, transmitting this remotely to a remote vr headset, ...

### todo?
* it is cumbersome to use macbook + thetas + iphone (for cardboard) all at the same time because the theta-s is connected directly to the macbook via ad-hoc network. how to reduce the complexity?
