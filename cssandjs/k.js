let score = JSON.parse(localStorage.getItem('score'))||{
    WINS:0,
    LOSSES:0,
    TIES:0
}


function computermove(){
    const randMath = Math.random();
    if (randMath>0 && randMath<1/3){
       compmove = 'rock' 
    }else if(randMath>1/3 && randMath<2/3){
        compmove = 'paper';
    }else{
        compmove = 'scissor';
    }
    
    return compmove;
}


function rps(move){
    
    let usermove = move;
    let result = '';
    computermove();
    if (usermove==='rock'){
        if(compmove==='rock'){
            result = 'TIE';
        }
        else if (compmove==='paper'){
            result = 'You lose';
        }else{
            result = 'You win'
        }
    }else if (usermove==='paper'){
        if(compmove==='paper'){
            result = 'TIE';
        }
        else if (compmove==='scissor'){
            result = 'You lose';
        }else{
            result = 'You win'
        }
    }else{
        if(compmove==='rock'){
            result = 'TIE';
        }
        else if (compmove==='paper'){
            result = 'You lose';
        }else{
            result = 'You win'
        }
    }
    
    
    if(result==='You win'){
        score.WINS+=1;
    }else if(result==='You lose'){
        score.LOSSES+=1;
    }else{
        score.TIES+=1;
    }
    localStorage.setItem('score',JSON.stringify(score));

   
    document.querySelector('.result').innerHTML=`${result}`;
    document.querySelector('.choice').innerHTML= `You <img src= cssandjs/${usermove}-emoji.png class="move-icon"> Comp <img src=cssandjs/${compmove}-emoji.png class="move-icon">`;
    document.querySelector('.score').innerHTML=`WINS:${score.WINS} LOSSES:${score.LOSSES} TIES:${score.TIES}`;
    
}

function reset(){
    score.WINS=0;
    score.LOSSES=0;
    score.TIES=0;
    document.querySelector('.result').innerHTML='';
    document.querySelector('.choice').innerHTML= '';
    document.querySelector('.score').innerHTML='';
    localStorage.removeItem('score');
    document.querySelector('.score').innerHTML=`WINS:${score.WINS} LOSSES:${score.LOSSES} TIES:${score.TIES}`;
}

function autoplay(){
    computermove();
    usermove=compmove;
    computermove();
   
}