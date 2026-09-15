/* =========================================================
   AUNG BUSINESS ACADEMY
   BUSINESS FUNDAMENTALS
   Full Myanmar Lesson Version
   ========================================================= */

(function () {
  "use strict";

  const STORAGE_KEY =
    "aung_business_academy_business_fundamentals_completed_v1";

  /* ---------------------------------------------------------
     Helpers
     --------------------------------------------------------- */

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function getCompleted() {
    try {
      const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return Array.isArray(data) ? data : [];
    } catch (error) {
      return [];
    }
  }

  function saveCompleted(list) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify([...new Set(list)])
    );
  }

  function notifyProgress() {
    window.dispatchEvent(
      new CustomEvent("aungAcademyProgressUpdated", {
        detail: {
          courseId: "business-fundamentals"
        }
      })
    );
  }

  /* ---------------------------------------------------------
     Course
     --------------------------------------------------------- */

  const BUSINESS_COURSE = {
    id: "business-fundamentals",
    category: "BUSINESS",
    icon: "📚",
    title: "Business Fundamentals",
    burmeseTitle: "စီးပွားရေးလုပ်ငန်း အခြေခံ",
    description:
      "စီးပွားရေးလုပ်ငန်းတစ်ခုကို အခြေခံမှစပြီး စနစ်တကျ နားလည်တတ်ရန် လေ့လာရမည့် အခြေခံသင်ခန်းစာများ",
    level: "Beginner → Manager",
    lessons: []
  };

  /* =========================================================
     LESSON 01
     ========================================================= */

  const LESSON_01 = {
    id: "business-fundamentals-01",
    title: "Lesson 01 — စီးပွားရေးလုပ်ငန်းဆိုတာ ဘာလဲ?",
    objective: `
      <p>
        ဒီသင်ခန်းစာပြီးဆုံးတဲ့အချိန်မှာ စီးပွားရေးလုပ်ငန်းဆိုတာ
        ဘာကိုဆိုလိုတာလဲ၊ Customer အတွက် Value ဘယ်လိုဖန်တီးရလဲ၊
        Revenue၊ Cost နဲ့ Profit တို့ရဲ့ ကွာခြားချက်ကို နားလည်လာရပါမယ်။
      </p>
    `,
    content: `
      <div class="lesson-section">
        <h3>🎯 ဒီသင်ခန်းစာမှာ ဘာတွေသင်မလဲ?</h3>
        <ul>
          <li>စီးပွားရေးလုပ်ငန်းရဲ့ အဓိပ္ပါယ်</li>
          <li>Customer Value ဆိုတာဘာလဲ</li>
          <li>Revenue၊ Cost၊ Profit ဘာကွာလဲ</li>
          <li>Business Owner / Manager တစ်ယောက် ဘယ်လိုစဉ်းစားရမလဲ</li>
          <li>လုပ်ငန်းတစ်ခုကို အခြေခံအဆင့်မှာ ဘယ်လိုစစ်ဆေးရမလဲ</li>
        </ul>
      </div>

      <div class="lesson-section">
        <h3>📖 စီးပွားရေးလုပ်ငန်းဆိုတာဘာလဲ?</h3>
        <p>
          စီးပွားရေးလုပ်ငန်းဆိုတာ Customer ရဲ့ လိုအပ်ချက်၊ ပြဿနာ
          သို့မဟုတ် ဆန္ဒတစ်ခုကို ဖြေရှင်းပေးပြီး အဲ့ဒီ Value အတွက်
          ဝင်ငွေရရှိအောင် စနစ်တကျလုပ်ဆောင်တဲ့ လုပ်ငန်းစနစ်တစ်ခု ဖြစ်ပါတယ်။
        </p>

        <p>
          ဥပမာ — စားသောက်ဆိုင်တစ်ဆိုင်က အစားအစာရောင်းတာပဲလို့
          မမြင်သင့်ပါဘူး။ Customer အတွက် အရသာကောင်းတဲ့အစားအစာ၊
          သန့်ရှင်းမှု၊ အဆင်ပြေမှု၊ ဝန်ဆောင်မှုနဲ့ အချိန်သက်သာမှုကို
          ပေးနေခြင်းဖြစ်ပါတယ်။
        </p>
      </div>

      <div class="lesson-section">
        <h3>💡 Customer Value ဆိုတာဘာလဲ?</h3>
        <p>
          Customer က "ဒီပစ္စည်းကို ဘာကြောင့် ဝယ်ရမလဲ?" ဆိုတဲ့မေးခွန်းကို
          ဖြေနိုင်တာဟာ Value Proposition ရဲ့ အခြေခံပါ။
        </p>

        <p>
          Product ကောင်းရုံနဲ့ မလုံလောက်ပါဘူး။ Customer ရဲ့
          ပြဿနာကို ဖြေရှင်းပေးနိုင်ရမယ်။ Customer အချိန်သက်သာစေရမယ်။
          ငွေကုန်ကျစရိတ်ကို လျှော့ချပေးနိုင်ရမယ်။ Quality ကောင်းရမယ်။
          Service ကောင်းရမယ်။
        </p>
      </div>

      <div class="lesson-section">
        <h3>💰 Revenue၊ Cost၊ Profit</h3>

        <div class="formula-box">
          <strong>Revenue = ရောင်းအားမှ ရရှိသော ဝင်ငွေ</strong>
        </div>

        <div class="formula-box">
          <strong>Cost = လုပ်ငန်းလည်ပတ်ရန် ကုန်ကျစရိတ်</strong>
        </div>

        <div class="formula-box">
          <strong>Profit = Revenue − Cost</strong>
        </div>

        <p>
          ဥပမာအားဖြင့် တစ်လမှာ ပစ္စည်းရောင်းရငွေ
          ၁၀၀ သိန်းရပြီး ကုန်ကျစရိတ်စုစုပေါင်း ၈၀ သိန်းရှိတယ်ဆိုရင်
          Profit က ၂၀ သိန်းဖြစ်ပါတယ်။
        </p>

        <p>
          ဒါကြောင့် Sales တက်တာတစ်ခုတည်းကို Business Success လို့
          မသတ်မှတ်သင့်ပါဘူး။ Sales တက်ပေမယ့် Cost ပိုတက်နေရင်
          Profit မတက်နိုင်ပါဘူး။
        </p>
      </div>

      <div class="lesson-section">
        <h3>🧠 Manager တစ်ယောက်လို စဉ်းစားပါ</h3>
        <p>
          Manager တစ်ယောက်အနေနဲ့ "ဒီလ Sales ဘယ်လောက်ရလဲ?" ဆိုတာနဲ့တင်
          မပြီးပါဘူး။
        </p>

        <ul>
          <li>Sales ဘာကြောင့်တက်တာလဲ?</li>
          <li>ဘယ် Customer က အများဆုံးဝယ်လဲ?</li>
          <li>ဘယ် Product က Profit အများဆုံးပေးလဲ?</li>
          <li>Cost ဘယ်နေရာမှာများနေလဲ?</li>
          <li>Cash Flow အခြေအနေကောင်းရဲ့လား?</li>
          <li>နောက်လမှာ ဘာကိုပြင်ရမလဲ?</li>
        </ul>
      </div>

      <div class="lesson-section">
        <h3>📊 Business Example</h3>
        <p>
          ဆိုင်တစ်ဆိုင်မှာ တစ်လ Revenue ၂၀၀ သိန်း ရရှိပါတယ်။
          ဒါပေမယ့် ပစ္စည်းဝယ်ယူစရိတ် ၁၃၀ သိန်း၊
          ဝန်ထမ်းလစာ ၂၅ သိန်း၊ အိမ်ငှား ၁၅ သိန်း၊
          အခြားကုန်ကျစရိတ် ၂၀ သိန်းရှိပါတယ်။
        </p>

        <p>
          စုစုပေါင်း Cost = ၁၉၀ သိန်း
        </p>

        <p>
          Profit = ၂၀၀ − ၁၉၀ = <strong>၁၀ သိန်း</strong>
        </p>

        <p>
          Revenue ကြီးမားပေမယ့် Profit က နည်းနေပါတယ်။
          Manager အနေနဲ့ Sales တိုးဖို့အပြင် Cost Control နဲ့
          Margin Improvement ကိုပါ လုပ်ရပါမယ်။
        </p>
      </div>

      <div class="lesson-section">
        <h3>🛠️ လက်တွေ့အသုံးချနည်း</h3>
        <ol>
          <li>ကိုယ့်လုပ်ငန်းရဲ့ အဓိက Customer ကို သတ်မှတ်ပါ။</li>
          <li>Customer ဘာပြဿနာရှိလဲ ရေးပါ။</li>
          <li>ကိုယ့်လုပ်ငန်းက ဘယ်လိုဖြေရှင်းပေးလဲ ရေးပါ။</li>
          <li>လစဉ် Revenue ကိုရေးပါ။</li>
          <li>လစဉ် Cost ကိုရေးပါ။</li>
          <li>Profit ကိုတွက်ပါ။</li>
        </ol>
      </div>

      <div class="lesson-section">
        <h3>⚠️ မလုပ်သင့်တဲ့အမှားများ</h3>
        <ul>
          <li>Sales များတာကို Profit များတယ်လို့ထင်ခြင်း</li>
          <li>Customer လိုအပ်ချက်မသိဘဲ Product ရောင်းခြင်း</li>
          <li>Cost ကိုမစောင့်ကြည့်ခြင်း</li>
          <li>Cash Flow ကိုလျစ်လျူရှုခြင်း</li>
          <li>Data မရှိဘဲ ဆုံးဖြတ်ချက်ချခြင်း</li>
        </ul>
      </div>

      <div class="lesson-section">
        <h3>📋 Lesson Checklist</h3>
        <ul>
          <li>☐ Customer ကိုသိတယ်</li>
          <li>☐ Customer Value ကိုသိတယ်</li>
          <li>☐ Revenue ကိုသိတယ်</li>
          <li>☐ Cost ကိုသိတယ်</li>
          <li>☐ Profit ကိုတွက်တတ်တယ်</li>
          <li>☐ Manager Thinking ကိုနားလည်တယ်</li>
        </ul>
      </div>

      <div class="lesson-section key-takeaway">
        <h3>📌 အဓိကမှတ်သားရန်</h3>
        <p>
          <strong>
            Business ရဲ့အဓိကရည်ရွယ်ချက်က Customer အတွက် Value ဖန်တီးပြီး
            ရေရှည်တည်တံ့နိုင်တဲ့ Profit ရရှိအောင် စနစ်တကျစီမံခန့်ခွဲခြင်းဖြစ်ပါတယ်။
          </strong>
        </p>
      </div>
    `,
    action: `
      <h3>📝 လက်တွေ့လေ့ကျင့်ခန်း</h3>
      <p>
        ကိုယ့်လုပ်ငန်းအတွက် Customer တစ်မျိုးရွေးပြီး
        "သူတို့ဘာလိုချင်လဲ၊ ကိုယ့်လုပ်ငန်းက ဘာ Value ပေးလဲ၊
        Revenue ဘယ်ကရလဲ၊ Cost ဘာတွေရှိလဲ၊ Profit ဘယ်လောက်ရလဲ"
        ဆိုတာရေးပါ။
      </p>
    `,
    quiz: `
      <h3>❓ Quiz</h3>
      <p><strong>မေးခွန်း — Profit ကို ဘယ်လိုတွက်မလဲ?</strong></p>
      <p>✅ အဖြေ — Profit = Revenue − Cost</p>
    `
  };

  /* =========================================================
     LESSON 02
     ========================================================= */

  const LESSON_02 = {
    id: "business-fundamentals-02",
    title: "Lesson 02 — Customer နှင့် Value Proposition",
    objective: `
      <p>
        Customer ကိုမှန်ကန်စွာသတ်မှတ်ပြီး Customer ရဲ့လိုအပ်ချက်ကို
        နားလည်ကာ ကိုယ့်လုပ်ငန်းက ပေးနိုင်တဲ့ Value ကို ရှင်းလင်းစွာ
        ဖော်ပြနိုင်ရန် ဖြစ်ပါတယ်။
      </p>
    `,
    content: `
      <div class="lesson-section">
        <h3>🎯 Customer ကိုဘာကြောင့် အရင်သိရတာလဲ?</h3>
        <p>
          Business တစ်ခုကို Product ကနေ စတင်တာထက် Customer ကနေ
          စတင်စဉ်းစားတာ ပိုကောင်းပါတယ်။
        </p>
        <p>
          "ငါဘာရောင်းချင်လဲ?" ဆိုတာထက်
          <strong>"Customer ဘာလိုအပ်လဲ?"</strong>
          ဆိုတာက ပိုအရေးကြီးပါတယ်။
        </p>
      </div>

      <div class="lesson-section">
        <h3>👤 Customer Segmentation</h3>
        <p>
          Customer အားလုံးဟာ တူညီကြတာမဟုတ်ပါဘူး။
          အသက်၊ ဝင်ငွေ၊ နေရာ၊ အလုပ်အကိုင်၊ ဝယ်ယူမှုအလေ့အထ၊
          လိုအပ်ချက် စတာတွေအပေါ်မူတည်ပြီး ကွဲပြားကြပါတယ်။
        </p>

        <p>
          ဥပမာ — Premium Product တစ်ခုကို ဈေးနှုန်းသက်သာတာကို
          အဓိကရှာတဲ့ Customer ကို ရောင်းမယ်ဆိုရင် မအောင်မြင်နိုင်ပါဘူး။
        </p>
      </div>

      <div class="lesson-section">
        <h3>💡 Value Proposition</h3>
        <p>
          Value Proposition ဆိုတာ Customer က
          "ဘာကြောင့် မင်းဆီက ဝယ်သင့်တာလဲ?" ဆိုတဲ့မေးခွန်းကို
          ဖြေတဲ့အရာပါ။
        </p>

        <p>ကောင်းမွန်တဲ့ Value Proposition မှာ —</p>
        <ul>
          <li>ဘယ် Customer အတွက်လဲ?</li>
          <li>ဘာ Problem ကို ဖြေရှင်းပေးလဲ?</li>
          <li>ဘာ Benefit ရမလဲ?</li>
          <li>ပြိုင်ဘက်ထက် ဘာကွာလဲ?</li>
        </ul>
      </div>

      <div class="lesson-section">
        <h3>🧠 Customer Thinking</h3>
        <p>
          Customer က Product ကို အမြဲတမ်းမဝယ်ပါဘူး။
          Product ကနေ ရမယ့် Result ကို ဝယ်တာဖြစ်ပါတယ်။
        </p>

        <p>
          ဥပမာ Customer က Drill Machine ဝယ်တာဟာ
          Drill Machine ကို ပိုင်ဆိုင်ချင်လို့မဟုတ်ဘဲ
          အပေါက်ဖောက်ချင်လို့ ဖြစ်နိုင်ပါတယ်။
        </p>
      </div>

      <div class="lesson-section">
        <h3>📋 Customer Interview Questions</h3>
        <ul>
          <li>လက်ရှိ ဘာပြဿနာရှိပါသလဲ?</li>
          <li>အခု ဘယ်လိုဖြေရှင်းနေပါသလဲ?</li>
          <li>လက်ရှိ Solution မှာ ဘာမကြိုက်ပါသလဲ?</li>
          <li>အကောင်းဆုံး Solution ဆိုရင် ဘာလိုချင်ပါသလဲ?</li>
          <li>ဝယ်ယူဆုံးဖြတ်ချက်ကို ဘာကအဓိကသက်ရောက်ပါသလဲ?</li>
        </ul>
      </div>

      <div class="lesson-section">
        <h3>⚠️ အမှားများ</h3>
        <ul>
          <li>ကိုယ်ကြိုက်တာကို Customer ကြိုက်မယ်လို့ထင်ခြင်း</li>
          <li>Customer Feedback မယူခြင်း</li>
          <li>Price ကိုပဲ Value လို့ထင်ခြင်း</li>
          <li>ပြိုင်ဘက်မလေ့လာခြင်း</li>
        </ul>
      </div>

      <div class="lesson-section key-takeaway">
        <h3>📌 အဓိကမှတ်သားရန်</h3>
        <p>
          <strong>
            Customer ကိုနားလည်ခြင်းက Business Strategy ရဲ့အစဖြစ်ပြီး
            Value Proposition က Customer ကို "ဘာကြောင့်ဝယ်သင့်လဲ"
            ဆိုတာကို ရှင်းပြပေးနိုင်ရပါမယ်။
          </strong>
        </p>
      </div>
    `,
    action: `
      <h3>🛠️ လက်တွေ့လုပ်ပါ</h3>
      <p>
        ကိုယ့် Business ရဲ့ Target Customer တစ်မျိုးကို ရွေးပြီး
        Customer Problem ၃ ခုနဲ့ Customer Benefit ၃ ခုရေးပါ။
      </p>
    `,
    quiz: `
      <h3>❓ Quiz</h3>
      <p><strong>Value Proposition ရဲ့အဓိကမေးခွန်းက ဘာလဲ?</strong></p>
      <p>✅ အဖြေ — Customer က ဘာကြောင့် ကိုယ့်လုပ်ငန်းဆီက ဝယ်သင့်တာလဲ?</p>
    `
  };

  /* =========================================================
     LESSON 03
     ========================================================= */

  const LESSON_03 = {
    id: "business-fundamentals-03",
    title: "Lesson 03 — Business Model",
    objective: `
      <p>
        Business တစ်ခုက Customer ကို Value ဘယ်လိုပေးပြီး
        ဘယ်လို Revenue ရယူကာ Cost တွေကို စီမံပြီး
        Profit ဖြစ်အောင် ဘယ်လိုလုပ်ဆောင်သလဲဆိုတာ နားလည်ရန်ဖြစ်ပါတယ်။
      </p>
    `,
    content: `
      <div class="lesson-section">
        <h3>📖 Business Model ဆိုတာဘာလဲ?</h3>
        <p>
          Business Model ဆိုတာ လုပ်ငန်းတစ်ခုက
          <strong>Value ဖန်တီးခြင်း → Value ပေးပို့ခြင်း → Value ရယူခြင်း</strong>
          ကို ဘယ်လိုလုပ်သလဲဆိုတဲ့ စီးပွားရေးစနစ် ဖြစ်ပါတယ်။
        </p>
      </div>

      <div class="lesson-section">
        <h3>🧩 Business Model ရဲ့အဓိကအပိုင်းများ</h3>
        <ol>
          <li>Customer — ဘယ်သူ့ကိုရောင်းမလဲ?</li>
          <li>Value Proposition — ဘာ Value ပေးမလဲ?</li>
          <li>Channel — ဘယ်ကနေ ရောင်းမလဲ?</li>
          <li>Revenue — ငွေဘယ်လိုရမလဲ?</li>
          <li>Cost — ဘာတွေကုန်ကျမလဲ?</li>
          <li>Key Resources — ဘာတွေလိုအပ်မလဲ?</li>
          <li>Key Activities — ဘာတွေကို အဓိကလုပ်ရမလဲ?</li>
          <li>Partners — ဘယ်သူတွေနဲ့ ပူးပေါင်းရမလဲ?</li>
        </ol>
      </div>

      <div class="lesson-section">
        <h3>💰 Revenue Model</h3>
        <p>
          Revenue Model ဆိုတာ Business က ငွေဘယ်လိုရသလဲဆိုတဲ့စနစ်ပါ။
        </p>
        <ul>
          <li>Product Sales</li>
          <li>Service Fee</li>
          <li>Subscription</li>
          <li>Commission</li>
          <li>Licensing</li>
          <li>Advertising</li>
        </ul>
      </div>

      <div class="lesson-section">
        <h3>🧠 Manager Thinking</h3>
        <p>
          Business Model ကိုနားလည်ရင် Sales ကျသွားတဲ့အခါ
          "ဝန်ထမ်းတွေမကောင်းလို့" လို့ပဲ မစဉ်းစားတော့ဘဲ
          Customer၊ Product၊ Price၊ Channel၊ Process တို့ထဲမှာ
          ဘယ်နေရာပြဿနာဖြစ်နေသလဲ ရှာနိုင်လာပါတယ်။
        </p>
      </div>

      <div class="lesson-section">
        <h3>📊 Business Example</h3>
        <p>
          Online Academy တစ်ခုမှာ Course တစ်ခုကို 50,000 MMK နဲ့ရောင်းပြီး
          တစ်လ Customer 100 ယောက်ရတယ်ဆိုရင် Revenue = 5,000,000 MMK ဖြစ်ပါတယ်။
        </p>
        <p>
          ဒါပေမယ့် Marketing၊ Platform၊ Staff၊ Content Production
          စတဲ့ Cost တွေကို နုတ်ပြီးမှ အမှန်တကယ် Profit ကို သိနိုင်ပါတယ်။
        </p>
      </div>

      <div class="lesson-section key-takeaway">
        <h3>📌 အဓိကမှတ်သားရန်</h3>
        <p>
          <strong>
            Product တစ်ခုရှိတာနဲ့ Business Model ကောင်းတယ်လို့ မဆိုနိုင်ပါဘူး။
            Customer ကို Value ပေးပြီး ရေရှည် Revenue နဲ့ Profit ဖြစ်အောင်
            စနစ်တကျလည်ပတ်နိုင်ရပါမယ်။
          </strong>
        </p>
      </div>
    `,
    action: `
      <h3>📝 လက်တွေ့လုပ်ပါ</h3>
      <p>
        ကိုယ့် Business အတွက် Customer၊ Value Proposition၊
        Revenue၊ Cost၊ Channel ၅ ခုကို စာရွက်တစ်ရွက်ပေါ်မှာ ရေးပါ။
      </p>
    `,
    quiz: `
      <h3>❓ Quiz</h3>
      <p><strong>Business Model ရဲ့အဓိကရည်ရွယ်ချက်က ဘာလဲ?</strong></p>
      <p>✅ အဖြေ — Value ဖန်တီး၊ Value ပေးပို့ပြီး Value ကနေ Revenue/Profit ရရှိအောင် စနစ်တည်ဆောက်ခြင်း။</p>
    `
  };

  /* =========================================================
     LESSON 04
     ========================================================= */

  const LESSON_04 = {
    id: "business-fundamentals-04",
    title: "Lesson 04 — Business Strategy",
    objective: `
      <p>
        Business Strategy ဆိုတာ ဘာလဲ၊ Goal နဲ့ Strategy ဘာကွာလဲ၊
        ပြိုင်ဘက်အခြေအနေမှာ ကိုယ့်လုပ်ငန်း ဘယ်လို Position ချရမလဲ
        ဆိုတာကို နားလည်ရန်ဖြစ်ပါတယ်။
      </p>
    `,
    content: `
      <div class="lesson-section">
        <h3>🎯 Strategy ဆိုတာဘာလဲ?</h3>
        <p>
          Strategy ဆိုတာ "ဘာလုပ်မလဲ?" ဆိုတာတင်မဟုတ်ပါဘူး။
          <strong>"ဘာကို မလုပ်ဘူးလဲ?"</strong> ဆိုတာလည်း Strategy ဖြစ်ပါတယ်။
        </p>
        <p>
          အရင်းအမြစ်ကန့်သတ်ထားတဲ့ Business တစ်ခုမှာ
          အရာအားလုံးကို တစ်ပြိုင်နက်တည်းလုပ်လို့မရပါဘူး။
          Priority သတ်မှတ်ရပါတယ်။
        </p>
      </div>

      <div class="lesson-section">
        <h3>🧭 Vision → Goal → Strategy → Action</h3>
        <ul>
          <li><strong>Vision</strong> — ဘယ်နေရာရောက်ချင်လဲ?</li>
          <li><strong>Goal</strong> — ဘာရလဒ်ရချင်လဲ?</li>
          <li><strong>Strategy</strong> — ဘယ်လမ်းကြောင်းနဲ့သွားမလဲ?</li>
          <li><strong>Action</strong> — ဒီနေ့ဘာလုပ်မလဲ?</li>
        </ul>
      </div>

      <div class="lesson-section">
        <h3>📊 SWOT Analysis</h3>
        <ul>
          <li><strong>Strengths</strong> — အားသာချက်</li>
          <li><strong>Weaknesses</strong> — အားနည်းချက်</li>
          <li><strong>Opportunities</strong> — အခွင့်အလမ်း</li>
          <li><strong>Threats</strong> — ခြိမ်းခြောက်မှု</li>
        </ul>

        <p>
          SWOT ကို စာရွက်ပေါ်ရေးရုံမဟုတ်ဘဲ
          Strategy ဆုံးဖြတ်ချက်တွေနဲ့ ချိတ်ဆက်အသုံးချရပါမယ်။
        </p>
      </div>

      <div class="lesson-section">
        <h3>🧠 Strategic Thinking</h3>
        <p>
          Manager တစ်ယောက်အနေနဲ့ နေ့စဉ်ပြဿနာကိုပဲ မဖြေရှင်းဘဲ
          "ဒီပြဿနာ ဘာကြောင့်ထပ်ခါထပ်ခါဖြစ်နေတာလဲ?"
          ဆိုတာကိုရှာရပါမယ်။
        </p>
      </div>

      <div class="lesson-section">
        <h3>⚠️ Strategy မအောင်မြင်စေတဲ့အရာများ</h3>
        <ul>
          <li>Goal မရှင်းခြင်း</li>
          <li>Data မရှိခြင်း</li>
          <li>Priority မရှိခြင်း</li>
          <li>Action Plan မရှိခြင်း</li>
          <li>Progress Review မလုပ်ခြင်း</li>
        </ul>
      </div>

      <div class="lesson-section key-takeaway">
        <h3>📌 အဓိကမှတ်သားရန်</h3>
        <p>
          <strong>
            Strategy က အလုပ်များများလုပ်ခြင်းမဟုတ်ပါ။
            အရေးကြီးဆုံးအရာကို မှန်ကန်တဲ့အချိန်မှာ
            မှန်ကန်တဲ့အရင်းအမြစ်နဲ့ လုပ်ဆောင်ခြင်းဖြစ်ပါတယ်။
          </strong>
        </p>
      </div>
    `,
    action: `
      <h3>📝 Strategy Exercise</h3>
      <p>
        ကိုယ့် Business အတွက် Strength ၃ ခု၊ Weakness ၃ ခု၊
        Opportunity ၃ ခု၊ Threat ၃ ခုရေးပါ။
      </p>
    `,
    quiz: `
      <h3>❓ Quiz</h3>
      <p><strong>Strategy မှာ "ဘာမလုပ်ဘူးလဲ" ကိုဘာကြောင့်သတ်မှတ်ရသလဲ?</strong></p>
      <p>✅ အဖြေ — Resource နဲ့ Focus ကို အရေးကြီးဆုံးအရာတွေပေါ် စုစည်းနိုင်ဖို့ ဖြစ်ပါတယ်။</p>
    `
  };

  /* =========================================================
     LESSON 05
     ========================================================= */

  const LESSON_05 = {
    id: "business-fundamentals-05",
    title: "Lesson 05 — Market နှင့် Competitor Analysis",
    objective: `
      <p>
        Market ကိုနားလည်ပြီး ပြိုင်ဘက်တွေ ဘာလုပ်နေကြသလဲ၊
        ကိုယ့်လုပ်ငန်းရဲ့ အားသာချက်နဲ့ အားနည်းချက်တွေကို
        Data အပေါ်အခြေခံပြီး ဆုံးဖြတ်နိုင်ရန် ဖြစ်ပါတယ်။
      </p>
    `,
    content: `
      <div class="lesson-section">
        <h3>🌍 Market ဆိုတာဘာလဲ?</h3>
        <p>
          Market ဆိုတာ Product ရောင်းသူတွေနဲ့ ဝယ်ယူလိုသူ Customer တွေ
          တွေ့ဆုံနေတဲ့ စီးပွားရေးပတ်ဝန်းကျင် ဖြစ်ပါတယ်။
        </p>
        <p>
          Market ကို နားလည်ဖို့ Customer၊ Demand၊ Price၊
          Distribution၊ Competitor၊ Trend တို့ကို လေ့လာရပါတယ်။
        </p>
      </div>

      <div class="lesson-section">
        <h3>🔎 Competitor Analysis</h3>
        <p>ပြိုင်ဘက်တစ်ဦးကို အောက်ပါအချက်တွေကနေ လေ့လာနိုင်ပါတယ်။</p>
        <ul>
          <li>Product / Service</li>
          <li>Price</li>
          <li>Quality</li>
          <li>Distribution</li>
          <li>Promotion</li>
          <li>Customer Service</li>
          <li>Brand Image</li>
          <li>Market Strength</li>
        </ul>
      </div>

      <div class="lesson-section">
        <h3>📊 Competitor Comparison</h3>
        <p>
          Competitor ကို "ကောင်းတယ်/မကောင်းဘူး" လို့ပဲ မသတ်မှတ်ဘဲ
          ကိုယ့်လုပ်ငန်းနဲ့ တိုင်းတာနိုင်တဲ့ Criteria တွေသတ်မှတ်ပါ။
        </p>

        <table class="lesson-table">
          <tr>
            <th>အချက်</th>
            <th>ကိုယ့်လုပ်ငန်း</th>
            <th>ပြိုင်ဘက်</th>
          </tr>
          <tr>
            <td>Price</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>Quality</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>Distribution</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>Service</td>
            <td>—</td>
            <td>—</td>
          </tr>
        </table>
      </div>

      <div class="lesson-section">
        <h3>🧠 Manager Thinking</h3>
        <p>
          Competitor ကိုကြောက်ဖို့မဟုတ်ပါဘူး။
          Competitor ကောင်းကောင်းလုပ်နေတဲ့အရာကို သင်ယူပြီး
          ကိုယ့်လုပ်ငန်းရဲ့ အားသာချက်ကို ပိုမိုခိုင်မာအောင်လုပ်ဖို့ ဖြစ်ပါတယ်။
        </p>
      </div>

      <div class="lesson-section">
        <h3>⚠️ အမှားများ</h3>
        <ul>
          <li>ပြိုင်ဘက်ကို မလေ့လာခြင်း</li>
          <li>ဈေးနှုန်းကိုပဲ နှိုင်းယှဉ်ခြင်း</li>
          <li>Customer Feedback မသုံးခြင်း</li>
          <li>Market Trend ကို မစောင့်ကြည့်ခြင်း</li>
        </ul>
      </div>

      <div class="lesson-section key-takeaway">
        <h3>📌 အဓိကမှတ်သားရန်</h3>
        <p>
          <strong>
            Market Analysis က "လက်ရှိဘာဖြစ်နေသလဲ" ကိုပြောပြီး
            Competitor Analysis က "အခြားသူတွေ ဘယ်လိုလုပ်နေသလဲ"
            ကိုနားလည်စေပါတယ်။
          </strong>
        </p>
      </div>
    `,
    action: `
      <h3>📝 လက်တွေ့လုပ်ပါ</h3>
      <p>
        ကိုယ့်လုပ်ငန်းရဲ့ အဓိကပြိုင်ဘက် ၃ ခုကို ရွေးပြီး
        Price၊ Product၊ Service၊ Distribution၊ Promotion
        အချက် ၅ ခုနဲ့ နှိုင်းယှဉ်ပါ။
      </p>
    `,
    quiz: `
      <h3>❓ Quiz</h3>
      <p><strong>Competitor Analysis ရဲ့အဓိကရည်ရွယ်ချက်က ဘာလဲ?</strong></p>
      <p>✅ အဖြေ — ပြိုင်ဘက်ရဲ့အားသာချက်/အားနည်းချက်ကိုနားလည်ပြီး ကိုယ့် Strategy ကိုပိုကောင်းအောင်ပြင်ဆင်ရန်။</p>
    `
  };

  /* =========================================================
     LESSON 06
     ========================================================= */

  const LESSON_06 = {
    id: "business-fundamentals-06",
    title: "Lesson 06 — Operations နှင့် Process Management",
    objective: `
      <p>
        Business တစ်ခုရဲ့ နေ့စဉ်လုပ်ငန်းစဉ်တွေကို စနစ်တကျ
        တည်ဆောက်ပြီး Quality၊ Cost၊ Speed နဲ့ Productivity
        တိုးတက်အောင် စီမံခန့်ခွဲနိုင်ရန် ဖြစ်ပါတယ်။
      </p>
    `,
    content: `
      <div class="lesson-section">
        <h3>⚙️ Operations ဆိုတာဘာလဲ?</h3>
        <p>
          Operations ဆိုတာ Business ရဲ့ Product/Service ကို
          Customer ထံရောက်အောင် နေ့စဉ်လုပ်ဆောင်ရတဲ့ လုပ်ငန်းစဉ်များ ဖြစ်ပါတယ်။
        </p>

        <p>
          ဥပမာ — Order လက်ခံခြင်း → Stock စစ်ခြင်း →
          Invoice ထုတ်ခြင်း → Delivery → Payment Collection
          စတဲ့အဆင့်တွေဟာ Process တစ်ခုဖြစ်ပါတယ်။
        </p>
      </div>

      <div class="lesson-section">
        <h3>🔄 Process Management</h3>
        <p>
          Process ကောင်းရင် ဝန်ထမ်းတစ်ယောက်ပြောင်းသွားရင်တောင်
          Business က ဆက်လည်ပတ်နိုင်ပါတယ်။
        </p>

        <p>
          Process မရှိရင် အလုပ်တစ်ခုကို လူတစ်ယောက်ချင်းစီရဲ့
          ကိုယ်ပိုင်နည်းလမ်းနဲ့လုပ်ရပြီး အမှားများလာနိုင်ပါတယ်။
        </p>
      </div>

      <div class="lesson-section">
        <h3>📋 SOP</h3>
        <p>
          SOP (Standard Operating Procedure) ဆိုတာ
          အလုပ်တစ်ခုကို ဘယ်လိုလုပ်ရမလဲဆိုတာ စံသတ်မှတ်ထားတဲ့
          လုပ်ငန်းလမ်းညွှန် ဖြစ်ပါတယ်။
        </p>

        <ol>
          <li>အလုပ်ရဲ့ရည်ရွယ်ချက်</li>
          <li>ဘယ်သူလုပ်မလဲ</li>
          <li>ဘယ်အချိန်လုပ်မလဲ</li>
          <li>ဘယ်လိုလုပ်မလဲ</li>
          <li>Quality ဘယ်လိုစစ်မလဲ</li>
          <li>Result ဘယ်လိုတိုင်းမလဲ</li>
        </ol>
      </div>

      <div class="lesson-section">
        <h3>📈 Operations KPI</h3>
        <ul>
          <li>Productivity</li>
          <li>Order Accuracy</li>
          <li>Delivery Time</li>
          <li>Stock Accuracy</li>
          <li>Error Rate</li>
          <li>Cost per Transaction</li>
        </ul>
      </div>

      <div class="lesson-section">
        <h3>🧠 Manager Thinking</h3>
        <p>
          အလုပ်တစ်ခုမှာ အမှားဖြစ်တိုင်း "ဘယ်သူမှားတာလဲ?" လို့မေးတာထက်
          "Process ထဲမှာ ဘယ်နေရာက အမှားဖြစ်စေသလဲ?" လို့မေးတာက
          ပိုပြီး Management Thinking ဖြစ်ပါတယ်။
        </p>
      </div>

      <div class="lesson-section key-takeaway">
        <h3>📌 အဓိကမှတ်သားရန်</h3>
        <p>
          <strong>
            လူကောင်းတစ်ယောက်ကိုပဲ အားကိုးတဲ့ Business ထက်
            Process ကောင်းတစ်ခုရှိတဲ့ Business က ပိုပြီး Scale လုပ်နိုင်ပါတယ်။
          </strong>
        </p>
      </div>
    `,
    action: `
      <h3>🛠️ Process Exercise</h3>
      <p>
        ကိုယ့်လုပ်ငန်းမှာ အရေးကြီးတဲ့ Process တစ်ခုကိုရွေးပြီး
        Step 1 ကနေ Step 10 အထိ စာရင်းပြုစုပါ။
        အချိန်ကြာတဲ့အဆင့်နဲ့ အမှားများတဲ့အဆင့်ကို အမှတ်အသားပြုပါ။
      </p>
    `,
    quiz: `
      <h3>❓ Quiz</h3>
      <p><strong>SOP ဆိုတာဘာလဲ?</strong></p>
      <p>✅ အဖြေ — အလုပ်တစ်ခုကို စံသတ်မှတ်ချက်နဲ့ မှန်မှန်ကန်ကန်လုပ်ဆောင်နိုင်ရန် ရေးသားထားတဲ့ လုပ်ငန်းလမ်းညွှန်။</p>
    `
  };

  /* =========================================================
     LESSON 07
     ========================================================= */

  const LESSON_07 = {
    id: "business-fundamentals-07",
    title: "Lesson 07 — Business Risk Management",
    objective: `
      <p>
        Business မှာ ဖြစ်လာနိုင်တဲ့ Risk တွေကို ကြိုတင်သိရှိပြီး
        အကျိုးသက်ရောက်မှုကို လျှော့ချနိုင်အောင် Risk Management
        Framework တစ်ခုတည်ဆောက်နိုင်ရန် ဖြစ်ပါတယ်။
      </p>
    `,
    content: `
      <div class="lesson-section">
        <h3>⚠️ Business Risk ဆိုတာဘာလဲ?</h3>
        <p>
          Risk ဆိုတာ Business ရဲ့ရည်မှန်းချက်ကို ထိခိုက်စေနိုင်တဲ့
          မသေချာမှု သို့မဟုတ် ဖြစ်နိုင်ခြေရှိတဲ့ အန္တရာယ် ဖြစ်ပါတယ်။
        </p>
      </div>

      <div class="lesson-section">
        <h3>🔍 Risk အမျိုးအစားများ</h3>
        <ul>
          <li>Financial Risk</li>
          <li>Market Risk</li>
          <li>Operational Risk</li>
          <li>People Risk</li>
          <li>Technology Risk</li>
          <li>Supplier Risk</li>
          <li>Legal / Compliance Risk</li>
          <li>Reputation Risk</li>
        </ul>
      </div>

      <div class="lesson-section">
        <h3>📊 Risk Assessment</h3>
        <p>
          Risk တစ်ခုချင်းစီကို Probability နဲ့ Impact အရ
          အဆင့်သတ်မှတ်နိုင်ပါတယ်။
        </p>

        <div class="formula-box">
          <strong>Risk Priority = Probability × Impact</strong>
        </div>

        <p>
          ဖြစ်နိုင်ခြေများပြီး Impact ကြီးတဲ့ Risk ကို
          ပထမဆုံးစီမံရပါမယ်။
        </p>
      </div>

      <div class="lesson-section">
        <h3>🛡️ Risk Response</h3>
        <ul>
          <li><strong>Avoid</strong> — ရှောင်ရှားခြင်း</li>
          <li><strong>Reduce</strong> — အကျိုးသက်ရောက်မှုလျှော့ချခြင်း</li>
          <li><strong>Transfer</strong> — တာဝန်လွှဲပြောင်းခြင်း</li>
          <li><strong>Accept</strong> — လက်ခံပြီး ကြိုတင်ပြင်ဆင်ထားခြင်း</li>
        </ul>
      </div>

      <div class="lesson-section">
        <h3>🧠 Manager Thinking</h3>
        <p>
          "ပြဿနာဖြစ်မှ ဖြေရှင်းမယ်" ဆိုတဲ့ Management ထက်
          "ဘာတွေဖြစ်နိုင်လဲ၊ ဖြစ်လာရင် ဘာလုပ်မလဲ?"
          ဆိုပြီး ကြိုတင်စီမံထားတဲ့ Management က ပိုကောင်းပါတယ်။
        </p>
      </div>

      <div class="lesson-section key-takeaway">
        <h3>📌 အဓိကမှတ်သားရန်</h3>
        <p>
          <strong>
            Risk Management ဆိုတာ Risk အားလုံးကို ဖယ်ရှားတာမဟုတ်ပါဘူး။
            Business ကို မထိခိုက်အောင် Risk ကို သိရှိ၊ တိုင်းတာ၊
            ဦးစားပေးပြီး ထိန်းချုပ်ခြင်းဖြစ်ပါတယ်။
          </strong>
        </p>
      </div>
    `,
    action: `
      <h3>📝 Risk Exercise</h3>
      <p>
        ကိုယ့်လုပ်ငန်းမှာ ဖြစ်နိုင်တဲ့ Risk ၁၀ ခုရေးပြီး
        တစ်ခုချင်းစီရဲ့ Probability၊ Impact နဲ့
        ဘယ်လိုကာကွယ်မလဲဆိုတာ ရေးပါ။
      </p>
    `,
    quiz: `
      <h3>❓ Quiz</h3>
      <p><strong>Risk Priority ကို ဘယ်လိုတွက်နိုင်သလဲ?</strong></p>
      <p>✅ အဖြေ — Probability × Impact</p>
    `
  };

  /* =========================================================
     LESSON 08
     ========================================================= */

  const LESSON_08 = {
    id: "business-fundamentals-08",
    title: "Lesson 08 — Decision Making နှင့် Problem Solving",
    objective: `
      <p>
        Business Problem တွေကို ခံစားချက်နဲ့ မဆုံးဖြတ်ဘဲ
        Data၊ Root Cause နဲ့ Options တွေအပေါ်အခြေခံပြီး
        မှန်ကန်တဲ့ Decision ချနိုင်ရန် ဖြစ်ပါတယ်။
      </p>
    `,
    content: `
      <div class="lesson-section">
        <h3>🧠 Decision Making</h3>
        <p>
          Manager တစ်ယောက်ရဲ့ အဓိကတာဝန်တွေထဲမှာ
          Decision Making က အရေးကြီးဆုံးတစ်ခုဖြစ်ပါတယ်။
        </p>

        <p>
          Decision မှားရင် အချိန်၊ ငွေ၊ လူအင်အားနဲ့
          Customer တွေကိုပါ ဆုံးရှုံးနိုင်ပါတယ်။
        </p>
      </div>

      <div class="lesson-section">
        <h3>🔎 Problem Solving Framework</h3>

        <ol>
          <li><strong>Problem Define</strong> — ပြဿနာကိုတိတိကျကျသတ်မှတ်ပါ။</li>
          <li><strong>Data Collect</strong> — အချက်အလက်စုပါ။</li>
          <li><strong>Root Cause</strong> — အရင်းခံအကြောင်းရှာပါ။</li>
          <li><strong>Options</strong> — ဖြေရှင်းနည်းအမျိုးမျိုးထုတ်ပါ။</li>
          <li><strong>Evaluate</strong> — အကျိုး/အန္တရာယ်နှိုင်းယှဉ်ပါ။</li>
          <li><strong>Decide</strong> — ဆုံးဖြတ်ပါ။</li>
          <li><strong>Execute</strong> — လက်တွေ့လုပ်ပါ။</li>
          <li><strong>Review</strong> — ရလဒ်ပြန်စစ်ပါ။</li>
        </ol>
      </div>

      <div class="lesson-section">
        <h3>🔬 Root Cause Analysis</h3>
        <p>
          ပြဿနာတစ်ခုဖြစ်တိုင်း ပထမဆုံးမြင်ရတဲ့အကြောင်းရင်းကို
          Root Cause လို့ မယူဆသင့်ပါဘူး။
        </p>

        <p>
          "ဘာကြောင့်?" ကို ထပ်ခါထပ်ခါမေးပြီး
          အရင်းခံအကြောင်းရင်းကို ရှာဖွေဖို့လိုပါတယ်။
        </p>
      </div>

      <div class="lesson-section">
        <h3>📊 Data-Based Decision</h3>
        <p>
          "ထင်တယ်" "ခံစားရတယ်" ဆိုတာထက်
          Sales Data၊ Customer Data၊ Cost Data၊
          Market Data တွေကို အသုံးပြုပြီး ဆုံးဖြတ်တာက ပိုကောင်းပါတယ်။
        </p>
      </div>

      <div class="lesson-section">
        <h3>⚠️ အမှားများ</h3>
        <ul>
          <li>Emotion နဲ့ ဆုံးဖြတ်ခြင်း</li>
          <li>Problem နဲ့ Symptom မခွဲခြားခြင်း</li>
          <li>Data မကြည့်ခြင်း</li>
          <li>Alternative မစဉ်းစားခြင်း</li>
          <li>Decision ပြီးနောက် Review မလုပ်ခြင်း</li>
        </ul>
      </div>

      <div class="lesson-section key-takeaway">
        <h3>📌 အဓိကမှတ်သားရန်</h3>
        <p>
          <strong>
            ကောင်းမွန်တဲ့ Manager ဆိုတာ ပြဿနာမရှိတဲ့သူမဟုတ်ပါဘူး။
            ပြဿနာဖြစ်လာတဲ့အခါ Root Cause ရှာပြီး
            မှန်ကန်တဲ့ Decision နဲ့ ဖြေရှင်းနိုင်တဲ့သူ ဖြစ်ပါတယ်။
          </strong>
        </p>
      </div>
    `,
    action: `
      <h3>🛠️ လက်တွေ့လေ့ကျင့်ခန်း</h3>
      <p>
        ကိုယ့်လုပ်ငန်းမှာ လက်ရှိဖြစ်နေတဲ့ ပြဿနာတစ်ခုကိုရွေးပါ။
        Problem → Data → Root Cause → Options → Action
        အစီအစဉ်နဲ့ ရေးပါ။
      </p>
    `,
    quiz: `
      <h3>❓ Quiz</h3>
      <p><strong>Problem Solving ရဲ့အရေးကြီးဆုံးအဆင့်တစ်ခုက ဘာလဲ?</strong></p>
      <p>✅ အဖြေ — ပြဿနာရဲ့ အရင်းခံအကြောင်းရင်း (Root Cause) ကို ရှာဖွေခြင်း။</p>
    `
  };

  /* =========================================================
     LESSON 09
     ========================================================= */

  const LESSON_09 = {
    id: "business-fundamentals-09",
    title: "Lesson 09 — Business Planning",
    objective: `
      <p>
        Business Goal ကို လက်တွေ့အကောင်အထည်ဖော်နိုင်အောင်
        Strategy၊ Action Plan၊ KPI၊ Budget နဲ့ Timeline တွေကို
        စနစ်တကျချိတ်ဆက်ပြီး Business Plan တည်ဆောက်နိုင်ရန် ဖြစ်ပါတယ်။
      </p>
    `,
    content: `
      <div class="lesson-section">
        <h3>📋 Business Plan ဆိုတာဘာလဲ?</h3>
        <p>
          Business Plan ဆိုတာ "ငါတို့ဘယ်ကနေ ဘယ်ကိုသွားမလဲ၊
          ဘယ်လိုသွားမလဲ၊ ဘာတွေလိုမလဲ၊ ဘယ်လိုတိုင်းမလဲ"
          ဆိုတာကို စနစ်တကျ ရေးသားထားတဲ့ Plan ဖြစ်ပါတယ်။
        </p>
      </div>

      <div class="lesson-section">
        <h3>🎯 SMART Goal</h3>
        <ul>
          <li><strong>S — Specific</strong> — တိကျရမယ်</li>
          <li><strong>M — Measurable</strong> — တိုင်းတာနိုင်ရမယ်</li>
          <li><strong>A — Achievable</strong> — လက်တွေ့ဖြစ်နိုင်ရမယ်</li>
          <li><strong>R — Relevant</strong> — Business နဲ့သက်ဆိုင်ရမယ်</li>
          <li><strong>T — Time-bound</strong> — အချိန်သတ်မှတ်ထားရမယ်</li>
        </ul>
      </div>

      <div class="lesson-section">
        <h3>📈 Plan Structure</h3>
        <ol>
          <li>Current Situation</li>
          <li>Business Goal</li>
          <li>Target Customer</li>
          <li>Strategy</li>
          <li>Action Plan</li>
          <li>People & Resources</li>
          <li>Budget</li>
          <li>KPI</li>
          <li>Timeline</li>
          <li>Review System</li>
        </ol>
      </div>

      <div class="lesson-section">
        <h3>🧠 Plan နဲ့ Action ဘာကွာလဲ?</h3>
        <p>
          Plan က စာရွက်ပေါ်မှာ ရေးထားတာတင်မဟုတ်ပါဘူး။
          Action မရှိတဲ့ Plan က အလုပ်မဖြစ်ပါဘူး။
        </p>

        <p>
          ဥပမာ "Sales တိုးမယ်" ဆိုတာ Goal ဖြစ်ပါတယ်။
          "နေ့စဉ် Customer 20 ယောက်တွေ့မယ်၊
          တစ်ပတ် 5 ရက် Market Visit လုပ်မယ်၊
          Weekly Review လုပ်မယ်" ဆိုတာ Action ဖြစ်ပါတယ်။
        </p>
      </div>

      <div class="lesson-section">
        <h3>📊 KPI</h3>
        <p>
          KPI က Plan အောင်မြင်မှုကို တိုင်းတာဖို့လိုပါတယ်။
        </p>

        <ul>
          <li>Revenue</li>
          <li>Sales Volume</li>
          <li>Gross Margin</li>
          <li>Customer Count</li>
          <li>New Customers</li>
          <li>Retention</li>
          <li>Cost</li>
          <li>Profit</li>
        </ul>
      </div>

      <div class="lesson-section key-takeaway">
        <h3>📌 အဓိကမှတ်သားရန်</h3>
        <p>
          <strong>
            Good Plan ဆိုတာ စာရွက်ပေါ်မှာ လှပတဲ့ Plan မဟုတ်ပါဘူး။
            Goal → Strategy → Action → KPI → Review
            တစ်ခုနဲ့တစ်ခု ချိတ်ဆက်နေတဲ့ Plan ဖြစ်ပါတယ်။
          </strong>
        </p>
      </div>
    `,
    action: `
      <h3>📝 Business Planning Exercise</h3>
      <p>
        လာမယ့် 90 ရက်အတွက် Business Goal တစ်ခုသတ်မှတ်ပြီး
        Goal၊ Strategy၊ Action၊ KPI နဲ့ Timeline ကိုရေးပါ။
      </p>
    `,
    quiz: `
      <h3>❓ Quiz</h3>
      <p><strong>SMART Goal ရဲ့ T က ဘာကိုဆိုလိုသလဲ?</strong></p>
      <p>✅ အဖြေ — Time-bound ဖြစ်ပြီး အချိန်ကာလသတ်မှတ်ထားရမယ်ဆိုတာ ဖြစ်ပါတယ်။</p>
    `
  };

  /* =========================================================
     LESSON 10
     ========================================================= */

  const LESSON_10 = {
    id: "business-fundamentals-10",
    title: "Lesson 10 — Business Growth နှင့် Management System",
    objective: `
      <p>
        Business တစ်ခုကို လူတစ်ယောက်တည်းအားကိုးပြီး လည်ပတ်တဲ့ပုံစံကနေ
        Sales၊ Marketing၊ Finance၊ People၊ Operations တို့ကို
        ချိတ်ဆက်ထားတဲ့ Management System တစ်ခုအဖြစ် တည်ဆောက်နိုင်ရန် ဖြစ်ပါတယ်။
      </p>
    `,
    content: `
      <div class="lesson-section">
        <h3>🚀 Business Growth ဆိုတာဘာလဲ?</h3>
        <p>
          Business Growth ဆိုတာ Sales တိုးတာတစ်ခုတည်းမဟုတ်ပါဘူး။
          Revenue၊ Profit၊ Customer Base၊ Market Share၊
          Team Capability နဲ့ Business Value တို့ တိုးတက်လာတာကို ဆိုလိုပါတယ်။
        </p>
      </div>

      <div class="lesson-section">
        <h3>🧩 Business ရဲ့ အဓိက Management Areas</h3>

        <div class="framework-card">
          <h4>🎯 Sales</h4>
          <p>
            Customer ကိုရှာဖွေခြင်း၊ Sales Target၊ Pipeline၊
            Conversion နဲ့ Sales Team Performance ကို စီမံရပါတယ်။
          </p>
        </div>

        <div class="framework-card">
          <h4>📣 Marketing</h4>
          <p>
            Brand၊ Customer၊ Market၊ Campaign နဲ့ Demand Generation
            ကို စီမံရပါတယ်။
          </p>
        </div>

        <div class="framework-card">
          <h4>💰 Finance</h4>
          <p>
            Revenue၊ Cost၊ Profit၊ Cash Flow၊ Budget နဲ့
            Financial Performance ကို ထိန်းချုပ်ရပါတယ်။
          </p>
        </div>

        <div class="framework-card">
          <h4>👥 People / HR</h4>
          <p>
            လူမှန်နေရာမှန်၊ Recruitment၊ Training၊ Coaching၊
            Performance နဲ့ Leadership ကို စီမံရပါတယ်။
          </p>
        </div>

        <div class="framework-card">
          <h4>⚙️ Operations</h4>
          <p>
            Process၊ SOP၊ Quality၊ Productivity၊ Stock၊
            Delivery နဲ့ Cost Efficiency ကို စီမံရပါတယ်။
          </p>
        </div>
      </div>

      <div class="lesson-section">
        <h3>🔗 Management System ကို ချိတ်ဆက်စဉ်းစားပါ</h3>

        <p>
          Marketing က Customer Demand ဖန်တီးပါတယ်။
          Sales က Customer ကို ရောင်းချပါတယ်။
          Operations က Product/Service ကို ပေးပို့ပါတယ်။
          Finance က ငွေကြေးအခြေအနေကို ထိန်းပါတယ်။
          HR က လူအင်အားကို တည်ဆောက်ပါတယ်။
        </p>

        <p>
          ဒီဌာနတွေက သီးခြားမဟုတ်ပါဘူး။
          တစ်ခုနဲ့တစ်ခု ချိတ်ဆက်နေပါတယ်။
        </p>
      </div>

      <div class="lesson-section">
        <h3>📊 Business Health Check</h3>

        <ol>
          <li>Sales တိုးနေသလား?</li>
          <li>Profit Margin ကောင်းရဲ့လား?</li>
          <li>Cash Flow လုံလောက်ရဲ့လား?</li>
          <li>Customer တွေ ပြန်ဝယ်ကြသလား?</li>
          <li>Team Performance ကောင်းရဲ့လား?</li>
          <li>Process တွေ စနစ်တကျရှိရဲ့လား?</li>
          <li>Market Share တိုးနေသလား?</li>
          <li>Risk တွေကို ထိန်းချုပ်ထားနိုင်သလား?</li>
        </ol>
      </div>

      <div class="lesson-section">
        <h3>🧠 Manager → Business Leader</h3>
        <p>
          Manager တစ်ယောက်က နေ့စဉ်အလုပ်တွေကို စီမံတတ်ရုံနဲ့ မပြီးပါဘူး။
          Business Leader တစ်ယောက်က System တည်ဆောက်ရပါတယ်။
        </p>

        <p>
          ဝန်ထမ်းတစ်ယောက်မရှိရင် အလုပ်ရပ်သွားတဲ့ Business ထက်
          Process၊ KPI၊ SOP၊ Training နဲ့ Management System
          ရှိတဲ့ Business က ပိုပြီးတိုးချဲ့နိုင်ပါတယ်။
        </p>
      </div>

      <div class="lesson-section">
        <h3>📈 Growth Framework</h3>

        <div class="formula-box">
          <strong>
            Customer → Value → Sales → Profit → Reinvestment → Growth
          </strong>
        </div>

        <p>
          Customer Value ကောင်းလာရင် Sales တိုးနိုင်ပါတယ်။
          Sales တိုးရုံမက Profit ကိုထိန်းနိုင်ရင်
          အဲ့ဒီ Profit ကို Business ထဲပြန်ရင်းနှီးပြီး
          Team၊ Marketing၊ Product၊ Technology နဲ့ Distribution
          တိုးချဲ့နိုင်ပါတယ်။
        </p>
      </div>

      <div class="lesson-section">
        <h3>⚠️ Growth မှာ သတိထားရန်</h3>
        <ul>
          <li>Sales တိုးပြီး Profit မတိုးခြင်း</li>
          <li>Customer များလာပြီး Service ကျဆင်းခြင်း</li>
          <li>Team မတိုးဘဲ Business တိုးချဲ့ခြင်း</li>
          <li>Cash Flow မစီမံဘဲ Expansion လုပ်ခြင်း</li>
          <li>Process မရှိဘဲ လူအင်အားပဲတိုးခြင်း</li>
        </ul>
      </div>

      <div class="lesson-section">
        <h3>📝 Final Business Exercise</h3>

        <p>
          ကိုယ့်လုပ်ငန်းကို အောက်ပါ ၅ ခုနဲ့ အမှတ်ပေးပါ။
        </p>

        <ul>
          <li>Sales — /10</li>
          <li>Marketing — /10</li>
          <li>Finance — /10</li>
          <li>People — /10</li>
          <li>Operations — /10</li>
        </ul>

        <p>
          အမှတ်အနည်းဆုံးရတဲ့ Area ကို
          လာမယ့် 30 ရက်အတွင်း အဓိကတိုးတက်အောင်လုပ်မယ့်
          Action Plan တစ်ခုရေးပါ။
        </p>
      </div>

      <div class="lesson-section key-takeaway">
        <h3>🏆 Business Fundamentals — Final Takeaway</h3>

        <p>
          <strong>
            Business တစ်ခုအောင်မြင်ဖို့ Sales တစ်ခုတည်းမလုံလောက်ပါဘူး။
            Customer Value၊ Strategy၊ Marketing၊ Sales၊ Finance၊
            People နဲ့ Operations အားလုံးကို System တစ်ခုအဖြစ်
            ချိတ်ဆက်စီမံနိုင်မှ ရေရှည်တည်တံ့ပြီး တိုးချဲ့နိုင်တဲ့
            Business ဖြစ်လာမှာ ဖြစ်ပါတယ်။
          </strong>
        </p>

        <p>
          ဒီ Course ကိုပြီးဆုံးတဲ့အချိန်မှာ
          "အလုပ်ကို ဘယ်လိုလုပ်မလဲ?" ဆိုတာတင်မဟုတ်ဘဲ
          "Business ကို ဘယ်လိုစီမံမလဲ?" ဆိုတဲ့
          Manager Thinking ကို စတင်ရရှိလာသင့်ပါတယ်။
        </p>
      </div>
    `,
    action: `
      <h3>🏆 Final Action Plan</h3>

      <ol>
        <li>ကိုယ့် Business ရဲ့ လက်ရှိအခြေအနေကို စစ်ဆေးပါ။</li>
        <li>အကြီးဆုံး Business Problem ၃ ခုရေးပါ။</li>
        <li>Root Cause ရှာပါ။</li>
        <li>Priority သတ်မှတ်ပါ။</li>
        <li>30-Day Action Plan ရေးပါ။</li>
        <li>KPI သတ်မှတ်ပါ။</li>
        <li>Weekly Review လုပ်ပါ။</li>
      </ol>

      <p>
        <strong>
          Business Manager တစ်ယောက်အနေနဲ့
          "လုပ်နေတယ်" ထက် "Result ရနေတယ်" ကို အမြဲတိုင်းတာပါ။
        </strong>
      </p>
    `,
    quiz: `
      <h3>❓ Final Quiz</h3>

      <p>
        <strong>
          Business Growth အတွက် Sales တိုးတာတစ်ခုတည်းနဲ့ လုံလောက်ပါသလား?
        </strong>
      </p>

      <p>
        ❌ မလုံလောက်ပါ။
      </p>

      <p>
        ✅ Sales အပြင် Profit၊ Cash Flow၊ Customer၊ People၊
        Operations နဲ့ Management System တွေပါ တိုးတက်ကောင်းမွန်ရပါမယ်။
      </p>
    `
  };

  /* ---------------------------------------------------------
     Lessons Array
     --------------------------------------------------------- */

  const LESSONS = [
    LESSON_01,
    LESSON_02,
    LESSON_03,
    LESSON_04,
    LESSON_05,
    LESSON_06,
    LESSON_07,
    LESSON_08,
    LESSON_09,
    LESSON_10
  ];

  BUSINESS_COURSE.lessons = LESSONS;

  /* ---------------------------------------------------------
     API
     --------------------------------------------------------- */

  function getBusinessLessons() {
    return LESSONS;
  }

  function getBusinessLesson(id) {
    return LESSONS.find(function (lesson) {
      return lesson.id === id;
    }) || null;
  }

  function isBusinessLessonCompleted(id) {
    return getCompleted().includes(id);
  }

  function completeBusinessLesson(id) {
    if (!getBusinessLesson(id)) return false;

    const completed = getCompleted();

    if (!completed.includes(id)) {
      completed.push(id);
      saveCompleted(completed);
    }

    notifyProgress();

    return true;
  }

  function resetBusinessProgress() {
    localStorage.removeItem(STORAGE_KEY);
    notifyProgress();
  }

  function getBusinessProgress() {
    const total = LESSONS.length;

    const completed = LESSONS.filter(function (lesson) {
      return isBusinessLessonCompleted(lesson.id);
    }).length;

    const percent =
      total === 0
        ? 0
        : Math.round((completed / total) * 100);

    return {
      courseId: BUSINESS_COURSE.id,
      total: total,
      completed: completed,
      remaining: total - completed,
      percent: percent
    };
  }

  /* ---------------------------------------------------------
     Register Academy
     --------------------------------------------------------- */

  window.AungBusinessAcademy =
    window.AungBusinessAcademy || {};

  window.AungBusinessAcademy.COURSES =
    window.AungBusinessAcademy.COURSES || [];

  const existingIndex =
    window.AungBusinessAcademy.COURSES.findIndex(function (course) {
      return course.id === BUSINESS_COURSE.id;
    });

  if (existingIndex >= 0) {
    window.AungBusinessAcademy.COURSES[existingIndex] =
      BUSINESS_COURSE;
  } else {
    window.AungBusinessAcademy.COURSES.push(
      BUSINESS_COURSE
    );
  }

  window.AungBusinessAcademy.BUSINESS_COURSE =
    BUSINESS_COURSE;

  window.AungBusinessAcademy.BUSINESS_LESSONS =
    LESSONS;

  /* ---------------------------------------------------------
     Public API
     --------------------------------------------------------- */

  window.AungBusinessAcademy.getBusinessLessons =
    getBusinessLessons;

  window.AungBusinessAcademy.getBusinessLesson =
    getBusinessLesson;

  window.AungBusinessAcademy.isBusinessLessonCompleted =
    isBusinessLessonCompleted;

  window.AungBusinessAcademy.completeBusinessLesson =
    completeBusinessLesson;

  window.AungBusinessAcademy.resetBusinessProgress =
    resetBusinessProgress;

  window.AungBusinessAcademy.getBusinessProgress =
    getBusinessProgress;

  /* ---------------------------------------------------------
     Standalone compatibility aliases
     --------------------------------------------------------- */

  window.BUSINESS_COURSE = BUSINESS_COURSE;
  window.BUSINESS_LESSONS = LESSONS;

  window.getBusinessProgress =
    getBusinessProgress;

  window.completeBusinessLesson =
    completeBusinessLesson;

  window.getBusinessLesson =
    getBusinessLesson;

  console.log(
    "✅ Aung Business Academy — Business Fundamentals loaded:",
    LESSONS.length,
    "lessons"
  );

})();
