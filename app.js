```javascript
/* ============================================================
   AUNG BUSINESS ACADEMY
   PROFESSIONAL LESSON ENGINE
   260 LESSONS
   230 BUSINESS + 30 BUSINESS ENGLISH
   ============================================================ */

(function () {
  "use strict";

  const STORAGE_KEY = "aungBusinessAcademy";
  const LESSON_STORAGE_KEY = "aungBusinessAcademyLessons";

  /* ============================================================
     STATE
     ============================================================ */

  let state = {
    currentPage: "dashboard",
    completedLessons: []
  };

  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && typeof saved === "object") {
      state = Object.assign(state, saved);
    }
  } catch (e) {}

  try {
    const savedLessons =
      JSON.parse(localStorage.getItem(LESSON_STORAGE_KEY));

    if (Array.isArray(savedLessons)) {
      state.completedLessons = savedLessons;
    }
  } catch (e) {
    state.completedLessons = [];
  }

  /* ============================================================
     BUSINESS MODULES
     23 × 10 = 230
     ============================================================ */

  const businessModules = [
    {
      name: "Business Basics",
      lessons: [
        "Understanding Business",
        "Business Models",
        "Value Creation",
        "Understanding Customers",
        "Revenue Basics",
        "Cost Basics",
        "Profit Basics",
        "Business Resources",
        "Business Risks",
        "Business Growth"
      ]
    },
    {
      name: "Strategic Thinking",
      lessons: [
        "Strategic Thinking Fundamentals",
        "Vision and Mission",
        "Business Objectives",
        "Competitive Advantage",
        "Market Positioning",
        "Strategic Priorities",
        "Business Strategy",
        "Strategic Planning",
        "Strategic Execution",
        "Strategic Review"
      ]
    },
    {
      name: "Brand Basics",
      lessons: [
        "Understanding Brands",
        "Brand Identity",
        "Brand Positioning",
        "Brand Promise",
        "Brand Value",
        "Customer Perception",
        "Brand Consistency",
        "Brand Trust",
        "Brand Differentiation",
        "Brand Growth"
      ]
    },
    {
      name: "Marketing Basics",
      lessons: [
        "Marketing Fundamentals",
        "Marketing Objectives",
        "Customer Segmentation",
        "Target Market",
        "Marketing Mix",
        "Product Strategy",
        "Promotion Strategy",
        "Digital Marketing Basics",
        "Marketing Measurement",
        "Marketing Planning"
      ]
    },
    {
      name: "Sales Basics",
      lessons: [
        "Sales Fundamentals",
        "Sales Process",
        "Prospecting",
        "Customer Needs",
        "Sales Presentation",
        "Product Benefits",
        "Sales Objections",
        "Closing Sales",
        "Follow-up",
        "Sales Discipline"
      ]
    },
    {
      name: "Sales Management",
      lessons: [
        "Role of Sales Manager",
        "Sales Target Management",
        "Sales Team Structure",
        "Territory Management",
        "Sales Planning",
        "Field Execution",
        "Sales Meeting Management",
        "Sales Review",
        "Sales Coaching",
        "Sales Manager Excellence"
      ]
    },
    {
      name: "Sales Planning",
      lessons: [
        "Annual Sales Planning",
        "Monthly Sales Planning",
        "Weekly Sales Planning",
        "Daily Sales Planning",
        "Sales Forecasting",
        "Target Allocation",
        "Route Planning",
        "Customer Planning",
        "Execution Calendar",
        "Sales Plan Review"
      ]
    },
    {
      name: "Sales KPI & Performance",
      lessons: [
        "Understanding KPIs",
        "Sales Achievement",
        "Growth Rate",
        "Volume KPI",
        "Revenue KPI",
        "Distribution KPI",
        "Productivity KPI",
        "Conversion KPI",
        "Performance Dashboard",
        "Performance Improvement"
      ]
    },
    {
      name: "Customer Management",
      lessons: [
        "Customer Management Basics",
        "Customer Segmentation",
        "Customer Value",
        "Key Account Management",
        "Customer Relationship",
        "Customer Retention",
        "Customer Development",
        "Customer Visit Planning",
        "Customer Data",
        "Customer Growth"
      ]
    },
    {
      name: "Negotiation",
      lessons: [
        "Negotiation Fundamentals",
        "Negotiation Preparation",
        "Understanding Customer Needs",
        "Negotiation Position",
        "Price Negotiation",
        "Value Negotiation",
        "Win-Win Negotiation",
        "Handling Pressure",
        "Negotiation Mistakes",
        "Negotiation Excellence"
      ]
    },
    {
      name: "Customer Service",
      lessons: [
        "Customer Service Fundamentals",
        "Customer Expectations",
        "Service Standards",
        "Communication with Customers",
        "Handling Complaints",
        "Problem Resolution",
        "Customer Satisfaction",
        "Service Recovery",
        "Customer Loyalty",
        "Service Excellence"
      ]
    },
    {
      name: "People Management",
      lessons: [
        "People Management Basics",
        "Team Structure",
        "Setting Expectations",
        "Delegation",
        "Motivation",
        "Performance Management",
        "Employee Development",
        "Conflict Management",
        "Team Communication",
        "High Performance Teams"
      ]
    },
    {
      name: "Coaching & Leadership",
      lessons: [
        "Leadership Fundamentals",
        "Manager vs Leader",
        "Coaching Mindset",
        "Field Coaching",
        "Giving Feedback",
        "Performance Coaching",
        "Empowerment",
        "Accountability",
        "Leadership Communication",
        "Leadership Excellence"
      ]
    },
    {
      name: "Distribution Management",
      lessons: [
        "Distribution Fundamentals",
        "Distributor Management",
        "Route to Market",
        "Direct Distribution",
        "Indirect Distribution",
        "Stock Management",
        "Order Management",
        "Distributor Performance",
        "Distribution Expansion",
        "Distribution Excellence"
      ]
    },
    {
      name: "Market Analysis",
      lessons: [
        "Market Analysis Fundamentals",
        "Market Size",
        "Market Growth",
        "Market Share",
        "Customer Trends",
        "Channel Analysis",
        "Area Analysis",
        "Market Opportunity",
        "Market Risk",
        "Market Action Plan"
      ]
    },
    {
      name: "Competitor Management",
      lessons: [
        "Understanding Competitors",
        "Competitor Mapping",
        "Competitor Pricing",
        "Competitor Products",
        "Competitor Promotion",
        "Competitor Distribution",
        "Competitor Strengths",
        "Competitor Weaknesses",
        "Competitive Response",
        "Competitive Strategy"
      ]
    },
    {
      name: "Profit & Loss",
      lessons: [
        "Understanding P&L",
        "Revenue",
        "Cost of Goods Sold",
        "Gross Profit",
        "Operating Expenses",
        "Net Profit",
        "Gross Margin",
        "Profit Improvement",
        "P&L Analysis",
        "Manager P&L Thinking"
      ]
    },
    {
      name: "Pricing Strategy",
      lessons: [
        "Pricing Fundamentals",
        "Cost-Based Pricing",
        "Value-Based Pricing",
        "Competitive Pricing",
        "Price Positioning",
        "Discount Management",
        "Trade Promotion",
        "Price Elasticity",
        "Price Review",
        "Pricing Strategy"
      ]
    },
    {
      name: "Business Finance",
      lessons: [
        "Finance Fundamentals",
        "Cash Flow",
        "Working Capital",
        "Accounts Receivable",
        "Credit Management",
        "Budget Management",
        "Financial Planning",
        "Financial Controls",
        "Financial Analysis",
        "Manager Financial Thinking"
      ]
    },
    {
      name: "Goal Setting",
      lessons: [
        "Goal Setting Fundamentals",
        "SMART Goals",
        "Business Goals",
        "Sales Goals",
        "Team Goals",
        "Personal Goals",
        "Goal Breakdown",
        "Action Planning",
        "Goal Tracking",
        "Goal Achievement"
      ]
    },
    {
      name: "Business Communication",
      lessons: [
        "Business Communication Basics",
        "Professional Communication",
        "Manager Communication",
        "Team Communication",
        "Customer Communication",
        "Presentation Skills",
        "Reporting Skills",
        "Meeting Communication",
        "Difficult Conversations",
        "Executive Communication"
      ]
    },
    {
      name: "Strategic Sales Leadership",
      lessons: [
        "Strategic Sales Leadership",
        "Sales Vision",
        "Sales Organization",
        "Sales Capability",
        "Revenue Growth Strategy",
        "Market Expansion Strategy",
        "Customer Growth Strategy",
        "Sales Transformation",
        "Leadership Decision Making",
        "Strategic Sales Excellence"
      ]
    },
    {
      name: "Decision Making & Problem Solving",
      lessons: [
        "Decision Making Fundamentals",
        "Problem Identification",
        "Root Cause Analysis",
        "5 Why Analysis",
        "Data-Based Decisions",
        "Decision Prioritization",
        "Risk-Based Decisions",
        "Problem Solving Process",
        "Manager Decision Making",
        "Business Problem Solving Excellence"
      ]
    }
  ];

  /* ============================================================
     BUSINESS ENGLISH
     30 LESSONS
     ============================================================ */

  const englishLessons = [
    "Business English Fundamentals",
    "Introducing Yourself Professionally",
    "Introducing Your Company",
    "Workplace Vocabulary",
    "Daily Business Conversations",
    "Speaking with Customers",
    "Sales English Basics",
    "Sales Presentation English",
    "Product Explanation English",
    "Asking the Right Questions",
    "Handling Customer Questions",
    "Handling Customer Objections",
    "Negotiation English",
    "Price Negotiation English",
    "Closing Sales in English",
    "Customer Service English",
    "Handling Complaints in English",
    "Business Meeting English",
    "Joining a Meeting",
    "Leading a Meeting",
    "Giving a Business Update",
    "Presentation English",
    "Email Writing Basics",
    "Professional Email Structure",
    "Request and Follow-Up Emails",
    "Reporting English",
    "Management Communication English",
    "Interview English",
    "Sales Manager Interview English",
    "Professional Business English Mastery"
  ];

  /* ============================================================
     LESSON ARRAY
     ============================================================ */

  const lessons = [];

  let number = 1;

  businessModules.forEach(module => {

    module.lessons.forEach(title => {

      lessons.push({
        id: "B" + number,
        number,
        type: "business",
        module: module.name,
        title
      });

      number++;
    });

  });

  englishLessons.forEach(title => {

    lessons.push({
      id: "E" + (number - 230),
      number,
      type: "english",
      module: "Business English",
      title
    });

    number++;
  });

  /* ============================================================
     DETAILED CONTENT ENGINE
     ============================================================ */

  const topicMap = {

    "Sales Target Management": {
      focus: "Target ကို Number တစ်ခုအဖြစ်ပဲ မကြည့်ဘဲ People + Customer + Territory + Execution + Result အဖြစ် ခွဲခြမ်းစိတ်ဖြာခြင်း",
      metric: "Target Achievement",
      values: [62, 70, 76, 84]
    },

    "Sales Achievement": {
      focus: "Target နဲ့ Actual Sales ကို နှိုင်းယှဉ်ပြီး Gap ကိုရှာဖွေကာ Action Plan ချမှတ်ခြင်း",
      metric: "Achievement %",
      values: [58, 68, 77, 88]
    },

    "Growth Rate": {
      focus: "ယခင်ကာလနှင့် လက်ရှိကာလ၏ Result ကို နှိုင်းယှဉ်ပြီး Growth ရဲ့အကြောင်းရင်းကို ရှာဖွေခြင်း",
      metric: "Growth %",
      values: [4, 9, 13, 19]
    },

    "Revenue": {
      focus: "Revenue ဆိုတာ ဘယ်ကလာသလဲ၊ ဘယ် Customer/Channel/Product က အများဆုံး Contribution ပေးသလဲဆိုတာ ခွဲခြမ်းခြင်း",
      metric: "Revenue",
      values: [45, 58, 71, 86]
    },

    "Gross Profit": {
      focus: "Sales ရှိတာနဲ့ Profit ရှိတာ မတူကြောင်း နားလည်ပြီး Gross Profit ကို စောင့်ကြည့်ခြင်း",
      metric: "Gross Profit",
      values: [22, 31, 39, 47]
    },

    "Market Share": {
      focus: "ကိုယ့် Business ရဲ့ Market Position ကို Competitor နဲ့ နှိုင်းယှဉ်ပြီး Growth Opportunity ရှာခြင်း",
      metric: "Market Share %",
      values: [21, 25, 29, 34]
    },

    "Customer Retention": {
      focus: "Customer အသစ်ရှာခြင်းအပြင် ရှိပြီးသား Customer ကို ထိန်းသိမ်းပြီး Customer Lifetime Value တိုးစေခြင်း",
      metric: "Retention %",
      values: [72, 76, 82, 89]
    },

    "Pricing Strategy": {
      focus: "Price ကို Cost, Customer Value, Competitor နဲ့ Profit Target အပေါ် အခြေခံပြီး ဆုံးဖြတ်ခြင်း",
      metric: "Average Price Index",
      values: [80, 84, 88, 94]
    },

    "Cash Flow": {
      focus: "Profit ရှိသော်လည်း Cash မရှိနိုင်သည့်အကြောင်းကို နားလည်ပြီး Cash Inflow/Outflow ကို စီမံခြင်း",
      metric: "Cash Flow Index",
      values: [48, 57, 69, 81]
    },

    "Performance Dashboard": {
      focus: "Manager တစ်ယောက်အနေနဲ့ KPI များကို တစ်နေရာတည်းမှာ မြင်ပြီး အမြန်ဆုံး Decision ချနိုင်အောင် Dashboard တည်ဆောက်ခြင်း",
      metric: "Performance Score",
      values: [55, 64, 78, 91]
    }
  };

  function getTopicData(lesson) {

    if (topicMap[lesson.title]) {
      return topicMap[lesson.title];
    }

    if (
      lesson.module.includes("Sales") ||
      lesson.module.includes("Distribution")
    ) {
      return {
        focus:
          `${lesson.title} ကို Sales Target, Customer, Team, Territory နဲ့ Execution တို့နဲ့ ဆက်စပ်ပြီး လက်တွေ့အသုံးချခြင်း`,
        metric: "Performance %",
        values: [55, 64, 73, 85]
      };
    }

    if (
      lesson.module.includes("Finance") ||
      lesson.module.includes("Profit") ||
      lesson.module.includes("Pricing")
    ) {
      return {
        focus:
          `${lesson.title} ကို Revenue, Cost, Margin, Cash Flow နဲ့ Profitability ရှုထောင့်ကနေ စီမံခြင်း`,
        metric: "Business Index",
        values: [52, 63, 75, 88]
      };
    }

    if (
      lesson.module.includes("Customer") ||
      lesson.module.includes("Service")
    ) {
      return {
        focus:
          `${lesson.title} ကို Customer Need, Customer Value, Satisfaction နဲ့ Retention တို့နဲ့ ဆက်စပ်ပြီး အသုံးချခြင်း`,
        metric: "Customer Score",
        values: [61, 69, 78, 90]
      };
    }

    if (
      lesson.module.includes("People") ||
      lesson.module.includes("Leadership") ||
      lesson.module.includes("Coaching")
    ) {
      return {
        focus:
          `${lesson.title} ကို People Management, Coaching, Communication, Accountability နဲ့ Team Performance တို့နဲ့ ဆက်စပ်ခြင်း`,
        metric: "Team Performance",
        values: [57, 66, 79, 87]
      };
    }

    if (
      lesson.module.includes("Marketing") ||
      lesson.module.includes("Brand")
    ) {
      return {
        focus:
          `${lesson.title} ကို Customer, Market, Brand Positioning နဲ့ Business Growth တို့နဲ့ ဆက်စပ်ပြီး အသုံးချခြင်း`,
        metric: "Market Index",
        values: [50, 61, 74, 86]
      };
    }

    return {
      focus:
        `${lesson.title} ကို Business Manager တစ်ယောက်အနေနဲ့ Understanding → Analysis → Decision → Action → Result ဆိုတဲ့ Flow နဲ့ အသုံးချခြင်း`,
      metric: "Business Performance",
      values: [54, 65, 76, 89]
    };
  }

  /* ============================================================
     ENGLISH CONTENT
     ============================================================ */

  function englishContent(title) {

    const content = {

      "Business English Fundamentals": [
        ["Good morning. How are you?", "မင်္ဂလာနံနက်ခင်းပါ။ နေကောင်းပါသလား။"],
        ["I would like to discuss our business plan.", "ကျွန်တော်တို့ရဲ့ Business Plan ကို ဆွေးနွေးချင်ပါတယ်။"],
        ["Could you please explain this?", "ဒါကို ရှင်းပြပေးနိုင်မလားခင်ဗျာ။"],
        ["Thank you for your time.", "အချိန်ပေးတဲ့အတွက် ကျေးဇူးတင်ပါတယ်။"]
      ],

      "Introducing Yourself Professionally": [
        ["My name is Aung Zar Ni Win.", "ကျွန်တော့်နာမည် Aung Zar Ni Win ဖြစ်ပါတယ်။"],
        ["I am a Sales Manager.", "ကျွန်တော် Sales Manager တစ်ယောက်ဖြစ်ပါတယ်။"],
        ["I have extensive experience in sales management.", "Sales Management ပိုင်းမှာ အတွေ့အကြုံများစွာရှိပါတယ်။"],
        ["It is a pleasure to meet you.", "တွေ့ဆုံရတာ ဝမ်းသာပါတယ်။"]
      ],

      "Introducing Your Company": [
        ["Let me briefly introduce our company.", "ကျွန်တော်တို့ Company ကို အကျဉ်းချုပ် မိတ်ဆက်ပေးပါမယ်။"],
        ["Our company focuses on customer satisfaction.", "ကျွန်တော်တို့ Company က Customer Satisfaction ကို အဓိကထားပါတယ်။"],
        ["We operate in several markets.", "ကျွန်တော်တို့ Market အများအပြားမှာ လုပ်ကိုင်နေပါတယ်။"],
        ["Our main business is distribution.", "ကျွန်တော်တို့ရဲ့ အဓိက Business က Distribution ဖြစ်ပါတယ်။"]
      ],

      "Sales English Basics": [
        ["What are your current requirements?", "လက်ရှိ သင့်လိုအပ်ချက်တွေက ဘာတွေလဲ။"],
        ["Let me explain the benefits.", "အကျိုးကျေးဇူးတွေကို ရှင်းပြပေးပါမယ်။"],
        ["We can offer a competitive price.", "Competitive Price ပေးနိုင်ပါတယ်။"],
        ["Would you like to place an order?", "Order တင်ချင်ပါသလား။"]
      ],

      "Sales Presentation English": [
        ["Today, I would like to present our proposal.", "ဒီနေ့ ကျွန်တော်တို့ Proposal ကို တင်ပြချင်ပါတယ်။"],
        ["Let me highlight the key benefits.", "အဓိကအကျိုးကျေးဇူးတွေကို ရှင်းပြပါမယ်။"],
        ["As you can see from the data...", "Data ထဲမှာ မြင်ရတဲ့အတိုင်း..."],
        ["Let me summarize the main points.", "အဓိကအချက်တွေကို အကျဉ်းချုပ်ပေးပါမယ်။"]
      ],

      "Handling Customer Objections": [
        ["I understand your concern.", "သင့်စိုးရိမ်မှုကို နားလည်ပါတယ်။"],
        ["Let me offer another option.", "အခြား Option တစ်ခုကို တင်ပြပါမယ်။"],
        ["May I explain the value behind the price?", "ဒီ Price ရဲ့နောက်က Value ကို ရှင်းပြလို့ရမလား။"],
        ["What would make this solution work for you?", "ဒီ Solution ကို သင့်အတွက် အဆင်ပြေစေဖို့ ဘာလိုအပ်ပါသလဲ။"]
      ],

      "Negotiation English": [
        ["What is your expected price?", "သင်မျှော်မှန်းထားတဲ့ Price ဘယ်လောက်လဲ။"],
        ["Let us find a solution that works for both sides.", "နှစ်ဖက်လုံးအတွက် အဆင်ပြေမယ့် Solution ရှာကြရအောင်။"],
        ["We may be able to adjust the terms.", "Terms တွေကို ပြင်ဆင်ပေးနိုင်ကောင်းပေးနိုင်ပါတယ်။"],
        ["Can we agree on this proposal?", "ဒီ Proposal ကို သဘောတူနိုင်မလား။"]
      ],

      "Closing Sales in English": [
        ["Shall we proceed with the order?", "Order ကို ဆက်လုပ်ကြမလား။"],
        ["Are you ready to move forward?", "ရှေ့ဆက်ဖို့ အဆင်သင့်ဖြစ်ပြီလား။"],
        ["Let me confirm the order details.", "Order အသေးစိတ်ကို အတည်ပြုပေးပါမယ်။"],
        ["Thank you for your business.", "ကျွန်တော်တို့နဲ့ Business လုပ်ပေးတဲ့အတွက် ကျေးဇူးတင်ပါတယ်။"]
      ],

      "Business Meeting English": [
        ["Let's start the meeting.", "Meeting စလိုက်ကြရအောင်။"],
        ["I'd like to discuss today's agenda.", "ဒီနေ့ Agenda ကို ဆွေးနွေးချင်ပါတယ်။"],
        ["Could you give us an update?", "Update ပေးနိုင်မလား။"],
        ["Let's move to the next point.", "နောက်အချက်ကို ဆက်သွားကြရအောင်။"]
      ],

      "Interview English": [
        ["Tell me about yourself.", "ကိုယ့်အကြောင်း ပြောပြပါ။"],
        ["I have strong experience in sales management.", "Sales Management ပိုင်းမှာ ခိုင်မာတဲ့အတွေ့အကြုံရှိပါတယ်။"],
        ["My strength is team leadership.", "ကျွန်တော့်ရဲ့အားသာချက်က Team Leadership ဖြစ်ပါတယ်။"],
        ["I am looking for a long-term career opportunity.", "ရေရှည် Career Opportunity ရှာဖွေနေတာဖြစ်ပါတယ်။"]
      ],

      "Sales Manager Interview English": [
        ["How do you manage your sales team?", "Sales Team ကို ဘယ်လိုစီမံခန့်ခွဲပါသလဲ။"],
        ["I manage through clear targets and regular coaching.", "ရှင်းလင်းတဲ့ Target တွေနဲ့ ပုံမှန် Coaching လုပ်ပြီး စီမံပါတယ်။"],
        ["How do you handle underperformance?", "Performance မကောင်းတဲ့သူကို ဘယ်လိုကိုင်တွယ်ပါသလဲ။"],
        ["I identify the root cause and create an action plan.", "Root Cause ရှာပြီး Action Plan ချမှတ်ပါတယ်။"]
      ]

    };

    return content[title] || [
      [
        "Let me explain this point clearly.",
        "ဒီအချက်ကို ရှင်းရှင်းလင်းလင်း ရှင်းပြပေးပါမယ်။"
      ],
      [
        "We need to focus on the key priorities.",
        "အဓိက Priority တွေကို အာရုံစိုက်ဖို့ လိုပါတယ်။"
      ],
      [
        "Let's review the data together.",
        "Data ကို အတူတူ ပြန်လည်သုံးသပ်ကြရအောင်။"
      ],
      [
        "I will follow up with you.",
        "ပြန်လည် Follow-up လုပ်ပေးပါမယ်။"
      ]
    ];
  }

  /* ============================================================
     HELPERS
     ============================================================ */

  function esc(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function saveState() {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(state)
    );

    localStorage.setItem(
      LESSON_STORAGE_KEY,
      JSON.stringify(state.completedLessons)
    );
  }

  function isCompleted(id) {
    return state.completedLessons.includes(id);
  }

  function completedCount() {
    return state.completedLessons.length;
  }

  function progressPercent() {
    return Math.round(
      completedCount() / lessons.length * 100
    );
  }

  /* ============================================================
     UPDATE PROGRESS
     ============================================================ */

  function updateProgress() {

    const completed = completedCount();
    const remaining = lessons.length - completed;
    const percent = progressPercent();

    [
      "#completedLessons",
      "#progressCompleted",
      ".completed-count"
    ].forEach(selector => {

      document.querySelectorAll(selector)
        .forEach(el => {
          el.textContent = completed;
        });

    });

    [
      "#progressRemaining",
      ".remaining-count"
    ].forEach(selector => {

      document.querySelectorAll(selector)
        .forEach(el => {
          el.textContent = remaining;
        });

    });

    [
      "#bigProgress",
      "#courseProgressText",
      ".progress-value"
    ].forEach(selector => {

      document.querySelectorAll(selector)
        .forEach(el => {
          el.textContent = percent + "%";
        });

    });

    [
      "#courseProgress",
      ".progress-bar-fill",
      ".progress-fill"
    ].forEach(selector => {

      document.querySelectorAll(selector)
        .forEach(el => {
          el.style.width = percent + "%";
        });

    });

    document.querySelectorAll("[data-total-lessons]")
      .forEach(el => {
        el.textContent = lessons.length;
      });
  }

  /* ============================================================
     PAGE NAVIGATION
     ============================================================ */

  function showPage(page) {

    state.currentPage = page;
    saveState();

    document.querySelectorAll(
      "[id^='page-'], .academy-page"
    ).forEach(el => {

      el.style.display = "none";
      el.classList.remove("active");

    });

    const target =
      document.getElementById("page-" + page) ||
      document.getElementById(page);

    if (target) {

      target.style.display = "";
      target.classList.add("active");

    }

    document.querySelectorAll("[data-page]")
      .forEach(el => {

        el.classList.toggle(
          "active",
          el.dataset.page === page
        );

      });

    if (
      page === "lessons" ||
      page === "my-courses" ||
      page === "progress"
    ) {
      setTimeout(renderLessons, 50);
    }

    updateProgress();
  }

  document.addEventListener("click", e => {

    const pageBtn =
      e.target.closest("[data-page]");

    if (!pageBtn) return;

    e.preventDefault();

    showPage(pageBtn.dataset.page);

    document.querySelector(".sidebar")
      ?.classList.remove("open");
  });

  /* ============================================================
     LESSON FILTER
     ============================================================ */

  let lessonFilter = "all";

  document.addEventListener("input", e => {

    if (e.target.id === "academyLessonSearch") {
      renderLessons();
    }

  });

  document.addEventListener("change", e => {

    if (e.target.id === "academyLessonCategory") {
      renderLessons();
    }

  });

  document.addEventListener("click", e => {

    const filter =
      e.target.closest("[data-lesson-filter]");

    if (!filter) return;

    lessonFilter =
      filter.dataset.lessonFilter;

    document.querySelectorAll(
      "[data-lesson-filter]"
    ).forEach(btn => {

      btn.classList.toggle(
        "active",
        btn === filter
      );

    });

    renderLessons();
  });

  /* ============================================================
     LESSON LIST
     ============================================================ */

  function renderLessons() {

    const container =
      document.querySelector(
        "#lessonList, #lessonsList, .lesson-list"
      );

    if (!container) return;

    const search =
      document.getElementById(
        "academyLessonSearch"
      )?.value
        ?.trim()
        .toLowerCase() || "";

    const category =
      document.getElementById(
        "academyLessonCategory"
      )?.value || "all";

    let filtered = lessons.filter(lesson => {

      const searchMatch =
        !search ||
        lesson.title.toLowerCase().includes(search) ||
        lesson.module.toLowerCase().includes(search);

      const categoryMatch =
        category === "all" ||
        lesson.type === category;

      const filterMatch =
        lessonFilter === "all" ||
        (lessonFilter === "completed" &&
          isCompleted(lesson.id)) ||
        (lessonFilter === "remaining" &&
          !isCompleted(lesson.id));

      return searchMatch &&
             categoryMatch &&
             filterMatch;
    });

    let html = `

      <div style="
        display:flex;
        flex-wrap:wrap;
        gap:9px;
        margin-bottom:18px;
      ">

        <span class="lesson-summary-chip">
          📚 Total <b>${lessons.length}</b>
        </span>

        <span class="lesson-summary-chip">
          💼 Business <b>230</b>
        </span>

        <span class="lesson-summary-chip">
          🇬🇧 English <b>30</b>
        </span>

        <span class="lesson-summary-chip">
          ✅ Completed <b>${completedCount()}</b>
        </span>

        <span class="lesson-summary-chip">
          📈 Progress <b>${progressPercent()}%</b>
        </span>

      </div>
    `;

    const continueLesson =
      lessons.find(
        lesson => !isCompleted(lesson.id)
      );

    if (
      lessonFilter === "all" &&
      !search &&
      category === "all" &&
      continueLesson
    ) {

      html += `

        <div style="
          margin-bottom:20px;
          padding:22px;
          border-radius:18px;
          background:linear-gradient(
            135deg,
            #0f172a,
            #1e293b
          );
          color:#fff;
        ">

          <div style="
            font-size:12px;
            opacity:.65;
            margin-bottom:7px;
          ">
            CONTINUE LEARNING
          </div>

          <div style="
            font-size:20px;
            font-weight:700;
            margin-bottom:6px;
          ">
            ${esc(continueLesson.title)}
          </div>

          <div style="
            font-size:13px;
            opacity:.75;
            margin-bottom:14px;
          ">
            Lesson ${continueLesson.number}
            / ${lessons.length}
            • ${esc(continueLesson.module)}
          </div>

          <button
            class="btn btn-primary"
            data-open-lesson="${continueLesson.id}">
            Continue Lesson →
          </button>

        </div>
      `;
    }

    if (!filtered.length) {

      html += `
        <div style="
          text-align:center;
          padding:50px 20px;
        ">
          <div style="font-size:45px;">🔎</div>
          <h3>No Lessons Found</h3>
          <p>Search / Filter ကို ပြန်စစ်ပါ။</p>
        </div>
      `;

      container.innerHTML = html;
      return;
    }

    html += `
      <div class="academy-lesson-grid">
    `;

    filtered.forEach(lesson => {

      const completed =
        isCompleted(lesson.id);

      html += `

        <article
          class="academy-lesson-card
          ${completed ? "completed" : ""}"
          style="
            padding:20px;
            border-radius:16px;
            margin-bottom:15px;
          ">

          <div style="
            display:flex;
            justify-content:space-between;
            gap:8px;
            margin-bottom:10px;
          ">

            <span style="
              font-size:11px;
              font-weight:700;
              color:#64748b;
            ">
              ${
                lesson.type === "english"
                ? "🇬🇧 BUSINESS ENGLISH"
                : "💼 BUSINESS"
              }
            </span>

            ${
              completed
              ? `<span style="
                  font-size:11px;
                  color:#15803d;
                  font-weight:700;
                ">✓ COMPLETED</span>`
              : ""
            }

          </div>

          <div style="
            font-size:12px;
            color:#64748b;
            margin-bottom:6px;
          ">
            Lesson ${lesson.number}
            • ${esc(lesson.module)}
          </div>

          <h3 style="
            margin-bottom:9px;
          ">
            ${esc(lesson.title)}
          </h3>

          <p style="
            font-size:13px;
            line-height:1.7;
            color:#64748b;
            margin-bottom:15px;
          ">
            15-Minute Professional Lesson
            • Detailed Explanation
            • Table
            • Graph
            • Case Study
            • Quiz
          </p>

          <button
            class="btn btn-primary"
            data-open-lesson="${lesson.id}">
            ${
              completed
              ? "Review Lesson"
              : "Start 15-Min Lesson"
            }
          </button>

        </article>
      `;
    });

    html += "</div>";

    container.innerHTML = html;
  }

  /* ============================================================
     MODAL
     ============================================================ */

  let modal = null;
  let currentLessonId = null;

  function createModal() {

    if (modal) return;

    modal = document.createElement("div");

    modal.id = "academyProfessionalModal";

    modal.style.cssText = `
      position:fixed;
      inset:0;
      z-index:99999;
      background:rgba(15,23,42,.78);
      overflow:auto;
      padding:15px;
    `;

    modal.innerHTML = `
      <div
        id="academyProfessionalBox"
        style="
          max-width:1000px;
          margin:20px auto;
          background:#fff;
          border-radius:22px;
          overflow:hidden;
          box-shadow:0 30px 80px rgba(0,0,0,.35);
        ">

        <div id="academyProfessionalContent"></div>

      </div>
    `;

    document.body.appendChild(modal);

    modal.addEventListener("click", e => {

      if (e.target === modal) {
        closeLesson();
      }

      if (
        e.target.closest("[data-close-lesson]")
      ) {
        closeLesson();
      }

      if (
        e.target.closest("[data-complete-lesson]")
      ) {
        completeLesson();
      }

      if (
        e.target.closest("[data-prev]")
      ) {
        adjacent(-1);
      }

      if (
        e.target.closest("[data-next]")
      ) {
        adjacent(1);
      }

      const quiz =
        e.target.closest("[data-answer]");

      if (quiz) {

        const correct =
          quiz.dataset.answer === "correct";

        quiz.parentElement
          .querySelectorAll("[data-answer]")
          .forEach(btn => {

            btn.disabled = true;

            if (
              btn.dataset.answer === "correct"
            ) {
              btn.style.background = "#dcfce7";
              btn.style.color = "#166534";
            }
          });

        const result =
          quiz.parentElement
            .parentElement
            .querySelector(".quiz-result");

        if (result) {

          result.textContent =
            correct
              ? "✅ မှန်ပါတယ်။"
              : "❌ မမှန်သေးပါ။ အပေါ်က Lesson ကို ပြန်ဖတ်ကြည့်ပါ။";

          result.style.display = "block";
        }
      }

    });
  }

  /* ============================================================
     GRAPH HTML
     ============================================================ */

  function graphHTML(values, metric) {

    const labels = [
      "Week 1",
      "Week 2",
      "Week 3",
      "Week 4"
    ];

    const max = Math.max(...values);

    return `

      <div style="
        margin-top:15px;
        padding:20px;
        border:1px solid #e2e8f0;
        border-radius:16px;
        background:#f8fafc;
      ">

        <div style="
          font-weight:700;
          margin-bottom:20px;
        ">
          📈 ${esc(metric)} Trend
        </div>

        <div style="
          height:220px;
          display:flex;
          align-items:flex-end;
          gap:15px;
          padding:15px 10px 0;
          border-bottom:2px solid #cbd5e1;
        ">

          ${values.map((value, i) => {

            const height =
              Math.max(
                12,
                Math.round(value / max * 170)
              );

            return `

              <div style="
                flex:1;
                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:flex-end;
                height:100%;
              ">

                <div style="
                  font-size:11px;
                  margin-bottom:5px;
                  font-weight:700;
                ">
                  ${value}
                </div>

                <div style="
                  width:70%;
                  max-width:70px;
                  height:${height}px;
                  border-radius:8px 8px 0 0;
                  background:#334155;
                  transition:.3s;
                "></div>

              </div>
            `;
          }).join("")}

        </div>

        <div style="
          display:flex;
          gap:15px;
          margin-top:9px;
        ">

          ${labels.map(label => `
            <div style="
              flex:1;
              text-align:center;
              font-size:11px;
              color:#64748b;
            ">
              ${label}
            </div>
          `).join("")}

        </div>

        <div style="
          font-size:11px;
          color:#64748b;
          margin-top:14px;
        ">
          * ဤ Graph သည် သင်ခန်းစာရှင်းပြရန်အတွက်
          Example Data ဖြစ်ပါသည်။
        </div>

      </div>
    `;
  }

  /* ============================================================
     OPEN LESSON
     ============================================================ */

  function openLesson(id) {

    const lesson =
      lessons.find(item => item.id === id);

    if (!lesson) return;

    currentLessonId = id;

    createModal();

    const index =
      lessons.findIndex(
        item => item.id === id
      );

    const previous =
      index > 0
      ? lessons[index - 1]
      : null;

    const next =
      index < lessons.length - 1
      ? lessons[index + 1]
      : null;

    const completed =
      isCompleted(id);

    const topic =
      getTopicData(lesson);

    const english =
      lesson.type === "english";

    const englishExamples =
      englishContent(lesson.title);

    let detailedText = "";

    if (english) {

      detailedText = `
        ဒီ Lesson ရဲ့ ရည်ရွယ်ချက်က English ကို
        စာအုပ်ထဲမှာပဲ သိထားဖို့မဟုတ်ဘဲ
        အလုပ်ခွင်မှာ တကယ်အသုံးချနိုင်ဖို့ ဖြစ်ပါတယ်။

        <br><br>

        Business English မှာ အရေးကြီးဆုံးက
        စကားလုံးတစ်လုံးချင်းမှတ်တာထက်
        Situation အလိုက် Sentence ကို
        မှန်ကန်စွာအသုံးချနိုင်ခြင်း ဖြစ်ပါတယ်။

        <br><br>

        Customer Meeting, Sales Visit,
        Presentation, Negotiation, Email,
        Interview နဲ့ Management Communication
        တွေမှာ Professional Tone ကို
        ထိန်းသိမ်းပြောဆိုနိုင်ဖို့ လိုပါတယ်။

        <br><br>

        ဒါကြောင့် ဒီ Lesson ကို ဖတ်ပြီးတဲ့အခါ
        Sentence တွေကို အသံထွက်လေ့ကျင့်ပြီး
        ကိုယ့်အလုပ်အခြေအနေထဲမှာ ပြန်အသုံးချပါ။
      `;

    } else {

      detailedText = `
        ${esc(lesson.title)} ကို Business Manager
        တစ်ယောက်အနေနဲ့ နားလည်ဖို့ဆိုရင်
        Definition တစ်ခုသိထားရုံနဲ့ မလုံလောက်ပါဘူး။

        <br><br>

        လက်တွေ့ Business မှာ People,
        Customer, Product, Price, Distribution,
        Market, Cost, Revenue နဲ့ Result တွေဟာ
        တစ်ခုနဲ့တစ်ခု ဆက်စပ်နေပါတယ်။

        <br><br>

        ဒါကြောင့် Manager တစ်ယောက်ဟာ
        ပြဿနာတစ်ခုကို တွေ့တဲ့အခါ
        “ဘယ်သူ့အမှားလဲ” ဆိုတာထက်
        “ဘာကြောင့်ဖြစ်တာလဲ၊ Data ကဘာပြောလဲ၊
        ဘာ Action လုပ်ရမလဲ” ဆိုတဲ့
        Management Thinking နဲ့ စဉ်းစားရပါမယ်။

        <br><br>

        ${esc(topic.focus)}

        <br><br>

        ဒီ Lesson ရဲ့ အဓိကရည်ရွယ်ချက်က
        Knowledge ကို Action အဖြစ် ပြောင်းလဲနိုင်ဖို့ ဖြစ်ပါတယ်။
      `;
    }

    const tableRows = english
      ? `
        <tr>
          <td>Vocabulary</td>
          <td>စကားလုံးကို သိခြင်း</td>
          <td>Situation ထဲမှာ သုံးခြင်း</td>
        </tr>
        <tr>
          <td>Sentence</td>
          <td>ဝါကျတည်ဆောက်ခြင်း</td>
          <td>အသံထွက်လေ့ကျင့်ခြင်း</td>
        </tr>
        <tr>
          <td>Conversation</td>
          <td>Customer / Team</td>
          <td>Role Play</td>
        </tr>
        <tr>
          <td>Practice</td>
          <td>နေ့စဉ်လေ့ကျင့်ခြင်း</td>
          <td>Confidence တိုးခြင်း</td>
        </tr>
      `
      : `
        <tr>
          <td>People</td>
          <td>Team က ဘာလုပ်နေလဲ?</td>
          <td>Coaching & Follow-up</td>
        </tr>
        <tr>
          <td>Customer</td>
          <td>Customer ဘာလိုချင်လဲ?</td>
          <td>Customer Plan</td>
        </tr>
        <tr>
          <td>Numbers</td>
          <td>Result ဘယ်လောက်ရလဲ?</td>
          <td>KPI Review</td>
        </tr>
        <tr>
          <td>Execution</td>
          <td>Plan ကို ဘယ်လို Execute လုပ်မလဲ?</td>
          <td>Action Plan</td>
        </tr>
      `;

    const examples = english
      ? englishExamples
      : [
          [
            "Target",
            "လစဉ် Sales Target ကို သတ်မှတ်ခြင်း"
          ],
          [
            "Actual",
            "တကယ်ရရှိထားတဲ့ Result ကို တိုင်းတာခြင်း"
          ],
          [
            "Gap",
            "Target နဲ့ Actual ကြားက ကွာဟချက်ကို ရှာခြင်း"
          ],
          [
            "Action",
            "Gap ကို ဖြည့်ဖို့ လက်တွေ့ Action ချမှတ်ခြင်း"
          ]
        ];

    const content =
      document.getElementById(
        "academyProfessionalContent"
      );

    content.innerHTML = `

      <!-- HEADER -->

      <div style="
        padding:25px;
        color:#fff;
        background:linear-gradient(
          135deg,
          #0f172a,
          #1e293b
        );
      ">

        <div style="
          display:flex;
          justify-content:space-between;
          gap:20px;
          align-items:flex-start;
        ">

          <div>

            <div style="
              font-size:11px;
              letter-spacing:1px;
              opacity:.65;
              margin-bottom:7px;
            ">
              ${
                english
                ? "🇬🇧 BUSINESS ENGLISH"
                : "💼 AUNG BUSINESS ACADEMY"
              }
            </div>

            <div style="
              font-size:13px;
              opacity:.65;
            ">
              Lesson ${lesson.number} / ${lessons.length}
            </div>

            <h2 style="
              margin:7px 0;
              font-size:28px;
            ">
              ${esc(lesson.title)}
            </h2>

            <div style="
              font-size:13px;
              opacity:.7;
            ">
              ${esc(lesson.module)}
            </div>

          </div>

          <button
            data-close-lesson
            style="
              border:0;
              width:42px;
              height:42px;
              border-radius:50%;
              background:rgba(255,255,255,.12);
              color:white;
              font-size:22px;
              cursor:pointer;
            ">
            ×
          </button>

        </div>

      </div>

      <!-- TIME -->

      <div style="
        padding:16px 25px;
        background:#f8fafc;
        border-bottom:1px solid #e2e8f0;
      ">

        <span style="
          display:inline-block;
          padding:8px 13px;
          background:#e0f2fe;
          color:#0369a1;
          border-radius:20px;
          font-size:12px;
          font-weight:700;
        ">
          ⏱️ 15-Minute Professional Lesson
        </span>

      </div>

      <!-- BODY -->

      <div style="
        padding:25px;
        line-height:1.85;
      ">

        <!-- OBJECTIVE -->

        <section>

          <h3>🎯 Learning Objective</h3>

          <div style="
            margin-top:12px;
            padding:17px;
            border-radius:14px;
            background:#f8fafc;
            color:#475569;
          ">
            ဒီ Lesson ပြီးဆုံးတဲ့အခါ
            ${esc(lesson.title)} ကို
            နားလည်ပြီး လက်တွေ့ Business
            အခြေအနေမှာ အသုံးချနိုင်ရပါမယ်။
          </div>

        </section>

        <!-- DETAILED -->

        <section style="margin-top:28px;">

          <h3>📖 Detailed Explanation</h3>

          <div style="
            margin-top:12px;
            padding:19px;
            border-radius:14px;
            background:#fff;
            border:1px solid #e2e8f0;
            color:#334155;
          ">
            ${detailedText}
          </div>

        </section>

        <!-- KEY CONCEPTS -->

        <section style="margin-top:28px;">

          <h3>🔑 Key Concepts</h3>

          <div style="
            display:grid;
            grid-template-columns:
              repeat(auto-fit,minmax(210px,1fr));
            gap:12px;
            margin-top:13px;
          ">

            <div style="
              padding:16px;
              border-radius:14px;
              background:#f8fafc;
            ">
              <b>01. Understand</b>
              <br>
              အခြေခံ Concept ကို နားလည်ပါ။
            </div>

            <div style="
              padding:16px;
              border-radius:14px;
              background:#f8fafc;
            ">
              <b>02. Analyze</b>
              <br>
              Data နဲ့ အခြေအနေကို ခွဲခြမ်းပါ။
            </div>

            <div style="
              padding:16px;
              border-radius:14px;
              background:#f8fafc;
            ">
              <b>03. Decide</b>
              <br>
              အကောင်းဆုံး Decision ချပါ။
            </div>

            <div style="
              padding:16px;
              border-radius:14px;
              background:#f8fafc;
            ">
              <b>04. Execute</b>
              <br>
              Action Plan ကို လက်တွေ့လုပ်ပါ။
            </div>

          </div>

        </section>

        <!-- TABLE -->

        <section style="margin-top:28px;">

          <h3>📊 Business Analysis Table</h3>

          <div style="
            overflow:auto;
            margin-top:13px;
          ">

            <table style="
              width:100%;
              min-width:620px;
              border-collapse:collapse;
            ">

              <thead>

                <tr>

                  <th style="
                    padding:13px;
                    border:1px solid #e2e8f0;
                    text-align:left;
                    background:#f8fafc;
                  ">
                    Area
                  </th>

                  <th style="
                    padding:13px;
                    border:1px solid #e2e8f0;
                    text-align:left;
                    background:#f8fafc;
                  ">
                    Question
                  </th>

                  <th style="
                    padding:13px;
                    border:1px solid #e2e8f0;
                    text-align:left;
                    background:#f8fafc;
                  ">
                    Action
                  </th>

                </tr>

              </thead>

              <tbody>

                ${tableRows}

              </tbody>

            </table>

          </div>

        </section>

        <!-- GRAPH -->

        <section style="margin-top:28px;">

          <h3>📈 Performance Graph</h3>

          ${graphHTML(
            topic.values,
            topic.metric
          )}

        </section>

        <!-- PRACTICAL -->

        <section style="margin-top:28px;">

          <h3>
            ${
              english
              ? "🇬🇧 Business English Practice"
              : "💼 Real Business Application"
            }
          </h3>

          <div style="
            display:grid;
            gap:11px;
            margin-top:13px;
          ">

            ${
              examples.map((item, i) => `

                <div style="
                  padding:16px;
                  border-radius:13px;
                  background:#f8fafc;
                  border-left:4px solid #334155;
                ">

                  <div style="
                    font-size:12px;
                    color:#64748b;
                    margin-bottom:5px;
                  ">
                    ${
                      english
                      ? "Practice " + (i + 1)
                      : "Step " + (i + 1)
                    }
                  </div>

                  <b>${esc(item[0])}</b>

                  <div style="
                    color:#475569;
                    margin-top:4px;
                  ">
                    ${esc(item[1])}
                  </div>

                </div>

              `).join("")
            }

          </div>

        </section>

        <!-- CASE STUDY -->

        <section style="margin-top:28px;">

          <h3>🧩 Real Business Case Study</h3>

          <div style="
            margin-top:13px;
            padding:20px;
            border-radius:15px;
            background:#f8fafc;
          ">

            <b>Situation</b>

            <p style="margin:7px 0 15px;">
              Company တစ်ခုမှာ Business Result က
              မျှော်မှန်းထားသလောက် မရရှိဘဲ
              Manager အနေနဲ့ ပြဿနာရဲ့
              အကြောင်းရင်းကို ရှာဖွေရပါတယ်။
            </p>

            <b>Manager Analysis</b>

            <p style="margin:7px 0 15px;">
              Data → Customer → Team → Territory →
              Execution → Competitor ဆိုတဲ့
              အချက်တွေကို တစ်ခုချင်းစီ စစ်ဆေးရပါမယ်။
            </p>

            <b>Decision</b>

            <p style="margin:7px 0 15px;">
              Root Cause ကို သတ်မှတ်ပြီး
              အရေးကြီးဆုံး 1–3 Action ကို
              Priority ပေးရပါမယ်။
            </p>

            <b>Result</b>

            <p style="margin:7px 0 0;">
              Action ကို Owner သတ်မှတ်ပြီး
              Deadline နဲ့ Follow-up ပြုလုပ်ခြင်းဖြင့်
              Result ကို ပြန်လည်တိုင်းတာရပါမယ်။
            </p>

          </div>

        </section>

        <!-- MANAGER THINKING -->

        <section style="margin-top:28px;">

          <h3>🧠 Manager Thinking</h3>

          <div style="
            margin-top:13px;
            padding:20px;
            border-radius:15px;
            background:#0f172a;
            color:#fff;
          ">

            Manager တစ်ယောက်ဟာ
            “အလုပ်လုပ်နေတယ်” ဆိုတာထက်
            “Result ထွက်နေတယ်” ဆိုတာကို
            အာရုံစိုက်ရပါမယ်။

            <br><br>

            ဒါကြောင့် Plan ရှိခြင်း၊
            Data ရှိခြင်း၊
            Team ကို Coaching လုပ်ခြင်း၊
            Customer ကို နားလည်ခြင်း၊
            Execution ကို Follow-up လုပ်ခြင်း
            တွေကို တစ်ခုတည်းသော Management System
            အဖြစ် ချိတ်ဆက်ရပါမယ်။

          </div>

        </section>

        <!-- COMMON MISTAKES -->

        <section style="margin-top:28px;">

          <h3>⚠️ Common Mistakes</h3>

          <div style="
            margin-top:13px;
            display:grid;
            gap:10px;
          ">

            <div style="
              padding:14px;
              background:#fff7ed;
              border-radius:12px;
            ">
              ❌ Data မကြည့်ဘဲ ခန့်မှန်းဆုံးဖြတ်ခြင်း
            </div>

            <div style="
              padding:14px;
              background:#fff7ed;
              border-radius:12px;
            ">
              ❌ Problem ကို လူတစ်ယောက်ရဲ့အပြစ်အဖြစ်ပဲ မြင်ခြင်း
            </div>

            <div style="
              padding:14px;
              background:#fff7ed;
              border-radius:12px;
            ">
              ❌ Action Plan မရှိခြင်း
            </div>

            <div style="
              padding:14px;
              background:#fff7ed;
              border-radius:12px;
            ">
              ❌ Follow-up မလုပ်ခြင်း
            </div>

          </div>

        </section>

        <!-- ACTION -->

        <section style="margin-top:28px;">

          <h3>📝 15-Minute Action Plan</h3>

          <div style="
            margin-top:13px;
            padding:20px;
            border-radius:15px;
            background:#ecfdf5;
            color:#14532d;
          ">

            <ol style="
              padding-left:22px;
              margin:0;
            ">

              <li>
                2 မိနစ် — ဒီ Lesson ရဲ့
                အဓိကအချက်ကို ပြန်ဖတ်ပါ။
              </li>

              <li>
                3 မိနစ် — ကိုယ့် Business မှာ
                လက်ရှိအခြေအနေကို စဉ်းစားပါ။
              </li>

              <li>
                3 မိနစ် — Data / Problem / Gap
                ကို ရေးချပါ။
              </li>

              <li>
                4 မိနစ် — Action 1 ခုကို
                လက်တွေ့ချမှတ်ပါ။
              </li>

              <li>
                3 မိနစ် — ဘယ်လို Result ကို
                တိုင်းတာမလဲ သတ်မှတ်ပါ။
              </li>

            </ol>

          </div>

        </section>

        <!-- REFLECTION -->

        <section style="margin-top:28px;">

          <h3>🤔 Reflection</h3>

          <div style="
            margin-top:13px;
            padding:20px;
            border-radius:15px;
            border:1px solid #e2e8f0;
          ">

            ① ဒီ Lesson ထဲက
            အရေးကြီးဆုံးအချက်က ဘာလဲ?

            <br><br>

            ② ကိုယ့်အလုပ်မှာ ဘယ်နေရာမှာ အသုံးချနိုင်လဲ?

            <br><br>

            ③ ဒီနေ့ ဘာတစ်ခုကို ပြောင်းလဲလုပ်မလဲ?

          </div>

        </section>

        <!-- QUIZ -->

        <section style="margin-top:28px;">

          <h3>❓ Knowledge Check</h3>

          <div style="
            margin-top:13px;
            padding:20px;
            border-radius:15px;
            background:#f8fafc;
          ">

            <p>
              <b>
                Manager တစ်ယောက်က Problem တစ်ခုတွေ့တဲ့အခါ
                ပထမဆုံး ဘာလုပ်သင့်သလဲ?
              </b>
            </p>

            <div style="
              display:grid;
              gap:9px;
              margin-top:14px;
            ">

              <button
                data-answer="wrong"
                style="
                  padding:13px;
                  border:1px solid #e2e8f0;
                  background:#fff;
                  border-radius:10px;
                  text-align:left;
                  cursor:pointer;
                ">
                A. Team ကို အပြစ်တင်မယ်
              </button>

              <button
                data-answer="correct"
                style="
                  padding:13px;
                  border:1px solid #e2e8f0;
                  background:#fff;
                  border-radius:10px;
                  text-align:left;
                  cursor:pointer;
                ">
                B. Data ကြည့်ပြီး Root Cause ရှာမယ်
              </button>

              <button
                data-answer="wrong"
                style="
                  padding:13px;
                  border:1px solid #e2e8f0;
                  background:#fff;
                  border-radius:10px;
                  text-align:left;
                  cursor:pointer;
                ">
                C. ချက်ချင်းဆုံးဖြတ်မယ်
              </button>

            </div>

            <div
              class="quiz-result"
              style="
                display:none;
                margin-top:14px;
                padding:12px;
                border-radius:10px;
                background:#fff;
                font-weight:700;
              ">
            </div>

          </div>

        </section>

        <!-- SUMMARY -->

        <section style="margin-top:28px;">

          <h3>🎓 Lesson Summary</h3>

          <div style="
            margin-top:13px;
            padding:21px;
            border-radius:15px;
            background:#0f172a;
            color:#fff;
          ">

            <b>${esc(lesson.title)}</b>
            ကို လက်တွေ့အသုံးချတဲ့အခါ

            <br><br>

            <b>Understand → Analyze → Decide →
            Execute → Measure → Improve</b>

            ဆိုတဲ့ Cycle ကို အသုံးပြုပါ။

            <br><br>

            Knowledge ကို Action ပြောင်းပြီး
            Result တိုင်းတာနိုင်မှသာ
            Professional Manager Skill ဖြစ်လာပါမယ်။

          </div>

        </section>

      </div>

      <!-- FOOTER -->

      <div style="
        padding:18px 25px;
        border-top:1px solid #e2e8f0;
        display:flex;
        justify-content:space-between;
        gap:10px;
        flex-wrap:wrap;
      ">

        <button
          class="btn"
          data-prev
          ${previous ? "" : "disabled"}>
          ← Previous
        </button>

        <div style="
          display:flex;
          gap:9px;
          flex-wrap:wrap;
        ">

          <button
            class="btn btn-primary"
            data-complete-lesson>
            ${
              completed
              ? "✓ Lesson Completed"
              : "✓ Complete Lesson"
            }
          </button>

          <button
            class="btn"
            data-next
            ${next ? "" : "disabled"}>
            Next →
          </button>

        </div>

      </div>

    `;

    modal.style.display = "block";

    document.body.style.overflow = "hidden";
  }

  /* ============================================================
     CLOSE
     ============================================================ */

  function closeLesson() {

    if (!modal) return;

    modal.style.display = "none";

    document.body.style.overflow = "";

    currentLessonId = null;
  }

  /* ============================================================
     COMPLETE
     ============================================================ */

  function completeLesson() {

    if (!currentLessonId) return;

    if (
      !state.completedLessons.includes(
        currentLessonId
      )
    ) {

      state.completedLessons.push(
        currentLessonId
      );

      saveState();
    }

    updateProgress();
    renderLessons();

    openLesson(currentLessonId);
  }

  /* ============================================================
     NEXT / PREVIOUS
     ============================================================ */

  function adjacent(direction) {

    if (!currentLessonId) return;

    const index =
      lessons.findIndex(
        lesson =>
          lesson.id === currentLessonId
      );

    const nextIndex =
      index + direction;

    if (
      nextIndex < 0 ||
      nextIndex >= lessons.length
    ) {
      return;
    }

    openLesson(
      lessons[nextIndex].id
    );
  }

  /* ============================================================
     OPEN LESSON BUTTON
     ============================================================ */

  document.addEventListener("click", e => {

    const btn =
      e.target.closest("[data-open-lesson]");

    if (!btn) return;

    openLesson(
      btn.dataset.openLesson
    );
  });

  /* ============================================================
     ESC KEY
     ============================================================ */

  document.addEventListener("keydown", e => {

    if (e.key === "Escape") {
      closeLesson();
    }

    if (
      modal &&
      modal.style.display === "block"
    ) {

      if (e.key === "ArrowLeft") {
        adjacent(-1);
      }

      if (e.key === "ArrowRight") {
        adjacent(1);
      }
    }

  });

  /* ============================================================
     MOBILE MENU
     ============================================================ */

  document.addEventListener("click", e => {

    const menu =
      e.target.closest(
        ".mobile-menu-btn,#mobileMenuBtn,[data-mobile-menu]"
      );

    if (!menu) return;

    document.querySelector(".sidebar")
      ?.classList.toggle("open");
  });

  /* ============================================================
     PUBLIC API
     ============================================================ */

  window.AungBusinessAcademy = {

    lessons,

    totalLessons: lessons.length,

    businessLessons:
      lessons.filter(
        lesson => lesson.type === "business"
      ),

    englishLessons:
      lessons.filter(
        lesson => lesson.type === "english"
      ),

    completedLessons:
      () => completedCount(),

    progress:
      () => progressPercent(),

    openLesson,

    closeLesson,

    completeLesson,

    showPage,

    renderLessons,

    getLesson:
      id =>
        lessons.find(
          lesson => lesson.id === id
        )
  };

  /* ============================================================
     EXTRA STYLE
     ============================================================ */

  const style =
    document.createElement("style");

  style.textContent = `

    .academy-lesson-grid {
      display:grid;
      grid-template-columns:
        repeat(auto-fit,minmax(280px,1fr));
      gap:16px;
    }

    .academy-lesson-card {
      background:#fff;
      border:1px solid #e2e8f0;
      box-shadow:
        0 4px 15px rgba(15,23,42,.05);
      transition:.2s;
    }

    .academy-lesson-card:hover {
      transform:translateY(-3px);
      box-shadow:
        0 12px 30px rgba(15,23,42,.10);
    }

    .academy-lesson-card.completed {
      border-color:#bbf7d0;
      background:#fafffb;
    }

    .lesson-summary-chip {
      padding:8px 12px;
      border-radius:20px;
      background:#f8fafc;
      border:1px solid #e2e8f0;
      font-size:13px;
      color:#475569;
    }

    #academyProfessionalModal button:disabled {
      opacity:.4;
      cursor:not-allowed;
    }

    @media(max-width:700px){

      #academyProfessionalModal {
        padding:6px !important;
      }

      #academyProfessionalBox {
        margin:5px auto !important;
        border-radius:15px !important;
      }

      #academyProfessionalContent h2 {
        font-size:22px !important;
      }

      #academyProfessionalContent h3 {
        font-size:18px !important;
      }

      .academy-lesson-grid {
        grid-template-columns:1fr;
      }

    }

  `;

  document.head.appendChild(style);

  /* ============================================================
     INITIALIZE
     ============================================================ */

  function init() {

    updateProgress();

    renderLessons();

    showPage(
      state.currentPage || "dashboard"
    );

    setTimeout(() => {

      updateProgress();
      renderLessons();

      console.log(
        "Aung Business Academy:",
        lessons.length,
        "TOTAL LESSONS"
      );

      console.log(
        "Business:",
        lessons.filter(
          x => x.type === "business"
        ).length
      );

      console.log(
        "Business English:",
        lessons.filter(
          x => x.type === "english"
        ).length
      );

    }, 300);
  }

  if (
    document.readyState === "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      init
    );

  } else {

    init();

  }

})();
```
