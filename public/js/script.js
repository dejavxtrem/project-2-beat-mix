 // Drum Arrays
let kicks = [false,false,false,false, false, false, false, false, false , false, false, false, false, false, false, false];

let snares = [false,false,false,false, false, false, false, false, false , false, false, false, false, false, false, false];

let hiHats = [false,false,false,false, false, false, false, false, false , false, false, false, false, false, false, false];


let rideCymbals = [false,false,false,false, false, false, false, false, false , false, false, false, false, false, false, false];

let k1 = [ kicks,  snares, hiHats, rideCymbals ] ;


const getDrums = (arrayName) => {
    
    switch(arrayName) {
    case 'kicks':
    return kicks;
    break;
    case  'snares':
    return snares;
    break
    case  'hiHats':
    return hiHats;
    break
    case 'rideCymbals':
    return rideCymbals;
    break;
    default :
    return ;
}
}

/*const getDrums = (arrayName) => {
    if ( arrayName === 'kicks') {
        return k1[0];
    }
    if (arrayName === 'snares') {
        return k1[1];
    }
    if ( arrayName === 'hiHats') {
        return k1[2];
    }
    if (arrayName === 'rideCymbals') {
        return k1[3];
    }
}*/




const toggleDrum = (arrayName, index) => {
    if ( !arrayName || index === undefined) {
        return ;
    }
    if ( index   < 0 || index  >  15 ) {
        return ;
    }
    if ( typeof(arrayName) !== "string" || typeof(index )!== "number") {
        return ;
    }
    let drums = getDrums(arrayName);
    
    drums[index] = !drums[index];
    
}

