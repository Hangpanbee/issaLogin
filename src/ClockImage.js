import React from 'react';
import try1 from "/Users/justinandhang/Desktop/menu/menu2/src/photo/try.gif"
import lofi from "/Users/justinandhang/Desktop/menu/menu2/src/photo/turntable_vignette.gif"
import lo from "/Users/justinandhang/Desktop/menu/menu2/src/photo/lo.png";


function ClockImage() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    if (hours < 12) {
        document.body.style.backgroundImage = `url("${lofi}")`
        
    }
    else if (hours >= 12 && hours < 17) {
        document.body.style.backgroundImage = `url("${lofi}")`
    }else {
        document.body.style.backgroundImage = `url("${try1}")`
    }   
    return (
        document.body.style.backgroundImage
    )


}

export default ClockImage;