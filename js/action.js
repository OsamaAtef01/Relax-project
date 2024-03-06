    let stars = document.getElementById('stars');
    let moon = document.getElementById('moon');
    let mountains3 = document.getElementById('mountains3');
    let mountains4 = document.getElementById('mountains4');
    let river = document.getElementById('river');
    let boat = document.getElementById('boat');
    let Relax = document.querySelector('.Relax');
    window.onscroll = function (){
        let value = scrollY;
        stars.style.left = value + 'px';
        moon.style.top = value * 4 + 'px';
        mountains3.style.top = value * 2 + 'px';
        mountains4.style.top = value * 1.5 + 'px';
        river.style.top = value + 'px';
        boat.style.top = value + 'px';
        boat.style.left = value * 3 + 'px';
        Relax.style.fontSize = value + 'px';
        if(scrollY >= 64){
            Relax.style.fontSize = 64 + 'px';
            Relax.style.position = 'fixed';
        }
        if(scrollY >= 376){
            Relax.style.display = 'none';
        }
        else{
            Relax.style.display = 'block';
        }
    if(scrollY >= 112){
        document.querySelector('.main').style.background = 'linear-gradient(#159ad2,#10001f)';
    }
    else{
        document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)';

    }
}