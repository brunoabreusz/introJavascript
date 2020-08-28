function f1(callBack){
    if (callBack) callBack();
}

function f2(){
    console.log('Oi amor');

}

f1(function(){
    f2();
})



