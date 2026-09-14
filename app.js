/* =========================================================
   AUNG BUSINESS ACADEMY V8.0
   COMPLETE APP.JS
   ========================================================= */

(function () {
  "use strict";

  /* =========================================================
     APP SETTINGS
     ========================================================= */

  const APP_NAME = "Aung Business Academy";

  const STORAGE_KEYS = {
    completed: "aba_completed_lessons",
    currentLesson: "aba_current_lesson",
    lastSection: "aba_last_section",
    userName: "aba_user_name"
  };

  let lessons = [];
  let completedLessons = [];
  let currentLessonIndex = 0;
  let currentSection = "dashboard";


  /* =========================================================
     BASIC HELPERS
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
     LOAD LESSONS
     ========================================================= */

  function loadLessons() {

    try {

      /*
       * academy-long-lessons.js
       * ကနေ Burmese long lessons ကို အရင်ယူမယ်
       */

      if (
        Array.isArray(window.academyLessons) &&
        window.academyLessons.length > 0
      ) {

        lessons =
          window.academyLessons.slice();

      }

      else if (
        Array.isArray(window.academyLongLessons) &&
        window.academyLongLessons.length > 0
      ) {

        lessons =
          window.academyLongLessons.slice();

      }

      else if (
        Array.isArray(window.longLessons) &&
        window.longLessons.length > 0
      ) {

        lessons =
          window.longLessons.slice();

      }

      else {

        lessons = [
          {
            title: "Sales Management ဆိုတာဘာလဲ",

            intro:
              "Sales Management ရဲ့ အခြေခံသဘောတရားများ",

            body: `
              <h3>Sales Management ဆိုတာဘာလဲ</h3>

              <p>
                Sales Management ဆိုတာ Sales Team၊
                Customer၊ Target၊ Distribution၊
                Market Execution နဲ့ Revenue တို့ကို
                စနစ်တကျ စီမံခန့်ခွဲပြီး
                Business Result ရရှိအောင်
                ဦးဆောင်ခြင်း ဖြစ်ပါတယ်။
              </p>

              <p>
                Sales Manager တစ်ယောက်ဟာ Target ပေးပြီး
                စောင့်ကြည့်နေရုံနဲ့ မပြီးပါဘူး။
                လူ၊ နံပါတ်နဲ့ Execution သုံးခုကို
                ချိတ်ဆက်ပြီး Result ထွက်အောင်
                စီမံခန့်ခွဲရပါတယ်။
              </p>

              <h3>အဓိကတာဝန်များ</h3>

              <ul>
                <li>Sales Target Management</li>
                <li>KPI Management</li>
                <li>Sales Team Leadership</li>
                <li>Customer Management</li>
                <li>Distribution Management</li>
                <li>Market Execution</li>
                <li>Sales Forecasting</li>
                <li>Sales Reporting</li>
              </ul>

              <div class="lesson-note">
                Manager တစ်ယောက်ရဲ့ အဓိကတာဝန်က
                ကိုယ်တိုင်အကုန်လုပ်ခြင်းမဟုတ်ဘဲ
                Team က Result ထွက်အောင်
                System တည်ဆောက်ပေးခြင်း ဖြစ်ပါတယ်။
              </div>
            `
          }
        ];

      }

    } catch (error) {

      console.error(
        "Lesson loading error:",
        error
      );

      lessons = [];

    }


    /*
     * Lesson structure ကို normalize လုပ်မယ်
     */

    lessons = lessons.map(function (lesson, index) {

      return {

        id:
          lesson.id ||
          index + 1,

        title:
          lesson.title ||
          "Lesson " + (index + 1),

        intro:
          lesson.intro ||
          "",

        body:
          lesson.body ||
          lesson.content ||
          lesson.description ||
          "<p>ဒီသင်ခန်းစာအတွက် Content မရှိသေးပါ။</p>"

      };

    });

  }


  /* =========================================================
     LOCAL STORAGE
     ========================================================= */

  function loadCompletedLessons() {

    try {

      const saved =
        localStorage.getItem(
          STORAGE_KEYS.completed
        );

      if (saved) {

        const parsed =
          JSON.parse(saved);

        if (Array.isArray(parsed)) {

          completedLessons =
            parsed.map(Number);

        }

      }

    } catch (error) {

      console.error(
        "Progress loading error:",
        error
      );

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

      console.error(
        "Progress saving error:",
        error
      );

    }

  }


  function loadCurrentLesson() {

    try {

      const saved =
        localStorage.getItem(
          STORAGE_KEYS.currentLesson
        );

      if (saved !== null) {

        const index =
          parseInt(saved, 10);

        if (
          !isNaN(index) &&
          index >= 0 &&
          index < lessons.length
        ) {

          currentLessonIndex =
            index;

        }

      }

    } catch (error) {}

  }


  function saveCurrentLesson() {

    try {

      localStorage.setItem(
        STORAGE_KEYS.currentLesson,
        String(currentLessonIndex)
      );

    } catch (error) {}

  }


  /* =========================================================
     PROGRESS
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
      (
        getCompletedCount() /
        lessons.length
      ) * 100
    );

  }


  function markLessonCompleted(index) {

    if (
      index < 0 ||
      index >= lessons.length
    ) {
      return;
    }

    if (
      !completedLessons.includes(index)
    ) {

      completedLessons.push(index);

      completedLessons.sort(
        function (a, b) {
          return a - b;
        }
      );

      saveCompletedLessons();

    }

    updateAllProgressUI();

    renderLesson();

  }


  function markLessonIncomplete(index) {

    completedLessons =
      completedLessons.filter(
        function (item) {
          return item !== index;
        }
      );

    saveCompletedLessons();

    updateAllProgressUI();

    renderLesson();

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


  /* =========================================================
     MAIN SECTION NAVIGATION
     ========================================================= */

  function showSection(sectionName) {

    if (!sectionName) {
      return;
    }

    currentSection =
      sectionName
        .replace("#", "")
        .trim();

    try {

      localStorage.setItem(
        STORAGE_KEYS.lastSection,
        currentSection
      );

    } catch (error) {}


    /*
     * ရှိပြီးသား HTML sections တွေကို စစ်မယ်
     */

    const sections =
      qsa(
        "[data-section]"
      );

    let foundExistingSection =
      false;


    sections.forEach(
      function (section) {

        const name =
          (
            section.dataset.section ||
            ""
          )
            .trim()
            .toLowerCase();

        if (
          name ===
          currentSection.toLowerCase()
        ) {

          section.style.display =
            "";

          section.classList.add(
            "active"
          );

          foundExistingSection =
            true;

        } else {

          section.style.display =
            "none";

          section.classList.remove(
            "active"
          );

        }

      }
    );


    /*
     * Existing HTML section မရှိရင်
     * Dynamic page ပြမယ်
     */

    if (!foundExistingSection) {

      renderDynamicSection(
        currentSection
      );

    }


    updateNavigationActive(
      currentSection
    );

    closeMobileSidebar();

  }


  /* =========================================================
     NAVIGATION ACTIVE
     ========================================================= */

  function updateNavigationActive(
    sectionName
  ) {

    qsa(
      "[data-section-link], [data-nav], [data-target], .nav-link, .sidebar-link"
    ).forEach(
      function (link) {

        const target =
          link.dataset.sectionLink ||
          link.dataset.nav ||
          link.dataset.target ||
          link.getAttribute("href") ||
          "";

        const cleanTarget =
          target
            .replace("#", "")
            .trim()
            .toLowerCase();

        if (
          cleanTarget ===
          sectionName.toLowerCase()
        ) {

          link.classList.add(
            "active"
          );

        } else {

          link.classList.remove(
            "active"
          );

        }

      }
    );

  }


  /* =========================================================
     MAIN CONTENT CONTAINER
     ========================================================= */

  function getMainContentContainer() {

    let container =
      byId("app-content") ||
      byId("main-content") ||
      byId("content") ||
      qs("main");


    if (!container) {

      container =
        document.createElement(
          "main"
        );

      container.id =
        "app-content";

      document.body.appendChild(
        container
      );

    }

    return container;

  }


  /* =========================================================
     DYNAMIC SECTIONS
     ========================================================= */

  function renderDynamicSection(
    sectionName
  ) {

    const container =
      getMainContentContainer();


    switch (
      sectionName.toLowerCase()
    ) {

      case "dashboard":

        renderDashboard(
          container
        );

        break;


      case "lessons":

        renderLessonsPage(
          container
        );

        break;


      case "my-lessons":

        renderLessonsPage(
          container
        );

        break;


      case "progress":

        renderProgressPage(
          container
        );

        break;


      case "courses":

      case "my-courses":

        renderCourses(
          container
        );

        break;


      case "sales":

      case "sales-manager":

        renderSalesManager(
          container
        );

        break;


      case "pricing":

      case "pricing-calculator":

        renderPricingCalculator(
          container
        );

        break;


      case "reports":

        renderReports(
          container
        );

        break;


      case "ai":

      case "ai-coach":

      case "ai-business-coach":

        renderAIBusinessCoach(
          container
        );

        break;


      case "ai-tools":

        renderAITools(
          container
        );

        break;


      case "settings":

        renderSettings(
          container
        );

        break;


      default:

        renderDashboard(
          container
        );

        break;

    }

  }


  /* =========================================================
     DASHBOARD
     ========================================================= */

  function renderDashboard(
    container
  ) {

    const total =
      lessons.length;

    const completed =
      getCompletedCount();

    const percent =
      getProgressPercent();

    const nextLesson =
      findNextIncompleteLesson();


    let nextTitle =
      "သင်ခန်းစာများအားလုံး ပြီးဆုံးပါပြီ 🎉";


    if (nextLesson !== -1) {

      nextTitle =
        lessons[nextLesson].title;

    }


    container.innerHTML = `

      <div class="aba-dashboard">

        <div class="aba-page-header">

          <div>

            <h1>
              Dashboard
            </h1>

            <p>
              Aung Business Academy
              Learning Dashboard
            </p>

          </div>

        </div>


        <div class="aba-stats-grid">

          <div class="aba-stat-card">

            <div class="aba-stat-icon">
              📚
            </div>

            <div>

              <strong>
                ${total}
              </strong>

              <span>
                Total Lessons
              </span>

            </div>

          </div>


          <div class="aba-stat-card">

            <div class="aba-stat-icon">
              ✅
            </div>

            <div>

              <strong>
                ${completed}
              </strong>

              <span>
                Completed
              </span>

            </div>

          </div>


          <div class="aba-stat-card">

            <div class="aba-stat-icon">
              📈
            </div>

            <div>

              <strong>
                ${percent}%
              </strong>

              <span>
                Progress
              </span>

            </div>

          </div>


          <div class="aba-stat-card">

            <div class="aba-stat-icon">
              🎯
            </div>

            <div>

              <strong>
                30
              </strong>

              <span>
                Daily Goal
              </span>

            </div>

          </div>

        </div>


        <div class="aba-dashboard-card">

          <div class="aba-card-header">

            <div>

              <h2>
                Sales Management Mastery
              </h2>

              <p>
                Professional Sales Manager Course
              </p>

            </div>

            <strong>
              ${percent}%
            </strong>

          </div>


          <div class="aba-progress-track">

            <div
              class="aba-progress-fill"
              style="width:${percent}%"
            ></div>

          </div>


          <div class="aba-progress-meta">

            <span>
              ${completed}
              /
              ${total}
              Lessons Completed
            </span>

            <span>
              ${percent}%
            </span>

          </div>

        </div>


        <div class="aba-dashboard-card">

          <div class="aba-card-header">

            <div>

              <h2>
                Continue Learning
              </h2>

              <p>
                ${escapeHTML(nextTitle)}
              </p>

            </div>

          </div>


          <button
            class="aba-primary-btn"
            id="dashboardContinueBtn"
          >

            ${
              nextLesson === -1
                ? "Review Lessons"
                : "Continue Learning"
            }

          </button>

        </div>


        <div class="aba-dashboard-card">

          <div class="aba-card-header">

            <div>

              <h2>
                Quick Access
              </h2>

            </div>

          </div>


          <div class="aba-quick-grid">

            <button
              class="aba-quick-btn"
              data-quick="lessons"
            >
              📚
              <span>
                Lessons
              </span>
            </button>


            <button
              class="aba-quick-btn"
              data-quick="progress"
            >
              📊
              <span>
                My Progress
              </span>
            </button>


            <button
              class="aba-quick-btn"
              data-quick="sales-manager"
            >
              👔
              <span>
                Sales Manager
              </span>
            </button>


            <button
              class="aba-quick-btn"
              data-quick="pricing-calculator"
            >
              🧮
              <span>
                Pricing Calculator
              </span>
            </button>


            <button
              class="aba-quick-btn"
              data-quick="ai-business-coach"
            >
              🤖
              <span>
                AI Business Coach
              </span>
            </button>


            <button
              class="aba-quick-btn"
              data-quick="settings"
            >
              ⚙️
              <span>
                Settings
              </span>
            </button>

          </div>

        </div>

      </div>

    `;


    const continueButton =
      byId(
        "dashboardContinueBtn"
      );


    if (continueButton) {

      continueButton.addEventListener(
        "click",
        function () {

          if (nextLesson !== -1) {

            openLesson(
              nextLesson
            );

          } else {

            showSection(
              "lessons"
            );

          }

        }
      );

    }


    qsa(
      "[data-quick]"
    ).forEach(
      function (button) {

        button.addEventListener(
          "click",
          function () {

            showSection(
              button.dataset.quick
            );

          }
        );

      }
    );

  }


  /* =========================================================
     LESSONS PAGE
     ========================================================= */

  function renderLessonsPage(
    container
  ) {

    container.innerHTML = `

      <div class="aba-lessons-page">

        <div class="aba-page-header">

          <div>

            <h1>
              Lessons
            </h1>

            <p>
              သင်ခန်းစာတစ်ခုကို နှိပ်ပြီး
              အပြည့်အစုံ ဖတ်ရှုနိုင်ပါသည်။
            </p>

          </div>


          <div class="aba-page-progress">
            ${getProgressPercent()}%
          </div>

        </div>


        <div class="aba-progress-track">

          <div
            class="aba-progress-fill"
            style="width:${getProgressPercent()}%"
          ></div>

        </div>


        <div
          class="aba-lessons-list"
          id="abaLessonsList"
        >

          ${lessons.map(
            function (lesson, index) {

              const completed =
                isLessonCompleted(index);


              return `

                <button
                  class="
                    aba-lesson-item
                    ${
                      index ===
                      currentLessonIndex
                        ? "current"
                        : ""
                    }
                    ${
                      completed
                        ? "completed"
                        : ""
                    }
                  "
                  data-lesson-index="${index}"
                >

                  <div
                    class="aba-lesson-number"
                  >

                    ${
                      completed
                        ? "✓"
                        : index + 1
                    }

                  </div>


                  <div
                    class="aba-lesson-info"
                  >

                    <strong>
                      ${escapeHTML(
                        lesson.title
                      )}
                    </strong>

                    <span>

                      ${
                        completed
                          ? "✓ Completed"
                          : "📖 ဖတ်ရန် နှိပ်ပါ"
                      }

                    </span>

                  </div>


                  <div
                    class="aba-lesson-arrow"
                  >
                    →
                  </div>

                </button>

              `;

            }
          ).join("")}

        </div>


        <!--
          Lesson Reader
          Lesson တစ်ခုနှိပ်လိုက်ရင်
          ဒီနေရာမှာ စာအပြည့်ပေါ်မယ်
        -->

        <div
          id="abaLessonViewer"
          class="aba-lesson-viewer"
        ></div>

      </div>

    `;


    /*
     * Lesson List Click
     */

    qsa(
      "[data-lesson-index]"
    ).forEach(
      function (button) {

        button.addEventListener(
          "click",
          function () {

            const index =
              parseInt(
                button.dataset.lessonIndex,
                10
              );

            openLesson(
              index
            );

          }
        );

      }
    );


    /*
     * ပထမဆုံး Lesson ကို ပြမယ်
     */

    renderLesson();

  }


  /* =========================================================
     OPEN LESSON
     ========================================================= */

  function openLesson(index) {

    if (
      index < 0 ||
      index >= lessons.length
    ) {

      return;

    }


    currentLessonIndex =
      index;


    saveCurrentLesson();


    currentSection =
      "lessons";


    try {

      localStorage.setItem(
        STORAGE_KEYS.lastSection,
        "lessons"
      );

    } catch (error) {}


    /*
     * Lessons Page ကို ပြန်တည်ဆောက်
     */

    const container =
      getMainContentContainer();


    renderLessonsPage(
      container
    );


    /*
     * Lesson ကို ပြ
     */

    renderLesson();


    /*
     * Lesson ဖတ်တဲ့နေရာကို
     * တန်းပြီး ရွှေ့
     */

    setTimeout(
      function () {

        const viewer =
          byId(
            "abaLessonViewer"
          );


        if (viewer) {

          viewer.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }

      },
      100
    );

  }


  /* =========================================================
     RENDER FULL LESSON
     ========================================================= */

  function renderLesson() {

    const viewer =
      byId(
        "abaLessonViewer"
      );


    if (!viewer) {
      return;
    }


    if (!lessons.length) {

      viewer.innerHTML = `

        <div class="aba-empty">

          သင်ခန်းစာ မရှိသေးပါ။

        </div>

      `;

      return;

    }


    const lesson =
      lessons[currentLessonIndex];


    const completed =
      isLessonCompleted(
        currentLessonIndex
      );


    const previousDisabled =
      currentLessonIndex <= 0;


    const nextDisabled =
      currentLessonIndex >=
      lessons.length - 1;


    viewer.innerHTML = `

      <article
        class="aba-lesson-card"
      >


        <div
          class="aba-lesson-header"
        >

          <div>

            <span
              class="aba-lesson-label"
            >

              LESSON
              ${currentLessonIndex + 1}
              /
              ${lessons.length}

            </span>


            <h2>
              ${escapeHTML(
                lesson.title
              )}
            </h2>


            ${
              lesson.intro
                ? `
                  <p
                    class="aba-lesson-intro"
                  >
                    ${escapeHTML(
                      lesson.intro
                    )}
                  </p>
                `
                : ""
            }

          </div>


          <div
            class="
              aba-lesson-status
              ${
                completed
                  ? "completed"
                  : ""
              }
            "
          >

            ${
              completed
                ? "✓ Completed"
                : "📖 Reading"
            }

          </div>

        </div>


        <!-- =========================================
             FULL LESSON CONTENT
             ========================================= -->

        <div
          class="aba-lesson-content"
        >

          ${lesson.body}

        </div>


        <!-- =========================================
             LESSON BUTTONS
             ========================================= -->

        <div
          class="aba-lesson-actions"
        >

          <button
            class="aba-secondary-btn"
            id="previousLessonBtn"
            ${
              previousDisabled
                ? "disabled"
                : ""
            }
          >

            ← Previous

          </button>


          <button
            class="
              ${
                completed
                  ? "aba-warning-btn"
                  : "aba-complete-btn"
              }
            "
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
            ${
              nextDisabled
                ? "disabled"
                : ""
            }
          >

            Next →

          </button>

        </div>


      </article>

    `;


    /*
     * Previous
     */

    const previousButton =
      byId(
        "previousLessonBtn"
      );


    if (previousButton) {

      previousButton.addEventListener(
        "click",
        function () {

          previousLesson();

        }
      );

    }


    /*
     * Next
     */

    const nextButton =
      byId(
        "nextLessonBtn"
      );


    if (nextButton) {

      nextButton.addEventListener(
        "click",
        function () {

          nextLesson();

        }
      );

    }


    /*
     * Completed
     */

    const completeButton =
      byId(
        "completeLessonBtn"
      );


    if (completeButton) {

      completeButton.addEventListener(
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


    updateLessonListActive();

  }


  /* =========================================================
     PREVIOUS LESSON
     ========================================================= */

  function previousLesson() {

    if (
      currentLessonIndex <= 0
    ) {

      return;

    }


    currentLessonIndex--;

    saveCurrentLesson();

    renderLesson();

    scrollToLessonReader();

  }


  /* =========================================================
     NEXT LESSON
     ========================================================= */

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

    scrollToLessonReader();

  }


  /* =========================================================
     SCROLL TO LESSON
     ========================================================= */

  function scrollToLessonReader() {

    const viewer =
      byId(
        "abaLessonViewer"
      );


    if (viewer) {

      setTimeout(
        function () {

          viewer.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        },
        50
      );

    }

  }


  /* =========================================================
     LESSON ACTIVE STATE
     ========================================================= */

  function updateLessonListActive() {

    qsa(
      "[data-lesson-index]"
    ).forEach(
      function (button) {

        const index =
          parseInt(
            button.dataset.lessonIndex,
            10
          );


        button.classList.toggle(
          "current",
          index ===
          currentLessonIndex
        );


        button.classList.toggle(
          "completed",
          isLessonCompleted(index)
        );


        const number =
          qs(
            ".aba-lesson-number",
            button
          );


        if (number) {

          number.textContent =
            isLessonCompleted(index)
              ? "✓"
              : index + 1;

        }


        const status =
          qs(
            ".aba-lesson-info span",
            button
          );


        if (status) {

          status.textContent =
            isLessonCompleted(index)
              ? "✓ Completed"
              : "📖 ဖတ်ရန် နှိပ်ပါ";

        }

      }
    );

  }


  /* =========================================================
     PROGRESS PAGE
     ========================================================= */

  function renderProgressPage(
    container
  ) {

    const total =
      lessons.length;

    const completed =
      getCompletedCount();

    const percent =
      getProgressPercent();


    container.innerHTML = `

      <div class="aba-progress-page">

        <div class="aba-page-header">

          <div>

            <h1>
              My Progress
            </h1>

            <p>
              သင့်ရဲ့ Learning Progress
            </p>

          </div>

        </div>


        <div
          class="aba-progress-main-card"
        >

          <div
            class="aba-progress-circle"
          >

            <span>
              ${percent}%
            </span>

          </div>


          <div>

            <h2>
              Learning Progress
            </h2>

            <p>
              ${completed}
              /
              ${total}
              Lessons Completed
            </p>

          </div>

        </div>


        <div
          class="aba-progress-track"
        >

          <div
            class="aba-progress-fill"
            style="width:${percent}%"
          ></div>

        </div>


        <div
          class="aba-progress-list"
        >

          ${lessons.map(
            function (lesson, index) {

              const completed =
                isLessonCompleted(index);


              return `

                <div
                  class="aba-progress-row"
                  data-progress-index="${index}"
                >

                  <div>

                    <strong>
                      ${index + 1}.
                      ${escapeHTML(
                        lesson.title
                      )}
                    </strong>

                  </div>


                  <span
                    class="${
                      completed
                        ? "status-completed"
                        : "status-pending"
                    }"
                  >

                    ${
                      completed
                        ? "✓ Completed"
                        : "○ Pending"
                    }

                  </span>

                </div>

              `;

            }
          ).join("")}

        </div>

      </div>

    `;


    /*
     * Progress row ကို နှိပ်ရင်
     * အဲဒီ Lesson ကို ဖွင့်မယ်
     */

    qsa(
      "[data-progress-index]"
    ).forEach(
      function (row) {

        row.style.cursor =
          "pointer";


        row.addEventListener(
          "click",
          function () {

            const index =
              parseInt(
                row.dataset.progressIndex,
                10
              );


            openLesson(
              index
            );

          }
        );

      }
    );

  }


  /* =========================================================
     COURSES
     ========================================================= */

  function renderCourses(
    container
  ) {

    container.innerHTML = `

      <div class="aba-courses-page">

        <div class="aba-page-header">

          <div>

            <h1>
              My Courses
            </h1>

            <p>
              Aung Business Academy
              Professional Courses
            </p>

          </div>

        </div>


        <div
          class="aba-course-card"
        >

          <div
            class="aba-course-icon"
          >
            📊
          </div>


          <div
            class="aba-course-info"
          >

            <span>
              PROFESSIONAL COURSE
            </span>


            <h2>
              Sales Management Mastery
            </h2>


            <p>
              Sales Management၊ KPI၊
              Team Leadership၊ Customer Management၊
              Distribution၊ Forecasting နှင့်
              Business Execution တို့ကို
              လေ့လာနိုင်ပါသည်။
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


    const button =
      byId(
        "startCourseBtn"
      );


    if (button) {

      button.addEventListener(
        "click",
        function () {

          openLesson(
            findNextIncompleteLesson() === -1
              ? 0
              : findNextIncompleteLesson()
          );

        }
      );

    }

  }


  /* =========================================================
     SALES MANAGER
     ========================================================= */

  function renderSalesManager(
    container
  ) {

    container.innerHTML = `

      <div
        class="aba-tool-page"
      >

        <div
          class="aba-page-header"
        >

          <div>

            <h1>
              Sales Manager
            </h1>

            <p>
              Sales Team ကို
              Target မှ Result အထိ
              စနစ်တကျ စီမံခန့်ခွဲရန်။
            </p>

          </div>

        </div>


        <div
          class="aba-tool-grid"
        >

          <div
            class="aba-tool-card"
          >

            <h3>
              🎯 Target Management
            </h3>

            <p>
              Monthly Target ကို
              Weekly နှင့် Daily Execution
              အဖြစ် ခွဲခြမ်းပါ။
            </p>

          </div>


          <div
            class="aba-tool-card"
          >

            <h3>
              👥 Team Management
            </h3>

            <p>
              Clear Expectations၊
              Coaching၊ Feedback နှင့်
              Accountability ကို အသုံးပြုပါ။
            </p>

          </div>


          <div
            class="aba-tool-card"
          >

            <h3>
              📊 KPI Management
            </h3>

            <p>
              Sales Achievement၊
              Productivity၊ Distribution နှင့်
              Customer KPI များကို စောင့်ကြည့်ပါ။
            </p>

          </div>


          <div
            class="aba-tool-card"
          >

            <h3>
              📈 Market Execution
            </h3>

            <p>
              Market Visit၊ Customer Visit နှင့်
              Distribution Execution ကို
              စောင့်ကြည့်ပါ။
            </p>

          </div>

        </div>

      </div>

    `;

  }


  /* =========================================================
     PRICING CALCULATOR
     ========================================================= */

  function renderPricingCalculator(
    container
  ) {

    container.innerHTML = `

      <div
        class="aba-tool-page"
      >

        <div
          class="aba-page-header"
        >

          <div>

            <h1>
              Pricing Calculator
            </h1>

            <p>
              Cost နှင့် Margin အပေါ်မူတည်ပြီး
              Selling Price တွက်ချက်ရန်။
            </p>

          </div>

        </div>


        <div
          class="aba-calculator-card"
        >

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
      byId(
        "calculatePriceBtn"
      );


    if (button) {

      button.addEventListener(
        "click",
        function () {

          const cost =
            parseFloat(
              byId(
                "calcCost"
              ).value
            );


          const margin =
            parseFloat(
              byId(
                "calcMargin"
              ).value
            );


          const result =
            byId(
              "priceResult"
            );


          if (
            isNaN(cost) ||
            isNaN(margin) ||
            margin < 0 ||
            margin >= 100
          ) {

            result.innerHTML =
              "Cost Price နှင့် Margin % ကို မှန်ကန်စွာ ထည့်ပါ။";

            return;

          }


          const sellingPrice =
            cost /
            (
              1 -
              margin / 100
            );


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
     REPORTS
     ========================================================= */

  function renderReports(
    container
  ) {

    container.innerHTML = `

      <div
        class="aba-tool-page"
      >

        <div
          class="aba-page-header"
        >

          <div>

            <h1>
              Reports
            </h1>

            <p>
              Learning Performance Report
            </p>

          </div>

        </div>


        <div
          class="aba-report-grid"
        >

          <div
            class="aba-report-card"
          >

            <span>
              Learning Progress
            </span>

            <strong>
              ${getProgressPercent()}%
            </strong>

          </div>


          <div
            class="aba-report-card"
          >

            <span>
              Completed Lessons
            </span>

            <strong>
              ${getCompletedCount()}
            </strong>

          </div>


          <div
            class="aba-report-card"
          >

            <span>
              Total Lessons
            </span>

            <strong>
              ${lessons.length}
            </strong>

          </div>

        </div>

      </div>

    `;

  }


  /* =========================================================
     AI BUSINESS COACH
     ========================================================= */

  function renderAIBusinessCoach(
    container
  ) {

    container.innerHTML = `

      <div
        class="aba-tool-page"
      >

        <div
          class="aba-page-header"
        >

          <div>

            <h1>
              AI Business Coach
            </h1>

            <p>
              Business Problem တစ်ခုရေးပြီး
              Coaching Framework ရယူပါ။
            </p>

          </div>

        </div>


        <div
          class="aba-ai-card"
        >

          <textarea
            id="aiBusinessQuestion"
            rows="7"
            placeholder="ဥပမာ - Sales Target မပြည့်တဲ့ Team ကို ဘယ်လို Coaching လုပ်သင့်လဲ?"
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
      byId(
        "aiCoachBtn"
      );


    if (button) {

      button.addEventListener(
        "click",
        function () {

          const question =
            byId(
              "aiBusinessQuestion"
            )
              .value
              .trim();


          const result =
            byId(
              "aiCoachResult"
            );


          if (!question) {

            result.innerHTML =
              "<p>Business Question တစ်ခုရေးပါ။</p>";

            return;

          }


          result.innerHTML = `

            <h3>
              Coaching Framework
            </h3>


            <ol>

              <li>
                Problem ကို တိတိကျကျ သတ်မှတ်ပါ။
              </li>

              <li>
                Data နှင့် Facts ကို စစ်ဆေးပါ။
              </li>

              <li>
                Root Cause ကို ရှာဖွေပါ။
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

              <strong>
                Your Question:
              </strong>

              ${escapeHTML(question)}

            </p>

          `;

        }
      );

    }

  }


  /* =========================================================
     AI TOOLS
     ========================================================= */

  function renderAITools(
    container
  ) {

    container.innerHTML = `

      <div
        class="aba-tool-page"
      >

        <div
          class="aba-page-header"
        >

          <div>

            <h1>
              AI Tools
            </h1>

            <p>
              Business Management အတွက်
              AI Tools
            </p>

          </div>

        </div>


        <div
          class="aba-tool-grid"
        >

          <div
            class="aba-tool-card"
          >

            <h3>
              🧠 Business Ideas
            </h3>

            <p>
              Business Idea Generation
            </p>

          </div>


          <div
            class="aba-tool-card"
          >

            <h3>
              📣 Marketing Ideas
            </h3>

            <p>
              Marketing Campaign Planning
            </p>

          </div>


          <div
            class="aba-tool-card"
          >

            <h3>
              🎯 Sales Strategy
            </h3>

            <p>
              Sales Growth Strategy
            </p>

          </div>


          <div
            class="aba-tool-card"
          >

            <h3>
              👥 Team Coaching
            </h3>

            <p>
              Team Performance Coaching
            </p>

          </div>

        </div>

      </div>

    `;

  }


  /* =========================================================
     SETTINGS
     ========================================================= */

  function renderSettings(
    container
  ) {

    const savedName =
      localStorage.getItem(
        STORAGE_KEYS.userName
      ) ||
      "Aung Zar Ni Win";


    container.innerHTML = `

      <div
        class="aba-settings-page"
      >

        <div
          class="aba-page-header"
        >

          <div>

            <h1>
              Settings
            </h1>

            <p>
              Academy Settings
            </p>

          </div>

        </div>


        <div
          class="aba-settings-card"
        >

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


        <div
          class="aba-settings-card"
        >

          <h3>
            Learning Progress
          </h3>


          <p>
            Current Progress:
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


        <div
          class="aba-settings-card"
        >

          <h3>
            About
          </h3>

          <p>
            Aung Business Academy V8.0 Professional
          </p>

        </div>

      </div>

    `;


    const saveButton =
      byId(
        "saveSettingsBtn"
      );


    if (saveButton) {

      saveButton.addEventListener(
        "click",
        function () {

          const name =
            byId(
              "settingsUserName"
            )
              .value
              .trim();


          localStorage.setItem(
            STORAGE_KEYS.userName,
            name ||
            "Aung Zar Ni Win"
          );


          alert(
            "Settings saved successfully."
          );


          updateUserProfile();

        }
      );

    }


    const resetButton =
      byId(
        "resetProgressBtn"
      );


    if (resetButton) {

      resetButton.addEventListener(
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


          currentLessonIndex =
            0;

          saveCurrentLesson();


          alert(
            "Learning Progress ကို Reset လုပ်ပြီးပါပြီ။"
          );


          renderSettings(
            container
          );

        }
      );

    }

  }


  /* =========================================================
     USER PROFILE
     ========================================================= */

  function updateUserProfile() {

    const savedName =
      localStorage.getItem(
        STORAGE_KEYS.userName
      ) ||
      "Aung Zar Ni Win";


    qsa(
      "[data-user-name], .user-name, #userName"
    ).forEach(
      function (element) {

        element.textContent =
          savedName;

      }
    );

  }


  /* =========================================================
     MOBILE SIDEBAR
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
    ).forEach(
      function (button) {

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

      }
    );

  }


  /* =========================================================
     NAVIGATION EVENTS
     ========================================================= */

  function setupNavigation() {

    qsa(
      "[data-section-link], [data-nav], [data-target], .nav-link, .sidebar-link"
    ).forEach(
      function (link) {

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

      }
    );

  }


  /* =========================================================
     LEGACY BUTTON SUPPORT
     ========================================================= */

  function setupLegacyNavigation() {

    const mapping = {

      dashboardBtn:
        "dashboard",

      dashboardLink:
        "dashboard",

      coursesBtn:
        "courses",

      coursesLink:
        "courses",

      lessonsBtn:
        "lessons",

      lessonsLink:
        "lessons",

      progressBtn:
        "progress",

      progressLink:
        "progress",

      salesBtn:
        "sales-manager",

      salesManagerBtn:
        "sales-manager",

      pricingBtn:
        "pricing-calculator",

      pricingCalculatorBtn:
        "pricing-calculator",

      reportsBtn:
        "reports",

      reportsLink:
        "reports",

      aiBtn:
        "ai-business-coach",

      aiCoachBtn:
        "ai-business-coach",

      aiToolsBtn:
        "ai-tools",

      settingsBtn:
        "settings",

      settingsLink:
        "settings"

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
     RUNTIME CSS
     ========================================================= */

  function injectAppStyles() {

    if (
      byId(
        "aba-app-runtime-styles"
      )
    ) {

      return;

    }


    const style =
      document.createElement(
        "style"
      );


    style.id =
      "aba-app-runtime-styles";


    style.textContent = `

      /* =========================================
         MAIN
         ========================================= */

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
        margin-bottom:20px;

      }


      .aba-page-header h1 {

        margin:0 0 8px;

      }


      .aba-page-header p {

        margin:0;
        opacity:.72;

      }


      /* =========================================
         STATS
         ========================================= */

      .aba-stats-grid {

        display:grid;
        grid-template-columns:
          repeat(4, 1fr);

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

        border:
          1px solid
          rgba(0,0,0,.08);

        box-shadow:
          0 5px 20px
          rgba(0,0,0,.05);

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


      /* =========================================
         CARDS
         ========================================= */

      .aba-dashboard-card,
      .aba-lesson-card,
      .aba-progress-main-card,
      .aba-settings-card,
      .aba-calculator-card,
      .aba-ai-card {

        background:#fff;

        border:
          1px solid
          rgba(0,0,0,.08);

        border-radius:18px;

        padding:24px;

        margin-bottom:20px;

        box-shadow:
          0 5px 20px
          rgba(0,0,0,.04);

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


      /* =========================================
         PROGRESS
         ========================================= */

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

        transition:
          width .3s ease;

      }


      .aba-progress-meta {

        display:flex;
        justify-content:space-between;

        margin-top:10px;

        font-size:13px;

        opacity:.7;

      }


      /* =========================================
         QUICK ACCESS
         ========================================= */

      .aba-quick-grid {

        display:grid;

        grid-template-columns:
          repeat(3,1fr);

        gap:14px;

      }


      .aba-quick-btn {

        border:
          1px solid
          rgba(0,0,0,.08);

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


      /* =========================================
         BUTTONS
         ========================================= */

      .aba-primary-btn,
      .aba-secondary-btn,
      .aba-complete-btn,
      .aba-warning-btn,
      .aba-danger-btn {

        border:0;

        border-radius:10px;

        padding:
          12px 18px;

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


      /* =========================================
         LESSON LIST
         ========================================= */

      .aba-lessons-list {

        display:flex;

        flex-direction:column;

        gap:10px;

        margin:
          22px 0 28px;

      }


      .aba-lesson-item {

        width:100%;

        display:flex;

        align-items:center;

        gap:14px;

        padding:16px;

        border-radius:14px;

        border:
          1px solid
          rgba(0,0,0,.08);

        background:#fff;

        cursor:pointer;

        text-align:left;

        transition:
          transform .15s ease,
          border-color .15s ease,
          background .15s ease;

      }


      .aba-lesson-item:hover {

        transform:
          translateY(-1px);

      }


      .aba-lesson-item.current {

        border-color:#2563eb;

        box-shadow:
          0 0 0 1px
          rgba(37,99,235,.15);

      }


      .aba-lesson-item.completed {

        background:#f0fdf4;

      }


      .aba-lesson-number {

        width:40px;
        height:40px;

        flex:0 0 40px;

        border-radius:50%;

        display:flex;

        align-items:center;
        justify-content:center;

        background:#eff6ff;

        font-weight:700;

      }


      .aba-lesson-info {

        flex:1;

        min-width:0;

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


      /* =========================================
         LESSON READER
         ========================================= */

      .aba-lesson-viewer {

        width:100%;

        max-width:1200px;

        margin:0 auto;

        padding:
          0 20px 50px;

        scroll-margin-top:20px;

      }


      .aba-lesson-card {

        width:100%;

        background:#fff;

        border:
          1px solid
          rgba(0,0,0,.08);

        border-radius:20px;

        padding:28px;

        box-shadow:
          0 8px 30px
          rgba(0,0,0,.05);

      }


      .aba-lesson-header {

        display:flex;

        align-items:flex-start;

        justify-content:space-between;

        gap:20px;

        padding-bottom:22px;

        margin-bottom:22px;

        border-bottom:
          1px solid
          rgba(0,0,0,.08);

      }


      .aba-lesson-label {

        font-size:12px;

        font-weight:700;

        opacity:.6;

        letter-spacing:.5px;

      }


      .aba-lesson-header h2 {

        margin:
          8px 0;

        font-size:29px;

        line-height:1.4;

      }


      .aba-lesson-intro {

        margin:0;

        opacity:.72;

        line-height:1.8;

      }


      .aba-lesson-status {

        white-space:nowrap;

        padding:
          8px 12px;

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


      /* =========================================
         IMPORTANT:
         FULL LONG TEXT SCROLL
         ========================================= */

      .aba-lesson-content {

        width:100%;

        overflow:visible;

        height:auto;

        max-height:none;

        line-height:2;

        font-size:16px;

        word-break:normal;

        overflow-wrap:anywhere;

      }


      .aba-lesson-content h3 {

        margin:
          30px 0 12px;

        line-height:1.5;

      }


      .aba-lesson-content h4 {

        margin:
          22px 0 10px;

      }


      .aba-lesson-content p {

        margin:
          0 0 18px;

      }


      .aba-lesson-content ul,
      .aba-lesson-content ol {

        margin:
          0 0 20px;

        padding-left:25px;

      }


      .aba-lesson-content li {

        margin-bottom:9px;

      }


      .aba-lesson-content .lesson-note {

        margin:
          25px 0;

        padding:18px;

        border-left:
          4px solid
          #2563eb;

        background:#eff6ff;

        border-radius:10px;

        line-height:1.9;

      }


      .aba-lesson-actions {

        display:grid;

        grid-template-columns:
          1fr auto 1fr;

        align-items:center;

        gap:10px;

        margin-top:32px;

        padding-top:22px;

        border-top:
          1px solid
          rgba(0,0,0,.08);

      }


      .aba-lesson-actions
      .aba-primary-btn {

        justify-self:end;

      }


      .aba-lesson-actions
      .aba-secondary-btn {

        justify-self:start;

      }


      .aba-lesson-actions
      .aba-complete-btn,
      .aba-lesson-actions
      .aba-warning-btn {

        justify-self:center;

      }


      /* =========================================
         PROGRESS PAGE
         ========================================= */

      .aba-progress-main-card {

        display:flex;

        align-items:center;

        gap:24px;

      }


      .aba-progress-circle {

        width:105px;
        height:105px;

        flex:0 0 105px;

        border-radius:50%;

        display:flex;

        align-items:center;

        justify-content:center;

        background:#eff6ff;

        border:
          8px solid
          #2563eb;

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

        border-bottom:
          1px solid
          rgba(0,0,0,.07);

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


      /* =========================================
         COURSE
         ========================================= */

      .aba-course-card {

        display:flex;

        gap:20px;

        padding:25px;

        border-radius:18px;

        background:#fff;

        border:
          1px solid
          rgba(0,0,0,.08);

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

        margin:
          7px 0;

      }


      .aba-course-info p {

        line-height:1.8;

        margin-bottom:18px;

      }


      /* =========================================
         TOOLS
         ========================================= */

      .aba-tool-grid,
      .aba-report-grid {

        display:grid;

        grid-template-columns:
          repeat(2,1fr);

        gap:16px;

      }


      .aba-tool-card,
      .aba-report-card {

        padding:22px;

        background:#fff;

        border:
          1px solid
          rgba(0,0,0,.08);

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


      /* =========================================
         INPUTS
         ========================================= */

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

        border:
          1px solid
          #d1d5db;

        border-radius:10px;

        font:inherit;

        box-sizing:border-box;

      }


      .aba-ai-card textarea {

        resize:vertical;

        margin-bottom:15px;

      }


      .aba-calculator-result,
      .aba-ai-result {

        margin-top:20px;

        padding:18px;

        border-radius:12px;

        background:#f8fafc;

        line-height:1.8;

      }


      /* =========================================
         MOBILE
         ========================================= */

      @media (max-width:900px) {

        .aba-stats-grid {

          grid-template-columns:
            repeat(2,1fr);

        }

        .aba-quick-grid {

          grid-template-columns:
            repeat(2,1fr);

        }

        .aba-tool-grid,
        .aba-report-grid {

          grid-template-columns:1fr;

        }

      }


      @media (max-width:600px) {

        .aba-dashboard,
        .aba-lessons-page,
        .aba-progress-page,
        .aba-courses-page,
        .aba-tool-page,
        .aba-settings-page {

          padding:14px;

        }


        .aba-lesson-viewer {

          padding:
            0 14px 35px;

        }


        .aba-lesson-card {

          padding:19px;

          border-radius:16px;

        }


        .aba-stats-grid {

          grid-template-columns:
            1fr 1fr;

          gap:10px;

        }


        .aba-stat-card {

          padding:14px;

        }


        .aba-stat-card strong {

          font-size:21px;

        }


        .aba-quick-grid {

          grid-template-columns:
            1fr 1fr;

        }


        .aba-lesson-header {

          flex-direction:column;

        }


        .aba-lesson-header h2 {

          font-size:23px;

        }


        .aba-lesson-content {

          font-size:15px;

          line-height:1.95;

        }


        /*
         * Mobile မှာလည်း
         * စာအရှည်ကို အပြည့်ဖတ်နိုင်မယ်
         */

        .aba-lesson-content {

          max-height:none;

          overflow:visible;

        }


        .aba-lesson-actions {

          grid-template-columns:1fr;

        }


        .aba-lesson-actions button {

          width:100%;

          justify-self:stretch !important;

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


    document.head.appendChild(
      style
    );

  }


  /* =========================================================
     UPDATE PROGRESS UI
     ========================================================= */

  function updateAllProgressUI() {

    const percent =
      getProgressPercent();


    qsa(
      ".aba-progress-fill"
    ).forEach(
      function (bar) {

        bar.style.width =
          percent + "%";

      }
    );


    qsa(
      ".aba-page-progress"
    ).forEach(
      function (element) {

        element.textContent =
          percent + "%";

      }
    );

  }


  /* =========================================================
     INITIALIZE APP
     ========================================================= */

  function initApp() {

    /*
     * 1. Load lesson data
     */

    loadLessons();


    /*
     * 2. Load completed lessons
     */

    loadCompletedLessons();


    /*
     * 3. Load last lesson
     */

    loadCurrentLesson();


    /*
     * 4. Add required CSS
     */

    injectAppStyles();


    /*
     * 5. Navigation
     */

    setupNavigation();

    setupLegacyNavigation();

    setupMobileMenu();


    /*
     * 6. User
     */

    updateUserProfile();


    /*
     * 7. Dashboard
     */

    const existingDashboard =
      qs(
        '[data-section="dashboard"], #dashboard'
      );


    if (existingDashboard) {

      showSection(
        "dashboard"
      );

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
      "Total Lessons:",
      lessons.length
    );


    console.log(
      "Completed Lessons:",
      completedLessons.length
    );

  }


  /* =========================================================
     START
     ========================================================= */

  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      initApp
    );

  } else {

    initApp();

  }


  /* =========================================================
     GLOBAL API
     ========================================================= */

  window.AungBusinessAcademy = {

    lessons: function () {

      return lessons;

    },


    openLesson: function (index) {

      openLesson(index);

    },


    nextLesson: function () {

      nextLesson();

    },


    previousLesson: function () {

      previousLesson();

    },


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

        total:
          lessons.length,

        completed:
          getCompletedCount(),

        percent:
          getProgressPercent()

      };

    },


    showSection: function (
      section
    ) {

      showSection(
        section
      );

    },


    resetProgress: function () {

      completedLessons = [];

      saveCompletedLessons();

      currentLessonIndex =
        0;

      saveCurrentLesson();

      updateAllProgressUI();

    }

  };

})();
