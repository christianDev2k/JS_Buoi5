// TOPIC 1 
const floorPoint = document.querySelector('#floor-point');
const sPoint = document.querySelectorAll('.s-point');
const area = document.querySelectorAll('.area');
const object = document.querySelectorAll('.object');
const btn1 = document.querySelector('.btn.bai-1')
const result1 = document.querySelector('.result.bai-1');

// GLOBAL 
function showAlert() {
    alert('Nhập sai rồi bấy bì :))')
}

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

function TinhTienDien(amountKw) {
    let result = 0;
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
    let amountKw = eKw.value;
    CheckInputTienDien() === true ? TinhTienDien(amountKw) : showAlert();
})
