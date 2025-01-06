function toggleMode(){
    const html = document.documentElement
    const img = document.querySelector(".photo")
    html.classList.toggle('light')
    if(html.classList.contains('light')){
        img.setAttribute('src', './assets/avatar-light.png')
    } else{
        img.setAttribute('src', './assets/avatar.png')
    }
    


}