/* =========================================================
   AUNG BUSINESS ACADEMY V8
   PREMIUM MEMBERSHIP SYSTEM
   ========================================================= */

(function () {
  "use strict";

  const STORAGE_KEY = "aungBusinessAcademyV8";

  const FREE_COURSE_ID = "sales";

  const PLANS = {
    monthly: {
      name: "Monthly Premium",
      price: 30000,
      days: 30
    },
    yearly: {
      name: "Yearly Premium",
      price: 250000,
      days: 365
    }
  };

  /* =========================================================
     DEFAULT PAYMENT SETTINGS
     Change these to your real payment information
     ========================================================= */

  const DEFAULT_PAYMENT = {
    kpayNumber: "09XXXXXXXXX",
    kpayName: "Aung Business Academy",

    bankName: "KBZ Bank",
    bankAccount: "XXXXXXXXXX",
    bankAccountName: "Aung Business Academy",

    monthlyPrice: 30000,
    yearlyPrice: 250000
  };

  /* =========================================================
     STATE
     ========================================================= */

  function getState() {
    try {
      const saved = JSON.parse(
        localStorage.getItem(STORAGE_KEY)
      );

      if (!saved) return null;

      if (!saved.premium) {
        saved.premium = {
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

      if (!saved.account) {
        saved.account = {
          role: "student"
        };
      }

      if (!saved.paymentSettings) {
        saved.paymentSettings = DEFAULT_PAYMENT;
      }

      return saved;

    } catch (error) {
      console.error(
        "Premium state error:",
        error
      );

      return null;
    }
  }

  function saveState(state) {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(state)
      );
    } catch (error) {
      console.error(
        "Premium save error:",
        error
      );
    }
  }

  /* =========================================================
     PREMIUM STATUS
     ========================================================= */

  function isPremiumActive() {
    const state = getState();

    if (!state || !state.premium) {
      return false;
    }

    if (
      state.premium.status !== "active"
    ) {
      return false;
    }

    if (!state.premium.expiryAt) {
      return false;
    }

    const expiry =
      new Date(
        state.premium.expiryAt
      ).getTime();

    if (
      Number.isNaN(expiry)
    ) {
      return false;
    }

    if (
      Date.now() >= expiry
    ) {
      state.premium.status =
        "expired";

      saveState(state);

      return false;
    }

    return true;
  }

  function isAdmin() {
    const state = getState();

    return (
      state &&
      state.account &&
      state.account.role === "admin"
    );
  }

  function isCourseFree(courseId) {
    return courseId === FREE_COURSE_ID;
  }

  function isCourseUnlocked(courseId) {
    if (
      isCourseFree(courseId)
    ) {
      return true;
    }

    return isPremiumActive();
  }

  /* =========================================================
     HELPERS
     ========================================================= */

  function escapeHTML(value) {
    if (
      value === undefined ||
      value === null
    ) {
      return "";
    }

    return String(value)
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

  function money(value) {
    return Number(value || 0)
      .toLocaleString(
        "en-US"
      ) + " Ks";
  }

  function formatDate(value) {
    if (!value) {
      return "-";
    }

    const date =
      new Date(value);

    if (
      Number.isNaN(
        date.getTime()
      )
    ) {
      return "-";
    }

    return date.toLocaleDateString(
      "en-GB",
      {
        day: "2-digit",
        month: "short",
        year: "numeric"
      }
    );
  }

  function getCourses() {
    if (
      window.AungAcademy &&
      Array.isArray(
        window.AungAcademy.courses
      )
    ) {
      return window.AungAcademy.courses;
    }

    return [];
  }

  /* =========================================================
     PREMIUM CSS
     ========================================================= */

  function injectPremiumCSS() {
    if (
      document.getElementById(
        "premiumSystemCSS"
      )
    ) {
      return;
    }

    const style =
      document.createElement(
        "style"
      );

    style.id =
      "premiumSystemCSS";

    style.textContent = `
      /* ==========================================
         PREMIUM SYSTEM
         ========================================== */

      .premium-badge {
        display:inline-flex;
        align-items:center;
        gap:5px;
        padding:5px 10px;
        border-radius:999px;
        background:#fef3c7;
        color:#92400e;
        font-size:12px;
        font-weight:700;
        border:1px solid #fcd34d;
      }

      .free-badge {
        display:inline-flex;
        align-items:center;
        gap:5px;
        padding:5px 10px;
        border-radius:999px;
        background:#dcfce7;
        color:#166534;
        font-size:12px;
        font-weight:700;
        border:1px solid #86efac;
      }

      .premium-course-card {
        position:relative;
      }

      .premium-course-card.locked {
        opacity:.92;
      }

      .premium-lock-overlay {
        position:absolute;
        top:12px;
        right:12px;
        z-index:5;
      }

      .premium-status-card {
        background:linear-gradient(
          135deg,
          #111827,
          #1e3a8a
        );
        color:white;
        border-radius:18px;
        padding:22px;
        margin-bottom:24px;
        box-shadow:
          0 12px 30px rgba(
            15,
            23,
            42,
            .15
          );
      }

      .premium-status-card h3 {
        margin:0 0 8px;
        font-size:20px;
      }

      .premium-status-card p {
        margin:4px 0;
        opacity:.9;
      }

      .premium-status-row {
        display:flex;
        justify-content:space-between;
        gap:15px;
        flex-wrap:wrap;
        margin-top:16px;
      }

      .premium-status-item {
        background:rgba(
          255,
          255,
          255,
          .1
        );
        padding:12px 15px;
        border-radius:12px;
        min-width:140px;
      }

      .premium-status-item span {
        display:block;
        font-size:12px;
        opacity:.7;
        margin-bottom:4px;
      }

      .premium-status-item strong {
        font-size:15px;
      }

      .premium-modal-overlay {
        position:fixed;
        inset:0;
        background:rgba(
          15,
          23,
          42,
          .72
        );
        backdrop-filter:blur(4px);
        z-index:99999;
        display:flex;
        align-items:center;
        justify-content:center;
        padding:20px;
      }

      .premium-modal {
        width:min(
          680px,
          100%
        );
        max-height:92vh;
        overflow:auto;
        background:#fff;
        border-radius:22px;
        box-shadow:
          0 30px 80px rgba(
            0,
            0,
            0,
            .25
          );
        padding:28px;
        position:relative;
      }

      .premium-modal-close {
        position:absolute;
        top:14px;
        right:16px;
        width:38px;
        height:38px;
        border:0;
        border-radius:50%;
        background:#f3f4f6;
        font-size:24px;
        cursor:pointer;
      }

      .premium-modal-header {
        text-align:center;
        margin-bottom:24px;
      }

      .premium-crown {
        font-size:42px;
        margin-bottom:5px;
      }

      .premium-modal-header h2 {
        margin:0 0 8px;
      }

      .premium-modal-header p {
        color:#6b7280;
        margin:0;
      }

      .premium-plans {
        display:grid;
        grid-template-columns:
          repeat(
            2,
            minmax(0,1fr)
          );
        gap:15px;
        margin-bottom:22px;
      }

      .premium-plan {
        border:2px solid #e5e7eb;
        border-radius:16px;
        padding:18px;
        cursor:pointer;
        transition:.2s;
      }

      .premium-plan:hover {
        border-color:#2563eb;
        transform:translateY(-2px);
      }

      .premium-plan.selected {
        border-color:#2563eb;
        background:#eff6ff;
      }

      .premium-plan h3 {
        margin:0 0 8px;
      }

      .premium-plan-price {
        font-size:25px;
        font-weight:800;
        color:#1d4ed8;
      }

      .premium-plan small {
        color:#6b7280;
      }

      .premium-payment-box {
        background:#f8fafc;
        border:1px solid #e5e7eb;
        border-radius:16px;
        padding:18px;
        margin-top:18px;
      }

      .premium-payment-box h3 {
        margin-top:0;
      }

      .payment-methods {
        display:grid;
        grid-template-columns:
          repeat(
            2,
            minmax(0,1fr)
          );
        gap:10px;
        margin-bottom:15px;
      }

      .payment-method {
        border:1px solid #d1d5db;
        padding:12px;
        border-radius:10px;
        background:#fff;
        cursor:pointer;
        font-weight:700;
      }

      .payment-method.selected {
        border-color:#2563eb;
        background:#eff6ff;
        color:#1d4ed8;
      }

      .payment-details {
        background:#fff;
        border:1px dashed #cbd5e1;
        border-radius:12px;
        padding:15px;
        margin-bottom:15px;
      }

      .payment-details div {
        margin:6px 0;
      }

      .premium-input {
        width:100%;
        padding:12px 14px;
        border:1px solid #d1d5db;
        border-radius:10px;
        margin-top:7px;
        font-size:14px;
        outline:none;
      }

      .premium-input:focus {
        border-color:#2563eb;
        box-shadow:
          0 0 0 3px
          rgba(
            37,
            99,
            235,
            .1
          );
      }

      .premium-submit {
        width:100%;
        border:0;
        padding:14px;
        border-radius:12px;
        background:#2563eb;
        color:white;
        font-size:16px;
        font-weight:800;
        cursor:pointer;
        margin-top:18px;
      }

      .premium-submit:hover {
        background:#1d4ed8;
      }

      .premium-admin {
        background:#fff7ed;
        border:1px solid #fed7aa;
        border-radius:16px;
        padding:18px;
        margin-top:20px;
      }

      .premium-admin h3 {
        margin-top:0;
        color:#9a3412;
      }

      .premium-admin-actions {
        display:flex;
        gap:10px;
        flex-wrap:wrap;
        margin-top:15px;
      }

      .premium-admin-btn {
        border:0;
        padding:11px 16px;
        border-radius:10px;
        font-weight:700;
        cursor:pointer;
      }

      .premium-approve {
        background:#16a34a;
        color:#fff;
      }

      .premium-reject {
        background:#dc2626;
        color:#fff;
      }

      .premium-admin-toggle {
        background:#111827;
        color:#fff;
        border:0;
        border-radius:10px;
        padding:10px 15px;
        cursor:pointer;
        font-weight:700;
      }

      .premium-alert {
        padding:13px 15px;
        border-radius:12px;
        margin-bottom:15px;
        font-size:14px;
      }

      .premium-alert.pending {
        background:#fef3c7;
        color:#92400e;
      }

      .premium-alert.active {
        background:#dcfce7;
        color:#166534;
      }

      .premium-alert.rejected,
      .premium-alert.expired {
        background:#fee2e2;
        color:#991b1b;
      }

      .premium-lock-screen {
        text-align:center;
        padding:50px 25px;
        background:#f8fafc;
        border:1px solid #e5e7eb;
        border-radius:18px;
      }

      .premium-lock-icon {
        font-size:55px;
        margin-bottom:12px;
      }

      .premium-lock-screen h2 {
        margin:0 0 10px;
      }

      .premium-lock-screen p {
        color:#6b7280;
        max-width:500px;
        margin:0 auto 20px;
      }

      .premium-unlock-btn {
        border:0;
        background:#2563eb;
        color:white;
        padding:13px 22px;
        border-radius:11px;
        font-weight:800;
        cursor:pointer;
      }

      .premium-dashboard-button {
        border:0;
        background:#f59e0b;
        color:#fff;
        padding:10px 15px;
        border-radius:10px;
        font-weight:800;
        cursor:pointer;
      }

      @media(max-width:700px) {

        .premium-plans,
        .payment-methods {
          grid-template-columns:1fr;
        }

        .premium-modal {
          padding:20px;
        }

        .premium-status-row {
          display:grid;
          grid-template-columns:1fr 1fr;
        }

      }

      @media(max-width:480px) {

        .premium-status-row {
          grid-template-columns:1fr;
        }

      }
    `;

    document.head.appendChild(style);
  }

  /* =========================================================
     PREMIUM MODAL
     ========================================================= */

  let selectedPlan = "monthly";
  let selectedPayment = "kpay";

  function closePremiumModal() {
    const modal =
      document.getElementById(
        "premiumModalOverlay"
      );

    if (modal) {
      modal.remove();
    }
  }

  function openPremiumModal(
    plan = "monthly"
  ) {
    selectedPlan =
      PLANS[plan]
        ? plan
        : "monthly";

    selectedPayment =
      "kpay";

    closePremiumModal();

    const overlay =
      document.createElement(
        "div"
      );

    overlay.id =
      "premiumModalOverlay";

    overlay.className =
      "premium-modal-overlay";

    overlay.innerHTML = `
      <div class="premium-modal">

        <button
          class="premium-modal-close"
          id="premiumCloseBtn"
          type="button"
        >
          ×
        </button>

        <div class="premium-modal-header">

          <div class="premium-crown">
            👑
          </div>

          <h2>
            Premium Membership
          </h2>

          <p>
            Course 2 မှ Course 13 အထိ
            Premium Learning ကို ရယူနိုင်ပါပြီ။
          </p>

        </div>

        <div class="premium-plans">

          <div
            class="premium-plan ${
              selectedPlan === "monthly"
                ? "selected"
                : ""
            }"
            data-plan="monthly"
          >

            <h3>
              Monthly
            </h3>

            <div class="premium-plan-price">
              ${money(PLANS.monthly.price)}
            </div>

            <small>
              30 ရက် အသုံးပြုနိုင်သည်
            </small>

          </div>

          <div
            class="premium-plan ${
              selectedPlan === "yearly"
                ? "selected"
                : ""
            }"
            data-plan="yearly"
          >

            <h3>
              Yearly
            </h3>

            <div class="premium-plan-price">
              ${money(PLANS.yearly.price)}
            </div>

            <small>
              365 ရက် အသုံးပြုနိုင်သည်
            </small>

          </div>

        </div>

        <div class="premium-payment-box">

          <h3>
            Payment Method
          </h3>

          <div class="payment-methods">

            <button
              type="button"
              class="payment-method selected"
              data-payment="kpay"
            >
              📱 KPay
            </button>

            <button
              type="button"
              class="payment-method"
              data-payment="bank"
            >
              🏦 Bank Transfer
            </button>

          </div>

          <div
            id="paymentDetails"
            class="payment-details"
          ></div>

          <label>
            Transaction Reference
            <input
              type="text"
              id="premiumTransactionRef"
              class="premium-input"
              placeholder="ဥပမာ - KPay Transaction ID"
            >
          </label>

          <label style="
            display:block;
            margin-top:15px;
          ">
            Payment Screenshot
            <input
              type="file"
              id="premiumScreenshot"
              class="premium-input"
              accept="image/*"
            >
          </label>

          <button
            type="button"
            class="premium-submit"
            id="premiumSubmitBtn"
          >
            Submit Payment
          </button>

        </div>

      </div>
    `;

    document.body.appendChild(
      overlay
    );

    renderPaymentDetails();

    overlay
      .querySelector(
        "#premiumCloseBtn"
      )
      .addEventListener(
        "click",
        closePremiumModal
      );

    overlay.addEventListener(
      "click",
      function (event) {
        if (
          event.target ===
          overlay
        ) {
          closePremiumModal();
        }
      }
    );

    overlay
      .querySelectorAll(
        ".premium-plan"
      )
      .forEach(
        function (item) {
          item.addEventListener(
            "click",
            function () {

              selectedPlan =
                item.dataset.plan;

              overlay
                .querySelectorAll(
                  ".premium-plan"
                )
                .forEach(
                  function (planEl) {
                    planEl.classList.remove(
                      "selected"
                    );
                  }
                );

              item.classList.add(
                "selected"
              );

              renderPaymentDetails();
            }
          );
        }
      );

    overlay
      .querySelectorAll(
        ".payment-method"
      )
      .forEach(
        function (item) {

          item.addEventListener(
            "click",
            function () {

              selectedPayment =
                item.dataset.payment;

              overlay
                .querySelectorAll(
                  ".payment-method"
                )
                .forEach(
                  function (paymentEl) {
                    paymentEl.classList.remove(
                      "selected"
                    );
                  }
                );

              item.classList.add(
                "selected"
              );

              renderPaymentDetails();
            }
          );

        }
      );

    overlay
      .querySelector(
        "#premiumSubmitBtn"
      )
      .addEventListener(
        "click",
        function () {
          submitPremiumPayment();
        }
      );
  }

  function renderPaymentDetails() {
    const box =
      document.getElementById(
        "paymentDetails"
      );

    if (!box) {
      return;
    }

    const state =
      getState() || {};

    const payment =
      state.paymentSettings ||
      DEFAULT_PAYMENT;

    const price =
      PLANS[selectedPlan].price;

    if (
      selectedPayment ===
      "kpay"
    ) {

      box.innerHTML = `
        <strong>
          📱 KPay Payment
        </strong>

        <div>
          KPay Number:
          <strong>
            ${escapeHTML(
              payment.kpayNumber
            )}
          </strong>
        </div>

        <div>
          Account Name:
          <strong>
            ${escapeHTML(
              payment.kpayName
            )}
          </strong>
        </div>

        <div>
          Amount:
          <strong>
            ${money(price)}
          </strong>
        </div>
      `;

    } else {

      box.innerHTML = `
        <strong>
          🏦 Bank Transfer
        </strong>

        <div>
          Bank:
          <strong>
            ${escapeHTML(
              payment.bankName
            )}
          </strong>
        </div>

        <div>
          Account Number:
          <strong>
            ${escapeHTML(
              payment.bankAccount
            )}
          </strong>
        </div>

        <div>
          Account Name:
          <strong>
            ${escapeHTML(
              payment.bankAccountName
            )}
          </strong>
        </div>

        <div>
          Amount:
          <strong>
            ${money(price)}
          </strong>
        </div>
      `;

    }
  }

  /* =========================================================
     SUBMIT PAYMENT
     ========================================================= */

  function submitPremiumPayment() {
    const state =
      getState();

    if (!state) {
      alert(
        "Account data မတွေ့ပါ။"
      );
      return;
    }

    const refInput =
      document.getElementById(
        "premiumTransactionRef"
      );

    const screenshot =
      document.getElementById(
        "premiumScreenshot"
      );

    const transactionRef =
      refInput
        ? refInput.value.trim()
        : "";

    if (!transactionRef) {
      alert(
        "Transaction Reference ထည့်ပေးပါ။"
      );
      return;
    }

    let screenshotName = "";

    if (
      screenshot &&
      screenshot.files &&
      screenshot.files.length
    ) {
      screenshotName =
        screenshot.files[0].name;
    }

    state.premium = {
      status: "pending",
      plan: selectedPlan,
      startAt: null,
      expiryAt: null,
      paymentMethod:
        selectedPayment,
      transactionRef:
        transactionRef,
      paymentScreenshot:
        screenshotName,
      submittedAt:
        new Date().toISOString()
    };

    saveState(state);

    closePremiumModal();

    showPremiumToast(
      "Payment submitted successfully. Admin approval ကို စောင့်ပါ။"
    );

    refreshPremiumUI();
  }

  /* =========================================================
     ADMIN APPROVAL
     ========================================================= */

  function approvePremium() {
    if (!isAdmin()) {
      alert(
        "Admin access မရှိပါ။"
      );
      return;
    }

    const state =
      getState();

    if (
      !state ||
      !state.premium ||
      state.premium.status !==
        "pending"
    ) {
      alert(
        "Pending payment မရှိပါ။"
      );
      return;
    }

    const plan =
      PLANS[
        state.premium.plan
      ]
      ? state.premium.plan
      : "monthly";

    const now =
      new Date();

    const expiry =
      new Date(now);

    expiry.setDate(
      expiry.getDate() +
      PLANS[plan].days
    );

    state.premium.status =
      "active";

    state.premium.startAt =
      now.toISOString();

    state.premium.expiryAt =
      expiry.toISOString();

    saveState(state);

    showPremiumToast(
      "Premium approved successfully."
    );

    refreshPremiumUI();

    openPremiumStatusModal();
  }

  function rejectPremium() {
    if (!isAdmin()) {
      alert(
        "Admin access မရှိပါ။"
      );
      return;
    }

    const state =
      getState();

    if (
      !state ||
      !state.premium
    ) {
      return;
    }

    state.premium.status =
      "rejected";

    saveState(state);

    showPremiumToast(
      "Payment rejected."
    );

    refreshPremiumUI();

    openPremiumStatusModal();
  }

  /* =========================================================
     PREMIUM STATUS
     ========================================================= */

  function getPremiumStatusText() {
    const state =
      getState();

    if (!state || !state.premium) {
      return "Free";
    }

    switch (
      state.premium.status
    ) {
      case "active":
        return "Premium Active";

      case "pending":
        return "Payment Pending";

      case "rejected":
        return "Payment Rejected";

      case "expired":
        return "Premium Expired";

      default:
        return "Free Plan";
    }
  }

  function openPremiumStatusModal() {
    closePremiumModal();

    const state =
      getState();

    if (!state) {
      return;
    }

    const premium =
      state.premium ||
      {};

    const overlay =
      document.createElement(
        "div"
      );

    overlay.id =
      "premiumModalOverlay";

    overlay.className =
      "premium-modal-overlay";

    let actionHTML = "";

    if (
      premium.status ===
        "active"
    ) {

      actionHTML = `
        <div class="
          premium-alert
          active
        ">
          ✅ Your Premium Membership
          is active.
        </div>
      `;

    } else if (
      premium.status ===
        "pending"
    ) {

      actionHTML = `
        <div class="
          premium-alert
          pending
        ">
          ⏳ Payment verification
          pending.
        </div>
      `;

    } else if (
      premium.status ===
        "rejected"
    ) {

      actionHTML = `
        <div class="
          premium-alert
          rejected
        ">
          ❌ Payment was rejected.
          Please submit again.
        </div>
      `;

    } else if (
      premium.status ===
        "expired"
    ) {

      actionHTML = `
        <div class="
          premium-alert
          expired
        ">
          ⚠️ Your Premium Membership
          has expired.
        </div>
      `;

    }

    let adminHTML = "";

    if (
      isAdmin() &&
      premium.status ===
        "pending"
    ) {

      adminHTML = `
        <div class="premium-admin">

          <h3>
            👨‍💼 Admin Payment Review
          </h3>

          <p>
            Plan:
            <strong>
              ${escapeHTML(
                premium.plan
              )}
            </strong>
          </p>

          <p>
            Payment Method:
            <strong>
              ${escapeHTML(
                premium.paymentMethod
              )}
            </strong>
          </p>

          <p>
            Transaction Ref:
            <strong>
              ${escapeHTML(
                premium.transactionRef
              )}
            </strong>
          </p>

          <p>
            Screenshot:
            <strong>
              ${escapeHTML(
                premium.paymentScreenshot ||
                  "Not uploaded"
              )}
            </strong>
          </p>

          <div class="
            premium-admin-actions
          ">

            <button
              type="button"
              class="
                premium-admin-btn
                premium-approve
              "
              id="approvePremiumBtn"
            >
              ✓ Approve
            </button>

            <button
              type="button"
              class="
                premium-admin-btn
                premium-reject
              "
              id="rejectPremiumBtn"
            >
              ✕ Reject
            </button>

          </div>

        </div>
      `;
    }

    overlay.innerHTML = `
      <div class="premium-modal">

        <button
          class="premium-modal-close"
          id="premiumCloseBtn"
        >
          ×
        </button>

        <div class="
          premium-modal-header
        ">

          <div class="
            premium-crown
          ">
            👑
          </div>

          <h2>
            Premium Status
          </h2>

          <p>
            ${getPremiumStatusText()}
          </p>

        </div>

        ${actionHTML}

        <div class="
          premium-status-card
        ">

          <h3>
            ${premium.status === "active"
              ? "Premium Membership"
              : "Membership"}
          </h3>

          <p>
            Plan:
            ${
              premium.plan
                ? escapeHTML(
                    premium.plan
                  )
                : "Free"
            }
          </p>

          <div class="
            premium-status-row
          ">

            <div class="
              premium-status-item
            ">

              <span>
                Status
              </span>

              <strong>
                ${getPremiumStatusText()}
              </strong>

            </div>

            <div class="
              premium-status-item
            ">

              <span>
                Start Date
              </span>

              <strong>
                ${formatDate(
                  premium.startAt
                )}
              </strong>

            </div>

            <div class="
              premium-status-item
            ">

              <span>
                Expiry Date
              </span>

              <strong>
                ${formatDate(
                  premium.expiryAt
                )}
              </strong>

            </div>

          </div>

        </div>

        ${
          premium.status !==
          "active"
            ? `
              <button
                type="button"
                class="
                  premium-submit
                "
                id="buyPremiumAgainBtn"
              >
                👑 Upgrade to Premium
              </button>
            `
            : ""
        }

        ${adminHTML}

      </div>
    `;

    document.body.appendChild(
      overlay
    );

    document
      .getElementById(
        "premiumCloseBtn"
      )
      .addEventListener(
        "click",
        closePremiumModal
      );

    const buyBtn =
      document.getElementById(
        "buyPremiumAgainBtn"
      );

    if (buyBtn) {

      buyBtn.addEventListener(
        "click",
        function () {

          closePremiumModal();

          openPremiumModal(
            "monthly"
          );

        }
      );

    }

    const approveBtn =
      document.getElementById(
        "approvePremiumBtn"
      );

    if (approveBtn) {

      approveBtn.addEventListener(
        "click",
        approvePremium
      );

    }

    const rejectBtn =
      document.getElementById(
        "rejectPremiumBtn"
      );

    if (rejectBtn) {

      rejectBtn.addEventListener(
        "click",
        rejectPremium
      );

    }

    overlay.addEventListener(
      "click",
      function (event) {

        if (
          event.target ===
          overlay
        ) {
          closePremiumModal();
        }

      }
    );
  }

  /* =========================================================
     PREMIUM LOCK SCREEN
     ========================================================= */

  function renderPremiumLockScreen(
    course
  ) {

    const lessonContent =
      document.getElementById(
        "lessonContent"
      );

    if (!lessonContent) {
      return;
    }

    lessonContent.innerHTML = `
      <div class="
        premium-lock-screen
      ">

        <div class="
          premium-lock-icon
        ">
          🔒
        </div>

        <h2>
          Premium Course
        </h2>

        <p>
          <strong>
            ${escapeHTML(
              course.title ||
                "This Course"
            )}
          </strong>
          ကို လေ့လာရန်
          Premium Membership
          လိုအပ်ပါတယ်။
        </p>

        <p>
          Monthly 30,000 Ks /
          Yearly 250,000 Ks
        </p>

        <button
          type="button"
          class="
            premium-unlock-btn
          "
          id="lessonPremiumUnlock"
        >
          👑 Unlock Premium
        </button>

      </div>
    `;

    const btn =
      document.getElementById(
        "lessonPremiumUnlock"
      );

    if (btn) {

      btn.addEventListener(
        "click",
        function () {
          openPremiumModal(
            "monthly"
          );
        }
      );

    }
  }

  /* =========================================================
     COURSE CARD LOCKING
     ========================================================= */

  function enhanceCourseCards() {
    const courses =
      getCourses();

    const cards =
      document.querySelectorAll(
        ".course-card"
      );

    if (!cards.length) {
      return;
    }

    cards.forEach(
      function (card) {

        const button =
          card.querySelector(
            ".open-course"
          );

        if (!button) {
          return;
        }

        const courseId =
          button.dataset.course ||
          button.dataset.courseId;

        if (!courseId) {
          return;
        }

        const course =
          courses.find(
            function (item) {
              return (
                item.id ===
                courseId
              );
            }
          );

        if (!course) {
          return;
        }

        card.classList.add(
          "premium-course-card"
        );

        const oldBadge =
          card.querySelector(
            ".premium-badge, .free-badge"
          );

        if (oldBadge) {
          oldBadge.remove();
        }

        const badge =
          document.createElement(
            "span"
          );

        if (
          isCourseFree(
            courseId
          )
        ) {

          badge.className =
            "free-badge";

          badge.textContent =
            "✓ FREE";

        } else if (
          isPremiumActive()
        ) {

          badge.className =
            "premium-badge";

          badge.textContent =
            "👑 PREMIUM";

        } else {

          badge.className =
            "premium-badge";

          badge.textContent =
            "🔒 PREMIUM";

        }

        const header =
          card.querySelector(
            ".course-card-header"
          );

        if (header) {
          header.appendChild(
            badge
          );
        } else {
          card.prepend(
            badge
          );
        }

        if (
          !isCourseUnlocked(
            courseId
          )
        ) {

          card.classList.add(
            "locked"
          );

          button.innerHTML =
            "🔒 Unlock Course";

        } else {

          card.classList.remove(
            "locked"
          );

          if (
            !isCourseFree(
              courseId
            )
          ) {
            button.innerHTML =
              "👑 Open Premium";
          }

        }

      }
    );
  }

  /* =========================================================
     LESSON COURSE LIST
     ========================================================= */

  function enhanceLessonCourseList() {
    const courses =
      getCourses();

    const items =
      document.querySelectorAll(
        ".lesson-course-item"
      );

    if (!items.length) {
      return;
    }

    items.forEach(
      function (item) {

        const courseId =
          item.dataset.course ||
          item.dataset.courseId;

        if (!courseId) {
          return;
        }

        const course =
          courses.find(
            function (c) {
              return (
                c.id ===
                courseId
              );
            }
          );

        if (!course) {
          return;
        }

        item.classList.add(
          "premium-course-card"
        );

        let badge =
          item.querySelector(
            ".premium-badge, .free-badge"
          );

        if (!badge) {

          badge =
            document.createElement(
              "span"
            );

          if (
            isCourseFree(
              courseId
            )
          ) {

            badge.className =
              "free-badge";

            badge.textContent =
              "✓ FREE";

          } else {

            badge.className =
              "premium-badge";

            badge.textContent =
              isPremiumActive()
                ? "👑 PREMIUM"
                : "🔒 PREMIUM";

          }

          item.appendChild(
            badge
          );

        }

      }
    );
  }

  /* =========================================================
     INTERCEPT COURSE CLICKS
     ========================================================= */

  function setupCourseProtection() {

    document.addEventListener(
      "click",
      function (event) {

        const courseButton =
          event.target.closest(
            ".open-course"
          );

        if (courseButton) {

          const courseId =
            courseButton.dataset.course ||
            courseButton.dataset.courseId;

          if (
            courseId &&
            !isCourseUnlocked(
              courseId
            )
          {

            event.preventDefault();
            event.stopImmediatePropagation();

            openPremiumModal(
              "monthly"
            );

            return false;
          }

        }

        const lessonCourse =
          event.target.closest(
            ".lesson-course-item"
          );

        if (lessonCourse) {

          const courseId =
            lessonCourse.dataset.course ||
            lessonCourse.dataset.courseId;

          if (
            courseId &&
            !isCourseUnlocked(
              courseId
            )
          {

            event.preventDefault();
            event.stopImmediatePropagation();

            openPremiumModal(
              "monthly"
            );

            return false;
          }

        }

      },
      true
    );
  }

  /* =========================================================
     PROTECT CURRENT LESSON
     ========================================================= */

  function protectCurrentLesson() {

    const academy =
      window.AungAcademy;

    if (!academy) {
      return;
    }

    const state =
      academy.state;

    if (!state) {
      return;
    }

    const currentCourseId =
      state.currentCourseId;

    if (!currentCourseId) {
      return;
    }

    if (
      isCourseFree(
        currentCourseId
      )
    ) {
      return;
    }

    if (
      !isPremiumActive()
    ) {

      const course =
        getCourses().find(
          function (c) {
            return (
              c.id ===
              currentCourseId
            );
          }
        );

      if (course) {
        renderPremiumLockScreen(
          course
        );
      }

    }

  }

  /* =========================================================
     DASHBOARD PREMIUM STATUS
     ========================================================= */

  function injectDashboardPremiumCard() {

    const dashboard =
      document.getElementById(
        "dashboard"
      );

    if (!dashboard) {
      return;
    }

    let card =
      document.getElementById(
        "premiumDashboardCard"
      );

    if (!card) {

      card =
        document.createElement(
          "div"
        );

      card.id =
        "premiumDashboardCard";

      const first =
        dashboard.firstElementChild;

      if (first) {
        first.after(
          card
        );
      } else {
        dashboard.appendChild(
          card
        );
      }

    }

    const state =
      getState();

    if (!state) {
      return;
    }

    const premium =
      state.premium ||
      {};

    let buttonHTML = "";

    if (
      premium.status ===
      "active"
    ) {

      buttonHTML = `
        <button
          type="button"
          class="
            premium-dashboard-button
          "
          id="premiumStatusBtn"
        >
          👑 Premium Active
        </button>
      `;

    } else {

      buttonHTML = `
        <button
          type="button"
          class="
            premium-dashboard-button
          "
          id="premiumStatusBtn"
        >
          👑 Get Premium
        </button>
      `;

    }

    card.className =
      "premium-status-card";

    card.innerHTML = `

      <h3>
        👑 Aung Business Academy Premium
      </h3>

      <p>
        ${getPremiumStatusText()}
      </p>

      <div class="
        premium-status-row
      ">

        <div class="
          premium-status-item
        ">

          <span>
            Plan
          </span>

          <strong>
            ${
              premium.plan
                ? escapeHTML(
                    premium.plan
                  )
                : "Free"
            }
          </strong>

        </div>

        <div class="
          premium-status-item
        ">

          <span>
            Expiry
          </span>

          <strong>
            ${formatDate(
              premium.expiryAt
            )}
          </strong>

        </div>

        <div class="
          premium-status-item
        ">

          <span>
            Courses
          </span>

          <strong>
            13 Courses
          </strong>

        </div>

        <div style="
          display:flex;
          align-items:center;
        ">

          ${buttonHTML}

        </div>

      </div>

    `;

    const btn =
      document.getElementById(
        "premiumStatusBtn"
      );

    if (btn) {

      btn.onclick =
        function () {

          if (
            premium.status ===
            "active"
          ) {

            openPremiumStatusModal();

          } else if (
            premium.status ===
            "pending"
          ) {

            openPremiumStatusModal();

          } else {

            openPremiumModal(
              "monthly"
            );

          }

        };

    }
  }

  /* =========================================================
     PREMIUM NAV BUTTON
     ========================================================= */

  function injectPremiumNav() {

    const nav =
      document.querySelector(
        ".sidebar"
      );

    if (!nav) {
      return;
    }

    if (
      document.getElementById(
        "premiumNavItem"
      )
    ) {
      return;
    }

    const item =
      document.createElement(
        "button"
      );

    item.id =
      "premiumNavItem";

    item.type =
      "button";

    item.className =
      "premium-admin-toggle";

    item.style.cssText = `
      width:calc(100% - 24px);
      margin:12px;
    `;

    item.innerHTML =
      "👑 Premium";

    item.addEventListener(
      "click",
      function () {

        const state =
          getState();

        if (
          state &&
          state.premium &&
          state.premium.status ===
            "active"
        ) {

          openPremiumStatusModal();

        } else {

          openPremiumModal(
            "monthly"
          );

        }

      }
    );

    nav.appendChild(
      item
    );
  }

  /* =========================================================
     ADMIN MODE
     ========================================================= */

  function enableAdminMode() {

    if (!isAdmin()) {
      return;
    }

    if (
      document.getElementById(
        "premiumAdminButton"
      )
    ) {
      return;
    }

    const button =
      document.createElement(
        "button"
      );

    button.id =
      "premiumAdminButton";

    button.type =
      "button";

    button.className =
      "premium-admin-toggle";

    button.style.cssText = `
      position:fixed;
      bottom:20px;
      right:20px;
      z-index:9998;
      box-shadow:
        0 8px 25px
        rgba(0,0,0,.2);
    `;

    button.innerHTML =
      "👨‍💼 Admin Premium";

    button.addEventListener(
      "click",
      function () {

        const state =
          getState();

        if (
          state &&
          state.premium &&
          state.premium.status ===
            "pending"
        ) {

          openPremiumStatusModal();

        } else {

          alert(
            "လက်ရှိ Pending Payment မရှိပါ။"
          );

        }

      }
    );

    document.body.appendChild(
      button
    );
  }

  /* =========================================================
     TOAST
     ========================================================= */

  function showPremiumToast(
    message
  ) {

    const existing =
      document.getElementById(
        "premiumToast"
      );

    if (existing) {
      existing.remove();
    }

    const toast =
      document.createElement(
        "div"
      );

    toast.id =
      "premiumToast";

    toast.style.cssText = `
      position:fixed;
      right:20px;
      bottom:20px;
      z-index:100000;
      background:#111827;
      color:white;
      padding:14px 18px;
      border-radius:12px;
      box-shadow:
        0 10px 30px
        rgba(0,0,0,.2);
      font-weight:700;
      max-width:360px;
    `;

    toast.textContent =
      message;

    document.body.appendChild(
      toast
    );

    setTimeout(
      function () {

        toast.style.opacity =
          "0";

        toast.style.transition =
          ".3s";

        setTimeout(
          function () {

            if (
              toast.parentNode
            ) {
              toast.remove();
            }

          },
          300
        );

      },
      3500
    );
  }

  /* =========================================================
     REFRESH UI
     ========================================================= */

  function refreshPremiumUI() {

    enhanceCourseCards();

    enhanceLessonCourseList();

    protectCurrentLesson();

    injectDashboardPremiumCard();

    injectPremiumNav();

    enableAdminMode();

  }

  /* =========================================================
     PATCH EXISTING APP RENDER FUNCTIONS
     ========================================================= */

  function patchAcademy() {

    const academy =
      window.AungAcademy;

    if (!academy) {
      return false;
    }

    if (
      academy.__premiumPatched
    ) {
      return true;
    }

    academy.__premiumPatched =
      true;

    if (
      typeof academy.renderAll ===
      "function"
    ) {

      const originalRenderAll =
        academy.renderAll;

      academy.renderAll =
        function () {

          originalRenderAll();

          setTimeout(
            refreshPremiumUI,
            50
          );

        };

    }

    if (
      typeof academy.renderLessons ===
      "function"
    ) {

      const originalRenderLessons =
        academy.renderLessons;

      academy.renderLessons =
        function () {

          originalRenderLessons();

          setTimeout(
            protectCurrentLesson,
            50
          );

          setTimeout(
            enhanceLessonCourseList,
            50
          );

        };

    }

    return true;
  }

  /* =========================================================
     ADMIN SETUP
     
     DEMO ONLY:
     To test Admin:
     localStorage role = admin
     
     Real production version must use
     server-side authentication.
     ========================================================= */

  function addAdminTestShortcut() {

    window.AungPremium = {

      open: openPremiumModal,

      status:
        openPremiumStatusModal,

      approve:
        approvePremium,

      reject:
        rejectPremium,

      isActive:
        isPremiumActive,

      isAdmin:
        isAdmin,

      getState:
        getState,

      refresh:
        refreshPremiumUI,

      setAdmin:
        function () {

          const state =
            getState();

          if (!state) {
            return;
          }

          state.account = {
            role: "admin"
          };

          saveState(state);

          showPremiumToast(
            "Admin Demo Mode enabled."
          );

          refreshPremiumUI();

        },

      setStudent:
        function () {

          const state =
            getState();

          if (!state) {
            return;
          }

          state.account = {
            role: "student"
          };

          saveState(state);

          showPremiumToast(
            "Student Mode enabled."
          );

          refreshPremiumUI();

        }

    };

  }

  /* =========================================================
     INITIALIZE
     ========================================================= */

  function initializePremium() {

    injectPremiumCSS();

    addAdminTestShortcut();

    setupCourseProtection();

    let attempts = 0;

    const timer =
      setInterval(
        function () {

          attempts++;

          if (
            patchAcademy()
          ) {

            clearInterval(
              timer
            );

            setTimeout(
              refreshPremiumUI,
              300
            );

          }

          if (
            attempts >= 30
          ) {

            clearInterval(
              timer
            );

          }

        },
        300
      );

    setTimeout(
      function () {
        refreshPremiumUI();
      },
      1000
    );

  }

  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      initializePremium
    );

  } else {

    initializePremium();

  }

})();
