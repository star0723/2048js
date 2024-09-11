function showNumberWithAnimation(i, j, Number){
    let numberCell = document.querySelector('#number-cell-' + i + '-' + j)
    numberCell.style.backgroundColor = getNumberBackgroundColor(Number) 
    numberCell.style.color = getNumberColor(Number)
    numberCell.textContent = Number
    // Set initial state for animation
    numberCell.style.width = '0px';
    numberCell.style.height = '0px';
    numberCell.style.top = getPosTop(i, j) + 'px';
    numberCell.style.left = getPosLeft(i, j) + 'px';
    if(numberCell.textContent==0){numberCell.textContent=""}

    // Trigger the animation
    setTimeout(function() {
        numberCell.style.width = '100px';
        numberCell.style.height = '100px';
        numberCell.style.transition = 'width 50ms, height 50ms, top 50ms, left 50ms';
    }, 0);
}


function scoreUpdate(scoreUp){
    let score1 = document.querySelector('#score')
    score=score+scoreUp
    score1.textContent=score
}
