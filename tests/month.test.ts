import { Month } from '../src/month'
import {
  addMonths,
  endOfDay,
  endOfMonth,
  startOfMonth,
  subMonths,
} from 'date-fns/fp'

test('Take the first day of the current month off should be included in the current month period.', () => {
  const startDayOff = startOfMonth(Date.now())
  const endDayOff = endOfDay(startDayOff)
  const interval: Interval = { start: startDayOff, end: endDayOff }

  const month = new Month()
  expect(month.isIncludedInPeriod(interval)).toBe(true)
})

test('Take the last day of the current month off should be included in the current month period.', () => {
  const startDayOff = endOfMonth(Date.now())
  const endDayOff = endOfDay(startDayOff)
  const interval: Interval = { start: startDayOff, end: endDayOff }

  const month = new Month()
  expect(month.isIncludedInPeriod(interval)).toBe(true)
})

test('Take the first day of the previous month off should not be included in the current month period.', () => {
  const now = Date.now()
  const previousMonth = subMonths(1)
  const startDayOff = startOfMonth(previousMonth(now))
  const endDayOff = endOfDay(startDayOff)
  const interval: Interval = { start: startDayOff, end: endDayOff }

  const month = new Month()
  expect(month.isIncludedInPeriod(interval)).toBe(false)
})

test('Take the last day of the previous month off & the first day of the current month should not be included in the current month period.', () => {
  const now = Date.now()
  const previousMonth = subMonths(1)
  const startDayOff = endOfMonth(previousMonth(now))
  const endDayOff = startOfMonth(now)
  const interval: Interval = { start: startDayOff, end: endDayOff }

  const month = new Month()
  expect(month.isIncludedInPeriod(interval)).toBe(false)
})

test('Take the first day of the next month off should not be included in the current month period.', () => {
  const now = Date.now()
  const previousMonth = addMonths(1)
  const startDayOff = startOfMonth(previousMonth(now))
  const endDayOff = endOfDay(startDayOff)
  const interval: Interval = { start: startDayOff, end: endDayOff }

  const month = new Month()
  expect(month.isIncludedInPeriod(interval)).toBe(false)
})

test('Take the last day of the next month off should not be included in the current month period.', () => {
  const now = Date.now()
  const previousMonth = addMonths(1)
  const startDayOff = endOfMonth(previousMonth(now))
  const endDayOff = endOfDay(startDayOff)
  const interval: Interval = { start: startDayOff, end: endDayOff }

  const month = new Month()
  expect(month.isIncludedInPeriod(interval)).toBe(false)
})
