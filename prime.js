    let num=13 ;

    let factor=0;
    for( let i=1; i<=num; i++){
        if (num%i ==0){
            factor++;
        }
    }
    if(factor==2){ 
    console.log("Yes");
        
    }
    else {
        console.log("No");
    }


let str="naman"
let bag1="";
for(let i=str.length-1;i>=0;i--){
    bag1+=str[i];
}if(str==bag1){
    console.log("Yes");
}else{
    console.log("No");
}