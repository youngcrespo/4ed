let button = document.querySelector('.open')
let navigation = document.querySelector('.headerbuttons')
console.log(navigation)

button.addEventListener('click', function(){
    navigation.classList.add("navimation")
    navigation.style.top = "60px";
})


    