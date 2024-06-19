
document.getElementById('mouse').addEventListener('click', function() {
    fadeOut()
    setTimeout(changeContent, 500);
});

document.getElementById('text1').addEventListener('click', function() {
    fadeOutText()
    setTimeout(changeToReplace3, 500);
});
document.getElementById('text2').addEventListener('click', function() {
    fadeOutText()
    setTimeout(changeToReplace4, 500);
});

function changeContent() {
    var text = document.getElementById('text');
    var re = document.getElementById('Replace1');
    text.style.display = 'none';
    re.style.display = 'flex';
    re.style.justifyContent = 'center';
    console.log('Content changed');
}

function changeToReplace3() {
    var replace1 = document.getElementById('Replace1');
    var replace3 = document.getElementById('Replace3');
    replace1.style.display = 'none';
    replace3.style.display = 'block';
    console.log('Content changed to Replace3');
        
    style()
}
function changeToReplace4() {
    var replace1 = document.getElementById('Replace1');
    var replace4 = document.getElementById('Replace4');
    replace1.style.display = 'none';
    replace4.style.display = 'block';
    console.log('Content changed to Replace4');
}

function style() {
    var content = document.getElementById('wrap-text')

    content.style.transform = 'translate(0%)';
    content.style.left = '0';
}





var col1 = document.getElementById('col1');
var col2 = document.getElementById('col2');
var col3 = document.getElementById('col3');
var switch2 = document.getElementById('switch2');
var count = 1;
document.getElementById('switch2').addEventListener('click', function() {
    if (count == 1) {        
        col1.style.width = '24%';
        col2.style.width = '76%';
        col3.style.width = '0';
        col1.style.backgroundColor = 'rgb(195, 0, 0)';
        
        switch2.style.right = '75%';
        switch2.style.transform = 'translate(30%)';
    
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
        switch2.style.transform = 'translate(30%)';

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




var col1 = document.getElementById('col1-2');
var col2 = document.getElementById('col2-2');
var col3 = document.getElementById('col3-2');
var switch3 = document.getElementById('switch3');
var counter = 1;
document.getElementById('switch3').addEventListener('click', function() {

    if (counter == 1) {            
        col1.style.width = '34%';
        col1.style.backgroundColor = 'transparent';
        col2.style.width = '48%';
        col3.style.width = '18%';
        col3.style.backgroundColor = 'rgb(195, 0, 0)';

        switch3.style.right = '17%';
        switch3.style.transform = 'translate(30%)';    

    
        var w = window.innerWidth;
        mobile(w)

        counter = 2;
        toggleContent(counter);
        
    } else if (counter == 2) {
        col1.style.width = '24%';
        col1.style.backgroundColor = 'rgb(195, 0, 0)';
        col2.style.width = '76%';
        col3.style.width = '0';
        col3.style.backgroundColor = 'transparent';
       
        switch3.style.right = '75%';
        switch3.style.transform = 'translate(30%)';

        var w = window.innerWidth;
        mobile(w)

        counter = 1;
        toggleContent(counter);
    }
});
function toggleContent(count) {

    var Div1 = document.getElementById("col1-2");
    var Div2 = document.getElementById("col2-2");
    var Div3 = document.getElementById("col3-2");
    var newDiv1 = document.getElementById("col1-2-re");
    var newDiv2 = document.getElementById("col2-2-re");
    var newDiv3 = document.getElementById("col3-2-re");

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




// script.js
function delayedFunction() {
    var element = document.getElementById('wrap-text');
    element.classList.add('fadeIn');
    
    var element1 = document.getElementById('text2');
    element1.classList.add('fadeInDown');

    var element2 = document.getElementById('text1');
    element2.classList.add('fadeInUp');
}
function fadeOut() {
    var element = document.getElementById('wrap-text');
    element.classList.add('fadeOut');
    setTimeout(delayedFunction, 500);
}

function fadeOutText() {
    var element1 = document.getElementById('text2');
    element1.classList.add('fadeOutText');

    var element2 = document.getElementById('text1');
    element2.classList.add('fadeOutText');

    var element2 = document.getElementById('switch');
    element2.classList.add('fadeOutText');
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
