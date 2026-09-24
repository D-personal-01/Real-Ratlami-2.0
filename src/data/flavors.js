import zeeraBottle from '../assets/Zeera.png';
import zeeraPoster from '../assets/Jeera bg.png';

import nimbuBottle from '../assets/Nimbu Masala.png';
import nimbuPoster from '../assets/Nimbu Masala bg.png';

import mojitoBottle from '../assets/Mojito.png';
import mojitoPoster from '../assets/Mojito bg.png';

import blueberryBottle from '../assets/Blueberry.png';
import blueberryPoster from '../assets/Blueberry bg.png';

import lycheeBottle from '../assets/Lichee.png';
import lycheePoster from '../assets/Lichee bg.png';

import mangoBottle from '../assets/Mango.png';
import mangoPoster from '../assets/Mango bg.png';

export const FLAVORS = [
  {
    id: 'zeera',
    name: 'Ratlami Zeera',
    shortName: 'Zeera',
    badge: 'Classic',
    subtitle: 'Bold & Desi Cumin Soda',
    statement: 'Made with real desi spices: the way your naani always knew best.',
    volume: '160 ml',
    price: 10,
    pack12Price: 120,
    pack24Price: 240,
    accentColor: '#4a7800',
    bgTint: '#F4F9EA',
    bottleImg: zeeraBottle,
    posterImg: zeeraPoster,
    description: 'Bold cumin soda with authentic desi spices. The original Indian digestive drink cherished for generations. Formulated to aid digestion while providing a crisp, uniquely refreshing punch.',
    tasteProfile: {
      fizz: 5,
      spice: 5,
      sweetness: 3,
      tangy: 4
    },
    ingredients: ['Cumin Extract', 'Spices Blend (Kala Namak & Rock Salt)', 'Sugar', 'Carbonated Water', 'Citric Acid'],
    benefits: ['Aids natural digestion', 'Authentic roasted cumin', 'Zero synthetic aftertaste', 'FSSAI Approved • 100% Vegetarian']
  },
  {
    id: 'nimbu-masala',
    name: 'Ratlami Nimbu Masala',
    shortName: 'Nimbu Masala',
    badge: 'Bestseller',
    subtitle: 'Chatpata & Tangy Lemon Masala',
    statement: 'Chatpata nimbu masala: the classic desi summer hit.',
    volume: '160 ml',
    price: 10,
    pack12Price: 120,
    pack24Price: 240,
    accentColor: '#b89000',
    bgTint: '#FDFBE8',
    bottleImg: nimbuBottle,
    posterImg: nimbuPoster,
    description: 'Tangy lemon beverage blended with traditional chatpata masala spices. The ultimate desi combo delivering a harmonious balance of sour, sweet, and spicy notes.',
    tasteProfile: {
      fizz: 5,
      spice: 4,
      sweetness: 3,
      tangy: 5
    },
    ingredients: ['Natural Lemon Juice', 'Chatpata Masala Spices', 'Sugar', 'Carbonated Water', 'Citric Acid'],
    benefits: ['Instant thirst quencher', 'Tangy citrus punch', 'Balanced spice infusion', 'FSSAI Approved • 100% Vegetarian']
  },
  {
    id: 'mojito',
    name: 'Ratlami Mojito',
    shortName: 'Mojito',
    badge: 'Signature',
    subtitle: 'Fresh Lime & Garden Mint Fizz',
    statement: 'Cafe-style mojito taste in a Rs. 10 pack. No kidding.',
    volume: '160 ml',
    price: 10,
    pack12Price: 120,
    pack24Price: 240,
    accentColor: '#6aaa00',
    bgTint: '#EDFAF1',
    bottleImg: mojitoBottle,
    posterImg: mojitoPoster,
    description: 'Fresh lime-mint fizz with an authentic desi twist. Crisp spearmint leaves combined with tart green lime and sparkling bubbles for cafe-style refreshment.',
    tasteProfile: {
      fizz: 4,
      spice: 1,
      sweetness: 4,
      tangy: 4
    },
    ingredients: ['Natural Spearmint Extract', 'Lime Juice', 'Sugar', 'Carbonated Water', 'Citric Acid'],
    benefits: ['Cooling mint sensation', 'Clean botanical finish', 'Ideal summer cooler', 'FSSAI Approved • 100% Vegetarian']
  },
  {
    id: 'blueberry',
    name: 'Ratlami Blueberry',
    shortName: 'Blueberry',
    badge: 'New',
    subtitle: 'Bold Berry Burst Sparkler',
    statement: 'Bold berry burst: refreshing from the very first sip.',
    volume: '160 ml',
    price: 10,
    pack12Price: 120,
    pack24Price: 240,
    accentColor: '#3858c0',
    bgTint: '#EEF5FD',
    bottleImg: blueberryBottle,
    posterImg: blueberryPoster,
    description: 'Bold blueberry burst charged with lively carbonation. Vibrant, cool, and exhilarating with deep ruby-blue berry notes.',
    tasteProfile: {
      fizz: 4,
      spice: 1,
      sweetness: 4,
      tangy: 3
    },
    ingredients: ['Blueberry Puree & Natural Extract', 'Sugar', 'Carbonated Water', 'Citric Acid'],
    benefits: ['Rich fruit flavor', 'Antioxidant profile', 'Crisp sparkling finish', 'FSSAI Approved • 100% Vegetarian']
  },
  {
    id: 'lychee',
    name: 'Ratlami Lychee',
    shortName: 'Lychee',
    badge: 'Still Drink',
    subtitle: 'Sweet & Tropical Pure Fruit Drink',
    statement: 'Juicy lychee goodness: sip karo, smile karo.',
    volume: '160 ml',
    price: 10,
    pack12Price: 120,
    pack24Price: 240,
    accentColor: '#d0609a',
    bgTint: '#FDF1F4',
    bottleImg: lycheeBottle,
    posterImg: lycheePoster,
    description: 'Pure lychee taste, no fizz: just sweet, juicy, and real fruit goodness in every sip. Velvety fruit nectar evoking the timeless sweetness of Shahi orchards.',
    tasteProfile: {
      fizz: 1,
      spice: 1,
      sweetness: 5,
      tangy: 2
    },
    ingredients: ['Lychee Pulp & Essence', 'Sugar', 'Purified Water', 'Citric Acid'],
    benefits: ['Non-carbonated still fruit drink', 'Delicate floral aroma', 'Hydrating fruit nectar', 'FSSAI Approved • 100% Vegetarian']
  },
  {
    id: 'aamras',
    name: 'Ratlami Mango (Aamras)',
    shortName: 'Mango Aamras',
    badge: 'Still Drink',
    subtitle: 'Pure Sun-Ripened Alphonso Magic',
    statement: 'Sun-kissed mango magic: desi summer in a bottle.',
    volume: '200 ml',
    price: 10,
    pack12Price: 120,
    pack24Price: 240,
    accentColor: '#c07000',
    bgTint: '#FEF8EA',
    bottleImg: mangoBottle,
    posterImg: mangoPoster,
    description: 'Pure sun-ripened mango goodness. No fizz, just real taste: thick, sweet, and totally desi. Prepared with rich Alphonso mango pulp and subtle cardamom aroma.',
    tasteProfile: {
      fizz: 1,
      spice: 1,
      sweetness: 5,
      tangy: 3
    },
    ingredients: ['Alphonso Mango Pulp', 'Cardamom Extract', 'Sugar', 'Purified Water', 'Ascorbic Acid (Vitamin C)'],
    benefits: ['Non-carbonated mango nectar', 'Authentic Indian Alphonso pulp', 'Rich in Vitamin C', 'FSSAI Approved • 100% Vegetarian']
  }
];

export const COMPANY_INFO = {
  name: 'The Real Ratlami',
  legalName: 'The Real Ratlami',
  trademarkTagline: 'India Ka Desi Thanda',
  couplet: 'Desi Thanda, Real Ratlami: har ghoont mein asli swaad, aur har pal mein thandak.',
  phone: '+91 75665 92555',
  phoneTel: '+917566592555',
  email: 'info@therealratlami.com',
  whatsappUrl: 'https://wa.me/7566592555',
  facebookUrl: 'https://www.facebook.com/share/19Ak42pUp7/?mibextid=wwXIfr',
  instagramUrl: 'https://www.instagram.com/therealratlami?utm_source=qr',
  youtubeUrl: 'https://youtube.com/@therealratlami?si=rsM5uIcPzGjkW237',
  domain: 'ratlamizeera.com',
  originCity: 'Ratlam, Madhya Pradesh, India',
  factoryAddress: {
    line1: '559, MR9, Link Road',
    line2: 'Khajrana Factory 1',
    city: 'Indore',
    state: 'Madhya Pradesh',
    pincode: '452016',
    country: 'India'
  },
  certifications: ['FSSAI Approved', 'GST Registered', '100% Vegetarian Green Dot'],
  disclaimer: 'The images shown on this website and the brand name are for representational purposes only and do not necessarily reflect the actual appearance or nature of the product.'
};
