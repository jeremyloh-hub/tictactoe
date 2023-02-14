const game = {
    screen: "game",
    player: "X",
    board: [
      //* array of arrays
      ["", "", ""], // [0][0] [0][1] [0][2]
      ["", "", ""], // [1][0] [1][1] [1][2]
      ["", "", ""], // [2][0] [2][1] [2][2]
      
    ],
  };

  const gaming = game.board;

  const WINNING_COMBINATION = [
    [[0][0],[0][1],[0][2]],
    [[1][0],[1][1],[1][2]],
    [[2][0],[2][1],[2][2]],
  ]
console.log(game.board[0[0]]);


  let player = document.querySelector('h2');

  function createBoard(){
    for (let i = 0; i < game.board.length; i++) {
        const element = game.board[i];
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const tbody = document.querySelector('tbody');
    
        td1.innerText = element[0];
        td2.innerText = element[1];
        td3.innerText = element[2];

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tbody.appendChild(tr);
        
        
    }
}

createBoard();


const selectedTd = document.querySelectorAll('td');

selectedTd.forEach(td => {
    td.addEventListener('click',function(event)
    {
        if(!td.dataset.clicked)
        {
            td.dataset.clicked = true;
            target = event.target;
            playerChange();
            target.innerText = game.player;
            
            for (let i = 0; i < WINNING_COMBINATION.length; i++) {
                const element = WINNING_COMBINATION[i];
                if(element[i] === 'X')
                {
                    console.log('you are the winner!');
                }
                else if(element[i] === 'O')
                {
                    console.log('you are the winner!');
                }
            }

        }//if
    })
})

function playerChange(){
    if(game.player === 'X')
    {
        game.player = 'O'
        player.innerText = 'player: X';
    }
    else
    {
        game.player = 'X'
        player.innerText = 'player: O';
    }
}

function compareBoard()
{

}





// for (let i = 1; i < 3; i--) {
        //     if(game.board[0][i] === target.innerText)
        //     {
        //         if(i === 'O')
        //         {
        //             console.log('u are the winner!');
        //             break;
        //         }
        //     }
            
        // }