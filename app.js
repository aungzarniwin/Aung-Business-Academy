/* =========================================================
   AUNG BUSINESS ACADEMY V8.0 PROFESSIONAL
   Complete app.js
   Burmese Detailed Business Lessons
   No external lesson files required
   ========================================================= */

(function () {
  "use strict";

  /* =========================================================
     STORAGE
     ========================================================= */

  const STORAGE_KEY = "aba_completed_lessons";

  function getCompletedLessons() {
    try {
      const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      return Array.isArray(data) ? data : [];
    } catch (error) {
      return [];
    }
  }

  function saveCompletedLessons(list) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(Array.from(new Set(list)))
    );
  }

  /* =========================================================
     LESSON DATA
     ========================================================= */

  const lessons = [
    {
      id: 1,
      title: "Business Basics",
      icon: "🏢",
      category: "Business Foundation",
      description:
        "Business ဆိုတာဘာလဲ၊ Business Model၊ Customer Value၊ Revenue၊ Cost နဲ့ Profit တို့ရဲ့ ဆက်စပ်မှုကို နားလည်ရန်။",

      content: `
        <h2>Lesson Objective</h2>

        <p>
          ဒီသင်ခန်းစာပြီးဆုံးတဲ့အချိန်မှာ Business ဆိုတာ ဘာလဲ၊
          Business တစ်ခု အောင်မြင်ဖို့ ဘာတွေလိုအပ်လဲ၊
          Revenue နဲ့ Profit ဘာကွာလဲ၊ Customer Value က ဘာကြောင့်အရေးကြီးလဲဆိုတာ
          ရှင်းရှင်းလင်းလင်း နားလည်နိုင်ရပါမယ်။
        </p>

        <h2>1. Business ဆိုတာဘာလဲ?</h2>

        <p>
          Business ဆိုတာ Customer တစ်ယောက်ရဲ့ လိုအပ်ချက်၊ ပြဿနာ သို့မဟုတ်
          လိုချင်မှုကို ဖြေရှင်းပေးပြီး အဲ့ဒီအတွက် တန်ဖိုးတစ်ခုရရှိအောင်
          စနစ်တကျလုပ်ဆောင်တဲ့ လုပ်ငန်းစဉ်တစ်ခု ဖြစ်ပါတယ်။
        </p>

        <p>
          ရောင်းတာတစ်ခုတည်းကို Business လို့ မခေါ်နိုင်ပါဘူး။
          Customer က ဘာလိုချင်လဲ၊ ဘာကြောင့်ဝယ်လဲ၊ ဘယ်လိုထပ်ဝယ်အောင်လုပ်မလဲ၊
          Company က ဘယ်လိုအမြတ်ရမလဲဆိုတာတွေပါ Business ထဲမှာ ပါဝင်ပါတယ်။
        </p>

        <h2>2. Customer Value</h2>

        <p>
          Customer Value ဆိုတာ Customer က Product သို့မဟုတ် Service
          တစ်ခုကို ရရှိပြီးတဲ့အခါ သူ့အတွက်ရရှိလာတဲ့ အကျိုးကျေးဇူးဖြစ်ပါတယ်။
        </p>

        <p>
          ဥပမာ - Customer တစ်ယောက်က ကားဝယ်တဲ့အခါ
          ကားတစ်စီးရတာတင်မဟုတ်ပါဘူး။
          သွားလာရလွယ်ကူခြင်း၊ အချိန်သက်သာခြင်း၊ Comfort ရခြင်း၊
          Business အတွက်အသုံးချနိုင်ခြင်း စတဲ့ Value တွေကို ရရှိပါတယ်။
        </p>

        <h2>3. Revenue, Cost နဲ့ Profit</h2>

        <p>
          <strong>Revenue</strong> ဆိုတာ ရောင်းချမှုကနေ ရရှိလာတဲ့ စုစုပေါင်းဝင်ငွေ ဖြစ်ပါတယ်။
        </p>

        <p>
          <strong>Cost</strong> ဆိုတာ Product သို့မဟုတ် Service ကို
          ဖန်တီး၊ ဝယ်ယူ၊ ဖြန့်ဖြူး၊ ရောင်းချဖို့ ကုန်ကျတဲ့ စရိတ် ဖြစ်ပါတယ်။
        </p>

        <p>
          <strong>Profit</strong> ဆိုတာ Revenue ထဲက Cost တွေကို နုတ်ပြီး ကျန်တဲ့အမြတ် ဖြစ်ပါတယ်။
        </p>

        <div class="lesson-note">
          <strong>အခြေခံ Formula:</strong><br>
          Profit = Revenue - Cost
        </div>

        <h2>4. Business Model</h2>

        <p>
          Business Model ဆိုတာ Company တစ်ခုက Customer ကို Value ဘယ်လိုပေးမလဲ၊
          ဘယ်လိုရောင်းမလဲ၊ Revenue ဘယ်လိုရမလဲဆိုတဲ့ လုပ်ငန်းပုံစံ ဖြစ်ပါတယ်။
        </p>

        <p>
          Business Model ကို နားလည်တဲ့ Manager တစ်ယောက်ဟာ
          Sales Target တစ်ခုတည်းကို မကြည့်ဘဲ Company ရဲ့ Revenue,
          Cost, Customer, Distribution နဲ့ Profit အားလုံးကို တွဲပြီး စဉ်းစားနိုင်ပါတယ်။
        </p>

        <h2>5. Manager Thinking</h2>

        <p>
          Manager တစ်ယောက်အနေနဲ့ "ရောင်းအားဘယ်လောက်ရလဲ" ဆိုတာတစ်ခုတည်း
          မေးမနေသင့်ပါဘူး။
        </p>

        <ul>
          <li>ဘယ် Product က အမြတ်ပိုရလဲ?</li>
          <li>ဘယ် Customer က Growth Potential ပိုရှိလဲ?</li>
          <li>Cost ဘယ်နေရာမှာ မြင့်နေလဲ?</li>
          <li>Sales Growth က Sustainable ဖြစ်လား?</li>
          <li>Customer Retention ကောင်းလား?</li>
        </ul>

        <h2>6. လုပ်ငန်းခွင်ဥပမာ</h2>

        <p>
          Company တစ်ခုမှာ Sales 100 သိန်း ရောင်းနိုင်ပေမယ့်
          Cost 95 သိန်း ဖြစ်နေမယ်ဆိုရင် Revenue ကြီးပေမယ့် Profit က 5 သိန်းပဲ ရပါမယ်။
          ဒါကြောင့် Sales Manager တစ်ယောက်ဟာ Sales Volume တင်မကဘဲ
          Margin နဲ့ Profit ကိုပါ နားလည်ရပါတယ်။
        </p>

        <h2>7. အရေးကြီးတဲ့ Key Points</h2>

        <ul>
          <li>Business = Customer Value + Revenue + Sustainable Profit</li>
          <li>Revenue များတာနဲ့ Profit များတယ်လို့ မဆိုနိုင်ပါ</li>
          <li>Customer ကို နားလည်ခြင်းက Business ရဲ့ အခြေခံပါ</li>
          <li>Manager က Business ကို System တစ်ခုလုံးအနေနဲ့ ကြည့်ရပါတယ်</li>
        </ul>

        <h2>Action Plan</h2>

        <p>
          ကိုယ်သိတဲ့ Business တစ်ခုကို ရွေးပြီး Customer၊ Product၊ Revenue၊ Cost
          နဲ့ Profit ဘယ်လိုဆက်စပ်နေတယ်ဆိုတာ ကိုယ်တိုင်ရေးကြည့်ပါ။
        </p>

        <h2>Knowledge Check</h2>

        <ol>
          <li>Revenue နဲ့ Profit ဘာကွာသလဲ?</li>
          <li>Customer Value ဆိုတာဘာလဲ?</li>
          <li>Sales Manager က Sales တစ်ခုတည်းကိုပဲ ကြည့်သင့်သလား?</li>
        </ol>

        <h2>Summary</h2>

        <p>
          Business ကို နားလည်ဖို့ Sales တစ်ခုတည်းကို မကြည့်ဘဲ
          Customer Value၊ Revenue၊ Cost၊ Profit နဲ့ Business Model
          အားလုံးကို ဆက်စပ်စဉ်းစားရပါမယ်။
        </p>
      `
    },

    {
      id: 2,
      title: "Strategic Thinking",
      icon: "♟️",
      category: "Strategy",
      description:
        "Strategic Thinking၊ SWOT၊ Market Opportunity နဲ့ Long-term Business Direction ကို နားလည်ရန်။",

      content: `
        <h2>Lesson Objective</h2>

        <p>
          Strategic Thinking ဆိုတာ နေ့စဉ်လုပ်ငန်းကိုပဲ လိုက်လုပ်ခြင်းမဟုတ်ဘဲ
          လက်ရှိအခြေအနေ၊ အနာဂတ်အခွင့်အရေး၊ ပြိုင်ဘက်၊ Customer နဲ့
          Company Capability ကိုကြည့်ပြီး မှန်ကန်တဲ့ Direction ရွေးချယ်နိုင်ခြင်း ဖြစ်ပါတယ်။
        </p>

        <h2>1. Strategic Thinking ဆိုတာဘာလဲ?</h2>

        <p>
          Strategic Thinking ဆိုတာ "အခုဘာလုပ်ရမလဲ" ဆိုတာထက်
          "ဘာကြောင့် ဒီအရာကိုလုပ်ရတာလဲ၊ အနာဂတ်မှာ ဘာဖြစ်လာမလဲ"
          ဆိုတာကို စဉ်းစားခြင်း ဖြစ်ပါတယ်။
        </p>

        <h2>2. Strategy နဲ့ Tactics</h2>

        <p>
          Strategy က အဓိက Direction ဖြစ်ပါတယ်။
          Tactics က အဲ့ဒီ Strategy ကို အကောင်အထည်ဖော်ဖို့ အသုံးပြုတဲ့ လုပ်ဆောင်ချက် ဖြစ်ပါတယ်။
        </p>

        <p>
          ဥပမာ - Yangon Market Share တိုးမယ်ဆိုတာ Strategy ဖြစ်နိုင်ပါတယ်။
          Distributor အသစ် ၅ ခု ခန့်အပ်ခြင်း၊ Retail Outlet အသစ် ၅၀၀ ဖွင့်ခြင်းတို့က Tactics ဖြစ်ပါတယ်။
        </p>

        <h2>3. SWOT Analysis</h2>

        <ul>
          <li><strong>Strength:</strong> ကိုယ့်ရဲ့အားသာချက်</li>
          <li><strong>Weakness:</strong> ကိုယ့်ရဲ့အားနည်းချက်</li>
          <li><strong>Opportunity:</strong> အပြင်ဘက်က အခွင့်အရေး</li>
          <li><strong>Threat:</strong> အပြင်ဘက်က အန္တရာယ်</li>
        </ul>

        <h2>4. Market ကို ဘယ်လိုကြည့်မလဲ?</h2>

        <p>
          Market Analysis လုပ်တဲ့အခါ Customer Trend၊ Competitor Activity၊
          Pricing၊ Distribution၊ Product Availability နဲ့ Consumer Behavior
          တို့ကို စောင့်ကြည့်ရပါတယ်။
        </p>

        <h2>5. Manager Thinking</h2>

        <p>
          Strategic Manager တစ်ယောက်ဟာ Problem ဖြစ်ပြီးမှ တုံ့ပြန်သူ မဟုတ်ဘဲ
          Problem မဖြစ်ခင် ကြိုတင်မြင်နိုင်အောင် Market Signal တွေကို စောင့်ကြည့်သူ ဖြစ်ရပါတယ်။
        </p>

        <h2>6. လက်တွေ့ဥပမာ</h2>

        <p>
          Competitor တစ်ခုက Product အသစ်ကို Discount နဲ့ စတင်ဖြန့်ချိလာတယ်ဆိုပါစို့။
          ချက်ချင်း Price လျှော့တာထက် Customer Loyalty၊ Product Differentiation၊
          Availability နဲ့ Service Advantage ကို စဉ်းစားပြီး Response Strategy ချမှတ်ရပါမယ်။
        </p>

        <h2>7. Key Points</h2>

        <ul>
          <li>Strategy = Direction</li>
          <li>Tactics = Action</li>
          <li>Market ကို အမြဲစောင့်ကြည့်ရမယ်</li>
          <li>Competitor ကိုသာမက Customer ကိုပါ နားလည်ရမယ်</li>
          <li>Short-term Result နဲ့ Long-term Sustainability ကို Balance လုပ်ရမယ်</li>
        </ul>

        <h2>Action Plan</h2>

        <p>
          ကိုယ်လုပ်နေတဲ့ Business အတွက် SWOT Analysis တစ်ခု ကိုယ်တိုင်ရေးပါ။
          Strength ၃ ခု၊ Weakness ၃ ခု၊ Opportunity ၃ ခု၊ Threat ၃ ခု ရေးကြည့်ပါ။
        </p>

        <h2>Summary</h2>

        <p>
          Strategic Thinking က Manager တစ်ယောက်ကို နေ့စဉ်လုပ်ငန်းကို
          စီမံသူအဖြစ်ကနေ Business Direction ကို ဦးဆောင်သူအဖြစ် ပြောင်းလဲပေးပါတယ်။
        </p>
      `
    },

    {
      id: 3,
      title: "Brand Basics",
      icon: "🏷️",
      category: "Brand",
      description:
        "Brand ဆိုတာဘာလဲ၊ Brand Positioning၊ Brand Image နဲ့ Customer Perception ကို နားလည်ရန်။",

      content: `
        <h2>Lesson Objective</h2>

        <p>
          Brand တစ်ခုကို Logo သို့မဟုတ် Product Name တစ်ခုအဖြစ်မမြင်ဘဲ
          Customer ရဲ့စိတ်ထဲမှာ တည်ရှိနေတဲ့ Perception အဖြစ် နားလည်နိုင်ရန်။
        </p>

        <h2>1. Brand ဆိုတာဘာလဲ?</h2>

        <p>
          Brand ဆိုတာ Logo တစ်ခုတည်း မဟုတ်ပါဘူး။
          Customer က Company သို့မဟုတ် Product အကြောင်း စဉ်းစားတဲ့အခါ
          ခံစားရတဲ့ Image၊ Trust၊ Experience နဲ့ Expectation အားလုံးပေါင်းစပ်ထားတာ ဖြစ်ပါတယ်။
        </p>

        <h2>2. Brand Identity</h2>

        <p>
          Company က Customer ကို ဘယ်လိုမြင်စေချင်သလဲဆိုတာ Brand Identity ဖြစ်ပါတယ်။
          Logo၊ Color၊ Message၊ Product Quality၊ Service Style စတာတွေ ပါဝင်ပါတယ်။
        </p>

        <h2>3. Brand Positioning</h2>

        <p>
          Market ထဲမှာ "ကျွန်တော်တို့ Brand ကို Customer က ဘာအတွက်မှတ်မိစေချင်သလဲ"
          ဆိုတာ Positioning ဖြစ်ပါတယ်။
        </p>

        <h2>4. Brand Promise</h2>

        <p>
          Brand က Customer ကို ကတိပေးထားတဲ့ Value ဖြစ်ပါတယ်။
          Promise ပေးပြီး Deliver မလုပ်နိုင်ရင် Trust လျော့ကျသွားပါတယ်။
        </p>

        <h2>5. Sales Manager အတွက် Brand</h2>

        <p>
          Sales Team က Brand ရဲ့ အပြင်ဘက်မျက်နှာစာ ဖြစ်ပါတယ်။
          Customer ကို ပြောတဲ့စကား၊ ဝတ်စားပုံ၊ Service၊ Follow-up၊
          Complaint Handling အားလုံးက Brand Image ကို သက်ရောက်စေပါတယ်။
        </p>

        <h2>လက်တွေ့ဥပမာ</h2>

        <p>
          Product Quality ကောင်းပေမယ့် Salesperson က Customer ကို မလေးစားဘူးဆိုရင်
          Customer Experience မကောင်းတော့ပါဘူး။
          ဒါကြောင့် Brand Building မှာ Sales Team ရဲ့ Behavior က အရေးကြီးပါတယ်။
        </p>

        <h2>Key Points</h2>

        <ul>
          <li>Brand ≠ Logo</li>
          <li>Brand = Customer Perception + Experience + Trust</li>
          <li>Brand Promise ကို Consistently Deliver လုပ်ရမယ်</li>
          <li>Sales Team က Brand Experience ကို ဖန်တီးပေးသူတွေ ဖြစ်တယ်</li>
        </ul>

        <h2>Action Plan</h2>

        <p>
          ကိုယ်လုပ်နေတဲ့ Brand ကို Customer က ဘာအတွက်မှတ်မိစေချင်သလဲ
          စာကြောင်းတစ်ကြောင်းနဲ့ ရေးကြည့်ပါ။
        </p>

        <h2>Summary</h2>

        <p>
          Strong Brand ဆိုတာ Advertising ကြောင့်ပဲ ဖြစ်လာတာမဟုတ်ပါဘူး။
          Customer ရရှိတဲ့ Experience တိုင်းက Brand ကို တည်ဆောက်ပေးပါတယ်။
        </p>
      `
    },

    {
      id: 4,
      title: "Marketing Basics",
      icon: "📣",
      category: "Marketing",
      description:
        "Marketing Fundamentals၊ Customer Segmentation၊ 4Ps နဲ့ Marketing Strategy ကို နားလည်ရန်။",

      content: `
        <h2>Lesson Objective</h2>

        <p>
          Marketing ဆိုတာ Advertising လုပ်ခြင်းတစ်ခုတည်း မဟုတ်ဘဲ
          Customer ကိုရှာဖွေခြင်း၊ နားလည်ခြင်း၊ Value ဖန်တီးခြင်း၊
          Communication လုပ်ခြင်းနဲ့ Demand ဖန်တီးခြင်းတို့ ပါဝင်ကြောင်း နားလည်ရန်။
        </p>

        <h2>1. Marketing ဆိုတာဘာလဲ?</h2>

        <p>
          Marketing ဆိုတာ မှန်ကန်တဲ့ Customer ကို မှန်ကန်တဲ့ Product ကို
          မှန်ကန်တဲ့ Message နဲ့ ရောက်ရှိအောင် စီမံခြင်း ဖြစ်ပါတယ်။
        </p>

        <h2>2. Customer Segmentation</h2>

        <p>
          Customer အားလုံးဟာ တူညီကြတာမဟုတ်ပါဘူး။
          အသက်၊ ဝင်ငွေ၊ Location၊ Behavior၊ Need နဲ့ Buying Power အပေါ်မူတည်ပြီး
          Customer ကို Segment ခွဲနိုင်ပါတယ်။
        </p>

        <h2>3. Marketing Mix - 4Ps</h2>

        <ul>
          <li><strong>Product:</strong> ဘာကိုရောင်းမလဲ?</li>
          <li><strong>Price:</strong> ဘယ်ဈေးနဲ့ရောင်းမလဲ?</li>
          <li><strong>Place:</strong> ဘယ်နေရာကနေ Customer ဆီရောက်မလဲ?</li>
          <li><strong>Promotion:</strong> Customer ကို ဘယ်လိုသိအောင်လုပ်မလဲ?</li>
        </ul>

        <h2>4. Marketing နဲ့ Sales ဆက်စပ်မှု</h2>

        <p>
          Marketing က Demand ဖန်တီးပေးပါတယ်။
          Sales က အဲ့ဒီ Demand ကို Revenue အဖြစ် ပြောင်းလဲပေးပါတယ်။
          Marketing နဲ့ Sales မပူးပေါင်းရင် Business Growth က မတည်ငြိမ်နိုင်ပါဘူး။
        </p>

        <h2>လက်တွေ့ဥပမာ</h2>

        <p>
          Product ကောင်းပေမယ့် Customer ဘယ်သူလဲ မသိဘူး၊
          ဘယ် Channel မှာရောင်းမလဲ မသိဘူးဆိုရင် Marketing Strategy မပြည့်စုံပါဘူး။
        </p>

        <h2>Manager Thinking</h2>

        <p>
          Sales Manager က Marketing Campaign တစ်ခုရဲ့ Result ကို
          "လူတွေမြင်တယ်" ဆိုတာနဲ့မဆုံးဖြတ်ဘဲ
          Leads၊ Conversion၊ Sales၊ Repeat Purchase စတဲ့ Business Result တွေနဲ့ တိုင်းတာသင့်ပါတယ်။
        </p>

        <h2>Action Plan</h2>

        <p>
          ကိုယ့် Product အတွက် Target Customer တစ်ယောက်ကို သတ်မှတ်ပြီး
          သူ့ရဲ့ Need၊ Problem၊ Buying Reason နဲ့ Preferred Channel ကို ရေးပါ။
        </p>

        <h2>Summary</h2>

        <p>
          Marketing ရဲ့အဓိကရည်ရွယ်ချက်က Customer ကို နားလည်ပြီး
          Customer Value ကို မှန်ကန်တဲ့ Market ဆီရောက်အောင် ဖန်တီးပေးခြင်း ဖြစ်ပါတယ်။
        </p>
      `
    },

    {
      id: 5,
      title: "Sales Basics",
      icon: "💰",
      category: "Sales",
      description:
        "Professional Sales Process၊ Prospecting၊ Customer Need၊ Objection Handling နဲ့ Closing ကို လေ့လာရန်။",

      content: `
        <h2>Lesson Objective</h2>

        <p>
          Sales ကို ရောင်းချခြင်းတစ်ခုတည်းအဖြစ်မမြင်ဘဲ
          Customer Need ကိုရှာဖွေပြီး Value ကိုပေးကာ
          Sustainable Customer Relationship တည်ဆောက်တဲ့ Process အဖြစ် နားလည်ရန်။
        </p>

        <h2>1. Sales ဆိုတာဘာလဲ?</h2>

        <p>
          Sales ဆိုတာ Product ကို Customer ထံ ရောင်းချရုံမဟုတ်ပါဘူး။
          Customer ရဲ့ Problem ကို နားလည်ပြီး သင့်တော်တဲ့ Solution ပေးခြင်း ဖြစ်ပါတယ်။
        </p>

        <h2>2. Sales Process</h2>

        <ol>
          <li>Prospecting</li>
          <li>Customer Understanding</li>
          <li>Presentation</li>
          <li>Objection Handling</li>
          <li>Closing</li>
          <li>Follow-up</li>
        </ol>

        <h2>3. Prospecting</h2>

        <p>
          ဝယ်ယူနိုင်ခြေရှိတဲ့ Customer တွေကို ရှာဖွေခြင်း ဖြစ်ပါတယ်။
          Salesperson တစ်ယောက်အနေနဲ့ Potential Customer List ကို
          စနစ်တကျ တည်ဆောက်ထားသင့်ပါတယ်။
        </p>

        <h2>4. Customer Need</h2>

        <p>
          Customer က ဘာလိုချင်တယ်ဆိုတာ ခန့်မှန်းမနေဘဲ မေးမြန်းရပါတယ်။
          Open-ended Questions သုံးခြင်းက Customer Need ကို ပိုနားလည်စေပါတယ်။
        </p>

        <div class="lesson-note">
          <strong>ဥပမာ:</strong>
          "အခုလက်ရှိမှာ အရောင်းပိုင်းမှာ ဘယ်အခက်အခဲကို အများဆုံးကြုံနေရပါသလဲ?"
        </div>

        <h2>5. Presentation</h2>

        <p>
          Product Feature တွေကို စာရင်းလိုက်ပြောတာထက်
          Customer အတွက် ဘာအကျိုးရှိမလဲကို ရှင်းပြရပါမယ်။
        </p>

        <h2>6. Objection Handling</h2>

        <p>
          Customer က "ဈေးကြီးတယ်" လို့ပြောရင် ချက်ချင်းငြင်းမနေသင့်ပါဘူး။
          ဘာကြောင့် ဈေးကြီးတယ်လို့ထင်တာလဲဆိုတာ ရှာဖွေပြီး
          Value ကို ပြန်ရှင်းပြရပါမယ်။
        </p>

        <h2>7. Closing</h2>

        <p>
          Customer က ဝယ်ယူဖို့ Ready ဖြစ်တဲ့အချိန်မှာ
          Quantity၊ Price၊ Delivery၊ Payment Terms စတာတွေကို Confirm လုပ်ပြီး Order ပိတ်ရပါတယ်။
        </p>

        <h2>8. Follow-up</h2>

        <p>
          Sale ပြီးတာနဲ့ Relationship မပြီးသေးပါဘူး။
          Delivery၊ Stock၊ Payment၊ Satisfaction နဲ့ Repeat Order ကို Follow-up လုပ်ရပါတယ်။
        </p>

        <h2>Sales Manager Thinking</h2>

        <p>
          Sales Manager က Team ကို "ပိုရောင်းပါ" လို့ပဲ ပြောနေရုံမဟုတ်ဘဲ
          Prospecting ကောင်းလား၊ Conversion Rate ဘယ်လောက်လဲ၊
          Average Order Value ဘယ်လောက်လဲ၊ Repeat Customer ဘယ်လောက်ရှိလဲ
          ဆိုတာတွေကို Analyze လုပ်ရပါတယ်။
        </p>

        <h2>လက်တွေ့ဥပမာ</h2>

        <p>
          Target = 100 သိန်း၊ Achievement = 75 သိန်း ဖြစ်ရင်
          Gap = 25 သိန်း ဖြစ်ပါတယ်။
          Manager က "Target မပြည့်ဘူး" လို့ပဲ မပြောဘဲ
          Gap ဖြစ်ရတဲ့ Root Cause ကို ရှာရပါမယ်။
        </p>

        <h2>Action Plan</h2>

        <p>
          Customer ၅ ယောက်ကို ရွေးပြီး သူတို့ရဲ့ Need၊ Problem၊
          Buying Reason နဲ့ Next Action ကို ရေးပါ။
        </p>

        <h2>Summary</h2>

        <p>
          Professional Sales ဆိုတာ Customer ကို အတင်းဝယ်ခိုင်းခြင်းမဟုတ်ဘဲ
          Customer အတွက် Value ရှိတဲ့ Solution ကို ပေးပြီး
          Long-term Relationship တည်ဆောက်ခြင်း ဖြစ်ပါတယ်။
        </p>
      `
    },

    {
      id: 6,
      title: "Negotiation Skills",
      icon: "🤝",
      category: "Negotiation",
      description:
        "Win-Win Negotiation၊ Customer Objection၊ Price Negotiation နဲ့ Agreement ရယူနည်း။",

      content: `
        <h2>Lesson Objective</h2>

        <p>
          Negotiation ဆိုတာ ကိုယ့်ဘက်ကသာ အနိုင်ရအောင်လုပ်ခြင်းမဟုတ်ဘဲ
          နှစ်ဖက်စလုံးအတွက် လက်ခံနိုင်တဲ့ Agreement ရရှိအောင် ဆွေးနွေးခြင်း ဖြစ်ပါတယ်။
        </p>

        <h2>1. Negotiation ဆိုတာဘာလဲ?</h2>

        <p>
          Price၊ Quantity၊ Payment Terms၊ Delivery၊ Promotion၊ Contract Terms
          စတဲ့အချက်တွေကို နှစ်ဖက်ဆွေးနွေးပြီး Agreement ရယူခြင်း ဖြစ်ပါတယ်။
        </p>

        <h2>2. Preparation</h2>

        <p>
          Negotiation မစခင် ကိုယ့်ရဲ့ Objective၊ Minimum Acceptable Point၊
          Customer Need နဲ့ Alternative Option တွေကို ကြိုတင်သတ်မှတ်ထားရပါတယ်။
        </p>

        <h2>3. Don't Negotiate Only on Price</h2>

        <p>
          Negotiation ကို Price တစ်ခုတည်းပေါ်မှာ မထားသင့်ပါဘူး။
          Quantity၊ Payment Terms၊ Delivery Schedule၊ Service၊ Promotion
          စတာတွေကိုလည်း Negotiation Variable အဖြစ် အသုံးပြုနိုင်ပါတယ်။
        </p>

        <h2>4. Win-Win</h2>

        <p>
          Win-Win ဆိုတာ နှစ်ဖက်စလုံး အကျိုးရှိတဲ့ Agreement ဖြစ်ပါတယ်။
          Customer ကို Value ရပြီး Company ကလည်း Sustainable Profit ရရပါမယ်။
        </p>

        <h2>လက်တွေ့ဥပမာ</h2>

        <p>
          Customer က Discount 10% တောင်းတယ်ဆိုပါစို့။
          ချက်ချင်း Discount ပေးမယ့်အစား Order Volume တိုးပေးရင်
          Discount အချို့ပေးနိုင်တယ်ဆိုတဲ့ပုံစံနဲ့ Exchange လုပ်နိုင်ပါတယ်။
        </p>

        <h2>Manager Thinking</h2>

        <p>
          Negotiation မှာ "ဘာကို ပေးမလဲ" ထက်
          "ဘာရမှ ဘာပေးမလဲ" ဆိုတဲ့ Principle ကို နားလည်ထားရပါမယ်။
        </p>

        <h2>Common Mistakes</h2>

        <ul>
          <li>Preparation မလုပ်ဘဲ Negotiation ဝင်ခြင်း</li>
          <li>Price ကိုသာ Negotiation လုပ်ခြင်း</li>
          <li>Customer Need မနားလည်ခြင်း</li>
          <li>စိတ်ခံစားချက်နဲ့ ဆုံးဖြတ်ခြင်း</li>
          <li>Agreement ကို စာဖြင့် Confirm မလုပ်ခြင်း</li>
        </ul>

        <h2>Action Plan</h2>

        <p>
          လာမယ့် Negotiation တစ်ခုအတွက် Target၊ Minimum Point၊
          Customer Need နဲ့ Give-and-Take Options ၃ ခုရေးပါ။
        </p>

        <h2>Summary</h2>

        <p>
          Negotiation က အနိုင်ယူခြင်းမဟုတ်ဘဲ Value ကို Exchange လုပ်ပြီး
          နှစ်ဖက်စလုံးအတွက် Sustainable Agreement တည်ဆောက်ခြင်း ဖြစ်ပါတယ်။
        </p>
      `
    },

    {
      id: 7,
      title: "Customer Service",
      icon: "❤️",
      category: "Customer Management",
      description:
        "Customer Satisfaction၊ Complaint Handling၊ Service Recovery နဲ့ Customer Retention ကို လေ့လာရန်။",

      content: `
        <h2>Lesson Objective</h2>

        <p>
          Customer Service က Sale ပြီးနောက်လုပ်ရတဲ့အလုပ်တစ်ခုမဟုတ်ဘဲ
          Customer Relationship တစ်ခုလုံးရဲ့ အစိတ်အပိုင်းဖြစ်ကြောင်း နားလည်ရန်။
        </p>

        <h2>1. Customer Satisfaction</h2>

        <p>
          Customer Satisfaction ဆိုတာ Customer ရဲ့ Expectation နဲ့
          Actual Experience ကြားမှာ ဖြစ်ပေါ်တဲ့ ခံစားချက် ဖြစ်ပါတယ်။
        </p>

        <h2>2. Customer Expectation</h2>

        <p>
          Customer ကို အလွန်အကျွံ Promise ပေးပြီး မဖြည့်ဆည်းနိုင်ရင်
          Complaint ဖြစ်နိုင်ပါတယ်။
          ဒါကြောင့် Promise လုပ်သလောက် Deliver လုပ်နိုင်ရပါမယ်။
        </p>

        <h2>3. Complaint Handling</h2>

        <ol>
          <li>Customer ကို အပြည့်အဝနားထောင်ပါ</li>
          <li>ပြဿနာကို သေချာနားလည်ပါ</li>
          <li>လိုအပ်ရင် Empathy ပြပါ</li>
          <li>Solution ပေးပါ</li>
          <li>Follow-up လုပ်ပါ</li>
        </ol>

        <h2>4. Service Recovery</h2>

        <p>
          Service Failure ဖြစ်တဲ့အခါ အမှားကိုဖုံးကွယ်ဖို့ မကြိုးစားဘဲ
          ပြဿနာကို မြန်မြန်ဖြေရှင်းပြီး Customer Trust ကို ပြန်တည်ဆောက်ရပါတယ်။
        </p>

        <h2>5. Customer Retention</h2>

        <p>
          Customer အသစ်ရှာရတာထက် ရှိပြီးသား Customer ကို Retain လုပ်နိုင်ခြင်းက
          Business အတွက် အရေးကြီးပါတယ်။
          Repeat Purchase၊ Customer Relationship နဲ့ Service Quality ကို အာရုံစိုက်ရပါတယ်။
        </p>

        <h2>Sales Manager အတွက်</h2>

        <p>
          Team ရဲ့ Complaint Handling Quality ကို စောင့်ကြည့်ပါ။
          Complaint အရေအတွက်တင်မကဘဲ Complaint ရဲ့ Root Cause ကို ရှာဖွေပြီး
          ပြန်မဖြစ်အောင် System ပြင်ဆင်ရပါတယ်။
        </p>

        <h2>Action Plan</h2>

        <p>
          Customer Complaint တစ်ခုကို ရွေးပြီး Root Cause၊ Immediate Solution
          နဲ့ Preventive Action သုံးခုခွဲရေးပါ။
        </p>

        <h2>Summary</h2>

        <p>
          Customer Service က Customer ကို ကျေနပ်အောင်လုပ်ခြင်းထက်
          Trust နဲ့ Long-term Relationship တည်ဆောက်ခြင်း ဖြစ်ပါတယ်။
        </p>
      `
    },

    {
      id: 8,
      title: "People Management",
      icon: "👥",
      category: "Leadership",
      description:
        "Team Leadership၊ Coaching၊ Delegation၊ Accountability နဲ့ Performance Management ကို လေ့လာရန်။",

      content: `
        <h2>Lesson Objective</h2>

        <p>
          Manager တစ်ယောက်ရဲ့ အဓိကအလုပ်က ကိုယ်တိုင်အလုပ်အများကြီးလုပ်ခြင်းမဟုတ်ဘဲ
          Team ကို အောင်မြင်အောင် ဦးဆောင်နိုင်ခြင်းဖြစ်ကြောင်း နားလည်ရန်။
        </p>

        <h2>1. Manager vs Leader</h2>

        <p>
          Manager က Process၊ Target၊ Resource နဲ့ Performance ကို စီမံပါတယ်။
          Leader က People တွေကို Direction ပေးပြီး Motivation နဲ့ Ownership ဖြစ်လာအောင် ဦးဆောင်ပါတယ်။
        </p>

        <h2>2. Clear Expectations</h2>

        <p>
          Team Member တစ်ယောက်ကို "ပိုကြိုးစားပါ" လို့ပြောတာထက်
          ဘာ Target ရမလဲ၊ ဘယ်အချိန်အတွင်းရမလဲ၊ ဘယ်လို Measure လုပ်မလဲ
          ဆိုတာကို ရှင်းရှင်းလင်းလင်း ပြောရပါတယ်။
        </p>

        <h2>3. Coaching</h2>

        <p>
          Coaching ဆိုတာ အဖြေကို တန်းပေးခြင်းမဟုတ်ပါဘူး။
          Team Member ကို ကိုယ်တိုင်စဉ်းစားပြီး အဖြေရှာနိုင်အောင် မေးခွန်းတွေကနေ လမ်းညွှန်ပေးခြင်း ဖြစ်ပါတယ်။
        </p>

        <h2>4. Delegation</h2>

        <p>
          Delegation ဆိုတာ ကိုယ်မလုပ်ချင်လို့ အလုပ်ပေးတာမဟုတ်ပါဘူး။
          Team Member ရဲ့ Capability တိုးတက်အောင် Responsibility ပေးခြင်း ဖြစ်ပါတယ်။
        </p>

        <h2>5. Accountability</h2>

        <p>
          Target၊ Responsibility နဲ့ Deadline ကို သတ်မှတ်ပြီး
          Result ကို Review လုပ်ရပါတယ်။
          Accountability ရှိတာဟာ Micromanagement လုပ်တာနဲ့ မတူပါဘူး။
        </p>

        <h2>6. Performance Review</h2>

        <p>
          Performance Review မှာ Result တစ်ခုတည်းမကြည့်ဘဲ
          Behavior၊ Capability၊ Problem Solving နဲ့ Development Needs တွေကိုပါ ကြည့်ရပါတယ်။
        </p>

        <h2>Manager Thinking</h2>

        <p>
          Strong Manager က Team ကို မိမိမရှိလည်း အလုပ်လုပ်နိုင်အောင်
          System နဲ့ Capability တည်ဆောက်ပေးနိုင်သူ ဖြစ်ပါတယ်။
        </p>

        <h2>Action Plan</h2>

        <p>
          Team Member တစ်ယောက်အတွက် Strength ၂ ခု၊ Development Area ၂ ခု
          နဲ့ Coaching Action ၃ ခု ရေးပါ။
        </p>

        <h2>Summary</h2>

        <p>
          People Management ရဲ့ အဓိကက People ကို Control လုပ်ခြင်းမဟုတ်ဘဲ
          သူတို့ရဲ့ Potential ကို Unlock လုပ်ပြီး Result ရအောင် ဦးဆောင်ခြင်း ဖြစ်ပါတယ်။
        </p>
      `
    },

    {
      id: 9,
      title: "Profit & Loss",
      icon: "📊",
      category: "Finance",
      description:
        "Revenue၊ Cost၊ Gross Profit၊ Operating Expenses၊ Net Profit နဲ့ Margin ကို နားလည်ရန်။",

      content: `
        <h2>Lesson Objective</h2>

        <p>
          Sales Manager တစ်ယောက်အနေနဲ့ Sales တိုးရုံနဲ့ မပြီးဘဲ
          Margin၊ Cost နဲ့ Profit ကိုပါ နားလည်ပြီး Business Decision ချနိုင်ရန်။
        </p>

        <h2>1. Revenue</h2>

        <p>
          Revenue = ရောင်းချမှုမှရရှိသော စုစုပေါင်းဝင်ငွေ။
        </p>

        <h2>2. Cost</h2>

        <p>
          Business လည်ပတ်ဖို့ ကုန်ကျတဲ့ စရိတ်တွေ ဖြစ်ပါတယ်။
          Product Cost၊ Distribution Cost၊ Salary၊ Rent၊ Marketing Cost စတာတွေ ပါဝင်နိုင်ပါတယ်။
        </p>

        <h2>3. Gross Profit</h2>

        <p>
          Gross Profit = Revenue - Cost of Goods Sold
        </p>

        <h2>4. Gross Margin</h2>

        <p>
          Gross Margin = Gross Profit ÷ Revenue × 100
        </p>

        <div class="lesson-note">
          <strong>ဥပမာ:</strong><br>
          Revenue = 100 သိန်း<br>
          Product Cost = 70 သိန်း<br>
          Gross Profit = 30 သိန်း<br>
          Gross Margin = 30%
        </div>

        <h2>5. Operating Expenses</h2>

        <p>
          Company လည်ပတ်ဖို့ သုံးရတဲ့ Expenses တွေဖြစ်ပါတယ်။
          Salary၊ Office၊ Transport၊ Marketing၊ Utilities စတာတွေ ပါဝင်နိုင်ပါတယ်။
        </p>

        <h2>6. Net Profit</h2>

        <p>
          Gross Profit ထဲက Operating Expenses နဲ့ အခြားသက်ဆိုင်ရာ Cost တွေကို နုတ်ပြီး
          ကျန်တဲ့အမြတ်ကို Net Profit လို့ခေါ်ပါတယ်။
        </p>

        <h2>Sales Manager အတွက် ဘာကြောင့်အရေးကြီးလဲ?</h2>

        <p>
          Sales Manager က Discount ပေးခြင်း၊ Promotion ချခြင်း၊
          Customer Terms သတ်မှတ်ခြင်းတို့မှာ Profit Impact ကို သိထားရပါတယ်။
        </p>

        <h2>လက်တွေ့ဥပမာ</h2>

        <p>
          Sales တိုးလာပေမယ့် Discount အရမ်းများပြီး Distribution Cost တက်လာရင်
          Revenue တိုးပေမယ့် Profit ကျနိုင်ပါတယ်။
        </p>

        <h2>Action Plan</h2>

        <p>
          ကိုယ့်လုပ်ငန်းရဲ့ Revenue၊ Product Cost၊ Gross Profit နဲ့ Margin ကို
          ဥပမာကိန်းဂဏန်းနဲ့ တွက်ကြည့်ပါ။
        </p>

        <h2>Summary</h2>

        <p>
          Good Sales Manager ဆိုတာ Sales များအောင်လုပ်နိုင်သူသာမက
          Profitable Sales ဖြစ်အောင် လုပ်နိုင်သူ ဖြစ်ပါတယ်။
        </p>
      `
    },

    {
      id: 10,
      title: "Goal Setting",
      icon: "🎯",
      category: "Performance",
      description:
        "SMART Goals၊ Business Targets၊ Action Plans နဲ့ Goal Tracking ကို လေ့လာရန်။",

      content: `
        <h2>Lesson Objective</h2>

        <p>
          ရည်မှန်းချက်ကို စိတ်ကူးတစ်ခုအဖြစ် မထားဘဲ
          တိုင်းတာနိုင်တဲ့ Goal နဲ့ Action Plan အဖြစ် ပြောင်းလဲနိုင်ရန်။
        </p>

        <h2>1. Goal ဆိုတာဘာလဲ?</h2>

        <p>
          Goal ဆိုတာ သတ်မှတ်ထားတဲ့ အချိန်အတွင်း ရရှိလိုတဲ့ Result ဖြစ်ပါတယ်။
        </p>

        <h2>2. SMART Goal</h2>

        <ul>
          <li><strong>S - Specific:</strong> တိကျရမယ်</li>
          <li><strong>M - Measurable:</strong> တိုင်းတာနိုင်ရမယ်</li>
          <li><strong>A - Achievable:</strong> လက်တွေ့ရနိုင်ရမယ်</li>
          <li><strong>R - Relevant:</strong> Business နဲ့ ဆက်စပ်ရမယ်</li>
          <li><strong>T - Time-bound:</strong> Deadline ရှိရမယ်</li>
        </ul>

        <h2>3. Goal ကို Action အဖြစ်ပြောင်းခြင်း</h2>

        <p>
          "Sales တိုးမယ်" ဆိုတာ Goal မပြည့်စုံသေးပါဘူး။
          "ဒီလအတွင်း Sales 15% တိုးမယ်" ဆိုရင် ပိုတိုင်းတာနိုင်ပါတယ်။
        </p>

        <p>
          ပြီးရင် ဘယ်လိုတိုးမလဲဆိုတာ Action Plan ချရပါမယ်။
        </p>

        <ul>
          <li>New Customers ရှာခြင်း</li>
          <li>Existing Customers ကို Upsell လုပ်ခြင်း</li>
          <li>Distribution Coverage တိုးခြင်း</li>
          <li>Low-performing Area ပြန်တိုးတက်စေခြင်း</li>
        </ul>

        <h2>4. Goal Review</h2>

        <p>
          Goal ကို တစ်လကုန်မှ စစ်တာထက် Weekly Review လုပ်တာက ပိုကောင်းပါတယ်။
          Gap ကိုစောစောသိရင် Corrective Action လုပ်ဖို့ အချိန်ရပါတယ်။
        </p>

        <h2>Manager Thinking</h2>

        <p>
          Goal တစ်ခုချင်းစီအတွက် Owner၊ Deadline၊ KPI နဲ့ Review Frequency
          သတ်မှတ်ထားရပါမယ်။
        </p>

        <h2>Action Plan</h2>

        <p>
          ကိုယ့်အတွက် SMART Goal တစ်ခုရေးပြီး
          အဲ့ဒီ Goal ကိုရဖို့ Action ၅ ခု သတ်မှတ်ပါ။
        </p>

        <h2>Summary</h2>

        <p>
          Clear Goal + Action Plan + Regular Review + Accountability
          က Performance Management ရဲ့ အခြေခံဖြစ်ပါတယ်။
        </p>
      `
    },

    {
      id: 11,
      title: "Sales Target Management",
      icon: "📈",
      category: "Sales Management",
      description:
        "Sales Target ချမှတ်ခြင်း၊ Target Breakdown၊ Gap Analysis နဲ့ Recovery Plan ကို လေ့လာရန်။",

      content: `
        <h2>Lesson Objective</h2>

        <p>
          Sales Target ကို Team ကိုပေးပြီး စောင့်ကြည့်ရုံမဟုတ်ဘဲ
          Target ကို Territory၊ Customer၊ Product နဲ့ Salesperson အလိုက် ခွဲခြမ်းပြီး
          Daily/Weekly Execution အဖြစ် ပြောင်းလဲနိုင်ရန်။
        </p>

        <h2>1. Target ဆိုတာဘာလဲ?</h2>

        <p>
          Target ဆိုတာ သတ်မှတ်ထားတဲ့ အချိန်အတွင်း ရရှိရမယ့် Business Result ဖြစ်ပါတယ်။
        </p>

        <h2>2. Target Breakdown</h2>

        <p>
          Monthly Target 100 သိန်းရှိရင် တစ်လလုံးကို စောင့်မနေဘဲ
          Weekly နဲ့ Daily Target အဖြစ် ခွဲနိုင်ပါတယ်။
        </p>

        <p>
          ထို့အပြင် Territory၊ Salesperson၊ Product၊ Customer Segment
          အလိုက်လည်း Breakdown လုပ်နိုင်ပါတယ်။
        </p>

        <h2>3. Achievement Tracking</h2>

        <p>
          Achievement % = Actual ÷ Target × 100
        </p>

        <div class="lesson-note">
          <strong>ဥပမာ:</strong><br>
          Target = 100 သိန်း<br>
          Actual = 80 သိန်း<br>
          Achievement = 80%
        </div>

        <h2>4. Gap Analysis</h2>

        <p>
          Gap = Target - Actual
        </p>

        <p>
          Gap ရှိတာကို သိရုံနဲ့ မလုံလောက်ပါဘူး။
          Gap ရဲ့ Root Cause ကို ရှာရပါတယ်။
        </p>

        <ul>
          <li>Distribution Gap</li>
          <li>Stock Gap</li>
          <li>People Gap</li>
          <li>Customer Gap</li>
          <li>Competitor Gap</li>
          <li>Price Gap</li>
          <li>Execution Gap</li>
        </ul>

        <h2>5. Recovery Plan</h2>

        <p>
          Target နောက်ကျနေတဲ့အခါ Recovery Plan ချရပါတယ်။
          ဘယ် Customer မှာ ဘယ်လောက်ရမလဲ၊ ဘယ် Product ကို Push မလဲ၊
          ဘယ်နေ့အတွင်း ဘယ်လိုလုပ်မလဲဆိုတာ တိတိကျကျသတ်မှတ်ရပါတယ်။
        </p>

        <h2>Sales Manager Thinking</h2>

        <p>
          Target မပြည့်တဲ့အခါ Team ကို အပြစ်တင်တာထက်
          Data → Root Cause → Action → Follow-up ဆိုတဲ့ Process ကို အသုံးပြုသင့်ပါတယ်။
        </p>

        <h2>Action Plan</h2>

        <p>
          ကိုယ်သိတဲ့ Sales Target တစ်ခုကို ရွေးပြီး
          Target၊ Actual၊ Achievement၊ Gap နဲ့ Recovery Action ကို တွက်ကြည့်ပါ။
        </p>

        <h2>Summary</h2>

        <p>
          Sales Target Management ဆိုတာ Target ချမှတ်ခြင်းထက်
          Target ကို Field Execution အဖြစ် ပြောင်းလဲပြီး Result ရအောင် စီမံခြင်း ဖြစ်ပါတယ်။
        </p>
      `
    },

    {
      id: 12,
      title: "KPI Management",
      icon: "📋",
      category: "Performance Management",
      description:
        "KPI၊ Leading Indicator၊ Lagging Indicator၊ Sales Team Performance နဲ့ Review System ကို လေ့လာရန်။",

      content: `
        <h2>Lesson Objective</h2>

        <p>
          KPI ဆိုတာ ဘာလဲ၊ ဘယ်လို KPI ရွေးမလဲ၊
          Sales Team Performance ကို Data နဲ့ ဘယ်လို Manage လုပ်မလဲဆိုတာ နားလည်ရန်။
        </p>

        <h2>1. KPI ဆိုတာဘာလဲ?</h2>

        <p>
          KPI = Key Performance Indicator ဖြစ်ပါတယ်။
          Business Objective တစ်ခု အောင်မြင်နေ၊ မအောင်မြင်နေကို တိုင်းတာပေးတဲ့
          အရေးကြီးသော Performance Indicator ဖြစ်ပါတယ်။
        </p>

        <h2>2. Sales KPI Examples</h2>

        <ul>
          <li>Sales Achievement %</li>
          <li>Volume Growth</li>
          <li>Revenue Growth</li>
          <li>New Customer Acquisition</li>
          <li>Distribution Coverage</li>
          <li>Strike Rate</li>
          <li>Productivity</li>
          <li>Collection Performance</li>
        </ul>

        <h2>3. Leading vs Lagging Indicators</h2>

        <p>
          Lagging Indicator က ဖြစ်ပြီးသား Result ကို တိုင်းတာတာပါ။
          ဥပမာ Monthly Sales Achievement။
        </p>

        <p>
          Leading Indicator က အနာဂတ် Result ကို သက်ရောက်စေမယ့် Activity ကို တိုင်းတာတာပါ။
          ဥပမာ Customer Visits၊ New Outlet Opening၊ Sales Calls။
        </p>

        <h2>4. KPI Review</h2>

        <p>
          KPI ကို စာရင်းထုတ်ပြီး သိမ်းထားရုံမဟုတ်ဘဲ
          Weekly Review မှာ Action နဲ့ ချိတ်ဆက်ရပါတယ်။
        </p>

        <h2>5. KPI များလွန်းခြင်း</h2>

        <p>
          KPI အများကြီးထားတာက Focus ပျောက်စေနိုင်ပါတယ်။
          Business Objective နဲ့ တိုက်ရိုက်ဆက်စပ်တဲ့ Critical KPI တွေကို ဦးစားပေးသင့်ပါတယ်။
        </p>

        <h2>Manager Thinking</h2>

        <p>
          KPI ရဲ့ အဓိကရည်ရွယ်ချက်က Team ကို အပြစ်ရှာဖို့မဟုတ်ဘဲ
          Performance Improvement အတွက် Data ပေးဖို့ ဖြစ်ပါတယ်။
        </p>

        <h2>Action Plan</h2>

        <p>
          ကိုယ့် Team အတွက် အရေးကြီးဆုံး KPI ၅ ခုရွေးပြီး
          Target၊ Actual၊ Gap နဲ့ Next Action ကို သတ်မှတ်ပါ။
        </p>

        <h2>Summary</h2>

        <p>
          "What gets measured gets managed" ဆိုတဲ့ Principle အတိုင်း
          မှန်ကန်တဲ့ KPI တွေကို သတ်မှတ်ပြီး Regular Review လုပ်နိုင်ရင်
          Performance ကို ပိုမိုထိရောက်စွာ Manage လုပ်နိုင်ပါတယ်။
        </p>
      `
    },

    {
      id: 13,
      title: "Problem Solving",
      icon: "🧩",
      category: "Management",
      description:
        "Root Cause Analysis၊ 5 Whys၊ Problem Definition နဲ့ Corrective Action ကို လေ့လာရန်။",

      content: `
        <h2>Lesson Objective</h2>

        <p>
          Problem ဖြစ်တိုင်း အပေါ်ယံအဖြေရှာတာမဟုတ်ဘဲ
          Root Cause ကိုရှာပြီး ပြန်မဖြစ်အောင် Corrective Action နဲ့ Preventive Action
          ချမှတ်နိုင်ရန်။
        </p>

        <h2>1. Problem Definition</h2>

        <p>
          Problem ကို မရှင်းမလင်းသတ်မှတ်ထားရင် Solution ကလည်း မမှန်နိုင်ပါဘူး။
          "Sales ကျတယ်" ဆိုတာထက်
          "North Yangon Territory ရဲ့ Sales သည် ယခင်လနဲ့ နှိုင်းယှဉ်ပါက 20% ကျဆင်းနေသည်"
          လို့ သတ်မှတ်တာ ပိုကောင်းပါတယ်။
        </p>

        <h2>2. Root Cause</h2>

        <p>
          Root Cause ဆိုတာ ပြဿနာဖြစ်ရတဲ့ အခြေခံအကြောင်းရင်း ဖြစ်ပါတယ်။
          Symptom ကိုသာ ဖြေရှင်းရင် Problem ပြန်ဖြစ်နိုင်ပါတယ်။
        </p>

        <h2>3. 5 Whys</h2>

        <p>
          "ဘာကြောင့်လဲ?" ဆိုတဲ့မေးခွန်းကို အဆင့်ဆင့်မေးပြီး
          Root Cause အထိ ရောက်အောင် ရှာဖွေတဲ့ နည်းလမ်း ဖြစ်ပါတယ်။
        </p>

        <h2>လက်တွေ့ဥပမာ</h2>

        <p>
          <strong>Problem:</strong> Sales ကျတယ်။
        </p>

        <p>
          Why? → Outlet မှာ Stock မရှိဘူး။<br>
          Why? → Distributor က Reorder မလုပ်ဘူး။<br>
          Why? → Stock Movement နည်းနေတယ်။<br>
          Why? → Product Visibility မကောင်းဘူး။<br>
          Why? → Sales Team က Outlet Execution မလုပ်နိုင်ဘူး။
        </p>

        <p>
          ဒီလိုနဲ့ Root Cause က "Sales Team Execution" ဖြစ်နိုင်တာကို တွေ့နိုင်ပါတယ်။
        </p>

        <h2>4. Corrective Action</h2>

        <p>
          လက်ရှိ Problem ကို ပြန်ကောင်းအောင် ပြင်တဲ့ Action ဖြစ်ပါတယ်။
        </p>

        <h2>5. Preventive Action</h2>

        <p>
          အနာဂတ်မှာ အဲ့ဒီ Problem ပြန်မဖြစ်အောင် System ပြင်ဆင်တဲ့ Action ဖြစ်ပါတယ်။
        </p>

        <h2>Manager Thinking</h2>

        <p>
          Good Manager က Problem ကို ဖုံးကွယ်သူမဟုတ်ဘဲ
          Problem ကို Data နဲ့ဖော်ထုတ်ပြီး Systematic Solution ပေးနိုင်သူ ဖြစ်ပါတယ်။
        </p>

        <h2>Action Plan</h2>

        <p>
          ကိုယ့်လုပ်ငန်းမှာ မကြာခဏဖြစ်တဲ့ Problem တစ်ခုကိုရွေးပြီး
          5 Whys နည်းလမ်းနဲ့ Root Cause ရှာကြည့်ပါ။
        </p>

        <h2>Summary</h2>

        <p>
          Problem Solving ရဲ့ အဓိကက "ဘယ်သူ့အမှားလဲ?" မဟုတ်ဘဲ
          "ဘာကြောင့်ဖြစ်တာလဲ?" နဲ့ "နောက်တစ်ခါမဖြစ်အောင် ဘာလုပ်မလဲ?" ဆိုတာ ဖြစ်ပါတယ်။
        </p>
      `
    },

    {
      id: 14,
      title: "Sales Manager Action Plan",
      icon: "🚀",
      category: "Leadership & Execution",
      description:
        "Sales Manager တစ်ယောက်အနေနဲ့ People + Numbers + Execution ကို ပေါင်းစပ်ပြီး 30-Day Action Plan တည်ဆောက်ရန်။",

      content: `
        <h2>Lesson Objective</h2>

        <p>
          ယခင် Lessons တွေမှာ သင်ယူခဲ့တဲ့ Business၊ Strategy၊ Sales၊
          People Management၊ KPI နဲ့ Problem Solving အားလုံးကို
          Sales Manager ရဲ့ လက်တွေ့အလုပ်ထဲမှာ ပေါင်းစပ်အသုံးချနိုင်ရန်။
        </p>

        <h2>1. Sales Manager ရဲ့ အဓိကတာဝန်</h2>

        <p>
          Sales Manager ရဲ့ အဓိကတာဝန်ကို အကြမ်းဖျင်းအားဖြင့်
          <strong>People + Numbers + Execution</strong> လို့ ခွဲနိုင်ပါတယ်။
        </p>

        <h3>People</h3>

        <p>
          Team ကို ဦးဆောင်ခြင်း၊ Coaching လုပ်ခြင်း၊
          Capability တိုးတက်စေခြင်း၊ Accountability တည်ဆောက်ခြင်း။
        </p>

        <h3>Numbers</h3>

        <p>
          Sales၊ Revenue၊ Volume၊ Margin၊ KPI၊ Achievement၊ Gap နဲ့
          Forecast စတာတွေကို Data နဲ့ စီမံခြင်း။
        </p>

        <h3>Execution</h3>

        <p>
          Strategy ကို Field Activity အဖြစ် ပြောင်းလဲပြီး
          Customer၊ Distributor၊ Outlet နဲ့ Market မှာ အကောင်အထည်ဖော်ခြင်း။
        </p>

        <h2>2. Daily Management</h2>

        <p>
          နေ့စဉ်မှာ Sales Manager က Priority Customer၊
          Sales Performance၊ Market Issue နဲ့ Team Activity ကို စောင့်ကြည့်သင့်ပါတယ်။
        </p>

        <h2>3. Weekly Management</h2>

        <p>
          Weekly Review မှာ Target vs Actual၊ Gap၊
          Key Customer၊ Team Performance၊ Competitor Activity နဲ့
          Next Week Action ကို Review လုပ်သင့်ပါတယ်။
        </p>

        <h2>4. Monthly Management</h2>

        <p>
          Monthly Review မှာ Result အပြင် Root Cause၊
          Forecast၊ Budget၊ People Development နဲ့ Next Month Strategy ကိုပါ သုံးသပ်ရပါတယ်။
        </p>

        <h2>5. 30-Day Action Plan</h2>

        <h3>Day 1–7: Understand</h3>

        <ul>
          <li>Team ကို သိအောင်လုပ်ပါ</li>
          <li>Customer Base ကို လေ့လာပါ</li>
          <li>Sales Data ကို Review လုပ်ပါ</li>
          <li>Market Situation ကို သိအောင်လုပ်ပါ</li>
          <li>Competitor Activity ကို လေ့လာပါ</li>
        </ul>

        <h3>Day 8–15: Diagnose</h3>

        <ul>
          <li>Performance Gap ရှာပါ</li>
          <li>Root Cause Analysis လုပ်ပါ</li>
          <li>High Potential Customer တွေ သတ်မှတ်ပါ</li>
          <li>Team Capability Gap ရှာပါ</li>
        </ul>

        <h3>Day 16–23: Execute</h3>

        <ul>
          <li>Priority Action တွေ စတင်ပါ</li>
          <li>Team Coaching လုပ်ပါ</li>
          <li>Customer Visit လုပ်ပါ</li>
          <li>Distribution / Coverage တိုးပါ</li>
          <li>Low-performing Area တွေကို ပြန်တိုးတက်အောင်လုပ်ပါ</li>
        </ul>

        <h3>Day 24–30: Review & Improve</h3>

        <ul>
          <li>Result ကို တိုင်းတာပါ</li>
          <li>ဘာက အလုပ်ဖြစ်လဲ စစ်ပါ</li>
          <li>ဘာက မအောင်မြင်လဲ စစ်ပါ</li>
          <li>Next Month Action Plan ချပါ</li>
        </ul>

        <h2>6. Sales Manager ရဲ့ Leadership Principle</h2>

        <p>
          Team ကို Micromanage လုပ်တာထက် Clear Expectations ပေးပြီး
          Ownership နဲ့ Accountability တည်ဆောက်သင့်ပါတယ်။
        </p>

        <p>
          Manager က အရာအားလုံးကို ကိုယ်တိုင်လုပ်ပေးတာထက်
          Team က ကိုယ်တိုင်ဆုံးဖြတ်နိုင်၊ ကိုယ်တိုင်ပြဿနာဖြေရှင်းနိုင်၊
          ကိုယ်တိုင် Result တာဝန်ယူနိုင်အောင် ဖွံ့ဖြိုးပေးရပါမယ်။
        </p>

        <h2>7. Sales Manager Dashboard မှာ ဘာတွေကြည့်သင့်လဲ?</h2>

        <ul>
          <li>Sales Achievement %</li>
          <li>Revenue Growth</li>
          <li>Volume Growth</li>
          <li>Gross Margin</li>
          <li>Distribution Coverage</li>
          <li>New Customer</li>
          <li>Active Customer</li>
          <li>Collection</li>
          <li>Team Productivity</li>
          <li>Forecast Accuracy</li>
        </ul>

        <h2>8. Final Manager Mindset</h2>

        <p>
          Sales Manager က "Target ရအောင် ဘယ်လိုလုပ်မလဲ?" ဆိုတဲ့မေးခွန်းတစ်ခုတည်း
          မမေးသင့်ပါဘူး။
        </p>

        <p>
          "ဘယ်လိုလုပ်ရင် Target ရမလဲ၊ Profit ကောင်းမလဲ၊
          Customer တည်မြဲမလဲ၊ Team Capability တိုးတက်မလဲ၊
          နောက်လတွေမှာလည်း Sustainable Growth ရမလဲ?"
          ဆိုတာကို စဉ်းစားရပါတယ်။
        </p>

        <h2>Action Plan</h2>

        <p>
          ကိုယ့်အလုပ်အတွက် 30-Day Sales Manager Action Plan တစ်ခုရေးပါ။
          People၊ Numbers နဲ့ Execution အတွက် Action တစ်ခုစီ သတ်မှတ်ပါ။
        </p>

        <h2>Final Knowledge Check</h2>

        <ol>
          <li>Sales Manager ရဲ့ အဓိကတာဝန် ၃ ခုက ဘာတွေလဲ?</li>
          <li>Target Gap ကို ဘယ်လိုရှာမလဲ?</li>
          <li>Root Cause Analysis ဘာကြောင့်လိုအပ်လဲ?</li>
          <li>KPI နဲ့ Action Plan ဘယ်လိုဆက်စပ်လဲ?</li>
          <li>Micromanagement မလုပ်ဘဲ Team ကို ဘယ်လို Manage မလဲ?</li>
        </ol>

        <h2>Final Summary</h2>

        <p>
          Excellent Sales Manager တစ်ယောက်ဖြစ်ဖို့ Sales ရောင်းနိုင်ရုံနဲ့ မလုံလောက်ပါဘူး။
          Business ကိုနားလည်ရမယ်၊ Strategy ချနိုင်ရမယ်၊
          Numbers ကိုနားလည်ရမယ်၊ Team ကို Develop လုပ်နိုင်ရမယ်၊
          Customer Relationship ကိုထိန်းသိမ်းနိုင်ရမယ်၊
          Problem ကို Root Cause အထိ ရှာနိုင်ရမယ်၊
          ပြီးတော့ Strategy ကို Field Execution အဖြစ် ပြောင်းလဲနိုင်ရပါမယ်။
        </p>

        <div class="lesson-note">
          <strong>Aung Business Academy Principle</strong><br><br>
          Think Strategically.<br>
          Lead People.<br>
          Manage Numbers.<br>
          Execute Consistently.<br>
          Create Sustainable Growth.
        </div>
      `
    }
  ];

  /* =========================================================
     HELPERS
     ========================================================= */

  function getAppContent() {
    return (
      document.getElementById("app-content") ||
      document.getElementById("main-content") ||
      document.getElementById("content") ||
      document.querySelector(".main-content") ||
      document.querySelector("main")
    );
  }

  function escapeHTML(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function getLesson(id) {
    return lessons.find(function (lesson) {
      return Number(lesson.id) === Number(id);
    });
  }

  function isCompleted(id) {
    return getCompletedLessons().includes(Number(id));
  }

  function getProgressPercent() {
    if (!lessons.length) return 0;

    return Math.round(
      (getCompletedLessons().filter(function (id) {
        return lessons.some(function (lesson) {
          return lesson.id === id;
        });
      }).length /
        lessons.length) *
        100
    );
  }

  function updateHeader(title) {
    const header = document.getElementById("headerTitle");

    if (header) {
      header.textContent = title || "Aung Business Academy";
    }
  }

  function setActiveNavigation(section) {
    document.querySelectorAll(".nav-item").forEach(function (item) {
      const itemSection = item.getAttribute("data-section");

      if (itemSection === section) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  function scrollTop() {
    try {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
  }

  /* =========================================================
     GLOBAL STYLES FOR READER
     ========================================================= */

  function injectAcademyStyles() {
    if (document.getElementById("aba-app-extra-styles")) return;

    const style = document.createElement("style");
    style.id = "aba-app-extra-styles";

    style.textContent = `
      html,
      body {
        max-width: 100%;
        overflow-x: hidden;
      }

      .aba-page {
        width: 100%;
        max-width: 1400px;
        margin: 0 auto;
      }

      .aba-page-header {
        margin-bottom: 24px;
      }

      .aba-page-header h1 {
        margin: 0 0 8px;
        font-size: 28px;
        line-height: 1.25;
        color: #111827;
      }

      .aba-page-header p {
        margin: 0;
        color: #6b7280;
        line-height: 1.7;
      }

      .aba-stat-grid {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 18px;
        margin-bottom: 24px;
      }

      .aba-stat-card {
        background: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 16px;
        padding: 20px;
        box-shadow: 0 4px 15px rgba(15, 23, 42, 0.05);
      }

      .aba-stat-icon {
        font-size: 28px;
        margin-bottom: 12px;
      }

      .aba-stat-number {
        font-size: 28px;
        font-weight: 800;
        color: #111827;
      }

      .aba-stat-label {
        margin-top: 5px;
        color: #6b7280;
        font-size: 14px;
      }

      .aba-card {
        background: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 16px;
        padding: 24px;
        box-shadow: 0 4px 15px rgba(15, 23, 42, 0.05);
        margin-bottom: 20px;
      }

      .aba-card h2 {
        margin: 0 0 14px;
        color: #111827;
      }

      .aba-card p {
        line-height: 1.8;
      }

      .aba-progress-wrap {
        margin-top: 15px;
      }

      .aba-progress-track {
        width: 100%;
        height: 10px;
        background: #e5e7eb;
        border-radius: 999px;
        overflow: hidden;
      }

      .aba-progress-bar {
        height: 100%;
        background: #111827;
        border-radius: 999px;
        transition: width 0.3s ease;
      }

      .aba-progress-label {
        display: flex;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 8px;
        font-size: 14px;
        color: #4b5563;
      }

      .aba-lesson-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;
      }

      .aba-lesson-card {
        background: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 16px;
        padding: 20px;
        cursor: pointer;
        transition:
          transform 0.2s ease,
          box-shadow 0.2s ease,
          border-color 0.2s ease;
        min-width: 0;
      }

      .aba-lesson-card:hover {
        transform: translateY(-2px);
        border-color: #cbd5e1;
        box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);
      }

      .aba-lesson-top {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 15px;
      }

      .aba-lesson-icon {
        width: 52px;
        height: 52px;
        display: grid;
        place-items: center;
        background: #f3f4f6;
        border-radius: 14px;
        font-size: 25px;
        flex: 0 0 auto;
      }

      .aba-lesson-number {
        color: #6b7280;
        font-size: 12px;
        font-weight: 700;
        margin-bottom: 5px;
        text-transform: uppercase;
      }

      .aba-lesson-title {
        margin: 0;
        font-size: 19px;
        color: #111827;
        line-height: 1.35;
      }

      .aba-lesson-category {
        display: inline-block;
        margin-top: 8px;
        font-size: 12px;
        color: #4b5563;
        background: #f3f4f6;
        padding: 5px 9px;
        border-radius: 999px;
      }

      .aba-lesson-description {
        margin: 15px 0;
        color: #6b7280;
        line-height: 1.7;
        font-size: 14px;
      }

      .aba-completed {
        color: #047857;
        font-weight: 700;
        font-size: 13px;
      }

      .aba-open-btn,
      .aba-primary-btn,
      .aba-secondary-btn,
      .aba-danger-btn {
        border: 0;
        border-radius: 10px;
        padding: 11px 16px;
        font-weight: 700;
        cursor: pointer;
        transition: 0.2s ease;
      }

      .aba-primary-btn {
        background: #111827;
        color: #ffffff;
      }

      .aba-primary-btn:hover {
        background: #1f2937;
      }

      .aba-secondary-btn {
        background: #f3f4f6;
        color: #111827;
      }

      .aba-danger-btn {
        background: #fee2e2;
        color: #991b1b;
      }

      .aba-btn-row {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 18px;
      }

      .aba-reader {
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
      }

      .aba-reader-head {
        background: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 18px;
        padding: 24px;
        margin-bottom: 18px;
        box-shadow: 0 4px 15px rgba(15, 23, 42, 0.05);
      }

      .aba-reader-meta {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
        color: #6b7280;
        font-size: 13px;
        margin-bottom: 12px;
      }

      .aba-reader-title {
        margin: 0;
        font-size: 30px;
        line-height: 1.3;
        color: #111827;
      }

      .aba-reader-content {
        background: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 18px;
        padding: 32px;
        box-shadow: 0 4px 15px rgba(15, 23, 42, 0.05);
        overflow-wrap: anywhere;
        word-break: normal;
      }

      .aba-reader-content h2 {
        margin: 30px 0 12px;
        font-size: 23px;
        color: #111827;
        line-height: 1.4;
      }

      .aba-reader-content h2:first-child {
        margin-top: 0;
      }

      .aba-reader-content h3 {
        margin: 24px 0 10px;
        font-size: 19px;
        color: #1f2937;
      }

      .aba-reader-content p {
        margin: 0 0 16px;
        color: #374151;
        font-size: 16px;
        line-height: 2;
      }

      .aba-reader-content ul,
      .aba-reader-content ol {
        margin: 10px 0 20px;
        padding-left: 25px;
      }

      .aba-reader-content li {
        margin-bottom: 10px;
        color: #374151;
        line-height: 1.8;
      }

      .aba-reader-content strong {
        color: #111827;
      }

      .aba-reader-content .lesson-note {
        margin: 20px 0;
        padding: 18px 20px;
        background: #f8fafc;
        border-left: 4px solid #111827;
        border-radius: 10px;
        color: #374151;
        line-height: 1.8;
      }

      .aba-reader-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 15px;
        flex-wrap: wrap;
        margin-top: 18px;
      }

      .aba-nav-row {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        margin-top: 18px;
      }

      .aba-nav-row button:disabled {
        opacity: 0.45;
        cursor: not-allowed;
      }

      .aba-form-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 16px;
      }

      .aba-field {
        display: flex;
        flex-direction: column;
        gap: 7px;
      }

      .aba-field label {
        font-size: 14px;
        font-weight: 700;
        color: #374151;
      }

      .aba-field input,
      .aba-field select,
      .aba-field textarea {
        width: 100%;
        border: 1px solid #d1d5db;
        border-radius: 10px;
        padding: 12px 13px;
        outline: none;
        background: #ffffff;
      }

      .aba-field textarea {
        min-height: 120px;
        resize: vertical;
      }

      .aba-field input:focus,
      .aba-field select:focus,
      .aba-field textarea:focus {
        border-color: #111827;
      }

      .aba-result-box {
        margin-top: 18px;
        padding: 18px;
        background: #f9fafb;
        border: 1px solid #e5e7eb;
        border-radius: 12px;
      }

      .aba-tool-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;
      }

      .aba-empty {
        padding: 35px 20px;
        text-align: center;
        color: #6b7280;
      }

      @media (max-width: 900px) {
        .aba-stat-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .aba-lesson-grid,
        .aba-tool-grid {
          grid-template-columns: 1fr;
        }
      }

      @media (max-width: 768px) {
        .aba-page-header h1 {
          font-size: 24px;
        }

        .aba-reader-content {
          padding: 22px 18px;
        }

        .aba-reader-title {
          font-size: 25px;
        }

        .aba-form-grid {
          grid-template-columns: 1fr;
        }
      }

      @media (max-width: 480px) {
        .aba-stat-grid {
          grid-template-columns: 1fr;
        }

        .aba-card,
        .aba-reader-head,
        .aba-reader-content {
          padding: 18px;
        }

        .aba-lesson-card {
          padding: 17px;
        }

        .aba-nav-row {
          flex-direction: column;
        }

        .aba-nav-row button {
          width: 100%;
        }
      }
    `;

    document.head.appendChild(style);
  }

  /* =========================================================
     DASHBOARD
     ========================================================= */

  function renderDashboard() {
    const content = getAppContent();
    if (!content) return;

    const completed = getCompletedLessons().filter(function (id) {
      return lessons.some(function (lesson) {
        return lesson.id === id;
      });
    }).length;

    const progress = getProgressPercent();

    const nextLesson =
      lessons.find(function (lesson) {
        return !isCompleted(lesson.id);
      }) || lessons[0];

    updateHeader("Dashboard");
    setActiveNavigation("dashboard");

    content.innerHTML = `
      <div class="aba-page">

        <div class="aba-page-header">
          <h1>Welcome back, Aung Zar Ni Win 👋</h1>
          <p>
            Aung Business Academy မှာ Business Management နဲ့ Sales Management
            Skill တွေကို တစ်ဆင့်ချင်း လေ့လာနိုင်ပါတယ်။
          </p>
        </div>

        <div class="aba-stat-grid">

          <div class="aba-stat-card">
            <div class="aba-stat-icon">📚</div>
            <div class="aba-stat-number">1</div>
            <div class="aba-stat-label">Active Course</div>
          </div>

          <div class="aba-stat-card">
            <div class="aba-stat-icon">📖</div>
            <div class="aba-stat-number">${lessons.length}</div>
            <div class="aba-stat-label">Total Lessons</div>
          </div>

          <div class="aba-stat-card">
            <div class="aba-stat-icon">✅</div>
            <div class="aba-stat-number">${completed}</div>
            <div class="aba-stat-label">Completed Lessons</div>
          </div>

          <div class="aba-stat-card">
            <div class="aba-stat-icon">📈</div>
            <div class="aba-stat-number">${progress}%</div>
            <div class="aba-stat-label">Overall Progress</div>
          </div>

        </div>

        <div class="aba-card">
          <h2>Sales Management Mastery</h2>

          <p>
            Business Foundation ကနေ Sales Manager Action Plan အထိ
            အခြေခံကနေ လက်တွေ့အသုံးချနိုင်တဲ့ Knowledge တွေကို လေ့လာပါ။
          </p>

          <div class="aba-progress-wrap">

            <div class="aba-progress-label">
              <span>Course Progress</span>
              <strong>${progress}%</strong>
            </div>

            <div class="aba-progress-track">
              <div
                class="aba-progress-bar"
                style="width:${progress}%"
              ></div>
            </div>

          </div>

          <div class="aba-btn-row">

            <button
              class="aba-primary-btn"
              type="button"
              data-open-lesson="${nextLesson.id}"
            >
              ${completed === lessons.length ? "Review Lessons" : "Continue Learning"}
            </button>

            <button
              class="aba-secondary-btn"
              type="button"
              data-section="lessons"
            >
              View All Lessons
            </button>

          </div>
        </div>

        <div class="aba-card">
          <h2>🎯 Your Learning Focus</h2>

          <p>
            Sales Manager တစ်ယောက်အနေနဲ့
            <strong>People + Numbers + Execution</strong>
            သုံးခုလုံးကို တစ်ပြိုင်နက်တည်း တိုးတက်အောင် လေ့လာပါ။
          </p>

          <ul>
            <li>Business & Strategic Thinking</li>
            <li>Sales & Customer Management</li>
            <li>Negotiation & Leadership</li>
            <li>KPI & Performance Management</li>
            <li>Problem Solving</li>
            <li>Sales Manager Action Planning</li>
          </ul>
        </div>

      </div>
    `;
  }

  /* =========================================================
     COURSES
     ========================================================= */

  function renderCourses() {
    const content = getAppContent();
    if (!content) return;

    updateHeader("My Courses");
    setActiveNavigation("courses");

    const progress = getProgressPercent();

    content.innerHTML = `
      <div class="aba-page">

        <div class="aba-page-header">
          <h1>📚 My Courses</h1>
          <p>
            လက်ရှိလေ့လာနေတဲ့ Business Management Course ကို
            ဒီနေရာကနေ ဆက်လက်လေ့လာနိုင်ပါတယ်။
          </p>
        </div>

        <div class="aba-card">

          <div class="aba-lesson-top">

            <div class="aba-lesson-icon">💼</div>

            <div style="flex:1;min-width:0;">

              <div class="aba-lesson-number">
                PROFESSIONAL PROGRAM
              </div>

              <h2>
                Sales Management Mastery
              </h2>

              <p>
                Business Basics မှ Sales Manager Action Plan အထိ
                လက်တွေ့ Business Management Skills များကို လေ့လာရန်။
              </p>

              <div class="aba-progress-wrap">

                <div class="aba-progress-label">
                  <span>Course Progress</span>
                  <strong>${progress}%</strong>
                </div>

                <div class="aba-progress-track">
                  <div
                    class="aba-progress-bar"
                    style="width:${progress}%"
                  ></div>
                </div>

              </div>

              <div class="aba-btn-row">

                <button
                  class="aba-primary-btn"
                  type="button"
                  data-section="lessons"
                >
                  📖 Start / Continue
                </button>

              </div>

            </div>

          </div>

        </div>

        <div class="aba-card">

          <h2>Course Modules</h2>

          <div class="aba-lesson-grid">

            ${lessons
              .map(function (lesson) {
                return `
                  <div
                    class="aba-lesson-card"
                    data-open-lesson="${lesson.id}"
                  >
                    <div class="aba-lesson-top">

                      <div class="aba-lesson-icon">
                        ${lesson.icon}
                      </div>

                      <div style="flex:1;min-width:0;">

                        <div class="aba-lesson-number">
                          Lesson ${lesson.id}
                        </div>

                        <h3 class="aba-lesson-title">
                          ${escapeHTML(lesson.title)}
                        </h3>

                        <span class="aba-lesson-category">
                          ${escapeHTML(lesson.category)}
                        </span>

                      </div>

                    </div>
                  </div>
                `;
              })
              .join("")}

          </div>

        </div>

      </div>
    `;
  }

  /* =========================================================
     LESSONS
     ========================================================= */

  function renderLessons() {
    const content = getAppContent();
    if (!content) return;

    updateHeader("Lessons");
    setActiveNavigation("lessons");

    const progress = getProgressPercent();

    content.innerHTML = `
      <div class="aba-page">

        <div class="aba-page-header">

          <h1>📖 Business Lessons</h1>

          <p>
            Lesson တစ်ခုချင်းစီကို နှိပ်ပြီး အသေးစိတ်ဖတ်ရှုလေ့လာနိုင်ပါတယ်။
            အောက်မှာ Course Progress ကိုလည်း စောင့်ကြည့်နိုင်ပါတယ်။
          </p>

        </div>

        <div class="aba-card">

          <div class="aba-progress-label">
            <span>Overall Learning Progress</span>
            <strong>${progress}%</strong>
          </div>

          <div class="aba-progress-track">
            <div
              class="aba-progress-bar"
              style="width:${progress}%"
            ></div>
          </div>

        </div>

        <div class="aba-lesson-grid">

          ${lessons
            .map(function (lesson) {
              const completed = isCompleted(lesson.id);

              return `
                <div
                  class="aba-lesson-card"
                  data-open-lesson="${lesson.id}"
                  role="button"
                  tabindex="0"
                >

                  <div class="aba-lesson-top">

                    <div class="aba-lesson-icon">
                      ${lesson.icon}
                    </div>

                    <div style="flex:1;min-width:0;">

                      <div class="aba-lesson-number">
                        Lesson ${lesson.id}
                      </div>

                      <h3 class="aba-lesson-title">
                        ${escapeHTML(lesson.title)}
                      </h3>

                      <span class="aba-lesson-category">
                        ${escapeHTML(lesson.category)}
                      </span>

                    </div>

                    ${
                      completed
                        ? `<div class="aba-completed">✓ Completed</div>`
                        : ""
                    }

                  </div>

                  <p class="aba-lesson-description">
                    ${escapeHTML(lesson.description)}
                  </p>

                  <button
                    class="aba-primary-btn"
                    type="button"
                    data-open-lesson="${lesson.id}"
                  >
                    ${completed ? "Review Lesson" : "Open Lesson"}
                  </button>

                </div>
              `;
            })
            .join("")}

        </div>

      </div>
    `;
  }

  /* =========================================================
     OPEN LESSON
     ========================================================= */

  function openLesson(id) {
    const lesson = getLesson(id);

    if (!lesson) return;

    const content = getAppContent();
    if (!content) return;

    const index = lessons.findIndex(function (item) {
      return item.id === lesson.id;
    });

    const previous = index > 0 ? lessons[index - 1] : null;
    const next =
      index < lessons.length - 1 ? lessons[index + 1] : null;

    const completed = isCompleted(lesson.id);

    updateHeader("Lesson " + lesson.id);
    setActiveNavigation("lessons");

    content.innerHTML = `
      <div class="aba-page">

        <div class="aba-reader">

          <div class="aba-reader-head">

            <div class="aba-reader-meta">
              <span>${lesson.icon}</span>
              <span>Lesson ${lesson.id} of ${lessons.length}</span>
              <span>•</span>
              <span>${escapeHTML(lesson.category)}</span>
            </div>

            <h1 class="aba-reader-title">
              ${escapeHTML(lesson.title)}
            </h1>

            <p style="margin:12px 0 0;color:#6b7280;line-height:1.8;">
              ${escapeHTML(lesson.description)}
            </p>

            <div class="aba-btn-row">

              <button
                class="aba-secondary-btn"
                type="button"
                data-section="lessons"
              >
                ← Back to Lessons
              </button>

              ${
                completed
                  ? `
                    <button
                      class="aba-danger-btn"
                      type="button"
                      data-mark-incomplete="${lesson.id}"
                    >
                      ✓ Completed — Mark Incomplete
                    </button>
                  `
                  : `
                    <button
                      class="aba-primary-btn"
                      type="button"
                      data-mark-complete="${lesson.id}"
                    >
                      ✓ Mark Lesson Complete
                    </button>
                  `
              }

            </div>

          </div>

          <article class="aba-reader-content">
            ${lesson.content}
          </article>

          <div class="aba-nav-row">

            <button
              class="aba-secondary-btn"
              type="button"
              ${
                previous
                  ? `data-open-lesson="${previous.id}"`
                  : "disabled"
              }
            >
              ←
              ${
                previous
                  ? "Previous Lesson"
                  : "No Previous Lesson"
              }
            </button>

            <button
              class="aba-primary-btn"
              type="button"
              ${
                next
                  ? `data-open-lesson="${next.id}"`
                  : `data-section="lessons"`
              }
            >
              ${
                next
                  ? "Next Lesson →"
                  : "Back to Lessons"
              }
            </button>

          </div>

        </div>

      </div>
    `;

    scrollTop();
  }

  /* =========================================================
     MARK COMPLETE
     ========================================================= */

  function markCompleted(id) {
    const lesson = getLesson(id);
    if (!lesson) return;

    const completed = getCompletedLessons();

    if (!completed.includes(lesson.id)) {
      completed.push(lesson.id);
    }

    saveCompletedLessons(completed);

    openLesson(lesson.id);
  }

  function markIncomplete(id) {
    const lesson = getLesson(id);
    if (!lesson) return;

    const completed = getCompletedLessons().filter(function (item) {
      return item !== lesson.id;
    });

    saveCompletedLessons(completed);

    openLesson(lesson.id);
  }

  /* =========================================================
     PROGRESS
     ========================================================= */

  function renderProgress() {
    const content = getAppContent();
    if (!content) return;

    updateHeader("My Progress");
    setActiveNavigation("progress");

    const completed = getCompletedLessons();

    const validCompleted = completed.filter(function (id) {
      return lessons.some(function (lesson) {
        return lesson.id === id;
      });
    });

    const progress = getProgressPercent();

    content.innerHTML = `
      <div class="aba-page">

        <div class="aba-page-header">
          <h1>📊 My Progress</h1>
          <p>
            သင်ယူပြီးသော Lessons နဲ့ Course Progress ကို
            ဒီနေရာမှာ စောင့်ကြည့်နိုင်ပါတယ်။
          </p>
        </div>

        <div class="aba-stat-grid">

          <div class="aba-stat-card">
            <div class="aba-stat-icon">📚</div>
            <div class="aba-stat-number">${lessons.length}</div>
            <div class="aba-stat-label">Total Lessons</div>
          </div>

          <div class="aba-stat-card">
            <div class="aba-stat-icon">✅</div>
            <div class="aba-stat-number">${validCompleted.length}</div>
            <div class="aba-stat-label">Completed</div>
          </div>

          <div class="aba-stat-card">
            <div class="aba-stat-icon">⏳</div>
            <div class="aba-stat-number">${lessons.length - validCompleted.length}</div>
            <div class="aba-stat-label">Remaining</div>
          </div>

          <div class="aba-stat-card">
            <div class="aba-stat-icon">🎯</div>
            <div class="aba-stat-number">${progress}%</div>
            <div class="aba-stat-label">Progress</div>
          </div>

        </div>

        <div class="aba-card">

          <h2>Course Progress</h2>

          <div class="aba-progress-wrap">

            <div class="aba-progress-label">
              <span>Sales Management Mastery</span>
              <strong>${progress}%</strong>
            </div>

            <div class="aba-progress-track">
              <div
                class="aba-progress-bar"
                style="width:${progress}%"
              ></div>
            </div>

          </div>

          <div class="aba-btn-row">

            <button
              class="aba-danger-btn"
              type="button"
              data-reset-progress="true"
            >
              Reset All Progress
            </button>

          </div>

        </div>

        <div class="aba-card">

          <h2>Lesson Status</h2>

          <div class="aba-lesson-grid">

            ${lessons
              .map(function (lesson) {
                const done = isCompleted(lesson.id);

                return `
                  <div
                    class="aba-lesson-card"
                    data-open-lesson="${lesson.id}"
                  >

                    <div class="aba-lesson-top">

                      <div class="aba-lesson-icon">
                        ${lesson.icon}
                      </div>

                      <div style="flex:1;min-width:0;">

                        <div class="aba-lesson-number">
                          Lesson ${lesson.id}
                        </div>

                        <h3 class="aba-lesson-title">
                          ${escapeHTML(lesson.title)}
                        </h3>

                      </div>

                      <div class="aba-completed">
                        ${done ? "✓" : "○"}
                      </div>

                    </div>

                    <p class="aba-lesson-description">
                      ${done ? "Completed" : "Not completed yet"}
                    </p>

                  </div>
                `;
              })
              .join("")}

          </div>

        </div>

      </div>
    `;
  }

  /* =========================================================
     SALES MANAGER
     ========================================================= */

  function renderSalesManager() {
    const content = getAppContent();
    if (!content) return;

    updateHeader("Sales Manager");
    setActiveNavigation("sales-manager");

    content.innerHTML = `
      <div class="aba-page">

        <div class="aba-page-header">
          <h1>💼 Sales Manager</h1>
          <p>
            Sales Manager တစ်ယောက်အနေနဲ့ People + Numbers + Execution
            ကို စနစ်တကျ Manage လုပ်ရန်။
          </p>
        </div>

        <div class="aba-tool-grid">

          <div class="aba-card">
            <h2>👥 People</h2>
            <p>
              Team Leadership, Coaching, Delegation,
              Accountability နဲ့ Performance Review ကို စီမံပါ။
            </p>
            <button
              class="aba-primary-btn"
              type="button"
              data-open-lesson="8"
            >
              Learn People Management
            </button>
          </div>

          <div class="aba-card">
            <h2>📊 Numbers</h2>
            <p>
              Target, Achievement, KPI, Revenue, Margin နဲ့
              Performance Data ကို Analyze လုပ်ပါ။
            </p>
            <button
              class="aba-primary-btn"
              type="button"
              data-open-lesson="12"
            >
              Learn KPI Management
            </button>
          </div>

          <div class="aba-card">
            <h2>🚀 Execution</h2>
            <p>
              Strategy ကို Field Execution အဖြစ် ပြောင်းလဲပြီး
              Customer နဲ့ Market မှာ အကောင်အထည်ဖော်ပါ။
            </p>
            <button
              class="aba-primary-btn"
              type="button"
              data-open-lesson="14"
            >
              Learn Action Plan
            </button>
          </div>

          <div class="aba-card">
            <h2>🎯 Target</h2>
            <p>
              Sales Target ကို Breakdown လုပ်ပြီး Gap Analysis နဲ့
              Recovery Plan တည်ဆောက်ပါ။
            </p>
            <button
              class="aba-primary-btn"
              type="button"
              data-open-lesson="11"
            >
              Learn Target Management
            </button>
          </div>

        </div>

        <div class="aba-card">

          <h2>Sales Manager Daily Checklist</h2>

          <ul>
            <li>Yesterday Sales Result ကို Review လုပ်ပါ</li>
            <li>Today Target ကို သတ်မှတ်ပါ</li>
            <li>Priority Customer ကို စစ်ပါ</li>
            <li>Team Activity ကို Review လုပ်ပါ</li>
            <li>Market / Competitor Information ရယူပါ</li>
            <li>Critical Problem တွေကို ဖြေရှင်းပါ</li>
            <li>Team Member တစ်ယောက်ကို Coaching လုပ်ပါ</li>
          </ul>

        </div>

      </div>
    `;
  }

  /* =========================================================
     PRICING CALCULATOR
     ========================================================= */

  function renderPricing() {
    const content = getAppContent();
    if (!content) return;

    updateHeader("Pricing Calculator");
    setActiveNavigation("pricing");

    content.innerHTML = `
      <div class="aba-page">

        <div class="aba-page-header">
          <h1>🧮 Pricing Calculator</h1>
          <p>
            Cost, Selling Price, Profit နဲ့ Margin ကို လွယ်လွယ်ကူကူ တွက်ချက်နိုင်ပါတယ်။
          </p>
        </div>

        <div class="aba-card">

          <div class="aba-form-grid">

            <div class="aba-field">
              <label>Cost Price</label>
              <input
                id="priceCost"
                type="number"
                min="0"
                placeholder="ဥပမာ 70000"
              >
            </div>

            <div class="aba-field">
              <label>Selling Price</label>
              <input
                id="priceSelling"
                type="number"
                min="0"
                placeholder="ဥပမာ 100000"
              >
            </div>

          </div>

          <div class="aba-btn-row">

            <button
              class="aba-primary-btn"
              type="button"
              data-calculate-margin="true"
            >
              Calculate Profit & Margin
            </button>

          </div>

          <div
            id="pricingResult"
            class="aba-result-box"
            style="display:none;"
          ></div>

        </div>

        <div class="aba-card">

          <h2>📌 Important Formulas</h2>

          <p>
            <strong>Profit = Selling Price - Cost Price</strong>
          </p>

          <p>
            <strong>
              Margin % = Profit ÷ Selling Price × 100
            </strong>
          </p>

          <p>
            <strong>
              Markup % = Profit ÷ Cost Price × 100
            </strong>
          </p>

        </div>

      </div>
    `;
  }

  function calculateMargin() {
    const costInput = document.getElementById("priceCost");
    const sellingInput = document.getElementById("priceSelling");
    const result = document.getElementById("pricingResult");

    if (!costInput || !sellingInput || !result) return;

    const cost = Number(costInput.value);
    const selling = Number(sellingInput.value);

    if (!Number.isFinite(cost) || !Number.isFinite(selling) || cost < 0 || selling < 0) {
      result.style.display = "block";
      result.innerHTML = `
        <strong>ကျေးဇူးပြု၍ မှန်ကန်သော ကိန်းဂဏန်းများ ထည့်ပါ။</strong>
      `;
      return;
    }

    const profit = selling - cost;

    const margin =
      selling > 0
        ? (profit / selling) * 100
        : 0;

    const markup =
      cost > 0
        ? (profit / cost) * 100
        : 0;

    result.style.display = "block";

    result.innerHTML = `
      <h3>Calculation Result</h3>

      <p>
        Cost Price:
        <strong>${cost.toLocaleString()}</strong>
      </p>

      <p>
        Selling Price:
        <strong>${selling.toLocaleString()}</strong>
      </p>

      <p>
        Profit:
        <strong>${profit.toLocaleString()}</strong>
      </p>

      <p>
        Margin:
        <strong>${margin.toFixed(2)}%</strong>
      </p>

      <p>
        Markup:
        <strong>${markup.toFixed(2)}%</strong>
      </p>
    `;
  }

  function calculateProfit(cost, selling) {
    cost = Number(cost) || 0;
    selling = Number(selling) || 0;

    return selling - cost;
  }

  /* =========================================================
     REPORTS
     ========================================================= */

  function renderReports() {
    const content = getAppContent();
    if (!content) return;

    updateHeader("Reports");
    setActiveNavigation("reports");

    const completed = getCompletedLessons().filter(function (id) {
      return lessons.some(function (lesson) {
        return lesson.id === id;
      });
    }).length;

    const progress = getProgressPercent();

    content.innerHTML = `
      <div class="aba-page">

        <div class="aba-page-header">
          <h1>📈 Reports</h1>
          <p>
            Academy Learning Performance ကို အခြေခံပြီး
            အောက်ပါ Summary ကို ကြည့်နိုင်ပါတယ်။
          </p>
        </div>

        <div class="aba-stat-grid">

          <div class="aba-stat-card">
            <div class="aba-stat-icon">📚</div>
            <div class="aba-stat-number">${lessons.length}</div>
            <div class="aba-stat-label">Total Lessons</div>
          </div>

          <div class="aba-stat-card">
            <div class="aba-stat-icon">✅</div>
            <div class="aba-stat-number">${completed}</div>
            <div class="aba-stat-label">Completed</div>
          </div>

          <div class="aba-stat-card">
            <div class="aba-stat-icon">⏳</div>
            <div class="aba-stat-number">${lessons.length - completed}</div>
            <div class="aba-stat-label">Remaining</div>
          </div>

          <div class="aba-stat-card">
            <div class="aba-stat-icon">🎯</div>
            <div class="aba-stat-number">${progress}%</div>
            <div class="aba-stat-label">Completion</div>
          </div>

        </div>

        <div class="aba-card">

          <h2>Learning Performance</h2>

          <div class="aba-progress-wrap">

            <div class="aba-progress-label">
              <span>Course Completion</span>
              <strong>${progress}%</strong>
            </div>

            <div class="aba-progress-track">
              <div
                class="aba-progress-bar"
                style="width:${progress}%"
              ></div>
            </div>

          </div>

        </div>

        <div class="aba-card">

          <h2>Management Focus Areas</h2>

          <ul>
            <li>Business Foundation</li>
            <li>Strategic Thinking</li>
            <li>Marketing & Brand</li>
            <li>Sales & Negotiation</li>
            <li>Customer Management</li>
            <li>People Leadership</li>
            <li>Finance & Profitability</li>
            <li>KPI & Target Management</li>
            <li>Problem Solving</li>
            <li>Sales Manager Execution</li>
          </ul>

        </div>

      </div>
    `;
  }

  /* =========================================================
     AI BUSINESS COACH
     ========================================================= */

  function renderAICoach() {
    const content = getAppContent();
    if (!content) return;

    updateHeader("AI Business Coach");
    setActiveNavigation("ai-business-coach");

    content.innerHTML = `
      <div class="aba-page">

        <div class="aba-page-header">
          <h1>🤖 AI Business Coach</h1>
          <p>
            Business Problem ကို ရေးပြီး Management Thinking နဲ့
            ဘယ်လိုစဉ်းစားရမလဲ လေ့ကျင့်နိုင်ပါတယ်။
          </p>
        </div>

        <div class="aba-card">

          <div class="aba-field">

            <label>
              သင့် Business Problem ကို ရေးပါ
            </label>

            <textarea
              id="coachQuestion"
              placeholder="ဥပမာ - Sales Target မပြည့်ရင် ဘယ်လို Action Plan ချသင့်လဲ?"
            ></textarea>

          </div>

          <div class="aba-btn-row">

            <button
              class="aba-primary-btn"
              type="button"
              data-ask-coach="true"
            >
              Ask Business Coach
            </button>

          </div>

          <div
            id="coachResult"
            class="aba-result-box"
            style="display:none;"
          ></div>

        </div>

        <div class="aba-card">

          <h2>💡 Coach Framework</h2>

          <ul>
            <li>Problem Definition</li>
            <li>Data & Evidence</li>
            <li>Root Cause</li>
            <li>Possible Solutions</li>
            <li>Best Action</li>
            <li>Owner & Deadline</li>
            <li>Follow-up KPI</li>
          </ul>

        </div>

      </div>
    `;
  }

  function askCoach() {
    const questionInput = document.getElementById("coachQuestion");
    const result = document.getElementById("coachResult");

    if (!questionInput || !result) return;

    const question = questionInput.value.trim();

    if (!question) {
      result.style.display = "block";
      result.innerHTML = `
        <strong>Business Problem ကို အရင်ရေးပေးပါ။</strong>
      `;
      return;
    }

    result.style.display = "block";

    result.innerHTML = `
      <h3>Business Coach Response</h3>

      <p>
        သင့် Problem ကို Manager အမြင်နဲ့ ဖြေရှင်းဖို့
        အောက်ပါအဆင့်အတိုင်း စဉ်းစားပါ။
      </p>

      <ol>
        <li>
          <strong>Problem ကို တိတိကျကျ သတ်မှတ်ပါ။</strong>
          ဘာဖြစ်နေတာလဲဆိုတာ Data နဲ့ဖော်ပြပါ။
        </li>

        <li>
          <strong>Root Cause ရှာပါ။</strong>
          "ဘာကြောင့်လဲ?" ဆိုတဲ့မေးခွန်းကို အကြိမ်ကြိမ်မေးပါ။
        </li>

        <li>
          <strong>Options ထုတ်ပါ။</strong>
          Solution တစ်ခုတည်းကို ချက်ချင်းမရွေးပါနဲ့။
        </li>

        <li>
          <strong>Best Action ရွေးပါ။</strong>
          Impact၊ Cost၊ Time နဲ့ Feasibility ကို နှိုင်းယှဉ်ပါ။
        </li>

        <li>
          <strong>Owner နဲ့ Deadline သတ်မှတ်ပါ။</strong>
          Action Plan မှာ ဘယ်သူလုပ်မလဲ၊ ဘယ်အချိန်ပြီးမလဲဆိုတာ ရှင်းရပါမယ်။
        </li>

        <li>
          <strong>KPI နဲ့ Follow-up လုပ်ပါ။</strong>
          Action က Result ဖြစ်လာလားဆိုတာ တိုင်းတာပါ။
        </li>
      </ol>

      <div class="lesson-note">
        <strong>Your Question:</strong><br>
        ${escapeHTML(question)}
      </div>
    `;
  }

  /* =========================================================
     AI TOOLS
     ========================================================= */

  function renderAITools() {
    const content = getAppContent();
    if (!content) return;

    updateHeader("AI Tools");
    setActiveNavigation("ai-tools");

    content.innerHTML = `
      <div class="aba-page">

        <div class="aba-page-header">
          <h1>🛠 AI Tools</h1>
          <p>
            Business Manager တစ်ယောက်အနေနဲ့ နေ့စဉ်အသုံးချနိုင်တဲ့
            Simple Management Tools တွေ။
          </p>
        </div>

        <div class="aba-tool-grid">

          <div class="aba-card">
            <h2>🎯 Target Planner</h2>
            <p>
              Target ကို Team နဲ့ Daily / Weekly Execution အဖြစ် ခွဲပါ။
            </p>
            <button
              class="aba-primary-btn"
              type="button"
              data-open-lesson="11"
            >
              Open Lesson
            </button>
          </div>

          <div class="aba-card">
            <h2>📊 KPI Planner</h2>
            <p>
              Team Performance အတွက် Critical KPI တွေ သတ်မှတ်ပါ။
            </p>
            <button
              class="aba-primary-btn"
              type="button"
              data-open-lesson="12"
            >
              Open Lesson
            </button>
          </div>

          <div class="aba-card">
            <h2>🧩 Problem Solver</h2>
            <p>
              5 Whys နဲ့ Root Cause Analysis လုပ်ပါ။
            </p>
            <button
              class="aba-primary-btn"
              type="button"
              data-open-lesson="13"
            >
              Open Lesson
            </button>
          </div>

          <div class="aba-card">
            <h2>💰 Profit Calculator</h2>
            <p>
              Cost၊ Selling Price၊ Profit နဲ့ Margin တွက်ပါ။
            </p>
            <button
              class="aba-primary-btn"
              type="button"
              data-section="pricing"
            >
              Open Calculator
            </button>
          </div>

        </div>

      </div>
    `;
  }

  /* =========================================================
     SETTINGS
     ========================================================= */

  function renderSettings() {
    const content = getAppContent();
    if (!content) return;

    updateHeader("Settings");
    setActiveNavigation("settings");

    content.innerHTML = `
      <div class="aba-page">

        <div class="aba-page-header">
          <h1>⚙️ Settings</h1>
          <p>
            Academy Profile နဲ့ Learning Progress ကို စီမံနိုင်ပါတယ်။
          </p>
        </div>

        <div class="aba-card">

          <h2>👤 Profile</h2>

          <div class="aba-form-grid">

            <div class="aba-field">
              <label>Name</label>
              <input
                type="text"
                value="Aung Zar Ni Win"
                readonly
              >
            </div>

            <div class="aba-field">
              <label>Role</label>
              <input
                type="text"
                value="Business Manager"
                readonly
              >
            </div>

          </div>

        </div>

        <div class="aba-card">

          <h2>📚 Learning</h2>

          <p>
            လက်ရှိ Progress:
            <strong>${getProgressPercent()}%</strong>
          </p>

          <div class="aba-btn-row">

            <button
              class="aba-danger-btn"
              type="button"
              data-reset-progress="true"
            >
              Reset Learning Progress
            </button>

          </div>

        </div>

        <div class="aba-card">

          <h2>ℹ️ Academy Version</h2>

          <p>
            Aung Business Academy V8.0 Professional
          </p>

          <p>
            Burmese Business Management Learning Platform
          </p>

        </div>

      </div>
    `;
  }

  /* =========================================================
     SHOW SECTION
     ========================================================= */

  function showSection(section) {
    switch (section) {
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

      case "ai-business-coach":
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
        break;
    }

    scrollTop();
  }

  /* =========================================================
     RESET PROGRESS
     ========================================================= */

  function resetProgress() {
    const confirmed = window.confirm(
      "Learning Progress အားလုံးကို Reset လုပ်မလား?"
    );

    if (!confirmed) return;

    localStorage.removeItem(STORAGE_KEY);

    renderProgress();
  }

  /* =========================================================
     EVENT HANDLING
     ========================================================= */

  function setupNavigation() {
    document.addEventListener("click", function (event) {
      const lessonTarget = event.target.closest("[data-open-lesson]");

      if (lessonTarget) {
        event.preventDefault();

        const lessonId = lessonTarget.getAttribute("data-open-lesson");

        if (lessonId) {
          openLesson(Number(lessonId));
        }

        return;
      }

      const completeTarget = event.target.closest("[data-mark-complete]");

      if (completeTarget) {
        event.preventDefault();

        const id = Number(
          completeTarget.getAttribute("data-mark-complete")
        );

        markCompleted(id);

        return;
      }

      const incompleteTarget =
        event.target.closest("[data-mark-incomplete]");

      if (incompleteTarget) {
        event.preventDefault();

        const id = Number(
          incompleteTarget.getAttribute("data-mark-incomplete")
        );

        markIncomplete(id);

        return;
      }

      const resetTarget =
        event.target.closest("[data-reset-progress]");

      if (resetTarget) {
        event.preventDefault();

        resetProgress();

        return;
      }

      const calculateTarget =
        event.target.closest("[data-calculate-margin]");

      if (calculateTarget) {
        event.preventDefault();

        calculateMargin();

        return;
      }

      const coachTarget =
        event.target.closest("[data-ask-coach]");

      if (coachTarget) {
        event.preventDefault();

        askCoach();

        return;
      }

      const sectionTarget =
        event.target.closest("[data-section]");

      if (sectionTarget) {
        event.preventDefault();

        const section =
          sectionTarget.getAttribute("data-section");

        if (section) {
          showSection(section);
        }

        return;
      }

      const pageTarget =
        event.target.closest("[data-page]");

      if (pageTarget) {
        event.preventDefault();

        const page =
          pageTarget.getAttribute("data-page");

        if (page) {
          showSection(page);
        }
      }
    });

    document.addEventListener("keydown", function (event) {
      const lessonTarget =
        event.target.closest("[data-open-lesson]");

      if (!lessonTarget) return;

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();

        const lessonId =
          lessonTarget.getAttribute("data-open-lesson");

        if (lessonId) {
          openLesson(Number(lessonId));
        }
      }
    });
  }

  /* =========================================================
     INITIALIZATION
     ========================================================= */

  function init() {
    injectAcademyStyles();
    setupNavigation();
    showSection("dashboard");
  }

  /* =========================================================
     PUBLIC API
     ========================================================= */

  window.AungBusinessAcademy = {
    lessons: lessons,

    showSection: showSection,

    openLesson: openLesson,

    markCompleted: markCompleted,

    markIncomplete: markIncomplete,

    calculateProfit: calculateProfit,

    calculateMargin: calculateMargin,

    askCoach: askCoach,

    resetProgress: resetProgress,

    getProgress: getProgressPercent,

    getCompletedLessons: getCompletedLessons
  };

  /* =========================================================
     START
     ========================================================= */

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
