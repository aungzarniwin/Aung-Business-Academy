// ======================================================
// AUNG BUSINESS ACADEMY V8.1
// COMPLETE PROFESSIONAL BUSINESS ACADEMY
// 13 COURSES + EXISTING LESSONS PRESERVED
// Myanmar Lesson Edition
//
// V8.1 UPGRADES
// - Streak System
// - Continue Learning
// - Premium Lock Ready
// - Achievement System
// - Progress Upgrade
// - Quiz Ready Structure
// - Certificate Ready Structure
// ======================================================

const ACADEMY_VERSION = "8.1";
const STORAGE_KEY = "aungBusinessAcademyV8";

// ======================================================
// ACHIEVEMENTS
// ======================================================

const ACHIEVEMENTS = [
  {
    id: "first-lesson",
    icon: "🎯",
    title: "ပထမဆုံးသင်ခန်းစာ",
    description: "ပထမဆုံး Lesson တစ်ခုကို ပြီးဆုံးအောင်လေ့လာပါ",
    condition: (state) => getCompletedCount() >= 1
  },
  {
    id: "five-lessons",
    icon: "🔥",
    title: "Learning Starter",
    description: "Lesson ၅ ခု ပြီးဆုံးပါ",
    condition: (state) => getCompletedCount() >= 5
  },
  {
    id: "ten-lessons",
    icon: "🏆",
    title: "Fast Learner",
    description: "Lesson ၁၀ ခု ပြီးဆုံးပါ",
    condition: (state) => getCompletedCount() >= 10
  },
  {
    id: "first-course",
    icon: "🎓",
    title: "Course Graduate",
    description: "Course တစ်ခု ပြီးဆုံးပါ",
    condition: (state) =>
      COURSES.some(course => getCourseProgress(course.id) >= 100)
  },
  {
    id: "seven-day-streak",
    icon: "🔥",
    title: "7 Day Streak",
    description: "၇ ရက်ဆက်တိုက် လေ့လာပါ",
    condition: (state) => Number(state.streak || 0) >= 7
  },
  {
    id: "thirty-day-streak",
    icon: "💎",
    title: "30 Day Streak",
    description: "၃၀ ရက်ဆက်တိုက် လေ့လာပါ",
    condition: (state) => Number(state.streak || 0) >= 30
  },
  {
    id: "halfway",
    icon: "🚀",
    title: "Halfway There",
    description: "Academy Progress ၅၀% ရောက်ပါ",
    condition: (state) => getOverallProgress() >= 50
  },
  {
    id: "academy-complete",
    icon: "👑",
    title: "Academy Master",
    description: "Course အားလုံး ပြီးဆုံးပါ",
    condition: (state) => getOverallProgress() >= 100
  }
];

// ======================================================
// ORIGINAL COURSE DATA
// ======================================================
//
// IMPORTANT:
// မူရင်း V8 ထဲက COURSES array ကို မပြောင်းထားပါ။
// Course 13 ခုနဲ့ lesson content အားလုံးကို ဆက်လက်အသုံးပြုပါသည်.
//
// ======================================================

// NOTE:
// ဒီနေရာမှာ မူရင်း app.js ထဲက COURSES = [ ... ]
// အပြည့်အစုံကို ဆက်ထားရပါမယ်။

const COURSES = [
