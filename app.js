document.addEventListener("DOMContentLoaded", function () {

  /* =========================================================
     AUNG BUSINESS ACADEMY
     PROFESSIONAL LESSON SYSTEM
     230 LESSONS
     ========================================================= */

  const STORAGE_KEY = "aungBusinessAcademy";
  const LESSONS_KEY = "aungBusinessAcademyLessons";

  const $ = (selector, parent = document) =>
    parent.querySelector(selector);

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
     MODULES
     23 MODULES × 10 LESSONS = 230
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
     BUILD LESSONS
     ========================================================= */

  const lessons = [];
  let lessonId = 1;

  modules.forEach((module, moduleIndex) => {

    module.lessons.forEach((title, index) => {

      lessons.push({
        id: lessonId,
        module: moduleIndex + 1,
        moduleLesson: index + 1,
        category: module.category,
        title: title
      });

      lessonId++;

    });

  });

  /* =========================================================
     STORAGE
     ========================================================= */

  function getProgress() {

    try {

      const saved =
        localStorage.getItem(STORAGE_KEY);

      if (!saved) {

        return {
          completedLessons: [],
          lastLesson: 0,
          dailyMinutes: 0
        };

      }

      const data =
        JSON.parse(saved);

      return {
        completedLessons:
          Array.isArray(data.completedLessons)
            ? data.completedLessons
            : [],

        lastLesson:
          Number(data.lastLesson) || 0,

        dailyMinutes:
          Number(data.dailyMinutes) || 0
      };

    } catch (error) {

      return {
        completedLessons: [],
        lastLesson: 0,
        dailyMinutes: 0
      };

    }

  }

  let progress = getProgress();

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

  function getPercent() {

    return Math.round(
      (completedCount() / lessons.length) * 100
    );

  }

  /* Save lesson database locally */

  try {

    localStorage.setItem(
      LESSONS_KEY,
      JSON.stringify(lessons)
    );

  } catch (error) {}

  /* =========================================================
     PAGE TITLES
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

  /* =========================================================
     NAVIGATION
     ========================================================= */

  function showPage(pageName) {

    $$(".page").forEach(page => {

      const id =
        page.id
          .replace(/^page-/, "");

      page.classList.toggle(
        "active",
        id === pageName
      );

    });

    $$("[data-page]").forEach(item => {

      item.classList.toggle(
        "active",
        item.dataset.page === pageName
      );

    });

    const title =
      pageTitles[pageName];

    if (title) {

      const pageTitle =
        $("#pageTitle") ||
        $(".page-title");

      const pageSubtitle =
        $("#pageSubtitle") ||
        $(".page-subtitle");

      if (pageTitle) {
        pageTitle.textContent =
          title[0];
      }

      if (pageSubtitle) {
        pageSubtitle.textContent =
          title[1];
      }

    }

    if (pageName === "lessons") {

      buildLessonInterface();

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

    const sidebar =
      $(".sidebar");

    if (sidebar) {
      sidebar.classList.remove("open");
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }

  $$("[data-page]").forEach(item => {

    item.addEventListener(
      "click",
      function (event) {

        event.preventDefault();

        showPage(
          this.dataset.page
        );

      }
    );

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

          sidebar.classList.toggle(
            "open"
          );

        }

      }
    );

  }

  /* =========================================================
     LESSON CONTENT
     ========================================================= */

  function getLessonBody(lesson) {

    return `

      <div class="lesson-content">

        <div class="lesson-intro">

          <div style="
            font-size:12px;
            color:#2563eb;
            font-weight:700;
            margin-bottom:8px;
          ">
            ${escapeHTML(lesson.category)}
          </div>

          <h3>
            ${escapeHTML(lesson.title)}
          </h3>

          <p>
            ဒီ Lesson မှာ
            <strong>${escapeHTML(lesson.title)}</strong>
            ကို Business Management နဲ့
            လက်တွေ့လုပ်ငန်းခွင်မှာ အသုံးချနိုင်အောင်
            လေ့လာသွားမှာ ဖြစ်ပါတယ်။
          </p>

        </div>

        <div class="lesson-section">

          <h4>🎯 ဒီ Lesson ရဲ့ ရည်ရွယ်ချက်</h4>

          <p>
            ဒီအကြောင်းအရာကို နားလည်ပြီး
            ကိုယ့်လုပ်ငန်း၊ Sales Team၊ Customer
            နဲ့ Business Result တွေမှာ
            လက်တွေ့အသုံးချနိုင်ရန် ဖြစ်ပါတယ်။
          </p>

        </div>

        <div class="lesson-section">

          <h4>📚 အဓိကအချက်များ</h4>

          <ul>

            <li>
              ${escapeHTML(lesson.title)}
              ရဲ့ အဓိပ္ပါယ်ကို နားလည်ပါ။
            </li>

            <li>
              လုပ်ငန်းခွင်မှာ ဘယ်လိုအသုံးချရမလဲ
              လေ့လာပါ။
            </li>

            <li>
              Customer နဲ့ Team အပေါ်
              သက်ရောက်မှုကို စဉ်းစားပါ။
            </li>

            <li>
              Data နဲ့ အခြေအနေမှန်ကို
              အခြေခံပြီး ဆုံးဖြတ်ပါ။
            </li>

            <li>
              Knowledge ကို Action Plan အဖြစ်
              ပြောင်းလဲပါ။
            </li>

          </ul>

        </div>

        <div class="lesson-section">

          <h4>💡 Manager အတွက် အရေးကြီးသောအချက်</h4>

          <p>
            Business Manager တစ်ယောက်အတွက်
            Knowledge သိထားရုံနဲ့ မလုံလောက်ပါဘူး။
            သိထားတာကို Team Management၊
            Customer Management၊ Sales Execution
            နဲ့ Business Result တွေထဲမှာ
            အသုံးချနိုင်ရပါမယ်။
          </p>

        </div>

        <div class="lesson-section">

          <h4>🧠 လက်တွေ့စဉ်းစားရန်</h4>

          <p>
            ကိုယ့်လုပ်ငန်းမှာ လက်ရှိကြုံတွေ့နေရတဲ့
            ပြဿနာတစ်ခုကို ရွေးပါ။
            ဒီ Lesson က သင်ခန်းစာကို အသုံးချပြီး
            ဘယ်လိုဖြေရှင်းမလဲ စဉ်းစားပါ။
          </p>

        </div>

        <div class="lesson-section">

          <h4>📝 Action Plan</h4>

          <ol>

            <li>လက်ရှိအခြေအနေကို သတ်မှတ်ပါ။</li>

            <li>အဓိကပြဿနာကို ရှာပါ။</li>

            <li>ဖြေရှင်းနိုင်မယ့် နည်းလမ်း ၃ ခုရေးပါ။</li>

            <li>အကောင်းဆုံးနည်းလမ်းကို ရွေးပါ။</li>

            <li>ဘယ်သူက ဘာလုပ်မလဲ သတ်မှတ်ပါ။</li>

            <li>Deadline သတ်မှတ်ပါ။</li>

            <li>Result ကို တိုင်းတာပါ။</li>

          </ol>

        </div>

        <div class="lesson-action">

          <h4>🚀 Manager Action</h4>

          <p>
            ဒီနေ့ကစပြီး
            <strong>${escapeHTML(lesson.title)}</strong>
            နဲ့ပတ်သက်တဲ့ Action တစ်ခုကို
            လက်တွေ့စတင်လုပ်ဆောင်ပါ။
          </p>

        </div>

        <div class="lesson-summary">

          <h4>✅ Lesson Summary</h4>

          <p>
            Business Management မှာ
            <strong>Plan → Execute → Measure → Improve</strong>
            ဆိုတဲ့ Cycle ကို အသုံးပြုပြီး
            အမြဲတမ်း တိုးတက်အောင်လုပ်ဆောင်ပါ။
          </p>

        </div>

      </div>

    `;

  }

  /* =========================================================
     LESSON INTERFACE
     ========================================================= */

  let lessonFilter =
    "all";

  let lessonSearch =
    "";

  function buildLessonInterface() {

    const page =
      $("#lessons") ||
      $("#page-lessons");

    if (!page) return;

    let list =
      $("#lessonList");

    if (!list) {

      list =
        page.querySelector(
          ".lesson-list"
        );

    }

    if (!list) return;

    /* Header */

    let header =
      page.querySelector(
        ".academy-lesson-header"
      );

    if (!header) {

      header =
        document.createElement(
          "div"
        );

      header.className =
        "academy-lesson-header";

      header.innerHTML = `

        <div style="
          background:linear-gradient(
            135deg,
            #1d4ed8,
            #2563eb
          );
          color:#fff;
          border-radius:18px;
          padding:24px;
          margin-bottom:18px;
        ">

          <div style="
            font-size:12px;
            opacity:.85;
            margin-bottom:6px;
          ">
            AUNG BUSINESS ACADEMY
          </div>

          <h2 style="
            font-size:26px;
            margin-bottom:5px;
          ">
            📚 Business Lessons
          </h2>

          <p style="
            opacity:.85;
            margin:0;
          ">
            Business Management ကို
            အဆင့်လိုက်လေ့လာနိုင်မယ့်
            Lesson 230 ခု
          </p>

        </div>

      `;

      list.parentNode.insertBefore(
        header,
        list
      );

    }

    /* Controls */

    let controls =
      page.querySelector(
        ".academy-lesson-controls"
      );

    if (!controls) {

      controls =
        document.createElement(
          "div"
        );

      controls.className =
        "academy-lesson-controls";

      controls.style.cssText = `
        background:#fff;
        border:1px solid #e2e8f0;
        border-radius:16px;
        padding:15px;
        margin-bottom:18px;
        display:flex;
        gap:10px;
        flex-wrap:wrap;
      `;

      controls.innerHTML = `

        <input
          id="academyLessonSearch"
          type="text"
          placeholder="🔎 Lesson ရှာရန်..."
          style="
            flex:1;
            min-width:220px;
            height:44px;
            padding:0 13px;
            border:1px solid #cbd5e1;
            border-radius:10px;
            outline:none;
          "
        >

        <select
          id="academyLessonCategory"
          style="
            min-width:220px;
            height:44px;
            padding:0 12px;
            border:1px solid #cbd5e1;
            border-radius:10px;
            background:#fff;
            outline:none;
          "
        >

          <option value="all">
            📚 Category အားလုံး — 230 Lessons
          </option>

          ${modules.map(
            module => `
              <option value="${escapeHTML(module.category)}">
                ${escapeHTML(module.category)}
              </option>
            `
          ).join("")}

        </select>

      `;

      list.parentNode.insertBefore(
        controls,
        list
      );

      const search =
        $("#academyLessonSearch");

      const category =
        $("#academyLessonCategory");

      if (search) {

        search.value =
          lessonSearch;

        search.addEventListener(
          "input",
          function () {

            lessonSearch =
              this.value
                .toLowerCase()
                .trim();

            renderLessonList();

          }
        );

      }

      if (category) {

        category.value =
          lessonFilter;

        category.addEventListener(
          "change",
          function () {

            lessonFilter =
              this.value;

            renderLessonList();

          }
        );

      }

    }

    /* Continue Learning */

    let continueBox =
      page.querySelector(
        ".academy-continue-box"
      );

    if (!continueBox) {

      continueBox =
        document.createElement(
          "div"
        );

      continueBox.className =
        "academy-continue-box";

      continueBox.style.cssText = `
        background:#fff;
        border:1px solid #e2e8f0;
        border-radius:16px;
        padding:16px;
        margin-bottom:18px;
      `;

      list.parentNode.insertBefore(
        continueBox,
        list
      );

    }

    updateContinueBox();

    renderLessonList();

  }

  /* =========================================================
     CONTINUE LEARNING
     ========================================================= */

  function updateContinueBox() {

    const box =
      $(".academy-continue-box");

    if (!box) return;

    let nextLesson;

    if (progress.lastLesson > 0) {

      nextLesson =
        lessons.find(
          lesson =>
            lesson.id >
            progress.lastLesson &&
            !isCompleted(lesson.id)
        );

    }

    if (!nextLesson) {

      nextLesson =
        lessons.find(
          lesson =>
            !isCompleted(
              lesson.id
            )
        );

    }

    if (!nextLesson) {

      box.innerHTML = `

        <div style="
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:15px;
          flex-wrap:wrap;
        ">

          <div>
            <strong>🎉 Congratulations!</strong>

            <div style="
              color:#64748b;
              font-size:13px;
              margin-top:3px;
            ">
              Lesson 230 ခုလုံး ပြီးဆုံးပါပြီ။
            </div>
          </div>

          <span style="
            background:#dcfce7;
            color:#166534;
            padding:8px 12px;
            border-radius:20px;
            font-weight:700;
          ">
            100% Complete
          </span>

        </div>

      `;

      return;

    }

    box.innerHTML = `

      <div style="
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:15px;
        flex-wrap:wrap;
      ">

        <div>

          <div style="
            color:#2563eb;
            font-size:12px;
            font-weight:700;
            margin-bottom:3px;
          ">
            CONTINUE LEARNING
          </div>

          <strong>
            Lesson ${nextLesson.id} —
            ${escapeHTML(nextLesson.title)}
          </strong>

          <div style="
            color:#64748b;
            font-size:12px;
            margin-top:3px;
          ">
            ${escapeHTML(nextLesson.category)}
          </div>

        </div>

        <button
          id="continueLessonBtn"
          type="button"
          style="
            border:0;
            background:#2563eb;
            color:#fff;
            padding:11px 17px;
            border-radius:10px;
            font-weight:700;
          "
        >
          ▶ Continue
        </button>

      </div>

    `;

    const button =
      $("#continueLessonBtn");

    if (button) {

      button.onclick =
        () => openLesson(
          nextLesson.id
        );

    }

  }

  /* =========================================================
     LESSON LIST
     ========================================================= */

  function renderLessonList() {

    const list =
      $("#lessonList") ||
      $(".lesson-list");

    if (!list) return;

    let filtered =
      lessons.filter(
        lesson => {

          const categoryMatch =
            lessonFilter === "all" ||
            lesson.category === lessonFilter;

          const searchMatch =
            !lessonSearch ||
            (
              lesson.title
                .toLowerCase()
                .includes(lessonSearch)
            ) ||
            (
              lesson.category
                .toLowerCase()
                .includes(lessonSearch)
            ) ||
            String(lesson.id)
              .includes(lessonSearch);

          return (
            categoryMatch &&
            searchMatch
          );

        }
      );

    if (!filtered.length) {

      list.innerHTML = `

        <div class="empty-state">

          <div style="
            font-size:35px;
            margin-bottom:10px;
          ">
            🔎
          </div>

          <strong>
            Lesson မတွေ့ပါ
          </strong>

          <p style="margin-top:5px;">
            Search စာလုံး သို့မဟုတ် Category
            ကို ပြန်စစ်ကြည့်ပါ။
          </p>

        </div>

      `;

      return;

    }

    list.innerHTML =
      filtered
        .map(
          lesson => {

            const completed =
              isCompleted(
                lesson.id
              );

            return `

              <div
                class="academy-lesson-card lesson-item ${
                  completed
                    ? "completed"
                    : ""
                }"
                data-lesson-id="${lesson.id}"
                style="
                  cursor:pointer;
                  background:#fff;
                  border:1px solid ${
                    completed
                      ? "#bbf7d0"
                      : "#e2e8f0"
                  };
                  border-radius:14px;
                  padding:15px;
                  margin-bottom:10px;
                  transition:.2s;
                "
              >

                <div style="
                  display:flex;
                  align-items:center;
                  gap:13px;
                ">

                  <div style="
                    width:45px;
                    height:45px;
                    min-width:45px;
                    border-radius:12px;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    background:${
                      completed
                        ? "#16a34a"
                        : "#eff6ff"
                    };
                    color:${
                      completed
                        ? "#fff"
                        : "#2563eb"
                    };
                    font-weight:800;
                  ">
                    ${
                      completed
                        ? "✓"
                        : lesson.id
                    }
                  </div>

                  <div style="
                    flex:1;
                    min-width:0;
                  ">

                    <div style="
                      font-size:11px;
                      color:#64748b;
                      margin-bottom:3px;
                    ">
                      ${escapeHTML(
                        lesson.category
                      )}
                    </div>

                    <div style="
                      font-weight:700;
                      color:#0f172a;
                    ">
                      ${escapeHTML(
                        lesson.title
                      )}
                    </div>

                  </div>

                  <div style="
                    color:#94a3b8;
                    font-size:20px;
                  ">
                    →
                  </div>

                </div>

              </div>

            `;

          }
        )
        .join("");

    $$(".academy-lesson-card", list)
      .forEach(card => {

        card.addEventListener(
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

  /* =========================================================
     MODAL
     ========================================================= */

  function createModal() {

    let modal =
      $("#academyLessonModal");

    if (modal) return modal;

    modal =
      document.createElement(
        "div"
      );

    modal.id =
      "academyLessonModal";

    modal.style.cssText = `
      position:fixed;
      inset:0;
      z-index:99999;
      background:rgba(15,23,42,.68);
      display:none;
      align-items:center;
      justify-content:center;
      padding:15px;
    `;

    modal.innerHTML = `

      <div style="
        width:100%;
        max-width:900px;
        max-height:92vh;
        background:#fff;
        border-radius:18px;
        overflow:hidden;
        display:flex;
        flex-direction:column;
        box-shadow:0 25px 70px rgba(0,0,0,.3);
      ">

        <div style="
          padding:18px 20px;
          border-bottom:1px solid #e2e8f0;
          display:flex;
          align-items:center;
          gap:15px;
        ">

          <div style="flex:1;">

            <div
              id="academyModalNumber"
              style="
                color:#2563eb;
                font-size:12px;
                font-weight:700;
              "
            >
              Lesson
            </div>

            <h2
              id="academyModalTitle"
              style="
                font-size:20px;
                margin:3px 0 0;
              "
            >
              Lesson
            </h2>

          </div>

          <button
            id="academyModalClose"
            type="button"
            style="
              width:40px;
              height:40px;
              border:0;
              border-radius:50%;
              background:#f1f5f9;
              font-size:23px;
              color:#334155;
            "
          >
            ×
          </button>

        </div>

        <div
          id="academyModalBody"
          style="
            padding:22px;
            overflow-y:auto;
            flex:1;
          "
        ></div>

        <div style="
          padding:14px 18px;
          border-top:1px solid #e2e8f0;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:10px;
          flex-wrap:wrap;
        ">

          <div style="
            display:flex;
            gap:7px;
          ">

            <button
              id="academyPrevLesson"
              type="button"
              style="
                border:1px solid #cbd5e1;
                background:#fff;
                color:#334155;
                padding:10px 13px;
                border-radius:9px;
                font-weight:700;
              "
            >
              ← Previous
            </button>

            <button
              id="academyNextLesson"
              type="button"
              style="
                border:1px solid #cbd5e1;
                background:#fff;
                color:#334155;
                padding:10px 13px;
                border-radius:9px;
                font-weight:700;
              "
            >
              Next →
            </button>

          </div>

          <button
            id="academyCompleteLesson"
            type="button"
            style="
              border:0;
              background:#2563eb;
              color:#fff;
              padding:11px 18px;
              border-radius:9px;
              font-weight:700;
            "
          >
            ✓ Mark Complete
          </button>

        </div>

      </div>

    `;

    document.body.appendChild(
      modal
    );

    $("#academyModalClose")
      .addEventListener(
        "click",
        closeLesson
      );

    modal.addEventListener(
      "click",
      function (event) {

        if (
          event.target === modal
        ) {

          closeLesson();

        }

      }
    );

    $("#academyPrevLesson")
      .addEventListener(
        "click",
        function () {

          if (!currentLessonId)
            return;

          if (
            currentLessonId > 1
          ) {

            openLesson(
              currentLessonId - 1
            );

          }

        }
      );

    $("#academyNextLesson")
      .addEventListener(
        "click",
        function () {

          if (!currentLessonId)
            return;

          if (
            currentLessonId <
            lessons.length
          ) {

            openLesson(
              currentLessonId + 1
            );

          }

        }
      );

    $("#academyCompleteLesson")
      .addEventListener(
        "click",
        function () {

          completeCurrentLesson();

        }
      );

    return modal;

  }

  let currentLessonId =
    null;

  function openLesson(id) {

    const lesson =
      lessons.find(
        item => item.id === id
      );

    if (!lesson) return;

    currentLessonId =
      id;

    progress.lastLesson =
      id;

    saveProgress();

    const modal =
      createModal();

    $("#academyModalNumber")
      .textContent =
      `Lesson ${lesson.id} / ${lessons.length} • ${lesson.category}`;

    $("#academyModalTitle")
      .textContent =
      lesson.title;

    $("#academyModalBody")
      .innerHTML =
      getLessonBody(
        lesson
      );

    const prev =
      $("#academyPrevLesson");

    const next =
      $("#academyNextLesson");

    const complete =
      $("#academyCompleteLesson");

    prev.disabled =
      id <= 1;

    next.disabled =
      id >= lessons.length;

    prev.style.opacity =
      id <= 1 ? ".45" : "1";

    next.style.opacity =
      id >= lessons.length ? ".45" : "1";

    if (
      isCompleted(id)
    ) {

      complete.textContent =
        "✓ Completed";

      complete.style.background =
        "#16a34a";

    } else {

      complete.textContent =
        "✓ Mark Complete";

      complete.style.background =
        "#2563eb";

    }

    modal.style.display =
      "flex";

    document.body.style.overflow =
      "hidden";

  }

  function closeLesson() {

    const modal =
      $("#academyLessonModal");

    if (modal) {

      modal.style.display =
        "none";

    }

    document.body.style.overflow =
      "";

  }

  /* =========================================================
     COMPLETE
     ========================================================= */

  function completeCurrentLesson() {

    if (!currentLessonId)
      return;

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

      saveProgress();

    }

    const button =
      $("#academyCompleteLesson");

    if (button) {

      button.textContent =
        "✓ Completed";

      button.style.background =
        "#16a34a";

    }

    renderLessonList();

    updateContinueBox();

    updateDashboard();

    updateProgressPage();

    updateCourseProgress();

  }

  /* =========================================================
     DASHBOARD
     ========================================================= */

  function updateDashboard() {

    const percent =
      getPercent();

    const completed =
      completedCount();

    const remaining =
      lessons.length -
      completed;

    const selectors = {

      total: [
        "#lessonTotal",
        "#totalLessons",
        ".lesson-total"
      ],

      completed: [
        "#completedLessons",
        "#progressCompleted",
        ".completed-lessons-value"
      ],

      remaining: [
        "#remainingLessons",
        "#progressRemaining",
        ".remaining-lessons-value"
      ],

      percent: [
        "#lessonProgress",
        "#bigProgress",
        ".overall-progress-value",
        ".progress-percent"
      ]

    };

    selectors.total.forEach(
      selector => {

        $$(selector).forEach(
          el => {

            el.textContent =
              lessons.length;

          }
        );

      }
    );

    selectors.completed.forEach(
      selector => {

        $$(selector).forEach(
          el => {

            el.textContent =
              completed;

          }
        );

      }
    );

    selectors.remaining.forEach(
      selector => {

        $$(selector).forEach(
          el => {

            el.textContent =
              remaining;

          }
        );

      }
    );

    selectors.percent.forEach(
      selector => {

        $$(selector).forEach(
          el => {

            el.textContent =
              percent + "%";

          }
        );

      }
    );

    $$(".overall-progress-bar")
      .forEach(
        bar => {

          bar.style.width =
            percent + "%";

        }
      );

    $$(".progress-bar")
      .forEach(
        bar => {

          if (
            bar.dataset.progress
          ) {

            bar.style.width =
              bar.dataset.progress +
              "%";

          }

        }
      );

  }

  /* =========================================================
     COURSE PROGRESS
     ========================================================= */

  function updateCourseProgress() {

    const percent =
      getPercent();

    $$(".course-progress-bar")
      .forEach(
        bar => {

          bar.style.width =
            percent + "%";

        }
      );

    $$(".course-progress-percent")
      .forEach(
        el => {

          el.textContent =
            percent + "%";

        }
      );

    const bar =
      $("#courseProgress");

    if (bar) {

      bar.style.width =
        percent + "%";

    }

    const text =
      $("#courseProgressText");

    if (text) {

      text.textContent =
        percent + "%";

    }

  }

  /* =========================================================
     PROGRESS PAGE
     ========================================================= */

  function updateProgressPage() {

    const percent =
      getPercent();

    const completed =
      completedCount();

    const remaining =
      lessons.length -
      completed;

    $(
      "#bigProgress"
    ) &&
      ($("#bigProgress").textContent =
        percent + "%");

    $(
      "#progressCompleted"
    ) &&
      ($("#progressCompleted").textContent =
        completed);

    $(
      "#progressRemaining"
    ) &&
      ($("#progressRemaining").textContent =
        remaining);

    $$(".overall-progress-bar")
      .forEach(
        bar => {

          bar.style.width =
            percent + "%";

        }
      );

    const list =
      $("#progressLessonList");

    if (!list) return;

    const recent =
      lessons.slice(
        Math.max(
          0,
          lessons.length - 20
        )
      );

    list.innerHTML =
      recent
        .map(
          lesson => {

            const done =
              isCompleted(
                lesson.id
              );

            return `

              <div
                class="progress-lesson-item"
                data-lesson-id="${lesson.id}"
                style="
                  display:flex;
                  align-items:center;
                  gap:10px;
                  padding:11px;
                  border-bottom:1px solid #e2e8f0;
                  cursor:pointer;
                "
              >

                <span style="
                  color:${
                    done
                      ? "#16a34a"
                      : "#94a3b8"
                  };
                  font-weight:800;
                ">
                  ${done ? "✓" : "○"}
                </span>

                <div style="flex:1;">

                  <strong>
                    Lesson ${lesson.id}
                  </strong>

                  <div style="
                    color:#64748b;
                    font-size:12px;
                  ">
                    ${escapeHTML(
                      lesson.title
                    )}
                  </div>

                </div>

              </div>

            `;

          }
        )
        .join("");

    $$(".progress-lesson-item")
      .forEach(
        item => {

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

        }
      );

  }

  /* =========================================================
     RESET PROGRESS
     ========================================================= */

  function setupReset() {

    $(
      "#resetProgress"
    ) &&
      $("#resetProgress")
        .addEventListener(
          "click",
          function () {

            if (
              !confirm(
                "Lesson Progress အားလုံးကို Reset လုပ်မှာ သေချာပါသလား?"
              )
            ) {
              return;
            }

            progress = {
              completedLessons: [],
              lastLesson: 0,
              dailyMinutes: 0
            };

            saveProgress();

            renderLessonList();

            updateContinueBox();

            updateDashboard();

            updateProgressPage();

            updateCourseProgress();

            alert(
              "Progress Reset ပြီးပါပြီ။"
            );

          }
        );

  }

  /* =========================================================
     KEYBOARD
     ========================================================= */

  document.addEventListener(
    "keydown",
    function (event) {

      const modal =
        $("#academyLessonModal");

      if (
        event.key === "Escape"
      ) {

        closeLesson();

      }

      if (
        modal &&
        modal.style.display === "flex" &&
        currentLessonId
      ) {

        if (
          event.key === "ArrowRight" &&
          currentLessonId <
            lessons.length
        ) {

          openLesson(
            currentLessonId + 1
          );

        }

        if (
          event.key === "ArrowLeft" &&
          currentLessonId > 1
        ) {

          openLesson(
            currentLessonId - 1
          );

        }

      }

    }
  );

  /* =========================================================
     GLOBAL API
     ========================================================= */

  window.AungBusinessAcademy = {

    lessons: lessons,

    modules: modules,

    openLesson: openLesson,

    closeLesson: closeLesson,

    showPage: showPage,

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
          getPercent(),

        lastLesson:
          progress.lastLesson

      };

    },

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

        renderLessonList();

        updateContinueBox();

        updateDashboard();

        updateProgressPage();

        updateCourseProgress();

      }

    }

  };

  /* =========================================================
     INITIALIZE
     ========================================================= */

  createModal();

  buildLessonInterface();

  updateDashboard();

  updateProgressPage();

  updateCourseProgress();

  setupReset();

  /* =========================================================
     DEFAULT PAGE
     ========================================================= */

  const activePage =
    $(".page.active");

  if (activePage) {

    const pageName =
      activePage.id
        .replace(/^page-/, "");

    if (pageTitles[pageName]) {

      showPage(
        pageName
      );

    }

  } else {

    showPage(
      "dashboard"
    );

  }

  console.log(
    "Aung Business Academy: 230 Lessons Loaded"
  );

});
