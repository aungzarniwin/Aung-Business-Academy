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
