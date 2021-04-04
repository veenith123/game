class Game{
  constructor(){

  }
  getState() {
      var gameStateRef = database.ref('gameState');
      gameStateRef.on("value", function (data) {
          gameState = data.val();
      })

  }

  update(state) {
      database.ref('/').update({
          gameState: state
      });
  }
  async start() {
          if (gameState === 0) {
              player = new Player();
              var playerCountRef = await database.ref('playerCount').once("value");
              
              if (playerCountRef.exists()) {
                  playerCount = playerCountRef.val();
                  player.getCount();
              }
              form = new Form()
              form.display();
            }
            sling1 = createSprite(80,102);
            sling1.scale = 0.50;
            sling1.addImage("sling1",sling1_img);

            sling2 = createSprite(67,82);
            sling2.scale = 0.45;
            sling2.addImage("sling2",sling2_img);

            sling3 = createSprite(74,69,14,5);
            sling3.scale = 1.5;
            

            slinga = createSprite(1465,102);
            slinga.scale = 0.50;
            slinga.addImage("slinga",slinga_img);

            slingb = createSprite(1452,82);
            slingb.scale = 0.45;
            slingb.addImage("sling1b",slingb_img);
            
        }
        play(){
            form.hide();
    
            Player.getPlayerInfo();
            
            if(allPlayers !== undefined){
              background(bg2_img);
              }
            drawSprites();
        }
      }

      
    
    