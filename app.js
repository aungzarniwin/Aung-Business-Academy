// ======================================================
// AUNG BUSINESS ACADEMY V8
// BUSINESS + SALES + MARKETING + LEADERSHIP
// PROFESSIONAL LESSON SYSTEM
// Myanmar Lesson Edition
// ======================================================

const STORAGE_KEY = "aungBusinessAcademyV8";

// ======================================================
// COURSE DATA
// ======================================================

const COURSES = [

  // ====================================================
  // SALES MANAGEMENT
  // ====================================================

  {
    id: "sales",
    title: "Sales Management Mastery",
    category: "sales",
    icon: "↗",
    color: "blue",

    description:
      "အရောင်းရည်မှန်းချက်၊ အရောင်းအဖွဲ့၊ နယ်မြေစီမံခန့်ခွဲမှုနှင့် လုပ်ဆောင်ရည်ကို ထိရောက်စွာ စီမံခန့်ခွဲနိုင်ရန် လေ့လာပါ။",

    lessons: [

      {
        title: "အရောင်းရည်မှန်းချက် စီမံခြင်း",

        content: `
          <p>
            အရောင်းရည်မှန်းချက်ဆိုတာ ကုမ္ပဏီက သတ်မှတ်ပေးထားတဲ့
            ရောင်းအားရလဒ်ကို အဖွဲ့နဲ့ လက်တွေ့အကောင်အထည်ဖော်နိုင်အောင်
            စီမံပေးခြင်းဖြစ်ပါတယ်။
          </p>

          <h4>အဓိကအချက်များ</h4>

          <ul>
            <li>လစဉ် Target ကို အပတ်စဉ်နှင့် နေ့စဉ် Target အဖြစ် ခွဲခြားပါ။</li>
            <li>Salesperson တစ်ဦးချင်းစီ၏ စွမ်းဆောင်ရည်အလိုက် Target ခွဲဝေပါ။</li>
            <li>နယ်မြေ၊ Customer Potential နှင့် ယခင်ရောင်းအားကို သုံးသပ်ပါ။</li>
            <li>Target နှင့် Actual ကို ပုံမှန်နှိုင်းယှဉ်ပါ။</li>
            <li>Gap ဖြစ်ရသည့် အကြောင်းရင်းကို ရှာဖွေပြီး Action Plan ချမှတ်ပါ။</li>
          </ul>

          <h4>လက်တွေ့လုပ်ဆောင်ရန်</h4>

          <p>
            လစဉ် Target ကို ယူပြီး အပတ်စဉ် Target၊
            Salesperson တစ်ဦးချင်း Target နှင့်
            အဓိက Customer Target များအဖြစ် ခွဲရေးပါ။
          </p>

          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>
              Target ဆိုတာ နံပါတ်တစ်ခုတည်းမဟုတ်ပါ။
              လူ၊ နံပါတ်နှင့် Field Execution သုံးခုကို တွဲဖက်စီမံရပါတယ်။
            </span>
          </div>
        `
      },

      {
        title: "အရောင်းအဖွဲ့ကို Coaching ပေးခြင်း",

        content: `
          <p>
            Sales Manager တစ်ယောက်အတွက် Coaching ဆိုတာ
            အဖွဲ့ဝင်ကို အမိန့်ပေးခြင်းထက် သူကိုယ်တိုင်
            ပြဿနာကို နားလည်ပြီး ဖြေရှင်းနိုင်အောင် လမ်းညွှန်ပေးခြင်းဖြစ်ပါတယ်။
          </p>

          <h4>အဓိကအချက်များ</h4>

          <ul>
            <li>Salesperson ရဲ့ Result ကို အရင်စစ်ဆေးပါ။</li>
            <li>Field မှာ Customer နဲ့ ဘယ်လိုဆက်ဆံနေသလဲ လေ့လာပါ။</li>
            <li>Skill Gap နဲ့ Knowledge Gap ကို ခွဲခြားပါ။</li>
            <li>မှန်ကန်တဲ့နည်းလမ်းကို ကိုယ်တိုင်ပြပြီး လေ့ကျင့်စေပါ။</li>
            <li>Feedback ပေးပြီး နောက်တစ်ကြိမ် ပြန်စစ်ဆေးပါ။</li>
          </ul>

          <h4>လက်တွေ့လုပ်ဆောင်ရန်</h4>

          <p>
            Underperforming Salesperson တစ်ဦးကို ရွေးပြီး
            သူ့ရဲ့ Target၊ Actual၊ Customer Coverage နဲ့
            Field Behavior ကို စစ်ဆေးပါ။
            ပြီးရင် တစ်ပတ်စာ Coaching Action Plan တစ်ခု ချမှတ်ပါ။
          </p>

          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>
              အဖြေကို ချက်ချင်းပေးမယ့်အစား မေးခွန်းမေးပြီး
              သူကိုယ်တိုင် အဖြေရှာနိုင်အောင် Coaching ပေးပါ။
            </span>
          </div>
        `
      },

      {
        title: "အရောင်းနယ်မြေ စီမံခန့်ခွဲခြင်း",

        content: `
          <p>
            Territory Management ဆိုတာ အရောင်းနယ်မြေအလိုက်
            Customer၊ Salesperson၊ Route နှင့် Resource များကို
            ထိရောက်စွာ ခွဲဝေစီမံခြင်းဖြစ်ပါတယ်။
          </p>

          <h4>အဓိကအချက်များ</h4>

          <ul>
            <li>နယ်မြေတစ်ခုချင်းစီရဲ့ Sales Potential ကို သုံးသပ်ပါ။</li>
            <li>Customer များကို အရေးပါမှုအလိုက် ခွဲခြားပါ။</li>
            <li>Customer Coverage နှင့် Visit Frequency သတ်မှတ်ပါ။</li>
            <li>Route Plan နှင့် PJP ကို စနစ်တကျ ပြုလုပ်ပါ။</li>
            <li>Competitor လှုပ်ရှားမှုကို ပုံမှန်စောင့်ကြည့်ပါ။</li>
            <li>အလားအလာမြင့်တဲ့ နယ်မြေကို Resource ပိုပေးပါ။</li>
          </ul>

          <h4>လက်တွေ့လုပ်ဆောင်ရန်</h4>

          <p>
            မိမိတာဝန်ယူရတဲ့ နယ်မြေကို Customer Potential အလိုက်
            A, B, C အုပ်စုခွဲပြီး Visit Frequency သတ်မှတ်ပါ။
          </p>

          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>
              Customer အားလုံးကို တူညီတဲ့အချိန်မပေးပါနဲ့။
              Potential မြင့်တဲ့ Customer နဲ့ နယ်မြေကို ဦးစားပေးပါ။
            </span>
          </div>
        `
      },

      {
        title: "လုပ်ဆောင်ရည် သုံးသပ်ခြင်း",

        content: `
          <p>
            Performance Review ဆိုတာ Target နဲ့ Actual ကို
            နှိုင်းယှဉ်ပြီး Gap ရဲ့ အကြောင်းရင်းကို ရှာဖွေကာ
            နောက်တစ်ဆင့် Action Plan ချမှတ်ခြင်းဖြစ်ပါတယ်။
          </p>

          <h4>စစ်ဆေးသင့်တဲ့ KPI များ</h4>

          <ul>
            <li>Sales Volume</li>
            <li>Revenue</li>
            <li>Target Achievement</li>
            <li>Customer Coverage</li>
            <li>Distribution</li>
            <li>AR / Collection</li>
            <li>Salesperson Productivity</li>
          </ul>

          <h4>လက်တွေ့လုပ်ဆောင်ရန်</h4>

          <p>
            Target မပြည့်တဲ့ Salesperson တစ်ဦးကို ရွေးပြီး
            လူ၊ Customer၊ Product၊ နယ်မြေနှင့် Execution
            အပိုင်းတွေခွဲပြီး Root Cause ရှာပါ။
          </p>

          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>
              Performance Review မှာ ခံစားချက်နဲ့ မဆုံးဖြတ်ဘဲ
              Data နဲ့ Fact ကို အခြေခံပြီး ဆုံးဖြတ်ပါ။
            </span>
          </div>
        `
      }

    ]
  },

  // ====================================================
  // BUSINESS FOUNDATION
  // ====================================================

  {
    id: "business",
    title: "Business Foundation",
    category: "business",
    icon: "◆",
    color: "green",

    description:
      "စီးပွားရေးအခြေခံ၊ Customer Value၊ အမြတ်နှင့် ငွေကြေးလည်ပတ်မှုကို နားလည်စေရန် လေ့လာပါ။",

    lessons: [

      {
        title: "စီးပွားရေး အခြေခံသဘောတရားများ",

        content: `
          <p>
            စီးပွားရေးတစ်ခု အောင်မြင်ဖို့ Customer၊ Product၊
            Value၊ Revenue၊ Profit နှင့် Cash Flow တို့ကို
            တစ်ခုနဲ့တစ်ခု ချိတ်ဆက်နားလည်ဖို့ လိုပါတယ်။
          </p>

          <h4>အဓိကအချက်များ</h4>

          <ul>
            <li>Customer ဘယ်သူလဲဆိုတာ သိရမယ်။</li>
            <li>Customer အတွက် ဘာတန်ဖိုးပေးနိုင်လဲ သိရမယ်။</li>
            <li>Revenue ဘယ်လိုရလာသလဲ နားလည်ရမယ်။</li>
            <li>Cost နဲ့ Profit ကို စောင့်ကြည့်ရမယ်။</li>
            <li>Cash Flow ကို စနစ်တကျ ထိန်းချုပ်ရမယ်။</li>
          </ul>

          <h4>လက်တွေ့လုပ်ဆောင်ရန်</h4>

          <p>
            Customer → Product → Sales → Revenue →
            Cost → Profit ဆိုတဲ့ လုပ်ငန်းစီးကြောင်းကို
            စာရွက်ပေါ်မှာ ရေးဆွဲကြည့်ပါ။
          </p>

          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>
              ရောင်းအားတက်တာတစ်ခုတည်းနဲ့ Business ကောင်းတယ်လို့
              မဆိုနိုင်ပါဘူး။ Profit နဲ့ Cash Flow ကိုပါ ကြည့်ရပါတယ်။
            </span>
          </div>
        `
      },

      {
        title: "ဖောက်သည်နှင့် တန်ဖိုးဖန်တီးခြင်း",

        content: `
          <p>
            Customer တွေဟာ Product ကိုပဲ ဝယ်တာမဟုတ်ပါဘူး။
            သူတို့ရဲ့ လိုအပ်ချက်၊ ပြဿနာနဲ့ ရရှိမယ့်တန်ဖိုးကို
            ဖြေရှင်းပေးနိုင်တဲ့ Solution ကို ဝယ်ကြတာဖြစ်ပါတယ်။
          </p>

          <h4>အဓိကအချက်များ</h4>

          <ul>
            <li>Customer လိုအပ်ချက်ကို နားထောင်ပါ။</li>
            <li>Customer ရဲ့ အဓိကပြဿနာကို ရှာပါ။</li>
            <li>Customer အုပ်စုများကို ခွဲခြားပါ။</li>
            <li>မိမိ Product ရဲ့ တန်ဖိုးကို ရှင်းပြပါ။</li>
            <li>Complaint များကို အမြန်ဖြေရှင်းပါ။</li>
            <li>Customer Relationship ကို ရေရှည်တည်ဆောက်ပါ။</li>
          </ul>

          <h4>လက်တွေ့လုပ်ဆောင်ရန်</h4>

          <p>
            အဓိက Customer ၅ ယောက်ကို ရွေးပြီး
            သူတို့ရဲ့ အကြီးမားဆုံး Business Problem ကို ရေးပါ။
          </p>

          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>
              Product ရောင်းဖို့ပဲ မကြိုးစားပါနဲ့။
              Customer ရဲ့ Business Problem ကို ဖြေရှင်းပေးပါ။
            </span>
          </div>
        `
      },

      {
        title: "အမြတ်နှင့် ငွေကြေးလည်ပတ်မှု",

        content: `
          <p>
            Revenue များတာနဲ့ Business က အမြတ်များတယ်လို့ မဆိုနိုင်ပါဘူး။
            Cost၊ Margin၊ Receivable နဲ့ Cash Flow ကိုလည်း
            Manager တစ်ယောက်အနေနဲ့ နားလည်ထားရပါမယ်။
          </p>

          <h4>အဓိကအချက်များ</h4>

          <ul>
            <li>Revenue နဲ့ Profit ကို ခွဲခြားနားလည်ပါ။</li>
            <li>Gross Margin ကို စောင့်ကြည့်ပါ။</li>
            <li>Fixed Cost နဲ့ Variable Cost ကို ခွဲပါ။</li>
            <li>Customer Receivable ကို ထိန်းချုပ်ပါ။</li>
            <li>Stock များလွန်းခြင်းကို ရှောင်ပါ။</li>
            <li>Cash Inflow နဲ့ Cash Outflow ကို စောင့်ကြည့်ပါ။</li>
          </ul>

          <h4>လက်တွေ့လုပ်ဆောင်ရန်</h4>

          <p>
            မိမိလုပ်ငန်းရဲ့ လစဉ် Revenue၊ Cost၊ Profit နဲ့
            Receivable ကို စာရင်းချပြီး ဘယ်နေရာမှာ
            ငွေကြေးပိတ်ဆို့နေလဲ ရှာပါ။
          </p>

          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>
              ရောင်းအားတက်ဖို့အရေးကြီးသလို ရောင်းရငွေကို
              အချိန်မီ ပြန်လည်ကောက်ခံနိုင်ဖို့လည်း အရေးကြီးပါတယ်။
            </span>
          </div>
        `
      }

    ]
  },

  // ====================================================
  // MARKETING
  // ====================================================

  {
    id: "marketing",
    title: "Marketing & Growth",
    category: "marketing",
    icon: "◎",
    color: "orange",

    description:
      "Marketing အခြေခံ၊ Digital Growth နှင့် Campaign တိုင်းတာခြင်းကို လေ့လာပါ။",

    lessons: [

      {
        title: "Marketing အခြေခံများ",

        content: `
          <p>
            Marketing ဆိုတာ Product ကို ကြော်ငြာရုံတင်မဟုတ်ပါဘူး။
            Market၊ Customer၊ Positioning၊ Value Proposition နဲ့
            Competitive Advantage ကို နားလည်ပြီး Customer Demand
            ဖန်တီးခြင်းဖြစ်ပါတယ်။
          </p>

          <h4>အဓိကအချက်များ</h4>

          <ul>
            <li>Target Customer ကို သတ်မှတ်ပါ။</li>
            <li>Market ကို လေ့လာပါ။</li>
            <li>Competitor ကို နားလည်ပါ။</li>
            <li>မိမိ Product ရဲ့ ထူးခြားချက်ကို သတ်မှတ်ပါ။</li>
            <li>Customer အတွက် Value Proposition တည်ဆောက်ပါ။</li>
          </ul>

          <h4>လက်တွေ့လုပ်ဆောင်ရန်</h4>

          <p>
            မိမိ Product တစ်ခုကို ရွေးပြီး
            ဘယ်သူအတွက်လဲ၊ ဘာပြဿနာကို ဖြေရှင်းပေးလဲ၊
            ဘာကြောင့် ကျွန်တော်တို့ကို ရွေးသင့်လဲဆိုတာ ရေးပါ။
          </p>

          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>
              Marketing က Customer ကို ဆွဲဆောင်ပြီး
              Sales က Demand ကို Business Result အဖြစ် ပြောင်းပေးပါတယ်။
            </span>
          </div>
        `
      },

      {
        title: "Digital ဖြင့် လုပ်ငန်းတိုးတက်စေခြင်း",

        content: `
          <p>
            Digital Channel များကို အသုံးပြုပြီး Customer Awareness၊
            Engagement၊ Lead Generation နှင့် Sales Conversion ကို
            တိုးတက်စေနိုင်ပါတယ်။
          </p>

          <h4>အဓိကအချက်များ</h4>

          <ul>
            <li>Customer ဘယ် Digital Channel ကို အသုံးများလဲ သိပါ။</li>
            <li>အသုံးဝင်တဲ့ Content ဖန်တီးပါ။</li>
            <li>Customer Engagement ကို တိုးတက်အောင်လုပ်ပါ။</li>
            <li>Lead ရရှိအောင် Call-to-Action ထည့်ပါ။</li>
            <li>Lead ကနေ Sales ဖြစ်လာမှုကို တိုင်းတာပါ။</li>
            <li>ရလဒ်ကောင်းတဲ့ Channel ကို ပိုမိုအာရုံစိုက်ပါ။</li>
          </ul>

          <h4>လက်တွေ့လုပ်ဆောင်ရန်</h4>

          <p>
            Customer အုပ်စုတစ်ခုကို ရွေးပြီး တစ်ပတ်စာ Content
            အစီအစဉ်တစ်ခု ဆွဲပါ။ Content → Lead →
            Follow-up → Sale ဆိုတဲ့ လမ်းကြောင်းကို သတ်မှတ်ပါ။
          </p>

          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>
              Content ရဲ့ ရည်ရွယ်ချက်က Like ရဖို့တင်မဟုတ်ပါဘူး။
              Customer ကို Lead နဲ့ Sale အဖြစ် ပြောင်းလဲနိုင်ဖို့ ဖြစ်ပါတယ်။
            </span>
          </div>
        `
      },

      {
        title: "Marketing Campaign တိုင်းတာခြင်း",

        content: `
          <p>
            Campaign တစ်ခုအောင်မြင်တယ် မအောင်မြင်ဘူးဆိုတာ
            ခံစားချက်နဲ့ မဆုံးဖြတ်ဘဲ Data နဲ့ တိုင်းတာရပါတယ်။
          </p>

          <h4>စောင့်ကြည့်သင့်တဲ့ KPI များ</h4>

          <ul>
            <li>Reach</li>
            <li>Engagement</li>
            <li>Leads</li>
            <li>Conversion</li>
            <li>Customer Acquisition Cost</li>
            <li>Revenue Contribution</li>
            <li>Return on Investment</li>
          </ul>

          <h4>လက်တွေ့လုပ်ဆောင်ရန်</h4>

          <p>
            Campaign တစ်ခုအတွက် Objective တစ်ခုသတ်မှတ်ပြီး
            KPI ၃ ခုမှ ၅ ခုအထိ ရွေးပါ။ Campaign ပြီးတဲ့အခါ
            ရလဒ်ကို အရင် Campaign နဲ့ နှိုင်းယှဉ်ပါ။
          </p>

          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>
              Like နဲ့ View အရေအတွက်တစ်ခုတည်း မကြည့်ပါနဲ့။
              Lead၊ Conversion နဲ့ Revenue ကိုပါ ကြည့်ပါ။
            </span>
          </div>
        `
      }

    ]
  },

  // ====================================================
  // LEADERSHIP
  // ====================================================

  {
    id: "leadership",
    title: "Leadership & Team Management",
    category: "leadership",
    icon: "★",
    color: "purple",

    description:
      "ခေါင်းဆောင်မှု၊ Coaching၊ Empowerment၊ Accountability နှင့် Team Motivation ကို လေ့လာပါ။",

    lessons: [

      {
        title: "ခေါင်းဆောင်မှု အခြေခံများ",

        content: `
          <p>
            Leadership ဆိုတာ ရာထူးရှိခြင်းတစ်ခုတည်း မဟုတ်ပါဘူး။
            လူတွေကို ဦးတည်ချက်ပေးခြင်း၊ ရည်မှန်းချက်ရှင်းလင်းပေးခြင်း၊
            တာဝန်ယူမှုရှိစေခြင်းနဲ့ ယုံကြည်မှုတည်ဆောက်ခြင်း ဖြစ်ပါတယ်။
          </p>

          <h4>အဓိကအချက်များ</h4>

          <ul>
            <li>Team အတွက် ရည်မှန်းချက်ရှင်းလင်းစွာ သတ်မှတ်ပါ။</li>
            <li>Expectation ကို အစကတည်းက ရှင်းပြပါ။</li>
            <li>တာဝန်နဲ့ Ownership ကို ခွဲခြားပေးပါ။</li>
            <li>Communication ကို ပုံမှန်ပြုလုပ်ပါ။</li>
            <li>Data နဲ့ Fact ကို အသုံးပြုပါ။</li>
            <li>ကိုယ်တိုင် စံနမူနာကောင်း ပြပါ။</li>
          </ul>

          <h4>လက်တွေ့လုပ်ဆောင်ရန်</h4>

          <p>
            မိမိအဖွဲ့အတွက် ဘာရလဒ်ကို ရချင်တာလဲ၊
            ဘယ်သူက ဘာတာဝန်ယူမလဲ၊ ဘယ်အချိန်မှာ Review လုပ်မလဲ
            ဆိုတာ ရှင်းလင်းစွာ သတ်မှတ်ပါ။
          </p>

          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>
              ကောင်းမွန်တဲ့ Leader တစ်ယောက်ဟာ လူတွေကို ဖိအားပေးတာထက်
              Direction နဲ့ Clarity ပေးနိုင်ရပါတယ်။
            </span>
          </div>
        `
      },

      {
        title: "Coaching နှင့် လုပ်ပိုင်ခွင့်ပေးခြင်း",

        content: `
          <p>
            ကောင်းမွန်တဲ့ Manager တစ်ယောက်ဟာ အရာအားလုံးကို
            ကိုယ်တိုင်ထိန်းချုပ်မနေဘဲ Team Member တွေကို
            ဆုံးဖြတ်နိုင်၊ ပြဿနာဖြေရှင်းနိုင်အောင် လုပ်ပိုင်ခွင့်ပေးပါတယ်။
          </p>

          <h4>အဓိကအချက်များ</h4>

          <ul>
            <li>အလုပ်အားလုံးကို ကိုယ်တိုင် မလုပ်ပါနဲ့။</li>
            <li>Team Member ရဲ့ အားသာချက်ကို သိပါ။</li>
            <li>တာဝန်ကို ရှင်းလင်းစွာ လွှဲအပ်ပါ။</li>
            <li>Decision Making အတွက် လုပ်ပိုင်ခွင့်ပေးပါ။</li>
            <li>Result အတွက် Accountability ထားပါ။</li>
            <li>Feedback နဲ့ Coaching ကို ပုံမှန်ပေးပါ။</li>
          </ul>

          <h4>လက်တွေ့လုပ်ဆောင်ရန်</h4>

          <p>
            လက်ရှိကိုယ်တိုင်လုပ်နေတဲ့ အလုပ်တစ်ခုကို ရွေးပြီး
            Team Member တစ်ဦးထံ လွှဲအပ်ပါ။
            ရည်မှန်းချက်၊ အချိန်ကာလနဲ့ Expected Result ကို ရှင်းပြပါ။
          </p>

          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>
              Micromanagement မလုပ်ပါနဲ့။ Direction ပေးပြီး
              Ownership နဲ့ Accountability ကို Team ကို ပေးပါ။
            </span>
          </div>
        `
      },

      {
        title: "လုပ်ဆောင်ရည် စီမံခန့်ခွဲခြင်း",

        content: `
          <p>
            Performance Management ဆိုတာ တစ်နှစ်တစ်ခါ Review လုပ်တာမဟုတ်ပါဘူး။
            KPI၊ Regular Review၊ Feedback၊ Coaching နဲ့
            Development Plan တွေကို ဆက်တိုက်လုပ်ဆောင်ခြင်း ဖြစ်ပါတယ်။
          </p>

          <h4>အဓိကအချက်များ</h4>

          <ul>
            <li>KPI ကို ရှင်းလင်းစွာ သတ်မှတ်ပါ။</li>
            <li>Target နဲ့ Actual ကို ပုံမှန်စစ်ပါ။</li>
            <li>Performance Gap ကို အမြန်ရှာပါ။</li>
            <li>Root Cause ကို လေ့လာပါ။</li>
            <li>Development Plan ချမှတ်ပါ။</li>
            <li>ကောင်းမွန်တဲ့ Performance ကို Recognition ပေးပါ။</li>
          </ul>

          <h4>လက်တွေ့လုပ်ဆောင်ရန်</h4>

          <p>
            Team Member တစ်ဦးချင်းစီအတွက် KPI ၃ ခုမှ ၅ ခု
            သတ်မှတ်ပြီး အပတ်စဉ် Review ပြုလုပ်ပါ။
          </p>

          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>
              Performance Management ကို ပြဿနာဖြစ်တဲ့အချိန်မှ စမလုပ်ဘဲ
              နေ့စဉ်နဲ့ အပတ်စဉ် အလေ့အကျင့်တစ်ခုအဖြစ် လုပ်ပါ။
            </span>
          </div>
        `
      },

      {
        title: "အဖွဲ့အား တက်ကြွစေခြင်း",

        content: `
          <p>
            Team Motivation ဆိုတာ လစာနဲ့ Bonus ပေးရုံနဲ့ မပြီးပါဘူး။
            ရည်မှန်းချက်၊ အသိအမှတ်ပြုမှု၊ တိုးတက်ခွင့်၊
            တရားမျှတမှုနဲ့ ယုံကြည်မှုတွေကလည်း အရေးကြီးပါတယ်။
          </p>

          <h4>အဓိကအချက်များ</h4>

          <ul>
            <li>Team ရဲ့ ရည်မှန်းချက်ကို ရှင်းလင်းစွာ ပြောပြပါ။</li>
            <li>ကောင်းမွန်တဲ့ Performance ကို အသိအမှတ်ပြုပါ။</li>
            <li>တိုးတက်နိုင်မယ့် အခွင့်အရေးပေးပါ။</li>
            <li>လူတိုင်းကို တရားမျှတစွာ ဆက်ဆံပါ။</li>
            <li>Team အတွင်း Communication ကောင်းအောင်လုပ်ပါ။</li>
            <li>တစ်ဦးချင်းစီရဲ့ Motivation Driver ကို နားလည်ပါ။</li>
          </ul>

          <h4>လက်တွေ့လုပ်ဆောင်ရန်</h4>

          <p>
            Team Member တစ်ဦးချင်းစီအတွက်
            သူ့ကို ဘာက အလုပ်ပိုကောင်းအောင် လှုံ့ဆော်ပေးနိုင်သလဲ
            ဆိုတာ သိအောင် တစ်ဦးချင်းဆွေးနွေးပါ။
          </p>

          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>
              Motivation ရှိတဲ့ Team တစ်ခုအတွက်
              Clarity၊ Fairness နဲ့ Recognition သုံးခုကို အမြဲထိန်းထားပါ။
            </span>
          </div>
        `
      }

    ]
  }

];

// ======================================================
// STATE
// ======================================================

function createDefaultState() {

  return {

    user: {
      name: "Aung Zar Ni Win",
      role: "Business Manager"
    },

    currentCourseId: "sales",
    currentLessonIndex: 0,

    completedLessons: [],

    streak: 0,

    dailyGoal: {
      target: 30,
      minutes: 0
    },

    sales: {
      target: 100,
      actual: 0,

      priorities: [
        "အဖွဲ့ရဲ့ အရောင်းလုပ်ဆောင်ရည် ပြန်လည်စစ်ဆေးရန်",
        "အဓိက Customer များကို သွားရောက်တွေ့ဆုံရန်",
        "Sales Gap များကို Follow-up လုပ်ရန်"
      ],

      history: [65, 72, 68, 80, 75, 88, 92]
    },

    settings: {
      reminder: true,
      tracking: true
    },

    activity: [],

    calculator: {
      product: "Product",
      cost: 10000,
      margin: 20
    }

  };

}

let state;

// ======================================================
// STORAGE
// ======================================================

function loadState() {

  try {

    const saved =
      localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      return createDefaultState();
    }

    const parsed =
      JSON.parse(saved);

    const defaults =
      createDefaultState();

    return {

      ...defaults,
      ...parsed,

      user: {
        ...defaults.user,
        ...(parsed.user || {})
      },

      dailyGoal: {
        ...defaults.dailyGoal,
        ...(parsed.dailyGoal || {})
      },

      sales: {
        ...defaults.sales,
        ...(parsed.sales || {})
      },

      settings: {
        ...defaults.settings,
        ...(parsed.settings || {})
      },

      calculator: {
        ...defaults.calculator,
        ...(parsed.calculator || {})
      },

      completedLessons:
        Array.isArray(parsed.completedLessons)
          ? parsed.completedLessons
          : [],

      activity:
        Array.isArray(parsed.activity)
          ? parsed.activity
          : []

    };

  } catch (error) {

    console.error(
      "Storage Error:",
      error
    );

    return createDefaultState();

  }

}

function saveState() {

  try {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(state)
    );

  } catch (error) {

    console.error(
      "Save State Error:",
      error
    );

  }

}

// ======================================================
// HELPERS
// ======================================================

function getTotalLessons() {

  return COURSES.reduce(
    (total, course) =>
      total + course.lessons.length,
    0
  );

}

function getCompletedCount() {

  return state.completedLessons.length;

}

function getOverallProgress() {

  const total =
    getTotalLessons();

  if (!total) return 0;

  return Math.round(
    getCompletedCount() /
    total *
    100
  );

}

function getCourseProgress(courseId) {

  const course =
    COURSES.find(
      item => item.id === courseId
    );

  if (!course) return 0;

  const completed =
    course.lessons.filter(
      (_, index) =>
        state.completedLessons.includes(
          `${courseId}-${index}`
        )
    ).length;

  if (!course.lessons.length) {
    return 0;
  }

  return Math.round(
    completed /
    course.lessons.length *
    100
  );

}

function getCourseCompleted(courseId) {

  const course =
    COURSES.find(
      item => item.id === courseId
    );

  if (!course) return 0;

  return course.lessons.filter(
    (_, index) =>
      state.completedLessons.includes(
        `${courseId}-${index}`
      )
  ).length;

}

function escapeHTML(value) {

  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}

function getCurrentCourse() {

  return (
    COURSES.find(
      course =>
        course.id === state.currentCourseId
    ) || COURSES[0]
  );

}

function getCurrentLesson() {

  const course =
    getCurrentCourse();

  let index =
    Number(state.currentLessonIndex);

  if (!Number.isFinite(index)) {
    index = 0;
  }

  index =
    Math.max(
      0,
      Math.min(
        index,
        course.lessons.length - 1
      )
    );

  state.currentLessonIndex =
    index;

  return {
    course,
    index,
    lesson: course.lessons[index]
  };

}

// ======================================================
// NAVIGATION
// ======================================================

const pages = [
  "dashboard",
  "courses",
  "lessons",
  "progress",
  "sales",
  "calculator",
  "reports",
  "ai-coach",
  "ai-tools",
  "settings"
];

function navigate(page) {

  if (!pages.includes(page)) {
    return;
  }

  document
    .querySelectorAll(".page")
    .forEach(item => {

      item.classList.remove("active");

    });

  const targetPage =
    document.getElementById(
      `page-${page}`
    );

  if (targetPage) {

    targetPage.classList.add(
      "active"
    );

  }

  document
    .querySelectorAll(".nav-item")
    .forEach(item => {

      item.classList.toggle(
        "active",
        item.dataset.page === page
      );

    });

  const names = {

    dashboard: "Dashboard",
    courses: "My Courses",
    lessons: "Lessons",
    progress: "My Progress",
    sales: "Sales Manager",
    calculator: "Pricing Calculator",
    reports: "Reports",
    "ai-coach": "AI Business Coach",
    "ai-tools": "AI Tools",
    settings: "Settings"

  };

  const breadcrumb =
    document.getElementById(
      "breadcrumbCurrent"
    );

  if (breadcrumb) {

    breadcrumb.textContent =
      names[page] || page;

  }

  if (page === "dashboard")
    renderDashboard();

  if (page === "courses")
    renderCourses();

  if (page === "lessons")
    renderLessons();

  if (page === "progress")
    renderProgress();

  if (page === "sales")
    renderSales();

  if (page === "calculator")
    renderCalculator();

  if (page === "reports")
    renderReports();

  closeSidebar();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}

// ======================================================
// DASHBOARD
// ======================================================

function renderDashboard() {

  const total =
    getTotalLessons();

  const completed =
    getCompletedCount();

  const progress =
    getOverallProgress();

  const statCourses =
    document.getElementById(
      "statCourses"
    );

  const statLessons =
    document.getElementById(
      "statLessons"
    );

  const statCompleted =
    document.getElementById(
      "statCompleted"
    );

  const statProgress =
    document.getElementById(
      "statProgress"
    );

  if (statCourses)
    statCourses.textContent =
      COURSES.length;

  if (statLessons)
    statLessons.textContent =
      total;

  if (statCompleted)
    statCompleted.textContent =
      completed;

  if (statProgress)
    statProgress.textContent =
      `${progress}%`;

  const course =
    getCurrentCourse();

  const courseProgress =
    getCourseProgress(
      course.id
    );

  const courseCompleted =
    getCourseCompleted(
      course.id
    );

  const title =
    document.getElementById(
      "dashboardCourseTitle"
    );

  const description =
    document.getElementById(
      "dashboardCourseDescription"
    );

  const progressText =
    document.getElementById(
      "dashboardProgressText"
    );

  const progressPercent =
    document.getElementById(
      "dashboardProgressPercent"
    );

  const progressBar =
    document.getElementById(
      "dashboardProgressBar"
    );

  if (title)
    title.textContent =
      course.title;

  if (description)
    description.textContent =
      course.description;

  if (progressText)
    progressText.textContent =
      `${courseCompleted} of ${course.lessons.length} lessons`;

  if (progressPercent)
    progressPercent.textContent =
      `${courseProgress}%`;

  if (progressBar)
    progressBar.style.width =
      `${courseProgress}%`;

  const goal =
    state.dailyGoal.target > 0
      ? Math.min(
          100,
          Math.round(
            state.dailyGoal.minutes /
            state.dailyGoal.target *
            100
          )
        )
      : 0;

  const goalMinutes =
    document.getElementById(
      "goalMinutes"
    );

  const goalPercent =
    document.getElementById(
      "goalPercent"
    );

  if (goalMinutes)
    goalMinutes.textContent =
      `${state.dailyGoal.minutes} / ${state.dailyGoal.target} min`;

  if (goalPercent)
    goalPercent.textContent =
      `${goal}%`;

  renderActivity();

}

function renderActivity() {

  const container =
    document.getElementById(
      "activityList"
    );

  if (!container) return;

  if (!state.activity.length) {

    container.innerHTML = `
      <div class="empty-state">
        <div>📚</div>
        <strong>No activity yet</strong>
        <span>Start your first lesson.</span>
      </div>
    `;

    return;

  }

  container.innerHTML =
    state.activity
      .slice(0, 5)
      .map(item => `

        <div class="activity-item">

          <div class="activity-icon">
            ✓
          </div>

          <div class="activity-content">

            <strong>
              ${escapeHTML(item.title)}
            </strong>

            <span>
              ${escapeHTML(item.course)}
            </span>

          </div>

          <small>
            ${escapeHTML(item.time)}
          </small>

        </div>

      `)
      .join("");

}

// ======================================================
// COURSES
// ======================================================

function renderCourses(
  filter = "all"
) {

  const container =
    document.getElementById(
      "coursesGrid"
    );

  if (!container) return;

  const courses =
    filter === "all"
      ? COURSES
      : COURSES.filter(
          course =>
            course.category === filter
        );

  container.innerHTML =
    courses.map(course => {

      const progress =
        getCourseProgress(
          course.id
        );

      const completed =
        getCourseCompleted(
          course.id
        );

      return `

        <div class="course-card">

          <div class="course-card-top">

            <div class="course-icon ${course.color}">
              ${course.icon}
            </div>

            <span class="course-badge ${course.category}">
              ${course.category.toUpperCase()}
            </span>

          </div>

          <h2>
            ${escapeHTML(course.title)}
          </h2>

          <p>
            ${escapeHTML(course.description)}
          </p>

          <div class="course-meta">

            <span>
              ▣ ${course.lessons.length} Lessons
            </span>

            <strong>
              ${progress}%
            </strong>

          </div>

          <div class="progress-bar">

            <div
              class="progress-fill ${course.color}-fill"
              style="width:${progress}%"
            ></div>

          </div>

          <div class="course-card-footer">

            <span>
              ${completed}/${course.lessons.length}
              completed
            </span>

            <button
              type="button"
              class="secondary-btn open-course"
              data-course="${course.id}"
            >
              ${
                progress > 0
                  ? "Continue"
                  : "Start Course"
              }
            </button>

          </div>

        </div>

      `;

    }).join("");

}

// ======================================================
// LESSONS
// ======================================================

function renderLessons() {

  const courseList =
    document.getElementById(
      "lessonCourseList"
    );

  const content =
    document.getElementById(
      "lessonContent"
    );

  if (!courseList || !content) {

    console.error(
      "Lesson elements not found."
    );

    return;

  }

  // ----------------------------------------------------
  // COURSE LIST
  // ----------------------------------------------------

  courseList.innerHTML =
    COURSES.map(course => {

      const progress =
        getCourseProgress(
          course.id
        );

      const completed =
        getCourseCompleted(
          course.id
        );

      const active =
        state.currentCourseId ===
        course.id
          ? "active"
          : "";

      return `

        <button
          type="button"
          class="lesson-course-item ${active}"
          data-course="${course.id}"
        >

          <div class="lesson-course-icon ${course.color}">
            ${course.icon}
          </div>

          <div class="lesson-course-info">

            <strong>
              ${escapeHTML(course.title)}
            </strong>

            <span>
              ${completed}/${course.lessons.length}
              completed
            </span>

            <div class="mini-progress">

              <div
                style="width:${progress}%"
              ></div>

            </div>

          </div>

        </button>

      `;

    }).join("");

  // ----------------------------------------------------
  // CURRENT LESSON
  // ----------------------------------------------------

  const current =
    getCurrentLesson();

  const course =
    current.course;

  const index =
    current.index;

  const lesson =
    current.lesson;

  const lessonKey =
    `${course.id}-${index}`;

  const completed =
    state.completedLessons.includes(
      lessonKey
    );

  const isFirst =
    index === 0;

  const isLast =
    index ===
    course.lessons.length - 1;

  content.innerHTML = `

    <div class="lesson-content-header">

      <div>

        <span class="lesson-number">
          LESSON ${index + 1}
        </span>

        <h2>
          ${escapeHTML(lesson.title)}
        </h2>

        <p>
          ${escapeHTML(course.title)}
        </p>

      </div>

      <span class="course-badge ${course.category}">
        ${course.category.toUpperCase()}
      </span>

    </div>

    <div class="lesson-body">

      <div class="lesson-visual ${course.color}">
        ${course.icon}
      </div>

      <h3>
        ${escapeHTML(lesson.title)}
      </h3>

      <div class="lesson-text">
        ${lesson.content}
      </div>

    </div>

    <div class="lesson-footer">

      <button
        type="button"
        class="secondary-btn"
        id="previousLessonBtn"
        data-lesson-action="previous"
        ${isFirst ? "disabled" : ""}
      >
        ← Previous
      </button>

      <button
        type="button"
        class="primary-btn"
        id="completeLessonBtn"
        data-lesson-action="complete"
      >
        ${
          completed
            ? "✓ Completed"
            : "Mark as Complete"
        }
      </button>

      <button
        type="button"
        class="secondary-btn"
        id="nextLessonBtn"
        data-lesson-action="next"
        ${isLast ? "disabled" : ""}
      >
        Next →
      </button>

    </div>

  `;

}

// ======================================================
// LESSON NAVIGATION
// ======================================================

function previousLesson() {

  const course =
    getCurrentCourse();

  if (
    state.currentLessonIndex <= 0
  ) {

    showToast(
      "ဒါက ပထမဆုံး Lesson ဖြစ်ပါတယ်။"
    );

    return;

  }

  state.currentLessonIndex--;

  saveState();

  renderLessons();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}

function nextLesson() {

  const course =
    getCurrentCourse();

  if (
    state.currentLessonIndex >=
    course.lessons.length - 1
  ) {

    showToast(
      "ဒီ Course ရဲ့ နောက်ဆုံး Lesson ရောက်နေပါပြီ။"
    );

    return;

  }

  state.currentLessonIndex++;

  saveState();

  renderLessons();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}

// ======================================================
// COMPLETE LESSON
// ======================================================

function completeLesson(
  courseId,
  index,
  lessonTitle,
  courseTitle
) {

  const key =
    `${courseId}-${index}`;

  const alreadyCompleted =
    state.completedLessons.includes(
      key
    );

  if (!alreadyCompleted) {

    state.completedLessons.push(
      key
    );

    state.dailyGoal.minutes =
      Math.min(
        state.dailyGoal.target,
        state.dailyGoal.minutes + 15
      );

    state.activity.unshift({

      title:
        lessonTitle,

      course:
        courseTitle,

      time:
        "Just now"

    });

    state.activity =
      state.activity.slice(0, 10);

    state.streak =
      Math.max(
        1,
        state.streak
      );

    saveState();

    showToast(
      "သင်ခန်းစာ ပြီးဆုံးပါပြီ ✓"
    );

  } else {

    showToast(
      "ဒီသင်ခန်းစာကို ပြီးဆုံးပြီးသားပါ။"
    );

  }

  renderLessons();
  renderDashboard();
  renderProgress();
  renderReports();

}

// ======================================================
// PROGRESS
// ======================================================

function renderProgress() {

  const progress =
    getOverallProgress();

  const completed =
    getCompletedCount();

  const total =
    getTotalLessons();

  const overall =
    document.getElementById(
      "overallProgress"
    );

  const completedEl =
    document.getElementById(
      "progressCompleted"
    );

  const remainingEl =
    document.getElementById(
      "progressRemaining"
    );

  const streakEl =
    document.getElementById(
      "progressStreak"
    );

  if (overall)
    overall.textContent =
      `${progress}%`;

  if (completedEl)
    completedEl.textContent =
      completed;

  if (remainingEl)
    remainingEl.textContent =
      total - completed;

  if (streakEl)
    streakEl.textContent =
      state.streak;

  const container =
    document.getElementById(
      "courseProgressList"
    );

  if (!container) return;

  container.innerHTML =
    COURSES.map(course => {

      const p =
        getCourseProgress(
          course.id
        );

      const completedCourse =
        getCourseCompleted(
          course.id
        );

      return `

        <div class="course-progress-row">

          <div class="course-progress-name">

            <div class="small-icon ${course.color}">
              ${course.icon}
            </div>

            <div>

              <strong>
                ${escapeHTML(course.title)}
              </strong>

              <span>
                ${completedCourse}/${course.lessons.length}
                lessons
              </span>

            </div>

          </div>

          <div class="course-progress-bar">

            <div>
              <span
                style="width:${p}%"
              ></span>
            </div>

          </div>

          <strong>
            ${p}%
          </strong>

        </div>

      `;

    }).join("");

}

// ======================================================
// SALES
// ======================================================

function renderSales() {

  const target =
    Number(state.sales.target) || 0;

  const actual =
    Number(state.sales.actual) || 0;

  const achievement =
    target > 0
      ? Math.round(
          actual /
          target *
          100
        )
      : 0;

  const gap =
    Math.max(
      target - actual,
      0
    );

  const targetEl =
    document.getElementById(
      "salesTargetDisplay"
    );

  const actualEl =
    document.getElementById(
      "salesActualDisplay"
    );

  const achievementEl =
    document.getElementById(
      "salesAchievementDisplay"
    );

  const gapEl =
    document.getElementById(
      "salesGapDisplay"
    );

  if (targetEl)
    targetEl.textContent =
      target;

  if (actualEl)
    actualEl.textContent =
      actual;

  if (achievementEl)
    achievementEl.textContent =
      `${achievement}%`;

  if (gapEl)
    gapEl.textContent =
      gap;

  const targetInput =
    document.getElementById(
      "salesTargetInput"
    );

  const actualInput =
    document.getElementById(
      "salesActualInput"
    );

  if (targetInput)
    targetInput.value =
      target;

  if (actualInput)
    actualInput.value =
      actual;

  renderSalesChart();
  renderPriorities();

}

function renderSalesChart() {

  const container =
    document.getElementById(
      "salesChart"
    );

  if (!container) return;

  const history =
    Array.isArray(
      state.sales.history
    )
      ? state.sales.history
      : [];

  if (!history.length) {

    container.innerHTML = "";

    return;

  }

  const max =
    Math.max(
      ...history,
      100
    );

  container.innerHTML =
    history.map(
      (value, index) => {

        const height =
          Math.round(
            value /
            max *
            100
          );

        return `

          <div class="chart-bar-group">

            <span class="chart-value">
              ${value}
            </span>

            <div
              class="chart-bar"
              style="height:${height}%"
            ></div>

            <small>
              M${index + 1}
            </small>

          </div>

        `;

      }
    ).join("");

}

function renderPriorities() {

  const container =
    document.getElementById(
      "priorityList"
    );

  if (!container) return;

  if (!state.sales.priorities.length) {

    container.innerHTML = `

      <div class="empty-state">

        <div>🎯</div>

        <strong>
          No priority
        </strong>

        <span>
          Add your next execution priority.
        </span>

      </div>

    `;

    return;

  }

  container.innerHTML =
    state.sales.priorities.map(
      (item, index) => `

        <div class="priority-item">

          <div class="priority-number">
            ${index + 1}
          </div>

          <span>
            ${escapeHTML(item)}
          </span>

          <button
            type="button"
            class="priority-delete"
            data-index="${index}"
          >
            ×
          </button>

        </div>

      `
    ).join("");

}

// ======================================================
// CALCULATOR
// ======================================================

function calculatePrice() {

  const productInput =
    document.getElementById(
      "productName"
    );

  const costInput =
    document.getElementById(
      "productCost"
    );

  const marginInput =
    document.getElementById(
      "productMargin"
    );

  if (
    !productInput ||
    !costInput ||
    !marginInput
  ) {
    return;
  }

  const product =
    productInput.value.trim() ||
    "Product";

  const cost =
    Number(
      costInput.value
    ) || 0;

  const margin =
    Math.max(
      0,
      Math.min(
        99.99,
        Number(
          marginInput.value
        ) || 0
      )
    );

  const price =
    margin >= 100
      ? 0
      : cost /
        (1 - margin / 100);

  const profit =
    price - cost;

  state.calculator = {
    product,
    cost,
    margin
  };

  saveState();

  const resultProduct =
    document.getElementById(
      "resultProduct"
    );

  const resultPrice =
    document.getElementById(
      "resultPrice"
    );

  const resultCost =
    document.getElementById(
      "resultCost"
    );

  const resultProfit =
    document.getElementById(
      "resultProfit"
    );

  const resultMargin =
    document.getElementById(
      "resultMargin"
    );

  if (resultProduct)
    resultProduct.textContent =
      product;

  if (resultPrice)
    resultPrice.textContent =
      formatMoney(price);

  if (resultCost)
    resultCost.textContent =
      formatMoney(cost);

  if (resultProfit)
    resultProfit.textContent =
      formatMoney(profit);

  if (resultMargin)
    resultMargin.textContent =
      `${margin}%`;

}

function formatMoney(number) {

  return `${Math.round(
    Number(number) || 0
  ).toLocaleString()} Ks`;

}

function renderCalculator() {

  const data =
    state.calculator;

  const product =
    document.getElementById(
      "productName"
    );

  const cost =
    document.getElementById(
      "productCost"
    );

  const margin =
    document.getElementById(
      "productMargin"
    );

  if (
    !product ||
    !cost ||
    !margin
  ) {
    return;
  }

  product.value =
    data.product;

  cost.value =
    data.cost;

  margin.value =
    data.margin;

  calculatePrice();

}

// ======================================================
// REPORTS
// ======================================================

function renderReports() {

  const total =
    getTotalLessons();

  const completed =
    getCompletedCount();

  const reportCourses =
    document.getElementById(
      "reportCourses"
    );

  const reportLessons =
    document.getElementById(
      "reportLessons"
    );

  const reportCompleted =
    document.getElementById(
      "reportCompleted"
    );

  const reportStreak =
    document.getElementById(
      "reportStreak"
    );

  const reportSalesTarget =
    document.getElementById(
      "reportSalesTarget"
    );

  const reportSalesActual =
    document.getElementById(
      "reportSalesActual"
    );

  const reportSalesAchievement =
    document.getElementById(
      "reportSalesAchievement"
    );

  if (reportCourses)
    reportCourses.textContent =
      COURSES.length;

  if (reportLessons)
    reportLessons.textContent =
      total;

  if (reportCompleted)
    reportCompleted.textContent =
      completed;

  if (reportStreak)
    reportStreak.textContent =
      state.streak;

  if (reportSalesTarget)
    reportSalesTarget.textContent =
      state.sales.target;

  if (reportSalesActual)
    reportSalesActual.textContent =
      state.sales.actual;

  const achievement =
    state.sales.target > 0
      ? Math.round(
          state.sales.actual /
          state.sales.target *
          100
        )
      : 0;

  if (reportSalesAchievement)
    reportSalesAchievement.textContent =
      `${achievement}%`;

}

// ======================================================
// AI COACH
// ======================================================

function getAIResponse(question) {

  const q =
    question.toLowerCase().trim();

  if (
    q.includes("team") ||
    q.includes("အဖွဲ့") ||
    q.includes("coach") ||
    q.includes("coaching") ||
    q.includes("performance") ||
    q.includes("လုပ်ဆောင်ရည်")
  ) {

    return `

      <strong>
        အဖွဲ့လုပ်ဆောင်ရည် မြှင့်တင်ရန်
      </strong>

      <p>
        ပထမဆုံး Target နဲ့ Actual ကို နှိုင်းယှဉ်ပြီး
        Performance Gap ကို ရှာပါ။
      </p>

      <p>
        Gap ဖြစ်ရတဲ့ Root Cause ကို
        လူ၊ Skill၊ Customer၊ နယ်မြေနဲ့ Execution
        အပိုင်းခွဲပြီး လေ့လာပါ။
      </p>

      <p>
        Action Plan ချမှတ်ပြီး အပတ်စဉ် Follow-up လုပ်ပါ။
        Micromanagement မလုပ်ဘဲ Coaching နဲ့ Empowerment
        ကို အသုံးပြုပါ။
      </p>

    `;

  }

  if (
    q.includes("customer") ||
    q.includes("ဖောက်သည်")
  ) {

    return `

      <strong>
        Customer Growth တိုးတက်စေရန်
      </strong>

      <p>
        Customer တွေကို Value နဲ့ Potential အလိုက် ခွဲခြားပါ။
      </p>

      <p>
        အဓိက Customer တွေရဲ့ လိုအပ်ချက်၊ Complaint၊
        ဝယ်ယူမှုပုံစံနဲ့ Business Problem ကို နားလည်ပါ။
      </p>

      <p>
        Visit Plan၊ Follow-up Plan နဲ့
        Customer Development Plan တည်ဆောက်ပါ။
      </p>

    `;

  }

  if (
    q.includes("sales") ||
    q.includes("အရောင်း") ||
    q.includes("target") ||
    q.includes("ရောင်းအား")
  ) {

    return `

      <strong>
        Sales Target တိုးတက်စေရန်
      </strong>

      <p>
        လစဉ် Target ကို အပတ်စဉ်နဲ့ နေ့စဉ် Target အဖြစ် ခွဲပါ။
      </p>

      <p>
        Sales Gap ကို Salesperson၊ Territory၊ Product နဲ့
        Customer အလိုက် ခွဲခြမ်းစိတ်ဖြာပါ။
      </p>

      <p>
        People၊ Market နဲ့ Execution သုံးခုအပေါ်
        Action Plan ချပြီး အပတ်စဉ် Review ပြုလုပ်ပါ။
      </p>

    `;

  }

  if (
    q.includes("pricing") ||
    q.includes("price") ||
    q.includes("စျေးနှုန်း")
  ) {

    return `

      <strong>
        Pricing Strategy
      </strong>

      <p>
        Cost တစ်ခုတည်းကို မကြည့်ဘဲ Customer Value၊
        Competitor Price နဲ့ Desired Margin ကို တွဲပြီး စဉ်းစားပါ။
      </p>

      <p>
        Margin မလုံလောက်ရင် ရောင်းအားတက်နေသော်လည်း
        Profit ကျဆင်းနိုင်ပါတယ်။
      </p>

    `;

  }

  return `

    <strong>
      Business Manager အနေနဲ့
    </strong>

    <p>
      ပြဿနာတစ်ခုကို ဖြေရှင်းတဲ့အခါ
      <strong>လူ၊ နံပါတ်နဲ့ လက်တွေ့အကောင်အထည်ဖော်မှု</strong>
      သုံးခုကို အရင်ကြည့်ပါ။
    </p>

    <p>
      ရလဒ်ကို တိုင်းတာပါ။ အကြီးမားဆုံး Gap ကို ရှာပါ။
      Root Cause ကို သတ်မှတ်ပြီး Action Plan ချမှတ်ပါ။
    </p>

  `;

}

function sendAIMessage(question) {

  if (!question.trim()) return;

  const container =
    document.getElementById(
      "chatMessages"
    );

  if (!container) return;

  container.insertAdjacentHTML(
    "beforeend",
    `

      <div class="chat-message user">

        <div class="message-avatar">
          AZ
        </div>

        <div class="message-content">

          <strong>
            You
          </strong>

          <p>
            ${escapeHTML(question)}
          </p>

        </div>

      </div>

    `
  );

  const answer =
    getAIResponse(question);

  setTimeout(() => {

    container.insertAdjacentHTML(
      "beforeend",
      `

        <div class="chat-message assistant">

          <div class="message-avatar">
            AI
          </div>

          <div class="message-content">

            <strong>
              Business Coach
            </strong>

            <div>
              ${answer}
            </div>

          </div>

        </div>

      `
    );

    container.scrollTop =
      container.scrollHeight;

  }, 350);

  container.scrollTop =
    container.scrollHeight;

}

// ======================================================
// AI TOOLS
// ======================================================

function openAITool(tool) {

  const messages = {

    sales:
      "လစဉ်အရောင်း Target အတွက် လက်တွေ့လုပ်ဆောင်နိုင်တဲ့ Sales Action Plan တစ်ခုရေးပေးပါ။",

    customer:
      "Customer Growth နဲ့ Customer Retention တိုးတက်အောင် ဘယ်လို Strategy ချမှတ်ရမလဲ။",

    team:
      "Performance မကောင်းတဲ့ Salesperson တစ်ယောက်အတွက် Coaching Plan တစ်ခုရေးပေးပါ။",

    business:
      "လုပ်ငန်းတိုးတက်ဖို့ လက်တွေ့အသုံးချနိုင်တဲ့ Business Growth Strategy တစ်ခုရေးပေးပါ။"

  };

  navigate("ai-coach");

  const input =
    document.getElementById(
      "chatInput"
    );

  if (!input) return;

  input.value =
    messages[tool] || "";

  sendAIMessage(
    input.value
  );

  input.value = "";

}

// ======================================================
// SEARCH
// ======================================================

function performSearch(query) {

  const text =
    query.trim().toLowerCase();

  if (!text) return;

  const course =
    COURSES.find(course =>

      course.title
        .toLowerCase()
        .includes(text) ||

      course.description
        .toLowerCase()
        .includes(text)

    );

  if (course) {

    state.currentCourseId =
      course.id;

    state.currentLessonIndex =
      0;

    saveState();

    navigate("lessons");

    return;

  }

  for (
    const course of COURSES
  ) {

    const index =
      course.lessons.findIndex(
        lesson => {

          const plainContent =
            lesson.content
              .replace(
                /<[^>]*>/g,
                ""
              )
              .toLowerCase();

          return (

            lesson.title
              .toLowerCase()
              .includes(text) ||

            plainContent.includes(
              text
            )

          );

        }
      );

    if (index !== -1) {

      state.currentCourseId =
        course.id;

      state.currentLessonIndex =
        index;

      saveState();

      navigate("lessons");

      return;

    }

  }

  showToast(
    "သင်တန်း သို့မဟုတ် သင်ခန်းစာ မတွေ့ပါ။"
  );

}

// ======================================================
// SIDEBAR
// ======================================================

function openSidebar() {

  document
    .getElementById("sidebar")
    ?.classList.add("open");

  document
    .getElementById("sidebarOverlay")
    ?.classList.add("show");

}

function closeSidebar() {

  document
    .getElementById("sidebar")
    ?.classList.remove("open");

  document
    .getElementById("sidebarOverlay")
    ?.classList.remove("show");

}

// ======================================================
// TOAST
// ======================================================

function showToast(message) {

  const toast =
    document.getElementById(
      "toast"
    );

  const toastMessage =
    document.getElementById(
      "toastMessage"
    );

  if (!toast || !toastMessage)
    return;

  toastMessage.textContent =
    message;

  toast.classList.add(
    "show"
  );

  clearTimeout(
    showToast.timer
  );

  showToast.timer =
    setTimeout(() => {

      toast.classList.remove(
        "show"
      );

    }, 2500);

}

// ======================================================
// MODAL
// ======================================================

function closeModal() {

  document
    .getElementById(
      "modalOverlay"
    )
    ?.classList.remove(
      "show"
    );

}

// ======================================================
// LESSON ACTION HANDLER
// ======================================================

function handleLessonAction(
  action
) {

  if (action === "previous") {

    previousLesson();

    return;

  }

  if (action === "next") {

    nextLesson();

    return;

  }

  if (action === "complete") {

    const current =
      getCurrentLesson();

    completeLesson(
      current.course.id,
      current.index,
      current.lesson.title,
      current.course.title
    );

  }

}

// ======================================================
// INITIALIZE EVENTS
// ======================================================

function initializeApp() {

  // ----------------------------------------------------
  // GLOBAL CLICK DELEGATION
  // ----------------------------------------------------

  document.addEventListener(
    "click",
    event => {

      // ------------------------------------------------
      // NAVIGATION
      // ------------------------------------------------

      const nav =
        event.target.closest(
          ".nav-item"
        );

      if (nav) {

        event.preventDefault();

        navigate(
          nav.dataset.page
        );

        return;

      }

      // ------------------------------------------------
      // DATA GO
      // ------------------------------------------------

      const go =
        event.target.closest(
          "[data-go]"
        );

      if (go) {

        event.preventDefault();

        navigate(
          go.dataset.go
        );

        return;

      }

      // ------------------------------------------------
      // COURSE START / CONTINUE
      // ------------------------------------------------

      const openCourse =
        event.target.closest(
          ".open-course"
        );

      if (openCourse) {

        event.preventDefault();

        const courseId =
          openCourse.dataset.course;

        const course =
          COURSES.find(
            item =>
              item.id === courseId
          );

        if (!course) return;

        state.currentCourseId =
          courseId;

        state.currentLessonIndex =
          0;

        saveState();

        navigate("lessons");

        return;

      }

      // ------------------------------------------------
      // LESSON COURSE
      // ------------------------------------------------

      const lessonCourse =
        event.target.closest(
          ".lesson-course-item"
        );

      if (lessonCourse) {

        event.preventDefault();

        const courseId =
          lessonCourse.dataset.course;

        const course =
          COURSES.find(
            item =>
              item.id === courseId
          );

        if (!course) return;

        state.currentCourseId =
          courseId;

        state.currentLessonIndex =
          0;

        saveState();

        renderLessons();

        return;

      }

      // ------------------------------------------------
      // LESSON PREVIOUS / NEXT / COMPLETE
      // ------------------------------------------------

      const lessonAction =
        event.target.closest(
          "[data-lesson-action]"
        );

      if (lessonAction) {

        event.preventDefault();

        if (
          lessonAction.disabled
        ) {
          return;
        }

        handleLessonAction(
          lessonAction.dataset.lessonAction
        );

        return;

      }

      // ------------------------------------------------
      // RECOMMENDATION
      // ------------------------------------------------

      const recommendation =
        event.target.closest(
          ".recommendation-item"
        );

      if (recommendation) {

        event.preventDefault();

        const courseId =
          recommendation.dataset.course;

        if (!courseId) return;

        const course =
          COURSES.find(
            item =>
              item.id === courseId
          );

        if (!course) return;

        state.currentCourseId =
          courseId;

        state.currentLessonIndex =
          0;

        saveState();

        navigate("lessons");

        return;

      }

      // ------------------------------------------------
      // PRIORITY DELETE
      // ------------------------------------------------

      const deletePriority =
        event.target.closest(
          ".priority-delete"
        );

      if (deletePriority) {

        event.preventDefault();

        const index =
          Number(
            deletePriority.dataset.index
          );

        if (
          Number.isInteger(index) &&
          index >= 0 &&
          index <
            state.sales.priorities.length
        ) {

          state.sales.priorities.splice(
            index,
            1
          );

          saveState();

          renderPriorities();

          showToast(
            "Priority ဖျက်ပြီးပါပြီ။"
          );

        }

        return;

      }

      // ------------------------------------------------
      // AI QUESTIONS
      // ------------------------------------------------

      const aiQuestion =
        event.target.closest(
          ".ai-question"
        );

      if (aiQuestion) {

        const input =
          document.getElementById(
            "chatInput"
          );

        const send =
          document.getElementById(
            "sendChatBtn"
          );

        if (!input || !send)
          return;

        input.value =
          aiQuestion.textContent.trim();

        send.click();

        return;

      }

      // ------------------------------------------------
      // AI TOOLS
      // ------------------------------------------------

      const aiTool =
        event.target.closest(
          ".ai-tool-card"
        );

      if (aiTool) {

        openAITool(
          aiTool.dataset.tool
        );

        return;

      }

    }
  );

  // ----------------------------------------------------
  // COURSE FILTER
  // ----------------------------------------------------

  document
    .querySelectorAll(
      ".filter-tab"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          document
            .querySelectorAll(
              ".filter-tab"
            )
            .forEach(item =>
              item.classList.remove(
                "active"
              )
            );

          button.classList.add(
            "active"
          );

          renderCourses(
            button.dataset.filter
          );

        }
      );

    });

  // ----------------------------------------------------
  // CONTINUE LEARNING
  // ----------------------------------------------------

  const continueBtn =
    document.getElementById(
      "continueLearningBtn"
    );

  if (continueBtn) {

    continueBtn.addEventListener(
      "click",
      () => {

        navigate("lessons");

      }
    );

  }

  // ----------------------------------------------------
  // SALES UPDATE
  // ----------------------------------------------------

  const updateSalesBtn =
    document.getElementById(
      "updateSalesBtn"
    );

  if (updateSalesBtn) {

    updateSalesBtn.addEventListener(
      "click",
      () => {

        const targetInput =
          document.getElementById(
            "salesTargetInput"
          );

        const actualInput =
          document.getElementById(
            "salesActualInput"
          );

        state.sales.target =
          Number(
            targetInput?.value
          ) || 0;

        state.sales.actual =
          Number(
            actualInput?.value
          ) || 0;

        state.sales.history.push(
          state.sales.actual
        );

        state.sales.history =
          state.sales.history.slice(-7);

        saveState();

        renderSales();
        renderReports();

        showToast(
          "Sales performance updated."
        );

      }
    );

  }

  // ----------------------------------------------------
  // ADD PRIORITY
  // ----------------------------------------------------

  const addPriorityBtn =
    document.getElementById(
      "addPriorityBtn"
    );

  if (addPriorityBtn) {

    addPriorityBtn.addEventListener(
      "click",
      () => {

        const input =
          document.getElementById(
            "priorityInput"
          );

        const value =
          input?.value.trim();

        if (!value) {

          showToast(
            "Priority ထည့်ပေးပါ။"
          );

          return;

        }

        state.sales.priorities.push(
          value
        );

        input.value = "";

        saveState();

        renderPriorities();

        showToast(
          "Priority ထည့်ပြီးပါပြီ။"
        );

      }
    );

  }

  // ----------------------------------------------------
  // CALCULATOR
  // ----------------------------------------------------

  const calculateBtn =
    document.getElementById(
      "calculateBtn"
    );

  if (calculateBtn) {

    calculateBtn.addEventListener(
      "click",
      calculatePrice
    );

  }

  // ----------------------------------------------------
  // AI CHAT
  // ----------------------------------------------------

  const sendChatBtn =
    document.getElementById(
      "sendChatBtn"
    );

  const chatInput =
    document.getElementById(
      "chatInput"
    );

  if (
    sendChatBtn &&
    chatInput
  ) {

    sendChatBtn.addEventListener(
      "click",
      () => {

        const value =
          chatInput.value;

        if (!value.trim())
          return;

        sendAIMessage(
          value
        );

        chatInput.value =
          "";

      }
    );

    chatInput.addEventListener(
      "keydown",
      event => {

        if (
          event.key ===
          "Enter"
        ) {

          event.preventDefault();

          sendChatBtn.click();

        }

      }
    );

  }

  // ----------------------------------------------------
  // SEARCH
  // ----------------------------------------------------

  const search =
    document.getElementById(
      "globalSearch"
    );

  if (search) {

    search.addEventListener(
      "keydown",
      event => {

        if (
          event.key ===
          "Enter"
        ) {

          performSearch(
            event.target.value
          );

        }

      }
    );

  }

  // ----------------------------------------------------
  // MOBILE SIDEBAR
  // ----------------------------------------------------

  const mobileMenu =
    document.getElementById(
      "mobileMenu"
    );

  if (mobileMenu) {

    mobileMenu.addEventListener(
      "click",
      openSidebar
    );

  }

  const overlay =
    document.getElementById(
      "sidebarOverlay"
    );

  if (overlay) {

    overlay.addEventListener(
      "click",
      closeSidebar
    );

  }

  // ----------------------------------------------------
  // SETTINGS
  // ----------------------------------------------------

  const reminder =
    document.getElementById(
      "reminderToggle"
    );

  if (reminder) {

    reminder.addEventListener(
      "change",
      event => {

        state.settings.reminder =
          event.target.checked;

        saveState();

      }
    );

  }

  const tracking =
    document.getElementById(
      "trackingToggle"
    );

  if (tracking) {

    tracking.addEventListener(
      "change",
      event => {

        state.settings.tracking =
          event.target.checked;

        saveState();

      }
    );

  }

  // ----------------------------------------------------
  // RESET
  // ----------------------------------------------------

  const resetBtn =
    document.getElementById(
      "resetDataBtn"
    );

  if (resetBtn) {

    resetBtn.addEventListener(
      "click",
      () => {

        const confirmed =
          confirm(
            "Aung Business Academy ရဲ့ Learning Progress အားလုံးကို Reset လုပ်မှာ သေချာပါသလား?"
          );

        if (!confirmed)
          return;

        localStorage.removeItem(
          STORAGE_KEY
        );

        state =
          createDefaultState();

        saveState();

        renderAll();

        showToast(
          "Academy Data အားလုံး Reset ပြီးပါပြီ။"
        );

      }
    );

  }

  // ----------------------------------------------------
  // NOTIFICATION
  // ----------------------------------------------------

  const notification =
    document.getElementById(
      "notificationBtn"
    );

  if (notification) {

    notification.addEventListener(
      "click",
      () => {

        showToast(
          "လက်ရှိ Notification မရှိသေးပါ။"
        );

      }
    );

  }

  // ----------------------------------------------------
  // MODAL
  // ----------------------------------------------------

  const modalClose =
    document.getElementById(
      "modalClose"
    );

  if (modalClose) {

    modalClose.addEventListener(
      "click",
      closeModal
    );

  }

  const modalOverlay =
    document.getElementById(
      "modalOverlay"
    );

  if (modalOverlay) {

    modalOverlay.addEventListener(
      "click",
      event => {

        if (
          event.target.id ===
          "modalOverlay"
        ) {

          closeModal();

        }

      }
    );

  }

}

// ======================================================
// RENDER ALL
// ======================================================

function renderAll() {

  renderDashboard();

  renderCourses();

  renderLessons();

  renderProgress();

  renderSales();

  renderCalculator();

  renderReports();

  const reminder =
    document.getElementById(
      "reminderToggle"
    );

  const tracking =
    document.getElementById(
      "trackingToggle"
    );

  if (reminder) {

    reminder.checked =
      !!state.settings.reminder;

  }

  if (tracking) {

    tracking.checked =
      !!state.settings.tracking;

  }

}

// ======================================================
// INIT
// ======================================================

function initAcademy() {

  state =
    loadState();

  console.log(
    "Aung Business Academy V8 initialized."
  );

  initializeApp();

  renderAll();

}

// ======================================================
// DOM READY
// ======================================================

if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    initAcademy,
    {
      once: true
    }
  );

} else {

  initAcademy();

}

// ======================================================
// GLOBAL API
// ======================================================

window.AungAcademy = {

  get state() {
    return state;
  },

  courses:
    COURSES,

  navigate,

  renderAll,

  renderLessons,

  completeLesson,

  previousLesson,

  nextLesson,

  getOverallProgress,

  getCourseProgress,

  getTotalLessons

};
