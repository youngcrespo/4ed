let button = document.getElementById('open')
let navigation = document.getElementById('navigation')

button.addEventListener('click', function(){
    navigation.classList.add("animation")
    navigation.style.left = "0px";
})