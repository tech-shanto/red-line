let leftSeat = 8;
let stCount = 0;
let counter = 0;
let seatCount = 1;
let totalPrice = 0;
let grandTotalPrice = 0;
const prize = 550;
const busClass = 'AC-Business'
const seats = document.querySelectorAll(".seat");
// console.log(seats);

for (let index = 0; index < seats.length; index++) {
    const seat = seats[index];
    // console.log(seat.innerText);
    seat.addEventListener("click", function () {
        // console.log('tip')
        // title get 
        const seatTitle = seat.querySelector("p").innerText;
        // console.log(seatTitle.innerText);

        const seatContainer = document.getElementById('seatContainer');
        // console.log(seatContainer);
        const p = document.createElement("p");
        p.innerText = seatTitle;
        seatContainer.appendChild(p);

        const busType = document.getElementById('seatClass');
        // console.log(seatClass);
        const seatType = document.createElement("p");
        seatType.innerText = busClass;
        busType.appendChild(seatType);
        

        const seatPrize = document.getElementById('seatPrize');
        // console.log(seatClass);
        const valuePerSeat = document.createElement("p");
        valuePerSeat.innerText = prize;
        seatPrize.appendChild(valuePerSeat);

        counter += seatCount;
        document.getElementById('selectedSeat').innerText = counter;

        stCount = leftSeat - counter;
        document.getElementById('left').innerText = stCount;

        totalPrice += prize;
        document.getElementById('total').innerText = totalPrice.toFixed(2);

        grandTotalPrice = totalPrice;
        document.getElementById('GrandTotal').innerText = grandTotalPrice.toFixed(2);
    });
}



const btn = document.getElementById('couponBtn');
// console.log(btn);
btn.addEventListener('click', function(){
    const coupon = document.getElementById('couponInput').value;
    // const couponCode = coupon.split(" ").join("").toUpperCase();

    if (coupon === 'NEW15' || coupon === 'Couple 20' ){
        if (coupon === 'NEW15' ){
            grandPrice = totalPrice*0.85;
            hidden();
            grandTotalPrice = grandPrice;
            document.getElementById('GrandTotal').innerText = grandTotalPrice.toFixed(2);

        }
        else if(coupon === 'Couple 20'){
            grandPrice = totalPrice* 0.80;
            hidden();
            grandTotalPrice = grandPrice;
            document.getElementById('GrandTotal').innerText = grandTotalPrice.toFixed(2);
        }
        else{
            return totalPrice;
        }
    }
    else{
        alert ('AJAIRA INPUT DILE DISCOUNT PAIBEN NA');
    }

    // console.log(coupon.value);
})

function hidden(){
    let couponDiv = document.getElementById('coupon');
    couponDiv.classList.add('hidden');

}


// 2208042 Complain number
// onclick="seatClicked()"
// onclick="seatClicked()"
// onclick="seatClicked()"
// onclick="seatClicked()"
// onclick="seatClicked()"
// onclick="seatClicked()"
// onclick="seatClicked()"
// onclick="seatClicked()"