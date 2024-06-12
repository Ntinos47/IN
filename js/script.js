document.getElementById('mouse').addEventListener('click', function() {
    changeContent();
});

document.getElementById('text1').addEventListener('click', function() {
    changeToReplace3();
});

function changeContent() {
    var text = document.getElementById('text');
    var re = document.getElementById('Replace1');
    text.style.display = 'none';
    re.style.display = 'block';
    console.log('Content changed');
}

function changeToReplace3() {
    var replace1 = document.getElementById('Replace1');
    var replace3 = document.getElementById('Replace3');
    replace1.style.display = 'none';
    replace3.style.display = 'block';
    console.log('Content changed to Replace3');
}