const videos = document.querySelectorAll("video");
for (const video of videos){
    video.addEventListener("click", function(){
        if(video.paused){
            video.play();
        }else{
            video.pause();
        }
    })
}