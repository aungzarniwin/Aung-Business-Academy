```javascript
/* =========================================================
   AUNG BUSINESS ACADEMY
   PROFESSIONAL BUSINESS LESSON ENGINE
   230 LESSONS
   23 MODULES × 10 LESSONS
   DETAILED PROFESSIONAL CONTENT VERSION
   ========================================================= */

(function () {
  "use strict";

  /* =========================================================
     1. MODULES
     ========================================================= */

  const MODULES = [
    {
      name: "Business Basics",
      icon: "🏢",
      lessons: [
        "Understanding Business",
        "Business Models",
        "Value Creation",
        "Revenue & Cost",
        "Profit Fundamentals",
        "Business Resources",
        "Business Environment",
        "Business Growth",
        "Business Risk",
        "Building a Strong Business Foundation"
      ]
    },

    {
      name: "Strategic Thinking",
      icon: "♟️",
      lessons: [
        "What Is Strategy?",
        "Strategic Thinking",
        "Vision & Mission",
        "Competitive Advantage",
        "SWOT Analysis",
        "Market Positioning",
        "Strategic Priorities",
        "Business Decision Making",
        "Strategic Execution",
        "Building a Winning Strategy"
      ]
    },

    {
      name: "Brand Basics",
      icon: "🏷️",
      lessons: [
        "Understanding Branding",
        "Brand Identity",
        "Brand Positioning",
        "Brand Promise",
        "Customer Perception",
        "Brand Trust",
        "Brand Differentiation",
        "Brand Consistency",
        "Brand Experience",
        "Building a Strong Brand"
      ]
    },

    {
      name: "Marketing Basics",
      icon: "📣",
      lessons: [
        "Understanding Marketing",
        "Market Segmentation",
        "Target Customers",
        "Customer Needs",
        "Marketing Mix",
        "Product Strategy",
        "Promotion Strategy",
        "Distribution Strategy",
        "Marketing Measurement",
        "Building a Marketing Plan"
      ]
    },

    {
      name: "Sales Basics",
      icon: "💰",
      lessons: [
        "Understanding Sales",
        "Sales Process",
        "Sales Funnel",
        "Prospecting",
        "Lead Management",
        "Customer Qualification",
        "Sales Presentation",
        "Closing Sales",
        "Sales Follow-Up",
        "Building a Winning Sales System"
      ]
    },

    {
      name: "Sales Management",
      icon: "👨‍💼",
      lessons: [
        "Role of a Sales Manager",
        "Sales Target Management",
        "Sales Planning",
        "Territory Management",
        "Sales Team Structure",
        "Sales KPI Management",
        "Sales Forecasting",
        "Field Force Management",
        "Sales Review Meetings",
        "Building a High-Performance Sales Team"
      ]
    },

    {
      name: "Negotiation",
      icon: "🤝",
      lessons: [
        "Negotiation Fundamentals",
        "Negotiation Preparation",
        "Understanding Customer Needs",
        "BATNA & Alternatives",
        "Price Negotiation",
        "Value-Based Negotiation",
        "Handling Difficult Negotiations",
        "Win-Win Negotiation",
        "Negotiation Mistakes",
        "Advanced Negotiation Strategy"
      ]
    },

    {
      name: "Customer Service",
      icon: "❤️",
      lessons: [
        "Customer Service Fundamentals",
        "Customer Expectations",
        "Customer Communication",
        "Active Listening",
        "Handling Complaints",
        "Service Recovery",
        "Customer Satisfaction",
        "Customer Retention",
        "Customer Loyalty",
        "Building Customer-Centric Culture"
      ]
    },

    {
      name: "People Management",
      icon: "👥",
      lessons: [
        "People Management Fundamentals",
        "Leadership vs Management",
        "Setting Expectations",
        "Delegation",
        "Coaching Employees",
        "Performance Management",
        "Employee Motivation",
        "Conflict Management",
        "Team Development",
        "Building a High-Performance Culture"
      ]
    },

    {
      name: "Profit & Loss",
      icon: "📊",
      lessons: [
        "Understanding Profit",
        "Revenue Management",
        "Cost Management",
        "Gross Profit",
        "Gross Margin",
        "Operating Expenses",
        "Break-Even Analysis",
        "Profitability Analysis",
        "Profit Improvement",
        "Building a Profit-Focused Business"
      ]
    },

    {
      name: "Goal Setting",
      icon: "🎯",
      lessons: [
        "Why Goals Matter",
        "SMART Goals",
        "Business Objectives",
        "Sales Targets",
        "Activity Targets",
        "KPI Goals",
        "Monthly Planning",
        "Quarterly Planning",
        "Goal Review",
        "Building a Goal-Driven Organization"
      ]
    },

    {
      name: "Customer Relationship Management",
      icon: "🤝",
      lessons: [
        "Understanding CRM",
        "Customer Database",
        "Customer Segmentation",
        "Customer Value",
        "Key Account Management",
        "Customer Visit Planning",
        "Customer Follow-Up",
        "Customer Retention Strategy",
        "CRM Performance",
        "Building Long-Term Customer Relationships"
      ]
    },

    {
      name: "Distribution Management",
      icon: "🚚",
      lessons: [
        "Distribution Fundamentals",
        "Distributor Management",
        "Route-to-Market",
        "Territory Coverage",
        "Outlet Management",
        "Stock Availability",
        "Order Management",
        "Distribution KPI",
        "Distributor Performance",
        "Building an Effective Distribution System"
      ]
    },

    {
      name: "Retail & Trade Marketing",
      icon: "🏪",
      lessons: [
        "Retail Fundamentals",
        "Outlet Classification",
        "Trade Channels",
        "Merchandising",
        "Visibility Management",
        "Promotion Execution",
        "Planogram Basics",
        "Trade Spend",
        "Retail Performance",
        "Building a Winning Trade Strategy"
      ]
    },

    {
      name: "Business Analytics",
      icon: "📈",
      lessons: [
        "Understanding Business Data",
        "Data Collection",
        "Sales Analysis",
        "Trend Analysis",
        "Growth Analysis",
        "Variance Analysis",
        "KPI Dashboard",
        "Excel for Business",
        "Data-Based Decisions",
        "Building a Business Analytics Mindset"
      ]
    },

    {
      name: "Financial Management",
      icon: "💵",
      lessons: [
        "Financial Management Basics",
        "Cash Flow",
        "Working Capital",
        "Accounts Receivable",
        "Inventory Cost",
        "Budget Management",
        "Financial Controls",
        "Financial Risk",
        "Financial Performance",
        "Building Financial Discipline"
      ]
    },

    {
      name: "Operations Management",
      icon: "⚙️",
      lessons: [
        "Operations Fundamentals",
        "Process Management",
        "Productivity",
        "Quality Management",
        "Inventory Management",
        "Supply Planning",
        "Process Improvement",
        "SOP Management",
        "Operational KPIs",
        "Building Operational Excellence"
      ]
    },

    {
      name: "Leadership",
      icon: "👑",
      lessons: [
        "Understanding Leadership",
        "Leadership Mindset",
        "Leading by Example",
        "Decision Making",
        "Communication Leadership",
        "Situational Leadership",
        "Empowering Teams",
        "Leadership Accountability",
        "Developing Future Leaders",
        "Becoming a Strong Business Leader"
      ]
    },

    {
      name: "Communication",
      icon: "🗣️",
      lessons: [
        "Business Communication",
        "Clear Communication",
        "Professional Listening",
        "Presentation Skills",
        "Meeting Communication",
        "Giving Feedback",
        "Difficult Conversations",
        "Persuasive Communication",
        "Executive Communication",
        "Becoming an Effective Communicator"
      ]
    },

    {
      name: "Productivity",
      icon: "⚡",
      lessons: [
        "Personal Productivity",
        "Time Management",
        "Priority Management",
        "Important vs Urgent",
        "Daily Planning",
        "Weekly Planning",
        "Focus Management",
        "Delegation for Productivity",
        "Productivity Measurement",
        "Building a High-Performance Work System"
      ]
    },

    {
      name: "Problem Solving",
      icon: "🧩",
      lessons: [
        "Problem Solving Fundamentals",
        "Identifying the Real Problem",
        "Root Cause Analysis",
        "5 Whys",
        "Fishbone Analysis",
        "Problem Prioritization",
        "Solution Generation",
        "Decision Evaluation",
        "Corrective Action",
        "Building a Problem-Solving Culture"
      ]
    },

    {
      name: "Business Planning",
      icon: "📋",
      lessons: [
        "Business Planning Fundamentals",
        "Annual Business Planning",
        "Sales Planning",
        "Marketing Planning",
        "Resource Planning",
        "Budget Planning",
        "Risk Planning",
        "Execution Planning",
        "Business Review",
        "Building a Complete Business Plan"
      ]
    },

    {
      name: "Decision Making & Problem Solving",
      icon: "🧠",
      lessons: [
        "Managerial Decision Making",
        "Decision Quality",
        "Data-Based Decisions",
        "Decision Under Pressure",
        "Risk vs Reward",
        "Scenario Planning",
        "Business Trade-Offs",
        "Strategic Problem Solving",
        "Decision Review",
        "Becoming a Better Decision Maker"
      ]
    }
  ];

  /* =========================================================
     2. BUILD 230 LESSONS
     ========================================================= */

  const LESSONS = [];

  MODULES.forEach(function (module, moduleIndex) {

    module.lessons.forEach(function (title, lessonIndex) {

      LESSONS.push({
        id: moduleIndex * 10 + lessonIndex + 1,
        module: module.name,
        moduleIndex: moduleIndex,
        lessonIndex: lessonIndex,
        icon: module.icon,
        title: title
      });

    });

  });

  /* =========================================================
     3. STORAGE
     ========================================================= */

  const STORAGE_KEY =
    "aung_business_academy_completed_v20";

  function getCompleted() {

    try {

      return JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
      );

    } catch (error) {

      return [];

    }

  }

  function saveCompleted(list) {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(list)
    );

  }

  function isCompleted(id) {

    return getCompleted().includes(id);

  }

  function markCompleted(id) {

    const list = getCompleted();

    if (!list.includes(id)) {

      list.push(id);

      saveCompleted(list);

    }

    updateDashboard();

  }

  /* =========================================================
     4. HELPERS
     ========================================================= */

  function escapeHTML(value) {

    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  }

  function percent(actual, target) {

    if (!target) return 0;

    return Math.round(
      (actual / target) * 100
    );

  }

  function getProgress() {

    return Math.round(
      (getCompleted().length /
        LESSONS.length) * 100
    );

  }

  /* =========================================================
     5. DETAILED CONTENT DATABASE
     ========================================================= */

  const TOPIC_LIBRARY = {

    "Business Basics": {

      purpose:
        "Business တစ်ခုကို အခြေခံမှ စနစ်တကျ နားလည်နိုင်ရန်",

      questions: [
        "Customer ဘယ်သူလဲ?",
        "Customer ဘာလိုချင်လဲ?",
        "Business က ဘာတန်ဖိုးပေးလဲ?",
        "Revenue ဘယ်ကရလဲ?",
        "Cost ဘယ်လောက်ရှိလဲ?",
        "Profit ဘယ်လောက်ကျန်လဲ?"
      ],

      examples: [
        "Retail Shop",
        "Distribution Business",
        "Restaurant",
        "Online Shop",
        "Service Business",
        "Training Business"
      ]

    },

    "Strategic Thinking": {

      purpose:
        "Long-term Business Direction ကို သတ်မှတ်ပြီး ပြိုင်ဆိုင်မှုထဲမှာ အားသာချက်ရရှိစေရန်",

      questions: [
        "ဘယ်ဈေးကွက်ကို ဝင်မလဲ?",
        "ဘယ် Customer ကို အဓိကထားမလဲ?",
        "ဘယ်နေရာမှာ ယှဉ်ပြိုင်မလဲ?",
        "ဘာကြောင့် Customer က ငါတို့ကို ရွေးမလဲ?",
        "ဘယ်အရာကို အရင်လုပ်သင့်လဲ?",
        "Resource ကို ဘယ်လိုခွဲမလဲ?"
      ],

      examples: [
        "Market Expansion",
        "Competitive Strategy",
        "Portfolio Strategy",
        "Growth Strategy"
      ]

    },

    "Brand Basics": {

      purpose:
        "Customer ရဲ့စိတ်ထဲမှာ ရှင်းလင်းပြီး ယုံကြည်စိတ်ချရတဲ့ Brand တစ်ခုတည်ဆောက်ရန်",

      questions: [
        "Brand က ဘာကို ကိုယ်စားပြုလဲ?",
        "Customer က ဘယ်လိုမြင်စေချင်လဲ?",
        "Competitor နဲ့ ဘာကွာလဲ?",
        "Brand Promise ကဘာလဲ?",
        "Customer Trust ကို ဘယ်လိုတည်ဆောက်မလဲ?"
      ],

      examples: [
        "Brand Identity",
        "Brand Positioning",
        "Customer Experience",
        "Brand Communication"
      ]

    },

    "Marketing Basics": {

      purpose:
        "Right Customer ကို Right Message နဲ့ Right Channel ကနေ ရောက်ရှိစေရန်",

      questions: [
        "Target Customer ဘယ်သူလဲ?",
        "Customer Need ဘာလဲ?",
        "Product ကို ဘယ်လို Position လုပ်မလဲ?",
        "ဘယ် Channel က အထိရောက်ဆုံးလဲ?",
        "Marketing Result ကို ဘယ်လိုတိုင်းမလဲ?"
      ],

      examples: [
        "Market Segmentation",
        "Marketing Mix",
        "Promotion",
        "Distribution"
      ]

    },

    "Sales Basics": {

      purpose:
        "Customer ကို Prospect မှ Buyer အဖြစ် ပြောင်းလဲနိုင်တဲ့ Sales Process တည်ဆောက်ရန်",

      questions: [
        "Prospect ဘယ်လိုရှာမလဲ?",
        "Customer Need ဘယ်လိုရှာမလဲ?",
        "Value ဘယ်လိုရှင်းပြမလဲ?",
        "Objection ဘယ်လိုကိုင်တွယ်မလဲ?",
        "Deal ကို ဘယ်လို Close မလဲ?"
      ],

      examples: [
        "B2B Sales",
        "Retail Sales",
        "Field Sales",
        "Key Account Sales"
      ]

    },

    "Sales Management": {

      purpose:
        "Sales Team ကို Target ပြည့်ရုံမက Sustainable Result ရရှိအောင် စီမံခန့်ခွဲရန်",

      questions: [
        "Target ကို ဘယ်လိုခွဲမလဲ?",
        "Territory ကို ဘယ်လိုစီမံမလဲ?",
        "Team Performance ကို ဘယ်လိုတိုင်းမလဲ?",
        "Forecast ဘယ်လိုလုပ်မလဲ?",
        "Field Execution ကို ဘယ်လိုတိုးတက်အောင်လုပ်မလဲ?"
      ],

      examples: [
        "FMCG Sales",
        "Distribution Sales",
        "Automobile Sales",
        "B2B Sales"
      ]

    },

    "Negotiation": {

      purpose:
        "Customer နဲ့ Supplier နှစ်ဖက်စလုံးအတွက် ရေရှည်အကျိုးရှိတဲ့ Deal များ ဖန်တီးရန်",

      questions: [
        "ငါတို့လိုချင်တာဘာလဲ?",
        "Customer လိုချင်တာဘာလဲ?",
        "BATNA ဘာလဲ?",
        "ဘယ်အချက်တွေမှာ Flexibility ရှိလဲ?",
        "Price မဟုတ်ဘဲ Value နဲ့ ဘယ်လိုဆွေးနွေးမလဲ?"
      ],

      examples: [
        "Price Negotiation",
        "Contract Negotiation",
        "Distributor Negotiation",
        "Key Account Negotiation"
      ]

    },

    "Customer Service": {

      purpose:
        "Customer Satisfaction ကို Customer Loyalty အဖြစ် ပြောင်းလဲနိုင်ရန်",

      questions: [
        "Customer Expectation ဘာလဲ?",
        "Complaint ရဲ့ Root Cause ဘာလဲ?",
        "Service Recovery ဘယ်လိုလုပ်မလဲ?",
        "Customer ကို ဘယ်လို Retain လုပ်မလဲ?"
      ],

      examples: [
        "Complaint Handling",
        "Service Recovery",
        "Customer Retention"
      ]

    },

    "People Management": {

      purpose:
        "လူတွေကို Control လုပ်ခြင်းထက် သူတို့ရဲ့ Capability နဲ့ Ownership ကို မြှင့်တင်ရန်",

      questions: [
        "Expectation ကို ရှင်းလင်းအောင် ဘယ်လိုပြောမလဲ?",
        "Employee ကို ဘယ်လို Coach မလဲ?",
        "Performance Gap ဘာကြောင့်ဖြစ်တာလဲ?",
        "Delegation ကို ဘယ်လိုလုပ်မလဲ?",
        "Team Conflict ကို ဘယ်လိုဖြေရှင်းမလဲ?"
      ],

      examples: [
        "Sales Team",
        "Office Team",
        "Operations Team",
        "Cross-functional Team"
      ]

    },

    "Profit & Loss": {

      purpose:
        "Sales တိုးရုံမက Profit တိုးအောင် Business Economics ကို စီမံရန်",

      questions: [
        "Revenue ဘယ်လောက်လဲ?",
        "Gross Profit ဘယ်လောက်လဲ?",
        "Margin ဘယ်လောက်လဲ?",
        "Operating Cost ဘယ်လောက်လဲ?",
        "Break-Even ဘယ်မှာလဲ?"
      ],

      examples: [
        "Gross Margin",
        "Cost Control",
        "Break-Even",
        "Profit Improvement"
      ]

    },

    "Goal Setting": {

      purpose:
        "Business Strategy ကို Measurable Goal နဲ့ Action အဖြစ် ပြောင်းလဲရန်",

      questions: [
        "Goal ကဘာလဲ?",
        "ဘယ်အချိန်အတွင်း ရမလဲ?",
        "ဘယ် KPI နဲ့တိုင်းမလဲ?",
        "ဘယ်သူတာဝန်ယူမလဲ?",
        "Progress ကို ဘယ်လို Review မလဲ?"
      ],

      examples: [
        "Sales Target",
        "KPI",
        "Monthly Goal",
        "Quarterly Goal"
      ]

    },

    "Customer Relationship Management": {

      purpose:
        "Customer တစ်ကြိမ်ဝယ်တာထက် ရေရှည် Relationship တည်ဆောက်ရန်",

      questions: [
        "Customer Data ဘာတွေလိုလဲ?",
        "High-value Customer ဘယ်သူလဲ?",
        "Customer Visit ဘယ်လို Plan မလဲ?",
        "Follow-up ဘယ်အချိန်လုပ်မလဲ?"
      ],

      examples: [
        "CRM",
        "Key Account",
        "Customer Database",
        "Retention"
      ]

    },

    "Distribution Management": {

      purpose:
        "Product ကို Right Place, Right Time, Right Quantity နဲ့ Customer ထံရောက်အောင် စီမံရန်",

      questions: [
        "Distribution Coverage ဘယ်လောက်ရှိလဲ?",
        "Stock Availability ကောင်းလား?",
        "Route-to-Market မှန်လား?",
        "Distributor Performance ဘယ်လိုလဲ?"
      ],

      examples: [
        "FMCG Distribution",
        "Distributor Management",
        "Route Planning",
        "Outlet Coverage"
      ]

    },

    "Retail & Trade Marketing": {

      purpose:
        "Retail Outlet မှာ Product Availability, Visibility နဲ့ Sales Conversion တိုးတက်စေရန်",

      questions: [
        "Outlet Classification ဘယ်လိုလုပ်မလဲ?",
        "Visibility ကောင်းလား?",
        "Merchandising Standard ပြည့်မီလား?",
        "Promotion ROI ကောင်းလား?"
      ],

      examples: [
        "Modern Trade",
        "General Trade",
        "Merchandising",
        "Trade Promotion"
      ]

    },

    "Business Analytics": {

      purpose:
        "Business Data ကို Insight အဖြစ် ပြောင်းပြီး Better Decision ချနိုင်ရန်",

      questions: [
        "ဘာဖြစ်နေလဲ?",
        "ဘာကြောင့်ဖြစ်လဲ?",
        "Trend ဘယ်လိုလဲ?",
        "Target Gap ဘယ်လောက်လဲ?",
        "ဘယ် Action က Result ပိုကောင်းမလဲ?"
      ],

      examples: [
        "Sales Dashboard",
        "Excel Analysis",
        "Trend Analysis",
        "Variance Analysis"
      ]

    },

    "Financial Management": {

      purpose:
        "Cash, Working Capital နဲ့ Financial Risk ကို စနစ်တကျ စီမံရန်",

      questions: [
        "Cash Flow ဘယ်လိုလဲ?",
        "Receivable ဘယ်လောက်ရှိလဲ?",
        "Inventory မှာ ငွေဘယ်လောက်ပိတ်နေလဲ?",
        "Budget ကို ဘယ်လိုထိန်းမလဲ?"
      ],

      examples: [
        "Cash Flow",
        "Working Capital",
        "Accounts Receivable",
        "Budget"
      ]

    },

    "Operations Management": {

      purpose:
        "Business Process တွေကို Efficient, Consistent, Scalable ဖြစ်အောင် စီမံရန်",

      questions: [
        "Process ဘယ်မှာနှေးနေလဲ?",
        "Quality Issue ဘာကြောင့်ဖြစ်လဲ?",
        "Waste ဘယ်လောက်ရှိလဲ?",
        "SOP ရှိလား?"
      ],

      examples: [
        "Process Management",
        "SOP",
        "Quality",
        "Productivity"
      ]

    },

    "Leadership": {

      purpose:
        "Team ကို Direction ပေးပြီး လူတွေကို Result ရအောင် ဦးဆောင်နိုင်ရန်",

      questions: [
        "Leader တစ်ယောက်အနေနဲ့ ဘာတာဝန်ရှိလဲ?",
        "Team ကို ဘယ်လို Inspire မလဲ?",
        "Decision ကို ဘယ်လိုချမလဲ?",
        "Ownership ဘယ်လိုတည်ဆောက်မလဲ?"
      ],

      examples: [
        "Leadership Mindset",
        "Coaching",
        "Empowerment",
        "Accountability"
      ]

    },

    "Communication": {

      purpose:
        "Message ကို ရှင်းလင်း၊ တိကျ၊ ယုံကြည်စိတ်ချရအောင် ပေးပို့နိုင်ရန်",

      questions: [
        "Message က ရှင်းလား?",
        "Audience က ဘာလိုချင်လဲ?",
        "ဘယ်လိုပြောရင် နားလည်လွယ်မလဲ?",
        "Feedback ကို ဘယ်လိုပေးမလဲ?"
      ],

      examples: [
        "Presentation",
        "Meeting",
        "Feedback",
        "Executive Communication"
      ]

    },

    "Productivity": {

      purpose:
        "အလုပ်ပိုလုပ်တာမဟုတ်ဘဲ အရေးကြီးတဲ့ Result ကို ပိုမြန်စွာရရှိစေရန်",

      questions: [
        "ဘာကို အရင်လုပ်သင့်လဲ?",
        "ဘာကို Delegate လုပ်နိုင်လဲ?",
        "ဘယ်အရာတွေက အချိန်ဖြုန်းနေတာလဲ?",
        "Output ကို ဘယ်လိုတိုင်းမလဲ?"
      ],

      examples: [
        "Time Management",
        "Priority",
        "Focus",
        "Delegation"
      ]

    },

    "Problem Solving": {

      purpose:
        "ပြဿနာရဲ့ အပေါ်ယံလက္ခဏာကို မဟုတ်ဘဲ Root Cause ကိုရှာပြီး Sustainable Solution တည်ဆောက်ရန်",

      questions: [
        "Real Problem ကဘာလဲ?",
        "Root Cause ဘာလဲ?",
        "ဘယ် Problem က အရေးကြီးဆုံးလဲ?",
        "Solution ဘယ်နှစ်ခုရှိလဲ?",
        "ဘယ် Solution က အထိရောက်ဆုံးလဲ?"
      ],

      examples: [
        "5 Whys",
        "Fishbone",
        "Pareto",
        "Corrective Action"
      ]

    },

    "Business Planning": {

      purpose:
        "Business Strategy ကို Action, Resource, Budget နဲ့ Timeline အဖြစ် ပြောင်းလဲရန်",

      questions: [
        "ဒီနှစ် ဘာရချင်လဲ?",
        "ဘယ် Resource လိုလဲ?",
        "Budget ဘယ်လောက်လိုလဲ?",
        "ဘယ် Risk တွေရှိလဲ?",
        "Execution ကို ဘယ်လို Review မလဲ?"
      ],

      examples: [
        "Annual Plan",
        "Sales Plan",
        "Marketing Plan",
        "Budget Plan"
      ]

    },

    "Decision Making & Problem Solving": {

      purpose:
        "မသေချာမှု၊ အချိန်ဖိအားနဲ့ Risk ရှိတဲ့အခြေအနေမှာ Quality Decision ချနိုင်ရန်",

      questions: [
        "Decision Objective ကဘာလဲ?",
        "Available Data ဘာတွေရှိလဲ?",
        "Risk ဘယ်လောက်ရှိလဲ?",
        "Alternative ဘာတွေရှိလဲ?",
        "Decision ပြီးရင် ဘယ်လို Review မလဲ?"
      ],

      examples: [
        "Scenario Planning",
        "Risk vs Reward",
        "Trade-Off",
        "Decision Review"
      ]

    }

  };

  /* =========================================================
     6. GENERATE DETAILED LESSON CONTENT
     ========================================================= */

  function buildDetailedContent(lesson) {

    const topic =
      TOPIC_LIBRARY[lesson.module] ||
      TOPIC_LIBRARY["Business Basics"];

    const lessonNumber =
      lesson.lessonIndex + 1;

    const title =
      lesson.title;

    const module =
      lesson.module;

    const actual =
      82 + ((lesson.id * 3) % 12);

    const target = 100;

    const gap =
      target - actual;

    const achievement =
      percent(actual, target);

    /* -----------------------------------------
       CORE IDEA
       ----------------------------------------- */

    const coreIdea = `
      <p>
        <strong>${escapeHTML(title)}</strong>
        ဆိုတာ <strong>${escapeHTML(module)}</strong>
        နယ်ပယ်အတွင်းမှာ Manager တစ်ယောက်အနေနဲ့
        နားလည်ထားသင့်တဲ့ အရေးကြီးသော Business Capability
        တစ်ခုဖြစ်ပါတယ်။
      </p>

      <p>
        ဒီ Lesson ရဲ့ အဓိကရည်ရွယ်ချက်က
        Definition ကို မှတ်မိစေရုံမဟုတ်ဘဲ
        လက်တွေ့လုပ်ငန်းခွင်မှာ
        <strong>စဉ်းစားနိုင်ခြင်း → ခွဲခြမ်းနိုင်ခြင်း →
        ဆုံးဖြတ်နိုင်ခြင်း → အကောင်အထည်ဖော်နိုင်ခြင်း</strong>
        အထိ ရောက်ရှိစေဖို့ ဖြစ်ပါတယ်။
      </p>

      <p>
        Business Environment တစ်ခုမှာ
        Customer, People, Product, Market,
        Finance, Operation နဲ့ Competition တို့ဟာ
        သီးခြားမဟုတ်ဘဲ တစ်ခုနဲ့တစ်ခု ဆက်စပ်နေပါတယ်။
      </p>

      <p>
        ဒါကြောင့် Manager တစ်ယောက်ဟာ
        Problem တစ်ခုကို မြင်တဲ့အခါ
        အပေါ်ယံအဖြေတစ်ခုနဲ့ မရပ်ဘဲ
        Business Result အပေါ် ဘယ်လိုသက်ရောက်မှုရှိသလဲ
        ဆိုတာအထိ စဉ်းစားရပါတယ်။
      </p>
    `;

    /* -----------------------------------------
       BUSINESS EXAMPLE
       ----------------------------------------- */

    const businessExample = `
      <h4>💼 Myanmar Business Example</h4>

      <p>
        ဥပမာ မြန်မာနိုင်ငံမှာ
        FMCG / Distribution Business တစ်ခုရှိတယ်လို့
        ယူဆကြည့်ပါစို့။
      </p>

      <p>
        Company က Product ထုတ်လုပ်ပြီး
        Distributor တွေကနေ Retail Outlet တွေဆီ
        ဖြန့်ချိပါတယ်။
      </p>

      <p>
        တစ်လအတွင်း Sales Target ကို
        100% သတ်မှတ်ထားပေမယ့်
        Actual Sales က ${actual}% ပဲ ရရှိတယ်ဆိုပါစို့။
      </p>

      <p>
        Manager တစ်ယောက်က
        “Market မကောင်းလို့ပါ”
        လို့ပဲ ပြောပြီး မပြီးသင့်ပါဘူး။
      </p>

      <p>
        အောက်ပါအချက်တွေကို ဆက်လက်စစ်ဆေးရပါမယ်။
      </p>

      <ul>
        <li>Customer Demand ဘယ်လိုပြောင်းလဲသလဲ?</li>
        <li>Distribution Coverage ဘယ်လောက်ရှိလဲ?</li>
        <li>Product Availability ကောင်းလား?</li>
        <li>Competitor Activity ဘယ်လောက်ပြင်းလဲ?</li>
        <li>Sales Team Productivity ကောင်းလား?</li>
        <li>Price နဲ့ Promotion က ပြိုင်ဆိုင်နိုင်လား?</li>
      </ul>

      <p>
        ဒီလိုမေးခွန်းတွေက
        Managerial Thinking ကို တည်ဆောက်ပေးပါတယ်။
      </p>
    `;

    /* -----------------------------------------
       STEP BY STEP
       ----------------------------------------- */

    const steps = [
      "Objective ကို ရှင်းလင်းစွာ သတ်မှတ်ပါ",
      "လက်ရှိ Situation ကို နားလည်ပါ",
      "Relevant Data ကို စုဆောင်းပါ",
      "Target နှင့် Actual ကို နှိုင်းယှဉ်ပါ",
      "Gap ကို ခွဲခြမ်းပါ",
      "Root Cause ကို ရှာပါ",
      "Priority ကို သတ်မှတ်ပါ",
      "Action Plan တည်ဆောက်ပါ",
      "Owner နှင့် Deadline သတ်မှတ်ပါ",
      "Result ကို Review လုပ်ပြီး ပြန်လည်တိုးတက်အောင်လုပ်ပါ"
    ];

    /* -----------------------------------------
       MANAGEMENT FRAMEWORK
       ----------------------------------------- */

    const framework = [
      {
        title: "1. Situation",
        text: "လက်ရှိအခြေအနေကို အချက်အလက်နဲ့ နားလည်ပါ။"
      },
      {
        title: "2. Gap",
        text: "Target နဲ့ Actual ကြားက ကွာဟချက်ကို ရှာပါ။"
      },
      {
        title: "3. Cause",
        text: "Gap ဖြစ်ရတဲ့ အဓိကအကြောင်းရင်းကို ရှာပါ။"
      },
      {
        title: "4. Decision",
        text: "အရေးကြီးဆုံး Action ကို ရွေးချယ်ပါ။"
      },
      {
        title: "5. Execution",
        text: "Owner နဲ့ Timeline သတ်မှတ်ပြီး အကောင်အထည်ဖော်ပါ။"
      },
      {
        title: "6. Review",
        text: "Result ကို KPI နဲ့ ပြန်တိုင်းပြီး ပြင်ဆင်ပါ။"
      }
    ];

    /* -----------------------------------------
       DATA TABLE
       ----------------------------------------- */

    const dataTable = [
      {
        metric: "Overall Target",
        target: 100,
        actual: actual,
        gap: "-" + gap,
        status: "Attention"
      },
      {
        metric: "Customer Coverage",
        target: 100,
        actual: Math.max(actual - 2, 60),
        gap: "-" + Math.max(gap + 2, 0),
        status: "Monitor"
      },
      {
        metric: "Productivity",
        target: 100,
        actual: Math.max(actual - 7, 55),
        gap: "-" + Math.max(gap + 7, 0),
        status: "Action Required"
      },
      {
        metric: "Execution Quality",
        target: 100,
        actual: Math.max(actual - 4, 60),
        gap: "-" + Math.max(gap + 4, 0),
        status: "Improve"
      }
    ];

    /* -----------------------------------------
       CASE STUDY
       ----------------------------------------- */

    const caseStudy = `
      <h4>📚 Case Study: ABC Business</h4>

      <p>
        ABC Business သည်
        မြို့နယ်အများအပြားတွင်
        Product ဖြန့်ချိနေသော Business တစ်ခုဖြစ်သည်။
      </p>

      <p>
        Management က Monthly Target ကို
        100 Units သတ်မှတ်ထားပါတယ်။
        Actual Result က ${actual} Units ရရှိပါတယ်။
      </p>

      <p>
        ပထမအကြည့်မှာ
        ${gap} Units Gap ရှိနေပါတယ်။
      </p>

      <p>
        Sales Manager က
        Salesperson တွေကို အပြစ်တင်မယ့်အစား
        Data ကို ခွဲခြမ်းပါတယ်။
      </p>

      <p>
        Customer Coverage လျော့နေတယ်။
        Productivity လည်း လျော့နေတယ်။
        Competitor Activity ကလည်း မြင့်နေတယ်။
      </p>

      <p>
        ဒါကြောင့် Management Action အနေနဲ့
      </p>

      <ol>
        <li>Priority Outlet များ သတ်မှတ်ခြင်း</li>
        <li>Route Plan ပြန်လည်ပြင်ဆင်ခြင်း</li>
        <li>Sales Team Coaching ပြုလုပ်ခြင်း</li>
        <li>Competitor Activity Monitoring</li>
        <li>Weekly KPI Review</li>
      </ol>

      <p>
        တစ်ခုတည်းသော Action ထက်
        Root Cause အလိုက် Multiple Actions
        ပေါင်းစပ်အသုံးပြုခြင်းက
        Result ပြန်တက်လာနိုင်ခြေ ပိုမြင့်ပါတယ်။
      </p>
    `;

    /* -----------------------------------------
       MANAGER THINKING
       ----------------------------------------- */

    const managerThinking = [
      "ဒီ Problem ရဲ့ အပေါ်ယံလက္ခဏာနဲ့ Root Cause ကို ခွဲနိုင်လား?",
      "ဘယ် Data က ဒီ Problem ကို အမှန်တကယ်ရှင်းပြနိုင်လဲ?",
      "ဒီ Problem ကို မဖြေရှင်းရင် Business Result ဘယ်လောက်ထိခိုက်မလဲ?",
      "ဘယ် Action က အမြန်ဆုံး Impact ပေးနိုင်လဲ?",
      "ဘယ် Action က Long-term Improvement ပေးနိုင်လဲ?",
      "ဘယ်သူက တာဝန်ယူရမလဲ?",
      "ဘယ်နေ့မှာ Result ပြန်စစ်မလဲ?"
    ];

    /* -----------------------------------------
       COMMON MISTAKES
       ----------------------------------------- */

    const mistakes = [
      "Definition ကိုသိပြီး လက်တွေ့မအသုံးချခြင်း",
      "Data မကြည့်ဘဲ ခန့်မှန်းပြီး ဆုံးဖြတ်ခြင်း",
      "Problem နဲ့ Root Cause ကို ရောထွေးခြင်း",
      "Target မပြည့်တာနဲ့ လူကိုပဲ အပြစ်တင်ခြင်း",
      "Priority မသတ်မှတ်ဘဲ အလုပ်အားလုံးကို တပြိုင်နက်လုပ်ခြင်း",
      "Action Plan မှာ Owner မရှိခြင်း",
      "Deadline မသတ်မှတ်ခြင်း",
      "Result ကို Review မလုပ်ခြင်း"
    ];

    /* -----------------------------------------
       BEST PRACTICES
       ----------------------------------------- */

    const bestPractices = [
      "Customer-first mindset ထားပါ",
      "Data-driven decision making အသုံးပြုပါ",
      "Target နှင့် Actual ကို ပုံမှန်နှိုင်းယှဉ်ပါ",
      "Root Cause ကို ရှာပြီးမှ Action ယူပါ",
      "Priority ကို Business Impact အလိုက် သတ်မှတ်ပါ",
      "Owner နှင့် Deadline တိတိကျကျထားပါ",
      "Weekly / Monthly Review ပြုလုပ်ပါ",
      "Learning ကို Standard Process အဖြစ် ပြောင်းလဲပါ"
    ];

    /* -----------------------------------------
       PRACTICAL EXERCISE
       ----------------------------------------- */

    const exercise = `
      <p>
        ကိုယ့်လက်ရှိလုပ်ငန်းထဲက
        Problem တစ်ခုကို ရွေးပါ။
      </p>

      <div class="aba-exercise-form">

        <div class="exercise-item">
          <strong>1. Problem</strong>
          <span>____________________________</span>
        </div>

        <div class="exercise-item">
          <strong>2. Target</strong>
          <span>____________________________</span>
        </div>

        <div class="exercise-item">
          <strong>3. Actual</strong>
          <span>____________________________</span>
        </div>

        <div class="exercise-item">
          <strong>4. Gap</strong>
          <span>____________________________</span>
        </div>

        <div class="exercise-item">
          <strong>5. Root Cause</strong>
          <span>____________________________</span>
        </div>

        <div class="exercise-item">
          <strong>6. Action</strong>
          <span>____________________________</span>
        </div>

        <div class="exercise-item">
          <strong>7. Owner</strong>
          <span>____________________________</span>
        </div>

        <div class="exercise-item">
          <strong>8. Deadline</strong>
          <span>____________________________</span>
        </div>

      </div>
    `;

    /* -----------------------------------------
       QUIZ
       ----------------------------------------- */

    const quiz = [

      {
        q:
          `${title} ကို လက်တွေ့အသုံးချရာမှာ အရေးကြီးဆုံးက ဘာလဲ?`,

        options: [
          "Definition ကိုသာ မှတ်ထားခြင်း",
          "Knowledge ကို Business Action အဖြစ် ပြောင်းလဲနိုင်ခြင်း",
          "Meeting များစွာလုပ်ခြင်း",
          "Report အများကြီးရေးခြင်း"
        ],

        answer: 1
      },

      {
        q:
          "Target မပြည့်တဲ့အခါ ဘာကိုအရင်စစ်သင့်သလဲ?",

        options: [
          "ဘယ်သူ့ကိုအပြစ်တင်မလဲ",
          "Data နဲ့ Gap",
          "Target ကို ချက်ချင်းလျှော့ခြင်း",
          "Team ကို အပြစ်ပေးခြင်း"
        ],

        answer: 1
      },

      {
        q:
          "Root Cause ဆိုတာဘာလဲ?",

        options: [
          "အပေါ်ယံလက္ခဏာ",
          "တကယ့်အခြေခံအကြောင်းရင်း",
          "Sales Report",
          "Customer List"
        ],

        answer: 1
      },

      {
        q:
          "Professional Manager တစ်ယောက်ရဲ့ အဓိကလုပ်ဆောင်ချက်က ဘာလဲ?",

        options: [
          "အလုပ်အားလုံးကို ကိုယ်တိုင်လုပ်ခြင်း",
          "လူတွေကို အမြဲ Control လုပ်ခြင်း",
          "People, Data, Process နဲ့ Result ကို စီမံခြင်း",
          "Meeting ပဲလုပ်ခြင်း"
        ],

        answer: 2
      },

      {
        q:
          "Action Plan မှာ ဘာတွေပါသင့်သလဲ?",

        options: [
          "Action တစ်ခုတည်း",
          "Action + Owner + Deadline",
          "Problem ပဲ",
          "Target ပဲ"
        ],

        answer: 1
      }

    ];

    /* -----------------------------------------
       REFLECTION
       ----------------------------------------- */

    const reflection = `
      <div class="aba-reflection-box">

        <h4>🔄 Manager Reflection</h4>

        <p>
          <strong>Question 1:</strong>
          ဒီ Lesson ထဲက ဘယ် Concept ကို
          ကိုယ့်လုပ်ငန်းမှာ ချက်ချင်းအသုံးချနိုင်မလဲ?
        </p>

        <p>
          <strong>Question 2:</strong>
          လက်ရှိ Business Problem တစ်ခုကို
          Data နဲ့ ပြန်ကြည့်ရင်
          ဘာတွေကွာခြားလာမလဲ?
        </p>

        <p>
          <strong>Question 3:</strong>
          Manager တစ်ယောက်အနေနဲ့
          ဒီ Problem ကို ဖြေရှင်းမယ်ဆိုရင်
          ပထမဆုံး Action က ဘာဖြစ်မလဲ?
        </p>

      </div>
    `;

    /* -----------------------------------------
       SUMMARY
       ----------------------------------------- */

    const summary = `
      <p>
        <strong>${escapeHTML(title)}</strong>
        ရဲ့ အဓိကအချက်က
        Knowledge ကို လက်တွေ့ Business Result
        အဖြစ် ပြောင်းလဲနိုင်ခြင်း ဖြစ်ပါတယ်။
      </p>

      <p>
        Professional Manager တစ်ယောက်ဟာ
        Situation ကိုနားလည်ပြီး
        Data ကိုကြည့်ကာ
        Gap ကိုရှာပြီး
        Root Cause ကိုသတ်မှတ်ရပါတယ်။
      </p>

      <p>
        အဲ့ဒီနောက် Priority အလိုက်
        Action Plan ချမှတ်ပြီး
        Owner နဲ့ Deadline သတ်မှတ်ကာ
        KPI နဲ့ Result ကို ပြန်လည်တိုင်းတာရပါတယ်။
      </p>

      <p>
        အဓိက Management Cycle ကတော့
      </p>

      <p>
        <strong>
          Situation
          →
          Data
          →
          Analysis
          →
          Decision
          →
          Action
          →
          Review
          →
          Improvement
        </strong>
      </p>
    `;

    return {

      objective: `
        <strong>${escapeHTML(title)}</strong>
        ကို နားလည်ရုံသာမက
        <strong>${escapeHTML(module)}</strong>
        နယ်ပယ်အတွင်းမှာ
        Manager တစ်ယောက်အနေနဲ့
        လက်တွေ့အသုံးချနိုင်ရန် ရည်ရွယ်ပါတယ်။

        ဒီ Lesson ပြီးဆုံးတဲ့အခါ
        Concept, Business Example,
        Decision Framework နဲ့
        Practical Action Plan တို့ကို
        ချိတ်ဆက်အသုံးချနိုင်ရပါမယ်။
      `,

      explanation:
        coreIdea,

      concepts:
        topic.questions,

      examples:
        topic.examples,

      table:
        dataTable,

      framework:
        framework,

      steps:
        steps,

      caseStudy:
        caseStudy,

      application: `
        <p>
          <strong>${escapeHTML(module)}</strong>
          နဲ့ ဆက်စပ်ပြီး ဒီ Concept ကို
          လက်တွေ့လုပ်ငန်းခွင်မှာ အသုံးချနိုင်ပါတယ်။
        </p>

        <ol>
          ${steps.map(function (step) {
            return `<li>${escapeHTML(step)}</li>`;
          }).join("")}
        </ol>

        <p>
          Business Result ကို တိုးတက်စေဖို့
          Activity များတာထက်
          Impact မြင့်တဲ့ Action ကို
          Priority ပေးရပါမယ်။
        </p>
      `,

      managerThinking:
        managerThinking,

      mistakes:
        mistakes,

      bestPractices:
        bestPractices,

      actionPlan: `
        <ol>
          ${steps.map(function (step) {
            return `<li>${escapeHTML(step)}</li>`;
          }).join("")}
        </ol>
      `,

      exercise:
        exercise,

      quiz:
        quiz,

      reflection:
        reflection,

      summary:
        summary,

      graph: {
        target: target,
        actual: actual,
        coverage: Math.max(actual - 2, 60),
        productivity: Math.max(actual - 7, 55)
      },

      achievement:
        achievement,

      gap:
        gap,

      purpose:
        topic.purpose

    };

  }

  /* =========================================================
     7. OPEN LESSON
     ========================================================= */

  function openLesson(id) {

    const lesson =
      LESSONS.find(function (item) {

        return item.id === Number(id);

      });

    if (!lesson) return;

    const content =
      buildDetailedContent(lesson);

    const old =
      document.getElementById(
        "aungProfessionalLessonModal"
      );

    if (old) old.remove();

    const modal =
      document.createElement("div");

    modal.id =
      "aungProfessionalLessonModal";

    modal.innerHTML = `

      <div class="aba-modal-overlay">

        <div class="aba-lesson-modal">

          <!-- HEADER -->

          <div class="aba-lesson-header">

            <div class="aba-lesson-module">

              ${lesson.icon}

              ${escapeHTML(lesson.module)}

            </div>

            <h1>
              ${escapeHTML(lesson.title)}
            </h1>

            <div class="aba-lesson-meta">

              Lesson ${lesson.id}
              / ${LESSONS.length}

              &nbsp; • &nbsp;

              📖 Professional Lesson

              &nbsp; • &nbsp;

              ⏱️ 15–20 Minutes

            </div>

            <button
              class="aba-close-btn"
              id="abaCloseLesson"
              aria-label="Close lesson"
            >
              ✕
            </button>

          </div>


          <!-- BODY -->

          <div class="aba-lesson-body">


            <!-- PURPOSE -->

            <section class="aba-section">

              <div class="aba-section-title">
                🎯 Lesson Purpose
              </div>

              <div class="aba-purpose">
                ${escapeHTML(content.purpose)}
              </div>

            </section>


            <!-- OBJECTIVE -->

            <section class="aba-section">

              <div class="aba-section-title">
                🎯 Learning Objectives
              </div>

              <div class="aba-objective">

                ${content.objective}

              </div>

            </section>


            <!-- EXPLANATION -->

            <section class="aba-section">

              <div class="aba-section-title">
                📖 Detailed Explanation
              </div>

              <div class="aba-text">

                ${content.explanation}

              </div>

            </section>


            <!-- KEY CONCEPTS -->

            <section class="aba-section">

              <div class="aba-section-title">
                🧠 Key Business Concepts
              </div>

              <div class="aba-concept-grid">

                ${content.concepts.map(
                  function (item, index) {

                    return `

                      <div class="aba-concept-card">

                        <div class="aba-concept-number">
                          ${index + 1}
                        </div>

                        <div>
                          ${escapeHTML(item)}
                        </div>

                      </div>

                    `;

                  }
                ).join("")}

              </div>

            </section>


            <!-- EXAMPLES -->

            <section class="aba-section">

              <div class="aba-section-title">
                💼 Business Areas
              </div>

              <div class="aba-example-grid">

                ${content.examples.map(
                  function (item) {

                    return `
                      <div class="aba-example-card">
                        💼 ${escapeHTML(item)}
                      </div>
                    `;

                  }
                ).join("")}

              </div>

            </section>


            <!-- BUSINESS EXAMPLE -->

            <section class="aba-section">

              <div class="aba-section-title">
                🇲🇲 Real Business Example
              </div>

              <div class="aba-case-study">

                ${businessExample}

              </div>

            </section>


            <!-- FRAMEWORK -->

            <section class="aba-section">

              <div class="aba-section-title">
                🧩 Management Framework
              </div>

              <div class="aba-framework-grid">

                ${content.framework.map(
                  function (item) {

                    return `

                      <div class="aba-framework-card">

                        <h4>
                          ${escapeHTML(item.title)}
                        </h4>

                        <p>
                          ${escapeHTML(item.text)}
                        </p>

                      </div>

                    `;

                  }
                ).join("")}

              </div>

            </section>


            <!-- STEP BY STEP -->

            <section class="aba-section">

              <div class="aba-section-title">
                🪜 Step-by-Step Application
              </div>

              <div class="aba-step-list">

                ${content.steps.map(
                  function (step, index) {

                    return `

                      <div class="aba-step">

                        <div class="aba-step-number">
                          ${index + 1}
                        </div>

                        <div>
                          ${escapeHTML(step)}
                        </div>

                      </div>

                    `;

                  }
                ).join("")}

              </div>

            </section>


            <!-- DATA -->

            <section class="aba-section">

              <div class="aba-section-title">
                📊 Business Data Analysis
              </div>

              <div class="aba-table-wrap">

                <table class="aba-data-table">

                  <thead>

                    <tr>
                      <th>Metric</th>
                      <th>Target</th>
                      <th>Actual</th>
                      <th>Gap</th>
                      <th>Status</th>
                    </tr>

                  </thead>

                  <tbody>

                    ${content.table.map(
                      function (row) {

                        return `

                          <tr>

                            <td>
                              ${escapeHTML(row.metric)}
                            </td>

                            <td>
                              ${row.target}%
                            </td>

                            <td>
                              ${row.actual}%
                            </td>

                            <td>
                              ${row.gap}%
                            </td>

                            <td>
                              ${escapeHTML(row.status)}
                            </td>

                          </tr>

                        `;

                      }
                    ).join("")}

                  </tbody>

                </table>

              </div>

            </section>


            <!-- GRAPH -->

            <section class="aba-section">

              <div class="aba-section-title">
                📈 Performance Analysis
              </div>

              <div class="aba-graph">

                <div class="aba-bar-row">

                  <div class="aba-bar-label">
                    Target
                  </div>

                  <div class="aba-bar-track">

                    <div
                      class="aba-bar target"
                      style="width:100%"
                    >
                      100%
                    </div>

                  </div>

                </div>


                <div class="aba-bar-row">

                  <div class="aba-bar-label">
                    Actual
                  </div>

                  <div class="aba-bar-track">

                    <div
                      class="aba-bar actual"
                      style="
                        width:${content.graph.actual}%
                      "
                    >
                      ${content.graph.actual}%
                    </div>

                  </div>

                </div>


                <div class="aba-bar-row">

                  <div class="aba-bar-label">
                    Coverage
                  </div>

                  <div class="aba-bar-track">

                    <div
                      class="aba-bar coverage"
                      style="
                        width:${content.graph.coverage}%
                      "
                    >
                      ${content.graph.coverage}%
                    </div>

                  </div>

                </div>


                <div class="aba-bar-row">

                  <div class="aba-bar-label">
                    Productivity
                  </div>

                  <div class="aba-bar-track">

                    <div
                      class="aba-bar productivity"
                      style="
                        width:${content.graph.productivity}%
                      "
                    >
                      ${content.graph.productivity}%
                    </div>

                  </div>

                </div>

              </div>

              <div class="aba-graph-note">

                Target = 100%

                &nbsp; | &nbsp;

                Actual = ${content.graph.actual}%

                &nbsp; | &nbsp;

                Gap = -${content.gap}%

                <br><br>

                Manager ရဲ့တာဝန်က
                Graph ကိုကြည့်ရုံမဟုတ်ဘဲ
                Gap ဖြစ်ရတဲ့ Root Cause ကိုရှာပြီး
                Business Action အဖြစ် ပြောင်းလဲပေးရန် ဖြစ်ပါတယ်။

              </div>

            </section>


            <!-- CASE STUDY -->

            <section class="aba-section">

              <div class="aba-section-title">
                🧩 Real Business Case Study
              </div>

              <div class="aba-case-study">

                ${content.caseStudy}

              </div>

            </section>


            <!-- APPLICATION -->

            <section class="aba-section">

              <div class="aba-section-title">
                💼 Real Business Application
              </div>

              <div class="aba-text">

                ${content.application}

              </div>

            </section>


            <!-- MANAGER THINKING -->

            <section class="aba-section">

              <div class="aba-section-title">
                👨‍💼 Manager Thinking
              </div>

              <div class="aba-manager-thinking">

                ${content.managerThinking.map(
                  function (item, index) {

                    return `

                      <div class="aba-thinking-item">

                        <span>
                          ${index + 1}
                        </span>

                        <p>
                          ${escapeHTML(item)}
                        </p>

                      </div>

                    `;

                  }
                ).join("")}

              </div>

            </section>


            <!-- MISTAKES -->

            <section class="aba-section">

              <div class="aba-section-title">
                ⚠️ Common Mistakes
              </div>

              <div class="aba-mistake-list">

                ${content.mistakes.map(
                  function (mistake) {

                    return `

                      <div class="aba-mistake">

                        ❌
                        ${escapeHTML(mistake)}

                      </div>

                    `;

                  }
                ).join("")}

              </div>

            </section>


            <!-- BEST PRACTICES -->

            <section class="aba-section">

              <div class="aba-section-title">
                ✅ Best Practices
              </div>

              <div class="aba-best-list">

                ${content.bestPractices.map(
                  function (item) {

                    return `

                      <div class="aba-best-item">

                        ✔️
                        ${escapeHTML(item)}

                      </div>

                    `;

                  }
                ).join("")}

              </div>

            </section>


            <!-- ACTION PLAN -->

            <section class="aba-section">

              <div class="aba-section-title">
                🛠️ Manager Action Plan
              </div>

              <div class="aba-action-plan">

                ${content.actionPlan}

              </div>

            </section>


            <!-- EXERCISE -->

            <section class="aba-section">

              <div class="aba-section-title">
                ✍️ Practical Exercise
              </div>

              <div class="aba-practice">

                ${content.exercise}

              </div>

            </section>


            <!-- QUIZ -->

            <section class="aba-section">

              <div class="aba-section-title">
                🧪 Knowledge Check
              </div>

              <div id="abaQuizContainer">

                ${content.quiz.map(
                  function (quiz, index) {

                    return `

                      <div
                        class="aba-quiz"
                        data-answer="${quiz.answer}"
                      >

                        <div class="aba-quiz-question">

                          ${index + 1}.
                          ${escapeHTML(quiz.q)}

                        </div>

                        <div class="aba-quiz-options">

                          ${quiz.options.map(
                            function (
                              option,
                              optionIndex
                            ) {

                              return `

                                <button
                                  class="aba-quiz-option"
                                  data-index="${optionIndex}"
                                >

                                  ${escapeHTML(option)}

                                </button>

                              `;

                            }
                          ).join("")}

                        </div>

                        <div
                          class="aba-quiz-feedback"
                        ></div>

                      </div>

                    `;

                  }
                ).join("")}

              </div>

            </section>


            <!-- REFLECTION -->

            <section class="aba-section">

              ${content.reflection}

            </section>


            <!-- SUMMARY -->

            <section class="aba-section">

              <div class="aba-section-title">
                📌 Lesson Summary
              </div>

              <div class="aba-summary">

                ${content.summary}

              </div>

            </section>


            <!-- COMPLETION -->

            <section class="aba-completion">

              <div class="aba-completion-icon">

                ${
                  isCompleted(lesson.id)
                    ? "✅"
                    : "🏆"
                }

              </div>

              <h3>

                ${
                  isCompleted(lesson.id)
                    ? "Lesson Completed"
                    : "Complete This Lesson"
                }

              </h3>

              <p>

                ဒီ Lesson ကို
                အပြည့်အဝလေ့လာပြီးပါက
                Complete Lesson ကိုနှိပ်ပါ။

              </p>

              <button
                id="abaCompleteLesson"
                class="aba-complete-button
                  ${
                    isCompleted(lesson.id)
                      ? "completed"
                      : ""
                  }"
              >

                ${
                  isCompleted(lesson.id)
                    ? "✅ Completed"
                    : "✓ Complete Lesson"
                }

              </button>

            </section>


            <!-- NAVIGATION -->

            <div class="aba-lesson-navigation">

              ${
                lesson.id > 1
                  ? `
                    <button
                      id="abaPreviousLesson"
                      class="aba-nav-button"
                    >
                      ← Previous Lesson
                    </button>
                  `
                  : "<span></span>"
              }

              ${
                lesson.id < LESSONS.length
                  ? `
                    <button
                      id="abaNextLesson"
                      class="aba-nav-button primary"
                    >
                      Next Lesson →
                    </button>
                  `
                  : "<span></span>"
              }

            </div>


          </div>

        </div>

      </div>

    `;

    document.body.appendChild(modal);

    /* =====================================================
       CLOSE
       ===================================================== */

    const close =
      document.getElementById(
        "abaCloseLesson"
      );

    if (close) {

      close.addEventListener(
        "click",
        function () {

          modal.remove();

        }
      );

    }

    /* =====================================================
       COMPLETE
       ===================================================== */

    const complete =
      document.getElementById(
        "abaCompleteLesson"
      );

    if (complete) {

      complete.addEventListener(
        "click",
        function () {

          markCompleted(lesson.id);

          complete.textContent =
            "✅ Completed";

          complete.classList.add(
            "completed"
          );

        }
      );

    }

    /* =====================================================
       PREVIOUS
       ===================================================== */

    const previous =
      document.getElementById(
        "abaPreviousLesson"
      );

    if (previous) {

      previous.addEventListener(
        "click",
        function () {

          modal.remove();

          setTimeout(
            function () {

              openLesson(
                lesson.id - 1
              );

            },
            100
          );

        }
      );

    }

    /* =====================================================
       NEXT
       ===================================================== */

    const next =
      document.getElementById(
        "abaNextLesson"
      );

    if (next) {

      next.addEventListener(
        "click",
        function () {

          modal.remove();

          setTimeout(
            function () {

              openLesson(
                lesson.id + 1
              );

            },
            100
          );

        }
      );

    }

    /* =====================================================
       QUIZ
       ===================================================== */

    modal
      .querySelectorAll(
        ".aba-quiz"
      )
      .forEach(
        function (quizElement) {

          const answer =
            Number(
              quizElement.dataset.answer
            );

          const buttons =
            quizElement.querySelectorAll(
              ".aba-quiz-option"
            );

          const feedback =
            quizElement.querySelector(
              ".aba-quiz-feedback"
            );

          buttons.forEach(
            function (button) {

              button.addEventListener(
                "click",
                function () {

                  const selected =
                    Number(
                      button.dataset.index
                    );

                  buttons.forEach(
                    function (btn) {
                      btn.disabled = true;
                    }
                  );

                  if (
                    selected === answer
                  ) {

                    button.classList.add(
                      "correct"
                    );

                    if (feedback) {

                      feedback.textContent =
                        "🎉 Correct! အဖြေမှန်ပါတယ်။";

                      feedback.className =
                        "aba-quiz-feedback correct";

                    }

                  } else {

                    button.classList.add(
                      "wrong"
                    );

                    buttons[
                      answer
                    ].classList.add(
                      "correct"
                    );

                    if (feedback) {

                      feedback.textContent =
                        "❌ မမှန်သေးပါ။ အဖြေမှန်ကို ပြထားပါတယ်။";

                      feedback.className =
                        "aba-quiz-feedback wrong";

                    }

                  }

                }
              );

            }
          );

        }
      );

  }

  /* =========================================================
     8. FIND LESSON PAGE
     ========================================================= */

  function findLessonsPage() {

    const selectors = [

      "#page-lessons",
      "#lessons",
      "#lessonPage",
      ".lessons-page",
      ".lessons-content",
      "[data-page='lessons']",
      "main"

    ];

    for (
      const selector of selectors
    ) {

      const element =
        document.querySelector(
          selector
        );

      if (element) return element;

    }

    return document.body;

  }

  /* =========================================================
     9. STYLES
     ========================================================= */

  function injectStyles() {

    if (
      document.getElementById(
        "aungProfessionalLessonStyles"
      )
    ) return;

    const style =
      document.createElement("style");

    style.id =
      "aungProfessionalLessonStyles";

    style.textContent = `

      .aba-lesson-grid {
        display:grid;
        grid-template-columns:
          repeat(auto-fit,minmax(280px,1fr));
        gap:18px;
      }

      .aba-lesson-card {
        background:#ffffff;
        border:1px solid #e2e8f0;
        border-radius:18px;
        padding:20px;
        cursor:pointer;
        transition:.2s ease;
        box-shadow:
          0 6px 18px rgba(15,23,42,.06);
      }

      .aba-lesson-card:hover {
        transform:translateY(-4px);
        box-shadow:
          0 14px 30px rgba(0,0,0,.12);
      }

      .aba-lesson-card.completed {
        border-color:#22c55e;
      }

      .aba-card-top {
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-bottom:12px;
      }

      .aba-card-module {
        font-size:12px;
        font-weight:800;
        color:#2563eb;
      }

      .aba-card-number {
        font-size:12px;
        color:#64748b;
      }

      .aba-card-title {
        font-size:18px;
        line-height:1.55;
        color:#0f172a;
        font-weight:800;
      }

      .aba-card-bottom {
        margin-top:16px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        font-size:13px;
      }

      .aba-start {
        color:#2563eb;
        font-weight:800;
      }

      .aba-done {
        color:#16a34a;
        font-weight:800;
      }

      .aba-modal-overlay {
        position:fixed;
        inset:0;
        z-index:999999;
        background:
          rgba(15,23,42,.80);
        overflow-y:auto;
        padding:20px;
      }

      .aba-lesson-modal {
        max-width:1050px;
        margin:20px auto;
        background:#ffffff;
        border-radius:24px;
        overflow:hidden;
        box-shadow:
          0 25px 70px rgba(0,0,0,.35);
      }

      .aba-lesson-header {
        position:relative;
        background:
          linear-gradient(
            135deg,
            #0f172a,
            #1d4ed8
          );
        color:white;
        padding:38px;
      }

      .aba-lesson-header h1 {
        margin:10px 60px 14px 0;
        font-size:31px;
        line-height:1.45;
      }

      .aba-lesson-module {
        font-size:13px;
        font-weight:800;
        opacity:.9;
      }

      .aba-lesson-meta {
        font-size:13px;
        opacity:.8;
      }

      .aba-close-btn {
        position:absolute;
        right:22px;
        top:22px;
        width:44px;
        height:44px;
        border:0;
        border-radius:50%;
        background:
          rgba(255,255,255,.15);
        color:white;
        font-size:20px;
        cursor:pointer;
      }

      .aba-lesson-body {
        padding:32px;
      }

      .aba-section {
        margin-bottom:38px;
      }

      .aba-section-title {
        font-size:22px;
        font-weight:900;
        color:#0f172a;
        margin-bottom:17px;
      }

      .aba-text {
        color:#334155;
        line-height:2.05;
        font-size:15px;
      }

      .aba-text p {
        margin:0 0 16px;
      }

      .aba-purpose {
        background:#f8fafc;
        border:1px solid #e2e8f0;
        padding:18px;
        border-radius:12px;
        line-height:1.8;
        color:#334155;
      }

      .aba-objective {
        background:#eff6ff;
        border-left:5px solid #2563eb;
        padding:22px;
        border-radius:12px;
        line-height:2;
        color:#334155;
      }

      .aba-concept-grid {
        display:grid;
        grid-template-columns:
          repeat(auto-fit,minmax(220px,1fr));
        gap:12px;
      }

      .aba-concept-card {
        display:flex;
        gap:12px;
        align-items:flex-start;
        background:#f8fafc;
        border:1px solid #e2e8f0;
        border-radius:12px;
        padding:15px;
        line-height:1.7;
        color:#334155;
      }

      .aba-concept-number {
        width:32px;
        height:32px;
        min-width:32px;
        display:flex;
        align-items:center;
        justify-content:center;
        border-radius:50%;
        background:#2563eb;
        color:white;
        font-weight:800;
      }

      .aba-example-grid {
        display:grid;
        grid-template-columns:
          repeat(auto-fit,minmax(180px,1fr));
        gap:12px;
      }

      .aba-example-card {
        background:#ffffff;
        border:1px solid #e2e8f0;
        border-radius:12px;
        padding:16px;
        font-weight:800;
        color:#334155;
        box-shadow:
          0 4px 12px rgba(15,23,42,.05);
      }

      .aba-framework-grid {
        display:grid;
        grid-template-columns:
          repeat(auto-fit,minmax(250px,1fr));
        gap:14px;
      }

      .aba-framework-card {
        background:#f8fafc;
        border:1px solid #e2e8f0;
        border-radius:14px;
        padding:18px;
      }

      .aba-framework-card h4 {
        margin:0 0 8px;
        color:#0f172a;
      }

      .aba-framework-card p {
        margin:0;
        color:#64748b;
        line-height:1.7;
      }

      .aba-step-list {
        display:grid;
        gap:10px;
      }

      .aba-step {
        display:flex;
        gap:14px;
        align-items:center;
        padding:15px;
        background:#ffffff;
        border:1px solid #e2e8f0;
        border-radius:12px;
        color:#334155;
        line-height:1.6;
      }

      .aba-step-number {
        width:34px;
        height:34px;
        min-width:34px;
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius:50%;
        background:#0f172a;
        color:white;
        font-weight:800;
      }

      .aba-table-wrap {
        overflow-x:auto;
      }

      .aba-data-table {
        width:100%;
        border-collapse:collapse;
        min-width:650px;
      }

      .aba-data-table th {
        background:#0f172a;
        color:white;
        padding:14px;
        text-align:left;
      }

      .aba-data-table td {
        padding:14px;
        border:1px solid #e2e8f0;
        color:#334155;
      }

      .aba-data-table tr:nth-child(even) {
        background:#f8fafc;
      }

      .aba-graph {
        background:#f8fafc;
        border:1px solid #e2e8f0;
        border-radius:16px;
        padding:22px;
      }

      .aba-bar-row {
        display:grid;
        grid-template-columns:120px 1fr;
        gap:12px;
        align-items:center;
        margin:16px 0;
      }

      .aba-bar-label {
        font-size:13px;
        font-weight:800;
        color:#334155;
      }

      .aba-bar-track {
        background:#e2e8f0;
        height:34px;
        border-radius:8px;
        overflow:hidden;
      }

      .aba-bar {
        height:100%;
        display:flex;
        align-items:center;
        padding-left:12px;
        color:white;
        font-weight:800;
        font-size:12px;
        border-radius:8px;
      }

      .aba-bar.target {
        background:#0f172a;
      }

      .aba-bar.actual {
        background:#2563eb;
      }

      .aba-bar.coverage {
        background:#16a34a;
      }

      .aba-bar.productivity {
        background:#ea580c;
      }

      .aba-graph-note {
        margin-top:15px;
        padding:17px;
        background:#eff6ff;
        border-radius:10px;
        line-height:1.8;
        color:#334155;
      }

      .aba-case-study {
        background:#fffbeb;
        border-left:5px solid #f59e0b;
        border-radius:12px;
        padding:23px;
        line-height:2;
        color:#334155;
      }

      .aba-case-study h4 {
        margin-top:0;
        color:#92400e;
      }

      .aba-case-study p {
        margin:0 0 14px;
      }

      .aba-case-study li {
        margin:7px 0;
      }

      .aba-manager-thinking {
        display:grid;
        gap:10px;
      }

      .aba-thinking-item {
        display:flex;
        gap:14px;
        align-items:flex-start;
        padding:16px;
        background:#f5f3ff;
        border-left:4px solid #7c3aed;
        border-radius:10px;
      }

      .aba-thinking-item span {
        width:28px;
        height:28px;
        min-width:28px;
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius:50%;
        background:#7c3aed;
        color:white;
        font-size:12px;
        font-weight:800;
      }

      .aba-thinking-item p {
        margin:3px 0 0;
        color:#334155;
        line-height:1.7;
      }

      .aba-mistake-list {
        display:grid;
        gap:10px;
      }

      .aba-mistake {
        padding:14px 16px;
        background:#fef2f2;
        border:1px solid #fecaca;
        border-radius:10px;
        color:#991b1b;
        line-height:1.6;
      }

      .aba-best-list {
        display:grid;
        gap:10px;
      }

      .aba-best-item {
        padding:14px 16px;
        background:#ecfdf5;
        border:1px solid #bbf7d0;
        border-radius:10px;
        color:#166534;
        line-height:1.6;
      }

      .aba-action-plan {
        background:#ecfdf5;
        border-left:5px solid #16a34a;
        border-radius:12px;
        padding:23px;
        line-height:2;
        color:#14532d;
      }

      .aba-action-plan li {
        margin:8px 0;
      }

      .aba-practice {
        background:#f8fafc;
        border:1px solid #e2e8f0;
        border-radius:14px;
        padding:23px;
        line-height:2;
        color:#334155;
      }

      .aba-exercise-form {
        display:grid;
        gap:10px;
        margin-top:18px;
      }

      .exercise-item {
        display:flex;
        justify-content:space-between;
        gap:20px;
        background:white;
        border:1px dashed #94a3b8;
        border-radius:10px;
        padding:14px;
      }

      .exercise-item strong {
        color:#0f172a;
      }

      .exercise-item span {
        color:#64748b;
      }

      .aba-quiz {
        background:#f8fafc;
        border:1px solid #e2e8f0;
        border-radius:14px;
        padding:20px;
        margin-bottom:15px;
      }

      .aba-quiz-question {
        font-weight:800;
        color:#0f172a;
        margin-bottom:14px;
        line-height:1.7;
      }

      .aba-quiz-options {
        display:grid;
        gap:8px;
      }

      .aba-quiz-option {
        border:1px solid #cbd5e1;
        background:white;
        border-radius:10px;
        padding:13px 14px;
        text-align:left;
        cursor:pointer;
        color:#334155;
        line-height:1.5;
      }

      .aba-quiz-option:hover {
        background:#eff6ff;
      }

      .aba-quiz-option.correct {
        background:#dcfce7;
        border-color:#22c55e;
        color:#166534;
      }

      .aba-quiz-option.wrong {
        background:#fee2e2;
        border-color:#ef4444;
        color:#991b1b;
      }

      .aba-quiz-feedback {
        margin-top:12px;
        font-weight:800;
      }

      .aba-quiz-feedback.correct {
        color:#15803d;
      }

      .aba-quiz-feedback.wrong {
        color:#b91c1c;
      }

      .aba-reflection-box {
        background:#f0fdf4;
        border-left:5px solid #22c55e;
        padding:23px;
        border-radius:12px;
        line-height:2;
        color:#334155;
      }

      .aba-reflection-box h4 {
        margin-top:0;
        color:#166534;
      }

      .aba-summary {
        background:#f1f5f9;
        padding:23px;
        border-radius:14px;
        line-height:2;
        color:#334155;
      }

      .aba-completion {
        text-align:center;
        background:
          linear-gradient(
            135deg,
            #eff6ff,
            #f8fafc
          );
        border:1px solid #dbeafe;
        border-radius:18px;
        padding:32px 20px;
      }

      .aba-completion-icon {
        font-size:45px;
        margin-bottom:10px;
      }

      .aba-completion h3 {
        color:#0f172a;
        margin-bottom:8px;
      }

      .aba-completion p {
        color:#64748b;
        line-height:1.7;
      }

      .aba-complete-button {
        margin-top:15px;
        padding:14px 26px;
        border:0;
        border-radius:12px;
        background:#2563eb;
        color:white;
        font-size:16px;
        font-weight:800;
        cursor:pointer;
      }

      .aba-complete-button:hover {
        background:#1d4ed8;
      }

      .aba-complete-button.completed {
        background:#16a34a;
      }

      .aba-lesson-navigation {
        display:flex;
        justify-content:space-between;
        gap:15px;
        margin-top:30px;
      }

      .aba-nav-button {
        border:1px solid #cbd5e1;
        background:white;
        color:#334155;
        padding:13px 20px;
        border-radius:10px;
        font-weight:800;
        cursor:pointer;
      }

      .aba-nav-button.primary {
        background:#0f172a;
        color:white;
        border-color:#0f172a;
      }

      @media(max-width:700px) {

        .aba-modal-overlay {
          padding:0;
        }

        .aba-lesson-modal {
          margin:0;
          border-radius:0;
          min-height:100vh;
        }

        .aba-lesson-header {
          padding:25px 20px;
        }

        .aba-lesson-header h1 {
          font-size:23px;
        }

        .aba-lesson-body {
          padding:20px;
        }

        .aba-section-title {
          font-size:19px;
        }

        .aba-bar-row {
          grid-template-columns:1fr;
          gap:6px;
        }

        .aba-lesson-navigation {
          flex-direction:column;
        }

        .aba-nav-button {
          width:100%;
        }

        .exercise-item {
          flex-direction:column;
          gap:5px;
        }

      }

    `;

    document.head.appendChild(style);

  }

  /* =========================================================
     10. FIND PAGE
     ========================================================= */

  function renderLessons() {

    const page =
      findLessonsPage();

    if (!page) return;

    let container =
      document.getElementById(
        "aungProfessional230Lessons"
      );

    if (!container) {

      container =
        document.createElement("div");

      container.id =
        "aungProfessional230Lessons";

      container.style.cssText = `
        width:100%;
        margin:25px 0;
      `;

      page.appendChild(container);

    }

    container.innerHTML = `

      <div class="aba-course-banner">

        <div style="
          font-size:12px;
          font-weight:800;
          opacity:.75;
          margin-bottom:8px;
        ">
          AUNG BUSINESS ACADEMY
        </div>

        <h2 style="
          margin:0 0 8px;
          font-size:28px;
        ">
          📚 Professional Business Academy
        </h2>

        <p style="
          margin:0;
          opacity:.9;
          line-height:1.8;
        ">
          230 Detailed Business Lessons
          for Managers, Sales Professionals
          and Business Owners
        </p>

        <div style="
          display:flex;
          flex-wrap:wrap;
          gap:10px;
          margin-top:18px;
        ">

          <span class="aba-banner-pill">
            📚 230 Lessons
          </span>

          <span class="aba-banner-pill">
            🧠 Manager Thinking
          </span>

          <span class="aba-banner-pill">
            💼 Case Studies
          </span>

          <span class="aba-banner-pill">
            📊 Business Data
          </span>

          <span class="aba-banner-pill">
            ✍️ Exercises
          </span>

          <span class="aba-banner-pill">
            🧪 Quizzes
          </span>

        </div>

      </div>


      <div style="
        display:flex;
        flex-wrap:wrap;
        gap:10px;
        margin-bottom:20px;
      ">

        <input
          id="abaLessonSearch"
          type="search"
          placeholder="🔎 Search lessons..."
          style="
            flex:1;
            min-width:230px;
            padding:13px 15px;
            border:1px solid #cbd5e1;
            border-radius:10px;
            outline:none;
          "
        />

        <select
          id="abaModuleFilter"
          style="
            padding:13px 15px;
            border:1px solid #cbd5e1;
            border-radius:10px;
            background:white;
          "
        >

          <option value="all">
            All Modules
          </option>

          ${MODULES.map(
            function (module) {

              return `
                <option value="${escapeHTML(module.name)}">
                  ${module.icon}
                  ${escapeHTML(module.name)}
                </option>
              `;

            }
          ).join("")}

        </select>

        <select
          id="abaStatusFilter"
          style="
            padding:13px 15px;
            border:1px solid #cbd5e1;
            border-radius:10px;
            background:white;
          "
        >

          <option value="all">
            All Lessons
          </option>

          <option value="remaining">
            Remaining
          </option>

          <option value="completed">
            Completed
          </option>

        </select>

      </div>


      <div
        id="abaLessonResultInfo"
        style="
          margin-bottom:15px;
          color:#64748b;
          font-size:14px;
          font-weight:700;
        "
      >
      </div>


      <div
        id="abaLessonGrid"
        class="aba-lesson-grid"
      >
      </div>

    `;

    /* Banner style */

    const banner =
      container.querySelector(
        ".aba-course-banner"
      );

    if (banner) {

      banner.style.cssText = `
        background:
          linear-gradient(
            135deg,
            #0f172a,
            #1d4ed8
          );
        color:white;
        padding:28px;
        border-radius:20px;
        margin-bottom:20px;
      `;

    }

    container
      .querySelectorAll(
        ".aba-banner-pill"
      )
      .forEach(function (pill) {

        pill.style.cssText = `
          padding:8px 13px;
          border-radius:20px;
          background:rgba(255,255,255,.15);
          font-size:13px;
        `;

      });

    const grid =
      document.getElementById(
        "abaLessonGrid"
      );

    const search =
      document.getElementById(
        "abaLessonSearch"
      );

    const moduleFilter =
      document.getElementById(
        "abaModuleFilter"
      );

    const statusFilter =
      document.getElementById(
        "abaStatusFilter"
      );

    function refresh() {

      const searchText =
        (search.value || "")
          .toLowerCase()
          .trim();

      const selectedModule =
        moduleFilter.value;

      const status =
        statusFilter.value;

      const completed =
        getCompleted();

      const filtered =
        LESSONS.filter(
          function (lesson) {

            const matchesSearch =
              !searchText ||
              lesson.title
                .toLowerCase()
                .includes(searchText) ||
              lesson.module
                .toLowerCase()
                .includes(searchText);

            const matchesModule =
              selectedModule === "all" ||
              lesson.module ===
                selectedModule;

            const matchesStatus =
              status === "all" ||
              (
                status === "completed" &&
                completed.includes(
                  lesson.id
                )
              ) ||
              (
                status === "remaining" &&
                !completed.includes(
                  lesson.id
                )
              );

            return (
              matchesSearch &&
              matchesModule &&
              matchesStatus
            );

          }
        );

      document.getElementById(
        "abaLessonResultInfo"
      ).textContent =
        `Showing ${filtered.length} of ${LESSONS.length} lessons`;

      grid.innerHTML = "";

      if (!filtered.length) {

        grid.innerHTML = `

          <div style="
            grid-column:1/-1;
            text-align:center;
            padding:50px 20px;
            color:#64748b;
          ">

            <div style="
              font-size:45px;
              margin-bottom:10px;
            ">
              🔎
            </div>

            <h3>
              No lessons found
            </h3>

            <p>
              Search or filter ပြန်ပြောင်းကြည့်ပါ။
            </p>

          </div>

        `;

        return;

      }

      filtered.forEach(
        function (lesson) {

          const done =
            completed.includes(
              lesson.id
            );

          const card =
            document.createElement("div");

          card.className =
            "aba-lesson-card" +
            (
              done
                ? " completed"
                : ""
            );

          card.innerHTML = `

            <div class="aba-card-top">

              <div class="aba-card-module">

                ${lesson.icon}

                ${escapeHTML(
                  lesson.module
                )}

              </div>

              <div class="aba-card-number">

                ${lesson.id}
                /
                ${LESSONS.length}

              </div>

            </div>

            <div class="aba-card-title">

              ${escapeHTML(
                lesson.title
              )}

            </div>

            <div class="aba-card-bottom">

              <div>

                ${
                  done
                    ? `
                      <span class="aba-done">
                        ✓ Completed
                      </span>
                    `
                    : `
                      <span class="aba-start">
                        📖 Start Lesson →
                      </span>
                    `
                }

              </div>

              <div>
                ⏱️ 15–20 min
              </div>

            </div>

          `;

          card.addEventListener(
            "click",
            function () {

              openLesson(
                lesson.id
              );

            }
          );

          grid.appendChild(card);

        }
      );

    }

    search.addEventListener(
      "input",
      refresh
    );

    moduleFilter.addEventListener(
      "change",
      refresh
    );

    statusFilter.addEventListener(
      "change",
      refresh
    );

    refresh();

  }

  /* =========================================================
     11. DASHBOARD
     ========================================================= */

  function updateDashboard() {

    const completed =
      getCompleted().length;

    const total =
      LESSONS.length;

    const progress =
      Math.round(
        (completed / total) * 100
      );

    document
      .querySelectorAll(
        "#completedLessons," +
        "#completedCount," +
        "[data-completed-lessons]"
      )
      .forEach(function (element) {

        element.textContent =
          completed;

      });

    document
      .querySelectorAll(
        "#progressPercent," +
        "[data-progress-percent]"
      )
      .forEach(function (element) {

        element.textContent =
          progress + "%";

      });

    document
      .querySelectorAll(
        ".progress-bar-fill," +
        "[data-progress-bar]"
      )
      .forEach(function (element) {

        element.style.width =
          progress + "%";

      });

  }

  /* =========================================================
     12. NAVIGATION
     ========================================================= */

  function setupNavigation() {

    document
      .querySelectorAll(
        "[data-page='lessons'], #nav-lessons, .nav-lessons"
      )
      .forEach(function (button) {

        button.addEventListener(
          "click",
          function () {

            setTimeout(
              renderLessons,
              100
            );

            setTimeout(
              renderLessons,
              700
            );

          }
        );

      });

  }

  /* =========================================================
     13. INIT
     ========================================================= */

  function init() {

    injectStyles();

    setupNavigation();

    updateDashboard();

    setTimeout(
      renderLessons,
      500
    );

    setTimeout(
      renderLessons,
      1500
    );

    setTimeout(
      renderLessons,
      3000
    );

  }

  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      init
    );

  } else {

    init();

  }

  /* =========================================================
     14. PUBLIC API
     ========================================================= */

  window.AungBusinessAcademy = {

    lessons:
      LESSONS,

    modules:
      MODULES,

    totalLessons:
      LESSONS.length,

    openLesson:
      openLesson,

    markCompleted:
      markCompleted,

    getCompleted:
      getCompleted,

    getProgress:
      getProgress,

    refresh:
      renderLessons

  };

})();
```
