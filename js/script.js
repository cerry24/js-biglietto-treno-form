const inputRouteElement = document.getElementById ('routeLength');
const inputAgeElement = document.getElementById ('passengerAge');

const button = document.getElementById ('ms_btn-submit');


button.addEventListener ('click', function(){
    let grossPrice = parseInt(inputRouteElement.value) * 0.2762;

    // console.log (grossPrice);

    let finalPrice = grossPrice;

    if ( parseInt(inputAgeElement.value) < 18 ) {
        finalPrice = (grossPrice - (grossPrice * 0.175));
        // console.log (finalPrice);
        
    } else if ( parseInt(inputAgeElement.value) > 65 ) {
        finalPrice = (grossPrice - (grossPrice * 0.333));
        // console.log (finalPrice);
    } else {
        // console.log (finalPrice);
    }

    alert (`Il costo totale del suo biglietto é ${finalPrice.toFixed(2)}€, grazie per averci scelto.`)
})