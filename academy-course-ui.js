/* =========================================================
   AUNG BUSINESS ACADEMY
   COURSE NAVIGATION UI
   Version: 1.0 Professional
   ========================================================= */

(function () {
  "use strict";

  const APP = window.AungBusinessAcademy =
    window.AungBusinessAcademy || {};

  const UI = {};

  let currentView = "courses";
  let currentCourseId = null;

  const COURSE_ORDER = [
    "business-fundamentals",
    "sales-management",
    "marketing-management",
    "finance-accounting",
    "hr-people-management"
  ];

  /* =========================================================
     HELPERS
     ========================================================= */

  function escapeHTML(value) {
    if (value === null || value === undefined) return "";

    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function getCourses() {
    let courses = [];

    if (Array.isArray(APP.COURSES)) {
      courses = APP.COURSES.slice();
    }

    if (APP.SALES_COURSE) {
      courses.push(APP.SALES_COURSE);
    }

    const unique = {};

    courses.forEach(function (course) {
      if (!course || !course.id) return;
      unique[course.id] = course;
    });

    let result = Object.keys(unique).map(function (id) {
      return unique[id];
    });

    result.sort(function (a, b) {
      const ai = COURSE_ORDER.indexOf(a.id);
      const bi = COURSE_ORDER.indexOf(b.id);

      const aIndex = ai === -1 ? 999 : ai;
      const bIndex = bi === -1 ? 999 : bi;

      return aIndex - bIndex;
    });

    return result;
  }

  function getCourse(courseId) {
    return getCourses().find(function (course) {
      return course.id === courseId;
    }) || null;
  }

  function getLessons(course) {
    if (!course) return [];

    if (Array.isArray(course.lessons)) {
      return course.lessons;
    }

    return [];
  }

  function getCompletedSet(course) {
    const set = new Set();

    if (!course) return set;

    const lessons = getLessons(course);

    lessons.forEach(function (lesson) {
      if (!lesson || !lesson.id) return;

      let completed = false;

      try {
        if (
          window.AungLessonSystem &&
          typeof window.AungLessonSystem.isCompleted === "function"
        ) {
          completed =
            window.AungLessonSystem.isCompleted(
              course.id,
              lesson.id
            ) === true;
        }
      } catch (error) {}

      if (!completed) {
        try {
          const key =
            "aung_business_academy_" +
            course.id +
            "_completed_v1";

          const stored = JSON.parse(
            localStorage.getItem(key) || "[]"
          );

          if (
            Array.isArray(stored) &&
            stored.indexOf(lesson.id) !== -1
          ) {
            completed = true;
          }
        } catch (error) {}
      }

      if (completed) {
        set.add(lesson.id);
      }
    });

    return set;
  }

  function getCourseProgress(course) {
    const lessons = getLessons(course);

    if (!lessons.length) {
      return {
        completed: 0,
        total: 0,
        percent: 0
      };
    }

    const completed = getCompletedSet(course).size;

    const percent = Math.round(
      (completed / lessons.length) * 100
    );

    return {
      completed: completed,
      total: lessons.length,
      percent: percent
    };
  }

  function getFirstIncompleteLesson(course) {
    if (!course) return null;

    const lessons = getLessons(course);
    const completed = getCompletedSet(course);

    for (let i = 0; i < lessons.length; i++) {
      if (!completed.has(lessons[i].id)) {
        return lessons[i];
      }
    }

    return lessons.length ? lessons[0] : null;
  }

  function getCourseIcon(course) {
    return course.icon || "📚";
  }

  function getCourseTitle(course) {
    return course.title || "Course";
  }

  function getCourseMyanmarTitle(course) {
    return course.burmeseTitle || "";
  }

  function getCourseCategory(course) {
    return course.category || "BUSINESS";
  }

  /* =========================================================
     ROOT
     ========================================================= */

  function createRoot() {
    let root = document.getElementById(
      "aung-course-ui-root"
    );

    if (root) return root;

    root = document.createElement("div");
    root.id = "aung-course-ui-root";

    document.body.appendChild(root);

    return root;
  }

  /* =========================================================
     CSS
     ========================================================= */

  function injectStyles() {
    if (document.getElementById("aung-course-ui-style")) {
      return;
    }

    const style = document.createElement("style");

    style.id = "aung-course-ui-style";

    style.textContent = `
      #aung-course-ui-root {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        box-sizing: border-box;
        font-family:
          Arial,
          "Noto Sans Myanmar",
          "Myanmar Text",
          sans-serif;
      }

      #aung-course-ui-root *,
      #aung-course-ui-root *::before,
      #aung-course-ui-root *::after {
        box-sizing: border-box;
      }

      .abu-page-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        margin-bottom: 24px;
      }

      .abu-title-area h1 {
        margin: 0;
        font-size: 28px;
        line-height: 1.3;
        color: #0f172a;
        font-weight: 800;
      }

      .abu-title-area p {
        margin: 7px 0 0;
        color: #64748b;
        font-size: 14px;
        line-height: 1.6;
      }

      .abu-back-btn {
        border: 0;
        background: #0f172a;
        color: #fff;
        padding: 11px 16px;
        border-radius: 10px;
        cursor: pointer;
        font-weight: 700;
        font-size: 14px;
      }

      .abu-back-btn:hover {
        opacity: .9;
      }

      .abu-course-grid {
        display: grid;
        grid-template-columns:
          repeat(3, minmax(0, 1fr));
        gap: 18px;
      }

      .abu-course-card {
        background: #fff;
        border: 1px solid #e2e8f0;
        border-radius: 18px;
        padding: 20px;
        box-shadow:
          0 8px 24px rgba(15, 23, 42, .06);
        transition:
          transform .2s ease,
          box-shadow .2s ease;
      }

      .abu-course-card:hover {
        transform: translateY(-3px);
        box-shadow:
          0 14px 30px rgba(15, 23, 42, .10);
      }

      .abu-course-top {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
      }

      .abu-course-icon {
        width: 52px;
        height: 52px;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f1f5f9;
        font-size: 27px;
      }

      .abu-category {
        display: inline-flex;
        align-items: center;
        padding: 5px 9px;
        border-radius: 999px;
        background: #eff6ff;
        color: #2563eb;
        font-size: 11px;
        font-weight: 800;
        letter-spacing: .5px;
      }

      .abu-course-card h3 {
        margin: 17px 0 5px;
        font-size: 19px;
        color: #0f172a;
        line-height: 1.4;
      }

      .abu-course-burmese {
        color: #475569;
        font-size: 14px;
        min-height: 23px;
        line-height: 1.6;
      }

      .abu-course-stats {
        display: flex;
        gap: 14px;
        margin: 18px 0 12px;
        color: #64748b;
        font-size: 13px;
      }

      .abu-course-stats strong {
        color: #0f172a;
      }

      .abu-progress-wrap {
        margin: 13px 0 16px;
      }

      .abu-progress-info {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        margin-bottom: 7px;
        color: #64748b;
        font-size: 12px;
      }

      .abu-progress-info strong {
        color: #0f172a;
      }

      .abu-progress {
        height: 8px;
        background: #e2e8f0;
        border-radius: 999px;
        overflow: hidden;
      }

      .abu-progress-bar {
        height: 100%;
        background: #2563eb;
        border-radius: 999px;
        transition: width .25s ease;
      }

      .abu-course-actions {
        display: flex;
        gap: 9px;
      }

      .abu-primary-btn,
      .abu-secondary-btn {
        flex: 1;
        border-radius: 10px;
        padding: 11px 12px;
        font-size: 13px;
        font-weight: 800;
        cursor: pointer;
        border: 0;
      }

      .abu-primary-btn {
        background: #2563eb;
        color: #fff;
      }

      .abu-secondary-btn {
        background: #f1f5f9;
        color: #0f172a;
      }

      .abu-primary-btn:hover,
      .abu-secondary-btn:hover {
        opacity: .9;
      }

      .abu-course-detail {
        background: #fff;
        border: 1px solid #e2e8f0;
        border-radius: 18px;
        overflow: hidden;
        box-shadow:
          0 10px 30px rgba(15, 23, 42, .06);
      }

      .abu-course-hero {
        padding: 25px;
        background:
          linear-gradient(
            135deg,
            #0f172a,
            #1e293b
          );
        color: #fff;
      }

      .abu-course-hero-top {
        display: flex;
        align-items: flex-start;
        gap: 16px;
      }

      .abu-course-hero-icon {
        width: 64px;
        height: 64px;
        border-radius: 18px;
        background: rgba(255,255,255,.12);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 32px;
        flex: 0 0 auto;
      }

      .abu-course-hero h2 {
        margin: 0;
        font-size: 26px;
        line-height: 1.35;
      }

      .abu-course-hero p {
        margin: 7px 0 0;
        color: #cbd5e1;
        line-height: 1.7;
        font-size: 14px;
      }

      .abu-hero-progress {
        margin-top: 22px;
      }

      .abu-hero-progress-top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
        font-size: 13px;
        color: #cbd5e1;
      }

      .abu-hero-progress .abu-progress {
        background: rgba(255,255,255,.18);
      }

      .abu-hero-progress .abu-progress-bar {
        background: #60a5fa;
      }

      .abu-detail-body {
        padding: 22px;
      }

      .abu-section-title {
        margin: 0 0 14px;
        font-size: 18px;
        color: #0f172a;
      }

      .abu-continue {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 14px;
        padding: 15px;
        margin-bottom: 22px;
        background: #eff6ff;
        border: 1px solid #bfdbfe;
        border-radius: 13px;
        cursor: pointer;
        text-align: left;
      }

      .abu-continue-left {
        min-width: 0;
      }

      .abu-continue-label {
        font-size: 11px;
        font-weight: 800;
        color: #2563eb;
        text-transform: uppercase;
        letter-spacing: .6px;
      }

      .abu-continue-title {
        margin-top: 4px;
        font-size: 15px;
        font-weight: 800;
        color: #0f172a;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .abu-continue-arrow {
        font-size: 22px;
        color: #2563eb;
      }

      .abu-lesson-list {
        display: flex;
        flex-direction: column;
        gap: 9px;
      }

      .abu-lesson-item {
        width: 100%;
        border: 1px solid #e2e8f0;
        background: #fff;
        border-radius: 13px;
        padding: 14px;
        display: flex;
        align-items: center;
        gap: 13px;
        cursor: pointer;
        text-align: left;
        transition: .18s ease;
      }

      .abu-lesson-item:hover {
        border-color: #93c5fd;
        background: #f8fbff;
      }

      .abu-lesson-number {
        width: 38px;
        height: 38px;
        border-radius: 11px;
        background: #f1f5f9;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #475569;
        font-size: 13px;
        font-weight: 800;
        flex: 0 0 auto;
      }

      .abu-lesson-item.completed
      .abu-lesson-number {
        background: #dcfce7;
        color: #15803d;
      }

      .abu-lesson-main {
        flex: 1;
        min-width: 0;
      }

      .abu-lesson-title {
        font-size: 14px;
        color: #0f172a;
        font-weight: 800;
        line-height: 1.5;
      }

      .abu-lesson-subtitle {
        margin-top: 3px;
        font-size: 12px;
        color: #64748b;
      }

      .abu-lesson-status {
        flex: 0 0 auto;
        font-size: 12px;
        font-weight: 800;
      }

      .abu-status-done {
        color: #16a34a;
      }

      .abu-status-open {
        color: #2563eb;
      }

      .abu-empty {
        padding: 35px 20px;
        text-align: center;
        border: 1px dashed #cbd5e1;
        border-radius: 15px;
        color: #64748b;
      }

      @media (max-width: 1000px) {
        .abu-course-grid {
          grid-template-columns:
            repeat(2, minmax(0, 1fr));
        }
      }

      @media (max-width: 650px) {
        #aung-course-ui-root {
          padding: 14px;
        }

        .abu-page-header {
          align-items: flex-start;
          flex-direction: column;
        }

        .abu-title-area h1 {
          font-size: 23px;
        }

        .abu-course-grid {
          grid-template-columns: 1fr;
        }

        .abu-course-hero {
          padding: 20px;
        }

        .abu-course-hero h2 {
          font-size: 21px;
        }

        .abu-detail-body {
          padding: 15px;
        }

        .abu-course-actions {
          flex-direction: column;
        }

        .abu-lesson-item {
          padding: 12px;
        }

        .abu-lesson-status {
          font-size: 11px;
        }
      }
    `;

    document.head.appendChild(style);
  }

  /* =========================================================
     OPEN LESSON
     ========================================================= */

  function openLesson(course, lesson) {
    if (!course || !lesson) return;

    if (
      window.AungLessonSystem &&
      typeof window.AungLessonSystem.openLesson === "function"
    ) {
      window.AungLessonSystem.openLesson(
        course.id,
        lesson.id
      );
      return;
    }

    /*
      Fallback for safety if lesson-system file
      has not loaded yet.
    */

    const lessons = getLessons(course);

    const index = lessons.findIndex(function (item) {
      return item.id === lesson.id;
    });

    const content =
      lesson.content ||
      lesson.body ||
      "<p>ဒီ Lesson အတွက် Content မထည့်ရသေးပါ။</p>";

    const old = document.getElementById(
      "abu-fallback-lesson-modal"
    );

    if (old) old.remove();

    const modal = document.createElement("div");

    modal.id = "abu-fallback-lesson-modal";

    modal.style.cssText = `
      position:fixed;
      inset:0;
      z-index:99999;
      background:rgba(15,23,42,.72);
      padding:18px;
      overflow:auto;
    `;

    modal.innerHTML = `
      <div style="
        max-width:850px;
        margin:20px auto;
        background:#fff;
        border-radius:18px;
        overflow:hidden;
      ">
        <div style="
          padding:20px;
          background:#0f172a;
          color:#fff;
        ">
          <div style="
            font-size:12px;
            color:#93c5fd;
            font-weight:800;
          ">
            ${escapeHTML(getCourseTitle(course))}
          </div>

          <h2 style="
            margin:7px 0 0;
            font-size:22px;
          ">
            ${escapeHTML(lesson.title)}
          </h2>

          <div style="
            margin-top:8px;
            color:#cbd5e1;
            font-size:13px;
          ">
            Lesson ${index + 1} / ${lessons.length}
          </div>
        </div>

        <div style="
          padding:22px;
          line-height:1.8;
          color:#334155;
        ">
          ${content}
        </div>

        <div style="
          display:flex;
          gap:10px;
          padding:15px;
          border-top:1px solid #e2e8f0;
        ">
          <button
            id="abu-fallback-close"
            style="
              flex:1;
              border:0;
              padding:12px;
              border-radius:10px;
              background:#f1f5f9;
              font-weight:800;
              cursor:pointer;
            "
          >
            Close
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    document
      .getElementById("abu-fallback-close")
      .addEventListener("click", function () {
        modal.remove();
      });
  }

  /* =========================================================
     COURSE LIST
     ========================================================= */

  function renderCourses() {
    currentView = "courses";
    currentCourseId = null;

    const root = createRoot();
    const courses = getCourses();

    let cards = "";

    courses.forEach(function (course) {
      const progress = getCourseProgress(course);

      const firstIncomplete =
        getFirstIncompleteLesson(course);

      cards += `
        <div class="abu-course-card">

          <div class="abu-course-top">
            <div class="abu-course-icon">
              ${getCourseIcon(course)}
            </div>

            <div class="abu-category">
              ${escapeHTML(getCourseCategory(course))}
            </div>
          </div>

          <h3>
            ${escapeHTML(getCourseTitle(course))}
          </h3>

          <div class="abu-course-burmese">
            ${escapeHTML(getCourseMyanmarTitle(course))}
          </div>

          <div class="abu-course-stats">
            <span>
              📖
              <strong>${progress.total}</strong>
              Lessons
            </span>

            <span>
              ✓
              <strong>${progress.completed}</strong>
              Done
            </span>
          </div>

          <div class="abu-progress-wrap">

            <div class="abu-progress-info">
              <span>Course Progress</span>
              <strong>${progress.percent}%</strong>
            </div>

            <div class="abu-progress">
              <div
                class="abu-progress-bar"
                style="width:${progress.percent}%"
              ></div>
            </div>

          </div>

          <div class="abu-course-actions">

            <button
              class="abu-primary-btn"
              data-action="open-course"
              data-course-id="${escapeHTML(course.id)}"
            >
              📚 View Course
            </button>

            ${
              firstIncomplete
                ? `
                  <button
                    class="abu-secondary-btn"
                    data-action="continue-course"
                    data-course-id="${escapeHTML(course.id)}"
                  >
                    ▶ Continue
                  </button>
                `
                : `
                  <button
                    class="abu-secondary-btn"
                    data-action="open-course"
                    data-course-id="${escapeHTML(course.id)}"
                  >
                    ✓ Review
                  </button>
                `
            }

          </div>

        </div>
      `;
    });

    if (!courses.length) {
      cards = `
        <div class="abu-empty">
          <div style="font-size:35px;">📚</div>
          <div style="
            margin-top:10px;
            font-weight:800;
          ">
            Course မတွေ့သေးပါ
          </div>
          <div style="
            margin-top:5px;
            font-size:13px;
          ">
            Course JavaScript files များကို
            index.html မှာ ချိတ်ထားကြောင်း စစ်ဆေးပါ။
          </div>
        </div>
      `;
    }

    root.innerHTML = `
      <div class="abu-page-header">

        <div class="abu-title-area">
          <h1>📚 My Courses</h1>
          <p>
            Aung Business Academy ရဲ့
            Professional Business Courses
          </p>
        </div>

      </div>

      <div class="abu-course-grid">
        ${cards}
      </div>
    `;

    bindCourseListEvents();
  }

  function bindCourseListEvents() {
    const root = createRoot();

    root
      .querySelectorAll(
        '[data-action="open-course"]'
      )
      .forEach(function (button) {
        button.addEventListener("click", function () {
          openCourse(
            button.getAttribute("data-course-id")
          );
        });
      });

    root
      .querySelectorAll(
        '[data-action="continue-course"]'
      )
      .forEach(function (button) {
        button.addEventListener("click", function () {
          const courseId =
            button.getAttribute("data-course-id");

          const course = getCourse(courseId);

          if (!course) return;

          const lesson =
            getFirstIncompleteLesson(course);

          if (lesson) {
            openLesson(course, lesson);
          }
        });
      });
  }

  /* =========================================================
     COURSE DETAIL
     ========================================================= */

  function openCourse(courseId) {
    const course = getCourse(courseId);

    if (!course) {
      renderCourses();
      return;
    }

    currentView = "course-detail";
    currentCourseId = courseId;

    renderCourseDetail(course);
  }

  function renderCourseDetail(course) {
    const root = createRoot();

    const lessons = getLessons(course);
    const completed = getCompletedSet(course);
    const progress = getCourseProgress(course);
    const firstIncomplete =
      getFirstIncompleteLesson(course);

    let lessonHTML = "";

    lessons.forEach(function (lesson, index) {
      const isDone = completed.has(lesson.id);

      const subtitle =
        lesson.objective ||
        lesson.burmeseTitle ||
        "Lesson ကို လေ့လာပါ";

      lessonHTML += `
        <button
          class="
            abu-lesson-item
            ${isDone ? "completed" : ""}
          "
          data-lesson-id="${escapeHTML(lesson.id)}"
        >

          <div class="abu-lesson-number">
            ${
              isDone
                ? "✓"
                : String(index + 1).padStart(2, "0")
            }
          </div>

          <div class="abu-lesson-main">

            <div class="abu-lesson-title">
              ${escapeHTML(lesson.title)}
            </div>

            <div class="abu-lesson-subtitle">
              ${escapeHTML(
                String(subtitle).replace(/<[^>]*>/g, "")
              )}
            </div>

          </div>

          <div
            class="
              abu-lesson-status
              ${
                isDone
                  ? "abu-status-done"
                  : "abu-status-open"
              }
            "
          >
            ${
              isDone
                ? "✓ Completed"
                : "Open →"
            }
          </div>

        </button>
      `;
    });

    if (!lessonHTML) {
      lessonHTML = `
        <div class="abu-empty">
          ဒီ Course အတွက် Lesson မရှိသေးပါ။
        </div>
      `;
    }

    root.innerHTML = `
      <div class="abu-page-header">

        <div class="abu-title-area">
          <h1>📖 Course Detail</h1>
          <p>
            Course တစ်ခုချင်းစီရဲ့ Lesson များကို
            အစဉ်လိုက်လေ့လာနိုင်ပါတယ်။
          </p>
        </div>

        <button
          class="abu-back-btn"
          id="abu-back-courses"
        >
          ← Courses
        </button>

      </div>

      <div class="abu-course-detail">

        <div class="abu-course-hero">

          <div class="abu-course-hero-top">

            <div class="abu-course-hero-icon">
              ${getCourseIcon(course)}
            </div>

            <div>
              <div style="
                font-size:11px;
                font-weight:800;
                color:#93c5fd;
                letter-spacing:.8px;
              ">
                ${escapeHTML(getCourseCategory(course))}
              </div>

              <h2>
                ${escapeHTML(getCourseTitle(course))}
              </h2>

              <p>
                ${escapeHTML(getCourseMyanmarTitle(course))}
              </p>
            </div>

          </div>

          <div class="abu-hero-progress">

            <div class="abu-hero-progress-top">
              <span>
                ${progress.completed}
                / ${progress.total}
                Lessons Completed
              </span>

              <strong>
                ${progress.percent}%
              </strong>
            </div>

            <div class="abu-progress">
              <div
                class="abu-progress-bar"
                style="width:${progress.percent}%"
              ></div>
            </div>

          </div>

        </div>

        <div class="abu-detail-body">

          ${
            firstIncomplete
              ? `
                <button
                  class="abu-continue"
                  id="abu-continue-learning"
                >

                  <div class="abu-continue-left">

                    <div class="abu-continue-label">
                      Continue Learning
                    </div>

                    <div class="abu-continue-title">
                      ${escapeHTML(firstIncomplete.title)}
                    </div>

                  </div>

                  <div class="abu-continue-arrow">
                    →
                  </div>

                </button>
              `
              : `
                <div
                  class="abu-continue"
                  style="
                    cursor:default;
                    background:#f0fdf4;
                    border-color:#bbf7d0;
                  "
                >

                  <div class="abu-continue-left">

                    <div
                      class="abu-continue-label"
                      style="color:#15803d;"
                    >
                      COURSE COMPLETED
                    </div>

                    <div class="abu-continue-title">
                      🎉 Course အားလုံးပြီးဆုံးပါပြီ
                    </div>

                  </div>

                  <div
                    class="abu-continue-arrow"
                    style="color:#16a34a;"
                  >
                    ✓
                  </div>

                </div>
              `
          }

          <h3 class="abu-section-title">
            📋 Course Lessons
          </h3>

          <div class="abu-lesson-list">
            ${lessonHTML}
          </div>

        </div>

      </div>
    `;

    document
      .getElementById("abu-back-courses")
      .addEventListener("click", function () {
        renderCourses();
      });

    const continueButton =
      document.getElementById(
        "abu-continue-learning"
      );

    if (continueButton && firstIncomplete) {
      continueButton.addEventListener(
        "click",
        function () {
          openLesson(
            course,
            firstIncomplete
          );
        }
      );
    }

    root
      .querySelectorAll(".abu-lesson-item")
      .forEach(function (button) {

        button.addEventListener(
          "click",
          function () {

            const lessonId =
              button.getAttribute(
                "data-lesson-id"
              );

            const lesson =
              lessons.find(function (item) {
                return item.id === lessonId;
              });

            if (lesson) {
              openLesson(course, lesson);
            }

          }
        );

      });
  }

  /* =========================================================
     SIDEBAR / NAVIGATION HOOKS
     ========================================================= */

  function textMatches(text, words) {
    const value =
      String(text || "")
        .trim()
        .toLowerCase();

    return words.some(function (word) {
      return value.indexOf(
        String(word).toLowerCase()
      ) !== -1;
    });
  }

  function findNavigationElements() {
    const elements = Array.from(
      document.querySelectorAll(
        "button, a, [role='button'], li"
      )
    );

    return elements;
  }

  function bindNavigation() {
    const elements =
      findNavigationElements();

    elements.forEach(function (element) {

      if (
        element.dataset &&
        element.dataset.abuCourseBound === "1"
      ) {
        return;
      }

      const text =
        element.textContent || "";

      if (
        textMatches(
          text,
          [
            "My Courses",
            "သင်တန်းများ",
            "Courses"
          ]
        )
      ) {

        element.dataset.abuCourseBound = "1";

        element.addEventListener(
          "click",
          function (event) {

            /*
              Don't block normal navigation if this
              is an actual external link.
            */

            const href =
              element.getAttribute("href");

            if (
              href &&
              href !== "#" &&
              href.indexOf("javascript:") !== 0
            ) {
              return;
            }

            event.preventDefault();

            showCourses();
          }
        );
      }

      if (
        textMatches(
          text,
          [
            "Lessons",
            "သင်ခန်းစာများ"
          ]
        )
      ) {

        element.dataset.abuCourseBound = "1";

        element.addEventListener(
          "click",
          function (event) {

            const href =
              element.getAttribute("href");

            if (
              href &&
              href !== "#" &&
              href.indexOf("javascript:") !== 0
            ) {
              return;
            }

            event.preventDefault();

            showCourses();
          }
        );
      }

    });
  }

  /* =========================================================
     PUBLIC API
     ========================================================= */

  function showCourses() {
    injectStyles();

    const root = createRoot();

    root.style.display = "block";

    renderCourses();

    window.setTimeout(
      bindNavigation,
      50
    );

    try {
      root.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    } catch (error) {}
  }

  function refresh() {
    injectStyles();

    if (currentView === "course-detail" &&
        currentCourseId) {

      const course =
        getCourse(currentCourseId);

      if (course) {
        renderCourseDetail(course);
        return;
      }
    }

    renderCourses();
  }

  UI.showCourses = showCourses;
  UI.openCourse = openCourse;
  UI.renderCourses = renderCourses;
  UI.refresh = refresh;
  UI.getCourses = getCourses;
  UI.getCourse = getCourse;
  UI.getCourseProgress = getCourseProgress;

  window.AungCourseUI = UI;

  /* =========================================================
     PROGRESS UPDATE LISTENER
     ========================================================= */

  window.addEventListener(
    "aungAcademyProgressUpdated",
    function () {

      if (currentView === "course-detail" &&
          currentCourseId) {

        const course =
          getCourse(currentCourseId);

        if (course) {
          renderCourseDetail(course);
        }

      } else if (
        currentView === "courses"
      ) {
        renderCourses();
      }

    }
  );

  /* =========================================================
     INIT
     ========================================================= */

  function init() {
    injectStyles();

    /*
      Don't force the Course page immediately.
      The existing Dashboard can remain visible.
    */

    bindNavigation();

    /*
      Re-bind after existing app scripts finish
      creating navigation elements.
    */

    window.setTimeout(
      bindNavigation,
      500
    );

    window.setTimeout(
      bindNavigation,
      1500
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
