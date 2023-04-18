let counter = document.querySelector('.counter')
let reset = document.querySelector('.reset')
let decrease = document.querySelector('.decrease')
let increase = document.querySelector('.increase')

let count = 0;

increase.onclick = function(){
    count += 1;
    counter.innerHTML = count;
}

reset.onclick = function(){
    count = 0;
    counter.innerHTML = count;
}

decrease.onclick = function(){
    count -= 1;
    counter.innerHTML = count;
}