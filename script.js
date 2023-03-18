let btns = document.querySelectorAll('.color_item .color_elem')

let change = document.querySelector('.change_img')

let price_chage = document.querySelector('.price_chage')

let road_chage = document.querySelector('.road')

let mill = 750

let cost = 89990

let colors = {
    black: 'url(img/black.svg)',
    white: 'url(img/white.svg)',
    beige: 'url(img/beige.svg)'
}

btns.forEach(btn => {

    btn.onclick = () => {
        
        let color = btn.getAttribute('data-color')

        let price = btn.getAttribute('data-price')

        let road = btn.getAttribute('data-road')

        let total = +price + cost

        road_chage.innerHTML = +road + mill + 'км'

        price_chage.innerHTML = '$' + addCommas(total)

        change.style.backgroundImage = colors[color]
    }
})

function addCommas(nStr) {
    // console.log(nStr);
 
    nStr += '';
    // console.log(nStr);
    
    var x = nStr.split('.');
    // console.log(x);
    
    var x1 = x[0];
    // console.log(x1);
    
    var x2 = x.length > 1 ? '.' + x[1] : '';
    // console.log(x2);
 
    var rgx = /(\d+)(\d{3})/;
    // console.log(rgx);
    
    while (rgx.test(x1)) {
       x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
 }