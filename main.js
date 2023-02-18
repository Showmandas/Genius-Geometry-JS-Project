let calculateTriangle=document.getElementById('calculateTriangle');
let calculateRectangle=document.getElementById('calculateRectangle');
let paraArea=document.getElementById('paraArea');
let rhombusArea=document.getElementById('rhombusArea');
let pentagonArea=document.getElementById('pentagonArea');

// calculation for triangle 
calculateTriangle.addEventListener('click',function(){

    let b=document.getElementById('base');
    let bVal=b.value;
    let bNumVal=parseFloat(bVal);
    let h=document.getElementById('height');
    let hVal=h.value;
    let hNumVal=parseFloat(hVal);
    let triangleArea=0.5 * bNumVal * hNumVal;
    document.getElementById('result').innerText=triangleArea;
    document.getElementById('triangle-result').style.display='block';
})

// for rectangle 
calculateRectangle.addEventListener('click',function(){

    let w=document.getElementById('width');
    let wVal=w.value;
    let wNumVal=parseFloat(wVal);
    let l=document.getElementById('length');
    let lVal=l.value;
    let lNumVal=parseFloat(lVal);
    let rectangleArea= wNumVal * lNumVal;
    document.getElementById('recresult').innerText=rectangleArea;
    document.getElementById('rectangle-result').style.display='block';
})

// for Parallelogram 
paraArea.addEventListener('click',function(){

    let b=document.getElementById('base');
    let bVal=b.value;
    let bNumVal=parseFloat(bVal);
    let h=document.getElementById('height');
    let hVal=h.value;
    let hNumVal=parseFloat(hVal);
    let paraArea= bNumVal * hNumVal;
    document.getElementById('paraResult').innerText=paraArea;
    document.getElementById('paralellogram-result').style.display='block';

})

// for Rhombus 
rhombusArea.addEventListener('click',function(){

    let d1=document.getElementById('d1');
    let d1Val=d1.value;
    let d1NumVal=parseFloat(d1Val);
    let d2=document.getElementById('d2');
    let d2Val=d2.value;
    let d2NumVal=parseFloat(d2Val);
    let rhombusArea=0.5 *  d2NumVal * d2NumVal;
    document.getElementById('rhombusResult').innerText=rhombusArea;
    document.getElementById('rhombus-result').style.display='block';

})

// for pentagon 
pentagonArea.addEventListener('click',function(){

    let p=document.getElementById('p');
    let pVal=p.value;
    let pNumVal=parseFloat(pVal);
    let b1=document.getElementById('b1');
    let b1Val=b1.value;
    let b1NumVal=parseFloat(b1Val);
    let pentagonArea=0.5 *  pNumVal * b1NumVal;
    document.getElementById('pentagonResult').innerText=pentagonArea;
    document.getElementById('pentagon-result').style.display='block';

})
