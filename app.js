/* =========================================================
   AUNG BUSINESS ACADEMY V8.0
   COMPLETE APP.JS
   Dashboard + Lessons + Progress + Navigation
   ========================================================= */

(function () {
  "use strict";

  /* =========================================================
     1. GLOBAL STATE
     ========================================================= */

  const APP_NAME = "Aung Business Academy";

  const STORAGE_KEYS = {
    completed: "aba_completed_lessons",
    currentLesson: "aba_current_lesson",
    lastSection: "aba_last_section",
    dailyMinutes: "aba_daily_minutes",
    userName: "aba_user_name"
  };

  let lessons = [];
  let completedLessons = [];
  let currentLessonIndex = 0;
  let currentSection = "dashboard";

  /* =========================================================
     2. DEFAULT LESSONS
     ========================================================= */

  const defaultLessons = [
    {
      title: "Sales Management ဆိုတာဘာလဲ",
      intro: "Sales Manager တစ်ယောက်အနေနဲ့ Sales Management ရဲ့ အခြေခံအဓိပ္ပါယ်ကို နားလည်ရန်။",
      body: `
        <h3>Sales Management ဆိုတာဘာလဲ</h3>
        <p>
          Sales Management ဆိုတာ Sales Team၊ Customer၊ Target၊ Distribution၊
          Market Execution နဲ့ Revenue တို့ကို စနစ်တကျ စီမံခန့်ခွဲပြီး
          Business Result ရရှိအောင် ဦးဆောင်ခြင်းဖြစ်ပါတယ်။
        </p>

        <p>
          Sales Manager တစ်ယောက်ရဲ့ အဓိကတာဝန်က Target ပေးပြီး စောင့်ကြည့်ရုံမဟုတ်ပါဘူး။
          လူ၊ နံပါတ်နဲ့ Execution သုံးခုကို ချိတ်ဆက်ပြီး Result ထွက်အောင်
          စီမံခန့်ခွဲနိုင်ရပါမယ်။
        </p>

        <h3>Sales Manager ရဲ့ အဓိကတာဝန်များ</h3>

        <ul>
          <li>Sales Target သတ်မှတ်ခြင်း</li>
          <li>KPI သတ်မှတ်ခြင်း</li>
          <li>Sales Team ကို Coaching လုပ်ခြင်း</li>
          <li>Customer Management</li>
          <li>Distribution Management</li>
          <li>Market Execution စောင့်ကြည့်ခြင်း</li>
          <li>Sales Forecast ပြုလုပ်ခြင်း</li>
          <li>Sales Report ခွဲခြမ်းစိတ်ဖြာခြင်း</li>
        </ul>

        <div class="lesson-note">
          <strong>Manager Mindset:</strong>
          Target ကို ရောက်အောင်လုပ်တာထက်
          Team က Target ကို သူတို့ကိုယ်တိုင် ရောက်အောင်လုပ်နိုင်တဲ့
          System တစ်ခုတည်ဆောက်ပေးနိုင်ခြင်းက ပိုအရေးကြီးပါတယ်။
        </div>
      `
    },

    {
      title: "Sales Target Management",
      intro: "Target ကို Field Execution အဖြစ် ပြောင်းလဲအသုံးချနည်း။",
      body: `
        <h3>Sales Target Management</h3>

        <p>
          Sales Target ဆိုတာ လစဉ်ရောင်းရမယ့် နံပါတ်တစ်ခုတည်း မဟုတ်ပါဘူး။
          Target ကို Daily၊ Weekly နဲ့ Monthly Execution အဖြစ် ခွဲပြီး
          Team တစ်ခုလုံး နားလည်အောင် ပြောင်းလဲပေးရပါတယ်။
        </p>

        <h3>Target ခွဲနည်း</h3>

        <ol>
          <li>Monthly Target သတ်မှတ်ပါ။</li>
          <li>Weekly Target ခွဲပါ။</li>
          <li>Daily Run Rate သတ်မှတ်ပါ။</li>
          <li>Salesperson တစ်ဦးချင်း Target ခွဲပါ။</li>
          <li>Channel အလိုက် Target ခွဲပါ။</li>
        </ol>

        <p>
          Target မပြည့်ရင် "Target မပြည့်ဘူး" လို့ ပြောရုံမလုံလောက်ပါဘူး။
          ဘယ် Product၊ ဘယ် Area၊ ဘယ် Customer၊ ဘယ် Salesperson မှာ
          Gap ဖြစ်နေတာလဲဆိုတာ ရှာဖွေရပါမယ်။
        </p>

        <div class="lesson-note">
          Target → Gap → Action → Follow-up → Result
        </div>
      `
    },

    {
      title: "KPI Management",
      intro: "Sales Team အတွက် KPI ကို မှန်ကန်စွာ သတ်မှတ်ခြင်း။",
      body: `
        <h3>KPI Management</h3>

        <p>
          KPI ဆိုတာ Key Performance Indicator ဖြစ်ပြီး
          Employee တစ်ဦးရဲ့ Performance ကို တိုင်းတာနိုင်တဲ့
          အဓိကတိုင်းတာချက်ဖြစ်ပါတယ်။
        </p>

        <h3>Sales KPI ဥပမာများ</h3>

        <ul>
          <li>Sales Achievement %</li>
          <li>Volume Achievement</li>
          <li>Revenue Achievement</li>
          <li>Active Customers</li>
          <li>Strike Rate</li>
          <li>Productivity</li>
          <li>Distribution</li>
          <li>Collection / AR</li>
        </ul>

        <p>
          KPI များလွန်းရင် Team အတွက် ရှုပ်ထွေးနိုင်ပါတယ်။
          Business Result ကို တကယ်သက်ရောက်စေတဲ့ KPI များကို
          ရွေးချယ်ပြီး Regular Review ပြုလုပ်သင့်ပါတယ်။
        </p>

        <div class="lesson-note">
          KPI က လူကို ဖိအားပေးဖို့မဟုတ်ပါ။
          Performance Gap ကို ရှာဖွေပြီး တိုးတက်အောင် Coaching လုပ်ဖို့ ဖြစ်ပါတယ်။
        </div>
      `
    }
  ];

  /* =========================================================
     3. LOAD LESSON DATA
     ========================================================= */

  function loadLessons() {

    try {

      if (
        Array.isArray(window.academyLessons) &&
        window.academyLessons.length > 0
      ) {
        lessons = window.academyLessons.slice();
      }

      else if (
        Array.isArray(window.academyLongLessons) &&
        window.academyLongLessons.length > 0
      ) {
        lessons = window.academyLongLessons.slice();
      }

      else if (
        Array.isArray(window.longLessons) &&
        window.longLessons.length > 0
      ) {
        lessons = window.longLessons.slice();
      }

      else {
        lessons = defaultLessons.slice();
      }

    } catch (error) {

      console.error("Lesson loading error:", error);
      lessons = defaultLessons.slice();

    }

    lessons = lessons.map(function (lesson, index) {

      return {
        id: lesson.id || index + 1,
        title: lesson.title || "Lesson " + (index + 1),
        intro: lesson.intro || "",
        body:
          lesson.body ||
          lesson.content ||
          lesson.description ||
          "<p>ဒီ Lesson အတွက် Content မထည့်ရသေးပါ။</p>"
      };

    });

  }

  /* =========================================================
     4. STORAGE
     ========================================================= */

  function loadCompletedLessons() {

    try {

      const saved = localStorage.getItem(STORAGE_KEYS.completed);

      if (saved) {

        const parsed = JSON.parse(saved);

        if (Array.isArray(parsed)) {
          completedLessons = parsed.map(Number);
        }

      }

    } catch (error) {

      console.error("Completed lesson storage error:", error);
      completedLessons = [];

    }

  }

  function saveCompletedLessons() {

    try {

      localStorage.setItem(
        STORAGE_KEYS.completed,
        JSON.stringify(completedLessons)
      );

    } catch (error) {

      console.error("Unable to save progress:", error);

    }

  }

  function saveCurrentLesson() {

    try {

      localStorage.setItem(
        STORAGE_KEYS.currentLesson,
        String(currentLessonIndex)
      );

    } catch (error) {}

  }

  function loadCurrentLesson() {

    try {

      const saved = localStorage.getItem(
        STORAGE_KEYS.currentLesson
      );

      if (saved !== null) {

        const index = parseInt(saved, 10);

        if (
          !isNaN(index) &&
          index >= 0 &&
          index < lessons.length
        ) {
          currentLessonIndex = index;
        }

      }

    } catch (error) {}

  }

  /* =========================================================
     5. BASIC DOM HELPERS
     ========================================================= */

  function byId(id) {
    return document.getElementById(id);
  }

  function qs(selector, parent) {
    return (parent || document).querySelector(selector);
  }

  function qsa(selector, parent) {
    return Array.from(
      (parent || document).querySelectorAll(selector)
    );
  }

  function escapeHTML(value) {

    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  }

  /* =========================================================
     6. PROGRESS FUNCTIONS
     ========================================================= */

  function isLessonCompleted(index) {

    return completedLessons.includes(index);

  }

  function getCompletedCount() {

    return completedLessons.length;

  }

  function getProgressPercent() {

    if (!lessons.length) {
      return 0;
    }

    return Math.round(
      (getCompletedCount() / lessons.length) * 100
    );

  }

  function markLessonCompleted(index) {

    if (
      index < 0 ||
      index >= lessons.length
    ) {
      return;
    }

    if (!completedLessons.includes(index)) {

      completedLessons.push(index);

      completedLessons.sort(function (a, b) {
        return a - b;
      });

      saveCompletedLessons();

    }

    updateAllProgressUI();
    renderLesson();

  }

  function markLessonIncomplete(index) {

    completedLessons = completedLessons.filter(
      function (item) {
        return item !== index;
      }
    );

    saveCompletedLessons();

    updateAllProgressUI();
    renderLesson();

  }

  /* =========================================================
     7. SECTION NAVIGATION
     ========================================================= */

  function showSection(sectionName) {

    currentSection = sectionName;

    try {
      localStorage.setItem(
        STORAGE_KEYS.lastSection,
        sectionName
      );
    } catch (error) {}

    closeMobileSidebar();

    const sections = qsa(
      "[data-section], .app-section, .page-section"
    );

    let found = false;

    sections.forEach(function (section) {

      const name =
        section.dataset.section ||
        section.id ||
        "";

      if (
        name.toLowerCase() ===
        sectionName.toLowerCase()
      ) {

        section.style.display = "";
        section.classList.add("active");
        found = true;

      } else {

        section.style.display = "none";
        section.classList.remove("active");

      }

    });

    /*
      If the original HTML does not use
      data-section, create / use our own main container.
    */

    if (!found) {

      renderDynamicSection(sectionName);

    }

    updateNavigationActive(sectionName);

    updateDashboard();

  }

  function updateNavigationActive(sectionName) {

    qsa(
      "[data-section-link], [data-nav], .nav-link, .sidebar-link"
    ).forEach(function (link) {

      const target =
        link.dataset.sectionLink ||
        link.dataset.nav ||
        link.dataset.target ||
        link.getAttribute("href") ||
        "";

      const cleanTarget = target
        .replace("#", "")
        .trim()
        .toLowerCase();

      if (
        cleanTarget ===
        sectionName.toLowerCase()
      ) {

        link.classList.add("active");

      } else {

        link.classList.remove("active");

      }

    });

  }

  /* =========================================================
     8. DYNAMIC SECTION
     ========================================================= */

  function getMainContentContainer() {

    let container =
      byId("app-content") ||
      byId("main-content") ||
      byId("content") ||
      qs("main");

    if (!container) {

      container = document.createElement("main");

      container.id = "app-content";

      document.body.appendChild(container);

    }

    return container;

  }

  function renderDynamicSection(sectionName) {

    const container =
      getMainContentContainer();

    switch (sectionName) {

      case "dashboard":
        renderDashboard(container);
        break;

      case "lessons":
        renderLessonsPage(container);
        break;

      case "my-lessons":
        renderLessonsPage(container);
        break;

      case "progress":
        renderProgressPage(container);
        break;

      case "sales":
      case "sales-manager":
        renderSalesManager(container);
        break;

      case "pricing":
      case "pricing-calculator":
        renderPricingCalculator(container);
        break;

      case "reports":
        renderReports(container);
        break;

      case "ai":
      case "ai-coach":
      case "ai-business-coach":
        renderAIBusinessCoach(container);
        break;

      case "ai-tools":
        renderAITools(container);
        break;

      case "settings":
        renderSettings(container);
        break;

      case "courses":
      case "my-courses":
        renderCourses(container);
        break;

      default:
        renderDashboard(container);
        break;

    }

  }

  /* =========================================================
     9. DASHBOARD
     ========================================================= */

  function renderDashboard(container) {

    const completed = getCompletedCount();
    const total = lessons.length;
    const percent = getProgressPercent();

    const nextLessonIndex =
      findNextIncompleteLesson();

    let nextLessonText =
      "သင်ခန်းစာများ အားလုံးပြီးဆုံးပါပြီ 🎉";

    if (nextLessonIndex !== -1) {

      nextLessonText =
        lessons[nextLessonIndex].title;

    }

    container.innerHTML = `

      <div class="aba-dashboard">

        <div class="aba-page-header">

          <div>
            <h1>Dashboard</h1>

            <p>
              Aung Business Academy မှာ
              သင့်ရဲ့ Business Learning Progress ကို
              ဒီနေရာကနေ စောင့်ကြည့်နိုင်ပါတယ်။
            </p>
          </div>

        </div>

        <div class="aba-stats-grid">

          <div class="aba-stat-card">
            <div class="aba-stat-icon">📚</div>
            <div>
              <strong>${total}</strong>
              <span>Total Lessons</span>
            </div>
          </div>

          <div class="aba-stat-card">
            <div class="aba-stat-icon">✅</div>
            <div>
              <strong>${completed}</strong>
              <span>Completed</span>
            </div>
          </div>

          <div class="aba-stat-card">
            <div class="aba-stat-icon">📈</div>
            <div>
              <strong>${percent}%</strong>
              <span>Progress</span>
            </div>
          </div>

          <div class="aba-stat-card">
            <div class="aba-stat-icon">🎯</div>
            <div>
              <strong>30</strong>
              <span>Daily Goal (min)</span>
            </div>
          </div>

        </div>

        <div class="aba-dashboard-card">

          <div class="aba-card-header">

            <div>
              <h2>Sales Management Mastery</h2>

              <p>
                Professional Sales Manager Course
              </p>
            </div>

            <span class="aba-progress-number">
              ${percent}%
            </span>

          </div>

          <div class="aba-progress-track">

            <div
              class="aba-progress-fill"
              style="width:${percent}%"
            ></div>

          </div>

          <div class="aba-progress-meta">

            <span>
              ${completed} / ${total} Lessons Completed
            </span>

            <span>
              ${percent}%
            </span>

          </div>

        </div>

        <div class="aba-dashboard-card">

          <div class="aba-card-header">

            <div>

              <h2>Continue Learning</h2>

              <p>
                ${escapeHTML(nextLessonText)}
              </p>

            </div>

          </div>

          <button
            class="aba-primary-btn"
            id="dashboardContinueBtn"
          >
            ${nextLessonIndex === -1
              ? "Review Lessons"
              : "Continue Lesson"}
          </button>

        </div>

        <div class="aba-dashboard-card">

          <div class="aba-card-header">

            <div>
              <h2>Quick Access</h2>
              <p>Business tools နှင့် learning sections</p>
            </div>

          </div>

          <div class="aba-quick-grid">

            <button class="aba-quick-btn" data-quick="lessons">
              📚
              <span>Lessons</span>
            </button>

            <button class="aba-quick-btn" data-quick="progress">
              📊
              <span>My Progress</span>
            </button>

            <button class="aba-quick-btn" data-quick="sales-manager">
              👔
              <span>Sales Manager</span>
            </button>

            <button class="aba-quick-btn" data-quick="pricing-calculator">
              🧮
              <span>Pricing Calculator</span>
            </button>

            <button class="aba-quick-btn" data-quick="ai-business-coach">
              🤖
              <span>AI Business Coach</span>
            </button>

            <button class="aba-quick-btn" data-quick="settings">
              ⚙️
              <span>Settings</span>
            </button>

          </div>

        </div>

      </div>
    `;

    const continueBtn =
      byId("dashboardContinueBtn");

    if (continueBtn) {

      continueBtn.addEventListener(
        "click",
        function () {

          if (nextLessonIndex !== -1) {

            currentLessonIndex =
              nextLessonIndex;

          }

          showSection("lessons");

          setTimeout(function () {
            renderLesson();
          }, 50);

        }
      );

    }

    qsa("[data-quick]").forEach(function (button) {

      button.addEventListener(
        "click",
        function () {

          showSection(
            button.dataset.quick
          );

        }
      );

    });

  }

  function updateDashboard() {

    if (
      currentSection === "dashboard"
    ) {

      renderDashboard(
        getMainContentContainer()
      );

    }

    updateAllProgressUI();

  }

  /* =========================================================
     10. LESSON LIST
     ========================================================= */

  function renderLessonsPage(container) {

    container.innerHTML = `

      <div class="aba-lessons-page">

        <div class="aba-page-header">

          <div>
            <h1>Lessons</h1>

            <p>
              Sales Management နှင့် Business Management
              အတွက် Professional Lessons များ
            </p>
          </div>

          <div class="aba-page-progress">
            ${getProgressPercent()}%
          </div>

        </div>

        <div class="aba-progress-track aba-main-progress">

          <div
            class="aba-progress-fill"
            style="width:${getProgressPercent()}%"
          ></div>

        </div>

        <div class="aba-lessons-list" id="abaLessonsList">

          ${lessons.map(function (lesson, index) {

            const completed =
              isLessonCompleted(index);

            return `

              <button
                class="aba-lesson-item ${
                  index === currentLessonIndex
                    ? "current"
                    : ""
                } ${
                  completed
                    ? "completed"
                    : ""
                }"
                data-lesson-index="${index}"
              >

                <div class="aba-lesson-number">

                  ${
                    completed
                      ? "✓"
                      : index + 1
                  }

                </div>

                <div class="aba-lesson-info">

                  <strong>
                    ${escapeHTML(lesson.title)}
                  </strong>

                  <span>
                    ${
                      completed
                        ? "Completed"
                        : "Not completed"
                    }
                  </span>

                </div>

                <div class="aba-lesson-arrow">
                  →
                </div>

              </button>

            `;

          }).join("")}

        </div>

      </div>

      <div
        id="abaLessonViewer"
        class="aba-lesson-viewer"
      ></div>

    `;

    qsa("[data-lesson-index]").forEach(
      function (button) {

        button.addEventListener(
          "click",
          function () {

            const index =
              parseInt(
                button.dataset.lessonIndex,
                10
              );

            openLesson(index);

          }
        );

      }
    );

    renderLesson();

  }

  /* =========================================================
     11. OPEN LESSON
     ========================================================= */

  function openLesson(index) {

    if (
      index < 0 ||
      index >= lessons.length
    ) {
      return;
    }

    currentLessonIndex = index;

    saveCurrentLesson();

    showSection("lessons");

    setTimeout(function () {

      renderLesson();

      const viewer =
        byId("abaLessonViewer");

      if (viewer) {

        viewer.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    }, 20);

  }

  /* =========================================================
     12. RENDER LESSON
     ========================================================= */

  function renderLesson() {

    const viewer =
      byId("abaLessonViewer");

    if (!viewer) {
      return;
    }

    if (!lessons.length) {

      viewer.innerHTML = `
        <div class="aba-empty">
          Lesson မရှိသေးပါ။
        </div>
      `;

      return;

    }

    const lesson =
      lessons[currentLessonIndex];

    const completed =
      isLessonCompleted(currentLessonIndex);

    const previousDisabled =
      currentLessonIndex <= 0;

    const nextDisabled =
      currentLessonIndex >=
      lessons.length - 1;

    viewer.innerHTML = `

      <article class="aba-lesson-card">

        <div class="aba-lesson-header">

          <div>

            <span class="aba-lesson-label">
              LESSON ${currentLessonIndex + 1}
              / ${lessons.length}
            </span>

            <h2>
              ${escapeHTML(lesson.title)}
            </h2>

            ${
              lesson.intro
                ? `
                  <p class="aba-lesson-intro">
                    ${escapeHTML(lesson.intro)}
                  </p>
                `
                : ""
            }

          </div>

          <div class="aba-lesson-status ${
            completed
              ? "completed"
              : ""
          }">

            ${
              completed
                ? "✓ Completed"
                : "In Progress"
            }

          </div>

        </div>

        <div class="aba-lesson-content">

          ${lesson.body}

        </div>

        <div class="aba-lesson-actions">

          <button
            class="aba-secondary-btn"
            id="previousLessonBtn"
            ${previousDisabled ? "disabled" : ""}
          >
            ← Previous
          </button>

          <button
            class="${
              completed
                ? "aba-warning-btn"
                : "aba-complete-btn"
            }"
            id="completeLessonBtn"
          >

            ${
              completed
                ? "↩ Mark as Incomplete"
                : "✓ Mark as Completed"
            }

          </button>

          <button
            class="aba-primary-btn"
            id="nextLessonBtn"
            ${nextDisabled ? "disabled" : ""}
          >
            Next →
          </button>

        </div>

      </article>

    `;

    const previousBtn =
      byId("previousLessonBtn");

    const nextBtn =
      byId("nextLessonBtn");

    const completeBtn =
      byId("completeLessonBtn");

    if (previousBtn) {

      previousBtn.addEventListener(
        "click",
        previousLesson
      );

    }

    if (nextBtn) {

      nextBtn.addEventListener(
        "click",
        nextLesson
      );

    }

    if (completeBtn) {

      completeBtn.addEventListener(
        "click",
        function () {

          if (
            isLessonCompleted(
              currentLessonIndex
            )
          ) {

            markLessonIncomplete(
              currentLessonIndex
            );

          } else {

            markLessonCompleted(
              currentLessonIndex
            );

          }

        }
      );

    }

    /*
      Important:
      Long lesson content should be scrollable.
    */

    viewer.style.maxHeight = "none";
    viewer.style.overflow = "visible";

    updateLessonListActive();

  }

  /* =========================================================
     13. PREVIOUS / NEXT
     ========================================================= */

  function previousLesson() {

    if (currentLessonIndex <= 0) {
      return;
    }

    currentLessonIndex--;

    saveCurrentLesson();

    renderLesson();

    scrollLessonTop();

  }

  function nextLesson() {

    if (
      currentLessonIndex >=
      lessons.length - 1
    ) {

      return;

    }

    currentLessonIndex++;

    saveCurrentLesson();

    renderLesson();

    scrollLessonTop();

  }

  function scrollLessonTop() {

    const viewer =
      byId("abaLessonViewer");

    if (viewer) {

      viewer.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  }

  function findNextIncompleteLesson() {

    for (
      let i = 0;
      i < lessons.length;
      i++
    ) {

      if (!isLessonCompleted(i)) {
        return i;
      }

    }

    return -1;

  }

  function updateLessonListActive() {

    qsa("[data-lesson-index]").forEach(
      function (button) {

        const index =
          parseInt(
            button.dataset.lessonIndex,
            10
          );

        button.classList.toggle(
          "current",
          index === currentLessonIndex
        );

        button.classList.toggle(
          "completed",
          isLessonCompleted(index)
        );

      }
    );

  }

  /* =========================================================
     14. PROGRESS PAGE
     ========================================================= */

  function renderProgressPage(container) {

    const total = lessons.length;
    const completed = getCompletedCount();
    const percent = getProgressPercent();

    container.innerHTML = `

      <div class="aba-progress-page">

        <div class="aba-page-header">

          <div>

            <h1>My Progress</h1>

            <p>
              သင့်ရဲ့ Learning Progress ကို
              တစ်နေရာတည်းမှာ စောင့်ကြည့်ပါ။
            </p>

          </div>

        </div>

        <div class="aba-progress-main-card">

          <div class="aba-progress-circle">

            <span>
              ${percent}%
            </span>

          </div>

          <div>

            <h2>
              Learning Progress
            </h2>

            <p>
              ${completed} / ${total}
              lessons completed
            </p>

          </div>

        </div>

        <div class="aba-progress-track">

          <div
            class="aba-progress-fill"
            style="width:${percent}%"
          ></div>

        </div>

        <div class="aba-progress-list">

          ${lessons.map(function (lesson, index) {

            const completed =
              isLessonCompleted(index);

            return `

              <div class="aba-progress-row">

                <div>

                  <strong>
                    ${index + 1}.
                    ${escapeHTML(lesson.title)}
                  </strong>

                </div>

                <span class="${
                  completed
                    ? "status-completed"
                    : "status-pending"
                }">

                  ${
                    completed
                      ? "✓ Completed"
                      : "○ Pending"
                  }

                </span>

              </div>

            `;

          }).join("")}

        </div>

      </div>

    `;

  }

  function updateAllProgressUI() {

    const percent =
      getProgressPercent();

    qsa(
      ".aba-progress-fill"
    ).forEach(function (bar) {

      bar.style.width =
        percent + "%";

    });

    qsa(
      ".aba-page-progress"
    ).forEach(function (item) {

      item.textContent =
        percent + "%";

    });

  }

  /* =========================================================
     15. COURSES
     ========================================================= */

  function renderCourses(container) {

    container.innerHTML = `

      <div class="aba-courses-page">

        <div class="aba-page-header">

          <div>

            <h1>My Courses</h1>

            <p>
              Aung Business Academy Professional Courses
            </p>

          </div>

        </div>

        <div class="aba-course-card">

          <div class="aba-course-icon">
            📊
          </div>

          <div class="aba-course-info">

            <span>
              PROFESSIONAL COURSE
            </span>

            <h2>
              Sales Management Mastery
            </h2>

            <p>
              Sales Management၊ KPI၊ Team Leadership၊
              Customer Management၊ Distribution၊
              Forecasting နှင့် Business Execution
              အကြောင်း လေ့လာနိုင်ပါသည်။
            </p>

            <button
              class="aba-primary-btn"
              id="startCourseBtn"
            >
              Start Learning
            </button>

          </div>

        </div>

      </div>

    `;

    const start =
      byId("startCourseBtn");

    if (start) {

      start.addEventListener(
        "click",
        function () {

          showSection("lessons");

        }
      );

    }

  }

  /* =========================================================
     16. SALES MANAGER
     ========================================================= */

  function renderSalesManager(container) {

    container.innerHTML = `

      <div class="aba-tool-page">

        <div class="aba-page-header">

          <div>

            <h1>Sales Manager</h1>

            <p>
              Sales Team ကို Target မှ Result အထိ
              စနစ်တကျ စီမံခန့်ခွဲရန်။
            </p>

          </div>

        </div>

        <div class="aba-tool-grid">

          <div class="aba-tool-card">

            <h3>🎯 Target Management</h3>

            <p>
              Monthly Target ကို Weekly နှင့်
              Daily Execution အဖြစ် ခွဲခြမ်းပါ။
            </p>

          </div>

          <div class="aba-tool-card">

            <h3>👥 Team Management</h3>

            <p>
              Clear Expectations၊ Coaching၊
              Feedback နှင့် Accountability ကို
              အသုံးပြုပါ။
            </p>

          </div>

          <div class="aba-tool-card">

            <h3>📊 KPI Management</h3>

            <p>
              Sales Achievement၊ Productivity၊
              Distribution နှင့် Customer KPI များကို
              စောင့်ကြည့်ပါ။
            </p>

          </div>

          <div class="aba-tool-card">

            <h3>📈 Market Execution</h3>

            <p>
              Market Visit၊ Customer Visit နှင့်
              Distribution Execution ကို စောင့်ကြည့်ပါ။
            </p>

          </div>

        </div>

      </div>

    `;

  }

  /* =========================================================
     17. PRICING CALCULATOR
     ========================================================= */

  function renderPricingCalculator(container) {

    container.innerHTML = `

      <div class="aba-tool-page">

        <div class="aba-page-header">

          <div>

            <h1>Pricing Calculator</h1>

            <p>
              Cost၊ Margin နှင့် Selling Price
              ကို တွက်ချက်ရန်။
            </p>

          </div>

        </div>

        <div class="aba-calculator-card">

          <label>
            Cost Price
            <input
              type="number"
              id="calcCost"
              placeholder="ဥပမာ 10000"
            />
          </label>

          <label>
            Desired Margin %
            <input
              type="number"
              id="calcMargin"
              placeholder="ဥပမာ 20"
            />
          </label>

          <button
            class="aba-primary-btn"
            id="calculatePriceBtn"
          >
            Calculate
          </button>

          <div
            class="aba-calculator-result"
            id="priceResult"
          >
            Result ကို ဒီမှာပြပါမယ်။
          </div>

        </div>

      </div>

    `;

    const button =
      byId("calculatePriceBtn");

    if (button) {

      button.addEventListener(
        "click",
        function () {

          const cost =
            parseFloat(
              byId("calcCost").value
            );

          const margin =
            parseFloat(
              byId("calcMargin").value
            );

          const result =
            byId("priceResult");

          if (
            isNaN(cost) ||
            isNaN(margin) ||
            margin >= 100
          ) {

            result.innerHTML =
              "မှန်ကန်တဲ့ Cost နဲ့ Margin % ထည့်ပါ။";

            return;

          }

          const sellingPrice =
            cost /
            (1 - margin / 100);

          result.innerHTML = `
            <strong>
              Selling Price:
              ${sellingPrice.toLocaleString()}
            </strong>
          `;

        }
      );

    }

  }

  /* =========================================================
     18. REPORTS
     ========================================================= */

  function renderReports(container) {

    container.innerHTML = `

      <div class="aba-tool-page">

        <div class="aba-page-header">

          <div>

            <h1>Reports</h1>

            <p>
              Business Performance ကို
              Data ဖြင့် ခွဲခြမ်းစိတ်ဖြာရန်။
            </p>

          </div>

        </div>

        <div class="aba-report-grid">

          <div class="aba-report-card">
            <span>Learning Progress</span>
            <strong>${getProgressPercent()}%</strong>
          </div>

          <div class="aba-report-card">
            <span>Completed Lessons</span>
            <strong>${getCompletedCount()}</strong>
          </div>

          <div class="aba-report-card">
            <span>Total Lessons</span>
            <strong>${lessons.length}</strong>
          </div>

        </div>

      </div>

    `;

  }

  /* =========================================================
     19. AI BUSINESS COACH
     ========================================================= */

  function renderAIBusinessCoach(container) {

    container.innerHTML = `

      <div class="aba-tool-page">

        <div class="aba-page-header">

          <div>

            <h1>AI Business Coach</h1>

            <p>
              Business Problem ကို ရေးပြီး
              Coaching Question အဖြစ် အသုံးပြုနိုင်ပါသည်။
            </p>

          </div>

        </div>

        <div class="aba-ai-card">

          <textarea
            id="aiBusinessQuestion"
            rows="6"
            placeholder="ဥပမာ - Sales target မပြည့်တဲ့ team ကို ဘယ်လို coaching လုပ်သင့်လဲ?"
          ></textarea>

          <button
            class="aba-primary-btn"
            id="aiCoachBtn"
          >
            🤖 Get Coaching Framework
          </button>

          <div
            class="aba-ai-result"
            id="aiCoachResult"
          ></div>

        </div>

      </div>

    `;

    const button =
      byId("aiCoachBtn");

    if (button) {

      button.addEventListener(
        "click",
        function () {

          const question =
            byId(
              "aiBusinessQuestion"
            ).value.trim();

          const result =
            byId("aiCoachResult");

          if (!question) {

            result.innerHTML =
              "<p>Business Question တစ်ခုရေးပါ။</p>";

            return;

          }

          result.innerHTML = `

            <h3>Coaching Framework</h3>

            <ol>

              <li>
                Problem ကို အရင်ဆုံး တိတိကျကျ သတ်မှတ်ပါ။
              </li>

              <li>
                Data နှင့် Facts ကို စစ်ဆေးပါ။
              </li>

              <li>
                Root Cause ကို ရှာပါ။
              </li>

              <li>
                Action Plan သတ်မှတ်ပါ။
              </li>

              <li>
                Owner နှင့် Deadline သတ်မှတ်ပါ။
              </li>

              <li>
                Follow-up နှင့် Review ပြုလုပ်ပါ။
              </li>

            </ol>

            <p>
              <strong>Your Question:</strong>
              ${escapeHTML(question)}
            </p>

          `;

        }
      );

    }

  }

  /* =========================================================
     20. AI TOOLS
     ========================================================= */

  function renderAITools(container) {

    container.innerHTML = `

      <div class="aba-tool-page">

        <div class="aba-page-header">

          <div>

            <h1>AI Tools</h1>

            <p>
              Business Management အတွက်
              AI-based tools များ။
            </p>

          </div>

        </div>

        <div class="aba-tool-grid">

          <div class="aba-tool-card">
            <h3>🧠 Business Ideas</h3>
            <p>Business idea generation framework</p>
          </div>

          <div class="aba-tool-card">
            <h3>📣 Marketing Ideas</h3>
            <p>Marketing campaign planning</p>
          </div>

          <div class="aba-tool-card">
            <h3>🎯 Sales Strategy</h3>
            <p>Sales growth strategy framework</p>
          </div>

          <div class="aba-tool-card">
            <h3>👥 Team Coaching</h3>
            <p>Team performance coaching framework</p>
          </div>

        </div>

      </div>

    `;

  }

  /* =========================================================
     21. SETTINGS
     ========================================================= */

  function renderSettings(container) {

    const savedName =
      localStorage.getItem(
        STORAGE_KEYS.userName
      ) || "Aung Zar Ni Win";

    container.innerHTML = `

      <div class="aba-settings-page">

        <div class="aba-page-header">

          <div>

            <h1>Settings</h1>

            <p>
              Academy profile နှင့် progress settings
            </p>

          </div>

        </div>

        <div class="aba-settings-card">

          <label>

            Your Name

            <input
              type="text"
              id="settingsUserName"
              value="${escapeHTML(savedName)}"
            />

          </label>

          <button
            class="aba-primary-btn"
            id="saveSettingsBtn"
          >
            Save Settings
          </button>

        </div>

        <div class="aba-settings-card">

          <h3>Learning Progress</h3>

          <p>
            လက်ရှိ Progress:
            <strong>
              ${getProgressPercent()}%
            </strong>
          </p>

          <button
            class="aba-danger-btn"
            id="resetProgressBtn"
          >
            Reset Learning Progress
          </button>

        </div>

        <div class="aba-settings-card">

          <h3>About</h3>

          <p>
            Aung Business Academy V8.0 Professional
          </p>

        </div>

      </div>

    `;

    const saveBtn =
      byId("saveSettingsBtn");

    if (saveBtn) {

      saveBtn.addEventListener(
        "click",
        function () {

          const name =
            byId(
              "settingsUserName"
            ).value.trim();

          localStorage.setItem(
            STORAGE_KEYS.userName,
            name || "Aung Zar Ni Win"
          );

          alert("Settings saved successfully.");

          updateUserProfile();

        }
      );

    }

    const resetBtn =
      byId("resetProgressBtn");

    if (resetBtn) {

      resetBtn.addEventListener(
        "click",
        function () {

          const confirmed =
            confirm(
              "Learning Progress အားလုံးကို Reset လုပ်မလား?"
            );

          if (!confirmed) {
            return;
          }

          completedLessons = [];

          saveCompletedLessons();

          currentLessonIndex = 0;

          saveCurrentLesson();

          alert(
            "Learning Progress ကို Reset လုပ်ပြီးပါပြီ။"
          );

          renderSettings(container);

        }
      );

    }

  }

  /* =========================================================
     22. USER PROFILE
     ========================================================= */

  function updateUserProfile() {

    const savedName =
      localStorage.getItem(
        STORAGE_KEYS.userName
      ) || "Aung Zar Ni Win";

    qsa(
      "[data-user-name], .user-name, #userName"
    ).forEach(function (element) {

      element.textContent =
        savedName;

    });

  }

  /* =========================================================
     23. MOBILE SIDEBAR
     ========================================================= */

  function openMobileSidebar() {

    const sidebar =
      qs(
        ".sidebar, .app-sidebar, #sidebar"
      );

    if (sidebar) {

      sidebar.classList.add(
        "mobile-open"
      );

    }

    document.body.classList.add(
      "sidebar-open"
    );

  }

  function closeMobileSidebar() {

    const sidebar =
      qs(
        ".sidebar, .app-sidebar, #sidebar"
      );

    if (sidebar) {

      sidebar.classList.remove(
        "mobile-open"
      );

    }

    document.body.classList.remove(
      "sidebar-open"
    );

  }

  function setupMobileMenu() {

    qsa(
      "#menuBtn, #mobileMenuBtn, .mobile-menu-btn, .hamburger"
    ).forEach(function (button) {

      button.addEventListener(
        "click",
        function () {

          const sidebar =
            qs(
              ".sidebar, .app-sidebar, #sidebar"
            );

          if (
            sidebar &&
            sidebar.classList.contains(
              "mobile-open"
            )
          ) {

            closeMobileSidebar();

          } else {

            openMobileSidebar();

          }

        }
      );

    });

  }

  /* =========================================================
     24. NAVIGATION EVENTS
     ========================================================= */

  function setupNavigation() {

    qsa(
      "[data-section-link], [data-nav], [data-target], .nav-link, .sidebar-link"
    ).forEach(function (link) {

      link.addEventListener(
        "click",
        function (event) {

          const rawTarget =
            link.dataset.sectionLink ||
            link.dataset.nav ||
            link.dataset.target ||
            link.getAttribute("href") ||
            "";

          if (
            !rawTarget ||
            rawTarget === "#" ||
            rawTarget.startsWith("http")
          ) {
            return;
          }

          const target =
            rawTarget
              .replace("#", "")
              .trim();

          if (!target) {
            return;
          }

          event.preventDefault();

          showSection(
            target
          );

        }
      );

    });

  }

  /* =========================================================
     25. SUPPORT COMMON OLD NAVIGATION IDs
     ========================================================= */

  function setupLegacyNavigation() {

    const mapping = {

      dashboardBtn: "dashboard",
      dashboardLink: "dashboard",

      coursesBtn: "courses",
      coursesLink: "courses",

      lessonsBtn: "lessons",
      lessonsLink: "lessons",

      progressBtn: "progress",
      progressLink: "progress",

      salesBtn: "sales-manager",
      salesManagerBtn: "sales-manager",

      pricingBtn: "pricing-calculator",
      pricingCalculatorBtn: "pricing-calculator",

      reportsBtn: "reports",
      reportsLink: "reports",

      aiBtn: "ai-business-coach",
      aiCoachBtn: "ai-business-coach",

      aiToolsBtn: "ai-tools",

      settingsBtn: "settings",
      settingsLink: "settings"

    };

    Object.keys(mapping).forEach(
      function (id) {

        const element =
          byId(id);

        if (!element) {
          return;
        }

        element.addEventListener(
          "click",
          function (event) {

            event.preventDefault();

            showSection(
              mapping[id]
            );

          }
        );

      }
    );

  }

  /* =========================================================
     26. ADD REQUIRED APP STYLES
     ========================================================= */

  function injectAppStyles() {

    if (
      byId("aba-app-runtime-styles")
    ) {
      return;
    }

    const style =
      document.createElement("style");

    style.id =
      "aba-app-runtime-styles";

    style.textContent = `

      .aba-dashboard,
      .aba-lessons-page,
      .aba-progress-page,
      .aba-courses-page,
      .aba-tool-page,
      .aba-settings-page {
        width:100%;
        max-width:1200px;
        margin:0 auto;
        padding:20px;
      }

      .aba-page-header {
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:20px;
        margin-bottom:24px;
      }

      .aba-page-header h1 {
        margin:0 0 8px;
      }

      .aba-page-header p {
        margin:0;
        opacity:.75;
      }

      .aba-stats-grid {
        display:grid;
        grid-template-columns:repeat(4,1fr);
        gap:16px;
        margin-bottom:20px;
      }

      .aba-stat-card {
        display:flex;
        align-items:center;
        gap:14px;
        padding:20px;
        border-radius:16px;
        background:#fff;
        border:1px solid rgba(0,0,0,.08);
        box-shadow:0 5px 20px rgba(0,0,0,.05);
      }

      .aba-stat-icon {
        width:46px;
        height:46px;
        display:flex;
        align-items:center;
        justify-content:center;
        border-radius:12px;
        background:#f1f5f9;
        font-size:22px;
      }

      .aba-stat-card strong {
        display:block;
        font-size:25px;
        line-height:1.2;
      }

      .aba-stat-card span {
        display:block;
        font-size:13px;
        opacity:.7;
        margin-top:4px;
      }

      .aba-dashboard-card,
      .aba-lesson-card,
      .aba-progress-main-card,
      .aba-settings-card,
      .aba-calculator-card,
      .aba-ai-card {
        background:#fff;
        border:1px solid rgba(0,0,0,.08);
        border-radius:18px;
        padding:24px;
        margin-bottom:20px;
        box-shadow:0 5px 20px rgba(0,0,0,.04);
      }

      .aba-card-header {
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:15px;
        margin-bottom:18px;
      }

      .aba-card-header h2 {
        margin:0 0 5px;
      }

      .aba-card-header p {
        margin:0;
        opacity:.7;
      }

      .aba-progress-number {
        font-size:24px;
        font-weight:700;
      }

      .aba-progress-track {
        width:100%;
        height:10px;
        background:#e5e7eb;
        border-radius:99px;
        overflow:hidden;
      }

      .aba-progress-fill {
        height:100%;
        background:#2563eb;
        border-radius:99px;
        transition:width .3s ease;
      }

      .aba-progress-meta {
        display:flex;
        justify-content:space-between;
        margin-top:10px;
        font-size:13px;
        opacity:.7;
      }

      .aba-quick-grid {
        display:grid;
        grid-template-columns:repeat(3,1fr);
        gap:14px;
      }

      .aba-quick-btn {
        border:1px solid rgba(0,0,0,.08);
        background:#f8fafc;
        border-radius:14px;
        padding:18px;
        cursor:pointer;
        font-size:16px;
        text-align:left;
      }

      .aba-quick-btn span {
        display:block;
        margin-top:8px;
        font-weight:600;
      }

      .aba-primary-btn,
      .aba-secondary-btn,
      .aba-complete-btn,
      .aba-warning-btn,
      .aba-danger-btn {
        border:0;
        border-radius:10px;
        padding:12px 18px;
        cursor:pointer;
        font-weight:600;
        font-size:14px;
      }

      .aba-primary-btn {
        background:#2563eb;
        color:#fff;
      }

      .aba-secondary-btn {
        background:#e5e7eb;
        color:#111827;
      }

      .aba-complete-btn {
        background:#16a34a;
        color:#fff;
      }

      .aba-warning-btn {
        background:#f59e0b;
        color:#fff;
      }

      .aba-danger-btn {
        background:#dc2626;
        color:#fff;
      }

      button:disabled {
        opacity:.45;
        cursor:not-allowed;
      }

      .aba-main-progress {
        margin-bottom:22px;
      }

      .aba-lessons-list {
        display:flex;
        flex-direction:column;
        gap:10px;
        margin-bottom:24px;
      }

      .aba-lesson-item {
        width:100%;
        display:flex;
        align-items:center;
        gap:14px;
        padding:16px;
        border-radius:14px;
        border:1px solid rgba(0,0,0,.08);
        background:#fff;
        cursor:pointer;
        text-align:left;
      }

      .aba-lesson-item.current {
        border-color:#2563eb;
      }

      .aba-lesson-item.completed {
        background:#f0fdf4;
      }

      .aba-lesson-number {
        width:38px;
        height:38px;
        flex:0 0 38px;
        border-radius:50%;
        display:flex;
        align-items:center;
        justify-content:center;
        background:#eff6ff;
        font-weight:700;
      }

      .aba-lesson-info {
        flex:1;
      }

      .aba-lesson-info strong {
        display:block;
        margin-bottom:4px;
      }

      .aba-lesson-info span {
        font-size:12px;
        opacity:.65;
      }

      .aba-lesson-arrow {
        font-size:20px;
      }

      .aba-lesson-viewer {
        width:100%;
        max-width:1200px;
        margin:0 auto;
        padding:0 20px 40px;
      }

      .aba-lesson-header {
        display:flex;
        align-items:flex-start;
        justify-content:space-between;
        gap:20px;
        margin-bottom:24px;
      }

      .aba-lesson-label {
        font-size:12px;
        font-weight:700;
        opacity:.65;
      }

      .aba-lesson-header h2 {
        margin:8px 0;
        font-size:28px;
      }

      .aba-lesson-intro {
        margin:0;
        opacity:.75;
      }

      .aba-lesson-status {
        white-space:nowrap;
        padding:8px 12px;
        border-radius:99px;
        background:#fef3c7;
        color:#92400e;
        font-size:12px;
        font-weight:700;
      }

      .aba-lesson-status.completed {
        background:#dcfce7;
        color:#166534;
      }

      .aba-lesson-content {
        line-height:1.9;
        font-size:16px;
        overflow:visible;
      }

      .aba-lesson-content h3 {
        margin:26px 0 10px;
      }

      .aba-lesson-content p {
        margin:0 0 16px;
      }

      .aba-lesson-content li {
        margin-bottom:8px;
      }

      .aba-lesson-content .lesson-note {
        margin:22px 0;
        padding:16px;
        border-left:4px solid #2563eb;
        background:#eff6ff;
        border-radius:10px;
      }

      .aba-lesson-actions {
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:10px;
        margin-top:30px;
        padding-top:20px;
        border-top:1px solid rgba(0,0,0,.08);
      }

      .aba-progress-main-card {
        display:flex;
        align-items:center;
        gap:24px;
      }

      .aba-progress-circle {
        width:100px;
        height:100px;
        border-radius:50%;
        display:flex;
        align-items:center;
        justify-content:center;
        background:#eff6ff;
        border:8px solid #2563eb;
      }

      .aba-progress-circle span {
        font-weight:800;
        font-size:22px;
      }

      .aba-progress-list {
        margin-top:20px;
      }

      .aba-progress-row {
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:15px;
        padding:15px;
        border-bottom:1px solid rgba(0,0,0,.07);
      }

      .status-completed {
        color:#16a34a;
        font-weight:700;
        white-space:nowrap;
      }

      .status-pending {
        opacity:.55;
        white-space:nowrap;
      }

      .aba-course-card {
        display:flex;
        gap:20px;
        padding:25px;
        border-radius:18px;
        background:#fff;
        border:1px solid rgba(0,0,0,.08);
      }

      .aba-course-icon {
        font-size:42px;
      }

      .aba-course-info span {
        font-size:12px;
        opacity:.6;
        font-weight:700;
      }

      .aba-course-info h2 {
        margin:7px 0;
      }

      .aba-course-info p {
        line-height:1.7;
        margin-bottom:18px;
      }

      .aba-tool-grid,
      .aba-report-grid {
        display:grid;
        grid-template-columns:repeat(2,1fr);
        gap:16px;
      }

      .aba-tool-card,
      .aba-report-card {
        padding:22px;
        background:#fff;
        border:1px solid rgba(0,0,0,.08);
        border-radius:16px;
      }

      .aba-report-card span {
        display:block;
        opacity:.65;
      }

      .aba-report-card strong {
        display:block;
        font-size:30px;
        margin-top:8px;
      }

      .aba-calculator-card label,
      .aba-settings-card label {
        display:block;
        margin-bottom:16px;
        font-weight:600;
      }

      .aba-calculator-card input,
      .aba-settings-card input,
      .aba-ai-card textarea {
        width:100%;
        margin-top:7px;
        padding:13px;
        border:1px solid #d1d5db;
        border-radius:10px;
        font:inherit;
        box-sizing:border-box;
      }

      .aba-calculator-result,
      .aba-ai-result {
        margin-top:20px;
        padding:18px;
        border-radius:12px;
        background:#f8fafc;
        line-height:1.8;
      }

      .aba-settings-card h3 {
        margin-top:0;
      }

      @media(max-width:800px) {

        .aba-stats-grid {
          grid-template-columns:repeat(2,1fr);
        }

        .aba-quick-grid {
          grid-template-columns:repeat(2,1fr);
        }

        .aba-tool-grid,
        .aba-report-grid {
          grid-template-columns:1fr;
        }

        .aba-lesson-header {
          flex-direction:column;
        }

      }

      @media(max-width:600px) {

        .aba-dashboard,
        .aba-lessons-page,
        .aba-progress-page,
        .aba-courses-page,
        .aba-tool-page,
        .aba-settings-page {
          padding:14px;
        }

        .aba-lesson-viewer {
          padding:0 14px 30px;
        }

        .aba-stats-grid {
          grid-template-columns:1fr 1fr;
          gap:10px;
        }

        .aba-stat-card {
          padding:14px;
        }

        .aba-stat-card strong {
          font-size:21px;
        }

        .aba-quick-grid {
          grid-template-columns:1fr 1fr;
        }

        .aba-card-header {
          align-items:flex-start;
        }

        .aba-lesson-header h2 {
          font-size:23px;
        }

        .aba-lesson-content {
          font-size:15px;
        }

        .aba-lesson-actions {
          display:grid;
          grid-template-columns:1fr;
        }

        .aba-lesson-actions button {
          width:100%;
        }

        .aba-progress-main-card {
          flex-direction:column;
          text-align:center;
        }

        .aba-progress-row {
          align-items:flex-start;
          flex-direction:column;
        }

        .aba-course-card {
          flex-direction:column;
        }

      }

    `;

    document.head.appendChild(style);

  }

  /* =========================================================
     27. INITIALIZE
     ========================================================= */

  function initApp() {

    loadLessons();

    loadCompletedLessons();

    loadCurrentLesson();

    injectAppStyles();

    setupNavigation();

    setupLegacyNavigation();

    setupMobileMenu();

    updateUserProfile();

    /*
      If the HTML already contains its own sections,
      use the existing dashboard first.
    */

    const existingDashboard =
      qs(
        '[data-section="dashboard"], #dashboard'
      );

    if (existingDashboard) {

      showSection("dashboard");

    } else {

      renderDashboard(
        getMainContentContainer()
      );

      currentSection =
        "dashboard";

    }

    console.log(
      APP_NAME +
      " initialized successfully."
    );

    console.log(
      "Lessons loaded:",
      lessons.length
    );

    console.log(
      "Completed:",
      completedLessons.length
    );

  }

  /* =========================================================
     28. DOM READY
     ========================================================= */

  if (
    document.readyState === "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      initApp
    );

  } else {

    initApp();

  }

  /* =========================================================
     29. GLOBAL API
     ========================================================= */

  window.AungBusinessAcademy = {

    lessons: function () {
      return lessons;
    },

    openLesson: openLesson,

    nextLesson: nextLesson,

    previousLesson: previousLesson,

    markCompleted: function () {

      markLessonCompleted(
        currentLessonIndex
      );

    },

    markIncomplete: function () {

      markLessonIncomplete(
        currentLessonIndex
      );

    },

    getProgress: function () {

      return {
        total: lessons.length,
        completed: getCompletedCount(),
        percent: getProgressPercent()
      };

    },

    showSection: showSection,

    resetProgress: function () {

      completedLessons = [];

      saveCompletedLessons();

      currentLessonIndex = 0;

      saveCurrentLesson();

      updateAllProgressUI();

    }

  };

})();
