
buttonActionHandller('phone-buttons');
buttonActionHandller('case-buttons');
updateGrandTotalSection();

function buttonActionHandller(targetSectionID){

    let selectedGroup = document.getElementById(targetSectionID);

    //targeting related plus & minus buttons
    let btns = selectedGroup.querySelectorAll('button');

    //targeting related counter
    let itemCounter = selectedGroup.querySelector('.item-counter');

    //targeting related price section
    let itemPrice = selectedGroup.querySelector('.item-price');


    //storing per unit price on stat-up
    const unitPrice = parseFloat(itemPrice.innerText);

    //adding click events on buttons

    for (let i=0; i<btns.length; i++){
        btns[i].addEventListener('click', function () {

            let delta = 1;

            if(this.firstElementChild.classList.contains('fa-minus')){
                delta = -1;
            }

            let currentCounter = parseInt(itemCounter.value);

            if(currentCounter === 0 && delta === -1){
                return;
            }

            currentCounter = currentCounter + delta;

            itemCounter.value = currentCounter;

            itemPrice.innerText = unitPrice * currentCounter;

            updateGrandTotalSection();

        })
    }

}

function updateGrandTotalSection(){
    //targeting SubTotal Section

    let subTotal = document.querySelector('#subTotal');

    //targeting tax Section

    let tax = document.querySelector('#tax');

    //targeting GrandTotal Section

    let grandTotal = document.querySelector('#grandTotal');

    let currentSubtotal = 0;
    let currentTax = parseFloat(tax.innerText)

    document.querySelectorAll('.item-price').forEach(function (item) {
        currentSubtotal  = currentSubtotal + parseInt(item.innerText);
    })

    subTotal.innerText = currentSubtotal;

    grandTotal.innerText = (currentSubtotal + currentTax);
}