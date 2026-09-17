/**
 * Analytics Service for Google Analytics (GA4) & Meta Pixel (Facebook/Instagram Ads)
 */

export function trackMetaLead(data = {}) {
  // Meta Pixel Lead Event
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'Lead', {
      content_name: data.service || 'Nutrition Consultation',
      value: data.value || 0,
      currency: 'USD'
    })
  }

  // Google Analytics Lead Event
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'generate_lead', {
      event_category: 'Consultation',
      event_label: data.service || 'Nutrition Consultation',
      value: data.value || 0
    })
  }
}

export function trackMetaSchedule(data = {}) {
  // Meta Pixel Schedule Event
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'Schedule', {
      content_name: data.service,
      date: data.date,
      time: data.time
    })
  }

  // Google Analytics Schedule Event
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'schedule_appointment', {
      service: data.service,
      appointment_date: data.date,
      appointment_time: data.time
    })
  }
}

export function trackWhatsAppContact(action = 'DM FIT') {
  // Meta Pixel Contact Event
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'Contact', {
      method: 'WhatsApp',
      action: action
    })
  }

  // Google Analytics Contact Event
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'Engagement',
      event_label: action
    })
  }
}

export function trackMacroCalculation(results = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'macro_calculator_used', {
      goal: results.goal,
      calories: results.calories,
      bmi: results.bmi
    })
  }
}
