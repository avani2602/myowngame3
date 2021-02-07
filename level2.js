function Level2(){
    ground.y = 845;
    ground.x = 910;
    ground.width =  1820;
    knight.y = 800;
    
    knight.collide(ground);
    
    wall1.destroy();
    wall2.destroy();
    wall3.destroy();
    plat1.destroy();
    plat2.destroy();
    plat3.destroy();
    wall4.destroy();
    wall5.destroy();
    button1.destroy();
    button2.destroy();
    button3.destroy();
    plat4.destroy();
    plat5.destroy();
    acid.destroy();
    arrow1.destroy();
    arrow2.destroy();
    arrow3.destroy();
    arrow4.destroy();
    trigger.destroy();
    gate.destroy();
    key1.destroy();

    
  
}