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
