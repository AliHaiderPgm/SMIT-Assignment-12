
let output = document.querySelector('.output');
let clrOutput = document.querySelector('.clrOutput');

// Clear
clrOutput.addEventListener('click', () => {
    output.innerText = 'Your output';
});

// Output Function
function out(outputText){
    output.innerHTML = `${outputText}` ;
}
// Return today 
function today(){
    let newDate = new Date();
    let todayVal = newDate.getDay();
    return todayVal;
}

// Else if
function ifelse(){
    today();
    if(today == 0){
        out('Today is Sunday...');
    }
    else if(today == 1){
        out('Today is Monday...')
    }
    else if(today == 5){
        out('Today is Friday...')
    }
    else{
        out('Today is some other day...')
    }
}

// Switch
function swtch(){
    today();
    switch (today) {
        case 0:
            out('Today is Sunday...')
            break;
        case 1:
            out('Today is Monday...')
            break;
        case 5:
            out('Today is Friday...')
            break;
        default:
            out('Today is some other day')
            break;
    }
}

// Keep asking for name
function ask(){
    let name;
    do {
        name = prompt('Enter your name:')
    } while (name.trim()=='');
    
    if(name == null){
        return
    }
    else{
        name = name.trim();
        out(name);
    }

}