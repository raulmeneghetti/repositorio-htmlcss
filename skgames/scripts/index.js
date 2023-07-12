setInterval( function(){
    switchSlide()
}, 5000);

function switchSlide()
{
    document.getElementById(`${selectedSlide()}`).checked = true;
}

function selectedSlide()
{
    let radios = document.getElementsByName('radio-slides');
    let slide;

    for (let i in radios)
    {
        if (radios[i].checked)
        {
            if (i == radios.length - 1 && radios[i].checked)
            {
                slide = radios[0].id;

                return slide;
            }
            else if (radios[i].checked)
            {
                i ++;
                slide = radios[i].id;

                return slide;
            }
        }
    }
}

function slideCardGames(listNumber, arrowSide) 
{
    let list = document.getElementsByClassName('list'+listNumber);

    let firstCard = list.getElementsByClassName('first');

    if (arrowSide == 'left')
    {
        firstCard.style.transform = 'translateX(-100%)';
    }

    

}