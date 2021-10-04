(()=>{
    const s1= document.querySelector('span[data="1"]')
    const s2= document.querySelector('span[data="2"]')
    const s3= document.querySelector('span[data="3"]')
    const b= document.querySelector('.nav__toggle')
    b.onclick=function(){
        s1.classList.toggle('r45')
        s2.classList.toggle('hide')
        s3.classList.toggle('r-45')
    }
})()