// ============================================================
// AUNG BUSINESS ACADEMY
// APP.JS V6
// FULL BUSINESS ACADEMY EDITION
// Dashboard + Lessons + Tools + AI + Business Plan
// KPI + Sales + Finance + Growth + Premium + Profile
// ============================================================

(function () {
  "use strict";

  // ============================================================
  // CONFIG
  // ============================================================

  const API_BASE_URL = "https://aung-business-academy.onrender.com";
  const AI_API_URL = API_BASE_URL + "/api/ai";

  const USER_KEY = "aung_business_academy_user";
  const COMPLETED_KEY = "aung_business_academy_completed";
  const PAYMENT_KEY = "aung_business_academy_payment";
  const PREMIUM_KEY = "aung_business_academy_premium";

  // Add your real payment account details here before publishing.
  const PAYMENT_ACCOUNTS = {
    kpay: "KPay Account Number - ADD YOUR NUMBER",
    cb: "CB Bank Account Number - ADD YOUR ACCOUNT"
  };

  const PAYMENT_PLANS = {
    month1: {
      id: "1-month",
      name: "1 Month",
      price: 25000,
      days: 30
    },

    month3: {
      id: "3-months",
      name: "3 Months",
      price: 60000,
      days: 90
    },

    month6: {
      id: "6-months",
      name: "6 Months",
      price: 100000,
      days: 180
    }
  };

  const NOTES_KEY = "aung_business_academy_notes";
  const PLAN_KEY = "aung_business_academy_plan";
  const KPI_KEY = "aung_business_academy_kpi";
  const SETTINGS_KEY = "aung_business_academy_settings";

  // ============================================================
  // LESSON DATA
  // ============================================================

  const lessons = [
    {
      id: 1,
      title: "Business Fundamentals",
      category: "Business",
      level: "Beginner",
      description: "Understand the basic principles of business.",
      content:
        "Business starts with solving customer problems and creating value."
    },

    {
      id: 2,
      title: "Business Model",
      category: "Business",
      level: "Beginner",
      description: "Learn how a business creates revenue.",
      content:
        "A business model explains customers, value, channels, revenue and costs."
    },

    {
      id: 3,
      title: "Market Research",
      category: "Marketing",
      level: "Beginner",
      description: "Learn how to understand your market.",
      content:
        "Market research helps you understand customers, competitors and demand."
    },

    {
      id: 4,
      title: "Customer Finding",
      category: "Customer Finding",
      level: "Beginner",
      description: "Learn practical customer acquisition.",
      content:
        "Find customers by understanding their needs, problems and buying behavior."
    },

    {
      id: 5,
      title: "Marketing Fundamentals",
      category: "Marketing",
      level: "Beginner",
      description: "Understand the foundation of marketing.",
      content:
        "Marketing connects the right product with the right customer."
    },

    {
      id: 6,
      title: "Digital Marketing",
      category: "Digital Marketing",
      level: "Intermediate",
      description: "Learn digital channels for business growth.",
      content:
        "Digital marketing includes social media, search, content and online advertising."
    },

    {
      id: 7,
      title: "Content Marketing",
      category: "Content Marketing",
      level: "Intermediate",
      description: "Create content that attracts customers.",
      content:
        "Useful content builds trust and attracts potential customers."
    },

    {
      id: 8,
      title: "Sales Fundamentals",
      category: "Sales",
      level: "Beginner",
      description: "Learn the fundamentals of professional selling.",
      content:
        "Sales is the process of understanding customer needs and presenting value."
    },

    {
      id: 9,
      title: "Sales Strategy",
      category: "Sales Strategy",
      level: "Intermediate",
      description: "Build a practical sales strategy.",
      content:
        "A sales strategy defines target customers, channels, activities and targets."
    },

    {
      id: 10,
      title: "Negotiation Skills",
      category: "Negotiation",
      level: "Intermediate",
      description: "Improve your negotiation skills.",
      content:
        "Good negotiation creates value while protecting your business interests."
    },

    {
      id: 11,
      title: "Sales Management",
      category: "Sales Management",
      level: "Advanced",
      description: "Manage sales teams and performance.",
      content:
        "Sales managers focus on targets, people, execution, coaching and performance."
    },

    {
      id: 12,
      title: "Leadership Fundamentals",
      category: "Leadership",
      level: "Beginner",
      description: "Understand effective leadership.",
      content:
        "Leadership means setting direction, developing people and taking responsibility."
    },

    {
      id: 13,
      title: "Strategic Thinking",
      category: "Strategy",
      level: "Advanced",
      description: "Think strategically about business.",
      content:
        "Strategic thinking connects long-term goals with practical actions."
    },

    {
      id: 14,
      title: "Decision Making",
      category: "Leadership",
      level: "Intermediate",
      description: "Make better business decisions.",
      content:
        "Good decisions require facts, alternatives, risks and clear priorities."
    },

    {
      id: 15,
      title: "Team Leadership",
      category: "Leadership",
      level: "Intermediate",
      description: "Build and lead strong teams.",
      content:
        "Strong teams need clear expectations, ownership, coaching and feedback."
    },

    {
      id: 16,
      title: "Brand Fundamentals",
      category: "Branding",
      level: "Beginner",
      description: "Understand the fundamentals of branding.",
      content:
        "A brand represents the experience and value customers associate with a business."
    },

    {
      id: 17,
      title: "Brand Positioning",
      category: "Branding",
      level: "Intermediate",
      description: "Position your business in the market.",
      content:
        "Positioning defines why customers should choose your brand."
    },

    {
      id: 18,
      title: "People Management",
      category: "Management",
      level: "Intermediate",
      description: "Manage people effectively.",
      content:
        "People management includes expectations, communication, coaching and accountability."
    },

    {
      id: 19,
      title: "Recruitment",
      category: "Recruitment",
      level: "Intermediate",
      description: "Learn practical recruitment principles.",
      content:
        "Good recruitment starts with clear roles, requirements and selection criteria."
    },

    {
      id: 20,
      title: "Performance Management",
      category: "Performance Management",
      level: "Advanced",
      description: "Improve team performance.",
      content:
        "Performance management requires targets, reviews, feedback and development."
    },

    {
      id: 21,
      title: "Coaching",
      category: "Coaching",
      level: "Advanced",
      description: "Develop people through coaching.",
      content:
        "Effective coaching helps employees identify gaps and improve their capability."
    },

    {
      id: 22,
      title: "Revenue Management",
      category: "Revenue Management",
      level: "Intermediate",
      description: "Understand business revenue.",
      content:
        "Revenue is the money generated from selling products or services."
    },

    {
      id: 23,
      title: "Profit & Loss",
      category: "Finance",
      level: "Intermediate",
      description: "Understand profit and loss.",
      content:
        "Profit is revenue minus the costs required to operate the business."
    },

    {
      id: 24,
      title: "Cash Flow",
      category: "Finance",
      level: "Intermediate",
      description: "Manage business cash flow.",
      content:
        "Cash flow measures money coming into and leaving a business."
    },

    {
      id: 25,
      title: "Financial Analysis",
      category: "Finance",
      level: "Advanced",
      description: "Analyze business financial performance.",
      content:
        "Financial analysis helps identify profitability, efficiency and financial risks."
    },

    {
      id: 26,
      title: "Time Management",
      category: "Productivity",
      level: "Beginner",
      description: "Improve your use of time.",
      content:
        "Prioritize important activities and protect focused working time."
    },

    {
      id: 27,
      title: "Goal Setting",
      category: "Productivity",
      level: "Beginner",
      description: "Set measurable business goals.",
      content:
        "Effective goals should be clear, measurable and connected to business priorities."
    },

    {
      id: 28,
      title: "Daily Planning",
      category: "Productivity",
      level: "Beginner",
      description: "Plan your day effectively.",
      content:
        "Daily planning converts important goals into specific actions."
    },

    {
      id: 29,
      title: "Business Growth Strategy",
      category: "Strategy",
      level: "Advanced",
      description: "Create a growth strategy.",
      content:
        "Growth can come from more customers, higher frequency, new products or new markets."
    },

    {
      id: 30,
      title: "Business Execution",
      category: "Business",
      level: "Advanced",
      description: "Turn strategy into execution.",
      content:
        "Execution requires clear priorities, ownership, measurement and consistent follow-up."
    }
  ];

  // ============================================================
  // HELPERS
  // ============================================================

  function $(id) {
    return document.getElementById(id);
  }

  function escapeHTML(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function num(id, fallback = 0) {
    const value = Number($(id)?.value);
    return Number.isFinite(value) ? value : fallback;
  }

  function formatNumber(value, decimals = 0) {
    const n = Number(value) || 0;

    return n.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
  }

  function formatKs(value) {
    return formatNumber(value) + " Ks";
  }

  function todayKey() {
    return new Date().toISOString().slice(0, 10);
  }

  function safeJSON(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  }

  function saveJSON(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // ============================================================
  // USER
  // ============================================================

  function getUser() {
    return safeJSON(USER_KEY, null);
  }

  function saveUser(user) {
    saveJSON(USER_KEY, user);
  }

  function getUserName() {
    return getUser()?.name || "Aung";
  }

  function isLoggedIn() {
    return !!getUser();
  }

  function showLoginScreen() {
    showModal(`
      <div class="academy-modal">
        <h2>Welcome to Aung Business Academy</h2>

        <p>
          Enter your name to start your business learning journey.
        </p>

        <input
          id="loginName"
          class="tool-input"
          type="text"
          placeholder="Your name"
        >

        <button
          class="primary-button"
          onclick="handleLogin()"
        >
          Continue →
        </button>
      </div>
    `);

    setTimeout(() => $("loginName")?.focus(), 100);
  }

  function handleLogin() {
    const input = $("loginName");
    const name = input?.value.trim();

    if (!name) {
      showToast("Please enter your name.");
      return;
    }

    saveUser({
      name,
      createdAt: new Date().toISOString(),
      lastActive: new Date().toISOString()
    });

    closeModal();
    updateUserUI();

    showToast("Welcome, " + name + "! 🎉");
  }

  // ============================================================
  // PROGRESS
  // ============================================================

  function getCompletedLessons() {
    return safeJSON(COMPLETED_KEY, []);
  }

  function saveCompletedLessons(list) {
    saveJSON(
      COMPLETED_KEY,
      [...new Set(list.map(Number))]
    );
  }

  function isCompleted(id) {
    return getCompletedLessons().includes(Number(id));
  }

  function getProgress() {
    return Math.round(
      (getCompletedLessons().length / lessons.length) * 100
    );
  }

  function updateUserUI() {
    const name = getUserName();

    document.querySelectorAll(".profile strong").forEach(el => {
      el.textContent = name;
    });

    document.querySelectorAll("[data-user-name]").forEach(el => {
      el.textContent = name;
    });

    updateDashboard();
  }

  // ============================================================
  // DASHBOARD
  // ============================================================

  function updateDashboard() {
    const completed = getCompletedLessons().length;
    const progress = getProgress();

    if ($("lessonCount")) {
      $("lessonCount").textContent = lessons.length;
    }

    if ($("progress")) {
      $("progress").textContent = progress + "%";
    }

    document
      .querySelectorAll("[data-stat='completed']")
      .forEach(el => {
        el.textContent = completed;
      });

    document
      .querySelectorAll("[data-stat='progress']")
      .forEach(el => {
        el.textContent = progress + "%";
      });

    document
      .querySelectorAll("[data-progress-bar]")
      .forEach(el => {
        el.style.width = progress + "%";
      });

    const next = lessons.find(
      x => !isCompleted(x.id)
    );

    document
      .querySelectorAll("[data-next-lesson]")
      .forEach(el => {
        el.textContent = next
          ? next.title
          : "All lessons completed 🎉";
      });
  }

  function goDashboard() {
    closeModal();
    closeSidebarMobile();

    document.querySelectorAll(".nav-item").forEach(item => {
      item.classList.remove("active");
    });

    const dashboard = document.querySelector(
      '.nav-item[onclick="goDashboard()"]'
    );

    if (dashboard) {
      dashboard.classList.add("active");
    }

    setPage(
      "Dashboard",
      "Learn Business. Build Business. Grow Business."
    );

    updateDashboard();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  function toggleSidebar() {
    document
      .querySelector(".sidebar")
      ?.classList.toggle("mobile-open");
  }

  function closeSidebarMobile() {
    document
      .querySelector(".sidebar")
      ?.classList.remove("mobile-open");
  }

  function toggleMenu(menuId) {
    const menu = $(menuId);

    if (!menu) return;

    document
      .querySelectorAll(".submenu")
      .forEach(item => {
        if (item !== menu) {
          item.classList.remove("open");
        }
      });

    menu.classList.toggle("open");
  }

  function setPage(title, subtitle) {
    if ($("pageTitle")) {
      $("pageTitle").textContent = title;
    }

    if ($("pageSubtitle")) {
      $("pageSubtitle").textContent = subtitle;
    }
  }

  // ============================================================
  // MODAL
  // ============================================================

  function showModal(html) {
    const modal = $("appModal");
    const body = $("modalBody");

    if (!modal || !body) return;

    body.innerHTML = html;

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    const modal = $("appModal");

    if (!modal) return;

    modal.style.display = "none";
    document.body.style.overflow = "";
  }

  function closeModalOutside(event) {
    if (event.target?.id === "appModal") {
      closeModal();
    }
  }

  // ============================================================
  // LESSONS
  // ============================================================

  function openLessons() {
    closeSidebarMobile();

    setPage(
      "Business Lessons",
      "Learn practical business skills step by step."
    );

    const categories = [
      "All",
      "Business",
      "Marketing",
      "Customer Finding",
      "Digital Marketing",
      "Content Marketing",
      "Sales",
      "Sales Strategy",
      "Negotiation",
      "Sales Management",
      "Leadership",
      "Strategy",
      "Branding",
      "Management",
      "Recruitment",
      "Performance Management",
      "Coaching",
      "Revenue Management",
      "Finance",
      "Productivity"
    ];

    showModal(`
      <div class="lesson-page">

        <h2>📚 Business Lessons</h2>

        <p>
          30 practical lessons from beginner to advanced.
        </p>

        <div class="academy-stats">

          <div>
            <strong>${getCompletedLessons().length}</strong>
            <span>Completed</span>
          </div>

          <div>
            <strong>${lessons.length}</strong>
            <span>Total Lessons</span>
          </div>

          <div>
            <strong>${getProgress()}%</strong>
            <span>Progress</span>
          </div>

        </div>

        <div class="lesson-filters">

          ${categories
            .map(
              (c, i) => `
                <button
                  class="lesson-filter ${i === 0 ? "active" : ""}"
                  onclick="filterLessons('${escapeHTML(c)}',this)"
                >
                  ${escapeHTML(c)}
                </button>
              `
            )
            .join("")}

        </div>

        <div
          id="lessonList"
          class="quick-grid"
        >
          ${lessons.map(createLessonCard).join("")}
        </div>

      </div>
    `);
  }

  // ============================================================
  // PREMIUM COURSE ACCESS
  // Lesson 1 = FREE
  // Lesson 2+ = PREMIUM
  // ============================================================

  function isPremiumLesson(id) {
    return Number(id) !== 1;
  }

  function getPremiumInfo() {
    const premium = safeJSON(
      PREMIUM_KEY,
      null
    );

    if (
      !premium ||
      !premium.expiresAt
    ) {
      return null;
    }

    if (
      Date.now() >=
      Number(premium.expiresAt)
    ) {
      localStorage.removeItem(
        PREMIUM_KEY
      );

      return null;
    }

    return premium;
  }

  function hasPremiumAccess() {
    try {
      if (window.AungPremium) {

        if (
          typeof window.AungPremium.hasAccess ===
          "function"
        ) {
          return !!window.AungPremium.hasAccess();
        }

        if (
          typeof window.AungPremium.isPremiumActive ===
          "function"
        ) {
          return !!window.AungPremium.isPremiumActive();
        }
      }
    } catch (error) {
      console.warn(
        "Premium access check failed:",
        error
      );
    }

    return !!getPremiumInfo();
  }

  function openPremiumAccess() {
    openPremium();
  }

  function createLessonCard(lesson) {
    const completed =
      isCompleted(lesson.id);

    const premium =
      isPremiumLesson(lesson.id);

    const unlocked =
      !premium || hasPremiumAccess();

    const statusText = completed
      ? "✓ Completed"
      : premium && !unlocked
      ? "🔒 Premium"
      : "Start Lesson";

    return `
      <div
        class="lesson-card
        ${completed ? "completed" : ""}
        ${premium ? "premium-lesson" : "free-lesson"}"
      >

        <div class="lesson-card-top">

          <span class="lesson-number">
            Lesson ${lesson.id}
          </span>

          ${
            premium
              ? `<span class="premium-badge">PREMIUM</span>`
              : `<span class="free-badge">FREE</span>`
          }

        </div>

        <h3>
          ${escapeHTML(lesson.title)}
        </h3>

        <p>
          ${escapeHTML(lesson.description)}
        </p>

        <div class="lesson-meta">
          <span>${escapeHTML(lesson.category)}</span>
          <span>${escapeHTML(lesson.level)}</span>
        </div>

        <button
          class="${
            unlocked
              ? "primary-button"
              : "premium-button"
          }"
          onclick="openLesson(${lesson.id})"
        >
          ${statusText}
        </button>

      </div>
    `;
  }

  // ============================================================
  // LESSON FILTER
  // ============================================================

  function filterLessons(category, button) {
    document
      .querySelectorAll(".lesson-filter")
      .forEach(item => {
        item.classList.remove("active");
      });

    if (button) {
      button.classList.add("active");
    }

    const list = $("lessonList");

    if (!list) return;

    const filtered =
      category === "All"
        ? lessons
        : lessons.filter(
            lesson =>
              lesson.category === category
          );

    list.innerHTML =
      filtered.map(createLessonCard).join("");
  }

  // ============================================================
  // OPEN LESSON
  // ============================================================

  function openLesson(id) {
    const lesson = lessons.find(
      item => Number(item.id) === Number(id)
    );

    if (!lesson) {
      showToast("Lesson not found.");
      return;
    }

    // Lesson 2 onwards require premium.
    if (
      isPremiumLesson(lesson.id) &&
      !hasPremiumAccess()
    ) {
      openPremium();
      return;
    }

    showModal(`
      <div class="lesson-detail">

        <div class="lesson-detail-header">

          <span class="lesson-number">
            Lesson ${lesson.id}
          </span>

          <span class="lesson-level">
            ${escapeHTML(lesson.level)}
          </span>

        </div>

        <h2>
          ${escapeHTML(lesson.title)}
        </h2>

        <div class="lesson-category">
          ${escapeHTML(lesson.category)}
        </div>

        <p class="lesson-description">
          ${escapeHTML(lesson.description)}
        </p>

        <div class="lesson-content-box">

          <h3>📖 Lesson Content</h3>

          <p>
            ${escapeHTML(lesson.content)}
          </p>

        </div>

        <div class="lesson-action">

          ${
            isCompleted(lesson.id)
              ? `
                <div class="completed-message">
                  ✓ You have completed this lesson.
                </div>
              `
              : `
                <button
                  class="primary-button"
                  onclick="completeLesson(${lesson.id})"
                >
                  ✓ Mark as Completed
                </button>
              `
          }

        </div>

      </div>
    `);
  }

  // ============================================================
  // COMPLETE LESSON
  // ============================================================

  function completeLesson(id) {
    const completed =
      getCompletedLessons();

    if (!completed.includes(Number(id))) {
      completed.push(Number(id));

      saveCompletedLessons(
        completed
      );
    }

    updateDashboard();

    showToast(
      "Lesson completed! 🎉"
    );

    setTimeout(() => {
      openLessons();
    }, 500);
  }

  // ============================================================
  // PREMIUM ACCESS
  // ============================================================

  function formatPlanPrice(price) {
    return Number(price).toLocaleString(
      "en-US"
    ) + " Ks";
  }

  function getPaymentRequest() {
    return safeJSON(
      PAYMENT_KEY,
      null
    );
  }

  function openPremium() {
    closeSidebarMobile();

    const premium =
      getPremiumInfo();

    const payment =
      getPaymentRequest();

    setPage(
      "Premium Academy",
      "Unlock Lesson 2–30 and premium business training."
    );

    showModal(`
      <div class="premium-page">

        <div class="premium-hero">

          <div class="premium-icon">
            👑
          </div>

          <h2>
            Aung Business Academy Premium
          </h2>

          <p>
            Lesson 1 is FREE.
            Unlock Lesson 2–30 with Premium.
          </p>

        </div>

        ${
          premium
            ? `
              <div class="premium-active-card">

                <div>
                  <span class="status-label">
                    PREMIUM ACTIVE
                  </span>

                  <h3>
                    ${escapeHTML(
                      premium.planName || "Premium"
                    )}
                  </h3>

                  <p>
                    Expires:
                    ${new Date(
                      Number(premium.expiresAt)
                    ).toLocaleDateString()}
                  </p>
                </div>

                <div class="premium-check">
                  ✓
                </div>

              </div>
            `
            : ""
        }

        ${
          payment &&
          payment.status === "pending"
            ? `
              <div class="payment-pending-card">

                <strong>
                  ⏳ Payment Verification Pending
                </strong>

                <p>
                  Plan:
                  ${escapeHTML(
                    payment.planName
                  )}
                </p>

                <p>
                  Amount:
                  ${formatPlanPrice(
                    payment.amount
                  )}
                </p>

                <p>
                  Method:
                  ${escapeHTML(
                    payment.method
                  )}
                </p>

                <small>
                  Your payment request has been submitted.
                  Please wait for verification.
                </small>

              </div>
            `
            : ""
        }

        <div class="premium-free-card">

          <div class="free-icon">
            🎁
          </div>

          <div>
            <h3>
              Lesson 1 — FREE
            </h3>

            <p>
              Start learning without payment.
            </p>
          </div>

        </div>

        <div class="premium-features">

          <h3>
            What You Get
          </h3>

          <div class="feature-grid">

            <div>
              📚
              <strong>
                30 Business Lessons
              </strong>
              <span>
                Practical business knowledge
              </span>
            </div>

            <div>
              📈
              <strong>
                Sales Management
              </strong>
              <span>
                Sales and team management skills
              </span>
            </div>

            <div>
              💰
              <strong>
                Finance Tools
              </strong>
              <span>
                Profit, margin and break-even tools
              </span>
            </div>

            <div>
              🤖
              <strong>
                AI Business Coach
              </strong>
              <span>
                Business guidance and ideas
              </span>
            </div>

          </div>

        </div>

        ${
          premium
            ? `
              <button
                class="primary-button full-width"
                onclick="openLessons()"
              >
                📚 Continue Learning
              </button>
            `
            : `
              <button
                class="premium-button full-width"
                onclick="openPremiumPlans()"
              >
                👑 Unlock Premium
              </button>
            `
        }

      </div>
    `);
  }

  // ============================================================
  // PREMIUM PLANS
  // ============================================================

  function openPremiumPlans() {
    showModal(`
      <div class="premium-plans-page">

        <button
          class="back-button"
          onclick="openPremium()"
        >
          ← Back
        </button>

        <div class="premium-plans-header">

          <div class="premium-icon">
            👑
          </div>

          <h2>
            Choose Your Premium Plan
          </h2>

          <p>
            Unlock Lesson 2–30 and all premium learning features.
          </p>

        </div>

        <div class="plans-grid">

          ${premiumPlanCard(
            PAYMENT_PLANS.month1,
            "STARTER",
            "Good for trying the full academy",
            false
          )}

          ${premiumPlanCard(
            PAYMENT_PLANS.month3,
            "MOST POPULAR",
            "Best balance of price and learning",
            true
          )}

          ${premiumPlanCard(
            PAYMENT_PLANS.month6,
            "BEST VALUE",
            "Best choice for long-term learning",
            false
          )}

        </div>

        <div class="payment-methods">

          <h3>
            💳 Payment Methods
          </h3>

          <div class="payment-method-grid">

            <div class="payment-method-card">

              <strong>
                KPay
              </strong>

              <span>
                ${escapeHTML(
                  PAYMENT_ACCOUNTS.kpay
                )}
              </span>

            </div>

            <div class="payment-method-card">

              <strong>
                CB Bank
              </strong>

              <span>
                ${escapeHTML(
                  PAYMENT_ACCOUNTS.cb
                )}
              </span>

            </div>

          </div>

          <p class="payment-note">
            After payment, enter your transaction/reference
            number to submit your payment for verification.
          </p>

        </div>

      </div>
    `);
  }

  // ============================================================
  // PREMIUM PLAN CARD
  // ============================================================

  function premiumPlanCard(
    plan,
    label,
    description,
    featured
  ) {
    return `
      <div
        class="premium-plan-card
        ${featured ? "featured" : ""}"
      >

        <div class="plan-label">
          ${escapeHTML(label)}
        </div>

        <h3>
          ${escapeHTML(plan.name)}
        </h3>

        <div class="plan-price">
          ${formatPlanPrice(plan.price)}
        </div>

        <div class="plan-duration">
          ${plan.days} Days
        </div>

        <p>
          ${escapeHTML(description)}
        </p>

        <ul>

          <li>
            ✓ Lesson 2–30
          </li>

          <li>
            ✓ Business Tools
          </li>

          <li>
            ✓ Sales Manager Tools
          </li>

          <li>
            ✓ AI Business Coach
          </li>

        </ul>

        <button
          class="primary-button full-width"
          onclick="openPaymentForm('${plan.id}')"
        >
          Choose ${escapeHTML(plan.name)}
        </button>

      </div>
    `;
  }

  // ============================================================
  // PAYMENT FORM
  // ============================================================

  function openPaymentForm(planId) {
    const plan =
      Object.values(
        PAYMENT_PLANS
      ).find(
        item => item.id === planId
      );

    if (!plan) {
      showToast(
        "Payment plan not found."
      );
      return;
    }

    showModal(`
      <div class="payment-form-page">

        <button
          class="back-button"
          onclick="openPremiumPlans()"
        >
          ← Back
        </button>

        <div class="payment-header">

          <div class="payment-icon">
            💳
          </div>

          <h2>
            Complete Payment
          </h2>

          <p>
            ${escapeHTML(plan.name)}
          </p>

        </div>

        <div class="selected-plan-card">

          <span>
            Selected Plan
          </span>

          <strong>
            ${escapeHTML(plan.name)}
          </strong>

          <b>
            ${formatPlanPrice(plan.price)}
          </b>

        </div>

        <div class="payment-instructions">

          <h3>
            1. Make Payment
          </h3>

          <p>
            Please transfer the exact amount to one of the
            payment accounts below.
          </p>

          <div class="account-box">

            <div>
              <strong>
                KPay
              </strong>

              <span>
                ${escapeHTML(
                  PAYMENT_ACCOUNTS.kpay
                )}
              </span>
            </div>

            <div>
              <strong>
                CB Bank
              </strong>

              <span>
                ${escapeHTML(
                  PAYMENT_ACCOUNTS.cb
                )}
              </span>
            </div>

          </div>

        </div>

        <div class="payment-form">

          <h3>
            2. Submit Payment Information
          </h3>

          <label>
            Payment Method
          </label>

          <select
            id="paymentMethod"
            class="tool-input"
          >

            <option value="">
              Select payment method
            </option>

            <option value="KPay">
              KPay
            </option>

            <option value="CB Bank">
              CB Bank
            </option>

          </select>

          <label>
            Transaction / Reference Number
          </label>

          <input
            id="paymentReference"
            class="tool-input"
            type="text"
            placeholder="Enter transaction number"
          >

          <label>
            Payer Name
          </label>

          <input
            id="paymentPayer"
            class="tool-input"
            type="text"
            value="${escapeHTML(
              getUserName()
            )}"
            placeholder="Enter payer name"
          >

          <button
            class="primary-button full-width"
            onclick="submitPayment('${plan.id}')"
          >
            Submit Payment
          </button>

        </div>

      </div>
    `);
  }

  // ============================================================
  // SUBMIT PAYMENT
  // ============================================================

  function submitPayment(planId) {
    const plan =
      Object.values(
        PAYMENT_PLANS
      ).find(
        item => item.id === planId
      );

    if (!plan) {
      showToast(
        "Payment plan not found."
      );
      return;
    }

    const method =
      $("paymentMethod")?.value.trim();

    const reference =
      $("paymentReference")?.value.trim();

    const payer =
      $("paymentPayer")?.value.trim();

    if (!method) {
      showToast(
        "Please select payment method."
      );
      return;
    }

    if (!reference) {
      showToast(
        "Please enter transaction/reference number."
      );
      return;
    }

    if (!payer) {
      showToast(
        "Please enter payer name."
      );
      return;
    }

    const payment = {
      id: "PAY-" + Date.now(),

      userName:
        getUserName(),

      payer,

      planId:
        plan.id,

      planName:
        plan.name,

      amount:
        plan.price,

      method,

      reference,

      submittedAt:
        new Date().toISOString(),

      status:
        "pending"
    };

    saveJSON(
      PAYMENT_KEY,
      payment
    );

    showModal(`
      <div class="payment-success-page">

        <div class="success-icon">
          ✓
        </div>

        <h2>
          Payment Submitted
        </h2>

        <p>
          Your payment information has been submitted
          successfully.
        </p>

        <div class="payment-summary">

          <div>
            <span>
              Plan
            </span>

            <strong>
              ${escapeHTML(plan.name)}
            </strong>
          </div>

          <div>
            <span>
              Amount
            </span>

            <strong>
              ${formatPlanPrice(plan.price)}
            </strong>
          </div>

          <div>
            <span>
              Payment Method
            </span>

            <strong>
              ${escapeHTML(method)}
            </strong>
          </div>

          <div>
            <span>
              Reference
            </span>

            <strong>
              ${escapeHTML(reference)}
            </strong>
          </div>

        </div>

        <div class="pending-notice">

          ⏳

          <div>
            <strong>
              Waiting for Verification
            </strong>

            <p>
              Premium access will be activated after
              your payment is verified.
            </p>
          </div>

        </div>

        <button
          class="primary-button full-width"
          onclick="openPremium()"
        >
          Back to Premium
        </button>

      </div>
    `);
  }

  // ============================================================
  // LOCAL PREMIUM ACTIVATION
  // FOR TESTING ONLY
  // ============================================================

  function activatePremiumForCurrentUser(planId) {
    const plan =
      Object.values(
        PAYMENT_PLANS
      ).find(
        item => item.id === planId
      );

    if (!plan) return;

    const existing =
      getPremiumInfo();

    const start =
      existing &&
      existing.expiresAt > Date.now()
        ? existing.expiresAt
        : Date.now();

    saveJSON(
      PREMIUM_KEY,
      {
        planId:
          plan.id,

        planName:
          plan.name,

        startedAt:
          Date.now(),

        expiresAt:
          start +
          plan.days *
            86400000
      }
    );

    const payment =
      getPaymentRequest();

    if (payment) {
      payment.status =
        "approved";

      payment.approvedAt =
        new Date().toISOString();

      saveJSON(
        PAYMENT_KEY,
        payment
      );
    }

    showToast(
      plan.name +
        " Premium activated."
    );

    openPremium();
  }

  // ============================================================
  // END OF PART 1
    // ============================================================
  // NAVIGATION
  // ============================================================

  function openPage(page) {
    closeSidebarMobile();

    switch (page) {
      case "dashboard":
        goDashboard();
        break;

      case "courses":
        openCourses();
        break;

      case "lessons":
        openLessons();
        break;

      case "progress":
        openProgress();
        break;

      case "sales":
        openSalesManager();
        break;

      case "pricing":
        openPricingCalculator();
        break;

      case "reports":
        openReports();
        break;

      case "coach":
        openAIBusinessCoach();
        break;

      case "tools":
        openAITools();
        break;

      case "settings":
        openSettings();
        break;

      case "premium":
        openPremium();
        break;

      default:
        goDashboard();
    }
  }

  // ============================================================
  // MY COURSES
  // ============================================================

  function openCourses() {
    closeSidebarMobile();

    setPage(
      "My Courses",
      "Build your business knowledge step by step."
    );

    showModal(`
      <div class="courses-page">

        <h2>🎓 My Courses</h2>

        <p>
          Your complete business learning program.
        </p>

        <div class="course-main-card">

          <div class="course-icon">
            📈
          </div>

          <div class="course-info">

            <span class="course-label">
              MAIN COURSE
            </span>

            <h3>
              Business Management Mastery
            </h3>

            <p>
              A practical 30-lesson program covering
              business, marketing, sales, leadership,
              finance and growth.
            </p>

            <div class="course-progress">

              <div class="progress-info">
                <span>
                  Progress
                </span>

                <strong>
                  ${getProgress()}%
                </strong>
              </div>

              <div class="progress-track">
                <div
                  class="progress-fill"
                  style="width:${getProgress()}%"
                ></div>
              </div>

            </div>

            <button
              class="primary-button"
              onclick="openLessons()"
            >
              Continue Learning →
            </button>

          </div>

        </div>

        <div class="course-category-grid">

          <div class="course-category-card">
            <div>💼</div>
            <h3>Business Basics</h3>
            <p>
              Build a strong business foundation.
            </p>
          </div>

          <div class="course-category-card">
            <div>📣</div>
            <h3>Marketing</h3>
            <p>
              Learn practical marketing strategy.
            </p>
          </div>

          <div class="course-category-card">
            <div>💰</div>
            <h3>Sales & Revenue</h3>
            <p>
              Improve sales performance and revenue.
            </p>
          </div>

          <div class="course-category-card">
            <div>👥</div>
            <h3>People Management</h3>
            <p>
              Develop effective teams and leaders.
            </p>
          </div>

          <div class="course-category-card">
            <div>📊</div>
            <h3>Finance</h3>
            <p>
              Understand profit, cost and cash flow.
            </p>
          </div>

          <div class="course-category-card">
            <div>🚀</div>
            <h3>Growth Strategy</h3>
            <p>
              Turn business plans into growth.
            </p>
          </div>

        </div>

      </div>
    `);
  }

  // ============================================================
  // MY PROGRESS
  // ============================================================

  function openProgress() {
    closeSidebarMobile();

    const completed =
      getCompletedLessons().length;

    const percentage =
      getProgress();

    const remaining =
      lessons.length - completed;

    setPage(
      "My Progress",
      "Track your learning progress."
    );

    showModal(`
      <div class="progress-page">

        <h2>📊 My Progress</h2>

        <p>
          Keep learning and complete your 30-lesson journey.
        </p>

        <div class="progress-overview">

          <div class="progress-circle-card">

            <div
              class="progress-circle"
              style="--progress:${percentage * 3.6}deg"
            >
              <div>
                <strong>
                  ${percentage}%
                </strong>

                <span>
                  Complete
                </span>
              </div>
            </div>

          </div>

          <div class="progress-stat-grid">

            <div class="progress-stat">
              <strong>
                ${completed}
              </strong>
              <span>
                Completed
              </span>
            </div>

            <div class="progress-stat">
              <strong>
                ${remaining}
              </strong>
              <span>
                Remaining
              </span>
            </div>

            <div class="progress-stat">
              <strong>
                ${lessons.length}
              </strong>
              <span>
                Total Lessons
              </span>
            </div>

            <div class="progress-stat">
              <strong>
                ${Math.max(
                  0,
                  Math.ceil(
                    remaining / 5
                  )
                )}
              </strong>
              <span>
                Lessons / Week
              </span>
            </div>

          </div>

        </div>

        <div class="progress-section">

          <h3>
            Lesson Progress
          </h3>

          <div class="lesson-progress-list">

            ${lessons
              .map(
                lesson => `
                  <div class="lesson-progress-row">

                    <div class="lesson-progress-number">
                      ${lesson.id}
                    </div>

                    <div class="lesson-progress-name">
                      <strong>
                        ${escapeHTML(
                          lesson.title
                        )}
                      </strong>

                      <span>
                        ${escapeHTML(
                          lesson.category
                        )}
                      </span>
                    </div>

                    <div class="lesson-progress-status">

                      ${
                        isCompleted(
                          lesson.id
                        )
                          ? `<span class="status-completed">
                              ✓ Completed
                            </span>`
                          : isPremiumLesson(
                              lesson.id
                            ) &&
                            !hasPremiumAccess()
                          ? `<span class="status-locked">
                              🔒 Premium
                            </span>`
                          : `<span class="status-pending">
                              Not Started
                            </span>`
                      }

                    </div>

                  </div>
                `
              )
              .join("")}

          </div>

        </div>

        <button
          class="primary-button full-width"
          onclick="openLessons()"
        >
          📚 Continue Lessons
        </button>

      </div>
    `);
  }

  // ============================================================
  // SALES MANAGER
  // ============================================================

  function openSalesManager() {
    closeSidebarMobile();

    setPage(
      "Sales Manager",
      "Manage targets, performance and field execution."
    );

    showModal(`
      <div class="sales-manager-page">

        <h2>📈 Sales Manager</h2>

        <p>
          Simple tools for professional sales management.
        </p>

        <div class="manager-tool-grid">

          <div
            class="manager-tool-card"
            onclick="openSalesTargetTool()"
          >

            <div class="manager-tool-icon">
              🎯
            </div>

            <h3>
              Sales Target
            </h3>

            <p>
              Calculate monthly and daily sales targets.
            </p>

            <button class="secondary-button">
              Open Tool →
            </button>

          </div>

          <div
            class="manager-tool-card"
            onclick="openKPIManager()"
          >

            <div class="manager-tool-icon">
              📊
            </div>

            <h3>
              KPI Manager
            </h3>

            <p>
              Track sales team KPIs and performance.
            </p>

            <button class="secondary-button">
              Open Tool →
            </button>

          </div>

          <div
            class="manager-tool-card"
            onclick="openTeamManager()"
          >

            <div class="manager-tool-icon">
              👥
            </div>

            <h3>
              Team Management
            </h3>

            <p>
              Manage team responsibilities and follow-up.
            </p>

            <button class="secondary-button">
              Open Tool →
            </button>

          </div>

          <div
            class="manager-tool-card"
            onclick="openFieldPlan()"
          >

            <div class="manager-tool-icon">
              🗺️
            </div>

            <h3>
              Field Execution
            </h3>

            <p>
              Plan daily market visits and execution.
            </p>

            <button class="secondary-button">
              Open Tool →
            </button>

          </div>

        </div>

        <div class="manager-principles">

          <h3>
            Sales Management Principles
          </h3>

          <div class="principle-list">

            <div>
              <strong>
                01. Clear Expectations
              </strong>
              <span>
                Set clear targets and responsibilities.
              </span>
            </div>

            <div>
              <strong>
                02. Coaching
              </strong>
              <span>
                Develop people through regular coaching.
              </span>
            </div>

            <div>
              <strong>
                03. Accountability
              </strong>
              <span>
                Review performance and ownership.
              </span>
            </div>

            <div>
              <strong>
                04. Execution
              </strong>
              <span>
                Convert strategy into field actions.
              </span>
            </div>

          </div>

        </div>

      </div>
    `);
  }

  // ============================================================
  // SALES TARGET TOOL
  // ============================================================

  function openSalesTargetTool() {
    showModal(`
      <div class="tool-page">

        <button
          class="back-button"
          onclick="openSalesManager()"
        >
          ← Back
        </button>

        <h2>
          🎯 Sales Target Calculator
        </h2>

        <p>
          Convert monthly targets into daily and weekly targets.
        </p>

        <label>
          Monthly Sales Target
        </label>

        <input
          id="salesMonthlyTarget"
          class="tool-input"
          type="number"
          placeholder="Example: 100000000"
        >

        <label>
          Working Days
        </label>

        <input
          id="salesWorkingDays"
          class="tool-input"
          type="number"
          value="26"
        >

        <label>
          Number of Sales People
        </label>

        <input
          id="salesPeople"
          class="tool-input"
          type="number"
          value="1"
        >

        <button
          class="primary-button full-width"
          onclick="calculateSalesTarget()"
        >
          Calculate
        </button>

        <div
          id="salesTargetResult"
          class="calculator-result"
        ></div>

      </div>
    `);
  }

  function calculateSalesTarget() {
    const monthly =
      num(
        "salesMonthlyTarget"
      );

    const days =
      num(
        "salesWorkingDays",
        26
      );

    const people =
      num(
        "salesPeople",
        1
      );

    if (
      monthly <= 0 ||
      days <= 0 ||
      people <= 0
    ) {
      showToast(
        "Please enter valid numbers."
      );
      return;
    }

    const daily =
      monthly / days;

    const weekly =
      monthly / 4.33;

    const individualMonthly =
      monthly / people;

    const individualDaily =
      individualMonthly / days;

    const result =
      $("salesTargetResult");

    if (!result) return;

    result.innerHTML = `

      <h3>
        Sales Target Result
      </h3>

      <div class="result-grid">

        <div>
          <span>
            Monthly Target
          </span>

          <strong>
            ${formatKs(monthly)}
          </strong>
        </div>

        <div>
          <span>
            Weekly Target
          </span>

          <strong>
            ${formatKs(weekly)}
          </strong>
        </div>

        <div>
          <span>
            Daily Target
          </span>

          <strong>
            ${formatKs(daily)}
          </strong>
        </div>

        <div>
          <span>
            Per Person / Month
          </span>

          <strong>
            ${formatKs(individualMonthly)}
          </strong>
        </div>

        <div>
          <span>
            Per Person / Day
          </span>

          <strong>
            ${formatKs(individualDaily)}
          </strong>
        </div>

      </div>

    `;
  }

  // ============================================================
  // KPI MANAGER
  // ============================================================

  function openKPIManager() {
    const saved =
      safeJSON(
        KPI_KEY,
        {
          target: 0,
          achievement: 0,
          customers: 0,
          visits: 0
        }
      );

    showModal(`
      <div class="tool-page">

        <button
          class="back-button"
          onclick="openSalesManager()"
        >
          ← Back
        </button>

        <h2>
          📊 KPI Manager
        </h2>

        <p>
          Enter your KPI numbers and calculate performance.
        </p>

        <label>
          Sales Target
        </label>

        <input
          id="kpiTarget"
          class="tool-input"
          type="number"
          value="${saved.target || ""}"
          placeholder="Sales target"
        >

        <label>
          Actual Sales
        </label>

        <input
          id="kpiAchievement"
          class="tool-input"
          type="number"
          value="${saved.achievement || ""}"
          placeholder="Actual sales"
        >

        <label>
          Active Customers
        </label>

        <input
          id="kpiCustomers"
          class="tool-input"
          type="number"
          value="${saved.customers || ""}"
          placeholder="Number of customers"
        >

        <label>
          Market Visits
        </label>

        <input
          id="kpiVisits"
          class="tool-input"
          type="number"
          value="${saved.visits || ""}"
          placeholder="Number of visits"
        >

        <button
          class="primary-button full-width"
          onclick="calculateKPI()"
        >
          Calculate KPI
        </button>

        <div
          id="kpiResult"
          class="calculator-result"
        ></div>

      </div>
    `);
  }

  function calculateKPI() {
    const target =
      num("kpiTarget");

    const achievement =
      num("kpiAchievement");

    const customers =
      num("kpiCustomers");

    const visits =
      num("kpiVisits");

    if (target <= 0) {
      showToast(
        "Please enter a sales target."
      );
      return;
    }

    const achievementRate =
      (achievement / target) *
      100;

    saveJSON(
      KPI_KEY,
      {
        target,
        achievement,
        customers,
        visits
      }
    );

    const result =
      $("kpiResult");

    if (!result) return;

    result.innerHTML = `

      <h3>
        KPI Performance
      </h3>

      <div class="result-grid">

        <div>
          <span>
            Achievement
          </span>

          <strong>
            ${achievementRate.toFixed(1)}%
          </strong>
        </div>

        <div>
          <span>
            Sales Gap
          </span>

          <strong>
            ${formatKs(
              Math.max(
                0,
                target - achievement
              )
            )}
          </strong>
        </div>

        <div>
          <span>
            Active Customers
          </span>

          <strong>
            ${formatNumber(
              customers
            )}
          </strong>
        </div>

        <div>
          <span>
            Market Visits
          </span>

          <strong>
            ${formatNumber(
              visits
            )}
          </strong>
        </div>

      </div>

      <div class="kpi-message">

        ${
          achievementRate >= 100
            ? "🎉 Target achieved. Excellent performance!"
            : achievementRate >= 80
            ? "👍 Good performance. Push for the remaining gap."
            : achievementRate >= 60
            ? "⚠️ Improvement is needed. Focus on execution."
            : "🚨 Immediate action is required to close the gap."
        }

      </div>

    `;
  }

  // ============================================================
  // TEAM MANAGER
  // ============================================================

  function openTeamManager() {
    showModal(`
      <div class="tool-page">

        <button
          class="back-button"
          onclick="openSalesManager()"
        >
          ← Back
        </button>

        <h2>
          👥 Team Management
        </h2>

        <p>
          Use these principles to manage a high-performing team.
        </p>

        <div class="management-checklist">

          <div>
            <span>01</span>

            <div>
              <strong>
                Set Clear Expectations
              </strong>

              <p>
                Every team member should know the target,
                role and expected result.
              </p>
            </div>
          </div>

          <div>
            <span>02</span>

            <div>
              <strong>
                Coach Regularly
              </strong>

              <p>
                Use field coaching, observation and feedback
                to improve capability.
              </p>
            </div>
          </div>

          <div>
            <span>03</span>

            <div>
              <strong>
                Review Performance
              </strong>

              <p>
                Review numbers regularly and identify the
                biggest performance gaps.
              </p>
            </div>
          </div>

          <div>
            <span>04</span>

            <div>
              <strong>
                Empower Ownership
              </strong>

              <p>
                Give people responsibility and hold them
                accountable for results.
              </p>
            </div>
          </div>

          <div>
            <span>05</span>

            <div>
              <strong>
                Recognize Success
              </strong>

              <p>
                Recognize strong execution and create a
                positive performance culture.
              </p>
            </div>
          </div>

        </div>

      </div>
    `);
  }

  // ============================================================
  // FIELD EXECUTION PLAN
  // ============================================================

  function openFieldPlan() {
    showModal(`
      <div class="tool-page">

        <button
          class="back-button"
          onclick="openSalesManager()"
        >
          ← Back
        </button>

        <h2>
          🗺️ Field Execution Planner
        </h2>

        <p>
          Plan your daily sales activities.
        </p>

        <label>
          Daily Target
        </label>

        <input
          id="fieldTarget"
          class="tool-input"
          type="number"
          placeholder="Daily sales target"
        >

        <label>
          Planned Customer Visits
        </label>

        <input
          id="fieldVisits"
          class="tool-input"
          type="number"
          value="10"
        >

        <label>
          New Customer Target
        </label>

        <input
          id="fieldNewCustomers"
          class="tool-input"
          type="number"
          value="3"
        >

        <label>
          Priority Area
        </label>

        <input
          id="fieldArea"
          class="tool-input"
          type="text"
          placeholder="Example: Yangon North"
        >

        <button
          class="primary-button full-width"
          onclick="createFieldPlan()"
        >
          Create Plan
        </button>

        <div
          id="fieldPlanResult"
          class="calculator-result"
        ></div>

      </div>
    `);
  }

  function createFieldPlan() {
    const target =
      num("fieldTarget");

    const visits =
      num(
        "fieldVisits",
        10
      );

    const newCustomers =
      num(
        "fieldNewCustomers",
        3
      );

    const area =
      $("fieldArea")?.value.trim() ||
      "Priority Market";

    if (target <= 0) {
      showToast(
        "Please enter daily target."
      );
      return;
    }

    const result =
      $("fieldPlanResult");

    if (!result) return;

    result.innerHTML = `

      <h3>
        Today's Field Plan
      </h3>

      <div class="field-plan-list">

        <div>
          <span>📍 Priority Area</span>
          <strong>
            ${escapeHTML(area)}
          </strong>
        </div>

        <div>
          <span>🎯 Sales Target</span>
          <strong>
            ${formatKs(target)}
          </strong>
        </div>

        <div>
          <span>👥 Customer Visits</span>
          <strong>
            ${formatNumber(visits)}
          </strong>
        </div>

        <div>
          <span>➕ New Customers</span>
          <strong>
            ${formatNumber(newCustomers)}
          </strong>
        </div>

      </div>

      <div class="execution-note">

        <strong>
          Execution Focus
        </strong>

        <p>
          Prioritize high-value customers first,
          follow up on pending orders, identify new
          opportunities and review results before ending
          the day.
        </p>

      </div>

    `;
  }

  // ============================================================
  // PRICING CALCULATOR
  // ============================================================

  function openPricingCalculator() {
    closeSidebarMobile();

    setPage(
      "Pricing Calculator",
      "Calculate selling price, margin and profit."
    );

    showModal(`
      <div class="tool-page">

        <h2>
          💰 Pricing Calculator
        </h2>

        <p>
          Calculate selling price and gross margin.
        </p>

        <label>
          Product Cost
        </label>

        <input
          id="priceCost"
          class="tool-input"
          type="number"
          placeholder="Example: 10000"
        >

        <label>
          Desired Margin (%)
        </label>

        <input
          id="priceMargin"
          class="tool-input"
          type="number"
          value="30"
        >

        <label>
          Quantity
        </label>

        <input
          id="priceQuantity"
          class="tool-input"
          type="number"
          value="1"
        >

        <button
          class="primary-button full-width"
          onclick="calculatePricing()"
        >
          Calculate Price
        </button>

        <div
          id="pricingResult"
          class="calculator-result"
        ></div>

      </div>
    `);
  }

  function calculatePricing() {
    const cost =
      num("priceCost");

    const margin =
      num("priceMargin");

    const quantity =
      num(
        "priceQuantity",
        1
      );

    if (
      cost <= 0 ||
      margin < 0 ||
      margin >= 100 ||
      quantity <= 0
    ) {
      showToast(
        "Please enter valid values."
      );
      return;
    }

    const sellingPrice =
      cost /
      (1 - margin / 100);

    const profit =
      sellingPrice - cost;

    const totalCost =
      cost * quantity;

    const totalSales =
      sellingPrice * quantity;

    const totalProfit =
      profit * quantity;

    const result =
      $("pricingResult");

    if (!result) return;

    result.innerHTML = `

      <h3>
        Pricing Result
      </h3>

      <div class="result-grid">

        <div>
          <span>
            Selling Price / Unit
          </span>

          <strong>
            ${formatKs(
              sellingPrice
            )}
          </strong>
        </div>

        <div>
          <span>
            Profit / Unit
          </span>

          <strong>
            ${formatKs(
              profit
            )}
          </strong>
        </div>

        <div>
          <span>
            Total Cost
          </span>

          <strong>
            ${formatKs(
              totalCost
            )}
          </strong>
        </div>

        <div>
          <span>
            Total Sales
          </span>

          <strong>
            ${formatKs(
              totalSales
            )}
          </strong>
        </div>

        <div>
          <span>
            Total Profit
          </span>

          <strong>
            ${formatKs(
              totalProfit
            )}
          </strong>
        </div>

      </div>

    `;
  }

  // ============================================================
  // END OF PART 2
  // ============================================================
  // ============================================================
   // ============================================================
  // REPORTS
  // ============================================================

  function openReports() {
    closeSidebarMobile();

    const completed =
      getCompletedLessons().length;

    const progress =
      getProgress();

    const kpi =
      safeJSON(
        KPI_KEY,
        {
          target: 0,
          achievement: 0,
          customers: 0,
          visits: 0
        }
      );

    const achievementRate =
      kpi.target > 0
        ? (kpi.achievement / kpi.target) * 100
        : 0;

    setPage(
      "Reports",
      "Review your business and learning performance."
    );

    showModal(`
      <div class="reports-page">

        <h2>
          📊 Business Reports
        </h2>

        <p>
          Review your learning and sales performance.
        </p>

        <div class="report-summary-grid">

          <div class="report-card">

            <div class="report-icon">
              📚
            </div>

            <span>
              Lessons Completed
            </span>

            <strong>
              ${completed}/${lessons.length}
            </strong>

          </div>

          <div class="report-card">

            <div class="report-icon">
              📈
            </div>

            <span>
              Learning Progress
            </span>

            <strong>
              ${progress}%
            </strong>

          </div>

          <div class="report-card">

            <div class="report-icon">
              🎯
            </div>

            <span>
              Sales Achievement
            </span>

            <strong>
              ${achievementRate.toFixed(1)}%
            </strong>

          </div>

          <div class="report-card">

            <div class="report-icon">
              👥
            </div>

            <span>
              Active Customers
            </span>

            <strong>
              ${formatNumber(
                kpi.customers
              )}
            </strong>

          </div>

        </div>

        <div class="report-section">

          <h3>
            Learning Report
          </h3>

          <div class="report-progress">

            <div class="report-progress-header">

              <span>
                Academy Progress
              </span>

              <strong>
                ${progress}%
              </strong>

            </div>

            <div class="progress-track">

              <div
                class="progress-fill"
                style="width:${progress}%"
              ></div>

            </div>

          </div>

          <p>
            ${
              progress === 100
                ? "🎉 You have completed the full academy."
                : `You have ${lessons.length - completed}
                   lessons remaining. Keep going.`
            }
          </p>

        </div>

        <div class="report-section">

          <h3>
            Sales Performance
          </h3>

          <div class="report-table">

            <div>
              <span>
                Sales Target
              </span>

              <strong>
                ${formatKs(
                  kpi.target
                )}
              </strong>
            </div>

            <div>
              <span>
                Actual Sales
              </span>

              <strong>
                ${formatKs(
                  kpi.achievement
                )}
              </strong>
            </div>

            <div>
              <span>
                Sales Gap
              </span>

              <strong>
                ${formatKs(
                  Math.max(
                    0,
                    kpi.target -
                      kpi.achievement
                  )
                )}
              </strong>
            </div>

            <div>
              <span>
                Market Visits
              </span>

              <strong>
                ${formatNumber(
                  kpi.visits
                )}
              </strong>
            </div>

          </div>

        </div>

        <div class="report-section">

          <h3>
            Recommended Actions
          </h3>

          <div class="recommendation-list">

            ${
              progress < 50
                ? `
                  <div>
                    📚
                    <span>
                      Focus on completing more business lessons.
                    </span>
                  </div>
                `
                : `
                  <div>
                    ✓
                    <span>
                      Continue your learning consistency.
                    </span>
                  </div>
                `
            }

            ${
              achievementRate < 80
                ? `
                  <div>
                    🎯
                    <span>
                      Focus on closing your sales performance gap.
                    </span>
                  </div>
                `
                : `
                  <div>
                    📈
                    <span>
                      Maintain strong sales execution.
                    </span>
                  </div>
                `
            }

            <div>
              👥
              <span>
                Coach your team and review performance regularly.
              </span>
            </div>

            <div>
              🗺️
              <span>
                Prioritize high-value customers and market opportunities.
              </span>
            </div>

          </div>

        </div>

      </div>
    `);
  }

  // ============================================================
  // AI BUSINESS COACH
  // ============================================================

  function openAIBusinessCoach() {
    closeSidebarMobile();

    setPage(
      "AI Business Coach",
      "Get practical business guidance."
    );

    showModal(`
      <div class="ai-coach-page">

        <div class="ai-coach-header">

          <div class="ai-avatar">
            🤖
          </div>

          <div>

            <h2>
              AI Business Coach
            </h2>

            <p>
              Ask questions about business, sales,
              marketing, leadership or growth.
            </p>

          </div>

        </div>

        <div class="coach-suggestions">

          <button
            onclick="useCoachQuestion('How can I increase my sales?')"
          >
            📈 Increase Sales
          </button>

          <button
            onclick="useCoachQuestion('How can I manage my sales team better?')"
          >
            👥 Manage Team
          </button>

          <button
            onclick="useCoachQuestion('How can I improve my marketing?')"
          >
            📣 Improve Marketing
          </button>

          <button
            onclick="useCoachQuestion('How can I grow my business?')"
          >
            🚀 Grow Business
          </button>

        </div>

        <textarea
          id="coachQuestion"
          class="tool-textarea"
          rows="5"
          placeholder="Ask your business question..."
        ></textarea>

        <button
          class="primary-button full-width"
          onclick="askAIBusinessCoach()"
        >
          🤖 Ask AI Business Coach
        </button>

        <div
          id="coachAnswer"
          class="ai-answer"
        >
          <div class="ai-empty">
            <div>
              💡
            </div>

            <p>
              Ask a business question and your AI Coach
              will help you think through it.
            </p>
          </div>
        </div>

      </div>
    `);
  }

  // ============================================================
  // COACH QUESTION
  // ============================================================

  function useCoachQuestion(question) {
    const input =
      $("coachQuestion");

    if (!input) return;

    input.value = question;

    input.focus();
  }

  // ============================================================
  // AI REQUEST
  // ============================================================

  async function askAIBusinessCoach() {
    const input =
      $("coachQuestion");

    const answer =
      $("coachAnswer");

    if (!input || !answer) {
      return;
    }

    const question =
      input.value.trim();

    if (!question) {
      showToast(
        "Please enter your business question."
      );
      return;
    }

    answer.innerHTML = `
      <div class="ai-loading">

        <div class="ai-loading-icon">
          🤖
        </div>

        <strong>
          AI Coach is thinking...
        </strong>

        <span>
          Please wait.
        </span>

      </div>
    `;

    try {
      const response =
        await fetch(
          AI_API_URL,
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json"
            },

            body: JSON.stringify({
              message: question,

              prompt:
                "You are Aung Business Academy AI Business Coach. " +
                "Give practical, clear and actionable business advice. " +
                "Focus on sales, marketing, leadership, finance, " +
                "customer management and business growth. " +
                "Answer in simple language."
            })
          }
        );

      if (!response.ok) {
        throw new Error(
          "AI request failed"
        );
      }

      const data =
        await response.json();

      const text =
        data.answer ||
        data.response ||
        data.message ||
        data.text ||
        "I could not generate an answer.";

      answer.innerHTML = `
        <div class="ai-answer-card">

          <div class="ai-answer-header">

            <span>
              🤖
            </span>

            <strong>
              AI Business Coach
            </strong>

          </div>

          <div class="ai-answer-text">
            ${escapeHTML(text)
              .replace(/\n/g, "<br>")}
          </div>

        </div>
      `;

    } catch (error) {

      console.error(
        "AI Coach Error:",
        error
      );

      answer.innerHTML = `
        <div class="ai-error">

          <div>
            ⚠️
          </div>

          <strong>
            AI Coach is temporarily unavailable.
          </strong>

          <p>
            Please check your internet connection
            or try again later.
          </p>

        </div>
      `;
    }
  }

  // ============================================================
  // AI TOOLS
  // ============================================================

  function openAITools() {
    closeSidebarMobile();

    setPage(
      "AI Tools",
      "Practical AI-powered business tools."
    );

    showModal(`
      <div class="ai-tools-page">

        <div class="ai-tools-header">

          <div class="ai-tools-icon">
            ✨
          </div>

          <div>

            <h2>
              AI Business Tools
            </h2>

            <p>
              Use AI to generate practical business ideas
              and sales content.
            </p>

          </div>

        </div>

        <div class="ai-tool-grid">

          <div
            class="ai-tool-card"
            onclick="openAITool('sales')"
          >

            <div>
              📈
            </div>

            <h3>
              Sales Ideas
            </h3>

            <p>
              Generate sales improvement ideas.
            </p>

          </div>

          <div
            class="ai-tool-card"
            onclick="openAITool('marketing')"
          >

            <div>
              📣
            </div>

            <h3>
              Marketing Ideas
            </h3>

            <p>
              Generate marketing campaigns and ideas.
            </p>

          </div>

          <div
            class="ai-tool-card"
            onclick="openAITool('content')"
          >

            <div>
              ✍️
            </div>

            <h3>
              Content Generator
            </h3>

            <p>
              Create business content ideas.
            </p>

          </div>

          <div
            class="ai-tool-card"
            onclick="openAITool('strategy')"
          >

            <div>
              🧠
            </div>

            <h3>
              Strategy Ideas
            </h3>

            <p>
              Generate business strategy options.
            </p>

          </div>

        </div>

      </div>
    `);
  }

  // ============================================================
  // AI TOOL FORM
  // ============================================================

  function openAITool(type) {

    const config = {
      sales: {
        icon: "📈",
        title: "Sales Ideas",
        placeholder:
          "Example: I sell beverages in Yangon. How can I increase sales?"
      },

      marketing: {
        icon: "📣",
        title: "Marketing Ideas",
        placeholder:
          "Example: Give me a marketing plan for a small business."
      },

      content: {
        icon: "✍️",
        title: "Content Generator",
        placeholder:
          "Example: Create 10 Facebook content ideas for my business."
      },

      strategy: {
        icon: "🧠",
        title: "Strategy Ideas",
        placeholder:
          "Example: How can I grow my business over the next 12 months?"
      }
    };

    const selected =
      config[type] ||
      config.sales;

    showModal(`
      <div class="ai-tool-form">

        <button
          class="back-button"
          onclick="openAITools()"
        >
          ← Back
        </button>

        <div class="ai-tool-title">

          <div>
            ${selected.icon}
          </div>

          <div>

            <h2>
              ${selected.title}
            </h2>

            <p>
              AI-powered business assistance.
            </p>

          </div>

        </div>

        <textarea
          id="aiToolInput"
          class="tool-textarea"
          rows="7"
          placeholder="${escapeHTML(
            selected.placeholder
          )}"
        ></textarea>

        <button
          class="primary-button full-width"
          onclick="runAITool('${type}')"
        >
          ✨ Generate
        </button>

        <div
          id="aiToolResult"
          class="ai-answer"
        ></div>

      </div>
    `);
  }

  // ============================================================
  // RUN AI TOOL
  // ============================================================

  async function runAITool(type) {
    const input =
      $("aiToolInput");

    const result =
      $("aiToolResult");

    if (!input || !result) {
      return;
    }

    const question =
      input.value.trim();

    if (!question) {
      showToast(
        "Please enter your request."
      );
      return;
    }

    const prompts = {
      sales:
        "Generate practical sales improvement ideas.",

      marketing:
        "Generate practical marketing ideas.",

      content:
        "Generate useful business content ideas.",

      strategy:
        "Generate practical business strategy options."
    };

    result.innerHTML = `
      <div class="ai-loading">

        <div>
          🤖
        </div>

        <strong>
          Generating...
        </strong>

      </div>
    `;

    try {

      const response =
        await fetch(
          AI_API_URL,
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json"
            },

            body: JSON.stringify({
              message: question,

              prompt:
                "You are an expert business consultant. " +
                (prompts[type] ||
                  prompts.sales) +
                " Give clear, actionable and realistic advice."
            })
          }
        );

      if (!response.ok) {
        throw new Error(
          "AI request failed"
        );
      }

      const data =
        await response.json();

      const text =
        data.answer ||
        data.response ||
        data.message ||
        data.text ||
        "No answer returned.";

      result.innerHTML = `
        <div class="ai-answer-card">

          <div class="ai-answer-header">

            <span>
              ✨
            </span>

            <strong>
              AI Result
            </strong>

          </div>

          <div class="ai-answer-text">
            ${escapeHTML(text)
              .replace(/\n/g, "<br>")}
          </div>

        </div>
      `;

    } catch (error) {

      console.error(
        "AI Tool Error:",
        error
      );

      result.innerHTML = `
        <div class="ai-error">

          <div>
            ⚠️
          </div>

          <strong>
            AI service unavailable.
          </strong>

          <p>
            Please try again later.
          </p>

        </div>
      `;
    }
  }

  // ============================================================
  // BREAK-EVEN CALCULATOR
  // ============================================================

  function openBreakEvenCalculator() {

    showModal(`
      <div class="tool-page">

        <button
          class="back-button"
          onclick="openToolsPage()"
        >
          ← Back
        </button>

        <h2>
          ⚖️ Break-Even Calculator
        </h2>

        <p>
          Calculate how much you need to sell to cover your costs.
        </p>

        <label>
          Fixed Costs
        </label>

        <input
          id="breakFixed"
          class="tool-input"
          type="number"
          placeholder="Monthly fixed costs"
        >

        <label>
          Selling Price / Unit
        </label>

        <input
          id="breakPrice"
          class="tool-input"
          type="number"
          placeholder="Selling price"
        >

        <label>
          Variable Cost / Unit
        </label>

        <input
          id="breakVariable"
          class="tool-input"
          type="number"
          placeholder="Variable cost"
        >

        <button
          class="primary-button full-width"
          onclick="calculateBreakEven()"
        >
          Calculate
        </button>

        <div
          id="breakEvenResult"
          class="calculator-result"
        ></div>

      </div>
    `);
  }

  function calculateBreakEven() {

    const fixed =
      num("breakFixed");

    const price =
      num("breakPrice");

    const variable =
      num("breakVariable");

    if (
      fixed <= 0 ||
      price <= 0 ||
      variable < 0 ||
      price <= variable
    ) {
      showToast(
        "Please enter valid values."
      );
      return;
    }

    const contribution =
      price - variable;

    const units =
      fixed / contribution;

    const revenue =
      units * price;

    const result =
      $("breakEvenResult");

    if (!result) return;

    result.innerHTML = `

      <h3>
        Break-Even Result
      </h3>

      <div class="result-grid">

        <div>
          <span>
            Contribution / Unit
          </span>

          <strong>
            ${formatKs(
              contribution
            )}
          </strong>
        </div>

        <div>
          <span>
            Break-Even Units
          </span>

          <strong>
            ${Math.ceil(
              units
            ).toLocaleString()}
          </strong>
        </div>

        <div>
          <span>
            Break-Even Revenue
          </span>

          <strong>
            ${formatKs(
              revenue
            )}
          </strong>
        </div>

      </div>

    `;
  }

  // ============================================================
  // PROFIT CALCULATOR
  // ============================================================

  function openProfitCalculator() {

    showModal(`
      <div class="tool-page">

        <button
          class="back-button"
          onclick="openToolsPage()"
        >
          ← Back
        </button>

        <h2>
          💵 Profit Calculator
        </h2>

        <p>
          Calculate gross profit and profit margin.
        </p>

        <label>
          Revenue
        </label>

        <input
          id="profitRevenue"
          class="tool-input"
          type="number"
          placeholder="Total revenue"
        >

        <label>
          Total Cost
        </label>

        <input
          id="profitCost"
          class="tool-input"
          type="number"
          placeholder="Total cost"
        >

        <button
          class="primary-button full-width"
          onclick="calculateProfit()"
        >
          Calculate
        </button>

        <div
          id="profitResult"
          class="calculator-result"
        ></div>

      </div>
    `);
  }

  function calculateProfit() {

    const revenue =
      num("profitRevenue");

    const cost =
      num("profitCost");

    if (
      revenue <= 0 ||
      cost < 0
    ) {
      showToast(
        "Please enter valid values."
      );
      return;
    }

    const profit =
      revenue - cost;

    const margin =
      revenue > 0
        ? (profit / revenue) * 100
        : 0;

    const result =
      $("profitResult");

    if (!result) return;

    result.innerHTML = `

      <h3>
        Profit Result
      </h3>

      <div class="result-grid">

        <div>
          <span>
            Revenue
          </span>

          <strong>
            ${formatKs(
              revenue
            )}
          </strong>
        </div>

        <div>
          <span>
            Cost
          </span>

          <strong>
            ${formatKs(
              cost
            )}
          </strong>
        </div>

        <div>
          <span>
            Profit
          </span>

          <strong>
            ${formatKs(
              profit
            )}
          </strong>
        </div>

        <div>
          <span>
            Profit Margin
          </span>

          <strong>
            ${margin.toFixed(2)}%
          </strong>
        </div>

      </div>

    `;
  }

  // ============================================================
  // TOOLS PAGE
  // ============================================================

  function openToolsPage() {
    showModal(`
      <div class="tools-page">

        <h2>
          🧮 Business Calculators
        </h2>

        <p>
          Simple calculators for daily business decisions.
        </p>

        <div class="tool-grid">

          <div
            class="business-tool-card"
            onclick="openPricingCalculator()"
          >

            <div>
              💰
            </div>

            <h3>
              Pricing
            </h3>

            <p>
              Calculate selling price and margin.
            </p>

          </div>

          <div
            class="business-tool-card"
            onclick="openProfitCalculator()"
          >

            <div>
              💵
            </div>

            <h3>
              Profit
            </h3>

            <p>
              Calculate profit and margin.
            </p>

          </div>

          <div
            class="business-tool-card"
            onclick="openBreakEvenCalculator()"
          >

            <div>
              ⚖️
            </div>

            <h3>
              Break-Even
            </h3>

            <p>
              Calculate your break-even point.
            </p>

          </div>

          <div
            class="business-tool-card"
            onclick="openSalesTargetTool()"
          >

            <div>
              🎯
            </div>

            <h3>
              Sales Target
            </h3>

            <p>
              Calculate sales targets.
            </p>

          </div>

        </div>

      </div>
    `);
  }

  // ============================================================
  // SETTINGS
  // ============================================================

  function getSettings() {
    return safeJSON(
      SETTINGS_KEY,
      {
        notifications: true,
        dailyGoal: 30,
        language: "English"
      }
    );
  }

  function saveSettings(settings) {
    saveJSON(
      SETTINGS_KEY,
      settings
    );
  }

  function openSettings() {
    closeSidebarMobile();

    const settings =
      getSettings();

    setPage(
      "Settings",
      "Manage your academy preferences."
    );

    showModal(`
      <div class="settings-page">

        <h2>
          ⚙️ Settings
        </h2>

        <p>
          Manage your profile and application preferences.
        </p>

        <div class="settings-section">

          <h3>
            👤 Profile
          </h3>

          <label>
            Name
          </label>

          <input
            id="settingsName"
            class="tool-input"
            type="text"
            value="${escapeHTML(
              getUserName()
            )}"
          >

          <button
            class="secondary-button"
            onclick="saveProfileSettings()"
          >
            Save Profile
          </button>

        </div>

        <div class="settings-section">

          <h3>
            🎯 Learning Goal
          </h3>

          <label>
            Daily Learning Goal (minutes)
          </label>

          <input
            id="settingsGoal"
            class="tool-input"
            type="number"
            min="5"
            max="180"
            value="${settings.dailyGoal || 30}"
          >

        </div>

        <div class="settings-section">

          <h3>
            🔔 Notifications
          </h3>

          <label class="toggle-row">

            <span>
              Learning reminders
            </span>

            <input
              id="settingsNotifications"
              type="checkbox"
              ${
                settings.notifications
                  ? "checked"
                  : ""
              }
            >

          </label>

        </div>

        <button
          class="primary-button full-width"
          onclick="saveAcademySettings()"
        >
          Save Settings
        </button>

        <div class="settings-section danger-zone">

          <h3>
            ⚠️ Data
          </h3>

          <p>
            Clear local academy data from this device.
          </p>

          <button
            class="danger-button"
            onclick="confirmClearAcademyData()"
          >
            Clear My Data
          </button>

        </div>

      </div>
    `);
  }

  // ============================================================
  // SAVE PROFILE
  // ============================================================

  function saveProfileSettings() {
    const name =
      $("settingsName")?.value.trim();

    if (!name) {
      showToast(
        "Please enter your name."
      );
      return;
    }

    const user =
      getUser() || {};

    user.name =
      name;

    user.lastActive =
      new Date().toISOString();

    saveUser(user);

    updateUserUI();

    showToast(
      "Profile updated."
    );
  }

  // ============================================================
  // SAVE SETTINGS
  // ============================================================

  function saveAcademySettings() {
    const dailyGoal =
      Number(
        $("settingsGoal")?.value
      ) || 30;

    const notifications =
      !!$("settingsNotifications")
        ?.checked;

    saveSettings({
      notifications,
      dailyGoal,
      language:
        getSettings().language ||
        "English"
    });

    showToast(
      "Settings saved."
    );
  }

  // ============================================================
  // CLEAR DATA CONFIRMATION
  // ============================================================

  function confirmClearAcademyData() {
    showModal(`
      <div class="confirm-page">

        <div class="confirm-icon">
          ⚠️
        </div>

        <h2>
          Clear Academy Data?
        </h2>

        <p>
          This will remove your local learning progress,
          payment request and premium data from this device.
        </p>

        <div class="confirm-actions">

          <button
            class="secondary-button"
            onclick="openSettings()"
          >
            Cancel
          </button>

          <button
            class="danger-button"
            onclick="clearAcademyData()"
          >
            Yes, Clear Data
          </button>

        </div>

      </div>
    `);
  }

  // ============================================================
  // CLEAR DATA
  // ============================================================

  function clearAcademyData() {
    localStorage.removeItem(
      COMPLETED_KEY
    );

    localStorage.removeItem(
      PAYMENT_KEY
    );

    localStorage.removeItem(
      PREMIUM_KEY
    );

    localStorage.removeItem(
      NOTES_KEY
    );

    localStorage.removeItem(
      PLAN_KEY
    );

    localStorage.removeItem(
      KPI_KEY
    );

    localStorage.removeItem(
      SETTINGS_KEY
    );

    showToast(
      "Academy data cleared."
    );

    closeModal();

    updateDashboard();
  }

  // ============================================================
  // END OF PART 3
  // ============================================================
  // ============================================================
  // NOTES / ACTION PLAN
  // ============================================================

  function getNotes() {
    return safeJSON(NOTES_KEY,[]);
  }

  function saveNotes(notes) {
    saveJSON(NOTES_KEY,notes);
  }

  function openNotes() {
    const notes = getNotes();

    showModal(`
      <div>
        <h2>📝 My Business Notes</h2>
        <p>Capture ideas, decisions, customer insights and action items.</p>

        <textarea id="newNote" class="tool-input" rows="5"
          placeholder="Write your business note..."></textarea>

        <button class="primary-button" onclick="saveNewNote()">Save Note</button>

        <div style="margin-top:20px;">
          ${notes.length
            ? notes.map((n,i)=>`
              <div class="result-box">
                <small>${escapeHTML(n.date)}</small>
                <p style="white-space:pre-wrap;">${escapeHTML(n.text)}</p>
                <button class="secondary-button" onclick="deleteNote(${i})">
                  Delete
                </button>
              </div>
            `).join("")
            : `
              <div class="result-box">
                <p>No notes yet.</p>
              </div>
            `
          }
        </div>
      </div>
    `);
  }

  function saveNewNote() {
    const text = $("newNote")?.value.trim();

    if (!text) {
      showToast("Write something first.");
      return;
    }

    const notes = getNotes();

    notes.unshift({
      date:new Date().toLocaleString(),
      text:text
    });

    saveNotes(notes);

    showToast("Note saved.");
    openNotes();
  }

  function deleteNote(index) {
    const notes = getNotes();

    notes.splice(Number(index),1);

    saveNotes(notes);

    openNotes();
  }


  // ============================================================
  // PREMIUM PAYMENT
  // Lesson 1 is free. No 7-day trial.
  // ============================================================

  function getPaymentRequest() {
    return safeJSON(PAYMENT_KEY,null);
  }

  function formatPlanPrice(price) {
    return formatNumber(price) + " Ks";
  }

  function openPremium() {
    const premium = getPremiumInfo();
    const pending = getPaymentRequest();

    if (premium) {
      const daysLeft = Math.max(
        0,
        Math.ceil((premium.expiresAt - Date.now()) / 86400000)
      );

      showModal(`
        <div>
          <h2>👑 Premium Academy</h2>

          <div class="result-box">
            <h3>🟢 Premium Active</h3>

            <p>
              Plan:
              <strong>${escapeHTML(premium.planName)}</strong>
            </p>

            <p>
              Remaining:
              <strong>${daysLeft} day(s)</strong>
            </p>

            <p>
              Premium access includes Lessons 2–30
              and premium business tools.
            </p>
          </div>

          <button
            class="secondary-button"
            onclick="openPremiumPlans()">
            View Plans
          </button>
        </div>
      `);

      return;
    }

    showModal(`
      <div class="premium-page">

        <h2>👑 Premium Academy</h2>

        <p>
          Lesson 1 is free.
          Unlock Lessons 2–30 and premium tools with a paid plan.
        </p>

        <div class="result-box">
          <h3>🆓 Free Access</h3>

          <p>✓ Lesson 1 — Business Fundamentals</p>
          <p>✓ Create your learner profile</p>
        </div>

        <div class="result-box">
          <h3>👑 Premium Includes</h3>

          <p>✓ Lessons 2–30</p>
          <p>✓ Professional Business Tools</p>
          <p>✓ AI Business Coach</p>
          <p>✓ AI Business Plan</p>
          <p>✓ Sales KPI Dashboard</p>
          <p>✓ Growth & Finance Tools</p>
          <p>✓ Notes & Action Planning</p>
          <p>✓ Leadership & Management Training</p>
        </div>

        ${pending ? `
          <div class="result-box">

            <h3>🟠 Payment Pending</h3>

            <p>
              Plan:
              <strong>${escapeHTML(pending.planName)}</strong>
            </p>

            <p>
              Method:
              <strong>${escapeHTML(pending.method)}</strong>
            </p>

            <p>
              Reference:
              <strong>${escapeHTML(pending.reference)}</strong>
            </p>

            <p>
              Your payment is waiting for admin verification.
            </p>

          </div>
        ` : ""}

        <button
          class="primary-button"
          onclick="openPremiumPlans()">

          ${pending
            ? "Change / Resubmit Payment"
            : "Choose Premium Plan →"}

        </button>

      </div>
    `);
  }


  // ============================================================
  // PREMIUM PLANS
  // ============================================================

  function openPremiumPlans() {

    showModal(`
      <div class="premium-page">

        <h2>💳 Choose Your Plan</h2>

        <p>
          Launch Offer — limited introductory pricing.
        </p>

        <div class="quick-grid">

          ${premiumPlanCard(
            PAYMENT_PLANS.month1,
            "Starter",
            "Good for trying the Academy.",
            false
          )}

          ${premiumPlanCard(
            PAYMENT_PLANS.month3,
            "Popular",
            "Best balance of price and learning time.",
            true
          )}

          ${premiumPlanCard(
            PAYMENT_PLANS.month6,
            "Best Value",
            "Lowest monthly cost for serious learners.",
            false
          )}

        </div>

        <div class="result-box">

          <h3>💳 Payment Methods</h3>

          <p>🟢 KPay</p>
          <p>
            ${escapeHTML(PAYMENT_ACCOUNTS.kpay)}
          </p>

          <hr>

          <p>🔵 CB Bank</p>
          <p>
            ${escapeHTML(PAYMENT_ACCOUNTS.cb)}
          </p>

        </div>

      </div>
    `);
  }


  function premiumPlanCard(
    plan,
    label,
    description,
    featured
  ) {

    return `
      <div
        class="quick-card"
        style="position:relative;">

        ${
          featured
            ? '<span class="welcome-label">⭐ MOST POPULAR</span>'
            : ''
        }

        <h3>${escapeHTML(plan.name)}</h3>

        <p>
          ${escapeHTML(description)}
        </p>

        <h2>
          ${formatPlanPrice(plan.price)}
        </h2>

        <p>
          Access for ${plan.days} days
        </p>

        <button
          class="primary-button"
          onclick="openPaymentForm('${escapeHTML(plan.id)}')">

          Choose ${escapeHTML(plan.name)} →

        </button>

      </div>
    `;
  }


  // ============================================================
  // PAYMENT FORM
  // ============================================================

  function openPaymentForm(planId) {

    const plan = Object.values(PAYMENT_PLANS)
      .find(item => item.id === planId);

    if (!plan) return;

    showModal(`
      <div class="premium-page">

        <h2>🧾 Payment Confirmation</h2>

        <div class="result-box">

          <h3>
            ${escapeHTML(plan.name)}
            —
            ${formatPlanPrice(plan.price)}
          </h3>

          <p>
            Choose your payment method and enter
            the transaction/reference number after payment.
          </p>

        </div>

        <label
          style="
            display:block;
            margin:12px 0 6px;
            font-weight:600;
          ">

          Payment Method

        </label>

        <select
          id="paymentMethod"
          class="tool-input">

          <option value="KPay">
            🟢 KPay
          </option>

          <option value="CB Bank">
            🔵 CB Bank
          </option>

        </select>

        <div class="result-box">

          <p>
            <strong>KPay:</strong>
            ${escapeHTML(PAYMENT_ACCOUNTS.kpay)}
          </p>

          <p>
            <strong>CB Bank:</strong>
            ${escapeHTML(PAYMENT_ACCOUNTS.cb)}
          </p>

        </div>

        <label
          style="
            display:block;
            margin:12px 0 6px;
            font-weight:600;
          ">

          Transaction / Reference Number

        </label>

        <input
          id="paymentReference"
          class="tool-input"
          type="text"
          placeholder="Enter transaction reference">

        <label
          style="
            display:block;
            margin:12px 0 6px;
            font-weight:600;
          ">

          Payer Name

        </label>

        <input
          id="paymentPayer"
          class="tool-input"
          type="text"
          value="${escapeHTML(getUserName())}"
          placeholder="Your payment name">

        <button
          class="primary-button"
          onclick="submitPayment('${escapeHTML(plan.id)}')">

          Submit Payment →

        </button>

        <button
          class="secondary-button"
          onclick="openPremiumPlans()">

          ← Back to Plans

        </button>

      </div>
    `);
  }


  // ============================================================
  // SUBMIT PAYMENT
  // ============================================================

  function submitPayment(planId) {

    const plan = Object.values(PAYMENT_PLANS)
      .find(item => item.id === planId);

    if (!plan) return;

    const method =
      $("paymentMethod")?.value || "KPay";

    const reference =
      $("paymentReference")?.value.trim();

    const payer =
      $("paymentPayer")?.value.trim() ||
      getUserName();

    if (!reference) {

      showToast(
        "Enter your transaction/reference number."
      );

      return;
    }

    const request = {

      id:"PAY-" + Date.now(),

      userName:getUserName(),

      payer:payer,

      planId:plan.id,

      planName:plan.name,

      amount:plan.price,

      method:method,

      reference:reference,

      submittedAt:new Date().toISOString(),

      status:"pending"

    };

    saveJSON(PAYMENT_KEY,request);

    showModal(`
      <div>

        <h2>✅ Payment Submitted</h2>

        <div class="result-box">

          <h3>
            🟠 Waiting for Verification
          </h3>

          <p>
            Plan:
            <strong>${escapeHTML(plan.name)}</strong>
          </p>

          <p>
            Amount:
            <strong>${formatPlanPrice(plan.price)}</strong>
          </p>

          <p>
            Method:
            <strong>${escapeHTML(method)}</strong>
          </p>

          <p>
            Reference:
            <strong>${escapeHTML(reference)}</strong>
          </p>

        </div>

        <p>
          Admin will verify the payment and
          activate your Premium access.
        </p>

        <button
          class="primary-button"
          onclick="openPremium()">

          Done

        </button>

      </div>
    `);
  }


  // ============================================================
  // LOCAL PREMIUM ACTIVATION
  // For testing only
  // ============================================================

  function activatePremiumForCurrentUser(planId) {

    const plan = Object.values(PAYMENT_PLANS)
      .find(item => item.id === planId);

    if (!plan) return;

    const existing = getPremiumInfo();

    const start =
      existing &&
      existing.expiresAt > Date.now()
        ? existing.expiresAt
        : Date.now();

    saveJSON(
      PREMIUM_KEY,
      {
        planId:plan.id,

        planName:plan.name,

        startedAt:Date.now(),

        expiresAt:
          start +
          plan.days * 86400000
      }
    );

    const payment = getPaymentRequest();

    if (payment) {

      payment.status = "approved";

      payment.approvedAt =
        new Date().toISOString();

      saveJSON(
        PAYMENT_KEY,
        payment
      );
    }

    showToast(
      plan.name +
      " Premium activated."
    );

    openPremium();
  }


  // ============================================================
  // PROFILE
  // ============================================================

  function openProfile() {

    const user = getUser();

    const name =
      user?.name || "Aung";

    const completed =
      getCompletedLessons().length;

    const progress =
      getProgress();

    const notes =
      getNotes().length;

    const premium =
      getPremiumInfo();

    showModal(`
      <div>

        <h2>👤 My Profile</h2>

        <div class="result-box">

          <h3>
            ${escapeHTML(name)}
          </h3>

          <p>
            Business Learner
          </p>

          <p>
            Lessons Completed:
            ${completed}/${lessons.length}
          </p>

          <p>
            Learning Progress:
            ${progress}%
          </p>

          <p>
            Business Notes:
            ${notes}
          </p>

          <p>
            Premium:
            ${
              premium
                ? escapeHTML(premium.planName) +
                  " — Active"
                : "Not active"
            }
          </p>

        </div>

        <button
          class="primary-button"
          onclick="openNotes()">

          📝 My Notes

        </button>

        <button
          class="secondary-button"
          onclick="changeUserName()">

          Change Name

        </button>

      </div>
    `);
  }


  function changeUserName() {

    showModal(`
      <div>

        <h2>👤 Change Name</h2>

        ${textInput(
          "newUserName",
          "Your Name",
          getUserName()
        )}

        <button
          class="primary-button"
          onclick="saveNewUserName()">

          Save Name

        </button>

      </div>
    `);
  }


  function saveNewUserName() {

    const name =
      $("newUserName")?.value.trim();

    if (!name) {

      showToast(
        "Enter a name."
      );

      return;
    }

    const user =
      getUser() || {};

    user.name = name;

    user.lastActive =
      new Date().toISOString();

    saveUser(user);

    closeModal();

    updateUserUI();

    showToast(
      "Name updated."
    );
  }


  // ============================================================
  // NOTIFICATIONS
  // ============================================================

  function showNotification() {

    const progress =
      getProgress();

    const next =
      lessons.find(
        x => !isCompleted(x.id)
      );

    showModal(`
      <div>

        <h2>🔔 Academy Notifications</h2>

        <div class="result-box">

          <p>
            🎓 Keep learning every day.
          </p>

          <p>
            📚 ${lessons.length}
            business lessons are available.
          </p>

          <p>
            📊 Current progress:
            ${progress}%.
          </p>

          <p>
            🤖 AI Business Coach is ready.
          </p>

          <p>
            🛠️ Professional business tools
            are available.
          </p>

          <p>
            📝 Capture your next action
            in My Notes.
          </p>

          <p>
            ${
              next
                ? "➡️ Next lesson: " +
                  escapeHTML(next.title)
                : "🏆 All lessons completed!"
            }
          </p>

        </div>

      </div>
    `);
  }


  // ============================================================
  // LOGOUT
  // ============================================================

  function logoutUser() {

    localStorage.removeItem(
      USER_KEY
    );

    closeModal();

    showToast(
      "Logged out."
    );

    setTimeout(() => {

      showLoginScreen();

    },500);
  }


  // ============================================================
  // TOAST
  // ============================================================

  function showToast(message) {

    let toast =
      $("academyToast");

    if (!toast) {

      toast =
        document.createElement("div");

      toast.id =
        "academyToast";

      Object.assign(
        toast.style,
        {
          position:"fixed",

          bottom:"25px",

          left:"50%",

          transform:
            "translateX(-50%)",

          padding:"12px 20px",

          borderRadius:"10px",

          background:"#111827",

          color:"#fff",

          zIndex:"99999",

          fontSize:"14px",

          maxWidth:"90%",

          boxShadow:
            "0 10px 30px rgba(0,0,0,.2)"
        }
      );

      document.body.appendChild(
        toast
      );
    }

    toast.textContent =
      message;

    toast.style.display =
      "block";

    clearTimeout(
      toast._timer
    );

    toast._timer =
      setTimeout(
        () => {

          toast.style.display =
            "none";

        },
        2500
      );
  }


  // ============================================================
  // KEYBOARD SHORTCUTS
  // ============================================================

  document.addEventListener(
    "keydown",
    event => {

      if (event.key === "Escape") {
        closeModal();
      }

      if (
        (event.ctrlKey ||
         event.metaKey) &&
        event.key === "Enter"
      ) {

        if ($("aiInput")) {
          sendAIMessage();
        }

      }

    }
  );


  // ============================================================
  // INIT
  // ============================================================

  function init() {

    updateUserUI();

    setPage(
      "Dashboard",
      "Learn Business. Build Business. Grow Business."
    );

    const modal =
      $("appModal");

    if (modal) {

      modal.addEventListener(
        "click",
        closeModalOutside
      );

    }

    if (!isLoggedIn()) {

      setTimeout(
        showLoginScreen,
        300
      );

    }

  }



    // ============================================================
  // AUNG BUSINESS ACADEMY V10 PROFESSIONAL UPGRADE
  // ============================================================

  const V10_GOAL_KEY = "aung_business_academy_v10_goal";
  const V10_FAVORITES_KEY = "aung_business_academy_v10_favorites";
  const V10_THEME_KEY = "aung_business_academy_v10_theme";
  const V10_ACTIVITY_KEY = "aung_business_academy_v10_activity";

  function v10Today() {
    return new Date().toISOString().slice(0, 10);
  }

  function v10GetActivity() {
    return safeJSON(V10_ACTIVITY_KEY, {});
  }

  function v10SaveActivity(data) {
    saveJSON(V10_ACTIVITY_KEY, data);
  }

  function v10Track(action) {
    const data = v10GetActivity();
    const today = v10Today();

    if (!Array.isArray(data[today])) {
      data[today] = [];
    }

    data[today].push({
      action: action,
      time: Date.now()
    });

    v10SaveActivity(data);
  }

  // ------------------------------------------------------------
  // 1. PROFESSIONAL HOME DASHBOARD
  // ------------------------------------------------------------

  function openV10Home() {
    v10Track("home");

    const completed = getCompletedLessons().length;
    const total = lessons.length;
    const progress = getProgress();

    const nextLesson = lessons.find(
      lesson => !isCompleted(lesson.id)
    );

    const premium = getPremiumInfo();

    const plan = safeJSON(
      V10_GOAL_KEY,
      {
        goal: "",
        revenue: 0,
        target: 0
      }
    );

    const kpi = safeJSON(
      KPI_KEY,
      {
        target: 0,
        achievement: 0,
        customers: 0,
        orders: 0
      }
    );

    const achievement =
      Number(kpi.target) > 0
        ? (Number(kpi.achievement) / Number(kpi.target)) * 100
        : 0;

    showModal(`
      <div style="
        max-width:1150px;
        margin:auto;
        padding:4px;
      ">

        <div style="
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:15px;
          flex-wrap:wrap;
          margin-bottom:22px;
        ">

          <div>
            <div style="
              font-size:12px;
              font-weight:800;
              color:#64748b;
              letter-spacing:.12em;
            ">
              AUNG BUSINESS ACADEMY
            </div>

            <h2 style="
              margin:5px 0;
              font-size:28px;
            ">
              Welcome back, ${v9Esc(getUserName())} 👋
            </h2>

            <p style="
              margin:0;
              color:#64748b;
            ">
              Your business growth command center
            </p>
          </div>

          <div style="
            padding:10px 15px;
            border-radius:14px;
            background:#f8fafc;
            font-weight:700;
          ">
            ${
              premium
                ? "🟢 Premium Active"
                : "🔒 Free Account"
            }
          </div>

        </div>

        <!-- KPI CARDS -->

        <div style="
          display:grid;
          grid-template-columns:
          repeat(auto-fit,minmax(170px,1fr));
          gap:12px;
          margin-bottom:18px;
        ">

          <div class="result-box">
            <div style="color:#64748b;font-size:12px">
              Learning
            </div>

            <strong style="font-size:27px">
              ${completed}/${total}
            </strong>

            <div>
              ${progress}% completed
            </div>
          </div>

          <div class="result-box">
            <div style="color:#64748b;font-size:12px">
              Sales Achievement
            </div>

            <strong style="font-size:27px">
              ${achievement.toFixed(0)}%
            </strong>

            <div>
              ${formatKs(Number(kpi.achievement) || 0)}
            </div>
          </div>

          <div class="result-box">
            <div style="color:#64748b;font-size:12px">
              Customers
            </div>

            <strong style="font-size:27px">
              ${Number(kpi.customers) || 0}
            </strong>

            <div>
              Active customers
            </div>
          </div>

          <div class="result-box">
            <div style="color:#64748b;font-size:12px">
              Orders
            </div>

            <strong style="font-size:27px">
              ${Number(kpi.orders) || 0}
            </strong>

            <div>
              Total orders
            </div>
          </div>

        </div>

        <!-- PROGRESS -->

        <div class="result-box" style="margin-bottom:14px">

          <div style="
            display:flex;
            justify-content:space-between;
            align-items:center;
          ">
            <strong>📚 Academy Progress</strong>
            <strong>${progress}%</strong>
          </div>

          ${v9ProgressBar(progress)}

        </div>

        <!-- CONTINUE LEARNING -->

        <div style="
          display:grid;
          grid-template-columns:
          repeat(auto-fit,minmax(280px,1fr));
          gap:14px;
        ">

          <div class="result-box">

            <h3>📖 Continue Learning</h3>

            <p style="color:#64748b">
              ${
                nextLesson
                  ? "Next lesson: " +
                    v9Esc(nextLesson.title)
                  : "🎉 All lessons completed!"
              }
            </p>

            ${
              nextLesson
                ? v9Button(
                    "Continue →",
                    `openLesson(${nextLesson.id})`,
                    true
                  )
                : v9Button(
                    "View Lessons",
                    "openLessons()",
                    false
                  )
            }

          </div>

          <div class="result-box">

            <h3>🎯 Business Goal</h3>

            <p>
              ${
                plan.goal
                  ? v9Esc(plan.goal)
                  : "Set your main business goal."
              }
            </p>

            <p style="color:#64748b">
              Monthly Target:
              ${formatKs(Number(plan.target) || 0)}
            </p>

            ${v9Button(
              "Set Goal",
              "openV10Goal",
              false
            )}

          </div>

          <div class="result-box">

            <h3>📊 Sales Performance</h3>

            <p>
              Target:
              ${formatKs(Number(kpi.target) || 0)}
            </p>

            <p>
              Achievement:
              ${formatKs(Number(kpi.achievement) || 0)}
            </p>

            ${v9Button(
              "Open Sales Manager",
              "openKPIDashboard()",
              false
            )}

          </div>

          <div class="result-box">

            <h3>🤖 AI Business Coach</h3>

            <p style="color:#64748b">
              Get practical advice for sales,
              marketing and business growth.
            </p>

            ${v9Button(
              "Ask AI Coach",
              "openAI()",
              true
            )}

          </div>

        </div>

        <!-- QUICK ACTIONS -->

        <div style="margin-top:20px">

          <h3>⚡ Quick Actions</h3>

          <div style="
            display:flex;
            flex-wrap:wrap;
            margin-top:8px;
          ">

            ${v9Button(
              "📚 Lessons",
              "openLessons()",
              true
            )}

            ${v9Button(
              "📈 Sales",
              "openKPIDashboard()",
              false
            )}

            ${v9Button(
              "🧮 Tools",
              "openV9QuickTools()",
              false
            )}

            ${v9Button(
              "🤖 AI Coach",
              "openAI()",
              false
            )}

            ${v9Button(
              "📝 Notes",
              "openNotes()",
              false
            )}

            ${v9Button(
              "📊 Analytics",
              "openV9Analytics()",
              false
            )}

            ${v9Button(
              "👑 Premium",
              "openPremiumPlans()",
              false
            )}

            ${v9Button(
              "⚙️ Settings",
              "openSettings()",
              false
            )}

          </div>

        </div>

      </div>
    `);

    setTimeout(() => {
      const buttons =
        document.querySelectorAll(
          'button[onclick="openV10Goal"]'
        );

      buttons.forEach(button => {
        button.onclick = openV10Goal;
      });
    }, 50);
  }

  // ------------------------------------------------------------
  // 2. BUSINESS GOAL SYSTEM
  // ------------------------------------------------------------

  function openV10Goal() {

    const saved = safeJSON(
      V10_GOAL_KEY,
      {
        goal: "",
        revenue: 0,
        target: 0
      }
    );

    showModal(`
      <div style="max-width:650px;margin:auto">

        <h2>🎯 Business Goal</h2>

        <p style="color:#64748b">
          သင့်လုပ်ငန်းအတွက် အဓိက Goal တစ်ခု
          သတ်မှတ်ပါ။
        </p>

        ${textInput(
          "v10Goal",
          "Main Business Goal",
          saved.goal || ""
        )}

        ${inputField(
          "v10Revenue",
          "Current Monthly Revenue",
          Number(saved.revenue) || 0
        )}

        ${inputField(
          "v10Target",
          "Target Monthly Revenue",
          Number(saved.target) || 0
        )}

        ${v9Button(
          "💾 Save Goal",
          "saveV10Goal()",
          true
        )}

        ${v9Button(
          "← Dashboard",
          "openV10Home()",
          false
        )}

      </div>
    `);
  }

  function saveV10Goal() {

    const goal =
      $("v10Goal")?.value.trim() || "";

    const revenue =
      num("v10Revenue");

    const target =
      num("v10Target");

    saveJSON(
      V10_GOAL_KEY,
      {
        goal: goal,
        revenue: revenue,
        target: target,
        updatedAt: Date.now()
      }
    );

    v10Track("goal_saved");

    showToast("Business Goal saved successfully 🎯");

    openV10Home();
  }

  // ------------------------------------------------------------
  // 3. FAVORITE LESSONS
  // ------------------------------------------------------------

  function getV10Favorites() {
    const data = safeJSON(
      V10_FAVORITES_KEY,
      []
    );

    return Array.isArray(data)
      ? data.map(Number)
      : [];
  }

  function saveV10Favorites(list) {
    saveJSON(
      V10_FAVORITES_KEY,
      list
    );
  }

  function toggleV10Favorite(id) {

    const lessonId = Number(id);

    let favorites =
      getV10Favorites();

    if (favorites.includes(lessonId)) {

      favorites =
        favorites.filter(
          x => x !== lessonId
        );

      showToast("Removed from Favorites");

    } else {

      favorites.push(lessonId);

      showToast("Added to Favorites ⭐");
    }

    saveV10Favorites(favorites);

    v10Track(
      "favorite:" + lessonId
    );
  }

  function openV10Favorites() {

    const favorites =
      getV10Favorites();

    const favoriteLessons =
      lessons.filter(
        lesson =>
          favorites.includes(
            Number(lesson.id)
          )
      );

    showModal(`
      <div style="max-width:850px;margin:auto">

        <h2>⭐ My Favorite Lessons</h2>

        <p style="color:#64748b">
          သင်အကြိုက်ဆုံး Lesson များ
        </p>

        ${
          favoriteLessons.length
            ? favoriteLessons.map(
                lesson => `
                  <div class="result-box"
                    style="margin:10px 0">

                    <div style="
                      display:flex;
                      justify-content:space-between;
                      gap:10px;
                      align-items:center;
                    ">

                      <div>
                        <strong>
                          ${v9Esc(lesson.title)}
                        </strong>

                        <div style="
                          color:#64748b;
                          font-size:13px;
                          margin-top:4px;
                        ">
                          ${v9Esc(lesson.category)}
                          ·
                          ${v9Esc(lesson.level)}
                        </div>
                      </div>

                      <div>
                        ${v9Button(
                          "Open",
                          `openLesson(${lesson.id})`,
                          true
                        )}
                      </div>

                    </div>

                  </div>
                `
              ).join("")
            : `
              <div class="result-box">
                <h3>⭐ No Favorites Yet</h3>
                <p>
                  Lesson တွေထဲက
                  ⭐ Favorite လုပ်ထားပါ။
                </p>
              </div>
            `
        }

        ${v9Button(
          "📚 All Lessons",
          "openLessons()",
          false
        )}

        ${v9Button(
          "← Dashboard",
          "openV10Home()",
          false
        )}

      </div>
    `);
  }

  // ------------------------------------------------------------
  // 4. MY LEARNING REPORT
  // ------------------------------------------------------------

  function openV10LearningReport() {

    const completed =
      getCompletedLessons().length;

    const total =
      lessons.length;

    const progress =
      getProgress();

    const favorites =
      getV10Favorites().length;

    const activeDays =
      typeof getV9ActiveDays === "function"
        ? getV9ActiveDays().length
        : 0;

    const streak =
      typeof getV9Streak === "function"
        ? getV9Streak()
        : 0;

    const remaining =
      Math.max(
        0,
        total - completed
      );

    showModal(`
      <div style="max-width:900px;margin:auto">

        <h2>📊 My Learning Report</h2>

        <p style="color:#64748b">
          Your complete academy learning summary
        </p>

        <div style="
          display:grid;
          grid-template-columns:
          repeat(auto-fit,minmax(170px,1fr));
          gap:12px;
          margin:18px 0;
        ">

          <div class="result-box">
            <div>Completed</div>
            <strong style="font-size:28px">
              ${completed}
            </strong>
          </div>

          <div class="result-box">
            <div>Remaining</div>
            <strong style="font-size:28px">
              ${remaining}
            </strong>
          </div>

          <div class="result-box">
            <div>Progress</div>
            <strong style="font-size:28px">
              ${progress}%
            </strong>
          </div>

          <div class="result-box">
            <div>Favorites</div>
            <strong style="font-size:28px">
              ⭐ ${favorites}
            </strong>
          </div>

          <div class="result-box">
            <div>Active Days</div>
            <strong style="font-size:28px">
              ${activeDays}
            </strong>
          </div>

          <div class="result-box">
            <div>Streak</div>
            <strong style="font-size:28px">
              🔥 ${streak}
            </strong>
          </div>

        </div>

        <div class="result-box">

          <h3>📚 Overall Progress</h3>

          ${v9ProgressBar(progress)}

          <p style="margin-top:10px">
            ${completed} of ${total}
            lessons completed.
          </p>

        </div>

        <div style="margin-top:15px">

          ${v9Button(
            "📚 Continue Learning",
            "openLessons()",
            true
          )}

          ${v9Button(
            "⭐ Favorites",
            "openV10Favorites()",
            false
          )}

          ${v9Button(
            "← Dashboard",
            "openV10Home()",
            false
          )}

        </div>

      </div>
    `);
  }

  // ------------------------------------------------------------
  // 5. BUSINESS SNAPSHOT
  // ------------------------------------------------------------

  function openV10BusinessSnapshot() {

    const kpi = safeJSON(
      KPI_KEY,
      {
        target: 0,
        achievement: 0,
        customers: 0,
        orders: 0
      }
    );

    const target =
      Number(kpi.target) || 0;

    const achievement =
      Number(kpi.achievement) || 0;

    const customers =
      Number(kpi.customers) || 0;

    const orders =
      Number(kpi.orders) || 0;

    const achievementPct =
      target > 0
        ? achievement / target * 100
        : 0;

    const avgOrder =
      orders > 0
        ? achievement / orders
        : 0;

    showModal(`
      <div style="max-width:950px;margin:auto">

        <h2>📈 Business Snapshot</h2>

        <p style="color:#64748b">
          လက်ရှိ Business Performance ကို
          အမြန်ကြည့်နိုင်ပါတယ်။
        </p>

        <div style="
          display:grid;
          grid-template-columns:
          repeat(auto-fit,minmax(190px,1fr));
          gap:12px;
          margin:18px 0;
        ">

          <div class="result-box">
            <div>Sales Target</div>
            <strong style="font-size:24px">
              ${formatKs(target)}
            </strong>
          </div>

          <div class="result-box">
            <div>Sales Achievement</div>
            <strong style="font-size:24px">
              ${formatKs(achievement)}
            </strong>
          </div>

          <div class="result-box">
            <div>Achievement %</div>
            <strong style="font-size:24px">
              ${achievementPct.toFixed(1)}%
            </strong>
          </div>

          <div class="result-box">
            <div>Customers</div>
            <strong style="font-size:24px">
              ${customers}
            </strong>
          </div>

          <div class="result-box">
            <div>Orders</div>
            <strong style="font-size:24px">
              ${orders}
            </strong>
          </div>

          <div class="result-box">
            <div>Average Order Value</div>
            <strong style="font-size:24px">
              ${formatKs(avgOrder)}
            </strong>
          </div>

        </div>

        <div class="result-box">

          <h3>📊 Target Progress</h3>

          ${v9ProgressBar(
            Math.min(100, achievementPct)
          )}

          <p style="margin-top:10px">
            ${
              achievementPct >= 100
                ? "🎉 Target achieved!"
                : achievementPct >= 80
                  ? "🟢 Almost there. Push for the final gap."
                  : achievementPct >= 50
                    ? "🟡 Good progress. Increase execution."
                    : "🔴 Strong action is needed."
            }
          </p>

        </div>

        <div style="margin-top:15px">

          ${v9Button(
            "📈 Sales Manager",
            "openKPIDashboard()",
            true
          )}

          ${v9Button(
            "🧭 Health Check",
            "openV9BusinessHealth()",
            false
          )}

          ${v9Button(
            "← Dashboard",
            "openV10Home()",
            false
          )}

        </div>

      </div>
    `);
  }

  // ------------------------------------------------------------
  // 6. V10 MENU
  // ------------------------------------------------------------

  function openV10Menu() {

    showModal(`
      <div style="max-width:800px;margin:auto">

        <h2>🚀 Aung Business Academy V10</h2>

        <p style="color:#64748b">
          Professional Business Learning & Management System
        </p>

        <div class="quick-grid">

          ${v9Button(
            "🏠 Home Dashboard",
            "openV10Home()",
            true
          )}

          ${v9Button(
            "📚 Lessons",
            "openLessons()",
            false
          )}

          ${v9Button(
            "⭐ Favorites",
            "openV10Favorites()",
            false
          )}

          ${v9Button(
            "📊 Learning Report",
            "openV10LearningReport()",
            false
          )}

          ${v9Button(
            "📈 Business Snapshot",
            "openV10BusinessSnapshot()",
            false
          )}

          ${v9Button(
            "🎯 Business Goal",
            "openV10Goal()",
            false
          )}

          ${v9Button(
            "📊 Sales Manager",
            "openKPIDashboard()",
            false
          )}

          ${v9Button(
            "🧮 Business Tools",
            "openV9QuickTools()",
            false
          )}

          ${v9Button(
            "🤖 AI Coach",
            "openAI()",
            false
          )}

          ${v9Button(
            "👑 Premium",
            "openPremiumPlans()",
            false
          )}

          ${v9Button(
            "⚙️ Settings",
            "openSettings()",
            false
          )}

        </div>

      </div>
    `);
  }

  // ------------------------------------------------------------
  // 7. ADD FAVORITE BUTTON TO LESSON VIEW
  // ------------------------------------------------------------

  const v10OriginalShowLesson =
    window.showLesson;

  function v10RefreshLessonFavoriteButtons() {

    const buttons =
      document.querySelectorAll(
        "[data-v10-favorite-lesson]"
      );

    buttons.forEach(button => {

      const id =
        Number(
          button.getAttribute(
            "data-v10-favorite-lesson"
          )
        );

      const favorites =
        getV10Favorites();

      button.textContent =
        favorites.includes(id)
          ? "⭐ Favorited"
          : "☆ Add Favorite";

    });
  }

  // ------------------------------------------------------------
  /* ============================================================
   AUNG BUSINESS ACADEMY
   V11 QUIZ + FINAL EXAM + CERTIFICATE
   SAFE ADD-ON
   Does not replace existing V9/V10 features
   ============================================================ */

const V11_QUIZ_KEY = "aung_business_academy_v11_quiz";
const V11_EXAM_KEY = "aung_business_academy_v11_exam";
const V11_CERT_KEY = "aung_business_academy_v11_certificate";

/* ------------------------------------------------------------
   V11 LESSON TITLES
   ------------------------------------------------------------ */

const V11_LESSON_TITLES = [
  "Business Fundamentals",
  "Business Model",
  "Market Research",
  "Customer Finding",
  "Marketing Fundamentals",
  "Digital Marketing",
  "Content Marketing",
  "Sales Fundamentals",
  "Sales Strategy",
  "Negotiation Skills",
  "Sales Management",
  "Leadership Fundamentals",
  "Strategic Thinking",
  "Decision Making",
  "Team Leadership",
  "Brand Fundamentals",
  "Brand Positioning",
  "People Management",
  "Recruitment",
  "Performance Management",
  "Coaching",
  "Revenue Management",
  "Profit & Loss",
  "Cash Flow",
  "Financial Analysis",
  "Time Management",
  "Goal Setting",
  "Daily Planning",
  "Business Growth Strategy",
  "Business Execution"
];

/* ------------------------------------------------------------
   V11 QUIZ BANK
   5 questions for every lesson
   ------------------------------------------------------------ */

const V11_QUIZ_BANK = {

  1: [
    {
      q: "What is the main purpose of a business?",
      a: ["To create value for customers and earn sustainable profit", "To spend money", "To avoid customers", "To copy competitors"],
      c: 0
    },
    {
      q: "What should a business understand first?",
      a: ["Customer needs", "Office decoration", "Employee hobbies", "Competitor salaries"],
      c: 0
    },
    {
      q: "What does revenue mean?",
      a: ["Money generated from sales", "Only business expenses", "Employee salary", "Company debt"],
      c: 0
    },
    {
      q: "Why is customer value important?",
      a: ["It helps customers choose and stay with the business", "It increases office size", "It removes competition", "It eliminates all costs"],
      c: 0
    },
    {
      q: "A strong business foundation should include:",
      a: ["Customers, value, revenue and execution", "Only advertising", "Only employees", "Only products"],
      c: 0
    }
  ],

  2: [
    {
      q: "What is a business model?",
      a: ["How a business creates, delivers and captures value", "A company logo", "An employee list", "A sales receipt"],
      c: 0
    },
    {
      q: "Which is part of a business model?",
      a: ["Customer segments", "Office furniture only", "Personal hobbies", "Employee birthdays"],
      c: 0
    },
    {
      q: "Why should a business model be clear?",
      a: ["To understand how the business makes money", "To avoid customers", "To increase paperwork", "To remove planning"],
      c: 0
    },
    {
      q: "A revenue stream explains:",
      a: ["Where business income comes from", "Where employees live", "Where products are stored only", "Competitor locations"],
      c: 0
    },
    {
      q: "A good business model should be:",
      a: ["Practical and financially sustainable", "Impossible to execute", "Focused only on cost", "Focused only on competitors"],
      c: 0
    }
  ],

  3: [
    {
      q: "What is market research?",
      a: ["Collecting and analyzing market information", "Guessing customer names", "Only designing products", "Only hiring staff"],
      c: 0
    },
    {
      q: "What should market research identify?",
      a: ["Customers, competitors and market trends", "Employee birthdays", "Office furniture", "Personal hobbies"],
      c: 0
    },
    {
      q: "Why analyze competitors?",
      a: ["To understand their strengths, weaknesses and positioning", "To copy everything", "To avoid customers", "To stop selling"],
      c: 0
    },
    {
      q: "Customer research helps identify:",
      a: ["Needs, behavior and buying preferences", "Office rent only", "Employee salary only", "Tax numbers only"],
      c: 0
    },
    {
      q: "Good market research should be based on:",
      a: ["Reliable information and evidence", "Rumors only", "Guessing only", "One person's opinion"],
      c: 0
    }
  ],

  4: [
    {
      q: "What is customer finding?",
      a: ["Identifying potential customers for a product or service", "Finding employees", "Finding office space", "Finding suppliers only"],
      c: 0
    },
    {
      q: "What is a target customer?",
      a: ["A customer group most likely to need and buy the offering", "Any random person", "Only competitors", "Only employees"],
      c: 0
    },
    {
      q: "Why define customer segments?",
      a: ["To focus sales and marketing efforts", "To increase confusion", "To avoid selling", "To remove customer data"],
      c: 0
    },
    {
      q: "A customer profile can include:",
      a: ["Needs, behavior and purchasing power", "Only name", "Only phone model", "Only favorite color"],
      c: 0
    },
    {
      q: "Effective customer finding starts with:",
      a: ["Understanding who has the problem your business solves", "Calling everyone randomly", "Ignoring the market", "Copying competitors"],
      c: 0
    }
  ],

  5: [
    {
      q: "What is marketing?",
      a: ["Creating, communicating and delivering value to customers", "Only selling", "Only advertising", "Only discounting"],
      c: 0
    },
    {
      q: "The marketing mix commonly includes:",
      a: ["Product, Price, Place and Promotion", "People, Office, Car and Phone", "Profit, Tax, Salary and Rent", "Sales, Debt, Loan and Cash"],
      c: 0
    },
    {
      q: "Why is positioning important?",
      a: ["It defines how customers perceive the offering", "It controls employee attendance", "It sets office rent", "It removes competitors"],
      c: 0
    },
    {
      q: "A marketing strategy should focus on:",
      a: ["Target customers and value proposition", "Only internal meetings", "Only company expenses", "Only competitors"],
      c: 0
    },
    {
      q: "Good marketing should ultimately support:",
      a: ["Customer value and business growth", "More paperwork", "Higher internal costs", "Less customer contact"],
      c: 0
    }
  ],

  6: [
    {
      q: "What is digital marketing?",
      a: ["Marketing through digital channels and technologies", "Only newspaper advertising", "Only outdoor posters", "Only face-to-face selling"],
      c: 0
    },
    {
      q: "Which is a digital marketing channel?",
      a: ["Social media", "Warehouse", "Office desk", "Delivery truck"],
      c: 0
    },
    {
      q: "Why track digital marketing results?",
      a: ["To understand performance and improve ROI", "To avoid customers", "To increase costs", "To remove content"],
      c: 0
    },
    {
      q: "A useful digital metric is:",
      a: ["Conversion rate", "Office size", "Employee age", "Parking spaces"],
      c: 0
    },
    {
      q: "Effective digital marketing should be:",
      a: ["Targeted, measurable and customer-focused", "Random and unmeasured", "Only expensive", "Only promotional"],
      c: 0
    }
  ],

  7: [
    {
      q: "What is content marketing?",
      a: ["Creating useful content to attract and engage customers", "Only cold calling", "Only discounting", "Only accounting"],
      c: 0
    },
    {
      q: "Good content should provide:",
      a: ["Useful value to the target audience", "Confusion", "Unrelated information", "Only company slogans"],
      c: 0
    },
    {
      q: "Which can be content marketing?",
      a: ["Educational videos", "Warehouse counting", "Salary processing", "Office cleaning"],
      c: 0
    },
    {
      q: "A content strategy should define:",
      a: ["Audience, topics, channels and goals", "Only logo size", "Only employee names", "Only office location"],
      c: 0
    },
    {
      q: "Consistent content helps build:",
      a: ["Trust and brand awareness", "More inventory waste", "Higher office rent", "Less customer interest"],
      c: 0
    }
  ],

  8: [
    {
      q: "What is the purpose of selling?",
      a: ["Solve customer needs while creating business value", "Pressure everyone to buy", "Only reduce prices", "Avoid customers"],
      c: 0
    },
    {
      q: "A strong salesperson should first:",
      a: ["Understand customer needs", "Talk continuously", "Offer the biggest discount", "Ignore objections"],
      c: 0
    },
    {
      q: "What is a sales pipeline?",
      a: ["Stages prospects move through toward purchase", "A delivery truck", "A warehouse", "A price list"],
      c: 0
    },
    {
      q: "Good selling requires:",
      a: ["Listening, questioning and value communication", "Only talking", "Only discounting", "Only product knowledge"],
      c: 0
    },
    {
      q: "A sales conversion measures:",
      a: ["How many prospects become customers", "Employee attendance", "Inventory value only", "Office expenses"],
      c: 0
    }
  ],

  9: [
    {
      q: "What is sales strategy?",
      a: ["A planned approach to achieve sales objectives", "A random sales activity", "A salary plan", "A warehouse plan"],
      c: 0
    },
    {
      q: "Sales strategy should align with:",
      a: ["Business goals and customer needs", "Employee hobbies", "Office design", "Competitor rumors"],
      c: 0
    },
    {
      q: "A sales target should be:",
      a: ["Specific and measurable", "Impossible", "Unknown", "Random"],
      c: 0
    },
    {
      q: "Territory planning helps:",
      a: ["Allocate sales resources effectively", "Remove customers", "Increase travel without purpose", "Stop reporting"],
      c: 0
    },
    {
      q: "Sales strategy should be reviewed when:",
      a: ["Market conditions or performance changes", "Never", "Only at company parties", "Only after resignation"],
      c: 0
    }
  ],

  10: [
    {
      q: "What is negotiation?",
      a: ["A process of reaching an agreement between parties", "A price list", "A sales report", "A complaint"],
      c: 0
    },
    {
      q: "Good negotiation starts with:",
      a: ["Understanding interests and objectives", "Threatening the other party", "Giving away everything", "Ignoring information"],
      c: 0
    },
    {
      q: "A win-win negotiation aims to:",
      a: ["Create acceptable value for both parties", "Make one side lose", "Avoid agreement", "Increase conflict"],
      c: 0
    },
    {
      q: "Before negotiation, you should know your:",
      a: ["Target and minimum acceptable position", "Competitor's salary", "Office size", "Employee hobbies"],
      c: 0
    },
    {
      q: "Effective negotiation requires:",
      a: ["Listening, preparation and clear communication", "Anger", "Pressure only", "Silence only"],
      c: 0
    }
  ],

  11: [
    {
      q: "What is sales management?",
      a: ["Planning, leading and controlling sales activities", "Only selling products", "Only hiring", "Only accounting"],
      c: 0
    },
    {
      q: "A sales manager should monitor:",
      a: ["Targets, pipeline, productivity and execution", "Only attendance", "Only office expenses", "Only competitor salaries"],
      c: 0
    },
    {
      q: "Why conduct field visits?",
      a: ["To understand execution and coach the team", "To avoid customers", "To reduce communication", "To replace reporting"],
      c: 0
    },
    {
      q: "A good sales review should be:",
      a: ["Data-driven and action-oriented", "Only criticism", "Only informal", "Without targets"],
      c: 0
    },
    {
      q: "Sales leadership should focus on:",
      a: ["People, numbers and execution", "Numbers only", "People only", "Products only"],
      c: 0
    }
  ],

  12: [
    {
      q: "What is leadership?",
      a: ["Influencing and guiding people toward a shared goal", "Giving orders only", "Controlling every detail", "Avoiding decisions"],
      c: 0
    },
    {
      q: "Good leaders create:",
      a: ["Clear direction and accountability", "Fear only", "Confusion", "No expectations"],
      c: 0
    },
    {
      q: "Effective delegation means:",
      a: ["Giving responsibility with clear expectations and support", "Giving work without instructions", "Doing everything yourself", "Avoiding ownership"],
      c: 0
    },
    {
      q: "Trust is built through:",
      a: ["Consistency, honesty and accountability", "Threats", "Silence", "Favoritism"],
      c: 0
    },
    {
      q: "A leader should develop:",
      a: ["People and performance", "Only reports", "Only products", "Only budgets"],
      c: 0
    }
  ],

  13: [
    {
      q: "What is strategic thinking?",
      a: ["Understanding the bigger picture and long-term direction", "Only daily tasks", "Only reacting", "Avoiding planning"],
      c: 0
    },
    {
      q: "Strategy should consider:",
      a: ["Goals, market, capabilities and competition", "Only office design", "Only employee hobbies", "Only short-term discounts"],
      c: 0
    },
    {
      q: "A strategic priority is:",
      a: ["An important area requiring focused resources", "Every small task", "An optional activity", "A random idea"],
      c: 0
    },
    {
      q: "Strategic thinking helps leaders:",
      a: ["Make better long-term choices", "Avoid decisions", "Ignore risks", "Remove goals"],
      c: 0
    },
    {
      q: "A strategy without execution is:",
      a: ["Unlikely to create results", "Always successful", "A financial report", "A customer segment"],
      c: 0
    }
  ],

  14: [
    {
      q: "What is decision making?",
      a: ["Choosing an action among alternatives", "Avoiding all choices", "Only asking others", "Only collecting data"],
      c: 0
    },
    {
      q: "Good decisions should use:",
      a: ["Relevant information and clear objectives", "Rumors only", "Emotion only", "No evidence"],
      c: 0
    },
    {
      q: "What is a risk?",
      a: ["Potential uncertainty that may affect results", "Guaranteed profit", "A customer", "A product"],
      c: 0
    },
    {
      q: "A decision matrix can help:",
      a: ["Compare alternatives systematically", "Increase confusion", "Remove choices", "Replace customers"],
      c: 0
    },
    {
      q: "After making a decision, leaders should:",
      a: ["Monitor results and adjust when needed", "Never review", "Ignore outcomes", "Blame others"],
      c: 0
    }
  ],

  15: [
    {
      q: "What is team leadership?",
      a: ["Guiding a group toward shared objectives", "Doing every task alone", "Avoiding communication", "Only checking attendance"],
      c: 0
    },
    {
      q: "High-performing teams need:",
      a: ["Clear goals, roles and accountability", "Confusion", "No feedback", "No goals"],
      c: 0
    },
    {
      q: "Team communication should be:",
      a: ["Clear, regular and constructive", "Rare and unclear", "Only written", "Only negative"],
      c: 0
    },
    {
      q: "Team conflict should be:",
      a: ["Addressed professionally and early", "Ignored forever", "Encouraged", "Hidden"],
      c: 0
    },
    {
      q: "Recognition can help improve:",
      a: ["Engagement and motivation", "Confusion", "Costs only", "Inventory"],
      c: 0
    }
  ],

  16: [
    {
      q: "What is a brand?",
      a: ["The overall perception and identity associated with an offering", "Only a logo", "Only a product", "Only a slogan"],
      c: 0
    },
    {
      q: "Brand consistency helps build:",
      a: ["Recognition and trust", "Confusion", "Higher costs only", "Lower awareness"],
      c: 0
    },
    {
      q: "A strong brand should have:",
      a: ["Clear identity and value proposition", "No positioning", "Random messages", "No customer focus"],
      c: 0
    },
    {
      q: "Brand promise means:",
      a: ["The value and experience customers can expect", "Employee salary", "Product cost", "Office policy"],
      c: 0
    },
    {
      q: "Brand building is:",
      a: ["A long-term process", "A one-day activity", "Only a logo change", "Only advertising"],
      c: 0
    }
  ],

  17: [
    {
      q: "What is brand positioning?",
      a: ["How a brand is intended to be perceived relative to alternatives", "Where the office is located", "Product storage", "Employee ranking"],
      c: 0
    },
    {
      q: "Effective positioning should be:",
      a: ["Clear, relevant and differentiated", "Confusing", "Identical to competitors", "Unrelated to customers"],
      c: 0
    },
    {
      q: "Differentiation means:",
      a: ["Creating meaningful reasons to choose your brand", "Copying competitors", "Lowering quality", "Avoiding customers"],
      c: 0
    },
    {
      q: "Positioning should be based on:",
      a: ["Customer needs and competitive context", "Only company preference", "Only office design", "Only employee opinion"],
      c: 0
    },
    {
      q: "Strong positioning helps:",
      a: ["Customers understand why the brand is valuable", "Increase confusion", "Remove value", "Avoid marketing"],
      c: 0
    }
  ],

  18: [
    {
      q: "What is people management?",
      a: ["Managing, developing and supporting employees", "Only payroll", "Only recruitment", "Only attendance"],
      c: 0
    },
    {
      q: "Good people management includes:",
      a: ["Communication, development and accountability", "Only control", "Only criticism", "No feedback"],
      c: 0
    },
    {
      q: "Employee motivation can be improved through:",
      a: ["Recognition, growth and meaningful goals", "Fear only", "Confusion", "No communication"],
      c: 0
    },
    {
      q: "Performance conversations should be:",
      a: ["Regular and constructive", "Only once a year", "Always negative", "Avoided"],
      c: 0
    },
    {
      q: "A manager should treat employees with:",
      a: ["Respect and fairness", "Favoritism", "Fear", "Silence"],
      c: 0
    }
  ],

  19: [
    {
      q: "What is recruitment?",
      a: ["Finding and selecting suitable candidates", "Training customers", "Selling products", "Managing inventory"],
      c: 0
    },
    {
      q: "A good job description should include:",
      a: ["Responsibilities, requirements and expectations", "Only salary", "Only company name", "Only location"],
      c: 0
    },
    {
      q: "Interview questions should assess:",
      a: ["Skills, experience and suitability", "Personal gossip", "Unrelated hobbies", "Family details"],
      c: 0
    },
    {
      q: "The best candidate is not always:",
      a: ["The person with the most experience", "The suitable person", "The qualified person", "The capable person"],
      c: 0
    },
    {
      q: "Good recruitment reduces:",
      a: ["Hiring mistakes", "Customer value", "Team performance", "Business growth"],
      c: 0
    }
  ],

  20: [
    {
      q: "What is performance management?",
      a: ["Managing performance toward agreed objectives", "Only giving warnings", "Only salary payment", "Only recruitment"],
      c: 0
    },
    {
      q: "KPIs should be:",
      a: ["Relevant and measurable", "Random", "Impossible", "Hidden"],
      c: 0
    },
    {
      q: "Performance reviews should focus on:",
      a: ["Results, behaviors and development", "Only mistakes", "Only attendance", "Only salary"],
      c: 0
    },
    {
      q: "A performance gap means:",
      a: ["Difference between expected and actual performance", "A promotion", "A customer complaint", "A product discount"],
      c: 0
    },
    {
      q: "Performance improvement should include:",
      a: ["Clear actions and follow-up", "Only criticism", "No support", "No measurement"],
      c: 0
    }
  ],

  21: [
    {
      q: "What is coaching?",
      a: ["Helping people improve through guidance and questioning", "Giving orders only", "Doing their work", "Ignoring problems"],
      c: 0
    },
    {
      q: "Effective coaching starts with:",
      a: ["Understanding the current situation", "Giving punishment", "Talking continuously", "Avoiding questions"],
      c: 0
    },
    {
      q: "A coach should encourage:",
      a: ["Ownership and self-reflection", "Dependence", "Fear", "Silence"],
      c: 0
    },
    {
      q: "Good feedback should be:",
      a: ["Specific, timely and constructive", "Personal and emotional", "Vague", "Always negative"],
      c: 0
    },
    {
      q: "The goal of coaching is:",
      a: ["Improve capability and performance", "Control people", "Increase paperwork", "Avoid accountability"],
      c: 0
    }
  ],

  22: [
    {
      q: "What is revenue management?",
      a: ["Managing revenue opportunities to improve business performance", "Only collecting cash", "Only setting salaries", "Only reducing costs"],
      c: 0
    },
    {
      q: "Revenue can increase through:",
      a: ["More customers, higher value and better conversion", "Only more expenses", "Less selling", "Fewer customers"],
      c: 0
    },
    {
      q: "Average transaction value measures:",
      a: ["Average revenue per transaction", "Employee salary", "Inventory quantity", "Office rent"],
      c: 0
    },
    {
      q: "Revenue analysis should examine:",
      a: ["Volume, price, mix and customer behavior", "Only office costs", "Only attendance", "Only branding"],
      c: 0
    },
    {
      q: "Healthy revenue growth should be:",
      a: ["Sustainable and profitable", "Based only on discounts", "Always unplanned", "Without customers"],
      c: 0
    }
  ],

  23: [
    {
      q: "What is profit?",
      a: ["Revenue minus expenses", "Revenue plus expenses", "Expenses only", "Sales volume only"],
      c: 0
    },
    {
      q: "P&L stands for:",
      a: ["Profit and Loss", "Price and Logistics", "People and Leadership", "Planning and Learning"],
      c: 0
    },
    {
      q: "Gross profit is generally:",
      a: ["Revenue minus cost of goods sold", "Revenue plus salary", "Cash minus customers", "Sales minus tax only"],
      c: 0
    },
    {
      q: "Why monitor expenses?",
      a: ["To protect profitability", "To reduce customers", "To stop sales", "To remove products"],
      c: 0
    },
    {
      q: "A profitable business needs:",
      a: ["Healthy revenue and controlled costs", "Only high sales volume", "Only low expenses", "Only high prices"],
      c: 0
    }
  ],

  24: [
    {
      q: "What is cash flow?",
      a: ["Movement of cash into and out of a business", "Profit only", "Sales only", "Inventory only"],
      c: 0
    },
    {
      q: "Positive cash flow means:",
      a: ["More cash is coming in than going out during the period", "No sales", "More expenses only", "No customers"],
      c: 0
    },
    {
      q: "Why can a profitable business have cash problems?",
      a: ["Timing of collections and payments can differ", "Profit is always cash", "Customers never pay", "Costs do not exist"],
      c: 0
    },
    {
      q: "Accounts receivable represents:",
      a: ["Money customers owe the business", "Cash in hand", "Inventory", "Employee salary"],
      c: 0
    },
    {
      q: "Cash flow management requires:",
      a: ["Monitoring collections, payments and timing", "Ignoring invoices", "Avoiding budgets", "Only tracking sales"],
      c: 0
    }
  ],

  25: [
    {
      q: "What is financial analysis?",
      a: ["Evaluating financial information to support decisions", "Only counting cash", "Only selling", "Only hiring"],
      c: 0
    },
    {
      q: "A financial ratio can help:",
      a: ["Compare business performance", "Choose employee uniforms", "Find office space", "Write advertisements"],
      c: 0
    },
    {
      q: "Profit margin measures:",
      a: ["Profit relative to revenue", "Employees per office", "Customers per phone", "Inventory per employee"],
      c: 0
    },
    {
      q: "Financial trends help identify:",
      a: ["Changes in performance over time", "Employee hobbies", "Office design", "Customer birthdays"],
      c: 0
    },
    {
      q: "Financial analysis should support:",
      a: ["Better business decisions", "More paperwork", "Less planning", "Random actions"],
      c: 0
    }
  ],

  26: [
    {
      q: "What is time management?",
      a: ["Planning and controlling how time is used", "Working all day without planning", "Avoiding priorities", "Doing everything at once"],
      c: 0
    },
    {
      q: "A priority is:",
      a: ["An important task requiring focused attention", "Any random task", "An optional distraction", "A break"],
      c: 0
    },
    {
      q: "Time blocking means:",
      a: ["Allocating specific time for specific activities", "Avoiding schedules", "Doing many things at once", "Ignoring deadlines"],
      c: 0
    },
    {
      q: "Delegation can help managers:",
      a: ["Use time for higher-value responsibilities", "Avoid leadership", "Increase confusion", "Stop teamwork"],
      c: 0
    },
    {
      q: "Effective time management starts with:",
      a: ["Clear priorities and goals", "More meetings", "No plan", "Constant interruptions"],
      c: 0
    }
  ],

  27: [
    {
      q: "What is goal setting?",
      a: ["Defining desired outcomes and how to achieve them", "Only making wishes", "Avoiding targets", "Only planning meetings"],
      c: 0
    },
    {
      q: "SMART goals are:",
      a: ["Specific, Measurable, Achievable, Relevant and Time-bound", "Simple, Modern, Active, Rapid and Temporary", "Sales, Marketing, Accounting, Revenue and Training", "None"],
      c: 0
    },
    {
      q: "Why measure goals?",
      a: ["To know whether progress is being made", "To create confusion", "To avoid accountability", "To stop execution"],
      c: 0
    },
    {
      q: "A good goal should have:",
      a: ["A clear deadline", "No deadline", "No owner", "No measurement"],
      c: 0
    },
    {
      q: "Goals should connect to:",
      a: ["Business priorities", "Random activities", "Office decoration", "Employee hobbies"],
      c: 0
    }
  ],

  28: [
    {
      q: "What is daily planning?",
      a: ["Organizing key activities for the day", "Working randomly", "Avoiding priorities", "Only checking email"],
      c: 0
    },
    {
      q: "A daily plan should identify:",
      a: ["Top priorities and actions", "Every possible distraction", "Only meetings", "Only breaks"],
      c: 0
    },
    {
      q: "Why choose top priorities?",
      a: ["To focus effort on high-impact work", "To make more lists", "To avoid results", "To increase distractions"],
      c: 0
    },
    {
      q: "At the end of the day, review:",
      a: ["Completed work and unfinished priorities", "Only messages", "Only breaks", "Nothing"],
      c: 0
    },
    {
      q: "Daily planning improves:",
      a: ["Focus and execution", "Confusion", "Delay", "Unnecessary work"],
      c: 0
    }
  ],

  29: [
    {
      q: "What is business growth?",
      a: ["Increasing business value, revenue or market presence sustainably", "Only increasing expenses", "Only hiring", "Only opening offices"],
      c: 0
    },
    {
      q: "Growth can come from:",
      a: ["More customers, new products or new markets", "Only discounts", "Only costs", "Only reducing staff"],
      c: 0
    },
    {
      q: "Before scaling, a business should:",
      a: ["Understand its economics and operational capacity", "Ignore costs", "Ignore customers", "Avoid planning"],
      c: 0
    },
    {
      q: "Sustainable growth requires:",
      a: ["Profitable economics and strong execution", "Only high sales", "Only advertising", "Only borrowing"],
      c: 0
    },
    {
      q: "Growth strategy should consider:",
      a: ["Market opportunity, resources and risks", "Only competitors", "Only office size", "Only employee count"],
      c: 0
    }
  ],

  30: [
    {
      q: "What is business execution?",
      a: ["Turning plans and strategies into measurable actions and results", "Only planning", "Only meetings", "Only reporting"],
      c: 0
    },
    {
      q: "Execution requires:",
      a: ["Clear priorities, ownership and follow-up", "Only ideas", "No accountability", "No measurement"],
      c: 0
    },
    {
      q: "Why track execution?",
      a: ["To know whether actions are producing results", "To create paperwork", "To avoid decisions", "To stop planning"],
      c: 0
    },
    {
      q: "Accountability means:",
      a: ["Taking responsibility for agreed outcomes", "Blaming others", "Avoiding tasks", "Ignoring results"],
      c: 0
    },
    {
      q: "The best strategy is valuable when:",
      a: ["It is executed consistently and improved from results", "It stays on paper", "Nobody owns it", "It has no target"],
      c: 0
    }
  ]
};


/* ------------------------------------------------------------
   V11 SAFE STORAGE
   ------------------------------------------------------------ */

function v11Get(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (e) {
    return fallback;
  }
}

function v11Set(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn("V11 storage error:", e);
  }
}

function v11Escape(value) {
  if (typeof escapeHTML === "function") {
    return escapeHTML(String(value));
  }

  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


/* ------------------------------------------------------------
   QUIZ STATUS
   ------------------------------------------------------------ */

function v11GetQuizData() {
  return v11Get(V11_QUIZ_KEY, {});
}

function v11GetExamData() {
  return v11Get(V11_EXAM_KEY, {
    attempts: 0,
    bestScore: 0,
    passed: false
  });
}

function v11GetCertificate() {
  return v11Get(V11_CERT_KEY, null);
}


/* ------------------------------------------------------------
   LESSON QUIZ
   ------------------------------------------------------------ */

function openV11Quiz(lessonNumber) {

  lessonNumber = Number(lessonNumber);

  if (
    !lessonNumber ||
    lessonNumber < 1 ||
    lessonNumber > 30
  ) {
    if (typeof showToast === "function") {
      showToast("Invalid lesson.");
    }
    return;
  }

  const questions = V11_QUIZ_BANK[lessonNumber];

  if (!questions || questions.length === 0) {
    if (typeof showToast === "function") {
      showToast("Quiz is not available yet.");
    }
    return;
  }

  const title =
    V11_LESSON_TITLES[lessonNumber - 1] ||
    "Lesson " + lessonNumber;

  let html = `
    <div class="v11-quiz-container">

      <div class="v11-quiz-header">
        <div class="v11-badge">📝 LESSON QUIZ</div>
        <h2>Lesson ${lessonNumber}: ${v11Escape(title)}</h2>
        <p>Answer all 5 questions and check your knowledge.</p>
      </div>

      <form id="v11QuizForm">
  `;

  questions.forEach((item, index) => {

    html += `
      <div class="v11-question-card">

        <div class="v11-question-number">
          Question ${index + 1} of ${questions.length}
        </div>

        <h3>${v11Escape(item.q)}</h3>

        <div class="v11-options">
    `;

    item.a.forEach((answer, answerIndex) => {

      html += `
        <label class="v11-option">
          <input
            type="radio"
            name="v11q${index}"
            value="${answerIndex}"
          >
          <span>${v11Escape(answer)}</span>
        </label>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  html += `
        <button
          type="button"
          class="v11-main-button"
          onclick="submitV11Quiz(${lessonNumber})"
        >
          ✅ Submit Quiz
        </button>

      </form>

    </div>
  `;

  if (typeof showModal === "function") {
    showModal(
      "Lesson Quiz",
      html
    );
  } else {
    alert("Quiz system is ready.");
  }
}


/* ------------------------------------------------------------
   SUBMIT LESSON QUIZ
   ------------------------------------------------------------ */

function submitV11Quiz(lessonNumber) {

  lessonNumber = Number(lessonNumber);

  const questions = V11_QUIZ_BANK[lessonNumber];

  if (!questions) return;

  let score = 0;
  let answered = 0;

  questions.forEach(function(item, index) {

    const selected =
      document.querySelector(
        'input[name="v11q' + index + '"]:checked'
      );

    if (selected) {
      answered++;

      if (
        Number(selected.value) ===
        Number(item.c)
      ) {
        score++;
      }
    }
  });

  if (answered < questions.length) {

    if (typeof showToast === "function") {
      showToast("Please answer all questions first.");
    } else {
      alert("Please answer all questions first.");
    }

    return;
  }

  const percentage =
    Math.round(
      (score / questions.length) * 100
    );

  const passed = percentage >= 70;

  const quizData = v11GetQuizData();

  quizData[lessonNumber] = {
    score: score,
    total: questions.length,
    percentage: percentage,
    passed: passed,
    date: new Date().toISOString()
  };

  v11Set(
    V11_QUIZ_KEY,
    quizData
  );

  if (passed) {

    /* Automatically complete lesson
       when the quiz is passed */

    if (
      typeof markLessonComplete === "function"
    ) {
      try {
        markLessonComplete(lessonNumber);
      } catch (e) {
        console.warn(
          "Could not mark lesson complete:",
          e
        );
      }
    }
  }

  v11ShowQuizResult(
    lessonNumber,
    score,
    questions.length,
    percentage,
    passed
  );
}


/* ------------------------------------------------------------
   QUIZ RESULT
   ------------------------------------------------------------ */

function v11ShowQuizResult(
  lessonNumber,
  score,
  total,
  percentage,
  passed
) {

  const title =
    V11_LESSON_TITLES[lessonNumber - 1] ||
    "Lesson " + lessonNumber;

  const resultIcon =
    passed ? "🎉" : "📚";

  const resultTitle =
    passed ? "Quiz Passed!" : "Keep Learning!";

  const resultMessage =
    passed
      ? "Excellent! You passed this lesson quiz."
      : "You need 70% or higher to pass. Review the lesson and try again.";

  const html = `
    <div class="v11-result-card">

      <div class="v11-result-icon">
        ${resultIcon}
      </div>

      <h2>${resultTitle}</h2>

      <p>
        ${v11Escape(title)}
      </p>

      <div class="v11-score-circle">
        <strong>${percentage}%</strong>
      </div>

      <h3>
        Score: ${score} / ${total}
      </h3>

      <p class="v11-result-message">
        ${resultMessage}
      </p>

      <div class="v11-result-actions">

        ${
          passed
            ? `
              <button
                class="v11-main-button"
                onclick="closeModal(); openV11QuizDashboard();"
              >
                📊 Quiz Dashboard
              </button>
            `
            : `
              <button
                class="v11-main-button"
                onclick="closeModal(); openV11Quiz(${lessonNumber});"
              >
                🔄 Try Again
              </button>
            `
        }

      </div>

    </div>
  `;

  if (typeof showModal === "function") {
    showModal(
      "Quiz Result",
      html
    );
  }
}


/* ------------------------------------------------------------
   QUIZ DASHBOARD
   ------------------------------------------------------------ */

function openV11QuizDashboard() {

  const quizData = v11GetQuizData();

  let passedCount = 0;
  let attemptedCount = 0;
  let totalScore = 0;

  for (let i = 1; i <= 30; i++) {

    if (quizData[i]) {

      attemptedCount++;

      if (quizData[i].passed) {
        passedCount++;
      }

      totalScore +=
        Number(quizData[i].percentage || 0);
    }
  }

  const average =
    attemptedCount > 0
      ? Math.round(
          totalScore / attemptedCount
        )
      : 0;

  const quizProgress =
    Math.round(
      (passedCount / 30) * 100
    );

  let html = `
    <div class="v11-dashboard">

      <div class="v11-dashboard-header">
        <div class="v11-badge">🏆 V11 LEARNING CENTER</div>
        <h2>Quiz & Achievement Center</h2>
        <p>Test your knowledge and complete your learning journey.</p>
      </div>

      <div class="v11-stat-grid">

        <div class="v11-stat-card">
          <span>📝</span>
          <strong>${attemptedCount}</strong>
          <small>Attempted</small>
        </div>

        <div class="v11-stat-card">
          <span>✅</span>
          <strong>${passedCount}</strong>
          <small>Passed</small>
        </div>

        <div class="v11-stat-card">
          <span>📊</span>
          <strong>${average}%</strong>
          <small>Average Score</small>
        </div>

        <div class="v11-stat-card">
          <span>🏆</span>
          <strong>${quizProgress}%</strong>
          <small>Quiz Progress</small>
        </div>

      </div>

      <div class="v11-progress-box">
        <div class="v11-progress-title">
          <strong>Quiz Completion</strong>
          <span>${passedCount}/30</span>
        </div>

        <div class="v11-progress-track">
          <div
            class="v11-progress-fill"
            style="width:${quizProgress}%"
          ></div>
        </div>
      </div>

      <div class="v11-section-title">
        📚 Lesson Quizzes
      </div>

      <div class="v11-lesson-grid">
  `;

  for (let i = 1; i <= 30; i++) {

    const result = quizData[i];

    let status = "Not Started";
    let statusClass = "locked";

    if (result) {

      if (result.passed) {
        status = "Passed";
        statusClass = "passed";
      } else {
        status =
          result.percentage + "%";
        statusClass = "failed";
      }
    }

    html += `
      <div class="v11-lesson-card">

        <div class="v11-lesson-top">
          <span class="v11-lesson-number">
            ${i}
          </span>

          <span class="v11-status ${statusClass}">
            ${v11Escape(status)}
          </span>
        </div>

        <h3>
          ${v11Escape(
            V11_LESSON_TITLES[i - 1]
          )}
        </h3>

        <p>
          5 Questions
        </p>

        <button
          class="v11-small-button"
          onclick="openV11Quiz(${i})"
        >
          ${
            result
              ? "🔄 Retake Quiz"
              : "📝 Start Quiz"
          }
        </button>

      </div>
    `;
  }

  html += `
      </div>

      <div class="v11-final-exam-box">

        <div>
          <div class="v11-badge">
            🎓 FINAL EXAM
          </div>

          <h2>Business Academy Final Exam</h2>

          <p>
            Complete the 30 lesson quizzes and take your final exam.
          </p>
        </div>

        <button
          class="v11-main-button"
          onclick="openV11FinalExam()"
        >
          🎓 Open Final Exam
        </button>

      </div>

      <div class="v11-certificate-box">

        <div>
          <div class="v11-badge">
            🏆 CERTIFICATE
          </div>

          <h2>My Certificate</h2>

          <p>
            ${
              v11GetCertificate()
                ? "Your certificate is available."
                : "Pass the final exam to earn your certificate."
            }
          </p>
        </div>

        <button
          class="v11-main-button"
          onclick="openV11Certificate()"
        >
          🏆 View Certificate
        </button>

      </div>

    </div>
  `;

  if (typeof showModal === "function") {
    showModal(
      "Quiz & Achievement Center",
      html
    );
  }
}


/* ------------------------------------------------------------
   FINAL EXAM
   ------------------------------------------------------------ */

function v11AllQuizzesPassed() {

  const quizData = v11GetQuizData();

  for (let i = 1; i <= 30; i++) {

    if (
      !quizData[i] ||
      !quizData[i].passed
    ) {
      return false;
    }
  }

  return true;
}


function openV11FinalExam() {

  if (!v11AllQuizzesPassed()) {

    const quizData = v11GetQuizData();

    let completed = 0;

    for (let i = 1; i <= 30; i++) {
      if (
        quizData[i] &&
        quizData[i].passed
      ) {
        completed++;
      }
    }

    const html = `
      <div class="v11-lock-box">

        <div class="v11-result-icon">
          🔒
        </div>

        <h2>Final Exam Locked</h2>

        <p>
          You need to pass all 30 lesson quizzes first.
        </p>

        <div class="v11-lock-progress">
          <strong>${completed} / 30</strong>
          <span>Lesson quizzes passed</span>
        </div>

        <button
          class="v11-main-button"
          onclick="closeModal(); openV11QuizDashboard();"
        >
          📚 Continue Quizzes
        </button>

      </div>
    `;

    if (typeof showModal === "function") {
      showModal(
        "Final Exam",
        html
      );
    }

    return;
  }

  const examQuestions = v11CreateFinalExamQuestions();

  let html = `
    <div class="v11-quiz-container">

      <div class="v11-quiz-header">

        <div class="v11-badge">
          🎓 FINAL EXAM
        </div>

        <h2>
          Aung Business Academy
        </h2>

        <p>
          Final Business Management Examination
        </p>

        <div class="v11-exam-info">
          30 Questions • 70% Pass Mark
        </div>

      </div>

      <form id="v11ExamForm">
  `;

  examQuestions.forEach(
    function(item, index) {

      html += `
        <div class="v11-question-card">

          <div class="v11-question-number">
            Question ${index + 1} of 30
          </div>

          <h3>
            ${v11Escape(item.q)}
          </h3>

          <div class="v11-options">
      `;

      item.a.forEach(
        function(answer, answerIndex) {

          html += `
            <label class="v11-option">

              <input
                type="radio"
                name="v11exam${index}"
                value="${answerIndex}"
              >

              <span>
                ${v11Escape(answer)}
              </span>

            </label>
          `;
        }
      );

      html += `
          </div>

        </div>
      `;
    }
  );

  html += `
        <button
          type="button"
          class="v11-main-button v11-exam-submit"
          onclick="submitV11FinalExam()"
        >
          🎓 Submit Final Exam
        </button>

      </form>

    </div>
  `;

  if (typeof showModal === "function") {
    showModal(
      "Final Exam",
      html
    );
  }
}


/* ------------------------------------------------------------
   CREATE FINAL EXAM
   1 question from each lesson
   ------------------------------------------------------------ */

function v11CreateFinalExamQuestions() {

  const questions = [];

  for (let i = 1; i <= 30; i++) {

    const bank =
      V11_QUIZ_BANK[i];

    if (
      bank &&
      bank.length > 0
    ) {

      /* Rotate the question selected
         using lesson number */

      const index =
        (i - 1) % bank.length;

      questions.push(
        bank[index]
      );
    }
  }

  return questions;
}


/* ------------------------------------------------------------
   SUBMIT FINAL EXAM
   ------------------------------------------------------------ */

function submitV11FinalExam() {

  const questions =
    v11CreateFinalExamQuestions();

  let score = 0;
  let answered = 0;

  questions.forEach(
    function(item, index) {

      const selected =
        document.querySelector(
          'input[name="v11exam' +
          index +
          '"]:checked'
        );

      if (selected) {

        answered++;

        if (
          Number(selected.value) ===
          Number(item.c)
        ) {
          score++;
        }
      }
    }
  );

  if (
    answered <
    questions.length
  ) {

    if (typeof showToast === "function") {
      showToast(
        "Please answer all 30 questions."
      );
    } else {
      alert(
        "Please answer all 30 questions."
      );
    }

    return;
  }

  const percentage =
    Math.round(
      (score / questions.length) * 100
    );

  const passed =
    percentage >= 70;

  const examData =
    v11GetExamData();

  examData.attempts =
    Number(examData.attempts || 0) + 1;

  examData.lastScore =
    percentage;

  examData.lastDate =
    new Date().toISOString();

  if (
    percentage >
    Number(examData.bestScore || 0)
  ) {
    examData.bestScore =
      percentage;
  }

  examData.passed =
    examData.passed || passed;

  v11Set(
    V11_EXAM_KEY,
    examData
  );

  if (passed) {
    v11CreateCertificate(
      percentage
    );
  }

  v11ShowExamResult(
    score,
    questions.length,
    percentage,
    passed
  );
}


/* ------------------------------------------------------------
   FINAL EXAM RESULT
   ------------------------------------------------------------ */

function v11ShowExamResult(
  score,
  total,
  percentage,
  passed
) {

  const html = `
    <div class="v11-result-card">

      <div class="v11-result-icon">
        ${passed ? "🏆" : "📚"}
      </div>

      <h2>
        ${
          passed
            ? "Congratulations!"
            : "Keep Learning!"
        }
      </h2>

      <p>
        ${
          passed
            ? "You passed the Aung Business Academy Final Exam."
            : "You need at least 70% to pass the Final Exam."
        }
      </p>

      <div class="v11-score-circle">
        <strong>${percentage}%</strong>
      </div>

      <h3>
        Score: ${score} / ${total}
      </h3>

      ${
        passed
          ? `
            <div class="v11-success-message">
              🎓 Your Certificate has been created.
            </div>
          `
          : `
            <div class="v11-warning-message">
              Review your lessons and try the Final Exam again.
            </div>
          `
      }

      <div class="v11-result-actions">

        ${
          passed
            ? `
              <button
                class="v11-main-button"
                onclick="closeModal(); openV11Certificate();"
              >
                🏆 View Certificate
              </button>
            `
            : `
              <button
                class="v11-main-button"
                onclick="closeModal(); openV11FinalExam();"
              >
                🔄 Try Final Exam Again
              </button>
            `
        }

      </div>

    </div>
  `;

  if (typeof showModal === "function") {
    showModal(
      "Final Exam Result",
      html
    );
  }
}


/* ------------------------------------------------------------
   CERTIFICATE
   ------------------------------------------------------------ */

function v11CreateCertificate(score) {

  const userName =
    typeof getUserName === "function"
      ? getUserName()
      : (
          v11Get(
            USER_KEY,
            {}
          ).name || "Aung Zar Ni Win"
        );

  const certificate = {

    name:
      userName ||
      "Aung Zar Ni Win",

    score:
      Number(score),

    course:
      "Business Management Mastery",

    academy:
      "Aung Business Academy",

    date:
      new Date().toISOString(),

    certificateId:
      "ABA-" +
      Date.now().toString(36).toUpperCase()

  };

  v11Set(
    V11_CERT_KEY,
    certificate
  );

  return certificate;
}


function openV11Certificate() {

  const certificate =
    v11GetCertificate();

  if (!certificate) {

    const html = `
      <div class="v11-lock-box">

        <div class="v11-result-icon">
          🎓
        </div>

        <h2>Certificate Not Available</h2>

        <p>
          Pass the Final Exam with at least 70% to receive your certificate.
        </p>

        <button
          class="v11-main-button"
          onclick="closeModal(); openV11QuizDashboard();"
        >
          📚 Go to Learning Center
        </button>

      </div>
    `;

    if (typeof showModal === "function") {
      showModal(
        "Certificate",
        html
      );
    }

    return;
  }

  const date =
    new Date(
      certificate.date
    ).toLocaleDateString(
      "en-GB",
      {
        day: "2-digit",
        month: "long",
        year: "numeric"
      }
    );

  const html = `
    <div class="v11-certificate-wrapper">

      <div
        id="v11Certificate"
        class="v11-certificate"
      >

        <div class="v11-certificate-border">

          <div class="v11-certificate-logo">
            ABA
          </div>

          <div class="v11-certificate-small">
            AUNG BUSINESS ACADEMY
          </div>

          <h1>
            CERTIFICATE
          </h1>

          <h2>
            OF COMPLETION
          </h2>

          <p class="v11-certificate-label">
            This certificate is proudly presented to
          </p>

          <div class="v11-certificate-name">
            ${v11Escape(
              certificate.name
            )}
          </div>

          <p class="v11-certificate-text">
            for successfully completing the
          </p>

          <h3>
            Business Management Mastery
          </h3>

          <p class="v11-certificate-text">
            at Aung Business Academy
          </p>

          <div class="v11-certificate-score">
            Final Exam Score:
            <strong>
              ${certificate.score}%
            </strong>
          </div>

          <div class="v11-certificate-footer">

            <div>
              <strong>
                ${v11Escape(date)}
              </strong>
              <span>Date</span>
            </div>

            <div>
              <strong>
                ${v11Escape(
                  certificate.certificateId
                )}
              </strong>
              <span>Certificate ID</span>
            </div>

            <div>
              <strong>
                Aung Business Academy
              </strong>
              <span>Academy</span>
            </div>

          </div>

        </div>

      </div>

      <div class="v11-certificate-actions">

        <button
          class="v11-main-button"
          onclick="v11PrintCertificate()"
        >
          🖨️ Print / Save Certificate
        </button>

      </div>

    </div>
  `;

  if (typeof showModal === "function") {
    showModal(
      "My Certificate",
      html
    );
  }
}


/* ------------------------------------------------------------
   PRINT CERTIFICATE
   ------------------------------------------------------------ */

function v11PrintCertificate() {

  const certificate =
    document.getElementById(
      "v11Certificate"
    );

  if (!certificate) {
    return;
  }

  const printWindow =
    window.open(
      "",
      "_blank",
      "width=1000,height=800"
    );

  if (!printWindow) {

    if (typeof showToast === "function") {
      showToast(
        "Please allow pop-ups to print the certificate."
      );
    }

    return;
  }

  printWindow.document.write(`
    <!DOCTYPE html>

    <html>

    <head>

      <title>
        Aung Business Academy Certificate
      </title>

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      >

      <style>

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 30px;
          background: white;
          font-family:
            Arial,
            Helvetica,
            sans-serif;
        }

        .v11-certificate {
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
          padding: 12px;
          border: 8px solid #111827;
        }

        .v11-certificate-border {
          border: 2px solid #111827;
          padding: 55px 45px;
          text-align: center;
          min-height: 650px;
        }

        .v11-certificate-logo {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          margin: 0 auto 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #111827;
          color: white;
          font-weight: 800;
          font-size: 22px;
        }

        .v11-certificate-small {
          font-size: 13px;
          letter-spacing: 3px;
          font-weight: 700;
        }

        .v11-certificate h1 {
          font-size: 52px;
          margin: 20px 0 5px;
          letter-spacing: 6px;
        }

        .v11-certificate h2 {
          font-size: 20px;
          letter-spacing: 5px;
          margin: 0 0 35px;
        }

        .v11-certificate-label,
        .v11-certificate-text {
          font-size: 16px;
          line-height: 1.6;
        }

        .v11-certificate-name {
          font-size: 40px;
          font-weight: 800;
          margin: 25px 0;
        }

        .v11-certificate h3 {
          font-size: 27px;
          margin: 18px 0;
        }

        .v11-certificate-score {
          margin: 30px auto;
          font-size: 16px;
        }

        .v11-certificate-score strong {
          font-size: 24px;
        }

        .v11-certificate-footer {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          margin-top: 45px;
        }

        .v11-certificate-footer div {
          flex: 1;
        }

        .v11-certificate-footer strong,
        .v11-certificate-footer span {
          display: block;
        }

        .v11-certificate-footer span {
          margin-top: 7px;
          font-size: 12px;
        }

        @media print {

          body {
            padding: 0;
          }

          .v11-certificate {
            max-width: none;
            width: 100%;
          }

        }

      </style>

    </head>

    <body>

      ${certificate.outerHTML}

      <script>
        window.onload = function() {
          window.print();
        };
      <\/script>

    </body>

    </html>
  `);

  printWindow.document.close();
}


/* ------------------------------------------------------------
   V11 DASHBOARD BUTTON
   ------------------------------------------------------------ */

function v11AddQuizButton() {

  if (
    document.getElementById(
      "v11QuizFloatingButton"
    )
  ) {
    return;
  }

  const button =
    document.createElement("button");

  button.id =
    "v11QuizFloatingButton";

  button.type =
    "button";

  button.innerHTML =
    "🎓 Quiz";

  button.title =
    "Quiz & Certificate";

  button.onclick =
    function() {
      openV11QuizDashboard();
    };

  document.body.appendChild(button);
}


/* ------------------------------------------------------------
   V11 STYLES
   Inject CSS without touching style.css
   ------------------------------------------------------------ */

function v11InjectStyles() {

  if (
    document.getElementById(
      "v11Styles"
    )
  ) {
    return;
  }

  const style =
    document.createElement("style");

  style.id =
    "v11Styles";

  style.textContent = `

    .v11-quiz-container,
    .v11-dashboard,
    .v11-certificate-wrapper {
      width: 100%;
      max-width: 1000px;
      margin: 0 auto;
    }

    .v11-quiz-header,
    .v11-dashboard-header {
      padding: 20px;
      border-radius: 18px;
      background:
        linear-gradient(
          135deg,
          #111827,
          #374151
        );
      color: white;
      margin-bottom: 18px;
    }

    .v11-quiz-header h2,
    .v11-dashboard-header h2 {
      margin: 10px 0 6px;
      font-size: 25px;
    }

    .v11-quiz-header p,
    .v11-dashboard-header p {
      margin: 0;
      opacity: .85;
      line-height: 1.6;
    }

    .v11-badge {
      display: inline-flex;
      align-items: center;
      padding: 7px 11px;
      border-radius: 999px;
      background: rgba(255,255,255,.15);
      font-size: 11px;
      font-weight: 800;
      letter-spacing: .5px;
    }

    .v11-question-card {
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 16px;
      padding: 18px;
      margin-bottom: 14px;
      box-shadow:
        0 5px 18px rgba(0,0,0,.05);
    }

    .v11-question-number {
      font-size: 12px;
      font-weight: 800;
      color: #6b7280;
      margin-bottom: 8px;
    }

    .v11-question-card h3 {
      font-size: 16px;
      line-height: 1.55;
      margin: 0 0 14px;
      color: #111827;
    }

    .v11-options {
      display: grid;
      gap: 9px;
    }

    .v11-option {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 12px;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      cursor: pointer;
      transition: .2s ease;
      background: #f9fafb;
    }

    .v11-option:hover {
      transform: translateY(-1px);
      border-color: #9ca3af;
    }

    .v11-option input {
      margin-top: 3px;
      flex: 0 0 auto;
    }

    .v11-option span {
      line-height: 1.5;
      font-size: 14px;
    }

    .v11-main-button,
    .v11-small-button {
      border: 0;
      border-radius: 12px;
      font-weight: 800;
      cursor: pointer;
      transition: .2s ease;
    }

    .v11-main-button {
      width: 100%;
      padding: 14px 18px;
      background: #111827;
      color: white;
      font-size: 14px;
      margin-top: 8px;
    }

    .v11-main-button:hover,
    .v11-small-button:hover {
      transform: translateY(-1px);
      opacity: .92;
    }

    .v11-small-button {
      width: 100%;
      padding: 10px 12px;
      background: #111827;
      color: white;
      font-size: 12px;
    }

    .v11-stat-grid {
      display: grid;
      grid-template-columns:
        repeat(4, minmax(0, 1fr));
      gap: 12px;
      margin-bottom: 18px;
    }

    .v11-stat-card {
      padding: 18px;
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 16px;
      text-align: center;
    }

    .v11-stat-card span {
      display: block;
      font-size: 25px;
      margin-bottom: 6px;
    }

    .v11-stat-card strong {
      display: block;
      font-size: 25px;
      color: #111827;
    }

    .v11-stat-card small {
      display: block;
      margin-top: 4px;
      color: #6b7280;
    }

    .v11-progress-box {
      background: white;
      padding: 18px;
      border: 1px solid #e5e7eb;
      border-radius: 16px;
      margin-bottom: 20px;
    }

    .v11-progress-title {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      font-size: 13px;
    }

    .v11-progress-track {
      height: 10px;
      border-radius: 999px;
      background: #e5e7eb;
      overflow: hidden;
    }

    .v11-progress-fill {
      height: 100%;
      border-radius: inherit;
      background: #111827;
      transition: width .4s ease;
    }

    .v11-section-title {
      font-size: 20px;
      font-weight: 800;
      margin: 20px 0 12px;
      color: #111827;
    }

    .v11-lesson-grid {
      display: grid;
      grid-template-columns:
        repeat(3, minmax(0, 1fr));
      gap: 12px;
    }

    .v11-lesson-card {
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 16px;
      padding: 15px;
    }

    .v11-lesson-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      margin-bottom: 12px;
    }

    .v11-lesson-number {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #111827;
      color: white;
      font-weight: 800;
    }

    .v11-status {
      font-size: 10px;
      font-weight: 800;
      padding: 5px 8px;
      border-radius: 999px;
    }

    .v11-status.passed {
      background: #dcfce7;
      color: #166534;
    }

    .v11-status.failed {
      background: #fee2e2;
      color: #991b1b;
    }

    .v11-status.locked {
      background: #f3f4f6;
      color: #6b7280;
    }

    .v11-lesson-card h3 {
      font-size: 14px;
      line-height: 1.45;
      min-height: 42px;
      margin: 0 0 4px;
    }

    .v11-lesson-card p {
      font-size: 12px;
      color: #6b7280;
      margin: 0 0 12px;
    }

    .v11-final-exam-box,
    .v11-certificate-box {
      margin-top: 18px;
      padding: 20px;
      border-radius: 18px;
      background: #f3f4f6;
      border: 1px solid #e5e7eb;
    }

    .v11-final-exam-box h2,
    .v11-certificate-box h2 {
      margin: 8px 0;
      font-size: 20px;
    }

    .v11-final-exam-box p,
    .v11-certificate-box p {
      color: #6b7280;
      line-height: 1.6;
    }

    .v11-result-card,
    .v11-lock-box {
      text-align: center;
      padding: 20px;
    }

    .v11-result-icon {
      font-size: 55px;
      margin-bottom: 8px;
    }

    .v11-result-card h2,
    .v11-lock-box h2 {
      margin: 8px 0;
      font-size: 25px;
    }

    .v11-score-circle {
      width: 125px;
      height: 125px;
      border-radius: 50%;
      margin: 20px auto;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 10px solid #111827;
      background: white;
    }

    .v11-score-circle strong {
      font-size: 28px;
    }

    .v11-result-message {
      color: #6b7280;
      line-height: 1.6;
    }

    .v11-success-message {
      margin: 15px 0;
      padding: 12px;
      border-radius: 12px;
      background: #dcfce7;
      color: #166534;
      font-weight: 700;
    }

    .v11-warning-message {
      margin: 15px 0;
      padding: 12px;
      border-radius: 12px;
      background: #fef3c7;
      color: #92400e;
      font-weight: 700;
    }

    .v11-lock-progress {
      padding: 18px;
      margin: 18px 0;
      background: #f3f4f6;
      border-radius: 15px;
    }

    .v11-lock-progress strong,
    .v11-lock-progress span {
      display: block;
    }

    .v11-lock-progress strong {
      font-size: 30px;
      margin-bottom: 5px;
    }

    .v11-exam-info {
      margin-top: 15px;
      padding: 10px;
      border-radius: 10px;
      background: rgba(255,255,255,.1);
      font-weight: 700;
      font-size: 13px;
    }

    .v11-certificate-wrapper {
      text-align: center;
    }

    .v11-certificate {
      background: white;
      border: 8px solid #111827;
      padding: 10px;
      box-shadow:
        0 10px 35px rgba(0,0,0,.12);
    }

    .v11-certificate-border {
      border: 2px solid #111827;
      padding: 40px 25px;
    }

    .v11-certificate-logo {
      width: 62px;
      height: 62px;
      border-radius: 50%;
      margin: 0 auto 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #111827;
      color: white;
      font-weight: 900;
      font-size: 19px;
    }

    .v11-certificate-small {
      font-size: 10px;
      letter-spacing: 2px;
      font-weight: 800;
    }

    .v11-certificate h1 {
      font-size: 35px;
      margin: 15px 0 3px;
      letter-spacing: 4px;
    }

    .v11-certificate h2 {
      font-size: 13px;
      letter-spacing: 3px;
      margin: 0 0 25px;
    }

    .v11-certificate-label,
    .v11-certificate-text {
      font-size: 13px;
      line-height: 1.6;
    }

    .v11-certificate-name {
      font-size: 27px;
      font-weight: 900;
      margin: 18px 0;
      word-break: break-word;
    }

    .v11-certificate h3 {
      font-size: 20px;
      margin: 12px 0;
    }

    .v11-certificate-score {
      margin: 20px 0;
      font-size: 13px;
    }

    .v11-certificate-score strong {
      font-size: 18px;
    }

    .v11-certificate-footer {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      margin-top: 30px;
    }

    .v11-certificate-footer div {
      flex: 1;
      min-width: 0;
    }

    .v11-certificate-footer strong {
      display: block;
      font-size: 10px;
      word-break: break-word;
    }

    .v11-certificate-footer span {
      display: block;
      margin-top: 5px;
      font-size: 9px;
      color: #6b7280;
    }

    .v11-certificate-actions {
      margin-top: 15px;
    }

    #v11QuizFloatingButton {
      position: fixed;
      right: 16px;
      bottom: 80px;
      z-index: 9998;
      border: 0;
      border-radius: 999px;
      padding: 12px 16px;
      background: #111827;
      color: white;
      font-weight: 800;
      font-size: 13px;
      box-shadow:
        0 8px 25px rgba(0,0,0,.22);
      cursor: pointer;
    }

    @media (max-width: 800px) {

      .v11-stat-grid {
        grid-template-columns:
          repeat(2, minmax(0, 1fr));
      }

      .v11-lesson-grid {
        grid-template-columns:
          repeat(2, minmax(0, 1fr));
      }

    }

    @media (max-width: 520px) {

      .v11-stat-grid {
        grid-template-columns:
          repeat(2, minmax(0, 1fr));
        gap: 8px;
      }

      .v11-stat-card {
        padding: 13px 8px;
      }

      .v11-stat-card strong {
        font-size: 20px;
      }

      .v11-lesson-grid {
        grid-template-columns: 1fr;
      }

      .v11-quiz-header,
      .v11-dashboard-header {
        padding: 16px;
      }

      .v11-question-card {
        padding: 14px;
      }

      .v11-certificate-border {
        padding: 25px 12px;
      }

      .v11-certificate h1 {
        font-size: 28px;
        letter-spacing: 2px;
      }

      .v11-certificate-name {
        font-size: 22px;
      }

      .v11-certificate-footer {
        flex-direction: column;
        gap: 15px;
      }

      #v11QuizFloatingButton {
        right: 12px;
        bottom: 72px;
      }

    }

  `;

  document.head.appendChild(style);
}


/* ------------------------------------------------------------
   V11 EXPORTS
   ------------------------------------------------------------ */

window.openV11Quiz =
  openV11Quiz;

window.submitV11Quiz =
  submitV11Quiz;

window.openV11QuizDashboard =
  openV11QuizDashboard;

window.openV11FinalExam =
  openV11FinalExam;

window.submitV11FinalExam =
  submitV11FinalExam;

window.openV11Certificate =
  openV11Certificate;

window.v11PrintCertificate =
  v11PrintCertificate;


/* ------------------------------------------------------------
   V11 STARTUP
   ------------------------------------------------------------ */

function v11Init() {

  v11InjectStyles();

  v11AddQuizButton();

}


/* ------------------------------------------------------------
   START V11 AFTER APP LOAD
   ------------------------------------------------------------ */

if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    function() {

      setTimeout(
        v11Init,
        800
      );

    }
  );

} else {

  setTimeout(
    v11Init,
    800
  );

}


/* ============================================================
   END V11
   ============================================================ */
  /* ============================================================
   AUNG BUSINESS ACADEMY
   V11 QUIZ + FINAL EXAM + CERTIFICATE
   SAFE ADD-ON
   Does not replace existing V9/V10 features
   ============================================================ */

const V11_QUIZ_KEY = "aung_business_academy_v11_quiz";
const V11_EXAM_KEY = "aung_business_academy_v11_exam";
const V11_CERT_KEY = "aung_business_academy_v11_certificate";

/* ------------------------------------------------------------
   V11 LESSON TITLES
   ------------------------------------------------------------ */

const V11_LESSON_TITLES = [
  "Business Fundamentals",
  "Business Model",
  "Market Research",
  "Customer Finding",
  "Marketing Fundamentals",
  "Digital Marketing",
  "Content Marketing",
  "Sales Fundamentals",
  "Sales Strategy",
  "Negotiation Skills",
  "Sales Management",
  "Leadership Fundamentals",
  "Strategic Thinking",
  "Decision Making",
  "Team Leadership",
  "Brand Fundamentals",
  "Brand Positioning",
  "People Management",
  "Recruitment",
  "Performance Management",
  "Coaching",
  "Revenue Management",
  "Profit & Loss",
  "Cash Flow",
  "Financial Analysis",
  "Time Management",
  "Goal Setting",
  "Daily Planning",
  "Business Growth Strategy",
  "Business Execution"
];

/* ------------------------------------------------------------
   V11 QUIZ BANK
   5 questions for every lesson
   ------------------------------------------------------------ */

const V11_QUIZ_BANK = {

  1: [
    {
      q: "What is the main purpose of a business?",
      a: ["To create value for customers and earn sustainable profit", "To spend money", "To avoid customers", "To copy competitors"],
      c: 0
    },
    {
      q: "What should a business understand first?",
      a: ["Customer needs", "Office decoration", "Employee hobbies", "Competitor salaries"],
      c: 0
    },
    {
      q: "What does revenue mean?",
      a: ["Money generated from sales", "Only business expenses", "Employee salary", "Company debt"],
      c: 0
    },
    {
      q: "Why is customer value important?",
      a: ["It helps customers choose and stay with the business", "It increases office size", "It removes competition", "It eliminates all costs"],
      c: 0
    },
    {
      q: "A strong business foundation should include:",
      a: ["Customers, value, revenue and execution", "Only advertising", "Only employees", "Only products"],
      c: 0
    }
  ],

  2: [
    {
      q: "What is a business model?",
      a: ["How a business creates, delivers and captures value", "A company logo", "An employee list", "A sales receipt"],
      c: 0
    },
    {
      q: "Which is part of a business model?",
      a: ["Customer segments", "Office furniture only", "Personal hobbies", "Employee birthdays"],
      c: 0
    },
    {
      q: "Why should a business model be clear?",
      a: ["To understand how the business makes money", "To avoid customers", "To increase paperwork", "To remove planning"],
      c: 0
    },
    {
      q: "A revenue stream explains:",
      a: ["Where business income comes from", "Where employees live", "Where products are stored only", "Competitor locations"],
      c: 0
    },
    {
      q: "A good business model should be:",
      a: ["Practical and financially sustainable", "Impossible to execute", "Focused only on cost", "Focused only on competitors"],
      c: 0
    }
  ],

  3: [
    {
      q: "What is market research?",
      a: ["Collecting and analyzing market information", "Guessing customer names", "Only designing products", "Only hiring staff"],
      c: 0
    },
    {
      q: "What should market research identify?",
      a: ["Customers, competitors and market trends", "Employee birthdays", "Office furniture", "Personal hobbies"],
      c: 0
    },
    {
      q: "Why analyze competitors?",
      a: ["To understand their strengths, weaknesses and positioning", "To copy everything", "To avoid customers", "To stop selling"],
      c: 0
    },
    {
      q: "Customer research helps identify:",
      a: ["Needs, behavior and buying preferences", "Office rent only", "Employee salary only", "Tax numbers only"],
      c: 0
    },
    {
      q: "Good market research should be based on:",
      a: ["Reliable information and evidence", "Rumors only", "Guessing only", "One person's opinion"],
      c: 0
    }
  ],

  4: [
    {
      q: "What is customer finding?",
      a: ["Identifying potential customers for a product or service", "Finding employees", "Finding office space", "Finding suppliers only"],
      c: 0
    },
    {
      q: "What is a target customer?",
      a: ["A customer group most likely to need and buy the offering", "Any random person", "Only competitors", "Only employees"],
      c: 0
    },
    {
      q: "Why define customer segments?",
      a: ["To focus sales and marketing efforts", "To increase confusion", "To avoid selling", "To remove customer data"],
      c: 0
    },
    {
      q: "A customer profile can include:",
      a: ["Needs, behavior and purchasing power", "Only name", "Only phone model", "Only favorite color"],
      c: 0
    },
    {
      q: "Effective customer finding starts with:",
      a: ["Understanding who has the problem your business solves", "Calling everyone randomly", "Ignoring the market", "Copying competitors"],
      c: 0
    }
  ],

  5: [
    {
      q: "What is marketing?",
      a: ["Creating, communicating and delivering value to customers", "Only selling", "Only advertising", "Only discounting"],
      c: 0
    },
    {
      q: "The marketing mix commonly includes:",
      a: ["Product, Price, Place and Promotion", "People, Office, Car and Phone", "Profit, Tax, Salary and Rent", "Sales, Debt, Loan and Cash"],
      c: 0
    },
    {
      q: "Why is positioning important?",
      a: ["It defines how customers perceive the offering", "It controls employee attendance", "It sets office rent", "It removes competitors"],
      c: 0
    },
    {
      q: "A marketing strategy should focus on:",
      a: ["Target customers and value proposition", "Only internal meetings", "Only company expenses", "Only competitors"],
      c: 0
    },
    {
      q: "Good marketing should ultimately support:",
      a: ["Customer value and business growth", "More paperwork", "Higher internal costs", "Less customer contact"],
      c: 0
    }
  ],

  6: [
    {
      q: "What is digital marketing?",
      a: ["Marketing through digital channels and technologies", "Only newspaper advertising", "Only outdoor posters", "Only face-to-face selling"],
      c: 0
    },
    {
      q: "Which is a digital marketing channel?",
      a: ["Social media", "Warehouse", "Office desk", "Delivery truck"],
      c: 0
    },
    {
      q: "Why track digital marketing results?",
      a: ["To understand performance and improve ROI", "To avoid customers", "To increase costs", "To remove content"],
      c: 0
    },
    {
      q: "A useful digital metric is:",
      a: ["Conversion rate", "Office size", "Employee age", "Parking spaces"],
      c: 0
    },
    {
      q: "Effective digital marketing should be:",
      a: ["Targeted, measurable and customer-focused", "Random and unmeasured", "Only expensive", "Only promotional"],
      c: 0
    }
  ],

  7: [
    {
      q: "What is content marketing?",
      a: ["Creating useful content to attract and engage customers", "Only cold calling", "Only discounting", "Only accounting"],
      c: 0
    },
    {
      q: "Good content should provide:",
      a: ["Useful value to the target audience", "Confusion", "Unrelated information", "Only company slogans"],
      c: 0
    },
    {
      q: "Which can be content marketing?",
      a: ["Educational videos", "Warehouse counting", "Salary processing", "Office cleaning"],
      c: 0
    },
    {
      q: "A content strategy should define:",
      a: ["Audience, topics, channels and goals", "Only logo size", "Only employee names", "Only office location"],
      c: 0
    },
    {
      q: "Consistent content helps build:",
      a: ["Trust and brand awareness", "More inventory waste", "Higher office rent", "Less customer interest"],
      c: 0
    }
  ],

  8: [
    {
      q: "What is the purpose of selling?",
      a: ["Solve customer needs while creating business value", "Pressure everyone to buy", "Only reduce prices", "Avoid customers"],
      c: 0
    },
    {
      q: "A strong salesperson should first:",
      a: ["Understand customer needs", "Talk continuously", "Offer the biggest discount", "Ignore objections"],
      c: 0
    },
    {
      q: "What is a sales pipeline?",
      a: ["Stages prospects move through toward purchase", "A delivery truck", "A warehouse", "A price list"],
      c: 0
    },
    {
      q: "Good selling requires:",
      a: ["Listening, questioning and value communication", "Only talking", "Only discounting", "Only product knowledge"],
      c: 0
    },
    {
      q: "A sales conversion measures:",
      a: ["How many prospects become customers", "Employee attendance", "Inventory value only", "Office expenses"],
      c: 0
    }
  ],

  9: [
    {
      q: "What is sales strategy?",
      a: ["A planned approach to achieve sales objectives", "A random sales activity", "A salary plan", "A warehouse plan"],
      c: 0
    },
    {
      q: "Sales strategy should align with:",
      a: ["Business goals and customer needs", "Employee hobbies", "Office design", "Competitor rumors"],
      c: 0
    },
    {
      q: "A sales target should be:",
      a: ["Specific and measurable", "Impossible", "Unknown", "Random"],
      c: 0
    },
    {
      q: "Territory planning helps:",
      a: ["Allocate sales resources effectively", "Remove customers", "Increase travel without purpose", "Stop reporting"],
      c: 0
    },
    {
      q: "Sales strategy should be reviewed when:",
      a: ["Market conditions or performance changes", "Never", "Only at company parties", "Only after resignation"],
      c: 0
    }
  ],

  10: [
    {
      q: "What is negotiation?",
      a: ["A process of reaching an agreement between parties", "A price list", "A sales report", "A complaint"],
      c: 0
    },
    {
      q: "Good negotiation starts with:",
      a: ["Understanding interests and objectives", "Threatening the other party", "Giving away everything", "Ignoring information"],
      c: 0
    },
    {
      q: "A win-win negotiation aims to:",
      a: ["Create acceptable value for both parties", "Make one side lose", "Avoid agreement", "Increase conflict"],
      c: 0
    },
    {
      q: "Before negotiation, you should know your:",
      a: ["Target and minimum acceptable position", "Competitor's salary", "Office size", "Employee hobbies"],
      c: 0
    },
    {
      q: "Effective negotiation requires:",
      a: ["Listening, preparation and clear communication", "Anger", "Pressure only", "Silence only"],
      c: 0
    }
  ],

  11: [
    {
      q: "What is sales management?",
      a: ["Planning, leading and controlling sales activities", "Only selling products", "Only hiring", "Only accounting"],
      c: 0
    },
    {
      q: "A sales manager should monitor:",
      a: ["Targets, pipeline, productivity and execution", "Only attendance", "Only office expenses", "Only competitor salaries"],
      c: 0
    },
    {
      q: "Why conduct field visits?",
      a: ["To understand execution and coach the team", "To avoid customers", "To reduce communication", "To replace reporting"],
      c: 0
    },
    {
      q: "A good sales review should be:",
      a: ["Data-driven and action-oriented", "Only criticism", "Only informal", "Without targets"],
      c: 0
    },
    {
      q: "Sales leadership should focus on:",
      a: ["People, numbers and execution", "Numbers only", "People only", "Products only"],
      c: 0
    }
  ],

  12: [
    {
      q: "What is leadership?",
      a: ["Influencing and guiding people toward a shared goal", "Giving orders only", "Controlling every detail", "Avoiding decisions"],
      c: 0
    },
    {
      q: "Good leaders create:",
      a: ["Clear direction and accountability", "Fear only", "Confusion", "No expectations"],
      c: 0
    },
    {
      q: "Effective delegation means:",
      a: ["Giving responsibility with clear expectations and support", "Giving work without instructions", "Doing everything yourself", "Avoiding ownership"],
      c: 0
    },
    {
      q: "Trust is built through:",
      a: ["Consistency, honesty and accountability", "Threats", "Silence", "Favoritism"],
      c: 0
    },
    {
      q: "A leader should develop:",
      a: ["People and performance", "Only reports", "Only products", "Only budgets"],
      c: 0
    }
  ],

  13: [
    {
      q: "What is strategic thinking?",
      a: ["Understanding the bigger picture and long-term direction", "Only daily tasks", "Only reacting", "Avoiding planning"],
      c: 0
    },
    {
      q: "Strategy should consider:",
      a: ["Goals, market, capabilities and competition", "Only office design", "Only employee hobbies", "Only short-term discounts"],
      c: 0
    },
    {
      q: "A strategic priority is:",
      a: ["An important area requiring focused resources", "Every small task", "An optional activity", "A random idea"],
      c: 0
    },
    {
      q: "Strategic thinking helps leaders:",
      a: ["Make better long-term choices", "Avoid decisions", "Ignore risks", "Remove goals"],
      c: 0
    },
    {
      q: "A strategy without execution is:",
      a: ["Unlikely to create results", "Always successful", "A financial report", "A customer segment"],
      c: 0
    }
  ],

  14: [
    {
      q: "What is decision making?",
      a: ["Choosing an action among alternatives", "Avoiding all choices", "Only asking others", "Only collecting data"],
      c: 0
    },
    {
      q: "Good decisions should use:",
      a: ["Relevant information and clear objectives", "Rumors only", "Emotion only", "No evidence"],
      c: 0
    },
    {
      q: "What is a risk?",
      a: ["Potential uncertainty that may affect results", "Guaranteed profit", "A customer", "A product"],
      c: 0
    },
    {
      q: "A decision matrix can help:",
      a: ["Compare alternatives systematically", "Increase confusion", "Remove choices", "Replace customers"],
      c: 0
    },
    {
      q: "After making a decision, leaders should:",
      a: ["Monitor results and adjust when needed", "Never review", "Ignore outcomes", "Blame others"],
      c: 0
    }
  ],

  15: [
    {
      q: "What is team leadership?",
      a: ["Guiding a group toward shared objectives", "Doing every task alone", "Avoiding communication", "Only checking attendance"],
      c: 0
    },
    {
      q: "High-performing teams need:",
      a: ["Clear goals, roles and accountability", "Confusion", "No feedback", "No goals"],
      c: 0
    },
    {
      q: "Team communication should be:",
      a: ["Clear, regular and constructive", "Rare and unclear", "Only written", "Only negative"],
      c: 0
    },
    {
      q: "Team conflict should be:",
      a: ["Addressed professionally and early", "Ignored forever", "Encouraged", "Hidden"],
      c: 0
    },
    {
      q: "Recognition can help improve:",
      a: ["Engagement and motivation", "Confusion", "Costs only", "Inventory"],
      c: 0
    }
  ],

  16: [
    {
      q: "What is a brand?",
      a: ["The overall perception and identity associated with an offering", "Only a logo", "Only a product", "Only a slogan"],
      c: 0
    },
    {
      q: "Brand consistency helps build:",
      a: ["Recognition and trust", "Confusion", "Higher costs only", "Lower awareness"],
      c: 0
    },
    {
      q: "A strong brand should have:",
      a: ["Clear identity and value proposition", "No positioning", "Random messages", "No customer focus"],
      c: 0
    },
    {
      q: "Brand promise means:",
      a: ["The value and experience customers can expect", "Employee salary", "Product cost", "Office policy"],
      c: 0
    },
    {
      q: "Brand building is:",
      a: ["A long-term process", "A one-day activity", "Only a logo change", "Only advertising"],
      c: 0
    }
  ],

  17: [
    {
      q: "What is brand positioning?",
      a: ["How a brand is intended to be perceived relative to alternatives", "Where the office is located", "Product storage", "Employee ranking"],
      c: 0
    },
    {
      q: "Effective positioning should be:",
      a: ["Clear, relevant and differentiated", "Confusing", "Identical to competitors", "Unrelated to customers"],
      c: 0
    },
    {
      q: "Differentiation means:",
      a: ["Creating meaningful reasons to choose your brand", "Copying competitors", "Lowering quality", "Avoiding customers"],
      c: 0
    },
    {
      q: "Positioning should be based on:",
      a: ["Customer needs and competitive context", "Only company preference", "Only office design", "Only employee opinion"],
      c: 0
    },
    {
      q: "Strong positioning helps:",
      a: ["Customers understand why the brand is valuable", "Increase confusion", "Remove value", "Avoid marketing"],
      c: 0
    }
  ],

  18: [
    {
      q: "What is people management?",
      a: ["Managing, developing and supporting employees", "Only payroll", "Only recruitment", "Only attendance"],
      c: 0
    },
    {
      q: "Good people management includes:",
      a: ["Communication, development and accountability", "Only control", "Only criticism", "No feedback"],
      c: 0
    },
    {
      q: "Employee motivation can be improved through:",
      a: ["Recognition, growth and meaningful goals", "Fear only", "Confusion", "No communication"],
      c: 0
    },
    {
      q: "Performance conversations should be:",
      a: ["Regular and constructive", "Only once a year", "Always negative", "Avoided"],
      c: 0
    },
    {
      q: "A manager should treat employees with:",
      a: ["Respect and fairness", "Favoritism", "Fear", "Silence"],
      c: 0
    }
  ],

  19: [
    {
      q: "What is recruitment?",
      a: ["Finding and selecting suitable candidates", "Training customers", "Selling products", "Managing inventory"],
      c: 0
    },
    {
      q: "A good job description should include:",
      a: ["Responsibilities, requirements and expectations", "Only salary", "Only company name", "Only location"],
      c: 0
    },
    {
      q: "Interview questions should assess:",
      a: ["Skills, experience and suitability", "Personal gossip", "Unrelated hobbies", "Family details"],
      c: 0
    },
    {
      q: "The best candidate is not always:",
      a: ["The person with the most experience", "The suitable person", "The qualified person", "The capable person"],
      c: 0
    },
    {
      q: "Good recruitment reduces:",
      a: ["Hiring mistakes", "Customer value", "Team performance", "Business growth"],
      c: 0
    }
  ],

  20: [
    {
      q: "What is performance management?",
      a: ["Managing performance toward agreed objectives", "Only giving warnings", "Only salary payment", "Only recruitment"],
      c: 0
    },
    {
      q: "KPIs should be:",
      a: ["Relevant and measurable", "Random", "Impossible", "Hidden"],
      c: 0
    },
    {
      q: "Performance reviews should focus on:",
      a: ["Results, behaviors and development", "Only mistakes", "Only attendance", "Only salary"],
      c: 0
    },
    {
      q: "A performance gap means:",
      a: ["Difference between expected and actual performance", "A promotion", "A customer complaint", "A product discount"],
      c: 0
    },
    {
      q: "Performance improvement should include:",
      a: ["Clear actions and follow-up", "Only criticism", "No support", "No measurement"],
      c: 0
    }
  ],

  21: [
    {
      q: "What is coaching?",
      a: ["Helping people improve through guidance and questioning", "Giving orders only", "Doing their work", "Ignoring problems"],
      c: 0
    },
    {
      q: "Effective coaching starts with:",
      a: ["Understanding the current situation", "Giving punishment", "Talking continuously", "Avoiding questions"],
      c: 0
    },
    {
      q: "A coach should encourage:",
      a: ["Ownership and self-reflection", "Dependence", "Fear", "Silence"],
      c: 0
    },
    {
      q: "Good feedback should be:",
      a: ["Specific, timely and constructive", "Personal and emotional", "Vague", "Always negative"],
      c: 0
    },
    {
      q: "The goal of coaching is:",
      a: ["Improve capability and performance", "Control people", "Increase paperwork", "Avoid accountability"],
      c: 0
    }
  ],

  22: [
    {
      q: "What is revenue management?",
      a: ["Managing revenue opportunities to improve business performance", "Only collecting cash", "Only setting salaries", "Only reducing costs"],
      c: 0
    },
    {
      q: "Revenue can increase through:",
      a: ["More customers, higher value and better conversion", "Only more expenses", "Less selling", "Fewer customers"],
      c: 0
    },
    {
      q: "Average transaction value measures:",
      a: ["Average revenue per transaction", "Employee salary", "Inventory quantity", "Office rent"],
      c: 0
    },
    {
      q: "Revenue analysis should examine:",
      a: ["Volume, price, mix and customer behavior", "Only office costs", "Only attendance", "Only branding"],
      c: 0
    },
    {
      q: "Healthy revenue growth should be:",
      a: ["Sustainable and profitable", "Based only on discounts", "Always unplanned", "Without customers"],
      c: 0
    }
  ],

  23: [
    {
      q: "What is profit?",
      a: ["Revenue minus expenses", "Revenue plus expenses", "Expenses only", "Sales volume only"],
      c: 0
    },
    {
      q: "P&L stands for:",
      a: ["Profit and Loss", "Price and Logistics", "People and Leadership", "Planning and Learning"],
      c: 0
    },
    {
      q: "Gross profit is generally:",
      a: ["Revenue minus cost of goods sold", "Revenue plus salary", "Cash minus customers", "Sales minus tax only"],
      c: 0
    },
    {
      q: "Why monitor expenses?",
      a: ["To protect profitability", "To reduce customers", "To stop sales", "To remove products"],
      c: 0
    },
    {
      q: "A profitable business needs:",
      a: ["Healthy revenue and controlled costs", "Only high sales volume", "Only low expenses", "Only high prices"],
      c: 0
    }
  ],

  24: [
    {
      q: "What is cash flow?",
      a: ["Movement of cash into and out of a business", "Profit only", "Sales only", "Inventory only"],
      c: 0
    },
    {
      q: "Positive cash flow means:",
      a: ["More cash is coming in than going out during the period", "No sales", "More expenses only", "No customers"],
      c: 0
    },
    {
      q: "Why can a profitable business have cash problems?",
      a: ["Timing of collections and payments can differ", "Profit is always cash", "Customers never pay", "Costs do not exist"],
      c: 0
    },
    {
      q: "Accounts receivable represents:",
      a: ["Money customers owe the business", "Cash in hand", "Inventory", "Employee salary"],
      c: 0
    },
    {
      q: "Cash flow management requires:",
      a: ["Monitoring collections, payments and timing", "Ignoring invoices", "Avoiding budgets", "Only tracking sales"],
      c: 0
    }
  ],

  25: [
    {
      q: "What is financial analysis?",
      a: ["Evaluating financial information to support decisions", "Only counting cash", "Only selling", "Only hiring"],
      c: 0
    },
    {
      q: "A financial ratio can help:",
      a: ["Compare business performance", "Choose employee uniforms", "Find office space", "Write advertisements"],
      c: 0
    },
    {
      q: "Profit margin measures:",
      a: ["Profit relative to revenue", "Employees per office", "Customers per phone", "Inventory per employee"],
      c: 0
    },
    {
      q: "Financial trends help identify:",
      a: ["Changes in performance over time", "Employee hobbies", "Office design", "Customer birthdays"],
      c: 0
    },
    {
      q: "Financial analysis should support:",
      a: ["Better business decisions", "More paperwork", "Less planning", "Random actions"],
      c: 0
    }
  ],

  26: [
    {
      q: "What is time management?",
      a: ["Planning and controlling how time is used", "Working all day without planning", "Avoiding priorities", "Doing everything at once"],
      c: 0
    },
    {
      q: "A priority is:",
      a: ["An important task requiring focused attention", "Any random task", "An optional distraction", "A break"],
      c: 0
    },
    {
      q: "Time blocking means:",
      a: ["Allocating specific time for specific activities", "Avoiding schedules", "Doing many things at once", "Ignoring deadlines"],
      c: 0
    },
    {
      q: "Delegation can help managers:",
      a: ["Use time for higher-value responsibilities", "Avoid leadership", "Increase confusion", "Stop teamwork"],
      c: 0
    },
    {
      q: "Effective time management starts with:",
      a: ["Clear priorities and goals", "More meetings", "No plan", "Constant interruptions"],
      c: 0
    }
  ],

  27: [
    {
      q: "What is goal setting?",
      a: ["Defining desired outcomes and how to achieve them", "Only making wishes", "Avoiding targets", "Only planning meetings"],
      c: 0
    },
    {
      q: "SMART goals are:",
      a: ["Specific, Measurable, Achievable, Relevant and Time-bound", "Simple, Modern, Active, Rapid and Temporary", "Sales, Marketing, Accounting, Revenue and Training", "None"],
      c: 0
    },
    {
      q: "Why measure goals?",
      a: ["To know whether progress is being made", "To create confusion", "To avoid accountability", "To stop execution"],
      c: 0
    },
    {
      q: "A good goal should have:",
      a: ["A clear deadline", "No deadline", "No owner", "No measurement"],
      c: 0
    },
    {
      q: "Goals should connect to:",
      a: ["Business priorities", "Random activities", "Office decoration", "Employee hobbies"],
      c: 0
    }
  ],

  28: [
    {
      q: "What is daily planning?",
      a: ["Organizing key activities for the day", "Working randomly", "Avoiding priorities", "Only checking email"],
      c: 0
    },
    {
      q: "A daily plan should identify:",
      a: ["Top priorities and actions", "Every possible distraction", "Only meetings", "Only breaks"],
      c: 0
    },
    {
      q: "Why choose top priorities?",
      a: ["To focus effort on high-impact work", "To make more lists", "To avoid results", "To increase distractions"],
      c: 0
    },
    {
      q: "At the end of the day, review:",
      a: ["Completed work and unfinished priorities", "Only messages", "Only breaks", "Nothing"],
      c: 0
    },
    {
      q: "Daily planning improves:",
      a: ["Focus and execution", "Confusion", "Delay", "Unnecessary work"],
      c: 0
    }
  ],

  29: [
    {
      q: "What is business growth?",
      a: ["Increasing business value, revenue or market presence sustainably", "Only increasing expenses", "Only hiring", "Only opening offices"],
      c: 0
    },
    {
      q: "Growth can come from:",
      a: ["More customers, new products or new markets", "Only discounts", "Only costs", "Only reducing staff"],
      c: 0
    },
    {
      q: "Before scaling, a business should:",
      a: ["Understand its economics and operational capacity", "Ignore costs", "Ignore customers", "Avoid planning"],
      c: 0
    },
    {
      q: "Sustainable growth requires:",
      a: ["Profitable economics and strong execution", "Only high sales", "Only advertising", "Only borrowing"],
      c: 0
    },
    {
      q: "Growth strategy should consider:",
      a: ["Market opportunity, resources and risks", "Only competitors", "Only office size", "Only employee count"],
      c: 0
    }
  ],

  30: [
    {
      q: "What is business execution?",
      a: ["Turning plans and strategies into measurable actions and results", "Only planning", "Only meetings", "Only reporting"],
      c: 0
    },
    {
      q: "Execution requires:",
      a: ["Clear priorities, ownership and follow-up", "Only ideas", "No accountability", "No measurement"],
      c: 0
    },
    {
      q: "Why track execution?",
      a: ["To know whether actions are producing results", "To create paperwork", "To avoid decisions", "To stop planning"],
      c: 0
    },
    {
      q: "Accountability means:",
      a: ["Taking responsibility for agreed outcomes", "Blaming others", "Avoiding tasks", "Ignoring results"],
      c: 0
    },
    {
      q: "The best strategy is valuable when:",
      a: ["It is executed consistently and improved from results", "It stays on paper", "Nobody owns it", "It has no target"],
      c: 0
    }
  ]
};


/* ------------------------------------------------------------
   V11 SAFE STORAGE
   ------------------------------------------------------------ */

function v11Get(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (e) {
    return fallback;
  }
}

function v11Set(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn("V11 storage error:", e);
  }
}

function v11Escape(value) {
  if (typeof escapeHTML === "function") {
    return escapeHTML(String(value));
  }

  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


/* ------------------------------------------------------------
   QUIZ STATUS
   ------------------------------------------------------------ */

function v11GetQuizData() {
  return v11Get(V11_QUIZ_KEY, {});
}

function v11GetExamData() {
  return v11Get(V11_EXAM_KEY, {
    attempts: 0,
    bestScore: 0,
    passed: false
  });
}

function v11GetCertificate() {
  return v11Get(V11_CERT_KEY, null);
}


/* ------------------------------------------------------------
   LESSON QUIZ
   ------------------------------------------------------------ */

function openV11Quiz(lessonNumber) {

  lessonNumber = Number(lessonNumber);

  if (
    !lessonNumber ||
    lessonNumber < 1 ||
    lessonNumber > 30
  ) {
    if (typeof showToast === "function") {
      showToast("Invalid lesson.");
    }
    return;
  }

  const questions = V11_QUIZ_BANK[lessonNumber];

  if (!questions || questions.length === 0) {
    if (typeof showToast === "function") {
      showToast("Quiz is not available yet.");
    }
    return;
  }

  const title =
    V11_LESSON_TITLES[lessonNumber - 1] ||
    "Lesson " + lessonNumber;

  let html = `
    <div class="v11-quiz-container">

      <div class="v11-quiz-header">
        <div class="v11-badge">📝 LESSON QUIZ</div>
        <h2>Lesson ${lessonNumber}: ${v11Escape(title)}</h2>
        <p>Answer all 5 questions and check your knowledge.</p>
      </div>

      <form id="v11QuizForm">
  `;

  questions.forEach((item, index) => {

    html += `
      <div class="v11-question-card">

        <div class="v11-question-number">
          Question ${index + 1} of ${questions.length}
        </div>

        <h3>${v11Escape(item.q)}</h3>

        <div class="v11-options">
    `;

    item.a.forEach((answer, answerIndex) => {

      html += `
        <label class="v11-option">
          <input
            type="radio"
            name="v11q${index}"
            value="${answerIndex}"
          >
          <span>${v11Escape(answer)}</span>
        </label>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  html += `
        <button
          type="button"
          class="v11-main-button"
          onclick="submitV11Quiz(${lessonNumber})"
        >
          ✅ Submit Quiz
        </button>

      </form>

    </div>
  `;

  if (typeof showModal === "function") {
    showModal(
      "Lesson Quiz",
      html
    );
  } else {
    alert("Quiz system is ready.");
  }
}


/* ------------------------------------------------------------
   SUBMIT LESSON QUIZ
   ------------------------------------------------------------ */

function submitV11Quiz(lessonNumber) {

  lessonNumber = Number(lessonNumber);

  const questions = V11_QUIZ_BANK[lessonNumber];

  if (!questions) return;

  let score = 0;
  let answered = 0;

  questions.forEach(function(item, index) {

    const selected =
      document.querySelector(
        'input[name="v11q' + index + '"]:checked'
      );

    if (selected) {
      answered++;

      if (
        Number(selected.value) ===
        Number(item.c)
      ) {
        score++;
      }
    }
  });

  if (answered < questions.length) {

    if (typeof showToast === "function") {
      showToast("Please answer all questions first.");
    } else {
      alert("Please answer all questions first.");
    }

    return;
  }

  const percentage =
    Math.round(
      (score / questions.length) * 100
    );

  const passed = percentage >= 70;

  const quizData = v11GetQuizData();

  quizData[lessonNumber] = {
    score: score,
    total: questions.length,
    percentage: percentage,
    passed: passed,
    date: new Date().toISOString()
  };

  v11Set(
    V11_QUIZ_KEY,
    quizData
  );

  if (passed) {

    /* Automatically complete lesson
       when the quiz is passed */

    if (
      typeof markLessonComplete === "function"
    ) {
      try {
        markLessonComplete(lessonNumber);
      } catch (e) {
        console.warn(
          "Could not mark lesson complete:",
          e
        );
      }
    }
  }

  v11ShowQuizResult(
    lessonNumber,
    score,
    questions.length,
    percentage,
    passed
  );
}


/* ------------------------------------------------------------
   QUIZ RESULT
   ------------------------------------------------------------ */

function v11ShowQuizResult(
  lessonNumber,
  score,
  total,
  percentage,
  passed
) {

  const title =
    V11_LESSON_TITLES[lessonNumber - 1] ||
    "Lesson " + lessonNumber;

  const resultIcon =
    passed ? "🎉" : "📚";

  const resultTitle =
    passed ? "Quiz Passed!" : "Keep Learning!";

  const resultMessage =
    passed
      ? "Excellent! You passed this lesson quiz."
      : "You need 70% or higher to pass. Review the lesson and try again.";

  const html = `
    <div class="v11-result-card">

      <div class="v11-result-icon">
        ${resultIcon}
      </div>

      <h2>${resultTitle}</h2>

      <p>
        ${v11Escape(title)}
      </p>

      <div class="v11-score-circle">
        <strong>${percentage}%</strong>
      </div>

      <h3>
        Score: ${score} / ${total}
      </h3>

      <p class="v11-result-message">
        ${resultMessage}
      </p>

      <div class="v11-result-actions">

        ${
          passed
            ? `
              <button
                class="v11-main-button"
                onclick="closeModal(); openV11QuizDashboard();"
              >
                📊 Quiz Dashboard
              </button>
            `
            : `
              <button
                class="v11-main-button"
                onclick="closeModal(); openV11Quiz(${lessonNumber});"
              >
                🔄 Try Again
              </button>
            `
        }

      </div>

    </div>
  `;

  if (typeof showModal === "function") {
    showModal(
      "Quiz Result",
      html
    );
  }
}


/* ------------------------------------------------------------
   QUIZ DASHBOARD
   ------------------------------------------------------------ */

function openV11QuizDashboard() {

  const quizData = v11GetQuizData();

  let passedCount = 0;
  let attemptedCount = 0;
  let totalScore = 0;

  for (let i = 1; i <= 30; i++) {

    if (quizData[i]) {

      attemptedCount++;

      if (quizData[i].passed) {
        passedCount++;
      }

      totalScore +=
        Number(quizData[i].percentage || 0);
    }
  }

  const average =
    attemptedCount > 0
      ? Math.round(
          totalScore / attemptedCount
        )
      : 0;

  const quizProgress =
    Math.round(
      (passedCount / 30) * 100
    );

  let html = `
    <div class="v11-dashboard">

      <div class="v11-dashboard-header">
        <div class="v11-badge">🏆 V11 LEARNING CENTER</div>
        <h2>Quiz & Achievement Center</h2>
        <p>Test your knowledge and complete your learning journey.</p>
      </div>

      <div class="v11-stat-grid">

        <div class="v11-stat-card">
          <span>📝</span>
          <strong>${attemptedCount}</strong>
          <small>Attempted</small>
        </div>

        <div class="v11-stat-card">
          <span>✅</span>
          <strong>${passedCount}</strong>
          <small>Passed</small>
        </div>

        <div class="v11-stat-card">
          <span>📊</span>
          <strong>${average}%</strong>
          <small>Average Score</small>
        </div>

        <div class="v11-stat-card">
          <span>🏆</span>
          <strong>${quizProgress}%</strong>
          <small>Quiz Progress</small>
        </div>

      </div>

      <div class="v11-progress-box">
        <div class="v11-progress-title">
          <strong>Quiz Completion</strong>
          <span>${passedCount}/30</span>
        </div>

        <div class="v11-progress-track">
          <div
            class="v11-progress-fill"
            style="width:${quizProgress}%"
          ></div>
        </div>
      </div>

      <div class="v11-section-title">
        📚 Lesson Quizzes
      </div>

      <div class="v11-lesson-grid">
  `;

  for (let i = 1; i <= 30; i++) {

    const result = quizData[i];

    let status = "Not Started";
    let statusClass = "locked";

    if (result) {

      if (result.passed) {
        status = "Passed";
        statusClass = "passed";
      } else {
        status =
          result.percentage + "%";
        statusClass = "failed";
      }
    }

    html += `
      <div class="v11-lesson-card">

        <div class="v11-lesson-top">
          <span class="v11-lesson-number">
            ${i}
          </span>

          <span class="v11-status ${statusClass}">
            ${v11Escape(status)}
          </span>
        </div>

        <h3>
          ${v11Escape(
            V11_LESSON_TITLES[i - 1]
          )}
        </h3>

        <p>
          5 Questions
        </p>

        <button
          class="v11-small-button"
          onclick="openV11Quiz(${i})"
        >
          ${
            result
              ? "🔄 Retake Quiz"
              : "📝 Start Quiz"
          }
        </button>

      </div>
    `;
  }

  html += `
      </div>

      <div class="v11-final-exam-box">

        <div>
          <div class="v11-badge">
            🎓 FINAL EXAM
          </div>

          <h2>Business Academy Final Exam</h2>

          <p>
            Complete the 30 lesson quizzes and take your final exam.
          </p>
        </div>

        <button
          class="v11-main-button"
          onclick="openV11FinalExam()"
        >
          🎓 Open Final Exam
        </button>

      </div>

      <div class="v11-certificate-box">

        <div>
          <div class="v11-badge">
            🏆 CERTIFICATE
          </div>

          <h2>My Certificate</h2>

          <p>
            ${
              v11GetCertificate()
                ? "Your certificate is available."
                : "Pass the final exam to earn your certificate."
            }
          </p>
        </div>

        <button
          class="v11-main-button"
          onclick="openV11Certificate()"
        >
          🏆 View Certificate
        </button>

      </div>

    </div>
  `;

  if (typeof showModal === "function") {
    showModal(
      "Quiz & Achievement Center",
      html
    );
  }
}


/* ------------------------------------------------------------
   FINAL EXAM
   ------------------------------------------------------------ */

function v11AllQuizzesPassed() {

  const quizData = v11GetQuizData();

  for (let i = 1; i <= 30; i++) {

    if (
      !quizData[i] ||
      !quizData[i].passed
    ) {
      return false;
    }
  }

  return true;
}


function openV11FinalExam() {

  if (!v11AllQuizzesPassed()) {

    const quizData = v11GetQuizData();

    let completed = 0;

    for (let i = 1; i <= 30; i++) {
      if (
        quizData[i] &&
        quizData[i].passed
      ) {
        completed++;
      }
    }

    const html = `
      <div class="v11-lock-box">

        <div class="v11-result-icon">
          🔒
        </div>

        <h2>Final Exam Locked</h2>

        <p>
          You need to pass all 30 lesson quizzes first.
        </p>

        <div class="v11-lock-progress">
          <strong>${completed} / 30</strong>
          <span>Lesson quizzes passed</span>
        </div>

        <button
          class="v11-main-button"
          onclick="closeModal(); openV11QuizDashboard();"
        >
          📚 Continue Quizzes
        </button>

      </div>
    `;

    if (typeof showModal === "function") {
      showModal(
        "Final Exam",
        html
      );
    }

    return;
  }

  const examQuestions = v11CreateFinalExamQuestions();

  let html = `
    <div class="v11-quiz-container">

      <div class="v11-quiz-header">

        <div class="v11-badge">
          🎓 FINAL EXAM
        </div>

        <h2>
          Aung Business Academy
        </h2>

        <p>
          Final Business Management Examination
        </p>

        <div class="v11-exam-info">
          30 Questions • 70% Pass Mark
        </div>

      </div>

      <form id="v11ExamForm">
  `;

  examQuestions.forEach(
    function(item, index) {

      html += `
        <div class="v11-question-card">

          <div class="v11-question-number">
            Question ${index + 1} of 30
          </div>

          <h3>
            ${v11Escape(item.q)}
          </h3>

          <div class="v11-options">
      `;

      item.a.forEach(
        function(answer, answerIndex) {

          html += `
            <label class="v11-option">

              <input
                type="radio"
                name="v11exam${index}"
                value="${answerIndex}"
              >

              <span>
                ${v11Escape(answer)}
              </span>

            </label>
          `;
        }
      );

      html += `
          </div>

        </div>
      `;
    }
  );

  html += `
        <button
          type="button"
          class="v11-main-button v11-exam-submit"
          onclick="submitV11FinalExam()"
        >
          🎓 Submit Final Exam
        </button>

      </form>

    </div>
  `;

  if (typeof showModal === "function") {
    showModal(
      "Final Exam",
      html
    );
  }
}


/* ------------------------------------------------------------
   CREATE FINAL EXAM
   1 question from each lesson
   ------------------------------------------------------------ */

function v11CreateFinalExamQuestions() {

  const questions = [];

  for (let i = 1; i <= 30; i++) {

    const bank =
      V11_QUIZ_BANK[i];

    if (
      bank &&
      bank.length > 0
    ) {

      /* Rotate the question selected
         using lesson number */

      const index =
        (i - 1) % bank.length;

      questions.push(
        bank[index]
      );
    }
  }

  return questions;
}


/* ------------------------------------------------------------
   SUBMIT FINAL EXAM
   ------------------------------------------------------------ */

function submitV11FinalExam() {

  const questions =
    v11CreateFinalExamQuestions();

  let score = 0;
  let answered = 0;

  questions.forEach(
    function(item, index) {

      const selected =
        document.querySelector(
          'input[name="v11exam' +
          index +
          '"]:checked'
        );

      if (selected) {

        answered++;

        if (
          Number(selected.value) ===
          Number(item.c)
        ) {
          score++;
        }
      }
    }
  );

  if (
    answered <
    questions.length
  ) {

    if (typeof showToast === "function") {
      showToast(
        "Please answer all 30 questions."
      );
    } else {
      alert(
        "Please answer all 30 questions."
      );
    }

    return;
  }

  const percentage =
    Math.round(
      (score / questions.length) * 100
    );

  const passed =
    percentage >= 70;

  const examData =
    v11GetExamData();

  examData.attempts =
    Number(examData.attempts || 0) + 1;

  examData.lastScore =
    percentage;

  examData.lastDate =
    new Date().toISOString();

  if (
    percentage >
    Number(examData.bestScore || 0)
  ) {
    examData.bestScore =
      percentage;
  }

  examData.passed =
    examData.passed || passed;

  v11Set(
    V11_EXAM_KEY,
    examData
  );

  if (passed) {
    v11CreateCertificate(
      percentage
    );
  }

  v11ShowExamResult(
    score,
    questions.length,
    percentage,
    passed
  );
}


/* ------------------------------------------------------------
   FINAL EXAM RESULT
   ------------------------------------------------------------ */

function v11ShowExamResult(
  score,
  total,
  percentage,
  passed
) {

  const html = `
    <div class="v11-result-card">

      <div class="v11-result-icon">
        ${passed ? "🏆" : "📚"}
      </div>

      <h2>
        ${
          passed
            ? "Congratulations!"
            : "Keep Learning!"
        }
      </h2>

      <p>
        ${
          passed
            ? "You passed the Aung Business Academy Final Exam."
            : "You need at least 70% to pass the Final Exam."
        }
      </p>

      <div class="v11-score-circle">
        <strong>${percentage}%</strong>
      </div>

      <h3>
        Score: ${score} / ${total}
      </h3>

      ${
        passed
          ? `
            <div class="v11-success-message">
              🎓 Your Certificate has been created.
            </div>
          `
          : `
            <div class="v11-warning-message">
              Review your lessons and try the Final Exam again.
            </div>
          `
      }

      <div class="v11-result-actions">

        ${
          passed
            ? `
              <button
                class="v11-main-button"
                onclick="closeModal(); openV11Certificate();"
              >
                🏆 View Certificate
              </button>
            `
            : `
              <button
                class="v11-main-button"
                onclick="closeModal(); openV11FinalExam();"
              >
                🔄 Try Final Exam Again
              </button>
            `
        }

      </div>

    </div>
  `;

  if (typeof showModal === "function") {
    showModal(
      "Final Exam Result",
      html
    );
  }
}


/* ------------------------------------------------------------
   CERTIFICATE
   ------------------------------------------------------------ */

function v11CreateCertificate(score) {

  const userName =
    typeof getUserName === "function"
      ? getUserName()
      : (
          v11Get(
            USER_KEY,
            {}
          ).name || "Aung Zar Ni Win"
        );

  const certificate = {

    name:
      userName ||
      "Aung Zar Ni Win",

    score:
      Number(score),

    course:
      "Business Management Mastery",

    academy:
      "Aung Business Academy",

    date:
      new Date().toISOString(),

    certificateId:
      "ABA-" +
      Date.now().toString(36).toUpperCase()

  };

  v11Set(
    V11_CERT_KEY,
    certificate
  );

  return certificate;
}


function openV11Certificate() {

  const certificate =
    v11GetCertificate();

  if (!certificate) {

    const html = `
      <div class="v11-lock-box">

        <div class="v11-result-icon">
          🎓
        </div>

        <h2>Certificate Not Available</h2>

        <p>
          Pass the Final Exam with at least 70% to receive your certificate.
        </p>

        <button
          class="v11-main-button"
          onclick="closeModal(); openV11QuizDashboard();"
        >
          📚 Go to Learning Center
        </button>

      </div>
    `;

    if (typeof showModal === "function") {
      showModal(
        "Certificate",
        html
      );
    }

    return;
  }

  const date =
    new Date(
      certificate.date
    ).toLocaleDateString(
      "en-GB",
      {
        day: "2-digit",
        month: "long",
        year: "numeric"
      }
    );

  const html = `
    <div class="v11-certificate-wrapper">

      <div
        id="v11Certificate"
        class="v11-certificate"
      >

        <div class="v11-certificate-border">

          <div class="v11-certificate-logo">
            ABA
          </div>

          <div class="v11-certificate-small">
            AUNG BUSINESS ACADEMY
          </div>

          <h1>
            CERTIFICATE
          </h1>

          <h2>
            OF COMPLETION
          </h2>

          <p class="v11-certificate-label">
            This certificate is proudly presented to
          </p>

          <div class="v11-certificate-name">
            ${v11Escape(
              certificate.name
            )}
          </div>

          <p class="v11-certificate-text">
            for successfully completing the
          </p>

          <h3>
            Business Management Mastery
          </h3>

          <p class="v11-certificate-text">
            at Aung Business Academy
          </p>

          <div class="v11-certificate-score">
            Final Exam Score:
            <strong>
              ${certificate.score}%
            </strong>
          </div>

          <div class="v11-certificate-footer">

            <div>
              <strong>
                ${v11Escape(date)}
              </strong>
              <span>Date</span>
            </div>

            <div>
              <strong>
                ${v11Escape(
                  certificate.certificateId
                )}
              </strong>
              <span>Certificate ID</span>
            </div>

            <div>
              <strong>
                Aung Business Academy
              </strong>
              <span>Academy</span>
            </div>

          </div>

        </div>

      </div>

      <div class="v11-certificate-actions">

        <button
          class="v11-main-button"
          onclick="v11PrintCertificate()"
        >
          🖨️ Print / Save Certificate
        </button>

      </div>

    </div>
  `;

  if (typeof showModal === "function") {
    showModal(
      "My Certificate",
      html
    );
  }
}


/* ------------------------------------------------------------
   PRINT CERTIFICATE
   ------------------------------------------------------------ */

function v11PrintCertificate() {

  const certificate =
    document.getElementById(
      "v11Certificate"
    );

  if (!certificate) {
    return;
  }

  const printWindow =
    window.open(
      "",
      "_blank",
      "width=1000,height=800"
    );

  if (!printWindow) {

    if (typeof showToast === "function") {
      showToast(
        "Please allow pop-ups to print the certificate."
      );
    }

    return;
  }

  printWindow.document.write(`
    <!DOCTYPE html>

    <html>

    <head>

      <title>
        Aung Business Academy Certificate
      </title>

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      >

      <style>

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 30px;
          background: white;
          font-family:
            Arial,
            Helvetica,
            sans-serif;
        }

        .v11-certificate {
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
          padding: 12px;
          border: 8px solid #111827;
        }

        .v11-certificate-border {
          border: 2px solid #111827;
          padding: 55px 45px;
          text-align: center;
          min-height: 650px;
        }

        .v11-certificate-logo {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          margin: 0 auto 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #111827;
          color: white;
          font-weight: 800;
          font-size: 22px;
        }

        .v11-certificate-small {
          font-size: 13px;
          letter-spacing: 3px;
          font-weight: 700;
        }

        .v11-certificate h1 {
          font-size: 52px;
          margin: 20px 0 5px;
          letter-spacing: 6px;
        }

        .v11-certificate h2 {
          font-size: 20px;
          letter-spacing: 5px;
          margin: 0 0 35px;
        }

        .v11-certificate-label,
        .v11-certificate-text {
          font-size: 16px;
          line-height: 1.6;
        }

        .v11-certificate-name {
          font-size: 40px;
          font-weight: 800;
          margin: 25px 0;
        }

        .v11-certificate h3 {
          font-size: 27px;
          margin: 18px 0;
        }

        .v11-certificate-score {
          margin: 30px auto;
          font-size: 16px;
        }

        .v11-certificate-score strong {
          font-size: 24px;
        }

        .v11-certificate-footer {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          margin-top: 45px;
        }

        .v11-certificate-footer div {
          flex: 1;
        }

        .v11-certificate-footer strong,
        .v11-certificate-footer span {
          display: block;
        }

        .v11-certificate-footer span {
          margin-top: 7px;
          font-size: 12px;
        }

        @media print {

          body {
            padding: 0;
          }

          .v11-certificate {
            max-width: none;
            width: 100%;
          }

        }

      </style>

    </head>

    <body>

      ${certificate.outerHTML}

      <script>
        window.onload = function() {
          window.print();
        };
      <\/script>

    </body>

    </html>
  `);

  printWindow.document.close();
}


/* ------------------------------------------------------------
   V11 DASHBOARD BUTTON
   ------------------------------------------------------------ */

function v11AddQuizButton() {

  if (
    document.getElementById(
      "v11QuizFloatingButton"
    )
  ) {
    return;
  }

  const button =
    document.createElement("button");

  button.id =
    "v11QuizFloatingButton";

  button.type =
    "button";

  button.innerHTML =
    "🎓 Quiz";

  button.title =
    "Quiz & Certificate";

  button.onclick =
    function() {
      openV11QuizDashboard();
    };

  document.body.appendChild(button);
}


/* ------------------------------------------------------------
   V11 STYLES
   Inject CSS without touching style.css
   ------------------------------------------------------------ */

function v11InjectStyles() {

  if (
    document.getElementById(
      "v11Styles"
    )
  ) {
    return;
  }

  const style =
    document.createElement("style");

  style.id =
    "v11Styles";

  style.textContent = `

    .v11-quiz-container,
    .v11-dashboard,
    .v11-certificate-wrapper {
      width: 100%;
      max-width: 1000px;
      margin: 0 auto;
    }

    .v11-quiz-header,
    .v11-dashboard-header {
      padding: 20px;
      border-radius: 18px;
      background:
        linear-gradient(
          135deg,
          #111827,
          #374151
        );
      color: white;
      margin-bottom: 18px;
    }

    .v11-quiz-header h2,
    .v11-dashboard-header h2 {
      margin: 10px 0 6px;
      font-size: 25px;
    }

    .v11-quiz-header p,
    .v11-dashboard-header p {
      margin: 0;
      opacity: .85;
      line-height: 1.6;
    }

    .v11-badge {
      display: inline-flex;
      align-items: center;
      padding: 7px 11px;
      border-radius: 999px;
      background: rgba(255,255,255,.15);
      font-size: 11px;
      font-weight: 800;
      letter-spacing: .5px;
    }

    .v11-question-card {
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 16px;
      padding: 18px;
      margin-bottom: 14px;
      box-shadow:
        0 5px 18px rgba(0,0,0,.05);
    }

    .v11-question-number {
      font-size: 12px;
      font-weight: 800;
      color: #6b7280;
      margin-bottom: 8px;
    }

    .v11-question-card h3 {
      font-size: 16px;
      line-height: 1.55;
      margin: 0 0 14px;
      color: #111827;
    }

    .v11-options {
      display: grid;
      gap: 9px;
    }

    .v11-option {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 12px;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      cursor: pointer;
      transition: .2s ease;
      background: #f9fafb;
    }

    .v11-option:hover {
      transform: translateY(-1px);
      border-color: #9ca3af;
    }

    .v11-option input {
      margin-top: 3px;
      flex: 0 0 auto;
    }

    .v11-option span {
      line-height: 1.5;
      font-size: 14px;
    }

    .v11-main-button,
    .v11-small-button {
      border: 0;
      border-radius: 12px;
      font-weight: 800;
      cursor: pointer;
      transition: .2s ease;
    }

    .v11-main-button {
      width: 100%;
      padding: 14px 18px;
      background: #111827;
      color: white;
      font-size: 14px;
      margin-top: 8px;
    }

    .v11-main-button:hover,
    .v11-small-button:hover {
      transform: translateY(-1px);
      opacity: .92;
    }

    .v11-small-button {
      width: 100%;
      padding: 10px 12px;
      background: #111827;
      color: white;
      font-size: 12px;
    }

    .v11-stat-grid {
      display: grid;
      grid-template-columns:
        repeat(4, minmax(0, 1fr));
      gap: 12px;
      margin-bottom: 18px;
    }

    .v11-stat-card {
      padding: 18px;
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 16px;
      text-align: center;
    }

    .v11-stat-card span {
      display: block;
      font-size: 25px;
      margin-bottom: 6px;
    }

    .v11-stat-card strong {
      display: block;
      font-size: 25px;
      color: #111827;
    }

    .v11-stat-card small {
      display: block;
      margin-top: 4px;
      color: #6b7280;
    }

    .v11-progress-box {
      background: white;
      padding: 18px;
      border: 1px solid #e5e7eb;
      border-radius: 16px;
      margin-bottom: 20px;
    }

    .v11-progress-title {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      font-size: 13px;
    }

    .v11-progress-track {
      height: 10px;
      border-radius: 999px;
      background: #e5e7eb;
      overflow: hidden;
    }

    .v11-progress-fill {
      height: 100%;
      border-radius: inherit;
      background: #111827;
      transition: width .4s ease;
    }

    .v11-section-title {
      font-size: 20px;
      font-weight: 800;
      margin: 20px 0 12px;
      color: #111827;
    }

    .v11-lesson-grid {
      display: grid;
      grid-template-columns:
        repeat(3, minmax(0, 1fr));
      gap: 12px;
    }

    .v11-lesson-card {
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 16px;
      padding: 15px;
    }

    .v11-lesson-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      margin-bottom: 12px;
    }

    .v11-lesson-number {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #111827;
      color: white;
      font-weight: 800;
    }

    .v11-status {
      font-size: 10px;
      font-weight: 800;
      padding: 5px 8px;
      border-radius: 999px;
    }

    .v11-status.passed {
      background: #dcfce7;
      color: #166534;
    }

    .v11-status.failed {
      background: #fee2e2;
      color: #991b1b;
    }

    .v11-status.locked {
      background: #f3f4f6;
      color: #6b7280;
    }

    .v11-lesson-card h3 {
      font-size: 14px;
      line-height: 1.45;
      min-height: 42px;
      margin: 0 0 4px;
    }

    .v11-lesson-card p {
      font-size: 12px;
      color: #6b7280;
      margin: 0 0 12px;
    }

    .v11-final-exam-box,
    .v11-certificate-box {
      margin-top: 18px;
      padding: 20px;
      border-radius: 18px;
      background: #f3f4f6;
      border: 1px solid #e5e7eb;
    }

    .v11-final-exam-box h2,
    .v11-certificate-box h2 {
      margin: 8px 0;
      font-size: 20px;
    }

    .v11-final-exam-box p,
    .v11-certificate-box p {
      color: #6b7280;
      line-height: 1.6;
    }

    .v11-result-card,
    .v11-lock-box {
      text-align: center;
      padding: 20px;
    }

    .v11-result-icon {
      font-size: 55px;
      margin-bottom: 8px;
    }

    .v11-result-card h2,
    .v11-lock-box h2 {
      margin: 8px 0;
      font-size: 25px;
    }

    .v11-score-circle {
      width: 125px;
      height: 125px;
      border-radius: 50%;
      margin: 20px auto;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 10px solid #111827;
      background: white;
    }

    .v11-score-circle strong {
      font-size: 28px;
    }

    .v11-result-message {
      color: #6b7280;
      line-height: 1.6;
    }

    .v11-success-message {
      margin: 15px 0;
      padding: 12px;
      border-radius: 12px;
      background: #dcfce7;
      color: #166534;
      font-weight: 700;
    }

    .v11-warning-message {
      margin: 15px 0;
      padding: 12px;
      border-radius: 12px;
      background: #fef3c7;
      color: #92400e;
      font-weight: 700;
    }

    .v11-lock-progress {
      padding: 18px;
      margin: 18px 0;
      background: #f3f4f6;
      border-radius: 15px;
    }

    .v11-lock-progress strong,
    .v11-lock-progress span {
      display: block;
    }

    .v11-lock-progress strong {
      font-size: 30px;
      margin-bottom: 5px;
    }

    .v11-exam-info {
      margin-top: 15px;
      padding: 10px;
      border-radius: 10px;
      background: rgba(255,255,255,.1);
      font-weight: 700;
      font-size: 13px;
    }

    .v11-certificate-wrapper {
      text-align: center;
    }

    .v11-certificate {
      background: white;
      border: 8px solid #111827;
      padding: 10px;
      box-shadow:
        0 10px 35px rgba(0,0,0,.12);
    }

    .v11-certificate-border {
      border: 2px solid #111827;
      padding: 40px 25px;
    }

    .v11-certificate-logo {
      width: 62px;
      height: 62px;
      border-radius: 50%;
      margin: 0 auto 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #111827;
      color: white;
      font-weight: 900;
      font-size: 19px;
    }

    .v11-certificate-small {
      font-size: 10px;
      letter-spacing: 2px;
      font-weight: 800;
    }

    .v11-certificate h1 {
      font-size: 35px;
      margin: 15px 0 3px;
      letter-spacing: 4px;
    }

    .v11-certificate h2 {
      font-size: 13px;
      letter-spacing: 3px;
      margin: 0 0 25px;
    }

    .v11-certificate-label,
    .v11-certificate-text {
      font-size: 13px;
      line-height: 1.6;
    }

    .v11-certificate-name {
      font-size: 27px;
      font-weight: 900;
      margin: 18px 0;
      word-break: break-word;
    }

    .v11-certificate h3 {
      font-size: 20px;
      margin: 12px 0;
    }

    .v11-certificate-score {
      margin: 20px 0;
      font-size: 13px;
    }

    .v11-certificate-score strong {
      font-size: 18px;
    }

    .v11-certificate-footer {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      margin-top: 30px;
    }

    .v11-certificate-footer div {
      flex: 1;
      min-width: 0;
    }

    .v11-certificate-footer strong {
      display: block;
      font-size: 10px;
      word-break: break-word;
    }

    .v11-certificate-footer span {
      display: block;
      margin-top: 5px;
      font-size: 9px;
      color: #6b7280;
    }

    .v11-certificate-actions {
      margin-top: 15px;
    }

    #v11QuizFloatingButton {
      position: fixed;
      right: 16px;
      bottom: 80px;
      z-index: 9998;
      border: 0;
      border-radius: 999px;
      padding: 12px 16px;
      background: #111827;
      color: white;
      font-weight: 800;
      font-size: 13px;
      box-shadow:
        0 8px 25px rgba(0,0,0,.22);
      cursor: pointer;
    }

    @media (max-width: 800px) {

      .v11-stat-grid {
        grid-template-columns:
          repeat(2, minmax(0, 1fr));
      }

      .v11-lesson-grid {
        grid-template-columns:
          repeat(2, minmax(0, 1fr));
      }

    }

    @media (max-width: 520px) {

      .v11-stat-grid {
        grid-template-columns:
          repeat(2, minmax(0, 1fr));
        gap: 8px;
      }

      .v11-stat-card {
        padding: 13px 8px;
      }

      .v11-stat-card strong {
        font-size: 20px;
      }

      .v11-lesson-grid {
        grid-template-columns: 1fr;
      }

      .v11-quiz-header,
      .v11-dashboard-header {
        padding: 16px;
      }

      .v11-question-card {
        padding: 14px;
      }

      .v11-certificate-border {
        padding: 25px 12px;
      }

      .v11-certificate h1 {
        font-size: 28px;
        letter-spacing: 2px;
      }

      .v11-certificate-name {
        font-size: 22px;
      }

      .v11-certificate-footer {
        flex-direction: column;
        gap: 15px;
      }

      #v11QuizFloatingButton {
        right: 12px;
        bottom: 72px;
      }

    }

  `;

  document.head.appendChild(style);
}


/* ------------------------------------------------------------
   V11 EXPORTS
   ------------------------------------------------------------ */

window.openV11Quiz =
  openV11Quiz;

window.submitV11Quiz =
  submitV11Quiz;

window.openV11QuizDashboard =
  openV11QuizDashboard;

window.openV11FinalExam =
  openV11FinalExam;

window.submitV11FinalExam =
  submitV11FinalExam;

window.openV11Certificate =
  openV11Certificate;

window.v11PrintCertificate =
  v11PrintCertificate;


/* ------------------------------------------------------------
   V11 STARTUP
   ------------------------------------------------------------ */

function v11Init() {

  v11InjectStyles();

  v11AddQuizButton();

}


/* ------------------------------------------------------------
   START V11 AFTER APP LOAD
   ------------------------------------------------------------ */

if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    function() {

      setTimeout(
        v11Init,
        800
      );

    }
  );

} else {

  setTimeout(
    v11Init,
    800
  );

}


/* ============================================================
   END V11
   ============================================================ */
  /* ============================================================
   AUNG BUSINESS ACADEMY
   V13 BUSINESS SIMULATOR
   ============================================================ */

const V13_SIM_KEY = "aung_business_academy_v13_simulator";

function v13Get(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    return fallback;
  }
}

function v13Set(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn("V13 storage error:", e);
  }
}

function v13Num(id) {
  const el = document.getElementById(id);
  if (!el) return 0;

  const value = parseFloat(
    String(el.value || "").replace(/,/g, "")
  );

  return Number.isFinite(value) ? value : 0;
}

function v13Money(value) {
  const number = Number(value) || 0;

  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0
  }).format(Math.round(number));
}

function v13Percent(value) {
  const number = Number(value) || 0;

  return number.toFixed(1) + "%";
}

function v13Esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* ============================================================
   BUSINESS SIMULATOR
   ============================================================ */

function openV13BusinessSimulator() {

  if (typeof showModal !== "function") {
    console.warn("showModal is not available.");
    return;
  }

  const saved = v13Get(V13_SIM_KEY, {
    capital: "",
    cost: "",
    price: "",
    customers: "",
    monthlyExpense: ""
  });

  showModal(`
    <div class="v13-simulator">

      <div style="
        display:flex;
        align-items:center;
        gap:10px;
        margin-bottom:8px;
      ">
        <div style="font-size:30px;">📊</div>
        <div>
          <h2 style="margin:0;">
            Business Simulator
          </h2>
          <div style="
            color:#64748b;
            font-size:13px;
            margin-top:3px;
          ">
            Test your business numbers before making decisions.
          </div>
        </div>
      </div>

      <div style="
        background:rgba(59,130,246,.08);
        padding:12px;
        border-radius:12px;
        margin:14px 0;
        line-height:1.6;
      ">
        💡 သင့်လုပ်ငန်းရဲ့ Capital, Cost, Selling Price,
        Customers နဲ့ Monthly Expense ကို ထည့်ပြီး
        Business Result ကို ချက်ချင်းတွက်ချက်နိုင်ပါတယ်။
      </div>

      <div style="
        display:grid;
        grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
        gap:12px;
      ">

        <div>
          <label style="font-weight:600;">
            💰 Starting Capital (Ks)
          </label>
          <input
            id="v13Capital"
            class="tool-input"
            type="number"
            min="0"
            value="${v13Esc(saved.capital)}"
            placeholder="ဥပမာ 10000000"
          >
        </div>

        <div>
          <label style="font-weight:600;">
            📦 Product Cost / Unit (Ks)
          </label>
          <input
            id="v13Cost"
            class="tool-input"
            type="number"
            min="0"
            value="${v13Esc(saved.cost)}"
            placeholder="ဥပမာ 7000"
          >
        </div>

        <div>
          <label style="font-weight:600;">
            💵 Selling Price / Unit (Ks)
          </label>
          <input
            id="v13Price"
            class="tool-input"
            type="number"
            min="0"
            value="${v13Esc(saved.price)}"
            placeholder="ဥပမာ 10000"
          >
        </div>

        <div>
          <label style="font-weight:600;">
            👥 Monthly Customers / Units
          </label>
          <input
            id="v13Customers"
            class="tool-input"
            type="number"
            min="0"
            value="${v13Esc(saved.customers)}"
            placeholder="ဥပမာ 500"
          >
        </div>

        <div>
          <label style="font-weight:600;">
            🏢 Monthly Operating Expense (Ks)
          </label>
          <input
            id="v13Expense"
            class="tool-input"
            type="number"
            min="0"
            value="${v13Esc(saved.monthlyExpense)}"
            placeholder="ဥပမာ 1000000"
          >
        </div>

      </div>

      <button
        class="primary-button"
        style="
          width:100%;
          margin-top:16px;
          padding:14px;
          font-size:15px;
        "
        onclick="calculateV13BusinessSimulator()"
      >
        📊 Calculate Business
      </button>

      <div
        id="v13Result"
        style="margin-top:16px;"
      ></div>

    </div>
  `);
}

/* ============================================================
   CALCULATE BUSINESS
   ============================================================ */

function calculateV13BusinessSimulator() {

  const capital = v13Num("v13Capital");
  const cost = v13Num("v13Cost");
  const price = v13Num("v13Price");
  const customers = v13Num("v13Customers");
  const monthlyExpense = v13Num("v13Expense");

  v13Set(V13_SIM_KEY, {
    capital,
    cost,
    price,
    customers,
    monthlyExpense
  });

  const result = document.getElementById("v13Result");

  if (!result) return;

  if (price <= 0) {

    result.innerHTML = `
      <div style="
        padding:14px;
        border-radius:12px;
        background:#fff7ed;
        color:#9a3412;
      ">
        ⚠️ Selling Price ကို 0 ထက်ကြီးအောင် ထည့်ပေးပါ။
      </div>
    `;

    return;
  }

  if (cost < 0 || customers < 0 || monthlyExpense < 0) {

    result.innerHTML = `
      <div style="
        padding:14px;
        border-radius:12px;
        background:#fff7ed;
        color:#9a3412;
      ">
        ⚠️ Number တွေကို မှန်ကန်စွာ ထည့်ပေးပါ။
      </div>
    `;

    return;
  }

  const revenue = price * customers;

  const totalProductCost = cost * customers;

  const grossProfit =
    revenue - totalProductCost;

  const grossMargin =
    revenue > 0
      ? (grossProfit / revenue) * 100
      : 0;

  const netProfit =
    grossProfit - monthlyExpense;

  const netMargin =
    revenue > 0
      ? (netProfit / revenue) * 100
      : 0;

  const unitProfit =
    price - cost;

  const breakEvenUnits =
    unitProfit > 0
      ? Math.ceil(monthlyExpense / unitProfit)
      : 0;

  const breakEvenRevenue =
    unitProfit > 0
      ? breakEvenUnits * price
      : 0;

  const roi =
    capital > 0
      ? (netProfit / capital) * 100
      : 0;

  let health = "";
  let advice = "";

  if (unitProfit <= 0) {

    health = "🔴 Loss Risk";

    advice = `
      <strong>အရေးကြီး:</strong>
      Selling Price က Product Cost ထက် မမြင့်တဲ့အတွက်
      Unit တစ်ခုရောင်းတိုင်း အမြတ်မရနိုင်ပါ။
      Price / Cost structure ကို ပြန်စစ်ပါ။
    `;

  } else if (netProfit < 0) {

    health = "🟠 Needs Improvement";

    advice = `
      လုပ်ငန်းမှာ Gross Profit ရနေသော်လည်း
      Operating Expense ကြောင့် Net Profit အနုတ်ဖြစ်နေပါတယ်။
      Expense လျှော့ချခြင်း၊ Price တိုးခြင်း၊
      Sales Volume တိုးခြင်းတို့ကို စဉ်းစားပါ။
    `;

  } else if (netMargin < 10) {

    health = "🟡 Stable but Low Margin";

    advice = `
      Profit ရနေပြီဖြစ်ပေမယ့် Net Margin နည်းပါတယ်။
      Cost Control နဲ့ Pricing Strategy ကို
      အထူးအာရုံစိုက်ပါ။
    `;

  } else if (netMargin < 20) {

    health = "🟢 Healthy";

    advice = `
      လုပ်ငန်းရဲ့ Basic Economics က ကောင်းပါတယ်။
      နောက်တစ်ဆင့်အနေနဲ့ Customers တိုးခြင်း၊
      Repeat Purchase တိုးခြင်းနဲ့
      Average Order Value တိုးခြင်းကို အာရုံစိုက်ပါ။
    `;

  } else {

    health = "🟢 Strong Business";

    advice = `
      Profitability ကောင်းပါတယ်။
      အခုအခြေအနေမှာ Sales Scale-up,
      Distribution Expansion နဲ့
      Customer Retention ကို အာရုံစိုက်နိုင်ပါတယ်။
    `;
  }

  result.innerHTML = `

    <div style="
      background:linear-gradient(
        135deg,
        rgba(16,185,129,.12),
        rgba(59,130,246,.08)
      );
      padding:16px;
      border-radius:16px;
      margin-bottom:14px;
    ">

      <div style="
        font-size:12px;
        color:#64748b;
      ">
        BUSINESS HEALTH
      </div>

      <div style="
        font-size:22px;
        font-weight:800;
        margin-top:4px;
      ">
        ${health}
      </div>

    </div>

    <div style="
      display:grid;
      grid-template-columns:repeat(auto-fit,minmax(145px,1fr));
      gap:10px;
    ">

      ${v13MetricCard(
        "💵",
        "Revenue",
        v13Money(revenue) + " Ks"
      )}

      ${v13MetricCard(
        "📦",
        "Product Cost",
        v13Money(totalProductCost) + " Ks"
      )}

      ${v13MetricCard(
        "📈",
        "Gross Profit",
        v13Money(grossProfit) + " Ks"
      )}

      ${v13MetricCard(
        "📊",
        "Gross Margin",
        v13Percent(grossMargin)
      )}

      ${v13MetricCard(
        "💰",
        "Net Profit",
        v13Money(netProfit) + " Ks"
      )}

      ${v13MetricCard(
        "📉",
        "Net Margin",
        v13Percent(netMargin)
      )}

      ${v13MetricCard(
        "🎯",
        "Break-even",
        breakEvenUnits > 0
          ? v13Money(breakEvenUnits) + " Units"
          : "N/A"
      )}

      ${v13MetricCard(
        "🚀",
        "ROI",
        capital > 0
          ? v13Percent(roi)
          : "N/A"
      )}

    </div>

    <div style="
      margin-top:14px;
      padding:14px;
      border-radius:12px;
      background:#f8fafc;
      line-height:1.7;
    ">

      <strong>🎯 Business Coach Advice</strong>

      <div style="margin-top:6px;">
        ${advice}
      </div>

      ${
        breakEvenUnits > 0
          ? `
            <div style="margin-top:10px;">
              <strong>Break-even Revenue:</strong>
              ${v13Money(breakEvenRevenue)} Ks
            </div>
          `
          : ""
      }

    </div>

    <button
      class="secondary-button"
      style="width:100%;margin-top:12px;"
      onclick="v13AskSimulatorAI()"
    >
      🤖 Ask AI About This Business
    </button>

  `;
}

/* ============================================================
   METRIC CARD
   ============================================================ */

function v13MetricCard(icon, label, value) {

  return `
    <div style="
      padding:14px;
      border:1px solid #e5e7eb;
      border-radius:14px;
      background:#ffffff;
    ">

      <div style="font-size:20px;">
        ${icon}
      </div>

      <div style="
        font-size:11px;
        color:#64748b;
        margin-top:5px;
      ">
        ${v13Esc(label)}
      </div>

      <div style="
        font-size:15px;
        font-weight:800;
        margin-top:4px;
        word-break:break-word;
      ">
        ${v13Esc(value)}
      </div>

    </div>
  `;
}

/* ============================================================
   ASK AI ABOUT SIMULATION
   ============================================================ */

function v13AskSimulatorAI() {

  const capital = v13Num("v13Capital");
  const cost = v13Num("v13Cost");
  const price = v13Num("v13Price");
  const customers = v13Num("v13Customers");
  const expense = v13Num("v13Expense");

  const revenue = price * customers;
  const grossProfit = revenue - (cost * customers);
  const netProfit = grossProfit - expense;

  const margin =
    revenue > 0
      ? (netProfit / revenue) * 100
      : 0;

  const question = `
Analyze this business simulation:

Starting Capital: ${capital} Ks
Product Cost: ${cost} Ks
Selling Price: ${price} Ks
Monthly Units/Customers: ${customers}
Monthly Expense: ${expense} Ks
Revenue: ${revenue} Ks
Gross Profit: ${grossProfit} Ks
Net Profit: ${netProfit} Ks
Net Margin: ${margin.toFixed(1)}%

Give me:
1. Business health
2. Biggest risk
3. Best improvement
4. 30-day action plan
`;

  if (typeof v12AskAI === "function") {

    closeModal();
    setTimeout(() => {
      openV12AITools();

      setTimeout(() => {
        v12AskAI(question);
      }, 300);

    }, 200);

  } else {

    alert(
      "AI Coach is not available yet. " +
      "Please use AI Business Tools."
    );
  }
}

/* ============================================================
   DASHBOARD CARD
   ============================================================ */

function v13AddDashboardCard() {

  const containers = [
    document.querySelector(".dashboard-grid"),
    document.querySelector(".stats-grid"),
    document.querySelector(".dashboard-cards"),
    document.querySelector(".main-content")
  ];

  let container = null;

  for (const item of containers) {
    if (item) {
      container = item;
      break;
    }
  }

  if (!container) return;

  if (document.getElementById("v13-dashboard-card")) {
    return;
  }

  const card = document.createElement("div");

  card.id = "v13-dashboard-card";

  card.style.cssText = `
    margin:16px 0;
    padding:18px;
    border-radius:18px;
    background:
      linear-gradient(
        135deg,
        rgba(59,130,246,.12),
        rgba(16,185,129,.10)
      );
    border:1px solid rgba(59,130,246,.12);
  `;

  card.innerHTML = `
    <div style="
      display:flex;
      align-items:center;
      gap:12px;
    ">

      <div style="
        font-size:30px;
      ">
        📊
      </div>

      <div style="flex:1;">
        <div style="
          font-size:16px;
          font-weight:800;
        ">
          Business Simulator
        </div>

        <div style="
          font-size:12px;
          color:#64748b;
          margin-top:3px;
        ">
          Test Revenue, Profit, Margin, Break-even & ROI.
        </div>
      </div>

      <button
        class="primary-button"
        onclick="openV13BusinessSimulator()"
      >
        Open
      </button>

    </div>
  `;

  container.appendChild(card);
}

/* ============================================================
   FLOATING SIMULATOR BUTTON
   ============================================================ */

function v13AddSimulatorButton() {

  if (document.getElementById("v13-simulator-launcher")) {
    return;
  }

  const button = document.createElement("button");

  button.id = "v13-simulator-launcher";

  button.innerHTML = "📊";

  button.title = "Business Simulator";

  button.onclick = function() {
    openV13BusinessSimulator();
  };

  button.style.cssText = `
    position:fixed;
    right:18px;
    bottom:95px;
    z-index:9997;
    width:52px;
    height:52px;
    border:none;
    border-radius:50%;
    font-size:22px;
    cursor:pointer;
    box-shadow:0 8px 24px rgba(0,0,0,.18);
  `;

  document.body.appendChild(button);
}

/* ============================================================
   V13 INIT
   ============================================================ */

function v13Init() {

  try {
    v13AddSimulatorButton();

    setTimeout(() => {
      v13AddDashboardCard();
    }, 1200);

  } catch (error) {

    console.warn(
      "V13 Business Simulator initialization error:",
      error
    );
  }
}

/* ============================================================
/* =========================================================
   AUNG BUSINESS ACADEMY
   V14 PROFESSIONAL BUSINESS EDITION
   EXECUTIVE DASHBOARD
   ========================================================= */

const V14_PRO_KEY = "aung_business_academy_v14_professional";

function v14Get() {
  try {
    return JSON.parse(localStorage.getItem(V14_PRO_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function v14Set(data) {
  localStorage.setItem(V14_PRO_KEY, JSON.stringify(data));
}

function v14Num(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

function v14Money(value) {
  return new Intl.NumberFormat("en-US").format(
    Math.round(v14Num(value))
  );
}

function v14Percent(value) {
  return `${Math.round(v14Num(value))}%`;
}

function v14Esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


/* =========================================================
   BUSINESS PROFILE DATA
   ========================================================= */

function v14GetBusinessData() {
  const data = v14Get();

  return {
    revenue: v14Num(data.revenue),
    target: v14Num(data.target),
    cost: v14Num(data.cost),
    expense: v14Num(data.expense),
    customers: v14Num(data.customers),
    newCustomers: v14Num(data.newCustomers),
    previousRevenue: v14Num(data.previousRevenue),
    team: v14Num(data.team)
  };
}


/* =========================================================
   KPI CALCULATIONS
   ========================================================= */

function v14CalculateKPIs(data) {
  const revenue = v14Num(data.revenue);
  const target = v14Num(data.target);
  const cost = v14Num(data.cost);
  const expense = v14Num(data.expense);
  const previousRevenue = v14Num(data.previousRevenue);

  const grossProfit = revenue - cost;
  const netProfit = grossProfit - expense;

  const grossMargin =
    revenue > 0 ? (grossProfit / revenue) * 100 : 0;

  const netMargin =
    revenue > 0 ? (netProfit / revenue) * 100 : 0;

  const targetAchievement =
    target > 0 ? (revenue / target) * 100 : 0;

  const growth =
    previousRevenue > 0
      ? ((revenue - previousRevenue) / previousRevenue) * 100
      : 0;

  let health = 50;

  if (targetAchievement >= 100) health += 15;
  else if (targetAchievement >= 80) health += 8;

  if (grossMargin >= 40) health += 10;
  else if (grossMargin >= 25) health += 5;

  if (netMargin >= 15) health += 10;
  else if (netMargin >= 8) health += 5;

  if (growth >= 10) health += 10;
  else if (growth > 0) health += 5;

  health = Math.max(0, Math.min(100, health));

  return {
    revenue,
    target,
    cost,
    expense,
    grossProfit,
    netProfit,
    grossMargin,
    netMargin,
    targetAchievement,
    growth,
    health
  };
}


/* =========================================================
   KPI CARD
   ========================================================= */

function v14KPICard(icon, label, value, sub, type = "normal") {
  return `
    <div class="v14-kpi-card ${type}">
      <div class="v14-kpi-top">
        <div class="v14-kpi-icon">${icon}</div>
        <span class="v14-kpi-label">${label}</span>
      </div>

      <div class="v14-kpi-value">${value}</div>

      <div class="v14-kpi-sub">
        ${sub}
      </div>
    </div>
  `;
}


/* =========================================================
   BUSINESS HEALTH
   ========================================================= */

function v14HealthStatus(score) {
  if (score >= 80) {
    return {
      label: "Excellent",
      icon: "🟢",
      text: "Business performance is strong"
    };
  }

  if (score >= 65) {
    return {
      label: "Healthy",
      icon: "🟢",
      text: "Business performance is stable"
    };
  }

  if (score >= 50) {
    return {
      label: "Needs Attention",
      icon: "🟡",
      text: "Some areas require management attention"
    };
  }

  return {
    label: "Critical",
    icon: "🔴",
    text: "Immediate action is recommended"
  };
}


/* =========================================================
   BUSINESS PRIORITIES
   ========================================================= */

function v14BuildPriorities(kpi) {
  const priorities = [];

  if (kpi.targetAchievement < 80) {
    priorities.push({
      icon: "🎯",
      title: "Sales Target",
      text: "Sales achievement is below 80%. Focus on high-value customers and active pipeline opportunities.",
      action: "openV14SalesAction()"
    });
  }

  if (kpi.grossMargin < 25) {
    priorities.push({
      icon: "💰",
      title: "Gross Margin",
      text: "Gross margin needs improvement. Review product pricing, discounts and cost structure.",
      action: "openV14FinanceAction()"
    });
  }

  if (kpi.growth <= 0) {
    priorities.push({
      icon: "📈",
      title: "Business Growth",
      text: "Revenue growth is flat or negative. Build a focused customer acquisition and retention plan.",
      action: "openV14GrowthAction()"
    });
  }

  if (priorities.length === 0) {
    priorities.push(
      {
        icon: "🚀",
        title: "Accelerate Growth",
        text: "Core KPIs are healthy. Focus on scaling revenue while protecting profitability.",
        action: "openV14GrowthAction()"
      },
      {
        icon: "👥",
        title: "Strengthen Customers",
        text: "Develop key accounts and increase repeat business from existing customers.",
        action: "openV14CustomerAction()"
      },
      {
        icon: "📊",
        title: "Review Performance",
        text: "Review your KPI performance and identify the next management priority.",
        action: "openV14ReviewAction()"
      }
    );
  }

  return priorities.slice(0, 3);
}


/* =========================================================
   EXECUTIVE DASHBOARD
   ========================================================= */

function openV14ProfessionalDashboard() {
  closeSidebarMobile();

  const data = v14GetBusinessData();
  const kpi = v14CalculateKPIs(data);
  const health = v14HealthStatus(kpi.health);
  const priorities = v14BuildPriorities(kpi);

  setPage(
    "Executive Dashboard",
    "Professional business performance and management overview"
  );

  showModal(`
    <div class="v14-dashboard">

      <div class="v14-header">

        <div>
          <div class="v14-eyebrow">
            AUNG BUSINESS ACADEMY
          </div>

          <h2>
            Executive Dashboard
          </h2>

          <p>
            Business performance at a glance
          </p>
        </div>

        <div class="v14-business-badge">
          <span>●</span>
          Professional Edition
        </div>

      </div>


      <div class="v14-health-card">

        <div class="v14-health-left">

          <div class="v14-health-icon">
            ${health.icon}
          </div>

          <div>
            <div class="v14-small-title">
              BUSINESS HEALTH
            </div>

            <div class="v14-health-title">
              ${health.label}
            </div>

            <div class="v14-health-text">
              ${health.text}
            </div>
          </div>

        </div>

        <div class="v14-health-score">
          <strong>${Math.round(kpi.health)}</strong>
          <span>/100</span>
        </div>

      </div>


      <div class="v14-section-title">
        KEY PERFORMANCE INDICATORS
      </div>


      <div class="v14-kpi-grid">

        ${v14KPICard(
          "💰",
          "Revenue",
          v14Money(kpi.revenue),
          "Current period"
        )}

        ${v14KPICard(
          "🎯",
          "Target Achievement",
          v14Percent(kpi.targetAchievement),
          "Sales target"
        )}

        ${v14KPICard(
          "📈",
          "Revenue Growth",
          v14Percent(kpi.growth),
          "vs previous period",
          kpi.growth >= 0 ? "positive" : "negative"
        )}

        ${v14KPICard(
          "💵",
          "Net Profit",
          v14Money(kpi.netProfit),
          `Margin ${v14Percent(kpi.netMargin)}`
        )}

      </div>


      <div class="v14-two-column">

        <div class="v14-panel">

          <div class="v14-panel-header">
            <div>
              <div class="v14-small-title">
                FINANCIAL PERFORMANCE
              </div>

              <h3>
                Profitability
              </h3>
            </div>

            <span class="v14-panel-icon">
              💼
            </span>
          </div>


          <div class="v14-finance-row">
            <span>Revenue</span>
            <strong>${v14Money(kpi.revenue)}</strong>
          </div>

          <div class="v14-finance-row">
            <span>Product Cost</span>
            <strong>${v14Money(kpi.cost)}</strong>
          </div>

          <div class="v14-finance-row">
            <span>Gross Profit</span>
            <strong>${v14Money(kpi.grossProfit)}</strong>
          </div>

          <div class="v14-finance-row">
            <span>Operating Expense</span>
            <strong>${v14Money(kpi.expense)}</strong>
          </div>

          <div class="v14-finance-total">
            <span>Net Profit</span>
            <strong>${v14Money(kpi.netProfit)}</strong>
          </div>

        </div>


        <div class="v14-panel">

          <div class="v14-panel-header">

            <div>
              <div class="v14-small-title">
                SALES PERFORMANCE
              </div>

              <h3>
                Target Achievement
              </h3>
            </div>

            <span class="v14-panel-icon">
              🎯
            </span>

          </div>


          <div class="v14-progress-big">

            <div class="v14-progress-number">
              ${v14Percent(kpi.targetAchievement)}
            </div>

            <div class="v14-progress-track">
              <div
                class="v14-progress-fill"
                style="width:${Math.min(
                  100,
                  Math.max(0, kpi.targetAchievement)
                )}%"
              ></div>
            </div>

            <div class="v14-progress-caption">
              Target: ${v14Money(kpi.target)}
            </div>

          </div>


          <div class="v14-mini-metrics">

            <div>
              <span>Gross Margin</span>
              <strong>${v14Percent(kpi.grossMargin)}</strong>
            </div>

            <div>
              <span>Net Margin</span>
              <strong>${v14Percent(kpi.netMargin)}</strong>
            </div>

          </div>

        </div>

      </div>


      <div class="v14-section-title">
        TODAY'S BUSINESS PRIORITIES
      </div>


      <div class="v14-priority-grid">

        ${priorities.map(item => `
          <div class="v14-priority-card">

            <div class="v14-priority-icon">
              ${item.icon}
            </div>

            <div class="v14-priority-content">

              <h4>
                ${v14Esc(item.title)}
              </h4>

              <p>
                ${v14Esc(item.text)}
              </p>

              <button
                class="v14-link-button"
                onclick="${item.action}"
              >
                Take Action →
              </button>

            </div>

          </div>
        `).join("")}

      </div>


      <div class="v14-section-title">
        MANAGEMENT ACTIONS
      </div>


      <div class="v14-action-grid">

        <button
          class="v14-action-card"
          onclick="openV13BusinessSimulator()"
        >
          <span>📊</span>
          <strong>Business Simulator</strong>
          <small>Model revenue and profit</small>
        </button>


        <button
          class="v14-action-card"
          onclick="openAI()"
        >
          <span>🤖</span>
          <strong>AI Business Advisor</strong>
          <small>Get strategic advice</small>
        </button>


        <button
          class="v14-action-card"
          onclick="openV11QuizDashboard()"
        >
          <span>🎓</span>
          <strong>Learning Center</strong>
          <small>Continue your development</small>
        </button>


        <button
          class="v14-action-card"
          onclick="openV14BusinessInput()"
        >
          <span>⚙️</span>
          <strong>Update KPIs</strong>
          <small>Update business numbers</small>
        </button>

      </div>


      <div class="v14-footer-note">
        Aung Business Academy · Professional Business Learning & Management Platform
      </div>

    </div>
  `);
}


/* =========================================================
   BUSINESS KPI INPUT
   ========================================================= */

function openV14BusinessInput() {

  const data = v14GetBusinessData();

  showModal(`
    <div class="v14-input-page">

      <div class="v14-form-header">
        <div class="v14-eyebrow">
          BUSINESS MANAGEMENT
        </div>

        <h2>
          Update Business KPIs
        </h2>

        <p>
          Enter your current business performance numbers
        </p>
      </div>


      <div class="v14-form-grid">

        <div class="v14-field">
          <label>Current Revenue</label>
          <input
            id="v14Revenue"
            type="number"
            value="${data.revenue || ""}"
            placeholder="e.g. 50000000"
          >
        </div>


        <div class="v14-field">
          <label>Sales Target</label>
          <input
            id="v14Target"
            type="number"
            value="${data.target || ""}"
            placeholder="e.g. 60000000"
          >
        </div>


        <div class="v14-field">
          <label>Product Cost / COGS</label>
          <input
            id="v14Cost"
            type="number"
            value="${data.cost || ""}"
            placeholder="e.g. 30000000"
          >
        </div>


        <div class="v14-field">
          <label>Operating Expense</label>
          <input
            id="v14Expense"
            type="number"
            value="${data.expense || ""}"
            placeholder="e.g. 8000000"
          >
        </div>


        <div class="v14-field">
          <label>Current Customers</label>
          <input
            id="v14Customers"
            type="number"
            value="${data.customers || ""}"
            placeholder="e.g. 120"
          >
        </div>


        <div class="v14-field">
          <label>New Customers</label>
          <input
            id="v14NewCustomers"
            type="number"
            value="${data.newCustomers || ""}"
            placeholder="e.g. 20"
          >
        </div>


        <div class="v14-field">
          <label>Previous Period Revenue</label>
          <input
            id="v14PreviousRevenue"
            type="number"
            value="${data.previousRevenue || ""}"
            placeholder="e.g. 45000000"
          >
        </div>


        <div class="v14-field">
          <label>Sales Team Size</label>
          <input
            id="v14Team"
            type="number"
            value="${data.team || ""}"
            placeholder="e.g. 10"
          >
        </div>

      </div>


      <div class="v14-form-actions">

        <button
          class="primary-button"
          onclick="v14SaveBusinessData()"
        >
          Save Business KPIs
        </button>

        <button
          class="secondary-button"
          onclick="openV14ProfessionalDashboard()"
        >
          Cancel
        </button>

      </div>

    </div>
  `);
}


/* =========================================================
   SAVE BUSINESS DATA
   ========================================================= */

function v14SaveBusinessData() {

  const data = {
    revenue: v14Num(document.getElementById("v14Revenue")?.value),
    target: v14Num(document.getElementById("v14Target")?.value),
    cost: v14Num(document.getElementById("v14Cost")?.value),
    expense: v14Num(document.getElementById("v14Expense")?.value),
    customers: v14Num(document.getElementById("v14Customers")?.value),
    newCustomers: v14Num(document.getElementById("v14NewCustomers")?.value),
    previousRevenue: v14Num(
      document.getElementById("v14PreviousRevenue")?.value
    ),
    team: v14Num(document.getElementById("v14Team")?.value)
  };

  v14Set(data);

  showToast("Business KPIs updated successfully");

  setTimeout(() => {
    openV14ProfessionalDashboard();
  }, 300);
}


/* =========================================================
   QUICK ACTIONS
   ========================================================= */

function openV14SalesAction() {
  if (typeof openV13BusinessSimulator === "function") {
    openV13BusinessSimulator();
    return;
  }

  openV14BusinessInput();
}

function openV14FinanceAction() {
  openV14BusinessInput();
}

function openV14GrowthAction() {
  if (typeof openAI === "function") {
    openAI();
    setTimeout(() => {
      if (typeof v12SetAIInput === "function") {
        v12SetAIInput(
          "Analyze my business growth and create a practical 30-day growth action plan."
        );
      }
    }, 300);
    return;
  }

  openV14BusinessInput();
}

function openV14CustomerAction() {
  if (typeof openAI === "function") {
    openAI();
    setTimeout(() => {
      if (typeof v12SetAIInput === "function") {
        v12SetAIInput(
          "Create a customer retention and customer acquisition plan for my business."
        );
      }
    }, 300);
    return;
  }

  openV14BusinessInput();
}

function openV14ReviewAction() {
  openV14ProfessionalDashboard();
}


/* =========================================================
   SIDEBAR BUTTON
   ========================================================= */

function v14AddSidebarButton() {

  if (document.getElementById("v14SidebarButton")) {
    return;
  }

  const sidebar = document.querySelector(".sidebar");

  if (!sidebar) {
    return;
  }

  const button = document.createElement("button");

  button.id = "v14SidebarButton";

  button.className = "v14-sidebar-button";

  button.innerHTML = `
    <span>▣</span>
    <span>Executive Dashboard</span>
  `;

  button.onclick = openV14ProfessionalDashboard;

  sidebar.appendChild(button);
}


/* =========================================================
   FLOATING PROFESSIONAL BUTTON
   ========================================================= */

function v14AddFloatingButton() {

  if (document.getElementById("v14FloatingButton")) {
    return;
  }

  const button = document.createElement("button");

  button.id = "v14FloatingButton";

  button.className = "v14-floating-button";

  button.innerHTML = "▣";

  button.title = "Executive Dashboard";

  button.onclick = openV14ProfessionalDashboard;

  document.body.appendChild(button);
}


/* =========================================================
   PROFESSIONAL CSS
   ========================================================= */

function v14InjectStyles() {

  if (document.getElementById("v14ProfessionalStyles")) {
    return;
  }

  const style = document.createElement("style");

  style.id = "v14ProfessionalStyles";

  style.textContent = `

    .v14-dashboard {
      width: min(1180px, 100%);
      margin: 0 auto;
      padding: 10px 4px 30px;
      font-family: Arial, sans-serif;
    }


    .v14-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 20px;
      margin-bottom: 22px;
    }


    .v14-eyebrow {
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 1.5px;
      opacity: .65;
      margin-bottom: 6px;
    }


    .v14-header h2 {
      margin: 0;
      font-size: 30px;
      font-weight: 800;
      letter-spacing: -.5px;
    }


    .v14-header p {
      margin: 7px 0 0;
      opacity: .65;
    }


    .v14-business-badge {
      padding: 9px 13px;
      border-radius: 999px;
      background: #f1f5f9;
      color: #334155;
      font-size: 12px;
      font-weight: 700;
      white-space: nowrap;
    }


    .v14-business-badge span {
      color: #16a34a;
      margin-right: 5px;
    }


    .v14-health-card {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      padding: 22px;
      border-radius: 18px;
      background: linear-gradient(135deg,#0f172a,#1e293b);
      color: white;
      margin-bottom: 26px;
      box-shadow: 0 12px 30px rgba(15,23,42,.18);
    }


    .v14-health-left {
      display: flex;
      align-items: center;
      gap: 15px;
    }


    .v14-health-icon {
      width: 48px;
      height: 48px;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255,255,255,.1);
      font-size: 22px;
    }


    .v14-small-title {
      font-size: 10px;
      letter-spacing: 1.3px;
      font-weight: 800;
      opacity: .65;
    }


    .v14-health-title {
      font-size: 21px;
      font-weight: 800;
      margin-top: 3px;
    }


    .v14-health-text {
      font-size: 12px;
      opacity: .7;
      margin-top: 3px;
    }


    .v14-health-score {
      text-align: right;
    }


    .v14-health-score strong {
      font-size: 42px;
      line-height: 1;
    }


    .v14-health-score span {
      opacity: .6;
      font-size: 14px;
    }


    .v14-section-title {
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 1.3px;
      color: #64748b;
      margin: 24px 0 11px;
    }


    .v14-kpi-grid {
      display: grid;
      grid-template-columns: repeat(4,1fr);
      gap: 14px;
    }


    .v14-kpi-card {
      background: white;
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      padding: 17px;
      box-shadow: 0 5px 18px rgba(15,23,42,.05);
    }


    .v14-kpi-top {
      display: flex;
      align-items: center;
      gap: 9px;
    }


    .v14-kpi-icon {
      font-size: 20px;
    }


    .v14-kpi-label {
      font-size: 12px;
      color: #64748b;
      font-weight: 700;
    }


    .v14-kpi-value {
      font-size: 25px;
      font-weight: 800;
      margin-top: 13px;
      word-break: break-word;
    }


    .v14-kpi-sub {
      font-size: 11px;
      color: #94a3b8;
      margin-top: 6px;
    }


    .v14-kpi-card.positive .v14-kpi-value {
      color: #16a34a;
    }


    .v14-kpi-card.negative .v14-kpi-value {
      color: #dc2626;
    }


    .v14-two-column {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-top: 16px;
    }


    .v14-panel {
      background: white;
      border: 1px solid #e2e8f0;
      border-radius: 18px;
      padding: 20px;
      box-shadow: 0 5px 18px rgba(15,23,42,.05);
    }


    .v14-panel-header {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 17px;
    }


    .v14-panel h3 {
      margin: 4px 0 0;
      font-size: 18px;
    }


    .v14-panel-icon {
      font-size: 22px;
    }


    .v14-finance-row,
    .v14-finance-total {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid #f1f5f9;
      font-size: 13px;
    }


    .v14-finance-row span {
      color: #64748b;
    }


    .v14-finance-total {
      margin-top: 5px;
      border: 0;
      font-size: 15px;
      font-weight: 800;
    }


    .v14-progress-number {
      font-size: 36px;
      font-weight: 800;
      margin-bottom: 12px;
    }


    .v14-progress-track {
      width: 100%;
      height: 11px;
      background: #e2e8f0;
      border-radius: 999px;
      overflow: hidden;
    }


    .v14-progress-fill {
      height: 100%;
      background: #2563eb;
      border-radius: 999px;
      transition: width .5s ease;
    }


    .v14-progress-caption {
      margin-top: 9px;
      color: #64748b;
      font-size: 12px;
    }


    .v14-mini-metrics {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin-top: 20px;
    }


    .v14-mini-metrics div {
      background: #f8fafc;
      padding: 12px;
      border-radius: 12px;
    }


    .v14-mini-metrics span {
      display: block;
      font-size: 10px;
      color: #64748b;
    }


    .v14-mini-metrics strong {
      display: block;
      margin-top: 4px;
      font-size: 18px;
    }


    .v14-priority-grid {
      display: grid;
      grid-template-columns: repeat(3,1fr);
      gap: 14px;
    }


    .v14-priority-card {
      display: flex;
      gap: 12px;
      background: white;
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      padding: 17px;
    }


    .v14-priority-icon {
      width: 40px;
      height: 40px;
      flex: 0 0 40px;
      border-radius: 12px;
      background: #f1f5f9;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 19px;
    }


    .v14-priority-content h4 {
      margin: 0;
      font-size: 14px;
    }


    .v14-priority-content p {
      margin: 6px 0 9px;
      font-size: 11px;
      line-height: 1.55;
      color: #64748b;
    }


    .v14-link-button {
      border: 0;
      background: none;
      padding: 0;
      font-size: 11px;
      font-weight: 800;
      cursor: pointer;
    }


    .v14-action-grid {
      display: grid;
      grid-template-columns: repeat(4,1fr);
      gap: 12px;
    }


    .v14-action-card {
      border: 1px solid #e2e8f0;
      background: white;
      border-radius: 15px;
      padding: 17px;
      text-align: left;
      cursor: pointer;
      transition: transform .15s ease, box-shadow .15s ease;
    }


    .v14-action-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(15,23,42,.08);
    }


    .v14-action-card span {
      display: block;
      font-size: 24px;
      margin-bottom: 10px;
    }


    .v14-action-card strong {
      display: block;
      font-size: 13px;
    }


    .v14-action-card small {
      display: block;
      color: #64748b;
      font-size: 10px;
      margin-top: 4px;
    }


    .v14-footer-note {
      text-align: center;
      color: #94a3b8;
      font-size: 10px;
      margin-top: 30px;
    }


    .v14-input-page {
      max-width: 760px;
      margin: auto;
    }


    .v14-form-header {
      margin-bottom: 20px;
    }


    .v14-form-header h2 {
      margin: 0;
      font-size: 25px;
    }


    .v14-form-header p {
      color: #64748b;
      font-size: 13px;
      margin-top: 6px;
    }


    .v14-form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
    }


    .v14-field label {
      display: block;
      font-size: 12px;
      font-weight: 700;
      margin-bottom: 6px;
    }


    .v14-field input {
      width: 100%;
      padding: 12px;
      border: 1px solid #cbd5e1;
      border-radius: 10px;
      outline: none;
    }


    .v14-field input:focus {
      border-color: #2563eb;
    }


    .v14-form-actions {
      display: flex;
      gap: 10px;
      margin-top: 20px;
    }


    .v14-sidebar-button {
      width: calc(100% - 20px);
      margin: 8px 10px;
      padding: 11px 13px;
      border: 0;
      border-radius: 10px;
      background: #0f172a;
      color: white;
      text-align: left;
      font-weight: 700;
      cursor: pointer;
    }


    .v14-sidebar-button span:first-child {
      margin-right: 8px;
    }


    .v14-floating-button {
      position: fixed;
      right: 18px;
      bottom: 18px;
      width: 50px;
      height: 50px;
      border: 0;
      border-radius: 50%;
      background: #0f172a;
      color: white;
      font-size: 20px;
      box-shadow: 0 10px 25px rgba(15,23,42,.25);
      z-index: 9999;
      cursor: pointer;
    }


    @media (max-width: 900px) {

      .v14-kpi-grid {
        grid-template-columns: 1fr 1fr;
      }

      .v14-priority-grid {
        grid-template-columns: 1fr;
      }

      .v14-action-grid {
        grid-template-columns: 1fr 1fr;
      }

    }


    @media (max-width: 650px) {

      .v14-dashboard {
        padding: 4px 0 25px;
      }

      .v14-header {
        flex-direction: column;
      }

      .v14-header h2 {
        font-size: 24px;
      }

      .v14-health-card {
        padding: 17px;
      }

      .v14-health-score strong {
        font-size: 32px;
      }

      .v14-kpi-grid {
        grid-template-columns: 1fr 1fr;
        gap: 9px;
      }

      .v14-kpi-card {
        padding: 13px;
      }

      .v14-kpi-value {
        font-size: 19px;
      }

      .v14-two-column {
        grid-template-columns: 1fr;
      }

      .v14-action-grid {
        grid-template-columns: 1fr 1fr;
      }

      .v14-form-grid {
        grid-template-columns: 1fr;
      }

    }

  `;

  document.head.appendChild(style);
}


/* =========================================================
   V14 INITIALIZATION
   ========================================================= */

function v14Init() {

  v14InjectStyles();

  setTimeout(() => {
    v14AddSidebarButton();
    v14AddFloatingButton();
  }, 1000);
}


/* =========================================================
   V14 GLOBAL EXPORTS
   ========================================================= */

window.openV14ProfessionalDashboard =
  openV14ProfessionalDashboard;

window.openV14BusinessInput =
  openV14BusinessInput;

window.v14SaveBusinessData =
  v14SaveBusinessData;

window.openV14SalesAction =
  openV14SalesAction;

window.openV14FinanceAction =
  openV14FinanceAction;

window.openV14GrowthAction =
  openV14GrowthAction;

window.openV14CustomerAction =
  openV14CustomerAction;

window.openV14ReviewAction =
  openV14ReviewAction;


/* =========================================================
   START V14
   ========================================================= */

if (document.readyState === "loading") {

  document.addEventListener(
    "DOMContentLoaded",
    () => {
      setTimeout(v14Init, 800);
    }
  );

} else {

  setTimeout(v14Init, 800);

}
   V13 GLOBAL EXPORTS
   ============================================================ */

window.openV13BusinessSimulator =
  openV13BusinessSimulator;

window.calculateV13BusinessSimulator =
  calculateV13BusinessSimulator;

window.v13AskSimulatorAI =
  v13AskSimulatorAI;

if (document.readyState === "loading") {

  document.addEventListener(
    "DOMContentLoaded",
    function() {
      setTimeout(v13Init, 1000);
    }
  );

} else {

  setTimeout(v13Init, 1000);
}
  // 8. V10 GLOBAL EXPORTS
  // ------------------------------------------------------------

  window.openV10Home =
    openV10Home;

  window.openV10Goal =
    openV10Goal;

  window.saveV10Goal =
    saveV10Goal;

  window.toggleV10Favorite =
    toggleV10Favorite;

  window.openV10Favorites =
    openV10Favorites;

  window.openV10LearningReport =
    openV10LearningReport;

  window.openV10BusinessSnapshot =
    openV10BusinessSnapshot;

  window.openV10Menu =
    openV10Menu;

  window.v10Track =
    v10Track;

  // ============================================================
  // END V10 PROFESSIONAL UPGRADE
  // ============================================================
  // ============================================================
  // GLOBAL EXPORTS
  // ============================================================

  window.goDashboard =
    goDashboard;

  window.toggleSidebar =
    toggleSidebar;

  window.toggleMenu =
    toggleMenu;


  // LESSONS

  window.openLessons =
    openLessons;

  window.openLesson =
    openLesson;

  window.showLesson =
    showLesson;

  window.filterLessons =
    filterLessons;

  window.openCategory =
    openCategory;

  window.markLessonComplete =
    markLessonComplete;

  window.continueLearning =
    continueLearning;

  window.isPremiumLesson =
    isPremiumLesson;

  window.hasPremiumAccess =
    hasPremiumAccess;

  window.openPremiumAccess =
    openPremiumAccess;


  // TOOLS

  window.openTools =
    openTools;

  window.openProfitCalculator =
    openProfitCalculator;

  window.calculateProfit =
    calculateProfit;

  window.openPricingCalculator =
    openPricingCalculator;

  window.calculatePrice =
    calculatePrice;

  window.openBreakEvenCalculator =
    openBreakEvenCalculator;

  window.calculateBreakEven =
    calculateBreakEven;

  window.openSalesTargetCalculator =
    openSalesTargetCalculator;

  window.calculateSalesTarget =
    calculateSalesTarget;

  window.openGrowthCalculator =
    openGrowthCalculator;

  window.calculateGrowth =
    calculateGrowth;

  window.openROICalculator =
    openROICalculator;

  window.calculateROI =
    calculateROI;

  window.openCommissionCalculator =
    openCommissionCalculator;

  window.calculateCommission =
    calculateCommission;

  window.openInventoryCalculator =
    openInventoryCalculator;

  window.calculateInventory =
    calculateInventory;

  window.openCashFlowPlanner =
    openCashFlowPlanner;

  window.calculateCashFlow =
    calculateCashFlow;

  window.openKPIDashboard =
    openKPIDashboard;

  window.calculateKPI =
    calculateKPI;


  // AI

  window.openAI =
    openAI;

  window.sendAIMessage =
    sendAIMessage;

  window.askAIQuick =
    askAIQuick;

  window.checkAIHealth =
    checkAIHealth;

  window.clearAIChat =
    clearAIChat;


  // BUSINESS PLAN

  window.openBusinessPlan =
    openBusinessPlan;

  window.generateBusinessPlan =
    generateBusinessPlan;


  // NOTES

  window.openNotes =
    openNotes;

  window.saveNewNote =
    saveNewNote;

  window.deleteNote =
    deleteNote;


  // PREMIUM

  window.openPremium =
    openPremium;

  window.openPremiumPlans =
    openPremiumPlans;

  window.openPaymentForm =
    openPaymentForm;

  window.submitPayment =
    submitPayment;

  window.activatePremiumForCurrentUser =
    activatePremiumForCurrentUser;


  // PROFILE

  window.openProfile =
    openProfile;

  window.changeUserName =
    changeUserName;

  window.saveNewUserName =
    saveNewUserName;


  // NOTIFICATIONS

  window.showNotification =
    showNotification;


  // SETTINGS

  window.openSettings =
    openSettings;

  window.resetLearningProgress =
    resetLearningProgress;

  window.clearAcademyData =
    clearAcademyData;


  // LOGIN / LOGOUT

  window.logoutUser =
    logoutUser;

  window.closeModal =
    closeModal;

  window.handleLogin =
    handleLogin;

  window.showToast =
    showToast;


  // ============================================================
  /* =========================================================
   AUNG BUSINESS ACADEMY
   V15 PROFESSIONAL MANAGEMENT SYSTEM
   SALES DASHBOARD + TARGET PLANNER + SALES TEAM
   SAFE ADD-ON
   ========================================================= */

const V15_SALES_KEY = "aung_business_academy_v15_sales_data";
const V15_TEAM_KEY = "aung_business_academy_v15_team_data";
const V15_TARGET_KEY = "aung_business_academy_v15_target_data";


/* =========================================================
   V15 STORAGE
   ========================================================= */

function v15Get(key, fallback) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch (error) {
    return fallback;
  }
}

function v15Set(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function v15Number(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

function v15Money(value) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0
  }).format(v15Number(value));
}

function v15Percent(value) {
  return v15Number(value).toFixed(1) + "%";
}

function v15Escape(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


/* =========================================================
   DEFAULT DATA
   ========================================================= */

function v15GetSalesData() {
  return v15Get(V15_SALES_KEY, {
    monthlySales: 0,
    monthlyTarget: 0,
    previousMonthSales: 0
  });
}

function v15GetTargetData() {
  return v15Get(V15_TARGET_KEY, {
    monthlyTarget: 0,
    workingDays: 26,
    daysPassed: 0,
    actualSales: 0
  });
}

function v15GetTeam() {
  return v15Get(V15_TEAM_KEY, []);
}


/* =========================================================
   SALES CALCULATIONS
   ========================================================= */

function v15CalculateSales() {

  const data = v15GetSalesData();

  const sales = v15Number(data.monthlySales);
  const target = v15Number(data.monthlyTarget);
  const previous = v15Number(data.previousMonthSales);

  const achievement =
    target > 0 ? (sales / target) * 100 : 0;

  const growth =
    previous > 0
      ? ((sales - previous) / previous) * 100
      : 0;

  const remaining =
    Math.max(target - sales, 0);

  return {
    sales,
    target,
    previous,
    achievement,
    growth,
    remaining
  };
}


/* =========================================================
   TARGET CALCULATIONS
   ========================================================= */

function v15CalculateTarget() {

  const data = v15GetTargetData();

  const target = v15Number(data.monthlyTarget);
  const workingDays = Math.max(
    v15Number(data.workingDays),
    1
  );

  const daysPassed = Math.min(
    Math.max(v15Number(data.daysPassed), 0),
    workingDays
  );

  const actual = v15Number(data.actualSales);

  const dailyTarget =
    target / workingDays;

  const remaining =
    Math.max(target - actual, 0);

  const remainingDays =
    Math.max(workingDays - daysPassed, 0);

  const requiredDaily =
    remainingDays > 0
      ? remaining / remainingDays
      : remaining;

  const achievement =
    target > 0
      ? (actual / target) * 100
      : 0;

  return {
    target,
    workingDays,
    daysPassed,
    actual,
    dailyTarget,
    remaining,
    remainingDays,
    requiredDaily,
    achievement
  };
}


/* =========================================================
   TEAM CALCULATIONS
   ========================================================= */

function v15TeamStats() {

  const team = v15GetTeam();

  const totalTarget = team.reduce(
    (sum, person) => sum + v15Number(person.target),
    0
  );

  const totalSales = team.reduce(
    (sum, person) => sum + v15Number(person.sales),
    0
  );

  const achievement =
    totalTarget > 0
      ? (totalSales / totalTarget) * 100
      : 0;

  return {
    team,
    totalTarget,
    totalSales,
    achievement
  };
}


/* =========================================================
   PAGE HEADER
   ========================================================= */

function v15Page(title, subtitle) {

  return `
    <div class="v15-page">

      <div class="v15-header">
        <div>
          <div class="v15-kicker">AUNG BUSINESS ACADEMY · V15</div>
          <h1>${v15Escape(title)}</h1>
          <p>${v15Escape(subtitle)}</p>
        </div>

        <button
          class="v15-secondary"
          onclick="openV15Dashboard()">
          ← Management Dashboard
        </button>
      </div>

    </div>
  `;
}


/* =========================================================
   METRIC CARD
   ========================================================= */

function v15Metric(title, value, label, icon) {

  return `
    <div class="v15-metric-card">

      <div class="v15-metric-icon">
        ${icon}
      </div>

      <div class="v15-metric-title">
        ${v15Escape(title)}
      </div>

      <div class="v15-metric-value">
        ${value}
      </div>

      <div class="v15-metric-label">
        ${v15Escape(label)}
      </div>

    </div>
  `;
}


/* =========================================================
   V15 MAIN DASHBOARD
   ========================================================= */

function openV15Dashboard() {

  if (typeof closeSidebarMobile === "function") {
    closeSidebarMobile();
  }

  const sales = v15CalculateSales();
  const target = v15CalculateTarget();
  const team = v15TeamStats();

  setPage(
    "V15 Professional Management",
    "Sales, Target and Team Performance Management"
  );

  showModal(`

    <div class="v15-container">

      <div class="v15-hero">

        <div>
          <span class="v15-badge">
            PROFESSIONAL MANAGEMENT SYSTEM
          </span>

          <h2>
            📊 Business Performance Center
          </h2>

          <p>
            လုပ်ငန်းရဲ့ Sales, Target နဲ့ Team Performance ကို
            တစ်နေရာတည်းကနေ စောင့်ကြည့်စီမံနိုင်ပါပြီ
          </p>
        </div>

      </div>


      <div class="v15-grid">

        ${v15Metric(
          "Monthly Sales",
          v15Money(sales.sales) + " Ks",
          "လက်ရှိလအရောင်း",
          "💰"
        )}

        ${v15Metric(
          "Sales Target",
          v15Money(sales.target) + " Ks",
          "လစဉ် Target",
          "🎯"
        )}

        ${v15Metric(
          "Achievement",
          v15Percent(sales.achievement),
          "Target ပြည့်မီမှု",
          "📈"
        )}

        ${v15Metric(
          "Growth",
          v15Percent(sales.growth),
          "ယခင်လနှင့်နှိုင်းယှဉ်မှု",
          "🚀"
        )}

        ${v15Metric(
          "Remaining Target",
          v15Money(sales.remaining) + " Ks",
          "ကျန်ရှိ Target",
          "🎯"
        )}

        ${v15Metric(
          "Team Achievement",
          v15Percent(team.achievement),
          "Sales Team စုစုပေါင်း",
          "👥"
        )}

      </div>


      <div class="v15-action-grid">

        <button
          class="v15-action"
          onclick="openV15SalesDashboard()">

          <span>📊</span>

          <strong>Sales Dashboard</strong>

          <small>
            Sales နှင့် Target Performance
          </small>

        </button>


        <button
          class="v15-action"
          onclick="openV15TargetPlanner()">

          <span>🎯</span>

          <strong>Target Planner</strong>

          <small>
            Daily Target နှင့် Remaining Target
          </small>

        </button>


        <button
          class="v15-action"
          onclick="openV15TeamManagement()">

          <span>👥</span>

          <strong>Sales Team</strong>

          <small>
            ဝန်ထမ်းတစ်ဦးချင်း Performance
          </small>

        </button>


        <button
          class="v15-action"
          onclick="openV15ManagementSummary()">

          <span>📋</span>

          <strong>Management Summary</strong>

          <small>
            Manager အတွက် အကျဉ်းချုပ်
          </small>

        </button>

      </div>

    </div>

  `);

}


/* =========================================================
   SALES DASHBOARD
   ========================================================= */

function openV15SalesDashboard() {

  const data = v15GetSalesData();
  const calc = v15CalculateSales();

  showModal(`

    <div class="v15-container">

      <div class="v15-section-title">
        <h2>📊 Sales Dashboard</h2>
        <p>လစဉ် Sales Performance ကို စောင့်ကြည့်ရန်</p>
      </div>


      <div class="v15-form-grid">

        <div>
          <label>Monthly Sales (Ks)</label>

          <input
            id="v15MonthlySales"
            class="v15-input"
            type="number"
            value="${data.monthlySales}"
            placeholder="ဥပမာ 50000000"
          >
        </div>


        <div>
          <label>Monthly Target (Ks)</label>

          <input
            id="v15MonthlyTarget"
            class="v15-input"
            type="number"
            value="${data.monthlyTarget}"
            placeholder="ဥပမာ 60000000"
          >
        </div>


        <div>
          <label>Previous Month Sales (Ks)</label>

          <input
            id="v15PreviousSales"
            class="v15-input"
            type="number"
            value="${data.previousMonthSales}"
            placeholder="ယခင်လ Sales"
          >
        </div>

      </div>


      <button
        class="v15-primary"
        onclick="v15SaveSalesData()">

        💾 Save Sales Data

      </button>


      <div class="v15-result-grid">

        ${v15Metric(
          "Sales",
          v15Money(calc.sales) + " Ks",
          "လက်ရှိ Sales",
          "💰"
        )}

        ${v15Metric(
          "Target",
          v15Money(calc.target) + " Ks",
          "လစဉ် Target",
          "🎯"
        )}

        ${v15Metric(
          "Achievement",
          v15Percent(calc.achievement),
          "Target Achievement",
          "📈"
        )}

        ${v15Metric(
          "Growth",
          v15Percent(calc.growth),
          "Monthly Growth",
          "🚀"
        )}

      </div>

    </div>

  `);
}


function v15SaveSalesData() {

  const monthlySales =
    v15Number(
      document.getElementById("v15MonthlySales")?.value
    );

  const monthlyTarget =
    v15Number(
      document.getElementById("v15MonthlyTarget")?.value
    );

  const previousMonthSales =
    v15Number(
      document.getElementById("v15PreviousSales")?.value
    );

  v15Set(V15_SALES_KEY, {
    monthlySales,
    monthlyTarget,
    previousMonthSales
  });

  showToast("Sales data saved successfully");

  openV15SalesDashboard();
}


/* =========================================================
   TARGET PLANNER
   ========================================================= */

function openV15TargetPlanner() {

  const data = v15GetTargetData();
  const calc = v15CalculateTarget();

  showModal(`

    <div class="v15-container">

      <div class="v15-section-title">

        <h2>🎯 Target Planner</h2>

        <p>
          Monthly Target ကို Daily Action အဖြစ် ပြောင်းလဲစီမံပါ
        </p>

      </div>


      <div class="v15-form-grid">

        <div>

          <label>Monthly Target (Ks)</label>

          <input
            id="v15Target"
            class="v15-input"
            type="number"
            value="${data.monthlyTarget}"
          >

        </div>


        <div>

          <label>Working Days</label>

          <input
            id="v15WorkingDays"
            class="v15-input"
            type="number"
            value="${data.workingDays}"
          >

        </div>


        <div>

          <label>Days Passed</label>

          <input
            id="v15DaysPassed"
            class="v15-input"
            type="number"
            value="${data.daysPassed}"
          >

        </div>


        <div>

          <label>Actual Sales (Ks)</label>

          <input
            id="v15ActualSales"
            class="v15-input"
            type="number"
            value="${data.actualSales}"
          >

        </div>

      </div>


      <button
        class="v15-primary"
        onclick="v15SaveTargetData()">

        💾 Save Target Plan

      </button>


      <div class="v15-result-grid">

        ${v15Metric(
          "Daily Target",
          v15Money(calc.dailyTarget) + " Ks",
          "နေ့စဉ်လိုအပ်သော Sales",
          "📅"
        )}

        ${v15Metric(
          "Achievement",
          v15Percent(calc.achievement),
          "Target ပြည့်မီမှု",
          "📈"
        )}

        ${v15Metric(
          "Remaining",
          v15Money(calc.remaining) + " Ks",
          "ကျန်ရှိ Target",
          "🎯"
        )}

        ${v15Metric(
          "Required Daily",
          v15Money(calc.requiredDaily) + " Ks",
          "ကျန်ရက်အလိုက်လိုအပ်ချက်",
          "🔥"
        )}

      </div>


      <div class="v15-advice">

        <strong>Manager Advice</strong>

        <p>
          ${
            calc.achievement >= 100
              ? "🎉 Target ပြည့်ပြီးဖြစ်ပါတယ် — Growth Target အသစ်တစ်ခု သတ်မှတ်ပါ"
              : calc.requiredDaily > calc.dailyTarget
              ? "⚠️ လက်ရှိ Pace ထက် ပိုမိုမြန်ဆန်စွာ ရောင်းချရန် လိုအပ်ပါတယ်"
              : "✅ လက်ရှိ Sales Pace ကို ဆက်လက်ထိန်းထားပါ"
          }
        </p>

      </div>

    </div>

  `);
}


function v15SaveTargetData() {

  const data = {
    monthlyTarget:
      v15Number(
        document.getElementById("v15Target")?.value
      ),

    workingDays:
      v15Number(
        document.getElementById("v15WorkingDays")?.value
      ),

    daysPassed:
      v15Number(
        document.getElementById("v15DaysPassed")?.value
      ),

    actualSales:
      v15Number(
        document.getElementById("v15ActualSales")?.value
      )
  };

  v15Set(V15_TARGET_KEY, data);

  showToast("Target plan saved successfully");

  openV15TargetPlanner();
}


/* =========================================================
   SALES TEAM MANAGEMENT
   ========================================================= */

function openV15TeamManagement() {

  const stats = v15TeamStats();

  const sortedTeam = [...stats.team].sort(
    (a, b) => {

      const aRate =
        v15Number(a.target) > 0
          ? v15Number(a.sales) / v15Number(a.target)
          : 0;

      const bRate =
        v15Number(b.target) > 0
          ? v15Number(b.sales) / v15Number(b.target)
          : 0;

      return bRate - aRate;
    }
  );

  showModal(`

    <div class="v15-container">

      <div class="v15-section-title">

        <h2>👥 Sales Team Management</h2>

        <p>
          Salesperson တစ်ဦးချင်း Performance ကို စီမံပါ
        </p>

      </div>


      <button
        class="v15-primary"
        onclick="openV15AddSalesperson()">

        + Add Salesperson

      </button>


      <div class="v15-team-summary">

        <div>
          <strong>${stats.team.length}</strong>
          <span>Salespeople</span>
        </div>

        <div>
          <strong>${v15Money(stats.totalTarget)} Ks</strong>
          <span>Total Target</span>
        </div>

        <div>
          <strong>${v15Money(stats.totalSales)} Ks</strong>
          <span>Total Sales</span>
        </div>

        <div>
          <strong>${v15Percent(stats.achievement)}</strong>
          <span>Achievement</span>
        </div>

      </div>


      <div class="v15-team-list">

        ${
          sortedTeam.length === 0
            ? `
              <div class="v15-empty">
                Salesperson မရှိသေးပါ
              </div>
            `
            : sortedTeam.map((person, index) => {

              const target =
                v15Number(person.target);

              const sales =
                v15Number(person.sales);

              const achievement =
                target > 0
                  ? (sales / target) * 100
                  : 0;

              return `

                <div class="v15-person-card">

                  <div class="v15-rank">
                    #${index + 1}
                  </div>

                  <div class="v15-person-info">

                    <strong>
                      ${v15Escape(person.name)}
                    </strong>

                    <small>
                      Target: ${v15Money(target)} Ks
                    </small>

                  </div>

                  <div class="v15-person-performance">

                    <strong>
                      ${v15Money(sales)} Ks
                    </strong>

                    <span>
                      ${v15Percent(achievement)}
                    </span>

                  </div>

                  <div class="v15-person-actions">

                    <button
                      onclick="v15EditSalesperson('${person.id}')">
                      Edit
                    </button>

                    <button
                      onclick="v15DeleteSalesperson('${person.id}')">
                      Delete
                    </button>

                  </div>

                </div>

              `;

            }).join("")
        }

      </div>

    </div>

  `);
}


/* =========================================================
   ADD SALESPERSON
   ========================================================= */

function openV15AddSalesperson(editId = null) {

  const team = v15GetTeam();

  const person = editId
    ? team.find(item => String(item.id) === String(editId))
    : null;

  showModal(`

    <div class="v15-container">

      <div class="v15-section-title">

        <h2>
          ${person ? "✏️ Edit Salesperson" : "👤 Add Salesperson"}
        </h2>

      </div>


      <div class="v15-form-grid">

        <div>

          <label>Salesperson Name</label>

          <input
            id="v15PersonName"
            class="v15-input"
            value="${v15Escape(person?.name || "")}"
            placeholder="ဝန်ထမ်းအမည်"
          >

        </div>


        <div>

          <label>Monthly Target (Ks)</label>

          <input
            id="v15PersonTarget"
            class="v15-input"
            type="number"
            value="${person?.target || 0}"
          >

        </div>


        <div>

          <label>Actual Sales (Ks)</label>

          <input
            id="v15PersonSales"
            class="v15-input"
            type="number"
            value="${person?.sales || 0}"
          >

        </div>

      </div>


      <button
        class="v15-primary"
        onclick="v15SaveSalesperson('${person?.id || ""}')">

        💾 Save Salesperson

      </button>

    </div>

  `);
}


function v15SaveSalesperson(editId = "") {

  const name =
    document.getElementById("v15PersonName")?.value.trim();

  const target =
    v15Number(
      document.getElementById("v15PersonTarget")?.value
    );

  const sales =
    v15Number(
      document.getElementById("v15PersonSales")?.value
    );

  if (!name) {
    showToast("Salesperson name ထည့်ပါ");
    return;
  }

  const team = v15GetTeam();

  if (editId) {

    const index = team.findIndex(
      item => String(item.id) === String(editId)
    );

    if (index >= 0) {
      team[index] = {
        ...team[index],
        name,
        target,
        sales
      };
    }

  } else {

    team.push({
      id: Date.now().toString(),
      name,
      target,
      sales
    });

  }

  v15Set(V15_TEAM_KEY, team);

  showToast("Salesperson saved successfully");

  openV15TeamManagement();
}


function v15EditSalesperson(id) {
  openV15AddSalesperson(id);
}


function v15DeleteSalesperson(id) {

  const team = v15GetTeam();

  const updated = team.filter(
    item => String(item.id) !== String(id)
  );

  v15Set(V15_TEAM_KEY, updated);

  showToast("Salesperson deleted");

  openV15TeamManagement();
}


/* =========================================================
   MANAGEMENT SUMMARY
   ========================================================= */

function openV15ManagementSummary() {

  const sales = v15CalculateSales();
  const target = v15CalculateTarget();
  const team = v15TeamStats();

  let priority = "";
  let action = "";

  if (sales.achievement < 70) {

    priority = "🔴 Sales Recovery";
    action =
      "Sales Target Achievement နည်းနေသောကြောင့် " +
      "Top Customers, Pipeline နှင့် Field Execution ကို ချက်ချင်းပြန်စစ်ပါ";

  } else if (sales.achievement < 90) {

    priority = "🟠 Target Acceleration";
    action =
      "Target ရောက်ရန် ကျန်ရှိသော Sales ကို " +
      "Daily Action Plan ဖြင့် အရှိန်မြှင့်ပါ";

  } else if (sales.achievement < 100) {

    priority = "🟡 Target Closing";
    action =
      "လကုန်မတိုင်မီ ကျန် Target ကို Customer Follow-up " +
      "နှင့် Closing Activity ဖြင့် ဖြည့်ပါ";

  } else {

    priority = "🟢 Growth";
    action =
      "Target ပြည့်ပြီးဖြစ်သောကြောင့် Growth Target နှင့် " +
      "New Customer Acquisition ကို အာရုံစိုက်ပါ";
  }


  showModal(`

    <div class="v15-container">

      <div class="v15-section-title">

        <h2>📋 Management Summary</h2>

        <p>
          Manager အတွက် လုပ်ငန်းအခြေအနေ အကျဉ်းချုပ်
        </p>

      </div>


      <div class="v15-summary-box">

        <span>Current Priority</span>

        <strong>
          ${priority}
        </strong>

        <p>
          ${action}
        </p>

      </div>


      <div class="v15-summary-grid">

        <div>
          <span>Sales</span>
          <strong>${v15Money(sales.sales)} Ks</strong>
        </div>

        <div>
          <span>Target</span>
          <strong>${v15Money(sales.target)} Ks</strong>
        </div>

        <div>
          <span>Achievement</span>
          <strong>${v15Percent(sales.achievement)}</strong>
        </div>

        <div>
          <span>Remaining</span>
          <strong>${v15Money(sales.remaining)} Ks</strong>
        </div>

        <div>
          <span>Daily Target</span>
          <strong>${v15Money(target.dailyTarget)} Ks</strong>
        </div>

        <div>
          <span>Team Achievement</span>
          <strong>${v15Percent(team.achievement)}</strong>
        </div>

      </div>


      <div class="v15-advice">

        <strong>Today's Manager Action</strong>

        <ol>

          <li>
            Top Customer 5 ယောက်ကို Follow-up လုပ်ပါ
          </li>

          <li>
            Sales Team ရဲ့ Individual Gap ကို စစ်ပါ
          </li>

          <li>
            Remaining Target ကို Daily Target ခွဲပါ
          </li>

          <li>
            End-of-day Sales Review ပြုလုပ်ပါ
          </li>

        </ol>

      </div>

    </div>

  `);
}


/* =========================================================
   SIDEBAR / FLOATING BUTTON
   ========================================================= */

function v15AddButton() {

  if (document.getElementById("v15-floating-button")) {
    return;
  }

  const button = document.createElement("button");

  button.id = "v15-floating-button";
  button.innerHTML = "📊 V15 Management";
  button.onclick = openV15Dashboard;

  document.body.appendChild(button);
}


/* =========================================================
   V15 CSS
   ========================================================= */

function v15InjectStyles() {

  if (document.getElementById("v15-styles")) {
    return;
  }

  const style = document.createElement("style");

  style.id = "v15-styles";

  style.textContent = `

    .v15-container {
      width: 100%;
      max-width: 1180px;
      margin: auto;
      padding: 8px;
    }

    .v15-header {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      align-items: center;
      margin-bottom: 24px;
    }

    .v15-kicker {
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 1.5px;
      opacity: .65;
      margin-bottom: 8px;
    }

    .v15-header h1,
    .v15-section-title h2 {
      margin: 0 0 8px;
    }

    .v15-header p,
    .v15-section-title p {
      margin: 0;
      opacity: .7;
    }

    .v15-hero {
      border-radius: 22px;
      padding: 28px;
      margin-bottom: 20px;
      background:
        linear-gradient(
          135deg,
          #111827,
          #1f2937
        );
      color: white;
    }

    .v15-hero h2 {
      margin: 14px 0 8px;
      font-size: 28px;
    }

    .v15-hero p {
      margin: 0;
      opacity: .82;
      line-height: 1.7;
    }

    .v15-badge {
      display: inline-block;
      padding: 7px 12px;
      border-radius: 999px;
      background: rgba(255,255,255,.12);
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 1px;
    }

    .v15-grid,
    .v15-result-grid {
      display: grid;
      grid-template-columns:
        repeat(4, minmax(0, 1fr));
      gap: 14px;
      margin-bottom: 20px;
    }

    .v15-metric-card {
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 18px;
      padding: 18px;
      box-shadow:
        0 8px 25px rgba(15,23,42,.06);
    }

    .v15-metric-icon {
      font-size: 22px;
      margin-bottom: 10px;
    }

    .v15-metric-title {
      font-size: 13px;
      font-weight: 700;
      opacity: .7;
    }

    .v15-metric-value {
      font-size: 25px;
      font-weight: 900;
      margin: 8px 0 4px;
    }

    .v15-metric-label {
      font-size: 12px;
      opacity: .6;
    }

    .v15-action-grid {
      display: grid;
      grid-template-columns:
        repeat(2, minmax(0, 1fr));
      gap: 14px;
    }

    .v15-action {
      text-align: left;
      border: 1px solid #e5e7eb;
      background: white;
      border-radius: 18px;
      padding: 20px;
      cursor: pointer;
      transition: .2s;
    }

    .v15-action:hover {
      transform: translateY(-2px);
      box-shadow:
        0 10px 28px rgba(15,23,42,.09);
    }

    .v15-action span {
      display: block;
      font-size: 28px;
      margin-bottom: 10px;
    }

    .v15-action strong {
      display: block;
      font-size: 16px;
      margin-bottom: 5px;
    }

    .v15-action small {
      opacity: .65;
    }

    .v15-form-grid {
      display: grid;
      grid-template-columns:
        repeat(2, minmax(0, 1fr));
      gap: 15px;
      margin: 20px 0;
    }

    .v15-form-grid label {
      display: block;
      margin-bottom: 7px;
      font-size: 13px;
      font-weight: 700;
    }

    .v15-input {
      width: 100%;
      padding: 13px 14px;
      border: 1px solid #d1d5db;
      border-radius: 12px;
      outline: none;
      font-size: 14px;
      background: white;
    }

    .v15-input:focus {
      border-color: #6b7280;
      box-shadow:
        0 0 0 3px rgba(107,114,128,.12);
    }

    .v15-primary,
    .v15-secondary {
      border: 0;
      border-radius: 12px;
      padding: 12px 17px;
      cursor: pointer;
      font-weight: 800;
      margin: 4px;
    }

    .v15-primary {
      background: #111827;
      color: white;
    }

    .v15-secondary {
      background: #f3f4f6;
      color: #111827;
    }

    .v15-team-summary {
      display: grid;
      grid-template-columns:
        repeat(4, 1fr);
      gap: 12px;
      margin: 20px 0;
    }

    .v15-team-summary > div {
      background: #f8fafc;
      border-radius: 15px;
      padding: 15px;
    }

    .v15-team-summary strong,
    .v15-team-summary span {
      display: block;
    }

    .v15-team-summary strong {
      font-size: 20px;
      margin-bottom: 4px;
    }

    .v15-team-summary span {
      font-size: 12px;
      opacity: .65;
    }

    .v15-person-card {
      display: grid;
      grid-template-columns:
        55px 1fr auto auto;
      gap: 15px;
      align-items: center;
      padding: 15px;
      border: 1px solid #e5e7eb;
      border-radius: 15px;
      margin-bottom: 10px;
      background: white;
    }

    .v15-rank {
      font-weight: 900;
      font-size: 18px;
    }

    .v15-person-info strong,
    .v15-person-info small {
      display: block;
    }

    .v15-person-info small {
      opacity: .6;
      margin-top: 4px;
    }

    .v15-person-performance strong,
    .v15-person-performance span {
      display: block;
      text-align: right;
    }

    .v15-person-performance span {
      font-size: 12px;
      margin-top: 4px;
      opacity: .7;
    }

    .v15-person-actions button {
      border: 0;
      background: #f3f4f6;
      padding: 8px 10px;
      border-radius: 8px;
      cursor: pointer;
      margin-left: 4px;
    }

    .v15-advice,
    .v15-summary-box {
      margin-top: 20px;
      padding: 18px;
      border-radius: 16px;
      background: #f8fafc;
      border: 1px solid #e5e7eb;
    }

    .v15-advice strong,
    .v15-summary-box span,
    .v15-summary-box strong {
      display: block;
    }

    .v15-summary-box strong {
      font-size: 24px;
      margin: 8px 0;
    }

    .v15-summary-box p {
      line-height: 1.7;
      margin: 0;
    }

    .v15-summary-grid {
      display: grid;
      grid-template-columns:
        repeat(3, 1fr);
      gap: 12px;
      margin-top: 20px;
    }

    .v15-summary-grid > div {
      padding: 16px;
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 14px;
    }

    .v15-summary-grid span,
    .v15-summary-grid strong {
      display: block;
    }

    .v15-summary-grid span {
      font-size: 12px;
      opacity: .6;
      margin-bottom: 5px;
    }

    .v15-summary-grid strong {
      font-size: 18px;
    }

    .v15-empty {
      text-align: center;
      padding: 35px;
      opacity: .6;
    }

    #v15-floating-button {
      position: fixed;
      right: 18px;
      bottom: 18px;
      z-index: 9999;
      border: 0;
      border-radius: 999px;
      padding: 12px 17px;
      background: #111827;
      color: white;
      font-weight: 800;
      cursor: pointer;
      box-shadow:
        0 10px 30px rgba(0,0,0,.18);
    }

    @media (max-width: 900px) {

      .v15-grid,
      .v15-result-grid {
        grid-template-columns:
          repeat(2, minmax(0, 1fr));
      }

      .v15-team-summary {
        grid-template-columns:
          repeat(2, 1fr);
      }

      .v15-summary-grid {
        grid-template-columns:
          repeat(2, 1fr);
      }

    }

    @media (max-width: 600px) {

      .v15-container {
        padding: 5px;
      }

      .v15-header {
        flex-direction: column;
        align-items: stretch;
      }

      .v15-hero {
        padding: 20px;
      }

      .v15-hero h2 {
        font-size: 22px;
      }

      .v15-grid,
      .v15-result-grid,
      .v15-action-grid,
      .v15-form-grid,
      .v15-team-summary,
      .v15-summary-grid {
        grid-template-columns: 1fr;
      }

      .v15-person-card {
        grid-template-columns:
          40px 1fr;
      }

      .v15-person-performance,
      .v15-person-actions {
        grid-column: 2;
      }

      .v15-person-performance strong,
      .v15-person-performance span {
        text-align: left;
      }

      #v15-floating-button {
        right: 12px;
        bottom: 12px;
        font-size: 12px;
      }

    }

  `;

  document.head.appendChild(style);
}


/* =========================================================
   V15 STARTUP
   ========================================================= */

function v15Init() {

  v15InjectStyles();

  setTimeout(() => {
    v15AddButton();
  }, 1200);

}


/* =========================================================
   V15 GLOBAL EXPORTS
   ========================================================= */

window.openV15Dashboard = openV15Dashboard;
window.openV15SalesDashboard = openV15SalesDashboard;
window.v15SaveSalesData = v15SaveSalesData;

window.openV15TargetPlanner = openV15TargetPlanner;
window.v15SaveTargetData = v15SaveTargetData;

window.openV15TeamManagement = openV15TeamManagement;
window.openV15AddSalesperson = openV15AddSalesperson;
window.v15SaveSalesperson = v15SaveSalesperson;
window.v15EditSalesperson = v15EditSalesperson;
window.v15DeleteSalesperson = v15DeleteSalesperson;

window.openV15ManagementSummary = openV15ManagementSummary;


/* =========================================================
   V15 RUN
   ========================================================= */

if (document.readyState === "loading") {

  document.addEventListener(
    "DOMContentLoaded",
    v15Init
  );

} else {

  v15Init();

}
  /* =========================================================
   AUNG BUSINESS ACADEMY
   V15.3 SALESMAN INDIVIDUAL PERFORMANCE & ANALYTICS
   ========================================================= */

const V153_TEAM_KEY = "aung_business_academy_v153_salesmen";
const V153_DAILY_KEY = "aung_business_academy_v153_daily_sales";
const V153_SELECTED_KEY = "aung_business_academy_v153_selected_salesman";


/* =========================================================
   STORAGE HELPERS
   ========================================================= */

function v153Get(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    return fallback;
  }
}

function v153Set(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function v153Num(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

function v153Money(value) {
  return new Intl.NumberFormat("en-US").format(
    Math.round(v153Num(value))
  );
}

function v153Percent(value) {
  return `${v153Num(value).toFixed(1)}%`;
}

function v153Esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function v153Id() {
  return "SP-" + Date.now() + "-" + Math.floor(Math.random() * 9999);
}


/* =========================================================
   SALESMAN DATA
   ========================================================= */

function v153GetSalesmen() {
  let salesmen = v153Get(V153_TEAM_KEY, []);

  if (!Array.isArray(salesmen)) {
    salesmen = [];
  }

  return salesmen;
}

function v153SaveSalesmen(data) {
  v153Set(V153_TEAM_KEY, data);
}

function v153GetDailySales() {
  let data = v153Get(V153_DAILY_KEY, []);

  if (!Array.isArray(data)) {
    data = [];
  }

  return data;
}

function v153SaveDailySales(data) {
  v153Set(V153_DAILY_KEY, data);
}


/* =========================================================
   BRIDGE OLD V15 TEAM DATA
   ========================================================= */

function v153ImportOldV15Team() {

  const existing = v153GetSalesmen();

  if (existing.length > 0) {
    return existing;
  }

  let oldTeam = [];

  try {
    oldTeam = v15Get(V15_TEAM_KEY, []);
  } catch (e) {
    oldTeam = [];
  }

  if (!Array.isArray(oldTeam)) {
    oldTeam = [];
  }

  const converted = oldTeam.map((person, index) => ({
    id: person.id || `SP-OLD-${index + 1}`,
    name: person.name || `Salesman ${index + 1}`,
    target: v153Num(person.target),
    actual: v153Num(person.actual),
    previousMonthSales: v153Num(
      person.previousMonthSales || person.previous || 0
    ),
    role: person.role || "Salesman",
    territory: person.territory || "",
    active: person.active !== false
  }));

  if (converted.length > 0) {
    v153SaveSalesmen(converted);
  }

  return converted;
}


/* =========================================================
   SALES CALCULATIONS
   ========================================================= */

function v153GetSalesmanMetrics(salesmanId) {

  const salesmen = v153GetSalesmen();

  const salesman = salesmen.find(
    x => String(x.id) === String(salesmanId)
  );

  if (!salesman) {
    return null;
  }

  const daily = v153GetDailySales().filter(
    x => String(x.salesmanId) === String(salesmanId)
  );

  const target = v153Num(salesman.target);

  let actual = v153Num(salesman.actual);

  const dailyActual = daily.reduce(
    (sum, item) => sum + v153Num(item.sales),
    0
  );

  if (daily.length > 0) {
    actual = dailyActual;
  }

  const previous = v153Num(
    salesman.previousMonthSales
  );

  const achievement =
    target > 0
      ? (actual / target) * 100
      : 0;

  const gap = Math.max(target - actual, 0);

  const growth =
    previous > 0
      ? ((actual - previous) / previous) * 100
      : 0;

  const workingDays = 26;

  const uniqueDates = [
    ...new Set(
      daily
        .map(x => x.date)
        .filter(Boolean)
    )
  ].sort();

  const daysPassed = Math.min(
    workingDays,
    Math.max(uniqueDates.length, 0)
  );

  const remainingDays = Math.max(
    workingDays - daysPassed,
    0
  );

  const dailyTarget =
    target > 0
      ? target / workingDays
      : 0;

  const dailyActual =
    daysPassed > 0
      ? actual / daysPassed
      : 0;

  const requiredDaily =
    remainingDays > 0
      ? gap / remainingDays
      : gap;

  const forecast =
    dailyActual * workingDays;

  const forecastAchievement =
    target > 0
      ? (forecast / target) * 100
      : 0;

  const visits = daily.reduce(
    (sum, item) => sum + v153Num(item.visits),
    0
  );

  const orders = daily.reduce(
    (sum, item) => sum + v153Num(item.orders),
    0
  );

  const collections = daily.reduce(
    (sum, item) => sum + v153Num(item.collections),
    0
  );

  const newCustomers = daily.reduce(
    (sum, item) => sum + v153Num(item.newCustomers),
    0
  );

  return {
    salesman,
    daily,
    target,
    actual,
    previous,
    achievement,
    gap,
    growth,
    workingDays,
    daysPassed,
    remainingDays,
    dailyTarget,
    dailyActual,
    requiredDaily,
    forecast,
    forecastAchievement,
    visits,
    orders,
    collections,
    newCustomers
  };
}


/* =========================================================
   STATUS
   ========================================================= */

function v153Status(achievement) {

  if (achievement >= 100) {
    return {
      text: "Target Achieved",
      className: "v153-success",
      icon: "🏆"
    };
  }

  if (achievement >= 80) {
    return {
      text: "On Track",
      className: "v153-good",
      icon: "🟢"
    };
  }

  if (achievement >= 60) {
    return {
      text: "Needs Attention",
      className: "v153-warning",
      icon: "🟡"
    };
  }

  return {
    text: "Critical",
    className: "v153-danger",
    icon: "🔴"
  };
}


/* =========================================================
   MAIN SALESMAN MANAGEMENT
   ========================================================= */

function openV153Salesmen() {

  if (typeof closeSidebarMobile === "function") {
    closeSidebarMobile();
  }

  v153ImportOldV15Team();

  if (typeof setPage === "function") {
    setPage(
      "Salesman Performance",
      "Salesman တစ်ယောက်ချင်းစီ၏ Target, Actual, KPI နှင့် Performance ကို စီမံခန့်ခွဲပါ"
    );
  }

  const salesmen = v153GetSalesmen();

  const activeSalesmen = salesmen.filter(
    x => x.active !== false
  );

  const totalTarget = activeSalesmen.reduce(
    (sum, x) => sum + v153Num(x.target),
    0
  );

  const totalActual = activeSalesmen.reduce(
    (sum, x) => sum + v153Num(x.actual),
    0
  );

  const achievement =
    totalTarget > 0
      ? (totalActual / totalTarget) * 100
      : 0;

  const html = `
    <div class="v153-page">

      <div class="v153-header">

        <div>
          <div class="v153-kicker">
            SALES MANAGEMENT
          </div>

          <h2>
            👥 Salesman Performance
          </h2>

          <p>
            Salesman တစ်ယောက်ချင်းစီရဲ့ KPI နဲ့ Performance ကို ကြည့်နိုင်ပါတယ်
          </p>
        </div>

        <button
          class="primary-button"
          onclick="openV153AddSalesman()"
        >
          ＋ Add Salesman
        </button>

      </div>


      <div class="v153-summary-grid">

        <div class="v153-summary-card">
          <span>Total Salesmen</span>
          <strong>${activeSalesmen.length}</strong>
        </div>

        <div class="v153-summary-card">
          <span>Total Target</span>
          <strong>${v153Money(totalTarget)}</strong>
        </div>

        <div class="v153-summary-card">
          <span>Total Actual</span>
          <strong>${v153Money(totalActual)}</strong>
        </div>

        <div class="v153-summary-card">
          <span>Achievement</span>
          <strong>${v153Percent(achievement)}</strong>
        </div>

      </div>


      <div class="v153-toolbar">

        <input
          id="v153Search"
          class="tool-input"
          placeholder="🔎 Salesman ရှာရန်..."
          oninput="v153RenderSalesmen()"
        />

        <select
          id="v153StatusFilter"
          class="tool-input"
          onchange="v153RenderSalesmen()"
        >
          <option value="all">All Salesmen</option>
          <option value="achieved">Target Achieved</option>
          <option value="good">On Track</option>
          <option value="warning">Needs Attention</option>
          <option value="danger">Critical</option>
        </select>

      </div>


      <div
        id="v153SalesmanList"
        class="v153-salesman-grid"
      ></div>

    </div>
  `;

  const container = document.getElementById("app");

  if (container) {
    container.innerHTML = html;
  }

  v153RenderSalesmen();
}


/* =========================================================
   SALESMAN LIST
   ========================================================= */

function v153RenderSalesmen() {

  const container = document.getElementById(
    "v153SalesmanList"
  );

  if (!container) {
    return;
  }

  const salesmen = v153GetSalesmen()
    .filter(x => x.active !== false);

  const search =
    document.getElementById("v153Search")
      ?.value
      ?.toLowerCase()
      ?.trim() || "";

  const filter =
    document.getElementById("v153StatusFilter")
      ?.value || "all";

  const filtered = salesmen.filter(person => {

    const name = String(
      person.name || ""
    ).toLowerCase();

    if (
      search &&
      !name.includes(search)
    ) {
      return false;
    }

    const metrics =
      v153GetSalesmanMetrics(person.id);

    const achievement =
      metrics?.achievement || 0;

    if (
      filter === "achieved" &&
      achievement < 100
    ) {
      return false;
    }

    if (
      filter === "good" &&
      (achievement < 80 ||
       achievement >= 100)
    ) {
      return false;
    }

    if (
      filter === "warning" &&
      (achievement < 60 ||
       achievement >= 80)
    ) {
      return false;
    }

    if (
      filter === "danger" &&
      achievement >= 60
    ) {
      return false;
    }

    return true;
  });


  if (filtered.length === 0) {

    container.innerHTML = `
      <div class="v153-empty">

        <div class="v153-empty-icon">
          👥
        </div>

        <h3>
          Salesman မရှိသေးပါ
        </h3>

        <p>
          Add Salesman ကိုနှိပ်ပြီး Salesman အသစ်ထည့်ပါ
        </p>

        <button
          class="primary-button"
          onclick="openV153AddSalesman()"
        >
          ＋ Add Salesman
        </button>

      </div>
    `;

    return;
  }


  const sorted = filtered.sort(
    (a, b) => {

      const ma =
        v153GetSalesmanMetrics(a.id);

      const mb =
        v153GetSalesmanMetrics(b.id);

      return (
        (mb?.achievement || 0) -
        (ma?.achievement || 0)
      );
    }
  );


  container.innerHTML = sorted
    .map((person, index) =>
      v153SalesmanCard(
        person,
        index + 1
      )
    )
    .join("");
}


/* =========================================================
   SALESMAN CARD
   ========================================================= */

function v153SalesmanCard(
  person,
  ranking
) {

  const m =
    v153GetSalesmanMetrics(person.id);

  const status =
    v153Status(m.achievement);

  const progress =
    Math.min(
      Math.max(m.achievement, 0),
      100
    );

  return `
    <div
      class="v153-salesman-card"
      onclick="openV153SalesmanDetail('${v153Esc(person.id)}')"
    >

      <div class="v153-card-top">

        <div class="v153-avatar">
          ${v153Esc(
            String(person.name || "S")
              .charAt(0)
              .toUpperCase()
          )}
        </div>

        <div class="v153-person-info">

          <h3>
            ${v153Esc(person.name)}
          </h3>

          <span>
            ${v153Esc(
              person.territory || "Sales Territory"
            )}
          </span>

        </div>

        <div class="v153-rank">
          #${ranking}
        </div>

      </div>


      <div class="v153-status ${status.className}">
        ${status.icon}
        ${status.text}
      </div>


      <div class="v153-progress">

        <div class="v153-progress-label">

          <span>
            Achievement
          </span>

          <strong>
            ${v153Percent(m.achievement)}
          </strong>

        </div>

        <div class="v153-progress-track">

          <div
            class="v153-progress-fill"
            style="width:${progress}%"
          ></div>

        </div>

      </div>


      <div class="v153-card-metrics">

        <div>
          <small>Target</small>
          <strong>${v153Money(m.target)}</strong>
        </div>

        <div>
          <small>Actual</small>
          <strong>${v153Money(m.actual)}</strong>
        </div>

        <div>
          <small>Gap</small>
          <strong>${v153Money(m.gap)}</strong>
        </div>

        <div>
          <small>Growth</small>
          <strong>${v153Percent(m.growth)}</strong>
        </div>

      </div>


      <div class="v153-card-footer">

        <span>
          📅 Daily Target:
          ${v153Money(m.dailyTarget)}
        </span>

        <span>
          →
        </span>

      </div>

    </div>
  `;
}


/* =========================================================
   ADD SALESMAN
   ========================================================= */

function openV153AddSalesman() {

  const html = `
    <div class="v153-modal">

      <h2>
        ＋ Add Salesman
      </h2>

      <p>
        Salesman အချက်အလက် ထည့်သွင်းပါ
      </p>


      <label>Name</label>

      <input
        id="v153Name"
        class="tool-input"
        placeholder="Salesman Name"
      />


      <label>Territory</label>

      <input
        id="v153Territory"
        class="tool-input"
        placeholder="Yangon / North / South..."
      />


      <label>Monthly Target</label>

      <input
        id="v153Target"
        class="tool-input"
        type="number"
        placeholder="25000000"
      />


      <label>Previous Month Sales</label>

      <input
        id="v153Previous"
        class="tool-input"
        type="number"
        placeholder="20000000"
      />


      <label>Role</label>

      <input
        id="v153Role"
        class="tool-input"
        value="Salesman"
      />


      <div class="v153-modal-actions">

        <button
          class="primary-button"
          onclick="v153SaveNewSalesman()"
        >
          Save Salesman
        </button>

        <button
          class="secondary-button"
          onclick="closeModal()"
        >
          Cancel
        </button>

      </div>

    </div>
  `;

  showModal(html);
}


function v153SaveNewSalesman() {

  const name =
    document.getElementById("v153Name")
      ?.value
      ?.trim();

  if (!name) {
    showToast("Salesman Name ထည့်ပါ");
    return;
  }

  const salesmen =
    v153GetSalesmen();

  salesmen.push({

    id: v153Id(),

    name,

    target: v153Num(
      document.getElementById("v153Target")
        ?.value
    ),

    actual: 0,

    previousMonthSales:
      v153Num(
        document.getElementById("v153Previous")
          ?.value
      ),

    role:
      document.getElementById("v153Role")
        ?.value
        ?.trim() || "Salesman",

    territory:
      document.getElementById("v153Territory")
        ?.value
        ?.trim() || "",

    active: true

  });

  v153SaveSalesmen(salesmen);

  closeModal();

  openV153Salesmen();

  showToast(
    "Salesman successfully added"
  );
}


/* =========================================================
   SALESMAN DETAIL
   ========================================================= */

function openV153SalesmanDetail(
  salesmanId
) {

  v153Set(
    V153_SELECTED_KEY,
    salesmanId
  );

  const m =
    v153GetSalesmanMetrics(
      salesmanId
    );

  if (!m) {
    showToast(
      "Salesman data မတွေ့ပါ"
    );
    return;
  }

  const status =
    v153Status(
      m.achievement
    );


  if (typeof setPage === "function") {
    setPage(
      `${m.salesman.name} - Performance`,
      "Individual Salesman Performance Dashboard"
    );
  }


  const dailyRows =
    [...m.daily]
      .sort(
        (a, b) =>
          String(b.date)
            .localeCompare(
              String(a.date)
            )
      )
      .slice(0, 10);


  const html = `
    <div class="v153-page">

      <div class="v153-detail-header">

        <button
          class="secondary-button"
          onclick="openV153Salesmen()"
        >
          ← Back to Sales Team
        </button>

        <div class="v153-detail-person">

          <div class="v153-big-avatar">
            ${v153Esc(
              String(m.salesman.name)
                .charAt(0)
                .toUpperCase()
            )}
          </div>

          <div>

            <h2>
              ${v153Esc(m.salesman.name)}
            </h2>

            <p>
              ${v153Esc(
                m.salesman.role || "Salesman"
              )}
              ${
                m.salesman.territory
                  ? " · " +
                    v153Esc(
                      m.salesman.territory
                    )
                  : ""
              }
            </p>

          </div>

        </div>

        <div class="v153-detail-actions">

          <button
            class="primary-button"
            onclick="openV153DailyEntry('${v153Esc(m.salesman.id)}')"
          >
            ＋ Daily Sales
          </button>

          <button
            class="secondary-button"
            onclick="v153AskSalesmanAI('${v153Esc(m.salesman.id)}')"
          >
            🤖 AI Analysis
          </button>

          <button
            class="secondary-button"
            onclick="openV153EditSalesman('${v153Esc(m.salesman.id)}')"
          >
            ✏️ Edit
          </button>

        </div>

      </div>


      <div class="v153-status-banner ${status.className}">

        <strong>
          ${status.icon}
          ${status.text}
        </strong>

        <span>
          ${v153Percent(m.achievement)}
          of monthly target achieved
        </span>

      </div>


      <div class="v153-summary-grid">

        <div class="v153-kpi-card">
          <span>🎯 Target</span>
          <strong>${v153Money(m.target)}</strong>
        </div>

        <div class="v153-kpi-card">
          <span>💰 Actual</span>
          <strong>${v153Money(m.actual)}</strong>
        </div>

        <div class="v153-kpi-card">
          <span>📊 Achievement</span>
          <strong>${v153Percent(m.achievement)}</strong>
        </div>

        <div class="v153-kpi-card">
          <span>🔻 Gap</span>
          <strong>${v153Money(m.gap)}</strong>
        </div>

        <div class="v153-kpi-card">
          <span>📈 Growth</span>
          <strong>${v153Percent(m.growth)}</strong>
        </div>

        <div class="v153-kpi-card">
          <span>🔥 Required Daily</span>
          <strong>${v153Money(m.requiredDaily)}</strong>
        </div>

        <div class="v153-kpi-card">
          <span>📅 Daily Target</span>
          <strong>${v153Money(m.dailyTarget)}</strong>
        </div>

        <div class="v153-kpi-card">
          <span>🔮 Forecast</span>
          <strong>${v153Money(m.forecast)}</strong>
        </div>

      </div>


      <div class="v153-section">

        <div class="v153-section-title">
          📊 Performance Analysis
        </div>

        <div class="v153-analysis-grid">

          <div class="v153-analysis-box">

            <span>
              Daily Average
            </span>

            <strong>
              ${v153Money(m.dailyActual)}
            </strong>

          </div>

          <div class="v153-analysis-box">

            <span>
              Remaining Days
            </span>

            <strong>
              ${m.remainingDays}
            </strong>

          </div>

          <div class="v153-analysis-box">

            <span>
              Forecast Achievement
            </span>

            <strong>
              ${v153Percent(
                m.forecastAchievement
              )}
            </strong>

          </div>

          <div class="v153-analysis-box">

            <span>
              Customer Visits
            </span>

            <strong>
              ${m.visits}
            </strong>

          </div>

          <div class="v153-analysis-box">

            <span>
              Orders
            </span>

            <strong>
              ${m.orders}
            </strong>

          </div>

          <div class="v153-analysis-box">

            <span>
              New Customers
            </span>

            <strong>
              ${m.newCustomers}
            </strong>

          </div>

        </div>

      </div>


      <div class="v153-chart-grid">

        <div class="v153-chart-card">

          <h3>
            🎯 Target vs Actual
          </h3>

          <div
            id="v153TargetActualChart"
          ></div>

        </div>


        <div class="v153-chart-card">

          <h3>
            📈 Daily Sales Trend
          </h3>

          <div
            id="v153DailyChart"
          ></div>

        </div>


        <div class="v153-chart-card">

          <h3>
            📊 Cumulative Target vs Actual
          </h3>

          <div
            id="v153CumulativeChart"
          ></div>

        </div>


        <div class="v153-chart-card">

          <h3>
            📈 Monthly Growth
          </h3>

          <div
            id="v153GrowthChart"
          ></div>

        </div>

      </div>


      <div class="v153-section">

        <div class="v153-section-title">
          📅 Recent Daily Sales
        </div>

        ${
          dailyRows.length
            ? `
              <div class="v153-table-wrap">

                <table class="v153-table">

                  <thead>

                    <tr>
                      <th>Date</th>
                      <th>Sales</th>
                      <th>Target</th>
                      <th>Visits</th>
                      <th>Orders</th>
                      <th>Collection</th>
                    </tr>

                  </thead>

                  <tbody>

                    ${dailyRows
                      .map(
                        row => `
                        <tr>

                          <td>
                            ${v153Esc(row.date)}
                          </td>

                          <td>
                            ${v153Money(row.sales)}
                          </td>

                          <td>
                            ${v153Money(row.target)}
                          </td>

                          <td>
                            ${v153Num(row.visits)}
                          </td>

                          <td>
                            ${v153Num(row.orders)}
                          </td>

                          <td>
                            ${v153Money(row.collections)}
                          </td>

                        </tr>
                      `
                      )
                      .join("")}

                  </tbody>

                </table>

              </div>
            `
            : `
              <div class="v153-no-data">
                Daily sales data မထည့်ရသေးပါ
              </div>
            `
        }

      </div>


      <div
        id="v153AIResult"
        class="v153-ai-result"
      ></div>

    </div>
  `;


  const container =
    document.getElementById("app");

  if (container) {
    container.innerHTML = html;
  }


  setTimeout(() => {

    v153RenderTargetActualChart(m);

    v153RenderDailyChart(m);

    v153RenderCumulativeChart(m);

    v153RenderGrowthChart(m);

  }, 50);
}


/* =========================================================
   DAILY ENTRY
   ========================================================= */

function openV153DailyEntry(
  salesmanId
) {

  const m =
    v153GetSalesmanMetrics(
      salesmanId
    );

  if (!m) {
    return;
  }

  showModal(`

    <div class="v153-modal">

      <h2>
        📅 Daily Sales Entry
      </h2>

      <p>
        ${v153Esc(m.salesman.name)}
      </p>


      <label>Date</label>

      <input
        id="v153DailyDate"
        class="tool-input"
        type="date"
        value="${new Date()
          .toISOString()
          .slice(0,10)}"
      />


      <label>Daily Sales</label>

      <input
        id="v153DailySales"
        class="tool-input"
        type="number"
        placeholder="Sales Amount"
      />


      <label>Daily Target</label>

      <input
        id="v153DailyTarget"
        class="tool-input"
        type="number"
        value="${Math.round(
          m.dailyTarget
        )}"
      />


      <label>Customer Visits</label>

      <input
        id="v153DailyVisits"
        class="tool-input"
        type="number"
        value="0"
      />


      <label>Orders</label>

      <input
        id="v153DailyOrders"
        class="tool-input"
        type="number"
        value="0"
      />


      <label>Collections</label>

      <input
        id="v153DailyCollections"
        class="tool-input"
        type="number"
        value="0"
      />


      <label>New Customers</label>

      <input
        id="v153DailyNewCustomers"
        class="tool-input"
        type="number"
        value="0"
      />


      <label>Notes</label>

      <textarea
        id="v153DailyNotes"
        class="tool-input"
        rows="3"
        placeholder="Today's market / customer notes"
      ></textarea>


      <div class="v153-modal-actions">

        <button
          class="primary-button"
          onclick="v153SaveDailyEntry('${v153Esc(salesmanId)}')"
        >
          Save Daily KPI
        </button>

        <button
          class="secondary-button"
          onclick="closeModal()"
        >
          Cancel
        </button>

      </div>

    </div>

  `);
}


function v153SaveDailyEntry(
  salesmanId
) {

  const date =
    document.getElementById(
      "v153DailyDate"
    )?.value;

  const sales =
    v153Num(
      document.getElementById(
        "v153DailySales"
      )?.value
    );

  if (!date) {
    showToast("Date ထည့်ပါ");
    return;
  }

  const daily =
    v153GetDailySales();

  const existingIndex =
    daily.findIndex(
      x =>
        String(x.salesmanId) ===
          String(salesmanId) &&
        String(x.date) ===
          String(date)
    );

  const record = {

    id:
      existingIndex >= 0
        ? daily[existingIndex].id
        : v153Id(),

    salesmanId,

    date,

    sales,

    target:
      v153Num(
        document.getElementById(
          "v153DailyTarget"
        )?.value
      ),

    visits:
      v153Num(
        document.getElementById(
          "v153DailyVisits"
        )?.value
      ),

    orders:
      v153Num(
        document.getElementById(
          "v153DailyOrders"
        )?.value
      ),

    collections:
      v153Num(
        document.getElementById(
          "v153DailyCollections"
        )?.value
      ),

    newCustomers:
      v153Num(
        document.getElementById(
          "v153DailyNewCustomers"
        )?.value
      ),

    notes:
      document.getElementById(
        "v153DailyNotes"
      )?.value || ""

  };


  if (existingIndex >= 0) {
    daily[existingIndex] = record;
  } else {
    daily.push(record);
  }


  v153SaveDailySales(daily);

  closeModal();

  openV153SalesmanDetail(
    salesmanId
  );

  showToast(
    "Daily KPI saved successfully"
  );
}


/* =========================================================
   EDIT SALESMAN
   ========================================================= */

function openV153EditSalesman(
  salesmanId
) {

  const salesmen =
    v153GetSalesmen();

  const person =
    salesmen.find(
      x =>
        String(x.id) ===
        String(salesmanId)
    );

  if (!person) {
    return;
  }

  showModal(`

    <div class="v153-modal">

      <h2>
        ✏️ Edit Salesman
      </h2>


      <label>Name</label>

      <input
        id="v153EditName"
        class="tool-input"
        value="${v153Esc(person.name)}"
      />


      <label>Territory</label>

      <input
        id="v153EditTerritory"
        class="tool-input"
        value="${v153Esc(
          person.territory || ""
        )}"
      />


      <label>Monthly Target</label>

      <input
        id="v153EditTarget"
        class="tool-input"
        type="number"
        value="${v153Num(
          person.target
        )}"
      />


      <label>Previous Month Sales</label>

      <input
        id="v153EditPrevious"
        class="tool-input"
        type="number"
        value="${v153Num(
          person.previousMonthSales
        )}"
      />


      <label>Role</label>

      <input
        id="v153EditRole"
        class="tool-input"
        value="${v153Esc(
          person.role || "Salesman"
        )}"
      />


      <div class="v153-modal-actions">

        <button
          class="primary-button"
          onclick="v153UpdateSalesman('${v153Esc(salesmanId)}')"
        >
          Save Changes
        </button>

        <button
          class="secondary-button"
          onclick="closeModal()"
        >
          Cancel
        </button>

      </div>

    </div>

  `);
}


function v153UpdateSalesman(
  salesmanId
) {

  const salesmen =
    v153GetSalesmen();

  const index =
    salesmen.findIndex(
      x =>
        String(x.id) ===
        String(salesmanId)
    );

  if (index < 0) {
    return;
  }

  salesmen[index].name =
    document.getElementById(
      "v153EditName"
    )?.value
      ?.trim() || salesmen[index].name;

  salesmen[index].territory =
    document.getElementById(
      "v153EditTerritory"
    )?.value
      ?.trim() || "";

  salesmen[index].target =
    v153Num(
      document.getElementById(
        "v153EditTarget"
      )?.value
    );

  salesmen[index].previousMonthSales =
    v153Num(
      document.getElementById(
        "v153EditPrevious"
      )?.value
    );

  salesmen[index].role =
    document.getElementById(
      "v153EditRole"
    )?.value
      ?.trim() || "Salesman";

  v153SaveSalesmen(
    salesmen
  );

  closeModal();

  openV153SalesmanDetail(
    salesmanId
  );

  showToast(
    "Salesman updated"
  );
}


/* =========================================================
   SVG CHART HELPERS
   ========================================================= */

function v153EmptyChart(
  message
) {

  return `
    <div class="v153-chart-empty">
      ${v153Esc(message)}
    </div>
  `;
}


/* =========================================================
   TARGET VS ACTUAL CHART
   ========================================================= */

function v153RenderTargetActualChart(m) {

  const box =
    document.getElementById(
      "v153TargetActualChart"
    );

  if (!box) {
    return;
  }

  const max =
    Math.max(
      m.target,
      m.actual,
      1
    );

  const targetWidth =
    (m.target / max) * 100;

  const actualWidth =
    (m.actual / max) * 100;

  box.innerHTML = `

    <div class="v153-bar-row">

      <div class="v153-bar-label">
        Target
      </div>

      <div class="v153-bar-track">

        <div
          class="v153-bar-target"
          style="width:${targetWidth}%"
        ></div>

      </div>

      <strong>
        ${v153Money(m.target)}
      </strong>

    </div>


    <div class="v153-bar-row">

      <div class="v153-bar-label">
        Actual
      </div>

      <div class="v153-bar-track">

        <div
          class="v153-bar-actual"
          style="width:${actualWidth}%"
        ></div>

      </div>

      <strong>
        ${v153Money(m.actual)}
      </strong>

    </div>

  `;
}


/* =========================================================
   DAILY SALES TREND
   ========================================================= */

function v153RenderDailyChart(m) {

  const box =
    document.getElementById(
      "v153DailyChart"
    );

  if (!box) {
    return;
  }

  const rows =
    [...m.daily]
      .sort(
        (a,b) =>
          String(a.date)
            .localeCompare(
              String(b.date)
            )
      )
      .slice(-14);


  if (!rows.length) {

    box.innerHTML =
      v153EmptyChart(
        "Daily data မထည့်ရသေးပါ"
      );

    return;
  }


  const width = 520;
  const height = 220;

  const max =
    Math.max(
      ...rows.map(
        x => v153Num(x.sales)
      ),
      1
    );

  const points =
    rows.map(
      (row, index) => {

        const x =
          25 +
          index *
          (
            (width - 50) /
            Math.max(rows.length - 1,1)
          );

        const y =
          height -
          25 -
          (
            v153Num(row.sales) /
            max
          ) *
          160;

        return `${x},${y}`;
      }
    )
    .join(" ");


  box.innerHTML = `

    <svg
      viewBox="0 0 ${width} ${height}"
      class="v153-svg"
      preserveAspectRatio="none"
    >

      <polyline
        points="${points}"
        fill="none"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

    </svg>

    <div class="v153-chart-caption">
      Last ${rows.length} recorded days
    </div>

  `;
}


/* =========================================================
   CUMULATIVE CHART
   ========================================================= */

function v153RenderCumulativeChart(m) {

  const box =
    document.getElementById(
      "v153CumulativeChart"
    );

  if (!box) {
    return;
  }

  const rows =
    [...m.daily]
      .sort(
        (a,b) =>
          String(a.date)
            .localeCompare(
              String(b.date)
            )
      );


  if (!rows.length) {

    box.innerHTML =
      v153EmptyChart(
        "Daily data မထည့်ရသေးပါ"
      );

    return;
  }


  let cumulativeActual = 0;

  const pointsActual = [];

  const pointsTarget = [];

  const width = 520;

  const height = 220;

  const max =
    Math.max(
      m.target,
      rows.reduce(
        (sum, x) =>
          sum + v153Num(x.sales),
        0
      ),
      1
    );


  rows.forEach(
    (row,index) => {

      cumulativeActual +=
        v153Num(row.sales);

      const cumulativeTarget =
        m.dailyTarget *
        (index + 1);

      const x =
        25 +
        index *
        (
          (width - 50) /
          Math.max(rows.length - 1,1)
        );

      const yActual =
        height -
        25 -
        (
          cumulativeActual /
          max
        ) *
        160;

      const yTarget =
        height -
        25 -
        (
          cumulativeTarget /
          max
        ) *
        160;

      pointsActual.push(
        `${x},${yActual}`
      );

      pointsTarget.push(
        `${x},${yTarget}`
      );

    }
  );


  box.innerHTML = `

    <svg
      viewBox="0 0 ${width} ${height}"
      class="v153-svg"
      preserveAspectRatio="none"
    >

      <polyline
        points="${pointsTarget.join(" ")}"
        fill="none"
        stroke="currentColor"
        stroke-opacity=".35"
        stroke-width="3"
        stroke-dasharray="8 6"
      />

      <polyline
        points="${pointsActual.join(" ")}"
        fill="none"
        stroke="currentColor"
        stroke-width="4"
      />

    </svg>

    <div class="v153-chart-caption">
      Actual vs cumulative target
    </div>

  `;
}


/* =========================================================
   GROWTH CHART
   ========================================================= */

function v153RenderGrowthChart(m) {

  const box =
    document.getElementById(
      "v153GrowthChart"
    );

  if (!box) {
    return;
  }

  const growth =
    m.growth;

  const width =
    Math.min(
      Math.abs(growth),
      100
    );


  box.innerHTML = `

    <div class="v153-growth-value">

      <strong>
        ${v153Percent(growth)}
      </strong>

      <span>
        vs previous month
      </span>

    </div>


    <div class="v153-growth-track">

      <div
        class="v153-growth-fill"
        style="width:${width}%"
      ></div>

    </div>

  `;
}


/* =========================================================
   TEAM RANKING
   ========================================================= */

function openV153TeamRanking() {

  const salesmen =
    v153GetSalesmen()
      .filter(x => x.active !== false)
      .sort(
        (a,b) => {

          const ma =
            v153GetSalesmanMetrics(a.id);

          const mb =
            v153GetSalesmanMetrics(b.id);

          return (
            (mb?.achievement || 0) -
            (ma?.achievement || 0)
          );

        }
      );


  showModal(`

    <div class="v153-ranking-modal">

      <h2>
        🏆 Salesman Ranking
      </h2>

      <p>
        Achievement အလိုက် Salesman Performance Ranking
      </p>


      <div class="v153-ranking-list">

        ${
          salesmen.length
            ? salesmen
                .map(
                  (person,index) => {

                    const m =
                      v153GetSalesmanMetrics(
                        person.id
                      );

                    const status =
                      v153Status(
                        m.achievement
                      );

                    return `

                      <div
                        class="v153-ranking-row"
                        onclick="closeModal();openV153SalesmanDetail('${v153Esc(person.id)}')"
                      >

                        <div class="v153-ranking-number">
                          ${index + 1}
                        </div>

                        <div class="v153-ranking-name">
                          ${v153Esc(person.name)}
                        </div>

                        <div class="v153-ranking-achievement">
                          ${v153Percent(
                            m.achievement
                          )}
                        </div>

                        <div>
                          ${status.icon}
                        </div>

                      </div>

                    `;
                  }
                )
                .join("")
            : `
              <div class="v153-no-data">
                Salesman data မရှိသေးပါ
              </div>
            `
        }

      </div>

    </div>

  `);
}


/* =========================================================
   AI SALESman ANALYSIS
   ========================================================= */

async function v153AskSalesmanAI(
  salesmanId
) {

  const m =
    v153GetSalesmanMetrics(
      salesmanId
    );

  if (!m) {
    return;
  }

  const result =
    document.getElementById(
      "v153AIResult"
    );

  if (result) {

    result.innerHTML = `
      <div class="v153-ai-loading">
        🤖 AI Business Advisor စဉ်းစားနေပါတယ်...
      </div>
    `;

    result.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }


  const prompt = `

You are a professional Sales Manager AI Advisor.

Analyze this individual salesperson performance.

Salesman:
${m.salesman.name}

Territory:
${m.salesman.territory || "Not specified"}

Monthly Target:
${m.target}

Actual Sales:
${m.actual}

Achievement:
${m.achievement.toFixed(1)}%

Target Gap:
${m.gap}

Previous Month Sales:
${m.previous}

Growth:
${m.growth.toFixed(1)}%

Daily Target:
${m.dailyTarget}

Daily Average:
${m.dailyActual}

Required Daily:
${m.requiredDaily}

Remaining Days:
${m.remainingDays}

Forecast:
${m.forecast}

Forecast Achievement:
${m.forecastAchievement.toFixed(1)}%

Customer Visits:
${m.visits}

Orders:
${m.orders}

Collections:
${m.collections}

New Customers:
${m.newCustomers}

Please provide a detailed management report in Burmese.

Use these sections:

1. လက်ရှိ Performance အခြေအနေ
2. KPI Analysis
3. အားသာချက်များ
4. အားနည်းချက်များ
5. Root Cause ဖြစ်နိုင်ခြေများ
6. ယနေ့လုပ်ရမည့် Sales Actions
7. Customer Actions
8. Daily KPI Targets
9. နောက် 7 ရက် Action Plan
10. Manager Follow-up Plan
11. Target Achieve လုပ်ရန် အကြံပြုချက်
12. Final Management Recommendation

Give practical numbers and actions whenever possible.

Do not give generic motivational advice.
`;


  try {

    let answer = "";

    if (
      typeof v12SafeAIFetch ===
      "function"
    ) {

      answer =
        await v12SafeAIFetch(
          prompt
        );

    } else {

      const response =
        await fetch(
          typeof AI_API_URL !==
          "undefined"
            ? AI_API_URL
            : "",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json"
            },
            body: JSON.stringify({
              message: prompt
            })
          }
        );

      if (!response.ok) {
        throw new Error(
          "AI server error"
        );
      }

      const data =
        await response.json();

      answer =
        data.reply ||
        data.response ||
        data.message ||
        "";
    }


    if (!answer) {
      throw new Error(
        "No AI response"
      );
    }


    if (result) {

      result.innerHTML = `

        <div class="v153-ai-header">
          🤖 AI Business Advisor
        </div>

        <div class="v153-ai-body">
          ${v153Esc(answer)
            .replace(/\n/g,"<br>")}
        </div>

      `;

    }

  } catch (error) {

    if (result) {

      result.innerHTML = `

        <div class="v153-ai-header">
          🤖 AI Management Insight
        </div>

        <div class="v153-ai-body">

          <strong>
            ${v153Esc(m.salesman.name)}
          </strong>
          ၏ လက်ရှိ Achievement သည်
          <strong>
            ${v153Percent(m.achievement)}
          </strong>
          ဖြစ်ပါတယ်

          <br><br>

          Target သို့ရောက်ရန်
          <strong>
            ${v153Money(m.gap)}
          </strong>
          ထပ်မံရောင်းချရန်လိုအပ်ပါတယ်

          <br><br>

          Remaining Days:
          <strong>
            ${m.remainingDays}
          </strong>

          <br><br>

          Required Daily Sales:
          <strong>
            ${v153Money(m.requiredDaily)}
          </strong>

          <br><br>

          <strong>
            နောက် 7 ရက်အတွက် အဓိကလုပ်ဆောင်ရန်
          </strong>

          <br>

          1. High-value customers များကို Priority ပေးပါ

          <br>

          2. Daily customer visits ကို တိုးမြှင့်ပါ

          <br>

          3. Pending orders များကို Close လုပ်ပါ

          <br>

          4. Collection ကို Daily Follow-up လုပ်ပါ

          <br>

          5. Manager နဲ့ Daily KPI Review ပြုလုပ်ပါ

        </div>

      `;

    }

  }
}


/* =========================================================
   ADD V15.3 BUTTONS
   ========================================================= */

function v153AddButtons() {

  if (
    document.getElementById(
      "v153ManagementButtons"
    )
  ) {
    return;
  }


  const box =
    document.createElement("div");

  box.id =
    "v153ManagementButtons";

  box.innerHTML = `

    <div class="v153-floating-buttons">

      <button
        onclick="openV153Salesmen()"
        title="Salesman Performance"
      >
        👥 Salesmen
      </button>

      <button
        onclick="openV153TeamRanking()"
        title="Salesman Ranking"
      >
        🏆 Ranking
      </button>

    </div>

  `;

  document.body.appendChild(box);
}


/* =========================================================
   CSS
   ========================================================= */

function v153InjectStyles() {

  if (
    document.getElementById(
      "v153Styles"
    )
  ) {
    return;
  }


  const style =
    document.createElement("style");

  style.id =
    "v153Styles";

  style.textContent = `

    .v153-page {
      max-width: 1400px;
      margin: 0 auto;
      padding: 24px;
    }

    .v153-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 20px;
      margin-bottom: 24px;
    }

    .v153-kicker {
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 1.5px;
      opacity: .55;
      margin-bottom: 6px;
    }

    .v153-header h2 {
      margin: 0 0 6px;
      font-size: 30px;
    }

    .v153-header p {
      margin: 0;
      opacity: .7;
    }

    .v153-summary-grid {
      display: grid;
      grid-template-columns:
        repeat(4, minmax(0,1fr));
      gap: 16px;
      margin-bottom: 22px;
    }

    .v153-summary-card,
    .v153-kpi-card {
      background: var(--card-bg, #fff);
      border: 1px solid rgba(0,0,0,.08);
      border-radius: 16px;
      padding: 20px;
      box-shadow: 0 8px 24px rgba(0,0,0,.05);
    }

    .v153-summary-card span,
    .v153-kpi-card span {
      display: block;
      font-size: 13px;
      opacity: .65;
      margin-bottom: 8px;
    }

    .v153-summary-card strong,
    .v153-kpi-card strong {
      display: block;
      font-size: 24px;
    }

    .v153-toolbar {
      display: grid;
      grid-template-columns:
        1fr 220px;
      gap: 12px;
      margin-bottom: 20px;
    }

    .v153-salesman-grid {
      display: grid;
      grid-template-columns:
        repeat(3,minmax(0,1fr));
      gap: 18px;
    }

    .v153-salesman-card {
      background: var(--card-bg,#fff);
      border: 1px solid rgba(0,0,0,.08);
      border-radius: 18px;
      padding: 20px;
      cursor: pointer;
      transition: .2s ease;
      box-shadow: 0 8px 24px rgba(0,0,0,.05);
    }

    .v153-salesman-card:hover {
      transform: translateY(-3px);
      box-shadow:
        0 14px 34px rgba(0,0,0,.10);
    }

    .v153-card-top {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 16px;
    }

    .v153-avatar,
    .v153-big-avatar {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      font-weight: 800;
      background: #111827;
      color: white;
    }

    .v153-avatar {
      width: 46px;
      height: 46px;
    }

    .v153-big-avatar {
      width: 64px;
      height: 64px;
      font-size: 24px;
    }

    .v153-person-info {
      flex: 1;
      min-width: 0;
    }

    .v153-person-info h3 {
      margin: 0 0 4px;
      font-size: 17px;
    }

    .v153-person-info span {
      font-size: 12px;
      opacity: .6;
    }

    .v153-rank {
      font-weight: 800;
      opacity: .6;
    }

    .v153-status {
      display: inline-flex;
      padding: 7px 11px;
      border-radius: 999px;
      font-size: 12px;
      font-weight: 700;
      margin-bottom: 15px;
    }

    .v153-success {
      background: rgba(34,197,94,.12);
      color: #15803d;
    }

    .v153-good {
      background: rgba(59,130,246,.12);
      color: #2563eb;
    }

    .v153-warning {
      background: rgba(245,158,11,.14);
      color: #b45309;
    }

    .v153-danger {
      background: rgba(239,68,68,.12);
      color: #dc2626;
    }

    .v153-progress-label {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      margin-bottom: 7px;
    }

    .v153-progress-track {
      height: 9px;
      background: rgba(0,0,0,.08);
      border-radius: 99px;
      overflow: hidden;
      margin-bottom: 18px;
    }

    .v153-progress-fill {
      height: 100%;
      background: currentColor;
      border-radius: inherit;
      min-width: 2px;
    }

    .v153-card-metrics {
      display: grid;
      grid-template-columns:
        repeat(2,1fr);
      gap: 10px;
      margin-bottom: 16px;
    }

    .v153-card-metrics div {
      padding: 11px;
      background: rgba(0,0,0,.035);
      border-radius: 10px;
    }

    .v153-card-metrics small {
      display: block;
      opacity: .55;
      margin-bottom: 3px;
    }

    .v153-card-metrics strong {
      font-size: 14px;
    }

    .v153-card-footer {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      opacity: .65;
    }

    .v153-empty,
    .v153-no-data {
      text-align: center;
      padding: 50px 20px;
      opacity: .7;
    }

    .v153-empty-icon {
      font-size: 48px;
      margin-bottom: 12px;
    }

    .v153-detail-header {
      display: flex;
      align-items: center;
      gap: 20px;
      flex-wrap: wrap;
      margin-bottom: 22px;
    }

    .v153-detail-person {
      display: flex;
      align-items: center;
      gap: 14px;
      flex: 1;
      min-width: 250px;
    }

    .v153-detail-person h2 {
      margin: 0 0 4px;
    }

    .v153-detail-person p {
      margin: 0;
      opacity: .6;
    }

    .v153-detail-actions {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    .v153-status-banner {
      padding: 16px 20px;
      border-radius: 14px;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      gap: 15px;
      flex-wrap: wrap;
    }

    .v153-kpi-card {
      padding: 17px;
    }

    .v153-section {
      margin-top: 22px;
    }

    .v153-section-title {
      font-size: 18px;
      font-weight: 800;
      margin-bottom: 14px;
    }

    .v153-analysis-grid {
      display: grid;
      grid-template-columns:
        repeat(3,1fr);
      gap: 14px;
    }

    .v153-analysis-box {
      background: var(--card-bg,#fff);
      border: 1px solid rgba(0,0,0,.08);
      border-radius: 14px;
      padding: 17px;
    }

    .v153-analysis-box span {
      display: block;
      opacity: .6;
      font-size: 12px;
      margin-bottom: 7px;
    }

    .v153-analysis-box strong {
      font-size: 20px;
    }

    .v153-chart-grid {
      display: grid;
      grid-template-columns:
        repeat(2,1fr);
      gap: 18px;
      margin-top: 22px;
    }

    .v153-chart-card {
      background: var(--card-bg,#fff);
      border: 1px solid rgba(0,0,0,.08);
      border-radius: 16px;
      padding: 20px;
      min-height: 260px;
    }

    .v153-chart-card h3 {
      margin: 0 0 20px;
      font-size: 16px;
    }

    .v153-bar-row {
      display: grid;
      grid-template-columns:
        70px 1fr 100px;
      gap: 10px;
      align-items: center;
      margin: 28px 0;
    }

    .v153-bar-track {
      height: 25px;
      background: rgba(0,0,0,.07);
      border-radius: 7px;
      overflow: hidden;
    }

    .v153-bar-target,
    .v153-bar-actual {
      height: 100%;
      border-radius: 7px;
      background: currentColor;
    }

    .v153-svg {
      width: 100%;
      height: 190px;
      overflow: visible;
    }

    .v153-chart-caption {
      text-align: center;
      font-size: 12px;
      opacity: .55;
      margin-top: 8px;
    }

    .v153-chart-empty {
      min-height: 190px;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: .55;
    }

    .v153-growth-value {
      text-align: center;
      padding: 30px 0 20px;
    }

    .v153-growth-value strong {
      display: block;
      font-size: 42px;
      margin-bottom: 8px;
    }

    .v153-growth-value span {
      opacity: .6;
    }

    .v153-growth-track {
      height: 20px;
      background: rgba(0,0,0,.08);
      border-radius: 999px;
      overflow: hidden;
    }

    .v153-growth-fill {
      height: 100%;
      background: currentColor;
      border-radius: inherit;
    }

    .v153-table-wrap {
      overflow-x: auto;
    }

    .v153-table {
      width: 100%;
      border-collapse: collapse;
      min-width: 700px;
      background: var(--card-bg,#fff);
      border-radius: 14px;
      overflow: hidden;
    }

    .v153-table th,
    .v153-table td {
      padding: 13px 14px;
      border-bottom: 1px solid rgba(0,0,0,.07);
      text-align: left;
      font-size: 13px;
    }

    .v153-table th {
      font-weight: 800;
      background: rgba(0,0,0,.035);
    }

    .v153-ai-result {
      margin-top: 22px;
      border-radius: 16px;
      overflow: hidden;
    }

    .v153-ai-header {
      padding: 16px 20px;
      font-weight: 800;
      background: rgba(0,0,0,.06);
    }

    .v153-ai-body {
      padding: 20px;
      line-height: 1.8;
      background: var(--card-bg,#fff);
      border: 1px solid rgba(0,0,0,.08);
    }

    .v153-ai-loading {
      padding: 25px;
      text-align: center;
      background: var(--card-bg,#fff);
      border-radius: 14px;
    }

    .v153-modal {
      max-width: 600px;
      margin: 0 auto;
    }

    .v153-modal h2 {
      margin-top: 0;
    }

    .v153-modal label {
      display: block;
      font-size: 12px;
      font-weight: 700;
      margin: 13px 0 6px;
      opacity: .7;
    }

    .v153-modal-actions {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin-top: 20px;
    }

    .v153-ranking-modal {
      max-width: 700px;
      margin: 0 auto;
    }

    .v153-ranking-list {
      margin-top: 20px;
    }

    .v153-ranking-row {
      display: grid;
      grid-template-columns:
        45px 1fr 100px 40px;
      gap: 12px;
      align-items: center;
      padding: 15px;
      border-bottom: 1px solid rgba(0,0,0,.08);
      cursor: pointer;
    }

    .v153-ranking-number {
      font-size: 20px;
      font-weight: 800;
    }

    .v153-ranking-name {
      font-weight: 700;
    }

    .v153-ranking-achievement {
      text-align: right;
      font-weight: 800;
    }

    .v153-floating-buttons {
      position: fixed;
      right: 20px;
      bottom: 20px;
      z-index: 9990;
      display: flex;
      gap: 8px;
      flex-direction: column;
    }

    .v153-floating-buttons button {
      border: none;
      border-radius: 999px;
      padding: 11px 16px;
      background: #111827;
      color: #fff;
      cursor: pointer;
      font-weight: 700;
      box-shadow:
        0 8px 25px rgba(0,0,0,.2);
    }

    @media(max-width:1100px) {

      .v153-salesman-grid {
        grid-template-columns:
          repeat(2,minmax(0,1fr));
      }

      .v153-summary-grid {
        grid-template-columns:
          repeat(2,minmax(0,1fr));
      }

    }

    @media(max-width:800px) {

      .v153-page {
        padding: 16px;
      }

      .v153-header {
        flex-direction: column;
      }

      .v153-salesman-grid,
      .v153-chart-grid {
        grid-template-columns: 1fr;
      }

      .v153-analysis-grid {
        grid-template-columns:
          repeat(2,1fr);
      }

      .v153-toolbar {
        grid-template-columns: 1fr;
      }

    }

    @media(max-width:520px) {

      .v153-summary-grid {
        grid-template-columns: 1fr 1fr;
        gap: 10px;
      }

      .v153-summary-card,
      .v153-kpi-card {
        padding: 14px;
      }

      .v153-summary-card strong,
      .v153-kpi-card strong {
        font-size: 18px;
      }

      .v153-analysis-grid {
        grid-template-columns: 1fr;
      }

      .v153-detail-actions {
        width: 100%;
      }

      .v153-detail-actions button {
        flex: 1;
      }

      .v153-bar-row {
        grid-template-columns:
          55px 1fr 75px;
      }

      .v153-floating-buttons {
        right: 12px;
        bottom: 12px;
      }

      .v153-floating-buttons button {
        font-size: 11px;
        padding: 9px 12px;
      }

    }

  `;

  document.head.appendChild(style);
}


/* =========================================================
   SIDEBAR BUTTON
   ========================================================= */

function v153AddSidebarButton() {

  const sidebar =
    document.querySelector(
      ".sidebar"
    );

  if (!sidebar) {
    return;
  }

  if (
    document.getElementById(
      "v153SidebarButton"
    )
  ) {
    return;
  }


  const button =
    document.createElement("button");

  button.id =
    "v153SidebarButton";

  button.className =
    "nav-item";

  button.innerHTML =
    "👥 Salesman Performance";

  button.onclick =
    openV153Salesmen;


  sidebar.appendChild(button);
}


/* =========================================================
   INIT
   ========================================================= */

function v153Init() {

  v153ImportOldV15Team();

  v153InjectStyles();

  v153AddButtons();

  v153AddSidebarButton();
}


if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    () => {
      setTimeout(
        v153Init,
        1200
      );
    }
  );

} else {

  setTimeout(
    v153Init,
    1200
  );

}


/* =========================================================
   GLOBAL EXPORTS
   ========================================================= */

window.openV153Salesmen =
  openV153Salesmen;

window.openV153AddSalesman =
  openV153AddSalesman;

window.v153SaveNewSalesman =
  v153SaveNewSalesman;

window.openV153SalesmanDetail =
  openV153SalesmanDetail;

window.openV153DailyEntry =
  openV153DailyEntry;

window.v153SaveDailyEntry =
  v153SaveDailyEntry;

window.openV153EditSalesman =
  openV153EditSalesman;

window.v153UpdateSalesman =
  v153UpdateSalesman;

window.openV153TeamRanking =
  openV153TeamRanking;

window.v153AskSalesmanAI =
  v153AskSalesmanAI;

window.v153RenderSalesmen =
  v153RenderSalesmen;
  /* =========================================================
   AUNG BUSINESS ACADEMY
   V15.4 AI BUSINESS COACH + SALESMAN KPI CONNECTION
   ========================================================= */

const V154_AI_HISTORY_KEY =
  "aung_business_academy_v154_ai_history";


/* =========================================================
   HELPERS
   ========================================================= */

function v154Get(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    return fallback;
  }
}

function v154Set(key, value) {
  localStorage.setItem(
    key,
    JSON.stringify(value)
  );
}

function v154Num(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

function v154Money(value) {
  return new Intl.NumberFormat("en-US").format(
    Math.round(v154Num(value))
  );
}

function v154Percent(value) {
  return `${v154Num(value).toFixed(1)}%`;
}

function v154Esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


/* =========================================================
   GET SALESMAN DATA
   ========================================================= */

function v154GetSalesmen() {

  if (
    typeof v153GetSalesmen ===
    "function"
  ) {
    return v153GetSalesmen();
  }

  return v154Get(
    "aung_business_academy_v153_salesmen",
    []
  );
}


function v154GetDailySales() {

  if (
    typeof v153GetDailySales ===
    "function"
  ) {
    return v153GetDailySales();
  }

  return v154Get(
    "aung_business_academy_v153_daily_sales",
    []
  );
}


/* =========================================================
   BUILD SALESMAN KPI REPORT
   ========================================================= */

function v154BuildSalesmanReport() {

  const salesmen =
    v154GetSalesmen()
      .filter(
        x => x.active !== false
      );


  if (!salesmen.length) {

    return `
SALESMAN DATA STATUS:
No salesperson data has been entered yet.
Do not invent salesperson performance numbers.
Advise the manager to add salesperson data first.
`;

  }


  const rows = salesmen.map(
    (person, index) => {

      let m = null;

      if (
        typeof v153GetSalesmanMetrics ===
        "function"
      ) {
        m =
          v153GetSalesmanMetrics(
            person.id
          );
      }


      if (!m) {

        const target =
          v154Num(person.target);

        const actual =
          v154Num(person.actual);

        const achievement =
          target > 0
            ? actual / target * 100
            : 0;

        const previous =
          v154Num(
            person.previousMonthSales
          );

        const growth =
          previous > 0
            ? (
                (actual - previous) /
                previous
              ) * 100
            : 0;

        m = {
          salesman: person,
          target,
          actual,
          achievement,
          gap: Math.max(
            target - actual,
            0
          ),
          growth,
          dailyTarget:
            target / 26,
          dailyActual: 0,
          requiredDaily: 0,
          forecast: 0,
          forecastAchievement: 0,
          visits: 0,
          orders: 0,
          collections: 0,
          newCustomers: 0,
          remainingDays: 0
        };

      }


      return `
SALESMAN #${index + 1}

Name:
${person.name || "Unknown"}

Role:
${person.role || "Salesman"}

Territory:
${person.territory || "Not specified"}

Monthly Target:
${v154Money(m.target)}

Actual Sales:
${v154Money(m.actual)}

Achievement:
${v154Percent(m.achievement)}

Target Gap:
${v154Money(m.gap)}

Previous Month Sales:
${v154Money(m.previous || 0)}

Growth:
${v154Percent(m.growth)}

Daily Target:
${v154Money(m.dailyTarget)}

Daily Average:
${v154Money(m.dailyActual)}

Required Daily Sales:
${v154Money(m.requiredDaily)}

Remaining Days:
${m.remainingDays}

Forecast Sales:
${v154Money(m.forecast)}

Forecast Achievement:
${v154Percent(m.forecastAchievement)}

Customer Visits:
${m.visits}

Orders:
${m.orders}

Collections:
${v154Money(m.collections)}

New Customers:
${m.newCustomers}

----------------------------------------
`;
    }
  );


  return rows.join("\n");
}


/* =========================================================
   TEAM SUMMARY
   ========================================================= */

function v154BuildTeamSummary() {

  const salesmen =
    v154GetSalesmen()
      .filter(
        x => x.active !== false
      );


  if (!salesmen.length) {
    return "";
  }


  const metrics =
    salesmen
      .map(
        person =>
          typeof v153GetSalesmanMetrics ===
          "function"
            ? v153GetSalesmanMetrics(
                person.id
              )
            : null
      )
      .filter(Boolean);


  if (!metrics.length) {
    return "";
  }


  const totalTarget =
    metrics.reduce(
      (sum, m) =>
        sum + v154Num(m.target),
      0
    );

  const totalActual =
    metrics.reduce(
      (sum, m) =>
        sum + v154Num(m.actual),
      0
    );

  const totalGap =
    metrics.reduce(
      (sum, m) =>
        sum + v154Num(m.gap),
      0
    );

  const teamAchievement =
    totalTarget > 0
      ? (
          totalActual /
          totalTarget
        ) * 100
      : 0;


  const ranked =
    [...metrics]
      .sort(
        (a,b) =>
          b.achievement -
          a.achievement
      );


  const top =
    ranked[0];

  const bottom =
    ranked[ranked.length - 1];


  return `
TEAM SUMMARY

Total Salesmen:
${metrics.length}

Team Target:
${v154Money(totalTarget)}

Team Actual:
${v154Money(totalActual)}

Team Achievement:
${v154Percent(teamAchievement)}

Total Target Gap:
${v154Money(totalGap)}

Top Performer:
${top?.salesman?.name || "N/A"}
(${v154Percent(top?.achievement || 0)})

Lowest Performer:
${bottom?.salesman?.name || "N/A"}
(${v154Percent(bottom?.achievement || 0)})
`;
}


/* =========================================================
   BUILD SMART AI PROMPT
   ========================================================= */

function v154BuildAIPrompt(
  userQuestion
) {

  const salesmanReport =
    v154BuildSalesmanReport();

  const teamSummary =
    v154BuildTeamSummary();


  return `

You are the AI Business Coach inside Aung Business Academy.

You are assisting a Sales Manager / Business Manager.

The user has asked:

"${userQuestion}"

IMPORTANT:
Use the available business and salesperson KPI data below.
Do NOT invent missing numbers.
If data is missing, clearly say what data is needed.

==============================
SALESMAN KPI DATA
==============================

${salesmanReport}

==============================
TEAM SUMMARY
==============================

${teamSummary}

==============================
RESPONSE REQUIREMENTS
==============================

Answer in Burmese unless the user specifically asks for English.

Give a professional, practical and detailed management answer.

Do NOT give a short generic answer.

When relevant, structure the response using:

1. လက်ရှိအခြေအနေ Analysis

2. KPI Analysis

3. Target vs Actual

4. Achievement %

5. Gap Analysis

6. Growth Analysis

7. Root Cause Analysis

8. Salesman Performance Analysis

9. Immediate Actions

10. Customer Actions

11. Sales Team Actions

12. Daily KPI

13. 7-Day Action Plan

14. Manager Follow-up Plan

15. Target Achievement Recommendation

16. Final Management Recommendation

If the user asks about a specific salesperson,
focus primarily on that salesperson.

If the user asks about the team,
compare all salespeople and identify:
- Top performer
- Lowest performer
- Biggest target gap
- Strongest growth
- Salesmen needing coaching
- Salesmen likely to achieve target

If the user asks "ဘယ်သူက အားနည်းဆုံးလဲ",
identify the lowest performer using actual KPI data.

If the user asks "ဘယ်သူက target ပြည့်နိုင်မလဲ",
use achievement, daily average, required daily sales and forecast.

If the user asks how to improve sales,
give specific numerical and operational actions.

For example:
Instead of saying:
"Salesman should work harder"

Say:
"Remaining gap is X.
Remaining days are Y.
Required daily sales are approximately Z.
Therefore focus on high-value customers, pending orders and new customer acquisition."

Always distinguish:
- Facts from available KPI data
- Management assumptions
- Recommended actions

Do not create fake data.

==============================
MANAGEMENT STYLE
==============================

Think like an experienced FMCG / Distribution / Sales Manager.

Focus on:
Revenue
Target Achievement
Distribution
Customer Coverage
Visit Productivity
Order Conversion
Average Order Value
New Customer Acquisition
Collection
Salesman Productivity
Territory Management
Daily Execution
Coaching
Accountability

The answer should be actionable enough for a Sales Manager to use in a real management meeting.

`;
}


/* =========================================================
   AI CALL
   ========================================================= */

async function v154AskBusinessCoach(
  question
) {

  const text =
    String(question || "")
      .trim();


  if (!text) {

    if (
      typeof showToast ===
      "function"
    ) {
      showToast(
        "မေးခွန်းထည့်ပါ"
      );
    }

    return;
  }


  const chat =
    document.getElementById(
      "aiChat"
    );


  if (chat) {

    chat.innerHTML += `

      <div class="v154-user-message">

        <strong>
          You
        </strong>

        <div>
          ${v154Esc(text)}
        </div>

      </div>

    `;


    chat.innerHTML += `

      <div
        id="v154Thinking"
        class="v154-ai-thinking"
      >

        🤖 AI Business Coach
        စဉ်းစားနေပါတယ်...

      </div>

    `;


    chat.scrollTop =
      chat.scrollHeight;

  }


  const prompt =
    v154BuildAIPrompt(
      text
    );


  try {

    let answer = "";


    if (
      typeof v12SafeAIFetch ===
      "function"
    ) {

      answer =
        await v12SafeAIFetch(
          prompt
        );

    } else {

      const endpoint =
        typeof AI_API_URL !==
        "undefined"
          ? AI_API_URL
          : "";


      if (!endpoint) {
        throw new Error(
          "AI endpoint unavailable"
        );
      }


      const response =
        await fetch(
          endpoint,
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json"
            },

            body:
              JSON.stringify({
                message: prompt
              })
          }
        );


      if (!response.ok) {
        throw new Error(
          "AI server error"
        );
      }


      const data =
        await response.json();


      answer =
        data.reply ||
        data.response ||
        data.message ||
        "";
    }


    if (!answer) {
      throw new Error(
        "Empty AI response"
      );
    }


    const thinking =
      document.getElementById(
        "v154Thinking"
      );

    if (thinking) {
      thinking.remove();
    }


    if (chat) {

      chat.innerHTML += `

        <div class="v154-ai-message">

          <div class="v154-ai-title">
            🤖 AI Business Coach
          </div>

          <div class="v154-ai-content">
            ${v154Esc(answer)
              .replace(/\n/g,"<br>")}
          </div>

        </div>

      `;

      chat.scrollTop =
        chat.scrollHeight;
    }


    v154SaveHistory(
      text,
      answer
    );


  } catch (error) {

    const thinking =
      document.getElementById(
        "v154Thinking"
      );

    if (thinking) {
      thinking.remove();
    }


    let fallback =
      v154LocalCoachAnswer(
        text
      );


    if (chat) {

      chat.innerHTML += `

        <div class="v154-ai-message">

          <div class="v154-ai-title">
            🤖 AI Business Coach
          </div>

          <div class="v154-ai-content">

            ${v154Esc(
              fallback
            ).replace(
              /\n/g,
              "<br>"
            )}

          </div>

        </div>

      `;

      chat.scrollTop =
        chat.scrollHeight;
    }


    v154SaveHistory(
      text,
      fallback
    );

  }
}


/* =========================================================
   LOCAL FALLBACK COACH
   ========================================================= */

function v154LocalCoachAnswer(
  question
) {

  const salesmen =
    v154GetSalesmen()
      .filter(
        x => x.active !== false
      );


  if (!salesmen.length) {

    return `
လက်ရှိ AI Business Coach မှာ Salesman KPI Data မရှိသေးပါ

အရင်ဆုံး Salesman Performance ထဲမှာ

• Salesman Name
• Monthly Target
• Daily Sales
• Customer Visits
• Orders
• Collection
• New Customers

တွေထည့်ပေးပါ

Data ထည့်ပြီးနောက် AI က Salesman တစ်ယောက်ချင်းစီရဲ့ Target, Actual, Achievement, Gap, Growth နဲ့ Forecast ကို ခွဲပြီး Analysis လုပ်ပေးနိုင်ပါမယ်
`;

  }


  const metrics =
    salesmen
      .map(
        x =>
          typeof v153GetSalesmanMetrics ===
          "function"
            ? v153GetSalesmanMetrics(
                x.id
              )
            : null
      )
      .filter(Boolean);


  const ranked =
    [...metrics]
      .sort(
        (a,b) =>
          b.achievement -
          a.achievement
      );


  const top =
    ranked[0];

  const bottom =
    ranked[ranked.length - 1];


  const totalTarget =
    metrics.reduce(
      (s,m) =>
        s + m.target,
      0
    );

  const totalActual =
    metrics.reduce(
      (s,m) =>
        s + m.actual,
      0
    );

  const achievement =
    totalTarget > 0
      ? totalActual /
        totalTarget *
        100
      : 0;


  return `
လက်ရှိ Team Performance အခြေအနေ

Team Target:
${v154Money(totalTarget)}

Team Actual:
${v154Money(totalActual)}

Team Achievement:
${v154Percent(achievement)}

Top Performer:
${top.salesman.name}
(${v154Percent(top.achievement)})

အနိမ့်ဆုံး Performance:
${bottom.salesman.name}
(${v154Percent(bottom.achievement)})

Manager အနေနဲ့ အခုအချိန်မှာ အောက်ပါ KPI တွေကို Daily Review လုပ်သင့်ပါတယ်

1. Daily Sales
2. Customer Visits
3. Orders
4. Conversion
5. Collection
6. New Customers
7. Target Gap

အနိမ့်ဆုံး Performance ရှိတဲ့ Salesman ကို Target မပြည့်ဘူးလို့ပဲ မဆုံးဖြတ်ဘဲ Customer Coverage, Visit Productivity, Order Conversion နဲ့ Follow-up Quality ကို အရင်စစ်ဆေးပါ

နောက် 7 ရက်အတွက် High-value Customers, Pending Orders, New Customer Prospecting နဲ့ Collection ကို Priority ပေးပြီး Daily KPI Review လုပ်ပါ
`;

}


/* =========================================================
   HISTORY
   ========================================================= */

function v154SaveHistory(
  question,
  answer
) {

  const history =
    v154Get(
      V154_AI_HISTORY_KEY,
      []
    );


  history.push({

    question,

    answer,

    date:
      new Date().toISOString()

  });


  while (
    history.length > 50
  ) {
    history.shift();
  }


  v154Set(
    V154_AI_HISTORY_KEY,
    history
  );
}


/* =========================================================
   QUICK MANAGEMENT QUESTIONS
   ========================================================= */

function v154OpenManagementQuestions() {

  showModal(`

    <div class="v154-question-panel">

      <h2>
        🤖 AI Management Advisor
      </h2>

      <p>
        Salesman KPI Data ကိုအခြေခံပြီး မေးနိုင်ပါတယ်
      </p>


      <button
        class="secondary-button v154-question-button"
        onclick="closeModal();v154AskBusinessCoach('လက်ရှိ Sales Team မှာ ဘယ်သူက Performance အကောင်းဆုံးလဲ၊ ဘာကြောင့်လဲ')"
      >
        🏆 ဘယ်သူက Top Performer လဲ
      </button>


      <button
        class="secondary-button v154-question-button"
        onclick="closeModal();v154AskBusinessCoach('ဘယ် Salesman က Performance အားနည်းဆုံးလဲ၊ Root Cause နဲ့ Coaching Plan ပြောပါ')"
      >
        🔴 ဘယ်သူက အားနည်းဆုံးလဲ
      </button>


      <button
        class="secondary-button v154-question-button"
        onclick="closeModal();v154AskBusinessCoach('လက်ရှိ Team Target ကို ပြည့်နိုင်မပြည့်နိုင် KPI data အရ Forecast လုပ်ပြီးရှင်းပြပါ')"
      >
        🎯 Target ပြည့်နိုင်မလား
      </button>


      <button
        class="secondary-button v154-question-button"
        onclick="closeModal();v154AskBusinessCoach('Sales ကျနေတဲ့အတွက် Sales Team ကို နောက် 7 ရက် ဘယ်လို Manage ရမလဲ')"
      >
        📉 Sales ကျနေရင် ဘာလုပ်ရမလဲ
      </button>


      <button
        class="secondary-button v154-question-button"
        onclick="closeModal();v154AskBusinessCoach('Salesman တစ်ယောက်ချင်းစီအတွက် Daily KPI နဲ့ Action Plan ဆွဲပေးပါ')"
      >
        📅 Daily KPI Plan
      </button>


      <button
        class="secondary-button v154-question-button"
        onclick="closeModal();v154AskBusinessCoach('Management Meeting အတွက် Sales Team Performance Report တစ်စောင်ရေးပေးပါ')"
      >
        📋 Management Report
      </button>

    </div>

  `);
}


/* =========================================================
   CONNECT EXISTING AI INPUT
   ========================================================= */

function v154SendFromExistingAI() {

  const input =
    document.getElementById(
      "aiInput"
    );

  const question =
    input?.value?.trim();


  if (!question) {

    if (
      typeof showToast ===
      "function"
    ) {
      showToast(
        "မေးခွန်းထည့်ပါ"
      );
    }

    return;
  }


  if (input) {
    input.value = "";
  }


  return v154AskBusinessCoach(
    question
  );
}


/* =========================================================
   OVERRIDE AI BUSINESS COACH SEND
   ========================================================= */

window.sendAIMessage =
  function(message) {

    if (message) {
      return v154AskBusinessCoach(
        message
      );
    }

    return v154SendFromExistingAI();

  };


window.askAIQuick =
  function(question) {

    return v154AskBusinessCoach(
      question
    );

  };


window.v154AskBusinessCoach =
  v154AskBusinessCoach;

window.v154OpenManagementQuestions =
  v154OpenManagementQuestions;


/* =========================================================
   CSS
   ========================================================= */

function v154InjectStyles() {

  if (
    document.getElementById(
      "v154Styles"
    )
  ) {
    return;
  }


  const style =
    document.createElement("style");

  style.id =
    "v154Styles";


  style.textContent = `

    .v154-user-message {
      padding: 14px 16px;
      margin: 10px 0;
      border-radius: 14px;
      background: rgba(59,130,246,.08);
      border: 1px solid rgba(59,130,246,.12);
    }

    .v154-user-message strong {
      display: block;
      margin-bottom: 5px;
    }

    .v154-ai-message {
      margin: 12px 0;
      border-radius: 16px;
      overflow: hidden;
      border: 1px solid rgba(0,0,0,.08);
      background: var(--card-bg,#fff);
    }

    .v154-ai-title {
      padding: 13px 16px;
      font-weight: 800;
      background: rgba(0,0,0,.05);
    }

    .v154-ai-content {
      padding: 17px;
      line-height: 1.8;
      font-size: 14px;
    }

    .v154-ai-thinking {
      padding: 14px;
      margin: 10px 0;
      border-radius: 12px;
      background: rgba(245,158,11,.10);
      text-align: center;
    }

    .v154-question-panel {
      max-width: 650px;
      margin: 0 auto;
    }

    .v154-question-panel h2 {
      margin-top: 0;
    }

    .v154-question-button {
      width: 100%;
      text-align: left;
      margin: 7px 0;
      padding: 14px 16px;
    }

  `;


  document.head.appendChild(
    style
  );
}


/* =========================================================
   INIT
   ========================================================= */

function v154Init() {

  v154InjectStyles();

}


if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    () => {

      setTimeout(
        v154Init,
        1500
      );

    }
  );

} else {

  setTimeout(
    v154Init,
    1500
  );

}
  /* =========================================================
   AUNG BUSINESS ACADEMY
   V15.5 SALES TEAM SIDEBAR + SALESMAN ACCESS
   ========================================================= */

function v155InjectSalesTeamSidebar() {

  /* -----------------------------------------
     FIND SIDEBAR
     ----------------------------------------- */

  const sidebar =
    document.querySelector(".sidebar");

  if (!sidebar) {
    return;
  }


  /* -----------------------------------------
     PREVENT DUPLICATE
     ----------------------------------------- */

  if (
    document.getElementById(
      "v155SalesTeamButton"
    )
  ) {
    return;
  }


  /* -----------------------------------------
     CREATE BUTTON
     ----------------------------------------- */

  const button =
    document.createElement("button");

  button.id =
    "v155SalesTeamButton";

  button.className =
    "v155-sales-team-button";

  button.innerHTML = `
    <span class="v155-icon">👥</span>
    <span class="v155-text">
      Sales Team
    </span>
  `;


  button.onclick = function() {

    if (
      typeof closeSidebarMobile ===
      "function"
    ) {
      closeSidebarMobile();
    }

    if (
      typeof openV153Salesmen ===
      "function"
    ) {

      openV153Salesmen();

    } else {

      v155OpenSalesTeamFallback();

    }

  };


  /* -----------------------------------------
     FIND BEST PLACE
     ----------------------------------------- */

  const existingButtons =
    sidebar.querySelectorAll(
      "button"
    );


  let inserted = false;


  /*
     Try to place after Sales Management
  */

  existingButtons.forEach(
    function(existing) {

      const text =
        (
          existing.innerText ||
          existing.textContent ||
          ""
        ).toLowerCase();


      if (
        !inserted &&
        (
          text.includes(
            "sales management"
          ) ||
          text.includes(
            "sales manager"
          ) ||
          text.includes(
            "sales"
          )
        )
      ) {

        existing.insertAdjacentElement(
          "afterend",
          button
        );

        inserted = true;

      }

    }
  );


  /*
     If no suitable place found,
     put before Settings
  */

  if (!inserted) {

    const settingsButton =
      Array.from(
        existingButtons
      ).find(
        function(btn) {

          const text =
            (
              btn.innerText ||
              btn.textContent ||
              ""
            ).toLowerCase();

          return text.includes(
            "settings"
          );

        }
      );


    if (settingsButton) {

      settingsButton.insertAdjacentElement(
        "beforebegin",
        button
      );

      inserted = true;

    }

  }


  /*
     Last fallback
  */

  if (!inserted) {

    sidebar.appendChild(
      button
    );

  }

}


/* =========================================================
   FALLBACK SALES TEAM PAGE
   ========================================================= */

function v155OpenSalesTeamFallback() {

  if (
    typeof setPage ===
    "function"
  ) {

    setPage(
      "Sales Team",
      "Salesman Performance & KPI"
    );

  }


  const salesmen =
    typeof v153GetSalesmen ===
    "function"
      ? v153GetSalesmen()
      : [];


  let html = `

    <div class="v155-sales-team-page">

      <div class="v155-header">

        <div>

          <h2>
            👥 Sales Team
          </h2>

          <p>
            Salesman တစ်ယောက်ချင်းစီရဲ့
            Performance ကို စီမံခန့်ခွဲပါ
          </p>

        </div>

        <button
          class="primary-button"
          onclick="openV153AddSalesman()"
        >
          ＋ Add Salesman
        </button>

      </div>

      <div class="v155-team-grid">
  `;


  if (!salesmen.length) {

    html += `

      <div class="v155-empty">

        <div class="v155-empty-icon">
          👥
        </div>

        <h3>
          Salesman မရှိသေးပါ
        </h3>

        <p>
          Add Salesman ကိုနှိပ်ပြီး
          Salesman အသစ်ထည့်ပါ
        </p>

        <button
          class="primary-button"
          onclick="openV153AddSalesman()"
        >
          ＋ Add First Salesman
        </button>

      </div>

    `;

  } else {

    salesmen.forEach(
      function(person) {

        let metrics = null;

        if (
          typeof v153GetSalesmanMetrics ===
          "function"
        ) {

          metrics =
            v153GetSalesmanMetrics(
              person.id
            );

        }


        const target =
          Number(
            metrics?.target ||
            person.target ||
            0
          );

        const actual =
          Number(
            metrics?.actual ||
            person.actual ||
            0
          );

        const achievement =
          target > 0
            ? actual / target * 100
            : 0;

        const gap =
          Math.max(
            target - actual,
            0
          );


        html += `

          <div class="v155-salesman-card">

            <div class="v155-person-top">

              <div class="v155-avatar">
                ${(person.name || "S")
                  .charAt(0)
                  .toUpperCase()}
              </div>

              <div>

                <h3>
                  ${v155Esc(
                    person.name ||
                    "Salesman"
                  )}
                </h3>

                <span>
                  ${v155Esc(
                    person.territory ||
                    "Territory not set"
                  )}
                </span>

              </div>

            </div>


            <div class="v155-kpi-row">

              <div>

                <small>
                  Target
                </small>

                <strong>
                  ${v155Money(target)}
                </strong>

              </div>

              <div>

                <small>
                  Actual
                </small>

                <strong>
                  ${v155Money(actual)}
                </strong>

              </div>

              <div>

                <small>
                  Achievement
                </small>

                <strong>
                  ${achievement.toFixed(1)}%
                </strong>

              </div>

            </div>


            <div class="v155-progress">

              <div
                class="v155-progress-fill"
                style="
                  width:${Math.min(
                    achievement,
                    100
                  )}%
                "
              ></div>

            </div>


            <div class="v155-gap">

              Target Gap:
              <strong>
                ${v155Money(gap)}
              </strong>

            </div>


            <div class="v155-actions">

              <button
                class="secondary-button"
                onclick="
                  openV153SalesmanDetail(
                    '${person.id}'
                  )
                "
              >
                📊 View Detail
              </button>

              <button
                class="secondary-button"
                onclick="
                  openV153DailyEntry(
                    '${person.id}'
                  )
                "
              >
                ＋ Daily Sales
              </button>

            </div>

          </div>

        `;

      }
    );

  }


  html += `

      </div>

    </div>

  `;


  if (
    typeof setContent ===
    "function"
  ) {

    setContent(
      html
    );

  } else {

    const main =
      document.querySelector(
        ".main-content"
      ) ||
      document.querySelector(
        ".content"
      ) ||
      document.querySelector(
        "main"
      );

    if (main) {
      main.innerHTML =
        html;
    }

  }

}


/* =========================================================
   HELPERS
   ========================================================= */

function v155Money(value) {

  return new Intl.NumberFormat(
    "en-US"
  ).format(
    Math.round(
      Number(value) || 0
    )
  );

}


function v155Esc(value) {

  return String(
    value ?? ""
  )
    .replace(
      /&/g,
      "&amp;"
    )
    .replace(
      /</g,
      "&lt;"
    )
    .replace(
      />/g,
      "&gt;"
    )
    .replace(
      /"/g,
      "&quot;"
    )
    .replace(
      /'/g,
      "&#039;"
    );

}


/* =========================================================
   STYLE
   ========================================================= */

function v155InjectStyles() {

  if (
    document.getElementById(
      "v155Styles"
    )
  ) {
    return;
  }


  const style =
    document.createElement(
      "style"
    );

  style.id =
    "v155Styles";


  style.textContent = `

    /* SALES TEAM SIDEBAR */

    #v155SalesTeamButton {

      width: 100%;

      display: flex;

      align-items: center;

      gap: 12px;

      border: 0;

      background: transparent;

      color: inherit;

      padding: 11px 14px;

      margin: 3px 0;

      border-radius: 10px;

      font-size: 14px;

      font-weight: 600;

      text-align: left;

      cursor: pointer;

      transition:
        background .2s ease,
        transform .2s ease;

    }


    #v155SalesTeamButton:hover {

      background:
        rgba(59,130,246,.10);

      transform:
        translateX(2px);

    }


    .v155-icon {

      width: 25px;

      min-width: 25px;

      text-align: center;

      font-size: 18px;

    }


    .v155-text {

      flex: 1;

    }


    /* PAGE */

    .v155-sales-team-page {

      width: 100%;

      max-width: 1200px;

      margin: 0 auto;

    }


    .v155-header {

      display: flex;

      align-items: center;

      justify-content: space-between;

      gap: 20px;

      margin-bottom: 24px;

      padding: 20px;

      border-radius: 18px;

      background:
        linear-gradient(
          135deg,
          rgba(59,130,246,.10),
          rgba(99,102,241,.06)
        );

      border:
        1px solid
        rgba(59,130,246,.12);

    }


    .v155-header h2 {

      margin: 0 0 6px;

    }


    .v155-header p {

      margin: 0;

      opacity: .7;

    }


    .v155-team-grid {

      display: grid;

      grid-template-columns:
        repeat(
          auto-fit,
          minmax(
            280px,
            1fr
          )
        );

      gap: 18px;

    }


    .v155-salesman-card {

      background:
        var(--card-bg,#fff);

      border:
        1px solid
        rgba(0,0,0,.08);

      border-radius: 18px;

      padding: 18px;

      box-shadow:
        0 5px 20px
        rgba(0,0,0,.05);

    }


    .v155-person-top {

      display: flex;

      align-items: center;

      gap: 12px;

      margin-bottom: 18px;

    }


    .v155-avatar {

      width: 48px;

      height: 48px;

      border-radius: 50%;

      display: flex;

      align-items: center;

      justify-content: center;

      background:
        rgba(59,130,246,.12);

      font-size: 19px;

      font-weight: 800;

    }


    .v155-person-top h3 {

      margin: 0 0 4px;

    }


    .v155-person-top span {

      font-size: 12px;

      opacity: .65;

    }


    .v155-kpi-row {

      display: grid;

      grid-template-columns:
        repeat(3,1fr);

      gap: 8px;

      margin-bottom: 14px;

    }


    .v155-kpi-row div {

      padding: 10px;

      border-radius: 10px;

      background:
        rgba(0,0,0,.035);

      text-align: center;

    }


    .v155-kpi-row small {

      display: block;

      font-size: 11px;

      opacity: .65;

      margin-bottom: 4px;

    }


    .v155-kpi-row strong {

      font-size: 13px;

    }


    .v155-progress {

      height: 8px;

      background:
        rgba(0,0,0,.08);

      border-radius: 99px;

      overflow: hidden;

      margin-bottom: 12px;

    }


    .v155-progress-fill {

      height: 100%;

      background:
        linear-gradient(
          90deg,
          #2563eb,
          #7c3aed
        );

      border-radius: 99px;

      transition:
        width .3s ease;

    }


    .v155-gap {

      padding: 10px;

      border-radius: 10px;

      background:
        rgba(239,68,68,.07);

      margin-bottom: 14px;

      font-size: 13px;

    }


    .v155-gap strong {

      float: right;

    }


    .v155-actions {

      display: grid;

      grid-template-columns:
        1fr 1fr;

      gap: 8px;

    }


    .v155-actions button {

      width: 100%;

      font-size: 12px;

    }


    .v155-empty {

      grid-column:
        1 / -1;

      text-align: center;

      padding: 60px 20px;

      border-radius: 18px;

      border:
        1px dashed
        rgba(0,0,0,.15);

    }


    .v155-empty-icon {

      font-size: 50px;

      margin-bottom: 15px;

    }


    @media (
      max-width: 700px
    ) {

      .v155-header {

        flex-direction:
          column;

        align-items:
          stretch;

      }


      .v155-kpi-row {

        grid-template-columns:
          1fr;

      }


      .v155-actions {

        grid-template-columns:
          1fr;

      }

    }

  `;


  document.head.appendChild(
    style
  );

}


/* =========================================================
   INITIALIZE
   ========================================================= */

function v155Init() {

  v155InjectStyles();

  setTimeout(
    function() {

      v155InjectSalesTeamSidebar();

    },
    1200
  );

  /*
     Retry because the app may
     rebuild the sidebar after startup
  */

  setTimeout(
    function() {

      v155InjectSalesTeamSidebar();

    },
    2500
  );

  setTimeout(
    function() {

      v155InjectSalesTeamSidebar();

    },
    5000
  );

}


/* =========================================================
   EXPORT
   ========================================================= */

window.v155Init =
  v155Init;

window.v155OpenSalesTeamFallback =
  v155OpenSalesTeamFallback;


/* =========================================================
   START
   ========================================================= */

if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    function() {

      setTimeout(
        v155Init,
        1000
      );

    }
  );

} else {

  setTimeout(
    v155Init,
    1000
  );

}
  /* =========================================================
   AUNG BUSINESS ACADEMY
   V15.6 PREMIUM SALES TEAM
   SAFE PREMIUM GATE + SIDEBAR
   ========================================================= */

(function () {

  "use strict";


  /* =======================================================
     PREMIUM CHECK
     Uses existing Academy Premium system
     ======================================================= */

  function v156HasPremium() {

    try {

      /* Existing function from main app */

      if (
        typeof hasPremiumAccess === "function"
      ) {
        return !!hasPremiumAccess();
      }


      /* Existing global Premium system */

      if (
        window.AungPremium &&
        typeof window.AungPremium.hasAccess === "function"
      ) {
        return !!window.AungPremium.hasAccess();
      }


      if (
        window.AungPremium &&
        typeof window.AungPremium.isPremiumActive === "function"
      ) {
        return !!window.AungPremium.isPremiumActive();
      }


      /* Existing local Premium key */

      const raw =
        localStorage.getItem(
          "aung_business_academy_premium"
        );

      if (!raw) {
        return false;
      }


      const premium =
        JSON.parse(raw);


      if (
        !premium ||
        !premium.expiresAt
      ) {
        return false;
      }


      if (
        Date.now() >=
        Number(premium.expiresAt)
      ) {

        localStorage.removeItem(
          "aung_business_academy_premium"
        );

        return false;
      }


      return true;

    } catch (error) {

      console.warn(
        "V15.6 Premium check error:",
        error
      );

      return false;

    }

  }


  /* =======================================================
     PREMIUM REQUIRED SCREEN
     ======================================================= */

  function v156RequirePremium() {

    try {

      if (
        typeof openPremium ===
        "function"
      ) {

        openPremium();

        return;

      }


      if (
        typeof openPremiumAccess ===
        "function"
      ) {

        openPremiumAccess();

        return;

      }


      /* Emergency fallback */

      if (
        typeof showModal ===
        "function"
      ) {

        showModal(`

          <div class="v156-premium-lock">

            <div class="v156-lock-icon">
              🔐
            </div>

            <h2>
              Premium Feature
            </h2>

            <p>
              Sales Team Management ကို
              Premium Member များအတွက်သာ
              အသုံးပြုနိုင်ပါတယ်
            </p>

            <button
              class="primary-button"
              onclick="
                if(typeof openPremium === 'function'){
                  openPremium();
                }
              "
            >
              👑 Upgrade Premium
            </button>

          </div>

        `);

      }

    } catch (error) {

      console.warn(
        "V15.6 Premium screen error:",
        error
      );

    }

  }


  /* =======================================================
     OPEN SALES TEAM
     ======================================================= */

  function v156OpenSalesTeam() {

    /* FIRST: PREMIUM CHECK */

    if (
      !v156HasPremium()
    ) {

      v156RequirePremium();

      return;

    }


    /* THEN OPEN V15.3 */

    try {

      if (
        typeof openV153Salesmen ===
        "function"
      ) {

        openV153Salesmen();

        return;

      }


      if (
        typeof window.openV153Salesmen ===
        "function"
      ) {

        window.openV153Salesmen();

        return;

      }


      /* Fallback */

      v156SalesTeamFallback();

    } catch (error) {

      console.error(
        "V15.6 Sales Team error:",
        error
      );

      v156SalesTeamFallback();

    }

  }


  /* =======================================================
     FALLBACK SALES TEAM PAGE
     ======================================================= */

  function v156SalesTeamFallback() {

    if (
      !v156HasPremium()
    ) {

      v156RequirePremium();

      return;

    }


    const salesmen =
      v156GetSalesmen();


    let html = `

      <div class="v156-page">

        <div class="v156-page-header">

          <div>

            <div class="v156-title">
              👥 Sales Team
            </div>

            <div class="v156-subtitle">
              Salesman Performance & KPI
            </div>

          </div>


          <button
            class="primary-button"
            onclick="v156AddSalesman()"
          >
            ＋ Add Salesman
          </button>

        </div>


        <div class="v156-grid">
    `;


    if (
      !salesmen.length
    ) {

      html += `

        <div class="v156-empty">

          <div class="v156-empty-icon">
            👥
          </div>

          <h3>
            Salesman မရှိသေးပါ
          </h3>

          <p>
            Salesman တစ်ယောက်ထည့်ပြီး
            Target နဲ့ Daily Sales ကို
            စတင်မှတ်တမ်းတင်ပါ
          </p>

          <button
            class="primary-button"
            onclick="v156AddSalesman()"
          >
            ＋ Add First Salesman
          </button>

        </div>

      `;

    } else {

      salesmen.forEach(
        function (person) {

          const target =
            Number(
              person.target || 0
            );

          const actual =
            Number(
              person.actual || 0
            );

          const achievement =
            target > 0
              ? (
                  actual /
                  target
                ) * 100
              : 0;

          const gap =
            Math.max(
              target - actual,
              0
            );


          html += `

            <div
              class="v156-salesman-card"
            >

              <div class="v156-person">

                <div class="v156-avatar">

                  ${String(
                    person.name ||
                    "S"
                  )
                    .charAt(0)
                    .toUpperCase()}

                </div>


                <div>

                  <h3>
                    ${v156Esc(
                      person.name ||
                      "Salesman"
                    )}
                  </h3>

                  <span>
                    ${v156Esc(
                      person.territory ||
                      "Territory မသတ်မှတ်ရသေးပါ"
                    )}
                  </span>

                </div>

              </div>


              <div class="v156-kpis">

                <div>

                  <small>
                    Target
                  </small>

                  <strong>
                    ${v156Money(
                      target
                    )}
                  </strong>

                </div>


                <div>

                  <small>
                    Actual
                  </small>

                  <strong>
                    ${v156Money(
                      actual
                    )}
                  </strong>

                </div>


                <div>

                  <small>
                    Achievement
                  </small>

                  <strong>
                    ${achievement.toFixed(
                      1
                    )}%
                  </strong>

                </div>

              </div>


              <div
                class="v156-progress"
              >

                <div
                  class="v156-progress-bar"
                  style="
                    width:${Math.min(
                      Math.max(
                        achievement,
                        0
                      ),
                      100
                    )}%
                  "
                ></div>

              </div>


              <div
                class="v156-gap"
              >

                Target Gap

                <strong>
                  ${v156Money(
                    gap
                  )}
                </strong>

              </div>


              <div
                class="v156-actions"
              >

                <button
                  class="secondary-button"
                  onclick="
                    v156OpenDetail(
                      '${v156Esc(
                        person.id
                      )}'
                    )
                  "
                >
                  📊 View Detail
                </button>


                <button
                  class="secondary-button"
                  onclick="
                    v156DailyEntry(
                      '${v156Esc(
                        person.id
                      )}'
                    )
                  "
                >
                  ＋ Daily Sales
                </button>

              </div>

            </div>

          `;

        }
      );

    }


    html += `

        </div>

      </div>

    `;


    v156SetPageContent(
      html
    );

  }


  /* =======================================================
     GET SALESMEN
     ======================================================= */

  function v156GetSalesmen() {

    try {

      if (
        typeof v153GetSalesmen ===
        "function"
      ) {

        return v153GetSalesmen() || [];

      }


      const raw =
        localStorage.getItem(
          "aung_business_academy_v153_salesmen"
        );


      if (!raw) {
        return [];
      }


      const data =
        JSON.parse(raw);


      return Array.isArray(data)
        ? data
        : [];

    } catch (error) {

      console.warn(
        "V15.6 Salesman data error:",
        error
      );

      return [];

    }

  }


  /* =======================================================
     DETAIL
     ======================================================= */

  function v156OpenDetail(
    id
  ) {

    if (
      !v156HasPremium()
    ) {

      v156RequirePremium();

      return;

    }


    if (
      typeof openV153SalesmanDetail ===
      "function"
    ) {

      openV153SalesmanDetail(
        id
      );

      return;

    }


    alert(
      "Salesman Detail is loading..."
    );

  }


  /* =======================================================
     DAILY ENTRY
     ======================================================= */

  function v156DailyEntry(
    id
  ) {

    if (
      !v156HasPremium()
    ) {

      v156RequirePremium();

      return;

    }


    if (
      typeof openV153DailyEntry ===
      "function"
    ) {

      openV153DailyEntry(
        id
      );

      return;

    }


    alert(
      "Daily Sales is loading..."
    );

  }


  /* =======================================================
     ADD SALESMAN
     ======================================================= */

  function v156AddSalesman() {

    if (
      !v156HasPremium()
    ) {

      v156RequirePremium();

      return;

    }


    if (
      typeof openV153AddSalesman ===
      "function"
    ) {

      openV153AddSalesman();

      return;

    }


    alert(
      "Add Salesman is loading..."
    );

  }


  /* =======================================================
     SET PAGE CONTENT
     ======================================================= */

  function v156SetPageContent(
    html
  ) {

    try {

      if (
        typeof setPage ===
        "function"
      ) {

        setPage(
          "Sales Team",
          "Salesman Performance & KPI"
        );

      }


      if (
        typeof setContent ===
        "function"
      ) {

        setContent(
          html
        );

        return;

      }


      const container =
        document.querySelector(
          ".main-content"
        ) ||
        document.querySelector(
          ".content"
        ) ||
        document.querySelector(
          "main"
        );


      if (container) {

        container.innerHTML =
          html;

      }

    } catch (error) {

      console.error(
        "V15.6 page error:",
        error
      );

    }

  }


  /* =======================================================
     SIDEBAR BUTTON
     ======================================================= */

  function v156InjectSidebar() {

    try {

      const sidebar =
        document.querySelector(
          ".sidebar"
        );


      if (!sidebar) {
        return;
      }


      /* Remove previous V15.5 button */

      const oldButton =
        document.getElementById(
          "v155SalesTeamButton"
        );

      if (oldButton) {

        oldButton.remove();

      }


      /* Already installed */

      if (
        document.getElementById(
          "v156SalesTeamButton"
        )
      ) {

        return;

      }


      const button =
        document.createElement(
          "button"
        );


      button.id =
        "v156SalesTeamButton";


      button.type =
        "button";


      button.className =
        "v156-sidebar-button";


      button.innerHTML = `

        <span class="v156-sidebar-icon">
          👥
        </span>

        <span class="v156-sidebar-text">
          Sales Team
        </span>

        <span class="v156-premium-badge">
          PRO
        </span>

      `;


      button.addEventListener(
        "click",
        function () {

          v156OpenSalesTeam();

        }
      );


      /* ----------------------------------
         Find Sales Management
         ---------------------------------- */

      const buttons =
        Array.from(
          sidebar.querySelectorAll(
            "button"
          )
        );


      let inserted =
        false;


      for (
        const existing
        of buttons
      ) {

        if (
          existing === button
        ) {
          continue;
        }


        const text =
          (
            existing.innerText ||
            existing.textContent ||
            ""
          )
            .trim()
            .toLowerCase();


        if (
          text ===
            "sales management" ||
          text.includes(
            "sales management"
          )
        ) {

          existing.insertAdjacentElement(
            "afterend",
            button
          );

          inserted =
            true;

          break;

        }

      }


      /* ----------------------------------
         Find Sales Manager
         ---------------------------------- */

      if (!inserted) {

        for (
          const existing
          of buttons
        ) {

          const text =
            (
              existing.innerText ||
              existing.textContent ||
              ""
            )
              .trim()
              .toLowerCase();


          if (
            text.includes(
              "sales manager"
            )
          ) {

            existing.insertAdjacentElement(
              "afterend",
              button
            );

            inserted =
              true;

            break;

          }

        }

      }


      /* ----------------------------------
         Before Settings
         ---------------------------------- */

      if (!inserted) {

        for (
          const existing
          of buttons
        ) {

          const text =
            (
              existing.innerText ||
              existing.textContent ||
              ""
            )
              .trim()
              .toLowerCase();


          if (
            text.includes(
              "settings"
            )
          ) {

            existing.insertAdjacentElement(
              "beforebegin",
              button
            );

            inserted =
              true;

            break;

          }

        }

      }


      /* ----------------------------------
         Last fallback
         ---------------------------------- */

      if (!inserted) {

        sidebar.appendChild(
          button
        );

      }

    } catch (error) {

      console.error(
        "V15.6 sidebar error:",
        error
      );

    }

  }


  /* =======================================================
     HTML HELPERS
     ======================================================= */

  function v156Money(
    value
  ) {

    return new Intl.NumberFormat(
      "en-US"
    ).format(
      Math.round(
        Number(value) || 0
      )
    );

  }


  function v156Esc(
    value
  ) {

    return String(
      value ?? ""
    )
      .replace(
        /&/g,
        "&amp;"
      )
      .replace(
        /</g,
        "&lt;"
      )
      .replace(
        />/g,
        "&gt;"
      )
      .replace(
        /"/g,
        "&quot;"
      )
      .replace(
        /'/g,
        "&#039;"
      );

  }


  /* =======================================================
     CSS
     ======================================================= */

  function v156Styles() {

    if (
      document.getElementById(
        "v156Styles"
      )
    ) {

      return;

    }


    const style =
      document.createElement(
        "style"
      );


    style.id =
      "v156Styles";


    style.textContent = `

      #v156SalesTeamButton {
        display: none !important;
      }


      .v156-sidebar-button {

        width: 100%;

        min-height: 44px;

        display: flex;

        align-items: center;

        gap: 10px;

        padding: 11px 14px;

        margin: 3px 0;

        border: 0;

        border-radius: 10px;

        background: transparent;

        color: inherit;

        font-size: 14px;

        font-weight: 650;

        text-align: left;

        cursor: pointer;

        transition:
          background .2s ease,
          transform .2s ease;

      }


      .v156-sidebar-button:hover {

        background:
          rgba(59,130,246,.10);

        transform:
          translateX(2px);

      }


      .v156-sidebar-icon {

        width: 24px;

        min-width: 24px;

        text-align: center;

        font-size: 18px;

      }


      .v156-sidebar-text {

        flex: 1;

      }


      .v156-premium-badge {

        font-size: 9px;

        font-weight: 800;

        padding: 3px 6px;

        border-radius: 5px;

        background:
          rgba(245,158,11,.15);

        color:
          #b45309;

      }


      .v156-page {

        width: 100%;

        max-width: 1200px;

        margin: 0 auto;

      }


      .v156-page-header {

        display: flex;

        align-items: center;

        justify-content: space-between;

        gap: 18px;

        padding: 20px;

        margin-bottom: 20px;

        border-radius: 18px;

        background:
          rgba(59,130,246,.07);

        border:
          1px solid
          rgba(59,130,246,.12);

      }


      .v156-title {

        font-size: 25px;

        font-weight: 850;

        margin-bottom: 5px;

      }


      .v156-subtitle {

        opacity: .65;

        font-size: 14px;

      }


      .v156-grid {

        display: grid;

        grid-template-columns:
          repeat(
            auto-fit,
            minmax(
              280px,
              1fr
            )
          );

        gap: 18px;

      }


      .v156-salesman-card {

        padding: 18px;

        border-radius: 18px;

        background:
          var(--card-bg,#fff);

        border:
          1px solid
          rgba(0,0,0,.08);

        box-shadow:
          0 6px 24px
          rgba(0,0,0,.05);

      }


      .v156-person {

        display: flex;

        align-items: center;

        gap: 12px;

        margin-bottom: 18px;

      }


      .v156-avatar {

        width: 48px;

        height: 48px;

        min-width: 48px;

        display: flex;

        align-items: center;

        justify-content: center;

        border-radius: 50%;

        background:
          rgba(59,130,246,.12);

        font-size: 19px;

        font-weight: 850;

      }


      .v156-person h3 {

        margin: 0 0 4px;

      }


      .v156-person span {

        font-size: 12px;

        opacity: .6;

      }


      .v156-kpis {

        display: grid;

        grid-template-columns:
          repeat(3,1fr);

        gap: 8px;

      }


      .v156-kpis > div {

        padding: 10px 6px;

        border-radius: 10px;

        background:
          rgba(0,0,0,.035);

        text-align: center;

      }


      .v156-kpis small {

        display: block;

        font-size: 10px;

        opacity: .6;

        margin-bottom: 4px;

      }


      .v156-kpis strong {

        font-size: 12px;

      }


      .v156-progress {

        height: 8px;

        margin:
          14px 0 12px;

        overflow: hidden;

        border-radius: 99px;

        background:
          rgba(0,0,0,.08);

      }


      .v156-progress-bar {

        height: 100%;

        border-radius: 99px;

        background:
          linear-gradient(
            90deg,
            #2563eb,
            #7c3aed
          );

      }


      .v156-gap {

        display: flex;

        justify-content: space-between;

        padding: 10px;

        margin-bottom: 14px;

        border-radius: 10px;

        background:
          rgba(239,68,68,.07);

        font-size: 13px;

      }


      .v156-actions {

        display: grid;

        grid-template-columns:
          1fr 1fr;

        gap: 8px;

      }


      .v156-actions button {

        width: 100%;

        font-size: 12px;

      }


      .v156-empty {

        grid-column:
          1 / -1;

        text-align: center;

        padding: 60px 20px;

        border-radius: 18px;

        border:
          1px dashed
          rgba(0,0,0,.16);

      }


      .v156-empty-icon {

        font-size: 50px;

        margin-bottom: 14px;

      }


      .v156-premium-lock {

        max-width: 520px;

        margin: auto;

        text-align: center;

        padding: 20px;

      }


      .v156-lock-icon {

        font-size: 58px;

        margin-bottom: 12px;

      }


      @media (
        max-width: 700px
      ) {

        .v156-page-header {

          flex-direction:
            column;

          align-items:
            stretch;

        }


        .v156-kpis {

          grid-template-columns:
            1fr;

        }


        .v156-actions {

          grid-template-columns:
            1fr;

        }

      }

    `;


    document.head.appendChild(
      style
    );

  }


  /* =======================================================
     INIT
     ======================================================= */

  function v156Init() {

    v156Styles();


    v156InjectSidebar();


    /*
       Retry because the main app
       may rebuild its sidebar
    */

    setTimeout(
      v156InjectSidebar,
      800
    );


    setTimeout(
      v156InjectSidebar,
      1800
    );


    setTimeout(
      v156InjectSidebar,
      3500
    );


    setTimeout(
      v156InjectSidebar,
      6000
    );

  }


  /* =======================================================
     EXPORTS
     ======================================================= */

  window.v156HasPremium =
    v156HasPremium;

  window.v156OpenSalesTeam =
    v156OpenSalesTeam;

  window.v156RequirePremium =
    v156RequirePremium;

  window.v156AddSalesman =
    v156AddSalesman;

  window.v156OpenDetail =
    v156OpenDetail;

  window.v156DailyEntry =
    v156DailyEntry;


  /* =======================================================
     START
     ======================================================= */

  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      function () {

        setTimeout(
          v156Init,
          700
        );

      }
    );

  } else {

    setTimeout(
      v156Init,
      700
    );

  }

})();
  // START
  // ============================================================

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
/* =========================================================
   AUNG BUSINESS ACADEMY
   V15.7 SALES TEAM FORCE SIDEBAR
   PREMIUM SAFE VERSION
   ========================================================= */

(function () {

  "use strict";

  const BUTTON_ID =
    "aungV157SalesTeamButton";


  /* =======================================================
     PREMIUM CHECK
     ======================================================= */

  function hasPremium() {

    try {

      if (
        typeof hasPremiumAccess === "function"
      ) {
        return !!hasPremiumAccess();
      }


      const raw =
        localStorage.getItem(
          "aung_business_academy_premium"
        );


      if (!raw) {
        return false;
      }


      const data =
        JSON.parse(raw);


      if (!data) {
        return false;
      }


      if (
        data.active === true ||
        data.isPremium === true
      ) {
        return true;
      }


      if (
        data.expiresAt &&
        Date.now() <
        Number(data.expiresAt)
      ) {
        return true;
      }


      return false;

    } catch (error) {

      console.warn(
        "Premium check:",
        error
      );

      return false;

    }

  }


  /* =======================================================
     OPEN PREMIUM
     ======================================================= */

  function openPremiumGate() {

    try {

      if (
        typeof openPremium === "function"
      ) {

        openPremium();
        return;

      }


      if (
        typeof openPremiumAccess === "function"
      ) {

        openPremiumAccess();
        return;

      }


      if (
        typeof showModal === "function"
      ) {

        showModal(`

          <div
            style="
              text-align:center;
              padding:25px;
            "
          >

            <div
              style="
                font-size:55px;
                margin-bottom:15px;
              "
            >
              🔐
            </div>

            <h2>
              Premium Feature
            </h2>

            <p>
              Sales Team Management သည်
              Premium Member များအတွက်သာ
              အသုံးပြုနိုင်ပါသည်
            </p>

            <br>

            <button
              class="primary-button"
              onclick="
                if(typeof openPremium==='function'){
                  openPremium();
                }
              "
            >
              👑 Upgrade Premium
            </button>

          </div>

        `);

        return;

      }


      alert(
        "Sales Team သည် Premium Feature ဖြစ်ပါသည်"
      );

    } catch (error) {

      console.error(
        "Premium gate error:",
        error
      );

    }

  }


  /* =======================================================
     OPEN SALES TEAM
     ======================================================= */

  function openSalesTeam() {

    if (!hasPremium()) {

      openPremiumGate();

      return;

    }


    try {

      if (
        typeof openV153Salesmen ===
        "function"
      ) {

        openV153Salesmen();

        return;

      }


      if (
        typeof window.openV153Salesmen ===
        "function"
      ) {

        window.openV153Salesmen();

        return;

      }


      if (
        typeof openV156SalesTeam ===
        "function"
      ) {

        openV156SalesTeam();

        return;

      }


      alert(
        "Sales Team module မတွေ့ပါ — V15.3 code ကိုစစ်ဆေးရန်လိုပါသည်"
      );

    } catch (error) {

      console.error(
        "Sales Team open error:",
        error
      );

      alert(
        "Sales Team ဖွင့်ရာတွင် Error ဖြစ်နေပါသည်"
      );

    }

  }


  /* =======================================================
     FIND SIDEBAR
     ======================================================= */

  function findSidebar() {

    const selectors = [

      ".sidebar",

      "#sidebar",

      ".app-sidebar",

      ".side-bar",

      "aside",

      "nav"

    ];


    for (
      const selector of selectors
    ) {

      const elements =
        document.querySelectorAll(
          selector
        );


      for (
        const element of elements
      ) {

        if (
          element.offsetParent !== null ||
          element.classList.contains(
            "sidebar"
          )
        ) {

          return element;

        }

      }

    }


    return null;

  }


  /* =======================================================
     CREATE BUTTON
     ======================================================= */

  function createButton() {

    if (
      document.getElementById(
        BUTTON_ID
      )
    ) {

      return;

    }


    const sidebar =
      findSidebar();


    if (!sidebar) {

      return;

    }


    const button =
      document.createElement(
        "button"
      );


    button.id =
      BUTTON_ID;


    button.type =
      "button";


    button.className =
      "aung-v157-sales-team";


    button.innerHTML = `

      <span class="aung-v157-icon">
        👥
      </span>

      <span class="aung-v157-label">
        Sales Team
      </span>

      <span class="aung-v157-pro">
        PRO
      </span>

    `;


    button.addEventListener(
      "click",
      function (event) {

        event.preventDefault();

        event.stopPropagation();

        openSalesTeam();

      }
    );


    /* =====================================================
       FIND SETTINGS
       ===================================================== */

    const allButtons =
      Array.from(
        sidebar.querySelectorAll(
          "button"
        )
      );


    let inserted =
      false;


    /* Put before Settings */

    for (
      const item of allButtons
    ) {

      const text =
        (
          item.innerText ||
          item.textContent ||
          ""
        )
          .trim()
          .toLowerCase();


      if (
        text.includes(
          "settings"
        )
      ) {

        item.parentNode.insertBefore(
          button,
          item
        );

        inserted =
          true;

        break;

      }

    }


    /* =====================================================
       If Settings not found,
       put after Sales Management
       ===================================================== */

    if (!inserted) {

      for (
        const item of allButtons
      ) {

        const text =
          (
            item.innerText ||
            item.textContent ||
            ""
          )
            .trim()
            .toLowerCase();


        if (
          text.includes(
            "sales management"
          ) ||
          text.includes(
            "sales manager"
          )
        ) {

          item.insertAdjacentElement(
            "afterend",
            button
          );

          inserted =
            true;

          break;

        }

      }

    }


    /* =====================================================
       Final fallback
       ===================================================== */

    if (!inserted) {

      sidebar.appendChild(
        button
      );

    }

  }


  /* =======================================================
     CSS
     ======================================================= */

  function injectCSS() {

    if (
      document.getElementById(
        "aungV157CSS"
      )
    ) {

      return;

    }


    const style =
      document.createElement(
        "style"
      );


    style.id =
      "aungV157CSS";


    style.textContent = `

      .aung-v157-sales-team {

        width:100%;

        min-height:44px;

        display:flex;

        align-items:center;

        gap:10px;

        padding:11px 14px;

        margin:4px 0;

        border:0;

        border-radius:10px;

        background:transparent;

        color:inherit;

        font-family:inherit;

        font-size:14px;

        font-weight:650;

        text-align:left;

        cursor:pointer;

        transition:
          background .2s ease,
          transform .2s ease;

      }


      .aung-v157-sales-team:hover {

        background:
          rgba(59,130,246,.12);

        transform:
          translateX(2px);

      }


      .aung-v157-icon {

        width:25px;

        min-width:25px;

        font-size:18px;

        text-align:center;

      }


      .aung-v157-label {

        flex:1;

      }


      .aung-v157-pro {

        padding:3px 6px;

        border-radius:5px;

        font-size:9px;

        font-weight:800;

        background:
          rgba(245,158,11,.15);

        color:
          #b45309;

      }

    `;


    document.head.appendChild(
      style
    );

  }


  /* =======================================================
     WATCH SIDEBAR
     ======================================================= */

  function startWatcher() {

    injectCSS();

    createButton();


    /*
       Watch the whole app.

       If the sidebar is rebuilt,
       Sales Team will automatically
       be added again.
    */

    if (
      window.__AUNG_V157_OBSERVER__
    ) {

      return;

    }


    const observer =
      new MutationObserver(
        function () {

          if (
            !document.getElementById(
              BUTTON_ID
            )
          ) {

            createButton();

          }

        }
      );


    observer.observe(
      document.body,
      {
        childList: true,
        subtree: true
      }
    );


    window.__AUNG_V157_OBSERVER__ =
      observer;


    /* Extra retries */

    [500,1000,2000,4000,7000].forEach(
      function (delay) {

        setTimeout(
          createButton,
          delay
        );

      }
    );

  }


  /* =======================================================
     EXPORT
     ======================================================= */

  window.openAungSalesTeam =
    openSalesTeam;


  window.aungSalesTeamPremium =
    hasPremium;


  /* =======================================================
     START
     ======================================================= */

  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      function () {

        setTimeout(
          startWatcher,
          500
        );

      }
    );

  } else {

    setTimeout(
      startWatcher,
      500
    );

  }

})();
// ============================================================
// AUNG BUSINESS ACADEMY
// V16 PROFESSIONAL ACADEMY CORE
// Lesson -> Practice -> Tool -> KPI -> AI
// ============================================================

(function () {
  "use strict";

  const V16_KEY = "aung_business_academy_v16_professional";
  const V16_GOAL_KEY = "aung_business_academy_v16_goals";
  const V16_PRACTICE_KEY = "aung_business_academy_v16_practice";

  // ------------------------------------------------------------
  // STORAGE
  // ------------------------------------------------------------

  function v16Get(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch (error) {
      console.warn("V16 storage read error:", error);
      return fallback;
    }
  }

  function v16Set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.warn("V16 storage write error:", error);
      return false;
    }
  }

  function v16Esc(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function v16Money(value) {
    const n = Number(value || 0);
    return n.toLocaleString("en-US") + " Ks";
  }

  function v16Num(value) {
    const n = Number(value);
    return Number.isFinite(n) ? n : 0;
  }

  function v16Percent(value) {
    return v16Num(value).toFixed(1) + "%";
  }

  // ------------------------------------------------------------
  // PROFESSIONAL ACADEMY MODULES
  // ------------------------------------------------------------

  const V16_MODULES = [
    {
      id: "business",
      icon: "🏢",
      name: "Business Fundamentals",
      lesson: "Business Basics",
      description: "Business model, customers, value creation and business health",
      kpis: ["Revenue", "Profit", "Customers", "Cash Flow"],
      color: "business"
    },
    {
      id: "strategy",
      icon: "🎯",
      name: "Strategic Thinking",
      lesson: "Strategic Thinking",
      description: "Vision, mission, competitive advantage, SWOT and strategic priorities",
      kpis: ["Growth", "Market Share", "Strategic Goals"],
      color: "strategy"
    },
    {
      id: "brand",
      icon: "🏷️",
      name: "Brand Management",
      lesson: "Brand Basics",
      description: "Brand positioning, customer perception and brand value",
      kpis: ["Awareness", "Preference", "Retention"],
      color: "brand"
    },
    {
      id: "marketing",
      icon: "📣",
      name: "Marketing Management",
      lesson: "Marketing Basics",
      description: "Target market, campaigns, leads, conversion, CAC and ROI",
      kpis: ["Leads", "Conversion", "CAC", "Marketing ROI"],
      color: "marketing"
    },
    {
      id: "sales",
      icon: "📈",
      name: "Sales Management",
      lesson: "Sales Basics",
      description: "Target, actual sales, pipeline, forecast and sales execution",
      kpis: ["Target", "Achievement", "Growth", "Forecast"],
      color: "sales"
    },
    {
      id: "negotiation",
      icon: "🤝",
      name: "Negotiation",
      lesson: "Negotiation",
      description: "Preparation, value, objections, margin and closing",
      kpis: ["Win Rate", "Margin", "Deal Value"],
      color: "negotiation"
    },
    {
      id: "customer",
      icon: "❤️",
      name: "Customer Management",
      lesson: "Customer Service",
      description: "Customer satisfaction, complaints, retention and loyalty",
      kpis: ["CSAT", "Retention", "Repeat Rate", "Complaints"],
      color: "customer"
    },
    {
      id: "people",
      icon: "👥",
      name: "People Management",
      lesson: "People Management",
      description: "Team structure, KPI, coaching, performance and development",
      kpis: ["Performance", "Productivity", "Retention"],
      color: "people"
    },
    {
      id: "finance",
      icon: "💰",
      name: "Finance & P&L",
      lesson: "Profit & Loss",
      description: "Revenue, cost, gross profit, net profit, margin and cash",
      kpis: ["Gross Margin", "Net Margin", "Profit", "Cash Flow"],
      color: "finance"
    },
    {
      id: "inventory",
      icon: "📦",
      name: "Inventory Management",
      lesson: "Inventory",
      description: "Stock control, turnover, reorder point and inventory cost",
      kpis: ["Stock Turnover", "Days Inventory", "Stock Value"],
      color: "inventory"
    },
    {
      id: "goals",
      icon: "🚩",
      name: "Goal Setting",
      lesson: "Goal Setting",
      description: "SMART goals, milestones, priorities and execution",
      kpis: ["Goal Achievement", "Completion", "Consistency"],
      color: "goals"
    },
    {
      id: "leadership",
      icon: "👔",
      name: "Leadership",
      lesson: "Leadership",
      description: "Decision making, coaching, accountability and team leadership",
      kpis: ["Team Performance", "Engagement", "Execution"],
      color: "leadership"
    },
    {
      id: "growth",
      icon: "🚀",
      name: "Business Growth",
      lesson: "Growth",
      description: "Growth strategy, expansion, customer growth and profitability",
      kpis: ["Revenue Growth", "Customer Growth", "Profit Growth"],
      color: "growth"
    }
  ];

  // ------------------------------------------------------------
  // LESSON MAPPING
  // ------------------------------------------------------------

  const V16_LESSON_MAP = {
    1: {
      module: "business",
      title: "Business Fundamentals",
      tool: "Business Health",
      kpis: ["Revenue", "Profit", "Customers", "Cash Flow"]
    },
    2: {
      module: "strategy",
      title: "Strategic Thinking",
      tool: "Strategy Planner",
      kpis: ["Growth", "Strategic Goals", "Market Position"]
    },
    3: {
      module: "brand",
      title: "Brand Basics",
      tool: "Brand Planner",
      kpis: ["Awareness", "Preference", "Retention"]
    },
    4: {
      module: "marketing",
      title: "Marketing Basics",
      tool: "Marketing Planner",
      kpis: ["Leads", "Conversion", "CAC", "ROI"]
    },
    5: {
      module: "sales",
      title: "Sales Basics",
      tool: "Sales Management",
      kpis: ["Target", "Achievement", "Growth", "Forecast"]
    },
    6: {
      module: "negotiation",
      title: "Negotiation",
      tool: "Negotiation Planner",
      kpis: ["Win Rate", "Margin", "Deal Value"]
    },
    7: {
      module: "customer",
      title: "Customer Service",
      tool: "Customer Management",
      kpis: ["CSAT", "Retention", "Repeat Rate"]
    },
    8: {
      module: "people",
      title: "People Management",
      tool: "Team Management",
      kpis: ["Performance", "Productivity", "Retention"]
    },
    9: {
      module: "finance",
      title: "Profit & Loss",
      tool: "P&L Analysis",
      kpis: ["Revenue", "Gross Profit", "Net Profit", "Margin"]
    },
    10: {
      module: "goals",
      title: "Goal Setting",
      tool: "Goal Planner",
      kpis: ["Achievement", "Completion", "Consistency"]
    }
  };

  // Lessons 11-30 receive professional category routing
  const V16_EXTRA_LESSONS = [
    "Leadership",
    "Productivity",
    "Financial Management",
    "Cash Flow Management",
    "Budget Management",
    "Pricing Strategy",
    "Inventory Management",
    "Operations Management",
    "Customer Relationship Management",
    "Market Analysis",
    "Competitive Strategy",
    "Business Growth",
    "Digital Marketing",
    "Team Building",
    "Coaching & Development",
    "Performance Management",
    "Decision Making",
    "Problem Solving",
    "Business Planning",
    "Management Review"
  ];

  for (let i = 11; i <= 30; i++) {
    const title = V16_EXTRA_LESSONS[i - 11];

    V16_LESSON_MAP[i] = {
      module:
        title.toLowerCase().includes("finance") ||
        title.toLowerCase().includes("cash") ||
        title.toLowerCase().includes("budget") ||
        title.toLowerCase().includes("pricing")
          ? "finance"
          : title.toLowerCase().includes("inventory")
          ? "inventory"
          : title.toLowerCase().includes("customer")
          ? "customer"
          : title.toLowerCase().includes("team") ||
            title.toLowerCase().includes("coaching") ||
            title.toLowerCase().includes("performance")
          ? "people"
          : title.toLowerCase().includes("marketing")
          ? "marketing"
          : title.toLowerCase().includes("growth")
          ? "growth"
          : title.toLowerCase().includes("leadership")
          ? "leadership"
          : "strategy",
      title: title,
      tool: title + " Tool",
      kpis: ["Progress", "Performance", "Business Result"]
    };
  }

  // ------------------------------------------------------------
  // PREMIUM CHECK
  // ------------------------------------------------------------

  function v16HasPremium() {
    try {
      if (typeof window.hasPremiumAccess === "function") {
        return !!window.hasPremiumAccess();
      }

      const premium = v16Get("aung_business_academy_premium", null);

      if (!premium || !premium.expiresAt) {
        return false;
      }

      return Date.now() < Number(premium.expiresAt);
    } catch (error) {
      return false;
    }
  }

  function v16PremiumGate() {
    try {
      if (typeof window.openPremiumAccess === "function") {
        window.openPremiumAccess();
        return;
      }

      if (typeof window.openPremium === "function") {
        window.openPremium();
        return;
      }
    } catch (error) {
      console.warn("Premium gate error:", error);
    }

    if (typeof window.showToast === "function") {
      window.showToast("Premium access required");
    } else {
      alert("Premium access required");
    }
  }

  // ------------------------------------------------------------
  // MODULE TOOL ROUTER
  // ------------------------------------------------------------

  function v16OpenModuleTool(moduleId) {
    const module = V16_MODULES.find(item => item.id === moduleId);

    if (!module) return;

    if (moduleId === "sales") {
      if (typeof window.openV153Salesmen === "function") {
        if (!v16HasPremium()) {
          v16PremiumGate();
          return;
        }

        window.openV153Salesmen();
        return;
      }

      if (typeof window.openV15SalesDashboard === "function") {
        window.openV15SalesDashboard();
        return;
      }
    }

    if (moduleId === "customer") {
      if (typeof window.openV14CustomerCRM === "function") {
        if (!v16HasPremium()) {
          v16PremiumGate();
          return;
        }

        window.openV14CustomerCRM();
        return;
      }
    }

    if (moduleId === "people") {
      if (typeof window.openV15TeamManagement === "function") {
        if (!v16HasPremium()) {
          v16PremiumGate();
          return;
        }

        window.openV15TeamManagement();
        return;
      }

      if (typeof window.openV153Salesmen === "function") {
        if (!v16HasPremium()) {
          v16PremiumGate();
          return;
        }

        window.openV153Salesmen();
        return;
      }
    }

    if (moduleId === "finance") {
      if (typeof window.openV14FinanceCenter === "function") {
        if (!v16HasPremium()) {
          v16PremiumGate();
          return;
        }

        window.openV14FinanceCenter();
        return;
      }

      if (typeof window.openV13BusinessSimulator === "function") {
        window.openV13BusinessSimulator();
        return;
      }
    }

    if (moduleId === "business") {
      if (typeof window.openV14ProfessionalDashboard === "function") {
        window.openV14ProfessionalDashboard();
        return;
      }
    }

    if (moduleId === "strategy" || moduleId === "growth") {
      v16OpenPlanner(moduleId);
      return;
    }

    if (moduleId === "marketing") {
      v16OpenMarketingPlanner();
      return;
    }

    if (moduleId === "negotiation") {
      v16OpenNegotiationPlanner();
      return;
    }

    if (moduleId === "goals") {
      v16OpenGoalPlanner();
      return;
    }

    if (moduleId === "inventory") {
      v16OpenInventoryPlanner();
      return;
    }

    if (moduleId === "leadership") {
      v16OpenLeadershipPlanner();
      return;
    }

    v16OpenGenericModule(module);
  }

  // ------------------------------------------------------------
  // ACADEMY DASHBOARD
  // ------------------------------------------------------------

  function openV16Academy() {
    const completed =
      typeof window.getCompletedLessons === "function"
        ? window.getCompletedLessons()
        : v16Get("aung_business_academy_completed", []);

    const completedCount = Array.isArray(completed)
      ? completed.length
      : 0;

    const progress = Math.min(
      100,
      Math.round((completedCount / 30) * 100)
    );

    if (typeof window.setPage === "function") {
      window.setPage(
        "Professional Academy",
        "Learn, practice and manage your business"
      );
    }

    const moduleCards = V16_MODULES.map(module => `
      <div class="v16-module-card">
        <div class="v16-module-icon">${module.icon}</div>

        <div class="v16-module-content">
          <h3>${v16Esc(module.name)}</h3>

          <p>${v16Esc(module.description)}</p>

          <div class="v16-kpi-row">
            ${module.kpis
              .map(kpi => `<span>${v16Esc(kpi)}</span>`)
              .join("")}
          </div>

          <button
            class="v16-primary-btn"
            onclick="window.v16OpenModuleTool('${module.id}')"
          >
            Open Module →
          </button>
        </div>
      </div>
    `).join("");

    const html = `
      <div class="v16-page">

        <div class="v16-hero">
          <div>
            <div class="v16-eyebrow">
              AUNG BUSINESS ACADEMY
            </div>

            <h1>
              Professional Business Academy
            </h1>

            <p>
              Learn the concept, practice the skill, measure the KPI
              and apply it to your real business
            </p>
          </div>

          <div class="v16-hero-badge">
            V16
            <span>Professional</span>
          </div>
        </div>

        <div class="v16-summary-grid">

          <div class="v16-summary-card">
            <span>📚</span>
            <strong>30</strong>
            <small>Lessons</small>
          </div>

          <div class="v16-summary-card">
            <span>✅</span>
            <strong>${completedCount}</strong>
            <small>Completed</small>
          </div>

          <div class="v16-summary-card">
            <span>📊</span>
            <strong>${progress}%</strong>
            <small>Learning Progress</small>
          </div>

          <div class="v16-summary-card">
            <span>🛠️</span>
            <strong>${V16_MODULES.length}</strong>
            <small>Business Areas</small>
          </div>

        </div>

        <div class="v16-section-title">
          <div>
            <h2>Business Management Areas</h2>
            <p>Each area connects learning with practical management</p>
          </div>
        </div>

        <div class="v16-module-grid">
          ${moduleCards}
        </div>

        <div class="v16-learning-system">

          <div class="v16-learning-header">
            <span>🎓</span>

            <div>
              <h2>Professional Learning System</h2>
              <p>
                Every lesson follows the same practical business framework
              </p>
            </div>
          </div>

          <div class="v16-learning-flow">

            <div>
              <b>01</b>
              <span>📖 Learn</span>
            </div>

            <div>
              <b>02</b>
              <span>🧠 Understand</span>
            </div>

            <div>
              <b>03</b>
              <span>💼 Case</span>
            </div>

            <div>
              <b>04</b>
              <span>🛠 Practice</span>
            </div>

            <div>
              <b>05</b>
              <span>📊 KPI</span>
            </div>

            <div>
              <b>06</b>
              <span>🤖 AI Advisor</span>
            </div>

            <div>
              <b>07</b>
              <span>❓ Quiz</span>
            </div>

          </div>
        </div>

        <div class="v16-action-grid">

          <button
            class="v16-action-card"
            onclick="window.v16OpenBusinessHealth()"
          >
            🏢
            <strong>Business Health</strong>
            <small>Overall business condition</small>
          </button>

          <button
            class="v16-action-card"
            onclick="window.v16OpenAIAdvisor()"
          >
            🤖
            <strong>AI Business Advisor</strong>
            <small>Get management recommendations</small>
          </button>

          <button
            class="v16-action-card"
            onclick="window.v16OpenGoalPlanner()"
          >
            🎯
            <strong>Goal Planner</strong>
            <small>Plan and track business goals</small>
          </button>

          <button
            class="v16-action-card"
            onclick="window.v16OpenLearningMap()"
          >
            🗺️
            <strong>Learning Map</strong>
            <small>See your academy roadmap</small>
          </button>

        </div>

      </div>
    `;

    v16Render(html);
  }

  // ------------------------------------------------------------
  // RENDER
  // ------------------------------------------------------------

  function v16Render(html) {
    let container =
      document.querySelector(".main-content") ||
      document.querySelector("#mainContent") ||
      document.querySelector(".content") ||
      document.querySelector(".page-content") ||
      document.querySelector(".app-content");

    if (container) {
      container.innerHTML = html;
      return;
    }

    if (typeof window.showModal === "function") {
      window.showModal(html);
      return;
    }

    const existing = document.getElementById("v16AcademyRoot");

    if (existing) {
      existing.innerHTML = html;
      return;
    }

    const div = document.createElement("div");
    div.id = "v16AcademyRoot";
    div.innerHTML = html;

    document.body.appendChild(div);
  }

  // ------------------------------------------------------------
  // BUSINESS HEALTH
  // ------------------------------------------------------------

  function v16OpenBusinessHealth() {
    const businessData =
      typeof window.v14GetBusinessData === "function"
        ? window.v14GetBusinessData()
        : v16Get("aung_business_academy_v14_business", {});

    const revenue = v16Num(
      businessData.revenue ||
      businessData.monthlyRevenue ||
      businessData.sales
    );

    const target = v16Num(
      businessData.target ||
      businessData.monthlyTarget
    );

    const profit = v16Num(
      businessData.netProfit ||
      businessData.profit
    );

    const customers = v16Num(
      businessData.customers ||
      businessData.customerCount
    );

    const achievement =
      target > 0
        ? (revenue / target) * 100
        : 0;

    const health =
      achievement >= 100
        ? "Strong"
        : achievement >= 80
        ? "Healthy"
        : achievement >= 60
        ? "Needs Attention"
        : "Critical";

    const html = `
      <div class="v16-tool-page">

        <div class="v16-tool-header">
          <span>🏢</span>
          <div>
            <h2>Business Health</h2>
            <p>Overall management view</p>
          </div>
        </div>

        <div class="v16-health-status">
          <small>Business Health</small>
          <strong>${health}</strong>
          <span>${v16Percent(achievement)} Target Achievement</span>
        </div>

        <div class="v16-metric-grid">

          <div>
            <small>Revenue</small>
            <strong>${v16Money(revenue)}</strong>
          </div>

          <div>
            <small>Target</small>
            <strong>${v16Money(target)}</strong>
          </div>

          <div>
            <small>Profit</small>
            <strong>${v16Money(profit)}</strong>
          </div>

          <div>
            <small>Customers</small>
            <strong>${customers.toLocaleString()}</strong>
          </div>

        </div>

        <div class="v16-insight-box">

          <h3>Management Insight</h3>

          <p>
            ${health === "Strong"
              ? "Business performance is currently strong. Focus on sustainable growth, customer retention and profit quality."
              : health === "Healthy"
              ? "Business is performing reasonably well. Focus on closing the remaining target gap and improving execution."
              : health === "Needs Attention"
              ? "Business requires management attention. Review revenue drivers, customer activity, cost and team execution."
              : "Immediate management action is required. Review revenue, costs, customers, cash flow and operational execution."
            }
          </p>

        </div>

        <button
          class="v16-primary-btn"
          onclick="window.v16OpenAIAdvisor()"
        >
          🤖 Ask AI Business Advisor
        </button>

      </div>
    `;

    v16Render(html);
  }

  // ------------------------------------------------------------
  // STRATEGY / GROWTH PLANNER
  // ------------------------------------------------------------

  function v16OpenPlanner(type) {
    const title =
      type === "growth"
        ? "🚀 Business Growth Planner"
        : "🎯 Strategic Planning";

    const saved = v16Get(V16_GOAL_KEY, {});

    const html = `
      <div class="v16-tool-page">

        <div class="v16-tool-header">
          <span>${type === "growth" ? "🚀" : "🎯"}</span>
          <div>
            <h2>${title}</h2>
            <p>Turn strategy into measurable action</p>
          </div>
        </div>

        <label>Business Objective</label>

        <input
          id="v16StrategyObjective"
          class="v16-input"
          value="${v16Esc(saved.objective || "")}"
          placeholder="Example: Increase revenue by 20%"
        />

        <label>Current Situation</label>

        <textarea
          id="v16StrategySituation"
          class="v16-input"
          rows="4"
          placeholder="Describe your current business situation"
        >${v16Esc(saved.situation || "")}</textarea>

        <label>Key Action</label>

        <textarea
          id="v16StrategyAction"
          class="v16-input"
          rows="4"
          placeholder="What will you do to achieve the objective?"
        >${v16Esc(saved.action || "")}</textarea>

        <label>Success KPI</label>

        <input
          id="v16StrategyKPI"
          class="v16-input"
          value="${v16Esc(saved.kpi || "")}"
          placeholder="Example: Revenue Growth 20%"
        />

        <button
          class="v16-primary-btn"
          onclick="window.v16SaveStrategy()"
        >
          💾 Save Plan
        </button>

      </div>
    `;

    v16Render(html);
  }

  function v16SaveStrategy() {
    const data = {
      objective:
        document.getElementById("v16StrategyObjective")?.value || "",
      situation:
        document.getElementById("v16StrategySituation")?.value || "",
      action:
        document.getElementById("v16StrategyAction")?.value || "",
      kpi:
        document.getElementById("v16StrategyKPI")?.value || "",
      updatedAt: new Date().toISOString()
    };

    v16Set(V16_GOAL_KEY, data);

    if (typeof window.showToast === "function") {
      window.showToast("Strategy plan saved");
    }

    v16OpenPlanner("strategy");
  }

  // ------------------------------------------------------------
  // MARKETING PLANNER
  // ------------------------------------------------------------

  function v16OpenMarketingPlanner() {
    const html = `
      <div class="v16-tool-page">

        <div class="v16-tool-header">
          <span>📣</span>
          <div>
            <h2>Marketing Planner</h2>
            <p>Plan campaigns and measure marketing performance</p>
          </div>
        </div>

        <div class="v16-form-grid">

          <div>
            <label>Target Customer</label>
            <input id="v16MarketingCustomer" class="v16-input"
              placeholder="Who are you targeting?">
          </div>

          <div>
            <label>Campaign Budget</label>
            <input id="v16MarketingBudget" class="v16-input"
              type="number"
              placeholder="0">
          </div>

          <div>
            <label>Expected Leads</label>
            <input id="v16MarketingLeads" class="v16-input"
              type="number"
              placeholder="0">
          </div>

          <div>
            <label>Expected Customers</label>
            <input id="v16MarketingCustomers" class="v16-input"
              type="number"
              placeholder="0">
          </div>

        </div>

        <button
          class="v16-primary-btn"
          onclick="window.v16CalculateMarketing()"
        >
          📊 Calculate Marketing KPI
        </button>

        <div id="v16MarketingResult"></div>

      </div>
    `;

    v16Render(html);
  }

  function v16CalculateMarketing() {
    const budget = v16Num(
      document.getElementById("v16MarketingBudget")?.value
    );

    const leads = v16Num(
      document.getElementById("v16MarketingLeads")?.value
    );

    const customers = v16Num(
      document.getElementById("v16MarketingCustomers")?.value
    );

    const cpl = leads > 0 ? budget / leads : 0;
    const cac = customers > 0 ? budget / customers : 0;
    const conversion =
      leads > 0 ? (customers / leads) * 100 : 0;

    const result = document.getElementById(
      "v16MarketingResult"
    );

    if (!result) return;

    result.innerHTML = `
      <div class="v16-result-grid">

        <div>
          <small>Cost / Lead</small>
          <strong>${v16Money(cpl)}</strong>
        </div>

        <div>
          <small>Customer Acquisition Cost</small>
          <strong>${v16Money(cac)}</strong>
        </div>

        <div>
          <small>Lead Conversion</small>
          <strong>${v16Percent(conversion)}</strong>
        </div>

      </div>

      <div class="v16-insight-box">
        <h3>Marketing Insight</h3>
        <p>
          ${conversion >= 10
            ? "Conversion performance looks strong. Focus on scaling qualified leads."
            : conversion >= 5
            ? "Conversion is moderate. Improve lead quality and sales follow-up."
            : "Conversion is low. Review targeting, offer, lead quality and customer journey."
          }
        </p>
      </div>
    `;
  }

  // ------------------------------------------------------------
  // NEGOTIATION
  // ------------------------------------------------------------

  function v16OpenNegotiationPlanner() {
    const html = `
      <div class="v16-tool-page">

        <div class="v16-tool-header">
          <span>🤝</span>
          <div>
            <h2>Negotiation Planner</h2>
            <p>Prepare the deal before entering negotiation</p>
          </div>
        </div>

        <label>Customer / Partner</label>
        <input id="v16NegCustomer" class="v16-input"
          placeholder="Customer name">

        <label>Your Objective</label>
        <textarea id="v16NegObjective" class="v16-input"
          rows="3"
          placeholder="What do you want to achieve?"></textarea>

        <label>Customer Need</label>
        <textarea id="v16NegNeed" class="v16-input"
          rows="3"
          placeholder="What does the customer really need?"></textarea>

        <label>Minimum Acceptable Deal</label>
        <input id="v16NegMinimum" class="v16-input"
          placeholder="Minimum acceptable terms">

        <label>Negotiation Strategy</label>
        <textarea id="v16NegStrategy" class="v16-input"
          rows="3"
          placeholder="What is your strategy?"></textarea>

        <button
          class="v16-primary-btn"
          onclick="window.v16SaveNegotiation()"
        >
          💾 Save Negotiation Plan
        </button>

      </div>
    `;

    v16Render(html);
  }

  function v16SaveNegotiation() {
    const data = {
      customer:
        document.getElementById("v16NegCustomer")?.value || "",
      objective:
        document.getElementById("v16NegObjective")?.value || "",
      need:
        document.getElementById("v16NegNeed")?.value || "",
      minimum:
        document.getElementById("v16NegMinimum")?.value || "",
      strategy:
        document.getElementById("v16NegStrategy")?.value || "",
      savedAt: new Date().toISOString()
    };

    v16Set(
      "aung_business_academy_v16_negotiation",
      data
    );

    if (typeof window.showToast === "function") {
      window.showToast("Negotiation plan saved");
    }
  }

  // ------------------------------------------------------------
  // GOAL PLANNER
  // ------------------------------------------------------------

  function v16OpenGoalPlanner() {
    const goals = v16Get(V16_GOAL_KEY, {});

    const html = `
      <div class="v16-tool-page">

        <div class="v16-tool-header">
          <span>🎯</span>
          <div>
            <h2>SMART Goal Planner</h2>
            <p>Convert business goals into measurable actions</p>
          </div>
        </div>

        <label>Goal</label>

        <input
          id="v16Goal"
          class="v16-input"
          value="${v16Esc(goals.goal || "")}"
          placeholder="What do you want to achieve?"
        >

        <label>Deadline</label>

        <input
          id="v16Deadline"
          class="v16-input"
          type="date"
          value="${v16Esc(goals.deadline || "")}"
        >

        <label>Measurement</label>

        <input
          id="v16Measurement"
          class="v16-input"
          value="${v16Esc(goals.measurement || "")}"
          placeholder="How will you measure success?"
        >

        <label>Action</label>

        <textarea
          id="v16GoalAction"
          class="v16-input"
          rows="4"
          placeholder="What will you do?"
        >${v16Esc(goals.action || "")}</textarea>

        <button
          class="v16-primary-btn"
          onclick="window.v16SaveGoal()"
        >
          💾 Save Goal
        </button>

      </div>
    `;

    v16Render(html);
  }

  function v16SaveGoal() {
    const data = {
      goal:
        document.getElementById("v16Goal")?.value || "",
      deadline:
        document.getElementById("v16Deadline")?.value || "",
      measurement:
        document.getElementById("v16Measurement")?.value || "",
      action:
        document.getElementById("v16GoalAction")?.value || "",
      updatedAt: new Date().toISOString()
    };

    v16Set(V16_GOAL_KEY, data);

    if (typeof window.showToast === "function") {
      window.showToast("Goal saved successfully");
    }
  }

  // ------------------------------------------------------------
  // INVENTORY
  // ------------------------------------------------------------

  function v16OpenInventoryPlanner() {
    const html = `
      <div class="v16-tool-page">

        <div class="v16-tool-header">
          <span>📦</span>
          <div>
            <h2>Inventory Management</h2>
            <p>Understand stock requirements and inventory efficiency</p>
          </div>
        </div>

        <div class="v16-form-grid">

          <div>
            <label>Average Inventory Value</label>
            <input id="v16InvValue" class="v16-input"
              type="number" placeholder="0">
          </div>

          <div>
            <label>Annual Cost of Goods</label>
            <input id="v16InvCOGS" class="v16-input"
              type="number" placeholder="0">
          </div>

          <div>
            <label>Lead Time (Days)</label>
            <input id="v16InvLead" class="v16-input"
              type="number" placeholder="0">
          </div>

          <div>
            <label>Average Daily Usage</label>
            <input id="v16InvUsage" class="v16-input"
              type="number" placeholder="0">
          </div>

        </div>

        <button
          class="v16-primary-btn"
          onclick="window.v16CalculateInventory()"
        >
          📊 Calculate Inventory KPI
        </button>

        <div id="v16InventoryResult"></div>

      </div>
    `;

    v16Render(html);
  }

  function v16CalculateInventory() {
    const inventory = v16Num(
      document.getElementById("v16InvValue")?.value
    );

    const cogs = v16Num(
      document.getElementById("v16InvCOGS")?.value
    );

    const lead = v16Num(
      document.getElementById("v16InvLead")?.value
    );

    const usage = v16Num(
      document.getElementById("v16InvUsage")?.value
    );

    const turnover =
      inventory > 0 ? cogs / inventory : 0;

    const reorderPoint =
      lead * usage;

    const result = document.getElementById(
      "v16InventoryResult"
    );

    if (!result) return;

    result.innerHTML = `
      <div class="v16-result-grid">

        <div>
          <small>Inventory Turnover</small>
          <strong>${turnover.toFixed(2)}x</strong>
        </div>

        <div>
          <small>Reorder Point</small>
          <strong>${reorderPoint.toLocaleString()}</strong>
        </div>

      </div>

      <div class="v16-insight-box">
        <h3>Inventory Insight</h3>
        <p>
          Review slow-moving stock, stock-out risk and inventory cash tied up
          before making your next purchasing decision
        </p>
      </div>
    `;
  }

  // ------------------------------------------------------------
  // LEADERSHIP
  // ------------------------------------------------------------

  function v16OpenLeadershipPlanner() {
    const html = `
      <div class="v16-tool-page">

        <div class="v16-tool-header">
          <span>👔</span>
          <div>
            <h2>Leadership & Coaching</h2>
            <p>Develop people instead of only managing numbers</p>
          </div>
        </div>

        <label>Team Member</label>

        <input
          id="v16LeaderPerson"
          class="v16-input"
          placeholder="Name"
        >

        <label>Strength</label>

        <textarea
          id="v16LeaderStrength"
          class="v16-input"
          rows="3"
          placeholder="What is this person doing well?"
        ></textarea>

        <label>Development Area</label>

        <textarea
          id="v16LeaderDevelopment"
          class="v16-input"
          rows="3"
          placeholder="What needs improvement?"
        ></textarea>

        <label>Next Coaching Action</label>

        <textarea
          id="v16LeaderAction"
          class="v16-input"
          rows="3"
          placeholder="What will you coach or support?"
        ></textarea>

        <button
          class="v16-primary-btn"
          onclick="window.v16SaveLeadership()"
        >
          💾 Save Coaching Plan
        </button>

      </div>
    `;

    v16Render(html);
  }

  function v16SaveLeadership() {
    const data = {
      person:
        document.getElementById("v16LeaderPerson")?.value || "",
      strength:
        document.getElementById("v16LeaderStrength")?.value || "",
      development:
        document.getElementById("v16LeaderDevelopment")?.value || "",
      action:
        document.getElementById("v16LeaderAction")?.value || "",
      updatedAt: new Date().toISOString()
    };

    v16Set(
      "aung_business_academy_v16_leadership",
      data
    );

    if (typeof window.showToast === "function") {
      window.showToast("Coaching plan saved");
    }
  }

  // ------------------------------------------------------------
  // GENERIC MODULE
  // ------------------------------------------------------------

  function v16OpenGenericModule(module) {
    const html = `
      <div class="v16-tool-page">

        <div class="v16-tool-header">
          <span>${module.icon}</span>
          <div>
            <h2>${v16Esc(module.name)}</h2>
            <p>${v16Esc(module.description)}</p>
          </div>
        </div>

        <div class="v16-insight-box">
          <h3>Professional Management Focus</h3>

          <p>
            Use this area to connect your lesson knowledge
            with real business decisions and measurable outcomes
          </p>
        </div>

        <div class="v16-kpi-large">
          ${module.kpis.map(kpi => `
            <div>
              <span>📊</span>
              <strong>${v16Esc(kpi)}</strong>
            </div>
          `).join("")}
        </div>

        <button
          class="v16-primary-btn"
          onclick="window.v16OpenAIAdvisor('${v16Esc(module.name)}')"
        >
          🤖 Ask AI Advisor
        </button>

      </div>
    `;

    v16Render(html);
  }

  // ------------------------------------------------------------
  // AI BUSINESS ADVISOR
  // ------------------------------------------------------------

  function v16OpenAIAdvisor(topic) {
    const defaultTopic =
      topic ||
      "Analyze my overall business performance and tell me what I should improve first";

    const html = `
      <div class="v16-tool-page">

        <div class="v16-tool-header">
          <span>🤖</span>
          <div>
            <h2>AI Business Advisor</h2>
            <p>Ask for practical management recommendations</p>
          </div>
        </div>

        <div class="v16-ai-quick-grid">

          <button onclick="window.v16AskAI('Analyze my overall business performance')">
            🏢 Business Analysis
          </button>

          <button onclick="window.v16AskAI('How can I increase profit?')">
            💰 Increase Profit
          </button>

          <button onclick="window.v16AskAI('How can I improve marketing performance?')">
            📣 Marketing
          </button>

          <button onclick="window.v16AskAI('How can I improve my team performance?')">
            👥 Team
          </button>

          <button onclick="window.v16AskAI('How can I improve customer retention?')">
            ❤️ Customers
          </button>

          <button onclick="window.v16AskAI('What should my management priority be this week?')">
            🎯 Weekly Priority
          </button>

        </div>

        <textarea
          id="v16AIInput"
          class="v16-input"
          rows="5"
          placeholder="Ask your business question..."
        >${v16Esc(defaultTopic)}</textarea>

        <button
          class="v16-primary-btn"
          onclick="window.v16AskAI()"
        >
          🤖 Ask AI Business Advisor
        </button>

        <div id="v16AIResult"></div>

      </div>
    `;

    v16Render(html);
  }

  async function v16AskAI(question) {
    const input = document.getElementById("v16AIInput");

    const text =
      question ||
      input?.value?.trim();

    if (!text) {
      if (typeof window.showToast === "function") {
        window.showToast("Please enter a business question");
      }
      return;
    }

    const result = document.getElementById("v16AIResult");

    if (result) {
      result.innerHTML = `
        <div class="v16-ai-thinking">
          🤖 AI Business Advisor is analyzing your question...
        </div>
      `;
    }

    try {
      let answer = "";

      if (typeof window.v12SafeAIFetch === "function") {
        answer = await window.v12SafeAIFetch(
          `
You are the Professional AI Business Advisor inside Aung Business Academy.

The user is asking:
${text}

Give a detailed but practical business management response.

Structure the response using:

1. Current Situation
2. Key Business Issue
3. KPI Analysis
4. Root Cause
5. Business Impact
6. Immediate Action
7. Customer Action
8. Team Action
9. Financial Action
10. 7-Day Action Plan
11. KPI to Monitor
12. Management Recommendation

Answer in Burmese when the user asks in Burmese.
Do not give generic motivational advice.
Give practical actions, measurable KPIs and management decisions.
          `
        );
      } else if (
        typeof window.sendAIMessage === "function"
      ) {
        answer = await window.sendAIMessage(text);
      } else {
        answer =
          "AI service is not connected yet. You can still use the Professional Business Tools in this section";
      }

      if (result) {
        result.innerHTML = `
          <div class="v16-ai-result">
            <div class="v16-ai-result-title">
              🤖 AI Business Advisor
            </div>

            <div class="v16-ai-answer">
              ${v16Esc(answer)
                .replace(/\n/g, "<br>")}
            </div>
          </div>
        `;
      }

    } catch (error) {
      console.error("V16 AI error:", error);

      if (result) {
        result.innerHTML = `
          <div class="v16-insight-box">
            <h3>AI temporarily unavailable</h3>
            <p>
              Please try again later or continue using the Business Tools
            </p>
          </div>
        `;
      }
    }
  }

  // ------------------------------------------------------------
  // LEARNING MAP
  // ------------------------------------------------------------

  function v16OpenLearningMap() {
    const completed =
      v16Get(
        "aung_business_academy_completed",
        []
      );

    const completedList =
      Array.isArray(completed)
        ? completed.map(Number)
        : [];

    const rows = Object.keys(V16_LESSON_MAP)
      .map(Number)
      .sort((a, b) => a - b)
      .map(id => {
        const lesson = V16_LESSON_MAP[id];
        const done = completedList.includes(id);

        return `
          <div class="v16-lesson-map-row">

            <div class="v16-lesson-number">
              ${id}
            </div>

            <div class="v16-lesson-info">
              <strong>${v16Esc(lesson.title)}</strong>
              <small>
                ${v16Esc(lesson.tool)}
              </small>
            </div>

            <div class="v16-lesson-status">
              ${done ? "✅ Completed" : "📖 Learning"}
            </div>

            <button
              onclick="window.v16OpenLessonPractice(${id})"
            >
              Practice
            </button>

          </div>
        `;
      })
      .join("");

    const html = `
      <div class="v16-tool-page">

        <div class="v16-tool-header">
          <span>🗺️</span>
          <div>
            <h2>Professional Learning Map</h2>
            <p>
              30 lessons connected to practical business management
            </p>
          </div>
        </div>

        <div class="v16-lesson-map">
          ${rows}
        </div>

      </div>
    `;

    v16Render(html);
  }

  // ------------------------------------------------------------
  // LESSON PRACTICE
  // ------------------------------------------------------------

  function v16OpenLessonPractice(lessonId) {
    const id = Number(lessonId);
    const lesson = V16_LESSON_MAP[id];

    if (!lesson) {
      return;
    }

    if (id !== 1 && !v16HasPremium()) {
      v16PremiumGate();
      return;
    }

    const practiceData = v16Get(
      V16_PRACTICE_KEY,
      {}
    );

    const saved =
      practiceData[id] || {};

    const html = `
      <div class="v16-tool-page">

        <div class="v16-tool-header">

          <span>📚</span>

          <div>
            <small>Lesson ${id}</small>
            <h2>${v16Esc(lesson.title)}</h2>
            <p>
              Apply what you learned to your real business
            </p>
          </div>

        </div>

        <div class="v16-practice-flow">

          <div class="v16-practice-step">
            <span>📖</span>
            <strong>Learn</strong>
            <small>Understand the lesson</small>
          </div>

          <div class="v16-practice-step">
            <span>💼</span>
            <strong>Apply</strong>
            <small>Connect it to your business</small>
          </div>

          <div class="v16-practice-step">
            <span>📊</span>
            <strong>Measure</strong>
            <small>Track the KPI</small>
          </div>

          <div class="v16-practice-step">
            <span>🤖</span>
            <strong>Improve</strong>
            <small>Ask AI Advisor</small>
          </div>

        </div>

        <div class="v16-practice-box">

          <h3>💼 Real Business Application</h3>

          <p>
            What will you apply from this lesson in your business?
          </p>

          <textarea
            id="v16PracticeAction"
            class="v16-input"
            rows="5"
            placeholder="Write your practical action..."
          >${v16Esc(saved.action || "")}</textarea>

          <h3>📊 KPI</h3>

          <div class="v16-kpi-large">
            ${lesson.kpis.map(kpi => `
              <div>
                <span>📊</span>
                <strong>${v16Esc(kpi)}</strong>
              </div>
            `).join("")}
          </div>

          <h3>🎯 Expected Result</h3>

          <textarea
            id="v16PracticeResult"
            class="v16-input"
            rows="4"
            placeholder="What result do you expect?"
          >${v16Esc(saved.result || "")}</textarea>

        </div>

        <div class="v16-practice-actions">

          <button
            class="v16-primary-btn"
            onclick="window.v16SaveLessonPractice(${id})"
          >
            💾 Save Practice
          </button>

          <button
            class="v16-secondary-btn"
            onclick="window.v16OpenAIAdvisor('${v16Esc(lesson.title)}')"
          >
            🤖 Ask AI Advisor
          </button>

        </div>

      </div>
    `;

    v16Render(html);
  }

  function v16SaveLessonPractice(lessonId) {
    const all =
      v16Get(V16_PRACTICE_KEY, {});

    all[lessonId] = {
      action:
        document.getElementById(
          "v16PracticeAction"
        )?.value || "",

      result:
        document.getElementById(
          "v16PracticeResult"
        )?.value || "",

      updatedAt:
        new Date().toISOString()
    };

    v16Set(
      V16_PRACTICE_KEY,
      all
    );

    if (typeof window.showToast === "function") {
      window.showToast(
        "Lesson practice saved successfully"
      );
    }
  }

  // ------------------------------------------------------------
  // SIDEBAR
  // ------------------------------------------------------------

  function v16FindSidebar() {
    return (
      document.querySelector(".sidebar") ||
      document.querySelector("#sidebar") ||
      document.querySelector(".app-sidebar") ||
      document.querySelector(".side-bar") ||
      document.querySelector("aside") ||
      document.querySelector("nav")
    );
  }

  function v16AddSidebarButton() {
    if (document.getElementById("aungV16AcademyButton")) {
      return;
    }

    const sidebar = v16FindSidebar();

    if (!sidebar) {
      return;
    }

    const button = document.createElement("button");

    button.id = "aungV16AcademyButton";
    button.className = "v16-sidebar-button";
    button.innerHTML = `
      <span>🎓</span>
      <span>Professional Academy</span>
    `;

    button.onclick = function () {
      openV16Academy();
    };

    const settings =
      Array.from(
        sidebar.querySelectorAll("button")
      ).find(btn =>
        (btn.textContent || "")
          .toLowerCase()
          .includes("settings")
      );

    if (settings) {
      sidebar.insertBefore(
        button,
        settings
      );
    } else {
      sidebar.appendChild(button);
    }
  }

  // ------------------------------------------------------------
  // FLOATING BUTTON
  // ------------------------------------------------------------

  function v16AddFloatingButton() {
    if (
      document.getElementById(
        "aungV16FloatingButton"
      )
    ) {
      return;
    }

    const button =
      document.createElement("button");

    button.id =
      "aungV16FloatingButton";

    button.innerHTML =
      "🎓 Academy";

    button.onclick =
      openV16Academy;

    document.body.appendChild(button);
  }

  // ------------------------------------------------------------
  // CSS
  // ------------------------------------------------------------

  function v16InjectStyles() {
    if (
      document.getElementById(
        "aungV16Styles"
      )
    ) {
      return;
    }

    const style =
      document.createElement("style");

    style.id =
      "aungV16Styles";

    style.textContent = `
      .v16-page,
      .v16-tool-page {
        width: 100%;
        max-width: 1400px;
        margin: 0 auto;
        padding: 24px;
        font-family: Arial, sans-serif;
      }

      .v16-hero {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 24px;
        padding: 30px;
        border-radius: 22px;
        background:
          linear-gradient(
            135deg,
            #111827,
            #1f2937
          );
        color: #fff;
        margin-bottom: 22px;
      }

      .v16-eyebrow {
        font-size: 12px;
        font-weight: 800;
        letter-spacing: 2px;
        opacity: .7;
        margin-bottom: 8px;
      }

      .v16-hero h1 {
        margin: 0 0 8px;
        font-size: 32px;
      }

      .v16-hero p {
        margin: 0;
        max-width: 720px;
        opacity: .8;
        line-height: 1.6;
      }

      .v16-hero-badge {
        min-width: 100px;
        height: 100px;
        border-radius: 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: rgba(255,255,255,.1);
        font-size: 30px;
        font-weight: 900;
      }

      .v16-hero-badge span {
        font-size: 11px;
        opacity: .7;
      }

      .v16-summary-grid {
        display: grid;
        grid-template-columns:
          repeat(4, minmax(0, 1fr));
        gap: 16px;
        margin-bottom: 28px;
      }

      .v16-summary-card {
        background: #fff;
        border: 1px solid #e5e7eb;
        border-radius: 18px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        box-shadow: 0 5px 20px rgba(0,0,0,.04);
      }

      .v16-summary-card span {
        font-size: 25px;
      }

      .v16-summary-card strong {
        font-size: 28px;
      }

      .v16-summary-card small {
        color: #6b7280;
      }

      .v16-section-title {
        margin-bottom: 16px;
      }

      .v16-section-title h2 {
        margin: 0 0 5px;
      }

      .v16-section-title p {
        margin: 0;
        color: #6b7280;
      }

      .v16-module-grid {
        display: grid;
        grid-template-columns:
          repeat(3, minmax(0, 1fr));
        gap: 18px;
      }

      .v16-module-card {
        background: #fff;
        border: 1px solid #e5e7eb;
        border-radius: 20px;
        padding: 20px;
        display: flex;
        gap: 15px;
        box-shadow: 0 6px 22px rgba(0,0,0,.04);
      }

      .v16-module-icon {
        width: 52px;
        height: 52px;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f3f4f6;
        font-size: 25px;
        flex-shrink: 0;
      }

      .v16-module-content {
        flex: 1;
      }

      .v16-module-content h3 {
        margin: 0 0 6px;
        font-size: 17px;
      }

      .v16-module-content p {
        margin: 0 0 12px;
        color: #6b7280;
        line-height: 1.5;
        font-size: 14px;
      }

      .v16-kpi-row {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-bottom: 14px;
      }

      .v16-kpi-row span {
        background: #f3f4f6;
        border-radius: 20px;
        padding: 5px 9px;
        font-size: 11px;
        color: #374151;
      }

      .v16-primary-btn,
      .v16-secondary-btn {
        border: 0;
        border-radius: 12px;
        padding: 12px 17px;
        cursor: pointer;
        font-weight: 700;
        margin-top: 10px;
      }

      .v16-primary-btn {
        background: #111827;
        color: #fff;
      }

      .v16-secondary-btn {
        background: #f3f4f6;
        color: #111827;
      }

      .v16-learning-system {
        margin-top: 28px;
        background: #fff;
        border: 1px solid #e5e7eb;
        border-radius: 20px;
        padding: 22px;
      }

      .v16-learning-header {
        display: flex;
        gap: 12px;
        align-items: center;
        margin-bottom: 20px;
      }

      .v16-learning-header > span {
        font-size: 30px;
      }

      .v16-learning-header h2 {
        margin: 0 0 4px;
      }

      .v16-learning-header p {
        margin: 0;
        color: #6b7280;
      }

      .v16-learning-flow {
        display: grid;
        grid-template-columns:
          repeat(7, minmax(0, 1fr));
        gap: 10px;
      }

      .v16-learning-flow div {
        text-align: center;
        padding: 14px 8px;
        border-radius: 14px;
        background: #f9fafb;
      }

      .v16-learning-flow b {
        display: block;
        font-size: 11px;
        color: #9ca3af;
        margin-bottom: 5px;
      }

      .v16-learning-flow span {
        font-size: 13px;
        font-weight: 700;
      }

      .v16-action-grid {
        display: grid;
        grid-template-columns:
          repeat(4, minmax(0, 1fr));
        gap: 14px;
        margin-top: 22px;
      }

      .v16-action-card {
        border: 1px solid #e5e7eb;
        background: #fff;
        border-radius: 18px;
        padding: 20px;
        text-align: left;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        gap: 7px;
      }

      .v16-action-card:hover {
        transform: translateY(-2px);
      }

      .v16-action-card strong {
        font-size: 16px;
      }

      .v16-action-card small {
        color: #6b7280;
      }

      .v16-tool-page {
        background: #fff;
        border-radius: 20px;
        min-height: 500px;
      }

      .v16-tool-header {
        display: flex;
        align-items: center;
        gap: 14px;
        margin-bottom: 22px;
      }

      .v16-tool-header > span {
        font-size: 35px;
      }

      .v16-tool-header h2 {
        margin: 0 0 5px;
      }

      .v16-tool-header p {
        margin: 0;
        color: #6b7280;
      }

      .v16-input {
        width: 100%;
        padding: 12px 14px;
        border: 1px solid #d1d5db;
        border-radius: 12px;
        margin: 6px 0 15px;
        font-size: 14px;
        box-sizing: border-box;
      }

      .v16-form-grid {
        display: grid;
        grid-template-columns:
          repeat(2, minmax(0, 1fr));
        gap: 15px;
      }

      .v16-metric-grid,
      .v16-result-grid {
        display: grid;
        grid-template-columns:
          repeat(4, minmax(0, 1fr));
        gap: 14px;
        margin: 20px 0;
      }

      .v16-metric-grid > div,
      .v16-result-grid > div {
        background: #f9fafb;
        border-radius: 15px;
        padding: 18px;
      }

      .v16-metric-grid small,
      .v16-result-grid small {
        display: block;
        color: #6b7280;
        margin-bottom: 7px;
      }

      .v16-metric-grid strong,
      .v16-result-grid strong {
        font-size: 20px;
      }

      .v16-health-status {
        padding: 22px;
        border-radius: 18px;
        background: #f3f4f6;
        margin-bottom: 18px;
      }

      .v16-health-status small,
      .v16-health-status strong,
      .v16-health-status span {
        display: block;
      }

      .v16-health-status strong {
        font-size: 30px;
        margin: 5px 0;
      }

      .v16-insight-box {
        background: #f9fafb;
        border: 1px solid #e5e7eb;
        border-radius: 16px;
        padding: 20px;
        margin: 18px 0;
      }

      .v16-insight-box h3 {
        margin-top: 0;
      }

      .v16-kpi-large {
        display: grid;
        grid-template-columns:
          repeat(3, minmax(0, 1fr));
        gap: 12px;
        margin: 15px 0;
      }

      .v16-kpi-large > div {
        padding: 15px;
        border-radius: 14px;
        background: #f9fafb;
        display: flex;
        gap: 8px;
        align-items: center;
      }

      .v16-ai-quick-grid {
        display: grid;
        grid-template-columns:
          repeat(3, minmax(0, 1fr));
        gap: 10px;
        margin-bottom: 18px;
      }

      .v16-ai-quick-grid button {
        border: 1px solid #e5e7eb;
        background: #fff;
        padding: 13px;
        border-radius: 12px;
        cursor: pointer;
        font-weight: 700;
      }

      .v16-ai-thinking,
      .v16-ai-result {
        margin-top: 18px;
        padding: 20px;
        border-radius: 16px;
        background: #f9fafb;
      }

      .v16-ai-result-title {
        font-weight: 800;
        margin-bottom: 12px;
      }

      .v16-ai-answer {
        line-height: 1.8;
      }

      .v16-practice-flow {
        display: grid;
        grid-template-columns:
          repeat(4, minmax(0, 1fr));
        gap: 12px;
        margin-bottom: 22px;
      }

      .v16-practice-step {
        background: #f9fafb;
        padding: 18px;
        border-radius: 16px;
        text-align: center;
      }

      .v16-practice-step span {
        display: block;
        font-size: 25px;
        margin-bottom: 7px;
      }

      .v16-practice-step strong,
      .v16-practice-step small {
        display: block;
      }

      .v16-practice-step small {
        color: #6b7280;
        margin-top: 4px;
      }

      .v16-practice-box {
        border: 1px solid #e5e7eb;
        border-radius: 18px;
        padding: 20px;
      }

      .v16-practice-actions {
        margin-top: 15px;
      }

      .v16-lesson-map {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .v16-lesson-map-row {
        display: grid;
        grid-template-columns:
          50px 1fr auto auto;
        gap: 12px;
        align-items: center;
        border: 1px solid #e5e7eb;
        border-radius: 15px;
        padding: 12px;
      }

      .v16-lesson-number {
        width: 40px;
        height: 40px;
        border-radius: 12px;
        background: #f3f4f6;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 800;
      }

      .v16-lesson-info strong,
      .v16-lesson-info small {
        display: block;
      }

      .v16-lesson-info small {
        color: #6b7280;
        margin-top: 4px;
      }

      .v16-lesson-status {
        font-size: 12px;
        color: #6b7280;
      }

      .v16-lesson-map-row button {
        border: 0;
        background: #111827;
        color: #fff;
        padding: 9px 12px;
        border-radius: 10px;
        cursor: pointer;
      }

      .v16-sidebar-button {
        width: calc(100% - 16px);
        margin: 5px 8px;
        padding: 11px 13px;
        border: 0;
        border-radius: 11px;
        background: #111827;
        color: #fff;
        cursor: pointer;
        display: flex;
        gap: 9px;
        align-items: center;
        font-weight: 700;
        text-align: left;
      }

      #aungV16FloatingButton {
        position: fixed;
        right: 18px;
        bottom: 18px;
        z-index: 9998;
        border: 0;
        border-radius: 30px;
        padding: 13px 18px;
        background: #111827;
        color: #fff;
        font-weight: 800;
        cursor: pointer;
        box-shadow: 0 8px 30px rgba(0,0,0,.2);
      }

      @media (max-width: 1000px) {
        .v16-module-grid {
          grid-template-columns:
            repeat(2, minmax(0, 1fr));
        }

        .v16-action-grid {
          grid-template-columns:
            repeat(2, minmax(0, 1fr));
        }

        .v16-learning-flow {
          grid-template-columns:
            repeat(4, minmax(0, 1fr));
        }

        .v16-summary-grid {
          grid-template-columns:
            repeat(2, minmax(0, 1fr));
        }

        .v16-metric-grid,
        .v16-result-grid {
          grid-template-columns:
            repeat(2, minmax(0, 1fr));
        }
      }

      @media (max-width: 700px) {
        .v16-page,
        .v16-tool-page {
          padding: 14px;
        }

        .v16-hero {
          flex-direction: column;
          align-items: flex-start;
        }

        .v16-hero h1 {
          font-size: 25px;
        }

        .v16-module-grid,
        .v16-action-grid,
        .v16-summary-grid,
        .v16-form-grid,
        .v16-ai-quick-grid,
        .v16-practice-flow,
        .v16-kpi-large {
          grid-template-columns: 1fr;
        }

        .v16-learning-flow {
          grid-template-columns:
            repeat(2, minmax(0, 1fr));
        }

        .v16-metric-grid,
        .v16-result-grid {
          grid-template-columns: 1fr;
        }

        .v16-lesson-map-row {
          grid-template-columns:
            42px 1fr;
        }

        .v16-lesson-status,
        .v16-lesson-map-row button {
          grid-column: 2;
        }

        #aungV16FloatingButton {
          right: 12px;
          bottom: 12px;
        }
      }
    `;

    document.head.appendChild(style);
  }

  // ------------------------------------------------------------
  // GLOBAL EXPORTS
  // ------------------------------------------------------------

  window.openV16Academy =
    openV16Academy;

  window.v16OpenModuleTool =
    v16OpenModuleTool;

  window.v16OpenBusinessHealth =
    v16OpenBusinessHealth;

  window.v16OpenPlanner =
    v16OpenPlanner;

  window.v16SaveStrategy =
    v16SaveStrategy;

  window.v16OpenMarketingPlanner =
    v16OpenMarketingPlanner;

  window.v16CalculateMarketing =
    v16CalculateMarketing;

  window.v16OpenNegotiationPlanner =
    v16OpenNegotiationPlanner;

  window.v16SaveNegotiation =
    v16SaveNegotiation;

  window.v16OpenGoalPlanner =
    v16OpenGoalPlanner;

  window.v16SaveGoal =
    v16SaveGoal;

  window.v16OpenInventoryPlanner =
    v16OpenInventoryPlanner;

  window.v16CalculateInventory =
    v16CalculateInventory;

  window.v16OpenLeadershipPlanner =
    v16OpenLeadershipPlanner;

  window.v16SaveLeadership =
    v16SaveLeadership;

  window.v16OpenAIAdvisor =
    v16OpenAIAdvisor;

  window.v16AskAI =
    v16AskAI;

  window.v16OpenLearningMap =
    v16OpenLearningMap;

  window.v16OpenLessonPractice =
    v16OpenLessonPractice;

  window.v16SaveLessonPractice =
    v16SaveLessonPractice;

  // ------------------------------------------------------------
  // STARTUP
  // ------------------------------------------------------------

  function v16Init() {
    try {
      v16InjectStyles();
      v16AddSidebarButton();
      v16AddFloatingButton();

      setTimeout(v16AddSidebarButton, 500);
      setTimeout(v16AddSidebarButton, 1200);
      setTimeout(v16AddSidebarButton, 2500);
      setTimeout(v16AddSidebarButton, 5000);

    } catch (error) {
      console.error(
        "Aung Business Academy V16 initialization error:",
        error
      );
    }
  }

  if (
    document.readyState === "loading"
  ) {
    document.addEventListener(
      "DOMContentLoaded",
      v16Init
    );
  } else {
    v16Init();
  }

})();
// ============================================================
// AUNG BUSINESS ACADEMY
// V16 FORCE LOADER & SIDEBAR FIX
// ============================================================

(function () {

  "use strict";

  const V16_BUTTON_ID = "aungV16ProfessionalAcademyButton";

  function v16ForceOpen() {

    try {

      if (typeof window.openV16Academy === "function") {

        window.openV16Academy();

        return;

      }

      if (typeof window.openV16Dashboard === "function") {

        window.openV16Dashboard();

        return;

      }

      alert("V16 Professional Academy is loading. Please refresh once.");

    } catch (error) {

      console.error("V16 Open Error:", error);

      alert("V16 Professional Academy error. Please refresh the page.");

    }

  }


  function findSidebar() {

    const selectors = [

      ".sidebar",
      "#sidebar",
      ".app-sidebar",
      ".side-bar",
      "aside",
      "nav"

    ];

    for (const selector of selectors) {

      const element = document.querySelector(selector);

      if (element) {

        return element;

      }

    }

    return null;

  }


  function createV16Button() {

    if (document.getElementById(V16_BUTTON_ID)) {

      return;

    }

    const sidebar = findSidebar();

    if (!sidebar) {

      return;

    }

    const button = document.createElement("button");

    button.id = V16_BUTTON_ID;

    button.type = "button";

    button.innerHTML = `
      <span style="font-size:20px;">🎓</span>
      <span>Professional Academy</span>
    `;

    button.onclick = function () {

      v16ForceOpen();

    };


    button.style.width = "calc(100% - 20px)";
    button.style.margin = "8px 10px";
    button.style.padding = "13px 14px";
    button.style.border = "0";
    button.style.borderRadius = "12px";
    button.style.cursor = "pointer";
    button.style.display = "flex";
    button.style.alignItems = "center";
    button.style.gap = "10px";
    button.style.textAlign = "left";
    button.style.fontWeight = "700";
    button.style.fontSize = "14px";
    button.style.background =
      "linear-gradient(135deg,#111827,#374151)";
    button.style.color = "#ffffff";
    button.style.boxShadow =
      "0 4px 12px rgba(0,0,0,.15)";


    const settingsButton =
      Array.from(
        sidebar.querySelectorAll("button")
      ).find(function (btn) {

        return (
          btn.textContent &&
          btn.textContent.toLowerCase().includes("settings")
        );

      });


    if (settingsButton) {

      settingsButton.parentNode.insertBefore(
        button,
        settingsButton
      );

    } else {

      sidebar.appendChild(button);

    }

  }


  function v16Check() {

    createV16Button();

  }


  // Initial attempts

  setTimeout(v16Check, 300);

  setTimeout(v16Check, 800);

  setTimeout(v16Check, 1500);

  setTimeout(v16Check, 2500);

  setTimeout(v16Check, 4000);


  // Watch sidebar rebuilds

  try {

    const observer = new MutationObserver(function () {

      createV16Button();

    });


    observer.observe(document.body, {

      childList: true,
      subtree: true

    });

  } catch (error) {

    console.warn(
      "V16 sidebar observer unavailable",
      error
    );

  }


  // Global access

  window.openProfessionalAcademy = v16ForceOpen;

  window.openV16ProfessionalAcademy = v16ForceOpen;


  console.log(
    "🎓 Aung Business Academy V16 Force Loader Ready"
  );


})();
// ============================================================
// AUNG BUSINESS ACADEMY
// V16 SAFE PROFESSIONAL ACADEMY UPGRADE
// Lesson -> Practice -> Tool -> KPI -> AI
// ============================================================

(function () {

  "use strict";

  const V16_SAFE_KEY = "aung_business_academy_v16_safe";

  /* ==========================================================
     SAFE HELPERS
  ========================================================== */

  function v16SafeGet(key, fallback) {

    try {

      const value = localStorage.getItem(key);

      if (value === null) {
        return fallback;
      }

      return JSON.parse(value);

    } catch (error) {

      console.warn("V16 storage read error:", error);

      return fallback;

    }

  }


  function v16SafeSet(key, value) {

    try {

      localStorage.setItem(
        key,
        JSON.stringify(value)
      );

      return true;

    } catch (error) {

      console.warn("V16 storage save error:", error);

      return false;

    }

  }


  function v16Escape(value) {

    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  }


  function v16Number(value) {

    const n = Number(value);

    return Number.isFinite(n) ? n : 0;

  }


  function v16Money(value) {

    return v16Number(value).toLocaleString("en-US");

  }


  function v16Percent(value) {

    return v16Number(value).toFixed(1) + "%";

  }


  function v16Call(functionName, fallback) {

    try {

      if (
        typeof window[functionName] === "function"
      ) {

        return window[functionName]();

      }

    } catch (error) {

      console.warn(
        "V16 function error:",
        functionName,
        error
      );

    }

    if (typeof fallback === "function") {
      return fallback();
    }

    return null;

  }


  /* ==========================================================
     BUSINESS MODULES
  ========================================================== */

  const V16_MODULES = [

    {
      id: "business",
      icon: "🏢",
      title: "Business Management",
      description:
        "Business fundamentals, business health and management decisions"
    },

    {
      id: "strategy",
      icon: "🧠",
      title: "Strategic Thinking",
      description:
        "SWOT, strategic goals, priorities and business direction"
    },

    {
      id: "brand",
      icon: "🏷️",
      title: "Brand Management",
      description:
        "Brand positioning, customer value and brand development"
    },

    {
      id: "marketing",
      icon: "📣",
      title: "Marketing Management",
      description:
        "Marketing planning, campaigns and marketing KPIs"
    },

    {
      id: "sales",
      icon: "💰",
      title: "Sales Management",
      description:
        "Sales targets, actual performance, pipeline and forecasting"
    },

    {
      id: "negotiation",
      icon: "🤝",
      title: "Negotiation",
      description:
        "Deal planning, negotiation preparation and decision making"
    },

    {
      id: "customer",
      icon: "❤️",
      title: "Customer Management",
      description:
        "Customer service, retention and complaint management"
    },

    {
      id: "people",
      icon: "👥",
      title: "People Management",
      description:
        "Team performance, coaching and employee development"
    },

    {
      id: "finance",
      icon: "💵",
      title: "Finance & Profit",
      description:
        "Profit, margin, break-even, ROI and financial performance"
    },

    {
      id: "inventory",
      icon: "📦",
      title: "Inventory Management",
      description:
        "Stock, turnover, reorder planning and inventory control"
    },

    {
      id: "goals",
      icon: "🎯",
      title: "Goal Setting",
      description:
        "SMART goals, action plans and performance tracking"
    },

    {
      id: "leadership",
      icon: "👑",
      title: "Leadership",
      description:
        "Leadership effectiveness, coaching and team direction"
    },

    {
      id: "growth",
      icon: "🚀",
      title: "Business Growth",
      description:
        "Growth strategy, opportunities and KPI management"
    }

  ];


  /* ==========================================================
     LESSON MAPPING
  ========================================================== */

  const V16_LESSON_MAP = {

    1: "business",
    2: "business",
    3: "strategy",
    4: "strategy",
    5: "brand",
    6: "brand",
    7: "marketing",
    8: "marketing",
    9: "sales",
    10: "sales",
    11: "negotiation",
    12: "negotiation",
    13: "customer",
    14: "customer",
    15: "people",
    16: "people",
    17: "finance",
    18: "finance",
    19: "inventory",
    20: "inventory",
    21: "goals",
    22: "goals",
    23: "leadership",
    24: "leadership",
    25: "growth",
    26: "growth",
    27: "business",
    28: "strategy",
    29: "marketing",
    30: "management"

  };


  /* ==========================================================
     PREMIUM CHECK
  ========================================================== */

  function v16HasPremium() {

    try {

      if (
        typeof window.hasPremiumAccess === "function"
      ) {

        return !!window.hasPremiumAccess();

      }

    } catch (error) {

      console.warn(
        "V16 premium check error:",
        error
      );

    }

    return true;

  }


  function v16PremiumGate() {

    try {

      if (
        typeof window.openPremium === "function"
      ) {

        window.openPremium();

        return;

      }

      if (
        typeof window.openPremiumAccess === "function"
      ) {

        window.openPremiumAccess();

        return;

      }

    } catch (error) {

      console.warn(
        "V16 premium gate error:",
        error
      );

    }

    if (typeof window.showToast === "function") {

      window.showToast(
        "Premium access is required"
      );

    } else {

      alert(
        "Premium access is required"
      );

    }

  }


  /* ==========================================================
     MODULE ROUTER
  ========================================================== */

  function v16OpenModule(moduleId) {

    const id = String(moduleId || "");

    if (
      id === "sales" ||
      id === "people"
    ) {

      if (!v16HasPremium()) {

        v16PremiumGate();

        return;

      }

    }


    try {

      if (
        id === "sales" &&
        typeof window.openV153Salesmen === "function"
      ) {

        window.openV153Salesmen();

        return;

      }


      if (
        id === "people" &&
        typeof window.openV15TeamManagement === "function"
      ) {

        window.openV15TeamManagement();

        return;

      }


      if (
        id === "finance"
      ) {

        if (
          typeof window.openV14FinanceCenter === "function"
        ) {

          window.openV14FinanceCenter();

          return;

        }

        if (
          typeof window.openV13BusinessSimulator === "function"
        ) {

          window.openV13BusinessSimulator();

          return;

        }

      }


      if (
        id === "business"
      ) {

        if (
          typeof window.openV14ProfessionalDashboard === "function"
        ) {

          window.openV14ProfessionalDashboard();

          return;

        }

      }

    } catch (error) {

      console.error(
        "V16 module router error:",
        error
      );

    }


    v16OpenModuleTool(id);

  }


  /* ==========================================================
     V16 PRACTICAL TOOLS
  ========================================================== */

  function v16OpenModuleTool(moduleId) {

    const module = V16_MODULES.find(
      function (item) {

        return item.id === moduleId;

      }
    );


    if (!module) {

      return;

    }


    let toolTitle = "";
    let toolText = "";
    let fields = "";


    switch (moduleId) {

      case "strategy":

        toolTitle = "Strategic Planning Tool";

        toolText =
          "Define your current situation, strategic objective, key priority and action plan";

        fields = `
          <input id="v16StrategyGoal"
            class="tool-input"
            placeholder="Strategic Goal">

          <textarea id="v16StrategyAction"
            class="tool-input"
            rows="4"
            placeholder="Key Strategic Actions"></textarea>

          <button class="primary-button"
            onclick="window.v16SaveStrategy()">
            Save Strategy
          </button>
        `;

        break;


      case "marketing":

        toolTitle = "Marketing KPI Planner";

        toolText =
          "Compare marketing target and actual performance";

        fields = `
          <input id="v16MarketingTarget"
            class="tool-input"
            type="number"
            placeholder="Marketing Target">

          <input id="v16MarketingActual"
            class="tool-input"
            type="number"
            placeholder="Marketing Actual">

          <button class="primary-button"
            onclick="window.v16CalculateMarketing()">
            Calculate KPI
          </button>

          <div id="v16MarketingResult"
            class="v16-result"></div>
        `;

        break;


      case "negotiation":

        toolTitle = "Negotiation Planner";

        toolText =
          "Prepare your objective, minimum acceptable result and negotiation actions";

        fields = `
          <input id="v16NegotiationGoal"
            class="tool-input"
            placeholder="Desired Result">

          <input id="v16NegotiationMinimum"
            class="tool-input"
            placeholder="Minimum Acceptable Result">

          <textarea id="v16NegotiationAction"
            class="tool-input"
            rows="4"
            placeholder="Negotiation Strategy"></textarea>

          <button class="primary-button"
            onclick="window.v16SaveNegotiation()">
            Save Negotiation Plan
          </button>
        `;

        break;


      case "customer":

        toolTitle = "Customer Management Practice";

        toolText =
          "Record customer priorities and improvement actions";

        fields = `
          <textarea id="v16CustomerIssue"
            class="tool-input"
            rows="3"
            placeholder="Customer Issue / Need"></textarea>

          <textarea id="v16CustomerAction"
            class="tool-input"
            rows="3"
            placeholder="Customer Action Plan"></textarea>

          <button class="primary-button"
            onclick="window.v16SaveCustomerAction()">
            Save Customer Action
          </button>
        `;

        break;


      case "inventory":

        toolTitle = "Inventory KPI Tool";

        toolText =
          "Calculate stock turnover and reorder requirement";

        fields = `
          <input id="v16InventoryCost"
            class="tool-input"
            type="number"
            placeholder="Cost of Goods Sold">

          <input id="v16InventoryStock"
            class="tool-input"
            type="number"
            placeholder="Average Inventory">

          <input id="v16InventoryDaily"
            class="tool-input"
            type="number"
            placeholder="Average Daily Sales">

          <button class="primary-button"
            onclick="window.v16CalculateInventory()">
            Calculate Inventory KPI
          </button>

          <div id="v16InventoryResult"
            class="v16-result"></div>
        `;

        break;


      case "goals":

        toolTitle = "SMART Goal Planner";

        toolText =
          "Create a measurable business goal and action plan";

        fields = `
          <input id="v16Goal"
            class="tool-input"
            placeholder="Your Goal">

          <input id="v16GoalTarget"
            class="tool-input"
            placeholder="Target Number">

          <input id="v16GoalDeadline"
            class="tool-input"
            type="date">

          <button class="primary-button"
            onclick="window.v16SaveGoal()">
            Save Goal
          </button>
        `;

        break;


      case "leadership":

        toolTitle = "Leadership & Coaching Tool";

        toolText =
          "Create a coaching priority and team development action";

        fields = `
          <textarea id="v16LeadershipIssue"
            class="tool-input"
            rows="3"
            placeholder="Team Performance Issue"></textarea>

          <textarea id="v16LeadershipAction"
            class="tool-input"
            rows="3"
            placeholder="Coaching Action"></textarea>

          <button class="primary-button"
            onclick="window.v16SaveLeadership()">
            Save Coaching Plan
          </button>
        `;

        break;


      case "growth":

        toolTitle = "Business Growth Planner";

        toolText =
          "Identify growth opportunity, target and action";

        fields = `
          <input id="v16GrowthTarget"
            class="tool-input"
            placeholder="Growth Target">

          <textarea id="v16GrowthOpportunity"
            class="tool-input"
            rows="3"
            placeholder="Growth Opportunity"></textarea>

          <textarea id="v16GrowthAction"
            class="tool-input"
            rows="3"
            placeholder="Growth Action Plan"></textarea>

          <button class="primary-button"
            onclick="window.v16SaveGrowth()">
            Save Growth Plan
          </button>
        `;

        break;


      default:

        toolTitle =
          module.title + " Practice";

        toolText =
          "Use this practice area to apply what you learned";

        fields = `
          <textarea id="v16GenericPractice"
            class="tool-input"
            rows="6"
            placeholder="Write your practical business action here..."></textarea>

          <button class="primary-button"
            onclick="window.v16SaveGenericPractice('${v16Escape(moduleId)}')">
            Save Practice
          </button>
        `;

        break;

    }


    v16RenderPage(
      module.icon + " " + toolTitle,
      `
        <div class="v16-tool-page">

          <div class="v16-tool-header">

            <div class="v16-tool-icon">
              ${module.icon}
            </div>

            <div>
              <h2>${v16Escape(toolTitle)}</h2>
              <p>${v16Escape(toolText)}</p>
            </div>

          </div>

          <div class="v16-tool-card">

            ${fields}

          </div>

          <div class="v16-ai-box">

            <h3>🤖 AI Business Advisor</h3>

            <p>
              Need help with this topic?
              Ask AI for practical advice, KPI analysis and action steps
            </p>

            <button class="secondary-button"
              onclick="window.v16AskAdvisor('${v16Escape(module.title)}')">
              Ask AI Advisor
            </button>

          </div>

        </div>
      `
    );

  }


  /* ==========================================================
     DASHBOARD
  ========================================================== */

  function openV16SafeAcademy() {

    v16RenderPage(
      "🎓 Professional Academy",
      `
        <div class="v16-academy">

          <div class="v16-hero">

            <div>

              <div class="v16-badge">
                V16 PROFESSIONAL
              </div>

              <h1>
                Aung Business Academy
              </h1>

              <p>
                Professional Business Management Learning Platform
              </p>

              <p class="v16-flow">
                Lesson → Practice → Tool → KPI → AI
              </p>

            </div>

          </div>


          <div class="v16-section-title">

            <h2>Business Management Academy</h2>

            <p>
              Learn the concept, practice it, measure the KPI,
              then use AI to improve your business decision
            </p>

          </div>


          <div class="v16-module-grid">

            ${V16_MODULES.map(function (module) {

              return `
                <button
                  class="v16-module-card"
                  onclick="window.v16OpenModule('${module.id}')">

                  <div class="v16-module-icon">
                    ${module.icon}
                  </div>

                  <div class="v16-module-title">
                    ${v16Escape(module.title)}
                  </div>

                  <div class="v16-module-description">
                    ${v16Escape(module.description)}
                  </div>

                  <div class="v16-module-action">
                    Open Module →
                  </div>

                </button>
              `;

            }).join("")}

          </div>


          <div class="v16-learning-flow">

            <div>
              <span>1</span>
              <strong>Lesson</strong>
              <small>Learn the concept</small>
            </div>

            <div>
              <span>2</span>
              <strong>Practice</strong>
              <small>Apply the concept</small>
            </div>

            <div>
              <span>3</span>
              <strong>Tool</strong>
              <small>Calculate & plan</small>
            </div>

            <div>
              <span>4</span>
              <strong>KPI</strong>
              <small>Measure performance</small>
            </div>

            <div>
              <span>5</span>
              <strong>AI</strong>
              <small>Improve decisions</small>
            </div>

          </div>


          <div class="v16-bottom-grid">

            <button
              class="v16-large-action"
              onclick="window.v16OpenLessons()">

              📚 My Lessons

            </button>


            <button
              class="v16-large-action"
              onclick="window.v16OpenProgress()">

              📈 My Progress

            </button>


            <button
              class="v16-large-action"
              onclick="window.v16AskAdvisor('Give me a professional business health analysis and tell me what I should improve first')">

              🤖 AI Business Advisor

            </button>

          </div>

        </div>
      `
    );

  }


  /* ==========================================================
     LESSON CONNECTION
  ========================================================== */

  function v16OpenLessons() {

    try {

      if (
        typeof window.openLessons === "function"
      ) {

        window.openLessons();

        return;

      }

    } catch (error) {

      console.warn(
        "V16 lesson connection error:",
        error
      );

    }

    v16RenderPage(
      "📚 My Lessons",
      `
        <div class="v16-empty">

          <h2>Lessons</h2>

          <p>
            Your existing lesson system is available from the main navigation
          </p>

        </div>
      `
    );

  }


  /* ==========================================================
     PROGRESS
  ========================================================== */

  function v16OpenProgress() {

    try {

      if (
        typeof window.openV10LearningReport === "function"
      ) {

        window.openV10LearningReport();

        return;

      }

      if (
        typeof window.openProgress === "function"
      ) {

        window.openProgress();

        return;

      }

    } catch (error) {

      console.warn(
        "V16 progress error:",
        error
      );

    }


    const completed =
      v16SafeGet(
        "aung_business_academy_completed",
        []
      );


    const completedCount =
      Array.isArray(completed)
        ? completed.length
        : 0;


    const total = 30;

    const percentage =
      total > 0
        ? (completedCount / total) * 100
        : 0;


    v16RenderPage(
      "📈 My Progress",
      `
        <div class="v16-progress-page">

          <div class="v16-progress-card">

            <h2>Learning Progress</h2>

            <div class="v16-progress-number">
              ${completedCount} / ${total}
            </div>

            <div class="v16-progress-bar">

              <div style="width:${Math.min(
                100,
                percentage
              )}%"></div>

            </div>

            <p>
              ${v16Percent(percentage)} completed
            </p>

          </div>

        </div>
      `
    );

  }


  /* ==========================================================
     MARKETING KPI
  ========================================================== */

  function v16CalculateMarketing() {

    const target =
      v16Number(
        document.getElementById(
          "v16MarketingTarget"
        )?.value
      );

    const actual =
      v16Number(
        document.getElementById(
          "v16MarketingActual"
        )?.value
      );


    const achievement =
      target > 0
        ? (actual / target) * 100
        : 0;


    const gap =
      target - actual;


    const result =
      document.getElementById(
        "v16MarketingResult"
      );


    if (!result) return;


    result.innerHTML = `

      <div class="v16-kpi-grid">

        <div>
          <strong>Target</strong>
          <span>${v16Money(target)}</span>
        </div>

        <div>
          <strong>Actual</strong>
          <span>${v16Money(actual)}</span>
        </div>

        <div>
          <strong>Achievement</strong>
          <span>${v16Percent(achievement)}</span>
        </div>

        <div>
          <strong>Gap</strong>
          <span>${v16Money(Math.max(0, gap))}</span>
        </div>

      </div>

      <p class="v16-advice">

        ${
          achievement >= 100
            ? "Excellent — marketing target achieved"
            : achievement >= 80
              ? "Good progress — focus on closing the remaining gap"
              : "Action required — review campaign performance and customer response"

        }

      </p>

    `;

  }


  /* ==========================================================
     INVENTORY KPI
  ========================================================== */

  function v16CalculateInventory() {

    const cogs =
      v16Number(
        document.getElementById(
          "v16InventoryCost"
        )?.value
      );


    const stock =
      v16Number(
        document.getElementById(
          "v16InventoryStock"
        )?.value
      );


    const daily =
      v16Number(
        document.getElementById(
          "v16InventoryDaily"
        )?.value
      );


    const turnover =
      stock > 0
        ? cogs / stock
        : 0;


    const days =
      daily > 0
        ? stock / daily
        : 0;


    const result =
      document.getElementById(
        "v16InventoryResult"
      );


    if (!result) return;


    result.innerHTML = `

      <div class="v16-kpi-grid">

        <div>
          <strong>Stock Turnover</strong>
          <span>${turnover.toFixed(2)}x</span>
        </div>

        <div>
          <strong>Stock Days</strong>
          <span>${days.toFixed(1)} days</span>
        </div>

      </div>

      <p class="v16-advice">

        ${
          days > 60
            ? "⚠️ High stock days — review slow-moving products"
            : days > 30
              ? "Review inventory efficiency and reorder levels"
              : "Inventory level appears relatively efficient"

        }

      </p>

    `;

  }


  /* ==========================================================
     SAVE PRACTICE DATA
  ========================================================== */

  function v16SavePractice(type, data) {

    const current =
      v16SafeGet(
        V16_SAFE_KEY,
        {}
      );


    current[type] = {

      ...data,

      updatedAt:
        new Date().toISOString()

    };


    v16SafeSet(
      V16_SAFE_KEY,
      current
    );


    if (
      typeof window.showToast === "function"
    ) {

      window.showToast(
        "Saved successfully"
      );

    } else {

      alert(
        "Saved successfully"
      );

    }

  }


  function v16SaveStrategy() {

    v16SavePractice(
      "strategy",
      {
        goal:
          document.getElementById(
            "v16StrategyGoal"
          )?.value || "",

        action:
          document.getElementById(
            "v16StrategyAction"
          )?.value || ""
      }
    );

  }


  function v16SaveNegotiation() {

    v16SavePractice(
      "negotiation",
      {
        goal:
          document.getElementById(
            "v16NegotiationGoal"
          )?.value || "",

        minimum:
          document.getElementById(
            "v16NegotiationMinimum"
          )?.value || "",

        action:
          document.getElementById(
            "v16NegotiationAction"
          )?.value || ""
      }
    );

  }


  function v16SaveCustomerAction() {

    v16SavePractice(
      "customer",
      {
        issue:
          document.getElementById(
            "v16CustomerIssue"
          )?.value || "",

        action:
          document.getElementById(
            "v16CustomerAction"
          )?.value || ""
      }
    );

  }


  function v16SaveGoal() {

    v16SavePractice(
      "goal",
      {
        goal:
          document.getElementById(
            "v16Goal"
          )?.value || "",

        target:
          document.getElementById(
            "v16GoalTarget"
          )?.value || "",

        deadline:
          document.getElementById(
            "v16GoalDeadline"
          )?.value || ""
      }
    );

  }


  function v16SaveLeadership() {

    v16SavePractice(
      "leadership",
      {
        issue:
          document.getElementById(
            "v16LeadershipIssue"
          )?.value || "",

        action:
          document.getElementById(
            "v16LeadershipAction"
          )?.value || ""
      }
    );

  }


  function v16SaveGrowth() {

    v16SavePractice(
      "growth",
      {
        target:
          document.getElementById(
            "v16GrowthTarget"
          )?.value || "",

        opportunity:
          document.getElementById(
            "v16GrowthOpportunity"
          )?.value || "",

        action:
          document.getElementById(
            "v16GrowthAction"
          )?.value || ""
      }
    );

  }


  function v16SaveGenericPractice(type) {

    v16SavePractice(
      type,
      {
        notes:
          document.getElementById(
            "v16GenericPractice"
          )?.value || ""
      }
    );

  }


  /* ==========================================================
     AI BUSINESS ADVISOR
  ========================================================== */

  async function v16AskAdvisor(topic) {

    const question =
      String(topic || "business");


    v16RenderPage(
      "🤖 AI Business Advisor",
      `
        <div class="v16-ai-advisor">

          <div class="v16-ai-loading">

            <div class="v16-ai-icon">
              🤖
            </div>

            <h2>AI Business Advisor</h2>

            <p>
              Analyzing your business question...
            </p>

            <div class="v16-spinner"></div>

          </div>

        </div>
      `
    );


    let answer = "";


    try {

      if (
        typeof window.v12SafeAIFetch === "function"
      ) {

        answer =
          await window.v12SafeAIFetch(
            `
You are the AI Business Advisor inside Aung Business Academy.

Topic:
${question}

Give a professional practical business-management answer.

Structure the response as:

1. Current Situation Analysis
2. KPI Analysis
3. Key Risk
4. Root Cause
5. Immediate Actions
6. 7-Day Action Plan
7. KPI to Track
8. Management Recommendation

Answer in Burmese when the user uses Burmese.
Use practical business examples and numbers when useful.
`
          );

      }

    } catch (error) {

      console.warn(
        "V16 AI server error:",
        error
      );

    }


    if (!answer) {

      answer =
        `
<h3>Business Advisor Recommendation</h3>

<p>
<strong>Topic:</strong>
${v16Escape(question)}
</p>

<h4>1. Current Situation Analysis</h4>

<p>
First identify your current performance against your target
</p>

<h4>2. KPI Analysis</h4>

<ul>
<li>Target vs Actual</li>
<li>Achievement %</li>
<li>Gap</li>
<li>Growth</li>
<li>Profit / Margin</li>
</ul>

<h4>3. Immediate Actions</h4>

<ul>
<li>Identify the biggest performance gap</li>
<li>Focus resources on the highest-impact activity</li>
<li>Review performance daily</li>
</ul>

<h4>4. 7-Day Action Plan</h4>

<p>
Set one measurable target for each day and review the result at the end of the day
</p>

<h4>5. Management Recommendation</h4>

<p>
Use actual business data, KPI tracking and regular review before making major decisions
</p>
`;

    }


    v16RenderPage(
      "🤖 AI Business Advisor",
      `
        <div class="v16-ai-answer">

          <div class="v16-ai-header">

            <div class="v16-ai-icon">
              🤖
            </div>

            <div>
              <h2>AI Business Advisor</h2>
              <p>
                Professional Management Analysis
              </p>
            </div>

          </div>

          <div class="v16-ai-content">

            ${String(answer)}

          </div>

          <button
            class="secondary-button"
            onclick="window.openV16SafeAcademy()">

            ← Back to Academy

          </button>

        </div>
      `
    );

  }


  /* ==========================================================
     RENDER ENGINE
  ========================================================== */

  function v16RenderPage(title, html) {

    try {

      if (
        typeof window.setPage === "function"
      ) {

        window.setPage(
          title,
          "V16 Professional Academy"
        );

      }

    } catch (error) {

      console.warn(
        "V16 setPage error:",
        error
      );

    }


    const selectors = [

      "#mainContent",
      ".main-content",
      ".page-content",
      ".content",
      ".app-content"

    ];


    let container = null;


    for (
      let i = 0;
      i < selectors.length;
      i++
    ) {

      const element =
        document.querySelector(
          selectors[i]
        );


      if (element) {

        container = element;

        break;

      }

    }


    if (!container) {

      try {

        if (
          typeof window.showModal === "function"
        ) {

          window.showModal(
            html
          );

          return;

        }

      } catch (error) {

        console.warn(
          "V16 modal render error:",
          error
        );

      }


      console.warn(
        "V16 content container not found"
      );

      return;

    }


    container.innerHTML = html;


    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }


  /* ==========================================================
     SIDEBAR
  ========================================================== */

  function v16FindSidebar() {

    const selectors = [

      ".sidebar",
      "#sidebar",
      ".app-sidebar",
      ".side-bar",
      "aside",
      "nav"

    ];


    for (
      let i = 0;
      i < selectors.length;
      i++
    ) {

      const element =
        document.querySelector(
          selectors[i]
        );


      if (element) {

        return element;

      }

    }


    return null;

  }


  function v16AddSidebarButton() {

    if (
      document.getElementById(
        "aungV16SafeAcademyButton"
      )
    ) {

      return;

    }


    const sidebar =
      v16FindSidebar();


    if (!sidebar) {

      return;

    }


    const button =
      document.createElement("button");


    button.id =
      "aungV16SafeAcademyButton";


    button.type =
      "button";


    button.innerHTML =
      "🎓 Professional Academy";


    button.style.width =
      "calc(100% - 20px)";

    button.style.margin =
      "8px 10px";

    button.style.padding =
      "13px 14px";

    button.style.border =
      "0";

    button.style.borderRadius =
      "12px";

    button.style.cursor =
      "pointer";

    button.style.textAlign =
      "left";

    button.style.fontWeight =
      "700";

    button.style.fontSize =
      "14px";

    button.style.background =
      "linear-gradient(135deg,#111827,#374151)";

    button.style.color =
      "#ffffff";

    button.style.boxShadow =
      "0 4px 12px rgba(0,0,0,.15)";


    button.onclick =
      function () {

        openV16SafeAcademy();

      };


    const settings =
      Array.from(
        sidebar.querySelectorAll("button")
      ).find(function (item) {

        return (
          String(
            item.textContent || ""
          )
            .toLowerCase()
            .includes("settings")
        );

      });


    if (settings) {

      settings.parentNode.insertBefore(
        button,
        settings
      );

    } else {

      sidebar.appendChild(
        button
      );

    }

  }


  /* ==========================================================
     CSS
  ========================================================== */

  function v16InjectCSS() {

    if (
      document.getElementById(
        "aungV16SafeStyles"
      )
    ) {

      return;

    }


    const style =
      document.createElement("style");


    style.id =
      "aungV16SafeStyles";


    style.textContent = `

      .v16-academy {
        max-width: 1400px;
        margin: 0 auto;
        padding: 20px;
      }

      .v16-hero {
        padding: 28px;
        border-radius: 20px;
        background:
          linear-gradient(
            135deg,
            #111827,
            #374151
          );
        color: white;
        margin-bottom: 24px;
        box-shadow:
          0 10px 30px rgba(0,0,0,.12);
      }

      .v16-badge {
        display: inline-block;
        padding: 6px 10px;
        border-radius: 999px;
        background: rgba(255,255,255,.14);
        font-size: 12px;
        font-weight: 800;
        margin-bottom: 12px;
      }

      .v16-hero h1 {
        margin: 0 0 8px;
        font-size: 30px;
      }

      .v16-hero p {
        margin: 5px 0;
        opacity: .9;
      }

      .v16-flow {
        font-weight: 700;
        margin-top: 16px !important;
      }

      .v16-section-title {
        margin: 25px 0 15px;
      }

      .v16-section-title h2 {
        margin-bottom: 6px;
      }

      .v16-section-title p {
        color: #6b7280;
      }

      .v16-module-grid {
        display: grid;
        grid-template-columns:
          repeat(
            auto-fit,
            minmax(220px, 1fr)
          );
        gap: 16px;
      }

      .v16-module-card {
        border: 1px solid #e5e7eb;
        border-radius: 16px;
        background: #ffffff;
        padding: 20px;
        text-align: left;
        cursor: pointer;
        transition: .2s;
        box-shadow:
          0 4px 15px rgba(0,0,0,.05);
      }

      .v16-module-card:hover {
        transform: translateY(-3px);
        box-shadow:
          0 10px 25px rgba(0,0,0,.10);
      }

      .v16-module-icon {
        font-size: 30px;
        margin-bottom: 12px;
      }

      .v16-module-title {
        font-weight: 800;
        font-size: 17px;
        margin-bottom: 8px;
      }

      .v16-module-description {
        color: #6b7280;
        font-size: 13px;
        line-height: 1.5;
      }

      .v16-module-action {
        margin-top: 15px;
        font-size: 13px;
        font-weight: 700;
      }

      .v16-learning-flow {
        display: grid;
        grid-template-columns:
          repeat(5, 1fr);
        gap: 12px;
        margin-top: 25px;
      }

      .v16-learning-flow > div {
        padding: 16px;
        border-radius: 14px;
        background: #f9fafb;
        text-align: center;
      }

      .v16-learning-flow span {
        display: block;
        font-size: 22px;
        font-weight: 800;
        margin-bottom: 6px;
      }

      .v16-learning-flow strong,
      .v16-learning-flow small {
        display: block;
      }

      .v16-learning-flow small {
        color: #6b7280;
        margin-top: 4px;
      }

      .v16-bottom-grid {
        display: grid;
        grid-template-columns:
          repeat(3, 1fr);
        gap: 14px;
        margin-top: 25px;
      }

      .v16-large-action {
        padding: 18px;
        border: 0;
        border-radius: 14px;
        cursor: pointer;
        font-weight: 800;
        background: #f3f4f6;
      }

      .v16-tool-page {
        max-width: 1000px;
        margin: 0 auto;
        padding: 20px;
      }

      .v16-tool-header {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-bottom: 20px;
      }

      .v16-tool-icon,
      .v16-ai-icon {
        font-size: 42px;
      }

      .v16-tool-card,
      .v16-ai-box,
      .v16-ai-answer {
        background: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 16px;
        padding: 20px;
        margin-bottom: 18px;
        box-shadow:
          0 5px 20px rgba(0,0,0,.05);
      }

      .v16-tool-card .tool-input {
        width: 100%;
        margin-bottom: 12px;
        padding: 12px;
        border: 1px solid #d1d5db;
        border-radius: 10px;
      }

      .v16-result {
        margin-top: 15px;
      }

      .v16-kpi-grid {
        display: grid;
        grid-template-columns:
          repeat(
            auto-fit,
            minmax(150px, 1fr)
          );
        gap: 12px;
      }

      .v16-kpi-grid > div {
        padding: 15px;
        background: #f9fafb;
        border-radius: 12px;
      }

      .v16-kpi-grid strong,
      .v16-kpi-grid span {
        display: block;
      }

      .v16-kpi-grid span {
        margin-top: 6px;
        font-size: 20px;
        font-weight: 800;
      }

      .v16-advice {
        margin-top: 15px;
        padding: 14px;
        border-radius: 10px;
        background: #f9fafb;
      }

      .v16-ai-header {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 20px;
      }

      .v16-ai-content {
        line-height: 1.8;
        padding: 20px;
        border-radius: 14px;
        background: #f9fafb;
      }

      .v16-progress-card {
        max-width: 700px;
        margin: 30px auto;
        padding: 30px;
        background: white;
        border-radius: 18px;
        text-align: center;
      }

      .v16-progress-number {
        font-size: 42px;
        font-weight: 800;
        margin: 20px 0;
      }

      .v16-progress-bar {
        height: 14px;
        background: #e5e7eb;
        border-radius: 999px;
        overflow: hidden;
      }

      .v16-progress-bar div {
        height: 100%;
        background: #111827;
      }

      .v16-spinner {
        width: 35px;
        height: 35px;
        border: 4px solid #e5e7eb;
        border-top-color: #111827;
        border-radius: 50%;
        animation:
          v16spin .8s linear infinite;
        margin: 20px auto;
      }

      @keyframes v16spin {
        to {
          transform: rotate(360deg);
        }
      }

      @media (max-width: 768px) {

        .v16-academy {
          padding: 12px;
        }

        .v16-hero h1 {
          font-size: 24px;
        }

        .v16-learning-flow {
          grid-template-columns:
            repeat(2, 1fr);
        }

        .v16-bottom-grid {
          grid-template-columns: 1fr;
        }

        .v16-tool-page {
          padding: 12px;
        }

      }

    `;


    document.head.appendChild(
      style
    );

  }


  /* ==========================================================
     GLOBAL EXPORTS
  ========================================================== */

  window.openV16SafeAcademy =
    openV16SafeAcademy;

  window.openProfessionalAcademy =
    openV16SafeAcademy;

  window.v16OpenModule =
    v16OpenModule;

  window.v16OpenLessons =
    v16OpenLessons;

  window.v16OpenProgress =
    v16OpenProgress;

  window.v16CalculateMarketing =
    v16CalculateMarketing;

  window.v16CalculateInventory =
    v16CalculateInventory;

  window.v16SaveStrategy =
    v16SaveStrategy;

  window.v16SaveNegotiation =
    v16SaveNegotiation;

  window.v16SaveCustomerAction =
    v16SaveCustomerAction;

  window.v16SaveGoal =
    v16SaveGoal;

  window.v16SaveLeadership =
    v16SaveLeadership;

  window.v16SaveGrowth =
    v16SaveGrowth;

  window.v16SaveGenericPractice =
    v16SaveGenericPractice;

  window.v16AskAdvisor =
    v16AskAdvisor;


  /* ==========================================================
     STARTUP
  ========================================================== */

  function v16SafeInit() {

    try {

      v16InjectCSS();

      v16AddSidebarButton();

    } catch (error) {

      console.error(
        "V16 Safe Init Error:",
        error
      );

    }

  }


  if (
    document.readyState === "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      v16SafeInit
    );

  } else {

    v16SafeInit();

  }


  setTimeout(
    v16SafeInit,
    1000
  );

  setTimeout(
    v16SafeInit,
    2500
  );


  try {

    const observer =
      new MutationObserver(
        function () {

          v16AddSidebarButton();

        }
      );


    observer.observe(
      document.body,
      {
        childList: true,
        subtree: true
      }
    );

  } catch (error) {

    console.warn(
      "V16 observer error:",
      error
    );

  }


  console.log(
    "🎓 Aung Business Academy V16 Safe Professional Upgrade Loaded"
  );

})();
// ============================================================
// V16 GUARANTEED LAUNCHER
// ============================================================

(function () {

  "use strict";

  function launchV16() {

    try {

      if (
        typeof window.openV16SafeAcademy === "function"
      ) {

        window.openV16SafeAcademy();

        return;

      }

      if (
        typeof window.openV16Academy === "function"
      ) {

        window.openV16Academy();

        return;

      }

      if (
        typeof window.openProfessionalAcademy === "function"
      ) {

        window.openProfessionalAcademy();

        return;

      }

      alert(
        "V16 function မတွေ့သေးပါ — app.js ထဲမှာ V16 code ရှိပေမယ့် load မဖြစ်သေးပါ"
      );

    } catch (error) {

      console.error(
        "V16 Launch Error:",
        error
      );

      alert(
        "V16 Error: " + error.message
      );

    }

  }


  function createLauncher() {

    if (
      document.getElementById(
        "v16GuaranteedLauncher"
      )
    ) {

      return;

    }


    const button =
      document.createElement("button");


    button.id =
      "v16GuaranteedLauncher";


    button.type =
      "button";


    button.innerHTML =
      "🎓 V16 Professional Academy";


    button.onclick =
      launchV16;


    button.style.position =
      "fixed";

    button.style.right =
      "20px";

    button.style.bottom =
      "20px";

    button.style.zIndex =
      "2147483647";

    button.style.padding =
      "15px 20px";

    button.style.border =
      "none";

    button.style.borderRadius =
      "14px";

    button.style.background =
      "#111827";

    button.style.color =
      "#ffffff";

    button.style.fontSize =
      "15px";

    button.style.fontWeight =
      "700";

    button.style.cursor =
      "pointer";

    button.style.boxShadow =
      "0 8px 25px rgba(0,0,0,.25)";


    document.body.appendChild(
      button
    );

  }


  function start() {

    try {

      createLauncher();

      console.log(
        "🎓 V16 GUARANTEED LAUNCHER LOADED"
      );

    } catch (error) {

      console.error(
        "V16 launcher error:",
        error
      );

    }

  }


  if (
    document.readyState === "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      start
    );

  } else {

    start();

  }


})();
