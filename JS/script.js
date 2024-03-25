let rng=document.getElementById('rng');
let rng2=document.getElementById('blr');
let rng3=document.getElementById('drp');
let img=document.querySelector('img');
let btn=document.querySelector('button');
rng.addEventListener('input',()=>{
    let xx=parseInt(rng.value);
    img.style.filter=`saturate(${xx})`
})
rng2.addEventListener('input',()=>{
    rng2.max=10;
    let xy=parseInt(rng2.value);
    img.style.filter=`blur(${xy}px)`
})
rng3.addEventListener('input',()=>{
    rng3.max=10;
    let xy=parseInt(rng3.value);
    img.style.filter=`drop-shadow(16px 16px 20px black) invert(${xy+10}%)`
})
btn.addEventListener('click',()=>{
    //auto reload 
    location.reload();
    
})