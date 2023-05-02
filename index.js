const originalAmount = document.getElementById("originalAmount")
const usdAmount = document.getElementById("dollarAmount")
const rubAmount = document.getElementById("rubAmount")
const calculateBtn = document.getElementById("calculateBtn")

calculateBtn.addEventListener("click", function(){ 
    let result1 = originalAmount.value * 0.38
    let result2 = originalAmount.value * 28.62
    usdAmount.innerHTML = `${result1}$`
    rubAmount.innerHTML = `${result2}₽`
})