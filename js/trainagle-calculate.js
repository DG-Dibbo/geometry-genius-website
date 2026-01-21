
// Trainagle area calculate 
// function getInputByID(inputID){
//     const inputField = document.getElementById(inputID);
//     const inputValue = parseFloat(inputField.value);
//     console.log(inputValue);
//     return inputValue;
// }

// function passInputByID(){
//     const inputBase = getInputByID('triangle-base');
//     const inputHeight= getInputByID('triangle-height');

//     let result = 0.5 * inputBase * inputHeight;
//     setInnerTextByID('triangle-area',result);
// }

// function setInnerTextByID(elementID, calculation){
//     const area = document.getElementById(elementID);
//     area.innerText = calculation;
// }

// Trainagle area calculate
function traingleCalculate(){
    const traingleBaseInput = document.getElementById('triangle-base');
    const traingleHeightInput = document.getElementById('triangle-height');
    const trainagleArea = document.getElementById('triangle-area');
    
    // calculate Trainagle area
    let result = 0.5 * parseFloat(traingleBaseInput.value * traingleHeightInput.value);
    trainagleArea.innerText =result;
}

// Rectangle area calculate
function rectangleCalculate(){
    const rectangleWidth = document.getElementById('rectangle-width');
    const rectangleLength = document.getElementById('rectangle-length');
    const rectangleArea = document.getElementById('rectangle-area');

    // Rectangle calculate 
    let rectangleCalculate = parseFloat(rectangleWidth.value * rectangleLength.value);
    rectangleArea.innerText = rectangleCalculate;

}

// Parallelogram area calculate

function parallelogramCalculate(){
    const parallelogramBase = document.getElementById('parallelogram-base');
    const parallelogramHeight = document.getElementByI('parallelogram-height');
    const parallelogramArea = document.getElementById('parallelogram-area');

    // Parrallelogram calculate
    let result = parseFloat(parallelogramBase.value * parallelogramHeight.value);
    parallelogramArea.innerText = result;
}

// Rhombus area calculate

function rhombusCalculate(){
    const rhombusFirstDiagonal = document.getElementById('rhombus-first-diagonal');
    const rhombusSecondDiagonal = document.getElementById('rhombus-second-diagonal');
    const rhombusArea = document.getElementById('rhombus-area');

    // Rhombus calculate
    let result = 0.5 * parseFloat(rhombusFirstDiagonal.value * rhombusSecondDiagonal.value);
    rhombusArea.innerText = result;
}

// Pentagon area calculate

function pentagonCalculate(){
    const pentagonPerimeter = document.getElementById('pentagon-perimeter');
    const pentagonApothem = document.getElementById('pentagon-apothem');
    const pentagonArea = document.getElementById('pentagon-area');

    let result = 0.5 * parseFloat(pentagonPerimeter.value * pentagonApothem.value);
    pentagonArea.innerText = result;
}

// Ellipse area calculate

function ellipseCalculate(){
    const ellipseA = document.getElementById('ellipse-a');
    const ellipseB = document.getElementById('ellipse-b');
    const ellipseArea = document.getElementById('ellipse-area');

    // Ellipse calculate
    let result = 3.14 * parseFloat(ellipseA.value * ellipseB.value);
    ellipseArea.innerText = result;

}

