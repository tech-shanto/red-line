let ticketPrice = 550;
let appliedDiscount = 0;
let busClass = 'AC-Business'
let seats = ["A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4", "C1", "C2", "C3", "C4"];
let selectedSeat = [];
document.getElementById('left').innerHTML = seats.length - selectedSeat.length;
let seatPlan = document.getElementById('seatPlan');
let couponInput = document.getElementById('couponInput');
let couponBtn = document.getElementById('couponBtn');
let mobileNumber = document.getElementById('mobileNo');
let usersName = document.getElementById('name');
let nextBtn = document.getElementById('nextBtn');

let coupons = [
    {
        name: 'NEW15',
        discounts: 0.15
    },
    {
        name: 'Couple 20',
        discounts: 0.20
    }
];

for (const seat of seats) {
    const seatNumber = document.createElement('div');
    seatNumber.id = seat;
    seatNumber.textContent = seat;
    seatNumber.classList.add('py-4', 'rounded-xl', 'px-10', 'bg-[#f7f8f8]', 'f-inter', 'mx-auto', 'my-8', 'seat');
    seatPlan.appendChild(seatNumber);
}

document.addEventListener("click", function (e) {
    const target = e.target.classList.contains('seat');

    if (target) {
        let seatID = e.target.id

        if (!isValidSeat(seatID)) {
            return;
        }

        selectedSeat.push(seatID);
        
        renderSelectedSeat();
        e.target.classList.add('bg-base');
        document.getElementById('left').innerHTML = seats.length - selectedSeat.length;
        document.getElementById('selectedSeat').innerHTML = selectedSeat.length;
    }
});

function isValidSeat(seatID) {
    if (selectedSeat.length > 3) {
        alert('You can not select more than four seat');
        return false;
    }

    if (selectedSeat.includes(seatID)) {
        alert('You can not select single seat multiple time');
        return false;
    }

    return true;
}

function renderSelectedSeat() {
    let html = "";
    for (let index = 0; index < selectedSeat.length; index++) {
        const element = selectedSeat[index];
        html += `
        <div class="flex flex-row justify-between w-full">
            <p class="w-1/3 f-inter">${element}</p>
            <p class="w-1/3 text-center">Economy</p>
            <p class="w-1/3 text-right f-inter">${ticketPrice}</p>
        </div>
        `
    }
    document.getElementById('seatContainer').innerHTML = html;
    renderAmount()
}

function renderAmount() {
    let totalAmount = ticketPrice * selectedSeat.length;
    document.getElementById('total').innerHTML = totalAmount;
    let discount = calculateDiscount(totalAmount)
    document.getElementById('grandTotal').innerHTML = totalAmount - discount;
}

function calculateDiscount(totalAmount) {
    if (!appliedDiscount) {
        return 0;
    }

    let discountAmount = totalAmount * appliedDiscount

    document.getElementById('coupon').innerHTML = `
    <div class="bg-[#f7f8f8] mb-4 flex w-full flex-row justify-between border-b-2 border-t-2 border-solid">
        <div class="f-inter font-medium">Discount</div>
        <div class="f-inter font-medium">BDT ${discountAmount}</div>
    </div>`

    return discountAmount;
}

couponBtn.addEventListener('click', function () {
    
    let enteredCoupon = couponInput.value;

    if (enteredCoupon == '') {
        alert('Enter Your Coupon Code Properly')
    }

    const coupon = coupons.find(function (coupon) {
        return coupon.name == enteredCoupon
    })
    
    if (!coupon) {
        alert('You have entered invalid coupon');
    }

    appliedDiscount = coupon.discounts;
    renderAmount()
})

function dataValidation() {
    if (selectedSeat.length === 0) {
        alert('Please select at least 1 seat')
        return;
    }

    if (mobileNumber.value.length !== 11) {
        alert('Please Enter Your 11 digit Mobile Number')
        return;
    }

    my_modal_2.showModal()
}
