(() => {

    

        const s1 = document.querySelector('span[data="1"]')
        const s2 = document.querySelector('span[data="2"]')
        const s3 = document.querySelector('span[data="3"]')
        const b = document.querySelector('.nav__toggle')
        const nav__navbar = document.querySelector('.nav__navbar')

        const user_drop = document.querySelector('#user-drop ')
        const avatar = document.querySelector('.avatar')
        avatar.onclick = () => {
            user_drop.classList.toggle('hidden')
            user_drop.classList.toggle('active')
        }

        const notify = document.querySelector('#notification')
        const notification = document.querySelector('.notification__container')
        notify.onclick = () => {
            notification.classList.toggle('hidden')
            notification.classList.toggle('active')
        }

        b.onclick = function () {
            s1.classList.toggle('r45')
            s2.classList.toggle('hide')
            s3.classList.toggle('r-45')
            nav__navbar.classList.toggle('hidden')
        }
        //drop
        let dr = []
        const dropdown__toggle = document.querySelectorAll('.dropdown__toggle')
        dropdown__toggle
        .forEach((x,i) => {
            // x.setAttribute('data-toggle', i)
            const drop__containers = x.nextElementSibling
            dr.push(drop__containers)
            x.onclick = e => {
                dropdown__toggle
                .forEach((y,id)=>{
                //     if(y.classList.contains('active')&& x.getAttribute('data-toggle')==y.getAttribute('data-toggle')){
                //         y.classList.remove('active')
                //         y.classList.add('hidden')
                //     }
                if(id!=i){
                    

                    y.nextElementSibling.classList.add('hidden')
                    y.nextElementSibling.classList.remove('active')
                    // console.log(id,i);
                }
                })
                
                
                    drop__containers.classList.toggle('hidden')
                    drop__containers.classList.toggle('active')
                

            }
        })
        //drop:)

        const sub__toggle = document.querySelectorAll('.sub-toggle')
        sub__toggle.forEach((x,i) => {
            const a = x.firstElementChild
            
            
            dr.push(a.nextElementSibling)

            x.onclick = e => {
                sub__toggle
                .forEach((y,id)=>{
                //     if(y.classList.contains('active')&& x.getAttribute('data-toggle')==y.getAttribute('data-toggle')){
                //         y.classList.remove('active')
                //         y.classList.add('hidden')
                //     }
                
                if(id!=i){
                    

                    y.firstElementChild.nextElementSibling.classList.add('hidden')
                    y.firstElementChild.nextElementSibling.classList.remove('active')
                    // console.log(id,i);
                }
                })
                a.nextElementSibling.classList.toggle('hidden')
                a.nextElementSibling.classList.toggle('active')
                // console.log(e.target);
    
            }   
        })
        dr.forEach(x => x.classList.add('hidden'))
        // dr.forEach(x =>x.onclick=event=>console.log(event.target))
        const search = document.querySelector('#search-box')
        const seb = document.querySelector('#b-toggle')
        const sesubmit = document.querySelector('#b-submit')
        seb.onclick = () => {
            if ($(window).width() <= 992) {
                seb.classList.toggle('ti-close')
            } else {
                seb.setAttribute('type', 'submit')
            }
            search.classList.toggle('hidden')
            sesubmit.classList.toggle('hidden')
        }

})()