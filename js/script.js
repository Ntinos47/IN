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


