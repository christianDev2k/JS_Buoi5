// TOPIC 1 
const floorPoint = document.querySelector('#floor-point');
const sPoint = document.querySelectorAll('.s-point');
const area = document.querySelectorAll('.area');
const object = document.querySelectorAll('.object');
const btn1 = document.querySelector('.btn.bai-1')
const result1 = document.querySelector('.result.bai-1');

function CheckInputTuyenSinh() {
    let isfloorPoint = true;
    let isPoint = true;

    isfloorPoint = floorPoint.value === '' || isNaN(floorPoint.value) ? false : true;
    sPoint.forEach(function (item) {
        if (item.value === '' || isNaN(item.value)) {
            isPoint = false;
        }
    })
    return isfloorPoint === true && isPoint === true ? true : false;
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
    alert('Nhập sai rồi bấy bì');
})