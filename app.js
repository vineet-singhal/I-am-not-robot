var img1 = "https://p1.hiclipart.com/preview/214/819/584/3d-letters-and-characters-number-1-png-clipart-thumbnail.jpg";
var img2 = "https://p1.hiclipart.com/preview/711/874/415/3d-letters-and-characters-red-number-2-png-clipart-thumbnail.jpg";
var img3 = "https://p1.hiclipart.com/preview/69/448/19/3d-letters-and-characters-red-number-3-png-clipart-thumbnail.jpg";
var img4 = "https://p1.hiclipart.com/preview/214/316/1012/3d-letters-and-characters-red-number-4-illustration-png-clipart-thumbnail.jpg";
var img5 = "https://p1.hiclipart.com/preview/946/719/727/3d-letters-and-characters-number-8-clip-att-png-clipart-thumbnail.jpg";

var images = [img1,img2,img3,img4,img5];
var img_tags = [];

for(var i=0 ; i<5 ; i++){
    var imag = document.createElement("img");
    imag.src = images[i];
    imag.setAttribute("data-ns-test" , "img"+(i+1));
    imag.onclick = function(){clicked(this)};
    img_tags.push(imag);
}

var random_value = Math.floor(Math.random()*5);
var duplicate = document.createElement("img");
duplicate.src = images[random_value];
duplicate.setAttribute("data-ns-test" , "img"+(random_value+1));
duplicate.onclick = function(){clicked(this)};
img_tags.push(duplicate);

for(var i=0 ; i<6 ; i++){
    var x = Math.floor(Math.random()*6);
    var temp = img_tags[i];
    img_tags[i] = img_tags[x];
    img_tags[x] = temp;
}

for(var i=0 ; i<6 ; i++){
    document.body.appendChild(img_tags[i]);
}

var msg = document.createElement("h3");
msg.innerHTML = "Please click on the identical tiles to verify that you are not a robot";
document.body.appendChild(msg);

var reset = document.createElement("button");
reset.innerHTML = "Reset";
reset.style.display = "none";
reset.id = "reset";
reset.onclick = function(){reset1()};
document.body.appendChild(reset);

var verify = document.createElement("button");
verify.innerHTML = "Verify";
verify.style.display = "none";
verify.id = "btn";
verify.onclick = function(){verify1()};
document.body.appendChild(verify);

var selected = 0;

var clicked = function(image){
    if(image.style.border != "2px solid"){
        msg.innerHTML = "";
        selected++;
        image.style.border = "2px solid";
        reset.style.display = "block";
        if(selected==2){
            verify.style.display = "block";
        }
        else{
            verify.style.display = "none";
        }
    }
}

var para = document.createElement("p");
para.id = "para";

function reset1(){
    for(var i=0 ; i<6 ; i++){
        img_tags[i].style.border = "1px solid";
    }
    msg.innerHTML = "Please click on the identical tiles to verify that you are not a robot";
    reset.style.display = "none";
    verify.style.display = "none";
    para.innerHTML = "";
    selected = 0;
}

function verify1(){
    verify.style.display = "none";
    var check = document.querySelectorAll('[data-ns-test="'+duplicate.getAttribute("data-ns-test")+'"]');
    if(check[0].style.border == check[1].style.border && check[0].style.border == "2px solid"){
        para.innerHTML = "You are a human. Congratulations!";
    }
    else{
        para.innerHTML = "We can't verify you as a human. You selected the non-identical tiles.";
    }
    document.body.appendChild(para);
}