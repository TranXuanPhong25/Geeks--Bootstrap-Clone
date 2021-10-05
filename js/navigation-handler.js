(() => {
    const s1 = document.querySelector('span[data="1"]')
    const s2 = document.querySelector('span[data="2"]')
    const s3 = document.querySelector('span[data="3"]')
    const b = document.querySelector('.nav__toggle')
    const nav__navbar = document.querySelector('.nav__navbar')
    const drop__conatiners = document.querySelectorAll('.drop__conatiners')
    
    const user_drop = document.querySelector('#user-drop ')
    const avatar = document.querySelector('.avatar')
    avatar.onclick = () => {
        user_drop.classList.toggle('hidden')
    }

    const notify = document.querySelector('#notification')
    const notification = document.querySelector('.notification__container')
    notify.onclick = () => {
        notification.classList.toggle('hidden')
    }
    
    b.onclick = function () {
        s1.classList.toggle('r45')
        s2.classList.toggle('hide')
        s3.classList.toggle('r-45')
        nav__navbar.classList.toggle('hidden')
    }

})()