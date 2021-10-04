(()=>{
    let date = new Date()
    document.querySelectorAll('.date-notify').forEach(x=>x.textContent=`${date.getHours()}:${date.getMinutes()}, ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`)
})()