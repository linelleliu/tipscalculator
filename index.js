



tipCalculator =()=> {
    let moneyValue = document.getElementById("money").value
    let tipsValue = document.getElementById("tips").value
    let peopleValue = document.getElementById("people").value
    console.log(moneyValue)
    console.log(tipsValue)

    let calPercent = Number(moneyValue) * Number(tipsValue)
 console.log(calPercent)
    let addTips = Number(moneyValue) + Number(calPercent)
    let dividePeople = Number(addTips) / Number(peopleValue)
    let total = document.createElement('h1')
    total.innerText = dividePeople
    document.body.appendChild(total)
}

clearButton =()=> {
    let moneyValue = document.getElementById("money")
    let tipsValue = document.getElementById("tips")
    let peopleValue = document.getElementById("people")
    moneyValue.style.backgroundColor = 'green'
    moneyValue.value = ''
    tipsValue.value = 'Select'
    peopleValue.value = ''
}