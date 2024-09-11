function getPosTop(i,j){
    return 20 + i*120;
}
function getPosLeft(i,j){
    return 20 + j*120;
}
//生成随机数
function GetRandom(){
    random=Math.random()
    if (random<0.5) {
        return 2
    }
    else return 4
 }
//方块背景色
 function getNumberBackgroundColor(number){
    switch(number){
        case 0:return "#cdc1b4";break
        case 2:return "#eee4da"; break; 
        case 4:return "#ede0c8"; break; 
        case 8:return "#f2b179"; break; 
        case 16:return "#f59563"; break; 
        case 32:return "#f67c5f"; break; 
        case 64:return "#f65e3b"; break; 
        case 128:return "#edcf72"; break; 
        case 256:return "#edcc61"; break; 
        case 512:return "#9c0"; break; 
        case 1024:return "#33b5e5"; break; 
        case 2048:return "#09c"; break; 
        case 4096:return "#a6c"; break; 
        case 8192:return "#93c"; break; 
    }
    return "black";
}
function getNumberColor(number) { 
    if(number <= 4)
        return "#776e65";

    return "white";
 }
    //方块生成检测
   function nospace(){
    for(i=0;i<4;i++){
        for(j=0;j<4;j++){
           if(board[i][j]===0){
            return false
           }
        }
    }
    return true
   }
    //不可移动检测
   function nomove(){
    for(i=0;i<4;i++){
        for(j=0;j<4;j++){
            if(i<3&&board[i+1][j]==board[i][j]){
                return false
            }
            if(j<3&&board[i][j+1]==board[i][j]){
                return false
            }
        }
    }
    return true
   }

// 移动判定\
function moveLeft(){
    moved = false
for(i=0;i<4;i++){
    let xnum = 0
    const arrj = board[i]
    const newarr1 = [0,0,0,0]
    const oldColumn=[board[i][0],board[i][1],board[i][2],board[i][3]]
    for(j=0;j<4;j++){
        if(arrj[j]!==0){
            newarr1[xnum]=arrj[j]
            xnum++
        }
    }
    for(j=0;j<3;j++){
        if(newarr1[j]==newarr1[j+1] && newarr1[j]!==0){
            newarr1[j]*=2
            newarr1[j+1]=0
            scoreUpdate(newarr1[j])
        }
    }
    xnum = 0
    const newarr2 =[0,0,0,0]
    for(j=0;j<4;j++){
        if(newarr1[j]!==0){
            newarr2[xnum]=newarr1[j]
            xnum++
        }
    } 

    board[i]=newarr2

    for(j=0;j<4;j++){
        if(oldColumn[j]!==board[i][j]){moved=true}
    }

    for(j=0;j<4;j++){showNumberWithAnimation(i, j, board[i][j])}}
    return moved
}


function moveRight(){
     moved = false
    for(i=0;i<4;i++){       
        let xnum = 3
        const arrj = board[i]
        const newarr1 = [0,0,0,0]
        const oldColumn=[board[i][0],board[i][1],board[i][2],board[i][3]]
        for(j=3;j>=0;j--){
            if(arrj[j]!==0){
                newarr1[xnum]=arrj[j]
                xnum--
            }
        }
        for(j=3;j>0;j--){
            if(newarr1[j]==newarr1[j-1] && newarr1[j]!==0){
                newarr1[j]*=2
                newarr1[j-1]=0
                scoreUpdate(newarr1[j])
            }
        }
        xnum = 3
        const newarr2 =[0,0,0,0]
        for(j=3;j>=0;j--){
            if(newarr1[j]!==0){
                newarr2[xnum]=newarr1[j]
                xnum--
            }
        }

        board[i]=newarr2

        for(j=0;j<4;j++){
            if(oldColumn[j]!==board[i][j]){moved=true}
        }

        for(j=0;j<4;j++){{showNumberWithAnimation(i, j, board[i][j])} }}
    return moved
    }

    function moveDown(){
        moved = false
        for(j=0;j<4;j++){
            let xnum = 3
            const newarr1 = [0,0,0,0]
            const oldColumn = [board[0][j], board[1][j], board[2][j], board[3][j]]
            for(i=3;i>=0;i--){
                if(board[i][j]!==0){
                    newarr1[xnum]=board[i][j]
                    xnum--
                }
            }
            for(i=3;i>0;i--){
                if(newarr1[i]==newarr1[i-1] && newarr1[i]!==0){
                    newarr1[i]*=2
                    newarr1[i-1]=0
                    scoreUpdate(newarr1[i])
                }
            }
            xnum = 3
            const newarr2 =[0,0,0,0]
            for(i=3;i>=0;i--){
                if(newarr1[i]!==0){
                    newarr2[xnum]=newarr1[i]
                    xnum--
                }
            } 
           for(i=0;i<4;i++){
            board[i][j] = newarr2[i]
           }

           for (let i = 0; i < 4; i++) {
            if (oldColumn[i] !== board[i][j]) {
                moved = true; // Set moved to true if any element has changed
            }
        }
           for(i=0;i<4;i++){{showNumberWithAnimation(i, j, board[i][j])}}}
        return moved
        }

        
        function moveUp(){
            moved = false
            for(j=0;j<4;j++){
                let xnum = 0
                const newarr1 = [0,0,0,0]
                const oldColumn = [board[0][j], board[1][j], board[2][j], board[3][j]];
                for(i=0;i<4;i++){
                    if(board[i][j]!==0){
                        newarr1[xnum]=board[i][j]
                        xnum++
                    }
                }
                for(i=0;i<4;i++){
                    if(newarr1[i]==newarr1[i+1] && newarr1[i]!==0){
                        newarr1[i]*=2
                        newarr1[i+1]=0
                        scoreUpdate(newarr1[i])
                    }
                }
                xnum = 0
                const newarr2 =[0,0,0,0]
                for(i=0;i<4;i++){
                    if(newarr1[i]!==0){
                        newarr2[xnum]=newarr1[i]
                        xnum++
                    }    
                }
                
               for(i=0;i<4;i++){
                board[i][j] = newarr2[i]
               }

                for (let i = 0; i < 4; i++) {
                    if (oldColumn[i] !== board[i][j]) {
                        moved = true; // Set moved to true if any element has changed
                        
                    }
                }

                for(i=0;i<4;i++){showNumberWithAnimation(i, j, board[i][j])}}
                return moved
    
            }



            function isGameOver() { 
                if(nomove() && nospace() ){
                    alert('游戏结束')
                }
            }