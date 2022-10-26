const measurement = document.getElementById('measurement');
const resultTable = document.getElementById('resultTable');            
function convertToCm(){
    const value = measurement.value;
    const convertedValue = +value * 2.54;
    const result = document.createElement('div');
    result.innerText = convertedValue;
    resultTable.appendChild(result);
}

function convertToInch(){
    const value = measurement.value;
    const convertedValue = +value / 2.54;
    const result = document.createElement('div');
    result.innerText = convertedValue;
    resultTable.appendChild(result);
}

function clearResults(){
    resultTable.innerHTML = "";
}