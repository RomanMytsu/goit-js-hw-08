import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LS_TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  const currentTime = data.seconds;
  localStorage.setItem(LS_TIME_KEY, currentTime);
}

player.setCurrentTime(JSON.parse(localStorage.getItem(LS_TIME_KEY)) || 0);
