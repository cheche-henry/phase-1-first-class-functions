function receivesAFunction(spy) {
    console.log(spy())
}

function returnsANamedFunction() {
    return receivesAFunction
}

function returnsAnAnonymousFunction(){
    return (function() {
        console.log('Random function')
    })
    
}

