function getMeetingTime(availability) {
  const dayHours = [...Array(25).keys()]
  const availabilityInHours = []
  const availableDayHours = []

  // Convert to one array of all available hours, instead of ranges
  availability.forEach((person) => {
    let availableHours = []

    person.forEach((availableRange) => {
      const startHour = availableRange[0]
      const endHour = availableRange[1]
      const rangeHoursTotal = endHour - startHour

      // Do not include last hour because it is end hour, and will not be available
      for (let i = 0; i < rangeHoursTotal; i++) {
        availableHours.push(startHour + i)
      }
    })

    availabilityInHours.push(availableHours)
  })

  // console.log(availabilityInHours)

  // Fill availableDayHours array with matching available hours
  dayHours.forEach((hour) => {
    let isAvailableHour = true

    availabilityInHours.forEach((person) => {
      const hasHour = Boolean(person.find((personHour) => personHour === hour))

      if (!hasHour) {
        isAvailableHour = false
      }
    })

    if (isAvailableHour) {
      availableDayHours.push(hour)
    }
  })

  // console.log(availableDayHours)

  return availableDayHours.length > 0 ? availableDayHours[0] : "None";
}
