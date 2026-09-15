/* =========================================================
   AUNG BUSINESS ACADEMY
   APP.JS — V15.1 LESSON CONTENT RESTORE
   ========================================================= */

(function () {
  "use strict";

  /* =========================================================
     APP CONFIG
     ========================================================= */

  const APP = {
    name: "Aung Business Academy",
    version: "V15.1 Professional",
    premiumDays: 180,

    storage: {
      completed: "aung_business_academy_completed_lessons_v15",
      premium: "aung_business_academy_premium_until_v1"
    }
  };

  window.AungBusinessAcademyApp = window.AungBusinessAcademyApp || {};

  /* =========================================================
     COURSE MASTER DATA
     ========================================================= */

  const COURSE_META = [
    {
      id: "sales-management",
      icon: "🎯",
      category: "SALES",
      title: "Sales Management Mastery",
      burmeseTitle: "အရောင်းစီမံခန့်ခွဲမှု",
      lessons: 15,
      description: "Sales Strategy • Target • Planning • KPI • Team Management"
    },
    {
      id: "negotiation-mastery",
      icon: "🤝",
      category: "SALES",
      title: "Negotiation Mastery",
      burmeseTitle: "ညှိနှိုင်းဆွေးနွေးမှု",
      lessons: 15,
      description: "Preparation • BATNA • Value • Objection • Closing"
    },
    {
      id: "marketing-management",
      icon: "📣",
      category: "MARKETING",
      title: "Marketing Management",
      burmeseTitle: "Marketing စီမံခန့်ခွဲမှု",
      lessons: 15,
      description: "Customer • Market • STP • 4Ps • Brand • Campaign"
    },
    {
      id: "leadership-management",
      icon: "👑",
      category: "MANAGEMENT",
      title: "Leadership & Management",
      burmeseTitle: "ခေါင်းဆောင်မှုနှင့် စီမံခန့်ခွဲမှု",
      lessons: 15,
      description: "Leadership • Delegation • Coaching • Accountability"
    },
    {
      id: "hr-people-management",
      icon: "👥",
      category: "HR",
      title: "People & HR Management",
      burmeseTitle: "လူအင်အားနှင့် HR စီမံခန့်ခွဲမှု",
      lessons: 15,
      description: "Recruitment • Performance • Motivation • Development"
    },
    {
      id: "finance-accounting",
      icon: "💰",
      category: "FINANCE",
      title: "Finance for Managers",
      burmeseTitle: "မန်နေဂျာများအတွက် ဘဏ္ဍာရေး",
      lessons: 15,
      description: "P&L • Cost • Margin • Cash Flow • Break-even"
    },
    {
      id: "business-fundamentals",
      icon: "🏢",
      category: "BUSINESS",
      title: "Business Fundamentals",
      burmeseTitle: "စီးပွားရေးလုပ်ငန်း အခြေခံ",
      lessons: 10,
      description: "Business Model • Customer • Value • Operations"
    },
    {
      id: "customer-service",
      icon: "❤️",
      category: "CUSTOMER",
      title: "Customer Service Management",
      burmeseTitle: "ဖောက်သည်ဝန်ဆောင်မှု စီမံခန့်ခွဲမှု",
      lessons: 10,
      description: "Service Quality • Complaint • Retention • Loyalty"
    },
    {
      id: "strategic-management",
      icon: "♟",
      category: "STRATEGY",
      title: "Strategic Management",
      burmeseTitle: "မဟာဗျူဟာ စီမံခန့်ခွဲမှု",
      lessons: 12,
      description: "SWOT • Competitive Strategy • Execution • Growth"
    },
    {
      id: "key-account-management",
      icon: "🔑",
      category: "SALES",
      title: "Key Account Management",
      burmeseTitle: "အဓိကဖောက်သည် စီမံခန့်ခွဲမှု",
      lessons: 12,
      description: "KA Planning • Joint Business • Relationship • Negotiation"
    },
    {
      id: "distributor-management",
      icon: "🚚",
      category: "SALES",
      title: "Distributor Management",
      burmeseTitle: "ဖြန့်ချိသူ စီမံခန့်ခွဲမှု",
      lessons: 12,
      description: "RTM • Coverage • Stock • Credit • Review"
    },
    {
      id: "retail-modern-trade",
      icon: "🛒",
      category: "SALES",
      title: "Retail & Modern Trade",
      burmeseTitle: "လက်လီနှင့် Modern Trade",
      lessons: 12,
      description: "Modern Trade • Listing • Promotion • Planogram"
    },
    {
      id: "business-development",
      icon: "🚀",
      category: "BUSINESS",
      title: "Business Development",
      burmeseTitle: "စီးပွားရေး ဖွံ့ဖြိုးတိုးတက်မှု",
      lessons: 12,
      description: "Opportunity • Partnership • Pipeline • Growth"
    },
    {
      id: "productivity-time",
      icon: "⏱",
      category: "PRODUCTIVITY",
      title: "Productivity & Time Management",
      burmeseTitle: "အလုပ်ထိရောက်မှုနှင့် အချိန်စီမံခန့်ခွဲမှု",
      lessons: 12,
      description: "Priorities • Calendar • Focus • Delegation"
    },
    {
      id: "data-analysis",
      icon: "📊",
      category: "DATA",
      title: "Data Analysis for Managers",
      burmeseTitle: "မန်နေဂျာများအတွက် Data Analysis",
      lessons: 12,
      description: "Excel Thinking • KPI • Trend • Forecast"
    },
    {
      id: "business-communication",
      icon: "💬",
      category: "COMMUNICATION",
      title: "Business Communication",
      burmeseTitle: "စီးပွားရေး ဆက်သွယ်ပြောဆိုမှု",
      lessons: 12,
      description: "Email • Presentation • Meeting • Influence"
    },
    {
      id: "problem-solving",
      icon: "🧩",
      category: "MANAGEMENT",
      title: "Problem Solving & Decision Making",
      burmeseTitle: "ပြဿနာဖြေရှင်းခြင်းနှင့် ဆုံးဖြတ်ချက်ချခြင်း",
      lessons: 12,
      description: "Root Cause • Options • Decision • Risk"
    },
    {
      id: "career-personal-leadership",
      icon: "⭐",
      category: "CAREER",
      title: "Career & Personal Leadership",
      burmeseTitle: "Career နှင့် ကိုယ်ပိုင်ခေါင်းဆောင်မှု",
      lessons: 12,
      description: "CV • Interview • Personal Brand • Career Growth"
    }
  ];

  /* =========================================================
     GLOBAL STATE
     ========================================================= */

  let currentView = "dashboard";
  let currentCourseId = null;
  let currentLessonIndex = 0;

  /* =========================================================
     HELPERS
     ========================================================= */

  function esc(value) {
    if (value === null || value === undefined) return "";

    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function normalizeText(value) {
    if (value === null || value === undefined) return "";

    if (Array.isArray(value)) {
      return value.join("<br>");
    }

    if (typeof value === "object") {
      return Object.values(value).join("<br>");
    }

    return String(value);
  }

  function normalizeLesson(lesson, index) {
    if (!lesson) return null;

    return {
      id:
        lesson.id ||
        lesson.lessonId ||
        "lesson-" + String(index + 1).padStart(2, "0"),

      title:
        lesson.title ||
        lesson.name ||
        lesson.burmeseTitle ||
        "Lesson " + (index + 1),

      burmeseTitle:
        lesson.burmeseTitle ||
        lesson.title ||
        "Lesson " + (index + 1),

      objective:
        lesson.objective ||
        lesson.learningObjective ||
        lesson.goal ||
        "",

      content:
        lesson.content ||
        lesson.body ||
        lesson.description ||
        lesson.explanation ||
        "",

      action:
        lesson.action ||
        lesson.exercise ||
        lesson.practice ||
        "",

      quiz:
        lesson.quiz ||
        lesson.question ||
        "",

      summary:
        lesson.summary ||
        "",

      raw: lesson
    };
  }

  /* =========================================================
     READ REAL COURSE DATA
     ========================================================= */

  function getAcademyRegistry() {
    return window.AungBusinessAcademy || {};
  }

  function getRegisteredCourses() {
    const academy = getAcademyRegistry();

    let courses = academy.COURSES;

    if (!courses) {
      courses = [];
    }

    if (!Array.isArray(courses)) {
      if (typeof courses === "object") {
        courses = Object.values(courses);
      } else {
        courses = [];
      }
    }

    return courses;
  }

  function findRegisteredCourse(id) {
    const courses = getRegisteredCourses();

    return courses.find(function (course) {
      return (
        course &&
        (
          course.id === id ||
          course.courseId === id ||
          course.slug === id
        )
      );
    }) || null;
  }

  function extractLessons(course) {
    if (!course) return [];

    let lessons =
      course.lessons ||
      course.LESSONS ||
      course.items ||
      course.modules ||
      [];

    if (!Array.isArray(lessons)) {
      if (typeof lessons === "object") {
        lessons = Object.values(lessons);
      } else {
        lessons = [];
      }
    }

    return lessons
      .map(normalizeLesson)
      .filter(Boolean);
  }

  /* =========================================================
     FALLBACK LESSON
     Only used when no real content exists.
     ========================================================= */

  function createFallbackLesson(course, index) {
    const number = index + 1;

    return {
      id: course.id + "-lesson-" + String(number).padStart(2, "0"),

      title: "Lesson " + number,

      burmeseTitle:
        course.burmeseTitle + " — Lesson " + number,

      objective:
        "ဒီ Lesson ရဲ့ ရည်ရွယ်ချက်က " +
        course.burmeseTitle +
        " ကို မန်နေဂျာအမြင်နဲ့ လက်တွေ့အသုံးချနိုင်အောင် နားလည်စေရန် ဖြစ်ပါတယ်။",

      content:
        "<h3>ဒီ Lesson မှာ ဘာတွေသင်ယူမလဲ?</h3>" +

        "<p>" +
        course.burmeseTitle +
        " ကို လုပ်ငန်းခွင်မှာ အမှန်တကယ်အသုံးချနိုင်ဖို့ " +
        "အခြေခံသဘောတရား၊ လုပ်ငန်းစဉ်၊ KPI နဲ့ Manager Thinking ကို " +
        "လေ့လာရပါမယ်။</p>" +

        "<h3>Manager Thinking</h3>" +

        "<p>" +
        "မန်နေဂျာတစ်ယောက်အနေနဲ့ အလုပ်တစ်ခုကို ပြီးအောင်လုပ်ခြင်းထက် " +
        "စနစ်တကျစီမံခြင်း၊ တိုင်းတာခြင်း၊ ပြန်လည်သုံးသပ်ခြင်းနဲ့ " +
        "တိုးတက်အောင်လုပ်ခြင်းကို အာရုံစိုက်ရပါမယ်။" +
        "</p>" +

        "<h3>လက်တွေ့အသုံးချမှု</h3>" +

        "<ul>" +
        "<li>လက်ရှိလုပ်ငန်းအခြေအနေကို သုံးသပ်ပါ။</li>" +
        "<li>အဓိကပြဿနာကို သတ်မှတ်ပါ။</li>" +
        "<li>KPI တစ်ခု သတ်မှတ်ပြီး တိုင်းတာပါ။</li>" +
        "<li>Action Plan တစ်ခုရေးပါ။</li>" +
        "</ul>",

      action:
        "<p>ဒီ Lesson ကို လေ့လာပြီးနောက် မိမိလုပ်ငန်းထဲမှာ " +
        "လက်တွေ့အသုံးချနိုင်မယ့် Action 3 ခုရေးပါ။</p>",

      quiz:
        "<p><strong>မေးခွန်း:</strong> ဒီ Lesson မှာ သင်ယူခဲ့တဲ့ " +
        "အချက်ထဲက မိမိလုပ်ငန်းအတွက် အရေးအကြီးဆုံးတစ်ချက်က ဘာလဲ?</p>",

      summary:
        "အဓိကအချက်များကို ပြန်လည်သုံးသပ်ပြီး လက်တွေ့အသုံးချပါ။",

      raw: {}
    };
  }

  /* =========================================================
     BUILD COURSE LIST
     ========================================================= */

  function buildCourses() {
    return COURSE_META.map(function (meta) {

      const registered = findRegisteredCourse(meta.id);

      let lessons = extractLessons(registered);

      /*
       * IMPORTANT:
       * If real lesson content exists,
       * ALWAYS use the real lesson content.
       */

      if (lessons.length === 0) {
        lessons = [];

        for (let i = 0; i < meta.lessons; i++) {
          lessons.push(createFallbackLesson(meta, i));
        }
      }

      return {
        ...meta,

        title:
          registered && registered.title
            ? registered.title
            : meta.title,

        burmeseTitle:
          registered && registered.burmeseTitle
            ? registered.burmeseTitle
            : meta.burmeseTitle,

        lessons: lessons
      };
    });
  }

  function getCourses() {
    return buildCourses();
  }

  function getCourse(courseId) {
    return getCourses().find(function (course) {
      return course.id === courseId;
    }) || null;
  }

  /* =========================================================
     PROGRESS
     ========================================================= */

  function getCompletedMap() {
    try {
      const data = localStorage.getItem(APP.storage.completed);

      if (!data) return {};

      const parsed = JSON.parse(data);

      if (!parsed || typeof parsed !== "object") {
        return {};
      }

      return parsed;
    } catch (error) {
      return {};
    }
  }

  function saveCompletedMap(map) {
    localStorage.setItem(
      APP.storage.completed,
      JSON.stringify(map)
    );
  }

  function completionKey(courseId, lessonId) {
    return courseId + "::" + lessonId;
  }

  function isCompleted(courseId, lessonId) {
    const map = getCompletedMap();

    return map[completionKey(courseId, lessonId)] === true;
  }

  function markCompleted(courseId, lessonId) {
    const map = getCompletedMap();

    map[completionKey(courseId, lessonId)] = true;

    saveCompletedMap(map);

    document.dispatchEvent(
      new CustomEvent("aungAcademyProgressUpdated")
    );
  }

  function getCourseProgress(courseId) {
    const course = getCourse(courseId);

    if (!course || !course.lessons.length) {
      return {
        completed: 0,
        total: 0,
        percent: 0
      };
    }

    const completed = course.lessons.filter(function (lesson) {
      return isCompleted(course.id, lesson.id);
    }).length;

    return {
      completed: completed,
      total: course.lessons.length,
      percent: Math.round(
        (completed / course.lessons.length) * 100
      )
    };
  }

  function getOverallProgress() {
    const courses = getCourses();

    let total = 0;
    let completed = 0;

    courses.forEach(function (course) {
      total += course.lessons.length;

      course.lessons.forEach(function (lesson) {
        if (isCompleted(course.id, lesson.id)) {
          completed++;
        }
      });
    });

    return {
      completed: completed,
      total: total,
      percent: total
        ? Math.round((completed / total) * 100)
        : 0
    };
  }

  /* =========================================================
     PREMIUM
     ========================================================= */

  function getPremiumUntil() {
    const value = localStorage.getItem(APP.storage.premium);

    if (!value) return 0;

    const timestamp = Number(value);

    if (!timestamp || timestamp <= Date.now()) {
      return 0;
    }

    return timestamp;
  }

  function isPremium() {
    return getPremiumUntil() > Date.now();
  }

  function activatePremium() {
    const until =
      Date.now() +
      APP.premiumDays * 24 * 60 * 60 * 1000;

    localStorage.setItem(
      APP.storage.premium,
      String(until)
    );

    closePremiumModal();

    refresh();

    if (currentCourseId) {
      openCourse(currentCourseId);
    }
  }

  function premiumDaysRemaining() {
    const until = getPremiumUntil();

    if (!until) return 0;

    return Math.ceil(
      (until - Date.now()) /
      (24 * 60 * 60 * 1000)
    );
  }

  /* =========================================================
     DOM
     ========================================================= */

  function getMain() {
    return (
      document.getElementById("app-main") ||
      document.querySelector("main") ||
      document.querySelector(".main-content") ||
      document.querySelector(".content")
    );
  }

  function setPageTitle(title) {
    const el = document.getElementById("pageTitle");

    if (el) {
      el.textContent = title;
    }
  }

  function closeSidebar() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebarOverlay");

    if (sidebar) {
      sidebar.classList.remove("open");
    }

    if (overlay) {
      overlay.classList.remove("show");
    }
  }

  function openSidebar() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebarOverlay");

    if (sidebar) {
      sidebar.classList.add("open");
    }

    if (overlay) {
      overlay.classList.add("show");
    }
  }

  /* =========================================================
     DASHBOARD
     ========================================================= */

  function renderDashboard() {
    currentView = "dashboard";

    setPageTitle("Dashboard");

    const main = getMain();

    if (!main) return;

    const courses = getCourses();
    const overall = getOverallProgress();

    const firstCourse =
      courses.find(function (course) {
        return getCourseProgress(course.id).completed <
          course.lessons.length;
      }) || courses[0];

    const firstProgress =
      firstCourse
        ? getCourseProgress(firstCourse.id)
        : { completed: 0, total: 0, percent: 0 };

    main.innerHTML = `
      <section class="academy-page">

        <div class="academy-welcome">
          <div>
            <div class="academy-eyebrow">
              AUNG BUSINESS ACADEMY
            </div>

            <h1>
              Welcome to Aung Business Academy
            </h1>

            <p>
              Business Manager တစ်ယောက်အဖြစ်
              လုပ်ငန်းခွင်မှာ တကယ်အသုံးချနိုင်မယ့်
              Business Knowledge တွေကို လေ့လာပါ။
            </p>
          </div>

          <div class="academy-version">
            ${APP.version}
          </div>
        </div>

        <div class="academy-stat-grid">

          <div class="academy-stat-card">
            <div class="stat-icon">📚</div>
            <div class="stat-value">${courses.length}</div>
            <div class="stat-label">Total Courses</div>
          </div>

          <div class="academy-stat-card">
            <div class="stat-icon">📖</div>
            <div class="stat-value">${courses.reduce(
              (sum, c) => sum + c.lessons.length,
              0
            )}+</div>
            <div class="stat-label">Total Lessons</div>
          </div>

          <div class="academy-stat-card">
            <div class="stat-icon">✅</div>
            <div class="stat-value">${overall.completed}</div>
            <div class="stat-label">Completed</div>
          </div>

          <div class="academy-stat-card">
            <div class="stat-icon">📈</div>
            <div class="stat-value">${overall.percent}%</div>
            <div class="stat-label">Progress</div>
          </div>

        </div>

        ${
          firstCourse
            ? `
              <div class="academy-section-card">

                <div class="section-header">
                  <div>
                    <span class="section-label">
                      CONTINUE LEARNING
                    </span>

                    <h2>
                      ${esc(firstCourse.icon)}
                      ${esc(firstCourse.burmeseTitle)}
                    </h2>

                    <p>
                      ${firstProgress.completed}
                      / ${firstProgress.total}
                      Lessons Completed
                    </p>
                  </div>

                  <button
                    class="academy-primary-btn"
                    data-action="continue-course"
                    data-course="${esc(firstCourse.id)}"
                  >
                    ဆက်လေ့လာမည် →
                  </button>
                </div>

                <div class="academy-progress">
                  <div
                    class="progress-bar"
                    style="width:${firstProgress.percent}%"
                  ></div>
                </div>

                <div class="progress-text">
                  ${firstProgress.percent}% Complete
                </div>

              </div>
            `
            : ""
        }

        <div class="academy-section-card">

          <div class="section-header">
            <div>
              <span class="section-label">
                LEARNING PROGRAMS
              </span>

              <h2>📚 Course Library</h2>
            </div>

            <button
              class="academy-secondary-btn"
              data-action="courses"
            >
              View All
            </button>
          </div>

          <div class="academy-course-grid">
            ${courses.slice(0, 6).map(renderCourseCard).join("")}
          </div>

        </div>

      </section>
    `;

    bindPageActions();
  }

  /* =========================================================
     COURSE CARD
     ========================================================= */

  function renderCourseCard(course) {
    const progress = getCourseProgress(course.id);

    return `
      <div class="academy-course-card">

        <div class="course-icon">
          ${esc(course.icon)}
        </div>

        <div class="course-category">
          ${esc(course.category)}
        </div>

        <h3>
          ${esc(course.burmeseTitle)}
        </h3>

        <div class="course-en-title">
          ${esc(course.title)}
        </div>

        <p>
          ${esc(course.description)}
        </p>

        <div class="course-meta">
          <span>
            📖 ${course.lessons.length} Lessons
          </span>

          <span>
            ${progress.percent}%
          </span>
        </div>

        <div class="academy-progress small">
          <div
            class="progress-bar"
            style="width:${progress.percent}%"
          ></div>
        </div>

        <button
          class="academy-primary-btn full"
          data-action="open-course"
          data-course="${esc(course.id)}"
        >
          ${progress.completed > 0
            ? "Continue Course →"
            : "View Course →"}
        </button>

      </div>
    `;
  }

  /* =========================================================
     COURSE LIBRARY
     ========================================================= */

  function renderCourses() {
    currentView = "courses";

    setPageTitle("My Courses");

    const main = getMain();

    if (!main) return;

    const courses = getCourses();

    main.innerHTML = `
      <section class="academy-page">

        <div class="academy-page-heading">
          <span class="academy-eyebrow">
            LEARNING CENTER
          </span>

          <h1>📚 My Courses</h1>

          <p>
            Business Manager အတွက် အရေးကြီးသော
            Business, Sales, Marketing, Finance, HR
            နှင့် Management သင်ခန်းစာများ။
          </p>
        </div>

        <div class="academy-course-grid large">

          ${courses.map(renderCourseCard).join("")}

        </div>

      </section>
    `;

    bindPageActions();
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

    currentCourseId = courseId;
    currentView = "course-detail";

    setPageTitle(course.burmeseTitle);

    const main = getMain();

    if (!main) return;

    const progress = getCourseProgress(course.id);

    main.innerHTML = `
      <section class="academy-page">

        <button
          class="academy-back-btn"
          data-action="courses"
        >
          ← Course Library
        </button>

        <div class="academy-course-hero">

          <div class="hero-course-icon">
            ${esc(course.icon)}
          </div>

          <div class="hero-course-info">

            <div class="course-category">
              ${esc(course.category)}
            </div>

            <h1>
              ${esc(course.burmeseTitle)}
            </h1>

            <h3>
              ${esc(course.title)}
            </h3>

            <p>
              ${esc(course.description)}
            </p>

            <div class="hero-progress-info">
              <strong>
                ${progress.completed}
                / ${progress.total}
              </strong>
              Lessons Completed

              <span>
                ${progress.percent}%
              </span>
            </div>

            <div class="academy-progress">
              <div
                class="progress-bar"
                style="width:${progress.percent}%"
              ></div>
            </div>

          </div>

        </div>

        <div class="academy-section-card">

          <div class="section-header">

            <div>
              <span class="section-label">
                COURSE LESSONS
              </span>

              <h2>
                📖 သင်ခန်းစာများ
              </h2>
            </div>

            ${
              isPremium()
                ? `
                  <div class="premium-active">
                    💎 Premium Active
                  </div>
                `
                : `
                  <button
                    class="premium-small-btn"
                    data-action="premium"
                  >
                    💎 Premium
                  </button>
                `
            }

          </div>

          <div class="lesson-list">

            ${course.lessons.map(function (lesson, index) {

              const completed =
                isCompleted(course.id, lesson.id);

              const locked =
                !isPremium() && index > 0;

              return `
                <div
                  class="
                    lesson-list-item
                    ${completed ? "completed" : ""}
                    ${locked ? "locked" : ""}
                  "
                >

                  <div class="lesson-number">
                    ${
                      completed
                        ? "✓"
                        : String(index + 1).padStart(2, "0")
                    }
                  </div>

                  <div class="lesson-info">

                    <div class="lesson-label">
                      Lesson ${index + 1}
                      ${
                        index === 0
                          ? '<span class="free-badge">FREE</span>'
                          : locked
                            ? '<span class="premium-badge">PREMIUM</span>'
                            : ""
                      }
                    </div>

                    <h3>
                      ${esc(
                        lesson.burmeseTitle ||
                        lesson.title
                      )}
                    </h3>

                    ${
                      lesson.title !== lesson.burmeseTitle
                        ? `
                          <p>
                            ${esc(lesson.title)}
                          </p>
                        `
                        : ""
                    }

                  </div>

                  <button
                    class="lesson-open-btn"
                    data-action="lesson"
                    data-course="${esc(course.id)}"
                    data-index="${index}"
                  >
                    ${
                      locked
                        ? "🔒"
                        : completed
                          ? "Review →"
                          : "Start →"
                    }
                  </button>

                </div>
              `;
            }).join("")}

          </div>

        </div>

      </section>
    `;

    bindPageActions();
  }

  /* =========================================================
     LESSON MODAL
     ========================================================= */

  function ensureLessonModal() {
    let modal = document.getElementById("academyLessonModal");

    if (modal) return modal;

    modal = document.createElement("div");

    modal.id = "academyLessonModal";

    modal.innerHTML = `
      <div class="lesson-modal-overlay"></div>

      <div class="lesson-modal">

        <div class="lesson-modal-header">

          <div>
            <div id="lessonModalCategory"></div>
            <h2 id="lessonModalTitle"></h2>
          </div>

          <button
            id="lessonModalClose"
            class="modal-close-btn"
          >
            ×
          </button>

        </div>

        <div class="lesson-modal-progress">

          <div>
            <span id="lessonModalNumber"></span>
            <span id="lessonModalPercent"></span>
          </div>

          <div class="academy-progress">
            <div
              id="lessonModalProgressBar"
              class="progress-bar"
            ></div>
          </div>

        </div>

        <div
          id="lessonModalBody"
          class="lesson-modal-body"
        ></div>

        <div class="lesson-modal-footer">

          <button
            id="lessonPreviousBtn"
            class="lesson-nav-btn"
          >
            ⬅ Previous
          </button>

          <button
            id="lessonCompleteBtn"
            class="lesson-complete-btn"
          >
            ✅ Mark as Completed
          </button>

          <button
            id="lessonNextBtn"
            class="lesson-nav-btn"
          >
            Next ➡
          </button>

        </div>

      </div>
    `;

    document.body.appendChild(modal);

    modal
      .querySelector(".lesson-modal-overlay")
      .addEventListener("click", closeLesson);

    document
      .getElementById("lessonModalClose")
      .addEventListener("click", closeLesson);

    document
      .getElementById("lessonPreviousBtn")
      .addEventListener("click", previousLesson);

    document
      .getElementById("lessonNextBtn")
      .addEventListener("click", nextLesson);

    document
      .getElementById("lessonCompleteBtn")
      .addEventListener("click", function () {
        completeCurrentLesson();
      });

    return modal;
  }

  function buildLessonHTML(course, lesson, index) {
    let html = "";

    if (lesson.objective) {
      html += `
        <section class="lesson-section objective-section">

          <div class="lesson-section-title">
            🎯 Learning Objective
          </div>

          <div class="lesson-section-content">
            ${normalizeText(lesson.objective)}
          </div>

        </section>
      `;
    }

    if (lesson.content) {
      html += `
        <section class="lesson-section">

          <div class="lesson-section-title">
            📖 Lesson Content
          </div>

          <div class="lesson-section-content">
            ${normalizeText(lesson.content)}
          </div>

        </section>
      `;
    }

    if (lesson.action) {
      html += `
        <section class="lesson-section action-section">

          <div class="lesson-section-title">
            🛠 Practical Action
          </div>

          <div class="lesson-section-content">
            ${normalizeText(lesson.action)}
          </div>

        </section>
      `;
    }

    if (lesson.quiz) {
      html += `
        <section class="lesson-section quiz-section">

          <div class="lesson-section-title">
            📝 Check Your Understanding
          </div>

          <div class="lesson-section-content">
            ${normalizeText(lesson.quiz)}
          </div>

        </section>
      `;
    }

    if (lesson.summary) {
      html += `
        <section class="lesson-section summary-section">

          <div class="lesson-section-title">
            💡 Summary
          </div>

          <div class="lesson-section-content">
            ${normalizeText(lesson.summary)}
          </div>

        </section>
      `;
    }

    if (!html) {
      html = `
        <section class="lesson-section">

          <div class="lesson-section-title">
            📖 Lesson ${index + 1}
          </div>

          <div class="lesson-section-content">

            <p>
              ဒီသင်ခန်းစာအတွက် Content မတွေ့ရှိသေးပါ။
            </p>

          </div>

        </section>
      `;
    }

    return html;
  }

  function openLesson(courseId, index) {
    const course = getCourse(courseId);

    if (!course) return;

    const lessonIndex = Number(index);

    if (
      Number.isNaN(lessonIndex) ||
      lessonIndex < 0 ||
      lessonIndex >= course.lessons.length
    ) {
      return;
    }

    /*
     * Lesson 1 = FREE
     * Lesson 2+ = PREMIUM
     */

    if (
      lessonIndex > 0 &&
      !isPremium()
    ) {
      openPremiumModal();
      return;
    }

    currentCourseId = courseId;
    currentLessonIndex = lessonIndex;

    const lesson =
      course.lessons[currentLessonIndex];

    const modal = ensureLessonModal();

    const progress =
      getCourseProgress(course.id);

    const completed =
      isCompleted(
        course.id,
        lesson.id
      );

    document.getElementById(
      "lessonModalCategory"
    ).textContent =
      course.icon + " " + course.category;

    document.getElementById(
      "lessonModalTitle"
    ).textContent =
      lesson.burmeseTitle ||
      lesson.title;

    document.getElementById(
      "lessonModalNumber"
    ).textContent =
      "Lesson " +
      (currentLessonIndex + 1) +
      " / " +
      course.lessons.length;

    document.getElementById(
      "lessonModalPercent"
    ).textContent =
      progress.percent + "% Course Progress";

    document.getElementById(
      "lessonModalProgressBar"
    ).style.width =
      progress.percent + "%";

    document.getElementById(
      "lessonModalBody"
    ).innerHTML =
      buildLessonHTML(
        course,
        lesson,
        currentLessonIndex
      );

    const previous =
      document.getElementById(
        "lessonPreviousBtn"
      );

    const next =
      document.getElementById(
        "lessonNextBtn"
      );

    const complete =
      document.getElementById(
        "lessonCompleteBtn"
      );

    previous.disabled =
      currentLessonIndex === 0;

    next.disabled =
      currentLessonIndex ===
      course.lessons.length - 1;

    complete.textContent =
      completed
        ? "✓ Completed"
        : "✅ Mark as Completed";

    complete.classList.toggle(
      "completed",
      completed
    );

    modal.classList.add("show");

    document.body.classList.add(
      "lesson-modal-open"
    );
  }

  function closeLesson() {
    const modal =
      document.getElementById(
        "academyLessonModal"
      );

    if (modal) {
      modal.classList.remove("show");
    }

    document.body.classList.remove(
      "lesson-modal-open"
    );
  }

  function previousLesson() {
    if (!currentCourseId) return;

    if (currentLessonIndex <= 0) return;

    openLesson(
      currentCourseId,
      currentLessonIndex - 1
    );
  }

  function nextLesson() {
    if (!currentCourseId) return;

    const course =
      getCourse(currentCourseId);

    if (!course) return;

    if (
      currentLessonIndex >=
      course.lessons.length - 1
    ) {
      return;
    }

    openLesson(
      currentCourseId,
      currentLessonIndex + 1
    );
  }

  function completeCurrentLesson() {
    if (!currentCourseId) return;

    const course =
      getCourse(currentCourseId);

    if (!course) return;

    const lesson =
      course.lessons[currentLessonIndex];

    if (!lesson) return;

    markCompleted(
      course.id,
      lesson.id
    );

    openLesson(
      course.id,
      currentLessonIndex
    );
  }

  /* =========================================================
     PROGRESS PAGE
     ========================================================= */

  function renderProgress() {
    currentView = "progress";

    setPageTitle("My Progress");

    const main = getMain();

    if (!main) return;

    const courses = getCourses();
    const overall = getOverallProgress();

    main.innerHTML = `
      <section class="academy-page">

        <div class="academy-page-heading">

          <span class="academy-eyebrow">
            YOUR LEARNING
          </span>

          <h1>📈 My Progress</h1>

          <p>
            သင်ယူပြီးသော သင်ခန်းစာများနှင့်
            Course Progress ကို ကြည့်ရှုနိုင်ပါတယ်။
          </p>

        </div>

        <div class="academy-stat-grid">

          <div class="academy-stat-card">
            <div class="stat-icon">📚</div>
            <div class="stat-value">
              ${courses.length}
            </div>
            <div class="stat-label">
              Courses
            </div>
          </div>

          <div class="academy-stat-card">
            <div class="stat-icon">📖</div>
            <div class="stat-value">
              ${overall.total}
            </div>
            <div class="stat-label">
              Lessons
            </div>
          </div>

          <div class="academy-stat-card">
            <div class="stat-icon">✅</div>
            <div class="stat-value">
              ${overall.completed}
            </div>
            <div class="stat-label">
              Completed
            </div>
          </div>

          <div class="academy-stat-card">
            <div class="stat-icon">🏆</div>
            <div class="stat-value">
              ${overall.percent}%
            </div>
            <div class="stat-label">
              Overall
            </div>
          </div>

        </div>

        <div class="academy-section-card">

          <div class="section-header">
            <div>
              <span class="section-label">
                COURSE PROGRESS
              </span>

              <h2>
                📚 Learning Progress
              </h2>
            </div>
          </div>

          <div class="progress-course-list">

            ${courses.map(function (course) {

              const progress =
                getCourseProgress(course.id);

              return `
                <div class="progress-course-row">

                  <div class="progress-course-icon">
                    ${esc(course.icon)}
                  </div>

                  <div class="progress-course-info">

                    <h3>
                      ${esc(course.burmeseTitle)}
                    </h3>

                    <p>
                      ${progress.completed}
                      / ${progress.total}
                      Lessons
                    </p>

                    <div class="academy-progress">
                      <div
                        class="progress-bar"
                        style="width:${progress.percent}%"
                      ></div>
                    </div>

                  </div>

                  <div class="progress-course-percent">
                    ${progress.percent}%
                  </div>

                  <button
                    class="academy-secondary-btn"
                    data-action="open-course"
                    data-course="${esc(course.id)}"
                  >
                    View
                  </button>

                </div>
              `;

            }).join("")}

          </div>

        </div>

      </section>
    `;

    bindPageActions();
  }

  /* =========================================================
     LESSONS PAGE
     ========================================================= */

  function renderLessons() {
    currentView = "lessons";

    setPageTitle("Lessons");

    const main = getMain();

    if (!main) return;

    const courses = getCourses();

    main.innerHTML = `
      <section class="academy-page">

        <div class="academy-page-heading">

          <span class="academy-eyebrow">
            LESSON CENTER
          </span>

          <h1>📖 Lessons</h1>

          <p>
            Course တစ်ခုရွေးပြီး သင်ခန်းစာများကို
            တစ်ဆင့်ချင်း လေ့လာနိုင်ပါတယ်။
          </p>

        </div>

        <div class="academy-course-grid">

          ${courses.map(renderCourseCard).join("")}

        </div>

      </section>
    `;

    bindPageActions();
  }

  /* =========================================================
     SIMPLE MANAGER PAGES
     ========================================================= */

  function renderSimplePage(title, icon, description, content) {
    const main = getMain();

    if (!main) return;

    main.innerHTML = `
      <section class="academy-page">

        <div class="academy-page-heading">

          <span class="academy-eyebrow">
            MANAGER TOOLS
          </span>

          <h1>
            ${icon} ${esc(title)}
          </h1>

          <p>
            ${esc(description)}
          </p>

        </div>

        <div class="academy-section-card">

          ${content}

        </div>

      </section>
    `;
  }

  function renderSalesManager() {
    currentView = "sales-manager";
    setPageTitle("Sales Manager");

    renderSimplePage(
      "Sales Manager",
      "🎯",
      "Sales Target, KPI, Team Management နှင့် Field Execution ကို စီမံခန့်ခွဲရန်။",
      `
        <div class="tool-grid">

          <div class="tool-card">
            <div>🎯</div>
            <h3>Sales Target</h3>
            <p>
              Monthly / Weekly Sales Target ကို
              Team နဲ့ Area အလိုက် ခွဲဝေပါ။
            </p>
          </div>

          <div class="tool-card">
            <div>📊</div>
            <h3>Sales KPI</h3>
            <p>
              Achievement, Growth, Coverage,
              Productivity နဲ့ Conversion ကိုတိုင်းတာပါ။
            </p>
          </div>

          <div class="tool-card">
            <div>👥</div>
            <h3>Team Management</h3>
            <p>
              Coaching, Review, Feedback နဲ့
              Accountability ကို စနစ်တကျလုပ်ပါ။
            </p>
          </div>

          <div class="tool-card">
            <div>🚀</div>
            <h3>Action Plan</h3>
            <p>
              Sales Gap ကိုရှာပြီး
              Recovery Action Plan တည်ဆောက်ပါ။
            </p>
          </div>

        </div>
      `
    );
  }

  function renderPricing() {
    currentView = "pricing";
    setPageTitle("Pricing & KPI");

    renderSimplePage(
      "Pricing & KPI",
      "💰",
      "Price, Margin, Profit နှင့် KPI ကို လက်တွေ့တွက်ချက်ရန်။",
      `
        <div class="calculator-card">

          <h2>Gross Margin Calculator</h2>

          <label>Selling Price</label>
          <input
            id="calcSellingPrice"
            type="number"
            placeholder="100000"
          >

          <label>Cost</label>
          <input
            id="calcCost"
            type="number"
            placeholder="70000"
          >

          <button
            class="academy-primary-btn"
            data-action="calculate-margin"
          >
            Calculate
          </button>

          <div
            id="marginResult"
            class="calculator-result"
          >
            Result will appear here.
          </div>

        </div>
      `
    );

    bindPageActions();
  }

  function calculateMargin() {
    const selling =
      Number(
        document.getElementById(
          "calcSellingPrice"
        )?.value || 0
      );

    const cost =
      Number(
        document.getElementById(
          "calcCost"
        )?.value || 0
      );

    const result =
      document.getElementById(
        "marginResult"
      );

    if (!result) return;

    if (selling <= 0) {
      result.textContent =
        "Selling Price ထည့်ပါ။";
      return;
    }

    const grossProfit =
      selling - cost;

    const margin =
      (grossProfit / selling) * 100;

    result.innerHTML = `
      <strong>
        Gross Profit:
      </strong>
      ${grossProfit.toLocaleString()}

      <br><br>

      <strong>
        Gross Margin:
      </strong>
      ${margin.toFixed(2)}%
    `;
  }

  function renderReports() {
    currentView = "reports";
    setPageTitle("Reports");

    const overall =
      getOverallProgress();

    renderSimplePage(
      "Reports",
      "📑",
      "Business Academy Learning Report နှင့် Performance Summary။",
      `
        <div class="report-box">

          <h2>Learning Report</h2>

          <div class="report-line">
            <span>Total Courses</span>
            <strong>${getCourses().length}</strong>
          </div>

          <div class="report-line">
            <span>Total Lessons</span>
            <strong>${overall.total}</strong>
          </div>

          <div class="report-line">
            <span>Completed</span>
            <strong>${overall.completed}</strong>
          </div>

          <div class="report-line">
            <span>Overall Progress</span>
            <strong>${overall.percent}%</strong>
          </div>

        </div>
      `
    );
  }

  function renderManagerTools() {
    currentView = "manager-tools";
    setPageTitle("Manager Tools");

    renderSimplePage(
      "Manager Tools",
      "🧰",
      "Business Manager တစ်ယောက်အတွက် လက်တွေ့အသုံးဝင်သော Tools များ။",
      `
        <div class="tool-grid">

          <div class="tool-card">
            <div>📊</div>
            <h3>KPI Planning</h3>
            <p>Target → KPI → Action → Review</p>
          </div>

          <div class="tool-card">
            <div>💰</div>
            <h3>Profit Planning</h3>
            <p>Revenue → Cost → Margin → Profit</p>
          </div>

          <div class="tool-card">
            <div>👥</div>
            <h3>People Review</h3>
            <p>Performance → Coaching → Development</p>
          </div>

          <div class="tool-card">
            <div>🧠</div>
            <h3>Problem Solving</h3>
            <p>Problem → Root Cause → Solution → Action</p>
          </div>

        </div>
      `
    );
  }

  function renderCV() {
    currentView = "cv";
    setPageTitle("Professional CV");

    renderSimplePage(
      "Professional CV",
      "📄",
      "Professional Manager CV တည်ဆောက်ရန် အခြေခံ Framework။",
      `
        <div class="cv-framework">

          <h2>Professional CV Structure</h2>

          <ol>
            <li>Professional Summary</li>
            <li>Core Competencies</li>
            <li>Leadership Experience</li>
            <li>Business Achievements</li>
            <li>Sales / Revenue Results</li>
            <li>Team Management</li>
            <li>Education & Certifications</li>
          </ol>

        </div>
      `
    );
  }

  function renderInterview() {
    currentView = "interview";
    setPageTitle("Interview Coach");

    renderSimplePage(
      "Interview Coach",
      "🎤",
      "Manager Level Interview အတွက် ပြင်ဆင်ရန်။",
      `
        <div class="interview-list">

          <div class="interview-question">
            <strong>01. Tell me about yourself.</strong>
            <p>
              Career Summary → Key Experience →
              Achievement → Current Goal
            </p>
          </div>

          <div class="interview-question">
            <strong>02. How do you manage a sales team?</strong>
            <p>
              Clear Target → Field Coaching →
              KPI Review → Feedback → Accountability
            </p>
          </div>

          <div class="interview-question">
            <strong>03. How do you recover a sales gap?</strong>
            <p>
              Identify Gap → Root Cause →
              Customer / Territory Analysis →
              Action Plan → Daily Review
            </p>
          </div>

        </div>
      `
    );
  }

  function renderAITools() {
    currentView = "ai-tools";
    setPageTitle("AI Tools");

    renderSimplePage(
      "AI Tools",
      "🤖",
      "Business Manager အတွက် AI-assisted thinking tools။",
      `
        <div class="tool-grid">

          <div class="tool-card">
            <div>🎯</div>
            <h3>Sales Analysis</h3>
            <p>Sales Gap နဲ့ Action Plan စဉ်းစားရန်။</p>
          </div>

          <div class="tool-card">
            <div>📣</div>
            <h3>Marketing Ideas</h3>
            <p>Customer, Campaign နှင့် KPI စဉ်းစားရန်။</p>
          </div>

          <div class="tool-card">
            <div>💰</div>
            <h3>Finance Thinking</h3>
            <p>Revenue, Margin, Cost နဲ့ Cash Flow စစ်ရန်။</p>
          </div>

          <div class="tool-card">
            <div>👥</div>
            <h3>People Management</h3>
            <p>Coaching, Performance နဲ့ Team Issue များ။</p>
          </div>

        </div>
      `
    );
  }

  function renderAICoach() {
    currentView = "ai-coach";
    setPageTitle("AI Business Coach");

    if (
      window.AungAIBusinessCoach &&
      typeof window.AungAIBusinessCoach.show === "function"
    ) {
      window.AungAIBusinessCoach.show();
      return;
    }

    renderSimplePage(
      "AI Business Coach",
      "🤖",
      "Business Problem ကို Manager Thinking နဲ့ ခွဲခြမ်းစိတ်ဖြာရန်။",
      `
        <div class="ai-coach-fallback">

          <h2>Business Health Check</h2>

          <p>
            Sales, Marketing, Finance, People,
            Customer နှင့် Strategy ကို စစ်ဆေးပါ။
          </p>

          <div class="coach-framework">
            <div>1. Problem ကိုသတ်မှတ်ပါ</div>
            <div>2. Root Cause ရှာပါ</div>
            <div>3. Data စစ်ပါ</div>
            <div>4. Options ချပါ</div>
            <div>5. Best Action ရွေးပါ</div>
            <div>6. KPI နဲ့ Review လုပ်ပါ</div>
          </div>

        </div>
      `
    );
  }

  /* =========================================================
     SETTINGS
     ========================================================= */

  function renderSettings() {
    currentView = "settings";
    setPageTitle("Settings");

    renderSimplePage(
      "Settings",
      "⚙️",
      "Aung Business Academy Settings။",
      `
        <div class="settings-list">

          <div class="settings-row">
            <div>
              <strong>Premium Status</strong>
              <p>
                ${
                  isPremium()
                    ? "💎 Premium Active — " +
                      premiumDaysRemaining() +
                      " days remaining"
                    : "Free Plan"
                }
              </p>
            </div>

            ${
              isPremium()
                ? ""
                : `
                  <button
                    class="academy-primary-btn"
                    data-action="premium"
                  >
                    Activate Premium
                  </button>
                `
            }

          </div>

          <div class="settings-row">

            <div>
              <strong>Learning Progress</strong>

              <p>
                Progress ကို Reset လုပ်နိုင်ပါတယ်။
              </p>
            </div>

            <button
              class="danger-btn"
              data-action="reset-progress"
            >
              Reset Progress
            </button>

          </div>

          <div class="settings-row">

            <div>
              <strong>Application</strong>

              <p>
                ${APP.name}
                • ${APP.version}
              </p>
            </div>

          </div>

        </div>
      `
    );

    bindPageActions();
  }

  function resetProgress() {
    const ok =
      confirm(
        "Learning Progress အားလုံးကို Reset လုပ်မလား?"
      );

    if (!ok) return;

    localStorage.removeItem(
      APP.storage.completed
    );

    refresh();
  }

  /* =========================================================
     PREMIUM MODAL
     ========================================================= */

  function openPremiumModal() {
    let modal =
      document.getElementById(
        "academyPremiumModal"
      );

    if (!modal) {
      modal =
        document.createElement("div");

      modal.id =
        "academyPremiumModal";

      modal.innerHTML = `
        <div class="premium-overlay"></div>

        <div class="premium-modal">

          <button
            class="premium-close"
            id="premiumCloseInternal"
          >
            ×
          </button>

          <div class="premium-icon">
            💎
          </div>

          <h2>
            Aung Business Academy Premium
          </h2>

          <p>
            Lesson 1 ကို Free လေ့လာနိုင်ပြီး
            Lesson 2 နှင့်အထက်များကို
            Premium Membership ဖြင့်
            ဆက်လက်လေ့လာနိုင်ပါတယ်။
          </p>

          <div class="premium-plan">

            <strong>
              💎 6 Months Premium
            </strong>

            <span>
              180 Days
            </span>

          </div>

          <ul class="premium-features">

            <li>✓ All Course Lessons</li>
            <li>✓ Full Business Curriculum</li>
            <li>✓ Sales Management</li>
            <li>✓ Marketing Management</li>
            <li>✓ Finance & HR</li>
            <li>✓ Manager Tools</li>

          </ul>

          <button
            id="activatePremiumInternal"
            class="academy-primary-btn full"
          >
            💎 Activate 6 Months Premium
          </button>

          <p class="demo-note">
            Demo activation — Payment Gateway
            မချိတ်ဆက်ရသေးသော version ဖြစ်ပါတယ်။
          </p>

        </div>
      `;

      document.body.appendChild(modal);

      modal
        .querySelector(".premium-overlay")
        .addEventListener(
          "click",
          closePremiumModal
        );

      document
        .getElementById(
          "premiumCloseInternal"
        )
        .addEventListener(
          "click",
          closePremiumModal
        );

      document
        .getElementById(
          "activatePremiumInternal"
        )
        .addEventListener(
          "click",
          activatePremium
        );
    }

    modal.classList.add("show");
  }

  function closePremiumModal() {
    const modal =
      document.getElementById(
        "academyPremiumModal"
      );

    if (modal) {
      modal.classList.remove("show");
    }
  }

  /* =========================================================
     PAGE ACTIONS
     ========================================================= */

  function bindPageActions() {

    document
      .querySelectorAll("[data-action]")
      .forEach(function (element) {

        if (element.dataset.bound === "1") {
          return;
        }

        element.dataset.bound = "1";

        element.addEventListener(
          "click",
          function () {

            const action =
              element.dataset.action;

            const courseId =
              element.dataset.course;

            const index =
              element.dataset.index;

            switch (action) {

              case "courses":
                closeSidebar();
                renderCourses();
                break;

              case "lessons":
                closeSidebar();
                renderLessons();
                break;

              case "progress":
                closeSidebar();
                renderProgress();
                break;

              case "open-course":
                closeSidebar();
                openCourse(courseId);
                break;

              case "continue-course":
                closeSidebar();

                const continueCourse =
                  getCourse(courseId);

                if (continueCourse) {

                  const firstUncompleted =
                    continueCourse.lessons.findIndex(
                      function (lesson) {
                        return !isCompleted(
                          continueCourse.id,
                          lesson.id
                        );
                      }
                    );

                  openLesson(
                    continueCourse.id,
                    firstUncompleted >= 0
                      ? firstUncompleted
                      : 0
                  );
                }

                break;

              case "lesson":
                openLesson(
                  courseId,
                  Number(index)
                );
                break;

              case "premium":
                openPremiumModal();
                break;

              case "calculate-margin":
                calculateMargin();
                break;

              case "reset-progress":
                resetProgress();
                break;

            }
          }
        );
      });
  }

  /* =========================================================
     NAVIGATION
     ========================================================= */

  function navigate(view) {

    closeSidebar();

    switch (view) {

      case "dashboard":
        renderDashboard();
        break;

      case "courses":
        renderCourses();
        break;

      case "lessons":
        renderLessons();
        break;

      case "progress":
        renderProgress();
        break;

      case "sales-manager":
        renderSalesManager();
        break;

      case "pricing":
        renderPricing();
        break;

      case "reports":
        renderReports();
        break;

      case "manager-tools":
        renderManagerTools();
        break;

      case "cv":
        renderCV();
        break;

      case "interview":
        renderInterview();
        break;

      case "ai-coach":
        renderAICoach();
        break;

      case "ai-tools":
        renderAITools();
        break;

      case "settings":
        renderSettings();
        break;

      default:
        renderDashboard();
    }
  }

  /* =========================================================
     SIDEBAR BINDING
     ========================================================= */

  function bindNavigation() {

    document
      .querySelectorAll(
        ".nav-item[data-view], [data-view]"
      )
      .forEach(function (item) {

        if (item.dataset.navBound === "1") {
          return;
        }

        item.dataset.navBound = "1";

        item.addEventListener(
          "click",
          function (event) {

            event.preventDefault();

            const view =
              item.dataset.view;

            if (view) {
              navigate(view);
            }
          }
        );
      });

    const mobileBtn =
      document.getElementById(
        "mobileMenuBtn"
      );

    if (
      mobileBtn &&
      mobileBtn.dataset.bound !== "1"
    ) {

      mobileBtn.dataset.bound = "1";

      mobileBtn.addEventListener(
        "click",
        openSidebar
      );
    }

    const overlay =
      document.getElementById(
        "sidebarOverlay"
      );

    if (
      overlay &&
      overlay.dataset.bound !== "1"
    ) {

      overlay.dataset.bound = "1";

      overlay.addEventListener(
        "click",
        closeSidebar
      );
    }

    const premiumBtn =
      document.getElementById(
        "premiumBtn"
      );

    if (
      premiumBtn &&
      premiumBtn.dataset.bound !== "1"
    ) {

      premiumBtn.dataset.bound = "1";

      premiumBtn.addEventListener(
        "click",
        openPremiumModal
      );
    }

    const activatePremiumBtn =
      document.getElementById(
        "activatePremiumBtn"
      );

    if (
      activatePremiumBtn &&
      activatePremiumBtn.dataset.bound !== "1"
    ) {

      activatePremiumBtn.dataset.bound = "1";

      activatePremiumBtn.addEventListener(
        "click",
        activatePremium
      );
    }

    const premiumModalClose =
      document.getElementById(
        "premiumModalClose"
      );

    if (
      premiumModalClose &&
      premiumModalClose.dataset.bound !== "1"
    ) {

      premiumModalClose.dataset.bound = "1";

      premiumModalClose.addEventListener(
        "click",
        closePremiumModal
      );
    }
  }

  /* =========================================================
     REFRESH
     ========================================================= */

  function refresh() {

    switch (currentView) {

      case "courses":
        renderCourses();
        break;

      case "lessons":
        renderLessons();
        break;

      case "progress":
        renderProgress();
        break;

      case "course-detail":
        if (currentCourseId) {
          openCourse(currentCourseId);
        } else {
          renderCourses();
        }
        break;

      case "sales-manager":
        renderSalesManager();
        break;

      case "pricing":
        renderPricing();
        break;

      case "reports":
        renderReports();
        break;

      case "manager-tools":
        renderManagerTools();
        break;

      case "cv":
        renderCV();
        break;

      case "interview":
        renderInterview();
        break;

      case "ai-coach":
        renderAICoach();
        break;

      case "ai-tools":
        renderAITools();
        break;

      case "settings":
        renderSettings();
        break;

      default:
        renderDashboard();
    }

    bindNavigation();
  }

  /* =========================================================
     KEYBOARD
     ========================================================= */

  document.addEventListener(
    "keydown",
    function (event) {

      const modal =
        document.getElementById(
          "academyLessonModal"
        );

      if (
        !modal ||
        !modal.classList.contains("show")
      ) {
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
    }
  );

  /* =========================================================
     PROGRESS EVENT
     ========================================================= */

  document.addEventListener(
    "aungAcademyProgressUpdated",
    function () {

      if (
        currentView === "dashboard" ||
        currentView === "courses" ||
        currentView === "lessons" ||
        currentView === "progress" ||
        currentView === "course-detail"
      ) {
        refresh();
      }

    }
  );

  /* =========================================================
     PUBLIC API
     ========================================================= */

  window.AungBusinessAcademyApp = {

    version: APP.version,

    getCourses: getCourses,

    getCourse: getCourse,

    getCourseProgress:
      getCourseProgress,

    getOverallProgress:
      getOverallProgress,

    isCompleted:
      isCompleted,

    markCompleted:
      markCompleted,

    openCourse:
      openCourse,

    openLesson:
      openLesson,

    closeLesson:
      closeLesson,

    nextLesson:
      nextLesson,

    previousLesson:
      previousLesson,

    navigate:
      navigate,

    refresh:
      refresh,

    isPremium:
      isPremium,

    activatePremium:
      activatePremium,

    openPremium:
      openPremiumModal
  };

  /* =========================================================
     START APP
     ========================================================= */

  function startApp() {

    bindNavigation();

    /*
     * Small delay allows the existing
     * course JS files to register their
     * lesson databases first.
     */

    setTimeout(function () {

      renderDashboard();

      bindNavigation();

    }, 100);

  }

  if (
    document.readyState === "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      startApp
    );

  } else {

    startApp();

  }

})();
