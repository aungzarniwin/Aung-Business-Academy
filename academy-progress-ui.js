/* =========================================================
   AUNG BUSINESS ACADEMY
   MY PROGRESS UI
   Version: 1.0 Professional
   ========================================================= */

(function () {
  "use strict";

  const APP = window.AungBusinessAcademy =
    window.AungBusinessAcademy || {};

  const COURSE_ORDER = [
    "business-fundamentals",
    "sales-management",
    "marketing-management",
    "finance-accounting",
    "hr-people-management"
  ];

  let root = null;

  /* =========================================================
     HELPERS
     ========================================================= */

  function esc(value) {
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
      map[APP.SALES_COURSE.id] =
        APP.SALES_COURSE;
    }

    return COURSE_ORDER
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
    const set = new Set();

    if (!course) return set;

    const lessons =
      getLessons(course);

    /*
      Primary source:
      AungLessonSystem
    */

    if (
      window.AungLessonSystem &&
      typeof window.AungLessonSystem.isCompleted ===
        "function"
    ) {
      lessons.forEach(function (lesson) {
        try {
          if (
            window.AungLessonSystem.isCompleted(
              course.id,
              lesson.id
            )
          ) {
            set.add(lesson.id);
          }
        } catch (error) {}
      });
    }

    /*
      Course-specific localStorage fallback
    */

    try {
      const key =
        "aung_business_academy_" +
        course.id +
        "_completed_v1";

      const stored =
        JSON.parse(
          localStorage.getItem(key) || "[]"
        );

      if (Array.isArray(stored)) {
        stored.forEach(function (id) {
          set.add(id);
        });
      }
    } catch (error) {}

    return set;
  }

  function getProgress(course) {
    const lessons =
      getLessons(course);

    const completed =
      getCompleted(course).size;

    const total =
      lessons.length;

    const percent =
      total
        ? Math.round(
            completed / total * 100
          )
        : 0;

    return {
      completed: completed,
      total: total,
      remaining:
        Math.max(
          0,
          total - completed
        ),
      percent: percent
    };
  }

  function getOverallProgress(courses) {
    let total = 0;
    let completed = 0;

    courses.forEach(function (course) {
      const p = getProgress(course);

      total += p.total;
      completed += p.completed;
    });

    return {
      total: total,
      completed: completed,
      remaining:
        Math.max(
          0,
          total - completed
        ),
      percent:
        total
          ? Math.round(
              completed / total * 100
            )
          : 0
    };
  }

  function getFirstIncomplete(course) {
    const lessons =
      getLessons(course);

    const completed =
      getCompleted(course);

    for (
      let i = 0;
      i < lessons.length;
      i++
    ) {
      if (
        !completed.has(
          lessons[i].id
        )
      ) {
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
      window.AungCourseUI.openCourse(
        courseId
      );
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
     STYLES
     ========================================================= */

  function injectStyles() {
    if (
      document.getElementById(
        "aung-progress-ui-style"
      )
    ) {
      return;
    }

    const style =
      document.createElement("style");

    style.id =
      "aung-progress-ui-style";

    style.textContent = `
      #aung-progress-ui-root {
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

      #aung-progress-ui-root *,
      #aung-progress-ui-root *::before,
      #aung-progress-ui-root *::after {
        box-sizing:border-box;
      }

      .ap-header {
        display:flex;
        align-items:flex-start;
        justify-content:space-between;
        gap:15px;
        margin-bottom:22px;
      }

      .ap-header h1 {
        margin:0;
        color:#0f172a;
        font-size:28px;
        line-height:1.35;
        font-weight:800;
      }

      .ap-header p {
        margin:7px 0 0;
        color:#64748b;
        font-size:14px;
        line-height:1.7;
      }

      .ap-badge {
        padding:8px 12px;
        border-radius:999px;
        background:#eff6ff;
        color:#2563eb;
        font-size:12px;
        font-weight:800;
        white-space:nowrap;
      }

      .ap-overview {
        display:grid;
        grid-template-columns:
          1.2fr
          repeat(3,1fr);
        gap:15px;
        margin-bottom:25px;
      }

      .ap-overview-main,
      .ap-stat {
        background:#fff;
        border:1px solid #e2e8f0;
        border-radius:17px;
        padding:19px;
        box-shadow:
          0 7px 22px rgba(15,23,42,.05);
      }

      .ap-overview-main {
        background:
          linear-gradient(
            135deg,
            #0f172a,
            #1e293b
          );
        color:#fff;
      }

      .ap-main-label {
        color:#93c5fd;
        font-size:11px;
        font-weight:800;
        letter-spacing:.7px;
      }

      .ap-main-percent {
        margin-top:7px;
        font-size:36px;
        font-weight:900;
      }

      .ap-main-text {
        color:#cbd5e1;
        font-size:12px;
        margin-top:3px;
      }

      .ap-main-progress {
        margin-top:17px;
      }

      .ap-progress {
        width:100%;
        height:8px;
        background:#e2e8f0;
        border-radius:999px;
        overflow:hidden;
      }

      .ap-overview-main .ap-progress {
        background:rgba(255,255,255,.16);
      }

      .ap-progress-bar {
        height:100%;
        border-radius:999px;
        background:#2563eb;
        transition:width .25s ease;
      }

      .ap-overview-main
      .ap-progress-bar {
        background:#60a5fa;
      }

      .ap-stat-icon {
        font-size:22px;
      }

      .ap-stat-number {
        margin-top:8px;
        color:#0f172a;
        font-size:25px;
        font-weight:900;
      }

      .ap-stat-label {
        margin-top:4px;
        color:#64748b;
        font-size:12px;
      }

      .ap-section-title {
        margin:0 0 13px;
        color:#0f172a;
        font-size:19px;
        font-weight:800;
      }

      .ap-course-list {
        display:flex;
        flex-direction:column;
        gap:12px;
      }

      .ap-course {
        background:#fff;
        border:1px solid #e2e8f0;
        border-radius:16px;
        padding:17px;
        box-shadow:
          0 5px 18px rgba(15,23,42,.04);
      }

      .ap-course-top {
        display:flex;
        align-items:center;
        gap:13px;
      }

      .ap-course-icon {
        width:47px;
        height:47px;
        border-radius:13px;
        display:flex;
        align-items:center;
        justify-content:center;
        background:#f1f5f9;
        font-size:23px;
        flex:0 0 auto;
      }

      .ap-course-info {
        flex:1;
        min-width:0;
      }

      .ap-course-info h3 {
        margin:0;
        color:#0f172a;
        font-size:16px;
        line-height:1.5;
      }

      .ap-course-info p {
        margin:3px 0 0;
        color:#64748b;
        font-size:12px;
      }

      .ap-course-percent {
        color:#2563eb;
        font-size:18px;
        font-weight:900;
      }

      .ap-course-progress {
        margin-top:15px;
      }

      .ap-course-progress-top {
        display:flex;
        justify-content:space-between;
        margin-bottom:7px;
        color:#64748b;
        font-size:11px;
      }

      .ap-course-progress-top strong {
        color:#0f172a;
      }

      .ap-course-bottom {
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:12px;
        margin-top:14px;
      }

      .ap-course-meta {
        color:#64748b;
        font-size:11px;
      }

      .ap-course-meta strong {
        color:#0f172a;
      }

      .ap-course-actions {
        display:flex;
        gap:8px;
      }

      .ap-btn {
        border:0;
        border-radius:9px;
        padding:9px 12px;
        font-size:11px;
        font-weight:800;
        cursor:pointer;
      }

      .ap-btn-primary {
        background:#2563eb;
        color:#fff;
      }

      .ap-btn-secondary {
        background:#f1f5f9;
        color:#0f172a;
      }

      .ap-complete {
        margin-top:25px;
        padding:22px;
        border:1px solid #bbf7d0;
        border-radius:17px;
        background:#f0fdf4;
        text-align:center;
      }

      .ap-complete-icon {
        font-size:35px;
      }

      .ap-complete h3 {
        margin:8px 0 4px;
        color:#166534;
        font-size:18px;
      }

      .ap-complete p {
        margin:0;
        color:#15803d;
        font-size:13px;
      }

      @media(max-width:900px) {
        .ap-overview {
          grid-template-columns:
            repeat(2,1fr);
        }

        .ap-overview-main {
          grid-column:1/-1;
        }
      }

      @media(max-width:600px) {
        #aung-progress-ui-root {
          padding:14px;
        }

        .ap-header {
          flex-direction:column;
        }

        .ap-header h1 {
          font-size:23px;
        }

        .ap-overview {
          grid-template-columns:
            repeat(2,1fr);
          gap:10px;
        }

        .ap-overview-main {
          grid-column:1/-1;
        }

        .ap-stat {
          padding:14px;
        }

        .ap-stat-number {
          font-size:21px;
        }

        .ap-course-bottom {
          align-items:flex-start;
          flex-direction:column;
        }

        .ap-course-actions {
          width:100%;
        }

        .ap-btn {
          flex:1;
        }
      }
    `;

    document.head.appendChild(style);
  }

  /* =========================================================
     RENDER
     ========================================================= */

  function render() {
    injectStyles();

    if (!root) {
      root =
        document.getElementById(
          "aung-progress-ui-root"
        );
    }

    if (!root) {
      root =
        document.createElement("section");

      root.id =
        "aung-progress-ui-root";

      const main =
        document.querySelector("main") ||
        document.querySelector(
          ".main-content"
        ) ||
        document.querySelector(
          ".content"
        ) ||
        document.body;

      main.appendChild(root);
    }

    const courses =
      getCourses();

    const overall =
      getOverallProgress(courses);

    let courseHTML = "";

    courses.forEach(function (course) {
      const progress =
        getProgress(course);

      const completed =
        getCompleted(course);

      const firstIncomplete =
        getFirstIncomplete(course);

      const completedAll =
        progress.total > 0 &&
        progress.completed ===
          progress.total;

      courseHTML += `
        <div class="ap-course">

          <div class="ap-course-top">

            <div class="ap-course-icon">
              ${esc(
                course.icon || "📚"
              )}
            </div>

            <div class="ap-course-info">

              <h3>
                ${esc(
                  course.title ||
                  "Course"
                )}
              </h3>

              <p>
                ${esc(
                  course.burmeseTitle ||
                  ""
                )}
              </p>

            </div>

            <div class="ap-course-percent">
              ${progress.percent}%
            </div>

          </div>

          <div class="ap-course-progress">

            <div class="ap-course-progress-top">

              <span>
                Course Progress
              </span>

              <strong>
                ${progress.completed}
                /
                ${progress.total}
              </strong>

            </div>

            <div class="ap-progress">

              <div
                class="ap-progress-bar"
                style="
                  width:${progress.percent}%;
                "
              ></div>

            </div>

          </div>

          <div class="ap-course-bottom">

            <div class="ap-course-meta">

              ✓
              <strong>
                ${completed.size}
              </strong>
              Completed

              &nbsp; • &nbsp;

              ⏳
              <strong>
                ${progress.remaining}
              </strong>
              Remaining

            </div>

            <div class="ap-course-actions">

              <button
                class="ap-btn ap-btn-secondary"
                data-action="view-course"
                data-course-id="${esc(
                  course.id
                )}"
              >
                📖 View Lessons
              </button>

              ${
                completedAll
                  ? `
                    <button
                      class="
                        ap-btn
                        ap-btn-primary
                      "
                      data-action="review-course"
                      data-course-id="${esc(
                        course.id
                      )}"
                    >
                      ✓ Review
                    </button>
                  `
                  : firstIncomplete
                  ? `
                    <button
                      class="
                        ap-btn
                        ap-btn-primary
                      "
                      data-action="continue-lesson"
                      data-course-id="${esc(
                        course.id
                      )}"
                      data-lesson-id="${esc(
                        firstIncomplete.id
                      )}"
                    >
                      ▶ Continue
                    </button>
                  `
                  : ""
              }

            </div>

          </div>

        </div>
      `;
    });

    const allCompleted =
      overall.total > 0 &&
      overall.completed ===
        overall.total;

    root.innerHTML = `

      <div class="ap-header">

        <div>
          <h1>
            📈 My Progress
          </h1>

          <p>
            Aung Business Academy မှာ
            သင့်ရဲ့ Learning Progress ကို
            တစ်နေရာတည်းကနေ စောင့်ကြည့်နိုင်ပါတယ်။
          </p>
        </div>

        <div class="ap-badge">
          ${overall.completed}
          / ${overall.total}
          Lessons
        </div>

      </div>

      <div class="ap-overview">

        <div class="ap-overview-main">

          <div class="ap-main-label">
            OVERALL ACADEMY PROGRESS
          </div>

          <div class="ap-main-percent">
            ${overall.percent}%
          </div>

          <div class="ap-main-text">
            ${overall.completed}
            lessons completed out of
            ${overall.total}
          </div>

          <div class="ap-main-progress">

            <div class="ap-progress">

              <div
                class="ap-progress-bar"
                style="
                  width:${overall.percent}%;
                "
              ></div>

            </div>

          </div>

        </div>

        <div class="ap-stat">

          <div class="ap-stat-icon">
            📚
          </div>

          <div class="ap-stat-number">
            ${courses.length}
          </div>

          <div class="ap-stat-label">
            Courses
          </div>

        </div>

        <div class="ap-stat">

          <div class="ap-stat-icon">
            ✓
          </div>

          <div class="ap-stat-number">
            ${overall.completed}
          </div>

          <div class="ap-stat-label">
            Completed
          </div>

        </div>

        <div class="ap-stat">

          <div class="ap-stat-icon">
            ⏳
          </div>

          <div class="ap-stat-number">
            ${overall.remaining}
          </div>

          <div class="ap-stat-label">
            Remaining
          </div>

        </div>

      </div>

      <h2 class="ap-section-title">
        📚 Course Progress
      </h2>

      <div class="ap-course-list">
        ${
          courseHTML ||
          `
            <div>
              Course မတွေ့သေးပါ။
            </div>
          `
        }
      </div>

      ${
        allCompleted
          ? `
            <div class="ap-complete">

              <div class="ap-complete-icon">
                🎉
              </div>

              <h3>
                Congratulations!
              </h3>

              <p>
                Aung Business Academy ရဲ့
                Lesson ${overall.total} ခု
                အားလုံးပြီးဆုံးပါပြီ။
              </p>

            </div>
          `
          : ""
      }

    `;

    bindEvents();
  }

  /* =========================================================
     EVENTS
     ========================================================= */

  function bindEvents() {
    if (!root) return;

    root
      .querySelectorAll(
        '[data-action="view-course"],' +
        '[data-action="review-course"]'
      )
      .forEach(function (button) {

        button.addEventListener(
          "click",
          function () {

            const courseId =
              button.getAttribute(
                "data-course-id"
              );

            openCourse(courseId);

          }
        );

      });

    root
      .querySelectorAll(
        '[data-action="continue-lesson"]'
      )
      .forEach(function (button) {

        button.addEventListener(
          "click",
          function () {

            const courseId =
              button.getAttribute(
                "data-course-id"
              );

            const lessonId =
              button.getAttribute(
                "data-lesson-id"
              );

            const course =
              getCourses().find(
                function (item) {
                  return item.id ===
                    courseId;
                }
              );

            if (!course) return;

            const lesson =
              getLessons(course).find(
                function (item) {
                  return item.id ===
                    lessonId;
                }
              );

            if (lesson) {
              openLesson(
                course,
                lesson
              );
            }

          }
        );

      });
  }

  /* =========================================================
     NAVIGATION HOOK
     ========================================================= */

  function bindSidebar() {
    const elements =
      Array.from(
        document.querySelectorAll(
          "button,a,[role='button'],li"
        )
      );

    elements.forEach(function (element) {

      if (
        element.dataset &&
        element.dataset
          .aungProgressBound === "1"
      ) {
        return;
      }

      const text =
        (
          element.textContent || ""
        )
          .trim()
          .toLowerCase();

      if (
        text.includes("my progress") ||
        text.includes("progress") ||
        text.includes("တိုးတက်မှု")
      ) {

        element.dataset
          .aungProgressBound = "1";

        element.addEventListener(
          "click",
          function (event) {

            const href =
              element.getAttribute(
                "href"
              );

            if (
              href &&
              href !== "#" &&
              !href.startsWith(
                "javascript:"
              )
            ) {
              return;
            }

            event.preventDefault();

            show();

          }
        );
      }

    });
  }

  /* =========================================================
     PUBLIC API
     ========================================================= */

  function show() {
    render();

    if (root) {
      try {
        root.scrollIntoView({
          behavior:"smooth",
          block:"start"
        });
      } catch (error) {}
    }
  }

  window.AungProgressUI = {
    show: show,
    render: render,
    refresh: render,
    getCourses: getCourses,
    getProgress: getProgress,
    getOverallProgress:
      function () {
        return getOverallProgress(
          getCourses()
        );
      }
  };

  /* =========================================================
     PROGRESS EVENT
     ========================================================= */

  window.addEventListener(
    "aungAcademyProgressUpdated",
    function () {
      render();
    }
  );

  /* =========================================================
     INIT
     ========================================================= */

  function init() {

    setTimeout(
      bindSidebar,
      500
    );

    setTimeout(
      bindSidebar,
      1200
    );

    /*
      Dashboard app can call:
      AungProgressUI.show()
    */
  }

  if (
    document.readyState ===
    "loading"
  ) {
    document.addEventListener(
      "DOMContentLoaded",
      init
    );
  } else {
    init();
  }

})();
