/* =========================================================
   AUNG BUSINESS ACADEMY V8
   PREMIUM SYSTEM V2
   Course 1 = FREE
   Course 2-13 = PREMIUM
   ========================================================= */

(function () {
  "use strict";

  const STORAGE_KEY = "aungBusinessAcademyV8";

  const FREE_COURSE_INDEX = 0;

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

  const DEFAULT_PAYMENT = {
    kpayNumber: "09XXXXXXXXX",
    kpayName: "Aung Business Academy",
    bankName: "KBZ Bank",
    bankAccount: "XXXXXXXXXX",
    bankAccountName: "Aung Business Academy",
    monthlyPrice: 30000,
    yearlyPrice: 250000
  };

  let selectedPlan = "monthly";
  let selectedPayment = "kpay";

  /* =========================================================
     STATE
     ========================================================= */

  function getState() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);

      if (!data) {
        return null;
      }

      return JSON.parse(data);

    } catch (error) {
      console.error("Premium State Error:", error);
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
      console.error("Premium Save Error:", error);
    }
  }

  function ensurePremiumState() {

    let state = getState();

    if (!state) {
      return null;
    }

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

    if (!state.paymentSettings) {

      state.paymentSettings =
        DEFAULT_PAYMENT;

    }

    saveState(state);

    return state;
  }

  /* =========================================================
     PREMIUM STATUS
     ========================================================= */

  function isPremiumActive() {

    const state =
      ensurePremiumState();

    if (!state || !state.premium) {
      return false;
    }

    if (
      state.premium.status !==
      "active"
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

    const state =
      ensurePremiumState();

    return !!(
      state &&
      state.account &&
      state.account.role === "admin"
    );
  }

  function isCourseUnlocked(index) {

    if (
      index === FREE_COURSE_INDEX
    ) {
      return true;
    }

    return isPremiumActive();
  }

  function getStatusText() {

    const state =
      ensurePremiumState();

    if (!state) {
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

  /* =========================================================
     HELPERS
     ========================================================= */

  function escapeHTML(value) {

    if (
      value === null ||
      value === undefined
    ) {
      return "";
    }

    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function money(value) {

    return Number(value || 0)
      .toLocaleString("en-US") +
      " Ks";

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

      .aba-premium-badge {
        display:inline-flex;
        align-items:center;
        gap:5px;
        padding:5px 11px;
        border-radius:999px;
        font-size:12px;
        font-weight:800;
        margin-left:8px;
      }

      .aba-free-badge {
        background:#dcfce7;
        color:#166534;
        border:1px solid #86efac;
      }

      .aba-premium-badge {
        background:#fef3c7;
        color:#92400e;
        border:1px solid #fcd34d;
      }

      .aba-locked-course {
        position:relative;
      }

      .aba-lock-label {
        display:block;
        margin-top:10px;
        color:#92400e;
        font-size:13px;
        font-weight:700;
      }

      .aba-premium-modal-overlay {
        position:fixed;
        inset:0;
        background:rgba(15,23,42,.72);
        display:flex;
        justify-content:center;
        align-items:center;
        padding:20px;
        z-index:999999;
      }

      .aba-premium-modal {
        width:min(650px,100%);
        max-height:92vh;
        overflow:auto;
        background:#fff;
        border-radius:22px;
        padding:28px;
        position:relative;
        box-shadow:0 25px 80px rgba(0,0,0,.3);
      }

      .aba-premium-close {
        position:absolute;
        top:12px;
        right:15px;
        width:40px;
        height:40px;
        border:0;
        border-radius:50%;
        background:#f3f4f6;
        font-size:25px;
        cursor:pointer;
      }

      .aba-premium-header {
        text-align:center;
        margin-bottom:25px;
      }

      .aba-premium-crown {
        font-size:48px;
      }

      .aba-premium-header h2 {
        margin:5px 0 8px;
      }

      .aba-premium-header p {
        color:#6b7280;
        margin:0;
      }

      .aba-plan-grid {
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:15px;
      }

      .aba-plan {
        border:2px solid #e5e7eb;
        border-radius:15px;
        padding:18px;
        cursor:pointer;
        transition:.2s;
      }

      .aba-plan:hover {
        border-color:#2563eb;
      }

      .aba-plan.selected {
        border-color:#2563eb;
        background:#eff6ff;
      }

      .aba-plan h3 {
        margin:0 0 8px;
      }

      .aba-plan-price {
        color:#1d4ed8;
        font-size:24px;
        font-weight:800;
      }

      .aba-plan small {
        color:#6b7280;
      }

      .aba-payment-box {
        margin-top:20px;
        padding:18px;
        background:#f8fafc;
        border:1px solid #e5e7eb;
        border-radius:15px;
      }

      .aba-payment-methods {
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:10px;
        margin:12px 0;
      }

      .aba-payment-method {
        padding:12px;
        background:#fff;
        border:1px solid #d1d5db;
        border-radius:10px;
        cursor:pointer;
        font-weight:700;
      }

      .aba-payment-method.selected {
        border-color:#2563eb;
        background:#eff6ff;
        color:#1d4ed8;
      }

      .aba-payment-details {
        background:#fff;
        border:1px dashed #cbd5e1;
        padding:15px;
        border-radius:12px;
        margin-bottom:15px;
      }

      .aba-payment-details div {
        margin:6px 0;
      }

      .aba-input {
        width:100%;
        box-sizing:border-box;
        padding:12px;
        border:1px solid #d1d5db;
        border-radius:10px;
        margin-top:6px;
        font-size:14px;
      }

      .aba-submit {
        width:100%;
        padding:14px;
        border:0;
        border-radius:11px;
        background:#2563eb;
        color:#fff;
        font-size:16px;
        font-weight:800;
        cursor:pointer;
        margin-top:18px;
      }

      .aba-lock-screen {
        text-align:center;
        padding:55px 25px;
        background:#f8fafc;
        border:1px solid #e5e7eb;
        border-radius:18px;
      }

      .aba-lock-icon {
        font-size:60px;
      }

      .aba-lock-screen h2 {
        margin:10px 0;
      }

      .aba-lock-screen p {
        color:#6b7280;
      }

      .aba-unlock-btn {
        padding:13px 22px;
        background:#2563eb;
        color:#fff;
        border:0;
        border-radius:11px;
        font-weight:800;
        cursor:pointer;
      }

      .aba-status-box {
        background:linear-gradient(
          135deg,
          #111827,
          #1d4ed8
        );
        color:#fff;
        border-radius:18px;
        padding:22px;
        margin-bottom:20px;
      }

      .aba-status-grid {
        display:grid;
        grid-template-columns:
          repeat(3,1fr);
        gap:10px;
        margin-top:15px;
      }

      .aba-status-item {
        background:rgba(
          255,255,255,.1
        );
        padding:12px;
        border-radius:10px;
      }

      .aba-status-item span {
        display:block;
        font-size:11px;
        opacity:.7;
        margin-bottom:4px;
      }

      .aba-status-item strong {
        font-size:14px;
      }

      .aba-admin-box {
        margin-top:20px;
        padding:18px;
        border-radius:15px;
        background:#fff7ed;
        border:1px solid #fed7aa;
      }

      .aba-admin-buttons {
        display:flex;
        gap:10px;
        margin-top:15px;
      }

      .aba-admin-buttons button {
        padding:11px 18px;
        border:0;
        border-radius:10px;
        font-weight:800;
        cursor:pointer;
      }

      .aba-approve {
        background:#16a34a;
        color:#fff;
      }

      .aba-reject {
        background:#dc2626;
        color:#fff;
      }

      @media(max-width:600px) {

        .aba-plan-grid,
        .aba-payment-methods {
          grid-template-columns:1fr;
        }

        .aba-status-grid {
          grid-template-columns:1fr;
        }

        .aba-premium-modal {
          padding:20px;
        }

      }

    `;

    document.head.appendChild(style);
  }

  /* =========================================================
     GET COURSE CARDS
     
     IMPORTANT:
     We identify courses by their ORDER.
     Course 1 = FREE
     Course 2-13 = PREMIUM
     ========================================================= */

  function getCourseCards() {

    const grid =
      document.getElementById(
        "coursesGrid"
      );

    if (!grid) {
      return [];
    }

    return Array.from(
      grid.children
    ).filter(function (element) {

      return (
        element.nodeType === 1
      );

    });

  }

  /* =========================================================
     FIND START COURSE BUTTON
     ========================================================= */

  function getCourseButton(card) {

    if (!card) {
      return null;
    }

    return (
      card.querySelector(
        ".open-course"
      ) ||
      card.querySelector(
        "button"
      )
    );

  }

  /* =========================================================
     COURSE CARDS
     ========================================================= */

  function renderCoursePremium() {

    const cards =
      getCourseCards();

    if (!cards.length) {
      return;
    }

    cards.forEach(
      function (card, index) {

        const button =
          getCourseButton(card);

        const isFree =
          index ===
          FREE_COURSE_INDEX;

        const unlocked =
          isFree ||
          isPremiumActive();

        card.classList.add(
          "aba-premium-course"
        );

        if (!unlocked) {

          card.classList.add(
            "aba-locked-course"
          );

        } else {

          card.classList.remove(
            "aba-locked-course"
          );

        }

        /* Remove previous ABA badges */

        card.querySelectorAll(
          ".aba-premium-badge"
        ).forEach(
          function (badge) {
            badge.remove();
          }
        );

        /* Create badge */

        const badge =
          document.createElement(
            "span"
          );

        if (isFree) {

          badge.className =
            "aba-premium-badge aba-free-badge";

          badge.textContent =
            "✓ FREE";

        } else if (unlocked) {

          badge.className =
            "aba-premium-badge";

          badge.textContent =
            "👑 PREMIUM";

        } else {

          badge.className =
            "aba-premium-badge";

          badge.textContent =
            "🔒 PREMIUM";

        }

        /* Put badge near course title */

        const title =
          card.querySelector(
            "h2"
          );

        if (title) {

          title.appendChild(
            badge
          );

        } else {

          card.prepend(
            badge
          );

        }

        /* Change button */

        if (button) {

          if (
            isFree
          ) {

            button.textContent =
              index === 0
                ? "Continue"
                : button.textContent;

          } else if (
            unlocked
          ) {

            button.textContent =
              "👑 Open Premium";

          } else {

            button.textContent =
              "🔒 Unlock Course";

          }

        }

      }
    );

  }

  /* =========================================================
     LESSON LIST
     ========================================================= */

  function renderLessonPremium() {

    const list =
      document.getElementById(
        "lessonCourseList"
      );

    if (!list) {
      return;
    }

    const items =
      Array.from(
        list.children
      ).filter(function (element) {

        return (
          element.nodeType === 1
        );

      });

    items.forEach(
      function (item, index) {

        item
          .querySelectorAll(
            ".aba-premium-badge"
          )
          .forEach(
            function (badge) {
              badge.remove();
            }
          );

        const badge =
          document.createElement(
            "span"
          );

        if (
          index ===
          FREE_COURSE_INDEX
        ) {

          badge.className =
            "aba-premium-badge aba-free-badge";

          badge.textContent =
            "✓ FREE";

        } else if (
          isPremiumActive()
        ) {

          badge.className =
            "aba-premium-badge";

          badge.textContent =
            "👑 PREMIUM";

        } else {

          badge.className =
            "aba-premium-badge";

          badge.textContent =
            "🔒 PREMIUM";

        }

        item.appendChild(
          badge
        );

      }
    );

  }

  /* =========================================================
     MODAL CLOSE
     ========================================================= */

  function closeModal() {

    const modal =
      document.getElementById(
        "abaPremiumModal"
      );

    if (modal) {
      modal.remove();
    }

  }

  /* =========================================================
     OPEN PREMIUM MODAL
     ========================================================= */

  function openPremiumModal() {

    closeModal();

    selectedPlan =
      "monthly";

    selectedPayment =
      "kpay";

    const overlay =
      document.createElement(
        "div"
      );

    overlay.id =
      "abaPremiumModal";

    overlay.className =
      "aba-premium-modal-overlay";

    overlay.innerHTML = `

      <div class="aba-premium-modal">

        <button
          class="aba-premium-close"
          id="abaPremiumClose"
          type="button"
        >
          ×
        </button>

        <div class="
          aba-premium-header
        ">

          <div class="
            aba-premium-crown
          ">
            👑
          </div>

          <h2>
            Premium Membership
          </h2>

          <p>
            Course 2 မှ Course 13 အထိ
            Premium Courses အားလုံးကို
            လေ့လာနိုင်ပါမယ်။
          </p>

        </div>

        <div class="aba-plan-grid">

          <div
            class="
              aba-plan
              selected
            "
            data-plan="monthly"
          >

            <h3>
              Monthly
            </h3>

            <div class="
              aba-plan-price
            ">
              30,000 Ks
            </div>

            <small>
              30 Days
            </small>

          </div>

          <div
            class="aba-plan"
            data-plan="yearly"
          >

            <h3>
              Yearly
            </h3>

            <div class="
              aba-plan-price
            ">
              250,000 Ks
            </div>

            <small>
              365 Days
            </small>

          </div>

        </div>

        <div class="
          aba-payment-box
        ">

          <h3>
            Payment Method
          </h3>

          <div class="
            aba-payment-methods
          ">

            <button
              type="button"
              class="
                aba-payment-method
                selected
              "
              data-payment="kpay"
            >
              📱 KPay
            </button>

            <button
              type="button"
              class="
                aba-payment-method
              "
              data-payment="bank"
            >
              🏦 Bank Transfer
            </button>

          </div>

          <div
            id="abaPaymentDetails"
            class="
              aba-payment-details
            "
          ></div>

          <label>
            Transaction Reference

            <input
              id="abaTransactionRef"
              class="aba-input"
              type="text"
              placeholder="
                KPay Transaction ID / Bank Reference
              "
            >

          </label>

          <label style="
            display:block;
            margin-top:15px;
          ">

            Payment Screenshot

            <input
              id="abaPaymentScreenshot"
              class="aba-input"
              type="file"
              accept="image/*"
            >

          </label>

          <button
            id="abaSubmitPayment"
            class="aba-submit"
            type="button"
          >
            Submit Payment
          </button>

        </div>

      </div>

    `;

    document.body.appendChild(
      overlay
    );

    updatePaymentDetails();

    /* Close */

    document
      .getElementById(
        "abaPremiumClose"
      )
      .onclick =
      closeModal;

    /* Plans */

    overlay
      .querySelectorAll(
        ".aba-plan"
      )
      .forEach(
        function (plan) {

          plan.onclick =
            function () {

              selectedPlan =
                plan.dataset.plan;

              overlay
                .querySelectorAll(
                  ".aba-plan"
                )
                .forEach(
                  function (p) {
                    p.classList.remove(
                      "selected"
                    );
                  }
                );

              plan.classList.add(
                "selected"
              );

              updatePaymentDetails();

            };

        }
      );

    /* Payment */

    overlay
      .querySelectorAll(
        ".aba-payment-method"
      )
      .forEach(
        function (method) {

          method.onclick =
            function () {

              selectedPayment =
                method.dataset.payment;

              overlay
                .querySelectorAll(
                  ".aba-payment-method"
                )
                .forEach(
                  function (m) {
                    m.classList.remove(
                      "selected"
                    );
                  }
                );

              method.classList.add(
                "selected"
              );

              updatePaymentDetails();

            };

        }
      );

    /* Submit */

    document
      .getElementById(
        "abaSubmitPayment"
      )
      .onclick =
      submitPayment;

  }

  /* =========================================================
     PAYMENT DETAILS
     ========================================================= */

  function updatePaymentDetails() {

    const box =
      document.getElementById(
        "abaPaymentDetails"
      );

    if (!box) {
      return;
    }

    const state =
      ensurePremiumState();

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
          📱 KPay
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

  function submitPayment() {

    const state =
      ensurePremiumState();

    if (!state) {
      alert(
        "Account data မတွေ့ပါ။"
      );
      return;
    }

    const ref =
      document.getElementById(
        "abaTransactionRef"
      );

    const screenshot =
      document.getElementById(
        "abaPaymentScreenshot"
      );

    const transactionRef =
      ref
        ? ref.value.trim()
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

      status:
        "pending",

      plan:
        selectedPlan,

      startAt:
        null,

      expiryAt:
        null,

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

    closeModal();

    alert(
      "Payment submitted successfully.\n\nAdmin approval ကို စောင့်ပေးပါ။"
    );

    refresh();

  }

  /* =========================================================
     PROTECT COURSE CLICK
     ========================================================= */

  function setupClickProtection() {

    document.addEventListener(
      "click",
      function (event) {

        const button =
          event.target.closest(
            ".open-course"
          );

        if (!button) {
          return;
        }

        const cards =
          getCourseCards();

        const card =
          button.closest(
            ".course-card"
          );

        if (!card) {
          return;
        }

        const index =
          cards.indexOf(card);

        if (
          index < 0
        ) {
          return;
        }

        if (
          !isCourseUnlocked(
            index
          )
        ) {

          event.preventDefault();

          event.stopPropagation();

          event.stopImmediatePropagation();

          openPremiumModal();

          return false;

        }

      },
      true
    );

  }

  /* =========================================================
     PROTECT LESSON PAGE
     ========================================================= */

  function protectLessonPage() {

    if (!window.AungAcademy) {
      return;
    }

    const academy =
      window.AungAcademy;

    const state =
      academy.state;

    if (!state) {
      return;
    }

    const courses =
      academy.courses || [];

    const courseIndex =
      courses.findIndex(
        function (course) {
          return (
            course.id ===
            state.currentCourseId
          );
        }
      );

    if (
      courseIndex < 0
    ) {
      return;
    }

    if (
      isCourseUnlocked(
        courseIndex
      )
    ) {
      return;
    }

    const content =
      document.getElementById(
        "lessonContent"
      );

    if (!content) {
      return;
    }

    const course =
      courses[courseIndex];

    content.innerHTML = `

      <div class="
        aba-lock-screen
      ">

        <div class="
          aba-lock-icon
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
              "Premium Course"
            )}
          </strong>
          ကို လေ့လာရန်
          Premium Membership
          လိုအပ်ပါတယ်။
        </p>

        <p>
          Monthly 30,000 Ks
          /
          Yearly 250,000 Ks
        </p>

        <button
          id="abaUnlockLesson"
          class="
            aba-unlock-btn
          "
          type="button"
        >
          👑 Unlock Premium
        </button>

      </div>

    `;

    const button =
      document.getElementById(
        "abaUnlockLesson"
      );

    if (button) {

      button.onclick =
        openPremiumModal;

    }

  }

  /* =========================================================
     ADMIN APPROVE
     ========================================================= */

  function approvePremium() {

    if (!isAdmin()) {

      alert(
        "Admin access မရှိပါ။"
      );

      return;
    }

    const state =
      ensurePremiumState();

    if (
      !state ||
      state.premium.status !==
      "pending"
    ) {

      alert(
        "Pending Payment မရှိပါ။"
      );

      return;
    }

    const plan =
      PLANS[
        state.premium.plan
      ]
      ? state.premium.plan
      : "monthly";

    const start =
      new Date();

    const expiry =
      new Date();

    expiry.setDate(
      expiry.getDate() +
      PLANS[plan].days
    );

    state.premium.status =
      "active";

    state.premium.startAt =
      start.toISOString();

    state.premium.expiryAt =
      expiry.toISOString();

    saveState(state);

    alert(
      "Premium Approved Successfully!"
    );

    closeModal();

    refresh();

  }

  /* =========================================================
     ADMIN REJECT
     ========================================================= */

  function rejectPremium() {

    if (!isAdmin()) {

      alert(
        "Admin access မရှိပါ။"
      );

      return;
    }

    const state =
      ensurePremiumState();

    if (!state) {
      return;
    }

    state.premium.status =
      "rejected";

    saveState(state);

    alert(
      "Payment Rejected."
    );

    closeModal();

    refresh();

  }

  /* =========================================================
     STATUS MODAL
     ========================================================= */

  function openStatusModal() {

    const state =
      ensurePremiumState();

    if (!state) {
      return;
    }

    const premium =
      state.premium;

    closeModal();

    const overlay =
      document.createElement(
        "div"
      );

    overlay.id =
      "abaPremiumModal";

    overlay.className =
      "aba-premium-modal-overlay";

    let adminHTML = "";

    if (
      isAdmin() &&
      premium.status ===
      "pending"
    ) {

      adminHTML = `

        <div class="
          aba-admin-box
        ">

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
            Payment:
            <strong>
              ${escapeHTML(
                premium.paymentMethod
              )}
            </strong>
          </p>

          <p>
            Transaction:
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
            aba-admin-buttons
          ">

            <button
              id="abaApprove"
              class="
                aba-approve
              "
            >
              ✓ Approve
            </button>

            <button
              id="abaReject"
              class="
                aba-reject
              "
            >
              ✕ Reject
            </button>

          </div>

        </div>

      `;

    }

    overlay.innerHTML = `

      <div class="
        aba-premium-modal
      ">

        <button
          id="abaPremiumClose"
          class="
            aba-premium-close
          "
        >
          ×
        </button>

        <div class="
          aba-premium-header
        ">

          <div class="
            aba-premium-crown
          ">
            👑
          </div>

          <h2>
            Premium Status
          </h2>

          <p>
            ${getStatusText()}
          </p>

        </div>

        <div class="
          aba-status-box
        ">

          <h3>
            Aung Business Academy
          </h3>

          <div class="
            aba-status-grid
          ">

            <div class="
              aba-status-item
            ">

              <span>
                Status
              </span>

              <strong>
                ${getStatusText()}
              </strong>

            </div>

            <div class="
              aba-status-item
            ">

              <span>
                Plan
              </span>

              <strong>
                ${
                  premium.plan ||
                  "Free"
                }
              </strong>

            </div>

            <div class="
              aba-status-item
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

          </div>

        </div>

        ${adminHTML}

        ${
          premium.status !==
          "active"
            ? `
              <button
                id="abaBuyAgain"
                class="aba-submit"
              >
                👑 Get Premium
              </button>
            `
            : ""
        }

      </div>

    `;

    document.body.appendChild(
      overlay
    );

    document
      .getElementById(
        "abaPremiumClose"
      )
      .onclick =
      closeModal;

    const approve =
      document.getElementById(
        "abaApprove"
      );

    if (approve) {
      approve.onclick =
        approvePremium;
    }

    const reject =
      document.getElementById(
        "abaReject"
      );

    if (reject) {
      reject.onclick =
        rejectPremium;
    }

    const buy =
      document.getElementById(
        "abaBuyAgain"
      );

    if (buy) {

      buy.onclick =
        function () {

          closeModal();

          openPremiumModal();

        };

    }

  }

  /* =========================================================
     DASHBOARD PREMIUM CARD
     ========================================================= */

  function addDashboardCard() {

    const dashboard =
      document.getElementById(
        "dashboard"
      );

    if (!dashboard) {
      return;
    }

    let card =
      document.getElementById(
        "abaDashboardPremium"
      );

    if (!card) {

      card =
        document.createElement(
          "div"
        );

      card.id =
        "abaDashboardPremium";

      card.className =
        "aba-status-box";

      dashboard.prepend(
        card
      );

    }

    const state =
      ensurePremiumState();

    if (!state) {
      return;
    }

    const premium =
      state.premium;

    card.innerHTML = `

      <h3>
        👑 Premium Membership
      </h3>

      <p>
        Status:
        <strong>
          ${getStatusText()}
        </strong>
      </p>

      <p>
        ${
          premium.expiryAt
            ? "Expiry: " +
              formatDate(
                premium.expiryAt
              )
            : "Course 01 is FREE. Course 02-13 require Premium."
        }
      </p>

      <button
        id="abaDashboardPremiumButton"
        style="
          margin-top:12px;
          padding:10px 16px;
          border:0;
          border-radius:10px;
          background:#f59e0b;
          color:#fff;
          font-weight:800;
          cursor:pointer;
        "
      >
        ${
          premium.status ===
          "active"
            ? "👑 Premium Status"
            : "👑 Get Premium"
        }
      </button>

    `;

    document
      .getElementById(
        "abaDashboardPremiumButton"
      )
      .onclick =
      function () {

        if (
          premium.status ===
          "active" ||
          premium.status ===
          "pending"
        ) {

          openStatusModal();

        } else {

          openPremiumModal();

        }

      };

  }

  /* =========================================================
     REFRESH
     ========================================================= */

  function refresh() {

    ensurePremiumState();

    renderCoursePremium();

    renderLessonPremium();

    protectLessonPage();

    addDashboardCard();

  }

  /* =========================================================
     ADMIN DEMO
     ========================================================= */

  function createPublicAPI() {

    window.AungPremium = {

      open:
        openPremiumModal,

      status:
        openStatusModal,

      approve:
        approvePremium,

      reject:
        rejectPremium,

      refresh:
        refresh,

      isActive:
        isPremiumActive,

      setAdmin:
        function () {

          const state =
            ensurePremiumState();

          if (!state) {
            return;
          }

          state.account = {
            role: "admin"
          };

          saveState(state);

          alert(
            "Admin Demo Mode ON"
          );

          refresh();

        },

      setStudent:
        function () {

          const state =
            ensurePremiumState();

          if (!state) {
            return;
          }

          state.account = {
            role: "student"
          };

          saveState(state);

          alert(
            "Student Mode ON"
          );

          refresh();

        },

      resetPremium:
        function () {

          const state =
            ensurePremiumState();

          if (!state) {
            return;
          }

          state.premium = {

            status:
              "free",

            plan:
              null,

            startAt:
              null,

            expiryAt:
              null,

            paymentMethod:
              null,

            transactionRef:
              "",

            paymentScreenshot:
              "",

            submittedAt:
              null

          };

          saveState(state);

          alert(
            "Premium Reset"
          );

          refresh();

        }

    };

  }

  /* =========================================================
     OBSERVE DOM
     ========================================================= */

  function setupObserver() {

    const observer =
      new MutationObserver(
        function () {

          setTimeout(
            refresh,
            50
          );

        }
      );

    observer.observe(
      document.body,
      {
        childList:true,
        subtree:true
      }
    );

  }

  /* =========================================================
     INITIALIZE
     ========================================================= */

  function init() {

    injectCSS();

    ensurePremiumState();

    createPublicAPI();

    setupClickProtection();

    setTimeout(
      refresh,
      500
    );

    setTimeout(
      refresh,
      1500
    );

    setTimeout(
      refresh,
      3000
    );

    setupObserver();

    console.log(
      "Aung Business Academy Premium V2 Loaded"
    );

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
