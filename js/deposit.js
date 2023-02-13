document.getElementById("deposit").addEventListener("click", function () {
  // get input value
  const depositValue = getElemntValueByID("deposit-input");
  if (!depositValue) {
    alert("please provide a valid amont");
    return;
  } else if (!(depositValue > 0)) {
    alert("minimum deposit amount should be greater then 0");
    return;
  } else {
    // getting previous deposit total
    const previousDeposit = getElementTextValueByID("deposit-total");
    // calculating deposit total
    const depositTotal = previousDeposit + depositValue;
    //setting total balance
    const previousBalance = getElementTextValueByID("balance-total");
    const balanceTotal = previousBalance + depositValue;

    setElementValue("deposit-total", fixedValue(depositTotal));
    setElementValue("balance-total", fixedValue(balanceTotal));
  }

  console.log("Deposit successfull");
});
