document.getElementById('mouse').addEventListener('click', function() {
    changeContent();
});


function changeContent() {

    var text = document.getElementById('text');
    var re = document.getElementById('Replace1');

    var temp = text.innerHTML;
    text.innerHTML = re.innerHTML;
    re.innerHTML = temp;
    console.log(1);
}

;
document.getElementById('text1').addEventListener('click', function() {
    changeContent1();
});


function changeContent1() {

    var text = document.getElementById('text');
    var re = document.getElementById('Replace2');

    var temp = text.innerHTML;
    text.innerHTML = re.innerHTML;
    re.innerHTML = temp;
    console.log(2);

}
