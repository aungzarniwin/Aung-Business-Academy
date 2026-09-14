/* =========================================================
   AUNG BUSINESS ACADEMY V8.0 PROFESSIONAL
   230 BURMESE BUSINESS LESSONS
   Complete app.js
   ========================================================= */

(function () {
  "use strict";

  /* =========================================================
     STORAGE
     ========================================================= */

  const STORAGE_KEY = "aba_completed_lessons";

  function getCompleted() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (e) {
      return [];
    }
  }

  function saveCompleted(list) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }

  let completedLessons = getCompleted();

  /* =========================================================
     CATEGORY DATA
     20 CATEGORIES / 230 LESSONS
     ========================================================= */

  const categories = [
    {
      key: "business",
      icon: "🏢",
      name: "Business Fundamentals",
      count: 15,
      description: "လုပ်ငန်းအခြေခံ၊ Business Model၊ Customer နှင့် Value Creation"
    },
    {
      key: "strategy",
      icon: "🎯",
      name: "Business Strategy",
      count: 15,
      description: "Strategy၊ Planning၊ Market Positioning နှင့် Competitive Advantage"
    },
    {
      key: "sales-management",
      icon: "💼",
      name: "Sales Management",
      count: 20,
      description: "Sales Team၊ Target၊ Territory၊ Forecast နှင့် Execution"
    },
    {
      key: "sales-skills",
      icon: "🤝",
      name: "Sales Skills",
      count: 20,
      description: "Selling၊ Prospecting၊ Presentation၊ Objection နှင့် Closing"
    },
    {
      key: "customer",
      icon: "👥",
      name: "Customer Management",
      count: 15,
      description: "Customer Relationship၊ Retention နှင့် Customer Value"
    },
    {
      key: "marketing",
      icon: "📣",
      name: "Marketing",
      count: 20,
      description: "Marketing Strategy၊ Consumer၊ Promotion နှင့် Digital Marketing"
    },
    {
      key: "branding",
      icon: "🏷️",
      name: "Branding",
      count: 10,
      description: "Brand Identity၊ Positioning နှင့် Brand Equity"
    },
    {
      key: "finance",
      icon: "💰",
      name: "Finance",
      count: 15,
      description: "Revenue၊ Cost၊ Profit၊ Cash Flow နှင့် Financial Thinking"
    },
    {
      key: "accounting",
      icon: "📊",
      name: "Accounting & P&L",
      count: 10,
      description: "P&L၊ Gross Profit၊ AR၊ Inventory နှင့် Financial Reports"
    },
    {
      key: "operations",
      icon: "📦",
      name: "Distribution & Operations",
      count: 15,
      description: "Distribution၊ Stock၊ Route-to-Market နှင့် Operational Excellence"
    },
    {
      key: "modern-trade",
      icon: "🏪",
      name: "Retail & Modern Trade",
      count: 10,
      description: "Modern Trade၊ Retail Execution နှင့် Key Store Management"
    },
    {
      key: "kam",
      icon: "🤝",
      name: "Key Account Management",
      count: 10,
      description: "Key Account Strategy၊ Joint Business Plan နှင့် Account Growth"
    },
    {
      key: "leadership",
      icon: "👨‍💼",
      name: "Leadership & Management",
      count: 15,
      description: "Leadership၊ Coaching၊ Delegation နှင့် Performance Management"
    },
    {
      key: "people",
      icon: "👥",
      name: "People & HR",
      count: 10,
      description: "Recruitment၊ Training၊ Motivation နှင့် People Development"
    },
    {
      key: "negotiation",
      icon: "🗣️",
      name: "Negotiation",
      count: 10,
      description: "Negotiation Strategy၊ Bargaining နှင့် Win-Win Agreement"
    },
    {
      key: "business-development",
      icon: "💡",
      name: "Business Development",
      count: 10,
      description: "New Business၊ Partnership၊ Growth Opportunity နှင့် Expansion"
    },
    {
      key: "kpi",
      icon: "📈",
      name: "KPI & Data Analysis",
      count: 10,
      description: "KPI၊ Dashboard၊ Reporting နှင့် Data-driven Decision Making"
    },
    {
      key: "problem-solving",
      icon: "🧠",
      name: "Problem Solving & Decision Making",
      count: 10,
      description: "Root Cause၊ Analysis၊ Decision နှင့် Corrective Action"
    },
    {
      key: "ai",
      icon: "🤖",
      name: "Digital Business & AI",
      count: 10,
      description: "Digital Business၊ AI၊ Automation နှင့် Modern Work"
    },
    {
      key: "productivity",
      icon: "🚀",
      name: "Productivity & Career",
      count: 10,
      description: "Goal Setting၊ Time Management၊ Career နှင့် Professional Growth"
    }
  ];

  /* =========================================================
     LESSON TITLES
     ========================================================= */

  const lessonTitles = {

    business: [
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
    ],

    strategy: [
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
    ],

    "sales-management": [
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
    ],

    "sales-skills": [
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
    ],

    customer: [
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
    ],

    marketing: [
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
    ],

    branding: [
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
    ],

    finance: [
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
    ],

    accounting: [
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
    ],

    operations: [
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
    ],

    "modern-trade": [
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
    ],

    kam: [
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
    ],

    leadership: [
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
    ],

    people: [
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
    ],

    negotiation: [
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
    ],

    "business-development": [
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
    ],

    kpi: [
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
    ],

    "problem-solving": [
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
    ],

    ai: [
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
    ],

    productivity: [
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
  };

  /* =========================================================
     BUILD 230 LESSONS
     ========================================================= */

  const lessons = [];

  let lessonNumber = 1;

  categories.forEach(function (category) {
    const titles = lessonTitles[category.key] || [];

    titles.forEach(function (title, index) {
      lessons.push({
        id: "lesson-" + lessonNumber,
        number: lessonNumber,
        categoryKey: category.key,
        category: category.name,
        icon: category.icon,
        title: title,
        description:
          title +
          " ကို Business Manager / Sales Manager တစ်ယောက်အနေနဲ့ လက်တွေ့အသုံးချနိုင်အောင် အခြေခံမှ လက်တွေ့အထိ လေ့လာရန်။",
        order: index + 1
      });

      lessonNumber++;
    });
  });

  /* =========================================================
     CONTENT GENERATOR
     ========================================================= */

  function getLessonContent(lesson) {

    const category = lesson.category;

    const details = [

      {
        heading: "၁။ အခြေခံအယူအဆ",
        text:
          lesson.title +
          " သည် " +
          category +
          " အတွင်းမှာ အရေးကြီးတဲ့ Management Skill တစ်ခုဖြစ်ပါတယ်။ " +
          "လုပ်ငန်းမှာ အလုပ်တစ်ခုကို သိထားရုံနဲ့ မလုံလောက်ဘဲ ဘယ်အချိန်မှာ၊ ဘယ်သူက၊ ဘယ်လိုလုပ်ရမလဲဆိုတာကို စနစ်တကျ စီမံနိုင်ရပါမယ်။"
      },

      {
        heading: "၂။ ဘာကြောင့်အရေးကြီးသလဲ",
        text:
          "Manager တစ်ယောက်အနေနဲ့ ဆုံးဖြတ်ချက်တွေကို ခံစားချက်နဲ့ပဲ မလုပ်သင့်ပါဘူး။ " +
          "Customer၊ Market၊ People၊ Numbers နဲ့ Execution ကို ဆက်စပ်စဉ်းစားရပါမယ်။ " +
          lesson.title +
          " ကို ကောင်းကောင်းနားလည်ထားရင် အလုပ်ရလဒ်ကောင်းလာပြီး အချိန်၊ ငွေကြေးနဲ့ လူအင်အားကို ပိုမိုထိရောက်စွာ အသုံးချနိုင်ပါတယ်။"
      },

      {
        heading: "၃။ Manager တစ်ယောက်အနေနဲ့ ဘယ်လိုစဉ်းစားမလဲ",
        text:
          "အရင်ဆုံး လက်ရှိအခြေအနေကို အချက်အလက်နဲ့ကြည့်ပါ။ " +
          "ပြီးရင် ပြဿနာ၊ အခွင့်အရေးနဲ့ လိုချင်တဲ့ရလဒ်ကို ခွဲခြားပါ။ " +
          "နောက်ဆုံးမှာ Action၊ Owner၊ Deadline နဲ့ Measurement ကို သတ်မှတ်ပါ။ " +
          "ဒီနည်းလမ်းက Sales၊ Marketing၊ Finance နဲ့ People Management အားလုံးမှာ အသုံးဝင်ပါတယ်။"
      },

      {
        heading: "၄။ လက်တွေ့ Business Example",
        text:
          "ဥပမာအားဖြင့် Sales Team တစ်ခုမှာ ရောင်းအား Target မပြည့်ဘူးဆိုပါစို့။ " +
          "Target မပြည့်တာကို အပြစ်တင်ရုံနဲ့ မပြီးပါဘူး။ " +
          "Customer Coverage၊ Outlet Availability၊ Sales Call၊ Conversion၊ Product Mix၊ Price၊ Competition နဲ့ Team Capability တွေကို စစ်ဆေးရပါမယ်။ " +
          "အကြောင်းရင်းကို သိပြီးမှ Corrective Action ချမှတ်ရပါမယ်။"
      },

      {
        heading: "၅။ လက်တွေ့အသုံးချနည်း",
        text:
          "ဒီသင်ခန်းစာကို လက်တွေ့အသုံးချရာမှာ ပထမဆုံး လက်ရှိလုပ်ငန်းအခြေအနေကို ရေးပါ။ " +
          "ဒုတိယအဆင့်မှာ ပြဿနာ သို့မဟုတ် Opportunity ကို သတ်မှတ်ပါ။ " +
          "တတိယအဆင့်မှာ Action Plan တည်ဆောက်ပါ။ " +
          "နောက်ဆုံးမှာ KPI တစ်ခု သို့မဟုတ် ရလဒ်တစ်ခုနဲ့ တိုင်းတာပါ။"
      }
    ];

    return {
      objective:
        lesson.title +
        " ကို နားလည်ပြီး မိမိလုပ်ငန်းမှာ လက်တွေ့အသုံးချနိုင်ရန်။",

      overview:
        "ဒီသင်ခန်းစာမှာ " +
        lesson.title +
        " ရဲ့ အဓိကအယူအဆ၊ Managerial Thinking၊ Business Example နဲ့ လက်တွေ့ Action Plan ကို လေ့လာပါမယ်။",

      keyPoints: [
        "အဓိက Concept ကို နားလည်ပါ",
        "Business Situation နဲ့ ဆက်စပ်စဉ်းစားပါ",
        "Numbers နှင့် Facts ကို အသုံးပြုပါ",
        "People + Process + Performance ကို ဆက်စပ်ပါ",
        "Action Plan တစ်ခု အမြဲထားပါ",
        "Result ကို KPI နဲ့ တိုင်းတာပါ"
      ],

      details: details,

      managerTips: [
        "အလုပ်ကို ကိုယ်တိုင်အားလုံးလုပ်မယ့်အစား Team ကို စနစ်တကျ ဦးဆောင်ပါ။",
        "Expectation ကို ရှင်းရှင်းလင်းလင်း သတ်မှတ်ပါ။",
        "Data နဲ့ ဆုံးဖြတ်ချက်ချပါ။",
        "ပြဿနာဖြစ်ပြီးမှ စောင့်မနေဘဲ ကြိုတင်ကာကွယ်ပါ။",
        "Follow-up မရှိတဲ့ Action Plan က အကောင်အထည်မဖော်နိုင်ပါ။"
      ],

      mistakes: [
        "အချက်အလက်မရှိဘဲ ခန့်မှန်းဆုံးဖြတ်ခြင်း",
        "Problem ရဲ့ Root Cause မရှာဘဲ ဖြေရှင်းခြင်း",
        "Target သတ်မှတ်ပြီး Follow-up မလုပ်ခြင်း",
        "Team ကို အပြစ်တင်ခြင်းသာလုပ်ပြီး Coaching မလုပ်ခြင်း",
        "Result မတိုင်းတာဘဲ အလုပ်ပြီးပြီလို့ ယူဆခြင်း"
      ],

      actionPlan: [
        "လက်ရှိအခြေအနေကို ရေးပါ။",
        "အဓိက Problem သို့မဟုတ် Opportunity တစ်ခုရွေးပါ။",
        "လိုချင်တဲ့ Result ကို သတ်မှတ်ပါ။",
        "လုပ်ဆောင်ရမယ့် Action ၃ ခု ရေးပါ။",
        "Action တစ်ခုချင်းစီအတွက် Owner သတ်မှတ်ပါ။",
        "Deadline သတ်မှတ်ပါ။",
        "KPI နဲ့ Result ကို ပြန်တိုင်းတာပါ။"
      ],

      checklist: [
        "Concept ကို နားလည်ပြီ",
        "Business Example ကို နားလည်ပြီ",
        "မိမိလုပ်ငန်းနဲ့ ဆက်စပ်စဉ်းစားပြီးပြီ",
        "Action Plan ရေးပြီးပြီ",
        "KPI သတ်မှတ်ပြီးပြီ"
      ],

      knowledgeCheck: [
        "ဒီ Concept ကို ကိုယ့်လုပ်ငန်းမှာ ဘယ်နေရာမှာ အသုံးချနိုင်မလဲ?",
        "လက်ရှိအကြီးမားဆုံး Problem က ဘာလဲ?",
        "Problem ရဲ့ Root Cause က ဘာဖြစ်နိုင်လဲ?",
        "ဘယ် KPI နဲ့ တိုင်းတာမလဲ?"
      ],

      summary:
        lesson.title +
        " ကို သိထားရုံမဟုတ်ဘဲ လက်တွေ့လုပ်ငန်းမှာ အသုံးချနိုင်ဖို့ အရေးကြီးပါတယ်။ " +
        "Manager က People + Numbers + Execution သုံးခုကို တစ်ပြိုင်နက်တည်း စီမံနိုင်ရင် Business Performance ပိုကောင်းလာနိုင်ပါတယ်။"
    };
  }

  /* =========================================================
     APP HELPERS
     ========================================================= */

  const content = document.getElementById("app-content");
  const headerTitle = document.getElementById("headerTitle");

  function escapeHTML(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function isCompleted(id) {
    return completedLessons.indexOf(id) !== -1;
  }

  function progressPercent() {
    if (!lessons.length) return 0;
    return Math.round((completedLessons.length / lessons.length) * 100);
  }

  function updateActiveNav(section) {
    document.querySelectorAll(".nav-item").forEach(function (item) {
      item.classList.remove("active");
    });

    const active = document.querySelector(
      '.nav-item[data-section="' + section + '"]'
    );

    if (active) active.classList.add("active");
  }

  function setHeader(title) {
    if (headerTitle) headerTitle.textContent = title;
  }

  /* =========================================================
     MOBILE / EXTRA CSS
     ========================================================= */

  function injectExtraCSS() {
    if (document.getElementById("aba-extra-css")) return;

    const style = document.createElement("style");
    style.id = "aba-extra-css";

    style.textContent = `
      html,
      body {
        width: 100%;
        max-width: 100%;
        overflow-x: hidden !important;
      }

      * {
        max-width: 100%;
      }

      .content {
        width: 100%;
        max-width: 100%;
        overflow-x: hidden;
      }

      .aba-dashboard,
      .aba-page,
      .aba-reader {
        width: 100%;
        max-width: 100%;
        overflow-x: hidden;
      }

      .aba-hero {
        background: linear-gradient(135deg, #111827, #1f2937);
        color: white;
        border-radius: 20px;
        padding: 28px;
        margin-bottom: 20px;
      }

      .aba-hero h1 {
        font-size: 30px;
        line-height: 1.3;
        margin-bottom: 10px;
      }

      .aba-hero p {
        opacity: .9;
        line-height: 1.7;
        margin: 0;
      }

      .aba-stats {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 14px;
        margin-bottom: 22px;
      }

      .aba-stat {
        background: #fff;
        border: 1px solid #e5e7eb;
        border-radius: 16px;
        padding: 18px;
        min-width: 0;
      }

      .aba-stat-icon {
        font-size: 24px;
        margin-bottom: 8px;
      }

      .aba-stat-number {
        font-size: 26px;
        font-weight: 800;
        color: #111827;
      }

      .aba-stat-label {
        color: #6b7280;
        font-size: 13px;
        margin-top: 4px;
      }

      .aba-course-card {
        background: white;
        border: 1px solid #e5e7eb;
        border-radius: 20px;
        padding: 24px;
        margin-bottom: 24px;
      }

      .aba-course-top {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        align-items: flex-start;
      }

      .aba-course-title {
        font-size: 22px;
        font-weight: 800;
        color: #111827;
        margin-bottom: 8px;
      }

      .aba-course-description {
        color: #6b7280;
        line-height: 1.7;
      }

      .aba-progress {
        height: 9px;
        background: #e5e7eb;
        border-radius: 999px;
        overflow: hidden;
        margin: 14px 0;
      }

      .aba-progress-bar {
        height: 100%;
        background: #111827;
        border-radius: 999px;
      }

      .aba-buttons {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
      }

      .aba-btn {
        border: 0;
        border-radius: 10px;
        padding: 11px 16px;
        font-weight: 700;
        cursor: pointer;
      }

      .aba-btn-primary {
        background: #111827;
        color: white;
      }

      .aba-btn-light {
        background: #f3f4f6;
        color: #111827;
      }

      .aba-section-title {
        font-size: 20px;
        font-weight: 800;
        color: #111827;
        margin: 25px 0 14px;
      }

      .aba-focus-grid,
      .aba-category-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 14px;
      }

      .aba-focus-card {
        background: white;
        border: 1px solid #e5e7eb;
        border-radius: 15px;
        padding: 17px;
        font-weight: 700;
        line-height: 1.5;
      }

      .aba-category-card {
        background: white;
        border: 1px solid #e5e7eb;
        border-radius: 18px;
        padding: 20px;
        cursor: pointer;
        transition: .2s;
      }

      .aba-category-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(0,0,0,.08);
      }

      .aba-category-icon {
        font-size: 30px;
        margin-bottom: 10px;
      }

      .aba-category-name {
        font-size: 17px;
        font-weight: 800;
        color: #111827;
        line-height: 1.4;
      }

      .aba-category-count {
        font-size: 13px;
        color: #6b7280;
        margin-top: 5px;
      }

      .aba-category-description {
        color: #6b7280;
        font-size: 13px;
        line-height: 1.5;
        margin-top: 8px;
      }

      .aba-filter-row {
        display: flex;
        gap: 8px;
        overflow-x: auto;
        padding-bottom: 8px;
        margin-bottom: 15px;
      }

      .aba-filter {
        flex: 0 0 auto;
        border: 1px solid #d1d5db;
        background: white;
        border-radius: 999px;
        padding: 9px 14px;
        cursor: pointer;
        font-weight: 600;
      }

      .aba-filter.active {
        background: #111827;
        color: white;
        border-color: #111827;
      }

      .aba-search {
        width: 100%;
        padding: 13px 15px;
        border: 1px solid #d1d5db;
        border-radius: 12px;
        margin-bottom: 15px;
        outline: none;
        font-size: 15px;
      }

      .aba-lesson-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;
      }

      .aba-lesson-card {
        background: white;
        border: 1px solid #e5e7eb;
        border-radius: 17px;
        padding: 19px;
        cursor: pointer;
        min-width: 0;
      }

      .aba-lesson-number {
        font-size: 12px;
        color: #6b7280;
        margin-bottom: 7px;
      }

      .aba-lesson-title {
        font-size: 17px;
        font-weight: 800;
        color: #111827;
        line-height: 1.5;
      }

      .aba-lesson-category {
        font-size: 12px;
        color: #6b7280;
        margin-top: 8px;
      }

      .aba-completed {
        display: inline-block;
        background: #dcfce7;
        color: #166534;
        border-radius: 999px;
        padding: 5px 9px;
        font-size: 11px;
        font-weight: 700;
        margin-top: 10px;
      }

      .aba-reader {
        background: white;
        border-radius: 20px;
        padding: 26px;
        border: 1px solid #e5e7eb;
      }

      .aba-reader-head {
        margin-bottom: 25px;
      }

      .aba-reader-category {
        color: #6b7280;
        font-size: 13px;
        margin-bottom: 8px;
      }

      .aba-reader h1 {
        font-size: 30px;
        line-height: 1.4;
        margin: 0 0 10px;
        color: #111827;
      }

      .aba-reader-content {
        width: 100%;
        overflow-wrap: anywhere;
        line-height: 1.85;
        color: #374151;
      }

      .aba-detail-section {
        margin: 22px 0;
        padding: 20px;
        background: #f9fafb;
        border-radius: 15px;
        overflow-wrap: anywhere;
      }

      .aba-detail-section h3 {
        margin-bottom: 10px;
        color: #111827;
      }

      .aba-detail-section p {
        margin: 0;
        overflow-wrap: anywhere;
      }

      .aba-list {
        padding-left: 22px;
      }

      .aba-list li {
        margin-bottom: 9px;
      }

      .aba-reader-actions {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        flex-wrap: wrap;
        margin-bottom: 20px;
      }

      .aba-nav-buttons {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }

      .aba-kpi-grid {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 14px;
      }

      .aba-kpi-card {
        background: white;
        border: 1px solid #e5e7eb;
        border-radius: 15px;
        padding: 18px;
      }

      .aba-form-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;
      }

      .aba-form-group {
        margin-bottom: 14px;
      }

      .aba-form-group label {
        display: block;
        font-weight: 700;
        margin-bottom: 7px;
      }

      .aba-form-group input,
      .aba-form-group select,
      .aba-form-group textarea {
        width: 100%;
        padding: 12px;
        border: 1px solid #d1d5db;
        border-radius: 10px;
        font: inherit;
      }

      .aba-result {
        background: #f3f4f6;
        border-radius: 14px;
        padding: 18px;
        margin-top: 15px;
        line-height: 1.8;
      }

      @media (max-width: 768px) {

        .main {
          width: 100%;
          max-width: 100%;
        }

        .content {
          padding: 14px !important;
        }

        .main-header {
          padding-left: 14px !important;
          padding-right: 14px !important;
        }

        .header-right .badge {
          display: none;
        }

        .aba-hero {
          padding: 21px 18px;
          border-radius: 16px;
        }

        .aba-hero h1 {
          font-size: 23px;
        }

        .aba-stats {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }

        .aba-stat {
          padding: 14px;
        }

        .aba-stat-number {
          font-size: 22px;
        }

        .aba-course-card {
          padding: 18px;
          border-radius: 16px;
        }

        .aba-course-top {
          display: block;
        }

        .aba-course-title {
          font-size: 19px;
        }

        .aba-focus-grid,
        .aba-category-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }

        .aba-category-card {
          padding: 15px;
        }

        .aba-category-icon {
          font-size: 25px;
        }

        .aba-category-name {
          font-size: 14px;
        }

        .aba-category-description {
          font-size: 12px;
        }

        .aba-lesson-grid {
          grid-template-columns: 1fr;
        }

        .aba-reader {
          padding: 18px;
          border-radius: 16px;
        }

        .aba-reader h1 {
          font-size: 23px;
        }

        .aba-detail-section {
          padding: 15px;
        }

        .aba-kpi-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .aba-form-grid {
          grid-template-columns: 1fr;
        }
      }

      @media (max-width: 480px) {

        .content {
          padding: 10px !important;
        }

        .aba-stats {
          gap: 8px;
        }

        .aba-stat {
          padding: 12px;
        }

        .aba-stat-icon {
          font-size: 20px;
        }

        .aba-stat-number {
          font-size: 20px;
        }

        .aba-focus-grid,
        .aba-category-grid {
          grid-template-columns: 1fr;
        }

        .aba-focus-card {
          padding: 14px;
        }

        .aba-category-card {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .aba-category-icon {
          margin: 0;
          flex: 0 0 auto;
        }

        .aba-category-description {
          display: none;
        }

        .aba-reader-actions {
          display: block;
        }

        .aba-reader-actions .aba-btn {
          width: 100%;
          margin-bottom: 8px;
        }

        .aba-nav-buttons {
          width: 100%;
        }

        .aba-nav-buttons .aba-btn {
          flex: 1;
        }

        .aba-kpi-grid {
          grid-template-columns: 1fr;
        }
      }
    `;

    document.head.appendChild(style);
  }

  /* =========================================================
     DASHBOARD
     ========================================================= */

  function renderDashboard() {
    setHeader("Aung Business Academy");
    updateActiveNav("dashboard");

    const progress = progressPercent();

    content.innerHTML = `
      <div class="aba-dashboard">

        <section class="aba-hero">
          <h1>Welcome back, Aung Zar Ni Win 👋</h1>
          <p>
            Aung Business Academy မှာ Business Management နဲ့
            Sales Management Skill တွေကို တစ်ဆင့်ချင်း လေ့လာနိုင်ပါတယ်။
          </p>
        </section>

        <section class="aba-stats">

          <div class="aba-stat">
            <div class="aba-stat-icon">📚</div>
            <div class="aba-stat-number">20</div>
            <div class="aba-stat-label">Business Categories</div>
          </div>

          <div class="aba-stat">
            <div class="aba-stat-icon">📖</div>
            <div class="aba-stat-number">${lessons.length}</div>
            <div class="aba-stat-label">Total Lessons</div>
          </div>

          <div class="aba-stat">
            <div class="aba-stat-icon">✅</div>
            <div class="aba-stat-number">${completedLessons.length}</div>
            <div class="aba-stat-label">Completed Lessons</div>
          </div>

          <div class="aba-stat">
            <div class="aba-stat-icon">📈</div>
            <div class="aba-stat-number">${progress}%</div>
            <div class="aba-stat-label">Overall Progress</div>
          </div>

        </section>

        <section class="aba-course-card">

          <div class="aba-course-top">

            <div>
              <div class="aba-course-title">
                Sales Management Mastery
              </div>

              <div class="aba-course-description">
                Business Foundation ကနေ Sales Manager Action Plan အထိ
                အခြေခံကနေ လက်တွေ့အသုံးချနိုင်တဲ့ Knowledge တွေကို
                လေ့လာပါ။
              </div>
            </div>

          </div>

          <div style="margin-top:20px;font-weight:700;">
            Course Progress
          </div>

          <div class="aba-progress">
            <div
              class="aba-progress-bar"
              style="width:${progress}%"
            ></div>
          </div>

          <div style="font-weight:800;margin-bottom:14px;">
            ${progress}%
          </div>

          <div class="aba-buttons">

            <button
              class="aba-btn aba-btn-primary"
              data-action="continue-learning"
              type="button"
            >
              Continue Learning
            </button>

            <button
              class="aba-btn aba-btn-light"
              data-action="view-lessons"
              type="button"
            >
              View All Lessons
            </button>

          </div>

        </section>

        <h2 class="aba-section-title">
          🎯 Your Learning Focus
        </h2>

        <section class="aba-focus-grid">

          <div class="aba-focus-card">
            💼 Business & Strategic Thinking
          </div>

          <div class="aba-focus-card">
            📈 Sales & Customer Management
          </div>

          <div class="aba-focus-card">
            🤝 Negotiation & Leadership
          </div>

          <div class="aba-focus-card">
            📊 KPI & Performance Management
          </div>

          <div class="aba-focus-card">
            🧠 Problem Solving
          </div>

          <div class="aba-focus-card">
            🎯 Sales Manager Action Planning
          </div>

        </section>

        <h2 class="aba-section-title">
          📚 Business Academy Categories
        </h2>

        <section class="aba-category-grid">

          ${categories.map(function (cat) {
            return `
              <div
                class="aba-category-card"
                data-category="${cat.key}"
              >
                <div class="aba-category-icon">${cat.icon}</div>

                <div>
                  <div class="aba-category-name">
                    ${cat.name}
                  </div>

                  <div class="aba-category-count">
                    ${cat.count} Lessons
                  </div>

                  <div class="aba-category-description">
                    ${cat.description}
                  </div>
                </div>
              </div>
            `;
          }).join("")}

        </section>

      </div>
    `;
  }

  /* =========================================================
     LESSON LIST
     ========================================================= */

  function renderLessons(categoryKey, searchText) {
    setHeader("Lessons");
    updateActiveNav("lessons");

    const search = (searchText || "").toLowerCase().trim();

    let filtered = lessons;

    if (categoryKey) {
      filtered = filtered.filter(function (lesson) {
        return lesson.categoryKey === categoryKey;
      });
    }

    if (search) {
      filtered = filtered.filter(function (lesson) {
        return (
          lesson.title.toLowerCase().includes(search) ||
          lesson.category.toLowerCase().includes(search)
        );
      });
    }

    content.innerHTML = `
      <div class="aba-page">

        <h1 style="margin-bottom:7px;">
          📖 Lessons
        </h1>

        <p style="color:#6b7280;margin-bottom:18px;">
          Business Management မှ Sales, Marketing, Finance,
          Leadership နှင့် AI အထိ သင်ခန်းစာ ${lessons.length} ခု
          လေ့လာနိုင်ပါတယ်။
        </p>

        <input
          id="lessonSearch"
          class="aba-search"
          type="search"
          placeholder="🔎 သင်ခန်းစာ ရှာရန်..."
          value="${escapeHTML(searchText || "")}"
        >

        <div class="aba-filter-row">

          <button
            class="aba-filter ${!categoryKey ? "active" : ""}"
            data-category-filter=""
            type="button"
          >
            အားလုံး (${lessons.length})
          </button>

          ${categories.map(function (cat) {
            return `
              <button
                class="aba-filter ${
                  categoryKey === cat.key ? "active" : ""
                }"
                data-category-filter="${cat.key}"
                type="button"
              >
                ${cat.icon} ${cat.name}
              </button>
            `;
          }).join("")}

        </div>

        <div style="margin-bottom:12px;color:#6b7280;">
          ${filtered.length} Lessons ပြသထားသည်
        </div>

        <div class="aba-lesson-grid">

          ${
            filtered.length
              ? filtered.map(renderLessonCard).join("")
              : `
                <div style="padding:30px;background:white;border-radius:15px;">
                  သင်ခန်းစာ မတွေ့ပါ။
                </div>
              `
          }

        </div>

      </div>
    `;

    const searchInput = document.getElementById("lessonSearch");

    if (searchInput) {
      searchInput.addEventListener("input", function () {
        renderLessons(categoryKey, searchInput.value);
      });

      setTimeout(function () {
        searchInput.focus();
        searchInput.setSelectionRange(
          searchInput.value.length,
          searchInput.value.length
        );
      }, 50);
    }
  }

  function renderLessonCard(lesson) {
    const done = isCompleted(lesson.id);

    return `
      <div
        class="aba-lesson-card"
        data-lesson="${lesson.id}"
      >

        <div class="aba-lesson-number">
          ${lesson.icon} Lesson ${lesson.number}
        </div>

        <div class="aba-lesson-title">
          ${lesson.title}
        </div>

        <div class="aba-lesson-category">
          ${lesson.category}
        </div>

        ${
          done
            ? `<span class="aba-completed">✓ Completed</span>`
            : ""
        }

      </div>
    `;
  }

  /* =========================================================
     LESSON READER
     ========================================================= */

  function openLesson(id) {
    const lesson = lessons.find(function (item) {
      return item.id === id;
    });

    if (!lesson) return;

    const data = getLessonContent(lesson);
    const done = isCompleted(id);

    setHeader("Lesson " + lesson.number);

    content.innerHTML = `
      <div class="aba-reader">

        <div class="aba-reader-actions">

          <button
            class="aba-btn aba-btn-light"
            data-action="back-lessons"
            type="button"
          >
            ← Back to Lessons
          </button>

          <div class="aba-nav-buttons">

            ${
              lesson.number > 1
                ? `
                  <button
                    class="aba-btn aba-btn-light"
                    data-action="previous-lesson"
                    data-lesson="${lessons[lesson.number - 2].id}"
                    type="button"
                  >
                    ← Previous
                  </button>
                `
                : ""
            }

            ${
              lesson.number < lessons.length
                ? `
                  <button
                    class="aba-btn aba-btn-light"
                    data-action="next-lesson"
                    data-lesson="${lessons[lesson.number].id}"
                    type="button"
                  >
                    Next →
                  </button>
                `
                : ""
            }

          </div>

        </div>

        <div class="aba-reader-head">

          <div class="aba-reader-category">
            ${lesson.icon} ${lesson.category}
            • Lesson ${lesson.number} / ${lessons.length}
          </div>

          <h1>${lesson.title}</h1>

          <p style="color:#6b7280;">
            ${lesson.description}
          </p>

        </div>

        <div class="aba-reader-content">

          <div class="aba-detail-section">
            <h3>🎯 သင်ခန်းစာရည်ရွယ်ချက်</h3>
            <p>${data.objective}</p>
          </div>

          <div class="aba-detail-section">
            <h3>📖 အကျဉ်းချုပ်</h3>
            <p>${data.overview}</p>
          </div>

          <div class="aba-detail-section">
            <h3>🔑 အဓိကအချက်များ</h3>

            <ul class="aba-list">
              ${data.keyPoints.map(function (item) {
                return `<li>${item}</li>`;
              }).join("")}
            </ul>

          </div>

          ${data.details.map(function (section) {
            return `
              <div class="aba-detail-section">
                <h3>${section.heading}</h3>
                <p>${section.text}</p>
              </div>
            `;
          }).join("")}

          <div class="aba-detail-section">
            <h3>👨‍💼 Manager Tips</h3>

            <ul class="aba-list">
              ${data.managerTips.map(function (item) {
                return `<li>${item}</li>`;
              }).join("")}
            </ul>

          </div>

          <div class="aba-detail-section">
            <h3>⚠️ ရှောင်ရှားသင့်သော အမှားများ</h3>

            <ul class="aba-list">
              ${data.mistakes.map(function (item) {
                return `<li>${item}</li>`;
              }).join("")}
            </ul>

          </div>

          <div class="aba-detail-section">
            <h3>🚀 လက်တွေ့ Action Plan</h3>

            <ol class="aba-list">
              ${data.actionPlan.map(function (item) {
                return `<li>${item}</li>`;
              }).join("")}
            </ol>

          </div>

          <div class="aba-detail-section">
            <h3>✅ Checklist</h3>

            <ul class="aba-list">
              ${data.checklist.map(function (item) {
                return `<li>☐ ${item}</li>`;
              }).join("")}
            </ul>

          </div>

          <div class="aba-detail-section">
            <h3>🧠 Knowledge Check</h3>

            <ol class="aba-list">
              ${data.knowledgeCheck.map(function (item) {
                return `<li>${item}</li>`;
              }).join("")}
            </ol>

          </div>

          <div class="aba-detail-section">
            <h3>📝 Summary</h3>
            <p>${data.summary}</p>
          </div>

        </div>

        <div style="
          margin-top:25px;
          padding-top:20px;
          border-top:1px solid #e5e7eb;
        ">

          <button
            class="aba-btn ${
              done ? "aba-btn-light" : "aba-btn-primary"
            }"
            data-action="${
              done ? "mark-incomplete" : "mark-complete"
            }"
            data-lesson="${lesson.id}"
            type="button"
          >
            ${
              done
                ? "✓ Completed — Mark as Incomplete"
                : "✓ Mark Lesson as Complete"
            }
          </button>

        </div>

      </div>
    `;
  }

  /* =========================================================
     COURSES
     ========================================================= */

  function renderCourses() {
    setHeader("My Courses");
    updateActiveNav("courses");

    content.innerHTML = `
      <div class="aba-page">

        <h1>📚 My Courses</h1>

        <p style="color:#6b7280;margin:8px 0 20px;">
          Aung Business Academy ရဲ့ Business Management
          Learning Program
        </p>

        <div class="aba-category-grid">

          ${categories.map(function (cat) {
            return `
              <div
                class="aba-category-card"
                data-category="${cat.key}"
              >
                <div class="aba-category-icon">${cat.icon}</div>

                <div>
                  <div class="aba-category-name">
                    ${cat.name}
                  </div>

                  <div class="aba-category-count">
                    ${cat.count} Lessons
                  </div>

                  <div class="aba-category-description">
                    ${cat.description}
                  </div>
                </div>
              </div>
            `;
          }).join("")}

        </div>

      </div>
    `;
  }

  /* =========================================================
     PROGRESS
     ========================================================= */

  function renderProgress() {
    setHeader("My Progress");
    updateActiveNav("progress");

    const percent = progressPercent();

    const completed = lessons.filter(function (lesson) {
      return isCompleted(lesson.id);
    });

    content.innerHTML = `
      <div class="aba-page">

        <h1>📊 My Progress</h1>

        <div class="aba-course-card" style="margin-top:18px;">

          <h2>Overall Learning Progress</h2>

          <div class="aba-progress">
            <div
              class="aba-progress-bar"
              style="width:${percent}%"
            ></div>
          </div>

          <div style="font-size:30px;font-weight:800;">
            ${percent}%
          </div>

          <p style="color:#6b7280;">
            ${completed.length} / ${lessons.length}
            Lessons Completed
          </p>

        </div>

        <h2 class="aba-section-title">
          ✅ Completed Lessons
        </h2>

        ${
          completed.length
            ? `
              <div class="aba-lesson-grid">
                ${completed.map(renderLessonCard).join("")}
              </div>
            `
            : `
              <div class="aba-course-card">
                ယခုထိ သင်ခန်းစာပြီးဆုံးထားခြင်း မရှိသေးပါ။
              </div>
            `
        }

      </div>
    `;
  }

  /* =========================================================
     SALES MANAGER
     ========================================================= */

  function renderSalesManager() {
    setHeader("Sales Manager");
    updateActiveNav("sales-manager");

    content.innerHTML = `
      <div class="aba-page">

        <h1>💼 Sales Manager Toolkit</h1>

        <p style="color:#6b7280;">
          Sales Manager တစ်ယောက်အနေနဲ့ People + Numbers + Execution
          သုံးခုကို စနစ်တကျ စီမံရန်။
        </p>

        <div class="aba-category-grid" style="margin-top:20px;">

          <div class="aba-category-card">
            <div class="aba-category-icon">🎯</div>
            <div class="aba-category-name">Target Planning</div>
            <div class="aba-category-description">
              Monthly / Weekly / Daily Target ခွဲခြမ်းပါ။
            </div>
          </div>

          <div class="aba-category-card">
            <div class="aba-category-icon">👥</div>
            <div class="aba-category-name">Team Coaching</div>
            <div class="aba-category-description">
              Team Member တစ်ယောက်ချင်းစီကို Coaching လုပ်ပါ။
            </div>
          </div>

          <div class="aba-category-card">
            <div class="aba-category-icon">📊</div>
            <div class="aba-category-name">KPI Management</div>
            <div class="aba-category-description">
              Result ကို KPI နဲ့ တိုင်းတာပါ။
            </div>
          </div>

          <div class="aba-category-card">
            <div class="aba-category-icon">📍</div>
            <div class="aba-category-name">Field Execution</div>
            <div class="aba-category-description">
              Market Visit နှင့် Field Execution စီမံပါ။
            </div>
          </div>

          <div class="aba-category-card">
            <div class="aba-category-icon">📦</div>
            <div class="aba-category-name">Distributor</div>
            <div class="aba-category-description">
              Distributor Performance ကို စောင့်ကြည့်ပါ။
            </div>
          </div>

          <div class="aba-category-card">
            <div class="aba-category-icon">📈</div>
            <div class="aba-category-name">Performance Review</div>
            <div class="aba-category-description">
              Weekly / Monthly Performance Review လုပ်ပါ။
            </div>
          </div>

        </div>

      </div>
    `;
  }

  /* =========================================================
     PRICING
     ========================================================= */

  function renderPricing() {
    setHeader("Pricing Calculator");
    updateActiveNav("pricing");

    content.innerHTML = `
      <div class="aba-page">

        <h1>🧮 Pricing Calculator</h1>

        <div class="aba-course-card" style="margin-top:18px;">

          <div class="aba-form-grid">

            <div class="aba-form-group">
              <label>Cost Price</label>
              <input
                id="costPrice"
                type="number"
                placeholder="ဥပမာ 1000"
              >
            </div>

            <div class="aba-form-group">
              <label>Desired Margin %</label>
              <input
                id="desiredMargin"
                type="number"
                placeholder="ဥပမာ 25"
              >
            </div>

          </div>

          <button
            class="aba-btn aba-btn-primary"
            data-action="calculate-price"
            type="button"
          >
            Calculate
          </button>

          <div id="priceResult"></div>

        </div>

        <div class="aba-course-card">

          <h2>Break-even Concept</h2>

          <p style="color:#6b7280;line-height:1.8;">
            Break-even ဆိုတာ Revenue နဲ့ Total Cost တူညီသွားတဲ့
            အခြေအနေဖြစ်ပါတယ်။ ဒီအဆင့်ကျော်ပြီးမှ Profit စတင်ရရှိနိုင်ပါတယ်။
          </p>

        </div>

      </div>
    `;
  }

  function calculatePrice() {
    const cost =
      parseFloat(document.getElementById("costPrice").value) || 0;

    const margin =
      parseFloat(document.getElementById("desiredMargin").value) || 0;

    if (cost <= 0 || margin < 0 || margin >= 100) {
      document.getElementById("priceResult").innerHTML = `
        <div class="aba-result">
          Cost Price နှင့် Margin % ကို မှန်ကန်စွာ ထည့်ပါ။
        </div>
      `;
      return;
    }

    const sellingPrice = cost / (1 - margin / 100);
    const profit = sellingPrice - cost;

    document.getElementById("priceResult").innerHTML = `
      <div class="aba-result">
        <strong>Recommended Selling Price:</strong>
        ${sellingPrice.toFixed(2)}
        <br>
        <strong>Gross Profit:</strong>
        ${profit.toFixed(2)}
        <br>
        <strong>Margin:</strong>
        ${margin}%
      </div>
    `;
  }

  /* =========================================================
     REPORTS
     ========================================================= */

  function renderReports() {
    setHeader("Reports");
    updateActiveNav("reports");

    content.innerHTML = `
      <div class="aba-page">

        <h1>📈 Business Reports</h1>

        <div class="aba-kpi-grid" style="margin-top:20px;">

          <div class="aba-kpi-card">
            <div style="color:#6b7280;">Sales Target</div>
            <h2>100%</h2>
          </div>

          <div class="aba-kpi-card">
            <div style="color:#6b7280;">Achievement</div>
            <h2>85%</h2>
          </div>

          <div class="aba-kpi-card">
            <div style="color:#6b7280;">Gap</div>
            <h2>15%</h2>
          </div>

          <div class="aba-kpi-card">
            <div style="color:#6b7280;">Distribution</div>
            <h2>92%</h2>
          </div>

        </div>

        <div class="aba-course-card" style="margin-top:20px;">
          <h2>Manager Reporting Rule</h2>
          <p style="line-height:1.8;color:#6b7280;">
            Report တစ်ခုမှာ Result တင်ပြရုံမဟုတ်ဘဲ
            Actual + Target + Gap + Reason + Action
            ကို ပါဝင်စေသင့်ပါတယ်။
          </p>
        </div>

      </div>
    `;
  }

  /* =========================================================
     AI BUSINESS COACH
     ========================================================= */

  function renderAICoach() {
    setHeader("AI Business Coach");
    updateActiveNav("ai-business-coach");

    content.innerHTML = `
      <div class="aba-page">

        <h1>🤖 AI Business Coach</h1>

        <p style="color:#6b7280;">
          Business / Sales ပြဿနာတစ်ခုရေးပြီး Managerial Thinking
          နဲ့ ဖြေရှင်းနည်းရယူပါ။
        </p>

        <div class="aba-course-card">

          <div class="aba-form-group">
            <label>Your Business Problem</label>

            <textarea
              id="coachQuestion"
              rows="6"
              placeholder="ဥပမာ - Sales target မပြည့်ရင် ဘာတွေစစ်ဆေးသင့်လဲ?"
            ></textarea>
          </div>

          <button
            class="aba-btn aba-btn-primary"
            data-action="ask-coach"
            type="button"
          >
            Ask Business Coach
          </button>

          <div id="coachResult"></div>

        </div>

      </div>
    `;
  }

  function askCoach() {
    const input = document.getElementById("coachQuestion");
    const result = document.getElementById("coachResult");

    if (!input || !result) return;

    const question = input.value.trim();

    if (!question) {
      result.innerHTML = `
        <div class="aba-result">
          Business Problem တစ်ခုရေးပါ။
        </div>
      `;
      return;
    }

    result.innerHTML = `
      <div class="aba-result">

        <strong>Business Coach Recommendation</strong>

        <br><br>

        ၁။ Problem ကို တိတိကျကျ သတ်မှတ်ပါ။

        <br>

        ၂။ Data နဲ့ လက်ရှိအခြေအနေကို စစ်ဆေးပါ။

        <br>

        ၃။ Root Cause ကို ရှာပါ။

        <br>

        ၄။ Action Plan ၃ ခု သတ်မှတ်ပါ။

        <br>

        ၅။ Owner နဲ့ Deadline သတ်မှတ်ပါ။

        <br>

        ၆။ KPI နဲ့ Result ကို တိုင်းတာပါ။

        <br><br>

        <strong>Manager Rule:</strong>
        People + Numbers + Execution ကို အမြဲတမ်း ဆက်စပ်စဉ်းစားပါ။

      </div>
    `;
  }

  /* =========================================================
     AI TOOLS
     ========================================================= */

  function renderAITools() {
    setHeader("AI Tools");
    updateActiveNav("ai-tools");

    content.innerHTML = `
      <div class="aba-page">

        <h1>🛠 AI Business Tools</h1>

        <div class="aba-category-grid" style="margin-top:20px;">

          <div class="aba-category-card">
            <div class="aba-category-icon">🎯</div>
            <div class="aba-category-name">
              SMART Goal
            </div>
            <div class="aba-category-description">
              Goal ကို Specific, Measurable, Achievable,
              Relevant, Time-bound ဖြစ်အောင် စီမံပါ။
            </div>
          </div>

          <div class="aba-category-card">
            <div class="aba-category-icon">📈</div>
            <div class="aba-category-name">
              Sales Target Breakdown
            </div>
            <div class="aba-category-description">
              Annual Target → Monthly → Weekly → Daily
              ခွဲပါ။
            </div>
          </div>

          <div class="aba-category-card">
            <div class="aba-category-icon">💰</div>
            <div class="aba-category-name">
              Margin Calculator
            </div>
            <div class="aba-category-description">
              Cost၊ Selling Price နဲ့ Margin ကိုတွက်ပါ။
            </div>
          </div>

          <div class="aba-category-card">
            <div class="aba-category-icon">🧠</div>
            <div class="aba-category-name">
              Problem Solver
            </div>
            <div class="aba-category-description">
              Problem → Root Cause → Action Plan
            </div>
          </div>

        </div>

      </div>
    `;
  }

  /* =========================================================
     SETTINGS
     ========================================================= */

  function renderSettings() {
    setHeader("Settings");
    updateActiveNav("settings");

    content.innerHTML = `
      <div class="aba-page">

        <h1>⚙️ Settings</h1>

        <div class="aba-course-card" style="margin-top:20px;">

          <h2>Profile</h2>

          <p style="margin-top:10px;">
            <strong>Name:</strong> Aung Zar Ni Win
          </p>

          <p>
            <strong>Role:</strong> Business Manager
          </p>

        </div>

        <div class="aba-course-card">

          <h2>Learning Data</h2>

          <p style="color:#6b7280;margin:10px 0 15px;">
            Completed Lessons: ${completedLessons.length}
          </p>

          <button
            class="aba-btn aba-btn-light"
            data-action="reset-progress"
            type="button"
          >
            Reset Learning Progress
          </button>

        </div>

      </div>
    `;
  }

  /* =========================================================
     NAVIGATION
     ========================================================= */

  function showSection(section) {

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
        renderAICoach();
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

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  /* =========================================================
     COMPLETE / INCOMPLETE
     ========================================================= */

  function markComplete(id) {

    if (!isCompleted(id)) {
      completedLessons.push(id);
      saveCompleted(completedLessons);
    }

    openLesson(id);
  }

  function markIncomplete(id) {

    completedLessons = completedLessons.filter(function (item) {
      return item !== id;
    });

    saveCompleted(completedLessons);

    openLesson(id);
  }

  function resetProgress() {

    const confirmed = window.confirm(
      "သင်ခန်းစာ Progress အားလုံးကို Reset လုပ်မလား?"
    );

    if (!confirmed) return;

    completedLessons = [];
    saveCompleted(completedLessons);

    renderSettings();
  }

  /* =========================================================
     CONTINUE LEARNING
     ========================================================= */

  function continueLearning() {

    const nextLesson =
      lessons.find(function (lesson) {
        return !isCompleted(lesson.id);
      }) || lessons[0];

    if (nextLesson) {
      openLesson(nextLesson.id);
    }
  }

  /* =========================================================
     EVENT DELEGATION
     ========================================================= */

  document.addEventListener("click", function (event) {

    const nav = event.target.closest(".nav-item");

    if (nav) {
      const section = nav.dataset.section;

      if (section) {
        showSection(section);
      }

      return;
    }

    const lessonCard = event.target.closest("[data-lesson]");

    if (
      lessonCard &&
      lessonCard.classList.contains("aba-lesson-card")
    ) {
      openLesson(lessonCard.dataset.lesson);
      return;
    }

    const categoryCard = event.target.closest("[data-category]");

    if (categoryCard) {
      const category = categoryCard.dataset.category;

      if (category) {
        renderLessons(category);
      }

      return;
    }

    const categoryFilter =
      event.target.closest("[data-category-filter]");

    if (categoryFilter) {

      const category =
        categoryFilter.dataset.categoryFilter || "";

      renderLessons(category);

      return;
    }

    const action = event.target.closest("[data-action]");

    if (!action) return;

    const type = action.dataset.action;

    switch (type) {

      case "continue-learning":
        continueLearning();
        break;

      case "view-lessons":
        renderLessons();
        break;

      case "back-lessons":
        renderLessons();
        break;

      case "previous-lesson":
        openLesson(action.dataset.lesson);
        break;

      case "next-lesson":
        openLesson(action.dataset.lesson);
        break;

      case "mark-complete":
        markComplete(action.dataset.lesson);
        break;

      case "mark-incomplete":
        markIncomplete(action.dataset.lesson);
        break;

      case "calculate-price":
        calculatePrice();
        break;

      case "ask-coach":
        askCoach();
        break;

      case "reset-progress":
        resetProgress();
        break;
    }
  });

  /* =========================================================
     INITIALIZE
     ========================================================= */

  injectExtraCSS();

  renderDashboard();

  /* =========================================================
     PUBLIC API
     ========================================================= */

  window.AungBusinessAcademy = {

    lessons: lessons,

    categories: categories,

    showSection: showSection,

    openLesson: openLesson,

    markCompleted: markComplete,

    markIncomplete: markIncomplete,

    calculatePrice: calculatePrice,

    askCoach: askCoach,

    resetProgress: resetProgress,

    getProgress: function () {
      return {
        completed: completedLessons.length,
        total: lessons.length,
        percentage: progressPercent()
      };
    }

  };

  console.log(
    "Aung Business Academy loaded:",
    lessons.length,
    "lessons"
  );

})();
