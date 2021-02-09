class Form 
{
    constructor() {}
  
    display()
    {
      var title = createElement('h1')
      title.html("CAR RACING GAME");
      title.position(150,10);
    
      var text1=createElement('h3');
      text1.html("Enter your name here:")
      var input = createInput("");
      var button = createButton(' PLAY ');
     
      text1.position(150,80)
      input.position( 350,110 );
      button.position( 350,140);

      button.mousePressed(function()
                          {
                                text1.hide();
                                input.hide();
                                button.hide();

  
                                var name =input.value();

                                playerCount=  playerCount +1;

                               player.updateName(name);
                               player.updateCount(playerCount);

                                var greeting = createElement('h2');
                                greeting.html("Hello " + name);
                                greeting.position(150,100);
                         });

    }
}
