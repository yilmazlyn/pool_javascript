(function($) // début du pluggin
    {
        $.fn.game2048 = function() //function game2048 du pluggin
        {
            // génération du tableau (table, tr, td) vide (rempli de zéros)
            function generateMap() {
                let table = $('<table></table>');
                for (let y = 0; y < 4; y++) {
                    let line = $('<tr></tr>');
                    for (let x = 0; x < 4; x++) {
                        let cell = $('<td>0</td>').attr('x', x).attr('y', y).attr('nbr', 0);
                        line.append(cell);
                    }
                    table.append(line);
                }
                return table;
            }

            // génération d'un certain nombre de cases (argument cases) aléatoirement placées sur les cases d'attribut 'nbr=0'
            function generateCell(cells) {
                for (let i = 0; i < cells; i++) {
                    let empty = false;

                    while (empty === false) // tant que la case récupéré aléatoirement n'est pas vide
                    {
                        let x = Math.floor((Math.random() * 4));
                        let y = Math.floor((Math.random() * 4));
                        var elem = $('[x="' + x + '"][y="' + y + '"][nbr=0]');

                        if (elem[0])
                            empty = true;
                    }

                    let value = 2 * (Math.floor((Math.random() * 2) + 1));
                    if (value === 4 && Math.random() > 0.5)
                        value = 2;


                    elem.attr('nbr', value);
                    elem.text(value);
                }
            }


            // fonction de gestion des évenements (appuie de touches)
            $('html').keydown(function(event) {
                    switch (event['key']) {

                      case 'ArrowLeft':
                            // insérer algo move left
                            moveLeft();
                      console.log("Left");
                      break;

                      case 'ArrowUp':
                      // insérer algo move up
                      console.log("Up");
                      break;

                      case 'ArrowRight':
                      // insérer algo move right
                      console.log("Right");
                      break;

                      case 'ArrowDown':
                      // insérer algo move down
                      console.log("Down");
                      break;

                  }

                //to stop scrolling during the game with arrow keys
                document.onkeydown = function(event) {

                    event = event || window.event; //to include all options, object, whatever to event
                    var keyCode = event.keyCode;
                    if (keyCode >= 37 && keyCode <= 40) { //left arrow = 37
                                                         //up arrow = 38
                                                        //right arrow = 39
                                                        //down arrow = 40
                        return false;
                    }
                }
            });

            function moveLeft(){

          for (let y =0; y <4; y++)
          {

            for(let x =1; x < 4; x++)
            {
              let i = x;
              while((i > 0) && $('[x="' + (i -1) + '"][y="' + y + '"]').attr("nbr") == 0)
              {
                let t = $('[x="' + i + '"][y="' + y + '"]').attr("nbr");
                  $('[x="' + (i -1) + '"][y="' + y + '"]').attr("nbr", t);
                  $('[x="' + (i -1) + '"][y="' + y + '"]').text(t);
                  $('[x="' + i + '"][y="' + y + '"]').attr("nbr", 0);
                  $('[x="' + i + '"][y="' + y + '"]').text(0);
                  i--;
              }

            }

          }
        }


        function moveRight(){

      for (let y =0; y <4; y++)
      {

        for(let x =1; x < 4; x++)
        {
          let i = x;
          while((i > 0) && $('[x="' + (i -1) + '"][y="' + y + '"]').attr("nbr") == 0)
          {
            let t = $('[x="' + i + '"][y="' + y + '"]').attr("nbr");
              $('[x="' + (i -1) + '"][y="' + y + '"]').attr("nbr", t);
              $('[x="' + (i -1) + '"][y="' + y + '"]').text(t);
              $('[x="' + i + '"][y="' + y + '"]').attr("nbr", 0);
              $('[x="' + i + '"][y="' + y + '"]').text(0);
              i--;
          }

        }

      }
    }
        //   function moveLeft(){
        //
        // for (let y =0; y <4; y++)
        // {
        //
        //   for(let x =1; x < 4; x++)
        //   {
        //     if($('[x="' + x + '"][y="' + y + '"]').attr("nbr") === $('[x="' + x -1 + '"][y="' + y + '"]').attr("nbr"))
        //     {
        //         let t = $('[x="' + x -1 + '"][y="' + y + '"]').attr("nbr");
        //         $('[x="' + x -1 + '"][y="' + y + '"]').attr("nbr", t * 2)
        //     }
        //     else
        //     {
        //       return false;
        //     }
        //   }






        // début du code lancé
        $(this).append(generateMap()); // génération du tableau vide
        generateCell(2); // génération aléatoire de deux cases pleines (2 ou 4)
    }

})(jQuery); // fin du pluggin
