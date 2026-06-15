function sleepDebt(hoursSlept, targetHours) {
  let debtHours = targetHours;

  hoursSlept.forEach(sleepHours => {
    debtHours += targetHours - sleepHours
  })

  return debtHours > 0 ? debtHours : 0;
}
