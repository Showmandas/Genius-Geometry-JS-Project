let calculateTriangle=document.getElementById('calculateTriangle');
let calculateRectangle=document.getElementById('calculateRectangle');
let paraArea=document.getElementById('paraArea');
let rhombusArea=document.getElementById('rhombusArea');
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
