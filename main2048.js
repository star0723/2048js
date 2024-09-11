var board = new Array();
var score = 0;
 
document.addEventListener("DOMContentLoaded", function() {
    newgame();
});
 
function newgame() { 
 
    // 1.初始化棋盘
    init();
 
    // 2.随机两个格子生成数字
    createNumCell()
    createNumCell()

    score = 0
    let score1 = document.querySelector('#score')
    score1.textContent=0
}
 
  function init() { 
    // 外层循环控制行数，从0到3（共4行）
    for (let i = 0; i < 4; i++) {
        // 内层循环控制列数，从0到3（共4列)
        for (let j = 0; j < 4; j++) {
            // 使用原生JavaScript的querySelector选择对应位置的网格单元格元素
            let gridCell = document.querySelector("#grid-cell-" + i + "-" + j);
            
            // 设置该单元格的CSS 'top' 属性
            gridCell.style.top = getPosTop(i, j) + "px"; 
            
            // 设置该单元格的CSS 'left' 属性
            gridCell.style.left = getPosLeft(i, j) + "px"; 
        }
    }
    for (let i=0;i<4;i++){
        board[i]=new Array()
        for (let j=0;j<4;j++){
            board[i][j]=0
        }
    }
    score = 0
    updateBoardView()
}
function updateBoardView(){
    let gridContrainer = document.querySelector('#grid-container')
    let delGridCell = document.querySelectorAll('.number-cell')
         while(delGridCell.length>0){
            gridContrainer.removeChild(delGridCell[0])
            delGridCell = document.querySelectorAll('.number-cell')}
    for(i=0;i<4;i++){
        for(j=0;j<4;j++){
            let newNumCell = document.createElement("div");
            newNumCell.id='number-cell-' + i + '-' + j;
            newNumCell.className='number-cell';
            gridContrainer.appendChild(newNumCell);
        if(board[i][j]==0){
            newNumCell.style.width=0+"px";
            newNumCell.style.height=0+'px';
            newNumCell.style.top=getPosTop(i,j)+50+'px';
            newNumCell.style.left=getPosLeft(i,j)+50+'px';
        }
        else{
            newNumCell.style.width = '100px';
            newNumCell.style.height = '100px';
            newNumCell.style.top = gerPosTop(i, j) + 'px';
            newNumCell.style.left = gerPosLeft(i, j) + 'px';
            newNumCell.style.backgroundColor = getNumberBackgroundColor(board[i][j]);
            newNumCell.style.color = getNumberColor(board[i][j]);
            newNumCell.textContent = board[i][j];
        }
        }
    }
   }
// 生成数字
function createNumCell(){
    if(nospace(board)){
        return false
    } 
while(true){
         NumX = parseInt(Math.floor(Math.random()*4));
         NumY = parseInt(Math.floor(Math.random()*4));
        if(board[NumX][NumY]==0) break;
}
    let randNumber = GetRandom()
    board[NumX][NumY]= randNumber
    showNumberWithAnimation(NumX,NumY,randNumber);
    return true
}

   //键盘响应
let keyBoardEvent = document.addEventListener('keydown',function(event){
    switch(event.key){
        case 'ArrowLeft':{
            if(moveLeft()){
                createNumCell()
                isGameOver()
            }
            break;
        }
        case 'ArrowUp':{
                if(moveUp()){
                    createNumCell()
                    isGameOver()
                }
                break;
        }
        case 'ArrowRight':{
                if(moveRight()){
                    createNumCell()
                    isGameOver()
                }
                break;
        }
        case 'ArrowDown':{
                if(moveDown()){
                    createNumCell()
                    isGameOver()
                }
                break;
        }
    }
})

