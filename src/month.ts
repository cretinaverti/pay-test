import {
  addMonths,
  isWithinInterval,
  startOfMonth,
  subMilliseconds,
} from 'date-fns/fp'

const nextMonth = addMonths(1)
const removeMillisecond = subMilliseconds(1)

export class Month {
  /**
   * First day of the current month starting at 12am.
   */
  private firstDay = startOfMonth(Date.now())

  /**
   * First day of the next month starting at 12am.
   */
  private nextFirstDay = startOfMonth(nextMonth(this.firstDay))

  /**
   * Check whether a given date is included in current month period or not.
   */
  private isWithinCurrentMonth = isWithinInterval({
    start: this.firstDay,
    end: removeMillisecond(this.nextFirstDay),
  })

  /**
   * Check whether a given interval is included in current month period or not.
   */
  public isIncludedInPeriod = (interval: Interval) =>
    this.isWithinCurrentMonth(interval.start) &&
    this.isWithinCurrentMonth(interval.end)
}
