let counter = 0;
let seatCount = 1;
let totalPrice = 0;
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
        // document.getElementById('selectedSeat').style = 'p-1';

        totalPrice += prize;
        document.getElementById('total').innerText = totalPrice.toFixed(2);

    });
}
const btn = document.getElementById('couponBtn');
// console.log(btn);
btn.addEventListener('click', function(){
    const coupon = document.getElementById('couponInput').value;
    // console.log(coupon.value);
})