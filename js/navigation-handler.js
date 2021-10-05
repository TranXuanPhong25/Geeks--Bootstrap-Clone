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
        .forEach(x => {
            
            const drop__containers = x.nextElementSibling
            dr.push(drop__containers)
            x.onclick = function () {
                
                drop__containers.classList.toggle('hidden')
    
            }
        })
        //drop

        const sub__toggle = document.querySelectorAll('.sub-toggle')
        sub__toggle.forEach(x => {
            const drop__containers = x.firstElementChild
            
            
            dr.push(drop__containers.nextElementSibling)

            x.onclick = () => {
                drop__containers.nextElementSibling.classList.toggle('hidden')
    
            }   
        })
        dr.forEach(x => x.classList.add('hidden'))
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