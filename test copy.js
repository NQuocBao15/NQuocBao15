function process(size, min, max) {
    let array = [];
    document.getElementById("size");
    document.getElementById("min");
    document.getElementById("max");

    for(let i = 0; i < size; i++){
        array[i] = Math.floor(Math.random()*(max - min + 1) + min);
    }
    return array;
    
}