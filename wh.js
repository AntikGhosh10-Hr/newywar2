
function openHeart(){
  const lines = document.querySelectorAll("#message p");
  const music = document.getElementById("song");

  // play music
  music.volume = 0;
  music.play();

  let vol = 0;
  let fade = setInterval(()=>{
    if(vol < 1){
      vol += 0.02;
      music.volume = vol;
    } else clearInterval(fade);
  },100);

  // show lines one by one
  lines.forEach((line, index)=>{
    setTimeout(()=>{
      line.style.opacity = "1";
    }, index * 1200);
  });

  // floating hearts
  setInterval(createHeart,300);
}

function createHeart(){
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";
  heart.style.left = Math.random()*100 + "vw";
  heart.style.fontSize = Math.random()*20 + 15 + "px";
  document.body.appendChild(heart);

  setTimeout(()=>heart.remove(),6000);
}
