# aframe-theta-playground
## what does this do?
This app takes a picture from your theta s camera and displays it on a webpage accessible to your local computer rendered in 3d/vr via mozilla a-frame.
    
## how to use?
* clone and run `npm install`
* connect your computer to theta s camera via wifi
* run `npm start`
* then load localhost:3000 in your browser
* the index page will prompt the theta s camera to take a still image
* it will take ~10 seconds doing these things (TODO: this could be much improved)
* the still image will then be visible in your browser
* you can use the aframe built-in vr functionality to switch to your oculus or cardboard device

## Why?
* This is an experimental project to take advantage vr and a 360' camera mixed together. They pair well as a "poor man's" augmented reality combining real life imagery with the power of image processing and virtual reality displays.
* Future iterations of this could include scanning the scene for objects of interest via opencv or other image processing libraries, marking up the scene with "terminator vision", transmitting this remotely to a remote vr headset, ...

### todo?
* it is cumbersome to use macbook + thetas + iphone (for cardboard) all at the same time because the theta-s is connected directly to the macbook via ad-hoc network. how to reduce the complexity?
* it takes waaay too long to get a still image from the theta s, there are a lot of built-in interval wait times instead of checking with the device to see if it's "ready" to send the most recent image
* the use of a 302 redirect on the /thetacapture
