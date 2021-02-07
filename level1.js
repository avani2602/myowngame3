function Level1(){
    knight.collide(ground);
    // knight.collide(plat1);
    knight.collide(plat2);
    knight.collide(plat3);
    // knight.collide(plat4);
    knight.collide(plat5);
  
    knight.collide(wall1);
    knight.collide(wall2);
    knight.collide(wall3);
    knight.collide(wall4);
    knight.collide(wall5);
    knight.bounceOff(edges);
    ground.bounceOff(edges);
    plat4.bounceOff(edges)
    plat1.bounceOff(edges);
    plat1.bounceOff(wall1);
    plat2.bounceOff(edges);
    plat2.bounceOff(wall1);
    plat3.bounceOff(wall2);
    plat3.bounceOff(wall5);
  
  
    
    if(keyDown("space")){
      knight.velocityY = -12;
    }
  
    knight.velocityY = knight.velocityY + 0.8;
  
    if(keyDown("right")){
      knight.x = knight.x+12;
    }
  
    if(keyDown("left")){
      knight.x = knight.x-12;
    }
  
    if(knight.isTouching(button1)){
      wall5.destroy();
    }
    if(knight.isTouching(button2)){
      ground.y = ground.y  + 6;
      acid.destroy();
    }
    if(knight.isTouching(plat4)){
      plat4.y = plat4.y - 6;
      knight.y = plat4.y- 50;
    }
    if(knight.isTouching(button3)){
      plat4.destroy();
      plat5.visible = true;
      trigger.visible = true;
      gate.visible = true;
    }
    if(knight.isTouching(acid) || knight.isTouching(arrow1) || knight.isTouching(arrow2) || knight.isTouching(arrow3) || knight.isTouching(arrow4)){
      knight.destroy();
    }
    if(knight.isTouching(trigger)){
      arrow1.velocityY = -9;
      arrow2.velocityY = -9;
      arrow3.velocityY = -9;
      arrow4.velocityY = -9;
  
    }
    if(knight.isTouching(plat1)){
      knight.velocityX = plat1.velocityX;
      knight.velocityY = 0;
      knight.y = plat1.y- 50;

    }
    knight.velocityX = 0;
    
}