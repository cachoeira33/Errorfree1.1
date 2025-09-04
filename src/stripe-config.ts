export interface StripeProduct {
  id: string;
  priceId: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  mode: 'payment' | 'subscription';
  category: string;
  popular?: boolean;
}

export const stripeProducts: StripeProduct[] = [
  // Emergency & Remote Support
  {
    id: 'prod_SxqZ3hsT95blnI',
    priceId: 'price_1S1usYF1zvZ6g9yula87kMhY',
    name: 'Remote Diagnosis (15 min)',
    description: 'Fast 15-minute remote IT diagnosis. A certified ErrorFree technician identifies the issue quickly and advises next steps.',
    price: 59.00,
    currency: 'gbp',
    mode: 'payment',
    category: 'remote'
  },
  {
    id: 'prod_SxqZfdCcbFqMap',
    priceId: 'price_1S1usZF1zvZ6g9yuYRRp9KaX',
    name: 'Remote Support (per 30 min)',
    description: 'Professional remote IT support session. Quick fixes, optimization, and troubleshooting from our experts.',
    price: 30.00,
    currency: 'gbp',
    mode: 'payment',
    category: 'remote'
  },
  
  // On-Site Support
  {
    id: 'prod_SxqZFTvB8aAxn0',
    priceId: 'price_1S1usZF1zvZ6g9yuiBbFZd1P',
    name: 'On-Site Call-Out (Daytime)',
    description: 'Emergency on-site IT support during daytime hours. Technician arrives within 1 hour, fully insured and DBS-checked.',
    price: 89.00,
    currency: 'gbp',
    mode: 'payment',
    category: 'onsite',
    popular: true
  },
  {
    id: 'prod_SxqZQ6VuC5Te7a',
    priceId: 'price_1S1usaF1zvZ6g9yu8G6qpKxZ',
    name: 'On-Site Call-Out (Night)',
    description: '24/7 emergency on-site IT support during night hours. Priority service with rapid response and professional care.',
    price: 129.00,
    currency: 'gbp',
    mode: 'payment',
    category: 'onsite'
  },
  {
    id: 'prod_SxqZRph1gPzWjx',
    priceId: 'price_1S1usaF1zvZ6g9yudR2SnpWV',
    name: 'On-Site Support (per hour)',
    description: 'Hourly on-site IT support for repairs, upgrades, or troubleshooting. Includes complete system checks.',
    price: 79.00,
    currency: 'gbp',
    mode: 'payment',
    category: 'onsite'
  },
  
  // Hardware Upgrades
  {
    id: 'prod_SxqZO3JUUj312G',
    priceId: 'price_1S1usaF1zvZ6g9yuBRoehVnA',
    name: 'SSD Upgrade (1TB)',
    description: 'Premium 1TB SSD upgrade. Includes installation, system migration, and performance testing for maximum speed.',
    price: 199.00,
    currency: 'gbp',
    mode: 'payment',
    category: 'upgrade'
  },
  {
    id: 'prod_SxqZxV6LeWMDlN',
    priceId: 'price_1S1usbF1zvZ6g9yuL2hQOXAY',
    name: 'RAM Upgrade (16GB)',
    description: 'Professional 16GB RAM upgrade. Boost performance for multitasking, business applications, or gaming setups.',
    price: 149.00,
    currency: 'gbp',
    mode: 'payment',
    category: 'upgrade'
  },
  
  // Website Services
  {
    id: 'prod_SxqZTXRbkpmvhf',
    priceId: 'price_1S1usbF1zvZ6g9yuiW60E7bO',
    name: 'Premium Website Build',
    description: 'Tailor-made premium website designed for businesses and professionals. Includes responsive design, SEO optimization, and fast hosting setup.',
    price: 1499.00,
    currency: 'gbp',
    mode: 'payment',
    category: 'website'
  },
  {
    id: 'prod_SxqZbYNvWkUAro',
    priceId: 'price_1S1uscF1zvZ6g9yuJvhkZs94',
    name: 'Premium Website Maintenance (24/7 SLA)',
    description: 'Monthly premium website maintenance with 24/7 uptime monitoring, security updates, and guaranteed support response.',
    price: 99.00,
    currency: 'gbp',
    mode: 'subscription',
    category: 'website'
  },
  
  // Business Retainer Plans
  {
    id: 'prod_SxqZmpANTlKzDr',
    priceId: 'price_1S1uscF1zvZ6g9yu75ruDEDe',
    name: 'Business Retainer Bronze',
    description: 'Entry-level business IT support retainer. Includes monthly priority support, remote troubleshooting, and performance checks.',
    price: 199.00,
    currency: 'gbp',
    mode: 'subscription',
    category: 'business'
  },
  {
    id: 'prod_SxqZ6AMoLiFFqU',
    priceId: 'price_1S1usdF1zvZ6g9yu2Sa67H42',
    name: 'Business Retainer Silver',
    description: 'Mid-tier IT support retainer for SMEs. Includes faster response times, on-site visits, and 24/7 monitoring.',
    price: 399.00,
    currency: 'gbp',
    mode: 'subscription',
    category: 'business',
    popular: true
  },
  {
    id: 'prod_SxqZgfetqDrzhE',
    priceId: 'price_1S1usdF1zvZ6g9yu0oB0ePDs',
    name: 'Business Retainer Gold',
    description: 'Premium IT support retainer for businesses. Includes 24/7 emergency coverage, unlimited remote sessions, and on-site priority service.',
    price: 799.00,
    currency: 'gbp',
    mode: 'subscription',
    category: 'business'
  }
];

export const getProductsByCategory = (category: string) => {
  return stripeProducts.filter(product => product.category === category);
};

export const getProductById = (id: string) => {
  return stripeProducts.find(product => product.id === id);
};

export const getProductByPriceId = (priceId: string) => {
  return stripeProducts.find(product => product.priceId === priceId);
};