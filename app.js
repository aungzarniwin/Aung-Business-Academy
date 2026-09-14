/* =========================================================
   AUNG BUSINESS ACADEMY V8.0 PROFESSIONAL
   FULL APP.JS
   230 DETAILED BURMESE LESSONS
   ========================================================= */

(() => {
  "use strict";

  /* =========================================================
     CONFIG
  ========================================================= */

  const STORAGE_KEY = "aba_completed_lessons";
  const LAST_LESSON_KEY = "aba_last_lesson";
  const DAILY_GOAL_KEY = "aba_daily_goal";

  const APP = {
    name: "Aung Business Academy",
    version: "V8.0 Professional",
    totalLessons: 230
  };

  /* =========================================================
     CATEGORY DATA - 230 LESSONS
  ========================================================= */

  const courseData = [
    {
      id: "business-fundamentals",
      icon: "🏢",
      title: "Business Fundamentals",
      lessons: [
        "Business ဆိုတာဘာလဲ",
        "Business Owner ရဲ့အမြင်",
        "Customer Value ဆိုတာဘာလဲ",
        "Value Proposition တည်ဆောက်ခြင်း",
        "Business Model အခြေခံ",
        "Revenue Model နားလည်ခြင်း",
        "Customer Segment ခွဲခြားခြင်း",
        "Market နားလည်ခြင်း",
        "Business Goal သတ်မှတ်ခြင်း",
        "Business Process အခြေခံ",
        "Business Risk နားလည်ခြင်း",
        "Business Growth အခြေခံ",
        "Sustainable Business တည်ဆောက်ခြင်း",
        "Business Culture",
        "Business Manager Mindset"
      ]
    },

    {
      id: "business-strategy",
      icon: "🎯",
      title: "Business Strategy",
      lessons: [
        "Strategic Thinking အခြေခံ",
        "Vision နှင့် Mission",
        "Business Strategy တည်ဆောက်ခြင်း",
        "SWOT Analysis",
        "Market Analysis",
        "Competitor Analysis",
        "Competitive Advantage",
        "Market Positioning",
        "Growth Strategy",
        "Market Expansion",
        "Product Expansion",
        "Strategic Priorities",
        "Annual Business Planning",
        "Execution Strategy",
        "Strategy Review"
      ]
    },

    {
      id: "sales-management",
      icon: "💼",
      title: "Sales Management",
      lessons: [
        "Sales Management အခြေခံ",
        "Sales Manager ရဲ့တာဝန်",
        "Sales Target သတ်မှတ်ခြင်း",
        "Target Breakdown",
        "Monthly Sales Planning",
        "Daily Sales Execution",
        "Territory Management",
        "Sales Team Structure",
        "Sales Route Planning",
        "Sales Forecasting",
        "Sales Pipeline Management",
        "Distributor Management",
        "Sales Meeting Management",
        "Field Coaching",
        "Performance Review",
        "Sales Incentive",
        "Sales Productivity",
        "Sales Control",
        "Sales Recovery Plan",
        "Sales Manager Action Plan"
      ]
    },

    {
      id: "sales-skills",
      icon: "🤝",
      title: "Sales Skills",
      lessons: [
        "Selling အခြေခံ",
        "Prospecting",
        "Lead Generation",
        "Customer Approach",
        "Opening Conversation",
        "Needs Analysis",
        "Questioning Skills",
        "Active Listening",
        "Consultative Selling",
        "Product Presentation",
        "Benefit Selling",
        "Solution Selling",
        "Objection Handling",
        "Price Objection",
        "Competitor Objection",
        "Negotiation in Sales",
        "Closing Techniques",
        "Follow-up",
        "Repeat Sales",
        "Professional Selling Mindset"
      ]
    },

    {
      id: "customer-management",
      icon: "👥",
      title: "Customer Management",
      lessons: [
        "Customer Management အခြေခံ",
        "Customer Relationship",
        "Customer Needs",
        "Customer Expectation",
        "Customer Segmentation",
        "Customer Value",
        "Customer Retention",
        "Customer Loyalty",
        "Customer Visit Planning",
        "Customer Communication",
        "Customer Complaint Management",
        "Service Recovery",
        "Customer Feedback",
        "Customer Lifetime Value",
        "Customer Growth Plan"
      ]
    },

    {
      id: "marketing",
      icon: "📣",
      title: "Marketing",
      lessons: [
        "Marketing အခြေခံ",
        "Marketing Strategy",
        "Consumer Understanding",
        "Market Segmentation",
        "Target Market",
        "STP Strategy",
        "Marketing Mix 4P",
        "Product Strategy",
        "Price Strategy",
        "Place Strategy",
        "Promotion Strategy",
        "Consumer Promotion",
        "Trade Promotion",
        "Digital Marketing",
        "Social Media Marketing",
        "Content Marketing",
        "Marketing Campaign",
        "Campaign Measurement",
        "Competitor Marketing",
        "Marketing Plan"
      ]
    },

    {
      id: "branding",
      icon: "🏷️",
      title: "Branding",
      lessons: [
        "Brand ဆိုတာဘာလဲ",
        "Brand Identity",
        "Brand Positioning",
        "Brand Promise",
        "Brand Personality",
        "Brand Awareness",
        "Brand Equity",
        "Brand Loyalty",
        "Brand Communication",
        "Brand Growth Strategy"
      ]
    },

    {
      id: "finance",
      icon: "💰",
      title: "Finance",
      lessons: [
        "Finance အခြေခံ",
        "Revenue နားလည်ခြင်း",
        "Cost နားလည်ခြင်း",
        "Fixed Cost နှင့် Variable Cost",
        "Profit နားလည်ခြင်း",
        "Gross Profit",
        "Net Profit",
        "Profit Margin",
        "Cash Flow",
        "Working Capital",
        "Budgeting",
        "Financial Planning",
        "Pricing နှင့် Profit",
        "Cost Control",
        "Financial Mindset for Managers"
      ]
    },

    {
      id: "accounting",
      icon: "📊",
      title: "Accounting & P&L",
      lessons: [
        "Accounting အခြေခံ",
        "P&L Statement",
        "Balance Sheet အခြေခံ",
        "Revenue Recognition",
        "Cost Recording",
        "Gross Margin Analysis",
        "Accounts Receivable",
        "Credit Control",
        "Inventory Accounting",
        "Financial Report ဖတ်နည်း"
      ]
    },

    {
      id: "distribution",
      icon: "📦",
      title: "Distribution & Operations",
      lessons: [
        "Operations Management",
        "Distribution အခြေခံ",
        "Route-to-Market",
        "Distribution Channel",
        "Distributor Selection",
        "Distributor Performance",
        "Stock Management",
        "Inventory Control",
        "Stock Availability",
        "Warehouse Management",
        "Order Management",
        "Delivery Management",
        "Route Planning",
        "Operational KPI",
        "Operational Excellence"
      ]
    },

    {
      id: "retail",
      icon: "🏪",
      title: "Retail & Modern Trade",
      lessons: [
        "Modern Trade အခြေခံ",
        "Retail Business Model",
        "Modern Trade Customer",
        "Store Classification",
        "Planogram အခြေခံ",
        "Shelf Availability",
        "Perfect Store",
        "Promotion Execution",
        "Retail KPI",
        "Modern Trade Growth Plan"
      ]
    },

    {
      id: "key-account",
      icon: "🤝",
      title: "Key Account Management",
      lessons: [
        "Key Account Management အခြေခံ",
        "Key Account ဆိုတာဘာလဲ",
        "Account Segmentation",
        "Account Planning",
        "Joint Business Planning",
        "Account Growth Strategy",
        "Customer Negotiation",
        "Account Profitability",
        "Strategic Customer Relationship",
        "Key Account Review"
      ]
    },

    {
      id: "leadership",
      icon: "👨‍💼",
      title: "Leadership & Management",
      lessons: [
        "Leadership အခြေခံ",
        "Manager နှင့် Leader",
        "Leadership Mindset",
        "Clear Expectations",
        "Delegation",
        "Coaching",
        "Feedback",
        "Team Motivation",
        "Team Communication",
        "Performance Management",
        "Accountability",
        "Decision Making",
        "Conflict Management",
        "Change Management",
        "High Performance Team"
      ]
    },

    {
      id: "people-hr",
      icon: "👥",
      title: "People & HR",
      lessons: [
        "People Management အခြေခံ",
        "Recruitment",
        "Interviewing",
        "Right Person Right Job",
        "Employee Onboarding",
        "Training Needs Analysis",
        "Training Planning",
        "Employee Motivation",
        "Employee Development",
        "Career Development"
      ]
    },

    {
      id: "negotiation",
      icon: "🗣️",
      title: "Negotiation",
      lessons: [
        "Negotiation အခြေခံ",
        "Negotiation Preparation",
        "Negotiation Objective",
        "BATNA အခြေခံ",
        "Win-Win Negotiation",
        "Price Negotiation",
        "Trade Term Negotiation",
        "Difficult Negotiation",
        "Negotiation Communication",
        "Negotiation Closing"
      ]
    },

    {
      id: "business-development",
      icon: "💡",
      title: "Business Development",
      lessons: [
        "Business Development အခြေခံ",
        "New Business Opportunity",
        "Opportunity Identification",
        "Market Opportunity Analysis",
        "New Customer Acquisition",
        "Partnership Strategy",
        "Business Proposal",
        "Business Expansion",
        "Growth Opportunity",
        "Business Development Plan"
      ]
    },

    {
      id: "kpi-data",
      icon: "📈",
      title: "KPI & Data Analysis",
      lessons: [
        "KPI အခြေခံ",
        "Sales KPI",
        "Revenue KPI",
        "Volume KPI",
        "Distribution KPI",
        "Productivity KPI",
        "Achievement Analysis",
        "Gap Analysis",
        "Sales Dashboard",
        "Data-driven Management"
      ]
    },

    {
      id: "problem-solving",
      icon: "🧠",
      title: "Problem Solving & Decision Making",
      lessons: [
        "Problem Solving အခြေခံ",
        "Problem Identification",
        "Root Cause Analysis",
        "5 Why Analysis",
        "Fishbone Analysis",
        "Data-based Problem Solving",
        "Corrective Action",
        "Preventive Action",
        "Decision Making Framework",
        "Managerial Decision Making"
      ]
    },

    {
      id: "digital-ai",
      icon: "🤖",
      title: "Digital Business & AI",
      lessons: [
        "Digital Business အခြေခံ",
        "Digital Transformation",
        "AI ဆိုတာဘာလဲ",
        "AI for Business",
        "AI for Sales",
        "AI for Marketing",
        "AI for Customer Service",
        "AI for Reporting",
        "AI Productivity Tools",
        "AI Business Strategy"
      ]
    },

    {
      id: "productivity-career",
      icon: "🚀",
      title: "Productivity & Career",
      lessons: [
        "Goal Setting",
        "SMART Goal",
        "Action Planning",
        "Time Management",
        "Priority Management",
        "Daily Planning",
        "Weekly Review",
        "Professional Communication",
        "Career Development",
        "30-Day Professional Growth Plan"
      ]
    }
  ];

  /* =========================================================
     FLATTEN LESSONS
  ========================================================= */

  const lessons = [];

  courseData.forEach((course, courseIndex) => {
    course.lessons.forEach((title, lessonIndex) => {
      lessons.push({
        id: `${course.id}-${lessonIndex + 1}`,
        number: lessons.length + 1,
        categoryId: course.id,
        category: course.title,
        icon: course.icon,
        title,
        categoryIndex: courseIndex,
        lessonIndex
      });
    });
  });

  /* =========================================================
     VALIDATION
  ========================================================= */

  console.log(
    `[Aung Business Academy] Loaded ${lessons.length} lessons.`
  );

  /* =========================================================
     STORAGE
  ========================================================= */

  function getCompleted() {
    try {
      const data = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
      );

      return Array.isArray(data) ? data : [];
    } catch (error) {
      return [];
    }
  }

  function saveCompleted(data) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify([...new Set(data)])
    );
  }

  function isCompleted(id) {
    return getCompleted().includes(id);
  }

  function markCompleted(id) {
    const completed = getCompleted();

    if (!completed.includes(id)) {
      completed.push(id);
      saveCompleted(completed);
    }

    localStorage.setItem(LAST_LESSON_KEY, id);
  }

  function unmarkCompleted(id) {
    const completed = getCompleted().filter(x => x !== id);
    saveCompleted(completed);
  }

  function resetProgress() {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(LAST_LESSON_KEY);
  }

  function getProgress() {
    const completed = getCompleted();

    return lessons.length
      ? Math.round((completed.length / lessons.length) * 100)
      : 0;
  }

  /* =========================================================
     HELPERS
  ========================================================= */

  function esc(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function getLesson(id) {
    return lessons.find(x => x.id === id);
  }

  function getCurrentLesson() {
    const id = localStorage.getItem(LAST_LESSON_KEY);
    return getLesson(id) || lessons[0];
  }

  function percent(part, total) {
    if (!total) return 0;
    return Math.round((part / total) * 100);
  }

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  /* =========================================================
     LESSON IMAGE SUPPORT
     ========================================================= */

  const categoryImages = {
    "Business Fundamentals":
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",

    "Business Strategy":
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",

    "Sales Management":
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",

    "Sales Skills":
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",

    "Customer Management":
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",

    "Marketing":
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80",

    "Branding":
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",

    "Finance":
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",

    "Accounting & P&L":
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1200&q=80",

    "Distribution & Operations":
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",

    "Retail & Modern Trade":
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",

    "Key Account Management":
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",

    "Leadership & Management":
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",

    "People & HR":
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",

    "Negotiation":
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",

    "Business Development":
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",

    "KPI & Data Analysis":
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",

    "Problem Solving & Decision Making":
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",

    "Digital Business & AI":
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",

    "Productivity & Career":
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80"
  };

  function getLessonImage(lesson) {
    return categoryImages[lesson.category] ||
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80";
  }

  /* =========================================================
     CATEGORY KNOWLEDGE
  ========================================================= */

  const categoryKnowledge = {
    "Business Fundamentals": {
      focus: "လုပ်ငန်းတစ်ခုကို အခြေခံကနေ စနစ်တကျ နားလည်ပြီး ရေရှည်တည်တံ့အောင် တည်ဆောက်ခြင်း",
      manager: "Manager တစ်ယောက်အနေနဲ့ လုပ်ငန်းရဲ့ Revenue, Cost, Customer, People နဲ့ Process တွေကို တစ်ခုနဲ့တစ်ခု ချိတ်ဆက်စဉ်းစားရပါတယ်။",
      example: "ဥပမာ Retail business တစ်ခုမှာ ရောင်းအားတက်လာပေမယ့် Gross Profit ကျနေတယ်ဆိုရင် Sales တစ်ခုတည်းကို မကြည့်ဘဲ Price, Discount, Product Mix နဲ့ Cost ကိုပါ စစ်ဆေးရပါမယ်။",
      actions: [
        "လုပ်ငန်းရဲ့ Customer ကို ရှင်းရှင်းလင်းလင်း သတ်မှတ်ပါ။",
        "Customer အတွက် တကယ်ပေးနိုင်တဲ့ Value ကို ရှာပါ။",
        "Revenue နဲ့ Cost ကို ပုံမှန်စောင့်ကြည့်ပါ။",
        "Process တစ်ခုချင်းစီမှာ Owner သတ်မှတ်ပါ။",
        "လစဉ် Business Review ပြုလုပ်ပါ။"
      ]
    },

    "Business Strategy": {
      focus: "လုပ်ငန်းရဲ့ ရည်မှန်းချက်ကို Market အခြေအနေ၊ Competitor နဲ့ Resource တွေနဲ့ ချိတ်ဆက်ပြီး အကောင်အထည်ဖော်နိုင်တဲ့ Strategy ဖြစ်အောင် တည်ဆောက်ခြင်း",
      manager: "Strategy ဆိုတာ စာရွက်ပေါ်က Plan တစ်ခုမဟုတ်ပါ။ ဘယ်နေရာမှာ ယှဉ်ပြိုင်မလဲ၊ ဘယ် Customer ကို ရွေးမလဲ၊ ဘယ်လိုအနိုင်ယူမလဲဆိုတာကို ရွေးချယ်ခြင်းဖြစ်ပါတယ်။",
      example: "ဥပမာ Competitor တွေက Price Discount ကို အဓိကထားရောင်းနေချိန်မှာ ကိုယ့်လုပ်ငန်းက Service Quality, Availability နဲ့ Customer Relationship ကို Competitive Advantage အဖြစ် တည်ဆောက်နိုင်ပါတယ်။",
      actions: [
        "Vision နဲ့ Business Goal ကို ရှင်းလင်းပါ။",
        "Market နဲ့ Competitor Data စုပါ။",
        "အရေးကြီးဆုံး Strategic Priorities 3 ခု သတ်မှတ်ပါ။",
        "Strategy တစ်ခုချင်းစီအတွက် KPI သတ်မှတ်ပါ။",
        "Monthly Strategy Review လုပ်ပါ။"
      ]
    },

    "Sales Management": {
      focus: "Sales Target ကို Team, Territory, Customer, Route နဲ့ Daily Execution အထိ ခွဲချပြီး ရလဒ်ရအောင် Management လုပ်ခြင်း",
      manager: "Sales Manager ရဲ့ အလုပ်က Target ကို Team ကို ပြောပေးရုံမဟုတ်ပါ။ Target ကို Field Execution ဖြစ်အောင် ပြောင်းပေးရပါတယ်။",
      example: "ဥပမာ Monthly Target 300 သိန်းရှိရင် Team တစ်ခုလုံးကို 300 သိန်းလို့ပဲ မပြောဘဲ Territory → Salesperson → Customer → Week → Day အထိ Breakdown လုပ်ရပါမယ်။",
      actions: [
        "Monthly Target ကို Team အလိုက် ခွဲပါ။",
        "Target ကို Weekly နဲ့ Daily Run Rate အဖြစ် ပြောင်းပါ။",
        "Top Customers နဲ့ Growth Customers သတ်မှတ်ပါ။",
        "Field Visit နဲ့ Coaching လုပ်ပါ။",
        "Daily/Weekly Achievement ကို Review လုပ်ပါ။"
      ]
    },

    "Sales Skills": {
      focus: "Customer ကို နားလည်ပြီး Product Feature မဟုတ်ဘဲ Customer Benefit နဲ့ Business Value ကို ရောင်းချနိုင်ခြင်း",
      manager: "Professional Selling မှာ အဓိကက Customer ပြောတာကို နားထောင်ပြီး သူ့ရဲ့ Need, Pain Point နဲ့ Buying Reason ကို ရှာဖွေခြင်းပါ။",
      example: "Customer က Price ကြီးတယ်လို့ ပြောရင် Discount ပေးဖို့ ချက်ချင်းမပြေးဘဲ Quality, Margin, Service, Availability နဲ့ Total Value ကို ရှင်းပြပါ။",
      actions: [
        "Customer ကို မေးခွန်းကောင်းတွေ မေးပါ။",
        "Active Listening လုပ်ပါ။",
        "Feature ကို Benefit အဖြစ် ပြောင်းပြောပါ။",
        "Objection ရဲ့ အကြောင်းရင်းကို ရှာပါ။",
        "Clear Closing နဲ့ Follow-up လုပ်ပါ။"
      ]
    },

    "Customer Management": {
      focus: "Customer တစ်ယောက်ကို ရောင်းချပြီးပြီးသွားတာမဟုတ်ဘဲ ရေရှည် Relationship နဲ့ Customer Growth တည်ဆောက်ခြင်း",
      manager: "Customer Management မှာ Sales တစ်ခါရဖို့ထက် Retention, Repeat Purchase, Share of Wallet နဲ့ Relationship Quality ကို ကြည့်ရပါတယ်။",
      example: "Top Customer တစ်ယောက်ရဲ့ Order ကျလာရင် Complaint ရှိ/မရှိ၊ Competitor ဝင်လာ/မဝင်လာ၊ Stock Availability နဲ့ Customer Business အခြေအနေကို စစ်ဆေးပါ။",
      actions: [
        "Customer ကို Value အလိုက် Segment ခွဲပါ။",
        "Top Account တွေအတွက် Visit Plan ထားပါ။",
        "Customer Feedback စုပါ။",
        "Complaint ကို အမြန်ဖြေရှင်းပါ။",
        "Customer Growth Plan တည်ဆောက်ပါ။"
      ]
    },

    "Marketing": {
      focus: "Customer Need ကို နားလည်ပြီး Product, Price, Place, Promotion ကို Market Strategy အဖြစ် ပေါင်းစပ်ခြင်း",
      manager: "Marketing ရဲ့ ရည်ရွယ်ချက်က Promotion လုပ်ရုံမဟုတ်ဘဲ Customer Demand ဖန်တီးပြီး Business Growth ဖြစ်စေဖို့ပါ။",
      example: "Product အသစ်တစ်ခု Launch လုပ်တဲ့အခါ Target Customer, Positioning, Price, Distribution Availability နဲ့ Communication ကို တစ်ပြိုင်နက်တည်း စီမံရပါတယ်။",
      actions: [
        "Target Customer ကို သတ်မှတ်ပါ။",
        "Customer Need ကို လေ့လာပါ။",
        "4P ကို တစ်ခုနဲ့တစ်ခု ချိတ်ပါ။",
        "Campaign Objective နဲ့ KPI သတ်မှတ်ပါ။",
        "Result ကို Data နဲ့တိုင်းတာပါ။"
      ]
    },

    "Branding": {
      focus: "Customer ရဲ့ စိတ်ထဲမှာ ထင်ရှားပြီး ယုံကြည်စိတ်ချရတဲ့ Brand Identity နဲ့ Brand Value တည်ဆောက်ခြင်း",
      manager: "Brand ဆိုတာ Logo တစ်ခုတည်းမဟုတ်ပါ။ Customer တွေက Brand ကို တွေ့တဲ့အခါ ခံစားရတဲ့ Promise, Quality နဲ့ Experience အားလုံးပါဝင်ပါတယ်။",
      example: "Brand တစ်ခုကို Premium လို့ Position လုပ်ထားရင် Price, Packaging, Customer Service နဲ့ Communication အားလုံးက Premium Position နဲ့ ကိုက်ညီရပါမယ်။",
      actions: [
        "Brand Promise ကို ရှင်းလင်းပါ။",
        "Target Customer ကို သတ်မှတ်ပါ။",
        "Consistent Communication လုပ်ပါ။",
        "Customer Experience ကို ထိန်းပါ။",
        "Brand Health ကို ပုံမှန် Review လုပ်ပါ။"
      ]
    },

    "Finance": {
      focus: "Revenue, Cost, Profit, Cash Flow နဲ့ Working Capital ကို နားလည်ပြီး Business Decision ကို Financial Impact နဲ့ ချိတ်ဆက်ခြင်း",
      manager: "Sales တက်တာတစ်ခုတည်းနဲ့ Business က အမြဲကောင်းနေတယ်လို့ မဆိုနိုင်ပါ။ Margin နဲ့ Cash Flow ကိုပါ ကြည့်ရပါတယ်။",
      example: "Sales 1000 သိန်းရပေမယ့် Discount နဲ့ Cost ကြောင့် Margin ကျသွားရင် Revenue Growth ဖြစ်ပေမယ့် Profit Growth မဖြစ်နိုင်ပါ။",
      actions: [
        "Revenue နဲ့ Profit ကို သီးခြားကြည့်ပါ။",
        "Gross Margin ကို စောင့်ကြည့်ပါ။",
        "Cash Collection ကို ထိန်းပါ။",
        "Budget နဲ့ Actual ကို နှိုင်းယှဉ်ပါ။",
        "Cost Reduction Opportunity ရှာပါ။"
      ]
    },

    "Accounting & P&L": {
      focus: "Financial Statement တွေကို နားလည်ပြီး Revenue, Cost, Profit နဲ့ Working Capital ကို Business Decision အတွက် အသုံးချခြင်း",
      manager: "Manager တစ်ယောက်ဟာ Accountant ဖြစ်စရာမလိုပေမယ့် P&L ရဲ့ အဓိက Line Items ကို ဖတ်နိုင်ရပါမယ်။",
      example: "Gross Margin ကျလာရင် Product Mix, Discount, Purchase Cost နဲ့ Selling Price ကို စစ်ဆေးပြီး Root Cause ရှာရပါတယ်။",
      actions: [
        "P&L ရဲ့ Revenue ကို စစ်ပါ။",
        "Gross Profit နဲ့ Gross Margin တွက်ပါ။",
        "Operating Cost ကို Review လုပ်ပါ။",
        "AR နဲ့ Credit Risk ကို စောင့်ကြည့်ပါ။",
        "Monthly Financial Review လုပ်ပါ။"
      ]
    },

    "Distribution & Operations": {
      focus: "Product ကို မှန်ကန်တဲ့ Customer ဆီ မှန်ကန်တဲ့အချိန်မှာ မှန်ကန်တဲ့ Quantity နဲ့ ရောက်အောင် Distribution System တည်ဆောက်ခြင်း",
      manager: "Distribution မှာ Availability က အရေးကြီးပါတယ်။ Product ကောင်းနေပေမယ့် Customer ဆီမှာ Stock မရှိရင် Sales Opportunity ဆုံးရှုံးပါတယ်။",
      example: "Fast-moving SKU တစ်ခု Stock Out ဖြစ်နေရင် Sales Loss ဖြစ်နိုင်တာကြောင့် Forecast, Stock Level, Order Cycle နဲ့ Delivery ကို ချိတ်ဆက်စီမံရပါတယ်။",
      actions: [
        "Distribution Channel ကို Map လုပ်ပါ။",
        "Stock Availability ကို စောင့်ကြည့်ပါ။",
        "Distributor KPI သတ်မှတ်ပါ။",
        "Delivery Performance ကို Review လုပ်ပါ။",
        "Operational Issues ရဲ့ Root Cause ရှာပါ။"
      ]
    },

    "Retail & Modern Trade": {
      focus: "Retail Store တွေမှာ Availability, Visibility, Planogram, Promotion နဲ့ KPI တွေကို စနစ်တကျ စီမံခြင်း",
      manager: "Modern Trade မှာ Listing ရရှိရုံမလုံလောက်ပါ။ Shelf Availability, Visibility, Promotion Execution နဲ့ Sell-out ကိုပါ စောင့်ကြည့်ရပါတယ်။",
      example: "Product က Warehouse မှာ Stock ရှိပေမယ့် Shelf မှာ မရှိရင် Consumer Sale မရနိုင်ပါ။ ဒါကြောင့် Shelf Availability ကို KPI တစ်ခုအဖြစ် ထိန်းရပါတယ်။",
      actions: [
        "Store Classification ပြုလုပ်ပါ။",
        "Perfect Store Standard သတ်မှတ်ပါ။",
        "Shelf Availability စစ်ပါ။",
        "Promotion Execution Audit လုပ်ပါ။",
        "Retail KPI ကို Weekly Review လုပ်ပါ။"
      ]
    },

    "Key Account Management": {
      focus: "အရေးကြီးတဲ့ Customer Account တွေကို Transaction မဟုတ်ဘဲ Strategic Business Partnership အဖြစ် စီမံခြင်း",
      manager: "Key Account Management မှာ Customer ရဲ့ Business Goal ကို နားလည်ပြီး နှစ်ဖက်စလုံးအတွက် Growth ဖြစ်စေတဲ့ Joint Business Plan တည်ဆောက်ရပါတယ်။",
      example: "Key Account တစ်ခုအတွက် Sales Target တစ်ခုတည်း မသတ်မှတ်ဘဲ Category Growth, Distribution, Promotion, Margin နဲ့ Joint Activities တွေကို Plan လုပ်နိုင်ပါတယ်။",
      actions: [
        "Key Account ကို Strategic Value အလိုက် Segment ခွဲပါ။",
        "Account Plan တည်ဆောက်ပါ။",
        "Customer Business ကို နားလည်ပါ။",
        "Joint Business Plan ဆွေးနွေးပါ။",
        "Account Profitability ကို Review လုပ်ပါ။"
      ]
    },

    "Leadership & Management": {
      focus: "Team ကို Control လုပ်ခြင်းထက် Direction, Expectation, Coaching, Accountability နဲ့ Empowerment ဖြင့် Performance မြှင့်တင်ခြင်း",
      manager: "Leader က အရာအားလုံးကို ကိုယ်တိုင်လုပ်သူမဟုတ်ပါ။ Team က ကိုယ်တိုင်ကောင်းကောင်းလုပ်နိုင်အောင် System နဲ့ People ကို တည်ဆောက်ပေးသူပါ။",
      example: "Salesperson တစ်ယောက် Target မရတဲ့အခါ ဆူတာထက် Territory, Activity, Skill, Customer Mix နဲ့ Motivation ဘယ်နေရာမှာ Gap ရှိလဲ ရှာပါ။",
      actions: [
        "Clear Expectations ပေးပါ။",
        "Delegation လုပ်ပါ။",
        "Regular Coaching ပြုလုပ်ပါ။",
        "Feedback ကို တိတိကျကျပေးပါ။",
        "Accountability Culture တည်ဆောက်ပါ။"
      ]
    },

    "People & HR": {
      focus: "လူမှန်ကို ရွေးချယ်ခြင်း၊ မှန်ကန်စွာ Onboard လုပ်ခြင်း၊ Training နဲ့ Development ပေးခြင်း",
      manager: "People Management မှာ Hiring တစ်ခါတည်းမဟုတ်ပါ။ Employee Lifecycle တစ်လျှောက် Performance နဲ့ Development ကို စီမံရပါတယ်။",
      example: "New Salesperson တစ်ယောက်ကို Product Training ပေးရုံနဲ့ မလုံလောက်ပါ။ Territory, Customer Visit, Reporting, Sales Process နဲ့ Coaching ပါ ထည့်သွင်းရပါတယ်။",
      actions: [
        "Job Requirement ရှင်းပါ။",
        "Interview ကို Competency အလိုက်လုပ်ပါ။",
        "Onboarding Plan ထားပါ။",
        "Training Needs Analysis လုပ်ပါ။",
        "Career Development Plan တည်ဆောက်ပါ။"
      ]
    },

    "Negotiation": {
      focus: "ကိုယ့်အကျိုးစီးပွားကို ကာကွယ်ရင်း တစ်ဖက်ပါတီနဲ့ ရေရှည်အကျိုးရှိတဲ့ Agreement ရရှိအောင် ဆွေးနွေးခြင်း",
      manager: "Negotiation မှာ Price တစ်ခုတည်းမဟုတ်ပါ။ Volume, Payment Term, Credit, Delivery, Promotion, Service နဲ့ Commitment တွေကို Package အဖြစ် စဉ်းစားရပါတယ်။",
      example: "Customer က Price Discount တောင်းရင် Discount တစ်ခုတည်းမပေးဘဲ Higher Volume, Faster Payment သို့မဟုတ် Longer Commitment နဲ့ Exchange လုပ်နိုင်ပါတယ်။",
      actions: [
        "Objective နဲ့ Minimum Acceptable Outcome သတ်မှတ်ပါ။",
        "BATNA ကို နားလည်ပါ။",
        "တစ်ဖက်ပါတီရဲ့ Need ကို သိအောင်လုပ်ပါ။",
        "Give & Get Principle အသုံးပြုပါ။",
        "Agreement ကို စာဖြင့် Confirm လုပ်ပါ။"
      ]
    },

    "Business Development": {
      focus: "Market ထဲက Growth Opportunity အသစ်တွေကို ရှာဖွေပြီး Customer, Product, Channel နဲ့ Partnership ကနေ Business တိုးချဲ့ခြင်း",
      manager: "Business Development မှာ Opportunity ရှာတာထက် Opportunity ရဲ့ Commercial Potential ကို အကဲဖြတ်နိုင်ဖို့ ပိုအရေးကြီးပါတယ်။",
      example: "မြို့တစ်မြို့မှာ Product Demand ရှိပေမယ့် Distribution မရှိရင် Distributor Partnership တစ်ခုက Growth Opportunity ဖြစ်နိုင်ပါတယ်။",
      actions: [
        "Opportunity List တည်ဆောက်ပါ။",
        "Market Size ခန့်မှန်းပါ။",
        "Commercial Feasibility စစ်ပါ။",
        "Partner နဲ့ Business Case တည်ဆောက်ပါ။",
        "Pilot → Measure → Scale လုပ်ပါ။"
      ]
    },

    "KPI & Data Analysis": {
      focus: "Data ကို Report အဖြစ်သာ မသုံးဘဲ Business Decision အတွက် Insight အဖြစ် ပြောင်းလဲအသုံးချခြင်း",
      manager: "KPI က Number ပြဖို့မဟုတ်ပါ။ Performance ဘယ်လိုဖြစ်နေတယ်၊ Gap ဘာလဲ၊ ဘာလုပ်ရမလဲဆိုတာ ပြောပေးဖို့ပါ။",
      example: "Achievement 90% ဆိုတာကို ကြည့်ပြီးရပ်မနေဘဲ 10% Gap က ဘယ် Territory, Product, Customer သို့မဟုတ် Week ကနေ ဖြစ်လာတာလဲ ခွဲခြမ်းရပါတယ်။",
      actions: [
        "Business Objective နဲ့ KPI ကို ချိတ်ပါ။",
        "Leading နဲ့ Lagging KPI ခွဲပါ။",
        "Achievement vs Target တွက်ပါ။",
        "Gap ရဲ့ Root Cause ရှာပါ။",
        "Action နဲ့ KPI ကို ပြန်ချိတ်ပါ။"
      ]
    },

    "Problem Solving & Decision Making": {
      focus: "ပြဿနာရဲ့ အပေါ်ယံလက္ခဏာကို မဖြေရှင်းဘဲ Root Cause ရှာပြီး Corrective/Preventive Action ပြုလုပ်ခြင်း",
      manager: "Problem တစ်ခုဖြစ်တိုင်း လူကိုအပြစ်တင်တာထက် Process, People, Product, Market နဲ့ Data ကို စနစ်တကျ စစ်ဆေးရပါတယ်။",
      example: "Sales ကျတာကို Sales Team မကြိုးစားလို့လို့ ချက်ချင်းမဆုံးဖြတ်ဘဲ Stock Out, Competitor Activity, Price, Distribution နဲ့ Customer Demand ကို စစ်ပါ။",
      actions: [
        "Problem ကို Data နဲ့ Define လုပ်ပါ။",
        "Root Cause Analysis လုပ်ပါ။",
        "5 Why / Fishbone အသုံးပြုပါ။",
        "Corrective Action သတ်မှတ်ပါ။",
        "Preventive Action ထည့်ပါ။"
      ]
    },

    "Digital Business & AI": {
      focus: "Digital Technology နဲ့ AI ကို Productivity, Sales, Marketing, Reporting နဲ့ Decision Making အတွက် အသုံးချခြင်း",
      manager: "AI ကို လူအစားထိုးဖို့ထက် လူတွေရဲ့ Productivity နဲ့ Decision Quality တိုးမြှင့်ဖို့ အသုံးချတာ ပိုတန်ဖိုးရှိပါတယ်။",
      example: "Sales Manager တစ်ယောက်က Raw Sales Data ကို AI နဲ့ Summary, Gap Analysis, Customer Priority နဲ့ Action Plan အဖြစ် ပြောင်းနိုင်ပါတယ်။",
      actions: [
        "Repeatable Tasks တွေကို Identify လုပ်ပါ။",
        "AI အသုံးပြုနိုင်တဲ့ Workflow ရှာပါ။",
        "Data Privacy ကို ကာကွယ်ပါ။",
        "AI Output ကို Human Review လုပ်ပါ။",
        "အသုံးချမှုရဲ့ ROI ကို တိုင်းတာပါ။"
      ]
    },

    "Productivity & Career": {
      focus: "ရည်မှန်းချက်ကို Action Plan အဖြစ် ပြောင်းပြီး အချိန်၊ Priority နဲ့ Professional Development ကို စနစ်တကျ စီမံခြင်း",
      manager: "Productivity ဆိုတာ အလုပ်များများလုပ်ခြင်းမဟုတ်ပါ။ Business Impact အမြင့်ဆုံးအလုပ်တွေကို အရင်လုပ်နိုင်ခြင်းပါ။",
      example: "Manager တစ်ယောက်အနေနဲ့ တစ်နေ့တာမှာ Email အားလုံးကို အရင်ဖြေမယ့်အစား Revenue Impact မြင့်တဲ့ Customer Issue ကို အရင်ဖြေရှင်းသင့်ပါတယ်။",
      actions: [
        "Goal ကို SMART ဖြစ်အောင်ရေးပါ။",
        "Daily Top 3 Priorities သတ်မှတ်ပါ။",
        "Time Blocking အသုံးပြုပါ။",
        "Weekly Review လုပ်ပါ။",
        "Skill Development Plan ထားပါ။"
      ]
    }
  };

  /* =========================================================
     TITLE-SPECIFIC KNOWLEDGE
  ========================================================= */

  const titleKnowledge = {
    "Sales Target သတ်မှတ်ခြင်း": {
      definition:
        "Sales Target ဆိုတာ သတ်မှတ်ထားတဲ့ အချိန်ကာလအတွင်း ရရှိရမယ့် ရောင်းအား၊ Volume သို့မဟုတ် Revenue ရည်မှန်းချက် ဖြစ်ပါတယ်။ Target က အဖွဲ့ကို ဦးတည်ချက်ပေးပြီး Performance ကို တိုင်းတာနိုင်အောင် လုပ်ပေးပါတယ်။",
      example:
        "ဥပမာ Monthly Revenue Target 300 သိန်းရှိတယ်ဆိုပါစို့။ ဒီ 300 သိန်းကို Salesperson 5 ယောက်အတွက် Territory, Customer Potential နဲ့ Historical Achievement အပေါ်မူတည်ပြီး ခွဲဝေပေးရပါမယ်။",
      manager:
        "Target သတ်မှတ်တဲ့အခါ မနှစ်က Sales ကို တိုက်ရိုက်ပေါင်းတင်တာမျိုးမလုပ်ဘဲ Market Growth, Distribution Expansion, Customer Potential, Seasonality နဲ့ Team Capacity ကို ထည့်သွင်းစဉ်းစားပါ။"
    },

    "Target Breakdown": {
      definition:
        "Target Breakdown ဆိုတာ Company Target ကြီးကို Region, Territory, Team, Salesperson, Customer, Product နဲ့ Time Period အလိုက် အသေးစိတ် ခွဲဝေခြင်း ဖြစ်ပါတယ်။",
      example:
        "300 သိန်း Monthly Target ကို Weekly 75 သိန်း၊ Daily Run Rate အဖြစ် ခွဲပြီး Salesperson တစ်ယောက်ချင်းစီရဲ့ Customer Portfolio အလိုက် ထပ်ခွဲနိုင်ပါတယ်။",
      manager:
        "Breakdown လုပ်တဲ့အခါ လူတိုင်းကို တူညီတဲ့ Target ပေးတာထက် Territory Potential နဲ့ Customer Base ကို ထည့်သွင်းစဉ်းစားတာ ပိုတရားမျှတပါတယ်။"
    },

    "Sales Forecasting": {
      definition:
        "Sales Forecasting ဆိုတာ အနာဂတ်ကာလမှာ ဘယ်လောက်ရောင်းနိုင်မလဲဆိုတာ Historical Data, Pipeline, Market Condition နဲ့ Team Input တွေကို အသုံးပြုပြီး ခန့်မှန်းခြင်း ဖြစ်ပါတယ်။",
      example:
        "လကုန်ဖို့ 10 ရက်ကျန်ပြီး Achievement 70% ရှိနေတယ်ဆိုရင် Remaining Pipeline နဲ့ Daily Run Rate ကိုတွက်ပြီး Target ရနိုင်/မရနိုင် Forecast ပြန်လုပ်ရပါမယ်။",
      manager:
        "Forecast ကို Wishful Thinking နဲ့ မလုပ်ပါနဲ့။ Confirmed Orders, Probability, Historical Conversion နဲ့ Customer Commitment ကို ခွဲခြားပါ။"
    },

    "Profit Margin": {
      definition:
        "Profit Margin ဆိုတာ Sales Revenue ထဲက Profit ဘယ်လောက်ရာခိုင်နှုန်းရှိသလဲကို ပြတဲ့ Financial Indicator ဖြစ်ပါတယ်။ Gross Margin နဲ့ Net Margin ဆိုပြီး အဓိကခွဲနိုင်ပါတယ်။",
      example:
        "Sales 100 သိန်း၊ Gross Profit 30 သိန်းဆိုရင် Gross Margin = 30% ဖြစ်ပါတယ်။",
      manager:
        "Sales Volume တက်နေတယ်ဆိုတာတစ်ခုတည်း မကြည့်ပါနဲ့။ Product Mix နဲ့ Discount ကြောင့် Margin ကျနေမနေ စစ်ပါ။"
    },

    "SWOT Analysis": {
      definition:
        "SWOT Analysis ဆိုတာ Strengths, Weaknesses, Opportunities, Threats ဆိုတဲ့ အချက် ၄ ခုနဲ့ Business ရဲ့ လက်ရှိအခြေအနေကို ခွဲခြမ်းစိတ်ဖြာတဲ့ Strategic Tool ဖြစ်ပါတယ်။",
      example:
        "Strong Distribution Network က Strength ဖြစ်နိုင်ပြီး Competitor Price War က Threat ဖြစ်နိုင်ပါတယ်။",
      manager:
        "SWOT ကို List ရေးပြီးထားတာနဲ့ မပြီးပါ။ Strength ကို အသုံးချမယ့် Action နဲ့ Weakness ကို ဖြေရှင်းမယ့် Action ပြောင်းရပါမယ်။"
    },

    "Field Coaching": {
      definition:
        "Field Coaching ဆိုတာ Salesperson ကို Office ထဲကနေ Report ကြည့်ပြီး အကြံပေးတာထက် Field ထဲကို အတူသွားပြီး Observation, Feedback နဲ့ Practice ဖြင့် Skill တိုးတက်အောင် ပြုလုပ်ခြင်း ဖြစ်ပါတယ်။",
      example:
        "Manager က Salesperson ရဲ့ Customer Opening, Needs Analysis နဲ့ Closing ကို တိုက်ရိုက်ကြည့်ပြီး Visit ပြီးတဲ့နောက် Feedback ပေးနိုင်ပါတယ်။",
      manager:
        "Coaching မှာ အပြစ်ရှာတာထက် Specific Behavior တစ်ခုကို ရွေးပြီး Next Visit မှာ ဘာပြောင်းမလဲဆိုတာ သတ်မှတ်ပေးပါ။"
    },

    "Root Cause Analysis": {
      definition:
        "Root Cause Analysis ဆိုတာ ပြဿနာရဲ့ အပေါ်ယံလက္ခဏာကိုသာ ဖြေရှင်းမယ့်အစား ပြဿနာဖြစ်စေတဲ့ အခြေခံအကြောင်းရင်းကို ရှာဖွေခြင်း ဖြစ်ပါတယ်။",
      example:
        "Sales ကျတယ် → Customer Order ကျတယ် → Competitor Promotion ရှိတယ် → Customer က Competitor ကို Shift လုပ်နေတယ်ဆိုတဲ့ Chain နဲ့ Root Cause ကို ရှာနိုင်ပါတယ်။",
      manager:
        "Root Cause မသိဘဲ Action ချရင် Problem ပြန်ဖြစ်နိုင်ပါတယ်။ Data နဲ့ Field Observation နှစ်မျိုးစလုံး အသုံးပြုပါ။"
    },

    "AI for Sales": {
      definition:
        "AI for Sales ဆိုတာ AI ကို Prospect Research, Customer Segmentation, Sales Analysis, Reporting, Forecasting နဲ့ Sales Coaching စတဲ့ Sales Activities တွေမှာ အသုံးချခြင်း ဖြစ်ပါတယ်။",
      example:
        "Sales Data ကို AI ကိုပေးပြီး Top Customers, Low Achievement Customers, Growth Opportunity နဲ့ Next Action အဖြစ် ခွဲခြမ်းစေနိုင်ပါတယ်။",
      manager:
        "AI ကို Final Decision Maker အဖြစ် မသုံးဘဲ Decision Support Tool အဖြစ် အသုံးပြုတာ ပိုလုံခြုံပါတယ်။"
    },

    "SMART Goal": {
      definition:
        "SMART Goal ဆိုတာ Specific, Measurable, Achievable, Relevant, Time-bound ဆိုတဲ့ အချက်တွေပါဝင်တဲ့ ရည်မှန်းချက်ဖြစ်ပါတယ်။",
      example:
        "Sales တိုးမယ်လို့ရေးတာထက် '၃ လအတွင်း Monthly Sales ကို 15% တိုးမယ်' လို့ရေးတာက SMART ပိုဖြစ်ပါတယ်။",
      manager:
        "Goal တိုင်းမှာ Number နဲ့ Deadline ပါအောင်လုပ်ပြီး Weekly Review လုပ်ပါ။"
    }
  };

  /* =========================================================
     GENERATE DETAILED LESSON
     ========================================================= */

  function getLessonContent(lesson) {
    const base =
      categoryKnowledge[lesson.category] ||
      categoryKnowledge["Business Fundamentals"];

    const specific = titleKnowledge[lesson.title] || {};

    const definition =
      specific.definition ||
      `${lesson.title} ဆိုတာ ${base.focus} အတွက် အရေးကြီးတဲ့ Business Management အကြောင်းအရာတစ်ခု ဖြစ်ပါတယ်။ ဒီအကြောင်းအရာကို သိထားရုံနဲ့ မလုံလောက်ဘဲ လုပ်ငန်းခွင်မှာ ဘယ်အချိန်မှာ၊ ဘယ်လို အသုံးချရမလဲဆိုတာကို နားလည်ထားဖို့ လိုအပ်ပါတယ်။`;

    const example =
      specific.example ||
      base.example;

    const manager =
      specific.manager ||
      base.manager;

    const actionList =
      base.actions || [
        "Objective ကို သတ်မှတ်ပါ။",
        "လက်ရှိအခြေအနေကို Data နဲ့ စစ်ပါ။",
        "Action Plan တည်ဆောက်ပါ။",
        "Result ကို တိုင်းတာပါ။",
        "လိုအပ်သလို ပြန်လည်တိုးတက်အောင်လုပ်ပါ။"
      ];

    const mistakes = [
      `${lesson.title} ကို Theory အဖြစ်သာ သိပြီး လက်တွေ့အသုံးမချခြင်း`,
      "Data မကြည့်ဘဲ အတွေ့အကြုံတစ်ခုတည်းနဲ့ ဆုံးဖြတ်ခြင်း",
      "Business Goal နဲ့ ချိတ်ဆက်မထားခြင်း",
      "Action Plan မရှိဘဲ Discussion နဲ့ပဲ ရပ်တန့်ခြင်း",
      "Result ကို Review မလုပ်ခြင်း"
    ];

    const checklist = [
      `□ ${lesson.title} ရဲ့ အဓိကအဓိပ္ပါယ်ကို ကိုယ်တိုင်ရှင်းပြနိုင်ပါသလား။`,
      "□ Business Objective နဲ့ ချိတ်ဆက်နိုင်ပါသလား။",
      "□ ကိုယ့်လုပ်ငန်းမှာ အသုံးချနိုင်မယ့်နေရာတစ်ခု ရှာပြီးပြီလား။",
      "□ တိုင်းတာနိုင်တဲ့ KPI တစ်ခု သတ်မှတ်ထားပါသလား။",
      "□ ဒီအပတ်အတွင်း Action တစ်ခု စတင်နိုင်ပါသလား။"
    ];

    const questions = [
      `${lesson.title} ဆိုတာ ဘာလဲ။`,
      "ဒီအကြောင်းအရာက Business Result ကို ဘယ်လိုသက်ရောက်စေနိုင်သလဲ။",
      "ကိုယ့်လုပ်ငန်းမှာ လက်ရှိအခြေအနေက ဘယ်လိုရှိသလဲ။",
      "အဓိက Gap တစ်ခုက ဘာဖြစ်နိုင်သလဲ။",
      "နောက်တစ်ဆင့်အနေနဲ့ ဘာ Action လုပ်မလဲ။"
    ];

    return {
      objective:
        `${lesson.title} ကို နားလည်ပြီး ကိုယ့်လုပ်ငန်းခွင်၊ Team Management နဲ့ Business Decision တွေမှာ လက်တွေ့အသုံးချနိုင်ရန်။`,

      overview:
        `${lesson.category} အတွင်းမှာ ${lesson.title} ဟာ Manager တစ်ယောက်အနေနဲ့ သိထားသင့်တဲ့ အရေးကြီးတဲ့ အကြောင်းအရာတစ်ခု ဖြစ်ပါတယ်။ ${base.focus} ကို အခြေခံပြီး ဒီသင်ခန်းစာမှာ Concept, Business Impact, Manager Application နဲ့ Practical Action တွေကို တစ်ဆင့်ချင်း လေ့လာပါမယ်။`,

      definition,

      why:
        `${lesson.title} ကို ကောင်းကောင်းနားလည်ထားရင် Decision Making ပိုကောင်းလာပြီး Team Execution ကို ပိုမိုတိကျစွာ ဦးဆောင်နိုင်ပါတယ်။ အထူးသဖြင့် Business Result ကို တိုင်းတာနိုင်ဖို့၊ Gap ကို ရှာဖို့နဲ့ Action Plan တည်ဆောက်ဖို့ အထောက်အကူပြုပါတယ်။`,

      detailed:
        `လုပ်ငန်းခွင်မှာ ${lesson.title} ကို အသုံးချတဲ့အခါ "Plan → Execute → Measure → Improve" Cycle ကို အသုံးပြုပါ။ ပထမဆုံး လက်ရှိအခြေအနေကို သိအောင်လုပ်ပြီး Objective ကို သတ်မှတ်ပါ။ ပြီးရင် လုပ်ဆောင်ရမယ့် Action တွေကို သတ်မှတ်ပါ။ Action ပြီးတဲ့နောက် Result ကို KPI နဲ့တိုင်းတာပြီး မူလ Target နဲ့ နှိုင်းယှဉ်ပါ။ Gap ရှိရင် Root Cause ရှာပြီး Plan ကို ပြန်ပြင်ပါ။ ဒီ Cycle ကို တစ်ကြိမ်တည်းလုပ်ပြီး မရပ်ဘဲ ပုံမှန်ပြန်လုပ်နိုင်မှ Sustainable Improvement ဖြစ်လာမှာပါ။`,

      managerApplication: manager,

      example,

      actions: actionList,

      mistakes,

      actionPlan: [
        `၁။ ဒီနေ့ — ${lesson.title} နဲ့ပတ်သက်တဲ့ လက်ရှိအခြေအနေကို ရေးပါ။`,
        "၂။ လက်ရှိ Gap တစ်ခုကို သတ်မှတ်ပါ။",
        "၃။ ဖြေရှင်းဖို့ Action 3 ခု ရေးပါ။",
        "၄။ Action တစ်ခုချင်းစီအတွက် Owner နဲ့ Deadline သတ်မှတ်ပါ။",
        "၅။ တစ်ပတ်အကြာ Result ကို ပြန်တိုင်းတာပါ။"
      ],

      checklist,

      questions,

      managerTip:
        `Manager Tip — ${lesson.title} ကို အလုပ်မှာ အသုံးချတဲ့အခါ "ဘာလုပ်မလဲ" ထက် "ဘာ Result ရချင်လဲ" ကို အရင်သတ်မှတ်ပါ။ Result ရှင်းလင်းမှ Action ကို မှန်ကန်စွာ ရွေးချယ်နိုင်ပါတယ်။`,

      summary:
        `${lesson.title} ကို နားလည်ဖို့ အဓိကက Concept ကို သိရုံမဟုတ်ဘဲ လုပ်ငန်းခွင်မှာ အသုံးချနိုင်ဖို့ပါ။ Objective သတ်မှတ် → Data စစ် → Action လုပ် → KPI နဲ့တိုင်း → Review လုပ် → Improve လုပ် ဆိုတဲ့ Management Cycle ကို အသုံးပြုပါ။`
    };
  }

  /* =========================================================
     INJECT LESSON CSS
     ========================================================= */

  function injectLessonStyles() {
    if (document.getElementById("aba-detail-styles")) return;

    const style = document.createElement("style");
    style.id = "aba-detail-styles";

    style.textContent = `
      .aba-reader {
        max-width: 980px;
        margin: 0 auto;
      }

      .aba-lesson-hero {
        overflow: hidden;
        border-radius: 22px;
        background: #111827;
        margin-bottom: 20px;
        box-shadow: 0 10px 30px rgba(15,23,42,.12);
      }

      .aba-lesson-image {
        width: 100%;
        height: 260px;
        object-fit: cover;
        display: block;
      }

      .aba-lesson-hero-body {
        padding: 24px;
        color: #fff;
      }

      .aba-lesson-category {
        display: inline-flex;
        align-items: center;
        gap: 7px;
        padding: 7px 12px;
        border-radius: 999px;
        background: rgba(255,255,255,.12);
        font-size: 13px;
        margin-bottom: 12px;
      }

      .aba-lesson-title {
        font-size: 30px;
        line-height: 1.35;
        margin: 0 0 8px;
      }

      .aba-lesson-number {
        opacity: .72;
        font-size: 14px;
      }

      .aba-reader-grid {
        display: grid;
        gap: 16px;
      }

      .aba-reader-card {
        background: #fff;
        border: 1px solid #e5e7eb;
        border-radius: 18px;
        padding: 22px;
        box-shadow: 0 5px 18px rgba(15,23,42,.05);
      }

      .aba-reader-card h3 {
        margin: 0 0 13px;
        font-size: 20px;
        color: #111827;
      }

      .aba-reader-card p {
        margin: 0;
        font-size: 16px;
        line-height: 1.9;
        color: #374151;
        white-space: pre-line;
      }

      .aba-reader-list {
        margin: 0;
        padding-left: 22px;
      }

      .aba-reader-list li {
        margin: 10px 0;
        color: #374151;
        line-height: 1.8;
      }

      .aba-highlight {
        background: #f8fafc;
        border-left: 5px solid #2563eb;
      }

      .aba-tip {
        background: #eff6ff;
        border-left: 5px solid #2563eb;
      }

      .aba-example {
        background: #f0fdf4;
        border-left: 5px solid #16a34a;
      }

      .aba-warning {
        background: #fff7ed;
        border-left: 5px solid #f97316;
      }

      .aba-action {
        background: #faf5ff;
        border-left: 5px solid #9333ea;
      }

      .aba-question {
        background: #f8fafc;
      }

      .aba-progress-mini {
        height: 8px;
        background: #e5e7eb;
        border-radius: 99px;
        overflow: hidden;
        margin-top: 10px;
      }

      .aba-progress-mini span {
        display: block;
        height: 100%;
        background: #2563eb;
        border-radius: inherit;
      }

      .aba-reader-actions {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        margin: 20px 0;
      }

      .aba-reader-actions button {
        border: 0;
        border-radius: 12px;
        padding: 12px 17px;
        font-weight: 700;
        cursor: pointer;
      }

      .aba-btn-primary {
        background: #2563eb;
        color: white;
      }

      .aba-btn-success {
        background: #16a34a;
        color: white;
      }

      .aba-btn-light {
        background: #f3f4f6;
        color: #111827;
      }

      .aba-two-col {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
      }

      @media(max-width:700px) {
        .aba-lesson-image {
          height: 180px;
        }

        .aba-lesson-hero-body {
          padding: 18px;
        }

        .aba-lesson-title {
          font-size: 23px;
        }

        .aba-reader-card {
          padding: 17px;
          border-radius: 15px;
        }

        .aba-reader-card h3 {
          font-size: 18px;
        }

        .aba-reader-card p,
        .aba-reader-list li {
          font-size: 15px;
          line-height: 1.85;
        }

        .aba-two-col {
          grid-template-columns: 1fr;
        }

        .aba-reader-actions button {
          width: 100%;
        }
      }

      body {
        overflow-x: hidden !important;
      }

      img {
        max-width: 100%;
      }
    `;

    document.head.appendChild(style);
  }

  /* =========================================================
     APP CONTENT
     ========================================================= */

  const content = document.getElementById("app-content");
  const headerTitle = document.getElementById("headerTitle");

  if (!content) {
    console.error("Aung Business Academy: #app-content not found.");
    return;
  }

  injectLessonStyles();

  /* =========================================================
     NAVIGATION
     ========================================================= */

  const sectionTitles = {
    dashboard: "Dashboard",
    courses: "My Courses",
    lessons: "Lessons",
    progress: "My Progress",
    "sales-manager": "Sales Manager",
    pricing: "Pricing Calculator",
    reports: "Reports",
    "ai-business-coach": "AI Business Coach",
    "ai-tools": "AI Tools",
    settings: "Settings"
  };

  function setHeader(title) {
    if (headerTitle) {
      headerTitle.textContent =
        title || "Aung Business Academy";
    }
  }

  function activateNav(section) {
    document.querySelectorAll(".nav-item").forEach(btn => {
      btn.classList.toggle(
        "active",
        btn.dataset.section === section
      );
    });
  }

  function navigate(section) {
    activateNav(section);
    setHeader(sectionTitles[section] || "Aung Business Academy");

    switch (section) {
      case "dashboard":
        renderDashboard();
        break;

      case "courses":
        renderCourses();
        break;

      case "lessons":
        renderLessons();
        break;

      case "progress":
        renderProgress();
        break;

      case "sales-manager":
        renderSalesManager();
        break;

      case "pricing":
        renderPricing();
        break;

      case "reports":
        renderReports();
        break;

      case "ai-business-coach":
        renderAIBusinessCoach();
        break;

      case "ai-tools":
        renderAITools();
        break;

      case "settings":
        renderSettings();
        break;

      default:
        renderDashboard();
    }

    scrollTop();
  }

  /* =========================================================
     DASHBOARD
     ========================================================= */

  function renderDashboard() {
    const completed = getCompleted().length;
    const progress = getProgress();

    const current =
      getLesson(localStorage.getItem(LAST_LESSON_KEY)) ||
      lessons[0];

    const currentCompleted = isCompleted(current.id);

    content.innerHTML = `
      <section class="page-section">

        <div class="page-heading">
          <div>
            <h1>Welcome back, Aung Zar Ni Win 👋</h1>
            <p>
              Aung Business Academy မှာ Business Management,
              Sales, Marketing, Finance နဲ့ Leadership Skills တွေကို
              စနစ်တကျ လေ့လာနိုင်ပါတယ်။
            </p>
          </div>
        </div>

        <div class="stats-grid">

          <div class="stat-card">
            <div class="stat-icon">📚</div>
            <div>
              <div class="stat-label">Active Course</div>
              <div class="stat-value">1</div>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon">📖</div>
            <div>
              <div class="stat-label">Total Lessons</div>
              <div class="stat-value">${lessons.length}</div>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon">✅</div>
            <div>
              <div class="stat-label">Completed</div>
              <div class="stat-value">${completed}</div>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon">📈</div>
            <div>
              <div class="stat-label">Overall Progress</div>
              <div class="stat-value">${progress}%</div>
            </div>
          </div>

        </div>

        <div class="dashboard-grid">

          <div class="card current-course-card">

            <div class="card-header">
              <div>
                <div class="eyebrow">CURRENT COURSE</div>
                <h2>Sales Management Mastery</h2>
              </div>
              <span class="course-icon">💼</span>
            </div>

            <p>
              Sales Target, Team Management, Field Coaching,
              Forecasting, Distributor Management နဲ့ Sales Control
              ကို လေ့လာပါ။
            </p>

            <div class="progress-row">
              <span>Course Progress</span>
              <strong>${progress}%</strong>
            </div>

            <div class="progress-bar">
              <span style="width:${progress}%"></span>
            </div>

            <div class="card-actions">
              <button class="primary-btn" data-action="continue-learning">
                ${currentCompleted ? "Next Lesson" : "Continue Learning"}
              </button>

              <button class="secondary-btn" data-action="view-lessons">
                View All Lessons
              </button>
            </div>

          </div>

          <div class="card daily-focus-card">

            <div class="card-header">
              <div>
                <div class="eyebrow">DAILY GOAL</div>
                <h2>30 Minutes Learning</h2>
              </div>
              <span class="course-icon">🎯</span>
            </div>

            <div class="focus-number">
              ${completed > 0 ? "Keep Going!" : "Start Today"}
            </div>

            <p>
              တစ်နေ့ကို သင်ခန်းစာ ၁ ခုကနေ ၂ ခုအထိ
              သေချာဖတ်ပြီး လက်တွေ့ Action တစ်ခု ပြုလုပ်ပါ။
            </p>

            <button class="secondary-btn" data-action="go-progress">
              View My Progress
            </button>

          </div>

        </div>

        <div class="card focus-section">

          <div class="section-heading">
            <div>
              <div class="eyebrow">YOUR LEARNING FOCUS</div>
              <h2>Business Manager Skills</h2>
            </div>
          </div>

          <div class="focus-grid">

            <div class="focus-item">
              <span>🎯</span>
              <div>
                <strong>Target Management</strong>
                <small>Target → Execution → Result</small>
              </div>
            </div>

            <div class="focus-item">
              <span>👥</span>
              <div>
                <strong>Team Leadership</strong>
                <small>Coach, motivate and develop</small>
              </div>
            </div>

            <div class="focus-item">
              <span>📊</span>
              <div>
                <strong>Data Analysis</strong>
                <small>Numbers → Insights → Actions</small>
              </div>
            </div>

            <div class="focus-item">
              <span>💰</span>
              <div>
                <strong>Profit Management</strong>
                <small>Revenue, Cost and Margin</small>
              </div>
            </div>

            <div class="focus-item">
              <span>🤝</span>
              <div>
                <strong>Customer Management</strong>
                <small>Relationship and growth</small>
              </div>
            </div>

            <div class="focus-item">
              <span>🚀</span>
              <div>
                <strong>Business Growth</strong>
                <small>Strategy and execution</small>
              </div>
            </div>

          </div>

        </div>

        <div class="card">

          <div class="section-heading">
            <div>
              <div class="eyebrow">ACADEMY</div>
              <h2>Business Academy Categories</h2>
            </div>
          </div>

          <div class="category-grid">

            ${courseData.map(course => `
              <button
                class="category-card"
                data-category="${esc(course.id)}"
                type="button"
              >
                <span class="category-icon">${course.icon}</span>
                <strong>${esc(course.title)}</strong>
                <small>${course.lessons.length} Lessons</small>
              </button>
            `).join("")}

          </div>

        </div>

      </section>
    `;
  }

  /* =========================================================
     COURSES
     ========================================================= */

  function renderCourses() {
    const completed = getCompleted();

    content.innerHTML = `
      <section class="page-section">

        <div class="page-heading">
          <div>
            <h1>My Courses</h1>
            <p>Business Manager တစ်ယောက်အတွက် လိုအပ်တဲ့ Skill အားလုံးကို စနစ်တကျ လေ့လာပါ။</p>
          </div>
        </div>

        <div class="course-list">

          <div class="course-large-card">

            <div class="course-large-icon">💼</div>

            <div class="course-large-content">

              <div class="eyebrow">PROFESSIONAL BUSINESS PROGRAM</div>

              <h2>Business Manager Mastery</h2>

              <p>
                Business Fundamentals ကနေ Strategy, Sales,
                Marketing, Finance, Leadership, AI နဲ့ Career
                Development အထိ လေ့လာနိုင်တဲ့ Professional Business Program ဖြစ်ပါတယ်။
              </p>

              <div class="course-meta">
                <span>📚 ${lessons.length} Lessons</span>
                <span>🎯 20 Categories</span>
                <span>📖 Burmese Lessons</span>
              </div>

              <div class="progress-row">
                <span>${completed.length} / ${lessons.length} completed</span>
                <strong>${getProgress()}%</strong>
              </div>

              <div class="progress-bar">
                <span style="width:${getProgress()}%"></span>
              </div>

              <div class="card-actions">
                <button class="primary-btn" data-action="view-lessons">
                  Start Learning
                </button>
              </div>

            </div>

          </div>

        </div>

      </section>
    `;
  }

  /* =========================================================
     LESSON LIST
     ========================================================= */

  function renderLessons(filterCategory = "", searchText = "") {
    const completed = getCompleted();

    const filtered = lessons.filter(lesson => {

      const categoryMatch =
        !filterCategory ||
        lesson.categoryId === filterCategory;

      const searchMatch =
        !searchText ||
        lesson.title.toLowerCase().includes(searchText.toLowerCase()) ||
        lesson.category.toLowerCase().includes(searchText.toLowerCase());

      return categoryMatch && searchMatch;
    });

    content.innerHTML = `
      <section class="page-section">

        <div class="page-heading">
          <div>
            <h1>Lessons</h1>
            <p>
              ${lessons.length} lessons ကို Burmese language နဲ့
              အသေးစိတ် လေ့လာနိုင်ပါတယ်။
            </p>
          </div>
        </div>

        <div class="card lesson-filter-card">

          <div class="filter-row">

            <input
              id="lessonSearch"
              class="form-input"
              type="search"
              placeholder="🔎 သင်ခန်းစာရှာရန်..."
              value="${esc(searchText)}"
            />

            <select id="lessonCategory" class="form-input">

              <option value="">All Categories</option>

              ${courseData.map(course => `
                <option
                  value="${esc(course.id)}"
                  ${filterCategory === course.id ? "selected" : ""}
                >
                  ${esc(course.icon)} ${esc(course.title)}
                </option>
              `).join("")}

            </select>

          </div>

        </div>

        <div class="lesson-list">

          ${
            filtered.length
              ? filtered.map(lesson => `
                <button
                  class="lesson-list-card"
                  data-lesson-id="${esc(lesson.id)}"
                  type="button"
                >

                  <div class="lesson-number">
                    ${lesson.number}
                  </div>

                  <div class="lesson-list-icon">
                    ${lesson.icon}
                  </div>

                  <div class="lesson-list-content">

                    <small>${esc(lesson.category)}</small>

                    <strong>${esc(lesson.title)}</strong>

                    <span>
                      ${isCompleted(lesson.id)
                        ? "✅ Completed"
                        : "📖 Start Lesson"}
                    </span>

                  </div>

                  <div class="lesson-arrow">›</div>

                </button>
              `).join("")
              : `
                <div class="empty-state">
                  <div>🔎</div>
                  <h3>သင်ခန်းစာ မတွေ့ပါ</h3>
                  <p>Search keyword သို့မဟုတ် Category ကို ပြန်စစ်ပါ။</p>
                </div>
              `
          }

        </div>

        <div class="lesson-count">
          ${filtered.length} lessons found
        </div>

      </section>
    `;

    const search = document.getElementById("lessonSearch");
    const category = document.getElementById("lessonCategory");

    if (search) {
      search.addEventListener("input", () => {
        renderLessons(
          category ? category.value : "",
          search.value
        );
      });
    }

    if (category) {
      category.addEventListener("change", () => {
        renderLessons(
          category.value,
          search ? search.value : ""
        );
      });
    }
  }

  /* =========================================================
     LESSON READER
     ========================================================= */

  function renderLesson(id) {
    const lesson = getLesson(id);

    if (!lesson) {
      renderLessons();
      return;
    }

    localStorage.setItem(LAST_LESSON_KEY, lesson.id);

    const data = getLessonContent(lesson);

    const index = lessons.findIndex(x => x.id === lesson.id);

    const previous =
      index > 0 ? lessons[index - 1] : null;

    const next =
      index < lessons.length - 1 ? lessons[index + 1] : null;

    const completed = isCompleted(lesson.id);

    setHeader(lesson.title);

    content.innerHTML = `
      <section class="page-section aba-reader">

        <div class="aba-lesson-hero">

          <img
            class="aba-lesson-image"
            src="${getLessonImage(lesson)}"
            alt="${esc(lesson.title)}"
            loading="lazy"
            onerror="this.style.display='none'"
          />

          <div class="aba-lesson-hero-body">

            <div class="aba-lesson-category">
              ${lesson.icon}
              ${esc(lesson.category)}
            </div>

            <h1 class="aba-lesson-title">
              ${esc(lesson.title)}
            </h1>

            <div class="aba-lesson-number">
              Lesson ${lesson.number} of ${lessons.length}
            </div>

          </div>

        </div>

        <div class="aba-reader-actions">

          <button
            class="aba-btn-primary"
            data-action="back-lessons"
            type="button"
          >
            ← Lessons
          </button>

          <button
            class="${completed ? "aba-btn-light" : "aba-btn-success"}"
            data-action="toggle-complete"
            data-lesson-id="${esc(lesson.id)}"
            type="button"
          >
            ${completed
              ? "✓ Completed — Mark Incomplete"
              : "✓ Mark Lesson Complete"}
          </button>

        </div>

        <div class="aba-reader-grid">

          <article class="aba-reader-card aba-highlight">
            <h3>🎯 သင်ခန်းစာရည်ရွယ်ချက်</h3>
            <p>${esc(data.objective)}</p>
          </article>

          <article class="aba-reader-card">
            <h3>📖 အကြောင်းအရာအကျဉ်း</h3>
            <p>${esc(data.overview)}</p>
          </article>

          <article class="aba-reader-card">
            <h3>📚 အဓိပ္ပါယ်နှင့် Concept</h3>
            <p>${esc(data.definition)}</p>
          </article>

          <article class="aba-reader-card">
            <h3>❓ ဘာကြောင့်အရေးကြီးသလဲ</h3>
            <p>${esc(data.why)}</p>
          </article>

          <article class="aba-reader-card">
            <h3>🧠 အသေးစိတ်ရှင်းလင်းချက်</h3>
            <p>${esc(data.detailed)}</p>
          </article>

          <article class="aba-reader-card aba-tip">
            <h3>💼 Manager အမြင်</h3>
            <p>${esc(data.managerApplication)}</p>
          </article>

          <article class="aba-reader-card aba-example">
            <h3>📌 လုပ်ငန်းခွင် Example</h3>
            <p>${esc(data.example)}</p>
          </article>

          <div class="aba-two-col">

            <article class="aba-reader-card aba-action">
              <h3>🚀 လက်တွေ့ Action Plan</h3>

              <ol class="aba-reader-list">
                ${data.actionPlan.map(item => `
                  <li>${esc(item)}</li>
                `).join("")}
              </ol>

            </article>

            <article class="aba-reader-card">
              <h3>💡 လက်တွေ့အသုံးချရန်</h3>

              <ol class="aba-reader-list">
                ${data.actions.map(item => `
                  <li>${esc(item)}</li>
                `).join("")}
              </ol>

            </article>

          </div>

          <article class="aba-reader-card aba-warning">
            <h3>⚠️ Common Mistakes</h3>

            <ul class="aba-reader-list">
              ${data.mistakes.map(item => `
                <li>${esc(item)}</li>
              `).join("")}
            </ul>
          </article>

          <article class="aba-reader-card">
            <h3>✅ Self-Check Checklist</h3>

            <ul class="aba-reader-list">
              ${data.checklist.map(item => `
                <li>${esc(item)}</li>
              `).join("")}
            </ul>
          </article>

          <article class="aba-reader-card aba-question">
            <h3>📝 Knowledge Check</h3>

            <ol class="aba-reader-list">
              ${data.questions.map(item => `
                <li>${esc(item)}</li>
              `).join("")}
            </ol>

            <p style="margin-top:14px;">
              ဒီမေးခွန်းတွေကို ကိုယ်တိုင်ဖြေပြီးမှ နောက်သင်ခန်းစာကို ဆက်သွားပါ။
            </p>
          </article>

          <article class="aba-reader-card aba-tip">
            <h3>💡 Manager Tip</h3>
            <p>${esc(data.managerTip)}</p>
          </article>

          <article class="aba-reader-card">
            <h3>📋 Lesson Summary</h3>
            <p>${esc(data.summary)}</p>
          </article>

        </div>

        <div class="aba-reader-actions">

          ${
            previous
              ? `
                <button
                  class="aba-btn-light"
                  data-lesson-id="${esc(previous.id)}"
                  data-action="open-lesson"
                  type="button"
                >
                  ← Previous Lesson
                </button>
              `
              : ""
          }

          ${
            next
              ? `
                <button
                  class="aba-btn-primary"
                  data-lesson-id="${esc(next.id)}"
                  data-action="open-lesson"
                  type="button"
                >
                  Next Lesson →
                </button>
              `
              : ""
          }

        </div>

        <div class="aba-reader-card">

          <h3>📈 Course Progress</h3>

          <p>
            ${getCompleted().length} / ${lessons.length}
            lessons completed — ${getProgress()}%
          </p>

          <div class="aba-progress-mini">
            <span style="width:${getProgress()}%"></span>
          </div>

        </div>

      </section>
    `;
  }

  /* =========================================================
     PROGRESS
     ========================================================= */

  function renderProgress() {
    const completed = getCompleted();

    content.innerHTML = `
      <section class="page-section">

        <div class="page-heading">
          <div>
            <h1>My Progress</h1>
            <p>သင်ယူပြီးတဲ့ Lesson တွေကို ဒီနေရာမှာ စောင့်ကြည့်နိုင်ပါတယ်။</p>
          </div>
        </div>

        <div class="stats-grid">

          <div class="stat-card">
            <div class="stat-icon">📖</div>
            <div>
              <div class="stat-label">Total</div>
              <div class="stat-value">${lessons.length}</div>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon">✅</div>
            <div>
              <div class="stat-label">Completed</div>
              <div class="stat-value">${completed.length}</div>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon">⏳</div>
            <div>
              <div class="stat-label">Remaining</div>
              <div class="stat-value">${lessons.length - completed.length}</div>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon">📈</div>
            <div>
              <div class="stat-label">Progress</div>
              <div class="stat-value">${getProgress()}%</div>
            </div>
          </div>

        </div>

        <div class="card">

          <div class="section-heading">
            <div>
              <div class="eyebrow">COURSE PROGRESS</div>
              <h2>Business Manager Mastery</h2>
            </div>
            <strong>${getProgress()}%</strong>
          </div>

          <div class="progress-bar large">
            <span style="width:${getProgress()}%"></span>
          </div>

        </div>

        <div class="card">

          <div class="section-heading">
            <div>
              <div class="eyebrow">CATEGORY PROGRESS</div>
              <h2>20 Business Categories</h2>
            </div>
          </div>

          <div class="category-progress-list">

            ${courseData.map(course => {

              const categoryLessons =
                lessons.filter(
                  x => x.categoryId === course.id
                );

              const categoryCompleted =
                categoryLessons.filter(
                  x => completed.includes(x.id)
                ).length;

              const categoryPercent =
                percent(
                  categoryCompleted,
                  categoryLessons.length
                );

              return `
                <div class="category-progress-item">

                  <div class="category-progress-head">
                    <span>
                      ${course.icon}
                      ${esc(course.title)}
                    </span>

                    <strong>
                      ${categoryCompleted}/${categoryLessons.length}
                    </strong>
                  </div>

                  <div class="progress-bar">
                    <span style="width:${categoryPercent}%"></span>
                  </div>

                </div>
              `;
            }).join("")}

          </div>

        </div>

        <div class="card danger-zone">

          <h2>Reset Learning Progress</h2>

          <p>
            Completed Lessons အားလုံးကို Reset လုပ်မယ်ဆိုရင်
            Progress 0% ပြန်ဖြစ်သွားပါမယ်။
          </p>

          <button
            class="danger-btn"
            data-action="reset-progress"
            type="button"
          >
            Reset Progress
          </button>

        </div>

      </section>
    `;
  }

  /* =========================================================
     SALES MANAGER
     ========================================================= */

  function renderSalesManager() {
    content.innerHTML = `
      <section class="page-section">

        <div class="page-heading">
          <div>
            <h1>💼 Sales Manager</h1>
            <p>
              Sales Manager တစ်ယောက်အနေနဲ့ Daily Management
              လုပ်နိုင်ဖို့ အသုံးဝင်တဲ့ Framework တွေ။
            </p>
          </div>
        </div>

        <div class="dashboard-grid">

          <div class="card">

            <h2>🎯 Target Management</h2>

            <p>
              Target ကို Annual → Monthly → Weekly → Daily
              အထိ ခွဲပြီး Team နဲ့ Customer အလိုက် Execute လုပ်ပါ။
            </p>

            <ul class="aba-reader-list">
              <li>Target Breakdown</li>
              <li>Achievement Tracking</li>
              <li>Gap Analysis</li>
              <li>Recovery Planning</li>
            </ul>

          </div>

          <div class="card">

            <h2>👥 Team Management</h2>

            <p>
              Team ကို Control လုပ်တာထက် Clear Expectations,
              Coaching, Feedback နဲ့ Accountability နဲ့ ဦးဆောင်ပါ။
            </p>

            <ul class="aba-reader-list">
              <li>Daily Check-in</li>
              <li>Field Coaching</li>
              <li>Weekly Review</li>
              <li>Performance Development</li>
            </ul>

          </div>

          <div class="card">

            <h2>📊 Daily Sales Control</h2>

            <p>
              Achievement ကို နောက်ကျမှ ကြည့်တာမဟုတ်ဘဲ
              Leading Indicators တွေကို နေ့စဉ် စောင့်ကြည့်ပါ။
            </p>

            <ul class="aba-reader-list">
              <li>Calls / Visits</li>
              <li>Orders</li>
              <li>Conversion</li>
              <li>Revenue / Volume</li>
            </ul>

          </div>

          <div class="card">

            <h2>🚨 Recovery Plan</h2>

            <p>
              Target Gap ရှိလာရင် ဘယ် Customer,
              ဘယ် Territory, ဘယ် Product မှာ Gap ဖြစ်နေတယ်ဆိုတာ
              Data နဲ့ရှာပြီး Recovery Action ချပါ။
            </p>

          </div>

        </div>

        <div class="card">

          <h2>📋 Sales Manager Daily Checklist</h2>

          <ul class="aba-reader-list">
            <li>□ Yesterday Achievement Review</li>
            <li>□ Today's Target Check</li>
            <li>□ Priority Customer Check</li>
            <li>□ Stock / Availability Check</li>
            <li>□ Team Field Activity Check</li>
            <li>□ Key Issue Escalation</li>
            <li>□ End-of-Day Result Review</li>
          </ul>

        </div>

      </section>
    `;
  }

  /* =========================================================
     PRICING CALCULATOR
     ========================================================= */

  function renderPricing() {
    content.innerHTML = `
      <section class="page-section">

        <div class="page-heading">
          <div>
            <h1>🧮 Pricing Calculator</h1>
            <p>Price, Cost, Margin နဲ့ Profit ကို လွယ်လွယ်ကူကူ တွက်ချက်ပါ။</p>
          </div>
        </div>

        <div class="calculator-grid">

          <div class="card">

            <h2>Profit & Margin Calculator</h2>

            <div class="form-group">
              <label>Selling Price</label>
              <input
                id="calcSelling"
                class="form-input"
                type="number"
                placeholder="ဥပမာ 100000"
              />
            </div>

            <div class="form-group">
              <label>Cost</label>
              <input
                id="calcCost"
                class="form-input"
                type="number"
                placeholder="ဥပမာ 70000"
              />
            </div>

            <div class="form-group">
              <label>Quantity</label>
              <input
                id="calcQty"
                class="form-input"
                type="number"
                value="1"
                min="1"
              />
            </div>

            <button
              class="primary-btn"
              data-action="calculate-price"
              type="button"
            >
              Calculate
            </button>

          </div>

          <div class="card">

            <h2>Result</h2>

            <div id="pricingResult" class="calculator-result">
              <p>Numbers ထည့်ပြီး Calculate ကိုနှိပ်ပါ။</p>
            </div>

          </div>

        </div>

        <div class="card">

          <h2>📌 Formula</h2>

          <div class="formula-box">
            <p><strong>Profit = Selling Price − Cost</strong></p>
            <p><strong>Gross Margin % = Profit ÷ Selling Price × 100</strong></p>
            <p><strong>Total Revenue = Selling Price × Quantity</strong></p>
            <p><strong>Total Cost = Cost × Quantity</strong></p>
          </div>

        </div>

      </section>
    `;
  }

  function calculatePrice() {
    const selling =
      Number(document.getElementById("calcSelling")?.value || 0);

    const cost =
      Number(document.getElementById("calcCost")?.value || 0);

    const qty =
      Number(document.getElementById("calcQty")?.value || 1);

    const result =
      document.getElementById("pricingResult");

    if (!result) return;

    if (selling <= 0 || cost < 0 || qty <= 0) {
      result.innerHTML = `
        <div class="empty-state">
          <p>မှန်ကန်တဲ့ Number တွေထည့်ပါ။</p>
        </div>
      `;
      return;
    }

    const profit = selling - cost;
    const margin = selling
      ? (profit / selling) * 100
      : 0;

    const revenue = selling * qty;
    const totalCost = cost * qty;
    const totalProfit = profit * qty;

    result.innerHTML = `
      <div class="result-grid">

        <div class="result-item">
          <span>Unit Profit</span>
          <strong>${profit.toLocaleString()}</strong>
        </div>

        <div class="result-item">
          <span>Margin</span>
          <strong>${margin.toFixed(2)}%</strong>
        </div>

        <div class="result-item">
          <span>Total Revenue</span>
          <strong>${revenue.toLocaleString()}</strong>
        </div>

        <div class="result-item">
          <span>Total Cost</span>
          <strong>${totalCost.toLocaleString()}</strong>
        </div>

        <div class="result-item">
          <span>Total Profit</span>
          <strong>${totalProfit.toLocaleString()}</strong>
        </div>

      </div>
    `;
  }

  /* =========================================================
     REPORTS
     ========================================================= */

  function renderReports() {
    const completed = getCompleted().length;

    content.innerHTML = `
      <section class="page-section">

        <div class="page-heading">
          <div>
            <h1>📈 Reports</h1>
            <p>Learning Performance နဲ့ Business Management Overview ကို ကြည့်ပါ။</p>
          </div>
        </div>

        <div class="stats-grid">

          <div class="stat-card">
            <div class="stat-icon">📚</div>
            <div>
              <div class="stat-label">Lessons</div>
              <div class="stat-value">${lessons.length}</div>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon">✅</div>
            <div>
              <div class="stat-label">Completed</div>
              <div class="stat-value">${completed}</div>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon">📊</div>
            <div>
              <div class="stat-label">Progress</div>
              <div class="stat-value">${getProgress()}%</div>
            </div>
          </div>

        </div>

        <div class="card">

          <h2>Business Manager KPI Framework</h2>

          <div class="kpi-grid">

            <div class="kpi-card">
              <strong>Revenue</strong>
              <span>Sales Value Growth</span>
            </div>

            <div class="kpi-card">
              <strong>Volume</strong>
              <span>Units / Cases Growth</span>
            </div>

            <div class="kpi-card">
              <strong>Distribution</strong>
              <span>Market Availability</span>
            </div>

            <div class="kpi-card">
              <strong>Productivity</strong>
              <span>Output per Resource</span>
            </div>

            <div class="kpi-card">
              <strong>Margin</strong>
              <span>Profitability</span>
            </div>

            <div class="kpi-card">
              <strong>Collection</strong>
              <span>Cash / AR Control</span>
            </div>

          </div>

        </div>

        <div class="card">

          <h2>Management Review Questions</h2>

          <ol class="aba-reader-list">
            <li>Target နဲ့ Actual ဘယ်လောက်ကွာသလဲ?</li>
            <li>Gap ရဲ့ Root Cause ဘာလဲ?</li>
            <li>ဘယ် Customer / Territory မှာ Opportunity ရှိသလဲ?</li>
            <li>ဘယ် Action က အမြန်ဆုံး Impact ပေးနိုင်သလဲ?</li>
            <li>Action ပြီးရင် KPI ဘယ်လိုပြောင်းသွားသလဲ?</li>
          </ol>

        </div>

      </section>
    `;
  }

  /* =========================================================
     AI BUSINESS COACH
     ========================================================= */

  function renderAIBusinessCoach() {
    content.innerHTML = `
      <section class="page-section">

        <div class="page-heading">
          <div>
            <h1>🤖 AI Business Coach</h1>
            <p>
              Business Problem တစ်ခုကို ရေးထည့်ပြီး
              Management Framework နဲ့ အကြံပြုချက်ရယူပါ။
            </p>
          </div>
        </div>

        <div class="card">

          <label class="form-label">
            သင့် Business Problem
          </label>

          <textarea
            id="coachQuestion"
            class="form-input textarea"
            rows="7"
            placeholder="ဥပမာ - Sales Target မရဘူး။ Team က Motivation ကျနေတယ်။ ဘာလုပ်သင့်လဲ?"
          ></textarea>

          <button
            class="primary-btn"
            data-action="coach"
            type="button"
          >
            🤖 Get Business Advice
          </button>

        </div>

        <div
          id="coachResult"
          class="card"
          style="display:none;"
        ></div>

        <div class="card">

          <h2>💡 Coach Framework</h2>

          <ol class="aba-reader-list">
            <li>Problem ကို Define လုပ်ပါ။</li>
            <li>Data နဲ့ Evidence စုပါ။</li>
            <li>Root Cause ရှာပါ။</li>
            <li>Options 2–3 ခု တည်ဆောက်ပါ။</li>
            <li>Impact နဲ့ Effort အလိုက် Priority ပေးပါ။</li>
            <li>Action + Owner + Deadline သတ်မှတ်ပါ။</li>
            <li>Result ကို Review လုပ်ပါ။</li>
          </ol>

        </div>

      </section>
    `;
  }

  function coachAnswer(question) {
    const q = question.toLowerCase();

    let focus = "Business Problem Solving";

    if (
      q.includes("sales") ||
      q.includes("ရောင်း") ||
      q.includes("target")
    ) {
      focus = "Sales Management";
    } else if (
      q.includes("team") ||
      q.includes("employee") ||
      q.includes("staff")
    ) {
      focus = "Leadership & People Management";
    } else if (
      q.includes("profit") ||
      q.includes("margin") ||
      q.includes("cost")
    ) {
      focus = "Finance & Profit Management";
    } else if (
      q.includes("customer") ||
      q.includes("client")
    ) {
      focus = "Customer Management";
    } else if (
      q.includes("marketing") ||
      q.includes("brand")
    ) {
      focus = "Marketing & Branding";
    }

    return `
      <h2>🤖 AI Business Coach Advice</h2>

      <p>
        သင့် Problem ကို <strong>${focus}</strong>
        Framework နဲ့ စဉ်းစားကြည့်ပါ။
      </p>

      <h3 style="margin-top:20px;">၁။ Problem ကို Data နဲ့ Define လုပ်ပါ</h3>

      <p>
        "မကောင်းဘူး" လို့ပဲ မသတ်မှတ်ဘဲ
        ဘယ် KPI က ဘယ်လောက်ကျသွားတယ်ဆိုတာ Number နဲ့ ရေးပါ။
      </p>

      <h3 style="margin-top:20px;">၂။ Root Cause ရှာပါ</h3>

      <p>
        People, Process, Product, Price, Customer,
        Competitor နဲ့ Market အခြေအနေတွေကို ခွဲပြီးစစ်ပါ။
      </p>

      <h3 style="margin-top:20px;">၃။ Action Plan</h3>

      <ol class="aba-reader-list">
        <li>အဓိက Problem ၁ ခုရွေးပါ။</li>
        <li>Root Cause ၁–၂ ခုသတ်မှတ်ပါ။</li>
        <li>Action ၃ ခုရေးပါ။</li>
        <li>Owner နဲ့ Deadline သတ်မှတ်ပါ။</li>
        <li>Weekly KPI နဲ့ Result ကို Review လုပ်ပါ။</li>
      </ol>

      <h3 style="margin-top:20px;">၄။ Manager Reminder</h3>

      <p>
        Problem ဖြစ်တိုင်း လူကို အပြစ်တင်တာထက်
        System နဲ့ Root Cause ကို အရင်စစ်ဆေးပါ။
        Data → Insight → Action → Result ဆိုတဲ့ Cycle ကို အသုံးပြုပါ။
      </p>
    `;
  }

  /* =========================================================
     AI TOOLS
     ========================================================= */

  function renderAITools() {
    content.innerHTML = `
      <section class="page-section">

        <div class="page-heading">
          <div>
            <h1>🛠 AI Tools</h1>
            <p>
              Daily Business Work ကို မြန်ဆန်အောင် ကူညီပေးမယ့်
              Local AI-style tools များ။
            </p>
          </div>
        </div>

        <div class="dashboard-grid">

          <div class="card">

            <h2>📝 Business Summary</h2>

            <textarea
              id="summaryInput"
              class="form-input textarea"
              rows="5"
              placeholder="Business Information ထည့်ပါ..."
            ></textarea>

            <button
              class="primary-btn"
              data-action="generate-summary"
              type="button"
            >
              Generate Summary
            </button>

            <div id="summaryOutput"></div>

          </div>

          <div class="card">

            <h2>📋 Action Plan Generator</h2>

            <textarea
              id="actionInput"
              class="form-input textarea"
              rows="5"
              placeholder="Problem / Goal ထည့်ပါ..."
            ></textarea>

            <button
              class="primary-btn"
              data-action="generate-action"
              type="button"
            >
              Generate Action Plan
            </button>

            <div id="actionOutput"></div>

          </div>

        </div>

        <div class="card">

          <h2>💼 Manager Prompt Ideas</h2>

          <ul class="aba-reader-list">
            <li>ဒီလ Sales Target မရနိုင်တဲ့ Root Cause ကို ဘယ်လိုရှာမလဲ?</li>
            <li>Sales Team Productivity ကို ဘယ်လိုတိုးမလဲ?</li>
            <li>Customer Retention တိုးဖို့ ဘာလုပ်သင့်လဲ?</li>
            <li>Gross Margin တိုးဖို့ ဘယ်လို Strategy သုံးမလဲ?</li>
            <li>Weekly Business Review ကို ဘယ်လိုတည်ဆောက်မလဲ?</li>
          </ul>

        </div>

      </section>
    `;
  }

  /* =========================================================
     SETTINGS
     ========================================================= */

  function renderSettings() {
    content.innerHTML = `
      <section class="page-section">

        <div class="page-heading">
          <div>
            <h1>⚙️ Settings</h1>
            <p>Aung Business Academy App Settings</p>
          </div>
        </div>

        <div class="card">

          <h2>👤 Profile</h2>

          <div class="profile-settings">

            <div class="profile-avatar large">
              A
            </div>

            <div>
              <h3>Aung Zar Ni Win</h3>
              <p>Business Manager</p>
            </div>

          </div>

        </div>

        <div class="card">

          <h2>📚 Academy Information</h2>

          <div class="settings-list">

            <div class="setting-row">
              <span>Application</span>
              <strong>${APP.name}</strong>
            </div>

            <div class="setting-row">
              <span>Version</span>
              <strong>${APP.version}</strong>
            </div>

            <div class="setting-row">
              <span>Total Lessons</span>
              <strong>${lessons.length}</strong>
            </div>

            <div class="setting-row">
              <span>Categories</span>
              <strong>${courseData.length}</strong>
            </div>

            <div class="setting-row">
              <span>Language</span>
              <strong>Myanmar / Burmese</strong>
            </div>

          </div>

        </div>

        <div class="card danger-zone">

          <h2>Reset Data</h2>

          <p>
            Learning Progress ကို Reset လုပ်နိုင်ပါတယ်။
          </p>

          <button
            class="danger-btn"
            data-action="reset-progress"
            type="button"
          >
            Reset Learning Progress
          </button>

        </div>

      </section>
    `;
  }

  /* =========================================================
     AI TOOL ACTIONS
     ========================================================= */

  function generateSummary() {
    const input =
      document.getElementById("summaryInput");

    const output =
      document.getElementById("summaryOutput");

    if (!input || !output) return;

    const text = input.value.trim();

    if (!text) {
      output.innerHTML = `
        <div class="empty-state">
          အကြောင်းအရာ ထည့်ပေးပါ။
        </div>
      `;
      return;
    }

    output.innerHTML = `
      <div class="aba-reader-card aba-highlight" style="margin-top:18px;">
        <h3>📝 Business Summary</h3>

        <p>
          ${esc(text)}
        </p>

        <hr style="margin:18px 0;border:0;border-top:1px solid #e5e7eb;">

        <p>
          <strong>Manager Summary:</strong><br>
          အထက်ပါအကြောင်းအရာကို Business Objective,
          Current Situation, Key Issue, Opportunity,
          Risk နဲ့ Next Action ဆိုပြီး ခွဲခြမ်းစဉ်းစားနိုင်ပါတယ်။
        </p>
      </div>
    `;
  }

  function generateActionPlan() {
    const input =
      document.getElementById("actionInput");

    const output =
      document.getElementById("actionOutput");

    if (!input || !output) return;

    const text = input.value.trim();

    if (!text) {
      output.innerHTML = `
        <div class="empty-state">
          Goal သို့မဟုတ် Problem ထည့်ပေးပါ။
        </div>
      `;
      return;
    }

    output.innerHTML = `
      <div class="aba-reader-card aba-action" style="margin-top:18px;">

        <h3>🚀 Action Plan</h3>

        <p><strong>Goal / Problem:</strong> ${esc(text)}</p>

        <ol class="aba-reader-list">
          <li>Problem / Goal ကို တိတိကျကျ Define လုပ်ပါ။</li>
          <li>လက်ရှိ Data နဲ့ Baseline သတ်မှတ်ပါ။</li>
          <li>Root Cause ကို ရှာပါ။</li>
          <li>Action 3 ခု သတ်မှတ်ပါ။</li>
          <li>Owner နဲ့ Deadline သတ်မှတ်ပါ။</li>
          <li>KPI တစ်ခုချင်းစီ သတ်မှတ်ပါ။</li>
          <li>Weekly Review လုပ်ပြီး Improve လုပ်ပါ။</li>
        </ol>

      </div>
    `;
  }

  /* =========================================================
     EVENT DELEGATION
     ========================================================= */

  document.addEventListener("click", event => {

    const nav = event.target.closest(".nav-item");

    if (nav) {
      navigate(nav.dataset.section);
      return;
    }

    const lessonCard =
      event.target.closest("[data-lesson-id]");

    const action =
      event.target.closest("[data-action]");

    if (lessonCard && lessonCard.dataset.action === "open-lesson") {
      renderLesson(lessonCard.dataset.lessonId);
      return;
    }

    if (lessonCard && !action) {
      renderLesson(lessonCard.dataset.lessonId);
      return;
    }

    if (!action) return;

    const type = action.dataset.action;

    switch (type) {

      case "continue-learning": {
        const current = getCurrentLesson();

        if (isCompleted(current.id)) {
          const index =
            lessons.findIndex(x => x.id === current.id);

          const next =
            lessons[index + 1] || lessons[0];

          renderLesson(next.id);
        } else {
          renderLesson(current.id);
        }

        break;
      }

      case "view-lessons":
        navigate("lessons");
        break;

      case "go-progress":
        navigate("progress");
        break;

      case "back-lessons":
        navigate("lessons");
        break;

      case "open-lesson":
        renderLesson(action.dataset.lessonId);
        break;

      case "toggle-complete": {

        const id = action.dataset.lessonId;

        if (isCompleted(id)) {
          unmarkCompleted(id);
        } else {
          markCompleted(id);
        }

        renderLesson(id);
        break;
      }

      case "reset-progress":

        if (
          confirm(
            "Learning Progress အားလုံးကို Reset လုပ်မလား?"
          )
        ) {
          resetProgress();
          navigate("progress");
        }

        break;

      case "calculate-price":
        calculatePrice();
        break;

      case "coach": {

        const input =
          document.getElementById("coachQuestion");

        const result =
          document.getElementById("coachResult");

        if (!input || !result) return;

        const question =
          input.value.trim();

        if (!question) {
          result.style.display = "block";
          result.innerHTML = `
            <div class="empty-state">
              Business Problem တစ်ခု ရေးထည့်ပါ။
            </div>
          `;
          return;
        }

        result.style.display = "block";
        result.innerHTML = coachAnswer(question);

        break;
      }

      case "generate-summary":
        generateSummary();
        break;

      case "generate-action":
        generateActionPlan();
        break;
    }
  });

  /* =========================================================
     CATEGORY CARD EVENT
     ========================================================= */

  document.addEventListener("click", event => {

    const category =
      event.target.closest("[data-category]");

    if (!category) return;

    const id = category.dataset.category;

    navigate("lessons");

    setTimeout(() => {
      const select =
        document.getElementById("lessonCategory");

      if (select) {
        select.value = id;
        renderLessons(id, "");
      }
    }, 50);
  });

  /* =========================================================
     PUBLIC API
     ========================================================= */

  window.AungBusinessAcademy = {

    version: APP.version,

    lessons,

    courses: courseData,

    getProgress,

    getCompleted,

    markCompleted,

    unmarkCompleted,

    resetProgress,

    openLesson: renderLesson,

    navigate,

    getLessonContent,

    getLessonImage
  };

  /* =========================================================
     INITIALIZE
     ========================================================= */

  renderDashboard();

})();
