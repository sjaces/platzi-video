import React from 'react';
import './timer.css';

function formatedTime(secs){
    const minutes = parseInt(secs / 60, 11);
    const seconds = parseInt(secs % 60, 10);
    return `${formatTime(minutes)} : ${formatTime(seconds)}`
}

function formatTime(time){
    (time<10) ? time = '0' + time : time
    return time
}


function Timer(props) {
    return (
        <div className="Timer">
            <p> {formatedTime(props.currentTime)} /  {formatedTime(props.duration)}</p>
        </div>
    )
}
export default Timer