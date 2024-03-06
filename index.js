const erti = document.getElementById('display')

function appendToDisplay(input){
    erti.value += input;

}

function cleardisplay(input){
    erti.value = '';


}
function equals(input){

    erti.value = eval(erti.value);

}