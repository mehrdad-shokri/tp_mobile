function seeder() {
    let seed = [];
    return {
        set:function(length){
            if( seed.length > 0 ) return seed;
            for( let i = 0; i < length; i++ ){
                seed.push(Math.random());
            }
            return seed;
        },
        get: function(){
            return seed;
        },
        clear: function(){
            seed = [];
        }
    };
}

function randomShuffle(ar,seed){
    const numbers = [];
    for( let a = 0, max = ar.length; a < max; a++){
        numbers.push(a);
    }
    const shuffled = [];
    let i = 0, len = ar.length;
    for(; i < len; i++ ){
        const r = parseInt(seed[i] * (len - i));
        shuffled.push(ar[numbers[r]]);
        numbers.splice(r,1);
    }
    return shuffled;
}

export {seeder, randomShuffle};
