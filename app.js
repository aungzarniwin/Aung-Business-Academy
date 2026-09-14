/* =========================================================
   AUNG BUSINESS ACADEMY
   V15 PROFESSIONAL
   260 LESSONS
   230 BUSINESS + 30 BUSINESS ENGLISH
   ========================================================= */

(function () {
  "use strict";

  const STORAGE_KEY = "aungBusinessAcademy";
  const LESSON_STORAGE_KEY = "aungBusinessAcademyLessons";

  /* =========================================================
     1. BUSINESS MODULES — 230 LESSONS
     ========================================================= */

  const businessModules = [
    {
      name: "Business Basics",
      lessons: [
        "Business Fundamentals",
        "Understanding Business Models",
        "Vision and Mission",
        "Business Goals",
        "Understanding Customers",
        "Value Proposition",
        "Business Planning",
        "Business Resources",
        "Business Growth",
        "Business Manager Mindset"
      ]
    },
    {
      name: "Strategic Thinking",
      lessons: [
        "Strategic Thinking Basics",
        "Long-Term Thinking",
        "Business Priorities",
        "Strategic Planning",
        "SWOT Analysis",
        "Opportunity Analysis",
        "Risk Analysis",
        "Decision Making",
        "Strategic Execution",
        "Strategic Review"
      ]
    },
    {
      name: "Brand Basics",
      lessons: [
        "Brand Fundamentals",
        "Brand Identity",
        "Brand Positioning",
        "Brand Promise",
        "Brand Value",
        "Customer Perception",
        "Brand Consistency",
        "Brand Trust",
        "Brand Differentiation",
        "Building a Strong Brand"
      ]
    },
    {
      name: "Marketing Basics",
      lessons: [
        "Marketing Fundamentals",
        "Understanding the Market",
        "Target Customers",
        "Customer Segmentation",
        "Marketing Mix",
        "Product Strategy",
        "Promotion Strategy",
        "Distribution Strategy",
        "Marketing Planning",
        "Marketing Performance"
      ]
    },
    {
      name: "Sales Basics",
      lessons: [
        "Sales Fundamentals",
        "Sales Process",
        "Prospecting",
        "Lead Management",
        "Customer Approach",
        "Needs Discovery",
        "Product Presentation",
        "Objection Handling",
        "Closing Sales",
        "After-Sales Follow-Up"
      ]
    },
    {
      name: "Sales Management",
      lessons: [
        "Sales Management Fundamentals",
        "Sales Manager Role",
        "Sales Team Structure",
        "Sales Target Management",
        "Daily Sales Management",
        "Field Sales Management",
        "Sales Meeting Management",
        "Sales Discipline",
        "Sales Performance Management",
        "Sales Manager Excellence"
      ]
    },
    {
      name: "Sales Planning",
      lessons: [
        "Sales Planning Fundamentals",
        "Annual Sales Planning",
        "Monthly Sales Planning",
        "Weekly Sales Planning",
        "Daily Sales Planning",
        "Territory Planning",
        "Customer Planning",
        "Route Planning",
        "Sales Forecasting",
        "Sales Plan Review"
      ]
    },
    {
      name: "Sales KPI & Performance",
      lessons: [
        "Understanding Sales KPIs",
        "Volume KPI",
        "Revenue KPI",
        "Distribution KPI",
        "Productivity KPI",
        "Achievement Analysis",
        "Gap Analysis",
        "Sales Performance Review",
        "Corrective Action",
        "Performance Excellence"
      ]
    },
    {
      name: "Customer Management",
      lessons: [
        "Customer Management Basics",
        "Customer Segmentation",
        "Key Account Management",
        "Customer Relationship",
        "Customer Needs",
        "Customer Value",
        "Customer Retention",
        "Customer Development",
        "Customer Visit Planning",
        "Customer Growth Strategy"
      ]
    },
    {
      name: "Negotiation",
      lessons: [
        "Negotiation Fundamentals",
        "Negotiation Preparation",
        "Understanding Customer Needs",
        "Negotiation Objectives",
        "Win-Win Negotiation",
        "Price Negotiation",
        "Trade Negotiation",
        "Handling Difficult Negotiations",
        "Negotiation Closing",
        "Negotiation Follow-Up"
      ]
    },
    {
      name: "Customer Service",
      lessons: [
        "Customer Service Fundamentals",
        "Service Mindset",
        "Customer Communication",
        "Handling Complaints",
        "Problem Solving",
        "Service Recovery",
        "Customer Satisfaction",
        "Customer Loyalty",
        "Service Standards",
        "Excellent Customer Service"
      ]
    },
    {
      name: "People Management",
      lessons: [
        "People Management Basics",
        "Understanding Team Members",
        "Setting Expectations",
        "Delegation",
        "Team Motivation",
        "Performance Management",
        "Feedback",
        "Conflict Management",
        "Team Development",
        "Building High Performance Teams"
      ]
    },
    {
      name: "Coaching & Leadership",
      lessons: [
        "Leadership Fundamentals",
        "Manager vs Leader",
        "Coaching Mindset",
        "Field Coaching",
        "One-on-One Coaching",
        "Giving Effective Feedback",
        "Empowering Employees",
        "Accountability",
        "Leadership Communication",
        "Winning Leadership"
      ]
    },
    {
      name: "Distribution Management",
      lessons: [
        "Distribution Fundamentals",
        "Distributor Management",
        "Route-to-Market",
        "Direct Distribution",
        "Indirect Distribution",
        "Stock Management",
        "Order Management",
        "Distribution Coverage",
        "Distributor Performance",
        "Distribution Excellence"
      ]
    },
    {
      name: "Market Analysis",
      lessons: [
        "Market Analysis Fundamentals",
        "Market Size",
        "Market Potential",
        "Market Share",
        "Territory Analysis",
        "Customer Analysis",
        "Sales Trend Analysis",
        "Market Opportunity",
        "Market Risk",
        "Market Action Plan"
      ]
    },
    {
      name: "Competitor Management",
      lessons: [
        "Competitor Analysis",
        "Competitor Mapping",
        "Competitor Pricing",
        "Competitor Products",
        "Competitor Distribution",
        "Competitor Activities",
        "Competitive Advantage",
        "Market Response",
        "Competitor Intelligence",
        "Winning Against Competition"
      ]
    },
    {
      name: "Profit & Loss",
      lessons: [
        "Profit & Loss Fundamentals",
        "Revenue",
        "Cost of Goods",
        "Gross Profit",
        "Operating Expenses",
        "Net Profit",
        "Profit Margin",
        "Cost Control",
        "Profit Improvement",
        "Manager Financial Mindset"
      ]
    },
    {
      name: "Pricing Strategy",
      lessons: [
        "Pricing Fundamentals",
        "Cost-Based Pricing",
        "Market-Based Pricing",
        "Value-Based Pricing",
        "Price Positioning",
        "Discount Management",
        "Trade Terms",
        "Price Increase",
        "Pricing Review",
        "Winning Pricing Strategy"
      ]
    },
    {
      name: "Business Finance",
      lessons: [
        "Business Finance Basics",
        "Cash Flow",
        "Working Capital",
        "Accounts Receivable",
        "Credit Management",
        "Budget Management",
        "Financial Planning",
        "Financial Risk",
        "Financial Reporting",
        "Manager Financial Control"
      ]
    },
    {
      name: "Goal Setting",
      lessons: [
        "Goal Setting Fundamentals",
        "SMART Goals",
        "Personal Goals",
        "Team Goals",
        "Sales Goals",
        "Monthly Goals",
        "Action Plans",
        "Progress Tracking",
        "Goal Review",
        "Goal Achievement"
      ]
    },
    {
      name: "Business Communication",
      lessons: [
        "Business Communication Basics",
        "Professional Communication",
        "Listening Skills",
        "Questioning Skills",
        "Presentation Skills",
        "Meeting Communication",
        "Report Communication",
        "Difficult Conversations",
        "Management Communication",
        "Executive Communication"
      ]
    },
    {
      name: "Strategic Sales Leadership",
      lessons: [
        "Strategic Sales Leadership",
        "Sales Vision",
        "Sales Strategy",
        "Revenue Growth",
        "Market Expansion",
        "Team Capability",
        "Customer Strategy",
        "Commercial Excellence",
        "Business Transformation",
        "Sales Leadership Mastery"
      ]
    },
    {
      name: "Decision Making & Problem Solving",
      lessons: [
        "Decision Making Fundamentals",
        "Problem Identification",
        "Root Cause Analysis",
        "5 Why Analysis",
        "Prioritizing Problems",
        "Data-Based Decisions",
        "Risk-Based Decisions",
        "Problem Solving Process",
        "Action Decision",
        "Manager Decision Excellence"
      ]
    }
  ];

  /* =========================================================
     2. BUSINESS ENGLISH — 30 LESSONS
     ========================================================= */

  const businessEnglish = {
    name: "Business English",
    lessons: [
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
    ]
  };

  /* =========================================================
     3. LESSON BUILDER
     ========================================================= */

  function buildLessons() {
    const lessons = [];
    let number = 1;

    businessModules.forEach(function (module) {
      module.lessons.forEach(function (title) {
        lessons.push({
          id: "lesson-" + number,
          number: number,
          module: module.name,
          title: title,
          type: "business",
          content: createBusinessContent(title, module.name)
        });
        number++;
      });
    });

    businessEnglish.lessons.forEach(function (title) {
      lessons.push({
        id: "lesson-" + number,
        number: number,
        module: businessEnglish.name,
        title: title,
        type: "english",
        content: createEnglishContent(title)
      });
      number++;
    });

    return lessons;
  }

  function createBusinessContent(title, module) {
    return {
      objective:
        "ဒီသင်ခန်းစာရဲ့ ရည်ရွယ်ချက်က " +
        title +
        " ကို Business Manager တစ်ယောက်အနေနဲ့ လက်တွေ့အသုံးချနိုင်အောင် နားလည်စေရန် ဖြစ်ပါတယ်။",

      keyPoints: [
        title + " ရဲ့ အဓိကအဓိပ္ပါယ်ကို နားလည်ပါ။",
        "Business ရလဒ်နဲ့ ဘယ်လိုဆက်စပ်နေသလဲ စဉ်းစားပါ။",
        "Team နဲ့ Customer အပေါ် သက်ရောက်မှုကို သုံးသပ်ပါ။",
        "နေ့စဉ်လုပ်ငန်းမှာ လက်တွေ့အသုံးချပါ။"
      ],

      managerPoint:
        "Manager တစ်ယောက်အနေနဲ့ " +
        title +
        " ကို သိထားရုံမက Data၊ People နဲ့ Execution သုံးခုကို ချိတ်ဆက်ပြီး Result ရအောင် ဆောင်ရွက်နိုင်ရပါမယ်။",

      action:
        "ဒီနေ့ လက်တွေ့လုပ်ဆောင်ရန် — " +
        title +
        " နဲ့ သက်ဆိုင်တဲ့ ကိုယ့်လုပ်ငန်းထဲက Situation တစ်ခုကို ရွေးပြီး Action Plan တစ်ခုရေးပါ။",

      reflection:
        "ယနေ့အလုပ်မှာ ဒီအကြောင်းအရာကို ဘယ်နေရာမှာ အသုံးချနိုင်မလဲ? " +
        "ဘာကို ပိုကောင်းအောင် ပြင်ဆင်နိုင်မလဲ?",

      summary:
        module +
        " အတွင်းမှာ " +
        title +
        " ဟာ Business Result တိုးတက်စေရန် အရေးကြီးတဲ့ Management Skill တစ်ခုဖြစ်ပါတယ်။"
    };
  }

  function createEnglishContent(title) {
    const examples = getEnglishExample(title);

    return {
      objective:
        "ဒီသင်ခန်းစာမှာ " +
        title +
        " ကို မြန်မာလိုနားလည်ပြီး Business English အဖြစ် လက်တွေ့ပြောနိုင်၊ ရေးနိုင်အောင် လေ့ကျင့်ပါမယ်။",

      keyPoints: [
        "Business English မှာ ရိုးရှင်းပြီး Professional ဖြစ်တဲ့ စကားလုံးတွေကို အသုံးပြုပါ။",
        "Short and clear sentences ကို ဦးစားပေးပါ။",
        "Customer၊ Manager နဲ့ Team အလိုက် Communication Style ပြောင်းသုံးပါ။",
        "English ကို သိရုံမဟုတ်ဘဲ လက်တွေ့ပြောဆိုအသုံးချပါ။"
      ],

      managerPoint:
        "Sales Manager တစ်ယောက်အနေနဲ့ English Communication က Customer၊ Principal၊ Regional Team နဲ့ Management ကို ချိတ်ဆက်ပေးနိုင်တဲ့ အရေးကြီးတဲ့ Skill ဖြစ်ပါတယ်။",

      examples: examples,

      action:
        "ဒီနေ့ သင်ခန်းစာထဲက English sentence 3 ကြောင်းကို အသံထွက်နဲ့ 3 ကြိမ်စီ ပြောပါ။ ပြီးရင် ကိုယ့်အလုပ်နဲ့ ဆိုင်တဲ့ sentence တစ်ကြောင်း ထပ်ရေးပါ။",

      reflection:
        "ဒီ English Skill ကို Customer၊ Team Member သို့မဟုတ် Manager နဲ့ ပြောဆိုတဲ့အခါ ဘယ်လိုအသုံးချနိုင်မလဲ?",

      summary:
        "Business English ကို နေ့စဉ် 10–15 မိနစ် လေ့ကျင့်သွားရင် Professional Communication Skill တဖြည်းဖြည်း တိုးတက်လာနိုင်ပါတယ်။"
    };
  }

  function getEnglishExample(title) {
    const map = {
      "Business English Fundamentals": [
        "English: Good morning. How can I help you?",
        "မြန်မာ: မင်္ဂလာနံနက်ခင်းပါ။ ဘာကူညီပေးရမလဲ?",
        "အသုံးချရန်: Customer ကို Professional ဖြစ်အောင် စတင်နှုတ်ဆက်ရာမှာ သုံးပါ။"
      ],

      "Introducing Yourself Professionally": [
        "English: My name is Aung. I am a Sales Manager.",
        "မြန်မာ: ကျွန်တော့်နာမည် Aung ဖြစ်ပါတယ်။ Sales Manager တစ်ယောက်ဖြစ်ပါတယ်။",
        "အသုံးချရန်: Meeting သို့မဟုတ် Business Introduction မှာ သုံးပါ။"
      ],

      "Introducing Your Company": [
        "English: Let me briefly introduce our company.",
        "မြန်မာ: ကျွန်တော်တို့ Company ကို အကျဉ်းချုပ် မိတ်ဆက်ပေးပါရစေ။",
        "အသုံးချရန်: Customer Meeting တွင် Company မိတ်ဆက်ရာမှာ သုံးပါ။"
      ],

      "Sales English Basics": [
        "English: May I understand your current needs?",
        "မြန်မာ: လက်ရှိ သင့်လိုအပ်ချက်ကို နားလည်ခွင့်ပြုပါ။",
        "အသုံးချရန်: Sales Conversation စတင်ရာမှာ သုံးပါ။"
      ],

      "Handling Customer Objections": [
        "English: I understand your concern. Let me explain.",
        "မြန်မာ: သင့်ရဲ့စိုးရိမ်ချက်ကို နားလည်ပါတယ်။ ရှင်းပြပေးပါရစေ။",
        "အသုံးချရန်: Customer Objection ကို Professional ဖြစ်အောင် ဖြေရှင်းရာမှာ သုံးပါ။"
      ],

      "Negotiation English": [
        "English: Let's find a solution that works for both sides.",
        "မြန်မာ: နှစ်ဖက်စလုံးအတွက် အဆင်ပြေမယ့် ဖြေရှင်းချက်ကို ရှာကြရအောင်။",
        "အသုံးချရန်: Win-Win Negotiation မှာ သုံးပါ။"
      ],

      "Closing Sales in English": [
        "English: Shall we proceed with the order?",
        "မြန်မာ: Order ကို ဆက်လက်လုပ်ဆောင်ကြမလား?",
        "အသုံးချရန်: Sales Closing အချိန်မှာ သုံးပါ။"
      ],

      "Business Meeting English": [
        "English: Let's start with the sales performance.",
        "မြန်မာ: Sales Performance နဲ့ စကြရအောင်။",
        "အသုံးချရန်: Business Meeting စတင်ရာမှာ သုံးပါ။"
      ],

      "Leading a Meeting": [
        "English: Today, I would like to discuss our sales target.",
        "မြန်မာ: ဒီနေ့ Sales Target အကြောင်း ဆွေးနွေးချင်ပါတယ်။",
        "အသုံးချရန်: Meeting Leader အနေနဲ့ Agenda စတင်ရာမှာ သုံးပါ။"
      ],

      "Presentation English": [
        "English: Let me walk you through the key results.",
        "မြန်မာ: အဓိကရလဒ်တွေကို တစ်ဆင့်ချင်း ရှင်းပြပေးပါမယ်။",
        "အသုံးချရန်: Management Presentation မှာ သုံးပါ။"
      ],

      "Email Writing Basics": [
        "English: Dear Team, Please find the sales report attached.",
        "မြန်မာ: Team အားလုံးခင်ဗျာ၊ Sales Report ကို ပူးတွဲပေးပို့ထားပါတယ်။",
        "အသုံးချရန်: Professional Email မှာ သုံးပါ။"
      ],

      "Interview English": [
        "English: I have extensive experience in sales and team management.",
        "မြန်မာ: Sales နဲ့ Team Management ပိုင်းမှာ အတွေ့အကြုံများစွာ ရှိပါတယ်။",
        "အသုံးချရန်: Job Interview မှာ သုံးပါ။"
      ],

      "Sales Manager Interview English": [
        "English: I focus on people, numbers and execution.",
        "မြန်မာ: ကျွန်တော်က People၊ Numbers နဲ့ Execution ကို အဓိကထားပါတယ်။",
        "အသုံးချရန်: Sales Manager Interview မှာ ကိုယ့် Management Style ကို ရှင်းပြရာမှာ သုံးပါ။"
      ]
    };

    return map[title] || [
      "English: I would like to discuss this with you.",
      "မြန်မာ: ဒီအကြောင်းကို ခင်ဗျားနဲ့ ဆွေးနွေးချင်ပါတယ်။",
      "အသုံးချရန်: Professional Business Communication မှာ သုံးနိုင်ပါတယ်။"
    ];
  }

  const lessons = buildLessons();

  /* =========================================================
     4. STATE
     ========================================================= */

  let state = loadState();

  function loadState() {
    let saved = {};

    try {
      saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      saved = {};
    }

    if (!saved.completed) {
      saved.completed = {};
    }

    return saved;
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function isCompleted(id) {
    return !!state.completed[id];
  }

  function completedCount() {
    return lessons.filter(function (lesson) {
      return isCompleted(lesson.id);
    }).length;
  }

  function progressPercent() {
    return Math.round((completedCount() / lessons.length) * 100);
  }

  /* =========================================================
     5. LESSON STORAGE
     ========================================================= */

  try {
    localStorage.setItem(
      LESSON_STORAGE_KEY,
      JSON.stringify({
        version: "V15",
        total: lessons.length,
        lessons: lessons
      })
    );
  } catch (e) {
    console.warn("Lesson storage error", e);
  }

  /* =========================================================
     6. PAGE NAVIGATION
     ========================================================= */

  const pageTitles = {
    dashboard: ["Dashboard", "Your Business Academy"],
    courses: ["My Courses", "Business learning programs"],
    lessons: ["Lessons", "Professional Business Lessons"],
    progress: ["My Progress", "Track your learning progress"],
    sales: ["Sales Manager", "Sales management tools"],
    calculator: ["Pricing Calculator", "Business calculation tools"],
    reports: ["Reports", "Business performance reports"],
    coach: ["AI Business Coach", "Business coaching support"],
    aitools: ["AI Tools", "Smart business tools"],
    settings: ["Settings", "Academy settings"]
  };

  function showPage(page) {
    document.querySelectorAll(".page").forEach(function (el) {
      el.classList.remove("active");
      el.style.display = "none";
    });

    const target =
      document.getElementById("page-" + page) ||
      document.getElementById(page);

    if (target) {
      target.classList.add("active");
      target.style.display = "block";
    }

    document.querySelectorAll(".menu-item").forEach(function (item) {
      item.classList.remove("active");

      if (item.dataset.page === page) {
        item.classList.add("active");
      }
    });

    const title = document.getElementById("pageTitle");
    const subtitle = document.getElementById("pageSubtitle");

    if (pageTitles[page]) {
      if (title) title.textContent = pageTitles[page][0];
      if (subtitle) subtitle.textContent = pageTitles[page][1];
    }

    if (page === "lessons") {
      renderLessons();
    }

    if (page === "progress") {
      updateProgressUI();
    }

    if (page === "dashboard") {
      updateDashboard();
    }

    closeMobileMenu();
  }

  function setupNavigation() {
    document.querySelectorAll(".menu-item").forEach(function (item) {
      item.addEventListener("click", function () {
        const page = item.dataset.page;
        if (page) showPage(page);
      });
    });

    const mobileMenu = document.getElementById("mobileMenu");

    if (mobileMenu) {
      mobileMenu.addEventListener("click", function () {
        document.body.classList.toggle("sidebar-open");
      });
    }
  }

  function closeMobileMenu() {
    document.body.classList.remove("sidebar-open");
  }

  /* =========================================================
     7. LESSON LIST
     ========================================================= */

  let currentFilter = "all";
  let currentSearch = "";
  let currentLessonIndex = 0;

  function getFilteredLessons() {
    return lessons.filter(function (lesson) {
      const search = currentSearch.toLowerCase();

      const matchesSearch =
        !search ||
        lesson.title.toLowerCase().includes(search) ||
        lesson.module.toLowerCase().includes(search);

      const matchesFilter =
        currentFilter === "all" ||
        (currentFilter === "completed" && isCompleted(lesson.id)) ||
        (currentFilter === "remaining" && !isCompleted(lesson.id)) ||
        (currentFilter === "english" && lesson.type === "english") ||
        (currentFilter === "business" && lesson.type === "business");

      return matchesSearch && matchesFilter;
    });
  }

  function renderLessons() {
    const list =
      document.getElementById("lessonList") ||
      document.querySelector(".lesson-list");

    if (!list) return;

    const filtered = getFilteredLessons();

    list.innerHTML = "";

    if (!filtered.length) {
      list.innerHTML =
        '<div class="empty-state">' +
        "<h3>No lessons found</h3>" +
        "<p>Search or filter ကို ပြန်ပြောင်းကြည့်ပါ။</p>" +
        "</div>";
      return;
    }

    filtered.forEach(function (lesson) {
      const item = document.createElement("div");

      item.className =
        "lesson-item" +
        (isCompleted(lesson.id) ? " completed" : "");

      item.innerHTML = `
        <div class="lesson-number">${lesson.number}</div>

        <div class="lesson-info">
          <div class="lesson-module">${escapeHTML(lesson.module)}</div>
          <div class="lesson-title">${escapeHTML(lesson.title)}</div>
        </div>

        <div class="lesson-status">
          ${
            isCompleted(lesson.id)
              ? '<span class="completed-badge">✓ Completed</span>'
              : '<span class="lesson-badge">Start</span>'
          }
        </div>
      `;

      item.addEventListener("click", function () {
        openLesson(lesson.id);
      });

      list.appendChild(item);
    });

    createLessonControls();
    updateLessonHeader();
  }

  function updateLessonHeader() {
    const possibleHeaders = document.querySelectorAll(
      ".lessons h1, .lessons h2, #lessons h1, #lessons h2"
    );

    possibleHeaders.forEach(function (el) {
      if (
        el.textContent.includes("Lesson") ||
        el.textContent.includes("သင်ခန်းစာ")
      ) {
        el.textContent = "Business Academy Lessons — 260 Lessons";
      }
    });
  }

  function createLessonControls() {
    const page =
      document.getElementById("page-lessons") ||
      document.getElementById("lessons");

    if (!page) return;

    let controls = document.getElementById("academyLessonControls");

    if (!controls) {
      controls = document.createElement("div");
      controls.id = "academyLessonControls";
      controls.style.cssText =
        "display:flex;gap:10px;flex-wrap:wrap;margin:20px 0;align-items:center;";

      const list =
        document.getElementById("lessonList") ||
        page.querySelector(".lesson-list");

      if (list) {
        list.parentNode.insertBefore(controls, list);
      } else {
        page.appendChild(controls);
      }
    }

    controls.innerHTML = `
      <input
        id="academyLessonSearch"
        type="search"
        placeholder="🔎 Lesson ရှာရန်..."
        value="${escapeAttribute(currentSearch)}"
        style="flex:1;min-width:220px;padding:12px;border:1px solid #ddd;border-radius:10px;"
      >

      <select
        id="academyLessonCategory"
        style="padding:12px;border:1px solid #ddd;border-radius:10px;"
      >
        <option value="all">All Lessons — 260</option>
        <option value="business">Business — 230</option>
        <option value="english">Business English — 30</option>
        <option value="completed">Completed</option>
        <option value="remaining">Remaining</option>
      </select>

      <div style="padding:10px 14px;border-radius:10px;background:#f1f5f9;font-weight:700;">
        ${completedCount()} / ${lessons.length} Completed
      </div>
    `;

    const search = document.getElementById("academyLessonSearch");
    const category = document.getElementById("academyLessonCategory");

    if (search) {
      search.addEventListener("input", function () {
        currentSearch = this.value;
        renderLessons();
      });
    }

    if (category) {
      category.value = currentFilter;

      category.addEventListener("change", function () {
        currentFilter = this.value;
        renderLessons();
      });
    }
  }

  /* =========================================================
     8. LESSON MODAL
     ========================================================= */

  function openLesson(id) {
    const index = lessons.findIndex(function (lesson) {
      return lesson.id === id;
    });

    if (index < 0) return;

    currentLessonIndex = index;

    const lesson = lessons[index];

    let modal = document.getElementById("academyLessonModal");

    if (!modal) {
      modal = document.createElement("div");
      modal.id = "academyLessonModal";

      modal.innerHTML = `
        <div class="academy-modal-overlay">
          <div class="academy-modal-card">

            <button
              id="academyModalClose"
              class="academy-modal-close"
              type="button"
            >×</button>

            <div id="academyLessonNumber"></div>
            <div id="academyLessonModule"></div>
            <h2 id="academyLessonTitle"></h2>
            <div id="academyLessonBody"></div>

            <div class="academy-lesson-navigation">
              <button id="academyPreviousLesson" type="button">
                ← Previous
              </button>

              <button id="academyCompleteLesson" type="button">
                ✓ Complete Lesson
              </button>

              <button id="academyNextLesson" type="button">
                Next →
              </button>
            </div>

          </div>
        </div>
      `;

      document.body.appendChild(modal);

      const style = document.createElement("style");

      style.textContent = `
        #academyLessonModal{
          position:fixed;
          inset:0;
          z-index:99999;
        }

        .academy-modal-overlay{
          position:absolute;
          inset:0;
          background:rgba(15,23,42,.75);
          display:flex;
          justify-content:center;
          align-items:center;
          padding:20px;
        }

        .academy-modal-card{
          position:relative;
          width:min(850px,100%);
          max-height:90vh;
          overflow:auto;
          background:#fff;
          border-radius:20px;
          padding:30px;
          box-shadow:0 25px 70px rgba(0,0,0,.3);
        }

        .academy-modal-close{
          position:absolute;
          top:15px;
          right:18px;
          width:40px;
          height:40px;
          border:0;
          border-radius:50%;
          background:#f1f5f9;
          font-size:28px;
          cursor:pointer;
        }

        #academyLessonNumber{
          font-weight:700;
          color:#64748b;
          margin-bottom:6px;
        }

        #academyLessonModule{
          display:inline-block;
          padding:6px 12px;
          border-radius:20px;
          background:#e2e8f0;
          margin-bottom:12px;
          font-size:13px;
          font-weight:700;
        }

        #academyLessonTitle{
          font-size:28px;
          margin:10px 0 25px;
        }

        .academy-section{
          margin:20px 0;
          padding:18px;
          background:#f8fafc;
          border-radius:14px;
        }

        .academy-section h3{
          margin-bottom:10px;
        }

        .academy-section ul{
          padding-left:22px;
        }

        .academy-section li{
          margin:8px 0;
          line-height:1.6;
        }

        .academy-lesson-navigation{
          display:flex;
          gap:10px;
          justify-content:space-between;
          flex-wrap:wrap;
          margin-top:25px;
          padding-top:20px;
          border-top:1px solid #e2e8f0;
        }

        .academy-lesson-navigation button{
          padding:12px 18px;
          border:0;
          border-radius:10px;
          cursor:pointer;
          font-weight:700;
          background:#e2e8f0;
        }

        #academyCompleteLesson{
          background:#16a34a;
          color:white;
        }

        @media(max-width:600px){
          .academy-modal-card{
            padding:22px;
          }

          #academyLessonTitle{
            font-size:22px;
          }

          .academy-lesson-navigation button{
            width:100%;
          }
        }
      `;

      document.head.appendChild(style);

      document
        .getElementById("academyModalClose")
        .addEventListener("click", closeLesson);

      document
        .getElementById("academyPreviousLesson")
        .addEventListener("click", previousLesson);

      document
        .getElementById("academyNextLesson")
        .addEventListener("click", nextLesson);

      document
        .getElementById("academyCompleteLesson")
        .addEventListener("click", function () {
          completeLesson(lessons[currentLessonIndex].id);
        });
    }

    renderLessonModal(lesson);

    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  }

  function renderLessonModal(lesson) {
    const number = document.getElementById("academyLessonNumber");
    const module = document.getElementById("academyLessonModule");
    const title = document.getElementById("academyLessonTitle");
    const body = document.getElementById("academyLessonBody");
    const complete = document.getElementById("academyCompleteLesson");

    if (number) {
      number.textContent =
        "Lesson " + lesson.number + " / " + lessons.length;
    }

    if (module) {
      module.textContent = lesson.module;
    }

    if (title) {
      title.textContent = lesson.title;
    }

    if (body) {
      body.innerHTML = createLessonHTML(lesson);
    }

    if (complete) {
      complete.textContent = isCompleted(lesson.id)
        ? "✓ Completed"
        : "✓ Complete Lesson";
    }
  }

  function createLessonHTML(lesson) {
    const c = lesson.content;

    let html = `
      <div class="academy-section">
        <h3>🎯 ရည်ရွယ်ချက်</h3>
        <p>${escapeHTML(c.objective)}</p>
      </div>

      <div class="academy-section">
        <h3>📌 အဓိကအချက်များ</h3>
        <ul>
    `;

    c.keyPoints.forEach(function (point) {
      html += "<li>" + escapeHTML(point) + "</li>";
    });

    html += `
        </ul>
      </div>
    `;

    if (c.managerPoint) {
      html += `
        <div class="academy-section">
          <h3>👔 Manager Point</h3>
          <p>${escapeHTML(c.managerPoint)}</p>
        </div>
      `;
    }

    if (c.examples) {
      html += `
        <div class="academy-section">
          <h3>💬 English Practice</h3>
          <ul>
      `;

      c.examples.forEach(function (example) {
        html += "<li>" + escapeHTML(example) + "</li>";
      });

      html += `
          </ul>
        </div>
      `;
    }

    html += `
      <div class="academy-section">
        <h3>🚀 လက်တွေ့လုပ်ဆောင်ရန်</h3>
        <p>${escapeHTML(c.action)}</p>
      </div>

      <div class="academy-section">
        <h3>🧠 Reflection</h3>
        <p>${escapeHTML(c.reflection)}</p>
      </div>

      <div class="academy-section">
        <h3>✅ Summary</h3>
        <p>${escapeHTML(c.summary)}</p>
      </div>
    `;

    return html;
  }

  function closeLesson() {
    const modal = document.getElementById("academyLessonModal");

    if (modal) {
      modal.style.display = "none";
    }

    document.body.style.overflow = "";
  }

  function previousLesson() {
    if (currentLessonIndex <= 0) return;

    currentLessonIndex--;

    renderLessonModal(lessons[currentLessonIndex]);
  }

  function nextLesson() {
    if (currentLessonIndex >= lessons.length - 1) return;

    currentLessonIndex++;

    renderLessonModal(lessons[currentLessonIndex]);
  }

  function completeLesson(id) {
    state.completed[id] = true;
    saveState();

    updateProgressUI();
    updateDashboard();
    renderLessons();

    const lesson = lessons.find(function (item) {
      return item.id === id;
    });

    if (lesson) {
      renderLessonModal(lesson);
    }
  }

  /* =========================================================
     9. DASHBOARD
     ========================================================= */

  function updateDashboard() {
    const completed = completedCount();
    const remaining = lessons.length - completed;
    const percent = progressPercent();

    updateText([
      ["#completedLessons", completed],
      ["#progressCompleted", completed],
      ["#progressRemaining", remaining],
      ["#bigProgress", percent + "%"],
      ["#courseProgressText", percent + "%"],
      [".completed-count", completed],
      [".remaining-count", remaining]
    ]);

    const progressBars = document.querySelectorAll(
      "#courseProgress, .course-progress, .progress-bar-fill"
    );

    progressBars.forEach(function (bar) {
      if (bar.tagName === "PROGRESS") {
        bar.value = percent;
      } else {
        bar.style.width = percent + "%";
      }
    });
  }

  /* =========================================================
     10. PROGRESS
     ========================================================= */

  function updateProgressUI() {
    const completed = completedCount();
    const remaining = lessons.length - completed;
    const percent = progressPercent();

    updateText([
      ["#bigProgress", percent + "%"],
      ["#progressCompleted", completed],
      ["#progressRemaining", remaining]
    ]);

    document.querySelectorAll(".progress-fill").forEach(function (el) {
      el.style.width = percent + "%";
    });

    document.querySelectorAll(".progress-value").forEach(function (el) {
      el.textContent = percent + "%";
    });
  }

  function updateText(items) {
    items.forEach(function (item) {
      const selector = item[0];
      const value = item[1];

      document.querySelectorAll(selector).forEach(function (el) {
        el.textContent = value;
      });
    });
  }

  /* =========================================================
     11. CONTINUE LEARNING
     ========================================================= */

  function getContinueLesson() {
    return (
      lessons.find(function (lesson) {
        return !isCompleted(lesson.id);
      }) || lessons[lessons.length - 1]
    );
  }

  function createContinueLearning() {
    const page =
      document.getElementById("page-lessons") ||
      document.getElementById("lessons");

    if (!page) return;

    let box = document.querySelector(".academy-continue-box");

    if (!box) {
      box = document.createElement("div");
      box.className = "academy-continue-box";

      box.style.cssText =
        "padding:20px;margin:20px 0;border-radius:16px;background:#f8fafc;border:1px solid #e2e8f0;";

      const controls = document.getElementById(
        "academyLessonControls"
      );

      if (controls) {
        controls.parentNode.insertBefore(box, controls);
      } else {
        page.prepend(box);
      }
    }

    const lesson = getContinueLesson();

    if (!lesson) return;

    box.innerHTML = `
      <div style="font-size:13px;font-weight:700;color:#64748b;">
        CONTINUE LEARNING
      </div>

      <div style="font-size:20px;font-weight:800;margin:6px 0;">
        Lesson ${lesson.number}: ${escapeHTML(lesson.title)}
      </div>

      <div style="color:#64748b;margin-bottom:12px;">
        ${escapeHTML(lesson.module)}
      </div>

      <button
        id="continueLearningBtn"
        type="button"
        style="padding:11px 18px;border:0;border-radius:10px;cursor:pointer;font-weight:700;"
      >
        Continue →
      </button>
    `;

    const btn = document.getElementById("continueLearningBtn");

    if (btn) {
      btn.addEventListener("click", function () {
        openLesson(lesson.id);
      });
    }
  }

  /* =========================================================
     12. SETTINGS / RESET
     ========================================================= */

  function setupResetButton() {
    document.querySelectorAll(
      "#resetProgress, .reset-progress, [data-reset-progress]"
    ).forEach(function (button) {
      button.addEventListener("click", function () {
        const confirmReset = window.confirm(
          "Learning Progress အားလုံးကို Reset လုပ်မလား?"
        );

        if (!confirmReset) return;

        state.completed = {};
        saveState();

        updateDashboard();
        updateProgressUI();
        renderLessons();

        alert("Learning Progress Reset ပြီးပါပြီ။");
      });
    });
  }

  /* =========================================================
     13. HELPERS
     ========================================================= */

  function escapeHTML(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function escapeAttribute(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  /* =========================================================
     14. PUBLIC API
     ========================================================= */

  window.AungBusinessAcademy = {
    lessons: lessons,

    totalLessons: function () {
      return lessons.length;
    },

    completedLessons: function () {
      return completedCount();
    },

    progress: function () {
      return progressPercent();
    },

    openLesson: openLesson,
    closeLesson: closeLesson,
    completeLesson: completeLesson,
    showPage: showPage,

    getLesson: function (id) {
      return lessons.find(function (lesson) {
        return lesson.id === id;
      });
    }
  };

  /* =========================================================
     15. INITIALIZE
     ========================================================= */

  function init() {
    setupNavigation();
    setupResetButton();

    updateDashboard();
    updateProgressUI();

    createContinueLearning();

    const lessonsPage =
      document.getElementById("page-lessons") ||
      document.getElementById("lessons");

    if (lessonsPage) {
      renderLessons();
      createContinueLearning();
    }

    console.log(
      "Aung Business Academy V15 loaded successfully."
    );

    console.log(
      "Business Lessons: 230"
    );

    console.log(
      "Business English Lessons: 30"
    );

    console.log(
      "TOTAL LESSONS: " + lessons.length
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
