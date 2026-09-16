export const clinicSchedule = [
  { day: 'Monday', hours: '09:00 AM – 07:00 PM', open: 9, close: 19, status: 'Open' },
  { day: 'Tuesday', hours: '09:00 AM – 07:00 PM', open: 9, close: 19, status: 'Open' },
  { day: 'Wednesday', hours: '09:00 AM – 07:00 PM', open: 9, close: 19, status: 'Open' },
  { day: 'Thursday', hours: '09:00 AM – 07:00 PM', open: 9, close: 19, status: 'Open' },
  { day: 'Friday', hours: '09:00 AM – 07:00 PM', open: 9, close: 19, status: 'Open' },
  { day: 'Saturday', hours: '10:00 AM – 04:00 PM', open: 10, close: 16, status: 'Open (Limited)' },
  { day: 'Sunday', hours: 'VIP Program Clients Only', open: null, close: null, status: 'By Appointment' }
]

export const timeSlots = [
  '09:30 AM - 10:15 AM',
  '10:30 AM - 11:15 AM',
  '11:45 AM - 12:30 PM',
  '02:00 PM - 02:45 PM',
  '03:15 PM - 04:00 PM',
  '04:30 PM - 05:15 PM',
  '05:45 PM - 06:30 PM'
]

export function getClinicStatus() {
  const now = new Date()
  const currentDayIndex = now.getDay() // 0 = Sun, 1 = Mon...
  const currentHour = now.getHours()
  const currentMinute = now.getMinutes()
  const currentTimeDecimal = currentHour + currentMinute / 60

  // Map JS getDay() to schedule array (1=Mon..6=Sat, 0=Sun)
  const scheduleIndex = currentDayIndex === 0 ? 6 : currentDayIndex - 1
  const todaySchedule = clinicSchedule[scheduleIndex]

  if (todaySchedule.open !== null && currentTimeDecimal >= todaySchedule.open && currentTimeDecimal < todaySchedule.close) {
    const closingTime = todaySchedule.close > 12 ? `${todaySchedule.close - 12}:00 PM` : `${todaySchedule.close}:00 AM`
    return {
      isOpen: true,
      label: 'Consultation Desk Open Now',
      detail: `Active today until ${closingTime}`,
      badgeColor: 'bg-emerald-500'
    }
  } else {
    return {
      isOpen: false,
      label: 'Consultation Desk Closed Now',
      detail: 'Accepting Online Bookings 24/7 • Replies within 2 hours',
      badgeColor: 'bg-amber-500'
    }
  }
}
