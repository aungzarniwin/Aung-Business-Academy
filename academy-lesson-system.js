/* =========================================================
   AUNG BUSINESS ACADEMY
   PROFESSIONAL LESSON SYSTEM V1
   Lesson Detail + Previous + Next + Complete
   ========================================================= */

(function () {
  "use strict";

  const STORAGE_KEY = "aung_business_academy_completed_lessons_v1";

  /* =========================================================
     STORAGE
     ========================================================= */

  function getCompletedLessons() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (error) {
      console.error("Completed lesson storage error:", error);
      return {};
    }
  }

  function saveCompletedLessons(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function isCompleted(lessonId) {
    const completed = getCompletedLessons();
    return completed[lessonId] === true;
  }

  function markCompleted(lessonId) {
    const completed = getCompletedLessons();
    completed[lessonId] = true;
    saveCompletedLessons(completed);
  }

  function unmarkCompleted(lessonId) {
    const completed = getCompletedLessons();
    delete completed[lessonId];
    saveCompletedLessons(completed);
  }

  /* =========================================================
     COURSE DATA
     ========================================================= */

  function getCourses() {
    const courses = [];

    /*
      Sales Management
    */
    if (
      window.AungBusinessAcademy &&
      window.AungBusinessAcademy.SALES_COURSE &&
      window.AungBusinessAcademy.SALES_LESSONS
    ) {
      courses.push({
        ...window.AungBusinessAcademy.SALES_COURSE,
        lessons: window.AungBusinessAcademy.SALES_LESSONS
      });
    }

    /*
      Generic course APIs
    */
    if (
      window.AungBusinessAcademy &&
      Array.isArray(window.AungBusinessAcademy.COURSES)
    ) {
      window.AungBusinessAcademy.COURSES.forEach(function (course) {
        if (!courses.some(c => c.id === course.id)) {
          courses.push(course);
        }
      });
    }

    return courses;
  }

  function getCourse(courseId) {
    const courses = getCourses();

    return courses.find(function (course) {
      return course.id === courseId;
    });
  }

  function getLesson(courseId, lessonId) {
    const course = getCourse(courseId);

    if (!course || !Array.isArray(course.lessons)) {
      return null;
    }

    return course.lessons.find(function (lesson) {
      return String(lesson.id) === String(lessonId);
    });
  }

  /* =========================================================
     PROGRESS
     ========================================================= */

  function getCourseProgress(courseId) {
    const course = getCourse(courseId);

    if (!course || !Array.isArray(course.lessons)) {
      return {
        completed: 0,
        total: 0,
        percent: 0
      };
    }

    const total = course.lessons.length;

    const completed = course.lessons.filter(function (lesson) {
      return isCompleted(lesson.id);
    }).length;

    const percent =
      total === 0
        ? 0
        : Math.round((completed / total) * 100);

    return {
      completed: completed,
      total: total,
      percent: percent
    };
  }

  /* =========================================================
     GLOBAL STYLE
     ========================================================= */

  function injectStyles() {
    if (document.getElementById("abaLessonSystemStyles")) {
      return;
    }

    const style = document.createElement("style");

    style.id = "abaLessonSystemStyles";

    style.innerHTML = `
      #abaLessonOverlay {
        position: fixed;
        inset: 0;
        background: rgba(15, 23, 42, 0.72);
        z-index: 999999;
        display: none;
        align-items: center;
        justify-content: center;
        padding: 18px;
        overflow-y: auto;
      }

      #abaLessonOverlay.active {
        display: flex;
      }

      .aba-lesson-modal {
        width: 100%;
        max-width: 980px;
        max-height: 94vh;
        background: #ffffff;
        border-radius: 22px;
        overflow: hidden;
        box-shadow: 0 25px 80px rgba(0,0,0,.28);
        display: flex;
        flex-direction: column;
      }

      .aba-lesson-header {
        padding: 22px 24px;
        background: linear-gradient(135deg,#0f172a,#1e293b);
        color: white;
        position: relative;
      }

      .aba-lesson-category {
        font-size: 12px;
        font-weight: 700;
        opacity: .75;
        letter-spacing: .8px;
        margin-bottom: 8px;
      }

      .aba-lesson-title {
        font-size: 25px;
        font-weight: 800;
        line-height: 1.35;
        margin: 0;
      }

      .aba-lesson-number {
        margin-top: 8px;
        font-size: 14px;
        opacity: .8;
      }

      .aba-lesson-close {
        position: absolute;
        right: 18px;
        top: 18px;
        width: 40px;
        height: 40px;
        border: 0;
        border-radius: 50%;
        background: rgba(255,255,255,.12);
        color: white;
        font-size: 22px;
        cursor: pointer;
      }

      .aba-lesson-progress-wrap {
        padding: 14px 24px;
        background: #f8fafc;
        border-bottom: 1px solid #e2e8f0;
      }

      .aba-lesson-progress-info {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        font-size: 13px;
        color: #475569;
        margin-bottom: 7px;
      }

      .aba-lesson-progress-bar {
        height: 8px;
        background: #e2e8f0;
        border-radius: 20px;
        overflow: hidden;
      }

      .aba-lesson-progress-fill {
        height: 100%;
        width: 0%;
        background: #16a34a;
        border-radius: 20px;
        transition: width .3s ease;
      }

      .aba-lesson-body {
        padding: 28px;
        overflow-y: auto;
        flex: 1;
        color: #1e293b;
        line-height: 1.8;
      }

      .aba-lesson-body h2 {
        font-size: 21px;
        margin: 28px 0 12px;
        color: #0f172a;
      }

      .aba-lesson-body h3 {
        font-size: 18px;
        margin: 22px 0 10px;
        color: #1e293b;
      }

      .aba-lesson-body p {
        margin: 0 0 15px;
      }

      .aba-lesson-body ul,
      .aba-lesson-body ol {
        padding-left: 24px;
        margin-bottom: 18px;
      }

      .aba-lesson-body li {
        margin-bottom: 8px;
      }

      .aba-lesson-body table {
        width: 100%;
        border-collapse: collapse;
        margin: 18px 0;
      }

      .aba-lesson-body th,
      .aba-lesson-body td {
        border: 1px solid #e2e8f0;
        padding: 10px;
        text-align: left;
      }

      .aba-lesson-body th {
        background: #f8fafc;
        font-weight: 700;
      }

      .aba-lesson-objective {
        padding: 18px;
        background: #eff6ff;
        border-left: 4px solid #2563eb;
        border-radius: 12px;
        margin-bottom: 22px;
      }

      .aba-lesson-action {
        padding: 18px;
        background: #f0fdf4;
        border-left: 4px solid #16a34a;
        border-radius: 12px;
        margin-top: 22px;
      }

      .aba-lesson-quiz {
        padding: 20px;
        background: #fff7ed;
        border-left: 4px solid #f97316;
        border-radius: 12px;
        margin-top: 22px;
      }

      .aba-lesson-footer {
        border-top: 1px solid #e2e8f0;
        background: #ffffff;
        padding: 16px 20px;
      }

      .aba-lesson-buttons {
        display: grid;
        grid-template-columns: 1fr 1.3fr 1fr;
        gap: 10px;
      }

      .aba-lesson-btn {
        min-height: 48px;
        border: 0;
        border-radius: 12px;
        padding: 10px 14px;
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
        transition: .2s ease;
      }

      .aba-lesson-btn:hover {
        transform: translateY(-1px);
      }

      .aba-prev-btn {
        background: #f1f5f9;
        color: #334155;
      }

      .aba-next-btn {
        background: #0f172a;
        color: white;
      }

      .aba-complete-btn {
        background: #16a34a;
        color: white;
      }

      .aba-complete-btn.completed {
        background: #15803d;
      }

      .aba-lesson-btn:disabled {
        opacity: .45;
        cursor: not-allowed;
        transform: none;
      }

      .aba-bottom-status {
        text-align: center;
        font-size: 12px;
        color: #64748b;
        margin-top: 10px;
      }

      @media (max-width: 700px) {

        #abaLessonOverlay {
          padding: 0;
          align-items: stretch;
        }

        .aba-lesson-modal {
          max-height: 100vh;
          height: 100vh;
          border-radius: 0;
        }

        .aba-lesson-header {
          padding: 18px 18px;
        }

        .aba-lesson-title {
          font-size: 20px;
          padding-right: 42px;
        }

        .aba-lesson-body {
          padding: 20px 16px;
        }

        .aba-lesson-progress-wrap {
          padding: 12px 16px;
        }

        .aba-lesson-buttons {
          grid-template-columns: 1fr 1fr;
        }

        .aba-complete-btn {
          grid-column: 1 / -1;
          order: -1;
        }

        .aba-lesson-footer {
          padding: 12px;
        }
      }
    `;

    document.head.appendChild(style);
  }

  /* =========================================================
     CREATE MODAL
     ========================================================= */

  function createModal() {
    if (document.getElementById("abaLessonOverlay")) {
      return;
    }

    const overlay = document.createElement("div");

    overlay.id = "abaLessonOverlay";

    overlay.innerHTML = `
      <div class="aba-lesson-modal">

        <div class="aba-lesson-header">

          <div class="aba-lesson-category"
               id="abaLessonCategory">
          </div>

          <h1 class="aba-lesson-title"
              id="abaLessonTitle">
          </h1>

          <div class="aba-lesson-number"
               id="abaLessonNumber">
          </div>

          <button
            class="aba-lesson-close"
            id="abaLessonClose"
            type="button">
            ×
          </button>

        </div>

        <div class="aba-lesson-progress-wrap">

          <div class="aba-lesson-progress-info">

            <span id="abaLessonProgressText">
              Course Progress
            </span>

            <span id="abaLessonProgressPercent">
              0%
            </span>

          </div>

          <div class="aba-lesson-progress-bar">
            <div
              class="aba-lesson-progress-fill"
              id="abaLessonProgressFill">
            </div>
          </div>

        </div>

        <div
          class="aba-lesson-body"
          id="abaLessonBody">
        </div>

        <div class="aba-lesson-footer">

          <div class="aba-lesson-buttons">

            <button
              type="button"
              id="abaPreviousLesson"
              class="aba-lesson-btn aba-prev-btn">
              ⬅ Previous
            </button>

            <button
              type="button"
              id="abaCompleteLesson"
              class="aba-lesson-btn aba-complete-btn">
              ✅ Mark as Completed
            </button>

            <button
              type="button"
              id="abaNextLesson"
              class="aba-lesson-btn aba-next-btn">
              Next ➡
            </button>

          </div>

          <div
            class="aba-bottom-status"
            id="abaLessonBottomStatus">
          </div>

        </div>

      </div>
    `;

    document.body.appendChild(overlay);

    document
      .getElementById("abaLessonClose")
      .addEventListener("click", closeLesson);

    overlay.addEventListener("click", function (event) {
      if (event.target === overlay) {
        closeLesson();
      }
    });

    document
      .getElementById("abaPreviousLesson")
      .addEventListener("click", previousLesson);

    document
      .getElementById("abaNextLesson")
      .addEventListener("click", nextLesson);

    document
      .getElementById("abaCompleteLesson")
      .addEventListener("click", toggleComplete);

    document.addEventListener("keydown", function (event) {

      const modal = document.getElementById("abaLessonOverlay");

      if (!modal || !modal.classList.contains("active")) {
        return;
      }

      if (event.key === "Escape") {
        closeLesson();
      }

      if (event.key === "ArrowLeft") {
        previousLesson();
      }

      if (event.key === "ArrowRight") {
        nextLesson();
      }
    });
  }

  /* =========================================================
     CURRENT STATE
     ========================================================= */

  let currentCourseId = null;
  let currentLessonIndex = 0;

  /* =========================================================
     OPEN LESSON
     ========================================================= */

  function openLesson(courseId, lessonId) {

    const course = getCourse(courseId);

    if (!course) {
      console.error("Course not found:", courseId);
      return;
    }

    if (!Array.isArray(course.lessons) || course.lessons.length === 0) {
      console.error("No lessons found for:", courseId);
      return;
    }

    const index = course.lessons.findIndex(function (lesson) {
      return String(lesson.id) === String(lessonId);
    });

    if (index < 0) {
      console.error("Lesson not found:", lessonId);
      return;
    }

    currentCourseId = courseId;
    currentLessonIndex = index;

    injectStyles();
    createModal();

    renderCurrentLesson();

    const overlay = document.getElementById("abaLessonOverlay");

    overlay.classList.add("active");

    document.body.style.overflow = "hidden";
  }

  /* =========================================================
     RENDER CURRENT LESSON
     ========================================================= */

  function renderCurrentLesson() {

    const course = getCourse(currentCourseId);

    if (!course) {
      return;
    }

    const lessons = course.lessons;

    const lesson = lessons[currentLessonIndex];

    if (!lesson) {
      return;
    }

    const total = lessons.length;

    const lessonNumber = currentLessonIndex + 1;

    const progress = getCourseProgress(currentCourseId);

    const completed = isCompleted(lesson.id);

    document.getElementById("abaLessonCategory").textContent =
      course.category || "BUSINESS";

    document.getElementById("abaLessonTitle").textContent =
      lesson.title || lesson.name || "Lesson";

    document.getElementById("abaLessonNumber").textContent =
      "Lesson " +
      String(lessonNumber).padStart(2, "0") +
      " / " +
      String(total);

    document.getElementById("abaLessonProgressText").textContent =
      progress.completed +
      " / " +
      progress.total +
      " Lessons Completed";

    document.getElementById("abaLessonProgressPercent").textContent =
      progress.percent + "%";

    document.getElementById("abaLessonProgressFill").style.width =
      progress.percent + "%";

    renderLessonBody(lesson);

    const previousButton =
      document.getElementById("abaPreviousLesson");

    const nextButton =
      document.getElementById("abaNextLesson");

    const completeButton =
      document.getElementById("abaCompleteLesson");

    previousButton.disabled =
      currentLessonIndex === 0;

    nextButton.disabled =
      currentLessonIndex === total - 1;

    if (completed) {

      completeButton.textContent =
        "✓ Completed";

      completeButton.classList.add("completed");

    } else {

      completeButton.textContent =
        "✅ Mark as Completed";

      completeButton.classList.remove("completed");
    }

    let statusText =
      "Lesson " +
      lessonNumber +
      " of " +
      total;

    if (currentLessonIndex === total - 1) {

      statusText +=
        " • Final Lesson";
    }

    document.getElementById("abaLessonBottomStatus").textContent =
      statusText;

    const body =
      document.getElementById("abaLessonBody");

    if (body) {
      body.scrollTop = 0;
    }
  }

  /* =========================================================
     RENDER LESSON BODY
     ========================================================= */

  function renderLessonBody(lesson) {

    const body =
      document.getElementById("abaLessonBody");

    if (!body) {
      return;
    }

    let html = "";

    if (lesson.objective) {

      html += `
        <div class="aba-lesson-objective">

          <strong>🎯 Learning Objective</strong>

          <div style="margin-top:8px;">
            ${lesson.objective}
          </div>

        </div>
      `;
    }

    if (lesson.content) {

      html += `
        <div class="aba-lesson-content">

          ${lesson.content}

        </div>
      `;

    } else if (lesson.description) {

      html += `
        <div class="aba-lesson-content">

          <p>
            ${lesson.description}
          </p>

        </div>
      `;

    } else {

      html += `
        <div class="aba-lesson-content">

          <p>
            ဒီ Lesson ရဲ့ အကြောင်းအရာကို
            ဆက်လက်ထည့်သွင်းသွားပါမယ်။
          </p>

        </div>
      `;
    }

    if (lesson.action) {

      html += `
        <div class="aba-lesson-action">

          <strong>📝 Practical Action</strong>

          <div style="margin-top:8px;">
            ${lesson.action}
          </div>

        </div>
      `;
    }

    if (lesson.quiz) {

      html += `
        <div class="aba-lesson-quiz">

          <strong>❓ Quiz / Knowledge Check</strong>

          <div style="margin-top:8px;">
            ${lesson.quiz}
          </div>

        </div>
      `;
    }

    body.innerHTML = html;
  }

  /* =========================================================
     PREVIOUS
     ========================================================= */

  function previousLesson() {

    if (currentLessonIndex <= 0) {
      return;
    }

    currentLessonIndex--;

    renderCurrentLesson();
  }

  /* =========================================================
     NEXT
     ========================================================= */

  function nextLesson() {

    const course = getCourse(currentCourseId);

    if (!course) {
      return;
    }

    if (
      currentLessonIndex >=
      course.lessons.length - 1
    ) {
      return;
    }

    currentLessonIndex++;

    renderCurrentLesson();
  }

  /* =========================================================
     COMPLETE
     ========================================================= */

  function toggleComplete() {

    const course = getCourse(currentCourseId);

    if (!course) {
      return;
    }

    const lesson =
      course.lessons[currentLessonIndex];

    if (!lesson) {
      return;
    }

    if (isCompleted(lesson.id)) {

      unmarkCompleted(lesson.id);

    } else {

      markCompleted(lesson.id);
    }

    renderCurrentLesson();

    /*
      Notify other app components
    */

    window.dispatchEvent(
      new CustomEvent(
        "aungAcademyProgressUpdated",
        {
          detail: {
            courseId: currentCourseId,
            lessonId: lesson.id,
            progress:
              getCourseProgress(currentCourseId)
          }
        }
      )
    );
  }

  /* =========================================================
     CLOSE
     ========================================================= */

  function closeLesson() {

    const overlay =
      document.getElementById("abaLessonOverlay");

    if (!overlay) {
      return;
    }

    overlay.classList.remove("active");

    document.body.style.overflow = "";

    currentCourseId = null;
    currentLessonIndex = 0;
  }

  /* =========================================================
     COURSE LESSON LIST RENDERER
     ========================================================= */

  function renderCourseLessons(
    container,
    courseId
  ) {

    const course = getCourse(courseId);

    if (!course || !Array.isArray(course.lessons)) {
      return;
    }

    const progress =
      getCourseProgress(courseId);

    container.innerHTML = `
      <div style="
        margin-bottom:18px;
        padding:16px;
        border-radius:14px;
        background:#f8fafc;
      ">

        <div style="
          display:flex;
          justify-content:space-between;
          margin-bottom:8px;
          font-weight:700;
        ">

          <span>
            Course Progress
          </span>

          <span>
            ${progress.percent}%
          </span>

        </div>

        <div style="
          height:8px;
          background:#e2e8f0;
          border-radius:20px;
          overflow:hidden;
        ">

          <div style="
            width:${progress.percent}%;
            height:100%;
            background:#16a34a;
            border-radius:20px;
          "></div>

        </div>

      </div>
    `;

    course.lessons.forEach(function (lesson, index) {

      const completed =
        isCompleted(lesson.id);

      const item =
        document.createElement("button");

      item.type = "button";

      item.style.cssText = `
        width:100%;
        display:flex;
        align-items:center;
        gap:12px;
        text-align:left;
        border:1px solid #e2e8f0;
        background:#ffffff;
        padding:15px;
        margin-bottom:9px;
        border-radius:14px;
        cursor:pointer;
        transition:.2s;
      `;

      item.innerHTML = `

        <span style="
          width:34px;
          height:34px;
          flex:none;
          border-radius:50%;
          display:flex;
          align-items:center;
          justify-content:center;
          background:${completed ? "#dcfce7" : "#f1f5f9"};
          color:${completed ? "#15803d" : "#475569"};
          font-weight:800;
        ">
          ${completed ? "✓" : index + 1}
        </span>

        <span style="
          flex:1;
          font-weight:700;
          color:#1e293b;
        ">
          ${lesson.title || lesson.name}
        </span>

        <span style="
          color:#64748b;
          font-size:18px;
        ">
          ›
        </span>

      `;

      item.addEventListener(
        "click",
        function () {

          openLesson(
            courseId,
            lesson.id
          );

        }
      );

      container.appendChild(item);
    });
  }

  /* =========================================================
     GLOBAL API
     ========================================================= */

  window.AungLessonSystem = {

    openLesson: openLesson,

    closeLesson: closeLesson,

    nextLesson: nextLesson,

    previousLesson: previousLesson,

    markCompleted: markCompleted,

    isCompleted: isCompleted,

    getCourseProgress: getCourseProgress,

    getCourses: getCourses,

    getCourse: getCourse,

    getLesson: getLesson,

    renderCourseLessons:
      renderCourseLessons
  };

  /* =========================================================
     AUTO INIT
     ========================================================= */

  function init() {

    injectStyles();
    createModal();

    console.log(
      "Aung Business Academy — Professional Lesson System loaded"
    );
  }

  if (document.readyState === "loading") {

    document.addEventListener(
      "DOMContentLoaded",
      init
    );

  } else {

    init();
  }

})();
