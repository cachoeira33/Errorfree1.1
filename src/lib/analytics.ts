import ReactGA from 'react-ga4';

// Initialize Google Analytics
export const initGA = (measurementId: string) => {
  ReactGA.initialize(measurementId, {
    testMode: import.meta.env.DEV, // Enable test mode in development
  });
};

// Track page views
export const trackPageView = (path: string, title?: string) => {
  ReactGA.send({ 
    hitType: 'pageview', 
    page: path,
    title: title || document.title
  });
};

// E-commerce tracking events
export const trackSelectItem = (itemId: string, itemName: string, category: string, value?: number) => {
  ReactGA.event('select_item', {
    item_id: itemId,
    item_name: itemName,
    item_category: category,
    value: value
  });
};

export const trackAddToCart = (currency: string, value: number, items: any[]) => {
  ReactGA.event('add_to_cart', {
    currency: currency,
    value: value,
    items: items
  });
};

export const trackBeginCheckout = (currency: string, value: number, items: any[]) => {
  ReactGA.event('begin_checkout', {
    currency: currency,
    value: value,
    items: items
  });
};

export const trackPurchase = (transactionId: string, currency: string, value: number, items: any[]) => {
  ReactGA.event('purchase', {
    transaction_id: transactionId,
    currency: currency,
    value: value,
    items: items
  });
};

// Custom events for IT services
export const trackServiceView = (serviceName: string) => {
  ReactGA.event('view_item', {
    item_id: serviceName.toLowerCase().replace(/\s+/g, '_'),
    item_name: serviceName,
    item_category: 'IT Service',
    content_type: 'service'
  });
};

export const trackEmergencyCall = () => {
  ReactGA.event('emergency_call_clicked', {
    event_category: 'engagement',
    event_label: 'emergency_phone_click'
  });
};

export const trackWhatsAppClick = () => {
  ReactGA.event('whatsapp_clicked', {
    event_category: 'engagement',
    event_label: 'whatsapp_click'
  });
};

export const trackBookingStart = () => {
  ReactGA.event('booking_started', {
    event_category: 'conversion',
    event_label: 'booking_widget_opened'
  });
};

// Conversion goals
export const trackConversionGoal = (goalName: string, value?: number) => {
  ReactGA.event('conversion', {
    event_category: 'goal',
    event_label: goalName,
    value: value
  });
};