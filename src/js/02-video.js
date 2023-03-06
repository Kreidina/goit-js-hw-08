import throttle from "lodash.throttle";
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = "videoplayer-current-time";

saveTime();

const saveTimeThrottled = throttle(function(data) {
    const time = data.seconds;
    localStorage.setItem(STORAGE_KEY, time);
  }, 1000);
  
  player.on('timeupdate', function(data){
    saveTimeThrottled(data);
  });


function saveTime(){
    const pauseTime = localStorage.getItem(STORAGE_KEY);
    if(pauseTime){
        player.setCurrentTime(pauseTime);
    }
}
player.on('ended', function(){
    localStorage.removeItem(STORAGE_KEY);
    player.setCurrentTime(0)
}
);
