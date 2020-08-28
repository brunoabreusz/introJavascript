function recursiva(max){
    if(max >= 1000) return;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(0);

// uma função que se chama de volta.