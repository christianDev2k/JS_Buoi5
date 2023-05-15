// GLOBAL 
function showAlert() {
    alert('Nhập sai rồi bấy bì :))')
}

// TOPIC 1 
const floorPoint = document.querySelector('#floor-point');
const sPoint = document.querySelectorAll('.s-point');
const area = document.querySelectorAll('.area');
const object = document.querySelectorAll('.object');
const btn1 = document.querySelector('.btn.bai-1')
const result1 = document.querySelector('.result.bai-1');

function CheckInputTuyenSinh() {
    let isTrue = true;
    if (floorPoint.value === '' || isNaN(floorPoint.value)) {
        isTrue = false;
    }
    sPoint.forEach(function (item) {
        if (item.value === '' || isNaN(item.value)) {
            isTrue = false;
        }
    })
    return isTrue === true ? true : false;
}

function KQTuyenSinh(string, result) {
    string === 'Rớt' ? result1.innerText = `Bạn đã rớt. Tổng điểm của bạn là ${result} điểm. Chúc bạn may mắn lần sau!` :
        result1.innerText = `Bạn đã đậu. Tổng điểm của bạn là ${result} điểm. Amazing good job bạn!`;
}


function ProcessTuyenSinh(pointArea, pointObject, sumSpoint, zeroPoint, floorPoint) {
    let result = pointArea + pointObject + sumSpoint;
    KQTuyenSinh(result < floorPoint || zeroPoint === true ? 'Rớt' : 'Đậu', result);
}

btn1.addEventListener('click', function (e) {
    e.preventDefault();
    let areaChecked;
    let objectChecked;
    area.forEach(function (item) {
        item.checked ? areaChecked = item.value : null;
    })
    object.forEach(function (item) {
        item.checked ? objectChecked = item.value : null;
    })

    let sumSpoint = 0;
    let zeroPoint = false;
    sPoint.forEach(function (item) {
        sumSpoint += parseFloat(item.value);
        item.value == 0 ? zeroPoint = true : null;
    })

    let pointArea;
    let pointObject;
    areaChecked === 'area-b' ? pointArea = 1 :
        areaChecked === 'area-a' ? pointArea = 2 :
            areaChecked === 'area-c' ? pointArea = 0.5 :
                pointArea = 0;

    objectChecked === 'object-1' ? pointObject = 2.5 :
        objectChecked === 'object-2' ? pointObject = 1.5 :
            objectChecked === 'object-3' ? pointObject = 1 :
                pointObject = 0;

    let checkInput = CheckInputTuyenSinh();
    checkInput === true ? ProcessTuyenSinh(pointArea, pointObject, sumSpoint, zeroPoint, floorPoint.value) :
        showAlert();
})

// TOPIC 2 
const eName = document.querySelector('#e-name');
const eKw = document.querySelector('#e-kw');
const btn2 = document.querySelector('.btn.bai-2');
const result2 = document.querySelector('.result.bai-2');

function showTienDien(result, name) {
    let output = parseFloat(result).toLocaleString('vi-VN');
    result2.innerHTML = `Tiền điện của ${name} là ${output} đồng nhaa!`;
}

function TinhTienDien() {
    let result = 0;
    let amountKw = eKw.value;
    result = amountKw <= 50 ? amountKw * 500 :
        amountKw <= 100 ? (amountKw - 50) * 650 + 25000 :
            amountKw <= 200 ? (amountKw - 100) * 850 + 57500 :
                amountKw <= 350 ? (amountKw - 200) * 1100 + 142500 :
                    (amountKw - 350) * 1300 + 307500;
    showTienDien(result, eName.value);
}

function CheckInputTienDien() {
    return eKw.value === '' || isNaN(eKw.value) || eKw.value < 0 || eName.value === '' ? false : true;
}

btn2.addEventListener('click', function (e) {
    e.preventDefault();
    CheckInputTienDien() === true ? TinhTienDien() : showAlert();
})

// TOPIC 3 
const taxName = document.querySelector('#tax-name');
const taxIncome = document.querySelector('#tax-income')
const taxPeople = document.querySelector('#tax-people');
const btn3 = document.querySelector('.btn.bai-3');
const result3 = document.querySelector('.result.bai-3');

function checkInputTax() {
    return taxName.value === '' ? false :
        taxIncome.value === '' || taxIncome.value <= 0 || isNaN(taxIncome.value) ? false :
            taxPeople.value === '' || taxPeople.value < 0 || isNaN(taxPeople.value) ? false : true;
}

function calcTax() {
    let result = taxIncome.value - 4000000 - taxPeople.value * 1600000;
    let tax = result <= 60000000 ? result * 0.05 :
        result <= 120000000 ? result * 0.1 :
            result <= 210000000 ? result * 0.15 :
                result <= 384000000 ? result * 0.2 :
                    result <= 624000000 ? result * 0.25 :
                        result <= 960000000 ? result * 0.3 : result * 0.35;

    tax <= 0 ? showAlert() : showTax(tax);;
}

function showTax(tax) {
    let output = parseFloat(tax).toLocaleString('vi-VN');
    result3.innerHTML = `Mức thuế mà ${taxName.value} phải đóng là ${output} đồng :(((`;
}

btn3.addEventListener('click', function (e) {
    e.preventDefault();
    checkInputTax() === true ? calcTax() : showAlert();
})

// TOPIC 4 
const typeConnect = document.getElementsByName('net-object');
const netCode = document.querySelector('#net-code');
const netChannel = document.querySelector('#net-channel');
const netConnect = document.querySelector('#net-connect');
const btn4 = document.querySelector('.btn.bai-4');
const result4 = document.querySelector('.result.bai-4');
const amountConnect = document.querySelector('#amountConnect');
const fee = {
    feeProcessing: 0,
    feeServices: 0,
    feeChannel: 0
}

typeConnect.forEach(function (item) {
    item.addEventListener('change', function () {
        item.value === 'net__company' ? amountConnect.style.display = 'block' : amountConnect.style.display = 'none';
    })
})

function checkInputNet() {
    let isTrue = netCode.value !== '' &&
        netChannel.value >= 0 &&
        !isNaN(netChannel.value) &&
        netChannel.value !== '';

    if (isTrue && getComputedStyle(amountConnect).display === 'block') {
        isTrue = netConnect.value >= 0 && !isNaN(netConnect.value) && netConnect.value !== '';
    }
    return isTrue;
}

function calcNet(fee) {
    let output = fee.feeProcessing + fee.feeServices + (fee.feeChannel * netChannel.value);
    showNet(output);
}

function showNet(result) {
    let output = parseFloat(result).toLocaleString('vi-VN');
    result4.innerHTML = `Cước phí của mã khách hàng ${netCode.value} là $${output}`;
}

btn4.addEventListener('click', function (e) {
    e.preventDefault();
    let isType;
    typeConnect.forEach(function (item) {
        item.checked ? isType = item.value : null;
    })

    if (isType === 'net__local') {
        fee.feeProcessing = 4.5;
        fee.feeServices = 20.5;
        fee.feeChannel = 7.5;
    }
    else {
        fee.feeProcessing = 15;
        fee.feeChannel = 50;
        fee.feeServices = netConnect.value <= 10 ? 75 : 75 + (netConnect.value - 10) * 5;
    }
    checkInputNet() === true ? calcNet(fee) : showAlert();
})



