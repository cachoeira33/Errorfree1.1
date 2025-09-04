// Booking API functions for ErrorFree 24/7

export interface BookingData {
  service: string;
  urgency: string;
  date: string;
  time: string;
  address: string;
  postcode: string;
  name: string;
  phone: string;
  email: string;
  description?: string;
}

export interface BookingConfirmation {
  bookingReference: string;
  success: boolean;
  message: string;
}

// Send booking confirmation email
export const sendBookingConfirmation = async (
  bookingData: BookingData,
  bookingReference: string,
  amount: number
): Promise<BookingConfirmation> => {
  try {
    // In a real implementation, this would call your backend API
    // For now, we'll simulate the email sending process
    
    const emailData = {
      to: 'support@errorfree247.co.uk',
      cc: bookingData.email,
      subject: `New Booking Confirmation - ${bookingReference}`,
      html: generateBookingEmailHTML(bookingData, bookingReference, amount)
    };

    // Simulate API call to send email
    console.log('Sending booking confirmation email:', emailData);
    
    // In production, you would make an actual API call here:
    // const response = await fetch('/api/send-booking-email', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(emailData)
    // });

    // For demo purposes, we'll return success
    return {
      bookingReference,
      success: true,
      message: 'Booking confirmation sent successfully'
    };
  } catch (error) {
    console.error('Error sending booking confirmation:', error);
    return {
      bookingReference,
      success: false,
      message: 'Failed to send booking confirmation'
    };
  }
};

// Generate HTML email template for booking confirmation
const generateBookingEmailHTML = (
  bookingData: BookingData,
  bookingReference: string,
  amount: number
): string => {
  const serviceNames = {
    'emergency': 'Emergency Support',
    'remote': 'Remote Diagnosis',
    'onsite': 'On-site Visit',
    'upgrade': 'Computer Upgrade',
    'smarthome': 'Smart Home Setup',
    'website': 'Premium Website'
  };

  const urgencyNames = {
    'emergency': 'Emergency (within 1 hour)',
    'urgent': 'Urgent (same day)',
    'standard': 'Standard (next working day)',
    'flexible': 'Flexible (within 3 days)'
  };

  const serviceName = serviceNames[bookingData.service as keyof typeof serviceNames] || bookingData.service;
  const urgencyName = urgencyNames[bookingData.urgency as keyof typeof urgencyNames] || bookingData.urgency;

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Booking Confirmation - ErrorFree 24/7</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1e40af; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .booking-details { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; }
        .detail-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee; }
        .total { font-weight: bold; font-size: 18px; color: #1e40af; }
        .footer { text-align: center; padding: 20px; color: #666; }
        .emergency { background: #dc2626; color: white; padding: 15px; text-align: center; margin: 20px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🔧 ErrorFree 24/7</h1>
          <h2>Booking Confirmation</h2>
          <p>Reference: <strong>${bookingReference}</strong></p>
        </div>
        
        <div class="content">
          <h3>Thank you for choosing ErrorFree 24/7!</h3>
          <p>Your IT support booking has been confirmed. Here are the details:</p>
          
          <div class="booking-details">
            <h4>📋 Booking Information</h4>
            <div class="detail-row">
              <span>Service:</span>
              <span><strong>${serviceName}</strong></span>
            </div>
            <div class="detail-row">
              <span>Urgency:</span>
              <span>${urgencyName}</span>
            </div>
            <div class="detail-row">
              <span>Date:</span>
              <span>${bookingData.date}</span>
            </div>
            <div class="detail-row">
              <span>Time:</span>
              <span>${bookingData.time}</span>
            </div>
            <div class="detail-row">
              <span>Location:</span>
              <span>${bookingData.address}, ${bookingData.postcode}</span>
            </div>
            <div class="detail-row total">
              <span>Total Amount:</span>
              <span>£${amount.toFixed(2)}</span>
            </div>
          </div>
          
          <div class="booking-details">
            <h4>👤 Customer Information</h4>
            <div class="detail-row">
              <span>Name:</span>
              <span>${bookingData.name}</span>
            </div>
            <div class="detail-row">
              <span>Phone:</span>
              <span>${bookingData.phone}</span>
            </div>
            <div class="detail-row">
              <span>Email:</span>
              <span>${bookingData.email}</span>
            </div>
            ${bookingData.description ? `
            <div class="detail-row">
              <span>Problem Description:</span>
              <span>${bookingData.description}</span>
            </div>
            ` : ''}
          </div>
          
          <div class="emergency">
            <h4>🚨 What Happens Next?</h4>
            <p>1. You'll receive SMS confirmation within 5 minutes</p>
            <p>2. Our technician will be assigned and contact you</p>
            <p>3. We'll call 30 minutes before arrival</p>
            <p>4. Professional service with 30-day guarantee</p>
          </div>
          
          <div class="booking-details">
            <h4>📞 Need to Make Changes?</h4>
            <p><strong>Emergency Line:</strong> 07745432478 (24/7)</p>
            <p><strong>Email:</strong> support@errorfree247.co.uk</p>
            <p><strong>WhatsApp:</strong> 07745432478</p>
          </div>
        </div>
        
        <div class="footer">
          <p>ErrorFree 24/7 - Professional IT Support</p>
          <p>London & Liverpool | 24/7 Available</p>
          <p>DBS Checked • Fully Insured • 30-Day Guarantee</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Validate booking data
export const validateBookingData = (data: BookingData): string[] => {
  const errors: string[] = [];
  
  if (!data.service) errors.push('Service selection is required');
  if (!data.urgency) errors.push('Urgency level is required');
  if (!data.date) errors.push('Date is required');
  if (!data.time) errors.push('Time is required');
  if (!data.name) errors.push('Name is required');
  if (!data.phone) errors.push('Phone number is required');
  if (!data.email) errors.push('Email address is required');
  if (!data.address) errors.push('Address is required');
  if (!data.postcode) errors.push('Postcode is required');
  
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (data.email && !emailRegex.test(data.email)) {
    errors.push('Please enter a valid email address');
  }
  
  // Validate UK phone number format
  const phoneRegex = /^(\+44|0)[0-9]{10}$/;
  if (data.phone && !phoneRegex.test(data.phone.replace(/\s/g, ''))) {
    errors.push('Please enter a valid UK phone number');
  }
  
  return errors;
};