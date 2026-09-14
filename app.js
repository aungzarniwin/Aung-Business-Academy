```javascript
/* =========================================================
   AUNG BUSINESS ACADEMY
   V15 - 260 LESSON SYSTEM
   230 BUSINESS + 30 BUSINESS ENGLISH
   ========================================================= */

(function () {
  "use strict";

  /* =========================================================
     STORAGE
     ========================================================= */

  const STORAGE_KEY = "aungBusinessAcademy";
  const LESSON_STORAGE_KEY = "aungBusinessAcademyLessons";

  /* =========================================================
     BASIC STATE
     ========================================================= */

  let state = {
    currentPage: "dashboard",
    completedLessons: []
  };

  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && typeof saved === "object") {
      state = Object.assign(state, saved);
    }
  } catch (e) {
    console.warn("Academy state could not be loaded.");
  }

  try {
    const savedLessons = JSON.parse(
      localStorage.getItem(LESSON_STORAGE_KEY)
    );

    if (Array.isArray(savedLessons)) {
      state.completedLessons = savedLessons;
    }
  } catch (e) {
    state.completedLessons = [];
  }

  /* =========================================================
     BUSINESS MODULES
     23 MODULES × 10 = 230
     ========================================================= */

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

  /* =========================================================
     BUSINESS ENGLISH
     30 LESSONS
     ========================================================= */

  const businessEnglishLessons = [
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
     BUILD BUSINESS LESSONS
     ========================================================= */

  const lessons = [];

  let businessLessonNumber = 1;

  businessModules.forEach((module) => {
    module.lessons.forEach((title, index) => {

      lessons.push({
        id: "B" + businessLessonNumber,
        number: businessLessonNumber,
        type: "business",
        module: module.name,
        title: title,
        objective:
          `${title} ကို စီးပွားရေးလုပ်ငန်းနှင့် Sales Management အခြေအနေများတွင် လက်တွေ့အသုံးချနိုင်ရန် နားလည်စေရန်။`,
        keyPoints: [
          `${title} ၏ အဓိကအယူအဆကို နားလည်ပါ။`,
          "Business မှာ ဘာကြောင့်အရေးကြီးသလဲကို သိရှိပါ။",
          "Data နှင့် လုပ်ငန်းအခြေအနေကို ဆက်စပ်စဉ်းစားပါ။",
          "Manager တစ်ယောက်အနေနဲ့ Action Plan ချမှတ်နိုင်ပါစေ။"
        ],
        managerPoint:
          "Manager တစ်ယောက်အနေနဲ့ သိရုံနဲ့မပြီးဘဲ Team, Customer, Target, Cost နဲ့ Result တွေကို ဆက်စပ်ပြီး Decision ချနိုင်ရပါမယ်။",
        action:
          "ဒီ Lesson ထဲက အချက်တစ်ခုကို ကိုယ့်လက်ရှိလုပ်ငန်းထဲမှာ ဒီနေ့ကစပြီး လက်တွေ့အသုံးချပါ။",
        reflection:
          "ဒီအကြောင်းအရာကို ကိုယ့်လုပ်ငန်းမှာ ဘယ်နေရာမှာ အသုံးချနိုင်မလဲ? လက်ရှိအခြေအနေမှာ ဘာကိုပြောင်းလဲသင့်သလဲ?",
        summary:
          `${title} သည် Business Manager တစ်ယောက်အတွက် အရေးကြီးသော Management Skill တစ်ခုဖြစ်ပြီး Data → Analysis → Decision → Action → Result ဆိုတဲ့ စနစ်နဲ့ အသုံးချရပါမယ်။`
      });

      businessLessonNumber++;
    });
  });

  /* =========================================================
     BUILD BUSINESS ENGLISH LESSONS
     ========================================================= */

  let englishLessonNumber = 1;

  businessEnglishLessons.forEach((title) => {

    lessons.push({
      id: "E" + englishLessonNumber,
      number: 230 + englishLessonNumber,
      type: "english",
      module: "Business English",
      title: title,

      objective:
        `${title} ကို အလုပ်ခွင်၊ Customer Meeting, Sales Visit နှင့် Management Communication တွင် ယုံကြည်စွာအသုံးပြုနိုင်ရန် လေ့ကျင့်ရန်။`,

      keyPoints: [
        "Business English စကားလုံးနှင့် Sentence Structure ကို နားလည်ပါ။",
        "Customer နှင့် Professional Communication ပြုလုပ်နိုင်ပါစေ။",
        "Sales နှင့် Management အခြေအနေများတွင် အသုံးချနိုင်ပါစေ။",
        "နေ့စဉ်အသုံးချပြီး Speaking Confidence တိုးတက်အောင် လေ့ကျင့်ပါ။"
      ],

      examples: [
        {
          english: "Good morning. How can I help you today?",
          myanmar: "မင်္ဂလာနံနက်ခင်းပါ။ ဒီနေ့ ဘာကူညီပေးရမလဲခင်ဗျာ။"
        },
        {
          english: "Let me explain our proposal.",
          myanmar: "ကျွန်တော်တို့ရဲ့ Proposal ကို ရှင်းပြပေးပါမယ်။"
        },
        {
          english: "Could you please share more details?",
          myanmar: "အသေးစိတ်အချက်အလက်တွေကို ထပ်ပြီးမျှဝေပေးနိုင်မလားခင်ဗျာ။"
        },
        {
          english: "I will follow up with you tomorrow.",
          myanmar: "မနက်ဖြန်မှာ ပြန်လည်ဆက်သွယ်ပေးပါမယ်။"
        }
      ],

      managerPoint:
        "Business English ကို Grammar စာအဖြစ်ပဲ မလေ့လာဘဲ Meeting, Customer Visit, Sales Presentation, Negotiation, Email နှင့် Interview အတွက် အသုံးချရပါမယ်။",

      action:
        "ဒီနေ့ English Sentence ၅ ကြောင်းကို အသံထွက်ပြီး အနည်းဆုံး ၃ ကြိမ်စီ လေ့ကျင့်ပါ။",

      reflection:
        "ဒီ English Sentence တွေထဲက ဘယ် Sentence ကို ကိုယ့်အလုပ်မှာ အများဆုံးအသုံးချနိုင်မလဲ?",

      summary:
        `${title} သည် Professional Workplace Communication အတွက် အရေးကြီးသော Business English Skill ဖြစ်ပါတယ်။`
    });

    englishLessonNumber++;
  });

  /* =========================================================
     VERIFY TOTAL
     ========================================================= */

  console.log("======================================");
  console.log("AUNG BUSINESS ACADEMY");
  console.log("Business Lessons:", businessModules.reduce(
    (total, module) => total + module.lessons.length,
    0
  ));
  console.log("Business English:", businessEnglishLessons.length);
  console.log("TOTAL LESSONS:", lessons.length);
  console.log("======================================");

  /* =========================================================
     COMPLETED HELPERS
     ========================================================= */

  function saveState() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(state)
      );

      localStorage.setItem(
        LESSON_STORAGE_KEY,
        JSON.stringify(state.completedLessons)
      );
    } catch (e) {
      console.warn("Could not save academy state.");
    }
  }

  function isCompleted(id) {
    return state.completedLessons.includes(id);
  }

  function completedCount() {
    return state.completedLessons.length;
  }

  function progressPercent() {
    if (!lessons.length) return 0;

    return Math.round(
      (completedCount() / lessons.length) * 100
    );
  }

  /* =========================================================
     UPDATE DASHBOARD
     ========================================================= */

  function updateProgressUI() {

    const completed = completedCount();
    const remaining = Math.max(
      lessons.length - completed,
      0
    );

    const percent = progressPercent();

    const selectors = {
      completed: [
        "#completedLessons",
        "#progressCompleted",
        ".completed-count"
      ],

      remaining: [
        "#progressRemaining",
        ".remaining-count"
      ],

      percent: [
        "#bigProgress",
        "#courseProgressText",
        ".course-progress",
        ".progress-value"
      ],

      bars: [
        "#courseProgress",
        ".progress-bar-fill",
        ".progress-fill"
      ]
    };

    selectors.completed.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.textContent = completed;
      });
    });

    selectors.remaining.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.textContent = remaining;
      });
    });

    selectors.percent.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.textContent = percent + "%";
      });
    });

    selectors.bars.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.style.width = percent + "%";
      });
    });

    document.querySelectorAll("[data-total-lessons]").forEach(el => {
      el.textContent = lessons.length;
    });

    document.querySelectorAll("[data-completed-lessons]").forEach(el => {
      el.textContent = completed;
    });

    document.querySelectorAll("[data-remaining-lessons]").forEach(el => {
      el.textContent = remaining;
    });

    document.querySelectorAll("[data-progress-percent]").forEach(el => {
      el.textContent = percent + "%";
    });
  }

  /* =========================================================
     PAGE NAVIGATION
     ========================================================= */

  function showPage(pageName) {

    if (!pageName) {
      pageName = "dashboard";
    }

    state.currentPage = pageName;
    saveState();

    document.querySelectorAll(
      "[id^='page-'], .academy-page"
    ).forEach(page => {
      page.style.display = "none";
      page.classList.remove("active");
    });

    const candidates = [
      document.getElementById("page-" + pageName),
      document.getElementById(pageName)
    ];

    let target = candidates.find(Boolean);

    if (target) {
      target.style.display = "";
      target.classList.add("active");
    }

    document.querySelectorAll(
      "[data-page]"
    ).forEach(item => {

      item.classList.toggle(
        "active",
        item.dataset.page === pageName
      );
    });

    if (
      pageName === "lessons" ||
      pageName === "my-courses" ||
      pageName === "progress"
    ) {
      setTimeout(renderLessons, 0);
    }

    updateProgressUI();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  /* =========================================================
     NAV CLICK EVENTS
     ========================================================= */

  document.addEventListener("click", function (event) {

    const pageButton =
      event.target.closest("[data-page]");

    if (pageButton) {

      event.preventDefault();

      const page =
        pageButton.getAttribute("data-page");

      showPage(page);

      const sidebar =
        document.querySelector(".sidebar");

      if (sidebar) {
        sidebar.classList.remove("open");
      }

      return;
    }

    const lessonButton =
      event.target.closest("[data-open-lesson]");

    if (lessonButton) {

      const id =
        lessonButton.getAttribute("data-open-lesson");

      openLesson(id);

      return;
    }
  });

  /* =========================================================
     LESSON FILTER STATE
     ========================================================= */

  let lessonFilter = "all";

  /* =========================================================
     RENDER LESSONS
     ========================================================= */

  function renderLessons() {

    const container =
      document.querySelector(
        "#lessonList, #lessonsList, .lesson-list"
      );

    if (!container) return;

    const searchInput =
      document.getElementById(
        "academyLessonSearch"
      );

    const categorySelect =
      document.getElementById(
        "academyLessonCategory"
      );

    const search =
      searchInput
        ? searchInput.value.trim().toLowerCase()
        : "";

    const category =
      categorySelect
        ? categorySelect.value
        : "all";

    let filtered = lessons.filter(lesson => {

      const matchesSearch =
        !search ||
        lesson.title.toLowerCase().includes(search) ||
        lesson.module.toLowerCase().includes(search);

      const matchesCategory =
        category === "all" ||
        (category === "business" &&
          lesson.type === "business") ||
        (category === "english" &&
          lesson.type === "english");

      const matchesFilter =
        lessonFilter === "all" ||
        (lessonFilter === "completed" &&
          isCompleted(lesson.id)) ||
        (lessonFilter === "remaining" &&
          !isCompleted(lesson.id));

      return (
        matchesSearch &&
        matchesCategory &&
        matchesFilter
      );
    });

    let html = "";

    /* =======================================================
       CONTINUE LEARNING
       ======================================================= */

    const nextLesson =
      lessons.find(
        lesson => !isCompleted(lesson.id)
      );

    if (
      lessonFilter === "all" &&
      !search &&
      category === "all" &&
      nextLesson
    ) {

      html += `
        <div class="continue-learning-card"
             style="
               padding:20px;
               margin-bottom:20px;
               border-radius:16px;
               background:linear-gradient(135deg,#0f172a,#1e293b);
               color:white;
             ">

          <div style="font-size:13px;opacity:.7;margin-bottom:6px;">
            CONTINUE LEARNING
          </div>

          <div style="font-size:20px;font-weight:700;margin-bottom:6px;">
            ${escapeHTML(nextLesson.title)}
          </div>

          <div style="font-size:13px;opacity:.8;margin-bottom:14px;">
            Lesson ${nextLesson.number} of ${lessons.length}
            • ${escapeHTML(nextLesson.module)}
          </div>

          <button
            type="button"
            data-open-lesson="${nextLesson.id}"
            class="btn btn-primary">
            Continue Lesson →
          </button>

        </div>
      `;
    }

    /* =======================================================
       SUMMARY
       ======================================================= */

    html += `
      <div style="
        display:flex;
        flex-wrap:wrap;
        gap:10px;
        margin-bottom:18px;
      ">

        <div class="lesson-summary-chip">
          📚 Total: <strong>${lessons.length}</strong>
        </div>

        <div class="lesson-summary-chip">
          💼 Business: <strong>230</strong>
        </div>

        <div class="lesson-summary-chip">
          🇬🇧 English: <strong>30</strong>
        </div>

        <div class="lesson-summary-chip">
          ✅ Completed: <strong>${completedCount()}</strong>
        </div>

        <div class="lesson-summary-chip">
          📈 Progress: <strong>${progressPercent()}%</strong>
        </div>

      </div>
    `;

    /* =======================================================
       EMPTY
       ======================================================= */

    if (!filtered.length) {

      html += `
        <div class="empty-state"
             style="
               text-align:center;
               padding:50px 20px;
             ">

          <div style="font-size:48px;">🔎</div>

          <h3>No lessons found</h3>

          <p>
            Search / Filter ကို ပြန်စစ်ကြည့်ပါ။
          </p>

        </div>
      `;

      container.innerHTML = html;
      return;
    }

    /* =======================================================
       LESSON CARDS
       ======================================================= */

    html += `<div class="academy-lesson-grid">`;

    filtered.forEach(lesson => {

      const completed =
        isCompleted(lesson.id);

      const badge =
        lesson.type === "english"
          ? "🇬🇧 BUSINESS ENGLISH"
          : "💼 BUSINESS";

      html += `
        <article
          class="academy-lesson-card ${completed ? "completed" : ""}"
          data-lesson-card="${lesson.id}"
          style="
            position:relative;
            padding:20px;
            border-radius:16px;
            margin-bottom:14px;
          ">

          <div style="
            display:flex;
            justify-content:space-between;
            gap:10px;
            align-items:flex-start;
            margin-bottom:10px;
          ">

            <span style="
              font-size:11px;
              font-weight:700;
              letter-spacing:.4px;
              opacity:.75;
            ">
              ${badge}
            </span>

            ${
              completed
                ? `<span style="
                    font-size:12px;
                    padding:5px 9px;
                    border-radius:20px;
                    background:#dcfce7;
                    color:#166534;
                    font-weight:700;
                  ">✓ COMPLETED</span>`
                : `<span style="
                    font-size:12px;
                    padding:5px 9px;
                    border-radius:20px;
                    background:#f1f5f9;
                  ">NEW</span>`
            }

          </div>

          <div style="
            font-size:12px;
            opacity:.65;
            margin-bottom:5px;
          ">
            Lesson ${lesson.number}
            • ${escapeHTML(lesson.module)}
          </div>

          <h3 style="
            margin:0 0 10px;
            font-size:18px;
          ">
            ${escapeHTML(lesson.title)}
          </h3>

          <p style="
            font-size:13px;
            line-height:1.7;
            opacity:.78;
            margin-bottom:15px;
          ">
            ${escapeHTML(lesson.objective)}
          </p>

          <button
            type="button"
            class="btn btn-primary"
            data-open-lesson="${lesson.id}">
            ${
              completed
                ? "Review Lesson"
                : "Start Lesson"
            }
          </button>

        </article>
      `;
    });

    html += `</div>`;

    container.innerHTML = html;
  }

  /* =========================================================
     SEARCH
     ========================================================= */

  document.addEventListener("input", function (event) {

    if (
      event.target.id ===
      "academyLessonSearch"
    ) {
      renderLessons();
    }
  });

  /* =========================================================
     CATEGORY
     ========================================================= */

  document.addEventListener("change", function (event) {

    if (
      event.target.id ===
      "academyLessonCategory"
    ) {
      renderLessons();
    }
  });

  /* =========================================================
     FILTER BUTTONS
     ========================================================= */

  document.addEventListener("click", function (event) {

    const filterButton =
      event.target.closest(
        "[data-lesson-filter]"
      );

    if (!filterButton) return;

    lessonFilter =
      filterButton.dataset.lessonFilter ||
      "all";

    document
      .querySelectorAll(
        "[data-lesson-filter]"
      )
      .forEach(btn => {
        btn.classList.toggle(
          "active",
          btn === filterButton
        );
      });

    renderLessons();
  });

  /* =========================================================
     MODAL
     ========================================================= */

  let modal = null;
  let currentLessonId = null;

  function createModal() {

    if (modal) return;

    modal = document.createElement("div");

    modal.id = "academyLessonModal";

    modal.style.cssText = `
      position:fixed;
      inset:0;
      z-index:99999;
      display:none;
      background:rgba(15,23,42,.72);
      padding:20px;
      overflow:auto;
    `;

    modal.innerHTML = `
      <div id="academyLessonModalBox"
           style="
             max-width:980px;
             margin:30px auto;
             background:white;
             border-radius:22px;
             overflow:hidden;
             box-shadow:0 25px 70px rgba(0,0,0,.3);
           ">

        <div id="academyLessonModalContent"></div>

      </div>
    `;

    document.body.appendChild(modal);

    modal.addEventListener(
      "click",
      function (event) {

        if (event.target === modal) {
          closeLesson();
        }

        const close =
          event.target.closest(
            "[data-close-lesson]"
          );

        if (close) {
          closeLesson();
        }

        const complete =
          event.target.closest(
            "[data-complete-lesson]"
          );

        if (complete) {
          completeLesson();
        }

        const previous =
          event.target.closest(
            "[data-previous-lesson]"
          );

        if (previous) {
          openAdjacentLesson(-1);
        }

        const next =
          event.target.closest(
            "[data-next-lesson]"
          );

        if (next) {
          openAdjacentLesson(1);
        }
      }
    );
  }

  /* =========================================================
     OPEN LESSON
     ========================================================= */

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
      isCompleted(lesson.id);

    const isEnglish =
      lesson.type === "english";

    let examplesHTML = "";

    if (isEnglish && lesson.examples) {

      examplesHTML = `
        <section style="margin-top:25px;">
          <h3>🇬🇧 English Examples</h3>

          <div style="
            display:grid;
            gap:12px;
            margin-top:12px;
          ">

            ${lesson.examples.map(example => `
              <div style="
                padding:15px;
                border-radius:12px;
                background:#f8fafc;
                border:1px solid #e2e8f0;
              ">

                <div style="
                  font-weight:700;
                  margin-bottom:6px;
                ">
                  ${escapeHTML(example.english)}
                </div>

                <div style="
                  font-size:13px;
                  color:#475569;
                ">
                  ${escapeHTML(example.myanmar)}
                </div>

              </div>
            `).join("")}

          </div>
        </section>
      `;
    }

    const content = document.getElementById(
      "academyLessonModalContent"
    );

    content.innerHTML = `

      <div style="
        padding:22px;
        border-bottom:1px solid #e2e8f0;
        display:flex;
        justify-content:space-between;
        gap:20px;
        align-items:flex-start;
      ">

        <div>

          <div style="
            font-size:12px;
            opacity:.6;
            margin-bottom:5px;
          ">
            ${
              isEnglish
                ? "🇬🇧 BUSINESS ENGLISH"
                : "💼 BUSINESS ACADEMY"
            }
          </div>

          <div style="
            font-size:13px;
            color:#64748b;
          ">
            Lesson ${lesson.number} / ${lessons.length}
          </div>

          <h2 style="
            margin:7px 0 5px;
            font-size:26px;
          ">
            ${escapeHTML(lesson.title)}
          </h2>

          <div style="
            font-size:13px;
            color:#64748b;
          ">
            ${escapeHTML(lesson.module)}
          </div>

        </div>

        <button
          type="button"
          data-close-lesson
          style="
            border:0;
            background:#f1f5f9;
            width:42px;
            height:42px;
            border-radius:50%;
            font-size:20px;
            cursor:pointer;
          ">
          ×
        </button>

      </div>

      <div style="
        padding:24px;
        line-height:1.8;
      ">

        <div style="
          display:inline-block;
          padding:7px 12px;
          border-radius:20px;
          background:#eff6ff;
          color:#1d4ed8;
          font-size:12px;
          font-weight:700;
          margin-bottom:18px;
        ">
          ⏱ Estimated Study Time: 15 Minutes
        </div>

        <section>
          <h3>🎯 Learning Objective</h3>

          <p style="
            margin-top:10px;
            color:#475569;
          ">
            ${escapeHTML(lesson.objective)}
          </p>
        </section>

        <section style="margin-top:25px;">
          <h3>📚 Key Concepts</h3>

          <div style="
            display:grid;
            gap:10px;
            margin-top:12px;
          ">

            ${lesson.keyPoints.map((point, i) => `
              <div style="
                padding:13px 15px;
                background:#f8fafc;
                border-radius:12px;
                border-left:4px solid #334155;
              ">
                <strong>${i + 1}.</strong>
                ${escapeHTML(point)}
              </div>
            `).join("")}

          </div>
        </section>

        ${examplesHTML}

        <section style="margin-top:25px;">
          <h3>👨‍💼 Manager Point of View</h3>

          <div style="
            margin-top:12px;
            padding:18px;
            background:#f8fafc;
            border-radius:14px;
          ">
            ${escapeHTML(lesson.managerPoint)}
          </div>
        </section>

        <section style="margin-top:25px;">
          <h3>📊 Business Thinking Table</h3>

          <div style="
            overflow-x:auto;
            margin-top:12px;
          ">

            <table style="
              width:100%;
              border-collapse:collapse;
              min-width:600px;
            ">

              <thead>
                <tr>
                  <th style="padding:12px;border:1px solid #e2e8f0;text-align:left;">
                    Area
                  </th>
                  <th style="padding:12px;border:1px solid #e2e8f0;text-align:left;">
                    Question
                  </th>
                  <th style="padding:12px;border:1px solid #e2e8f0;text-align:left;">
                    Manager Action
                  </th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td style="padding:12px;border:1px solid #e2e8f0;">
                    People
                  </td>
                  <td style="padding:12px;border:1px solid #e2e8f0;">
                    Team က ဘာလုပ်နေလဲ?
                  </td>
                  <td style="padding:12px;border:1px solid #e2e8f0;">
                    Coaching & Follow-up
                  </td>
                </tr>

                <tr>
                  <td style="padding:12px;border:1px solid #e2e8f0;">
                    Customer
                  </td>
                  <td style="padding:12px;border:1px solid #e2e8f0;">
                    Customer ဘာလိုချင်လဲ?
                  </td>
                  <td style="padding:12px;border:1px solid #e2e8f0;">
                    Customer Plan
                  </td>
                </tr>

                <tr>
                  <td style="padding:12px;border:1px solid #e2e8f0;">
                    Numbers
                  </td>
                  <td style="padding:12px;border:1px solid #e2e8f0;">
                    Result ဘယ်လောက်ရလဲ?
                  </td>
                  <td style="padding:12px;border:1px solid #e2e8f0;">
                    KPI Review
                  </td>
                </tr>

                <tr>
                  <td style="padding:12px;border:1px solid #e2e8f0;">
                    Execution
                  </td>
                  <td style="padding:12px;border:1px solid #e2e8f0;">
                    Plan ကို ဘယ်လို Execute လုပ်မလဲ?
                  </td>
                  <td style="padding:12px;border:1px solid #e2e8f0;">
                    Action Plan
                  </td>
                </tr>

              </tbody>

            </table>

          </div>
        </section>

        <section style="margin-top:25px;">
          <h3>📈 Simple Business Graph</h3>

          <div style="
            margin-top:15px;
            padding:20px;
            background:#f8fafc;
            border-radius:16px;
          ">

            <div style="
              display:flex;
              align-items:flex-end;
              gap:18px;
              height:190px;
              border-bottom:2px solid #cbd5e1;
              padding:10px;
            ">

              <div style="
                flex:1;
                height:45%;
                background:#94a3b8;
                border-radius:8px 8px 0 0;
                position:relative;
              ">
                <span style="
                  position:absolute;
                  top:-25px;
                  left:50%;
                  transform:translateX(-50%);
                  font-size:12px;
                ">45%</span>
              </div>

              <div style="
                flex:1;
                height:60%;
                background:#64748b;
                border-radius:8px 8px 0 0;
                position:relative;
              ">
                <span style="
                  position:absolute;
                  top:-25px;
                  left:50%;
                  transform:translateX(-50%);
                  font-size:12px;
                ">60%</span>
              </div>

              <div style="
                flex:1;
                height:72%;
                background:#475569;
                border-radius:8px 8px 0 0;
                position:relative;
              ">
                <span style="
                  position:absolute;
                  top:-25px;
                  left:50%;
                  transform:translateX(-50%);
                  font-size:12px;
                ">72%</span>
              </div>

              <div style="
                flex:1;
                height:86%;
                background:#334155;
                border-radius:8px 8px 0 0;
                position:relative;
              ">
                <span style="
                  position:absolute;
                  top:-25px;
                  left:50%;
                  transform:translateX(-50%);
                  font-size:12px;
                ">86%</span>
              </div>

            </div>

            <div style="
              display:flex;
              justify-content:space-around;
              font-size:12px;
              margin-top:10px;
              color:#64748b;
            ">
              <span>Week 1</span>
              <span>Week 2</span>
              <span>Week 3</span>
              <span>Week 4</span>
            </div>

            <p style="
              font-size:12px;
              color:#64748b;
              margin-top:14px;
            ">
              * ဤ Graph သည် သင်ခန်းစာရှင်းပြရန်အတွက်
              Example Data ဖြစ်ပြီး လက်တွေ့ Company Data မဟုတ်ပါ။
            </p>

          </div>
        </section>

        <section style="margin-top:25px;">
          <h3>💡 Practical Business Example</h3>

          <div style="
            margin-top:12px;
            padding:18px;
            border-radius:14px;
            background:#f8fafc;
          ">

            ဥပမာအားဖြင့် Sales Team တစ်ခုမှာ
            Target မပြည့်တဲ့အခါ Manager က
            “လူတွေမကြိုးစားဘူး” လို့ တစ်ချက်တည်း
            ဆုံးဖြတ်မထားသင့်ပါဘူး။

            <br><br>

            Target → Actual → Gap → Root Cause →
            Action → Follow-up ဆိုတဲ့ အဆင့်တွေကို
            တစ်ဆင့်ချင်းစီ စစ်ဆေးရပါမယ်။

            <br><br>

            ဒီလို Data-based Management နဲ့
            ဆုံးဖြတ်နိုင်ခြင်းက Sales Manager
            တစ်ယောက်ရဲ့ အရေးကြီးတဲ့ Skill ဖြစ်ပါတယ်။

          </div>
        </section>

        <section style="margin-top:25px;">
          <h3>⚠️ Common Mistakes</h3>

          <ul style="
            margin-top:12px;
            padding-left:22px;
          ">

            <li>
              Data မကြည့်ဘဲ ခန့်မှန်းဆုံးဖြတ်ခြင်း
            </li>

            <li>
              Team ကို အပြစ်တင်ပြီး Root Cause မရှာခြင်း
            </li>

            <li>
              Action Plan မချမှတ်ခြင်း
            </li>

            <li>
              Follow-up မလုပ်ခြင်း
            </li>

          </ul>
        </section>

        <section style="margin-top:25px;">
          <h3>🎯 Action Plan</h3>

          <div style="
            margin-top:12px;
            padding:18px;
            background:#f8fafc;
            border-radius:14px;
          ">
            ${escapeHTML(lesson.action)}
          </div>
        </section>

        <section style="margin-top:25px;">
          <h3>🤔 Reflection</h3>

          <div style="
            margin-top:12px;
            padding:18px;
            background:#f8fafc;
            border-radius:14px;
          ">
            ${escapeHTML(lesson.reflection)}
          </div>
        </section>

        <section style="margin-top:25px;">
          <h3>📝 Lesson Summary</h3>

          <div style="
            margin-top:12px;
            padding:18px;
            border-radius:14px;
            background:#0f172a;
            color:white;
          ">
            ${escapeHTML(lesson.summary)}
          </div>
        </section>

      </div>

      <div style="
        padding:18px 22px;
        border-top:1px solid #e2e8f0;
        display:flex;
        justify-content:space-between;
        gap:10px;
        flex-wrap:wrap;
      ">

        <button
          type="button"
          class="btn"
          data-previous-lesson
          ${previous ? "" : "disabled"}
          style="
            opacity:${previous ? "1" : ".4"};
          ">
          ← Previous
        </button>

        <div style="
          display:flex;
          gap:10px;
          flex-wrap:wrap;
        ">

          <button
            type="button"
            class="btn btn-primary"
            data-complete-lesson>

            ${
              completed
                ? "✓ Completed"
                : "✓ Complete Lesson"
            }

          </button>

          <button
            type="button"
            class="btn"
            data-next-lesson
            ${next ? "" : "disabled"}
            style="
              opacity:${next ? "1" : ".4"};
            ">
            Next →
          </button>

        </div>

      </div>
    `;

    modal.style.display = "block";

    document.body.style.overflow = "hidden";
  }

  /* =========================================================
     CLOSE LESSON
     ========================================================= */

  function closeLesson() {

    if (!modal) return;

    modal.style.display = "none";

    document.body.style.overflow = "";

    currentLessonId = null;
  }

  /* =========================================================
     COMPLETE LESSON
     ========================================================= */

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

    updateProgressUI();

    renderLessons();

    openLesson(currentLessonId);
  }

  /* =========================================================
     PREVIOUS / NEXT
     ========================================================= */

  function openAdjacentLesson(direction) {

    if (!currentLessonId) return;

    const index =
      lessons.findIndex(
        lesson => lesson.id === currentLessonId
      );

    if (index === -1) return;

    const newIndex =
      index + direction;

    if (
      newIndex < 0 ||
      newIndex >= lessons.length
    ) {
      return;
    }

    openLesson(
      lessons[newIndex].id
    );
  }

  /* =========================================================
     ESCAPE KEY
     ========================================================= */

  document.addEventListener(
    "keydown",
    function (event) {

      if (event.key === "Escape") {
        closeLesson();
      }

      if (
        modal &&
        modal.style.display === "block" &&
        event.key === "ArrowRight"
      ) {
        openAdjacentLesson(1);
      }

      if (
        modal &&
        modal.style.display === "block" &&
        event.key === "ArrowLeft"
      ) {
        openAdjacentLesson(-1);
      }
    }
  );

  /* =========================================================
     MOBILE MENU
     ========================================================= */

  document.addEventListener("click", function (event) {

    const menuButton =
      event.target.closest(
        ".mobile-menu-btn, #mobileMenuBtn, [data-mobile-menu]"
      );

    if (menuButton) {

      const sidebar =
        document.querySelector(".sidebar");

      if (sidebar) {
        sidebar.classList.toggle("open");
      }
    }
  });

  /* =========================================================
     CALCULATOR
     ========================================================= */

  function setupCalculator() {

    const calculateButtons =
      document.querySelectorAll(
        "[data-calculate]"
      );

    calculateButtons.forEach(button => {

      button.addEventListener(
        "click",
        function () {

          const type =
            button.dataset.calculate;

          if (type === "profit") {

            const revenue =
              Number(
                document.querySelector(
                  "#calcRevenue"
                )?.value || 0
              );

            const cost =
              Number(
                document.querySelector(
                  "#calcCost"
                )?.value || 0
              );

            const profit =
              revenue - cost;

            const result =
              document.querySelector(
                "#calcResult"
              );

            if (result) {
              result.textContent =
                profit.toLocaleString();
            }
          }
        }
      );

    });
  }

  /* =========================================================
     ESCAPE HTML
     ========================================================= */

  function escapeHTML(value) {

    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  /* =========================================================
     PUBLIC API
     ========================================================= */

  window.AungBusinessAcademy = {

    lessons: lessons,

    totalLessons: lessons.length,

    businessLessons: lessons.filter(
      lesson => lesson.type === "business"
    ),

    englishLessons: lessons.filter(
      lesson => lesson.type === "english"
    ),

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

    renderLessons: renderLessons,

    getLesson: function (id) {
      return lessons.find(
        lesson => lesson.id === id
      );
    }
  };

  /* =========================================================
     EXTRA CSS FOR LESSON UI
     ========================================================= */

  const academyStyle =
    document.createElement("style");

  academyStyle.textContent = `

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
      transition:
        transform .2s ease,
        box-shadow .2s ease,
        border-color .2s ease;
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
      padding:9px 13px;
      background:#f8fafc;
      border:1px solid #e2e8f0;
      border-radius:20px;
      font-size:13px;
      color:#475569;
    }

    .lesson-summary-chip strong {
      color:#0f172a;
    }

    #academyLessonModal button:disabled {
      pointer-events:none;
    }

    @media(max-width:768px){

      #academyLessonModal {
        padding:8px !important;
      }

      #academyLessonModalBox {
        margin:8px auto !important;
        border-radius:16px !important;
      }

      #academyLessonModalContent h2 {
        font-size:21px !important;
      }

      .academy-lesson-grid {
        grid-template-columns:1fr;
      }

    }

  `;

  document.head.appendChild(academyStyle);

  /* =========================================================
     INITIALIZE
     ========================================================= */

  function initializeAcademy() {

    updateProgressUI();

    setupCalculator();

    renderLessons();

    /* Dashboard */
    showPage(
      state.currentPage || "dashboard"
    );

    /* Force update after page rendering */
    setTimeout(function () {

      updateProgressUI();

      renderLessons();

    }, 300);

  }

  if (
    document.readyState === "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      initializeAcademy
    );

  } else {

    initializeAcademy();

  }

})();
```
