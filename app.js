/* =========================================================
   AUNG BUSINESS ACADEMY
   COMPLETE APP CONTROLLER
   Version 9.0
   Compatible with current index.html + style.css
   ========================================================= */

(function () {
  "use strict";

  console.log("Aung Business Academy V9.0 loading...");

  /* =======================================================
     GLOBAL DATA
  ======================================================= */

  const pageMap = {
    dashboardPage: {
      title: "Dashboard",
      subtitle: "Business growth starts with better decisions."
    },

    coursesPage: {
      title: "My Courses",
      subtitle: "Business courses and learning paths"
    },

    lessonsPage: {
      title: "Lessons",
      subtitle: "Learn practical business skills"
    },

    progressPage: {
      title: "My Progress",
      subtitle: "Track your learning progress"
    },

    salesPage: {
      title: "Sales Manager",
      subtitle: "Sales management tools and performance"
    },

    calculatorPage: {
      title: "Pricing Calculator",
      subtitle: "Calculate pricing, profit and targets"
    },

    reportsPage: {
      title: "Reports",
      subtitle: "Business performance overview"
    },

    aiPage: {
      title: "AI Business Coach",
      subtitle: "Business coaching and practical guidance"
    },

    toolsPage: {
      title: "AI Tools",
      subtitle: "Useful business productivity tools"
    },

    settingsPage: {
      title: "Settings",
      subtitle: "Manage your profile and preferences"
    }
  };


  /* =======================================================
     COURSE DATA
  ======================================================= */

  const courses = [
    {
      id: 1,
      title: "Sales Management Mastery",
      category: "Sales",
      description:
        "Sales Target, Team Management, Sales Execution, Distributor Management, KPI Analysis နှင့် Leadership.",
      lessons: 10,
      icon: "📊"
    },

    {
      id: 2,
      title: "Business Fundamentals",
      category: "Business",
      description:
        "Business Model, Customer, Revenue, Cost, Profit နှင့် လုပ်ငန်းအခြေခံများ.",
      lessons: 7,
      icon: "🏢"
    },

    {
      id: 3,
      title: "Marketing & Brand",
      category: "Marketing",
      description:
        "Customer, Brand Positioning, Marketing Strategy နှင့် Promotion Planning.",
      lessons: 7,
      icon: "📣"
    },

    {
      id: 4,
      title: "People & Leadership",
      category: "Leadership",
      description:
        "Team Leadership, Coaching, Motivation, Performance Management နှင့် Accountability.",
      lessons: 6,
      icon: "👥"
    }
  ];


  /* =======================================================
     LESSON DATA — 30 BURMESE LESSONS
  ======================================================= */

  const lessons = [

    {
      id: 1,
      title: "လုပ်ငန်းဆိုတာ ဘာလဲ?",
      category: "Business Basics",
      description:
        "လုပ်ငန်းတစ်ခုရဲ့ အဓိကရည်ရွယ်ချက်နဲ့ Value Creation ကို နားလည်ပါ။"
    },

    {
      id: 2,
      title: "Business Model အခြေခံ",
      category: "Business Basics",
      description:
        "လုပ်ငန်းက Customer ကို Value ပေးပြီး Revenue ရအောင် ဘယ်လိုတည်ဆောက်ထားသလဲ လေ့လာပါ။"
    },

    {
      id: 3,
      title: "Customer ကို နားလည်ခြင်း",
      category: "Business Basics",
      description:
        "Customer Need, Problem နဲ့ Buying Behavior ကို နားလည်ပါ။"
    },

    {
      id: 4,
      title: "လုပ်ငန်းမှာ Revenue ဘယ်လိုဖြစ်လာသလဲ?",
      category: "Business Basics",
      description:
        "Revenue Source တွေကို ခွဲခြမ်းပြီး ရောင်းအားတိုးတက်အောင် စဉ်းစားပါ။"
    },

    {
      id: 5,
      title: "Cost နဲ့ Profit အခြေခံ",
      category: "Profit & Loss",
      description:
        "Cost, Revenue, Gross Profit နဲ့ Net Profit ကို နားလည်ပါ။"
    },

    {
      id: 6,
      title: "Strategic Thinking ဆိုတာ",
      category: "Strategic Thinking",
      description:
        "နေ့စဉ်လုပ်ငန်းကိစ္စထက် ရေရှည်ရည်မှန်းချက်ကို ဘယ်လိုစဉ်းစားမလဲ။"
    },

    {
      id: 7,
      title: "Vision နဲ့ Mission",
      category: "Strategic Thinking",
      description:
        "လုပ်ငန်းရဲ့ Vision နဲ့ Mission ကို ရှင်းလင်းအောင် တည်ဆောက်ပါ။"
    },

    {
      id: 8,
      title: "SWOT Analysis",
      category: "Strategic Thinking",
      description:
        "Strength, Weakness, Opportunity, Threat ကို အသုံးချပြီး Strategy တည်ဆောက်ပါ။"
    },

    {
      id: 9,
      title: "ပြိုင်ဘက်ကို ခွဲခြမ်းခြင်း",
      category: "Strategic Thinking",
      description:
        "Competitor Strength နဲ့ Market Position ကို လေ့လာပါ။"
    },

    {
      id: 10,
      title: "Brand ဆိုတာ ဘာလဲ?",
      category: "Brand Basics",
      description:
        "Brand Name ထက် Customer Mind ထဲက Brand Perception ကို နားလည်ပါ။"
    },

    {
      id: 11,
      title: "Brand Positioning",
      category: "Brand Basics",
      description:
        "Customer ရဲ့ စိတ်ထဲမှာ ကိုယ့် Brand ကို ဘယ်လိုနေရာချမလဲ။"
    },

    {
      id: 12,
      title: "Marketing အခြေခံ",
      category: "Marketing Basics",
      description:
        "Product, Price, Place, Promotion ကို အခြေခံကနေ လေ့လာပါ။"
    },

    {
      id: 13,
      title: "Customer Segment",
      category: "Marketing Basics",
      description:
        "Customer တွေကို လိုအပ်ချက်အလိုက် Segment ခွဲပြီး Target လုပ်ပါ။"
    },

    {
      id: 14,
      title: "Promotion Strategy",
      category: "Marketing Basics",
      description:
        "Promotion တစ်ခုလုပ်တဲ့အခါ Objective နဲ့ Expected Result ကို သတ်မှတ်ပါ။"
    },

    {
      id: 15,
      title: "Sales Process အခြေခံ",
      category: "Sales Basics",
      description:
        "Prospecting ကနေ Closing အထိ Sales Process ကို နားလည်ပါ။"
    },

    {
      id: 16,
      title: "Sales Target သတ်မှတ်ခြင်း",
      category: "Sales Basics",
      description:
        "Monthly Target ကို Team နဲ့ Individual Target အဖြစ် ခွဲခြမ်းပါ။"
    },

    {
      id: 17,
      title: "Sales Execution",
      category: "Sales Basics",
      description:
        "Target ကို Field Execution အဖြစ် ပြောင်းလဲနိုင်တဲ့ Framework ကို လေ့လာပါ။"
    },

    {
      id: 18,
      title: "Customer Relationship Management",
      category: "Customer Service",
      description:
        "Customer Relationship ကို ရေရှည်တည်တံ့အောင် စီမံပါ။"
    },

    {
      id: 19,
      title: "Customer Complaint ကို ကိုင်တွယ်ခြင်း",
      category: "Customer Service",
      description:
        "Complaint ကို Problem အဖြစ်မမြင်ဘဲ Improvement Opportunity အဖြစ် အသုံးချပါ။"
    },

    {
      id: 20,
      title: "Negotiation အခြေခံ",
      category: "Negotiation",
      description:
        "Win-Win Negotiation ရရှိအောင် အဓိကအချက်များကို လေ့လာပါ။"
    },

    {
      id: 21,
      title: "Price Negotiation",
      category: "Negotiation",
      description:
        "Price ကို လျှော့ပေးရုံမဟုတ်ဘဲ Value နဲ့ Negotiation လုပ်ပါ။"
    },

    {
      id: 22,
      title: "Team Leadership",
      category: "People Management",
      description:
        "Manager တစ်ယောက်အနေနဲ့ Team ကို Direction ပေးပြီး Ownership တည်ဆောက်ပါ။"
    },

    {
      id: 23,
      title: "Coaching & Feedback",
      category: "People Management",
      description:
        "Team Member Performance တိုးတက်အောင် Coaching နဲ့ Feedback ပေးပါ။"
    },

    {
      id: 24,
      title: "Performance Management",
      category: "People Management",
      description:
        "KPI, Review, Action Plan နဲ့ Performance Improvement ကို စီမံပါ။"
    },

    {
      id: 25,
      title: "Profit Margin တွက်ခြင်း",
      category: "Profit & Loss",
      description:
        "Gross Margin နဲ့ Profit Margin ကို မှန်ကန်စွာတွက်ချက်ပါ။"
    },

    {
      id: 26,
      title: "Break-even Point",
      category: "Profit & Loss",
      description:
        "လုပ်ငန်းအရှုံးမရှိ အမြတ်မရှိ ဖြစ်မယ့် Sales Level ကို တွက်ပါ။"
    },

    {
      id: 27,
      title: "Goal Setting",
      category: "Goal Setting",
      description:
        "SMART Goal နဲ့ ရလဒ်ရနိုင်တဲ့ Business Goal တည်ဆောက်ပါ။"
    },

    {
      id: 28,
      title: "KPI သတ်မှတ်ခြင်း",
      category: "Goal Setting",
      description:
        "Business Goal ကို တိုင်းတာနိုင်တဲ့ KPI အဖြစ် ပြောင်းလဲပါ။"
    },

    {
      id: 29,
      title: "Execution Plan",
      category: "Goal Setting",
      description:
        "Strategy ကို Action Plan နဲ့ Timeline အဖြစ် ပြောင်းလဲပါ။"
    },

    {
      id: 30,
      title: "Manager တစ်ယောက်ရဲ့ Daily Routine",
      category: "People Management",
      description:
        "Planning, Team Review, Field Visit, KPI Review နဲ့ Coaching ကို နေ့စဉ်စီမံပါ။"
    }

  ];


  /* =======================================================
     LOCAL STORAGE
  ======================================================= */

  const STORAGE_KEY = "aungBusinessAcademyCompleted";

  function getCompletedLessons() {

    try {

      const saved = localStorage.getItem(STORAGE_KEY);

      if (!saved) {
        return [];
      }

      const parsed = JSON.parse(saved);

      return Array.isArray(parsed) ? parsed : [];

    } catch (error) {

      console.warn("Could not read progress:", error);

      return [];

    }

  }


  function saveCompletedLessons(list) {

    try {

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(list)
      );

    } catch (error) {

      console.warn("Could not save progress:", error);

    }

  }


  function isLessonCompleted(id) {

    return getCompletedLessons().includes(Number(id));

  }


  function toggleLesson(id) {

    id = Number(id);

    let completed = getCompletedLessons();

    if (completed.includes(id)) {

      completed = completed.filter(function (item) {
        return item !== id;
      });

      showToast("Lesson ကို ပြန်လည်မပြီးဆုံးအဖြစ် ပြောင်းထားပါသည်။");

    } else {

      completed.push(id);

      showToast("Lesson ပြီးဆုံးပါပြီ ✓");

    }

    saveCompletedLessons(completed);

    renderLessons();
    updateProgress();
  }


  /* =======================================================
     HELPERS
  ======================================================= */

  function get(id) {
    return document.getElementById(id);
  }


  function escapeHTML(value) {

    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  }


  function normalizePage(page) {

    if (!page) {
      return "dashboardPage";
    }

    page = String(page)
      .replace("#", "")
      .trim();

    if (pageMap[page]) {
      return page;
    }

    const lower = page.toLowerCase();

    for (const key of Object.keys(pageMap)) {

      if (
        key.toLowerCase() === lower ||
        key.toLowerCase().replace("page", "") ===
          lower.replace("page", "")
      ) {
        return key;
      }

    }

    return "dashboardPage";

  }


  /* =======================================================
     NAVIGATION
  ======================================================= */

  function navigate(page) {

    const targetPage = normalizePage(page);

    const pages = document.querySelectorAll(".page");

    pages.forEach(function (section) {

      section.classList.remove("active");

      /*
       * IMPORTANT:
       * Do not force display:none here.
       * CSS controls .page / .page.active.
       */

    });


    const target = get(targetPage);

    if (!target) {

      console.error(
        "Aung Business Academy: Page not found:",
        targetPage
      );

      return;

    }


    target.classList.add("active");


    /* Sidebar */

    document.querySelectorAll(".nav-item[data-page]")
      .forEach(function (button) {

        const buttonPage =
          button.getAttribute("data-page");

        button.classList.toggle(
          "active",
          normalizePage(buttonPage) === targetPage
        );

      });


    /* Mobile navigation */

    document.querySelectorAll(".mobile-nav button[data-page]")
      .forEach(function (button) {

        const buttonPage =
          button.getAttribute("data-page");

        button.classList.toggle(
          "active",
          normalizePage(buttonPage) === targetPage
        );

      });


    /* Title */

    const title = get("pageTitle");
    const subtitle = get("pageSubtitle");

    if (title) {
      title.textContent = pageMap[targetPage].title;
    }

    if (subtitle) {
      subtitle.textContent = pageMap[targetPage].subtitle;
    }


    /* Close mobile sidebar */

    const sidebar = get("sidebar");
    const overlay = get("sidebarOverlay");

    if (sidebar) {
      sidebar.classList.remove("open");
    }

    if (overlay) {
      overlay.classList.remove("show");
    }


    /* Page-specific rendering */

    if (targetPage === "coursesPage") {
      renderCourses();
    }

    if (targetPage === "lessonsPage") {
      renderLessons();
    }

    if (targetPage === "progressPage") {
      updateProgress();
    }

    if (targetPage === "salesPage") {
      renderSalesManager();
    }

    if (targetPage === "reportsPage") {
      renderReports();
    }


    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }


  window.navigate = navigate;


  /* =======================================================
     COURSES
  ======================================================= */

  function renderCourses() {

    const container = get("coursesList");

    if (!container) {
      return;
    }

    container.innerHTML = courses.map(function (course) {

      return `
        <div class="course-card">

          <div class="course-cover">
            <span>${escapeHTML(course.category)}</span>
            <strong>${course.icon}</strong>
          </div>

          <div class="course-card-body">

            <span class="eyebrow">
              ${escapeHTML(course.category)}
            </span>

            <h3>
              ${escapeHTML(course.title)}
            </h3>

            <p>
              ${escapeHTML(course.description)}
            </p>

            <div class="course-card-meta">
              <span>📚 ${course.lessons} Lessons</span>

              <button
                type="button"
                class="primary-btn small"
                data-course="${course.id}">
                Start Learning →
              </button>
            </div>

          </div>

        </div>
      `;

    }).join("");

  }


  /* =======================================================
     LESSONS
  ======================================================= */

  let currentLessonFilter = "All";
  let currentLessonSearch = "";


  function renderLessons() {

    const container = get("lessonsList");

    if (!container) {
      return;
    }

    const completed = getCompletedLessons();

    let filtered = lessons.slice();


    if (
      currentLessonFilter &&
      currentLessonFilter !== "All"
    ) {

      filtered = filtered.filter(function (lesson) {

        const filter = currentLessonFilter;

        if (filter === "Sales") {
          return lesson.category === "Sales Basics";
        }

        if (filter === "Marketing") {
          return lesson.category === "Marketing Basics";
        }

        if (filter === "People Management") {
          return lesson.category === "People Management";
        }

        if (filter === "Finance") {
          return lesson.category === "Profit & Loss";
        }

        return lesson.category === filter;

      });

    }


    if (currentLessonSearch) {

      const search = currentLessonSearch.toLowerCase();

      filtered = filtered.filter(function (lesson) {

        return (
          lesson.title.toLowerCase().includes(search) ||
          lesson.description.toLowerCase().includes(search) ||
          lesson.category.toLowerCase().includes(search)
        );

      });

    }


    if (!filtered.length) {

      container.innerHTML = `
        <div class="empty-state">
          <div style="font-size:42px;">🔎</div>
          <h3>သင်ခန်းစာ မတွေ့ပါ</h3>
          <p>Search သို့မဟုတ် Filter ကို ပြန်ပြောင်းကြည့်ပါ။</p>
        </div>
      `;

      return;

    }


    container.innerHTML = filtered.map(function (lesson) {

      const done = completed.includes(lesson.id);

      return `
        <div
          class="lesson-card ${done ? "completed" : ""}"
          data-category="${escapeHTML(lesson.category)}"
          data-lesson-id="${lesson.id}"
        >

          <div class="lesson-number">
            ${lesson.id}
          </div>

          <div class="lesson-card-content">

            <span class="lesson-category">
              ${escapeHTML(lesson.category)}
            </span>

            <h3>
              ${escapeHTML(lesson.title)}
            </h3>

            <p>
              ${escapeHTML(lesson.description)}
            </p>

            <button
              type="button"
              class="primary-btn small lesson-open-btn"
              data-lesson="${lesson.id}">
              ${done ? "✓ Completed" : "Start Lesson →"}
            </button>

          </div>

        </div>
      `;

    }).join("");

  }


  function setLessonFilter(category) {

    currentLessonFilter = category || "All";

    document.querySelectorAll(".filter-btn")
      .forEach(function (button) {

        button.classList.toggle(
          "active",
          button.getAttribute("data-filter") ===
            currentLessonFilter
        );

      });

    renderLessons();

  }


  window.filterLessons = function (category) {

    setLessonFilter(category);

  };


  /* =======================================================
     LESSON MODAL
  ======================================================= */

  function openLesson(id) {

    const lesson = lessons.find(function (item) {
      return item.id === Number(id);
    });

    if (!lesson) {
      return;
    }

    const completed = isLessonCompleted(lesson.id);

    openModal(`
      <div class="modal-content-inner">

        <span class="eyebrow">
          ${escapeHTML(lesson.category)}
        </span>

        <h2>
          ${escapeHTML(lesson.title)}
        </h2>

        <p>
          ${escapeHTML(lesson.description)}
        </p>

        <div style="
          margin-top:20px;
          padding:16px;
          border-radius:12px;
          background:#f4f6f9;
        ">

          <strong>လက်တွေ့လုပ်ဆောင်ရန်</strong>

          <p style="margin-top:8px;">
            ဒီသင်ခန်းစာကနေ သင်ယူထားတဲ့အချက်တစ်ခုကို
            ကိုယ့်လုပ်ငန်းမှာ လက်တွေ့အသုံးချကြည့်ပါ။
          </p>

        </div>

        <button
          type="button"
          class="primary-btn"
          style="margin-top:20px;"
          data-complete-lesson="${lesson.id}">
          ${completed ? "✓ Completed — ပြန်ပြောင်းရန်" : "✓ Mark as Completed"}
        </button>

      </div>
    `);

  }


  /* =======================================================
     PROGRESS
  ======================================================= */

  function updateProgress() {

    const completed = getCompletedLessons();

    const total = lessons.length;

    const count = completed.length;

    const percentage =
      total === 0
        ? 0
        : Math.round((count / total) * 100);


    const statCompleted = get("statCompleted");
    const statProgress = get("statProgress");
    const statLessons = get("statLessons");

    if (statCompleted) {
      statCompleted.textContent = count;
    }

    if (statProgress) {
      statProgress.textContent = percentage + "%";
    }

    if (statLessons) {
      statLessons.textContent = total;
    }


    const dashboardProgress =
      get("dashboardCourseProgress");

    const dashboardPercent =
      get("dashboardCoursePercent");

    if (dashboardProgress) {
      dashboardProgress.style.width =
        percentage + "%";
    }

    if (dashboardPercent) {
      dashboardPercent.textContent =
        percentage + "% completed";
    }


    const progressNumber =
      get("progressNumber");

    const progressCompleted =
      get("progressCompleted");

    const progressRemaining =
      get("progressRemaining");

    const progressText =
      get("progressText");

    if (progressNumber) {
      progressNumber.textContent =
        percentage + "%";
    }

    if (progressCompleted) {
      progressCompleted.textContent =
        count;
    }

    if (progressRemaining) {
      progressRemaining.textContent =
        total - count;
    }

    if (progressText) {
      progressText.textContent =
        `${total} lessons ထဲမှ ${count} lessons ပြီးဆုံးထားပါသည်။`;
    }


    const progressRing =
      get("progressRing");

    if (progressRing) {

      progressRing.style.setProperty(
        "--progress",
        percentage
      );

    }

  }


  /* =======================================================
     SALES MANAGER
  ======================================================= */

  function renderSalesManager() {

    const container =
      get("salesManagerContent");

    if (!container) {
      return;
    }

    container.innerHTML = `

      <div class="stats-grid">

        <div class="stat-card">
          <div class="stat-icon purple">🎯</div>
          <div>
            <span>Monthly Target</span>
            <strong>100%</strong>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon green">📈</div>
          <div>
            <span>Achievement</span>
            <strong>0%</strong>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon orange">👥</div>
          <div>
            <span>Team</span>
            <strong>Sales Team</strong>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon pink">🚚</div>
          <div>
            <span>Execution</span>
            <strong>Active</strong>
          </div>
        </div>

      </div>

      <div class="section-header">
        <div>
          <h2>Sales Management Framework</h2>
          <p>Target → People → Execution → Result</p>
        </div>
      </div>

      <div class="learning-grid">

        <div class="learning-card">
          <span>🎯</span>
          <strong>Target Planning</strong>
          <small>Monthly / Weekly / Daily Target</small>
        </div>

        <div class="learning-card">
          <span>👥</span>
          <strong>People Management</strong>
          <small>Coaching & Performance Review</small>
        </div>

        <div class="learning-card">
          <span>📍</span>
          <strong>Field Execution</strong>
          <small>Coverage / Productivity / PJP</small>
        </div>

        <div class="learning-card">
          <span>📊</span>
          <strong>KPI Analysis</strong>
          <small>Achievement / Gap / Action Plan</small>
        </div>

      </div>

    `;

  }


  /* =======================================================
     REPORTS
  ======================================================= */

  function renderReports() {

    const container =
      get("reportsContent");

    if (!container) {
      return;
    }

    const completed =
      getCompletedLessons().length;

    const progress =
      Math.round(
        (completed / lessons.length) * 100
      );


    container.innerHTML = `

      <div class="stats-grid">

        <div class="stat-card">
          <div class="stat-icon purple">📚</div>
          <div>
            <span>Total Lessons</span>
            <strong>${lessons.length}</strong>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon green">✓</div>
          <div>
            <span>Completed</span>
            <strong>${completed}</strong>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon orange">◔</div>
          <div>
            <span>Progress</span>
            <strong>${progress}%</strong>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon pink">🎓</div>
          <div>
            <span>Courses</span>
            <strong>${courses.length}</strong>
          </div>
        </div>

      </div>

      <div class="course-feature-card">

        <div class="course-info">

          <span class="course-label">
            LEARNING PERFORMANCE
          </span>

          <h2>
            Your Academy Progress
          </h2>

          <p>
            သင်ယူမှုကို ဆက်လက်လုပ်ဆောင်ပြီး
            Business Skill ကို တိုးတက်အောင်လုပ်ပါ။
          </p>

          <div class="progress-line">
            <div style="width:${progress}%"></div>
          </div>

          <div class="course-meta">

            <span>
              ${completed} / ${lessons.length} lessons
            </span>

            <button
              type="button"
              class="primary-btn small"
              data-page="lessonsPage">
              Continue Learning →
            </button>

          </div>

        </div>

      </div>

    `;

  }


  /* =======================================================
     CALCULATORS
  ======================================================= */

  function calculatorContent(type) {

    if (type === "profit") {

      return `
        <div class="modal-content-inner">

          <h2>💰 Profit Calculator</h2>

          <label>Revenue</label>
          <input id="calcRevenue" type="number" placeholder="0">

          <label style="display:block;margin-top:12px;">
            Total Cost
          </label>

          <input id="calcCost" type="number" placeholder="0">

          <button
            type="button"
            class="primary-btn"
            style="margin-top:18px;"
            data-calc-action="profit">
            Calculate
          </button>

          <div
            id="calcResult"
            style="margin-top:18px;">
          </div>

        </div>
      `;

    }


    if (type === "pricing") {

      return `
        <div class="modal-content-inner">

          <h2>🏷️ Pricing Calculator</h2>

          <label>Cost</label>
          <input id="calcCost" type="number" placeholder="0">

          <label style="display:block;margin-top:12px;">
            Target Margin %
          </label>

          <input
            id="calcMargin"
            type="number"
            placeholder="20">

          <button
            type="button"
            class="primary-btn"
            style="margin-top:18px;"
            data-calc-action="pricing">
            Calculate
          </button>

          <div
            id="calcResult"
            style="margin-top:18px;">
          </div>

        </div>
      `;

    }


    if (type === "break-even") {

      return `
        <div class="modal-content-inner">

          <h2>⚖️ Break-even Calculator</h2>

          <label>Fixed Cost</label>
          <input id="calcFixed" type="number" placeholder="0">

          <label style="display:block;margin-top:12px;">
            Selling Price per Unit
          </label>

          <input id="calcPrice" type="number" placeholder="0">

          <label style="display:block;margin-top:12px;">
            Variable Cost per Unit
          </label>

          <input id="calcVariable" type="number" placeholder="0">

          <button
            type="button"
            class="primary-btn"
            style="margin-top:18px;"
            data-calc-action="break-even">
            Calculate
          </button>

          <div
            id="calcResult"
            style="margin-top:18px;">
          </div>

        </div>
      `;

    }


    return `
      <div class="modal-content-inner">

        <h2>🎯 Sales Target Calculator</h2>

        <label>Monthly Target</label>

        <input
          id="calcTarget"
          type="number"
          placeholder="0">

        <label style="display:block;margin-top:12px;">
          Working Days
        </label>

        <input
          id="calcDays"
          type="number"
          value="26">

        <button
          type="button"
          class="primary-btn"
          style="margin-top:18px;"
          data-calc-action="sales-target">
          Calculate
        </button>

        <div
          id="calcResult"
          style="margin-top:18px;">
        </div>

      </div>
    `;

  }


  function openCalculator(type) {

    openModal(
      calculatorContent(type)
    );

  }


  function calculate(type) {

    const result =
      get("calcResult");

    if (!result) {
      return;
    }


    if (type === "profit") {

      const revenue =
        Number(get("calcRevenue")?.value || 0);

      const cost =
        Number(get("calcCost")?.value || 0);

      const profit =
        revenue - cost;

      const margin =
        revenue > 0
          ? (profit / revenue) * 100
          : 0;

      result.innerHTML = `
        <strong>Profit: ${profit.toLocaleString()}</strong>
        <br>
        Margin: ${margin.toFixed(2)}%
      `;

      return;

    }


    if (type === "pricing") {

      const cost =
        Number(get("calcCost")?.value || 0);

      const margin =
        Number(get("calcMargin")?.value || 0);

      if (margin >= 100) {

        result.textContent =
          "Margin must be less than 100%.";

        return;

      }

      const price =
        cost / (1 - margin / 100);

      result.innerHTML = `
        <strong>
          Recommended Selling Price:
          ${price.toLocaleString(undefined, {
            maximumFractionDigits: 2
          })}
        </strong>
      `;

      return;

    }


    if (type === "break-even") {

      const fixed =
        Number(get("calcFixed")?.value || 0);

      const price =
        Number(get("calcPrice")?.value || 0);

      const variable =
        Number(get("calcVariable")?.value || 0);

      const contribution =
        price - variable;

      if (contribution <= 0) {

        result.textContent =
          "Selling Price must be greater than Variable Cost.";

        return;

      }

      const units =
        fixed / contribution;

      result.innerHTML = `
        <strong>
          Break-even Units:
          ${Math.ceil(units).toLocaleString()}
        </strong>
      `;

      return;

    }


    if (type === "sales-target") {

      const target =
        Number(get("calcTarget")?.value || 0);

      const days =
        Number(get("calcDays")?.value || 0);

      if (days <= 0) {

        result.textContent =
          "Working Days must be greater than 0.";

        return;

      }

      const daily =
        target / days;

      result.innerHTML = `
        <strong>
          Daily Target:
          ${daily.toLocaleString(undefined, {
            maximumFractionDigits: 2
          })}
        </strong>
      `;

    }

  }


  /* =======================================================
     AI BUSINESS COACH
  ======================================================= */

  function getAIResponse(message) {

    const text =
      message.toLowerCase();


    if (
      text.includes("target") ||
      text.includes("sales")
    ) {

      return `
        Sales Target မပြည့်ရင် ပထမဆုံး
        Target Gap ကို ခွဲခြမ်းပါ။

        ① People — Team Performance
        ② Numbers — Achievement / Gap
        ③ Execution — Customer Coverage / Visit
        ④ Action — Daily Action Plan

        Manager အနေနဲ့ Target ကို Field Execution
        အဖြစ် ပြောင်းလဲနိုင်ဖို့ အရေးကြီးပါတယ်။
      `;

    }


    if (
      text.includes("team") ||
      text.includes("performance")
    ) {

      return `
        Team Performance တိုးတက်ဖို့
        Clear Expectation → Coaching →
        Regular Review → Feedback →
        Accountability ဆိုတဲ့ Process ကို အသုံးပြုပါ။

        Micromanagement မလုပ်ဘဲ Ownership ပေးပြီး
        Performance ကို တိုင်းတာပါ။
      `;

    }


    if (
      text.includes("profit") ||
      text.includes("margin")
    ) {

      return `
        Profit တိုးတက်ဖို့ Revenue တစ်ခုတည်း
        မကြည့်ဘဲ Margin ကိုပါ စောင့်ကြည့်ပါ။

        Revenue − Cost = Profit

        Profit Margin =
        Profit ÷ Revenue × 100
      `;

    }


    if (
      text.includes("interview") ||
      text.includes("အင်တာဗျူး")
    ) {

      return `
        Sales Manager Interview အတွက်
        People, Numbers နဲ့ Execution
        သုံးပိုင်းနဲ့ ဖြေဆိုနိုင်ပါတယ်။

        Target → Analysis → Coaching →
        Action Plan → Result ဆိုတဲ့ Structure
        ကို အသုံးပြုပါ။
      `;

    }


    return `
      သင့်မေးခွန်းကို Business အမြင်နဲ့
      ခွဲခြမ်းစဉ်းစားပါမယ်။

      Goal ကို ရှင်းလင်းသတ်မှတ်ပြီး
      Current Situation → Root Cause →
      Action Plan → KPI → Review
      အဖြစ် ဆက်လက်စီမံပါ။

      Sales, Marketing, Leadership,
      Finance နဲ့ Strategy အကြောင်း
      ဆက်မေးနိုင်ပါတယ်။
    `;

  }


  function sendAIMessage() {

    const input =
      get("aiInput");

    const chat =
      get("chatMessages");

    if (!input || !chat) {
      return;
    }

    const message =
      input.value.trim();

    if (!message) {

      showToast(
        "Business question တစ်ခု မေးပါ။"
      );

      return;

    }


    const userMessage =
      document.createElement("div");

    userMessage.className =
      "chat-message user";

    userMessage.innerHTML = `
      <div class="chat-avatar">
        👤
      </div>

      <div class="message-content">
        <strong>You</strong>
        <p>${escapeHTML(message)}</p>
      </div>
    `;

    chat.appendChild(userMessage);


    const response =
      getAIResponse(message);


    const aiMessage =
      document.createElement("div");

    aiMessage.className =
      "chat-message ai";

    aiMessage.innerHTML = `
      <div class="chat-avatar">
        🤖
      </div>

      <div class="message-content">

        <strong>
          Aung AI Business Coach
        </strong>

        <p>
          ${escapeHTML(response)}
        </p>

      </div>
    `;

    chat.appendChild(aiMessage);


    input.value = "";

    chat.scrollTop =
      chat.scrollHeight;

  }


  window.sendAIMessage =
    sendAIMessage;


  /* =======================================================
     MODAL
  ======================================================= */

  function openModal(html) {

    const overlay =
      get("modalOverlay");

    const body =
      get("modalBody");

    if (!overlay || !body) {
      return;
    }

    body.innerHTML = html;

    overlay.classList.add("show");

    overlay.style.display =
      "flex";

  }


  window.openModal =
    openModal;


  function closeModal() {

    const overlay =
      get("modalOverlay");

    if (!overlay) {
      return;
    }

    overlay.classList.remove("show");

    overlay.style.display =
      "none";

  }


  window.closeModal =
    closeModal;


  /* =======================================================
     PROFILE
  ======================================================= */

  function openProfile() {

    openModal(`

      <div class="modal-content-inner">

        <span class="eyebrow">
          MY PROFILE
        </span>

        <h2>
          Aung Zar Ni Win
        </h2>

        <p>
          <strong>Position:</strong>
          Business Manager
        </p>

        <p>
          <strong>Academy:</strong>
          Aung Business Academy
        </p>

        <p>
          <strong>Learning Goal:</strong>
          30 minutes per day
        </p>

      </div>

    `);

  }


  /* =======================================================
     TOAST
  ======================================================= */

  function showToast(message) {

    const toast =
      get("toast");

    if (!toast) {
      return;
    }

    toast.textContent =
      message;

    toast.classList.add("show");

    clearTimeout(
      window.__abaToastTimer
    );

    window.__abaToastTimer =
      setTimeout(function () {

        toast.classList.remove("show");

      }, 2500);

  }


  window.showToast =
    showToast;


  /* =======================================================
     MOBILE MENU
  ======================================================= */

  function setupMobileMenu() {

    const button =
      get("mobileMenu");

    const sidebar =
      get("sidebar");

    const overlay =
      get("sidebarOverlay");

    if (!button || !sidebar) {
      return;
    }


    button.addEventListener(
      "click",
      function (event) {

        event.preventDefault();

        sidebar.classList.toggle("open");

        if (overlay) {

          overlay.classList.toggle(
            "show",
            sidebar.classList.contains("open")
          );

        }

      }
    );


    if (overlay) {

      overlay.addEventListener(
        "click",
        function () {

          sidebar.classList.remove("open");

          overlay.classList.remove("show");

        }
      );

    }

  }


  /* =======================================================
     SEARCH
  ======================================================= */

  function setupSearch() {

    const globalSearch =
      get("globalSearch");

    const lessonSearch =
      get("lessonSearch");


    if (globalSearch) {

      globalSearch.addEventListener(
        "keydown",
        function (event) {

          if (event.key !== "Enter") {
            return;
          }

          const value =
            globalSearch.value.trim();

          navigate("lessonsPage");

          currentLessonSearch =
            value;

          renderLessons();

        }
      );

    }


    if (lessonSearch) {

      lessonSearch.addEventListener(
        "input",
        function () {

          currentLessonSearch =
            lessonSearch.value.trim();

          renderLessons();

        }
      );

    }

  }


  /* =======================================================
     NOTIFICATION
  ======================================================= */

  function setupNotification() {

    const button =
      get("notificationBtn");

    if (!button) {
      return;
    }

    button.addEventListener(
      "click",
      function () {

        showToast(
          "လက်ရှိ Notification အသစ် မရှိသေးပါ။"
        );

      }
    );

  }


  /* =======================================================
     KEYBOARD
  ======================================================= */

  function setupKeyboard() {

    document.addEventListener(
      "keydown",
      function (event) {

        if (event.key === "Escape") {
          closeModal();
        }

      }
    );

  }


  /* =======================================================
     GLOBAL CLICK HANDLER
     ONE CENTRAL HANDLER
  ======================================================= */

  function setupGlobalClicks() {

    document.addEventListener(
      "click",
      function (event) {

        const element =
          event.target.closest(
            "button, [data-page], [data-action], [data-category], [data-calculator], [data-prompt], [data-ai-tool], [data-lesson], [data-complete-lesson], [data-calc-action], [data-course]"
          );


        if (!element) {
          return;
        }


        /* ===============================================
           PAGE NAVIGATION
        =============================================== */

        const page =
          element.getAttribute("data-page");

        if (page) {

          event.preventDefault();

          navigate(page);

          return;

        }


        /* ===============================================
           ACTIONS
        =============================================== */

        const action =
          element.getAttribute("data-action");

        if (action === "lessons") {

          event.preventDefault();

          navigate("lessonsPage");

          return;

        }


        if (action === "profile") {

          event.preventDefault();

          openProfile();

          return;

        }


        /* ===============================================
           CATEGORY
        =============================================== */

        const category =
          element.getAttribute("data-category");

        if (
          category &&
          element.classList.contains("learning-card")
        ) {

          event.preventDefault();

          navigate("lessonsPage");

          currentLessonFilter =
            category;

          setTimeout(function () {

            setLessonFilter(category);

          }, 50);

          return;

        }


        /* ===============================================
           CALCULATOR
        =============================================== */

        const calculator =
          element.getAttribute(
            "data-calculator"
          );

        if (calculator) {

          event.preventDefault();

          openCalculator(calculator);

          return;

        }


        /* ===============================================
           LESSON
        =============================================== */

        const lessonId =
          element.getAttribute(
            "data-lesson"
          );

        if (lessonId) {

          event.preventDefault();

          openLesson(lessonId);

          return;

        }


        /* ===============================================
           COMPLETE LESSON
        =============================================== */

        const completeLesson =
          element.getAttribute(
            "data-complete-lesson"
          );

        if (completeLesson) {

          event.preventDefault();

          toggleLesson(
            completeLesson
          );

          closeModal();

          return;

        }


        /* ===============================================
           FILTER
        =============================================== */

        const filter =
          element.getAttribute(
            "data-filter"
          );

        if (
          filter &&
          element.classList.contains("filter-btn")
        ) {

          event.preventDefault();

          setLessonFilter(filter);

          return;

        }


        /* ===============================================
           AI PROMPT
        =============================================== */

        const prompt =
          element.getAttribute(
            "data-prompt"
          );

        if (prompt) {

          event.preventDefault();

          navigate("aiPage");

          const input =
            get("aiInput");

          if (input) {

            input.value =
              prompt;

            input.focus();

          }

          return;

        }


        /* ===============================================
           AI TOOL
        =============================================== */

        const aiTool =
          element.getAttribute(
            "data-ai-tool"
          );

        if (aiTool) {

          event.preventDefault();

          openAITool(aiTool);

          return;

        }


        /* ===============================================
           CALCULATOR ACTION
        =============================================== */

        const calcAction =
          element.getAttribute(
            "data-calc-action"
          );

        if (calcAction) {

          event.preventDefault();

          calculate(calcAction);

          return;

        }


        /* ===============================================
           COURSE
        =============================================== */

        const courseId =
          element.getAttribute(
            "data-course"
          );

        if (courseId) {

          event.preventDefault();

          navigate("lessonsPage");

          showToast(
            "Course ကို စတင်လေ့လာနိုင်ပါပြီ။"
          );

          return;

        }

      },
      false
    );

  }


  /* =======================================================
     AI TOOL
  ======================================================= */

  function openAITool(tool) {

    let title =
      "AI Business Tool";

    let content =
      "Business decision များအတွက် အသုံးပြုနိုင်သော Tool ဖြစ်ပါသည်။";


    if (
      String(tool)
        .toLowerCase()
        .includes("sales")
    ) {

      title =
        "🎯 Sales Strategy Advisor";

      content =
        "Sales Target → Customer Coverage → Team Execution → KPI Review → Action Plan အဖြစ် စီမံနိုင်ပါသည်.";

    }

    else if (
      String(tool)
        .toLowerCase()
        .includes("team")
    ) {

      title =
        "👥 Team Coach";

      content =
        "Clear Expectation → Coaching → Review → Feedback → Accountability Framework ကို အသုံးပြုပါ.";

    }

    else if (
      String(tool)
        .toLowerCase()
        .includes("marketing")
    ) {

      title =
        "📣 Marketing Advisor";

      content =
        "Customer Segment, Brand Positioning, Promotion နဲ့ Marketing Execution ကို စီစဉ်နိုင်ပါသည်.";

    }

    else if (
      String(tool)
        .toLowerCase()
        .includes("problem")
    ) {

      title =
        "🧠 Business Problem Solver";

      content =
        "Problem → Root Cause → Options → Action Plan → KPI → Review အဖြစ် ခွဲခြမ်းစဉ်းစားပါ.";

    }


    openModal(`

      <div class="modal-content-inner">

        <span class="eyebrow">
          AI BUSINESS TOOL
        </span>

        <h2>
          ${escapeHTML(title)}
        </h2>

        <p>
          ${escapeHTML(content)}
        </p>

      </div>

    `);

  }


  /* =======================================================
     AI SEND BUTTON
  ======================================================= */

  function setupAI() {

    const send =
      get("aiSend");

    const input =
      get("aiInput");

    if (send) {

      send.addEventListener(
        "click",
        function () {

          sendAIMessage();

        }
      );

    }


    if (input) {

      input.addEventListener(
        "keydown",
        function (event) {

          if (
            event.key === "Enter" &&
            !event.shiftKey
          ) {

            event.preventDefault();

            sendAIMessage();

          }

        }
      );

    }

  }


  /* =======================================================
     CLICK REPAIR CSS
  ======================================================= */

  function installSafeCSS() {

    if (get("abaSafeCSS")) {
      return;
    }

    const style =
      document.createElement("style");

    style.id =
      "abaSafeCSS";

    style.textContent = `

      html,
      body,
      .app {
        pointer-events: auto;
      }

      button,
      input,
      select,
      textarea,
      a {
        pointer-events: auto;
      }

      .modal-overlay:not(.show) {
        pointer-events: none !important;
      }

      .modal-overlay.show {
        pointer-events: auto !important;
      }

      .sidebar-overlay:not(.show) {
        pointer-events: none !important;
      }

      .sidebar-overlay.show {
        pointer-events: auto !important;
      }

      .page {
        pointer-events: auto;
      }

    `;

    document.head.appendChild(style);

  }


  /* =======================================================
     INITIALIZE
  ======================================================= */

  function initialize() {

    try {

      installSafeCSS();

      setupGlobalClicks();

      setupMobileMenu();

      setupSearch();

      setupNotification();

      setupKeyboard();

      setupAI();


      /* Initial rendering */

      renderCourses();

      renderLessons();

      updateProgress();

      renderSalesManager();

      renderReports();


      /* Modal closed initially */

      const overlay =
        get("modalOverlay");

      if (overlay) {

        overlay.classList.remove("show");

        overlay.style.display =
          "none";

      }


      /* Dashboard */

      navigate("dashboardPage");


      console.log(
        "Aung Business Academy V9.0 initialized successfully."
      );

    } catch (error) {

      /*
       * IMPORTANT:
       * Never destroy the existing HTML if one
       * optional function has an error.
       */

      console.error(
        "Aung Business Academy initialization error:",
        error
      );

      /*
       * Keep Dashboard visible.
       */

      const dashboard =
        get("dashboardPage");

      if (dashboard) {

        document
          .querySelectorAll(".page")
          .forEach(function (page) {

            page.classList.remove("active");

          });

        dashboard.classList.add("active");

      }

    }

  }


  /* =======================================================
     START
  ======================================================= */

  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      initialize
    );

  } else {

    initialize();

  }

})();
