//console.log('hello');

var buttons_plus=document.querySelectorAll('.plus');
var buttons_min=document.querySelectorAll('.minus');
//console.log(buttons_plus);
var total=document.getElementById('total');
var prices=document.querySelectorAll('.price');
var like_btns=document.querySelectorAll('.like');
var delete_btns=document.querySelectorAll('.delete');

function sum(){
    var somme=0;
    for(let i=0;i<prices.length;i++)
    {
        somme+=Number(prices[i].innerHTML);
    }
    total.innerHTML=somme;
}

function calc(e){
var cible=e.target;
//console.log(cible);
var div=cible.parentElement;
//console.log(div);
var p = div.querySelector('p');
//console.log(p);
var value=Number(p.innerHTML);
value++;
p.innerHTML=value;

var td=div.parentElement;
//console.log(td);
var tr=td.parentElement;
var unit_Price=tr.querySelector('.unitPrice');
//console.log(unit_Price);
var up=Number(unit_Price.innerHTML);
var price=tr.querySelector('.price');
price.innerHTML=value*up;
sum();
}

function dec(e){
    var cible=e.target;
    //console.log(cible);
    var div=cible.parentElement;
    //console.log(div);
    var p = div.querySelector('p');
    //console.log(p);
    var value=Number(p.innerHTML);
    if(value>0)
    {
       value--;
    }
    p.innerHTML=value;
    var td=div.parentElement;
    //console.log(td);
    var tr=td.parentElement;
    var unit_Price=tr.querySelectorAll('.unitPrice');
    //console.log(unit_Price);
    var up=Number(unit_Price.innerHTML);
    var price=tr.querySelector('.price');
    price.innerHTML=value*up;
    sum();
}

function changeColor(e){
    var cible=e.target;
    if(cible.style.color!=="red")
    {
        cible.style.color='red';
    } 
    else{
        cible.style.color='black'
    }

}

    function deleteRow(e){
        var cible=e.target;
        var tr=cible.parentElement.parentElement.parentElement.parentElement;
        //console.log(tr);
        var price=tr.querySelector('.price');
       
        price.innerHTML=0;
        sum();
        tr.remove();
    }

    for(let i=0;i<buttons_plus.length;i++)
    {
        buttons_plus[i].addEventListener("click",calc);
    }
    for(let i=0;i<buttons_min.length;i++)
    {
        buttons_min[i].addEventListener("click",dec);
    }

    for(let i=0;i<like_btns.length;i++)
    {
        like_btns[i].addEventListener("click",changeColor);
    }
    for(let i=0;i<delete_btns.length;i++)
    {
        delete_btns[i].addEventListener("click",deleteRow);
    }

