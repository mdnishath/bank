document.getElementById("withdraw").addEventListener("click", function () {
  // get input value
  const withdrawValue = getElemntValueByID("withdraw-input");
  const previousBalance = getElementTextValueByID("balance-total");
  if (!withdrawValue) {
    alert("please provide a valid amount");
    return;
  } else if (!(withdrawValue > 0)) {
    alert("minimum withdraw a,ount should be greater then 0");
    return;
  } else if (withdrawValue > previousBalance) {
    alert("insufficient balance");
    return;
  } else {
    // getting previous deposit total
    const previousWithdraw = getElementTextValueByID("withdraw-total");
    // calculating deposit total
    const withdrawTotal = previousWithdraw + withdrawValue;

    //setting total balance

    const balanceTotal = previousBalance - withdrawValue;

    setElementValue("withdraw-total", fixedValue(withdrawTotal));
    setElementValue("balance-total", fixedValue(balanceTotal));
  }

  console.log("withdraw successfull");
});
