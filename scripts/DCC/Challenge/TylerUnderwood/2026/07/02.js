/**
 * Given an array of daily stock prices and a budget (in dollars), calculate the maximum profit you could make by buying and selling the stock over the given period.
 *
 * - You may only sell after you buy.
 * - You can only buy whole shares.
 * - Return the maximum possible profit as a string, rounded down to the nearest cent and formatted to two decimal places.
 */

let stocksIteration = 0;

function getMaxProfit(prices, budget) {
  stocksIteration++;
  console.log(`------------------------------------`);
  console.log(`--- Iteration ${stocksIteration} ---`);
  console.log(`------------------------------------`);

  let maxProfit = 0;
  let dayIndex = 0;
  let currentBudget = budget;
  let sharesHeld = 0;
  let totalValue = currentBudget + (sharesHeld * prices[dayIndex]);

  // find the next peek price and its index
  let nextPeekPrice, nextPeekPriceIndex, nextLowPrice, nextLowPriceIndex
  const updateNextLowAndHigh = (currentDayIndex) => {
    const isLastDay = currentDayIndex === prices.length - 1;
    // if last day, no updates needed, just return
    if (isLastDay || nextLowPriceIndex > nextPeekPriceIndex) {
      return;
    }

    // if this is the first day, we need to find values after current day, otherwise we need to find values after current day and before next peek price
    let highDayIndex = currentDayIndex === 0 ? currentDayIndex + 1 : currentDayIndex;
    let lowDayIndex = currentDayIndex === 0 ? currentDayIndex - 1 : currentDayIndex;

    // make sure to include current day in the next peek price search
    nextPeekPrice = Math.max(...prices.slice(highDayIndex));
    nextPeekPriceIndex = prices.indexOf(nextPeekPrice);
    // next lowest price **before** the next peek price and after the current day
    nextLowPrice = Math.min(...prices.slice(currentDayIndex, nextPeekPriceIndex));
    nextLowPriceIndex = prices.indexOf(nextLowPrice, currentDayIndex);

    console.log(`Next low: day ${nextLowPriceIndex}, Next high: day ${nextPeekPriceIndex}`);
  }
  updateNextLowAndHigh(dayIndex);

  while (dayIndex < prices.length) {
    const nowPrice = prices[dayIndex];
    const sharesCouldBuy = Math.floor(currentBudget / nowPrice);

    // if should hold
    if (dayIndex < nextPeekPriceIndex && sharesCouldBuy === 0) {
      console.log(`Holding, next peek price: $${nextPeekPrice}`);
    }

    // if should buy
    if (nowPrice === nextLowPrice && sharesCouldBuy > 0) {
      // if can buy, buy as many shares as possible
      sharesHeld += sharesCouldBuy;
      currentBudget -= sharesCouldBuy * nowPrice;
      console.log(`Bought ${sharesCouldBuy} shares at $${nowPrice}`);

      updateNextLowAndHigh(dayIndex);
    }

    // if should sell
    if (nowPrice === nextPeekPrice && sharesHeld > 0) {
      // if can sell, sell all shares
      const profit = sharesHeld * nowPrice;
      currentBudget += profit;
      console.log(`Sold ${sharesHeld} shares at $${nowPrice}`);
      sharesHeld = 0;

      updateNextLowAndHigh(dayIndex);
    }

    totalValue = currentBudget + (sharesHeld * nowPrice);
    console.log(`Day ${dayIndex}: [ $${nowPrice} ] \nShares Held: ${sharesHeld}, \nShares Value: $${(sharesHeld * nowPrice).toFixed(2)}, \nCurrent Budget: $${currentBudget.toFixed(2)} \nTotal Value: $${totalValue.toFixed(2)}`);

    dayIndex++;
  }

  return (totalValue - budget).toFixed(2);
}
