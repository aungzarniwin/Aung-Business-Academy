/* =========================================================
   AUNG BUSINESS ACADEMY
   APP.JS V7
   CLEAN PROFESSIONAL VERSION
========================================================= */


/* =========================================================
   STORAGE
========================================================= */

const STORAGE_KEY = "aungBusinessAcademyV7";


/* =========================================================
   COURSE DATA
========================================================= */

const DEFAULT_COURSES = [
    {
        id: "youtube",
        title: "YouTube Beginner",
        category: "youtube",
        icon: "fa-brands fa-youtube",
        color: "red",
        description:
            "Learn the fundamentals of YouTube and build a strong channel foundation.",
        lessons: [
            {
                id: "yt-1",
                title: "YouTube Foundation",
                description: "Understand how YouTube works and how successful channels are built.",
                content:
                    "Start with the fundamentals. Understand your audience, niche, content format and the value you want to provide."
            },
            {
                id: "yt-2",
                title: "Channel Setup",
                description: "Build a professional YouTube channel structure.",
                content:
                    "Set up your channel name, profile image, banner, description and basic channel settings."
            },
            {
                id: "yt-3",
                title: "Content Strategy",
                description: "Create a practical content strategy for consistent growth.",
                content:
                    "Choose content pillars, create repeatable formats and plan videos around audience demand."
            },
            {
                id: "yt-4",
                title: "Thumbnail & Title",
                description: "Improve CTR with better thumbnails and titles.",
                content:
                    "A strong thumbnail earns attention while a strong title creates curiosity. Both should clearly communicate the video's value."
            },
            {
                id: "yt-5",
                title: "Monetization Basics",
                description: "Understand YouTube monetization and revenue fundamentals.",
                content:
                    "Learn the basic monetization model, RPM, CPM, watch time, audience geography and revenue optimization."
            }
        ]
    },

    {
        id: "sales",
        title: "Sales Management Mastery",
        category: "sales",
        icon: "fa-solid fa-chart-line",
        color: "blue",
        description:
            "Develop practical sales management, team leadership and execution skills.",
        lessons: [
            {
                id: "sales-1",
                title: "Sales Target Planning",
                description: "Convert sales targets into practical field execution.",
                content:
                    "Break the monthly target into weekly and daily targets. Identify the gap, prioritize opportunities and build an action plan."
            },
            {
                id: "sales-2",
                title: "Team Coaching",
                description: "Build a high-performing sales team through coaching.",
                content:
                    "Use regular field coaching, performance reviews, feedback and clear expectations to develop your team."
            },
            {
                id: "sales-3",
                title: "Territory Management",
                description: "Improve territory coverage and market execution.",
                content:
                    "Analyze territory potential, outlet coverage, distribution, customer segmentation and route productivity."
            },
            {
                id: "sales-4",
                title: "Performance Review",
                description: "Manage KPIs and close performance gaps.",
                content:
                    "Review sales volume, revenue, distribution, productivity and achievement. Identify root causes and assign corrective actions."
            }
        ]
    },

    {
        id: "business",
        title: "Business Foundation",
        category: "business",
        icon: "fa-solid fa-briefcase",
        color: "purple",
        description:
            "Understand the essential principles of building and managing a business.",
        lessons: [
            {
                id: "business-1",
                title: "Business Fundamentals",
                description: "Understand the basic components of a successful business.",
                content:
                    "Every business needs a customer, a valuable offer, a delivery system and a sustainable financial model."
            },
            {
                id: "business-2",
                title: "Customer & Value",
                description: "Understand customers and create meaningful value.",
                content:
                    "Identify customer needs, pain points and buying behavior. Build your offer around a real customer problem."
            },
            {
                id: "business-3",
                title: "Profit & Cash Flow",
                description: "Understand the difference between sales, profit and cash flow.",
                content:
                    "Revenue is not profit. Track cost, gross margin, operating expenses and cash flow to understand the real health of a business."
            }
        ]
    },

    {
        id: "marketing",
        title: "Marketing & Growth",
        category: "marketing",
        icon: "fa-solid fa-bullhorn",
        color: "orange",
        description:
            "Learn practical marketing strategies for customer acquisition and growth.",
        lessons: [
            {
                id: "marketing-1",
                title: "Marketing Basics",
                description: "Understand positioning, audience and value proposition.",
                content:
                    "Good marketing starts with knowing exactly who you serve and why they should choose your product or service."
            },
            {
                id: "marketing-2",
                title: "Digital Growth",
                description: "Use digital channels to attract and engage customers.",
                content:
                    "Build a consistent content strategy across relevant digital channels and measure engagement and conversion."
            },
            {
                id: "marketing-3",
                title: "Campaign Measurement",
                description: "Measure campaign performance and optimize results.",
                content:
                    "Track reach, engagement, leads, conversion and return on investment. Improve campaigns based on data."
            }
        ]
    }
];


/* =========================================================
   DEFAULT STATE
========================================================= */

const DEFAULT_STATE = {
    user: {
        name: "Aung Zar Ni Win",
        role: "Business Manager"
    },

    completedLessons: [],

    currentCourse: "youtube",

    currentLesson: null,

    streak: 0,

    dailyGoal: 1,

    dailyCompleted: 0,

    sales: {
        target: 10000000,
        actual: 8200000,
        priorities: [
            "Review monthly sales achievement",
            "Coach underperforming sales reps",
            "Follow up key accounts"
        ]
    },

    settings: {
        dailyGoalReminder: true,
        notifications: true
    },

    activity: [
        {
            icon: "fa-solid fa-user-plus",
            color: "blue",
            title: "Welcome to Aung Business Academy",
            text: "Your learning journey has started.",
            time: "Just now"
        }
    ]
};


/* =========================================================
   STATE
========================================================= */

let state = loadState();


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initializeApp();

});


/* =========================================================
   INITIALIZE APP
========================================================= */

function initializeApp() {

    bindNavigation();

    bindDashboardActions();

    bindCourseActions();

    bindLessonActions();

    bindSalesActions();

    bindCalculator();

    bindAI();

    bindSettings();

    bindSearch();

    bindMobileSidebar();

    renderAll();

}


/* =========================================================
   STORAGE FUNCTIONS
========================================================= */

function loadState() {

    try {

        const saved = localStorage.getItem(STORAGE_KEY);

        if (!saved) {
            return structuredClone(DEFAULT_STATE);
        }

        const parsed = JSON.parse(saved);

        return {
            ...structuredClone(DEFAULT_STATE),
            ...parsed,

            user: {
                ...DEFAULT_STATE.user,
                ...(parsed.user || {})
            },

            sales: {
                ...DEFAULT_STATE.sales,
                ...(parsed.sales || {})
            },

            settings: {
                ...DEFAULT_STATE.settings,
                ...(parsed.settings || {})
            },

            completedLessons:
                Array.isArray(parsed.completedLessons)
                    ? parsed.completedLessons
                    : [],

            activity:
                Array.isArray(parsed.activity)
                    ? parsed.activity
                    : DEFAULT_STATE.activity
        };

    } catch (error) {

        console.error("State loading error:", error);

        return structuredClone(DEFAULT_STATE);
    }
}


function saveState() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(state)
    );
}


/* =========================================================
   HELPERS
========================================================= */

function getCourses() {

    return DEFAULT_COURSES;
}


function getCourse(courseId) {

    return getCourses().find(
        course => course.id === courseId
    );
}


function getAllLessons() {

    return getCourses().flatMap(
        course => course.lessons
    );
}


function getTotalCourses() {

    return getCourses().length;
}


function getTotalLessons() {

    return getAllLessons().length;
}


function getCompletedLessons() {

    return state.completedLessons.length;
}


function getOverallProgress() {

    const total = getTotalLessons();

    if (total === 0) {
        return 0;
    }

    return Math.round(
        (getCompletedLessons() / total) * 100
    );
}


function getCourseCompletedCount(courseId) {

    const course = getCourse(courseId);

    if (!course) {
        return 0;
    }

    return course.lessons.filter(
        lesson => state.completedLessons.includes(lesson.id)
    ).length;
}


function getCourseProgress(courseId) {

    const course = getCourse(courseId);

    if (!course || course.lessons.length === 0) {
        return 0;
    }

    const completed = getCourseCompletedCount(courseId);

    return Math.round(
        (completed / course.lessons.length) * 100
    );
}


function formatNumber(value) {

    return Number(value || 0).toLocaleString(
        "en-US"
    );
}


function formatCurrency(value) {

    return formatNumber(
        Math.round(value || 0)
    );
}


function getFirstName() {

    return state.user.name
        .trim()
        .split(" ")[0] || "Aung";
}


/* =========================================================
   NAVIGATION
========================================================= */

function bindNavigation() {

    document.querySelectorAll(".nav-item").forEach(button => {

        button.addEventListener("click", () => {

            const page = button.dataset.page;

            navigateTo(page);

        });

    });


    document.querySelectorAll("[data-page-action]").forEach(button => {

        button.addEventListener("click", () => {

            navigateTo(
                button.dataset.pageAction
            );

        });

    });

}


function navigateTo(pageName) {

    document.querySelectorAll(".page").forEach(page => {

        page.classList.remove("active");

    });


    const targetPage =
        document.getElementById(
            `page-${pageName}`
        );


    if (targetPage) {

        targetPage.classList.add("active");

    }


    document.querySelectorAll(".nav-item").forEach(item => {

        item.classList.toggle(
            "active",
            item.dataset.page === pageName
        );

    });


    const navItem =
        document.querySelector(
            `.nav-item[data-page="${pageName}"]`
        );


    const title =
        navItem
            ? navItem.innerText.trim()
            : "Dashboard";


    const breadcrumb =
        document.getElementById(
            "breadcrumbTitle"
        );


    if (breadcrumb) {

        breadcrumb.textContent = title;

    }


    closeMobileSidebar();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    if (pageName === "courses") {
        renderCourses();
    }

    if (pageName === "lessons") {
        renderLessons();
    }

    if (pageName === "progress") {
        renderProgress();
    }

    if (pageName === "sales") {
        renderSales();
    }

    if (pageName === "reports") {
        renderReports();
    }

    if (pageName === "settings") {
        renderSettings();
    }

}


/* =========================================================
   RENDER ALL
========================================================= */

function renderAll() {

    renderUser();

    renderDashboard();

    renderCourses();

    renderLessons();

    renderProgress();

    renderSales();

    renderReports();

    renderSettings();

    calculatePrice();

}


/* =========================================================
   USER
========================================================= */

function renderUser() {

    const name = state.user.name;
    const role = state.user.role;


    const elements = {

        sidebarUserName:
            document.getElementById(
                "sidebarUserName"
            ),

        sidebarUserRole:
            document.getElementById(
                "sidebarUserRole"
            ),

        topUserName:
            document.getElementById(
                "topUserName"
            ),

        topUserRole:
            document.getElementById(
                "topUserRole"
            ),

        welcomeName:
            document.getElementById(
                "welcomeName"
            )

    };


    if (elements.sidebarUserName) {
        elements.sidebarUserName.textContent = name;
    }

    if (elements.sidebarUserRole) {
        elements.sidebarUserRole.textContent = role;
    }

    if (elements.topUserName) {
        elements.topUserName.textContent = name;
    }

    if (elements.topUserRole) {
        elements.topUserRole.textContent = role;
    }

    if (elements.welcomeName) {
        elements.welcomeName.textContent =
            getFirstName();
    }

}


/* =========================================================
   DASHBOARD
========================================================= */

function renderDashboard() {

    const totalCourses =
        getTotalCourses();

    const totalLessons =
        getTotalLessons();

    const progress =
        getOverallProgress();

    const completed =
        getCompletedLessons();


    setText(
        "statCourses",
        totalCourses
    );

    setText(
        "statLessons",
        totalLessons
    );

    setText(
        "statProgress",
        `${progress}%`
    );

    setText(
        "statStreak",
        `${state.streak} days`
    );


    /* Current Course */

    const course =
        getCourse(
            state.currentCourse
        ) || getCourses()[0];


    const courseCompleted =
        getCourseCompletedCount(
            course.id
        );

    const courseProgress =
        getCourseProgress(
            course.id
        );


    setText(
        "currentCourseTitle",
        course.title
    );


    setText(
        "currentCoursePercent",
        `${courseProgress}%`
    );


    setText(
        "currentCourseLessons",
        `${courseCompleted} / ${course.lessons.length} Lessons`
    );


    setText(
        "currentCourseStatus",
        courseProgress === 100
            ? "Completed"
            : courseProgress > 0
                ? "In Progress"
                : "Not Started"
    );


    const currentProgress =
        document.getElementById(
            "currentCourseProgress"
        );


    if (currentProgress) {

        currentProgress.style.width =
            `${courseProgress}%`;

    }


    /* Daily Goal */

    const dailyGoal =
        Math.max(
            1,
            Number(state.dailyGoal || 1)
        );


    const dailyCompleted =
        Math.min(
            dailyGoal,
            Number(state.dailyCompleted || 0)
        );


    const dailyPercent =
        Math.round(
            (dailyCompleted / dailyGoal) * 100
        );


    setText(
        "goalPercent",
        `${dailyPercent}%`
    );


    setText(
        "goalCompleted",
        `${dailyCompleted} / ${dailyGoal} lesson`
    );


    renderActivity();

}


/* =========================================================
   ACTIVITY
========================================================= */

function renderActivity() {

    const container =
        document.getElementById(
            "activityList"
        );


    if (!container) {
        return;
    }


    const activities =
        state.activity.slice(0, 6);


    if (activities.length === 0) {

        container.innerHTML = `
            <div class="empty-state">
                <i class="fa-regular fa-clock"></i>
                <p>No recent activity yet.</p>
            </div>
        `;

        return;
    }


    container.innerHTML =
        activities.map(activity => {

            return `
                <div class="activity-item">

                    <div class="activity-icon ${activity.color || "blue"}">
                        <i class="${activity.icon || "fa-solid fa-circle"}"></i>
                    </div>

                    <div class="activity-content">

                        <strong>
                            ${escapeHTML(activity.title)}
                        </strong>

                        <span>
                            ${escapeHTML(activity.text)}
                        </span>

                    </div>

                    <time>
                        ${escapeHTML(activity.time)}
                    </time>

                </div>
            `;

        }).join("");

}


/* =========================================================
   COURSES
========================================================= */

function bindCourseActions() {

    document.querySelectorAll(".filter-tab").forEach(tab => {

        tab.addEventListener("click", () => {

            document
                .querySelectorAll(".filter-tab")
                .forEach(item => {
                    item.classList.remove("active");
                });


            tab.classList.add("active");


            renderCourses(
                tab.dataset.filter
            );

        });

    });


    document.querySelectorAll("[data-course]").forEach(button => {

        button.addEventListener("click", () => {

            const courseId =
                button.dataset.course;

            state.currentCourse =
                courseId;

            saveState();

            navigateTo("lessons");

            renderLessons();

        });

    });

}


function renderCourses(filter = "all") {

    const container =
        document.getElementById(
            "coursesGrid"
        );


    if (!container) {
        return;
    }


    let courses = getCourses();


    if (filter !== "all") {

        courses =
            courses.filter(
                course =>
                    course.category === filter
            );

    }


    container.innerHTML =
        courses.map(course => {

            const completed =
                getCourseCompletedCount(
                    course.id
                );

            const progress =
                getCourseProgress(
                    course.id
                );


            return `
                <div class="course-card">

                    <div class="course-card-top">

                        <div class="course-icon ${course.color}">
                            <i class="${course.icon}"></i>
                        </div>

                        <span class="course-badge ${course.category}">
                            ${capitalize(course.category)}
                        </span>

                    </div>


                    <h3>
                        ${escapeHTML(course.title)}
                    </h3>


                    <p>
                        ${escapeHTML(course.description)}
                    </p>


                    <div class="course-meta">

                        <span>
                            <i class="fa-regular fa-file-lines"></i>
                            ${course.lessons.length} Lessons
                        </span>

                        <strong>
                            ${progress}%
                        </strong>

                    </div>


                    <div class="progress-bar small">

                        <div
                            class="progress-fill ${course.color}-fill"
                            style="width:${progress}%"
                        ></div>

                    </div>


                    <div class="course-card-footer">

                        <span>
                            ${completed} / ${course.lessons.length}
                            completed
                        </span>

                        <button
                            class="primary-btn small-btn"
                            data-open-course="${course.id}"
                        >
                            ${progress > 0 ? "Continue" : "Start Course"}
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>

                    </div>

                </div>
            `;

        }).join("");


    container
        .querySelectorAll(
            "[data-open-course]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    state.currentCourse =
                        button.dataset.openCourse;

                    saveState();

                    navigateTo("lessons");

                    renderLessons();

                }
            );

        });

}


/* =========================================================
   LESSONS
========================================================= */

function bindLessonActions() {

    const completeButton =
        document.getElementById(
            "completeLessonBtn"
        );


    if (completeButton) {

        completeButton.addEventListener(
            "click",
            completeCurrentLesson
        );

    }


    const nextButton =
        document.getElementById(
            "nextLessonBtn"
        );


    if (nextButton) {

        nextButton.addEventListener(
            "click",
            nextLesson
        );

    }


    const previousButton =
        document.getElementById(
            "previousLessonBtn"
        );


    if (previousButton) {

        previousButton.addEventListener(
            "click",
            previousLesson
        );

    }


    const continueButton =
        document.getElementById(
            "continueCourseBtn"
        );


    if (continueButton) {

        continueButton.addEventListener(
            "click",
            () => {

                navigateTo("lessons");

                renderLessons();

            }
        );

    }


    const dailyGoalButton =
        document.getElementById(
            "dailyGoalBtn"
        );


    if (dailyGoalButton) {

        dailyGoalButton.addEventListener(
            "click",
            () => {

                navigateTo("lessons");

                renderLessons();

            }
        );

    }

}


function renderLessons() {

    const courseList =
        document.getElementById(
            "lessonCourseList"
        );


    if (!courseList) {
        return;
    }


    const courses =
        getCourses();


    courseList.innerHTML =
        courses.map(course => {

            const completed =
                getCourseCompletedCount(
                    course.id
                );

            const progress =
                getCourseProgress(
                    course.id
                );


            return `
                <button
                    class="lesson-course-item ${
                        state.currentCourse === course.id
                            ? "active"
                            : ""
                    }"
                    data-select-course="${course.id}"
                >

                    <div class="lesson-course-icon ${course.color}">
                        <i class="${course.icon}"></i>
                    </div>

                    <div class="lesson-course-info">

                        <strong>
                            ${escapeHTML(course.title)}
                        </strong>

                        <span>
                            ${completed}/${course.lessons.length}
                            completed
                        </span>

                    </div>

                    <div class="mini-progress">
                        <div
                            style="width:${progress}%"
                        ></div>
                    </div>

                </button>
            `;

        }).join("");


    courseList
        .querySelectorAll(
            "[data-select-course]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    state.currentCourse =
                        button.dataset.selectCourse;

                    state.currentLesson = null;

                    saveState();

                    renderLessons();

                }
            );

        });


    const course =
        getCourse(
            state.currentCourse
        ) || courses[0];


    if (!course) {
        return;
    }


    if (
        !state.currentLesson ||
        !course.lessons.some(
            lesson =>
                lesson.id === state.currentLesson
        )
    ) {

        const firstIncomplete =
            course.lessons.find(
                lesson =>
                    !state.completedLessons.includes(
                        lesson.id
                    )
            );


        state.currentLesson =
            firstIncomplete
                ? firstIncomplete.id
                : course.lessons[0].id;

    }


    const lesson =
        course.lessons.find(
            item =>
                item.id === state.currentLesson
        );


    if (!lesson) {
        return;
    }


    const lessonIndex =
        course.lessons.findIndex(
            item =>
                item.id === lesson.id
        );


    setText(
        "lessonTitle",
        lesson.title
    );


    setText(
        "lessonDescription",
        lesson.description
    );


    setText(
        "lessonHeading",
        lesson.title
    );


    setText(
        "lessonText",
        lesson.content
    );


    setText(
        "lessonNumber",
        String(lessonIndex + 1).padStart(2, "0")
    );


    const completeButton =
        document.getElementById(
            "completeLessonBtn"
        );


    if (completeButton) {

        const isCompleted =
            state.completedLessons.includes(
                lesson.id
            );


        completeButton.innerHTML =
            isCompleted
                ? `
                    <i class="fa-solid fa-check"></i>
                    Completed
                  `
                : `
                    Mark Complete
                    <i class="fa-solid fa-check"></i>
                  `;


        completeButton.classList.toggle(
            "completed",
            isCompleted
        );

    }


    const previousButton =
        document.getElementById(
            "previousLessonBtn"
        );


    const nextButton =
        document.getElementById(
            "nextLessonBtn"
        );


    if (previousButton) {

        previousButton.disabled =
            lessonIndex === 0;

    }


    if (nextButton) {

        nextButton.disabled =
            lessonIndex ===
            course.lessons.length - 1;

    }

}


function completeCurrentLesson() {

    const course =
        getCourse(
            state.currentCourse
        );


    if (!course) {
        return;
    }


    const lesson =
        course.lessons.find(
            item =>
                item.id === state.currentLesson
        );


    if (!lesson) {
        return;
    }


    const alreadyCompleted =
        state.completedLessons.includes(
            lesson.id
        );


    if (alreadyCompleted) {

        showToast(
            "Already Completed",
            "This lesson has already been completed."
        );

        return;

    }


    state.completedLessons.push(
        lesson.id
    );


    state.dailyCompleted =
        Math.min(
            state.dailyGoal,
            state.dailyCompleted + 1
        );


    state.streak =
        Math.max(
            state.streak,
            1
        );


    state.activity.unshift({

        icon: "fa-solid fa-check",

        color: "green",

        title: `Completed: ${lesson.title}`,

        text: course.title,

        time: "Just now"

    });


    state.activity =
        state.activity.slice(0, 10);


    saveState();


    renderAll();

    renderLessons();


    showToast(
        "Lesson Completed",
        "Great work! Your progress has been updated."
    );

}


function nextLesson() {

    const course =
        getCourse(
            state.currentCourse
        );


    if (!course) {
        return;
    }


    const index =
        course.lessons.findIndex(
            lesson =>
                lesson.id === state.currentLesson
        );


    if (
        index >= 0 &&
        index < course.lessons.length - 1
    ) {

        state.currentLesson =
            course.lessons[index + 1].id;

        saveState();

        renderLessons();

    } else {

        showToast(
            "Course Complete",
            "You have reached the last lesson."
        );

    }

}


function previousLesson() {

    const course =
        getCourse(
            state.currentCourse
        );


    if (!course) {
        return;
    }


    const index =
        course.lessons.findIndex(
            lesson =>
                lesson.id === state.currentLesson
        );


    if (index > 0) {

        state.currentLesson =
            course.lessons[index - 1].id;

        saveState();

        renderLessons();

    }

}


/* =========================================================
   PROGRESS
========================================================= */

function renderProgress() {

    const progress =
        getOverallProgress();

    const completed =
        getCompletedLessons();

    const total =
        getTotalLessons();


    setText(
        "overallProgressLarge",
        `${progress}%`
    );


    setText(
        "progressLessonText",
        `${completed} of ${total} lessons completed`
    );


    setText(
        "progressStreak",
        `${state.streak} days`
    );


    setText(
        "progressCompleted",
        completed
    );


    const progressBar =
        document.getElementById(
            "overallProgressBar"
        );


    if (progressBar) {

        progressBar.style.width =
            `${progress}%`;

    }


    const container =
        document.getElementById(
            "courseProgressList"
        );


    if (!container) {
        return;
    }


    container.innerHTML =
        getCourses().map(course => {

            const completedCount =
                getCourseCompletedCount(
                    course.id
                );

            const courseProgress =
                getCourseProgress(
                    course.id
                );


            return `
                <div class="course-progress-row">

                    <div class="course-progress-name">

                        <div class="course-icon small ${course.color}">
                            <i class="${course.icon}"></i>
                        </div>

                        <div>
                            <strong>
                                ${escapeHTML(course.title)}
                            </strong>

                            <span>
                                ${completedCount} /
                                ${course.lessons.length}
                                lessons
                            </span>
                        </div>

                    </div>


                    <div class="course-progress-track">

                        <div class="progress-bar">

                            <div
                                class="progress-fill ${course.color}-fill"
                                style="width:${courseProgress}%"
                            ></div>

                        </div>

                    </div>


                    <strong class="course-progress-percent">
                        ${courseProgress}%
                    </strong>

                </div>
            `;

        }).join("");

}


/* =========================================================
   SALES
========================================================= */

function bindSalesActions() {

    const updateButton =
        document.getElementById(
            "updateSalesBtn"
        );


    if (updateButton) {

        updateButton.addEventListener(
            "click",
            updateSalesPerformance
        );

    }


    const addPriorityButton =
        document.getElementById(
            "addPriorityBtn"
        );


    if (addPriorityButton) {

        addPriorityButton.addEventListener(
            "click",
            addPriority
        );

    }

}


function renderSales() {

    const target =
        Number(
            state.sales.target || 0
        );


    const actual =
        Number(
            state.sales.actual || 0
        );


    const achievement =
        target > 0
            ? Math.round(
                (actual / target) * 100
            )
            : 0;


    const gap =
        target - actual;


    setText(
        "salesTarget",
        formatCurrency(target)
    );


    setText(
        "salesActual",
        formatCurrency(actual)
    );


    setText(
        "salesAchievement",
        `${achievement}%`
    );


    setText(
        "salesGap",
        formatCurrency(
            Math.max(0, gap)
        )
    );


    renderPriorities();

}


function renderPriorities() {

    const container =
        document.getElementById(
            "priorityList"
        );


    if (!container) {
        return;
    }


    const priorities =
        state.sales.priorities || [];


    if (priorities.length === 0) {

        container.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-list-check"></i>
                <p>No priorities added.</p>
            </div>
        `;

        return;

    }


    container.innerHTML =
        priorities.map(
            (priority, index) => {

                return `
                    <div class="priority-item">

                        <div class="priority-number">
                            ${index + 1}
                        </div>

                        <span>
                            ${escapeHTML(priority)}
                        </span>

                        <button
                            class="priority-delete"
                            data-delete-priority="${index}"
                        >
                            <i class="fa-solid fa-xmark"></i>
                        </button>

                    </div>
                `;

            }
        ).join("");


    container
        .querySelectorAll(
            "[data-delete-priority]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const index =
                        Number(
                            button.dataset.deletePriority
                        );


                    state.sales.priorities.splice(
                        index,
                        1
                    );


                    saveState();

                    renderSales();

                    showToast(
                        "Priority Removed",
                        "The priority has been removed."
                    );

                }
            );

        });

}


function updateSalesPerformance() {

    const target =
        prompt(
            "Enter monthly sales target:"
        );


    if (target === null) {
        return;
    }


    const actual =
        prompt(
            "Enter actual sales:"
        );


    if (actual === null) {
        return;
    }


    const targetNumber =
        Number(
            target.replace(/,/g, "")
        );


    const actualNumber =
        Number(
            actual.replace(/,/g, "")
        );


    if (
        !Number.isFinite(targetNumber) ||
        !Number.isFinite(actualNumber) ||
        targetNumber < 0 ||
        actualNumber < 0
    ) {

        showToast(
            "Invalid Input",
            "Please enter valid sales numbers."
        );

        return;

    }


    state.sales.target =
        targetNumber;

    state.sales.actual =
        actualNumber;


    saveState();

    renderSales();

    renderReports();

    showToast(
        "Sales Updated",
        "Sales performance has been updated."
    );

}


function addPriority() {

    const priority =
        prompt(
            "Enter today's priority:"
        );


    if (!priority || !priority.trim()) {
        return;
    }


    state.sales.priorities.push(
        priority.trim()
    );


    saveState();

    renderSales();

    showToast(
        "Priority Added",
        "Your new priority has been added."
    );

}


/* =========================================================
   CALCULATOR
========================================================= */

function bindCalculator() {

    const button =
        document.getElementById(
            "calculateBtn"
        );


    if (button) {

        button.addEventListener(
            "click",
            calculatePrice
        );

    }


    [
        "calcCost",
        "calcMargin",
        "calcQuantity"
    ].forEach(id => {

        const input =
            document.getElementById(id);


        if (input) {

            input.addEventListener(
                "input",
                calculatePrice
            );

        }

    });

}


function calculatePrice() {

    const cost =
        Number(
            document.getElementById(
                "calcCost"
            )?.value || 0
        );


    const margin =
        Number(
            document.getElementById(
                "calcMargin"
            )?.value || 0
        );


    const quantity =
        Number(
            document.getElementById(
                "calcQuantity"
            )?.value || 1
        );


    if (
        cost < 0 ||
        margin < 0 ||
        margin >= 100 ||
        quantity < 0
    ) {

        return;

    }


    const sellingPrice =
        cost /
        (1 - margin / 100);


    const profit =
        sellingPrice - cost;


    const revenue =
        sellingPrice * quantity;


    const totalProfit =
        profit * quantity;


    setText(
        "resultPrice",
        formatCurrency(sellingPrice)
    );


    setText(
        "resultProfit",
        formatCurrency(profit)
    );


    setText(
        "resultRevenue",
        formatCurrency(revenue)
    );


    setText(
        "resultTotalProfit",
        formatCurrency(totalProfit)
    );


    setText(
        "resultMargin",
        `${margin}%`
    );

}


/* =========================================================
   REPORTS
========================================================= */

function renderReports() {

    const progress =
        getOverallProgress();


    const target =
        Number(
            state.sales.target || 0
        );


    const actual =
        Number(
            state.sales.actual || 0
        );


    const achievement =
        target > 0
            ? Math.round(
                (actual / target) * 100
            )
            : 0;


    setText(
        "reportLearning",
        `${progress}% Complete`
    );


    setText(
        "reportSales",
        `${achievement}% Achievement`
    );

}


/* =========================================================
   AI COACH
========================================================= */

function bindAI() {

    const sendButton =
        document.getElementById(
            "aiSendBtn"
        );


    const input =
        document.getElementById(
            "aiInput"
        );


    if (sendButton) {

        sendButton.addEventListener(
            "click",
            sendAIMessage
        );

    }


    if (input) {

        input.addEventListener(
            "keydown",
            event => {

                if (event.key === "Enter") {

                    sendAIMessage();

                }

            }
        );

    }


    document
        .querySelectorAll(".ai-question")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const question =
                        button.dataset.question;

                    if (input) {

                        input.value =
                            question;

                        sendAIMessage();

                    }

                }
            );

        });

}


function sendAIMessage() {

    const input =
        document.getElementById(
            "aiInput"
        );


    const container =
        document.getElementById(
            "chatMessages"
        );


    if (!input || !container) {
        return;
    }


    const question =
        input.value.trim();


    if (!question) {
        return;
    }


    container.insertAdjacentHTML(
        "beforeend",
        `
            <div class="chat-message user">

                <div class="message-content">

                    <strong>You</strong>

                    <p>
                        ${escapeHTML(question)}
                    </p>

                </div>

            </div>
        `
    );


    input.value = "";


    const answer =
        generateAIResponse(
            question
        );


    setTimeout(() => {

        container.insertAdjacentHTML(
            "beforeend",
            `
                <div class="chat-message ai">

                    <div class="message-avatar">
                        AI
                    </div>

                    <div class="message-content">

                        <strong>Aung AI</strong>

                        <p>
                            ${escapeHTML(answer)}
                        </p>

                    </div>

                </div>
            `
        );


        container.scrollTop =
            container.scrollHeight;

    }, 400);


    container.scrollTop =
        container.scrollHeight;

}


function generateAIResponse(question) {

    const text =
        question.toLowerCase();


    if (
        text.includes("sales") ||
        text.includes("target")
    ) {

        return "Start with the numbers. Break the monthly target into weekly and daily targets, identify the performance gap, then assign clear actions to each sales rep. Review progress regularly and coach based on the root cause.";

    }


    if (
        text.includes("team") ||
        text.includes("coach")
    ) {

        return "Use a coaching and empowerment approach. Set clear expectations, observe field execution, give specific feedback, agree on an action plan and review the result. Avoid micromanagement while maintaining accountability.";

    }


    if (
        text.includes("business") ||
        text.includes("growth")
    ) {

        return "Focus on three areas: customers, revenue and execution. Identify the highest-value customer segment, strengthen the offer, improve distribution or acquisition, and measure results with clear KPIs.";

    }


    if (
        text.includes("youtube") ||
        text.includes("channel")
    ) {

        return "For YouTube growth, focus on topic demand, thumbnail CTR, title quality and audience retention. Build repeatable content formats and study which videos generate the strongest watch time.";

    }


    return "A practical management approach is to define the objective, measure the current gap, identify the root cause, create a clear action plan and review the result regularly. If you give me your specific situation, I can help structure the action plan.";

}


/* =========================================================
   SETTINGS
========================================================= */

function bindSettings() {

    const saveButton =
        document.getElementById(
            "saveSettingsBtn"
        );


    if (saveButton) {

        saveButton.addEventListener(
            "click",
            saveSettings
        );

    }


    const resetButton =
        document.getElementById(
            "resetDataBtn"
        );


    if (resetButton) {

        resetButton.addEventListener(
            "click",
            resetData
        );

    }


    const dailyGoalToggle =
        document.getElementById(
            "dailyGoalToggle"
        );


    if (dailyGoalToggle) {

        dailyGoalToggle.addEventListener(
            "change",
            () => {

                state.settings.dailyGoalReminder =
                    dailyGoalToggle.checked;

                saveState();

            }
        );

    }


    const notificationToggle =
        document.getElementById(
            "notificationToggle"
        );


    if (notificationToggle) {

        notificationToggle.addEventListener(
            "change",
            () => {

                state.settings.notifications =
                    notificationToggle.checked;

                saveState();

            }
        );

    }

}


function renderSettings() {

    const nameInput =
        document.getElementById(
            "settingsName"
        );


    const roleInput =
        document.getElementById(
            "settingsRole"
        );


    const dailyGoalToggle =
        document.getElementById(
            "dailyGoalToggle"
        );


    const notificationToggle =
        document.getElementById(
            "notificationToggle"
        );


    if (nameInput) {
        nameInput.value =
            state.user.name;
    }


    if (roleInput) {
        roleInput.value =
            state.user.role;
    }


    if (dailyGoalToggle) {

        dailyGoalToggle.checked =
            state.settings.dailyGoalReminder;

    }


    if (notificationToggle) {

        notificationToggle.checked =
            state.settings.notifications;

    }

}


function saveSettings() {

    const name =
        document.getElementById(
            "settingsName"
        )?.value.trim();


    const role =
        document.getElementById(
            "settingsRole"
        )?.value.trim();


    if (!name) {

        showToast(
            "Name Required",
            "Please enter your name."
        );

        return;

    }


    state.user.name =
        name;


    state.user.role =
        role || "Business Manager";


    saveState();

    renderUser();

    showToast(
        "Settings Saved",
        "Your profile has been updated."
    );

}


function resetData() {

    const confirmed =
        confirm(
            "Reset all academy progress and settings?"
        );


    if (!confirmed) {
        return;
    }


    localStorage.removeItem(
        STORAGE_KEY
    );


    state =
        structuredClone(
            DEFAULT_STATE
        );


    renderAll();

    showToast(
        "Data Reset",
        "Academy data has been reset."
    );

}


/* =========================================================
   SEARCH
========================================================= */

function bindSearch() {

    const searchInput =
        document.getElementById(
            "globalSearch"
        );


    if (!searchInput) {
        return;
    }


    searchInput.addEventListener(
        "keydown",
        event => {

            if (event.key !== "Enter") {
                return;
            }


            const query =
                searchInput.value
                    .trim()
                    .toLowerCase();


            if (!query) {
                return;
            }


            const course =
                getCourses().find(
                    item =>
                        item.title
                            .toLowerCase()
                            .includes(query)
                );


            if (course) {

                state.currentCourse =
                    course.id;

                saveState();

                navigateTo("lessons");

                renderLessons();

                return;

            }


            if (
                query.includes("sales") ||
                query.includes("manager")
            ) {

                navigateTo("sales");

                return;

            }


            if (
                query.includes("calculator") ||
                query.includes("price")
            ) {

                navigateTo("calculator");

                return;

            }


            if (
                query.includes("ai") ||
                query.includes("coach")
            ) {

                navigateTo("ai-coach");

                return;

            }


            showToast(
                "No Result",
                `No result found for "${query}".`
            );

        }
    );

}


/* =========================================================
   MOBILE SIDEBAR
========================================================= */

function bindMobileSidebar() {

    const menuButton =
        document.getElementById(
            "mobileMenu"
        );


    const overlay =
        document.getElementById(
            "sidebarOverlay"
        );


    if (menuButton) {

        menuButton.addEventListener(
            "click",
            openMobileSidebar
        );

    }


    if (overlay) {

        overlay.addEventListener(
            "click",
            closeMobileSidebar
        );

    }

}


function openMobileSidebar() {

    document
        .getElementById("sidebar")
        ?.classList.add("open");


    document
        .getElementById("sidebarOverlay")
        ?.classList.add("show");

}


function closeMobileSidebar() {

    document
        .getElementById("sidebar")
        ?.classList.remove("open");


    document
        .getElementById("sidebarOverlay")
        ?.classList.remove("show");

}


/* =========================================================
   TOAST
========================================================= */

let toastTimer;


function showToast(
    title,
    message
) {

    const toast =
        document.getElementById(
            "toast"
        );


    const toastTitle =
        document.getElementById(
            "toastTitle"
        );


    const toastMessage =
        document.getElementById(
            "toastMessage"
        );


    if (!toast) {
        return;
    }


    if (toastTitle) {
        toastTitle.textContent =
            title;
    }


    if (toastMessage) {
        toastMessage.textContent =
            message;
    }


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            3000
        );

}


/* =========================================================
   MODAL
========================================================= */

function openModal(content) {

    const overlay =
        document.getElementById(
            "modalOverlay"
        );


    const container =
        document.getElementById(
            "modalContent"
        );


    if (!overlay || !container) {
        return;
    }


    container.innerHTML =
        content;


    overlay.classList.add(
        "show"
    );

}


function closeModal() {

    document
        .getElementById(
            "modalOverlay"
        )
        ?.classList.remove(
            "show"
        );

}


document.addEventListener(
    "click",
    event => {

        if (
            event.target.closest(
                "#modalClose"
            )
        ) {

            closeModal();

        }


        if (
            event.target.id ===
            "modalOverlay"
        ) {

            closeModal();

        }

    }
);


/* =========================================================
   REPORT BUTTONS
========================================================= */

document.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                "[data-report]"
            );


        if (!button) {
            return;
        }


        const type =
            button.dataset.report;


        let title =
            "Business Report";


        let content =
            "Your report is ready.";


        if (type === "learning") {

            title =
                "Learning Report";

            content =
                `Overall learning progress is ${getOverallProgress()}%. You have completed ${getCompletedLessons()} of ${getTotalLessons()} lessons.`;

        }


        if (type === "sales") {

            const target =
                state.sales.target || 0;

            const actual =
                state.sales.actual || 0;

            const achievement =
                target > 0
                    ? Math.round(
                        actual / target * 100
                    )
                    : 0;


            title =
                "Sales Report";

            content =
                `Current sales achievement is ${achievement}%. Actual sales are ${formatCurrency(actual)} against a target of ${formatCurrency(target)}.`;

        }


        if (type === "manager") {

            title =
                "Manager Report";

            content =
                "Your management focus should remain on people, numbers and execution: coach the team, monitor KPIs and convert targets into practical field actions.";

        }


        if (type === "ai") {

            title =
                "AI Business Report";

            content =
                "AI insight: focus on closing performance gaps, improving team execution and maintaining consistent KPI reviews.";

        }


        openModal(`
            <div class="modal-icon blue">
                <i class="fa-solid fa-chart-line"></i>
            </div>

            <h2>
                ${title}
            </h2>

            <p>
                ${content}
            </p>

            <button
                class="primary-btn full"
                onclick="closeModal()"
            >
                Close
            </button>
        `);

    }
);


/* =========================================================
   AI TOOL BUTTONS
========================================================= */

document.addEventListener(
    "click",
    event => {

        const tool =
            event.target.closest(
                ".ai-tool-card"
            );


        if (!tool) {
            return;
        }


        const title =
            tool.querySelector(
                "strong"
            )?.textContent ||
            "AI Tool";


        openModal(`
            <div class="modal-icon purple">
                <i class="fa-solid fa-wand-magic-sparkles"></i>
            </div>

            <h2>
                ${escapeHTML(title)}
            </h2>

            <p>
                This AI tool interface is ready.
                You can connect it to your Gemini API
                in the next version.
            </p>

            <button
                class="primary-btn full"
                onclick="closeModal()"
            >
                Got it
            </button>
        `);

    }
);


/* =========================================================
   NOTIFICATION
========================================================= */

document
    .getElementById("notificationBtn")
    ?.addEventListener(
        "click",
        () => {

            showToast(
                "Notifications",
                "No new notifications."
            );

        }
    );


/* =========================================================
   UTILITIES
========================================================= */

function setText(
    id,
    value
) {

    const element =
        document.getElementById(id);


    if (element) {

        element.textContent =
            value;

    }

}


function capitalize(text) {

    if (!text) {
        return "";
    }

    return (
        text.charAt(0).toUpperCase() +
        text.slice(1)
    );

}


function escapeHTML(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


/* =========================================================
   GLOBAL API
========================================================= */

window.AungAcademy = {

    state,

    courses: DEFAULT_COURSES,

    navigateTo,

    renderAll,

    renderDashboard,

    renderCourses,

    renderLessons,

    renderProgress,

    renderSales,

    calculatePrice,

    showToast,

    openModal,

    closeModal

};
