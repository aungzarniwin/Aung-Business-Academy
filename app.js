/* =========================================================
   AUNG BUSINESS ACADEMY
   PROFESSIONAL LESSON ENGINE
   BUSINESS 230 + BUSINESS ENGLISH 30 = 260 LESSONS
   ========================================================= */

(function () {
  "use strict";

  console.log("Aung Business Academy: app.js START");

  /* =========================================================
     1. MODULES
     ========================================================= */

  const businessModules = [
    ["Business Basics", [
      "Understanding Business",
      "Business Models",
      "Business Objectives",
      "Revenue and Cost",
      "Profit Fundamentals",
      "Customers and Value",
      "Business Resources",
      "Business Growth",
      "Business Risk",
      "Business Manager Mindset"
    ]],

    ["Strategic Thinking", [
      "Strategic Thinking Fundamentals",
      "Vision and Mission",
      "SWOT Analysis",
      "Business Environment",
      "Strategic Priorities",
      "Competitive Advantage",
      "Strategic Choices",
      "Long-Term Thinking",
      "Strategic Execution",
      "Strategic Review"
    ]],

    ["Brand Basics", [
      "What Is a Brand",
      "Brand Positioning",
      "Brand Identity",
      "Brand Promise",
      "Brand Awareness",
      "Brand Image",
      "Brand Loyalty",
      "Brand Differentiation",
      "Brand Consistency",
      "Brand Growth"
    ]],

    ["Marketing Basics", [
      "Marketing Fundamentals",
      "Market Segmentation",
      "Target Customers",
      "Customer Needs",
      "Marketing Mix",
      "Product Strategy",
      "Promotion Strategy",
      "Place and Distribution",
      "Marketing Planning",
      "Marketing Measurement"
    ]],

    ["Sales Basics", [
      "Sales Fundamentals",
      "Sales Process",
      "Prospecting",
      "Lead Qualification",
      "Customer Needs Analysis",
      "Sales Presentation",
      "Handling Objections",
      "Closing Sales",
      "Follow-Up",
      "Sales Discipline"
    ]],

    ["Sales Management", [
      "Sales Manager Role",
      "Sales Team Structure",
      "Sales Target Management",
      "Sales Territory Management",
      "Sales Planning",
      "Daily Sales Management",
      "Weekly Sales Review",
      "Monthly Sales Review",
      "Sales Coaching",
      "Sales Manager Dashboard"
    ]],

    ["Sales Planning", [
      "Sales Planning Fundamentals",
      "Annual Sales Plan",
      "Monthly Sales Plan",
      "Weekly Sales Plan",
      "Daily Sales Plan",
      "Route Planning",
      "Customer Planning",
      "Channel Planning",
      "Resource Planning",
      "Sales Plan Review"
    ]],

    ["Sales KPI & Performance", [
      "Understanding KPIs",
      "Sales Achievement",
      "Sales Growth",
      "Distribution KPI",
      "Productivity KPI",
      "Conversion Rate",
      "Average Order Value",
      "Customer Retention",
      "Performance Gap Analysis",
      "KPI Review System"
    ]],

    ["Customer Management", [
      "Customer Management Fundamentals",
      "Customer Segmentation",
      "Key Customer Management",
      "Customer Potential",
      "Customer Visit Planning",
      "Customer Relationship",
      "Customer Retention",
      "Customer Development",
      "Customer Profitability",
      "Customer Review"
    ]],

    ["Negotiation", [
      "Negotiation Fundamentals",
      "Negotiation Preparation",
      "Understanding Customer Position",
      "Negotiation Objectives",
      "BATNA",
      "Price Negotiation",
      "Value Negotiation",
      "Handling Pressure",
      "Win-Win Negotiation",
      "Negotiation Review"
    ]],

    ["Customer Service", [
      "Customer Service Fundamentals",
      "Customer Expectations",
      "Service Quality",
      "Customer Complaints",
      "Complaint Handling",
      "Service Recovery",
      "Customer Communication",
      "Customer Loyalty",
      "Service KPI",
      "Customer Service Culture"
    ]],

    ["People Management", [
      "People Management Fundamentals",
      "Team Structure",
      "Role and Responsibility",
      "Setting Expectations",
      "Delegation",
      "Motivation",
      "Performance Management",
      "Feedback",
      "Accountability",
      "People Development"
    ]],

    ["Coaching & Leadership", [
      "Leadership Fundamentals",
      "Manager vs Leader",
      "Coaching Fundamentals",
      "Field Coaching",
      "One-to-One Coaching",
      "Feedback Skills",
      "Empowering Employees",
      "Building Ownership",
      "Leadership Communication",
      "Leadership Review"
    ]],

    ["Distribution Management", [
      "Distribution Fundamentals",
      "Distributor Management",
      "Direct Distribution",
      "Indirect Distribution",
      "Route to Market",
      "Stock Management",
      "Order Management",
      "Distribution Coverage",
      "Distributor KPI",
      "Distribution Improvement"
    ]],

    ["Market Analysis", [
      "Market Analysis Fundamentals",
      "Market Size",
      "Market Growth",
      "Market Share",
      "Customer Trends",
      "Channel Trends",
      "Regional Analysis",
      "Sales Data Analysis",
      "Market Opportunity",
      "Market Review"
    ]],

    ["Competitor Management", [
      "Competitor Fundamentals",
      "Competitor Mapping",
      "Competitor Pricing",
      "Competitor Products",
      "Competitor Distribution",
      "Competitor Promotion",
      "Competitor Strengths",
      "Competitor Weaknesses",
      "Competitive Response",
      "Competitor Review"
    ]],

    ["Profit & Loss", [
      "Profit Fundamentals",
      "Revenue",
      "Cost Structure",
      "Gross Profit",
      "Gross Margin",
      "Operating Expenses",
      "Contribution Margin",
      "Break-Even",
      "Profit Analysis",
      "Profit Improvement"
    ]],

    ["Pricing Strategy", [
      "Pricing Fundamentals",
      "Price Positioning",
      "Cost-Based Pricing",
      "Value-Based Pricing",
      "Competitive Pricing",
      "Discount Management",
      "Trade Promotion",
      "Price Increase",
      "Price Elasticity",
      "Pricing Review"
    ]],

    ["Business Finance", [
      "Business Finance Fundamentals",
      "Cash Flow",
      "Working Capital",
      "Accounts Receivable",
      "Credit Management",
      "Inventory Investment",
      "Budget Management",
      "Financial KPI",
      "Financial Risk",
      "Financial Decision Making"
    ]],

    ["Goal Setting", [
      "Goal Setting Fundamentals",
      "SMART Goals",
      "Business Goals",
      "Sales Goals",
      "Team Goals",
      "Individual Goals",
      "Goal Breakdown",
      "Action Planning",
      "Goal Tracking",
      "Goal Review"
    ]],

    ["Business Communication", [
      "Communication Fundamentals",
      "Manager Communication",
      "Team Communication",
      "Customer Communication",
      "Presentation Skills",
      "Meeting Communication",
      "Email Communication",
      "Report Communication",
      "Difficult Conversations",
      "Executive Communication"
    ]],

    ["Strategic Sales Leadership", [
      "Strategic Sales Leadership",
      "Sales Vision",
      "Sales Strategy",
      "Commercial Excellence",
      "Revenue Growth Strategy",
      "Channel Strategy",
      "Customer Strategy",
      "Sales Organization",
      "Strategic Sales Review",
      "Building a Winning Sales Team"
    ]],

    ["Decision Making & Problem Solving", [
      "Decision Making Fundamentals",
      "Problem Identification",
      "Root Cause Analysis",
      "5 Why Analysis",
      "Data-Based Decision Making",
      "Prioritization",
      "Risk-Based Decisions",
      "Problem Solving Process",
      "Manager Decision Making",
      "Strategic Problem Solving"
    ]]
  ];

  /* =========================================================
     2. BUSINESS ENGLISH - 30 LESSONS
     ========================================================= */

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

  /* =========================================================
     3. CREATE LESSON DATABASE
     ========================================================= */

  const lessons = [];

  businessModules.forEach(function (module, moduleIndex) {
    const moduleName = module[0];
    const titles = module[1];

    titles.forEach(function (title, lessonIndex) {
      lessons.push({
        id: "B" + String(moduleIndex + 1).padStart(2, "0") +
             "-" + String(lessonIndex + 1).padStart(2, "0"),

        type: "business",
        module: moduleName,
        moduleNumber: moduleIndex + 1,
        lessonNumber: lessonIndex + 1,
        title: title,
        globalNumber: lessons.length + 1
      });
    });
  });

  englishLessons.forEach(function (title, index) {
    lessons.push({
      id: "E" + String(index + 1).padStart(2, "0"),

      type: "english",
      module: "Business English",
      moduleNumber: 24,
      lessonNumber: index + 1,
      title: title,
      globalNumber: lessons.length + 1
    });
  });

  console.log("Aung Business Academy: " + lessons.length + " TOTAL LESSONS");
  console.log(
    "Business:",
    lessons.filter(x => x.type === "business").length
  );
  console.log(
    "Business English:",
    lessons.filter(x => x.type === "english").length
  );

  /* =========================================================
     4. LOCAL STORAGE
     ========================================================= */

  const STORAGE_KEY = "aung_business_academy_completed_v260";

  let completed = [];

  try {
    completed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch (e) {
    completed = [];
  }

  if (!Array.isArray(completed)) {
    completed = [];
  }

  function isCompleted(id) {
    return completed.includes(id);
  }

  function saveCompleted() {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(completed)
    );
  }

  /* =========================================================
     5. LESSON CONTENT
     ========================================================= */

  function businessEnglishContent(lesson) {
    const examples = [
      {
        en: "Could you please explain your requirements?",
        mm: "ကျေးဇူးပြု၍ သင့်လိုအပ်ချက်တွေကို ရှင်းပြပေးနိုင်မလား။"
      },
      {
        en: "Let me explain the situation clearly.",
        mm: "အခြေအနေကို ရှင်းရှင်းလင်းလင်း ရှင်းပြပေးပါမယ်။"
      },
      {
        en: "We need to review the sales performance.",
        mm: "အရောင်းစွမ်းဆောင်ရည်ကို ပြန်လည်သုံးသပ်ဖို့ လိုအပ်ပါတယ်။"
      },
      {
        en: "I would like to discuss the next steps.",
        mm: "နောက်တစ်ဆင့်လုပ်ဆောင်ရမယ့်အရာတွေကို ဆွေးနွေးချင်ပါတယ်။"
      },
      {
        en: "Could we arrange a meeting tomorrow?",
        mm: "မနက်ဖြန် Meeting တစ်ခု စီစဉ်နိုင်မလား။"
      },
      {
        en: "Thank you for your feedback.",
        mm: "သင့်ရဲ့အကြံပြုချက်အတွက် ကျေးဇူးတင်ပါတယ်။"
      }
    ];

    const example =
      examples[(lesson.lessonNumber - 1) % examples.length];

    return {
      objective:
        "ဒီ Business English Lesson ရဲ့ ရည်ရွယ်ချက်က " +
        lesson.title +
        " ကို လုပ်ငန်းခွင်မှာ သေချာအသုံးချနိုင်အောင် လေ့ကျင့်ပေးရန် ဖြစ်ပါတယ်။",

      explanation:
        "Business English ဆိုတာ English စကားလုံးတွေကို အလွတ်ကျက်တာသာမက " +
        "Customer, Manager, Team Member, Distributor နဲ့ Professional Business Environment " +
        "ထဲမှာ ရှင်းလင်းပြီး ယုံကြည်မှုရှိရှိ ပြောဆိုနိုင်ခြင်း ဖြစ်ပါတယ်။ " +
        "ဒီ Lesson မှာ စကားပြောပုံ၊ အသုံးအနှုန်း၊ Professional Tone နဲ့ " +
        "လုပ်ငန်းခွင်အသုံးချနိုင်တဲ့ နည်းလမ်းတွေကို တစ်ဆင့်ချင်း လေ့လာပါမယ်။",

      table: [
        ["English", "မြန်မာအဓိပ္ပါယ်", "အသုံးပြုရာနေရာ"],
        [example.en, example.mm, "Customer / Meeting"],
        ["Please give me a moment.", "ခဏလေးစောင့်ပေးပါ။", "Customer"],
        ["Let me check and get back to you.", "စစ်ဆေးပြီး ပြန်အကြောင်းပြန်ပါမယ်။", "Business"],
        ["I completely understand your concern.", "သင့်စိုးရိမ်ချက်ကို နားလည်ပါတယ်။", "Complaint"],
        ["Let's discuss the best solution.", "အကောင်းဆုံးဖြေရှင်းချက်ကို ဆွေးနွေးကြရအောင်။", "Negotiation"]
      ],

      graph: {
        labels: ["Vocabulary", "Listening", "Speaking", "Confidence"],
        values: [60, 55, 50, 45]
      },

      application:
        "Manager တစ်ယောက်အနေနဲ့ Business English ကို အသုံးချတဲ့အခါ " +
        "စကားလုံးမှန်ရုံနဲ့ မလုံလောက်ပါဘူး။ Tone, Clarity, Confidence နဲ့ " +
        "Business Purpose တို့ကို တွဲဖက်အသုံးပြုရပါမယ်။",

      caseStudy:
        "Customer တစ်ယောက်က Product, Price သို့မဟုတ် Delivery အကြောင်း " +
        "မေးလာတဲ့အခါ ချက်ချင်းမြန်မြန်ဖြေဖို့ထက် မေးခွန်းကို သေချာနားထောင်ပြီး " +
        "Professional English နဲ့ ရှင်းပြခြင်းက Customer Trust ကို တိုးစေပါတယ်။",

      managerThinking:
        "Professional English ကို အသုံးပြုတဲ့အခါ " +
        "ရည်ရွယ်ချက်က English ကောင်းပြဖို့ မဟုတ်ပါဘူး။ " +
        "Business Result ရဖို့ ဖြစ်ပါတယ်။",

      mistakes: [
        "မြန်မြန်ပြောပြီး Customer နားမလည်စေခြင်း",
        "အလွန် Casual ဖြစ်တဲ့ စကားလုံးများသုံးခြင်း",
        "အဓိပ္ပါယ်မသေချာတဲ့ စကားလုံးကို အသုံးပြုခြင်း",
        "Customer ကို နားမထောင်ဘဲ ကိုယ်ပြောချင်တာပဲ ပြောခြင်း"
      ],

      action:
        "ဒီနေ့ Lesson ထဲက English Sentence 5 ခုကို ရွေးပြီး " +
        "အသံထွက် 3 ကြိမ်စီ ပြောပါ။ ထို့နောက် Customer Conversation " +
        "တစ်ခုအဖြစ် Role Play လုပ်ပါ။",

      reflection:
        "ဒီ English Phrase ကို မနက်ဖြန် Customer နဲ့ ဘယ်လိုအခြေအနေမှာ အသုံးချမလဲ?"
    };
  }

  function businessContent(lesson) {
    return {
      objective:
        lesson.title +
        " ကို လုပ်ငန်းခွင်မှာ အမှန်တကယ်အသုံးချနိုင်အောင် " +
        "Concept → Data → Analysis → Action အဆင့်များဖြင့် လေ့လာရန်။",

      explanation:
        lesson.title +
        " ဟာ Sales Manager / Business Manager တစ်ယောက်အတွက် " +
        "အရေးကြီးတဲ့ Business Management Skill တစ်ခု ဖြစ်ပါတယ်။ " +
        "Concept ကို သိရုံနဲ့ မပြီးပါဘူး။ လက်တွေ့ Business Data ကိုကြည့်ပြီး " +
        "ဘာဖြစ်နေသလဲ၊ ဘာကြောင့်ဖြစ်သလဲ၊ ဘာလုပ်သင့်သလဲဆိုတာ ဆုံးဖြတ်နိုင်ရပါမယ်။",

      table: [
        ["Metric", "Target", "Actual", "Gap", "Action"],
        ["Sales", "100%", "85%", "-15%", "Field Coaching"],
        ["Distribution", "100%", "90%", "-10%", "Coverage Plan"],
        ["Customers", "100", "82", "-18", "Customer Visit"],
        ["Productivity", "100%", "88%", "-12%", "Team Review"],
        ["Collection", "100%", "92%", "-8%", "AR Follow-up"]
      ],

      graph: {
        labels: [
          "Target",
          "Sales",
          "Distribution",
          "Customers",
          "Collection"
        ],
        values: [100, 85, 90, 82, 92]
      },

      application:
        "ဥပမာ Sales Target 100 သိန်း ဖြစ်ပြီး Actual Sales 85 သိန်းသာရှိပါက " +
        "Target မပြည့်ဘူးဆိုပြီး ရပ်မနေဘဲ Gap 15 သိန်း ဘာကြောင့်ဖြစ်လာသလဲ " +
        "စစ်ဆေးရပါမယ်။ Customer Coverage လား၊ Stock Availability လား၊ " +
        "Sales Team Productivity လား၊ Competitor Activity လားဆိုတာ " +
        "Data အပေါ်မူတည်ပြီး ခွဲခြမ်းစိတ်ဖြာရပါမယ်။",

      caseStudy:
        "Area တစ်ခုမှာ Sales Achievement 85% ဖြစ်နေတယ်လို့ ယူဆပါ။ " +
        "Manager က Sales Rep တွေကို အပြစ်တင်မယ့်အစား " +
        "Customer Coverage, SKU Availability, Order Frequency, " +
        "Competitor Price နဲ့ Sales Call Quality ကို စစ်ဆေးပါတယ်။ " +
        "Root Cause တွေ့ပြီးမှ Corrective Action ချမှတ်ရပါမယ်။",

      managerThinking:
        "Manager က Problem ကို မြင်တာနဲ့ အဖြေမပေးသင့်ပါဘူး။ " +
        "Data → Root Cause → Decision → Action → Review ဆိုတဲ့ " +
        "Management Cycle ကို အသုံးပြုသင့်ပါတယ်။",

      mistakes: [
        "Data မကြည့်ဘဲ ခန့်မှန်းဆုံးဖြတ်ခြင်း",
        "Problem ရဲ့ Root Cause မရှာဘဲ အလျင်စလို Action ချခြင်း",
        "Team Member ကို အပြစ်တင်ခြင်း",
        "Action Plan ချပြီး Follow-up မလုပ်ခြင်း"
      ],

      action:
        "မိမိလုပ်ငန်းထဲက KPI တစ်ခုရွေးပါ။ " +
        "Target, Actual, Gap ကိုရေးပြီး Gap ဖြစ်ရတဲ့ Root Cause 3 ခုရှာပါ။ " +
        "ထို့နောက် Corrective Action 3 ခုရေးပါ။",

      reflection:
        "ဒီ Lesson ရဲ့ Concept ကို မိမိရဲ့ Team / Customer / Sales Area မှာ " +
        "ဘယ်လိုအသုံးချနိုင်မလဲ?"
    };
  }

  function getContent(lesson) {
    if (lesson.type === "english") {
      return businessEnglishContent(lesson);
    }

    return businessContent(lesson);
  }

  /* =========================================================
     6. FIND LESSON CONTAINER
     ========================================================= */

  function findLessonContainer() {

    const selectors = [
      "#lessonList",
      "#lessonsList",
      "#lesson-list",
      "#lessons-list",
      ".lesson-list",
      ".lessons-list",
      ".lesson-grid",
      ".lessons-grid",
      "#lessons",
      "#lessonPage",
      "#page-lessons",
      ".lessons-page",
      ".lessons-content",
      "[data-page='lessons']"
    ];

    for (const selector of selectors) {
      const el = document.querySelector(selector);

      if (el) {
        return el;
      }
    }

    return null;
  }

  /* =========================================================
     7. CREATE LESSON AREA IF NECESSARY
     ========================================================= */

  function ensureLessonContainer() {

    let container = findLessonContainer();

    if (container) {
      return container;
    }

    const page =
      document.querySelector("#page-lessons") ||
      document.querySelector("#lessons") ||
      document.querySelector(".lessons-page") ||
      document.querySelector("main") ||
      document.body;

    container = document.createElement("div");

    container.id = "academyLessonsMount";

    container.style.width = "100%";

    page.appendChild(container);

    return container;
  }

  /* =========================================================
     8. LESSON HEADER
     ========================================================= */

  function createLessonHeader(container) {

    let header = document.querySelector("#academyLessonHeader");

    if (header) {
      return header;
    }

    header = document.createElement("div");

    header.id = "academyLessonHeader";

    header.innerHTML = `
      <div style="
        background:linear-gradient(135deg,#0f172a,#1e3a8a);
        color:white;
        padding:24px;
        border-radius:18px;
        margin-bottom:20px;
        box-shadow:0 10px 30px rgba(15,23,42,.15);
      ">

        <div style="
          font-size:14px;
          opacity:.8;
          margin-bottom:6px;
        ">
          AUNG BUSINESS ACADEMY
        </div>

        <h2 style="
          margin:0 0 8px 0;
          font-size:26px;
        ">
          📚 Professional Learning Center
        </h2>

        <div id="academyLessonStats"
          style="font-size:15px;opacity:.9;">
        </div>

      </div>

      <div style="
        display:flex;
        gap:10px;
        flex-wrap:wrap;
        margin-bottom:18px;
      ">

        <button
          id="academyBusinessBtn"
          style="
            border:0;
            padding:12px 18px;
            border-radius:10px;
            cursor:pointer;
            font-weight:700;
          ">
          📘 Business 230
        </button>

        <button
          id="academyEnglishBtn"
          style="
            border:0;
            padding:12px 18px;
            border-radius:10px;
            cursor:pointer;
            font-weight:700;
          ">
          🇬🇧 Business English 30
        </button>

        <button
          id="academyAllBtn"
          style="
            border:0;
            padding:12px 18px;
            border-radius:10px;
            cursor:pointer;
            font-weight:700;
          ">
          📚 All 260
        </button>

      </div>

      <div style="
        margin-bottom:18px;
      ">

        <input
          id="academyLessonSearch"
          type="search"
          placeholder="🔎 Lesson ရှာရန်..."
          style="
            width:100%;
            padding:14px 16px;
            border:1px solid #cbd5e1;
            border-radius:12px;
            font-size:15px;
            outline:none;
          "
        >

      </div>
    `;

    container.parentNode.insertBefore(header, container);

    return header;
  }

  /* =========================================================
     9. CURRENT FILTER
     ========================================================= */

  let currentFilter = "all";
  let currentSearch = "";

  /* =========================================================
     10. RENDER LESSONS
     ========================================================= */

  function renderLessons() {

    const container = ensureLessonContainer();

    createLessonHeader(container);

    const filtered = lessons.filter(function (lesson) {

      let typeMatch = true;

      if (currentFilter === "business") {
        typeMatch = lesson.type === "business";
      }

      if (currentFilter === "english") {
        typeMatch = lesson.type === "english";
      }

      if (currentFilter === "completed") {
        typeMatch = isCompleted(lesson.id);
      }

      if (currentFilter === "remaining") {
        typeMatch = !isCompleted(lesson.id);
      }

      const searchMatch =
        !currentSearch ||
        lesson.title.toLowerCase().includes(
          currentSearch.toLowerCase()
        ) ||
        lesson.module.toLowerCase().includes(
          currentSearch.toLowerCase()
        );

      return typeMatch && searchMatch;
    });

    const businessCount =
      lessons.filter(x => x.type === "business").length;

    const englishCount =
      lessons.filter(x => x.type === "english").length;

    const completedCount =
      lessons.filter(x => isCompleted(x.id)).length;

    const stats =
      document.querySelector("#academyLessonStats");

    if (stats) {
      stats.innerHTML =
        `Business <b>${businessCount}</b> Lessons &nbsp; | &nbsp; ` +
        `🇬🇧 English <b>${englishCount}</b> Lessons &nbsp; | &nbsp; ` +
        `Completed <b>${completedCount}</b> / ${lessons.length}`;
    }

    const searchInput =
      document.querySelector("#academyLessonSearch");

    if (searchInput && searchInput.value !== currentSearch) {
      searchInput.value = currentSearch;
    }

    const list = container;

    list.innerHTML = "";

    if (!filtered.length) {

      list.innerHTML = `
        <div style="
          padding:40px;
          text-align:center;
          background:white;
          border-radius:16px;
          border:1px solid #e2e8f0;
        ">
          <div style="font-size:42px;">🔎</div>
          <h3>Lesson မတွေ့ပါ</h3>
          <p style="color:#64748b;">
            Search စကားလုံး သို့မဟုတ် Filter ကို ပြန်စစ်ပါ။
          </p>
        </div>
      `;

      return;
    }

    const grid = document.createElement("div");

    grid.style.display = "grid";
    grid.style.gridTemplateColumns =
      "repeat(auto-fit,minmax(280px,1fr))";
    grid.style.gap = "16px";

    filtered.forEach(function (lesson) {

      const card = document.createElement("div");

      card.style.background = "white";
      card.style.border = "1px solid #e2e8f0";
      card.style.borderRadius = "16px";
      card.style.padding = "18px";
      card.style.cursor = "pointer";
      card.style.transition = "all .2s";
      card.style.boxShadow =
        "0 5px 18px rgba(15,23,42,.06)";

      const done = isCompleted(lesson.id);

      const badge =
        lesson.type === "english"
          ? "🇬🇧 BUSINESS ENGLISH"
          : "📘 BUSINESS";

      card.innerHTML = `

        <div style="
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:8px;
          margin-bottom:12px;
        ">

          <span style="
            font-size:11px;
            font-weight:800;
            color:#2563eb;
          ">
            ${badge}
          </span>

          <span style="
            font-size:12px;
            color:${done ? "#16a34a" : "#64748b"};
            font-weight:700;
          ">
            ${done ? "✓ Completed" : "Not Started"}
          </span>

        </div>

        <div style="
          font-size:12px;
          color:#64748b;
          margin-bottom:7px;
        ">
          Lesson ${lesson.globalNumber}
        </div>

        <h3 style="
          margin:0 0 10px 0;
          font-size:17px;
          line-height:1.4;
          color:#0f172a;
        ">
          ${lesson.title}
        </h3>

        <div style="
          font-size:13px;
          color:#64748b;
        ">
          ${lesson.module}
        </div>

        <div style="
          margin-top:15px;
          color:#2563eb;
          font-size:13px;
          font-weight:700;
        ">
          📖 15-Minute Professional Lesson →
        </div>

      `;

      card.addEventListener("mouseenter", function () {
        card.style.transform = "translateY(-3px)";
        card.style.boxShadow =
          "0 12px 28px rgba(15,23,42,.12)";
      });

      card.addEventListener("mouseleave", function () {
        card.style.transform = "translateY(0)";
        card.style.boxShadow =
          "0 5px 18px rgba(15,23,42,.06)";
      });

      card.addEventListener("click", function () {
        openLesson(lesson.id);
      });

      grid.appendChild(card);
    });

    list.appendChild(grid);
  }

  /* =========================================================
     11. LESSON MODAL
     ========================================================= */

  function openLesson(id) {

    const lesson = lessons.find(
      x => x.id === id
    );

    if (!lesson) return;

    const content = getContent(lesson);

    let modal =
      document.querySelector("#academyLessonModal");

    if (modal) {
      modal.remove();
    }

    modal = document.createElement("div");

    modal.id = "academyLessonModal";

    modal.style.position = "fixed";
    modal.style.inset = "0";
    modal.style.background =
      "rgba(15,23,42,.75)";
    modal.style.zIndex = "999999";
    modal.style.overflowY = "auto";
    modal.style.padding = "25px";

    const tableRows =
      content.table.slice(1).map(function (row) {

        return `
          <tr>
            ${row.map(function (cell) {
              return `
                <td style="
                  padding:12px;
                  border:1px solid #e2e8f0;
                  vertical-align:top;
                ">
                  ${cell}
                </td>
              `;
            }).join("")}
          </tr>
        `;

      }).join("");

    const tableHeader =
      content.table[0].map(function (cell) {

        return `
          <th style="
            padding:12px;
            border:1px solid #e2e8f0;
            text-align:left;
            background:#f1f5f9;
          ">
            ${cell}
          </th>
        `;

      }).join("");

    const previous =
      lessons[lesson.globalNumber - 2];

    const next =
      lessons[lesson.globalNumber];

    modal.innerHTML = `

      <div style="
        max-width:1000px;
        margin:0 auto;
        background:#fff;
        border-radius:20px;
        overflow:hidden;
      ">

        <div style="
          background:linear-gradient(135deg,#0f172a,#1e3a8a);
          color:white;
          padding:25px;
        ">

          <div style="
            font-size:12px;
            opacity:.8;
            margin-bottom:8px;
          ">
            ${lesson.type === "english"
              ? "🇬🇧 BUSINESS ENGLISH"
              : "📘 BUSINESS ACADEMY"}
          </div>

          <h1 style="
            margin:0 0 8px 0;
            font-size:28px;
          ">
            ${lesson.title}
          </h1>

          <div style="opacity:.85;">
            Lesson ${lesson.globalNumber} / ${lessons.length}
            · ${lesson.module}
          </div>

        </div>

        <div style="padding:25px;">

          <section style="margin-bottom:30px;">
            <h2>🎯 Learning Objective</h2>
            <p style="line-height:1.9;">
              ${content.objective}
            </p>
          </section>

          <section style="margin-bottom:30px;">
            <h2>📖 Detailed Explanation</h2>
            <p style="line-height:2;">
              ${content.explanation}
            </p>
          </section>

          <section style="margin-bottom:30px;overflow:auto;">
            <h2>📊 Business Analysis Table</h2>

            <table style="
              width:100%;
              border-collapse:collapse;
              margin-top:12px;
              font-size:14px;
            ">

              <thead>
                <tr>${tableHeader}</tr>
              </thead>

              <tbody>
                ${tableRows}
              </tbody>

            </table>
          </section>

          <section style="margin-bottom:30px;">

            <h2>📈 Performance Graph</h2>

            <div style="
              display:flex;
              align-items:flex-end;
              gap:14px;
              height:220px;
              padding:20px;
              background:#f8fafc;
              border-radius:15px;
              margin-top:12px;
            ">

              ${content.graph.labels.map(function (label, index) {

                const value =
                  content.graph.values[index];

                return `
                  <div style="
                    flex:1;
                    height:100%;
                    display:flex;
                    flex-direction:column;
                    justify-content:flex-end;
                    align-items:center;
                    gap:6px;
                  ">

                    <div style="
                      font-size:12px;
                      font-weight:700;
                    ">
                      ${value}%
                    </div>

                    <div style="
                      width:70%;
                      max-width:55px;
                      height:${value * 1.5}px;
                      min-height:20px;
                      background:#2563eb;
                      border-radius:7px 7px 0 0;
                    "></div>

                    <div style="
                      font-size:11px;
                      text-align:center;
                      color:#475569;
                    ">
                      ${label}
                    </div>

                  </div>
                `;

              }).join("")}

            </div>

          </section>

          <section style="margin-bottom:30px;">

            <h2>💼 Real Business Application</h2>

            <div style="
              background:#eff6ff;
              padding:18px;
              border-radius:12px;
              line-height:1.9;
            ">
              ${content.application}
            </div>

          </section>

          <section style="margin-bottom:30px;">

            <h2>🧩 Real Business Case Study</h2>

            <div style="
              background:#f8fafc;
              padding:18px;
              border-radius:12px;
              line-height:1.9;
            ">
              ${content.caseStudy}
            </div>

          </section>

          <section style="margin-bottom:30px;">

            <h2>🧠 Manager Thinking</h2>

            <div style="
              background:#fefce8;
              padding:18px;
              border-radius:12px;
              line-height:1.9;
            ">
              ${content.managerThinking}
            </div>

          </section>

          <section style="margin-bottom:30px;">

            <h2>⚠️ Common Mistakes</h2>

            <ul style="
              line-height:2;
              padding-left:25px;
            ">

              ${content.mistakes.map(function (item) {
                return `<li>${item}</li>`;
              }).join("")}

            </ul>

          </section>

          <section style="margin-bottom:30px;">

            <h2>🚀 Action Plan</h2>

            <div style="
              background:#ecfdf5;
              padding:18px;
              border-radius:12px;
              line-height:1.9;
            ">
              ${content.action}
            </div>

          </section>

          <section style="margin-bottom:30px;">

            <h2>💭 Reflection</h2>

            <div style="
              background:#f5f3ff;
              padding:18px;
              border-radius:12px;
              line-height:1.9;
            ">
              ${content.reflection}
            </div>

          </section>

          <div style="
            display:flex;
            gap:10px;
            flex-wrap:wrap;
            justify-content:space-between;
            margin-top:30px;
            padding-top:20px;
            border-top:1px solid #e2e8f0;
          ">

            <button
              id="academyPrevLesson"
              ${previous ? "" : "disabled"}
              style="
                padding:12px 18px;
                border:0;
                border-radius:10px;
                cursor:pointer;
              ">
              ← Previous
            </button>

            <button
              id="academyCompleteLesson"
              style="
                padding:13px 22px;
                border:0;
                border-radius:10px;
                background:#16a34a;
                color:white;
                font-weight:800;
                cursor:pointer;
              ">
              ${isCompleted(lesson.id)
                ? "✓ Completed"
                : "✓ Complete Lesson"}
            </button>

            <button
              id="academyNextLesson"
              ${next ? "" : "disabled"}
              style="
                padding:12px 18px;
                border:0;
                border-radius:10px;
                cursor:pointer;
              ">
              Next →
            </button>

          </div>

          <button
            id="academyCloseLesson"
            style="
              width:100%;
              margin-top:12px;
              padding:12px;
              border:1px solid #cbd5e1;
              background:white;
              border-radius:10px;
              cursor:pointer;
            ">
            Close
          </button>

        </div>

      </div>
    `;

    document.body.appendChild(modal);

    document
      .querySelector("#academyCloseLesson")
      .addEventListener("click", function () {
        modal.remove();
      });

    const completeButton =
      document.querySelector("#academyCompleteLesson");

    completeButton.addEventListener(
      "click",
      function () {

        if (!completed.includes(lesson.id)) {
          completed.push(lesson.id);
        }

        saveCompleted();

        completeButton.textContent =
          "✓ Completed";

        renderLessons();
      }
    );

    if (previous) {

      document
        .querySelector("#academyPrevLesson")
        .addEventListener("click", function () {

          modal.remove();
          openLesson(previous.id);

        });

    }

    if (next) {

      document
        .querySelector("#academyNextLesson")
        .addEventListener("click", function () {

          modal.remove();
          openLesson(next.id);

        });

    }

    modal.addEventListener("click", function (event) {

      if (event.target === modal) {
        modal.remove();
      }

    });
  }

  /* =========================================================
     12. FILTER BUTTONS
     ========================================================= */

  function setupFilters() {

    const business =
      document.querySelector("#academyBusinessBtn");

    const english =
      document.querySelector("#academyEnglishBtn");

    const all =
      document.querySelector("#academyAllBtn");

    const search =
      document.querySelector("#academyLessonSearch");

    if (business) {

      business.addEventListener("click", function () {

        currentFilter = "business";
        renderLessons();

      });

    }

    if (english) {

      english.addEventListener("click", function () {

        currentFilter = "english";
        renderLessons();

      });

    }

    if (all) {

      all.addEventListener("click", function () {

        currentFilter = "all";
        renderLessons();

      });

    }

    if (search) {

      search.addEventListener("input", function () {

        currentSearch = search.value.trim();
        renderLessons();

      });

    }
  }

  /* =========================================================
     13. DASHBOARD PROGRESS
     ========================================================= */

  function updateProgressText() {

    const total = lessons.length;

    const done = lessons.filter(
      x => isCompleted(x.id)
    ).length;

    const percentage =
      total === 0
        ? 0
        : Math.round((done / total) * 100);

    const selectors = [
      "#progress",
      "#progressPercent",
      ".progress-percent",
      "[data-progress]"
    ];

    selectors.forEach(function (selector) {

      document
        .querySelectorAll(selector)
        .forEach(function (el) {

          if (el.tagName === "INPUT") return;

          el.textContent =
            percentage + "%";

        });

    });

    console.log(
      "Academy Progress:",
      done + "/" + total,
      percentage + "%"
    );
  }

  /* =========================================================
     14. INITIALIZE
     ========================================================= */

  function init() {

    console.log("Aung Business Academy: INITIALIZING");

    const container =
      findLessonContainer();

    if (container) {

      createLessonHeader(container);

      setupFilters();

      renderLessons();

    } else {

      /*
       If the original HTML doesn't have a lesson container,
       create one automatically.
      */

      const newContainer =
        ensureLessonContainer();

      createLessonHeader(newContainer);

      setupFilters();

      renderLessons();
    }

    updateProgressText();

    console.log("================================");
    console.log("AUNG BUSINESS ACADEMY READY");
    console.log("Business Lessons: 230");
    console.log("Business English: 30");
    console.log("TOTAL LESSONS: 260");
    console.log("================================");
  }

  /* =========================================================
     15. START
     ========================================================= */

  if (document.readyState === "loading") {

    document.addEventListener(
      "DOMContentLoaded",
      init
    );

  } else {

    init();

  }

  /* =========================================================
     16. PUBLIC API
     ========================================================= */

  window.AungBusinessAcademy = {

    lessons: lessons,

    openLesson: openLesson,

    renderLessons: renderLessons,

    getTotalLessons: function () {
      return lessons.length;
    },

    getBusinessLessons: function () {
      return lessons.filter(
        x => x.type === "business"
      );
    },

    getEnglishLessons: function () {
      return lessons.filter(
        x => x.type === "english"
      );
    },

    getCompletedLessons: function () {
      return lessons.filter(
        x => isCompleted(x.id)
      );
    },

    getProgress: function () {

      const done =
        lessons.filter(
          x => isCompleted(x.id)
        ).length;

      return {
        completed: done,
        total: lessons.length,
        percentage:
          Math.round(
            (done / lessons.length) * 100
          )
      };
    }

  };

})();
