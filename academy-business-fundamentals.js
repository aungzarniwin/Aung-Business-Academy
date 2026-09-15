/* =========================================================
   AUNG BUSINESS ACADEMY
   BUSINESS FUNDAMENTALS — PROFESSIONAL LONG LESSONS
   Version 3.0
   ========================================================= */

(function () {
  "use strict";

  const COURSE_ID = "business-fundamentals";
  const STORAGE_KEY =
    "aung_business_academy_business_fundamentals_completed_v1";

  /* ---------------------------------------------------------
     Helper
     --------------------------------------------------------- */

  function esc(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function lesson(
    id,
    title,
    objective,
    content,
    action,
    quiz
  ) {
    return {
      id,
      title,
      objective,
      content,
      action,
      quiz
    };
  }

  /* =========================================================
     LESSONS
     ========================================================= */

  const LESSONS = [

    /* =======================================================
       LESSON 01
       ======================================================= */

    lesson(
      "bf-01",
      "Lesson 01 — စီးပွားရေးလုပ်ငန်းဆိုတာ ဘာလဲ?",
      `
      <p><strong>ဒီ Lesson ပြီးဆုံးတဲ့အခါ သင်ဟာ Business ဆိုတာကို “ပစ္စည်းရောင်းပြီး ပိုက်ဆံရတာ” လောက်နဲ့ မမြင်တော့ဘဲ Customer Value, Revenue, Cost, Profit, Cash Flow နဲ့ Sustainable Business System အနေနဲ့ စဉ်းစားနိုင်ရပါမယ်။</strong></p>

      <h2>1. Business ဆိုတာဘာလဲ?</h2>

      <p>
      စီးပွားရေးလုပ်ငန်း (Business) ဆိုတာ Customer တစ်ယောက်ရဲ့ ပြဿနာ၊ လိုအပ်ချက်၊
      ဆန္ဒတစ်ခုခုကို ဖြေရှင်းပေးနိုင်တဲ့ Value ကို ဖန်တီးပြီး အဲ့ဒီ Value အတွက်
      Customer က ပေးချေတဲ့ Revenue ကို ရရှိကာ Cost တွေကို ထိန်းချုပ်ပြီး
      Profit နဲ့ ရေရှည်တည်တံ့နိုင်အောင် စီမံခန့်ခွဲတဲ့ စနစ်တစ်ခုဖြစ်ပါတယ်။
      </p>

      <p>
      ဥပမာ — စားသောက်ဆိုင်တစ်ခုဟာ အစားအစာကိုပဲ မရောင်းပါဘူး။
      Customer အတွက် အရသာကောင်းတဲ့အစားအစာ၊ သန့်ရှင်းမှု၊ မြန်ဆန်တဲ့ Service၊
      အဆင်ပြေတဲ့ Location၊ ယုံကြည်စိတ်ချရတဲ့ Experience ကို ရောင်းနေတာပါ။
      </p>

      <h2>2. Business ရဲ့ အခြေခံ Formula</h2>

      <div class="aung-info-box">
        <p><strong>Customer Need → Value → Product/Service → Sales → Revenue → Cost Control → Profit → Reinvestment → Growth</strong></p>
      </div>

      <p>
      ဒီ Chain ထဲက အဆင့်တစ်ခုခု ပျက်သွားရင် Business က ပြဿနာတက်နိုင်ပါတယ်။
      Product ကောင်းပေမယ့် Sales မရှိရင် Revenue မရပါဘူး။
      Sales ကောင်းပေမယ့် Cost မထိန်းနိုင်ရင် Profit မကျန်ပါဘူး။
      Profit ရှိပေမယ့် Cash မရှိရင်လည်း လုပ်ငန်းလည်ပတ်ဖို့ ခက်နိုင်ပါတယ်။
      </p>

      <h2>3. Business ရဲ့ အဓိကအစိတ်အပိုင်း ၇ ခု</h2>

      <ol>
        <li><strong>Customer</strong> — ဘယ်သူကို ရောင်းမလဲ?</li>
        <li><strong>Problem / Need</strong> — Customer ဘာလိုအပ်နေလဲ?</li>
        <li><strong>Value Proposition</strong> — ဘာကြောင့် ကျွန်တော်တို့ဆီက ဝယ်သင့်လဲ?</li>
        <li><strong>Product / Service</strong> — ဘာကိုပေးမလဲ?</li>
        <li><strong>Revenue</strong> — ဘယ်လိုငွေရှာမလဲ?</li>
        <li><strong>Cost</strong> — ဘာတွေအတွက် ငွေကုန်မလဲ?</li>
        <li><strong>System</strong> — လူတစ်ယောက်တည်းမဟုတ်ဘဲ စနစ်နဲ့ ဘယ်လိုလည်ပတ်မလဲ?</li>
      </ol>

      <h2>4. Customer မရှိရင် Business မရှိဘူး</h2>

      <p>
      Business Owner တော်တော်များများက “ငါ့ Product က အရမ်းကောင်းတယ်”
      ဆိုတာကို အဓိကထားတတ်ကြပါတယ်။ Professional Business Manager ကတော့
      “Customer အတွက် ဒီ Product က ဘာ Value ရှိလဲ?” လို့ စဉ်းစားပါတယ်။
      </p>

      <p>
      Product-first မဟုတ်ဘဲ Customer-first စဉ်းစားရပါမယ်။
      Customer ရဲ့ Problem ကို နားလည်ပြီး Solution တစ်ခုတည်ဆောက်ရပါမယ်။
      </p>

      <h2>5. Revenue နဲ့ Profit မတူပါ</h2>

      <p>
      တစ်လကို သိန်း ၁,၀၀၀ ရောင်းရတယ်ဆိုတာ Business က အမြတ် သိန်း ၁,၀၀၀
      ရတယ်လို့ မဆိုလိုပါဘူး။
      </p>

      <div class="aung-table-wrap">
        <table>
          <thead>
            <tr>
              <th>အချက်</th>
              <th>ဥပမာ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sales Revenue</td>
              <td>100 သိန်း</td>
            </tr>
            <tr>
              <td>Product Cost</td>
              <td>65 သိန်း</td>
            </tr>
            <tr>
              <td>Operating Cost</td>
              <td>20 သိန်း</td>
            </tr>
            <tr>
              <td>Profit</td>
              <td>15 သိန်း</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>6. Business Model ကို နားလည်ပါ</h2>

      <p>
      Business Model ဆိုတာ “ဘယ်သူ့ကို ဘာ Value ပေးပြီး ဘယ်လိုငွေရှာမလဲ”
      ဆိုတဲ့ စီးပွားရေးပုံစံပါ။
      </p>

      <p>
      ဥပမာ Distribution Business မှာ Manufacturer ဆီက Product ဝယ်၊
      Distributor Network တည်ဆောက်၊ Retailer တွေဆီ ဖြန့်၊ Customer ဆီ
      ရောက်အောင်လုပ်ပြီး Margin နဲ့ Revenue ရရှိပါတယ်။
      </p>

      <h2>7. Manager တစ်ယောက်အနေနဲ့ ဘယ်လိုစဉ်းစားရမလဲ?</h2>

      <ul>
        <li>Customer ဘယ်သူလဲ?</li>
        <li>Customer ရဲ့ အဓိက Problem ဘာလဲ?</li>
        <li>ကျွန်တော်တို့ Value ဘာလဲ?</li>
        <li>Revenue ဘယ်ကလာလဲ?</li>
        <li>အဓိက Cost ဘာတွေလဲ?</li>
        <li>Profit ဘယ်လောက်ကျန်လဲ?</li>
        <li>Cash Flow ကောင်းလား?</li>
        <li>Business ကို System နဲ့လည်ပတ်နိုင်လား?</li>
      </ul>

      <h2>8. Myanmar Business Example</h2>

      <p>
      Retail Shop တစ်ခုကို စဉ်းစားကြည့်ပါ။ ဆိုင်မှာ Customer အများကြီးရှိပေမယ့်
      Slow-moving products များနေတယ်ဆိုရင် Stock ထဲမှာ ငွေချုပ်နေပါမယ်။
      Sales များနေပေမယ့် Margin နည်းရင် Profit နည်းနိုင်ပါတယ်။
      Credit Sale များပြီး Collection မကောင်းရင် Cash Flow ပြဿနာတက်နိုင်ပါတယ်။
      </p>

      <p>
      ဒါကြောင့် Business Manager ဟာ Sales တစ်ခုတည်းကို မကြည့်ရပါဘူး။
      Sales + Margin + Stock + Cash + Customer + People + Process အားလုံးကို
      တွဲပြီးကြည့်ရပါတယ်။
      </p>

      <h2>9. Business Health Check</h2>

      <ul>
        <li>Sales တိုးနေသလား?</li>
        <li>Gross Margin ထိန်းထားနိုင်သလား?</li>
        <li>Cash Flow ကောင်းသလား?</li>
        <li>Customer Retention ကောင်းသလား?</li>
        <li>Stock လည်ပတ်နှုန်းကောင်းသလား?</li>
        <li>Team Productivity ကောင်းသလား?</li>
        <li>လုပ်ငန်းစနစ်တွေ ရှိသလား?</li>
      </ul>

      <h2>10. အရေးကြီးဆုံး Manager Lesson</h2>

      <p>
      Business ကို “ဒီနေ့ရောင်းအား ဘယ်လောက်ရလဲ?” တစ်ခုတည်းနဲ့ မတိုင်းပါနဲ့။
      “ဒီနေ့ရောင်းအားရဖို့ မနက်ဖြန်ရဲ့ Business Health ကို ထိခိုက်သွားသလား?”
      ဆိုတာပါ စဉ်းစားပါ။
      </p>

      <div class="aung-highlight">
        <strong>Professional Manager Thinking:</strong><br>
        Sales ကိုလိုက်ရုံမဟုတ်ဘဲ Profitable, Sustainable, Scalable Business
        တစ်ခု တည်ဆောက်ရပါတယ်။
      </div>

      <h2>11. လက်တွေ့ Exercise</h2>

      <p>ကိုယ့် Business တစ်ခုကို ရွေးပြီး အောက်ပါ ၇ ချက်ကိုရေးပါ။</p>

      <ol>
        <li>Customer ဘယ်သူလဲ?</li>
        <li>Customer Problem ဘာလဲ?</li>
        <li>ကျွန်တော်တို့ Value ဘာလဲ?</li>
        <li>Product / Service ဘာလဲ?</li>
        <li>Revenue ဘယ်လိုရလဲ?</li>
        <li>အဓိက Cost ၅ ခုကဘာတွေလဲ?</li>
        <li>Profit တိုးဖို့ ဘာလုပ်မလဲ?</li>
      </ol>
      `,
      `
      <h2>Action Plan</h2>
      <p>ကိုယ့်လုပ်ငန်းကို Business Health Check ၇ ချက်နဲ့ ပြန်စစ်ပါ။</p>
      <ol>
        <li>Customer သတ်မှတ်ပါ။</li>
        <li>Customer Problem ရေးပါ။</li>
        <li>Value Proposition ရေးပါ။</li>
        <li>Revenue Source ရေးပါ။</li>
        <li>Cost Structure ရေးပါ။</li>
        <li>Profit ကိုတွက်ပါ။</li>
        <li>Growth Opportunity ၃ ခု ရှာပါ။</li>
      </ol>
      `,
      [
        "Business ရဲ့ အဓိကအခြေခံက Customer Value ဖြစ်တယ်။",
        "Revenue နဲ့ Profit မတူဘူး။",
        "Sales များတာတစ်ခုတည်းနဲ့ Healthy Business မဟုတ်ဘူး။",
        "Business Model က Value ကို Revenue အဖြစ်ပြောင်းပေးတဲ့ပုံစံဖြစ်တယ်။",
        "Professional Manager က Sales, Cost, Profit, Cash, People, Process ကို တွဲကြည့်တယ်။"
      ]
    ),

    /* =======================================================
       LESSON 02
       ======================================================= */

    lesson(
      "bf-02",
      "Lesson 02 — Customer & Value Proposition",
      `
      <p><strong>Business တစ်ခုအောင်မြင်ဖို့ Product ကောင်းရုံမလုံလောက်ပါဘူး။ ဘယ် Customer ကို ဘာ Value ပေးနေလဲဆိုတာ တိတိကျကျ သိရပါမယ်။</strong></p>

      <h2>1. Customer ဆိုတာ ဘယ်သူလဲ?</h2>

      <p>
      Customer ဆိုတာ ကျွန်တော်တို့ Product / Service ကို အသုံးပြုသူ သို့မဟုတ်
      ဝယ်ယူသူဖြစ်ပါတယ်။ ဒါပေမယ့် B2B Business တွေမှာ User, Buyer,
      Decision Maker, Influencer တို့ မတူနိုင်ပါဘူး။
      </p>

      <p>
      ဥပမာ Company တစ်ခုမှာ Software ကို Employee က အသုံးပြုနိုင်ပေမယ့်
      ဝယ်ယူဆုံးဖြတ်သူက Manager ဖြစ်နိုင်ပါတယ်။ ဒါကြောင့် Customer ကို
      “ဘယ်သူဝယ်လဲ?” တစ်ခုတည်းနဲ့ မသတ်မှတ်ရပါဘူး။
      </p>

      <h2>2. Customer Need ၃ မျိုး</h2>

      <ul>
        <li><strong>Functional Need</strong> — အလုပ်တစ်ခုကို ဖြေရှင်းချင်တာ</li>
        <li><strong>Emotional Need</strong> — စိတ်ခံစားချက်အတွက် လိုအပ်တာ</li>
        <li><strong>Social Need</strong> — လူမှုရေးအမြင်၊ Status၊ Identity နဲ့ဆိုင်တာ</li>
      </ul>

      <p>
      ဥပမာ Customer တစ်ယောက်က Premium Phone ဝယ်တယ်ဆိုရင် Camera Quality
      လိုတဲ့ Functional Need ရှိနိုင်သလို Brand Image နဲ့ Status လိုတဲ့
      Emotional / Social Need လည်း ရှိနိုင်ပါတယ်။
      </p>

      <h2>3. Customer Problem ကိုရှာပါ</h2>

      <p>
      Customer ကို “ဘာဝယ်ချင်လဲ?” လို့ပဲ မေးတာထက်
      “လက်ရှိမှာ ဘာအခက်အခဲရှိလဲ?” လို့ မေးတာ ပိုအရေးကြီးပါတယ်။
      </p>

      <ul>
        <li>ဘာအခက်အခဲဖြစ်နေလဲ?</li>
        <li>ဘယ်လောက်မကြာခဏ ဖြစ်လဲ?</li>
        <li>အဲ့ဒီ Problem ကြောင့် ဘာဆုံးရှုံးနေလဲ?</li>
        <li>လက်ရှိ ဘယ်လိုဖြေရှင်းနေလဲ?</li>
        <li>လက်ရှိ Solution ကို ဘာကြောင့်မကြိုက်လဲ?</li>
      </ul>

      <h2>4. Value Proposition ဆိုတာဘာလဲ?</h2>

      <p>
      Value Proposition ဆိုတာ “Customer က ဘာကြောင့် ကျွန်တော်တို့ဆီက
      ဝယ်သင့်တာလဲ?” ဆိုတဲ့ မေးခွန်းကို တိတိကျကျ ဖြေတဲ့အချက်ပါ။
      </p>

      <div class="aung-info-box">
        <p><strong>Customer + Problem + Solution + Benefit + Differentiation</strong></p>
      </div>

      <h2>5. Feature နဲ့ Benefit မတူပါ</h2>

      <p>
      Feature က Product မှာ ဘာရှိတယ်ဆိုတာ။ Benefit က Customer အတွက်
      အဲ့ဒါကြောင့် ဘာအကျိုးရှိတယ်ဆိုတာပါ။
      </p>

      <p>
      ဥပမာ — “Battery 5,000mAh” က Feature ဖြစ်ပါတယ်။
      “တစ်နေ့လုံး အားမကုန်ဘဲ အသုံးပြုနိုင်တယ်” က Benefit ဖြစ်ပါတယ်။
      </p>

      <h2>6. Customer Value ကို တိုင်းတာပါ</h2>

      <p>
      Value ကို စျေးနှုန်းနဲ့ပဲ မတိုင်းပါဘူး။ Customer အတွက်
      Time Saving, Cost Saving, Convenience, Quality, Reliability,
      Risk Reduction စတာတွေလည်း Value ဖြစ်ပါတယ်။
      </p>

      <h2>7. Myanmar Business Example</h2>

      <p>
      Distribution Business တစ်ခုမှာ Retailer အတွက် Product တစ်ခုတည်းက
      Value မဟုတ်ပါဘူး။ Fast Delivery, Credit Terms, Sales Support,
      Merchandising, Stock Availability, Complaint Handling တို့ကလည်း
      Value ဖြစ်ပါတယ်။
      </p>

      <p>
      ဒါကြောင့် Competitor က စျေးနည်းတာတစ်ခုတည်းနဲ့ Customer မပြောင်းနိုင်ပါဘူး။
      ကိုယ့် Company ရဲ့ Total Value က ပိုကောင်းရင် Customer ကို ထိန်းထားနိုင်ပါတယ်။
      </p>

      <h2>8. Customer Feedback System</h2>

      <p>Customer ကို အောက်ပါ ၅ ခုမေးပါ။</p>

      <ol>
        <li>ကျွန်တော်တို့ Product မှာ သင်အကြိုက်ဆုံးအချက်က ဘာလဲ?</li>
        <li>အဆင်မပြေဆုံးအချက်က ဘာလဲ?</li>
        <li>Competitor မှာ ပိုကောင်းတာဘာရှိလဲ?</li>
        <li>ဘာကြောင့် ဆက်ဝယ်မလဲ?</li>
        <li>ဘာကြောင့် မဝယ်တော့နိုင်လဲ?</li>
      </ol>

      <h2>9. Customer Value Map</h2>

      <div class="aung-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Customer Problem</th>
              <th>Our Solution</th>
              <th>Customer Benefit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Delivery နှေး</td>
              <td>Fast Delivery System</td>
              <td>အချိန်သက်သာ</td>
            </tr>
            <tr>
              <td>Stock မရ</td>
              <td>Better Inventory Planning</td>
              <td>Lost Sales လျော့</td>
            </tr>
            <tr>
              <td>Service မကောင်း</td>
              <td>Customer Support</td>
              <td>ယုံကြည်မှုတိုး</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>10. Manager Thinking</h2>

      <p>
      “Customer ဘာဝယ်လဲ?” ထက် “Customer ဘာကြောင့်ဝယ်လဲ?” ကို သိရပါမယ်။
      ဒီမေးခွန်းကို ဖြေနိုင်ရင် Marketing, Sales, Product Development,
      Customer Service အားလုံး ပိုကောင်းလာပါမယ်။
      </p>

      <h2>11. လက်တွေ့ Exercise</h2>

      <p>
      ကိုယ့် Product / Service တစ်ခုရွေးပြီး Customer Value Statement ရေးပါ။
      </p>

      <div class="aung-highlight">
        <strong>ကျွန်ုပ်တို့သည် [Customer] အတွက် [Problem] ကို
        [Solution] ဖြင့် ဖြေရှင်းပေးပြီး [Benefit] ရရှိစေပါသည်။</strong>
      </div>

      <h2>12. Key Takeaway</h2>

      <p>
      Business က Product ကို မရောင်းပါဘူး။ Customer အတွက် Value ကို ရောင်းတာပါ။
      Value ကို နားလည်တဲ့ Business က Price Competition ထဲမှာပဲ မနေဘဲ
      Customer Loyalty တည်ဆောက်နိုင်ပါတယ်။
      </p>
      `,
      `
      <h2>Action Plan</h2>
      <ol>
        <li>Top 10 Customers ရွေးပါ။</li>
        <li>Customer Problem ၃ ခုစီရေးပါ။</li>
        <li>Competitor ရဲ့ အားသာချက် ၃ ခုရေးပါ။</li>
        <li>ကိုယ့် Value Proposition ပြန်ရေးပါ။</li>
        <li>Customer Feedback ၅ ခု စုပါ။</li>
      </ol>
      `,
      [
        "Customer Need က Functional, Emotional, Social အဖြစ် ခွဲနိုင်တယ်။",
        "Feature နဲ့ Benefit မတူဘူး။",
        "Value Proposition က Customer ကို ဝယ်ချင်စေတဲ့ အဓိကအကြောင်းပြချက်ဖြစ်တယ်။",
        "Customer Problem ကိုနားလည်ရင် Solution ပိုကောင်းလာတယ်။",
        "Customer က Product မဟုတ်ဘဲ Value ကို ဝယ်တာဖြစ်တယ်။"
      ]
    ),

    /* =======================================================
       LESSON 03
       ======================================================= */

    lesson(
      "bf-03",
      "Lesson 03 — Business Model",
      `
      <p><strong>Business Model ဆိုတာ Business တစ်ခု ဘယ်လိုတန်ဖိုးဖန်တီး၊ ပို့ဆောင်ပြီး ငွေရှာသလဲဆိုတဲ့ စီးပွားရေးပုံစံဖြစ်ပါတယ်။</strong></p>

      <h2>1. Business Model ကိုဘာကြောင့်သိရမလဲ?</h2>

      <p>
      Business Manager တစ်ယောက်ဟာ “ရောင်းရင် ပိုက်ဆံရတယ်” လောက်နဲ့ မရပါဘူး။
      Revenue ဘယ်ကလာသလဲ၊ Customer Acquisition Cost ဘယ်လောက်ရှိသလဲ၊
      Margin ဘယ်လောက်ရှိသလဲ၊ Repeat Purchase ရှိသလား၊ Cost Structure ဘယ်လိုလဲ
      ဆိုတာ နားလည်ရပါတယ်။
      </p>

      <h2>2. Business Model ရဲ့ အဓိကမေးခွန်းများ</h2>

      <ol>
        <li>Customer ဘယ်သူလဲ?</li>
        <li>Customer အတွက် ဘာ Value ပေးလဲ?</li>
        <li>ဘယ် Channel ကနေ ရောင်းလဲ?</li>
        <li>Customer Relationship ဘယ်လိုတည်ဆောက်လဲ?</li>
        <li>Revenue ဘယ်လိုရလဲ?</li>
        <li>Key Resources ဘာတွေလိုလဲ?</li>
        <li>Key Activities ဘာတွေလုပ်ရလဲ?</li>
        <li>Key Partners ဘယ်သူတွေလဲ?</li>
        <li>Cost Structure ဘာလဲ?</li>
      </ol>

      <h2>3. Revenue Model</h2>

      <p>ငွေရှာတဲ့ပုံစံအမျိုးမျိုးရှိပါတယ်။</p>

      <ul>
        <li>Product Sales</li>
        <li>Service Fee</li>
        <li>Subscription</li>
        <li>Commission</li>
        <li>Advertising</li>
        <li>Licensing</li>
        <li>Marketplace Fee</li>
      </ul>

      <h2>4. Margin ကိုနားလည်ပါ</h2>

      <p>
      Product တစ်ခုကို 10,000 ကျပ်နဲ့ ရောင်းပြီး Cost 7,000 ကျပ်ဆိုရင်
      Gross Profit = 3,000 ကျပ် ဖြစ်ပါတယ်။
      </p>

      <div class="aung-info-box">
        <p><strong>Gross Profit = Sales Revenue − Cost of Goods Sold</strong></p>
      </div>

      <p>
      Business Model ကို ဆုံးဖြတ်ရာမှာ Revenue အပြင် Margin ကိုပါ ကြည့်ရပါတယ်။
      Revenue များပြီး Margin နည်းရင် Scale တိုးလာလေလေ ပြဿနာကြီးလာနိုင်ပါတယ်။
      </p>

      <h2>5. Fixed Cost နဲ့ Variable Cost</h2>

      <p>
      Fixed Cost ဆိုတာ Sales ပမာဏပြောင်းလဲပေမယ့် အချိန်တိုအတွင်း အတော်လေး
      မပြောင်းတဲ့ Cost ဖြစ်ပါတယ်။ ဥပမာ Rent, Basic Salary။
      </p>

      <p>
      Variable Cost က Sales/Production ပမာဏနဲ့အတူ ပြောင်းလဲတတ်တဲ့ Cost ဖြစ်ပါတယ်။
      ဥပမာ Product Cost, Packaging, Sales Commission စတာတွေပါ။
      </p>

      <h2>6. Business Model Example — Distribution</h2>

      <p>
      Manufacturer → Distributor → Wholesaler / Retailer → Consumer
      ဆိုတဲ့ Channel တစ်ခုကို စဉ်းစားပါ။
      </p>

      <p>
      ဒီ Model မှာ Manufacturer က Production, Brand, Supply ကို တာဝန်ယူနိုင်ပြီး
      Distributor က Warehouse, Distribution, Sales Team, Collection,
      Market Coverage ကို တာဝန်ယူနိုင်ပါတယ်။
      </p>

      <h2>7. Business Model Example — Service Business</h2>

      <p>
      Training Center တစ်ခုဆိုရင် Revenue က Course Fee ဖြစ်နိုင်ပါတယ်။
      ဒါပေမယ့် Revenue တစ်ခုတည်းနဲ့ မပြီးပါဘူး။
      Trainer Cost, Rent, Marketing, Technology, Admin Cost တွေကို ထည့်တွက်ရပါမယ်။
      </p>

      <h2>8. Scalability</h2>

      <p>
      Business တစ်ခုက Customer တိုးလာတိုင်း လူအင်အားနဲ့ Cost ကို အတူတူ
      အများကြီးတိုးရမယ်ဆိုရင် Scale တက်ဖို့ ခက်ပါတယ်။
      System, Technology, SOP, Automation တွေသုံးပြီး Revenue တိုးတဲ့အခါ
      Cost တိုးနှုန်းကို လျှော့နိုင်ရင် Scalable Business ဖြစ်လာပါတယ်။
      </p>

      <h2>9. Business Model Risk</h2>

      <ul>
        <li>Customer တစ်ဦးတည်းအပေါ် အလွန်မှီခိုခြင်း</li>
        <li>Supplier တစ်ဦးတည်းအပေါ် အလွန်မှီခိုခြင်း</li>
        <li>Margin အလွန်နည်းခြင်း</li>
        <li>Credit Sale များခြင်း</li>
        <li>Cash Flow မကောင်းခြင်း</li>
        <li>Owner တစ်ယောက်တည်းအပေါ် အလွန်မှီခိုခြင်း</li>
      </ul>

      <h2>10. Manager Thinking</h2>

      <p>
      Business Model ကောင်းတယ်ဆိုတာ “အရောင်းရတယ်” ဆိုတာမဟုတ်ပါဘူး။
      Customer Value ရှိ၊ Revenue ရှိ၊ Margin ရှိ၊ Cash Flow ရှိပြီး
      ရေရှည် Scale လုပ်နိုင်ရမယ်။
      </p>

      <h2>11. လက်တွေ့ Exercise</h2>

      <p>ကိုယ့် Business ကို အောက်ပါပုံစံနဲ့ရေးပါ။</p>

      <ul>
        <li>Customer = ?</li>
        <li>Value = ?</li>
        <li>Channel = ?</li>
        <li>Revenue = ?</li>
        <li>Major Costs = ?</li>
        <li>Gross Margin = ?</li>
        <li>Key Partners = ?</li>
        <li>Main Risk = ?</li>
        <li>Growth Opportunity = ?</li>
      </ul>

      <div class="aung-highlight">
        <strong>Manager Rule:</strong>
        Revenue များအောင်လုပ်တာနဲ့ Profit များအောင်လုပ်တာကို ခွဲပြီး စဉ်းစားပါ။
      </div>
      `,
      `
      <h2>Action Plan</h2>
      <p>Business Model Canvas ပုံစံနဲ့ ကိုယ့် Business ကို စာရွက်တစ်ရွက်ပေါ်မှာ ရေးပါ။</p>
      <ol>
        <li>Customer</li>
        <li>Value</li>
        <li>Channel</li>
        <li>Revenue</li>
        <li>Cost</li>
        <li>Key Activities</li>
        <li>Key Partners</li>
        <li>Risks</li>
      </ol>
      `,
      [
        "Business Model က Value ဖန်တီးပြီး Revenue ရအောင်လုပ်တဲ့ပုံစံဖြစ်တယ်။",
        "Revenue နဲ့ Margin ကို အတူကြည့်ရတယ်။",
        "Fixed Cost နဲ့ Variable Cost ခွဲခြားရတယ်။",
        "Scalable Business က Revenue တိုးတာနဲ့ Cost ကို အချိုးကျမတိုးအောင် စီမံနိုင်တယ်။",
        "Business Model Risk ကို ကြိုတင်စစ်ဆေးရတယ်။"
      ]
    ),

    /* =======================================================
       LESSON 04
       ======================================================= */

    lesson(
      "bf-04",
      "Lesson 04 — Business Strategy",
      `
      <p><strong>Strategy ဆိုတာ အများကြီးလုပ်တာမဟုတ်ပါဘူး။ ဘယ်နေရာမှာ အနိုင်ယူမလဲ၊ ဘယ်အရာကို ဦးစားပေးမလဲ၊ ဘယ်အရာကို မလုပ်ဘူးလဲဆိုတာ ဆုံးဖြတ်ခြင်းဖြစ်ပါတယ်။</strong></p>

      <h2>1. Strategy နဲ့ Tactics</h2>

      <p>
      Strategy က Long-term Direction ဖြစ်ပါတယ်။
      Tactics က Strategy ကို အကောင်အထည်ဖော်ဖို့ လုပ်ဆောင်ချက်တွေ ဖြစ်ပါတယ်။
      </p>

      <p>
      ဥပမာ “Yangon Modern Trade မှာ Market Share တိုးမယ်” က Strategy ဖြစ်နိုင်ပါတယ်။
      “Top 50 Stores အတွက် Monthly Promotion လုပ်မယ်” က Tactic ဖြစ်ပါတယ်။
      </p>

      <h2>2. Vision</h2>

      <p>
      Vision ဆိုတာ Business က အနာဂတ်မှာ ဘယ်နေရာရောက်ချင်သလဲဆိုတဲ့
      အမြင်ဖြစ်ပါတယ်။ Vision က Team ကို Direction ပေးပါတယ်။
      </p>

      <h2>3. Mission</h2>

      <p>
      Mission က “ကျွန်တော်တို့ ဘာအတွက်ရှိတာလဲ?” ဆိုတာကို ဖော်ပြပါတယ်။
      Mission က နေ့စဉ်လုပ်ငန်းတွေနဲ့ ပိုနီးစပ်ပါတယ်။
      </p>

      <h2>4. Strategic Objective</h2>

      <p>
      Objective က တိုင်းတာလို့ရရပါမယ်။ “Sales တိုးမယ်” လို့ မပြောဘဲ
      “နောက် ၆ လအတွင်း Monthly Sales ကို 20% တိုးမယ်” လို့ သတ်မှတ်ရပါမယ်။
      </p>

      <h2>5. SWOT Analysis</h2>

      <div class="aung-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Internal</th>
              <th>External</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Strengths</td>
              <td>Opportunities</td>
            </tr>
            <tr>
              <td>Weaknesses</td>
              <td>Threats</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>6. Competitive Advantage</h2>

      <p>
      Competitor တွေထက် အမြဲတမ်း စျေးလျှော့ရောင်းတာက Competitive Advantage
      မဟုတ်ပါဘူး။ Customer အတွက် တန်ဖိုးရှိပြီး Competitor တွေက
      အလွယ်တကူ မကူးယူနိုင်တဲ့ အားသာချက်တစ်ခု ဖြစ်ရပါမယ်။
      </p>

      <p>
      ဥပမာ Distribution Coverage, Strong Brand, Customer Relationship,
      Data Capability, Operational Excellence, Service Quality စတာတွေ ဖြစ်နိုင်ပါတယ်။
      </p>

      <h2>7. Strategic Priorities</h2>

      <p>
      Manager တစ်ယောက်ဟာ တစ်ချိန်တည်းမှာ အရာအားလုံးကို မလုပ်နိုင်ပါဘူး။
      Impact အများဆုံးရှိတဲ့ ၃–၅ ခုကို Priority သတ်မှတ်ရပါမယ်။
      </p>

      <h2>8. Decision Matrix</h2>

      <p>လုပ်ဆောင်ချက်တွေကို အောက်ပါ ၂ ချက်နဲ့ စစ်ပါ။</p>

      <ul>
        <li>Business Impact</li>
        <li>Effort / Cost</li>
      </ul>

      <p>
      High Impact + Low Effort အလုပ်တွေကို အရင်လုပ်ပါ။
      High Impact + High Effort အလုပ်တွေကို Plan ချပြီးလုပ်ပါ။
      Low Impact အလုပ်တွေကို လျှော့ချနိုင်ပါတယ်။
      </p>

      <h2>9. Strategy Execution</h2>

      <ol>
        <li>Goal သတ်မှတ်</li>
        <li>Strategy ရွေး</li>
        <li>Priority သတ်မှတ်</li>
        <li>Owner သတ်မှတ်</li>
        <li>KPI သတ်မှတ်</li>
        <li>Timeline သတ်မှတ်</li>
        <li>Weekly Review လုပ်</li>
      </ol>

      <h2>10. Manager Thinking</h2>

      <p>
      Strategy က Presentation Slide ပေါ်မှာရှိဖို့မဟုတ်ပါဘူး။
      Team ရဲ့ နေ့စဉ်လုပ်ဆောင်ချက်တွေမှာ Strategy ရဲ့ သက်ရောက်မှုရှိရပါမယ်။
      </p>

      <h2>11. လက်တွေ့ Case</h2>

      <p>
      Company တစ်ခုမှာ Sales ကျနေတယ်ဆိုပါစို့။ Manager က Promotion တစ်ခုတည်း
      ချက်ချင်းမလုပ်သင့်ပါဘူး။ Market Demand ကျတာလား၊ Distribution Coverage
      ကျတာလား၊ Price ပြဿနာလား၊ Sales Execution ပြဿနာလား၊ Competitor
      ပြောင်းလဲမှုလားဆိုတာ Root Cause စစ်ရပါမယ်။
      </p>

      <div class="aung-highlight">
        <strong>Strategic Thinking:</strong>
        Problem ကို မြင်တာနဲ့ Solution မခုန်ပါနဲ့။ Cause → Evidence → Options →
        Decision → Execution → Review ဆိုတဲ့ Process နဲ့ ဆုံးဖြတ်ပါ။
      </div>

      <h2>12. လက်တွေ့ Exercise</h2>

      <p>ကိုယ့် Business အတွက် အောက်ပါ Strategy Statement ရေးပါ။</p>

      <p>
      “ကျွန်ုပ်တို့သည် ______ Customer Segment တွင်
      ______ Value ဖြင့် ထူးခြားစွာ ယှဉ်ပြိုင်ပြီး
      ______ အတွင်း ______ Result ရရှိရန် ရည်မှန်းသည်။”
      </p>
      `,
      `
      <h2>Action Plan</h2>
      <ol>
        <li>3-Year Vision ရေးပါ။</li>
        <li>1-Year Goal သတ်မှတ်ပါ။</li>
        <li>Top 3 Strategic Priorities ရွေးပါ။</li>
        <li>Priority တစ်ခုစီအတွက် KPI ထည့်ပါ။</li>
        <li>Weekly Review ပြုလုပ်ပါ။</li>
      </ol>
      `,
      [
        "Strategy က Direction နဲ့ Choice ဖြစ်တယ်။",
        "Tactics က Strategy ကို အကောင်အထည်ဖော်တဲ့ လုပ်ဆောင်ချက်ဖြစ်တယ်။",
        "Goal တွေကို တိုင်းတာလို့ရအောင် သတ်မှတ်ရတယ်။",
        "Priority မရှိရင် Team Focus ပျောက်တတ်တယ်။",
        "Strategy က Execution နဲ့ Review မပါရင် အကျိုးမရှိဘူး။"
      ]
    ),

    /* =======================================================
       LESSON 05
       ======================================================= */

    lesson(
      "bf-05",
      "Lesson 05 — Market & Competitor Analysis",
      `
      <p><strong>Market Analysis ဆိုတာ “စျေးကွက်ကြီးတယ်” လို့ပြောတာမဟုတ်ပါဘူး။ ဘယ် Customer တွေရှိတယ်၊ Demand ဘယ်လိုပြောင်းတယ်၊ Competitor ဘယ်သူတွေရှိတယ်၊ ကိုယ့်အတွက် Opportunity ဘယ်မှာရှိတယ်ဆိုတာ Data နဲ့ နားလည်ခြင်းဖြစ်ပါတယ်။</strong></p>

      <h2>1. Market ဆိုတာဘာလဲ?</h2>

      <p>
      Market ဆိုတာ Product ဝယ်နိုင်တဲ့ လူအုပ်စု၊ လိုအပ်ချက်၊ Buying Power,
      Channel, Geography, Competitor စတဲ့ အစိတ်အပိုင်းတွေ ပါဝင်တဲ့
      စီးပွားရေးပတ်ဝန်းကျင်ဖြစ်ပါတယ်။
      </p>

      <h2>2. Market Analysis ရဲ့ အဓိကအချက်များ</h2>

      <ul>
        <li>Market Size</li>
        <li>Market Growth</li>
        <li>Customer Segment</li>
        <li>Buying Behavior</li>
        <li>Price Level</li>
        <li>Distribution Channel</li>
        <li>Competitor</li>
        <li>Market Trend</li>
      </ul>

      <h2>3. TAM, SAM, SOM</h2>

      <p><strong>TAM</strong> — Total Addressable Market</p>
      <p><strong>SAM</strong> — Serviceable Available Market</p>
      <p><strong>SOM</strong> — Serviceable Obtainable Market</p>

      <p>
      Business Plan ဆွဲရာမှာ “လူတိုင်းကို ရောင်းမယ်” ဆိုတာထက်
      ကိုယ့် Resource နဲ့ တကယ်ရနိုင်တဲ့ Market ကို သတ်မှတ်တာ ပိုကောင်းပါတယ်။
      </p>

      <h2>4. Competitor အမျိုးအစား</h2>

      <ul>
        <li>Direct Competitor</li>
        <li>Indirect Competitor</li>
        <li>Potential Competitor</li>
        <li>Substitute Solution</li>
      </ul>

      <h2>5. Competitor Analysis Framework</h2>

      <div class="aung-table-wrap">
        <table>
          <thead>
            <tr>
              <th>အချက်</th>
              <th>ကျွန်ုပ်တို့</th>
              <th>Competitor A</th>
              <th>Competitor B</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Price</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>Product</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>Distribution</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>Service</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>Brand</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>6. Data ဘယ်ကရမလဲ?</h2>

      <ul>
        <li>Customer Interview</li>
        <li>Sales Data</li>
        <li>Distributor Data</li>
        <li>Retail Audit</li>
        <li>Competitor Observation</li>
        <li>Online Reviews</li>
        <li>Market Reports</li>
        <li>Sales Team Feedback</li>
      </ul>

      <h2>7. Market Trend</h2>

      <p>
      Market ကို တစ်ကြိမ်ကြည့်ပြီး မပြီးပါဘူး။ Trend ကို ဆက်တိုက်ကြည့်ရပါမယ်။
      Customer Preference, Technology, Regulation, Competition,
      Purchasing Power စတာတွေ ပြောင်းနိုင်ပါတယ်။
      </p>

      <h2>8. Myanmar Business Example</h2>

      <p>
      FMCG Product တစ်ခုအတွက် Yangon Market ထဲမှာ Sales ကျနေတယ်ဆိုရင်
      National Market လုံးကို အပြစ်မတင်ပါနဲ့။ Township အလိုက်၊ Channel အလိုက်၊
      Customer Segment အလိုက် Data ခွဲကြည့်ပါ။
      </p>

      <p>
      တချို့ Area မှာ Sales တက်နေနိုင်ပြီး တချို့ Area မှာပဲ ကျနေနိုင်ပါတယ်။
      ဒါဆို Problem က Product တစ်ခုလုံးမဟုတ်ဘဲ Distribution Coverage,
      Competitor Activity သို့မဟုတ် Local Demand ဖြစ်နိုင်ပါတယ်။
      </p>

      <h2>9. Opportunity Identification</h2>

      <p>Opportunity ရှာတဲ့အခါ အောက်ပါမေးခွန်းတွေသုံးပါ။</p>

      <ol>
        <li>ဘယ် Customer Need မဖြေရှင်းရသေးလဲ?</li>
        <li>Competitor ဘာကို မကောင်းသေးလဲ?</li>
        <li>ဘယ် Channel မှာ Growth ရှိလဲ?</li>
        <li>ဘယ် Geography မှာ Demand ရှိလဲ?</li>
        <li>Customer က ဘာအတွက် ပိုပေးချေလိုစိတ်ရှိလဲ?</li>
      </ol>

      <h2>10. Manager Thinking</h2>

      <p>
      Data မရှိဘဲ Market ကို ခန့်မှန်းတာ Risk များပါတယ်။
      Manager က Opinion ကို Data နဲ့စစ်ပြီး Decision ချရပါတယ်။
      </p>

      <h2>11. လက်တွေ့ Exercise</h2>

      <p>
      ကိုယ့်လုပ်ငန်းအတွက် Competitor ၃ ခုရွေးပြီး Price, Product,
      Distribution, Service, Brand, Promotion, Strength, Weakness
      တို့ကို နှိုင်းယှဉ်ရေးပါ။
      </p>

      <div class="aung-highlight">
        <strong>Rule:</strong>
        Competitor ကို copy မလုပ်ပါနဲ့။ Competitor ကိုနားလည်ပြီး
        ကိုယ့်ရဲ့ Strategic Advantage ကို ဖန်တီးပါ။
      </div>
      `,
      `
      <h2>Action Plan</h2>
      <ol>
        <li>Competitor 3 ခု ရွေးပါ။</li>
        <li>Customer 10 ယောက် Interview လုပ်ပါ။</li>
        <li>Top 5 Market Trends ရေးပါ။</li>
        <li>Opportunity 3 ခု ရှာပါ။</li>
        <li>Action Priority သတ်မှတ်ပါ။</li>
      </ol>
      `,
      [
        "Market Analysis က Data နဲ့ စျေးကွက်ကို နားလည်ခြင်းဖြစ်တယ်။",
        "TAM, SAM, SOM က Market Scope ကို နားလည်စေတယ်။",
        "Direct Competitor နဲ့ Indirect Competitor ကို ခွဲရတယ်။",
        "Competitor Analysis က Copy လုပ်ဖို့မဟုတ်ဘဲ Advantage ရှာဖို့ဖြစ်တယ်။",
        "Market Trend ကို ဆက်တိုက်စောင့်ကြည့်ရတယ်။"
      ]
    ),

    /* =======================================================
       LESSON 06
       ======================================================= */

    lesson(
      "bf-06",
      "Lesson 06 — Operations & Process Management",
      `
      <p><strong>Business ကြီးလာတာနဲ့အမျှ လူတစ်ယောက်ရဲ့ Memory နဲ့ Experience ပေါ်မူတည်ပြီး လုပ်ငန်းကို မလည်ပတ်သင့်တော့ပါဘူး။ Process, SOP, Responsibility နဲ့ KPI စနစ်တွေလိုအပ်လာပါတယ်။</strong></p>

      <h2>1. Operations ဆိုတာဘာလဲ?</h2>

      <p>
      Operations ဆိုတာ Customer ကို Product / Service ပေးနိုင်ဖို့
      နေ့စဉ်လုပ်ငန်းတွေကို စနစ်တကျ လည်ပတ်စေတဲ့ လုပ်ဆောင်ချက်များဖြစ်ပါတယ်။
      </p>

      <h2>2. Process ဆိုတာဘာလဲ?</h2>

      <p>
      Process ဆိုတာ Input ကို Output ဖြစ်အောင် အဆင့်လိုက်လုပ်ဆောင်တဲ့ စနစ်ပါ။
      </p>

      <div class="aung-info-box">
        <p><strong>Input → Process → Output → Customer Value</strong></p>
      </div>

      <h2>3. SOP</h2>

      <p>
      SOP (Standard Operating Procedure) ဆိုတာ အလုပ်တစ်ခုကို
      ဘယ်လိုလုပ်ရမလဲဆိုတာ Standard ဖြစ်အောင် သတ်မှတ်ထားတဲ့ Procedure ဖြစ်ပါတယ်။
      </p>

      <p>
      SOP က Employee ကိုထိန်းချုပ်ဖို့ထက် Quality Consistency ရရှိဖို့
      အသုံးပြုတာဖြစ်ပါတယ်။
      </p>

      <h2>4. Process Mapping</h2>

      <p>ဥပမာ Order Process ကိုကြည့်ပါ။</p>

      <ol>
        <li>Customer Order</li>
        <li>Order Verification</li>
        <li>Stock Check</li>
        <li>Invoice</li>
        <li>Picking</li>
        <li>Packing</li>
        <li>Delivery</li>
        <li>Collection</li>
        <li>Customer Confirmation</li>
      </ol>

      <h2>5. Bottleneck</h2>

      <p>
      Process တစ်ခုလုံးရဲ့ Speed ကို အနှေးဆုံးအဆင့်က ကန့်သတ်နိုင်ပါတယ်။
      ဒါကို Bottleneck လို့ခေါ်ပါတယ်။
      </p>

      <p>
      ဥပမာ Sales Team က Order အများကြီးရပေမယ့် Warehouse Processing နှေးနေရင်
      Sales Growth က Customer Service Problem ဖြစ်လာနိုင်ပါတယ်။
      </p>

      <h2>6. KPI for Operations</h2>

      <ul>
        <li>Order Processing Time</li>
        <li>Delivery On-Time Rate</li>
        <li>Order Accuracy</li>
        <li>Stock Accuracy</li>
        <li>Return Rate</li>
        <li>Customer Complaint Rate</li>
      </ul>

      <h2>7. Continuous Improvement</h2>

      <p>
      Process တစ်ခုကို တစ်ကြိမ်ရေးပြီး အမြဲတမ်းမပြောင်းဘဲထားတာ မကောင်းပါဘူး။
      Data ကိုကြည့်ပြီး ပြန်လည်တိုးတက်အောင်လုပ်ရပါမယ်။
      </p>

      <h2>8. PDCA</h2>

      <ul>
        <li><strong>Plan</strong> — ဘာလုပ်မလဲ?</li>
        <li><strong>Do</strong> — လုပ်ပါ</li>
        <li><strong>Check</strong> — Result စစ်ပါ</li>
        <li><strong>Act</strong> — ပြင်ဆင်ပြီး Standardize လုပ်ပါ</li>
      </ul>

      <h2>9. Myanmar Business Example</h2>

      <p>
      Retail Distribution Company တစ်ခုမှာ Sales Rep တစ်ယောက်ချင်းစီက
      Order ယူတဲ့ပုံစံမတူဘူးဆိုပါစို့။ တချို့က Credit Check မလုပ်၊
      တချို့က Stock Availability မစစ်ဘဲ Order ယူနိုင်ပါတယ်။
      ဒါကြောင့် Return, Complaint, Collection Problem ဖြစ်လာနိုင်ပါတယ်။
      </p>

      <p>
      Solution က Sales Rep ကို အပြစ်တင်တာမဟုတ်ဘဲ Standard Order Process
      တည်ဆောက်ပေးတာ ဖြစ်ပါတယ်။
      </p>

      <h2>10. Manager Thinking</h2>

      <p>
      “လူက မကောင်းလို့ Problem ဖြစ်တာ” လို့ မဆုံးဖြတ်ခင်
      “Process က လူကို အမှားလုပ်စေသလား?” ဆိုတာ စစ်ပါ။
      </p>

      <h2>11. Exercise</h2>

      <p>
      ကိုယ့်လုပ်ငန်းမှာ အရေးကြီးဆုံး Process တစ်ခုရွေးပြီး
      Step-by-Step ရေးပါ။ ပြီးရင် Delay ဖြစ်နေတဲ့နေရာ၊ Duplicate Work,
      Unnecessary Approval, Error Point တွေရှာပါ။
      </p>
      `,
      `
      <h2>Action Plan</h2>
      <ol>
        <li>Critical Process တစ်ခုရွေးပါ။</li>
        <li>Step အားလုံးရေးပါ။</li>
        <li>Bottleneck ရှာပါ။</li>
        <li>SOP Draft ရေးပါ။</li>
        <li>KPI တစ်ခု သတ်မှတ်ပါ။</li>
      </ol>
      `,
      [
        "Operations က Customer Value ပေးနိုင်ဖို့ လုပ်ငန်းလည်ပတ်မှုဖြစ်တယ်။",
        "SOP က Standard Quality အတွက်အရေးကြီးတယ်။",
        "Bottleneck က Process Speed ကို ကန့်သတ်နိုင်တယ်။",
        "PDCA နဲ့ Continuous Improvement လုပ်နိုင်တယ်။",
        "Problem ကို လူပေါ်ပဲမတင်ဘဲ Process ကိုပါစစ်ရတယ်။"
      ]
    ),

    /* =======================================================
       LESSON 07
       ======================================================= */

    lesson(
      "bf-07",
      "Lesson 07 — Business Risk Management",
      `
      <p><strong>Risk Management ဆိုတာ ပြဿနာဖြစ်ပြီးမှ ဖြေရှင်းတာမဟုတ်ဘဲ ဖြစ်နိုင်တဲ့ Risk ကို ကြိုတင်ရှာဖွေ၊ သက်ရောက်မှုနဲ့ ဖြစ်နိုင်ခြေကို အကဲဖြတ်ပြီး Control Plan တည်ဆောက်ခြင်းဖြစ်ပါတယ်။</strong></p>

      <h2>1. Risk ဆိုတာဘာလဲ?</h2>

      <p>
      Risk ဆိုတာ အနာဂတ်မှာ ဖြစ်နိုင်ပြီး Business Objective ကို
      ထိခိုက်စေနိုင်တဲ့ မသေချာမှုဖြစ်ပါတယ်။
      </p>

      <h2>2. Risk အမျိုးအစားများ</h2>

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

      <h2>3. Risk Matrix</h2>

      <p>
      Risk ကို Probability နဲ့ Impact နှစ်ခုနဲ့ အကဲဖြတ်နိုင်ပါတယ်။
      </p>

      <div class="aung-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Probability</th>
              <th>Impact</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>High</td>
              <td>High</td>
              <td>Critical</td>
            </tr>
            <tr>
              <td>High</td>
              <td>Low</td>
              <td>Monitor / Control</td>
            </tr>
            <tr>
              <td>Low</td>
              <td>High</td>
              <td>Prepare</td>
            </tr>
            <tr>
              <td>Low</td>
              <td>Low</td>
              <td>Monitor</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>4. Risk Response</h2>

      <ul>
        <li><strong>Avoid</strong> — Risk ကိုရှောင်ခြင်း</li>
        <li><strong>Reduce</strong> — Risk ဖြစ်နိုင်ခြေ/Impact လျှော့ခြင်း</li>
        <li><strong>Transfer</strong> — တစ်စိတ်တစ်ပိုင်း အခြားသူဆီ လွှဲခြင်း</li>
        <li><strong>Accept</strong> — Risk ကို သိရှိပြီး လက်ခံခြင်း</li>
      </ul>

      <h2>5. Financial Risk Example</h2>

      <p>
      Customer တစ်ဦးကို Credit အလွန်များပေးထားရင် Collection Risk ဖြစ်နိုင်ပါတယ်။
      Risk Control အနေနဲ့ Credit Limit, Payment Terms, Aging Review,
      Collection KPI စတာတွေ ထည့်သွင်းနိုင်ပါတယ်။
      </p>

      <h2>6. People Risk</h2>

      <p>
      Business တစ်ခုရဲ့ အရေးကြီးတဲ့ Process တစ်ခုကို Employee တစ်ယောက်တည်း
      သိပြီး သူမရှိတော့ရင် လုပ်ငန်းရပ်သွားနိုင်ပါတယ်။
      ဒါဟာ Key Person Risk ဖြစ်ပါတယ်။
      </p>

      <p>
      Solution က Documentation, SOP, Cross Training, Succession Planning
      တို့ ဖြစ်ပါတယ်။
      </p>

      <h2>7. Risk Register</h2>

      <div class="aung-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Risk</th>
              <th>Probability</th>
              <th>Impact</th>
              <th>Control</th>
              <th>Owner</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Stock Shortage</td>
              <td>Medium</td>
              <td>High</td>
              <td>Forecasting</td>
              <td>Supply Manager</td>
            </tr>
            <tr>
              <td>Late Collection</td>
              <td>High</td>
              <td>High</td>
              <td>Credit Control</td>
              <td>Finance</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>8. Crisis Preparation</h2>

      <p>
      Risk Management က Risk မဖြစ်အောင် အမြဲတမ်းတားနိုင်တာမဟုတ်ပါဘူး။
      Risk ဖြစ်လာရင် Business ကို အမြန်ပြန်လည်လည်ပတ်နိုင်အောင်
      Business Continuity Plan ရှိရပါမယ်။
      </p>

      <h2>9. Manager Thinking</h2>

      <p>
      Professional Manager က “ဘာဖြစ်ရင် ဘယ်လိုလုပ်မလဲ?” ဆိုတဲ့
      Scenario Thinking ရှိရပါမယ်။
      </p>

      <h2>10. Exercise</h2>

      <p>ကိုယ့် Business ရဲ့ Top 10 Risks ကို ရေးပါ။ Risk တစ်ခုစီအတွက်</p>

      <ol>
        <li>Probability</li>
        <li>Impact</li>
        <li>Early Warning Signal</li>
        <li>Control</li>
        <li>Owner</li>
        <li>Contingency Plan</li>
      </ol>

      <div class="aung-highlight">
        <strong>Key Principle:</strong>
        Risk ကို ကြိုတင်စဉ်းစားနိုင်တာက Manager တစ်ယောက်ရဲ့ အရေးကြီးတဲ့
        Leadership Skill တစ်ခုဖြစ်ပါတယ်။
      </div>
      `,
      `
      <h2>Action Plan</h2>
      <ol>
        <li>Top 10 Business Risks ရေးပါ။</li>
        <li>Risk Score သတ်မှတ်ပါ။</li>
        <li>Critical Risk 3 ခု ရွေးပါ။</li>
        <li>Control Plan ထည့်ပါ။</li>
        <li>Responsible Person သတ်မှတ်ပါ။</li>
      </ol>
      `,
      [
        "Risk က မသေချာမှုကြောင့် ဖြစ်လာနိုင်တဲ့ Business Impact ဖြစ်တယ်။",
        "Probability နဲ့ Impact နဲ့ Risk Priority သတ်မှတ်နိုင်တယ်။",
        "Risk Response မှာ Avoid, Reduce, Transfer, Accept ရှိတယ်။",
        "Key Person Risk ကို Documentation နဲ့ Cross Training ဖြင့်လျှော့နိုင်တယ်။",
        "Business Continuity Plan က Crisis အတွက်အရေးကြီးတယ်။"
      ]
    ),

    /* =======================================================
       LESSON 08
       ======================================================= */

    lesson(
      "bf-08",
      "Lesson 08 — Decision Making & Problem Solving",
      `
      <p><strong>Manager တစ်ယောက်ရဲ့ အဓိကတာဝန်တစ်ခုက Decision Making ဖြစ်ပါတယ်။ Data မပြည့်စုံတဲ့အချိန်မှာတောင် အကောင်းဆုံးဆုံးဖြတ်ချက်ကို ချနိုင်ရပါမယ်။</strong></p>

      <h2>1. Problem နဲ့ Symptom</h2>

      <p>
      Sales ကျတာက Symptom ဖြစ်နိုင်ပါတယ်။ Root Cause က Distribution Coverage,
      Product Availability, Price, Competitor, Team Execution,
      Customer Demand စတာတွေထဲက တစ်ခု ဖြစ်နိုင်ပါတယ်။
      </p>

      <p>
      Symptom ကိုသာ ဖြေရှင်းရင် Problem ပြန်ဖြစ်နိုင်ပါတယ်။
      Root Cause ကိုရှာရပါမယ်။
      </p>

      <h2>2. Problem Solving Framework</h2>

      <ol>
        <li>Define the Problem</li>
        <li>Collect Data</li>
        <li>Identify Root Cause</li>
        <li>Generate Options</li>
        <li>Evaluate Options</li>
        <li>Make Decision</li>
        <li>Execute</li>
        <li>Review Result</li>
      </ol>

      <h2>3. 5 Whys</h2>

      <p>
      Problem တစ်ခုကို “ဘာကြောင့်?” ဆိုတဲ့မေးခွန်းကို ထပ်ခါတလဲလဲမေးပြီး
      Root Cause ရှာနိုင်ပါတယ်။
      </p>

      <p>
      ဥပမာ — Sales ကျတယ်။<br>
      ဘာကြောင့်? → Outlet Order ကျတယ်။<br>
      ဘာကြောင့်? → Stock မရှိဘူး။<br>
      ဘာကြောင့်? → Replenishment မလုပ်ဘူး။<br>
      ဘာကြောင့်? → Forecast မမှန်ဘူး။
      </p>

      <h2>4. Data-Based Decision</h2>

      <p>
      Decision ချတဲ့အခါ Opinion, Assumption, Fact တို့ကို ခွဲပါ။
      “Customer မကြိုက်ဘူးထင်တယ်” က Assumption ဖြစ်နိုင်ပါတယ်။
      “Top 100 Customers ထဲက 60% က Price ကို Main Issue လို့ ပြောတယ်”
      ဆိုရင် Data ပိုနီးစပ်ပါတယ်။
      </p>

      <h2>5. Decision Criteria</h2>

      <ul>
        <li>Business Impact</li>
        <li>Cost</li>
        <li>Speed</li>
        <li>Risk</li>
        <li>Customer Impact</li>
        <li>People Impact</li>
        <li>Long-term Effect</li>
      </ul>

      <h2>6. Pareto Principle</h2>

      <p>
      Problem အများစုရဲ့ Impact ကို Problem အနည်းငယ်က ဖြစ်စေနိုင်ပါတယ်။
      ဒါကြောင့် “ပြဿနာအားလုံးကို တစ်ပြိုင်နက် ဖြေရှင်းမယ်” ဆိုတာထက်
      Impact အကြီးဆုံး Problem တွေကို ဦးစားပေးဖြေရှင်းပါ။
      </p>

      <h2>7. Root Cause vs Blame</h2>

      <p>
      Professional Manager က လူကိုအပြစ်တင်တာထက် System ကိုပြန်စစ်ပါတယ်။
      “Sales Rep မကြိုးစားဘူး” ဆိုတာထက်
      Target, Route Plan, Training, Stock, Incentive, Manager Coaching
      တွေကို စစ်ဆေးသင့်ပါတယ်။
      </p>

      <h2>8. Myanmar Business Example</h2>

      <p>
      Sales Team ရဲ့ Target Achievement 70% ပဲရှိတယ်ဆိုပါစို့။
      အရင်ဆုံး Team ကို အပြစ်မတင်ဘဲ Area, Product, Customer, Sales Rep,
      Day, Channel အလိုက် Data ခွဲကြည့်ပါ။
      </p>

      <p>
      တချို့ Rep တွေ 110% ရပြီး တချို့ Rep တွေ 45% ဖြစ်နေရင်
      Company-wide Market Problem မဟုတ်နိုင်ပါဘူး။
      Territory Management, Skill Gap သို့မဟုတ် Customer Portfolio
      ပြဿနာ ဖြစ်နိုင်ပါတယ်။
      </p>

      <h2>9. Decision Log</h2>

      <p>အရေးကြီး Decision တွေအတွက် အောက်ပါ ၅ ခုရေးထားပါ။</p>

      <ol>
        <li>Problem</li>
        <li>Available Data</li>
        <li>Options</li>
        <li>Decision</li>
        <li>Expected Result</li>
      </ol>

      <p>
      နောက်ပိုင်း Result ကို ပြန်ကြည့်တဲ့အခါ ဘာကြောင့် Decision ချခဲ့တယ်ဆိုတာ
      နားလည်နိုင်ပါတယ်။
      </p>

      <h2>10. Manager Thinking</h2>

      <div class="aung-highlight">
        <strong>Don't react. Diagnose first.</strong><br>
        ပြဿနာမြင်တာနဲ့ ချက်ချင်းတုံ့ပြန်မယ့်အစား Diagnose → Decide → Execute → Review
        လုပ်ပါ။
      </div>

      <h2>11. Exercise</h2>

      <p>
      ကိုယ့် Business မှာ လက်ရှိဖြစ်နေတဲ့ Problem တစ်ခုရွေးပြီး
      5 Whys ဖြင့် Root Cause ရှာပါ။
      </p>
      `,
      `
      <h2>Action Plan</h2>
      <ol>
        <li>Current Business Problem တစ်ခုရွေးပါ။</li>
        <li>Problem Statement ရေးပါ။</li>
        <li>Data စုပါ။</li>
        <li>5 Whys လုပ်ပါ။</li>
        <li>Solution Options 3 ခုရေးပါ။</li>
        <li>Best Option ရွေးပါ။</li>
        <li>Result ကို Review လုပ်ပါ။</li>
      </ol>
      `,
      [
        "Symptom နဲ့ Root Cause မတူဘူး။",
        "5 Whys နဲ့ Root Cause ရှာနိုင်တယ်။",
        "Fact, Assumption, Opinion ကို ခွဲရတယ်။",
        "Pareto Principle နဲ့ High Impact Problem ကို ဦးစားပေးနိုင်တယ်။",
        "Decision က Execute နဲ့ Review မပါရင် မပြည့်စုံဘူး။"
      ]
    ),

    /* =======================================================
       LESSON 09
       ======================================================= */

    lesson(
      "bf-09",
      "Lesson 09 — Business Planning",
      `
      <p><strong>Business Plan ဆိုတာ စာရွက်တစ်ရွက်ပေါ်မှာ အိပ်မက်ရေးတာမဟုတ်ပါဘူး။ ဘယ်နေရာကနေ ဘယ်နေရာကို ဘယ်အချိန်အတွင်း ဘယ်လိုသွားမလဲဆိုတဲ့ Execution Roadmap ဖြစ်ပါတယ်။</strong></p>

      <h2>1. Business Plan ဘာကြောင့်လိုသလဲ?</h2>

      <p>
      Plan မရှိရင် Team တစ်ယောက်ချင်းစီက မတူတဲ့ဦးတည်ချက်နဲ့ လုပ်နိုင်ပါတယ်။
      Plan ရှိရင် Goal, Priority, Resource, KPI, Timeline တွေကို တစ်နေရာတည်းမှာ
      ချိတ်ဆက်နိုင်ပါတယ်။
      </p>

      <h2>2. Business Plan ရဲ့ အဓိကအစိတ်အပိုင်း</h2>

      <ol>
        <li>Business Overview</li>
        <li>Market Analysis</li>
        <li>Customer</li>
        <li>Product / Service</li>
        <li>Business Model</li>
        <li>Marketing Plan</li>
        <li>Sales Plan</li>
        <li>Operations Plan</li>
        <li>People Plan</li>
        <li>Financial Plan</li>
        <li>Risk Plan</li>
        <li>KPI</li>
      </ol>

      <h2>3. SMART Goal</h2>

      <ul>
        <li><strong>Specific</strong></li>
        <li><strong>Measurable</strong></li>
        <li><strong>Achievable</strong></li>
        <li><strong>Relevant</strong></li>
        <li><strong>Time-bound</strong></li>
      </ul>

      <p>
      “Sales တိုးမယ်” ဆိုတာ မပြည့်စုံပါဘူး။
      “Q4 အတွင်း Monthly Revenue ကို 15% တိုးမယ်” ဆိုရင် ပိုတိကျပါတယ်။
      </p>

      <h2>4. Annual Plan → Quarterly → Monthly → Weekly</h2>

      <p>
      Annual Goal ကို တစ်နှစ်စာနဲ့ပဲ ထားရင် Execution အားနည်းနိုင်ပါတယ်။
      Annual → Quarterly → Monthly → Weekly အဖြစ် ခွဲချပါ။
      </p>

      <h2>5. KPI Tree</h2>

      <p>
      Revenue ကို တစ်ခုတည်းကြည့်တာထက် Revenue ရဲ့ Driver တွေကို ခွဲကြည့်ပါ။
      </p>

      <div class="aung-info-box">
        <p>
        Revenue = Number of Customers × Purchase Frequency × Average Order Value
        </p>
      </div>

      <p>
      ဒီလိုခွဲကြည့်ရင် Revenue မတက်တဲ့အကြောင်းရင်းကို ပိုလွယ်ကူစွာ ရှာနိုင်ပါတယ်။
      </p>

      <h2>6. Resource Planning</h2>

      <p>
      Goal ရှိရုံနဲ့ မပြီးပါဘူး။ လူ, ငွေ, အချိန်, Technology,
      Distribution Capacity စတဲ့ Resource လိုပါတယ်။
      </p>

      <h2>7. Financial Plan</h2>

      <p>Business Plan ထဲမှာ အနည်းဆုံး အောက်ပါ Financial Numbers တွေပါသင့်ပါတယ်။</p>

      <ul>
        <li>Sales Forecast</li>
        <li>Gross Profit</li>
        <li>Operating Expenses</li>
        <li>Net Profit</li>
        <li>Cash Flow</li>
        <li>Working Capital</li>
      </ul>

      <h2>8. Execution Calendar</h2>

      <div class="aung-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Action</th>
              <th>Owner</th>
              <th>Deadline</th>
              <th>KPI</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>New Customer Acquisition</td>
              <td>Sales Team</td>
              <td>30 Days</td>
              <td>50 New Customers</td>
            </tr>
            <tr>
              <td>Cost Reduction</td>
              <td>Operations</td>
              <td>60 Days</td>
              <td>5% Saving</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>9. Review Rhythm</h2>

      <p>
      Plan က အသက်ဝင်ဖို့ Review Rhythm လိုပါတယ်။
      Daily Check, Weekly Review, Monthly Business Review,
      Quarterly Strategy Review စတဲ့ Management Rhythm တည်ဆောက်ပါ။
      </p>

      <h2>10. Myanmar Business Example</h2>

      <p>
      Distribution Business တစ်ခုက နောက်နှစ် Sales 20% တိုးချင်တယ်ဆိုပါစို့။
      Sales Target တစ်ခုတည်းမချပါနဲ့။ Outlet Coverage, Active Customers,
      Strike Rate, Average Order Value, Product Mix, Sales Team Productivity,
      Collection, Stock Availability စတာတွေကို ခွဲပြီး Plan ဆွဲရပါမယ်။
      </p>

      <h2>11. Manager Thinking</h2>

      <p>
      Good Plan ဆိုတာ အလွန်ရှုပ်ထွေးတဲ့ Document မဟုတ်ပါဘူး။
      Team တစ်ခုလုံးက “ဘာလုပ်ရမယ်၊ ဘယ်သူလုပ်ရမယ်၊ ဘယ်အချိန်လုပ်ရမယ်၊
      ဘယ်လိုတိုင်းမယ်” ကို နားလည်နိုင်တဲ့ Plan ဖြစ်ရပါတယ်။
      </p>

      <h2>12. Exercise</h2>

      <p>
      နောက် 12 လအတွက် Business Goal တစ်ခုသတ်မှတ်ပြီး
      Quarterly Milestone ၄ ခု ခွဲပါ။ Quarter တစ်ခုစီအတွက်
      Top 3 Actions နဲ့ KPI သတ်မှတ်ပါ။
      </p>
      `,
      `
      <h2>Action Plan</h2>
      <ol>
        <li>12-Month Goal ရေးပါ။</li>
        <li>Quarterly Target ခွဲပါ။</li>
        <li>Monthly KPI ထည့်ပါ။</li>
        <li>Owner သတ်မှတ်ပါ။</li>
        <li>Weekly Review ပြုလုပ်ပါ။</li>
      </ol>
      `,
      [
        "Business Plan က Execution Roadmap ဖြစ်တယ်။",
        "SMART Goal က Goal ကို တိုင်းတာနိုင်အောင်လုပ်တယ်။",
        "Annual Goal ကို Quarterly, Monthly, Weekly ခွဲရတယ်။",
        "Financial Plan က Business Plan ရဲ့ အရေးကြီးတဲ့အစိတ်အပိုင်းဖြစ်တယ်။",
        "Plan ကို Review Rhythm နဲ့ အသက်သွင်းရတယ်။"
      ]
    ),

    /* =======================================================
       LESSON 10
       ======================================================= */

    lesson(
      "bf-10",
      "Lesson 10 — Business Growth & Management System",
      `
      <p><strong>Business တစ်ခုကို အောင်မြင်အောင်လုပ်တာထက် ရေရှည်တည်တံ့ပြီး Scale လုပ်နိုင်အောင် Management System တည်ဆောက်တာက ပိုအရေးကြီးပါတယ်။</strong></p>

      <h2>1. Growth ဆိုတာ Sales တိုးတာတစ်ခုတည်းမဟုတ်</h2>

      <p>
      Business Growth ကို Revenue, Profit, Customer Base, Market Share,
      Product Portfolio, Geographic Expansion, Team Capability,
      Operational Capacity စတဲ့ Dimension အမျိုးမျိုးနဲ့ တိုင်းနိုင်ပါတယ်။
      </p>

      <h2>2. Growth ရဲ့ အဓိကလမ်းကြောင်းများ</h2>

      <ul>
        <li>More Customers</li>
        <li>More Frequent Purchase</li>
        <li>Higher Average Order Value</li>
        <li>New Products</li>
        <li>New Channels</li>
        <li>New Geographic Markets</li>
        <li>Better Pricing</li>
        <li>Operational Efficiency</li>
      </ul>

      <h2>3. Sustainable Growth</h2>

      <p>
      Sales တိုးတာနဲ့ Cost က ပိုမြန်မြန်တိုးနေတယ်ဆိုရင် Growth က Sustainable
      မဖြစ်နိုင်ပါဘူး။ Growth ရဲ့ Quality ကို Profit Margin, Cash Flow,
      Customer Retention နဲ့ Team Capacity တို့နဲ့ပါ စစ်ရပါမယ်။
      </p>

      <h2>4. Management System</h2>

      <p>
      Management System ဆိုတာ People, Process, Data, KPI, Meeting,
      Decision Making, Accountability တွေကို ချိတ်ဆက်ထားတဲ့ စနစ်ဖြစ်ပါတယ်။
      </p>

      <h2>5. People</h2>

      <p>
      Right Person, Right Role, Clear Expectation, Coaching, Feedback,
      Accountability စနစ်တွေလိုပါတယ်။
      </p>

      <h2>6. Process</h2>

      <p>
      အရေးကြီးတဲ့လုပ်ငန်းစဉ်တွေကို SOP, Checklist, Approval Flow,
      Quality Standard တွေနဲ့ Standardize လုပ်ရပါမယ်။
      </p>

      <h2>7. Data</h2>

      <p>
      “ထင်တယ်” ဆိုတာထက် “Data အရ ဘာဖြစ်နေလဲ?” ကို စဉ်းစားရပါမယ်။
      Dashboard, Sales Report, Financial Report, Customer Data,
      Inventory Data တွေက Management Decision အတွက် အရေးကြီးပါတယ်။
      </p>

      <h2>8. KPI</h2>

      <p>
      KPI မရှိရင် Performance ကို တိတိကျကျ မတိုင်းနိုင်ပါဘူး။
      KPI အများကြီးထည့်တာထက် Business Objective ကို တကယ်မောင်းနှင်ပေးတဲ့
      KPI တွေကို ရွေးပါ။
      </p>

      <h2>9. Management Meeting Rhythm</h2>

      <ul>
        <li><strong>Daily</strong> — Critical Issues</li>
        <li><strong>Weekly</strong> — Execution & KPI</li>
        <li><strong>Monthly</strong> — Business Performance</li>
        <li><strong>Quarterly</strong> — Strategy Review</li>
      </ul>

      <h2>10. Accountability</h2>

      <p>
      Responsibility ဆိုတာ “အလုပ်လုပ်ရမယ်” လို့ပြောတာပါ။
      Accountability ဆိုတာ “Result အတွက် တာဝန်ယူရမယ်” ဆိုတာပါ။
      Manager က Role နဲ့ Result ကို ရှင်းရှင်းလင်းလင်း သတ်မှတ်ရပါမယ်။
      </p>

      <h2>11. Delegation</h2>

      <p>
      Business Owner / Manager တစ်ယောက်က အလုပ်အားလုံးကို ကိုယ်တိုင်လုပ်နေရင်
      Business Scale လုပ်ဖို့ ခက်ပါတယ်။
      Delegation လုပ်တဲ့အခါ Task ပေးရုံမဟုတ်ဘဲ Expected Result,
      Deadline, Authority, KPI, Review Point တွေပါ သတ်မှတ်ပေးရပါမယ်။
      </p>

      <h2>12. Business Maturity</h2>

      <div class="aung-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Stage</th>
              <th>အခြေအနေ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Stage 1</td>
              <td>Owner Driven</td>
            </tr>
            <tr>
              <td>Stage 2</td>
              <td>Team Driven</td>
            </tr>
            <tr>
              <td>Stage 3</td>
              <td>Process Driven</td>
            </tr>
            <tr>
              <td>Stage 4</td>
              <td>Data Driven</td>
            </tr>
            <tr>
              <td>Stage 5</td>
              <td>Scalable System</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>13. Myanmar Business Example</h2>

      <p>
      Owner ကိုယ်တိုင် Customer တွေကို ဖုန်းဆက်၊ Stock စစ်၊ ငွေကောက်၊
      Employee ပြဿနာဖြေရှင်းနေရတဲ့ Business တစ်ခုကို စဉ်းစားပါ။
      Business က Owner မရှိရင် ရပ်သွားနိုင်ပါတယ်။
      </p>

      <p>
      အဲ့ဒီအခြေအနေကနေ Team Structure, SOP, KPI, Reporting,
      Financial Control, Customer Management, Delegation တည်ဆောက်ပြီး
      Owner မရှိတဲ့အချိန်မှာတောင် လည်ပတ်နိုင်တဲ့ System တစ်ခုဖြစ်လာအောင်
      ပြောင်းလဲရပါမယ်။
      </p>

      <h2>14. Business Growth Dashboard</h2>

      <p>Manager တစ်ယောက်အနေနဲ့ အနည်းဆုံး အောက်ပါအချက်တွေကို ပုံမှန်ကြည့်သင့်ပါတယ်။</p>

      <ul>
        <li>Revenue</li>
        <li>Gross Margin</li>
        <li>Net Profit</li>
        <li>Cash Flow</li>
        <li>Customer Growth</li>
        <li>Customer Retention</li>
        <li>Sales Productivity</li>
        <li>Stock / Inventory</li>
        <li>Receivables</li>
        <li>Employee Performance</li>
      </ul>

      <h2>15. Final Manager Framework</h2>

      <div class="aung-highlight">
        <strong>Customer → Strategy → People → Process → KPI → Finance → Review → Improvement → Growth</strong>
      </div>

      <p>
      ဒီ Cycle ကို Business တစ်ခုလုံးမှာ အသုံးချနိုင်ပါတယ်။
      Customer ကို နားလည်ပြီး Strategy ချ၊ Team ကို တည်ဆောက်၊ Process တည်ဆောက်၊
      KPI သတ်မှတ်၊ Financial Result ကိုကြည့်၊ Review လုပ်ပြီး
      Continuous Improvement ပြုလုပ်ရပါမယ်။
      </p>

      <h2>16. Final Business Challenge</h2>

      <p>
      သင့် Business ကို CEO / General Manager တစ်ယောက်လို ပြန်ကြည့်ပါ။
      </p>

      <ol>
        <li>Customer ဘယ်သူလဲ?</li>
        <li>Value Proposition ဘာလဲ?</li>
        <li>Revenue ဘယ်လိုရလဲ?</li>
        <li>Profit ဘယ်လောက်ရှိလဲ?</li>
        <li>Cash Flow ကောင်းလား?</li>
        <li>Market Position ဘယ်လိုလဲ?</li>
        <li>Competitor Advantage ဘာလဲ?</li>
        <li>Team Capability ဘယ်လိုလဲ?</li>
        <li>Process တွေ Standard ဖြစ်လား?</li>
        <li>KPI တွေမှန်လား?</li>
        <li>Risk တွေ ဘာရှိလဲ?</li>
        <li>Growth Opportunity ဘာရှိလဲ?</li>
      </ol>

      <h2>17. Business Fundamentals Course Summary</h2>

      <p>
      ဒီ Course ရဲ့ အဓိကရည်ရွယ်ချက်က Business ကို Function တစ်ခုတည်းကနေ
      မကြည့်ဘဲ System တစ်ခုလုံးအဖြစ် စဉ်းစားနိုင်စေဖို့ ဖြစ်ပါတယ်။
      </p>

      <p>
      Sales က Revenue ဖန်တီးပေးတယ်။ Marketing က Demand ဖန်တီးပေးတယ်။
      Finance က Money ကို ထိန်းပေးတယ်။ HR က People ကို တည်ဆောက်ပေးတယ်။
      Operations က Process ကို လည်ပတ်ပေးတယ်။ Strategy က Direction ပေးတယ်။
      Leadership က အားလုံးကို တစ်နေရာတည်းမှာ ချိတ်ဆက်ပေးပါတယ်။
      </p>

      <div class="aung-info-box">
        <strong>Professional Business Manager တစ်ယောက်ဟာ အလုပ်များတဲ့သူမဟုတ်ပါဘူး။
        Business Result ကို System နဲ့ မောင်းနှင်နိုင်တဲ့သူ ဖြစ်ပါတယ်။</strong>
      </div>

      <h2>18. Final Takeaway</h2>

      <p>
      Business တစ်ခုကို တကယ်တိုးတက်စေချင်ရင်
      “ဒီနေ့ ဘယ်လောက်ရောင်းရလဲ?” ဆိုတာတစ်ခုတည်း မမေးပါနဲ့။
      </p>

      <p>
      <strong>
      Customer ဘယ်လောက်တန်ဖိုးရသလဲ?<br>
      Profit ဘယ်လောက်ကျန်သလဲ?<br>
      Cash ဘယ်လောက်ရှိသလဲ?<br>
      Team ဘယ်လောက်ကောင်းသလဲ?<br>
      Process ဘယ်လောက်ကောင်းသလဲ?<br>
      Business က Owner မရှိလည်း လည်ပတ်နိုင်သလား?<br>
      နောက် ၃ နှစ်မှာ ဘယ်လောက်ကြီးနိုင်သလဲ?
      </strong>
      </p>

      <p>
      ဒီလိုမေးခွန်းတွေကို ဖြေနိုင်တဲ့အချိန်မှာ
      သင်ဟာ Employee / Salesperson အမြင်ကနေ
      <strong>Business Manager Thinking</strong> ဘက်ကို ရောက်လာပါပြီ။
      </p>
      `,
      `
      <h2>Final Action Plan</h2>

      <p>
      Business Fundamentals Course ပြီးဆုံးတဲ့အနေနဲ့ ကိုယ့် Business
      အတွက် 30-Day Management Improvement Plan တစ်ခု ဆွဲပါ။
      </p>

      <ol>
        <li>Business Problem 3 ခု</li>
        <li>Customer Improvement 2 ခု</li>
        <li>Sales Improvement 2 ခု</li>
        <li>Cost Reduction 2 ခု</li>
        <li>Process Improvement 2 ခု</li>
        <li>People Development 2 ခု</li>
        <li>Financial Control 2 ခု</li>
        <li>Growth Opportunity 3 ခု</li>
      </ol>

      <h3>30-Day Rule</h3>

      <p>
      Plan ရေးပြီးထားရုံနဲ့ မပြီးပါဘူး။
      တစ်ပတ်တစ်ကြိမ် Review လုပ်ပြီး
      ဘာလုပ်ပြီးပြီလဲ၊ ဘာမလုပ်ရသေးလဲ၊ ဘာအကျိုးသက်ရောက်မှုရှိလဲ
      ဆိုတာ တိုင်းတာပါ။
      </p>

      <div class="aung-highlight">
        <strong>Business Manager Challenge:</strong><br>
        “Think like an Owner → Manage like a Professional → Execute like a Leader.”
      </div>
      `,
      [
        "Business Growth ကို Revenue တစ်ခုတည်းနဲ့ မတိုင်းရဘူး။",
        "Management System မှာ People, Process, Data, KPI နဲ့ Accountability ပါရတယ်။",
        "Delegation က Scale လုပ်ဖို့ အရေးကြီးတယ်။",
        "Sustainable Growth မှာ Profit နဲ့ Cash Flow ကိုပါ ထည့်စဉ်းစားရတယ်။",
        "Professional Manager က Business ကို System တစ်ခုလုံးအဖြစ် စီမံတယ်။"
      ]
    )

  ];

  /* =========================================================
     COURSE OBJECT
     ========================================================= */

  const COURSE = {
    id: COURSE_ID,
    category: "BUSINESS",
    icon: "📚",
    title: "Business Fundamentals",
    burmeseTitle: "စီးပွားရေးလုပ်ငန်း အခြေခံ",
    description:
      "Business တစ်ခုကို Customer, Strategy, Sales, Finance, People, Process နှင့် Growth အမြင်ဖြင့် စနစ်တကျ စီမံခန့်ခွဲနိုင်ရန် သင်ကြားပေးသော Professional Business Foundation Course ဖြစ်သည်။",
    level: "Professional",
    lessons: LESSONS
  };

  /* =========================================================
     STORAGE
     ========================================================= */

  function getCompleted() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);

      if (!raw) return [];

      const parsed = JSON.parse(raw);

      if (!Array.isArray(parsed)) return [];

      return parsed;
    } catch (error) {
      console.warn(
        "Aung Business Academy: unable to read Business Fundamentals progress.",
        error
      );
      return [];
    }
  }

  function saveCompleted(list) {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(Array.from(new Set(list)))
      );

      window.dispatchEvent(
        new CustomEvent("aungAcademyProgressUpdated", {
          detail: {
            courseId: COURSE_ID,
            completed: Array.from(new Set(list))
          }
        })
      );
    } catch (error) {
      console.warn(
        "Aung Business Academy: unable to save Business Fundamentals progress.",
        error
      );
    }
  }

  function isBusinessLessonCompleted(id) {
    return getCompleted().includes(id);
  }

  function completeBusinessLesson(id) {
    const exists = LESSONS.some(function (item) {
      return item.id === id;
    });

    if (!exists) return false;

    const completed = getCompleted();

    if (!completed.includes(id)) {
      completed.push(id);
      saveCompleted(completed);
    }

    return true;
  }

  function resetBusinessProgress() {
    try {
      localStorage.removeItem(STORAGE_KEY);

      window.dispatchEvent(
        new CustomEvent("aungAcademyProgressUpdated", {
          detail: {
            courseId: COURSE_ID,
            completed: []
          }
        })
      );

      return true;
    } catch (error) {
      console.warn(
        "Aung Business Academy: unable to reset progress.",
        error
      );

      return false;
    }
  }

  function getBusinessProgress() {
    const completed = getCompleted();

    const validCompleted = completed.filter(function (id) {
      return LESSONS.some(function (item) {
        return item.id === id;
      });
    });

    const total = LESSONS.length;
    const completedCount = validCompleted.length;
    const remaining = Math.max(total - completedCount, 0);
    const percent =
      total > 0
        ? Math.round((completedCount / total) * 100)
        : 0;

    return {
      courseId: COURSE_ID,
      total: total,
      completed: completedCount,
      remaining: remaining,
      percent: percent,
      completedIds: validCompleted
    };
  }

  function getBusinessLesson(id) {
    return (
      LESSONS.find(function (item) {
        return item.id === id;
      }) || null
    );
  }

  function getBusinessLessons() {
    return LESSONS.slice();
  }

  /* =========================================================
     GLOBAL COURSE REGISTRY
     ========================================================= */

  window.AungBusinessAcademy =
    window.AungBusinessAcademy || {};

  window.AungBusinessAcademy.COURSES =
    window.AungBusinessAcademy.COURSES || [];

  const registry = window.AungBusinessAcademy.COURSES;

  const existingIndex = registry.findIndex(function (item) {
    return item && item.id === COURSE_ID;
  });

  if (existingIndex >= 0) {
    registry[existingIndex] = COURSE;
  } else {
    registry.push(COURSE);
  }

  /* =========================================================
     PUBLIC API
     ========================================================= */

  window.AungBusinessAcademy.BusinessFundamentals = {
    COURSE: COURSE,
    LESSONS: LESSONS,

    getBusinessLessons: getBusinessLessons,
    getBusinessLesson: getBusinessLesson,

    isBusinessLessonCompleted:
      isBusinessLessonCompleted,

    completeBusinessLesson:
      completeBusinessLesson,

    resetBusinessProgress:
      resetBusinessProgress,

    getBusinessProgress:
      getBusinessProgress
  };

  /* Backward-compatible global names */

  window.BUSINESS_FUNDAMENTALS_COURSE = COURSE;
  window.BUSINESS_FUNDAMENTALS_LESSONS = LESSONS;

  window.getBusinessLessons = getBusinessLessons;
  window.getBusinessLesson = getBusinessLesson;
  window.isBusinessLessonCompleted =
    isBusinessLessonCompleted;
  window.completeBusinessLesson =
    completeBusinessLesson;
  window.resetBusinessProgress =
    resetBusinessProgress;
  window.getBusinessProgress =
    getBusinessProgress;

  /* =========================================================
     CONSOLE INFO
     ========================================================= */

  console.log(
    "Aung Business Academy:",
    "Business Fundamentals loaded.",
    LESSONS.length + " professional lessons."
  );

})();
