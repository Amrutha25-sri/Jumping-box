function bounceoff(a,box){
    if (a.x - box.x < a.width/2 +box.width/2
      && box.x - a.x < box.width/2 + a.width/2) {
    a.velocityX = a.velocityX * (-1);
    box.velocityX = box.velocityX * (-1);
  }
  if (a.y - box.y < box.height/2 + a.height/2
    && box.y - a.y < box.height/2 + a.height/2){
    a.velocityY = a.velocityY * (-1);
    box.velocityY = box.velocityY * (-1);
  }
  }