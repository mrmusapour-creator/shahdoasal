/* ========================================
   SHAHD & ASAL SHOKOUH - Main Application
   Routing, Multi-language & Interactions
   ======================================== */

// ========================================
// Content Database (Multi-language)
// ========================================

const content = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      products: 'Products',
      brands: 'Brands',
      export: 'Export',
      exhibitions: 'Exhibitions',
      about: 'About Us',
      contact: 'Contact'
    },
    
    // Home Page
    home: {
      heroTitle: 'Premium Confectionery Excellence',
      heroSubtitle: 'Crafting exceptional sweets and chocolates for global markets. Quality, tradition, and innovation in every bite.',
      viewProducts: 'View Products',
      exploreBrands: 'Explore Brands',
      
      featuredProducts: 'Featured Products',
      featuredProductsDesc: 'Discover our finest confectionery creations',
      
      ourBrands: 'Our Brands',
      ourBrandsDesc: 'Multiple brands serving different market segments',
      
      whyChooseUs: 'Why Choose Shahd & Asal Shokouh?',
      qualityTitle: 'Premium Quality',
      qualityDesc: 'International standards and certifications',
      exportTitle: 'Global Export',
      exportDesc: 'Serving 25+ countries worldwide',
      innovationTitle: 'Innovation',
      innovationDesc: 'Modern production with traditional recipes',
      supportTitle: 'Dedicated Support',
      supportDesc: '24/7 customer service for partners',
      
      ctaTitle: 'Ready to Partner With Us?',
      ctaDesc: 'Join our global network of satisfied distributors and retailers',
      contactUs: 'Contact Us',
      
      footerDesc: 'Leading manufacturer and exporter of premium confectionery products. Committed to quality, innovation, and customer satisfaction since inception.'
    },
    
    // Products Page
    products: {
      title: 'Our Products',
      subtitle: 'Explore our complete range of premium confectionery',
      filterAll: 'All Products',
      filterChocolate: 'Chocolate',
      filterGummy: 'Gummy',
      filterBiscuit: 'Biscuits',
      filterWafers: 'Wafers',
      
      // Product Details
      productDetails: {
        chocolateBars: {
          name: 'Premium Chocolate Bars',
          category: 'Chocolate',
          description: 'Luxurious chocolate bars crafted from the finest cocoa beans. Available in milk, dark, and white chocolate varieties with various fillings.',
          specs: {
            weight: 'Weight',
            packaging: 'Packaging',
            shelfLife: 'Shelf Life',
            ingredients: 'Ingredients',
            certification: 'Certification'
          },
          values: {
            weight: '100g, 200g, 500g',
            packaging: 'Individual wrapping, Box packs',
            shelfLife: '18 months',
            ingredients: 'Cocoa, Sugar, Milk solids, Cocoa butter',
            certification: 'ISO 22000, HACCP, Halal'
          },
          inquireNow: 'Inquire Now',
          whatsappOrder: 'Order via WhatsApp'
        },
        gummyCandies: {
          name: 'Gummy Candies Collection',
          category: 'Gummy',
          description: 'Delightful gummy candies in various shapes, flavors, and colors. Made with real fruit juices and natural flavors.',
          specs: {
            weight: 'Weight',
            packaging: 'Packaging',
            shelfLife: 'Shelf Life',
            ingredients: 'Ingredients',
            certification: 'Certification'
          },
          values: {
            weight: '50g, 100g, 200g, 1kg bulk',
            packaging: 'Stand-up pouches, Jar packs',
            shelfLife: '12 months',
            ingredients: 'Glucose syrup, Sugar, Gelatin, Fruit juice',
            certification: 'ISO 22000, HACCP, Halal'
          },
          inquireNow: 'Inquire Now',
          whatsappOrder: 'Order via WhatsApp'
        },
        biscuits: {
          name: 'Artisan Biscuits',
          category: 'Biscuits',
          description: 'Crispy, buttery biscuits made with traditional recipes. Perfect for tea time or as a snack.',
          specs: {
            weight: 'Weight',
            packaging: 'Packaging',
            shelfLife: 'Shelf Life',
            ingredients: 'Ingredients',
            certification: 'Certification'
          },
          values: {
            weight: '100g, 250g, 500g',
            packaging: 'Tins, Box packs, Flow packs',
            shelfLife: '12 months',
            ingredients: 'Wheat flour, Butter, Sugar, Eggs',
            certification: 'ISO 22000, HACCP'
          },
          inquireNow: 'Inquire Now',
          whatsappOrder: 'Order via WhatsApp'
        },
        wafers: {
          name: 'Crispy Wafers',
          category: 'Wafers',
          description: 'Light, crispy wafers with delicious cream fillings. Available in vanilla, chocolate, hazelnut, and strawberry flavors.',
          specs: {
            weight: 'Weight',
            packaging: 'Packaging',
            shelfLife: 'Shelf Life',
            ingredients: 'Ingredients',
            certification: 'Certification'
          },
          values: {
            weight: '30g, 100g, 200g',
            packaging: 'Flow packs, Box packs',
            shelfLife: '9 months',
            ingredients: 'Wheat flour, Vegetable oil, Sugar, Cream filling',
            certification: 'ISO 22000, HACCP, Halal'
          },
          inquireNow: 'Inquire Now',
          whatsappOrder: 'Order via WhatsApp'
        }
      }
    },
    
    // Brands Page
    brands: {
      title: 'Our Brands',
      subtitle: 'Each brand tells a unique story of quality and taste',
      
      brandDetails: {
        shahd: {
          name: 'Shahd',
          tagline: 'Sweetness in Every Moment',
          description: 'Shahd is our flagship brand representing premium quality confectionery. Known for exceptional taste and elegant packaging, Shahd products are favored by discerning customers who appreciate the finer things in life.',
          story: 'The name "Shahd" means honey in Arabic, symbolizing pure sweetness and natural goodness. Since its launch, Shahd has become synonymous with luxury confectionery across the Middle East and beyond.',
          products: 'Premium chocolate bars, Gift boxes, Luxury assortments'
        },
        asal: {
          name: 'Asal',
          tagline: 'Traditional Taste, Modern Quality',
          description: 'Asal brings traditional recipes to modern audiences. Our commitment to authentic flavors combined with contemporary production methods makes Asal a beloved brand across multiple generations.',
          story: '"Asal" also means honey, reflecting our dedication to natural sweetness. This brand focuses on traditional confectionery items that evoke nostalgia while maintaining the highest quality standards.',
          products: 'Traditional sweets, Gummy candies, Family packs'
        },
        golden: {
          name: 'Golden Treat',
          tagline: 'Everyday Indulgence',
          description: 'Golden Treat offers affordable luxury for everyday enjoyment. This brand targets value-conscious consumers who refuse to compromise on quality.',
          story: 'Launched to serve the mass market, Golden Treat has become one of the most recognized value brands in our portfolio, offering excellent taste at accessible prices.',
          products: 'Value packs, Snack-size portions, Bulk options'
        }
      }
    },
    
    // Export Page
    export: {
      title: 'Global Export',
      subtitle: 'Partner with us to bring premium confectionery to your market',
      intro: 'We are a leading exporter of confectionery products, serving clients in over 25 countries across the Middle East, Asia, Europe, and Africa. Our commitment to quality, reliability, and customer satisfaction has made us a trusted partner for distributors and retailers worldwide.',
      
      benefits: {
        quality: 'International Quality Standards',
        qualityDesc: 'ISO 22000, HACCP, and Halal certified production facilities',
        capacity: 'Large Production Capacity',
        capacityDesc: 'Ability to fulfill large orders with consistent quality',
        logistics: 'Efficient Logistics',
        logisticsDesc: 'Streamlined shipping and customs documentation',
        support: 'Dedicated Export Support',
        supportDesc: 'Multilingual team available for international clients'
      },
      
      process: {
        title: 'Export Process',
        step1: 'Initial Inquiry',
        step1Desc: 'Contact our export team with your requirements',
        step2: 'Product Selection',
        step2Desc: 'Choose from our catalog or request custom options',
        step3: 'Quotation',
        step3Desc: 'Receive detailed pricing and shipping costs',
        step4: 'Order Confirmation',
        step4Desc: 'Confirm order and arrange payment terms',
        step5: 'Production & QC',
        step5Desc: 'Manufacturing with strict quality control',
        step6: 'Shipping & Delivery',
        step6Desc: 'Secure packaging and timely delivery'
      },
      
      cta: 'Start Your Export Partnership',
      contactExport: 'Contact Export Team',
      downloadCatalog: 'Download Catalog',
      whatsappInquiry: 'WhatsApp Inquiry'
    },
    
    // Exhibitions Page
    exhibitions: {
      title: 'Exhibitions & Events',
      subtitle: 'Meet us at international trade shows and food expos',
      
      events: {
        gulfood: {
          name: 'GULFOOD 2025',
          date: 'February 17-21, 2025',
          location: 'Dubai World Trade Centre, UAE',
          description: 'The world\'s largest annual food and beverage exhibition. Visit us at Stand S3-A12 to explore our latest products and discuss partnership opportunities.',
          booth: 'Stand S3-A12',
          highlights: 'New product launches, B2B meetings, Networking events'
        },
        anuga: {
          name: 'ANUGA 2025',
          date: 'October 4-8, 2025',
          location: 'Cologne, Germany',
          description: 'Europe\'s leading food fair. Discover our premium confectionery range designed for the European market.',
          booth: 'Hall 10.2, Stand C45',
          highlights: 'European market insights, Product tastings, Distributor meetings'
        },
        fha: {
          name: 'FHA Food & Hotel Asia 2025',
          date: 'April 8-11, 2025',
          location: 'Singapore Expo',
          description: 'Asia\'s premier food and hospitality event. Meet our team to explore opportunities in the Asian market.',
          booth: 'Hall 3, Stand E28',
          highlights: 'Asian market expansion, Halal certification showcase, Chef demonstrations'
        },
        sia: {
          name: 'SIAL Paris 2025',
          date: 'October 19-23, 2025',
          location: 'Paris, France',
          description: 'One of the world\'s largest food innovation exhibitions. Experience our latest innovations in confectionery.',
          booth: 'Hall 4, Stand D22',
          highlights: 'Innovation awards, Sustainability initiatives, Global networking'
        }
      }
    },
    
    // About Page
    about: {
      title: 'About Shahd & Asal Shokouh',
      subtitle: 'A legacy of excellence in confectionery manufacturing',
      
      intro: 'Founded with a vision to bring premium quality confectionery to the world, Shahd & Asal Shokouh has grown into a leading manufacturer and exporter. Our state-of-the-art facilities combine traditional craftsmanship with modern technology to create products that delight consumers globally.',
      
      story: 'Our Story',
      storyContent: 'What started as a small family business has evolved into an internationally recognized confectionery company. Our journey began with a simple belief: everyone deserves access to high-quality, delicious sweets. Today, we export to over 25 countries while maintaining our commitment to quality and customer satisfaction.',
      
      mission: 'Our Mission',
      missionContent: 'To produce and export premium confectionery products that exceed international quality standards, while fostering long-term partnerships with distributors and retailers worldwide.',
      
      vision: 'Our Vision',
      visionContent: 'To be among the top 10 confectionery exporters in the region by 2030, known for innovation, quality, and sustainability.',
      
      values: {
        quality: 'Quality First',
        qualityDesc: 'Never compromise on ingredients or production standards',
        innovation: 'Continuous Innovation',
        innovationDesc: 'Constantly improving recipes and processes',
        integrity: 'Business Integrity',
        integrityDesc: 'Transparent and honest partnerships',
        sustainability: 'Sustainability',
        sustainabilityDesc: 'Environmentally responsible manufacturing'
      },
      
      stats: {
        countries: 'Countries',
        products: 'Products',
        employees: 'Team Members',
        years: 'Years Experience'
      },
      
      factory: 'Our Factory',
      factoryDesc: 'Our 15,000 sqm facility features state-of-the-art production lines, quality control laboratories, and temperature-controlled storage. We maintain the highest hygiene standards and employ advanced food safety protocols.',
      
      cta: 'Want to Learn More?',
      ctaDesc: 'Schedule a factory visit or speak with our team',
      contactUs: 'Get in Touch'
    },
    
    // Contact Page
    contact: {
      title: 'Contact Us',
      subtitle: 'We\'d love to hear from you',
      
      info: 'Get in Touch',
      infoDesc: 'Reach out to our team for inquiries, partnerships, or any questions',
      
      address: 'Address',
      addressValue: 'Industrial Zone 5, Tehran, Iran',
      
      phone: 'Phone',
      phoneValue: '+98 21 1234 5678',
      
      email: 'Email',
      emailValue: 'info@shahdasal.com',
      
      whatsapp: 'WhatsApp',
      whatsappValue: '+98 912 345 6789',
      
      form: {
        title: 'Send us a Message',
        name: 'Your Name',
        namePlaceholder: 'John Doe',
        email: 'Email Address',
        emailPlaceholder: 'john@example.com',
        subject: 'Subject',
        subjectPlaceholder: 'Export Inquiry',
        message: 'Message',
        messagePlaceholder: 'Tell us about your requirements...',
        send: 'Send Message',
        sending: 'Sending...'
      },
      
      map: 'Our Location'
    },
    
    // Footer
    footer: {
      quickLinks: 'Quick Links',
      followUs: 'Follow Us',
      copyright: '© 2025 Shahd & Asal Shokouh. All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service'
    },
    
    // Common
    common: {
      learnMore: 'Learn More',
      viewDetails: 'View Details',
      back: 'Back',
      close: 'Close',
      loading: 'Loading...',
      error: 'An error occurred',
      success: 'Success!'
    }
  },
  
  fa: {
    nav: {
      home: 'خانه',
      products: 'محصولات',
      brands: 'برندها',
      export: 'صادرات',
      exhibitions: 'نمایشگاه‌ها',
      about: 'درباره ما',
      contact: 'تماس'
    },
    
    home: {
      heroTitle: 'تعالی در صنایع قنادی',
      heroSubtitle: 'تولید کننده شیرینی و شکلات‌های ممتاز برای بازارهای جهانی. کیفیت، سنت و نوآوری در هر طعم.',
      viewProducts: 'مشاهده محصولات',
      exploreBrands: 'کاوش برندها',
      featuredProducts: 'محصولات برگزیده',
      featuredProductsDesc: 'کشف بهترین تولیدات قنادی ما',
      ourBrands: 'برندهای ما',
      ourBrandsDesc: 'چندین برند برای بخش‌های مختلف بازار',
      whyChooseUs: 'چرا شهد و عسل شکوه؟',
      qualityTitle: 'کیفیت ممتاز',
      qualityDesc: 'استانداردها و گواهینامه‌های بین‌المللی',
      exportTitle: 'صادرات جهانی',
      exportDesc: 'خدمت‌رسانی به بیش از ۲۵ کشور',
      innovationTitle: 'نوآوری',
      innovationDesc: 'تولید مدرن با دستورالعمل‌های سنتی',
      supportTitle: 'پشتیبانی اختصاصی',
      supportDesc: 'خدمات مشتری ۲۴/۷ برای شرکا',
      ctaTitle: 'آماده همکاری هستید؟',
      ctaDesc: 'به شبکه جهانی توزیع‌کنندگان راضی ما بپیوندید',
      contactUs: 'تماس با ما',
      footerDesc: 'تولید کننده و صادرکننده پیشرو محصولات قنادی ممتاز. متعهد به کیفیت، نوآوری و رضایت مشتری.'
    },
    
    products: {
      title: 'محصولات ما',
      subtitle: 'مجموعه کامل محصولات قنادی ممتاز ما را کشف کنید',
      filterAll: 'همه محصولات',
      filterChocolate: 'شکلات',
      filterGummy: 'آبنبات پاستیلی',
      filterBiscuit: 'بیسکویت',
      filterWafers: 'ویفر',
      productDetails: {
        chocolateBars: {
          name: 'شکلات‌های ممتاز',
          category: 'شکلات',
          description: 'شکلات‌های لوکس تهیه شده از بهترین دانه‌های کاکائو. موجود در انواع شیری، تلخ و سفید با پرکننده‌های مختلف.',
          specs: {
            weight: 'وزن',
            packaging: 'بسته‌بندی',
            shelfLife: 'ماندگاری',
            ingredients: 'مواد تشکیل‌دهنده',
            certification: 'گواهینامه‌ها'
          },
          values: {
            weight: '۱۰۰ گرم، ۲۰۰ گرم، ۵۰۰ گرم',
            packaging: 'بسته‌بندی تکی، جعبه‌ای',
            shelfLife: '۱۸ ماه',
            ingredients: 'کاکائو، شکر، مواد جامد شیر، کره کاکائو',
            certification: 'ISO 22000, HACCP, حلال'
          },
          inquireNow: 'درخواست اطلاعات',
          whatsappOrder: 'سفارش از واتس‌اپ'
        },
        gummyCandies: {
          name: 'مجموعه آبنبات‌های پاستیلی',
          category: 'آبنبات پاستیلی',
          description: 'آبنبات‌های پاستیلی لذیذ در اشکال، طعم‌ها و رنگ‌های مختلف. تهیه شده با آب میوه طبیعی.',
          specs: {
            weight: 'وزن',
            packaging: 'بسته‌بندی',
            shelfLife: 'ماندگاری',
            ingredients: 'مواد تشکیل‌دهنده',
            certification: 'گواهینامه‌ها'
          },
          values: {
            weight: '۵۰ گرم، ۱۰۰ گرم، ۲۰۰ گرم، ۱ کیلو فله',
            packaging: 'پاکت‌های ایستاده، شیشه‌ای',
            shelfLife: '۱۲ ماه',
            ingredients: 'شربت گلوکز، شکر، ژلاتین، آب میوه',
            certification: 'ISO 22000, HACCP, حلال'
          },
          inquireNow: 'درخواست اطلاعات',
          whatsappOrder: 'سفارش از واتس‌اپ'
        },
        biscuits: {
          name: 'بیسکویت‌های artisan',
          category: 'بیسکویت',
          description: 'بیسکویت‌های ترد و کره‌ای با دستورالعمل‌های سنتی. عالی برای چای یا میان‌وعده.',
          specs: {
            weight: 'وزن',
            packaging: 'بسته‌بندی',
            shelfLife: 'ماندگاری',
            ingredients: 'مواد تشکیل‌دهنده',
            certification: 'گواهینامه‌ها'
          },
          values: {
            weight: '۱۰۰ گرم، ۲۵۰ گرم، ۵۰۰ گرم',
            packaging: 'قوطی، جعبه‌ای، فلوپک',
            shelfLife: '۱۲ ماه',
            ingredients: 'آرد گندم، کره، شکر، تخم‌مرغ',
            certification: 'ISO 22000, HACCP'
          },
          inquireNow: 'درخواست اطلاعات',
          whatsappOrder: 'سفارش از واتس‌اپ'
        },
        wafers: {
          name: 'ویفرهای ترد',
          category: 'ویفر',
          description: 'ویفرهای سبک و ترد با پرکننده‌های خامه‌ای خوشمزه. در طعم‌های وانیلی، شکلاتی، فندقی و توت‌فرنگی.',
          specs: {
            weight: 'وزن',
            packaging: 'بسته‌بندی',
            shelfLife: 'ماندگاری',
            ingredients: 'مواد تشکیل‌دهنده',
            certification: 'گواهینامه‌ها'
          },
          values: {
            weight: '۳۰ گرم، ۱۰۰ گرم، ۲۰۰ گرم',
            packaging: 'فلوپک، جعبه‌ای',
            shelfLife: '۹ ماه',
            ingredients: 'آرد گندم، روغن گیاهی، شکر، پرکننده خامه‌ای',
            certification: 'ISO 22000, HACCP, حلال'
          },
          inquireNow: 'درخواست اطلاعات',
          whatsappOrder: 'سفارش از واتس‌اپ'
        }
      }
    },
    
    brands: {
      title: 'برندهای ما',
      subtitle: 'هر برند داستانی منحصر به فرد از کیفیت و طعم را روایت می‌کند',
      brandDetails: {
        shahd: {
          name: 'شهد',
          tagline: 'شیرینی در هر لحظه',
          description: 'شهد برند پرچمدار ما است که نمایانگر قنادی با کیفیت ممتاز است. معروف به طعم استثنایی و بسته‌بندی شیک.',
          story: 'نام "شهد" به معنی عسل است، نماد شیرینی خالص و خوبی طبیعی. از زمان راه‌اندازی، شهد مترادف با قنادی لوکس شده است.',
          products: 'شکلات‌های ممتاز، جعبه‌های هدیه، مجموعه‌های لوکس'
        },
        asal: {
          name: 'عسل',
          tagline: 'طعم سنتی، کیفیت مدرن',
          description: 'عسل دستورالعمل‌های سنتی را به مخاطبان مدرن ارائه می‌دهد. تعهد به طعم‌های اصیل.',
          story: '"عسل" نیز به معنی عسل است، نشان‌دهنده تعهد ما به شیرینی طبیعی. این برند بر اقلام قنادی سنتی تمرکز دارد.',
          products: 'شیرینی‌های سنتی، آبنبات‌های پاستیلی، بسته‌های خانوادگی'
        },
        golden: {
          name: 'طلایی',
          tagline: 'لذت روزمره',
          description: 'طلایی لوکس مقرون به صرفه برای لذت روزمره ارائه می‌دهد. برای مصرف‌کنندگان حساس به قیمت.',
          story: 'برای خدمت به بازار انبوه راه‌اندازی شد، طلایی به یکی از شناخته‌شده‌ترین برندهای ارزش تبدیل شده است.',
          products: 'بسته‌های ارزشی، وعده‌های تنقلاتی، گزینه‌های فله'
        }
      }
    },
    
    export: {
      title: 'صادرات جهانی',
      subtitle: 'با ما برای آوردن قنادی ممتاز به بازار خود شریک شوید',
      intro: 'ما صادرکننده پیشرو محصولات قنادی هستیم و به مشتریان در بیش از ۲۵ کشور در خاورمیانه، آسیا، اروپا و آفریقا خدمت می‌کنیم.',
      benefits: {
        quality: 'استانداردهای کیفیت بین‌المللی',
        qualityDesc: 'تأسیسات تولید دارای گواهینامه ISO 22000, HACCP و حلال',
        capacity: 'ظرفیت تولید بزرگ',
        capacityDesc: 'توانایی تکمیل سفارشات بزرگ با کیفیت ثابت',
        logistics: 'لجستیک کارآمد',
        logisticsDesc: 'حمل و نقل و اسناد گمرکی ساده‌سازی شده',
        support: 'پشتیبانی صادرات اختصاصی',
        supportDesc: 'تیم چندزبانه در دسترس برای مشتریان بین‌المللی'
      },
      process: {
        title: 'فرآیند صادرات',
        step1: 'استعلام اولیه',
        step1Desc: 'با تیم صادرات ما با نیازهای خود تماس بگیرید',
        step2: 'انتخاب محصول',
        step2Desc: 'از کاتالوگ ما انتخاب کنید یا گزینه‌های سفارشی درخواست دهید',
        step3: 'پیش‌فاکتور',
        step3Desc: 'قیمت‌گذاری دقیق و هزینه‌های حمل را دریافت کنید',
        step4: 'تأیید سفارش',
        step4Desc: 'سفارش را تأیید و شرایط پرداخت را ترتیب دهید',
        step5: 'تولید و کنترل کیفیت',
        step5Desc: 'تولید با کنترل کیفیت دقیق',
        step6: 'حمل و تحویل',
        step6Desc: 'بسته‌بندی امن و تحویل به موقع'
      },
      cta: 'شراکت صادراتی خود را شروع کنید',
      contactExport: 'تماس با تیم صادرات',
      downloadCatalog: 'دانلود کاتالوگ',
      whatsappInquiry: 'استعلام واتس‌اپ'
    },
    
    exhibitions: {
      title: 'نمایشگاه‌ها و رویدادها',
      subtitle: 'ما را در نمایشگاه‌های تجاری بین‌المللی و نمایشگاه‌های مواد غذایی ملاقات کنید',
      events: {
        gulfood: {
          name: 'گلفود ۲۰۲۵',
          date: '۱۷-۲۱ فوریه ۲۰۲۵',
          location: 'مرکز تجارت جهانی دبی، امارات',
          description: 'بزرگترین نمایشگاه سالانه مواد غذایی و نوشیدنی جهان. از ما در غرفه S3-A12 دیدن کنید.',
          booth: 'غرفه S3-A12',
          highlights: 'راه‌اندازی محصولات جدید، جلسات B2B، رویدادهای شبکه‌سازی'
        },
        anuga: {
          name: 'آنوگا ۲۰۲۵',
          date: '۴-۸ اکتبر ۲۰۲۵',
          location: 'کلن، آلمان',
          description: 'نمایشگاه پیشرو مواد غذایی اروپا. مجموعه قنادی ممتاز ما را برای بازار اروپا کشف کنید.',
          booth: 'سالن 10.2، غرفه C45',
          highlights: 'بینش بازار اروپا، تست محصول، جلسات توزیع‌کننده'
        },
        fha: {
          name: 'FHA Food & Hotel Asia 2025',
          date: '۸-۱۱ آوریل ۲۰۲۵',
          location: 'Singapore Expo',
          description: 'برترین رویداد مواد غذایی و هتلداری آسیا. با تیم ما برای کاوش فرصت‌ها در بازار آسیا ملاقات کنید.',
          booth: 'سالن 3، غرفه E28',
          highlights: 'گسترش بازار آسیا، نمایش گواهینامه حلال، демонстрации سرآشپز'
        },
        sia: {
          name: 'SIAL Paris 2025',
          date: '۱۹-۲۳ اکتبر ۲۰۲۵',
          location: 'پاریس، فرانسه',
          description: 'یکی از بزرگترین نمایشگاه‌های نوآوری مواد غذایی جهان. آخرین نوآوری‌های ما را در قنادی تجربه کنید.',
          booth: 'سالن 4، غرفه D22',
          highlights: 'جوایز نوآوری، ابتکارات پایداری، شبکه‌سازی جهانی'
        }
      }
    },
    
    about: {
      title: 'درباره شهد و عسل شکوه',
      subtitle: 'میراث تعالی در تولید قنادی',
      intro: 'شهد و عسل شکوه با چشم‌انداز آوردن قنادی با کیفیت ممتاز به جهان تأسیس شد و به یک تولیدکننده و صادرکننده پیشرو تبدیل شده است.',
      story: 'داستان ما',
      storyContent: 'آنچه به عنوان یک کسب‌وکار کوچک خانوادگی شروع شد، به یک شرکت قنادی شناخته‌شده بین‌المللی تبدیل شده است. سفر ما با یک باور ساده آغاز شد: همه سزاوار دسترسی به شیرینی‌های باکیفیت و خوشمزه هستند.',
      mission: 'ماموریت ما',
      missionContent: 'تولید و صادرات محصولات قنادی ممتاز که فراتر از استانداردهای کیفیت بین‌المللی هستند، ضمن پرورش مشارکت‌های بلندمدت با توزیع‌کنندگان و خرده‌فروشان در سراسر جهان.',
      vision: 'چشم‌انداز ما',
      visionContent: 'تا سال ۲۰۳۰ جزو ۱۰ صادرکننده برتر قنادی در منطقه باشیم، معروف به نوآوری، کیفیت و پایداری.',
      values: {
        quality: 'اولویت کیفیت',
        qualityDesc: 'هرگز در مواد یا استانداردهای تولید سازش نکنید',
        innovation: 'نوآوری مستمر',
        innovationDesc: 'بهبود مداوم دستورالعمل‌ها و فرآیندها',
        integrity: 'صداقت کسب‌وکار',
        integrityDesc: 'مشارکت‌های شفاف و صادقانه',
        sustainability: 'پایداری',
        sustainabilityDesc: 'تولید مسئولانه زیست‌محیطی'
      },
      stats: {
        countries: 'کشورها',
        products: 'محصولات',
        employees: 'اعضای تیم',
        years: 'سال تجربه'
      },
      factory: 'کارخانه ما',
      factoryDesc: 'تأسیسات ۱۵۰۰۰ متر مربعی ما دارای خطوط تولید پیشرفته، آزمایشگاه‌های کنترل کیفیت و انبارهای با دمای کنترل‌شده است.',
      cta: 'می‌خواهید بیشتر بدانید؟',
      ctaDesc: 'بازدید از کارخانه را برنامه‌ریزی کنید یا با تیم ما صحبت کنید',
      contactUs: 'تماس بگیرید'
    },
    
    contact: {
      title: 'تماس با ما',
      subtitle: 'خوشحال می‌شویم از شما بشنویم',
      info: 'ارتباط بگیرید',
      infoDesc: 'برای استعلام‌ها، مشارکت‌ها یا هر سوالی با تیم ما تماس بگیرید',
      address: 'آدرس',
      addressValue: 'منطقه صنعتی ۵، تهران، ایران',
      phone: 'تلفن',
      phoneValue: '+۹۸ ۲۱ ۱۲۳۴ ۵۶۷۸',
      email: 'ایمیل',
      emailValue: 'info@shahdasal.com',
      whatsapp: 'واتس‌اپ',
      whatsappValue: '+۹۸ ۹۱۲ ۳۴۵ ۶۷۸۹',
      form: {
        title: 'پیام خود را ارسال کنید',
        name: 'نام شما',
        namePlaceholder: 'جان دو',
        email: 'آدرس ایمیل',
        emailPlaceholder: 'john@example.com',
        subject: 'موضوع',
        subjectPlaceholder: 'استعلام صادرات',
        message: 'پیام',
        messagePlaceholder: 'درباره نیازهای خود به ما بگویید...',
        send: 'ارسال پیام',
        sending: 'در حال ارسال...'
      },
      map: 'موقعیت ما'
    },
    
    footer: {
      quickLinks: 'لینک‌های سریع',
      followUs: 'ما را دنبال کنید',
      copyright: '© ۲۰۲۵ شهد و عسل شکوه. تمام حقوق محفوظ است.',
      privacyPolicy: 'سیاست حریم خصوصی',
      termsOfService: 'شرایط خدمات'
    },
    
    common: {
      learnMore: 'بیشتر بدانید',
      viewDetails: 'مشاهده جزئیات',
      back: 'بازگشت',
      close: 'بستن',
      loading: 'در حال بارگذاری...',
      error: 'خطایی رخ داد',
      success: 'موفق!'
    }
  },
  
  ar: {
    nav: {
      home: 'الرئيسية',
      products: 'المنتجات',
      brands: 'العلامات التجارية',
      export: 'التصدير',
      exhibitions: 'المعارض',
      about: 'من نحن',
      contact: 'اتصل بنا'
    },
    
    home: {
      heroTitle: 'التميز في صناعة الحلويات',
      heroSubtitle: 'صناعة الحلويات والشوكولاتة الممتازة للأسواق العالمية. الجودة والتقاليد والابتكار في كل قضمة.',
      viewProducts: 'عرض المنتجات',
      exploreBrands: 'استكشاف العلامات',
      featuredProducts: 'المنتجات المميزة',
      featuredProductsDesc: 'اكتشف أفضل إبداعاتنا من الحلويات',
      ourBrands: 'علاماتنا التجارية',
      ourBrandsDesc: 'علامات تجارية متعددة تخدم قطاعات سوقية مختلفة',
      whyChooseUs: 'لماذا تختار شهد وعسل شكوه؟',
      qualityTitle: 'جودة ممتازة',
      qualityDesc: 'معايير وشهادات دولية',
      exportTitle: 'تصدير عالمي',
      exportDesc: 'نخدم أكثر من 25 دولة حول العالم',
      innovationTitle: 'الابتكار',
      innovationDesc: 'إنتاج حديث بوصفات تقليدية',
      supportTitle: 'دعم مخصص',
      supportDesc: 'خدمة عملاء 24/7 للشركاء',
      ctaTitle: 'هل أنت مستعد للشراكة معنا؟',
      ctaDesc: 'انضم إلى شبكتنا العالمية من الموزعين وتجار التجزئة الراضين',
      contactUs: 'اتصل بنا',
      footerDesc: 'شركة رائدة في تصنيع وتصدير منتجات الحلويات الممتازة. ملتزمون بالجودة والابتكار ورضا العملاء.'
    },
    
    products: {
      title: 'منتجاتنا',
      subtitle: 'استكشف مجموعتنا الكاملة من الحلويات الممتازة',
      filterAll: 'جميع المنتجات',
      filterChocolate: 'شوكولاتة',
      filterGummy: 'حلوى صمغية',
      filterBiscuit: 'بسكويت',
      filterWafers: 'رقائق',
      productDetails: {
        chocolateBars: {
          name: 'ألواح الشوكولاتة الممتازة',
          category: 'شوكولاتة',
          description: 'ألواح شوكولاتة فاخرة مصنوعة من أجود حبوب الكاكاو. متوفرة بالشوكولاتة بالحليب والداكنة والبيضاء مع حشوات متنوعة.',
          specs: {
            weight: 'الوزن',
            packaging: 'التغليف',
            shelfLife: 'مدة الصلاحية',
            ingredients: 'المكونات',
            certification: 'الشهادات'
          },
          values: {
            weight: '100 غرام، 200 غرام، 500 غرام',
            packaging: 'تغليف فردي، عبوات صندوق',
            shelfLife: '18 شهرًا',
            ingredients: 'كاكاو، سكر، مواد صلبة من الحليب، زبدة كاكاو',
            certification: 'ISO 22000, HACCP, حلال'
          },
          inquireNow: 'استفسر الآن',
          whatsappOrder: 'اطلب عبر واتساب'
        },
        gummyCandies: {
          name: 'مجموعة الحلوى الصمغية',
          category: 'حلوى صمغية',
          description: 'حلوى صمغية لذيذة بأشكال ونكهات وألوان مختلفة. مصنوعة من عصائر الفواكه الحقيقية والنكهات الطبيعية.',
          specs: {
            weight: 'الوزن',
            packaging: 'التغليف',
            shelfLife: 'مدة الصلاحية',
            ingredients: 'المكونات',
            certification: 'الشهادات'
          },
          values: {
            weight: '50 غرام، 100 غرام، 200 غرام، 1 كجم بالجملة',
            packaging: 'أكياس واقفة، عبوات جرار',
            shelfLife: '12 شهرًا',
            ingredients: 'شراب الجلوكوز، سكر، جيلاتين، عصير فواكه',
            certification: 'ISO 22000, HACCP, حلال'
          },
          inquireNow: 'استفسر الآن',
          whatsappOrder: 'اطلب عبر واتساب'
        },
        biscuits: {
          name: 'البسكويت الحرفي',
          category: 'بسكويت',
          description: 'بسكويت مقرمش وزبدي مصنوع بوصفات تقليدية. مثالي لوقت الشاي أو كوجبة خفيفة.',
          specs: {
            weight: 'الوزن',
            packaging: 'التغليف',
            shelfLife: 'مدة الصلاحية',
            ingredients: 'المكونات',
            certification: 'الشهادات'
          },
          values: {
            weight: '100 غرام، 250 غرام، 500 غرام',
            packaging: 'علب معدنية، عبوات صندوق، تدفق',
            shelfLife: '12 شهرًا',
            ingredients: 'دقيق قمح، زبدة، سكر، بيض',
            certification: 'ISO 22000, HACCP'
          },
          inquireNow: 'استفسر الآن',
          whatsappOrder: 'اطلب عبر واتساب'
        },
        wafers: {
          name: 'رقائق مقرمشة',
          category: 'رقائق',
          description: 'رقائق خفيفة ومقرمشة مع حشوات كريمة لذيذة. متوفرة بنكهات الفانيليا والشوكولاتة والبندق والفراولة.',
          specs: {
            weight: 'الوزن',
            packaging: 'التغليف',
            shelfLife: 'مدة الصلاحية',
            ingredients: 'المكونات',
            certification: 'الشهادات'
          },
          values: {
            weight: '30 غرام، 100 غرام، 200 غرام',
            packaging: 'تغليف تدفق، عبوات صندوق',
            shelfLife: '9 أشهر',
            ingredients: 'دقيق قمح، زيت نباتي، سكر، حشوة كريمة',
            certification: 'ISO 22000, HACCP, حلال'
          },
          inquireNow: 'استفسر الآن',
          whatsappOrder: 'اطلب عبر واتساب'
        }
      }
    },
    
    brands: {
      title: 'علاماتنا التجارية',
      subtitle: 'كل علامة تجارية تروي قصة فريدة من الجودة والطعم',
      brandDetails: {
        shahd: {
          name: 'شهد',
          tagline: 'الحلاوة في كل لحظة',
          description: 'شهد هي علامتنا التجارية الرائدة التي تمثل حلويات عالية الجودة. معروفة بالطعم الاستثنائي والتغليف الأنيق.',
          story: 'اسم "شهد" يعني العسل بالعربية، رمز الحلاوة النقية والجودة الطبيعية. منذ إطلاقها، أصبحت شهد مرادفة للحلويات الفاخرة.',
          products: 'ألواح شوكولاتة ممتازة، صناديق هدايا، تشكيلات فاخرة'
        },
        asal: {
          name: 'عسل',
          tagline: 'طعم تقليدي، جودة حديثة',
          description: 'عسل يجلب الوصفات التقليدية للجماهير الحديثة. التزامنا بالنكهات الأصيلة.',
          story: '"عسل" تعني أيضًا العسل، مما يعكس تفانينا في الحلاوة الطبيعية. تركز هذه العلامة على حلويات تقليدية.',
          products: 'حلويات تقليدية، حلوى صمغية، عبوات عائلية'
        },
        golden: {
          name: 'غولدن تريت',
          tagline: 'متعة يومية',
          description: 'غولدن تريت تقدم رفاهية ميسورة التكلفة للاستمتاع اليومي. تستهدف المستهلكين المهتمين بالقيمة.',
          story: 'أطلقت لخدمة السوق الجماهيري، أصبحت غولدن تريت واحدة من أكثر العلامات التجارية المعروفة.',
          products: 'عبوات قيمة، أحجام وجبات خفيفة، خيارات جملة'
        }
      }
    },
    
    export: {
      title: 'التصدير العالمي',
      subtitle: 'اشترك معنا لجلب الحلويات الممتازة إلى سوقك',
      intro: 'نحن مصدر رائد لمنتجات الحلويات، نخدم العملاء في أكثر من 25 دولة عبر الشرق الأوسط وآسيا وأوروبا وأفريقيا.',
      benefits: {
        quality: 'معايير جودة دولية',
        qualityDesc: 'مرافق إنتاج معتمدة ISO 22000 وHACCP وحلال',
        capacity: 'طاقة إنتاجية كبيرة',
        capacityDesc: 'القدرة على تنفيذ الطلبات الكبيرة بجودة متسقة',
        logistics: 'لوجستيات فعالة',
        logisticsDesc: 'شحن مبسط ووثائق جمركية',
        support: 'دعم تصدير مخصص',
        supportDesc: 'فريق متعدد اللغات متاح للعملاء الدوليين'
      },
      process: {
        title: 'عملية التصدير',
        step1: 'الاستفسار الأولي',
        step1Desc: 'اتصل بفريق التصدير لدينا مع متطلباتك',
        step2: 'اختيار المنتج',
        step2Desc: 'اختر من كتالوجنا أو اطلب خيارات مخصصة',
        step3: 'عرض الأسعار',
        step3Desc: 'احصل على تسعير مفصل وتكاليف الشحن',
        step4: 'تأكيد الطلب',
        step4Desc: 'أكد الطلب وترتيب شروط الدفع',
        step5: 'الإنتاج ومراقبة الجودة',
        step5Desc: 'التصنيع مع مراقبة جودة صارمة',
        step6: 'الشحن والتسليم',
        step6Desc: 'تغليف آمن وتسليم في الوقت المحدد'
      },
      cta: 'ابدأ شراكتك في التصدير',
      contactExport: 'اتصل بفريق التصدير',
      downloadCatalog: 'تنزيل الكتالوج',
      whatsappInquiry: 'استفسار واتساب'
    },
    
    exhibitions: {
      title: 'المعارض والفعاليات',
      subtitle: 'قابلنا في المعارض التجارية الدولية ومعارض الطعام',
      events: {
        gulfood: {
          name: 'غلفود 2025',
          date: '17-21 فبراير 2025',
          location: 'مركز دبي التجاري العالمي، الإمارات',
          description: 'أكبر معرض سنوي للأغذية والمشروبات في العالم. زرنا في جناح S3-A12.',
          booth: 'جناح S3-A12',
          highlights: 'إطلاق منتجات جديدة، اجتماعات B2B، فعاليات تواصل'
        },
        anuga: {
          name: 'أنوغا 2025',
          date: '4-8 أكتوبر 2025',
          location: 'كولونيا، ألمانيا',
          description: 'معرض الطعام الرائد في أوروبا. اكتشف مجموعتنا الممتازة من الحلويات المصممة للسوق الأوروبية.',
          booth: 'قاعة 10.2، جناح C45',
          highlights: 'رؤى السوق الأوروبية، تذوق المنتجات، اجتماعات الموزعين'
        },
        fha: {
          name: 'FHA Food & Hotel Asia 2025',
          date: '8-11 أبريل 2025',
          location: 'سنغافورة إكسبو',
          description: 'أبرز حدث للطعام والضيافة في آسيا. قابل فريقنا لاستكشاف الفرص في السوق الآسيوية.',
          booth: 'قاعة 3، جناح E28',
          highlights: 'توسع السوق الآسيوية، عرض شهادة الحلال، عروض الطهاة'
        },
        sia: {
          name: 'سيال باريس 2025',
          date: '19-23 أكتوبر 2025',
          location: 'باريس، فرنسا',
          description: 'واحد من أكبر معارض ابتكار الأغذية في العالم. جرب أحدث ابتكاراتنا في الحلويات.',
          booth: 'قاعة 4، جناح D22',
          highlights: 'جوائز الابتكار، مبادرات الاستدامة، التواصل العالمي'
        }
      }
    },
    
    about: {
      title: 'عن شهد وعسل شكوه',
      subtitle: 'إرث من التميز في صناعة الحلويات',
      intro: 'تأسست شهد وعسل شكوه برؤية جلب حلويات عالية الجودة إلى العالم، ونمت لتصبح شركة تصنيع وتصدير رائدة.',
      story: 'قصتنا',
      storyContent: 'ما بدأ كعمل عائلي صغير تطور ليصبح شركة حلويات معترف بها دوليًا. بدأت رحلتنا بقناعة بسيطة: الجميع يستحق الوصول إلى حلويات عالية الجودة ولذيذة.',
      mission: 'مهمتنا',
      missionContent: 'إنتاج وتصدير منتجات حلويات ممتازة تتجاوز معايير الجودة الدولية، مع تعزيز شراكات طويلة الأجل مع الموزعين وتجار التجزئة في جميع أنحاء العالم.',
      vision: 'رؤيتنا',
      visionContent: 'أن نكون من بين أكبر 10 مصدري حلويات في المنطقة بحلول عام 2030، معروفين بالابتكار والجودة والاستدامة.',
      values: {
        quality: 'الجودة أولاً',
        qualityDesc: 'لا تساوم أبدًا على المكونات أو معايير الإنتاج',
        innovation: 'الابتكار المستمر',
        innovationDesc: 'تحسين الوصفات والعمليات باستمرار',
        integrity: 'نزاهة الأعمال',
        integrityDesc: 'شراكات شفافة ونزيهة',
        sustainability: 'الاستدامة',
        sustainabilityDesc: 'تصنيع مسؤول بيئيًا'
      },
      stats: {
        countries: 'دولة',
        products: 'منتج',
        employees: 'عضو فريق',
        years: 'سنة خبرة'
      },
      factory: 'مصنعنا',
      factoryDesc: 'يضم مصنعنا البالغ مساحته 15000 متر مربع خطوط إنتاج حديثة ومختبرات مراقبة جودة وتخزين مُتحكم بدرجة حرارته.',
      cta: 'هل تريد معرفة المزيد؟',
      ctaDesc: 'جدد زيارة المصنع أو تحدث مع فريقنا',
      contactUs: 'تواصل معنا'
    },
    
    contact: {
      title: 'اتصل بنا',
      subtitle: 'نسعد بالاستماع إليك',
      info: 'تواصل معنا',
      infoDesc: 'تواصل مع فريقنا للاستفسارات أو الشراكات أو أي أسئلة',
      address: 'العنوان',
      addressValue: 'المنطقة الصناعية 5، طهران، إيران',
      phone: 'الهاتف',
      phoneValue: '+98 21 1234 5678',
      email: 'البريد الإلكتروني',
      emailValue: 'info@shahdasal.com',
      whatsapp: 'واتساب',
      whatsappValue: '+98 912 345 6789',
      form: {
        title: 'أرسل لنا رسالة',
        name: 'اسمك',
        namePlaceholder: 'جون دو',
        email: 'عنوان البريد الإلكتروني',
        emailPlaceholder: 'john@example.com',
        subject: 'الموضوع',
        subjectPlaceholder: 'استفسار تصدير',
        message: 'الرسالة',
        messagePlaceholder: 'أخبرنا عن متطلباتك...',
        send: 'إرسال الرسالة',
        sending: 'جاري الإرسال...'
      },
      map: 'موقعنا'
    },
    
    footer: {
      quickLinks: 'روابط سريعة',
      followUs: 'تابعنا',
      copyright: '© 2025 شهد وعسل شكوه. جميع الحقوق محفوظة.',
      privacyPolicy: 'سياسة الخصوصية',
      termsOfService: 'شروط الخدمة'
    },
    
    common: {
      learnMore: 'اعرف المزيد',
      viewDetails: 'عرض التفاصيل',
      back: 'رجوع',
      close: 'إغلاق',
      loading: 'جاري التحميل...',
      error: 'حدث خطأ',
      success: 'نجاح!'
    }
  }
};

// ========================================
// Products Database
// ========================================

const products = [
  {
    id: 'chocolate-bars',
    emoji: '🍫',
    gradient: 'linear-gradient(135deg, #5D4037, #8D6E63)',
    categories: ['all', 'chocolate']
  },
  {
    id: 'gummy-candies',
    emoji: '🍬',
    gradient: 'linear-gradient(135deg, #FF6B6B, #FFD93D)',
    categories: ['all', 'gummy']
  },
  {
    id: 'biscuits',
    emoji: '🍪',
    gradient: 'linear-gradient(135deg, #D4A574, #F5DEB3)',
    categories: ['all', 'biscuit']
  },
  {
    id: 'wafers',
    emoji: '🧇',
    gradient: 'linear-gradient(135deg, #A0522D, #CD853F)',
    categories: ['all', 'wafer']
  }
];

// ========================================
// Brands Database
// ========================================

const brands = [
  {
    id: 'shahd',
    emoji: '👑',
    gradient: 'linear-gradient(135deg, #E31C24, #F2D15B)'
  },
  {
    id: 'asal',
    emoji: '🍯',
    gradient: 'linear-gradient(135deg, #F2D15B, #FFA500)'
  },
  {
    id: 'golden',
    emoji: '✨',
    gradient: 'linear-gradient(135deg, #FFD700, #FFA500)'
  }
];

// ========================================
// State Management
// ========================================

let currentLang = 'en';
let currentPage = 'home';
let currentProduct = null;
let currentBrand = null;

// ========================================
// Utility Functions
// ========================================

function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return document.querySelectorAll(selector);
}

function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

function t(key) {
  const keys = key.split('.');
  let value = content[currentLang];
  for (const k of keys) {
    value = value?.[k];
  }
  return value || key;
}

function setRTL(isRTL) {
  if (isRTL) {
    document.body.classList.add('rtl');
    document.documentElement.lang = currentLang === 'fa' ? 'fa' : 'ar';
    document.documentElement.dir = 'rtl';
  } else {
    document.body.classList.remove('rtl');
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
  }
}

// ========================================
// Router
// ========================================

function parseRoute() {
  const hash = window.location.hash.slice(1) || '/';
  const parts = hash.split('/').filter(Boolean);
  
  const route = {
    page: parts[0] || 'home',
    params: parts.slice(1)
  };
  
  return route;
}

function navigate(page, params = []) {
  const hash = [page, ...params].filter(Boolean).join('/');
  window.location.hash = hash;
}

function handleRoute() {
  const route = parseRoute();
  currentPage = route.page;
  
  // Update active nav link
  $$('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.dataset.page === route.page) {
      link.classList.add('active');
    }
  });
  
  // Hide all pages
  $$('.page-content').forEach(page => {
    page.classList.add('hidden');
  });
  
  // Show current page
  const targetPage = $(`#${route.page}-page`);
  if (targetPage) {
    targetPage.classList.remove('hidden');
    
    // Handle dynamic routes
    if (route.page === 'products' && route.params.length > 0) {
      currentProduct = route.params[0];
      renderProductDetail(currentProduct);
    } else if (route.page === 'brands' && route.params.length > 0) {
      currentBrand = route.params[0];
      renderBrandDetail(currentBrand);
    } else if (route.page === 'products') {
      renderProductsPage();
    } else if (route.page === 'brands') {
      renderBrandsPage();
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
  } else {
    // Default to home
    navigate('home');
  }
}

// ========================================
// Language Switcher
// ========================================

function switchLanguage(lang) {
  currentLang = lang;
  
  // Set RTL
  setRTL(lang === 'fa' || lang === 'ar');
  
  // Update language buttons
  $$('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  
  // Update URL with language prefix (optional)
  // For now, we keep it simple without changing URLs
  
  // Re-render current page
  handleRoute();
  
  // Save preference
  localStorage.setItem('preferredLang', lang);
}

// ========================================
// Render Functions
// ========================================

function renderHeader() {
  const header = $('header.header');
  if (!header) return;
  
  header.innerHTML = `
    <div class="header-top">
      <div class="container">
        <span>📧 info@shahdasal.com</span>
        <span>📞 +98 21 1234 5678</span>
      </div>
    </div>
    <div class="header-main">
      <div class="container">
        <a href="#/" class="logo" onclick="navigate('home')">
          <div class="logo-img">S&A</div>
          <span class="logo-text">Shahd & Asal Shokouh</span>
        </a>
        <ul class="nav-links" id="navLinks">
          <li><a class="nav-link" data-page="home" onclick="navigate('home')">${t('nav.home')}</a></li>
          <li><a class="nav-link" data-page="products" onclick="navigate('products')">${t('nav.products')}</a></li>
          <li><a class="nav-link" data-page="brands" onclick="navigate('brands')">${t('nav.brands')}</a></li>
          <li><a class="nav-link" data-page="export" onclick="navigate('export')">${t('nav.export')}</a></li>
          <li><a class="nav-link" data-page="exhibitions" onclick="navigate('exhibitions')">${t('nav.exhibitions')}</a></li>
          <li><a class="nav-link" data-page="about" onclick="navigate('about')">${t('nav.about')}</a></li>
          <li><a class="nav-link" data-page="contact" onclick="navigate('contact')">${t('nav.contact')}</a></li>
        </ul>
        <div class="header-actions">
          <div class="lang-switcher">
            <button class="lang-btn ${currentLang === 'en' ? 'active' : ''}" data-lang="en" onclick="switchLanguage('en')">EN</button>
            <button class="lang-btn ${currentLang === 'fa' ? 'active' : ''}" data-lang="fa" onclick="switchLanguage('fa')">FA</button>
            <button class="lang-btn ${currentLang === 'ar' ? 'active' : ''}" data-lang="ar" onclick="switchLanguage('ar')">AR</button>
          </div>
          <button class="mobile-menu-btn" onclick="toggleMobileMenu()">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderFooter() {
  const footer = $('footer.footer');
  if (!footer) return;
  
  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <div class="logo-img">S&A</div>
            <span class="logo-text">Shahd & Asal Shokouh</span>
          </div>
          <p>${t('home.footerDesc')}</p>
        </div>
        <div>
          <h4 class="footer-title">${t('footer.quickLinks')}</h4>
          <ul class="footer-links">
            <li><a onclick="navigate('home')">${t('nav.home')}</a></li>
            <li><a onclick="navigate('products')">${t('nav.products')}</a></li>
            <li><a onclick="navigate('brands')">${t('nav.brands')}</a></li>
            <li><a onclick="navigate('export')">${t('nav.export')}</a></li>
          </ul>
        </div>
        <div>
          <h4 class="footer-title">${t('nav.company', 'Company')}</h4>
          <ul class="footer-links">
            <li><a onclick="navigate('about')">${t('nav.about')}</a></li>
            <li><a onclick="navigate('exhibitions')">${t('nav.exhibitions')}</a></li>
            <li><a onclick="navigate('contact')">${t('nav.contact')}</a></li>
          </ul>
        </div>
        <div>
          <h4 class="footer-title">${t('footer.followUs')}</h4>
          <div class="social-links">
            <a href="#" class="social-link">📘</a>
            <a href="#" class="social-link">📷</a>
            <a href="#" class="social-link">💼</a>
            <a href="#" class="social-link">🐦</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>${t('footer.copyright')}</p>
        <div class="social-links">
          <a onclick="navigate('contact')">${t('footer.privacyPolicy', 'Privacy Policy')}</a>
          <a onclick="navigate('contact')">${t('footer.termsOfService', 'Terms of Service')}</a>
        </div>
      </div>
    </div>
  `;
}

function renderHomePage() {
  const page = $('#home-page');
  if (!page) return;
  
  page.innerHTML = `
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">${t('home.heroTitle')}</h1>
          <p class="hero-subtitle">${t('home.heroSubtitle')}</p>
          <div class="hero-buttons">
            <button class="btn btn-primary btn-large" onclick="navigate('products')">${t('home.viewProducts')}</button>
            <button class="btn btn-outline btn-large" onclick="navigate('brands')">${t('home.exploreBrands')}</button>
          </div>
        </div>
        <div class="hero-image">
          <div class="hero-image-placeholder"></div>
        </div>
      </div>
    </section>
    
    <section class="section section-bg-light">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">${t('home.featuredProducts')}</h2>
          <p class="section-subtitle">${t('home.featuredProductsDesc')}</p>
        </div>
        <div class="products-grid">
          ${products.slice(0, 3).map(product => `
            <div class="product-card" onclick="navigate('products', '${product.id}')">
              <div class="product-image" style="background: ${product.gradient}">${product.emoji}</div>
              <div class="product-info">
                <div class="product-category">${t(`products.productDetails.${product.id}.category`)}</div>
                <h3 class="product-name">${t(`products.productDetails.${product.id}.name`)}</h3>
                <p class="product-description">${t(`products.productDetails.${product.id}.description`).substring(0, 100)}...</p>
                <span class="product-link">${t('common.viewDetails')}</span>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="text-center mt-lg">
          <button class="btn btn-primary" onclick="navigate('products')">${t('home.viewProducts')}</button>
        </div>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">${t('home.ourBrands')}</h2>
          <p class="section-subtitle">${t('home.ourBrandsDesc')}</p>
        </div>
        <div class="brands-grid">
          ${brands.map(brand => `
            <div class="brand-card" onclick="navigate('brands', '${brand.id}')">
              <div class="brand-logo" style="background: ${brand.gradient}">${brand.emoji}</div>
              <h3 class="brand-name">${t(`brands.brandDetails.${brand.id}.name`)}</h3>
              <p class="brand-description">${t(`brands.brandDetails.${brand.id}.tagline`)}</p>
            </div>
          `).join('')}
        </div>
        <div class="text-center mt-lg">
          <button class="btn btn-secondary" onclick="navigate('brands')">${t('home.exploreBrands')}</button>
        </div>
      </div>
    </section>
    
    <section class="section section-bg-light">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">${t('home.whyChooseUs')}</h2>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">⭐</div>
            <h4 class="feature-title">${t('home.qualityTitle')}</h4>
            <p class="feature-description">${t('home.qualityDesc')}</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🌍</div>
            <h4 class="feature-title">${t('home.exportTitle')}</h4>
            <p class="feature-description">${t('home.exportDesc')}</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💡</div>
            <h4 class="feature-title">${t('home.innovationTitle')}</h4>
            <p class="feature-description">${t('home.innovationDesc')}</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🤝</div>
            <h4 class="feature-title">${t('home.supportTitle')}</h4>
            <p class="feature-description">${t('home.supportDesc')}</p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section" style="background: linear-gradient(135deg, var(--text-dark), #333); color: white;">
      <div class="container text-center">
        <h2 class="section-title" style="color: white;">${t('home.ctaTitle')}</h2>
        <p class="section-subtitle" style="color: rgba(255,255,255,0.8); margin-bottom: var(--spacing-lg);">${t('home.ctaDesc')}</p>
        <button class="btn btn-primary btn-large" onclick="navigate('contact')">${t('home.contactUs')}</button>
      </div>
    </section>
  `;
}

function renderProductsPage() {
  const page = $('#products-page');
  if (!page) return;
  
  page.innerHTML = `
    <div class="page">
      <div class="export-hero">
        <div class="container">
          <h1>${t('products.title')}</h1>
          <p style="max-width: 700px; margin: 0 auto;">${t('products.subtitle')}</p>
        </div>
      </div>
      
      <section class="section">
        <div class="container">
          <div class="products-grid">
            ${products.map(product => `
              <div class="product-card" onclick="navigate('products', '${product.id}')">
                <div class="product-image" style="background: ${product.gradient}">${product.emoji}</div>
                <div class="product-info">
                  <div class="product-category">${t(`products.productDetails.${product.id}.category`)}</div>
                  <h3 class="product-name">${t(`products.productDetails.${product.id}.name`)}</h3>
                  <p class="product-description">${t(`products.productDetails.${product.id}.description`).substring(0, 100)}...</p>
                  <span class="product-link">${t('common.viewDetails')}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderProductDetail(productId) {
  const page = $('#products-page');
  if (!page) return;
  
  const product = products.find(p => p.id === productId);
  if (!product) {
    navigate('products');
    return;
  }
  
  page.innerHTML = `
    <div class="page product-detail">
      <div class="container">
        <button class="btn btn-outline mb-md" onclick="navigate('products')">← ${t('common.back')}</button>
        
        <div class="product-detail-grid">
          <div class="product-gallery">
            <div class="product-main-image" style="background: ${product.gradient}">${product.emoji}</div>
            <div class="product-thumbnails">
              <div class="thumbnail active">${product.emoji}</div>
              <div class="thumbnail">📦</div>
              <div class="thumbnail">🏭</div>
            </div>
          </div>
          
          <div class="product-detail-info">
            <div class="product-detail-category">${t(`products.productDetails.${productId}.category`)}</div>
            <h1>${t(`products.productDetails.${productId}.name`)}</h1>
            <p class="product-detail-description">${t(`products.productDetails.${productId}.description`)}</p>
            
            <div class="product-specs">
              <div class="spec-item">
                <span class="spec-label">${t(`products.productDetails.${productId}.specs.weight`)}</span>
                <span class="spec-value">${t(`products.productDetails.${productId}.values.weight`)}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">${t(`products.productDetails.${productId}.specs.packaging`)}</span>
                <span class="spec-value">${t(`products.productDetails.${productId}.values.packaging`)}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">${t(`products.productDetails.${productId}.specs.shelfLife`)}</span>
                <span class="spec-value">${t(`products.productDetails.${productId}.values.shelfLife`)}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">${t(`products.productDetails.${productId}.specs.ingredients`)}</span>
                <span class="spec-value">${t(`products.productDetails.${productId}.values.ingredients`)}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">${t(`products.productDetails.${productId}.specs.certification`)}</span>
                <span class="spec-value">${t(`products.productDetails.${productId}.values.certification`)}</span>
              </div>
            </div>
            
            <div class="product-actions">
              <button class="btn btn-primary btn-large" onclick="navigate('export')">${t(`products.productDetails.${productId}.inquireNow`)}</button>
              <a href="https://wa.me/989123456789" target="_blank" class="btn btn-whatsapp btn-large">💬 ${t(`products.productDetails.${productId}.whatsappOrder`)}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderBrandsPage() {
  const page = $('#brands-page');
  if (!page) return;
  
  page.innerHTML = `
    <div class="page">
      <div class="export-hero">
        <div class="container">
          <h1>${t('brands.title')}</h1>
          <p style="max-width: 700px; margin: 0 auto;">${t('brands.subtitle')}</p>
        </div>
      </div>
      
      <section class="section">
        <div class="container">
          <div class="brands-grid">
            ${brands.map(brand => `
              <div class="brand-card" onclick="navigate('brands', '${brand.id}')">
                <div class="brand-logo" style="background: ${brand.gradient}">${brand.emoji}</div>
                <h3 class="brand-name">${t(`brands.brandDetails.${brand.id}.name`)}</h3>
                <p class="brand-description">${t(`brands.brandDetails.${brand.id}.tagline`)}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderBrandDetail(brandId) {
  const page = $('#brands-page');
  if (!page) return;
  
  const brand = brands.find(b => b.id === brandId);
  if (!brand) {
    navigate('brands');
    return;
  }
  
  page.innerHTML = `
    <div class="page brand-detail">
      <div class="container">
        <button class="btn btn-outline mb-md" onclick="navigate('brands')">← ${t('common.back')}</button>
        
        <div class="brand-header" style="background: ${brand.gradient}">
          <h1>${t(`brands.brandDetails.${brandId}.name`)}</h1>
          <p>${t(`brands.brandDetails.${brandId}.tagline`)}</p>
        </div>
        
        <div class="brand-story">
          <h2>${t('about.story')}</h2>
          <p>${t(`brands.brandDetails.${brandId}.description`)}</p>
          <p class="mt-md">${t(`brands.brandDetails.${brandId}.story`)}</p>
          <div class="mt-md">
            <strong>${t('nav.products')}:</strong> ${t(`brands.brandDetails.${brandId}.products`)}
          </div>
        </div>
        
        <h2 class="brand-products-title">${t('nav.products')}</h2>
        <div class="products-grid">
          ${products.slice(0, 2).map(product => `
            <div class="product-card" onclick="navigate('products', '${product.id}')">
              <div class="product-image" style="background: ${product.gradient}">${product.emoji}</div>
              <div class="product-info">
                <h3 class="product-name">${t(`products.productDetails.${product.id}.name`)}</h3>
                <span class="product-link">${t('common.viewDetails')}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderExportPage() {
  const page = $('#export-page');
  if (!page) return;
  
  page.innerHTML = `
    <div class="page">
      <div class="export-hero">
        <div class="container export-content">
          <h1>${t('export.title')}</h1>
          <p style="margin: var(--spacing-md) auto; max-width: 800px;">${t('export.subtitle')}</p>
          <p>${t('export.intro')}</p>
          <div class="hero-buttons mt-lg" style="justify-content: center;">
            <button class="btn btn-primary btn-large" onclick="navigate('contact')">${t('export.contactExport')}</button>
            <a href="#" class="btn btn-secondary btn-large">📥 ${t('export.downloadCatalog')}</a>
            <a href="https://wa.me/989123456789" target="_blank" class="btn btn-whatsapp btn-large">💬 ${t('export.whatsappInquiry')}</a>
          </div>
        </div>
      </div>
      
      <section class="section">
        <div class="container">
          <h2 class="section-title text-center">Why Partner With Us?</h2>
          <div class="export-benefits">
            <div class="benefit-card">
              <div class="benefit-icon">🏆</div>
              <h4>${t('export.benefits.quality')}</h4>
              <p>${t('export.benefits.qualityDesc')}</p>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">🏭</div>
              <h4>${t('export.benefits.capacity')}</h4>
              <p>${t('export.benefits.capacityDesc')}</p>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">🚢</div>
              <h4>${t('export.benefits.logistics')}</h4>
              <p>${t('export.benefits.logisticsDesc')}</p>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">🎧</div>
              <h4>${t('export.benefits.support')}</h4>
              <p>${t('export.benefits.supportDesc')}</p>
            </div>
          </div>
        </div>
      </section>
      
      <section class="section section-bg-light">
        <div class="container">
          <h2 class="section-title text-center">${t('export.process.title')}</h2>
          <div class="export-process mt-lg">
            <div class="process-step">
              <div class="process-content">
                <h4>${t('export.process.step1')}</h4>
                <p>${t('export.process.step1Desc')}</p>
              </div>
            </div>
            <div class="process-step">
              <div class="process-content">
                <h4>${t('export.process.step2')}</h4>
                <p>${t('export.process.step2Desc')}</p>
              </div>
            </div>
            <div class="process-step">
              <div class="process-content">
                <h4>${t('export.process.step3')}</h4>
                <p>${t('export.process.step3Desc')}</p>
              </div>
            </div>
            <div class="process-step">
              <div class="process-content">
                <h4>${t('export.process.step4')}</h4>
                <p>${t('export.process.step4Desc')}</p>
              </div>
            </div>
            <div class="process-step">
              <div class="process-content">
                <h4>${t('export.process.step5')}</h4>
                <p>${t('export.process.step5Desc')}</p>
              </div>
            </div>
            <div class="process-step">
              <div class="process-content">
                <h4>${t('export.process.step6')}</h4>
                <p>${t('export.process.step6Desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section class="section" style="background: linear-gradient(135deg, var(--primary-red), var(--secondary-gold)); color: white;">
        <div class="container text-center">
          <h2 class="section-title" style="color: white;">${t('export.cta')}</h2>
          <button class="btn btn-white btn-large mt-md" style="background: white; color: var(--primary-red);" onclick="navigate('contact')">${t('export.contactExport')}</button>
        </div>
      </section>
    </div>
  `;
}

function renderExhibitionsPage() {
  const page = $('#exhibitions-page');
  if (!page) return;
  
  page.innerHTML = `
    <div class="page exhibitions-page">
      <div class="export-hero">
        <div class="container">
          <h1>${t('exhibitions.title')}</h1>
          <p style="max-width: 700px; margin: 0 auto;">${t('exhibitions.subtitle')}</p>
        </div>
      </div>
      
      <section class="section">
        <div class="container">
          <div class="exhibitions-grid">
            ${Object.entries(t('exhibitions.events')).map(([key, event]) => `
              <div class="exhibition-card" onclick="showExhibitionModal('${key}')">
                <div class="exhibition-image">🎪</div>
                <div class="exhibition-info">
                  <div class="exhibition-date">${event.date}</div>
                  <h3 class="exhibition-name">${event.name}</h3>
                  <p class="exhibition-location">📍 ${event.location}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    </div>
    
    <div class="exhibition-detail-modal" id="exhibitionModal">
      <div class="modal-content">
        <button class="modal-close" onclick="closeExhibitionModal()">×</button>
        <div id="exhibitionModalContent"></div>
      </div>
    </div>
  `;
}

function showExhibitionModal(eventKey) {
  const modal = $('#exhibitionModal');
  const content = $('#exhibitionModalContent');
  const event = t(`exhibitions.events.${eventKey}`);
  
  content.innerHTML = `
    <h2 style="margin-bottom: var(--spacing-md);">${event.name}</h2>
    <p style="color: var(--primary-red); font-weight: 600; margin-bottom: var(--spacing-sm);">${event.date}</p>
    <p style="margin-bottom: var(--spacing-md);">📍 ${event.location}</p>
    <p style="margin-bottom: var(--spacing-md);"><strong>${event.booth}</strong></p>
    <p style="line-height: 1.8;">${event.description}</p>
    <div class="mt-lg">
      <h4 style="margin-bottom: var(--spacing-sm);">Highlights:</h4>
      <p>${event.highlights}</p>
    </div>
    <div class="mt-lg">
      <button class="btn btn-primary" onclick="navigate('contact')">${t('contactUs', 'Contact Us')}</button>
    </div>
  `;
  
  modal.classList.add('active');
}

function closeExhibitionModal() {
  const modal = $('#exhibitionModal');
  modal.classList.remove('active');
}

function renderAboutPage() {
  const page = $('#about-page');
  if (!page) return;
  
  page.innerHTML = `
    <div class="page about-page">
      <div class="container">
        <div class="about-page-header">
          <h1>${t('about.title')}</h1>
          <p>${t('about.subtitle')}</p>
        </div>
        
        <div class="about-grid">
          <div class="about-content">
            <h3>${t('about.story')}</h3>
            <p>${t('about.intro')}</p>
            <p class="mt-md">${t('about.storyContent')}</p>
          </div>
          <div class="about-image">
            <div class="about-image-placeholder">🏭</div>
          </div>
        </div>
        
        <div class="section">
          <div class="about-grid">
            <div class="about-image">
              <div class="about-image-placeholder">🎯</div>
            </div>
            <div class="about-content">
              <h3>${t('about.mission')}</h3>
              <p>${t('about.missionContent')}</p>
              <h3 class="mt-lg">${t('about.vision')}</h3>
              <p>${t('about.visionContent')}</p>
            </div>
          </div>
        </div>
        
        <div class="section section-bg-light">
          <h2 class="section-title text-center">${t('about.factory')}</h2>
          <p class="text-center" style="max-width: 800px; margin: 0 auto var(--spacing-lg);">${t('about.factoryDesc')}</p>
          <div class="factory-section">
            <div class="factory-image">🏗️</div>
            <div>
              <h4>State-of-the-Art Facilities</h4>
              <p>15,000 sqm production facility</p>
              <p>Advanced quality control labs</p>
              <p>Temperature-controlled storage</p>
              <p>Automated production lines</p>
            </div>
          </div>
        </div>
        
        <div class="section">
          <h2 class="section-title text-center">${t('about.values.quality')}</h2>
          <div class="values-grid">
            <div class="value-card">
              <div class="value-icon">⭐</div>
              <h4>${t('about.values.quality')}</h4>
              <p>${t('about.values.qualityDesc')}</p>
            </div>
            <div class="value-card">
              <div class="value-icon">💡</div>
              <h4>${t('about.values.innovation')}</h4>
              <p>${t('about.values.innovationDesc')}</p>
            </div>
            <div class="value-card">
              <div class="value-icon">🤝</div>
              <h4>${t('about.values.integrity')}</h4>
              <p>${t('about.values.integrityDesc')}</p>
            </div>
            <div class="value-card">
              <div class="value-icon">🌱</div>
              <h4>${t('about.values.sustainability')}</h4>
              <p>${t('about.values.sustainabilityDesc')}</p>
            </div>
          </div>
        </div>
        
        <div class="section section-bg-light">
          <div class="about-stats">
            <div class="stat-item">
              <div class="stat-number">25+</div>
              <div class="stat-label">${t('about.stats.countries')}</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">50+</div>
              <div class="stat-label">${t('about.stats.products')}</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">200+</div>
              <div class="stat-label">${t('about.stats.employees')}</div>
            </div>
          </div>
        </div>
        
        <div class="section" style="background: linear-gradient(135deg, var(--primary-red), var(--secondary-gold)); color: white; border-radius: var(--radius-xl);">
          <div class="container text-center" style="padding: var(--spacing-xl);">
            <h2 class="section-title" style="color: white;">${t('about.cta')}</h2>
            <p style="color: rgba(255,255,255,0.9); margin-bottom: var(--spacing-lg);">${t('about.ctaDesc')}</p>
            <button class="btn btn-white btn-large" style="background: white; color: var(--primary-red);" onclick="navigate('contact')">${t('about.contactUs')}</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderContactPage() {
  const page = $('#contact-page');
  if (!page) return;
  
  page.innerHTML = `
    <div class="page contact-page">
      <div class="export-hero">
        <div class="container">
          <h1>${t('contact.title')}</h1>
          <p style="max-width: 700px; margin: 0 auto;">${t('contact.subtitle')}</p>
        </div>
      </div>
      
      <section class="section">
        <div class="container">
          <div class="contact-grid">
            <div class="contact-info">
              <h3>${t('contact.info')}</h3>
              <p>${t('contact.infoDesc')}</p>
              
              <div class="contact-details">
                <div class="contact-item">
                  <div class="contact-icon">📍</div>
                  <div>
                    <strong>${t('contact.address')}</strong>
                    <p>${t('contact.addressValue')}</p>
                  </div>
                </div>
                <div class="contact-item">
                  <div class="contact-icon">📞</div>
                  <div>
                    <strong>${t('contact.phone')}</strong>
                    <p>${t('contact.phoneValue')}</p>
                  </div>
                </div>
                <div class="contact-item">
                  <div class="contact-icon">📧</div>
                  <div>
                    <strong>${t('contact.email')}</strong>
                    <p>${t('contact.emailValue')}</p>
                  </div>
                </div>
                <div class="contact-item">
                  <div class="contact-icon">💬</div>
                  <div>
                    <strong>${t('contact.whatsapp')}</strong>
                    <p>${t('contact.whatsappValue')}</p>
                  </div>
                </div>
              </div>
              
              <a href="https://wa.me/989123456789" target="_blank" class="btn btn-whatsapp btn-large mt-lg">💬 ${t('contact.whatsapp')}</a>
            </div>
            
            <div class="contact-form">
              <h3>${t('contact.form.title')}</h3>
              <form onsubmit="handleContactSubmit(event)">
                <div class="form-group">
                  <label class="form-label">${t('contact.form.name')}</label>
                  <input type="text" class="form-input" placeholder="${t('contact.form.namePlaceholder')}" required>
                </div>
                <div class="form-group">
                  <label class="form-label">${t('contact.form.email')}</label>
                  <input type="email" class="form-input" placeholder="${t('contact.form.emailPlaceholder')}" required>
                </div>
                <div class="form-group">
                  <label class="form-label">${t('contact.form.subject')}</label>
                  <input type="text" class="form-input" placeholder="${t('contact.form.subjectPlaceholder')}">
                </div>
                <div class="form-group">
                  <label class="form-label">${t('contact.form.message')}</label>
                  <textarea class="form-textarea" placeholder="${t('contact.form.messagePlaceholder')}" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-large" style="width: 100%;">${t('contact.form.send')}</button>
              </form>
            </div>
          </div>
          
          <div class="map-section">
            🗺️ ${t('contact.map')}
          </div>
        </div>
      </section>
    </div>
  `;
}

function handleContactSubmit(e) {
  e.preventDefault();
  alert(t('common.success') + ' ' + 'Thank you for your message! We will get back to you soon.');
  e.target.reset();
}

function toggleMobileMenu() {
  const navLinks = $('#navLinks');
  navLinks.classList.toggle('active');
}

// ========================================
// Initialize Application
// ========================================

function init() {
  // Load saved language preference
  const savedLang = localStorage.getItem('preferredLang') || 'en';
  currentLang = savedLang;
  setRTL(savedLang === 'fa' || savedLang === 'ar');
  
  // Render static components
  renderHeader();
  renderFooter();
  
  // Handle initial route
  handleRoute();
  
  // Listen for hash changes
  window.addEventListener('hashchange', handleRoute);
  
  // Header scroll effect
  window.addEventListener('scroll', () => {
    const header = $('header.header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Close mobile menu on resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
      $('#navLinks').classList.remove('active');
    }
  });
  
  // Close modal on outside click
  document.addEventListener('click', (e) => {
    const modal = $('#exhibitionModal');
    if (modal && e.target === modal) {
      closeExhibitionModal();
    }
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeExhibitionModal();
    }
  });
}

// Start application when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
