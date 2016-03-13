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

# ffmpeg tips and tricks
ffmpeg get a list of current video devices on mac os x
        ffmpeg -f avfoundation -list_devices true -i ""

ffmpeg make hls from camera much wow
        ffmpeg -v verbose -f avfoundation -r 30 -i "0" -vcodec mjpeg -s 1280x720 -r 30 -c:v libx264 -crf 18 -profile:v baseline -maxrate 4000k -bufsize 1835k -pix_fmt yuv420p -flags -global_header -hls_time 10 -hls_list_size 6 -hls_wrap 10 -start_number 1 ./mystream.m3u8

ffmpeg write to mpeg2 from macbook camera (avfoundation video input device 0)
        ffmpeg -v verbose -f avfoundation -r 30 -i "0" -vcodec mpeg2video -s 1280x720 -g 15 -r 30 -me_method epzs -threads 4 -acodec mp2 -ac 2 -ab 192k -ar 44100 -maxrate 8000k -bufsize 4000k -pix_fmt yuv420p -async 1 -y -f vob output.mpg

pretty good quality mpeg2 streaming from the macbook camera
        ffmpeg -v verbose -f avfoundation -r 30 -i "0" -vcodec mpeg2video -s 1280x1024 -g 15 -r 30 -me_method epzs -threads 4 -acodec mp2 -ac 2 -ab 192k -ar 44100 -qscale:v 2 -pix_fmt yuv420p -async 1 -y -f vob output.mpg

ffmpeg input from video device 1 - ricoh theta routed via camtwist
        ffmpeg -v verbose -f avfoundation -r 30 -i "1" -vcodec mpeg2video -s 1280x720 -g 15 -r 30 -me_method epzs -threads 4 -acodec mp2 -ac 2 -ab 192k -ar 44100 -qscale:v 2 -pix_fmt yuv420p -async 1 -y -f vob output.mpg


ffmpeg input from video device 1 - ricoh theta routed via camtwist
// -filter:v fps=(your framerate) - may fix warnings, tried that:

Version with OUTPUT
        ffmpeg -v verbose -f avfoundation -r 30 -i "1" -vcodec mpeg2video -s 1280x720 -g 15 -r 30 -me_method epzs -threads 4 -acodec mp2 -ac 2 -ab 192k -ar 44100 -qscale:v 2 -filter:v fps=15 -pix_fmt yuv420p -async 1 -y -f vob output.mpg

Version with 15 rate input
        ffmpeg -v verbose -f avfoundation -r 15 -i "2" -vcodec mpeg2video -s 1280x720 -g 15 -r 30 -me_method epzs -threads 4 -acodec mp2 -ac 2 -ab 192k -ar 44100 -qscale:v 2 -pix_fmt yuv420p -async 1 -y -f vob output.mpg
