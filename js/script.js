var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var mouse = document.getElementById('mouse');
var p1_re = document.getElementById('p1_re');
var p2_re = document.getElementById('p2_re');
var mou_re = document.getElementById('mou_re');



var counter = 1;
document.getElementById('mouse').addEventListener('click', function() {
    if (counter == 1) {
        
        counter = 2;
        changeContent(counter);

    } else if (counter == 2) {
        
        counter = 1;
        changeContent(counter);
    }
});


function changeContent(counter) {

    var text = document.getElementById('text');
    var re = document.getElementById('Replace');

    if (counter == 2) {
        var temp = text.innerHTML;

        text.innerHTML = re.innerHTML;

        re.innerHTML = temp;
    } else if (counter == 1) {
        var temp1 = re.innerHTML;

        re.innerHTML = div1.innerHTML;

        text.innerHTML = temp1;
    }
}


function changeId() {
    const element = document.getElementById("text");  // Get the DIV element
    element.classList.remove("text"); // Remove mystyle class from DIV
    element.classList.add("Replace"); // Add newone class to DIV
}