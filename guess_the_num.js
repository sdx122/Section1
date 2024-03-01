<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>guess the number</title>
    <style>
        body{
            background-color: grey;
        }
        h2{
            background-color: black;
            color: white;
        }
        .butn{
            background-color: black;
            color: white;
        }
        /* form{
        
            padding: 60px 40px;
        
            margin: 20px;
        } */
        .box{
            border: 2px solid black;
            padding: 40px 30px;
            margin: 10px;
        }

    </style>
</head>
<body>
    <h2>Number guessing game</h2>
    <br>
    <p>
        Try and guess a random number between 1 and 100.
        you have 10 attempts to guess the right number.

    </p>
       
    
    <div class="box">
        <span >Guess a number</span>
        <br>
        <form>
            <input type="text" class="ip">

            <br>
            <br>
            <br>
            <br>
            <button class="butn">Submit guess</button>
        </form>
   <br>
        <div class="remarks">
         
        </div>
        <br>
        <p>Previous Guess : <div class="prevg"> </div>   </p>
        <p>Guesses remaining : <div class="guessrem"> </div> </p>
    </div>
    <script>
         
   
   let remar = document.querySelector('.remarks');
   let inp = document.querySelector('.ip');
   let pg = document.querySelector('.prevg');
   let gr = document.querySelector('.guessrem');
   let bn = document.querySelector('.butn');
   let form = document.querySelector('form');
   
   let onum = 10;

   const randomnmum = parseInt((Math.random())*100);
   gr.innerHTML = `${onum} and  ${randomnmum}`

   


   
   bn.addEventListener('click',(e) => {
       
       let ein = parseInt(inp.value);
       e.preventDefault();
        if(randomnmum > ein && ein < 100 && ein > 0){
            remar.innerHTML = `wrong guess, guess higher than ${ein}`;
            gr.innerHTML = `${(onum--)} and  ${randomnmum} `;
            pg.innerHTML = `${(ein)}`
        }
       
        else if(randomnmum < ein && ein < 100 && ein > 0)
        {
            remar.innerHTML =`wrong guess, guess lower than ${ein}`;
            gr.innerHTML = `${onum--} and  ${randomnmum}`;
            pg.innerHTML = `${(ein)}`
    
        }
        else if(randomnmum == ein  && ein < 100 && ein > 0)
        {
            remar.innerHTML = `you guessed the right number ${ein}`;
        }
        else{
            console.log(`yoyo`);
        }


    })




    </script>
</body>
</html>
