document.addEventListener("DOMContentLoaded", function () {

  /* =========================================================
     AUNG BUSINESS ACADEMY
     LESSON SYSTEM
     230 LESSONS
     ========================================================= */

  const STORAGE_KEY = "aungBusinessAcademy";
  const LESSONS_KEY = "aungBusinessAcademyLessons";

  /* =========================================================
     BASIC HELPERS
     ========================================================= */

  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) =>
    Array.from(parent.querySelectorAll(selector));

  function escapeHTML(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  /* =========================================================
     23 MODULES × 10 LESSONS = 230 LESSONS
     ========================================================= */

  const modules = [

    {
      category: "Business Basics",
      lessons: [
        "Business ဆိုတာဘာလဲ",
        "Business Owner ရဲ့ Mindset",
        "Business Model နားလည်ခြင်း",
        "Customer ကို နားလည်ခြင်း",
        "Value Proposition ဆိုတာဘာလဲ",
        "Problem နဲ့ Solution",
        "Revenue Model အခြေခံ",
        "Cost Structure နားလည်ခြင်း",
        "Business Process အခြေခံ",
        "လုပ်ငန်းတစ်ခုကို စနစ်တကျတည်ဆောက်ခြင်း"
      ]
    },

    {
      category: "Strategic Thinking",
      lessons: [
        "Strategic Thinking ဆိုတာဘာလဲ",
        "Vision သတ်မှတ်နည်း",
        "Mission သတ်မှတ်နည်း",
        "Business Direction ရွေးချယ်ခြင်း",
        "SWOT Analysis အခြေခံ",
        "Strength ကို အသုံးချခြင်း",
        "Weakness ကို ပြုပြင်ခြင်း",
        "Opportunity ရှာဖွေခြင်း",
        "Threat ကို စီမံခြင်း",
        "Strategy ကို Action ပြောင်းခြင်း"
      ]
    },

    {
      category: "Brand Basics",
      lessons: [
        "Brand ဆိုတာဘာလဲ",
        "Brand Identity",
        "Brand Positioning",
        "Target Customer သတ်မှတ်ခြင်း",
        "Brand Promise",
        "Brand Personality",
        "Brand Trust တည်ဆောက်ခြင်း",
        "Brand Differentiation",
        "Brand Consistency",
        "Strong Brand တည်ဆောက်ခြင်း"
      ]
    },

    {
      category: "Marketing Basics",
      lessons: [
        "Marketing ဆိုတာဘာလဲ",
        "Marketing နဲ့ Sales ကွာခြားချက်",
        "Target Market သတ်မှတ်ခြင်း",
        "Customer Segmentation",
        "Marketing Mix အခြေခံ",
        "Product Strategy",
        "Price Strategy",
        "Place Strategy",
        "Promotion Strategy",
        "Marketing Plan ရေးဆွဲခြင်း"
      ]
    },

    {
      category: "Sales Basics",
      lessons: [
        "Sales ဆိုတာဘာလဲ",
        "Professional Salesperson Mindset",
        "Sales Funnel",
        "Prospecting အခြေခံ",
        "Lead Qualification",
        "Customer Need ရှာဖွေခြင်း",
        "Product Presentation",
        "Sales Closing",
        "Follow Up စနစ်",
        "Sales Process တစ်ခုလုံး"
      ]
    },

    {
      category: "Sales Management",
      lessons: [
        "Sales Manager ရဲ့ အခန်းကဏ္ဍ",
        "Sales Target သတ်မှတ်နည်း",
        "Target ကို Field Execution ပြောင်းနည်း",
        "Sales KPI နားလည်ခြင်း",
        "Sales Team ဖွဲ့စည်းခြင်း",
        "Sales Territory Management",
        "Daily Sales Management",
        "Weekly Sales Management",
        "Monthly Sales Management",
        "Sales Manager အဖြစ် အောင်မြင်ခြင်း"
      ]
    },

    {
      category: "Sales Planning",
      lessons: [
        "Sales Plan အခြေခံ",
        "Annual Sales Plan",
        "Quarterly Sales Plan",
        "Monthly Sales Plan",
        "Weekly Sales Plan",
        "Daily Sales Plan",
        "Sales Activity Planning",
        "Customer Visit Planning",
        "Route Planning",
        "Execution Calendar တည်ဆောက်ခြင်း"
      ]
    },

    {
      category: "Sales KPI & Performance",
      lessons: [
        "Sales KPI အခြေခံ",
        "Revenue KPI",
        "Volume KPI",
        "Distribution KPI",
        "Numeric Distribution",
        "Weighted Distribution",
        "Strike Rate",
        "Average Order Value",
        "Sales Productivity",
        "Performance Review"
      ]
    },

    {
      category: "Customer Management",
      lessons: [
        "Customer Relationship အခြေခံ",
        "Customer Need နားလည်ခြင်း",
        "Customer Classification",
        "Customer Potential Analysis",
        "Customer Visit Management",
        "Customer Retention",
        "Customer Loyalty",
        "Customer Complaint Management",
        "Customer Value တိုးမြှင့်ခြင်း",
        "Long Term Customer Relationship"
      ]
    },

    {
      category: "Negotiation",
      lessons: [
        "Negotiation ဆိုတာဘာလဲ",
        "Negotiation Mindset",
        "Negotiation Preparation",
        "Customer Bargaining နားလည်ခြင်း",
        "Price Negotiation",
        "Trade Term Negotiation",
        "Win Win Negotiation",
        "Difficult Negotiation",
        "Negotiation Mistakes",
        "Professional Negotiator ဖြစ်လာခြင်း"
      ]
    },

    {
      category: "Customer Service",
      lessons: [
        "Customer Service အခြေခံ",
        "Service Mindset",
        "Customer Expectation",
        "Customer Experience",
        "Active Listening",
        "Effective Communication",
        "Complaint Handling",
        "Difficult Customer ကို ကိုင်တွယ်ခြင်း",
        "Service Recovery",
        "Customer Service Excellence"
      ]
    },

    {
      category: "People Management",
      lessons: [
        "People Management အခြေခံ",
        "Team Leader Mindset",
        "Team Structure",
        "Role & Responsibility",
        "Clear Expectation ပေးခြင်း",
        "Performance Management",
        "Employee Motivation",
        "Delegation",
        "Accountability",
        "High Performance Team တည်ဆောက်ခြင်း"
      ]
    },

    {
      category: "Coaching & Leadership",
      lessons: [
        "Coaching ဆိုတာဘာလဲ",
        "Manager နဲ့ Coach ကွာခြားချက်",
        "Field Coaching",
        "One on One Coaching",
        "Feedback ပေးနည်း",
        "Positive Feedback",
        "Corrective Feedback",
        "Performance Conversation",
        "Leadership Communication",
        "Coaching Culture တည်ဆောက်ခြင်း"
      ]
    },

    {
      category: "Distribution Management",
      lessons: [
        "Distribution Management အခြေခံ",
        "Distributor Model",
        "Direct Channel",
        "Indirect Channel",
        "Distributor Selection",
        "Distributor Performance",
        "Stock Management",
        "Order Management",
        "Route to Market",
        "Distribution Expansion"
      ]
    },

    {
      category: "Market Analysis",
      lessons: [
        "Market Analysis အခြေခံ",
        "Market Size",
        "Market Potential",
        "Market Growth",
        "Market Share",
        "Customer Trend",
        "Consumer Behavior",
        "Market Opportunity",
        "Market Risk",
        "Market Action Plan"
      ]
    },

    {
      category: "Competitor Management",
      lessons: [
        "Competitor Analysis အခြေခံ",
        "Competitor Mapping",
        "Competitor Product Analysis",
        "Competitor Price Analysis",
        "Competitor Distribution",
        "Competitor Promotion",
        "Competitor Strength",
        "Competitor Weakness",
        "Competitive Advantage",
        "Competitor Response Strategy"
      ]
    },

    {
      category: "Profit & Loss",
      lessons: [
        "Profit ဆိုတာဘာလဲ",
        "Revenue နားလည်ခြင်း",
        "Cost နားလည်ခြင်း",
        "Fixed Cost",
        "Variable Cost",
        "Gross Profit",
        "Gross Margin",
        "Operating Profit",
        "Profit & Loss Statement",
        "Profit တိုးမြှင့်ခြင်း"
      ]
    },

    {
      category: "Pricing Strategy",
      lessons: [
        "Pricing ဆိုတာဘာလဲ",
        "Cost Based Pricing",
        "Market Based Pricing",
        "Value Based Pricing",
        "Price Positioning",
        "Discount Management",
        "Trade Discount",
        "Promotion Pricing",
        "Price Increase Management",
        "Profitable Pricing Strategy"
      ]
    },

    {
      category: "Business Finance",
      lessons: [
        "Cash Flow အခြေခံ",
        "Working Capital",
        "Accounts Receivable",
        "Credit Management",
        "Credit Limit",
        "Payment Terms",
        "Cash Conversion Cycle",
        "Financial Control",
        "Budget Management",
        "Financial Decision Making"
      ]
    },

    {
      category: "Goal Setting",
      lessons: [
        "Goal Setting အခြေခံ",
        "SMART Goal",
        "Business Goal",
        "Sales Goal",
        "Personal Goal",
        "Monthly Goal Setting",
        "Weekly Goal Setting",
        "Daily Goal Setting",
        "Goal Tracking",
        "Goal Achievement System"
      ]
    },

    {
      category: "Business Communication",
      lessons: [
        "Business Communication အခြေခံ",
        "Professional Communication",
        "Listening Skill",
        "Speaking Skill",
        "Email Communication",
        "Meeting Management",
        "Presentation Skill",
        "Report Writing",
        "Difficult Conversation",
        "Executive Communication"
      ]
    },

    {
      category: "Strategic Sales Leadership",
      lessons: [
        "Strategic Sales Leadership",
        "Sales Organization Design",
        "Sales Capability Development",
        "Talent Management",
        "Succession Planning",
        "Business Review",
        "Strategic Decision Making",
        "Change Management",
        "Leadership Under Pressure",
        "Professional Business Manager ဖြစ်လာခြင်း"
      ]
    }

  ];

  /* =========================================================
     BUILD 230 LESSONS
     ========================================================= */

  const lessons = [];

  let lessonId = 1;

  modules.forEach((module, moduleIndex) => {

    module.lessons.forEach((title, lessonIndex) => {

      lessons.push({
        id: lessonId,
        module: moduleIndex + 1,
        category: module.category,
        title: title,
        lessonNumber: lessonId,
        body: createLessonContent(
          lessonId,
          module.category,
          title,
          lessonIndex + 1
        )
      });

      lessonId++;
    });

  });

  /* =========================================================
     LESSON CONTENT GENERATOR
     ========================================================= */

  function createLessonContent(id, category, title, position) {

    const categoryText = escapeHTML(category);
    const titleText = escapeHTML(title);

    return `
      <div class="lesson-content">

        <div class="lesson-intro">
          <h3>${titleText}</h3>
          <p>
            ဒီ Lesson မှာ <strong>${categoryText}</strong> နဲ့
            သက်ဆိုင်တဲ့ အရေးကြီးတဲ့ Business Knowledge တွေကို
            လက်တွေ့အသုံးချနိုင်အောင် လေ့လာသွားမှာ ဖြစ်ပါတယ်။
          </p>
        </div>

        <div class="lesson-section">
          <h4>🎯 ဒီ Lesson ရဲ့ ရည်ရွယ်ချက်</h4>
          <p>
            ${titleText} ကို နားလည်ပြီး လုပ်ငန်းခွင်မှာ
            မှန်ကန်စွာအသုံးချနိုင်ရန် ဖြစ်ပါတယ်။
          </p>
        </div>

        <div class="lesson-section">
          <h4>📚 အဓိကအကြောင်းအရာ</h4>
          <ul>
            <li>${titleText} ရဲ့ အဓိပ္ပါယ်နဲ့ အရေးကြီးပုံကို နားလည်ခြင်း</li>
            <li>Business မှာ ဘယ်အချိန်မှာ အသုံးချရမလဲ သိရှိခြင်း</li>
            <li>Customer နဲ့ Team အပေါ် သက်ရောက်မှုကို နားလည်ခြင်း</li>
            <li>Data နဲ့ လက်တွေ့အခြေအနေအပေါ် အခြေခံပြီး ဆုံးဖြတ်ခြင်း</li>
            <li>Action Plan တစ်ခုအဖြစ် ပြောင်းလဲအသုံးချခြင်း</li>
          </ul>
        </div>

        <div class="lesson-section">
          <h4>💡 Manager အတွက် အဓိကအချက်</h4>
          <p>
            Business Manager တစ်ယောက်အနေနဲ့ သိရုံနဲ့ မလုံလောက်ပါဘူး။
            သိထားတဲ့ Knowledge ကို Team၊ Customer၊ Market နဲ့
            Business Result တွေမှာ လက်တွေ့အသုံးချနိုင်ဖို့ လိုပါတယ်။
          </p>
        </div>

        <div class="lesson-section">
          <h4>🧠 လက်တွေ့စဉ်းစားရန်</h4>
          <p>
            ကိုယ့်လုပ်ငန်းမှာ လက်ရှိဖြစ်နေတဲ့ ပြဿနာတစ်ခုကို
            ရွေးချယ်ပြီး ဒီ Lesson မှာ လေ့လာထားတဲ့ Concept နဲ့
            ဘယ်လိုဖြေရှင်းနိုင်မလဲ စဉ်းစားပါ။
          </p>
        </div>

        <div class="lesson-section">
          <h4>📝 လက်တွေ့လုပ်ဆောင်ရန်</h4>
          <ol>
            <li>လက်ရှိအခြေအနေကို ရေးပါ။</li>
            <li>အဓိကပြဿနာကို သတ်မှတ်ပါ။</li>
            <li>ဖြေရှင်းနိုင်မယ့် နည်းလမ်း ၃ ခုရေးပါ။</li>
            <li>အကောင်းဆုံးနည်းလမ်းကို ရွေးပါ။</li>
            <li>ဘယ်သူက ဘာလုပ်မလဲ သတ်မှတ်ပါ။</li>
            <li>Deadline သတ်မှတ်ပါ။</li>
            <li>Result ကို ပြန်လည်သုံးသပ်ပါ။</li>
          </ol>
        </div>

        <div class="lesson-section lesson-action">
          <h4>🚀 Manager Action</h4>
          <p>
            ဒီနေ့ကစပြီး <strong>${titleText}</strong> ကို
            လက်တွေ့အလုပ်ထဲမှာ အနည်းဆုံး Action တစ်ခု
            စတင်အသုံးချပါ။
          </p>
        </div>

        <div class="lesson-summary">
          <h4>✅ Lesson Summary</h4>
          <p>
            ${titleText} ကို နားလည်ပြီး
            <strong>Plan → Execute → Measure → Improve</strong>
            ဆိုတဲ့ Business Management Cycle အတိုင်း
            ဆက်လက်လုပ်ဆောင်ပါ။
          </p>
        </div>

      </div>
    `;
  }

  /* =========================================================
     PROGRESS STORAGE
     ========================================================= */

  function loadProgress() {

    try {

      const saved = localStorage.getItem(STORAGE_KEY);

      if (!saved) {
        return {
          completedLessons: [],
          dailyMinutes: 0,
          lastLesson: 0
        };
      }

      const data = JSON.parse(saved);

      return {
        completedLessons:
          Array.isArray(data.completedLessons)
            ? data.completedLessons
            : [],

        dailyMinutes:
          Number(data.dailyMinutes) || 0,

        lastLesson:
          Number(data.lastLesson) || 0
      };

    } catch (error) {

      return {
        completedLessons: [],
        dailyMinutes: 0,
        lastLesson: 0
      };

    }
  }

  let progress = loadProgress();

  function saveProgress() {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(progress)
    );

  }

  function isCompleted(id) {
    return progress.completedLessons.includes(id);
  }

  function completedCount() {
    return progress.completedLessons.length;
  }

  function progressPercent() {

    if (!lessons.length) return 0;

    return Math.round(
      (completedCount() / lessons.length) * 100
    );
  }

  /* =========================================================
     SAVE LESSON DATA
     ========================================================= */

  try {
    localStorage.setItem(
      LESSONS_KEY,
      JSON.stringify(lessons)
    );
  } catch (error) {
    console.warn("Lesson storage unavailable.");
  }

  /* =========================================================
     PAGE NAVIGATION
     ========================================================= */

  const pageTitles = {

    dashboard: [
      "Dashboard",
      "သင့်ရဲ့ Business Learning Dashboard"
    ],

    courses: [
      "My Courses",
      "Business Academy Courses"
    ],

    lessons: [
      "Lessons",
      "Business Lessons 230 ခု"
    ],

    progress: [
      "My Progress",
      "သင်ယူမှုတိုးတက်မှု"
    ],

    sales: [
      "Sales Manager",
      "Sales Management Tools"
    ],

    calculator: [
      "Pricing Calculator",
      "Business Pricing & Profit Calculator"
    ],

    reports: [
      "Reports",
      "Business Performance Reports"
    ],

    coach: [
      "AI Business Coach",
      "Business Decision Support"
    ],

    aitools: [
      "AI Tools",
      "Business Productivity Tools"
    ],

    settings: [
      "Settings",
      "Application Settings"
    ]

  };

  function showPage(pageName) {

    const pages = $$(".page");

    pages.forEach(page => {

      const id = page.id;

      if (
        id === pageName ||
        id === "page-" + pageName
      ) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }

    });

    const navItems = $$("[data-page]");

    navItems.forEach(item => {

      const target = item.dataset.page;

      item.classList.toggle(
        "active",
        target === pageName
      );

    });

    const title = pageTitles[pageName];

    const pageTitle =
      $("#pageTitle") ||
      $(".page-title");

    const pageSubtitle =
      $("#pageSubtitle") ||
      $(".page-subtitle");

    if (title) {

      if (pageTitle) {
        pageTitle.textContent = title[0];
      }

      if (pageSubtitle) {
        pageSubtitle.textContent = title[1];
      }

    }

    if (pageName === "lessons") {
      renderLessonList();
    }

    if (pageName === "progress") {
      updateProgressPage();
    }

    if (pageName === "dashboard") {
      updateDashboard();
    }

    if (pageName === "courses") {
      updateCourseProgress();
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }

  $$("[data-page]").forEach(item => {

    item.addEventListener("click", function (event) {

      event.preventDefault();

      const page = this.dataset.page;

      if (page) {
        showPage(page);
      }

      const sidebar =
        $(".sidebar");

      if (sidebar) {
        sidebar.classList.remove("open");
      }

    });

  });

  /* =========================================================
     MOBILE MENU
     ========================================================= */

  const mobileMenu =
    $("#mobileMenu") ||
    $(".menu-toggle");

  if (mobileMenu) {

    mobileMenu.addEventListener(
      "click",
      function () {

        const sidebar =
          $(".sidebar");

        if (sidebar) {
          sidebar.classList.toggle("open");
        }

      }
    );

  }

  /* =========================================================
     LESSON LIST
     ========================================================= */

  function renderLessonList(filter = "all") {

    const containers = [
      $("#lessonList"),
      $("#progressLessonList"),
      $(".lesson-list")
    ].filter(Boolean);

    if (!containers.length) return;

    let filteredLessons = lessons;

    if (
      filter &&
      filter !== "all"
    ) {

      filteredLessons =
        lessons.filter(
          lesson =>
            lesson.category === filter
        );

    }

    const html = filteredLessons
      .map(lesson => {

        const done =
          isCompleted(lesson.id);

        return `
          <div
            class="lesson-item ${done ? "completed" : ""}"
            data-lesson-id="${lesson.id}"
            style="
              cursor:pointer;
              padding:16px;
              margin-bottom:10px;
              border:1px solid #e2e8f0;
              border-radius:12px;
              background:#fff;
            "
          >

            <div
              style="
                display:flex;
                align-items:center;
                gap:12px;
              "
            >

              <div
                style="
                  min-width:42px;
                  width:42px;
                  height:42px;
                  border-radius:50%;
                  display:flex;
                  align-items:center;
                  justify-content:center;
                  background:${done ? "#16a34a" : "#2563eb"};
                  color:#fff;
                  font-weight:bold;
                "
              >
                ${done ? "✓" : lesson.id}
              </div>

              <div style="flex:1;">

                <div
                  style="
                    font-size:12px;
                    color:#64748b;
                    margin-bottom:4px;
                  "
                >
                  ${escapeHTML(lesson.category)}
                </div>

                <div
                  style="
                    font-weight:700;
                    color:#0f172a;
                  "
                >
                  ${escapeHTML(lesson.title)}
                </div>

              </div>

              <div
                style="
                  color:#64748b;
                  font-size:20px;
                "
              >
                →
              </div>

            </div>

          </div>
        `;

      })
      .join("");

    containers.forEach(container => {

      container.innerHTML = html;

      $$(".lesson-item", container)
        .forEach(item => {

          item.addEventListener(
            "click",
            function () {

              const id =
                Number(
                  this.dataset.lessonId
                );

              openLesson(id);

            }
          );

        });

    });

  }

  /* =========================================================
     LESSON FILTER
     ========================================================= */

  function createLessonFilter() {

    const lessonPage =
      $("#lessons") ||
      $("#page-lessons");

    if (!lessonPage) return;

    if (
      lessonPage.querySelector(
        ".lesson-filter"
      )
    ) {
      return;
    }

    const list =
      $("#lessonList") ||
      lessonPage.querySelector(
        ".lesson-list"
      );

    if (!list) return;

    const wrapper =
      document.createElement("div");

    wrapper.className =
      "lesson-filter";

    wrapper.style.cssText = `
      margin-bottom:20px;
      display:flex;
      gap:10px;
      flex-wrap:wrap;
    `;

    const select =
      document.createElement("select");

    select.style.cssText = `
      padding:12px;
      border:1px solid #cbd5e1;
      border-radius:10px;
      background:#fff;
      min-width:220px;
      cursor:pointer;
    `;

    select.innerHTML =
      `<option value="all">📚 Lesson အားလုံး — 230</option>` +
      modules
        .map(
          module =>
            `<option value="${escapeHTML(module.category)}">
              ${escapeHTML(module.category)}
            </option>`
        )
        .join("");

    select.addEventListener(
      "change",
      function () {
        renderLessonList(
          this.value
        );
      }
    );

    wrapper.appendChild(select);

    list.parentNode.insertBefore(
      wrapper,
      list
    );

  }

  /* =========================================================
     LESSON MODAL
     ========================================================= */

  function getModal() {

    let modal =
      $("#lessonModal");

    if (modal) return modal;

    modal =
      document.createElement("div");

    modal.id =
      "lessonModal";

    modal.style.cssText = `
      position:fixed;
      inset:0;
      background:rgba(15,23,42,.65);
      display:none;
      align-items:center;
      justify-content:center;
      z-index:9999;
      padding:20px;
    `;

    modal.innerHTML = `

      <div
        style="
          width:100%;
          max-width:850px;
          max-height:90vh;
          overflow:auto;
          background:#fff;
          border-radius:18px;
          box-shadow:0 20px 60px rgba(0,0,0,.25);
        "
      >

        <div
          style="
            position:sticky;
            top:0;
            background:#fff;
            border-bottom:1px solid #e2e8f0;
            padding:18px 22px;
            display:flex;
            align-items:center;
            justify-content:space-between;
            z-index:2;
          "
        >

          <div>

            <div
              id="modalLessonNumber"
              style="
                color:#2563eb;
                font-size:13px;
                font-weight:bold;
                margin-bottom:4px;
              "
            >
              Lesson
            </div>

            <h2
              id="modalLessonTitle"
              style="
                margin:0;
                font-size:22px;
              "
            >
              Lesson
            </h2>

          </div>

          <button
            id="modalClose"
            type="button"
            style="
              border:0;
              background:#f1f5f9;
              width:40px;
              height:40px;
              border-radius:50%;
              font-size:22px;
              cursor:pointer;
            "
          >
            ×
          </button>

        </div>

        <div
          id="modalLessonBody"
          style="
            padding:25px;
            line-height:1.8;
          "
        ></div>

        <div
          style="
            position:sticky;
            bottom:0;
            background:#fff;
            border-top:1px solid #e2e8f0;
            padding:18px 22px;
            display:flex;
            gap:10px;
            justify-content:flex-end;
          "
        >

          <button
            id="completeLessonBtn"
            type="button"
            style="
              border:0;
              background:#16a34a;
              color:#fff;
              padding:12px 20px;
              border-radius:10px;
              cursor:pointer;
              font-weight:bold;
            "
          >
            ✓ Lesson Complete
          </button>

        </div>

      </div>

    `;

    document.body.appendChild(modal);

    $("#modalClose").addEventListener(
      "click",
      closeLesson
    );

    modal.addEventListener(
      "click",
      function (event) {

        if (event.target === modal) {
          closeLesson();
        }

      }
    );

    return modal;

  }

  let currentLessonId = null;

  function openLesson(id) {

    const lesson =
      lessons.find(
        item => item.id === id
      );

    if (!lesson) return;

    currentLessonId = id;

    const modal =
      getModal();

    const number =
      $("#modalLessonNumber");

    const title =
      $("#modalLessonTitle");

    const body =
      $("#modalLessonBody");

    const completeBtn =
      $("#completeLessonBtn");

    if (number) {
      number.textContent =
        `Lesson ${lesson.id} / ${lessons.length} • ${lesson.category}`;
    }

    if (title) {
      title.textContent =
        lesson.title;
    }

    if (body) {
      body.innerHTML =
        lesson.body;
    }

    if (completeBtn) {

      if (isCompleted(id)) {

        completeBtn.textContent =
          "✓ Completed";

        completeBtn.style.background =
          "#16a34a";

      } else {

        completeBtn.textContent =
          "✓ Lesson Complete";

        completeBtn.style.background =
          "#2563eb";

      }

    }

    modal.style.display =
      "flex";

    document.body.style.overflow =
      "hidden";

  }

  function closeLesson() {

    const modal =
      $("#lessonModal");

    if (modal) {
      modal.style.display =
        "none";
    }

    document.body.style.overflow =
      "";

    currentLessonId = null;

  }

  /* =========================================================
     COMPLETE LESSON
     ========================================================= */

  document.addEventListener(
    "click",
    function (event) {

      if (
        event.target &&
        event.target.id ===
        "completeLessonBtn"
      ) {

        if (!currentLessonId) {
          return;
        }

        if (
          !isCompleted(
            currentLessonId
          )
        ) {

          progress.completedLessons.push(
            currentLessonId
          );

          progress.completedLessons =
            [...new Set(
              progress.completedLessons
            )];

          progress.lastLesson =
            currentLessonId;

          saveProgress();

        }

        event.target.textContent =
          "✓ Completed";

        event.target.style.background =
          "#16a34a";

        renderLessonList();

        updateDashboard();

        updateProgressPage();

        updateCourseProgress();

      }

    }
  );

  /* =========================================================
     DASHBOARD UPDATE
     ========================================================= */

  function updateDashboard() {

    const percent =
      progressPercent();

    const selectors = [
      "#lessonTotal",
      "#totalLessons",
      ".lesson-total"
    ];

    selectors.forEach(selector => {

      $$(selector).forEach(el => {

        el.textContent =
          lessons.length;

      });

    });

    [
      "#completedLessons",
      "#progressCompleted",
      ".completed-lessons-value"
    ].forEach(selector => {

      $$(selector).forEach(el => {

        el.textContent =
          completedCount();

      });

    });

    [
      "#lessonProgress",
      "#bigProgress",
      ".overall-progress-value",
      ".progress-percent"
    ].forEach(selector => {

      $$(selector).forEach(el => {

        el.textContent =
          percent + "%";

      });

    });

    [
      "#remainingLessons",
      "#progressRemaining",
      ".remaining-lessons-value"
    ].forEach(selector => {

      $$(selector).forEach(el => {

        el.textContent =
          lessons.length -
          completedCount();

      });

    });

    $$(".overall-progress-bar").forEach(
      bar => {
        bar.style.width =
          percent + "%";
      }
    );

    $$(".progress-bar").forEach(
      bar => {

        if (
          bar.dataset.progress !== undefined
        ) {
          bar.style.width =
            bar.dataset.progress + "%";
        }

      }
    );

  }

  /* =========================================================
     COURSE PROGRESS
     ========================================================= */

  function updateCourseProgress() {

    const percent =
      progressPercent();

    $$(".course-progress-bar").forEach(
      bar => {
        bar.style.width =
          percent + "%";
      }
    );

    $$(".course-progress-percent").forEach(
      el => {
        el.textContent =
          percent + "%";
      }
    );

    const courseProgress =
      $("#courseProgress");

    if (courseProgress) {

      courseProgress.style.width =
        percent + "%";

    }

    const courseProgressText =
      $("#courseProgressText");

    if (courseProgressText) {

      courseProgressText.textContent =
        percent + "%";

    }

  }

  /* =========================================================
     PROGRESS PAGE
     ========================================================= */

  function updateProgressPage() {

    const percent =
      progressPercent();

    const completed =
      completedCount();

    const remaining =
      lessons.length -
      completed;

    [
      "#bigProgress",
      ".overall-progress-value"
    ].forEach(selector => {

      $$(selector).forEach(el => {

        el.textContent =
          percent + "%";

      });

    });

    [
      "#progressCompleted",
      ".completed-lessons-value"
    ].forEach(selector => {

      $$(selector).forEach(el => {

        el.textContent =
          completed;

      });

    });

    [
      "#progressRemaining",
      ".remaining-lessons-value"
    ].forEach(selector => {

      $$(selector).forEach(el => {

        el.textContent =
          remaining;

      });

    });

    $$(".overall-progress-bar").forEach(
      bar => {

        bar.style.width =
          percent + "%";

      }
    );

    const list =
      $("#progressLessonList");

    if (list) {

      const recent =
        lessons.slice(
          Math.max(
            0,
            lessons.length - 20
          )
        );

      list.innerHTML =
        recent
          .map(lesson => {

            const done =
              isCompleted(
                lesson.id
              );

            return `
              <div
                class="lesson-item"
                data-lesson-id="${lesson.id}"
                style="
                  padding:12px;
                  margin-bottom:8px;
                  border-bottom:1px solid #e2e8f0;
                  cursor:pointer;
                "
              >
                <strong>
                  ${done ? "✓" : "○"}
                  Lesson ${lesson.id}
                </strong>
                —
                ${escapeHTML(lesson.title)}
              </div>
            `;

          })
          .join("");

      $$(".lesson-item", list)
        .forEach(item => {

          item.addEventListener(
            "click",
            function () {

              openLesson(
                Number(
                  this.dataset.lessonId
                )
              );

            }
          );

        });

    }

  }

  /* =========================================================
     PRICING CALCULATOR
     ========================================================= */

  function setupCalculator() {

    const calculateButtons =
      $$(
        "#calculateBtn, .calculate-btn"
      );

    calculateButtons.forEach(
      button => {

        button.addEventListener(
          "click",
          function () {

            const cost =
              Number(
                $("#costPrice")?.value ||
                $("#cost")?.value ||
                0
              );

            const margin =
              Number(
                $("#marginPercent")?.value ||
                $("#margin")?.value ||
                0
              );

            if (
              cost <= 0 ||
              margin < 0 ||
              margin >= 100
            ) {

              alert(
                "Cost Price နဲ့ Margin ကို မှန်ကန်စွာ ထည့်ပါ။"
              );

              return;

            }

            const price =
              cost /
              (1 - margin / 100);

            const profit =
              price - cost;

            const result =
              $("#calculatorResult") ||
              $("#priceResult") ||
              $(".calculator-result");

            if (result) {

              result.innerHTML = `
                <div>
                  <strong>Recommended Selling Price</strong>
                  <div style="font-size:28px;margin-top:8px;">
                    ${price.toLocaleString()} MMK
                  </div>
                  <div style="margin-top:8px;">
                    Gross Profit:
                    ${profit.toLocaleString()} MMK
                  </div>
                </div>
              `;

            }

          }
        );

      }
    );

  }

  /* =========================================================
     REPORTS
     ========================================================= */

  function updateReports() {

    const percent =
      progressPercent();

    const reportData = {

      totalLessons:
        lessons.length,

      completed:
        completedCount(),

      remaining:
        lessons.length -
        completedCount(),

      progress:
        percent

    };

    window.aungAcademyReport =
      reportData;

  }

  /* =========================================================
     AI BUSINESS COACH DEMO
     ========================================================= */

  function setupAICoach() {

    const buttons =
      $$(
        "#askCoachBtn, .coach-btn, .ai-coach-btn"
      );

    buttons.forEach(button => {

      button.addEventListener(
        "click",
        function () {

          const input =
            $("#coachInput") ||
            $("#aiCoachInput") ||
            $(".coach-input");

          const output =
            $("#coachResponse") ||
            $("#aiCoachResponse") ||
            $(".coach-response");

          const question =
            input?.value?.trim();

          if (!question) {

            if (output) {

              output.textContent =
                "Business နဲ့ပတ်သက်တဲ့ မေးခွန်းတစ်ခု ရေးပေးပါ။";

            }

            return;

          }

          if (output) {

            output.innerHTML = `
              <strong>AI Business Coach</strong>
              <p style="margin-top:10px;">
                သင့်မေးခွန်း —
                ${escapeHTML(question)}
              </p>

              <p>
                အရင်ဆုံး Problem ကို တိတိကျကျ
                သတ်မှတ်ပါ။ ပြီးရင် Data ကို စုဆောင်းပြီး
                Solution ၃ ခုထက်မနည်း စဉ်းစားပါ။
                အကောင်းဆုံး Solution ကို ရွေးပြီး
                Action Plan၊ Owner နဲ့ Deadline သတ်မှတ်ကာ
                Result ကို ပြန်တိုင်းတာပါ။
              </p>
            `;

          }

        }
      );

    });

  }

  /* =========================================================
     AI TOOLS
     ========================================================= */

  function setupAITools() {

    $$(".tool-card button, .secondary-btn")
      .forEach(button => {

        button.addEventListener(
          "click",
          function () {

            const tool =
              this.dataset.tool ||
              this.textContent.trim();

            alert(
              `${tool}\n\nဒီ Business Tool ကို Academy ရဲ့ နောက် Version မှာ AI-powered အဖြစ် ဆက်လက်ချိတ်ဆက်နိုင်ပါတယ်။`
            );

          }
        );

      });

  }

  /* =========================================================
     RESET PROGRESS
     ========================================================= */

  function setupReset() {

    const resetButtons =
      $$(
        "#resetProgress, .reset-progress"
      );

    resetButtons.forEach(button => {

      button.addEventListener(
        "click",
        function () {

          const confirmReset =
            confirm(
              "Lesson Progress အားလုံးကို Reset လုပ်မှာ သေချာပါသလား?"
            );

          if (!confirmReset) {
            return;
          }

          progress = {
            completedLessons: [],
            dailyMinutes: 0,
            lastLesson: 0
          };

          saveProgress();

          renderLessonList();

          updateDashboard();

          updateProgressPage();

          updateCourseProgress();

          alert(
            "Progress Reset ပြီးပါပြီ။"
          );

        }
      );

    });

  }

  /* =========================================================
     SEARCH LESSON
     ========================================================= */

  function setupLessonSearch() {

    const searchInputs =
      $$(
        "#lessonSearch, .lesson-search"
      );

    searchInputs.forEach(input => {

      input.addEventListener(
        "input",
        function () {

          const keyword =
            this.value
              .toLowerCase()
              .trim();

          const container =
            $("#lessonList") ||
            $(".lesson-list");

          if (!container) {
            return;
          }

          $$(".lesson-item", container)
            .forEach(item => {

              const text =
                item.textContent
                  .toLowerCase();

              item.style.display =
                !keyword ||
                text.includes(keyword)
                  ? ""
                  : "none";

            });

        }
      );

    });

  }

  /* =========================================================
     KEYBOARD ESC
     ========================================================= */

  document.addEventListener(
    "keydown",
    function (event) {

      if (
        event.key === "Escape"
      ) {

        closeLesson();

      }

    }
  );

  /* =========================================================
     GLOBAL API
     ========================================================= */

  window.AungBusinessAcademy = {

    lessons,

    modules,

    progress,

    openLesson,

    closeLesson,

    showPage,

    completeLesson: function (id) {

      if (
        !isCompleted(id)
      ) {

        progress.completedLessons.push(
          id
        );

        progress.completedLessons =
          [...new Set(
            progress.completedLessons
          )];

        progress.lastLesson =
          id;

        saveProgress();

        updateDashboard();

        updateProgressPage();

        updateCourseProgress();

        renderLessonList();

      }

    },

    getProgress: function () {

      return {

        total:
          lessons.length,

        completed:
          completedCount(),

        remaining:
          lessons.length -
          completedCount(),

        percent:
          progressPercent()

      };

    }

  };

  /* =========================================================
     INITIALIZE
     ========================================================= */

  createLessonFilter();

  renderLessonList();

  updateDashboard();

  updateProgressPage();

  updateCourseProgress();

  updateReports();

  setupCalculator();

  setupAICoach();

  setupAITools();

  setupReset();

  setupLessonSearch();

  /* =========================================================
     DEFAULT PAGE
     ========================================================= */

  const activePage =
    $(".page.active");

  if (!activePage) {

    showPage("dashboard");

  } else {

    const pageName =
      activePage.id
        .replace(/^page-/, "");

    if (pageTitles[pageName]) {
      showPage(pageName);
    }

  }

  console.log(
    "Aung Business Academy loaded successfully."
  );

  console.log(
    `Total Lessons: ${lessons.length}`
  );

});
