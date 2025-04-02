function rec(n){
    if(n <= 1){
        return 1
    }

    rec(n-1)
    console.log(n);

    rec(n-1)
}

rec(5)