/* =========================================================
   AUNG BUSINESS ACADEMY
   LESSON SYSTEM V2.0
   Mobile Responsive + Long Lesson Reader
   ========================================================= */

(function () {
  "use strict";

  const STORAGE_KEY =
    "aung_business_academy_completed_lessons_v1";

  /* =========================================================
     STORAGE
     ========================================================= */

  function getCompletedLessons() {
    try {
      const data = JSON.parse(
        localStorage.getItem(STORAGE_KEY)
      );

      return Array.isArray(data) ? data : [];
    } catch (e) {
      return [];
    }
  }

  function saveCompletedLessons(list) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify([...new Set(list)])
    );
  }

  function isCompleted(lessonId) {
    return getCompletedLessons().includes(lessonId);
  }

  /* =========================================================
     COURSE DATA
     ========================================================= */

  function getCourses() {
    if (
      window.AungBusinessAcademy &&
      Array.isArray(
        window.AungBusinessAcademy.COURSES
      )
    ) {
      return window.AungBusinessAcademy.COURSES;
    }

    return [];
  }

  function getCourse(courseId) {
    return getCourses().find(function (course) {
      return course.id === courseId;
    }) || null;
  }

  function getLesson(courseId, lessonId) {
    const course = getCourse(courseId);

    if (!course || !Array.isArray(course.lessons)) {
      return null;
    }

    return course.lessons.find(function (lesson) {
      return lesson.id === lessonId;
    }) || null;
  }

  /* =========================================================
     PROGRESS
     ========================================================= */

  function getCourseProgress(courseId) {
    const course = getCourse(courseId);

    if (!course || !Array.isArray(course.lessons)) {
      return {
        total: 0,
        completed: 0,
        percent: 0
      };
    }

    const total = course.lessons.length;

    const completed = course.lessons.filter(
      function (lesson) {
        return isCompleted(lesson.id);
      }
    ).length;

    return {
      total: total,
      completed: completed,
      percent:
        total === 0
          ? 0
          : Math.round((completed / total) * 100)
    };
  }

  /* =========================================================
     STYLE
     ========================================================= */

  function injectStyles() {
    if (document.getElementById(
      "aung-lesson-system-v2-style"
    )) {
      return;
    }

    const style = document.createElement("style");

    style.id =
      "aung-lesson-system-v2-style";

    style.textContent = `
      /* ================================
         OVERLAY
         ================================ */

      .aung-lesson-overlay {
        position: fixed;
        inset: 0;
        z-index: 999999;
        background: rgba(15,23,42,.72);
        display: none;
        align-items: center;
        justify-content: center;
        padding: 18px;
        overflow-y: auto;
      }

      .aung-lesson-overlay.active {
        display: flex;
      }

      /* ================================
         MODAL
         ================================ */

      .aung-lesson-modal {
        width: min(980px, 100%);
        max-height: 94vh;
        background: #ffffff;
        border-radius: 22px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        box-shadow:
          0 25px 70px rgba(0,0,0,.30);
      }

      /* ================================
         HEADER
         ================================ */

      .aung-lesson-header {
        flex: 0 0 auto;
        padding: 20px 24px;
        border-bottom: 1px solid #e5e7eb;
        background: #ffffff;
      }

      .aung-lesson-header-top {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 16px;
      }

      .aung-lesson-category {
        font-size: 12px;
        font-weight: 800;
        color: #64748b;
        text-transform: uppercase;
        letter-spacing: .8px;
        margin-bottom: 6px;
      }

      .aung-lesson-title {
        font-size: 26px;
        line-height: 1.45;
        font-weight: 800;
        color: #0f172a;
        overflow-wrap: anywhere;
        word-break: break-word;
      }

      .aung-lesson-close {
        flex: 0 0 auto;
        width: 42px;
        height: 42px;
        border: 0;
        border-radius: 12px;
        background: #f1f5f9;
        color: #334155;
        font-size: 22px;
        cursor: pointer;
      }

      .aung-lesson-close:hover {
        background: #e2e8f0;
      }

      /* ================================
         PROGRESS
         ================================ */

      .aung-lesson-progress-area {
        margin-top: 18px;
      }

      .aung-lesson-progress-info {
        display: flex;
        justify-content: space-between;
        gap: 12px;
        font-size: 13px;
        color: #64748b;
        margin-bottom: 8px;
      }

      .aung-lesson-progress-track {
        width: 100%;
        height: 9px;
        background: #e2e8f0;
        border-radius: 999px;
        overflow: hidden;
      }

      .aung-lesson-progress-bar {
        height: 100%;
        width: 0;
        background: #2563eb;
        border-radius: inherit;
        transition: width .3s ease;
      }

      /* ================================
         BODY
         ================================ */

      .aung-lesson-body {
        flex: 1 1 auto;
        overflow-y: auto;
        overflow-x: hidden;
        min-height: 0;
        padding: 30px 34px 40px;
        background: #f8fafc;
        overscroll-behavior: contain;
      }

      /*
       IMPORTANT:
       Prevent long Myanmar text from
       escaping the screen.
      */

      .aung-lesson-body,
      .aung-lesson-body * {
        max-width: 100%;
        box-sizing: border-box;
      }

      .aung-lesson-body p,
      .aung-lesson-body li,
      .aung-lesson-body td,
      .aung-lesson-body th,
      .aung-lesson-body h1,
      .aung-lesson-body h2,
      .aung-lesson-body h3,
      .aung-lesson-body h4,
      .aung-lesson-body strong,
      .aung-lesson-body span {
        overflow-wrap: anywhere;
        word-break: break-word;
      }

      .aung-lesson-body img {
        max-width: 100%;
        height: auto;
      }

      .aung-lesson-body table {
        width: 100%;
        max-width: 100%;
        border-collapse: collapse;
        display: table;
        overflow-x: auto;
      }

      .aung-lesson-body pre {
        max-width: 100%;
        overflow-x: auto;
        white-space: pre-wrap;
        word-break: break-word;
      }

      .aung-lesson-body code {
        white-space: pre-wrap;
        overflow-wrap: anywhere;
      }

      /* ================================
         CONTENT
         ================================ */

      .lesson-section {
        width: 100%;
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 16px;
        padding: 22px;
        margin-bottom: 18px;
      }

      .lesson-section h3 {
        font-size: 20px;
        line-height: 1.5;
        color: #0f172a;
        margin: 0 0 14px;
      }

      .lesson-section h4 {
        font-size: 17px;
        line-height: 1.5;
        color: #1e293b;
        margin: 18px 0 8px;
      }

      .lesson-section p {
        font-size: 16px;
        line-height: 2;
        color: #334155;
        margin: 0 0 14px;
      }

      .lesson-section p:last-child {
        margin-bottom: 0;
      }

      .lesson-section ul,
      .lesson-section ol {
        padding-left: 24px;
        margin: 10px 0 16px;
      }

      .lesson-section li {
        font-size: 15px;
        line-height: 1.9;
        color: #334155;
        margin-bottom: 7px;
      }

      .lesson-section strong {
        color: #0f172a;
      }

      /* ================================
         FORMULA
         ================================ */

      .formula-box {
        width: 100%;
        padding: 16px;
        margin: 14px 0;
        border-radius: 12px;
        background: #eff6ff;
        border: 1px solid #bfdbfe;
        color: #1e3a8a;
        line-height: 1.8;
        overflow-wrap: anywhere;
      }

      /* ================================
         TABLE
         ================================ */

      .lesson-table-wrapper {
        width: 100%;
        overflow-x: auto;
        margin: 15px 0;
      }

      .lesson-table {
        min-width: 520px;
        border-collapse: collapse;
        width: 100%;
      }

      .lesson-table th,
      .lesson-table td {
        border: 1px solid #cbd5e1;
        padding: 11px;
        text-align: left;
        line-height: 1.7;
        overflow-wrap: anywhere;
      }

      .lesson-table th {
        background: #f1f5f9;
        font-weight: 800;
      }

      /* ================================
         FRAMEWORK CARD
         ================================ */

      .framework-card {
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 14px;
        padding: 17px;
        margin: 12px 0;
      }

      .framework-card h4 {
        margin-top: 0;
      }

      /* ================================
         TAKEAWAY
         ================================ */

      .key-takeaway {
        border-left: 5px solid #2563eb;
        background: #eff6ff;
      }

      /* ================================
         ACTION / QUIZ
         ================================ */

      .aung-lesson-action,
      .aung-lesson-quiz {
        margin-top: 18px;
      }

      /* ================================
         FOOTER
         ================================ */

      .aung-lesson-footer {
        flex: 0 0 auto;
        padding: 16px 20px;
        border-top: 1px solid #e5e7eb;
        background: #ffffff;
      }

      .aung-lesson-status {
        text-align: center;
        font-size: 13px;
        color: #64748b;
        margin-bottom: 12px;
      }

      .aung-lesson-buttons {
        display: grid;
        grid-template-columns: 1fr 1.2fr 1fr;
        gap: 10px;
      }

      .aung-lesson-btn {
        min-height: 48px;
        border: 0;
        border-radius: 12px;
        padding: 10px 14px;
        font-size: 14px;
        font-weight: 800;
        cursor: pointer;
        overflow-wrap: anywhere;
      }

      .aung-lesson-btn.previous {
        background: #f1f5f9;
        color: #334155;
      }

      .aung-lesson-btn.complete {
        background: #16a34a;
        color: #ffffff;
      }

      .aung-lesson-btn.next {
        background: #2563eb;
        color: #ffffff;
      }

      .aung-lesson-btn:disabled {
        opacity: .45;
        cursor: not-allowed;
      }

      /* ================================
         MOBILE
         ================================ */

      @media (max-width: 700px) {

        .aung-lesson-overlay {
          padding: 0;
          align-items: stretch;
        }

        .aung-lesson-modal {
          width: 100%;
          max-height: 100vh;
          height: 100vh;
          border-radius: 0;
        }

        .aung-lesson-header {
          padding: 16px;
        }

        .aung-lesson-title {
          font-size: 20px;
          line-height: 1.5;
        }

        .aung-lesson-body {
          padding: 16px 12px 28px;
        }

        .lesson-section {
          padding: 16px;
          border-radius: 13px;
          margin-bottom: 14px;
        }

        .lesson-section h3 {
          font-size: 18px;
        }

        .lesson-section p {
          font-size: 15px;
          line-height: 1.95;
        }

        .lesson-section li {
          font-size: 14px;
          line-height: 1.85;
        }

        .aung-lesson-buttons {
          grid-template-columns: 1fr 1fr;
        }

        .aung-lesson-btn.complete {
          grid-column: 1 / -1;
          grid-row: 1;
        }

        .aung-lesson-btn.previous {
          grid-column: 1;
          grid-row: 2;
        }

        .aung-lesson-btn.next {
          grid-column: 2;
          grid-row: 2;
        }
      }

      @media (max-width: 420px) {

        .aung-lesson-header {
          padding: 13px;
        }

        .aung-lesson-title {
          font-size: 18px;
        }

        .aung-lesson-body {
          padding-left: 9px;
          padding-right: 9px;
        }

        .lesson-section {
          padding: 14px;
        }

        .lesson-section p {
          font-size: 14px;
          line-height: 1.9;
        }

        .lesson-section li {
          font-size: 13.5px;
        }

        .aung-lesson-footer {
          padding: 11px;
        }

        .aung-lesson-btn {
          font-size: 13px;
          min-height: 45px;
        }
      }
    `;

    document.head.appendChild(style);
  }

  /* =========================================================
     MODAL
     ========================================================= */

  let currentCourseId = null;
  let currentLessonIndex = 0;

  function createModal() {
    let overlay =
      document.getElementById(
        "aung-lesson-overlay"
      );

    if (overlay) {
      return overlay;
    }

    overlay = document.createElement("div");

    overlay.id =
      "aung-lesson-overlay";

    overlay.className =
      "aung-lesson-overlay";

    overlay.innerHTML = `
      <div class="aung-lesson-modal">

        <div class="aung-lesson-header">

          <div class="aung-lesson-header-top">

            <div style="min-width:0;flex:1">

              <div
                id="aung-lesson-category"
                class="aung-lesson-category">
              </div>

              <div
                id="aung-lesson-title"
                class="aung-lesson-title">
              </div>

            </div>

            <button
              id="aung-lesson-close"
              class="aung-lesson-close"
              type="button"
              aria-label="Close">
              ×
            </button>

          </div>

          <div class="aung-lesson-progress-area">

            <div class="aung-lesson-progress-info">

              <span
                id="aung-lesson-position">
              </span>

              <strong
                id="aung-lesson-percent">
                0%
              </strong>

            </div>

            <div class="aung-lesson-progress-track">

              <div
                id="aung-lesson-progress-bar"
                class="aung-lesson-progress-bar">
              </div>

            </div>

          </div>

        </div>

        <div
          id="aung-lesson-body"
          class="aung-lesson-body">
        </div>

        <div class="aung-lesson-footer">

          <div
            id="aung-lesson-status"
            class="aung-lesson-status">
          </div>

          <div class="aung-lesson-buttons">

            <button
              id="aung-lesson-prev"
              class="aung-lesson-btn previous"
              type="button">
              ⬅ Previous
            </button>

            <button
              id="aung-lesson-complete"
              class="aung-lesson-btn complete"
              type="button">
              ✅ Mark as Completed
            </button>

            <button
              id="aung-lesson-next"
              class="aung-lesson-btn next"
              type="button">
              Next ➡
            </button>

          </div>

        </div>

      </div>
    `;

    document.body.appendChild(overlay);

    overlay.addEventListener(
      "click",
      function (event) {
        if (event.target === overlay) {
          closeLesson();
        }
      }
    );

    document
      .getElementById("aung-lesson-close")
      .addEventListener(
        "click",
        closeLesson
      );

    document
      .getElementById("aung-lesson-prev")
      .addEventListener(
        "click",
        previousLesson
      );

    document
      .getElementById("aung-lesson-next")
      .addEventListener(
        "click",
        nextLesson
      );

    document
      .getElementById("aung-lesson-complete")
      .addEventListener(
        "click",
        markCompleted
      );

    return overlay;
  }

  /* =========================================================
     RENDER LESSON
     ========================================================= */

  function renderLesson() {
    const course =
      getCourse(currentCourseId);

    if (
      !course ||
      !Array.isArray(course.lessons) ||
      !course.lessons[currentLessonIndex]
    ) {
      return;
    }

    const lesson =
      course.lessons[currentLessonIndex];

    const progress =
      getCourseProgress(
        currentCourseId
      );

    const overlay =
      createModal();

    document.getElementById(
      "aung-lesson-category"
    ).textContent =
      (course.icon || "📚") +
      " " +
      (course.category || "COURSE");

    document.getElementById(
      "aung-lesson-title"
    ).textContent =
      lesson.title || "Lesson";

    document.getElementById(
      "aung-lesson-position"
    ).textContent =
      "Lesson " +
      (currentLessonIndex + 1) +
      " / " +
      course.lessons.length;

    document.getElementById(
      "aung-lesson-percent"
    ).textContent =
      progress.percent + "%";

    document.getElementById(
      "aung-lesson-progress-bar"
    ).style.width =
      progress.percent + "%";

    const body =
      document.getElementById(
        "aung-lesson-body"
      );

    body.innerHTML = `
      ${lesson.objective || ""}

      ${lesson.content || ""}

      <div class="aung-lesson-action">
        ${lesson.action || ""}
      </div>

      <div class="aung-lesson-quiz">
        ${lesson.quiz || ""}
      </div>
    `;

    /*
      Scroll back to top whenever
      a new lesson is opened.
    */

    body.scrollTop = 0;

    const completed =
      isCompleted(lesson.id);

    const completeButton =
      document.getElementById(
        "aung-lesson-complete"
      );

    completeButton.textContent =
      completed
        ? "✓ Completed"
        : "✅ Mark as Completed";

    completeButton.disabled =
      completed;

    const prevButton =
      document.getElementById(
        "aung-lesson-prev"
      );

    const nextButton =
      document.getElementById(
        "aung-lesson-next"
      );

    prevButton.disabled =
      currentLessonIndex === 0;

    nextButton.disabled =
      currentLessonIndex ===
      course.lessons.length - 1;

    const status =
      document.getElementById(
        "aung-lesson-status"
      );

    if (completed) {
      status.textContent =
        "✓ ဒီ Lesson ကိုပြီးဆုံးထားပါပြီ";
    } else {
      status.textContent =
        "📖 သင်ခန်းစာကို သေချာဖတ်ပြီး ပြီးဆုံးပါက Completed နှိပ်ပါ";
    }

    overlay.classList.add("active");

    document.body.style.overflow =
      "hidden";
  }

  /* =========================================================
     OPEN
     ========================================================= */

  function openLesson(
    courseId,
    lessonId
  ) {
    injectStyles();

    const course =
      getCourse(courseId);

    if (!course) {
      console.warn(
        "Course not found:",
        courseId
      );
      return;
    }

    const index =
      course.lessons.findIndex(
        function (lesson) {
          return lesson.id === lessonId;
        }
      );

    if (index < 0) {
      console.warn(
        "Lesson not found:",
        lessonId
      );
      return;
    }

    currentCourseId =
      courseId;

    currentLessonIndex =
      index;

    createModal();

    renderLesson();
  }

  /* =========================================================
     CLOSE
     ========================================================= */

  function closeLesson() {
    const overlay =
      document.getElementById(
        "aung-lesson-overlay"
      );

    if (overlay) {
      overlay.classList.remove(
        "active"
      );
    }

    document.body.style.overflow =
      "";
  }

  /* =========================================================
     NEXT
     ========================================================= */

  function nextLesson() {
    const course =
      getCourse(currentCourseId);

    if (!course) return;

    if (
      currentLessonIndex <
      course.lessons.length - 1
    ) {
      currentLessonIndex++;

      renderLesson();
    }
  }

  /* =========================================================
     PREVIOUS
     ========================================================= */

  function previousLesson() {
    if (currentLessonIndex > 0) {
      currentLessonIndex--;

      renderLesson();
    }
  }

  /* =========================================================
     MARK COMPLETED
     ========================================================= */

  function markCompleted() {
    const course =
      getCourse(currentCourseId);

    if (!course) return;

    const lesson =
      course.lessons[currentLessonIndex];

    if (!lesson) return;

    const completed =
      getCompletedLessons();

    if (!completed.includes(lesson.id)) {
      completed.push(lesson.id);

      saveCompletedLessons(
        completed
      );
    }

    window.dispatchEvent(
      new CustomEvent(
        "aungAcademyProgressUpdated",
        {
          detail: {
            courseId:
              currentCourseId,
            lessonId:
              lesson.id
          }
        }
      )
    );

    renderLesson();
  }

  /* =========================================================
     RENDER COURSE LESSON LIST
     ========================================================= */

  function renderCourseLessons(
    courseId,
    container
  ) {
    const course =
      getCourse(courseId);

    if (!course || !container) {
      return;
    }

    container.innerHTML = "";

    course.lessons.forEach(
      function (lesson, index) {

        const completed =
          isCompleted(
            lesson.id
          );

        const item =
          document.createElement(
            "button"
          );

        item.type = "button";

        item.style.cssText = `
          width:100%;
          display:flex;
          align-items:center;
          gap:14px;
          text-align:left;
          padding:16px;
          margin-bottom:10px;
          border:1px solid #e2e8f0;
          border-radius:14px;
          background:#ffffff;
          cursor:pointer;
          box-sizing:border-box;
        `;

        item.innerHTML = `
          <div style="
            width:38px;
            height:38px;
            min-width:38px;
            border-radius:50%;
            display:flex;
            align-items:center;
            justify-content:center;
            background:${completed
              ? "#dcfce7"
              : "#eff6ff"};
            color:${completed
              ? "#15803d"
              : "#2563eb"};
            font-weight:800;
          ">
            ${completed
              ? "✓"
              : index + 1}
          </div>

          <div style="
            min-width:0;
            flex:1;
          ">

            <div style="
              font-weight:800;
              color:#0f172a;
              line-height:1.5;
              overflow-wrap:anywhere;
            ">
              ${lesson.title}
            </div>

            <div style="
              margin-top:4px;
              font-size:12px;
              color:#64748b;
            ">
              ${completed
                ? "Completed"
                : "Start Lesson"}
            </div>

          </div>

          <div style="
            font-size:20px;
            color:#94a3b8;
          ">
            ›
          </div>
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
      }
    );
  }

  /* =========================================================
     KEYBOARD
     ========================================================= */

  document.addEventListener(
    "keydown",
    function (event) {

      const overlay =
        document.getElementById(
          "aung-lesson-overlay"
        );

      if (
        !overlay ||
        !overlay.classList.contains(
          "active"
        )
      ) {
        return;
      }

      if (event.key === "Escape") {
        closeLesson();
      }

      if (
        event.key === "ArrowRight"
      ) {
        nextLesson();
      }

      if (
        event.key === "ArrowLeft"
      ) {
        previousLesson();
      }
    }
  );

  /* =========================================================
     PUBLIC API
     ========================================================= */

  window.AungLessonSystem = {

    openLesson:
      openLesson,

    closeLesson:
      closeLesson,

    nextLesson:
      nextLesson,

    previousLesson:
      previousLesson,

    markCompleted:
      markCompleted,

    isCompleted:
      isCompleted,

    getCourseProgress:
      getCourseProgress,

    getCourses:
      getCourses,

    getCourse:
      getCourse,

    getLesson:
      getLesson,

    renderCourseLessons:
      renderCourseLessons

  };

  console.log(
    "✅ Aung Lesson System V2.0 loaded"
  );

})();
