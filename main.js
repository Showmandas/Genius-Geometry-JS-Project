let calculate=document.getElementById('calculate');

// calculation for triangle 
calculate.addEventListener('click',function(){

    let b=document.getElementById('base');
    let bVal=b.value;
    let bNumVal=parseFloat(bVal);
    let h=document.getElementById('height');
    let hVal=h.value;
    let hNumVal=parseFloat(hVal);
    let triangleArea=0.5 * bNumVal * hNumVal;
    document.getElementById('result').innerText=triangleArea;
    document.getElementById('result-body').style.display='block';
})