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

var counter = 0;
function changeToReplace3() {
    var replace1 = document.getElementById('Replace1');
    var replace3 = document.getElementById('Replace3');
    replace1.style.display = 'none';
    replace3.style.display = 'block';
    console.log('Content changed to Replace3');
        
    style()
}

function style() {
    var content = document.getElementById('wrap-text')

    content.style.transform = 'translate(0%)';
    content.style.left = '0';
}



var col1 = document.getElementById('col1');
var col2 = document.getElementById('col2');
var col3 = document.getElementById('col3');

var count = 1;
document.getElementById('switch2').addEventListener('click', function() {
    if (count == 1) {        
        col1.style.width = '24%';
        col2.style.width = '76%';
        col3.style.width = '0';
        col1.style.backgroundColor = 'rgb(195, 0, 0)';
        
        switch2.style.right = '75%';
        switch2.style.transform = 'translate(35%)';
    
    
        var w = window.innerWidth;
        mobile(w)

        count = 2;
        toggleContent1(count);
        
    } else if (count == 2) {
        col1.style.width = '34%';
        col2.style.width = '48%';
        col3.style.width = '18%';
        col1.style.backgroundColor = 'transparent';

        switch2.style.right = '17%';
        switch2.style.transform = 'translate(33%)';

        var w = window.innerWidth;
        mobile(w)

        count = 1;
        toggleContent1(count);
    }
});

function toggleContent1(count) {

    var Div1 = document.getElementById("col1");
    var Div2 = document.getElementById("col2");
    var Div3 = document.getElementById("col3");
    var newDiv1 = document.getElementById("colReplace1");
    var newDiv2 = document.getElementById("colReplace2");
    var newDiv3 = document.getElementById("colReplace3");

    if (count == 2) {
        var temp1 = Div1.innerHTML;
        var temp2 = Div2.innerHTML;
        var temp3 = Div3.innerHTML;

        Div1.innerHTML = newDiv1.innerHTML;
        Div2.innerHTML = newDiv2.innerHTML;
        Div3.innerHTML = newDiv3.innerHTML;

        newDiv1.innerHTML = temp1;
        newDiv2.innerHTML = temp2;
        newDiv3.innerHTML = temp3;
    } else if (count == 1) {
        var temp1 = newDiv1.innerHTML;
        var temp2 = newDiv2.innerHTML;
        var temp3 = newDiv3.innerHTML;

        newDiv1.innerHTML = Div1.innerHTML;
        newDiv2.innerHTML = Div2.innerHTML;
        newDiv3.innerHTML = Div3.innerHTML;

        Div1.innerHTML = temp1;
        Div2.innerHTML = temp2;
        Div3.innerHTML = temp3;
    }
}

function mobile(w) {
    
    var con = document.getElementById('container-1');
    var vid = document.getElementById('wrap-video');

    if (w < '1400') {
        switch2.style.right = '18%';
        switch2.style.transform = 'translate(50%)';
    }
    if (w < '1100') {
        switch2.style.height = 'auto';
        switch2.style.width = '80px';
    }
    if (w < '800') {
        con.style.flexDirection = 'column';

        col1.style.width = '100%';
        col1.style.maxHeight = '32vh';

        vid.style.top = '100%';
        vid.style.maxWidth = '160px';
        vid.style.marginLeft = 'auto';
        vid.style.marginRight = 'auto';
        vid.style.marginTop = 'auto';
        vid.style.marginBottom = 'auto';


    }
}
