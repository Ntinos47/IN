
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
        mobile(w, count)
        
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
        mobile(w, count)

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




var col1_2 = document.getElementById('col1-2');
var col2_2 = document.getElementById('col2-2');
var col3_2 = document.getElementById('col3-2');
var switch3 = document.getElementById('switch3');
var counter = 1;
document.getElementById('switch3').addEventListener('click', function() {

    if (counter == 1) {            
        col1_2.style.width = '34%';
        col1_2.style.backgroundColor = 'transparent';
        col2_2.style.width = '48%';
        col3_2.style.width = '18%';
        col3_2.style.backgroundColor = 'rgb(195, 0, 0)';
    
        switch3.style.right = '17%';
        switch3.style.transform = 'translate(30%)';    

        
        var w = window.innerWidth;
        mobiles(w, counter);

        
        counter = 2;
        toggleContent(counter);
        
    } else if (counter == 2) {
        col1_2.style.width = '24%';
        col1_2.style.backgroundColor = 'rgb(195, 0, 0)';
        col2_2.style.width = '76%';
        col3_2.style.width = '0';
        col3_2.style.backgroundColor = 'transparent';
       
        
        switch3.style.right = '75%';
        switch3.style.transform = 'translate(30%)';
        
        var w = window.innerWidth;
        mobiles(w, counter);

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




function fadeOut() {
    var element = document.getElementById('wrap-text');
    element.classList.add('fadeOut');
    setTimeout(delayedFunction, 500);
}
function delayedFunction() {
    var element = document.getElementById('wrap-text');
    element.classList.add('fadeIn');
    
    var element1 = document.getElementById('text2');
    element1.classList.add('fadeInDown');

    var element2 = document.getElementById('text1');
    element2.classList.add('fadeInUp');
}
function fadeOutText() {
    var element1 = document.getElementById('text2');
    element1.classList.add('fadeOutText');

    var element2 = document.getElementById('text1');
    element2.classList.add('fadeOutText');

    var element2 = document.getElementById('switch');
    element2.classList.add('fadeOutText');
}



function mobile(w, count) {
    
    var con = document.getElementById('container-1');
    var wr_vid = document.getElementById('wrap-video');
    var vid = document.getElementById('video');
    var logo = document.getElementById('logo3');
    var wcs= document.getElementById('wrap-content-side');
    var con = document.getElementById('con-slide');
    var t3 = document.getElementById('text3-3');
    var t4 = document.getElementById('text4-3');
    var t3_2 = document.getElementById('text3-5');
    var t4_2 = document.getElementById('text4-6');


    if (w < '800') {


        if (count == 2) {
            col1.style.maxHeight = '32vh';
            col2.style.maxHeight = '38vh';
            col3.style.height = '30vh';
            switch2.style.right = '-3%';
            logo.style.paddingTop = '10px';
        }else{
            col1.style.maxHeight = '50vh';
            col2.style.maxHeight = '50vh';
            col3.style.height = '0vh';
            switch2.style.right = '91%';
            switch2.style.transform = 'translateY(17%)';
            logo.style.paddingTop = '33px';
        }
        
        wcs.style.paddingTop = '65px';

        con.style.flexDirection = 'column';
        
        col1.style.width = '100%';
        
        wr_vid.style.top = '100%';
        wr_vid.style.maxWidth = '160px';
        wr_vid.style.marginLeft = 'auto';
        wr_vid.style.marginRight = 'auto';
        wr_vid.style.marginTop = 'auto';
        wr_vid.style.marginBottom = 'auto';
        
        vid.style.maxWidth = '200px';
        vid.style.padding = '20px';
        vid.style.height = 'auto';
        vid.style.width = '100%';
        
        col2.style.maxWidth = '100%';
        col2.style.width = '100%';
        
        col3.style.width = '100%';
        
        
        con.style.paddingTop = '30px';
        
        t3.style.width = '100%';
        t3.style.fontSize = '18px';
        t3.style.fontWeight = '500';
        
        t3_2.style.paddingTop = '15px';
        t3_2.style.fontSize = '22px';
        
        t4.style.fontWeight = '400';
        
        switch2.style.width = '70px';
        switch2.style.height = 'auto';
    }
}


function mobiles(w, count) {
        
    var con = document.getElementById('container-1');
    var wr_vid = document.getElementById('wrap-video');
    var vid = document.getElementById('video');
    var logo = document.getElementById('logo3');
    var con = document.getElementById('con-slide');
    var t3 = document.getElementById('text3');
    var t4 = document.getElementById('text4');
    var t3_2 = document.getElementById('text3-2');
    var t4_2 = document.getElementById('text4-2');


    if (w < '800') {


        if (count == 2) {
            col1_2.style.maxHeight = '50vh';
            col2_2.style.maxHeight = '50vh';
            col3_2.style.height = '0vh';
            switch3.style.right = '-8%';
            switch3.style.transform = 'translateY(17%)';
            logo.style.paddingTop = '33px';
        }else{
            col1_2.style.maxHeight = '32vh';
            col2_2.style.maxHeight = '38vh';
            col3_2.style.height = '30vh';
            switch3.style.right = '96%';
            logo.style.paddingTop = '5px';
        }
        
        con.style.flexDirection = 'column';
        
        col1_2.style.width = '100%';
        
        wr_vid.style.top = '100%';
        wr_vid.style.maxWidth = '160px';
        wr_vid.style.marginLeft = 'auto';
        wr_vid.style.marginRight = 'auto';
        wr_vid.style.marginTop = 'auto';
        wr_vid.style.marginBottom = 'auto';
        
        vid.style.maxWidth = '200px';
        vid.style.padding = '20px';
        vid.style.height = 'auto';
        
        col2_2.style.maxWidth = '100%';
        col2_2.style.width = '100%';
        
        col3_2.style.width = '100%';
        
        
        con.style.paddingTop = '30px';
        
        t3.style.width = '100%';
        t3.style.fontSize = '18px';
        t3.style.fontWeight = '500';
        
        t3_2.style.paddingTop = '15px';
        t3_2.style.fontSize = '22px';
        
        t4.style.fontWeight = '400';
        
        switch3.style.width = '70px';
        switch3.style.height = 'auto';
    };
};


var sidebarCount = 1;
document.getElementById('mapPointer').addEventListener('click', function() {
    if (sidebarCount == 1) {
        sidebarContent();
        sidebarCount = sidebarCount+1;
    }
});

function sidebarContent() {
    var Div1 = document.getElementById("col1");
    var newDiv1 = document.getElementById("mapReplace");
    var temp1 = Div1.innerHTML;
    Div1.innerHTML = newDiv1.innerHTML;
    newDiv1.innerHTML = temp1;
}


document.getElementById('backIcon').addEventListener('click', function() {
    console.log('dsfbhsdb');
    var Div1 = document.getElementById("mapReplace");
    var newDiv1 = document.getElementById("col1");
    var temp1 = Div1.innerHTML;
    Div1.innerHTML = newDiv1.innerHTML;
    newDiv1.innerHTML = temp1;
});