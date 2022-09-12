document.getElementById("Find").onclick=function(){
    var i;
    var sum=0;
    var kq;
    for (i=1;i<=9999;i++){
        sum+=i;
        if(sum>10000){
            kq=i-1;
            break;
        }
    }
    sum=0;
    for(i=1;i<=141;i++){
        sum+=i;
    }
    console.log(sum);
    document.getElementById("min-number").innerHTML=kq;
}

///hàm
function mu (a,b){
    var i;
    var sum=1;
    for(i=1;i<=b;i++){
        sum=sum*a;
    }
    return sum;
}

document.getElementById("Pow").onclick=function(){
    var num1=document.getElementById("NB1").value*1;
    var num2=document.getElementById("NB2").value*1;
    var kq=mu(num1,num2);
    document.getElementById("pow-number").innerHTML=kq;
}

function gt(a){
    if(a==1){
        return 1;
    }else
    return a*gt(a-1);
}
document.getElementById("Giaithua").onclick=function(){
    var number=document.getElementById("NB-gt").value*1;
    var kq=gt(number);
    document.getElementById("giaithua-number").innerHTML=kq;
}

///bai 4
function add(a){
    tittle="";
    if(a%2==0){
        tittle="div chẵn " + i;
    } else {
        tittle="div lẻ " + i;
    }

    if (a%2==0) {
        html='<div style="background:blue; height: 50px; padding: 5px; color:#fff">' + tittle + '</div>';  
        document.getElementById("InChanLe").insertAdjacentHTML('afterend',html);
    }else {
        html='<div style="background:red; height: 50px; padding: 5px; color:#fff">' + tittle + '</div>';  
        document.getElementById("InChanLe").insertAdjacentHTML('afterend',html);
    }
}
document.getElementById("Print").onclick=function(){
    var n=10;
    for(i=10;i>0;i--){
        add(i);
    }
}
