/* =========================================================
   AUNG BUSINESS ACADEMY
   AI BUSINESS COACH
   Version 1.0
   ========================================================= */

(function () {
  "use strict";

  const STORAGE_KEY =
    "aung_business_academy_ai_coach_history_v1";

  let root = null;

  /* =========================================================
     STYLE
     ========================================================= */

  function injectStyles() {
    if (
      document.getElementById(
        "aung-ai-coach-style"
      )
    ) {
      return;
    }

    const style = document.createElement("style");

    style.id = "aung-ai-coach-style";

    style.textContent = `
      #aung-ai-coach-root {
        width:100%;
        max-width:1200px;
        margin:0 auto;
        padding:20px;
        font-family:
          Arial,
          "Noto Sans Myanmar",
          "Myanmar Text",
          sans-serif;
      }

      #aung-ai-coach-root *,
      #aung-ai-coach-root *::before,
      #aung-ai-coach-root *::after {
        box-sizing:border-box;
      }

      .aic-header {
        margin-bottom:20px;
      }

      .aic-header h1 {
        margin:0;
        color:#0f172a;
        font-size:28px;
        line-height:1.35;
        font-weight:800;
      }

      .aic-header p {
        margin:7px 0 0;
        color:#64748b;
        font-size:14px;
        line-height:1.7;
      }

      .aic-layout {
        display:grid;
        grid-template-columns:260px minmax(0,1fr);
        gap:18px;
      }

      .aic-sidebar {
        background:#fff;
        border:1px solid #e2e8f0;
        border-radius:17px;
        padding:15px;
        height:max-content;
      }

      .aic-sidebar-title {
        color:#0f172a;
        font-size:13px;
        font-weight:800;
        margin-bottom:10px;
      }

      .aic-topic {
        width:100%;
        border:0;
        background:#f8fafc;
        color:#334155;
        text-align:left;
        border-radius:10px;
        padding:11px;
        margin-bottom:7px;
        cursor:pointer;
        font-size:12px;
        font-weight:700;
      }

      .aic-topic:hover,
      .aic-topic.active {
        background:#eff6ff;
        color:#2563eb;
      }

      .aic-chat {
        min-width:0;
        background:#fff;
        border:1px solid #e2e8f0;
        border-radius:17px;
        overflow:hidden;
        box-shadow:
          0 8px 25px rgba(15,23,42,.05);
      }

      .aic-chat-header {
        padding:16px 18px;
        background:#0f172a;
        color:#fff;
        display:flex;
        align-items:center;
        gap:12px;
      }

      .aic-avatar {
        width:43px;
        height:43px;
        border-radius:13px;
        background:#2563eb;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:22px;
      }

      .aic-chat-name {
        font-size:15px;
        font-weight:800;
      }

      .aic-chat-status {
        margin-top:3px;
        color:#93c5fd;
        font-size:11px;
      }

      .aic-messages {
        min-height:430px;
        max-height:550px;
        overflow-y:auto;
        padding:18px;
        background:#f8fafc;
      }

      .aic-message {
        display:flex;
        margin-bottom:13px;
      }

      .aic-message.user {
        justify-content:flex-end;
      }

      .aic-bubble {
        max-width:82%;
        padding:12px 14px;
        border-radius:13px;
        font-size:13px;
        line-height:1.8;
        white-space:normal;
      }

      .aic-message.bot
      .aic-bubble {
        background:#fff;
        color:#334155;
        border:1px solid #e2e8f0;
        border-top-left-radius:4px;
      }

      .aic-message.user
      .aic-bubble {
        background:#2563eb;
        color:#fff;
        border-top-right-radius:4px;
      }

      .aic-quick {
        display:flex;
        gap:7px;
        flex-wrap:wrap;
        padding:12px 15px 5px;
        background:#fff;
        border-top:1px solid #e2e8f0;
      }

      .aic-quick button {
        border:1px solid #dbeafe;
        background:#eff6ff;
        color:#2563eb;
        border-radius:999px;
        padding:7px 10px;
        font-size:11px;
        cursor:pointer;
        font-weight:700;
      }

      .aic-input-area {
        display:flex;
        gap:9px;
        padding:12px 15px 15px;
        background:#fff;
      }

      .aic-input {
        flex:1;
        min-width:0;
        resize:none;
        border:1px solid #cbd5e1;
        border-radius:11px;
        padding:11px 12px;
        font-family:inherit;
        font-size:13px;
        outline:none;
      }

      .aic-input:focus {
        border-color:#2563eb;
      }

      .aic-send {
        width:90px;
        border:0;
        border-radius:11px;
        background:#2563eb;
        color:#fff;
        font-weight:800;
        cursor:pointer;
      }

      .aic-clear {
        border:0;
        background:none;
        color:#64748b;
        cursor:pointer;
        font-size:11px;
      }

      .aic-card {
        margin-top:8px;
        padding:12px;
        border-radius:10px;
        background:#f8fafc;
        border:1px solid #e2e8f0;
      }

      .aic-card-title {
        color:#0f172a;
        font-weight:800;
        margin-bottom:5px;
      }

      .aic-card ul {
        margin:7px 0 0 18px;
        padding:0;
      }

      .aic-card li {
        margin-bottom:5px;
      }

      @media(max-width:800px) {
        .aic-layout {
          grid-template-columns:1fr;
        }

        .aic-sidebar {
          display:grid;
          grid-template-columns:
            repeat(2,minmax(0,1fr));
          gap:7px;
        }

        .aic-sidebar-title {
          grid-column:1/-1;
        }

        .aic-topic {
          margin:0;
        }
      }

      @media(max-width:600px) {
        #aung-ai-coach-root {
          padding:14px;
        }

        .aic-header h1 {
          font-size:23px;
        }

        .aic-messages {
          min-height:380px;
          max-height:480px;
        }

        .aic-bubble {
          max-width:90%;
          font-size:12px;
        }

        .aic-send {
          width:72px;
        }
      }
    `;

    document.head.appendChild(style);
  }

  /* =========================================================
     STORAGE
     ========================================================= */

  function loadHistory() {
    try {
      const data = JSON.parse(
        localStorage.getItem(
          STORAGE_KEY
        ) || "[]"
      );

      return Array.isArray(data)
        ? data
        : [];
    } catch (error) {
      return [];
    }
  }

  function saveHistory(history) {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(history.slice(-50))
      );
    } catch (error) {}
  }

  /* =========================================================
     BUSINESS RESPONSE ENGINE
     ========================================================= */

  function analyzeQuestion(question) {
    const q =
      String(question || "")
        .toLowerCase()
        .trim();

    if (!q) {
      return `
        <div class="aic-card">
          <div class="aic-card-title">
            🤖 AI Business Coach
          </div>

          မေးခွန်းတစ်ခုရေးပေးပါ။
          ဥပမာ - "Sales ကျနေတယ် ဘာလုပ်ရမလဲ?"
        </div>
      `;
    }

    /* SALES */

    if (
      q.includes("sales") ||
      q.includes("အရောင်း") ||
      q.includes("ရောင်းအား") ||
      q.includes("target")
    ) {
      return `
        <div class="aic-card">

          <div class="aic-card-title">
            🎯 Sales Analysis
          </div>

          <p>
            Sales ပြဿနာကို
            <strong>People + Process + Numbers + Market</strong>
            ဆိုပြီး ၄ ပိုင်းခွဲပြီး စစ်ဆေးပါ။
          </p>

          <ul>
            <li>
              Target နဲ့ Actual Sales ကွာဟချက်ကို
              အရင်တွက်ပါ။
            </li>

            <li>
              Customer / Territory / Product
              အလိုက် Sales Breakdown လုပ်ပါ။
            </li>

            <li>
              New Customer နဲ့ Existing Customer
              contribution ကိုခွဲပါ။
            </li>

            <li>
              Sales Team ရဲ့ daily activity,
              conversion rate နဲ့ productivity
              ကိုစစ်ပါ။
            </li>

            <li>
              Top 20% Customers ကို
              သီးခြား Action Plan ချပါ။
            </li>
          </ul>

          <p>
            <strong>Manager Action:</strong>
            မနက်ဖြန် Field Review မှာ
            Target Gap → Root Cause →
            Action → Owner → Deadline
            ပုံစံနဲ့စီမံပါ။
          </p>

        </div>
      `;
    }

    /* MARKETING */

    if (
      q.includes("marketing") ||
      q.includes("စျေးကွက်") ||
      q.includes("brand") ||
      q.includes("campaign") ||
      q.includes("promotion")
    ) {
      return `
        <div class="aic-card">

          <div class="aic-card-title">
            📣 Marketing Analysis
          </div>

          <ul>
            <li>
              Target Customer ဘယ်သူလဲ
              သတ်မှတ်ပါ။
            </li>

            <li>
              Customer Need / Problem ကို
              ရှာပါ။
            </li>

            <li>
              Competitor ရဲ့ Price,
              Product, Promotion,
              Distribution ကိုနှိုင်းယှဉ်ပါ။
            </li>

            <li>
              Campaign Objective ကို
              Awareness / Trial / Conversion
              အဖြစ်ရှင်းလင်းပါ။
            </li>

            <li>
              ROI နဲ့ Sales Impact ကို
              campaign ပြီးတိုင်းတိုင်းတာပါ။
            </li>
          </ul>

          <p>
            <strong>Key Principle:</strong>
            Marketing ဆိုတာ Promotion တစ်ခုတည်းမဟုတ်ဘဲ
            Customer + Value + Channel + Conversion
            ကို စနစ်တကျစီမံခြင်းဖြစ်ပါတယ်။
          </p>

        </div>
      `;
    }

    /* FINANCE */

    if (
      q.includes("profit") ||
      q.includes("margin") ||
      q.includes("finance") ||
      q.includes("ငွေ") ||
      q.includes("အမြတ်") ||
      q.includes("အရှုံး") ||
      q.includes("cash")
    ) {
      return `
        <div class="aic-card">

          <div class="aic-card-title">
            💰 Finance Analysis
          </div>

          <p>
            Business က Sales များတာနဲ့
            အမြတ်များတယ်လို့ မဆိုနိုင်ပါ။
          </p>

          <ul>
            <li>
              Revenue ကို စစ်ပါ။
            </li>

            <li>
              COGS / Variable Cost ကို စစ်ပါ။
            </li>

            <li>
              Gross Profit နဲ့ Gross Margin %
              တွက်ပါ။
            </li>

            <li>
              Operating Expense ကို ထိန်းပါ။
            </li>

            <li>
              Cash In / Cash Out ကို
              weekly basis နဲ့ စောင့်ကြည့်ပါ။
            </li>
          </ul>

          <p>
            <strong>
              Gross Profit = Revenue − COGS
            </strong>
          </p>

          <p>
            <strong>
              Margin % =
              Gross Profit ÷ Revenue × 100
            </strong>
          </p>

        </div>
      `;
    }

    /* HR */

    if (
      q.includes("hr") ||
      q.includes("team") ||
      q.includes("staff") ||
      q.includes("employee") ||
      q.includes("ဝန်ထမ်း") ||
      q.includes("လူ")
    ) {
      return `
        <div class="aic-card">

          <div class="aic-card-title">
            👥 People Management Analysis
          </div>

          <ul>
            <li>
              Role & Responsibility ကို
              ရှင်းလင်းစွာသတ်မှတ်ပါ။
            </li>

            <li>
              KPI / Target ကို
              measurable ဖြစ်အောင်ထားပါ။
            </li>

            <li>
              Weekly 1:1 Coaching ပြုလုပ်ပါ။
            </li>

            <li>
              Problem ကို အပြစ်တင်ခြင်းထက်
              Root Cause ကိုရှာပါ။
            </li>

            <li>
              High Performer ကို
              Recognition ပေးပါ။
            </li>
          </ul>

          <p>
            <strong>Manager Rule:</strong>
            Clear Expectation →
            Coaching →
            Review →
            Feedback →
            Accountability
          </p>

        </div>
      `;
    }

    /* STRATEGY */

    if (
      q.includes("strategy") ||
      q.includes("business") ||
      q.includes("လုပ်ငန်း") ||
      q.includes("strategy")
    ) {
      return `
        <div class="aic-card">

          <div class="aic-card-title">
            🧠 Business Strategy Analysis
          </div>

          <p>
            လုပ်ငန်းပြဿနာကို
            အမြန်ဆုံး ဖြေရှင်းဖို့
            အောက်ပါ ၅ ဆင့်သုံးပါ။
          </p>

          <ol>
            <li>Problem ကို တိတိကျကျ သတ်မှတ်ပါ။</li>
            <li>Data နဲ့ အခြေအနေကို စစ်ပါ။</li>
            <li>Root Cause ကို ရှာပါ။</li>
            <li>Options 2–3 ခု ထုတ်ပါ။</li>
            <li>Action + Owner + Deadline သတ်မှတ်ပါ။</li>
          </ol>

        </div>
      `;
    }

    /* DEFAULT */

    return `
      <div class="aic-card">

        <div class="aic-card-title">
          🤖 Business Coach Framework
        </div>

        <p>
          သင့်ပြဿနာကို အောက်ပါ framework နဲ့
          စဉ်းစားကြည့်ပါ။
        </p>

        <ol>
          <li>
            လက်ရှိ Problem ဘာလဲ?
          </li>

          <li>
            Data အရ ဘယ်လောက်ထိခိုက်နေသလဲ?
          </li>

          <li>
            Root Cause ဘာလဲ?
          </li>

          <li>
            ဘယ် Options တွေရှိသလဲ?
          </li>

          <li>
            ဘယ် Action ကို ဘယ်သူက
            ဘယ်နေ့အပြီးလုပ်မလဲ?
          </li>
        </ol>

        <p>
          ပိုတိကျတဲ့အကြံပေးချက်ရဖို့
          Sales / Marketing / Finance /
          HR / Business Strategy ထဲက
          ဘယ်အပိုင်းလဲဆိုတာပါရေးပေးနိုင်ပါတယ်။
        </p>

      </div>
    `;
  }

  /* =========================================================
     MESSAGE
     ========================================================= */

  function addMessage(
    type,
    content,
    save = true
  ) {
    const messages =
      root.querySelector(
        ".aic-messages"
      );

    if (!messages) return;

    const item =
      document.createElement("div");

    item.className =
      "aic-message " + type;

    const bubble =
      document.createElement("div");

    bubble.className =
      "aic-bubble";

    bubble.innerHTML =
      content;

    item.appendChild(bubble);

    messages.appendChild(item);

    messages.scrollTop =
      messages.scrollHeight;

    if (save) {
      const history =
        loadHistory();

      history.push({
        type:type,
        content:content,
        time:Date.now()
      });

      saveHistory(history);
    }
  }

  function sendMessage(text) {
    const question =
      String(text || "").trim();

    if (!question) return;

    addMessage(
      "user",
      escapeText(question)
    );

    const answer =
      analyzeQuestion(question);

    setTimeout(
      function () {
        addMessage(
          "bot",
          answer
        );
      },
      250
    );
  }

  function escapeText(text) {
    return String(text || "")
      .replace(/&/g,"&amp;")
      .replace(/</g,"&lt;")
      .replace(/>/g,"&gt;")
      .replace(/"/g,"&quot;")
      .replace(/'/g,"&#039;")
      .replace(/\n/g,"<br>");
  }

  /* =========================================================
     RENDER
     ========================================================= */

  function render() {
    injectStyles();

    if (!root) {
      root =
        document.getElementById(
          "aung-ai-coach-root"
        );
    }

    if (!root) {
      root =
        document.createElement("section");

      root.id =
        "aung-ai-coach-root";

      const main =
        document.querySelector("main") ||
        document.querySelector(
          ".main-content"
        ) ||
        document.querySelector(
          ".content"
        ) ||
        document.body;

      main.appendChild(root);
    }

    root.innerHTML = `

      <div class="aic-header">

        <h1>
          🤖 AI Business Coach
        </h1>

        <p>
          သင့်လုပ်ငန်းရဲ့ Sales, Marketing,
          Finance, HR နဲ့ Strategy ပြဿနာတွေကို
          Business Management Framework နဲ့
          ခွဲခြမ်းစိတ်ဖြာပေးမယ့် Coach။
        </p>

      </div>

      <div class="aic-layout">

        <aside class="aic-sidebar">

          <div class="aic-sidebar-title">
            Business Topics
          </div>

          <button
            class="aic-topic"
            data-topic="sales"
          >
            🎯 Sales
          </button>

          <button
            class="aic-topic"
            data-topic="marketing"
          >
            📣 Marketing
          </button>

          <button
            class="aic-topic"
            data-topic="finance"
          >
            💰 Finance
          </button>

          <button
            class="aic-topic"
            data-topic="hr"
          >
            👥 HR & People
          </button>

          <button
            class="aic-topic"
            data-topic="strategy"
          >
            🧠 Strategy
          </button>

          <button
            class="aic-topic"
            data-topic="business"
          >
            🏢 Business
          </button>

          <button
            class="aic-clear"
            id="aic-clear"
          >
            Clear Chat
          </button>

        </aside>

        <section class="aic-chat">

          <div class="aic-chat-header">

            <div class="aic-avatar">
              🤖
            </div>

            <div>

              <div class="aic-chat-name">
                Aung Business Coach
              </div>

              <div class="aic-chat-status">
                ● Business Advisor
              </div>

            </div>

          </div>

          <div
            class="aic-messages"
          ></div>

          <div class="aic-quick">

            <button
              data-question="Sales ကျနေတယ် ဘာလုပ်ရမလဲ?"
            >
              Sales ကျနေတယ်
            </button>

            <button
              data-question="Profit Margin တိုးအောင် ဘာလုပ်ရမလဲ?"
            >
              Profit တိုးချင်တယ်
            </button>

            <button
              data-question="Marketing Campaign ကို ဘယ်လိုစီမံရမလဲ?"
            >
              Marketing
            </button>

            <button
              data-question="Sales Team ကို ဘယ်လို Manage လုပ်ရမလဲ?"
            >
              Team Management
            </button>

          </div>

          <div class="aic-input-area">

            <textarea
              class="aic-input"
              id="aic-input"
              rows="2"
              placeholder="သင့် Business Problem ကို ရေးပါ..."
            ></textarea>

            <button
              class="aic-send"
              id="aic-send"
            >
              Send
            </button>

          </div>

        </section>

      </div>
    `;

    bindEvents();

    loadMessages();
  }

  /* =========================================================
     LOAD HISTORY
     ========================================================= */

  function loadMessages() {
    const history =
      loadHistory();

    if (!history.length) {

      addMessage(
        "bot",
        `
          <div class="aic-card">

            <div class="aic-card-title">
              👋 မင်္ဂလာပါ Aung Zar Ni Win
            </div>

            ကျွန်တော်က
            <strong>Aung Business Coach</strong>
            ပါ။

            <br><br>

            သင့် Business ပြဿနာကို
            Sales, Marketing, Finance,
            HR, Strategy အမြင်နဲ့
            ခွဲခြမ်းစိတ်ဖြာပေးနိုင်ပါတယ်။

            <br><br>

            ဥပမာ —
            <br>
            “Sales Target မပြည့်ဘူး”
            <br>
            “Profit Margin ကျနေတယ်”
            <br>
            “Team Performance မကောင်းဘူး”
            <br>
            “Marketing Campaign ဘယ်လိုလုပ်ရမလဲ”
          </div>
        `,
        false
      );

      return;
    }

    history.forEach(function (item) {
      addMessage(
        item.type,
        item.content,
        false
      );
    });
  }

  /* =========================================================
     EVENTS
     ========================================================= */

  function bindEvents() {

    const input =
      document.getElementById(
        "aic-input"
      );

    const send =
      document.getElementById(
        "aic-send"
      );

    if (send) {
      send.addEventListener(
        "click",
        function () {

          sendMessage(
            input.value
          );

          input.value = "";

          input.focus();

        }
      );
    }

    if (input) {

      input.addEventListener(
        "keydown",
        function (event) {

          if (
            event.key === "Enter" &&
            !event.shiftKey
          ) {

            event.preventDefault();

            sendMessage(
              input.value
            );

            input.value = "";

          }

        }
      );

    }

    root
      .querySelectorAll(
        "[data-question]"
      )
      .forEach(function (button) {

        button.addEventListener(
          "click",
          function () {

            sendMessage(
              button.getAttribute(
                "data-question"
              )
            );

          }
        );

      });

    root
      .querySelectorAll(
        "[data-topic]"
      )
      .forEach(function (button) {

        button.addEventListener(
          "click",
          function () {

            const topic =
              button.getAttribute(
                "data-topic"
              );

            const questions = {
              sales:
                "Sales Performance တိုးအောင် ဘာလုပ်ရမလဲ?",
              marketing:
                "Marketing Strategy ကို ဘယ်လိုတည်ဆောက်ရမလဲ?",
              finance:
                "Business Profit Margin တိုးအောင် ဘာလုပ်ရမလဲ?",
              hr:
                "Sales Team Performance ကို ဘယ်လိုတိုးတက်အောင်လုပ်ရမလဲ?",
              strategy:
                "Business Strategy တည်ဆောက်ဖို့ ဘာတွေလိုအပ်လဲ?",
              business:
                "Business Growth အတွက် ဘယ်အချက်တွေကို အရင်စစ်ဆေးရမလဲ?"
            };

            sendMessage(
              questions[topic]
            );

            root
              .querySelectorAll(
                ".aic-topic"
              )
              .forEach(function (item) {
                item.classList.remove(
                  "active"
                );
              });

            button.classList.add(
              "active"
            );

          }
        );

      });

    const clear =
      document.getElementById(
        "aic-clear"
      );

    if (clear) {

      clear.addEventListener(
        "click",
        function () {

          localStorage.removeItem(
            STORAGE_KEY
          );

          render();

        }
      );

    }
  }

  /* =========================================================
     NAVIGATION
     ========================================================= */

  function bindSidebar() {

    const elements =
      Array.from(
        document.querySelectorAll(
          "button,a,[role='button'],li"
        )
      );

    elements.forEach(function (element) {

      if (
        element.dataset &&
        element.dataset
          .aungAICoachBound === "1"
      ) {
        return;
      }

      const text =
        (
          element.textContent || ""
        )
          .trim()
          .toLowerCase();

      if (
        text.includes(
          "ai business coach"
        ) ||
        text.includes(
          "business coach"
        ) ||
        text.includes(
          "ai coach"
        )
      ) {

        element.dataset
          .aungAICoachBound = "1";

        element.addEventListener(
          "click",
          function (event) {

            const href =
              element.getAttribute(
                "href"
              );

            if (
              href &&
              href !== "#" &&
              !href.startsWith(
                "javascript:"
              )
            ) {
              return;
            }

            event.preventDefault();

            show();

          }
        );

      }

    });

  }

  /* =========================================================
     PUBLIC API
     ========================================================= */

  function show() {

    render();

    if (root) {

      try {
        root.scrollIntoView({
          behavior:"smooth",
          block:"start"
        });
      } catch (error) {}

    }

  }

  window.AungAIBusinessCoach = {
    show:show,
    render:render,
    clear:function () {
      localStorage.removeItem(
        STORAGE_KEY
      );

      render();
    }
  };

  /* =========================================================
     INIT
     ========================================================= */

  function init() {

    setTimeout(
      bindSidebar,
      500
    );

    setTimeout(
      bindSidebar,
      1200
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
