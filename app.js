const stockPrice = document.querySelector(".stockPrice");
const riskAmount = document.querySelector(".riskAmount");
const stopLoss = document.querySelector(".stopLoss");
const outcome = document.querySelector(".outcome");
const price = document.querySelector(".price");

document.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    let priceOfStock = stockPrice.value;
    let amountOfRisk = riskAmount.value * 0.01;
    let stopLossAmount = stopLoss.value;

    outcome.textContent = Math.round(
      stopLossAmount / amountOfRisk / priceOfStock
    );

    console.log(
      `This is outcome: ${
        outcome.textContent
      }; This is stoploss: ${+stopLoss.value}; This is ${+riskAmount.value}; This is stock price ${+stockPrice.value}`
    );

    price.textContent = +outcome.textContent * stockPrice.value + " $";
    stockPrice.focus();
  }
  if (e.code === "Delete") {
    stopLoss.value = riskAmount.value = stockPrice.value = "";
    stockPrice.focus();
  }

  if (e.code === "KeyQ") {
    stopLoss.value = riskAmount.value = stockPrice.value = "fasz";
    stockPrice.focus();
  }
});
