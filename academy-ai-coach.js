/* =========================================================
   AUNG BUSINESS ACADEMY
   AI BUSINESS COACH
   PROFESSIONAL LONG CONTENT VERSION 2.0
   Burmese Business Consulting Engine
   ========================================================= */

(function () {
  "use strict";

  const STORAGE_KEY =
    "aung_business_academy_ai_coach_history_v2";

  let root = null;

  /* =========================================================
     STYLE
     ========================================================= */

  function injectStyles() {
    if (document.getElementById("aic-v2-style")) return;

    const style = document.createElement("style");
    style.id = "aic-v2-style";

    style.textContent = `
      #aung-ai-coach-root{
        width:100%;
        max-width:1200px;
        margin:0 auto;
        padding:22px;
        font-family:
          Arial,
          "Noto Sans Myanmar",
          "Myanmar Text",
          sans-serif;
        color:#1e293b;
      }

      #aung-ai-coach-root *{
        box-sizing:border-box;
      }

      .aic2-title{
        margin-bottom:20px;
      }

      .aic2-title h1{
        margin:0;
        font-size:28px;
        font-weight:800;
        color:#0f172a;
      }

      .aic2-title p{
        margin:8px 0 0;
        color:#64748b;
        line-height:1.8;
        font-size:14px;
      }

      .aic2-layout{
        display:grid;
        grid-template-columns:250px 1fr;
        gap:18px;
      }

      .aic2-topics{
        background:#fff;
        border:1px solid #e2e8f0;
        border-radius:18px;
        padding:15px;
        height:max-content;
      }

      .aic2-topics-title{
        font-size:13px;
        font-weight:800;
        margin-bottom:12px;
        color:#0f172a;
      }

      .aic2-topic{
        width:100%;
        border:0;
        background:#f8fafc;
        color:#334155;
        border-radius:11px;
        padding:12px;
        margin-bottom:8px;
        text-align:left;
        cursor:pointer;
        font-weight:700;
        font-size:12px;
      }

      .aic2-topic:hover,
      .aic2-topic.active{
        background:#eff6ff;
        color:#2563eb;
      }

      .aic2-chat{
        min-width:0;
        background:#fff;
        border:1px solid #e2e8f0;
        border-radius:18px;
        overflow:hidden;
        box-shadow:0 10px 30px rgba(15,23,42,.06);
      }

      .aic2-chat-head{
        padding:17px 19px;
        background:#0f172a;
        color:#fff;
        display:flex;
        align-items:center;
        gap:12px;
      }

      .aic2-avatar{
        width:46px;
        height:46px;
        border-radius:14px;
        background:#2563eb;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:23px;
      }

      .aic2-name{
        font-size:15px;
        font-weight:800;
      }

      .aic2-status{
        color:#93c5fd;
        font-size:11px;
        margin-top:3px;
      }

      .aic2-messages{
        min-height:520px;
        max-height:650px;
        overflow-y:auto;
        padding:20px;
        background:#f8fafc;
      }

      .aic2-message{
        display:flex;
        margin-bottom:16px;
      }

      .aic2-message.user{
        justify-content:flex-end;
      }

      .aic2-bubble{
        max-width:88%;
        padding:15px 17px;
        border-radius:15px;
        font-size:13px;
        line-height:1.9;
      }

      .aic2-message.bot .aic2-bubble{
        background:#fff;
        border:1px solid #e2e8f0;
        border-top-left-radius:5px;
        color:#334155;
      }

      .aic2-message.user .aic2-bubble{
        background:#2563eb;
        color:#fff;
        border-top-right-radius:5px;
      }

      .aic2-answer h3{
        margin:0 0 9px;
        color:#0f172a;
        font-size:15px;
      }

      .aic2-answer h4{
        margin:16px 0 7px;
        color:#1e40af;
        font-size:13px;
      }

      .aic2-answer p{
        margin:7px 0;
      }

      .aic2-answer ul,
      .aic2-answer ol{
        margin:8px 0 10px 20px;
        padding:0;
      }

      .aic2-answer li{
        margin-bottom:7px;
      }

      .aic2-box{
        margin:12px 0;
        padding:13px;
        background:#f8fafc;
        border:1px solid #e2e8f0;
        border-radius:11px;
      }

      .aic2-box strong{
        color:#0f172a;
      }

      .aic2-quick{
        display:flex;
        flex-wrap:wrap;
        gap:7px;
        padding:13px 15px 6px;
        border-top:1px solid #e2e8f0;
      }

      .aic2-quick button{
        border:1px solid #dbeafe;
        background:#eff6ff;
        color:#2563eb;
        border-radius:999px;
        padding:8px 11px;
        cursor:pointer;
        font-size:11px;
        font-weight:700;
      }

      .aic2-input{
        display:flex;
        gap:9px;
        padding:10px 15px 15px;
      }

      .aic2-textarea{
        flex:1;
        resize:none;
        min-width:0;
        border:1px solid #cbd5e1;
        border-radius:12px;
        padding:12px;
        font-family:inherit;
        font-size:13px;
        outline:none;
      }

      .aic2-textarea:focus{
        border-color:#2563eb;
      }

      .aic2-send{
        width:90px;
        border:0;
        border-radius:12px;
        background:#2563eb;
        color:#fff;
        font-weight:800;
        cursor:pointer;
      }

      .aic2-clear{
        width:100%;
        border:0;
        background:transparent;
        color:#64748b;
        cursor:pointer;
        font-size:11px;
        margin-top:4px;
      }

      @media(max-width:800px){
        .aic2-layout{
          grid-template-columns:1fr;
        }

        .aic2-topics{
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:7px;
        }

        .aic2-topics-title{
          grid-column:1/-1;
        }

        .aic2-topic{
          margin:0;
        }

        .aic2-clear{
          grid-column:1/-1;
        }
      }

      @media(max-width:600px){
        #aung-ai-coach-root{
          padding:14px;
        }

        .aic2-title h1{
          font-size:23px;
        }

        .aic2-messages{
          min-height:450px;
          max-height:600px;
          padding:14px;
        }

        .aic2-bubble{
          max-width:94%;
          font-size:12px;
        }

        .aic2-send{
          width:70px;
        }
      }
    `;

    document.head.appendChild(style);
  }

  /* =========================================================
     STORAGE
     ========================================================= */

  function getHistory(){
    try{
      const data = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
      );

      return Array.isArray(data) ? data : [];
    }catch(e){
      return [];
    }
  }

  function saveHistory(data){
    try{
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data.slice(-60))
      );
    }catch(e){}
  }

  /* =========================================================
     SALES
     ========================================================= */

  function salesAdvice(){

    return `
      <div class="aic2-answer">

        <h3>🎯 Sales Performance Analysis</h3>

        <p>
          Sales ကျနေခြင်း၊ Target မပြည့်ခြင်း၊
          Sales Team Productivity လျော့ကျခြင်းတွေကို
          ပြဿနာတစ်ခုတည်းအဖြစ် မကြည့်သင့်ပါ။
          Professional Sales Manager တစ်ယောက်အနေနဲ့
          Sales Result ကို ဖြစ်ပေါ်စေတဲ့ အကြောင်းရင်းတွေကို
          အဆင့်ဆင့် ခွဲခြမ်းစိတ်ဖြာဖို့လိုပါတယ်။
        </p>

        <h4>1. လက်ရှိ Sales Gap ကို သတ်မှတ်ပါ</h4>

        <p>
          ပထမဆုံး Target နဲ့ Actual Sales ကို
          နှိုင်းယှဉ်ပါ။ ဥပမာ Monthly Target က
          100 သိန်းဖြစ်ပြီး Actual Sales က 75 သိန်းဆိုရင်
          Sales Achievement 75% ဖြစ်ပြီး Gap 25 သိန်းရှိပါတယ်။
          အဲဒီ Gap ကို သိမှသာ ဘယ်နေရာမှာ ပြဿနာရှိနေတယ်ဆိုတာ
          ဆက်လက်ရှာဖွေနိုင်ပါမယ်။
        </p>

        <div class="aic2-box">
          <strong>Sales Achievement %</strong><br>
          Actual Sales ÷ Target × 100
        </div>

        <h4>2. Sales Gap ရဲ့ Root Cause ရှာပါ</h4>

        <p>
          Target မပြည့်တာကို Sales Team မကြိုးစားလို့ဆိုပြီး
          တန်းဆုံးဖြတ်မထားသင့်ပါဘူး။ Product, Price,
          Distribution, Customer, Competitor, People,
          Execution စတဲ့ အချက်တွေကို စစ်ဆေးရပါမယ်။
        </p>

        <ol>
          <li>Customer အရေအတွက် လျော့သွားသလား?</li>
          <li>Existing Customer Order Frequency ကျသွားသလား?</li>
          <li>Product Availability မရှိဘူးလား?</li>
          <li>Competitor Promotion ပိုကောင်းနေသလား?</li>
          <li>Price Position မယှဉ်နိုင်တော့ဘူးလား?</li>
          <li>Sales Representative ရဲ့ Visit Productivity ကျသွားသလား?</li>
          <li>Territory Coverage မပြည့်တော့ဘူးလား?</li>
        </ol>

        <h4>3. Customer Analysis လုပ်ပါ</h4>

        <p>
          Customer အားလုံးကို တစ်ပုံစံတည်း မစီမံသင့်ပါဘူး။
          Customer တစ်ဦးချင်းစီရဲ့ Sales Value,
          Growth Potential, Order Frequency,
          Payment Behavior နဲ့ Relationship Strength
          ကို စစ်ဆေးပါ။
        </p>

        <ul>
          <li>Top Customers</li>
          <li>Growing Customers</li>
          <li>Declining Customers</li>
          <li>Inactive Customers</li>
          <li>New Potential Customers</li>
        </ul>

        <h4>4. Sales Team ကို Activity KPI နဲ့ စီမံပါ</h4>

        <p>
          Result KPI တစ်ခုတည်းနဲ့ Sales Team ကို
          စောင့်ကြည့်တာမလုံလောက်ပါဘူး။
          Result မရခင်မှာ ဖြစ်ပေါ်နေတဲ့ Activity KPI တွေကို
          ကြည့်ရပါမယ်။
        </p>

        <ul>
          <li>Daily Customer Visits</li>
          <li>New Customer Calls</li>
          <li>Productive Calls</li>
          <li>Order Conversion</li>
          <li>Average Order Value</li>
          <li>New Customer Acquisition</li>
          <li>Collection Performance</li>
        </ul>

        <h4>5. Manager Action Plan</h4>

        <p>
          Sales Manager တစ်ယောက်အနေနဲ့
          ပြဿနာတွေကို ကိုယ်တိုင်လိုက်လုပ်ပေးတာထက်
          Team ကို Problem Solving လုပ်နိုင်အောင်
          Coaching ပေးသင့်ပါတယ်။
        </p>

        <div class="aic2-box">
          <strong>
            Target Gap → Root Cause → Action →
            Owner → Deadline → Follow-up
          </strong>
        </div>

        <h4>6. 7-Day Sales Recovery Plan</h4>

        <ol>
          <li>
            Day 1 – Sales Data Analysis
          </li>
          <li>
            Day 2 – Top Customer Review
          </li>
          <li>
            Day 3 – Lost Customer Recovery
          </li>
          <li>
            Day 4 – Territory Coverage Review
          </li>
          <li>
            Day 5 – Sales Team Coaching
          </li>
          <li>
            Day 6 – Competitor & Market Check
          </li>
          <li>
            Day 7 – Result Review & Next Action
          </li>
        </ol>

        <h4>💡 Manager Thinking</h4>

        <p>
          Sales ကျတဲ့အခါ “ဘယ်သူ့အမှားလဲ?” လို့ မေးတာထက်
          “ဘယ် Process မှာ Break ဖြစ်နေလဲ?” လို့ မေးပါ။
          ဒီအတွေးအခေါ်က Sales Team ကို အပြစ်တင်တဲ့
          Management ကနေ Performance Management အဖြစ်
          ပြောင်းလဲပေးနိုင်ပါတယ်။
        </p>

      </div>
    `;
  }

  /* =========================================================
     MARKETING
     ========================================================= */

  function marketingAdvice(){

    return `
      <div class="aic2-answer">

        <h3>📣 Marketing Strategy Analysis</h3>

        <p>
          Marketing ဆိုတာ Advertisement တင်ခြင်း
          ဒါမှမဟုတ် Promotion လုပ်ခြင်းတစ်ခုတည်းမဟုတ်ပါ။
          Customer ဘယ်သူလဲ၊ Customer ဘာလိုချင်လဲ၊
          ကိုယ့် Product က ဘာ Value ပေးနိုင်လဲ၊
          ဘယ် Channel ကနေ Customer ဆီရောက်မလဲ၊
          နောက်ဆုံး Purchase ဖြစ်အောင် ဘယ်လိုလုပ်မလဲဆိုတာ
          စနစ်တကျ စီမံခြင်းဖြစ်ပါတယ်။
        </p>

        <h4>1. Customer ကို နားလည်ပါ</h4>

        <p>
          Marketing Strategy မစခင် Target Customer ကို
          သတ်မှတ်ရပါမယ်။ အသက်၊ ဝင်ငွေ၊ နေထိုင်ရာနေရာ၊
          ဝယ်ယူသုံးစွဲမှု၊ လိုအပ်ချက်နဲ့ Pain Point တွေကို
          သိရှိထားဖို့လိုပါတယ်။
        </p>

        <h4>2. Customer Problem ကို ရှာပါ</h4>

        <p>
          Customer က Product ကို မဝယ်တာဟာ
          Product မကောင်းလို့တစ်ခုတည်း မဟုတ်ပါ။
          Customer ရဲ့ Problem ကို ကိုယ့် Product က
          မဖြေရှင်းပေးနိုင်တာ၊ Value Proposition မရှင်းတာ၊
          Price မသင့်တာ၊ Channel မရောက်တာတွေကြောင့်လည်း
          ဖြစ်နိုင်ပါတယ်။
        </p>

        <h4>3. Competitor Analysis</h4>

        <ul>
          <li>Competitor Price</li>
          <li>Product Quality</li>
          <li>Brand Position</li>
          <li>Distribution Coverage</li>
          <li>Promotion</li>
          <li>Customer Service</li>
          <li>Digital Presence</li>
        </ul>

        <h4>4. Marketing Mix – 4Ps</h4>

        <div class="aic2-box">
          <strong>Product</strong> – Customer လိုအပ်ချက်ကို ဖြေရှင်းနိုင်သလား?<br><br>
          <strong>Price</strong> – Customer Value နဲ့ ကိုက်ညီသလား?<br><br>
          <strong>Place</strong> – Customer ဝယ်ချင်တဲ့နေရာမှာ ရှိသလား?<br><br>
          <strong>Promotion</strong> – Customer ကို Value ကို ရှင်းပြနိုင်သလား?
        </div>

        <h4>5. Campaign တစ်ခုကို Objective မရှိဘဲ မလုပ်ပါနဲ့</h4>

        <p>
          Campaign တစ်ခုလုပ်တိုင်း Awareness တိုးချင်တာလား၊
          Trial တိုးချင်တာလား၊ Sales တိုးချင်တာလား၊
          New Customer ရချင်တာလားဆိုတာ ရှင်းလင်းရပါမယ်။
        </p>

        <h4>6. Marketing KPI</h4>

        <ul>
          <li>Reach</li>
          <li>Engagement</li>
          <li>Leads</li>
          <li>Conversion Rate</li>
          <li>Customer Acquisition Cost</li>
          <li>Sales Revenue</li>
          <li>Marketing ROI</li>
        </ul>

        <h4>💡 Manager Thinking</h4>

        <p>
          Marketing Campaign အောင်မြင်တယ်ဆိုတာ
          Like နဲ့ Comment များတာတစ်ခုတည်းမဟုတ်ပါ။
          Business Objective နဲ့ ချိတ်ဆက်ပြီး
          Customer Behavior နဲ့ Revenue Impact ကို
          တိုင်းတာနိုင်ရပါမယ်။
        </p>

      </div>
    `;
  }

  /* =========================================================
     FINANCE
     ========================================================= */

  function financeAdvice(){

    return `
      <div class="aic2-answer">

        <h3>💰 Business Finance & Profit Analysis</h3>

        <p>
          Business တစ်ခုရဲ့ Sales တိုးလာတာနဲ့
          Business က အောင်မြင်တယ်လို့ မသတ်မှတ်နိုင်ပါဘူး။
          Revenue တိုးပေမယ့် Cost ပိုတက်နေတယ်ဆိုရင်
          Profit ကျနိုင်ပါတယ်။ Profit ရှိပေမယ့်
          Cash မရှိရင်လည်း လုပ်ငန်းလည်ပတ်ဖို့
          အခက်အခဲရှိနိုင်ပါတယ်။
        </p>

        <h4>1. Revenue ကို သိပါ</h4>

        <p>
          သတ်မှတ်ကာလအတွင်း Product / Service ရောင်းချမှုကနေ
          ရရှိတဲ့ ဝင်ငွေကို Revenue လို့ခေါ်ပါတယ်။
          Revenue ကို Product, Customer, Channel,
          Territory အလိုက် ခွဲကြည့်ရင်
          ဘယ်နေရာက Business ကို အဓိကပံ့ပိုးနေလဲ သိနိုင်ပါတယ်။
        </p>

        <h4>2. Gross Profit</h4>

        <div class="aic2-box">
          <strong>
            Gross Profit = Revenue − COGS
          </strong>
          <br><br>
          COGS ဆိုတာ ရောင်းကုန်ပစ္စည်းရဲ့
          တိုက်ရိုက်ကုန်ကျစရိတ် ဖြစ်ပါတယ်။
        </div>

        <h4>3. Gross Margin</h4>

        <div class="aic2-box">
          <strong>
            Gross Margin % =
            Gross Profit ÷ Revenue × 100
          </strong>
        </div>

        <p>
          Margin ကျနေတယ်ဆိုရင် Sales Volume တိုးဖို့ထက်
          Product Mix, Price, Discount, COGS နဲ့
          Cost Structure ကို အရင်စစ်ဆေးသင့်ပါတယ်။
        </p>

        <h4>4. Cash Flow</h4>

        <p>
          Profit ရှိနေပေမယ့် Customer တွေဆီက
          ငွေမရသေးရင် Cash Flow ပြဿနာ ဖြစ်နိုင်ပါတယ်။
          ဒါကြောင့် Receivable, Payable,
          Inventory နဲ့ Cash Balance ကို
          ပုံမှန်စောင့်ကြည့်ရပါမယ်။
        </p>

        <h4>5. Business Owner အနေနဲ့ အပတ်စဉ်စစ်သင့်တဲ့အချက်များ</h4>

        <ul>
          <li>Total Sales</li>
          <li>Gross Profit</li>
          <li>Gross Margin</li>
          <li>Operating Expense</li>
          <li>Net Profit</li>
          <li>Cash Balance</li>
          <li>Account Receivable</li>
          <li>Inventory Value</li>
        </ul>

        <h4>💡 Manager Thinking</h4>

        <p>
          “Sales ဘယ်လောက်ရလဲ?” ဆိုတာနဲ့မပြီးပါဘူး။
          “အဲဒီ Sales ထဲက ဘယ်လောက်အမြတ်ကျန်လဲ?
          ဘယ်လောက် Cash အဖြစ်ပြန်ရောက်လာလဲ?”
          ဆိုတာကို သိရပါမယ်။
        </p>

      </div>
    `;
  }

  /* =========================================================
     HR
     ========================================================= */

  function hrAdvice(){

    return `
      <div class="aic2-answer">

        <h3>👥 HR & People Management Analysis</h3>

        <p>
          Business တစ်ခုရဲ့ Performance ကို
          လူတွေက အဓိကမောင်းနှင်ပါတယ်။
          Product ကောင်းတာ၊ Strategy ကောင်းတာနဲ့ မလုံလောက်ပါဘူး။
          မှန်ကန်တဲ့လူကို မှန်ကန်တဲ့နေရာမှာထားပြီး
          Clear Expectation, Coaching, Feedback,
          Accountability နဲ့ Motivation ပေးနိုင်ဖို့လိုပါတယ်။
        </p>

        <h4>1. Role & Responsibility</h4>

        <p>
          ဝန်ထမ်းတစ်ယောက်ဟာ ဘာကိုတာဝန်ယူရမလဲ၊
          ဘယ် Result ရရမလဲဆိုတာ မရှင်းလင်းရင်
          Performance ကို တိတိကျကျတိုင်းတာလို့မရပါဘူး။
        </p>

        <h4>2. KPI သတ်မှတ်ပါ</h4>

        <ul>
          <li>Specific</li>
          <li>Measurable</li>
          <li>Achievable</li>
          <li>Relevant</li>
          <li>Time-bound</li>
        </ul>

        <h4>3. Coaching vs Micromanagement</h4>

        <p>
          Manager က ဝန်ထမ်းတိုင်းရဲ့အလုပ်ကို
          ကိုယ်တိုင်လိုက်လုပ်ပေးတာဟာ Sustainable Management
          မဟုတ်ပါဘူး။ ဘာကြောင့်လုပ်ရမလဲ၊ ဘယ်လိုလုပ်ရမလဲ၊
          ဘယ် Result ကို မျှော်လင့်လဲဆိုတာ သင်ပေးပြီး
          ဝန်ထမ်းကို Ownership ရှိလာအောင် Coaching ပေးသင့်ပါတယ်။
        </p>

        <h4>4. Weekly Performance Review</h4>

        <ol>
          <li>Last Week Result</li>
          <li>Target Gap</li>
          <li>Key Problems</li>
          <li>Root Cause</li>
          <li>Next Week Action</li>
          <li>Support Needed</li>
        </ol>

        <h4>5. High Performer / Low Performer</h4>

        <p>
          High Performer ကို Recognition ပေးပြီး
          Best Practice ကို Team ထဲမျှဝေပါ။
          Low Performer ကိုတော့ အပြစ်တင်တာထက်
          Skill Gap, Will Gap, Resource Gap,
          Process Gap ဘယ်ဟာလဲဆိုတာ ခွဲခြမ်းပါ။
        </p>

        <h4>💡 Manager Thinking</h4>

        <p>
          Good Manager ဆိုတာ လူတွေကို
          ကိုယ့်အပေါ်မှီခိုအောင်လုပ်တဲ့သူ မဟုတ်ပါဘူး။
          ကိုယ်မရှိတဲ့အချိန်မှာတောင် Team က
          စနစ်တကျအလုပ်လုပ်နိုင်အောင် တည်ဆောက်ပေးနိုင်တဲ့သူ ဖြစ်ပါတယ်။
        </p>

      </div>
    `;
  }

  /* =========================================================
     STRATEGY
     ========================================================= */

  function strategyAdvice(){

    return `
      <div class="aic2-answer">

        <h3>🧠 Business Strategy & Decision Making</h3>

        <p>
          Strategy ဆိုတာ အလုပ်တွေအများကြီးလုပ်ခြင်းမဟုတ်ပါ။
          ဘယ်အရာကို အဓိကလုပ်မလဲ၊ ဘယ်အရာကို မလုပ်ဘူးလဲဆိုတာ
          ရွေးချယ်ပြီး Business Objective ကို ရောက်အောင်
          Resource တွေကို စနစ်တကျ အသုံးချခြင်းဖြစ်ပါတယ်။
        </p>

        <h4>1. Vision & Goal</h4>

        <p>
          Business က ဘယ်နေရာကိုသွားချင်လဲဆိုတာ
          ရှင်းလင်းရပါမယ်။ Goal မရှင်းရင် Team Activity
          တွေဟာ အလုပ်များပေမယ့် Business Result မဖြစ်နိုင်ပါဘူး။
        </p>

        <h4>2. Current Situation Analysis</h4>

        <ul>
          <li>Sales Performance</li>
          <li>Profitability</li>
          <li>Customer Base</li>
          <li>Market Position</li>
          <li>Competitor Strength</li>
          <li>Internal Capability</li>
        </ul>

        <h4>3. Root Cause Thinking</h4>

        <p>
          Problem ဖြစ်တိုင်း ပထမဆုံးမြင်ရတဲ့အကြောင်းရင်းကို
          Root Cause လို့ မယူဆပါနဲ့။
          “ဘာကြောင့်?” ဆိုတဲ့မေးခွန်းကို အကြိမ်ကြိမ်မေးပြီး
          အခြေခံအကြောင်းရင်းကို ရှာပါ။
        </p>

        <h4>4. Decision Framework</h4>

        <div class="aic2-box">
          <strong>
            Problem → Data → Root Cause →
            Options → Risk → Decision →
            Action → Review
          </strong>
        </div>

        <h4>5. Business Growth</h4>

        <p>
          Growth လုပ်တဲ့အခါ Sales တိုးဖို့တစ်ခုတည်းမစဉ်းစားပါနဲ့။
          Customer Base တိုးခြင်း၊ Existing Customer Value တိုးခြင်း၊
          Product အသစ်ထည့်ခြင်း၊ Territory တိုးချဲ့ခြင်း၊
          Distribution တိုးခြင်းနဲ့ Process Efficiency တိုးခြင်း
          စတာတွေကို အတူတူစဉ်းစားရပါမယ်။
        </p>

        <h4>💡 Strategic Manager Thinking</h4>

        <p>
          အလုပ်များတာနဲ့ Productivity မတူပါဘူး။
          Business Manager ရဲ့အလုပ်က
          Team ကို အလုပ်များအောင်လုပ်ပေးတာမဟုတ်ဘဲ
          Business Result ရလာအောင် မှန်ကန်တဲ့အလုပ်တွေကို
          ဦးစားပေးစေခြင်းဖြစ်ပါတယ်။
        </p>

      </div>
    `;
  }

  /* =========================================================
     GENERAL BUSINESS
     ========================================================= */

  function generalAdvice(){

    return `
      <div class="aic2-answer">

        <h3>🏢 Aung Business Coach – Business Diagnosis</h3>

        <p>
          Business ပြဿနာတစ်ခုကို ဖြေရှင်းတဲ့အခါ
          အမြန်ဆုံးအဖြေကို ရှာတာထက်
          ပြဿနာရဲ့ အရင်းခံအကြောင်းရင်းကို သိအောင်
          စနစ်တကျ ခွဲခြမ်းစိတ်ဖြာတာက ပိုအရေးကြီးပါတယ်။
        </p>

        <h4>Business Health Check – 6 Areas</h4>

        <ol>
          <li>
            <strong>Sales</strong> –
            Revenue နဲ့ Customer Growth ဘယ်လိုလဲ?
          </li>

          <li>
            <strong>Marketing</strong> –
            Customer Acquisition နဲ့ Brand Position ဘယ်လိုလဲ?
          </li>

          <li>
            <strong>Finance</strong> –
            Profit, Margin နဲ့ Cash Flow ဘယ်လိုလဲ?
          </li>

          <li>
            <strong>People</strong> –
            Team Capability နဲ့ Productivity ဘယ်လိုလဲ?
          </li>

          <li>
            <strong>Operations</strong> –
            Process တွေ Efficient ဖြစ်သလား?
          </li>

          <li>
            <strong>Strategy</strong> –
            Business Direction က ရှင်းလင်းသလား?
          </li>
        </ol>

        <h4>Manager Problem-Solving Framework</h4>

        <div class="aic2-box">
          <strong>Step 1:</strong> Problem Define<br>
          <strong>Step 2:</strong> Data Collect<br>
          <strong>Step 3:</strong> Root Cause<br>
          <strong>Step 4:</strong> Options<br>
          <strong>Step 5:</strong> Decision<br>
          <strong>Step 6:</strong> Action Plan<br>
          <strong>Step 7:</strong> Review Result
        </div>

        <p>
          Business Manager တစ်ယောက်အနေနဲ့
          ပြဿနာတိုင်းကို ကိုယ်တိုင်ဖြေရှင်းဖို့မလိုပါဘူး။
          Team က Problem ကို ကိုယ်တိုင်ခွဲခြမ်းပြီး
          Solution တင်ပြနိုင်အောင် Management System
          တည်ဆောက်ပေးနိုင်ရင် Business က ပိုပြီး
          Scale လုပ်နိုင်လာပါမယ်။
        </p>

      </div>
    `;
  }

  /* =========================================================
     QUESTION ROUTER
     ========================================================= */

  function generateAnswer(question){

    const q = String(question || "").toLowerCase();

    if(
      q.includes("sales") ||
      q.includes("အရောင်း") ||
      q.includes("ရောင်းအား") ||
      q.includes("target") ||
      q.includes("အော်ဒါ")
    ){
      return salesAdvice();
    }

    if(
      q.includes("marketing") ||
      q.includes("brand") ||
      q.includes("campaign") ||
      q.includes("promotion") ||
      q.includes("စျေးကွက်")
    ){
      return marketingAdvice();
    }

    if(
      q.includes("finance") ||
      q.includes("profit") ||
      q.includes("margin") ||
      q.includes("cash") ||
      q.includes("အမြတ်") ||
      q.includes("ငွေ")
    ){
      return financeAdvice();
    }

    if(
      q.includes("hr") ||
      q.includes("team") ||
      q.includes("staff") ||
      q.includes("employee") ||
      q.includes("ဝန်ထမ်း")
    ){
      return hrAdvice();
    }

    if(
      q.includes("strategy") ||
      q.includes("decision") ||
      q.includes("growth") ||
      q.includes("လုပ်ငန်း")
    ){
      return strategyAdvice();
    }

    return generalAdvice();
  }

  /* =========================================================
     TEXT ESCAPE
     ========================================================= */

  function escapeText(text){
    return String(text)
      .replace(/&/g,"&amp;")
      .replace(/</g,"&lt;")
      .replace(/>/g,"&gt;")
      .replace(/"/g,"&quot;")
      .replace(/'/g,"&#039;")
      .replace(/\n/g,"<br>");
  }

  /* =========================================================
     ADD MESSAGE
     ========================================================= */

  function addMessage(type,content,save){

    const messages =
      root.querySelector(".aic2-messages");

    if(!messages) return;

    const wrapper =
      document.createElement("div");

    wrapper.className =
      "aic2-message " + type;

    const bubble =
      document.createElement("div");

    bubble.className =
      "aic2-bubble";

    bubble.innerHTML = content;

    wrapper.appendChild(bubble);

    messages.appendChild(wrapper);

    messages.scrollTop =
      messages.scrollHeight;

    if(save){

      const history = getHistory();

      history.push({
        type:type,
        content:content,
        time:Date.now()
      });

      saveHistory(history);
    }
  }

  /* =========================================================
     SEND
     ========================================================= */

  function sendMessage(text){

    const question =
      String(text || "").trim();

    if(!question) return;

    addMessage(
      "user",
      escapeText(question),
      true
    );

    const answer =
      generateAnswer(question);

    setTimeout(function(){

      addMessage(
        "bot",
        answer,
        true
      );

    },300);
  }

  /* =========================================================
     RENDER
     ========================================================= */

  function render(){

    injectStyles();

    if(!root){

      root =
        document.getElementById(
          "aung-ai-coach-root"
        );
    }

    if(!root){

      root =
        document.createElement("section");

      root.id =
        "aung-ai-coach-root";

      const main =
        document.querySelector("main") ||
        document.querySelector(".main-content") ||
        document.querySelector(".content") ||
        document.body;

      main.appendChild(root);
    }

    root.innerHTML = `

      <div class="aic2-title">

        <h1>
          🤖 AI Business Coach
        </h1>

        <p>
          Aung Business Academy ရဲ့
          Professional Business Advisor။
          Sales, Marketing, Finance, HR,
          Strategy နှင့် Business Management
          ပြဿနာများကို Framework အခြေပြု
          ခွဲခြမ်းစိတ်ဖြာပေးပါမည်။
        </p>

      </div>

      <div class="aic2-layout">

        <aside class="aic2-topics">

          <div class="aic2-topics-title">
            Business Coaching Topics
          </div>

          <button
            class="aic2-topic"
            data-topic="sales">
            🎯 Sales Management
          </button>

          <button
            class="aic2-topic"
            data-topic="marketing">
            📣 Marketing
          </button>

          <button
            class="aic2-topic"
            data-topic="finance">
            💰 Finance & Profit
          </button>

          <button
            class="aic2-topic"
            data-topic="hr">
            👥 HR & People
          </button>

          <button
            class="aic2-topic"
            data-topic="strategy">
            🧠 Strategy
          </button>

          <button
            class="aic2-topic"
            data-topic="business">
            🏢 Business Management
          </button>

          <button
            class="aic2-clear"
            id="aic2-clear">
            Clear Conversation
          </button>

        </aside>

        <section class="aic2-chat">

          <div class="aic2-chat-head">

            <div class="aic2-avatar">
              🤖
            </div>

            <div>

              <div class="aic2-name">
                Aung Business Coach
              </div>

              <div class="aic2-status">
                ● Professional Business Advisor
              </div>

            </div>

          </div>

          <div class="aic2-messages"></div>

          <div class="aic2-quick">

            <button
              data-question="Sales ကျနေတယ် ဘာကြောင့်လဲ၊ ဘယ်လိုပြန်တိုးအောင်လုပ်ရမလဲ?"
            >
              🎯 Sales ကျနေတယ်
            </button>

            <button
              data-question="Marketing Strategy ကို Professional ပုံစံနဲ့ ဘယ်လိုတည်ဆောက်ရမလဲ?"
            >
              📣 Marketing Strategy
            </button>

            <button
              data-question="Profit Margin တိုးအောင် ဘယ်လိုစီမံရမလဲ?"
            >
              💰 Profit တိုးချင်တယ်
            </button>

            <button
              data-question="Sales Team Performance ကို ဘယ်လိုတိုးတက်အောင်လုပ်ရမလဲ?"
            >
              👥 Team Performance
            </button>

          </div>

          <div class="aic2-input">

            <textarea
              id="aic2-input"
              class="aic2-textarea"
              rows="3"
              placeholder="သင့် Business Problem ကို အသေးစိတ်ရေးပါ..."
            ></textarea>

            <button
              id="aic2-send"
              class="aic2-send">
              Send
            </button>

          </div>

        </section>

      </div>
    `;

    bindEvents();
    loadHistoryToChat();
  }

  /* =========================================================
     HISTORY
     ========================================================= */

  function loadHistoryToChat(){

    const history =
      getHistory();

    if(!history.length){

      addMessage(
        "bot",
        `
          <div class="aic2-answer">

            <h3>👋 မင်္ဂလာပါ</h3>

            <p>
              ကျွန်တော်က
              <strong>Aung Business Coach</strong>
              ပါ။
            </p>

            <p>
              သင့် Business ရဲ့
              Sales, Marketing, Finance,
              HR, Strategy နဲ့ Management
              ပြဿနာတွေကို Professional
              Business Framework နဲ့
              ခွဲခြမ်းစိတ်ဖြာပေးနိုင်ပါတယ်။
            </p>

            <div class="aic2-box">

              <strong>
                ပိုကောင်းတဲ့အဖြေရဖို့
              </strong>

              <br><br>

              လက်ရှိအခြေအနေ၊
              ပြဿနာ၊ Target,
              Actual Result နဲ့
              သင်လိုချင်တဲ့ Result ကို
              အသေးစိတ်ရေးပေးပါ။

            </div>

            <p>
              ဥပမာ —
              “ကျွန်တော့် Sales Team မှာ
              လူ 10 ယောက်ရှိတယ်။
              Monthly Target က သိန်း 500 ဖြစ်ပေမယ့်
              လက်ရှိ 350 သိန်းပဲရနေတယ်။
              ဘာကြောင့်ဖြစ်နိုင်ပြီး
              ဘယ်လို Recovery Plan ချသင့်လဲ?”
            </p>

          </div>
        `,
        false
      );

      return;
    }

    history.forEach(function(item){

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

  function bindEvents(){

    const input =
      document.getElementById(
        "aic2-input"
      );

    const send =
      document.getElementById(
        "aic2-send"
      );

    if(send){

      send.addEventListener(
        "click",
        function(){

          sendMessage(
            input.value
          );

          input.value = "";

          input.focus();

        }
      );

    }

    if(input){

      input.addEventListener(
        "keydown",
        function(event){

          if(
            event.key === "Enter" &&
            !event.shiftKey
          ){

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
      .forEach(function(button){

        button.addEventListener(
          "click",
          function(){

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
      .forEach(function(button){

        button.addEventListener(
          "click",
          function(){

            const topic =
              button.getAttribute(
                "data-topic"
              );

            const questions = {

              sales:
                "Sales Performance ကျနေတယ်။ Root Cause ကို ဘယ်လိုရှာပြီး Recovery Plan ဘယ်လိုချရမလဲ?",

              marketing:
                "Marketing Strategy တစ်ခုကို Customer, Competitor, 4Ps နဲ့ KPI အပါအဝင် ဘယ်လိုတည်ဆောက်ရမလဲ?",

              finance:
                "Business Profit Margin ကျနေတယ်။ Revenue, Cost, Margin နဲ့ Cash Flow ကို ဘယ်လိုခွဲခြမ်းရမလဲ?",

              hr:
                "Sales Team Performance မကောင်းဘူး။ Coaching, KPI နဲ့ Accountability ကို ဘယ်လိုစီမံရမလဲ?",

              strategy:
                "Business Growth Strategy တည်ဆောက်တဲ့အခါ ဘယ်လို Framework ကို အသုံးပြုသင့်လဲ?",

              business:
                "Business တစ်ခုလုံးရဲ့ Sales, Marketing, Finance, People နဲ့ Operations ကို ဘယ်လိုစစ်ဆေးသင့်လဲ?"

            };

            sendMessage(
              questions[topic]
            );

            root
              .querySelectorAll(
                ".aic2-topic"
              )
              .forEach(function(item){

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
        "aic2-clear"
      );

    if(clear){

      clear.addEventListener(
        "click",
        function(){

          localStorage.removeItem(
            STORAGE_KEY
          );

          render();

        }
      );

    }
  }

  /* =========================================================
     SIDEBAR CONNECTION
     ========================================================= */

  function bindSidebar(){

    const elements =
      document.querySelectorAll(
        "button,a,li,[role='button']"
      );

    elements.forEach(function(element){

      if(
        element.dataset &&
        element.dataset.aic2Bound === "1"
      ){
        return;
      }

      const text =
        (
          element.textContent || ""
        )
        .trim()
        .toLowerCase();

      if(
        text.includes("ai business coach") ||
        text.includes("business coach") ||
        text.includes("ai coach")
      ){

        element.dataset.aic2Bound = "1";

        element.addEventListener(
          "click",
          function(event){

            const href =
              element.getAttribute(
                "href"
              );

            if(
              href &&
              href !== "#" &&
              !href.startsWith(
                "javascript:"
              )
            ){
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

  function show(){

    render();

    if(root){

      try{

        root.scrollIntoView({
          behavior:"smooth",
          block:"start"
        });

      }catch(e){}

    }

  }

  window.AungAIBusinessCoach = {
    show:show,
    render:render,
    clear:function(){

      localStorage.removeItem(
        STORAGE_KEY
      );

      render();

    }
  };

  /* =========================================================
     INIT
     ========================================================= */

  function init(){

    setTimeout(
      bindSidebar,
      500
    );

    setTimeout(
      bindSidebar,
      1200
    );

  }

  if(
    document.readyState ===
    "loading"
  ){

    document.addEventListener(
      "DOMContentLoaded",
      init
    );

  }else{

    init();

  }

})();
