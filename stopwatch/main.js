var count = document.getElementById('count').innerHTML;
var countBig = 0;
isStop = false;
isReset=false;

function start(){
    var interval = setInterval(function(){ 
        if(isStop===false){
            if(isReset===true){
                count=0;
                countBig=0;
                isReset=false;
            }
            if(count===60){
                countBig++;
                document.getElementById('countBig').innerHTML=countBig;
                count=0;
            }
            document.getElementById('count').innerHTML=count++; 
        }
        console.log(isReset);
       // console.log(countBig);
      }, 200);      
}

function stop(){
    isStop=true;
}
function reset(){
    document.getElementById('countBig').innerHTML=0;
    document.getElementById('count').innerHTML=0;
    isReset=true;
}