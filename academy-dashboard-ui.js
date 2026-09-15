/* =========================================================
   AUNG BUSINESS ACADEMY
   DASHBOARD COURSE UI
   Version 1.0 Professional
   ========================================================= */

(function () {
  "use strict";

  const APP = window.AungBusinessAcademy =
    window.AungBusinessAcademy || {};

  const COURSE_IDS = [
    "business-fundamentals",
    "sales-management",
    "marketing-management",
    "finance-accounting",
    "hr-people-management"
  ];

  let dashboardRoot = null;

  /* =========================================================
     HELPERS
     ========================================================= */

  function escapeHTML(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function getCourses() {
    const map = {};

    if (Array.isArray(APP.COURSES)) {
      APP.COURSES.forEach(function (course) {
        if (course && course.id) {
          map[course.id] = course;
        }
      });
    }

    if (APP.SALES_COURSE) {
      map[APP.SALES_COURSE.id] = APP.SALES_COURSE;
    }

    return COURSE_IDS
      .map(function (id) {
        return map[id];
      })
      .filter(Boolean);
  }

  function getLessons(course) {
    if (!course) return [];

    return Array.isArray(course.lessons)
      ? course.lessons
      : [];
  }

  function getCompleted(course) {
    if (!course) return new Set();

    const completed = new Set();

    try {
      if (
        window.AungLessonSystem &&
        typeof window.AungLessonSystem.isCompleted ===
          "function"
      ) {
        getLessons(course).forEach(function (lesson) {
          if (
            window.AungLessonSystem.isCompleted(
              course.id,
              lesson.id
            )
          ) {
            completed.add(lesson.id);
          }
        });
      }
    } catch (error) {}

    return completed;
  }

  function getProgress(course) {
    const lessons = getLessons(course);

    if (!lessons.length) {
      return {
        completed: 0,
        total: 0,
        percent: 0
      };
    }

    const completed = getCompleted(course).size;

    return {
      completed: completed,
      total: lessons.length,
      percent: Math.round(
        completed / lessons.length * 100
      )
    };
  }

  function getFirstIncomplete(course) {
    const lessons = getLessons(course);
    const completed = getCompleted(course);

    for (let i = 0; i < lessons.length; i++) {
      if (!completed.has(lessons[i].id)) {
        return lessons[i];
      }
    }

    return lessons[0] || null;
  }

  function openCourse(courseId) {
    if (
      window.AungCourseUI &&
      typeof window.AungCourseUI.openCourse ===
        "function"
    ) {
      window.AungCourseUI.openCourse(courseId);
    }
  }

  function openLesson(course, lesson) {
    if (!course || !lesson) return;

    if (
      window.AungLessonSystem &&
      typeof window.AungLessonSystem.openLesson ===
        "function"
    ) {
      window.AungLessonSystem.openLesson(
        course.id,
        lesson.id
      );
      return;
    }

    openCourse(course.id);
  }

  /* =========================================================
     STYLE
     ========================================================= */

  function addStyles() {
    if (
      document.getElementById(
        "aung-dashboard-course-style"
      )
    ) {
      return;
    }

    const style = document.createElement("style");

    style.id =
      "aung-dashboard-course-style";

    style.textContent = `
      #aung-dashboard-course-root {
        width:100%;
        max-width:1200px;
        margin:0 auto;
        padding:20px;
        font-family:
          Arial,
          "Noto Sans Myanmar",
          "Myanmar Text",
          sans-serif;
      }

      #aung-dashboard-course-root *,
      #aung-dashboard-course-root *::before,
      #aung-dashboard-course-root *::after {
        box-sizing:border-box;
      }

      .adc-welcome {
        display:flex;
        justify-content:space-between;
        align-items:center;
        gap:20px;
        margin-bottom:22px;
      }

      .adc-welcome h1 {
        margin:0;
        color:#0f172a;
        font-size:28px;
        font-weight:800;
        line-height:1.35;
      }

      .adc-welcome p {
        margin:7px 0 0;
        color:#64748b;
        font-size:14px;
        line-height:1.6;
      }

      .adc-status {
        padding:9px 13px;
        border-radius:999px;
        background:#eff6ff;
        color:#2563eb;
        font-size:12px;
        font-weight:800;
        white-space:nowrap;
      }

      .adc-stats {
        display:grid;
        grid-template-columns:
          repeat(4,minmax(0,1fr));
        gap:15px;
        margin-bottom:24px;
      }

      .adc-stat {
        background:#fff;
        border:1px solid #e2e8f0;
        border-radius:16px;
        padding:18px;
        box-shadow:
          0 6px 20px rgba(15,23,42,.05);
      }

      .adc-stat-icon {
        font-size:23px;
      }

      .adc-stat-number {
        margin-top:9px;
        color:#0f172a;
        font-size:25px;
        font-weight:800;
      }

      .adc-stat-label {
        margin-top:4px;
        color:#64748b;
        font-size:12px;
      }

      .adc-section-head {
        display:flex;
        justify-content:space-between;
        align-items:center;
        gap:12px;
        margin:0 0 13px;
      }

      .adc-section-head h2 {
        margin:0;
        color:#0f172a;
        font-size:19px;
      }

      .adc-view-all {
        border:0;
        background:none;
        color:#2563eb;
        cursor:pointer;
        font-weight:800;
        font-size:13px;
      }

      .adc-feature {
        display:grid;
        grid-template-columns:
          minmax(0,1.4fr)
          minmax(260px,.6fr);
        gap:18px;
        margin-bottom:25px;
      }

      .adc-current-course {
        border-radius:18px;
        padding:22px;
        background:
          linear-gradient(
            135deg,
            #0f172a,
            #1e293b
          );
        color:#fff;
        min-height:210px;
      }

      .adc-current-label {
        color:#93c5fd;
        font-size:11px;
        font-weight:800;
        letter-spacing:.7px;
      }

      .adc-current-course h3 {
        margin:9px 0 5px;
        font-size:23px;
        line-height:1.4;
      }

      .adc-current-course p {
        margin:0;
        color:#cbd5e1;
        font-size:13px;
        line-height:1.7;
      }

      .adc-current-progress {
        margin-top:22px;
      }

      .adc-current-progress-top {
        display:flex;
        justify-content:space-between;
        color:#cbd5e1;
        font-size:12px;
        margin-bottom:7px;
      }

      .adc-progress {
        width:100%;
        height:8px;
        overflow:hidden;
        background:#e2e8f0;
        border-radius:999px;
      }

      .adc-progress.dark {
        background:rgba(255,255,255,.16);
      }

      .adc-progress-bar {
        height:100%;
        border-radius:999px;
        background:#2563eb;
      }

      .adc-progress.dark
      .adc-progress-bar {
        background:#60a5fa;
      }

      .adc-current-button {
        margin-top:18px;
        border:0;
        border-radius:10px;
        padding:11px 15px;
        background:#2563eb;
        color:#fff;
        font-size:13px;
        font-weight:800;
        cursor:pointer;
      }

      .adc-goal {
        background:#fff;
        border:1px solid #e2e8f0;
        border-radius:18px;
        padding:22px;
        box-shadow:
          0 6px 20px rgba(15,23,42,.05);
      }

      .adc-goal h3 {
        margin:0;
        font-size:17px;
        color:#0f172a;
      }

      .adc-goal p {
        margin:6px 0 18px;
        color:#64748b;
        font-size:13px;
      }

      .adc-goal-circle {
        width:105px;
        height:105px;
        margin:0 auto;
        border-radius:50%;
        border:9px solid #e2e8f0;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
      }

      .adc-goal-circle strong {
        font-size:22px;
        color:#0f172a;
      }

      .adc-goal-circle span {
        color:#64748b;
        font-size:10px;
      }

      .adc-course-grid {
        display:grid;
        grid-template-columns:
          repeat(3,minmax(0,1fr));
        gap:15px;
      }

      .adc-course-card {
        background:#fff;
        border:1px solid #e2e8f0;
        border-radius:16px;
        padding:17px;
        box-shadow:
          0 6px 20px rgba(15,23,42,.04);
      }

      .adc-course-top {
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:10px;
      }

      .adc-course-icon {
        width:45px;
        height:45px;
        display:flex;
        align-items:center;
        justify-content:center;
        border-radius:13px;
        background:#f1f5f9;
        font-size:23px;
      }

      .adc-course-category {
        padding:5px 8px;
        border-radius:999px;
        background:#f8fafc;
        color:#64748b;
        font-size:10px;
        font-weight:800;
      }

      .adc-course-card h3 {
        margin:14px 0 4px;
        color:#0f172a;
        font-size:16px;
        line-height:1.5;
      }

      .adc-course-burmese {
        min-height:22px;
        color:#64748b;
        font-size:12px;
      }

      .adc-course-meta {
        margin:13px 0 9px;
        display:flex;
        justify-content:space-between;
        color:#64748b;
        font-size:11px;
      }

      .adc-course-meta strong {
        color:#0f172a;
      }

      .adc-course-button {
        width:100%;
        margin-top:13px;
        border:0;
        border-radius:10px;
        padding:10px;
        background:#f1f5f9;
        color:#0f172a;
        font-weight:800;
        font-size:12px;
        cursor:pointer;
      }

      .adc-course-button:hover {
        background:#e2e8f0;
      }

      @media(max-width:950px) {
        .adc-stats {
          grid-template-columns:
            repeat(2,minmax(0,1fr));
        }

        .adc-feature {
          grid-template-columns:1fr;
        }

        .adc-course-grid {
          grid-template-columns:
            repeat(2,minmax(0,1fr));
        }
      }

      @media(max-width:650px) {
        #aung-dashboard-course-root {
          padding:14px;
        }

        .adc-welcome {
          align-items:flex-start;
          flex-direction:column;
        }

        .adc-welcome h1 {
          font-size:22px;
        }

        .adc-stats {
          grid-template-columns:
            repeat(2,minmax(0,1fr));
          gap:10px;
        }

        .adc-stat {
          padding:14px;
        }

        .adc-stat-number {
          font-size:21px;
        }

        .adc-course-grid {
          grid-template-columns:1fr;
        }

        .adc-current-course {
          padding:18px;
        }
      }
    `;

    document.head.appendChild(style);
  }

  /* =========================================================
     RENDER
     ========================================================= */

  function render() {
    addStyles();

    if (!dashboardRoot) {
      dashboardRoot =
        document.getElementById(
          "aung-dashboard-course-root"
        );
    }

    if (!dashboardRoot) {
      dashboardRoot = document.createElement("section");
      dashboardRoot.id =
        "aung-dashboard-course-root";

      const main =
        document.querySelector(
          "main"
        ) ||
        document.querySelector(
          ".main-content"
        ) ||
        document.querySelector(
          ".content"
        ) ||
        document.body;

      main.appendChild(dashboardRoot);
    }

    const courses = getCourses();

    let totalLessons = 0;
    let totalCompleted = 0;

    courses.forEach(function (course) {
      const progress = getProgress(course);

      totalLessons += progress.total;
      totalCompleted += progress.completed;
    });

    const overallPercent =
      totalLessons
        ? Math.round(
            totalCompleted /
            totalLessons *
            100
          )
        : 0;

    let currentCourse = null;

    for (let i = 0; i < courses.length; i++) {
      const progress = getProgress(courses[i]);

      if (progress.completed < progress.total) {
        currentCourse = courses[i];
        break;
      }
    }

    if (!currentCourse) {
      currentCourse = courses[0] || null;
    }

    const currentProgress =
      getProgress(currentCourse);

    const currentLesson =
      getFirstIncomplete(currentCourse);

    let courseCards = "";

    courses.forEach(function (course) {
      const progress =
        getProgress(course);

      courseCards += `
        <div class="adc-course-card">

          <div class="adc-course-top">

            <div class="adc-course-icon">
              ${escapeHTML(course.icon || "📚")}
            </div>

            <div class="adc-course-category">
              ${escapeHTML(
                course.category || "BUSINESS"
              )}
            </div>

          </div>

          <h3>
            ${escapeHTML(
              course.title || "Course"
            )}
          </h3>

          <div class="adc-course-burmese">
            ${escapeHTML(
              course.burmeseTitle || ""
            )}
          </div>

          <div class="adc-course-meta">

            <span>
              📖
              <strong>
                ${progress.total}
              </strong>
              Lessons
            </span>

            <span>
              <strong>
                ${progress.percent}%
              </strong>
            </span>

          </div>

          <div class="adc-progress">

            <div
              class="adc-progress-bar"
              style="
                width:${progress.percent}%;
              "
            ></div>

          </div>

          <button
            class="adc-course-button"
            data-dashboard-course="${escapeHTML(
              course.id
            )}"
          >
            ${
              progress.completed > 0
                ? "▶ Continue Course"
                : "📚 Start Course"
            }
          </button>

        </div>
      `;
    });

    dashboardRoot.innerHTML = `
      <div class="adc-welcome">

        <div>
          <h1>
            Welcome to Aung Business Academy
          </h1>

          <p>
            လုပ်ငန်းစီမံခန့်ခွဲမှု၊ Sales၊
            Marketing၊ Finance နှင့် HR ကို
            Professional Level ဖြင့် လေ့လာပါ။
          </p>
        </div>

        <div class="adc-status">
          V8.0 Professional
        </div>

      </div>

      <div class="adc-stats">

        <div class="adc-stat">
          <div class="adc-stat-icon">📚</div>

          <div class="adc-stat-number">
            ${courses.length}
          </div>

          <div class="adc-stat-label">
            Total Courses
          </div>
        </div>

        <div class="adc-stat">
          <div class="adc-stat-icon">📖</div>

          <div class="adc-stat-number">
            ${totalLessons}
          </div>

          <div class="adc-stat-label">
            Total Lessons
          </div>
        </div>

        <div class="adc-stat">
          <div class="adc-stat-icon">✓</div>

          <div class="adc-stat-number">
            ${totalCompleted}
          </div>

          <div class="adc-stat-label">
            Completed Lessons
          </div>
        </div>

        <div class="adc-stat">
          <div class="adc-stat-icon">📈</div>

          <div class="adc-stat-number">
            ${overallPercent}%
          </div>

          <div class="adc-stat-label">
            Overall Progress
          </div>
        </div>

      </div>

      ${
        currentCourse
          ? `
            <div class="adc-section-head">
              <h2>🎯 Continue Learning</h2>
            </div>

            <div class="adc-feature">

              <div class="adc-current-course">

                <div class="adc-current-label">
                  CURRENT COURSE
                </div>

                <h3>
                  ${escapeHTML(
                    currentCourse.title || ""
                  )}
                </h3>

                <p>
                  ${escapeHTML(
                    currentCourse.burmeseTitle || ""
                  )}
                </p>

                <div class="adc-current-progress">

                  <div
                    class="adc-current-progress-top"
                  >
                    <span>
                      ${
                        currentProgress.completed
                      } /
                      ${
                        currentProgress.total
                      } Lessons
                    </span>

                    <strong>
                      ${
                        currentProgress.percent
                      }%
                    </strong>
                  </div>

                  <div class="adc-progress dark">
                    <div
                      class="adc-progress-bar"
                      style="
                        width:${
                          currentProgress.percent
                        }%;
                      "
                    ></div>
                  </div>

                </div>

                <button
                  class="adc-current-button"
                  id="adc-continue-button"
                >
                  ${
                    currentLesson
                      ? "▶ Continue Learning"
                      : "✓ Review Course"
                  }
                </button>

              </div>

              <div class="adc-goal">

                <h3>
                  🎯 Learning Progress
                </h3>

                <p>
                  Academy Overall Progress
                </p>

                <div class="adc-goal-circle">

                  <strong>
                    ${overallPercent}%
                  </strong>

                  <span>
                    COMPLETE
                  </span>

                </div>

              </div>

            </div>
          `
          : ""
      }

      <div class="adc-section-head">

        <h2>
          📚 My Courses
        </h2>

        <button
          class="adc-view-all"
          id="adc-view-all"
        >
          View All →
        </button>

      </div>

      <div class="adc-course-grid">
        ${
          courseCards ||
          `
            <div>
              Course မတွေ့သေးပါ။
            </div>
          `
        }
      </div>
    `;

    bindEvents(
      currentCourse,
      currentLesson
    );
  }

  /* =========================================================
     EVENTS
     ========================================================= */

  function bindEvents(
    currentCourse,
    currentLesson
  ) {
    if (!dashboardRoot) return;

    dashboardRoot
      .querySelectorAll(
        "[data-dashboard-course]"
      )
      .forEach(function (button) {

        button.addEventListener(
          "click",
          function () {

            const id =
              button.getAttribute(
                "data-dashboard-course"
              );

            openCourse(id);

          }
        );

      });

    const continueButton =
      document.getElementById(
        "adc-continue-button"
      );

    if (continueButton && currentCourse) {

      continueButton.addEventListener(
        "click",
        function () {

          if (currentLesson) {
            openLesson(
              currentCourse,
              currentLesson
            );
          } else {
            openCourse(
              currentCourse.id
            );
          }

        }
      );

    }

    const viewAll =
      document.getElementById(
        "adc-view-all"
      );

    if (viewAll) {

      viewAll.addEventListener(
        "click",
        function () {
          if (
            window.AungCourseUI &&
            typeof window.AungCourseUI.showCourses ===
              "function"
          ) {
            window.AungCourseUI.showCourses();
          }
        }
      );

    }
  }

  /* =========================================================
     PUBLIC API
     ========================================================= */

  window.AungDashboardUI = {
    render: render,
    refresh: render
  };

  /* =========================================================
     AUTO REFRESH
     ========================================================= */

  window.addEventListener(
    "aungAcademyProgressUpdated",
    function () {
      render();
    }
  );

  /* =========================================================
     INITIALIZE
     ========================================================= */

  function init() {
    /*
      Dashboard UI is available globally.
      We render after existing app has had time
      to create its main layout.
    */

    window.setTimeout(
      function () {
        render();
      },
      700
    );
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
