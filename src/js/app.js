import * as allFuncs from './modules/functions.js'
const Range = document.querySelector('.length__input')
let count = 1

/**
 * здесь задаём цвет для выбранного диапазона в рэйндже выбора длины
 */
document.querySelector('.length__input').addEventListener('mousemove', function () {
    let x = Range.value * 9.2;
    let color = 'linear-gradient(90deg, hsl(38, 100%, 74%)' + x + '%, hsl(0, 0%, 39%)' + x + '%';
    Range.style.background = color
});

/**
 * переключалка табов в блоке конструктора
 */
const colorDash = (n) => {
    document.querySelector(`#radio${n}`).checked = true
}
document.querySelector('.right').addEventListener('click', function () {
    count++
    if (count > 4) count = 1
    colorDash(count)
})
document.querySelector('.left').addEventListener('click', function () {
    count--
    if (count < 1) count = 4
    colorDash(count)
})

/**
 * выбор цвета лицевой панели
 */
let color = document.querySelector('.color')

color.addEventListener('click', function () {
    document.querySelector('.bottom__color-list').classList.toggle('hidden')
})
function hide() {
    document.querySelector('.bottom__color-list').classList.add('hidden')

}
document.querySelector('.color1').onclick = function () {
    color.style.backgroundColor = '#B8542A'
    hide()
}
document.querySelector('.color2').onclick = function () {
    color.style.backgroundColor = '#4a4a4a'
    hide()
}
document.querySelector('.color3').onclick = function () {
    color.style.backgroundColor = '#00022d'
    hide()
}
/**
 * отображаем выбранную длину
 */
let lengthValue = document.querySelector('.bottom__length-value')
lengthValue.innerHTML = '6.0' + 'M'
document.querySelector('.length__input').addEventListener('input', function () {
    document.querySelector('.bottom__length-value').innerHTML = this.value + ' M'
})