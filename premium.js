/* =========================================================
   AUNG BUSINESS ACADEMY V8
   PREMIUM SYSTEM V3
   Mobile + Laptop
   Student Payment + Admin Dashboard
   ========================================================= */

(function () {
  "use strict";

  const STORAGE_KEY = "aungBusinessAcademyV8";

  const FREE_COURSE_INDEX = 0;

  const PLANS = {
    monthly: {
      name: "Monthly",
      price: 30000,
      days: 30
    },
    yearly: {
      name: "Yearly",
      price: 250000,
      days: 365
    }
  };

  /*
   * IMPORTANT:
   * Replace these with your real payment information.
   */
const DEFAULT_PAYMENT = {
  kpay: {
    number: "0943016420",
    name: "Aung Zar Ni Win"
  },

  bank: {
    bankName: "CB Bank",
    accountNumber: "0174600900060763",
    accountName: "Aung Zar Ni Win"
  }
};
  /* =========================================================
     BASIC HELPERS
     ========================================================= */

  function getState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (!saved) {
        return {};
      }

      return JSON.parse(saved);
    } catch (error) {
      console.error("Premium state error:", error);
      return {};
    }
  }

  function saveState(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function ensureState() {
    const state = getState();

    if (!state.premium) {
      state.premium = {
        status: "free",
        plan: null,
        startAt: null,
        expiryAt: null,
        paymentMethod: null,
        transactionRef: "",
        paymentScreenshot: "",
        submittedAt: null
      };
    }

    if (!state.account) {
      state.account = {
        role: "student"
      };
    }

   state.paymentSettings = DEFAULT_PAYMENT;

    saveState(state);

    return state;
  }

  function updateState(callback) {
    const state = ensureState();

    callback(state);

    saveState(state);

    return state;
  }

  function formatMoney(number) {
    return Number(number || 0).toLocaleString("en-US") + " Ks";
  }

  function formatDate(timestamp) {
    if (!timestamp) return "-";

    const date = new Date(timestamp);

    if (Number.isNaN(date.getTime())) {
      return "-";
    }

    return date.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    });
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
     PREMIUM STATUS
     ========================================================= */

  function isPremiumActive() {
    const state = ensureState();

    if (state.premium.status !== "active") {
      return false;
    }

    if (!state.premium.expiryAt) {
      return false;
    }

    const now = Date.now();

    if (now >= Number(state.premium.expiryAt)) {
      state.premium.status = "expired";
      saveState(state);
      return false;
    }

    return true;
  }

  function getPremiumStatus() {
    const state = ensureState();

    if (isPremiumActive()) {
      return {
        status: "active",
        plan: state.premium.plan,
        expiryAt: state.premium.expiryAt
      };
    }

    return {
      status: state.premium.status || "free",
      plan: state.premium.plan || null,
      expiryAt: state.premium.expiryAt || null
    };
  }

  /* =========================================================
     COURSE DETECTION
     Course 1 = FREE
     Course 2-13 = PREMIUM
     ========================================================= */

  function getCourseCards() {
    return Array.from(
      document.querySelectorAll(
        "#coursesGrid .course-card, #coursesGrid > div"
      )
    );
  }

  function getCourseIndex(card, index) {
    const dataIndex = card.getAttribute("data-course-index");

    if (dataIndex !== null) {
      const parsed = parseInt(dataIndex, 10);

      if (!Number.isNaN(parsed)) {
        return parsed;
      }
    }

    return index;
  }

  function isCoursePremium(index) {
    return index > FREE_COURSE_INDEX;
  }

  function isCourseLocked(index) {
    return isCoursePremium(index) && !isPremiumActive();
  }

  /* =========================================================
     BADGES
     ========================================================= */

  function addBadge(card, index) {
    if (!card) return;

    const oldBadge = card.querySelector(".aba-premium-badge");

    if (oldBadge) {
      oldBadge.remove();
    }

    const badge = document.createElement("div");

    badge.className = "aba-premium-badge";

    if (index === FREE_COURSE_INDEX) {
      badge.innerHTML = "✓ FREE";
      badge.classList.add("free");
    } else if (isPremiumActive()) {
      badge.innerHTML = "✓ PREMIUM";
      badge.classList.add("active");
    } else {
      badge.innerHTML = "👑 PREMIUM";
      badge.classList.add("premium");
    }

    card.style.position = "relative";
    card.appendChild(badge);
  }

  /* =========================================================
     COURSE CARD UI
     ========================================================= */

  function updateCourseCards() {
    const cards = getCourseCards();

    cards.forEach(function (card, index) {
      const courseIndex = getCourseIndex(card, index);

      addBadge(card, courseIndex);

      const buttons = Array.from(
        card.querySelectorAll("button, .btn, a")
      );

      const premium = isCoursePremium(courseIndex);
      const locked = isCourseLocked(courseIndex);

      if (!premium) {
        return;
      }

      buttons.forEach(function (button) {
        if (
          button.classList.contains("aba-premium-ignore") ||
          button.closest(".aba-premium-modal") ||
          button.closest(".aba-admin-panel")
        ) {
          return;
        }

        if (locked) {
          button.dataset.originalText =
            button.dataset.originalText ||
            button.textContent.trim();

          button.textContent = "🔒 Unlock Course";

          button.classList.add("aba-premium-locked");

          button.onclick = function (event) {
            event.preventDefault();
            event.stopPropagation();

            openPremiumModal(courseIndex);

            return false;
          };
        } else {
          button.classList.remove("aba-premium-locked");

          if (button.dataset.originalText) {
            button.textContent = button.dataset.originalText;
          }

          button.onclick = null;
        }
      });
    });
  }

  /* =========================================================
     PREMIUM MODAL
     ========================================================= */

  function createPremiumModal() {
    if (document.getElementById("abaPremiumModal")) {
      return;
    }

    const overlay = document.createElement("div");

    overlay.id = "abaPremiumModal";

    overlay.innerHTML = `
      <div class="aba-modal-box">

        <button class="aba-close-btn" id="abaPremiumClose">
          ×
        </button>

        <div class="aba-modal-header">
          <div class="aba-crown">👑</div>

          <h2>Unlock Premium Courses</h2>

          <p>
            Course 2 – Course 13 ကို အသုံးပြုရန် Premium Plan ရွေးချယ်ပါ။
          </p>
        </div>

        <div class="aba-plan-grid">

          <button
            type="button"
            class="aba-plan-card selected"
            data-plan="monthly"
          >
            <div class="aba-plan-title">
              Monthly
            </div>

            <div class="aba-plan-price">
              30,000 Ks
            </div>

            <div class="aba-plan-duration">
              30 Days
            </div>
          </button>

          <button
            type="button"
            class="aba-plan-card"
            data-plan="yearly"
          >
            <div class="aba-plan-title">
              Yearly
            </div>

            <div class="aba-plan-price">
              250,000 Ks
            </div>

            <div class="aba-plan-duration">
              365 Days
            </div>

            <div class="aba-save">
              SAVE
            </div>
          </button>

        </div>

        <div class="aba-payment-method">

          <h3>Payment Method</h3>

          <div class="aba-payment-buttons">

            <button
              type="button"
              class="aba-payment-btn selected"
              data-method="kpay"
            >
              📱 KPay
            </button>

            <button
              type="button"
              class="aba-payment-btn"
              data-method="bank"
            >
              🏦 Bank Transfer
            </button>

          </div>

        </div>

        <div
          id="abaPaymentInfo"
          class="aba-payment-info"
        ></div>

        <div class="aba-form">

          <label>
            Transaction Reference
          </label>

          <input
            type="text"
            id="abaTransactionRef"
            placeholder="ဥပမာ - KPAY123456"
          />

          <label>
            Payment Screenshot
          </label>

          <input
            type="file"
            id="abaPaymentScreenshot"
            accept="image/*"
          />

          <div class="aba-file-note">
            Payment screenshot ကို Admin စစ်ဆေးရန် တင်ပါ။
          </div>

          <button
            type="button"
            id="abaSubmitPayment"
            class="aba-submit-btn"
          >
            Submit Payment
          </button>

        </div>

        <div
          id="abaPaymentMessage"
          class="aba-message"
        ></div>

      </div>
    `;

    document.body.appendChild(overlay);

    document
      .getElementById("abaPremiumClose")
      .addEventListener("click", closePremiumModal);

    overlay.addEventListener("click", function (event) {
      if (event.target === overlay) {
        closePremiumModal();
      }
    });

    document
      .querySelectorAll(".aba-plan-card")
      .forEach(function (button) {
        button.addEventListener("click", function () {
          document
            .querySelectorAll(".aba-plan-card")
            .forEach(function (item) {
              item.classList.remove("selected");
            });

          button.classList.add("selected");

          updatePaymentInfo();
        });
      });

    document
      .querySelectorAll(".aba-payment-btn")
      .forEach(function (button) {
        button.addEventListener("click", function () {
          document
            .querySelectorAll(".aba-payment-btn")
            .forEach(function (item) {
              item.classList.remove("selected");
            });

          button.classList.add("selected");

          updatePaymentInfo();
        });
      });

    document
      .getElementById("abaSubmitPayment")
      .addEventListener("click", submitPayment);

    updatePaymentInfo();
  }

  function getSelectedPlan() {
    const selected = document.querySelector(
      ".aba-plan-card.selected"
    );

    return selected
      ? selected.dataset.plan
      : "monthly";
  }

  function getSelectedPaymentMethod() {
    const selected = document.querySelector(
      ".aba-payment-btn.selected"
    );

    return selected
      ? selected.dataset.method
      : "kpay";
  }

  function updatePaymentInfo() {
    const container =
      document.getElementById("abaPaymentInfo");

    if (!container) return;

    const method = getSelectedPaymentMethod();
    const plan = getSelectedPlan();

    const paymentSettings =
      ensureState().paymentSettings || DEFAULT_PAYMENT;

    const selectedPlan = PLANS[plan];

    let html = `
      <div class="aba-payment-plan">
        <strong>${selectedPlan.name} Plan</strong>
        <span>${formatMoney(selectedPlan.price)}</span>
      </div>
    `;

    if (method === "kpay") {
      html += `
        <div class="aba-payment-row">
          <span>KPay Number</span>
          <strong>
            ${escapeHTML(paymentSettings.kpay.number)}
          </strong>
        </div>

        <div class="aba-payment-row">
          <span>Account Name</span>
          <strong>
            ${escapeHTML(paymentSettings.kpay.name)}
          </strong>
        </div>
      `;
    }

    if (method === "bank") {
      html += `
        <div class="aba-payment-row">
          <span>Bank</span>
          <strong>
            ${escapeHTML(paymentSettings.bank.bankName)}
          </strong>
        </div>

        <div class="aba-payment-row">
          <span>Account Number</span>
          <strong>
            ${escapeHTML(paymentSettings.bank.accountNumber)}
          </strong>
        </div>

        <div class="aba-payment-row">
          <span>Account Name</span>
          <strong>
            ${escapeHTML(paymentSettings.bank.accountName)}
          </strong>
        </div>
      `;
    }

    container.innerHTML = html;
  }

  function openPremiumModal(courseIndex) {
    createPremiumModal();

    const modal = document.getElementById("abaPremiumModal");

    if (!modal) return;

    modal.classList.add("show");

    modal.dataset.courseIndex = courseIndex;

    const state = ensureState();

    const message =
      document.getElementById("abaPaymentMessage");

    if (state.premium.status === "pending") {
      message.innerHTML = `
        <div class="aba-pending-message">
          ⏳ Your payment is pending Admin approval.
        </div>
      `;
    } else {
      message.innerHTML = "";
    }
  }

  function closePremiumModal() {
    const modal =
      document.getElementById("abaPremiumModal");

    if (modal) {
      modal.classList.remove("show");
    }
  }

  /* =========================================================
     PAYMENT SUBMISSION
     ========================================================= */

  function submitPayment() {
    const plan = getSelectedPlan();

    const method = getSelectedPaymentMethod();

    const refInput =
      document.getElementById("abaTransactionRef");

    const screenshotInput =
      document.getElementById("abaPaymentScreenshot");

    const message =
      document.getElementById("abaPaymentMessage");

    const transactionRef =
      refInput.value.trim();

    if (!transactionRef) {
      message.innerHTML = `
        <div class="aba-error-message">
          ❌ Transaction Reference ထည့်ပေးပါ။
        </div>
      `;

      return;
    }

    if (!screenshotInput.files.length) {
      message.innerHTML = `
        <div class="aba-error-message">
          ❌ Payment Screenshot တင်ပေးပါ။
        </div>
      `;

      return;
    }

    const screenshot =
      screenshotInput.files[0];

    updateState(function (state) {
      state.premium.status = "pending";
      state.premium.plan = plan;
      state.premium.paymentMethod = method;
      state.premium.transactionRef = transactionRef;
      state.premium.paymentScreenshot = screenshot.name;
      state.premium.submittedAt = Date.now();
    });

    message.innerHTML = `
      <div class="aba-success-message">
        ✅ Payment တင်ပြီးပါပြီ။<br>
        Admin Approval ကို စောင့်ပေးပါ။
      </div>
    `;

    updateDashboard();

    setTimeout(function () {
      closePremiumModal();

      showToast(
        "Payment Pending — Admin Approval ကို စောင့်ပါ။"
      );
    }, 1500);
  }

  /* =========================================================
     ADMIN PANEL
     ========================================================= */

  function createAdminPanel() {
    if (document.getElementById("abaAdminPanel")) {
      return;
    }

    const panel = document.createElement("div");

    panel.id = "abaAdminPanel";

    panel.innerHTML = `
      <div class="aba-admin-overlay">

        <div class="aba-admin-box">

          <button
            type="button"
            class="aba-close-btn"
            id="abaAdminClose"
          >
            ×
          </button>

          <div class="aba-admin-header">

            <div class="aba-admin-icon">
              👨‍💼
            </div>

            <div>
              <h2>
                Premium Admin Dashboard
              </h2>

              <p>
                Payment Approval Management
              </p>
            </div>

          </div>

          <div
            id="abaAdminStats"
            class="aba-admin-stats"
          ></div>

          <div
            id="abaAdminPayments"
            class="aba-admin-payments"
          ></div>

          <div class="aba-admin-actions">

            <button
              type="button"
              id="abaStudentMode"
              class="aba-secondary-btn"
            >
              Student Mode
            </button>

            <button
              type="button"
              id="abaResetPremium"
              class="aba-danger-btn"
            >
              Reset Premium
            </button>

          </div>

        </div>

      </div>
    `;

    document.body.appendChild(panel);

    document
      .getElementById("abaAdminClose")
      .addEventListener("click", closeAdminPanel);

    document
      .getElementById("abaStudentMode")
      .addEventListener("click", function () {
        setStudentMode();
      });

    document
      .getElementById("abaResetPremium")
      .addEventListener("click", function () {
        resetPremium();
      });

    renderAdminPanel();
  }

  function openAdminPanel() {
    createAdminPanel();

    const panel =
      document.getElementById("abaAdminPanel");

    panel.classList.add("show");

    renderAdminPanel();
  }

  function closeAdminPanel() {
    const panel =
      document.getElementById("abaAdminPanel");

    if (panel) {
      panel.classList.remove("show");
    }
  }

  function renderAdminPanel() {
    const state = ensureState();

    const stats =
      document.getElementById("abaAdminStats");

    const payments =
      document.getElementById("abaAdminPayments");

    if (!stats || !payments) {
      return;
    }

    const premium = state.premium;

    let statusText = "Free";

    if (premium.status === "pending") {
      statusText = "Pending";
    }

    if (premium.status === "active") {
      statusText = "Active";
    }

    if (premium.status === "rejected") {
      statusText = "Rejected";
    }

    if (premium.status === "expired") {
      statusText = "Expired";
    }

    stats.innerHTML = `
      <div class="aba-stat-card">
        <span>Status</span>
        <strong>${statusText}</strong>
      </div>

      <div class="aba-stat-card">
        <span>Plan</span>
        <strong>
          ${premium.plan
            ? escapeHTML(PLANS[premium.plan]?.name || premium.plan)
            : "-"}
        </strong>
      </div>

      <div class="aba-stat-card">
        <span>Payment</span>
        <strong>
          ${premium.paymentMethod
            ? escapeHTML(premium.paymentMethod)
            : "-"}
        </strong>
      </div>

      <div class="aba-stat-card">
        <span>Expiry</span>
        <strong>
          ${formatDate(premium.expiryAt)}
        </strong>
      </div>
    `;

    if (premium.status !== "pending") {
      payments.innerHTML = `
        <div class="aba-empty-admin">
          <div class="aba-empty-icon">
            📭
          </div>

          <h3>
            No Pending Payment
          </h3>

          <p>
            Student က Payment တင်လိုက်တဲ့အခါ ဒီနေရာမှာ ပြပါမယ်။
          </p>
        </div>
      `;

      return;
    }

    const plan =
      PLANS[premium.plan] || PLANS.monthly;

    payments.innerHTML = `
      <div class="aba-payment-review">

        <div class="aba-review-title">
          <span>🔔 New Payment Request</span>

          <span class="aba-pending-tag">
            PENDING
          </span>
        </div>

        <div class="aba-review-grid">

          <div class="aba-review-item">
            <span>Plan</span>
            <strong>
              ${escapeHTML(plan.name)}
            </strong>
          </div>

          <div class="aba-review-item">
            <span>Amount</span>
            <strong>
              ${formatMoney(plan.price)}
            </strong>
          </div>

          <div class="aba-review-item">
            <span>Payment Method</span>
            <strong>
              ${escapeHTML(premium.paymentMethod)}
            </strong>
          </div>

          <div class="aba-review-item">
            <span>Transaction Ref</span>
            <strong>
              ${escapeHTML(premium.transactionRef)}
            </strong>
          </div>

          <div class="aba-review-item">
            <span>Screenshot</span>
            <strong>
              ${escapeHTML(premium.paymentScreenshot)}
            </strong>
          </div>

          <div class="aba-review-item">
            <span>Submitted</span>
            <strong>
              ${formatDate(premium.submittedAt)}
            </strong>
          </div>

        </div>

        <div class="aba-review-warning">
          ⚠️ Payment ကို အမှန်တကယ် စစ်ဆေးပြီးမှ Approve နှိပ်ပါ။
        </div>

        <div class="aba-review-buttons">

          <button
            type="button"
            class="aba-approve-btn"
            id="abaApprovePayment"
          >
            ✓ Approve Payment
          </button>

          <button
            type="button"
            class="aba-reject-btn"
            id="abaRejectPayment"
          >
            ✕ Reject
          </button>

        </div>

      </div>
    `;

    document
      .getElementById("abaApprovePayment")
      .addEventListener("click", approvePayment);

    document
      .getElementById("abaRejectPayment")
      .addEventListener("click", rejectPayment);
  }

  /* =========================================================
     ADMIN APPROVE
     ========================================================= */

  function approvePayment() {
    const state = ensureState();

    if (state.premium.status !== "pending") {
      showToast("Pending Payment မရှိပါ။");
      return;
    }

    const plan =
      PLANS[state.premium.plan] || PLANS.monthly;

    const startAt = Date.now();

    const expiryAt =
      startAt +
      plan.days *
        24 *
        60 *
        60 *
        1000;

    updateState(function (newState) {
      newState.premium.status = "active";
      newState.premium.startAt = startAt;
      newState.premium.expiryAt = expiryAt;
    });

    renderAdminPanel();

    updateCourseCards();

    updateLessonLock();

    updateDashboard();

    showToast(
      "✅ Payment Approved — Premium Unlocked!"
    );
  }

  /* =========================================================
     ADMIN REJECT
     ========================================================= */

  function rejectPayment() {
    const confirmReject =
      window.confirm(
        "ဒီ Payment ကို Reject လုပ်မှာ သေချာပါသလား?"
      );

    if (!confirmReject) {
      return;
    }

    updateState(function (state) {
      state.premium.status = "rejected";
    });

    renderAdminPanel();

    updateCourseCards();

    updateDashboard();

    showToast(
      "Payment Rejected"
    );
  }

  /* =========================================================
     ADMIN / STUDENT MODE
     ========================================================= */

  function setAdminMode() {
    updateState(function (state) {
      state.account.role = "admin";
    });

    showToast(
      "Admin Mode Activated"
    );

    openAdminPanel();
  }

  function setStudentMode() {
    updateState(function (state) {
      state.account.role = "student";
    });

    closeAdminPanel();

    showToast(
      "Student Mode"
    );

    updateDashboard();
  }

  function isAdmin() {
    return ensureState().account.role === "admin";
  }

  /* =========================================================
     RESET PREMIUM
     ========================================================= */

  function resetPremium() {
    const confirmReset =
      window.confirm(
        "Premium status ကို Reset လုပ်မှာ သေချာပါသလား?"
      );

    if (!confirmReset) {
      return;
    }

    updateState(function (state) {
      state.premium = {
        status: "free",
        plan: null,
        startAt: null,
        expiryAt: null,
        paymentMethod: null,
        transactionRef: "",
        paymentScreenshot: "",
        submittedAt: null
      };
    });

    renderAdminPanel();

    updateCourseCards();

    updateLessonLock();

    updateDashboard();

    showToast(
      "Premium Reset ပြီးပါပြီ။"
    );
  }

  /* =========================================================
     LESSON LOCK
     ========================================================= */

  function updateLessonLock() {
    const lessonContent =
      document.getElementById("lessonContent");

    if (!lessonContent) {
      return;
    }

    /*
     * Existing lesson system may expose current course.
     */

    let currentCourseIndex = null;

    if (
      window.AungAcademy &&
      window.AungAcademy.state
    ) {
      const academyState =
        window.AungAcademy.state;

      if (
        typeof academyState.currentCourseIndex ===
        "number"
      ) {
        currentCourseIndex =
          academyState.currentCourseIndex;
      }

      if (
        typeof academyState.currentCourse ===
        "number"
      ) {
        currentCourseIndex =
          academyState.currentCourse;
      }
    }

    if (
      currentCourseIndex !== null &&
      isCourseLocked(currentCourseIndex)
    ) {
      lessonContent.innerHTML = `
        <div class="aba-lesson-lock">

          <div class="aba-big-lock">
            🔒
          </div>

          <h2>
            Premium Course
          </h2>

          <p>
            ဒီ Course ကို လေ့လာရန် Premium Membership လိုအပ်ပါတယ်။
          </p>

          <button
            type="button"
            class="aba-unlock-large"
            onclick="AungPremium.open()"
          >
            👑 Unlock Premium
          </button>

        </div>
      `;
    }
  }

  /* =========================================================
     DASHBOARD PREMIUM CARD
     ========================================================= */

  function updateDashboard() {
    let dashboard =
      document.getElementById("dashboard");

    if (!dashboard) {
      return;
    }

    let card =
      document.getElementById(
        "abaDashboardPremiumCard"
      );

    if (!card) {
      card = document.createElement("div");

      card.id =
        "abaDashboardPremiumCard";

      dashboard.prepend(card);
    }

    const state = ensureState();

    let status = "FREE";
    let statusClass = "free";

    if (state.premium.status === "pending") {
      status = "PAYMENT PENDING";
      statusClass = "pending";
    }

    if (isPremiumActive()) {
      status = "PREMIUM ACTIVE";
      statusClass = "active";
    }

    if (state.premium.status === "rejected") {
      status = "PAYMENT REJECTED";
      statusClass = "rejected";
    }

    if (state.premium.status === "expired") {
      status = "PREMIUM EXPIRED";
      statusClass = "expired";
    }

    card.className =
      "aba-dashboard-premium-card";

    card.innerHTML = `
      <div class="aba-dashboard-premium-icon">
        👑
      </div>

      <div class="aba-dashboard-premium-info">

        <div class="aba-dashboard-premium-label">
          Premium Membership
        </div>

        <div class="aba-dashboard-premium-status ${statusClass}">
          ${status}
        </div>

        ${
          state.premium.expiryAt
            ? `
              <div class="aba-dashboard-premium-expiry">
                Expiry: ${formatDate(
                  state.premium.expiryAt
                )}
              </div>
            `
            : ""
        }

      </div>

      <div class="aba-dashboard-premium-action">

        ${
          isAdmin()
            ? `
              <button
                type="button"
                onclick="AungPremium.status()"
                class="aba-admin-open-btn"
              >
                👨‍💼 Admin Dashboard
              </button>
            `
            : state.premium.status === "pending"
              ? `
                <button
                  type="button"
                  onclick="AungPremium.status()"
                  class="aba-pending-open-btn"
                >
                  ⏳ Payment Status
                </button>
              `
              : isPremiumActive()
                ? `
                  <span class="aba-active-label">
                    ✓ All Courses Unlocked
                  </span>
                `
                : `
                  <button
                    type="button"
                    onclick="AungPremium.open()"
                    class="aba-upgrade-btn"
                  >
                    👑 Upgrade Premium
                  </button>
                `
        }

      </div>
    `;
  }

  /* =========================================================
     TOAST
     ========================================================= */

  function showToast(message) {
    let toast =
      document.getElementById(
        "abaPremiumToast"
      );

    if (!toast) {
      toast = document.createElement("div");

      toast.id =
        "abaPremiumToast";

      document.body.appendChild(toast);
    }

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(
      window.__abaToastTimer
    );

    window.__abaToastTimer =
      setTimeout(function () {
        toast.classList.remove("show");
      }, 3500);
  }

  /* =========================================================
     CSS
     ========================================================= */

  function injectCSS() {
    if (
      document.getElementById(
        "abaPremiumCSS"
      )
    ) {
      return;
    }

    const style =
      document.createElement("style");

    style.id =
      "abaPremiumCSS";

    style.textContent = `

      /* ================================
         BADGES
         ================================ */

      .aba-premium-badge {
        position: absolute;
        top: 12px;
        right: 12px;
        z-index: 20;

        padding: 7px 12px;

        border-radius: 999px;

        font-size: 12px;
        font-weight: 800;

        box-shadow:
          0 4px 12px rgba(0,0,0,.12);
      }

      .aba-premium-badge.free {
        background: #e8f8ee;
        color: #198754;
      }

      .aba-premium-badge.premium {
        background: #fff3cd;
        color: #946200;
      }

      .aba-premium-badge.active {
        background: #e8f8ee;
        color: #198754;
      }

      .aba-premium-locked {
        opacity: .9 !important;
        cursor: pointer !important;
      }


      /* ================================
         PREMIUM MODAL
         ================================ */

      #abaPremiumModal {
        position: fixed;
        inset: 0;

        background:
          rgba(0,0,0,.65);

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 20px;

        z-index: 999999;

        opacity: 0;
        visibility: hidden;

        transition: .25s;
      }

      #abaPremiumModal.show {
        opacity: 1;
        visibility: visible;
      }

      .aba-modal-box {
        width: 100%;
        max-width: 620px;

        max-height: 92vh;
        overflow-y: auto;

        background: white;

        border-radius: 20px;

        padding: 28px;

        position: relative;

        box-shadow:
          0 25px 80px rgba(0,0,0,.25);
      }

      .aba-close-btn {
        position: absolute;
        right: 15px;
        top: 12px;

        width: 38px;
        height: 38px;

        border: none;

        border-radius: 50%;

        background: #f1f3f5;

        font-size: 25px;

        cursor: pointer;
      }

      .aba-modal-header {
        text-align: center;
        padding: 10px 20px 20px;
      }

      .aba-crown {
        font-size: 45px;
        margin-bottom: 5px;
      }

      .aba-modal-header h2 {
        margin: 0 0 8px;
        font-size: 25px;
      }

      .aba-modal-header p {
        margin: 0;
        color: #666;
        line-height: 1.6;
      }


      /* ================================
         PLANS
         ================================ */

      .aba-plan-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 14px;

        margin: 10px 0 22px;
      }

      .aba-plan-card {
        position: relative;

        border: 2px solid #ddd;

        background: white;

        border-radius: 15px;

        padding: 18px;

        cursor: pointer;

        text-align: left;

        transition: .2s;
      }

      .aba-plan-card.selected {
        border-color: #6c5ce7;

        background: #f7f5ff;

        box-shadow:
          0 6px 20px rgba(108,92,231,.12);
      }

      .aba-plan-title {
        font-weight: 800;
        font-size: 17px;
      }

      .aba-plan-price {
        font-size: 25px;
        font-weight: 900;

        margin-top: 8px;
      }

      .aba-plan-duration {
        color: #777;
        margin-top: 3px;
      }

      .aba-save {
        position: absolute;
        right: 10px;
        top: 10px;

        font-size: 10px;
        font-weight: 800;

        padding: 4px 7px;

        border-radius: 5px;

        background: #198754;
        color: white;
      }


      /* ================================
         PAYMENT METHOD
         ================================ */

      .aba-payment-method h3 {
        margin: 0 0 10px;
        font-size: 16px;
      }

      .aba-payment-buttons {
        display: grid;
        grid-template-columns: 1fr 1fr;

        gap: 10px;
      }

      .aba-payment-btn {
        border: 2px solid #ddd;

        background: white;

        padding: 12px;

        border-radius: 10px;

        font-weight: 700;

        cursor: pointer;
      }

      .aba-payment-btn.selected {
        border-color: #6c5ce7;
        background: #f7f5ff;
      }


      /* ================================
         PAYMENT INFO
         ================================ */

      .aba-payment-info {
        margin: 18px 0;

        background: #f7f8fa;

        border-radius: 14px;

        padding: 16px;
      }

      .aba-payment-plan {
        display: flex;
        justify-content: space-between;

        padding-bottom: 12px;
        margin-bottom: 12px;

        border-bottom: 1px solid #ddd;
      }

      .aba-payment-row {
        display: flex;
        justify-content: space-between;

        gap: 15px;

        padding: 7px 0;
      }

      .aba-payment-row span {
        color: #777;
      }

      .aba-payment-row strong {
        text-align: right;
      }


      /* ================================
         FORM
         ================================ */

      .aba-form label {
        display: block;

        margin: 14px 0 6px;

        font-size: 14px;

        font-weight: 700;
      }

      .aba-form input {
        width: 100%;

        padding: 13px;

        border: 1px solid #d9d9d9;

        border-radius: 9px;

        font-size: 15px;

        outline: none;
      }

      .aba-form input:focus {
        border-color: #6c5ce7;
      }

      .aba-file-note {
        font-size: 12px;
        color: #777;

        margin-top: 5px;
      }

      .aba-submit-btn {
        width: 100%;

        margin-top: 20px;

        padding: 14px;

        border: none;

        border-radius: 10px;

        background: #6c5ce7;

        color: white;

        font-weight: 800;

        font-size: 16px;

        cursor: pointer;
      }

      .aba-submit-btn:hover {
        opacity: .9;
      }

      .aba-message {
        margin-top: 15px;
        text-align: center;
      }

      .aba-success-message {
        background: #e8f8ee;
        color: #198754;

        padding: 12px;
        border-radius: 10px;

        line-height: 1.7;
      }

      .aba-error-message {
        background: #fdecec;
        color: #c62828;

        padding: 12px;
        border-radius: 10px;
      }

      .aba-pending-message {
        background: #fff8df;
        color: #946200;

        padding: 12px;
        border-radius: 10px;
      }


      /* ================================
         ADMIN PANEL
         ================================ */

      #abaAdminPanel {
        position: fixed;
        inset: 0;

        z-index: 1000000;

        opacity: 0;
        visibility: hidden;

        transition: .25s;
      }

      #abaAdminPanel.show {
        opacity: 1;
        visibility: visible;
      }

      .aba-admin-overlay {
        position: absolute;
        inset: 0;

        background: rgba(0,0,0,.68);

        display: flex;
        justify-content: center;
        align-items: center;

        padding: 20px;
      }

      .aba-admin-box {
        width: 100%;
        max-width: 900px;

        max-height: 92vh;

        overflow-y: auto;

        background: white;

        border-radius: 20px;

        padding: 28px;

        position: relative;
      }

      .aba-admin-header {
        display: flex;

        align-items: center;

        gap: 15px;

        margin-bottom: 20px;
      }

      .aba-admin-icon {
        width: 55px;
        height: 55px;

        border-radius: 15px;

        display: flex;
        align-items: center;
        justify-content: center;

        background: #f0edff;

        font-size: 27px;
      }

      .aba-admin-header h2 {
        margin: 0 0 4px;
      }

      .aba-admin-header p {
        margin: 0;
        color: #777;
      }


      /* ================================
         ADMIN STATS
         ================================ */

      .aba-admin-stats {
        display: grid;

        grid-template-columns:
          repeat(4, 1fr);

        gap: 12px;

        margin-bottom: 20px;
      }

      .aba-stat-card {
        padding: 15px;

        background: #f7f8fa;

        border-radius: 12px;
      }

      .aba-stat-card span {
        display: block;

        color: #777;

        font-size: 12px;

        margin-bottom: 5px;
      }

      .aba-stat-card strong {
        font-size: 15px;
      }


      /* ================================
         REVIEW
         ================================ */

      .aba-payment-review {
        border: 1px solid #e2e2e2;

        border-radius: 15px;

        padding: 18px;
      }

      .aba-review-title {
        display: flex;

        justify-content: space-between;

        align-items: center;

        font-weight: 800;

        margin-bottom: 18px;
      }

      .aba-pending-tag {
        background: #fff1bd;

        color: #8a6500;

        padding: 5px 9px;

        border-radius: 999px;

        font-size: 11px;
      }

      .aba-review-grid {
        display: grid;

        grid-template-columns:
          repeat(2, 1fr);

        gap: 12px;
      }

      .aba-review-item {
        background: #f7f8fa;

        border-radius: 10px;

        padding: 12px;
      }

      .aba-review-item span {
        display: block;

        color: #777;

        font-size: 12px;

        margin-bottom: 5px;
      }

      .aba-review-item strong {
        word-break: break-word;
      }

      .aba-review-warning {
        margin-top: 15px;

        background: #fff8df;

        color: #806000;

        padding: 12px;

        border-radius: 10px;

        font-size: 13px;
      }

      .aba-review-buttons {
        display: grid;

        grid-template-columns: 1fr 1fr;

        gap: 10px;

        margin-top: 15px;
      }

      .aba-approve-btn,
      .aba-reject-btn {
        border: none;

        padding: 13px;

        border-radius: 10px;

        font-weight: 800;

        cursor: pointer;
      }

      .aba-approve-btn {
        background: #198754;
        color: white;
      }

      .aba-reject-btn {
        background: #dc3545;
        color: white;
      }


      /* ================================
         ADMIN ACTIONS
         ================================ */

      .aba-admin-actions {
        display: flex;

        justify-content: flex-end;

        gap: 10px;

        margin-top: 20px;
      }

      .aba-secondary-btn,
      .aba-danger-btn {
        border: none;

        padding: 11px 16px;

        border-radius: 9px;

        font-weight: 700;

        cursor: pointer;
      }

      .aba-secondary-btn {
        background: #eef0f3;
      }

      .aba-danger-btn {
        background: #fdecec;
        color: #c62828;
      }

      .aba-empty-admin {
        text-align: center;

        padding: 45px 20px;

        background: #f7f8fa;

        border-radius: 15px;
      }

      .aba-empty-icon {
        font-size: 40px;

        margin-bottom: 10px;
      }

      .aba-empty-admin h3 {
        margin: 0 0 8px;
      }

      .aba-empty-admin p {
        margin: 0;

        color: #777;
      }


      /* ================================
         DASHBOARD CARD
         ================================ */

      .aba-dashboard-premium-card {
        display: flex;

        align-items: center;

        gap: 15px;

        padding: 18px;

        margin-bottom: 18px;

        background: white;

        border: 1px solid #e5e5e5;

        border-radius: 15px;

        box-shadow:
          0 5px 18px rgba(0,0,0,.05);
      }

      .aba-dashboard-premium-icon {
        width: 52px;
        height: 52px;

        display: flex;

        align-items: center;
        justify-content: center;

        background: #fff3cd;

        border-radius: 14px;

        font-size: 25px;
      }

      .aba-dashboard-premium-info {
        flex: 1;
      }

      .aba-dashboard-premium-label {
        font-weight: 800;
      }

      .aba-dashboard-premium-status {
        margin-top: 3px;

        font-size: 13px;

        font-weight: 800;
      }

      .aba-dashboard-premium-status.free {
        color: #777;
      }

      .aba-dashboard-premium-status.pending {
        color: #946200;
      }

      .aba-dashboard-premium-status.active {
        color: #198754;
      }

      .aba-dashboard-premium-status.rejected,
      .aba-dashboard-premium-status.expired {
        color: #dc3545;
      }

      .aba-dashboard-premium-expiry {
        margin-top: 3px;

        color: #777;

        font-size: 12px;
      }

      .aba-upgrade-btn,
      .aba-admin-open-btn,
      .aba-pending-open-btn {
        border: none;

        padding: 10px 14px;

        border-radius: 9px;

        cursor: pointer;

        font-weight: 800;
      }

      .aba-upgrade-btn {
        background: #6c5ce7;
        color: white;
      }

      .aba-admin-open-btn {
        background: #222;
        color: white;
      }

      .aba-pending-open-btn {
        background: #fff3cd;
        color: #7a5a00;
      }

      .aba-active-label {
        color: #198754;

        font-weight: 800;

        font-size: 13px;
      }


      /* ================================
         LESSON LOCK
         ================================ */

      .aba-lesson-lock {
        min-height: 400px;

        display: flex;

        flex-direction: column;

        align-items: center;

        justify-content: center;

        text-align: center;

        padding: 30px;
      }

      .aba-big-lock {
        font-size: 65px;

        margin-bottom: 15px;
      }

      .aba-lesson-lock h2 {
        margin: 0 0 8px;
      }

      .aba-lesson-lock p {
        color: #777;

        max-width: 500px;

        line-height: 1.7;
      }

      .aba-unlock-large {
        margin-top: 15px;

        border: none;

        padding: 13px 22px;

        border-radius: 10px;

        background: #6c5ce7;

        color: white;

        font-weight: 800;

        cursor: pointer;
      }


      /* ================================
         TOAST
         ================================ */

      #abaPremiumToast {
        position: fixed;

        left: 50%;

        bottom: 25px;

        transform:
          translate(-50%, 30px);

        opacity: 0;

        visibility: hidden;

        z-index: 2000000;

        background: #222;

        color: white;

        padding: 13px 18px;

        border-radius: 10px;

        box-shadow:
          0 10px 30px rgba(0,0,0,.2);

        transition: .25s;

        max-width: 90%;

        text-align: center;

        font-size: 14px;
      }

      #abaPremiumToast.show {
        opacity: 1;

        visibility: visible;

        transform:
          translate(-50%, 0);
      }


      /* ================================
         MOBILE
         ================================ */

      @media (max-width: 700px) {

        .aba-modal-box,
        .aba-admin-box {
          padding: 20px;

          border-radius: 16px;

          max-height: 94vh;
        }

        .aba-plan-grid {
          grid-template-columns: 1fr;
        }

        .aba-payment-buttons {
          grid-template-columns: 1fr;
        }

        .aba-admin-stats {
          grid-template-columns:
            repeat(2, 1fr);
        }

        .aba-review-grid {
          grid-template-columns: 1fr;
        }

        .aba-review-buttons {
          grid-template-columns: 1fr;
        }

        .aba-admin-actions {
          flex-direction: column;
        }

        .aba-secondary-btn,
        .aba-danger-btn {
          width: 100%;
        }

        .aba-dashboard-premium-card {
          align-items: flex-start;

          flex-wrap: wrap;
        }

        .aba-dashboard-premium-action {
          width: 100%;
        }

        .aba-dashboard-premium-action button {
          width: 100%;
        }

        .aba-payment-row {
          flex-direction: column;

          gap: 3px;
        }

        .aba-payment-row strong {
          text-align: left;
        }

      }

    `;

    document.head.appendChild(style);
  }

  /* =========================================================
     ADMIN BUTTON
     Adds Admin Dashboard button to Settings page area
     ========================================================= */

  function addAdminAccessButton() {
    if (!isAdmin()) {
      return;
    }

    if (
      document.getElementById(
        "abaAdminAccessButton"
      )
    ) {
      return;
    }

    const button =
      document.createElement("button");

    button.id =
      "abaAdminAccessButton";

    button.type = "button";

    button.innerHTML =
      "👨‍💼 Premium Admin Dashboard";

    button.style.cssText = `
      position: fixed;
      right: 18px;
      bottom: 18px;
      z-index: 99990;

      border: none;
      border-radius: 12px;

      padding: 12px 16px;

      background: #222;
      color: white;

      font-weight: 800;

      cursor: pointer;

      box-shadow:
        0 8px 25px rgba(0,0,0,.2);
    `;

    button.addEventListener(
      "click",
      openAdminPanel
    );

    document.body.appendChild(button);
  }

  /* =========================================================
     INITIALIZE
     ========================================================= */

  function refresh() {
    ensureState();

    updateCourseCards();

    updateLessonLock();

    updateDashboard();

    addAdminAccessButton();
  }

  function init() {
    injectCSS();

    createPremiumModal();

    createAdminPanel();

    refresh();

    setTimeout(refresh, 500);

    setTimeout(refresh, 1500);

    setTimeout(refresh, 3000);
  }

  /* =========================================================
     OBSERVER
     Helps when existing app re-renders Courses
     ========================================================= */

  let observerTimer = null;

  function startObserver() {
    const observer =
      new MutationObserver(function () {
        clearTimeout(observerTimer);

        observerTimer =
          setTimeout(function () {
            refresh();
          }, 250);
      });

    observer.observe(
      document.body,
      {
        childList: true,
        subtree: true
      }
    );
  }

  /* =========================================================
     PUBLIC API
     ========================================================= */

  window.AungPremium = {

    open: function () {
      openPremiumModal(1);
    },

    status: function () {
      if (isAdmin()) {
        openAdminPanel();
      } else {
        openPremiumModal(1);
      }
    },

    refresh: refresh,

    isActive: isPremiumActive,

    getStatus: getPremiumStatus,

    setAdmin: setAdminMode,

    setStudent: setStudentMode,

    approve: approvePayment,

    reject: rejectPayment,

    resetPremium: resetPremium,

    openAdmin: openAdminPanel
  };

  /* =========================================================
     START
     ========================================================= */

  if (
    document.readyState ===
    "loading"
  ) {
    document.addEventListener(
      "DOMContentLoaded",
      function () {
        init();
        startObserver();
      }
    );
  } else {
    init();
    startObserver();
  }

})();
