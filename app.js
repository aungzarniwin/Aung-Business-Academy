/* =========================================================
   AUNG BUSINESS ACADEMY V6
   APP.JS - FULL VERSION
   ========================================================= */

"use strict";

/* =========================================================
   APP STATE
========================================================= */

const APP_VERSION = "6.0";

const STORAGE_KEY = "aungBusinessAcademyV6";

const defaultState = {
    user: {
        name: "Aung Zar Ni Win",
        role: "Business Manager",
        email: ""
    },

    currentPage: "dashboard",

    streak: 7,

    dailyGoal: {
        completed: 0,
        target: 1
    },

    courses: [
        {
            id: "youtube-beginner",
            title: "YouTube Beginner",
            category: "youtube",
            categoryLabel: "YOUTUBE BUSINESS",
            description:
                "Learn the fundamentals and build your YouTube foundation.",
            icon: "fa-brands fa-youtube",
            color: "red",
            progress: 0,
            lessons: [
                {
                    id: "yt-01",
                    title: "YouTube Fundamentals",
                    duration: "12 min",
                    completed: false,
                    content:
                        "Learn how YouTube works, how channels grow and how to build a strong foundation."
                },
                {
                    id: "yt-02",
                    title: "Choosing Your Niche",
                    duration: "15 min",
                    completed: false,
                    content:
                        "Learn how to select a profitable and sustainable YouTube niche."
                },
                {
                    id: "yt-03",
                    title: "Channel Setup",
                    duration: "18 min",
                    completed: false,
                    content:
                        "Set up your channel name, description, branding and basic settings."
                },
                {
                    id: "yt-04",
                    title: "Titles & Thumbnails",
                    duration: "20 min",
                    completed: false,
                    content:
                        "Learn how to create stronger titles and thumbnails to improve CTR."
                },
                {
                    id: "yt-05",
                    title: "Watch Time & Retention",
                    duration: "22 min",
                    completed: false,
                    content:
                        "Understand audience retention and practical ways to increase watch time."
                }
            ]
        },

        {
            id: "sales-manager",
            title: "Sales Management Mastery",
            category: "sales",
            categoryLabel: "SALES MANAGEMENT",
            description:
                "Build strong sales execution, coaching and performance management skills.",
            icon: "fa-solid fa-bullseye",
            color: "blue",
            progress: 0,
            lessons: [
                {
                    id: "sales-01",
                    title: "Sales Target Planning",
                    duration: "18 min",
                    completed: false,
                    content:
                        "Learn how to convert business targets into practical field execution."
                },
                {
                    id: "sales-02",
                    title: "Territory Management",
                    duration: "20 min",
                    completed: false,
                    content:
                        "Learn territory planning, customer coverage and route-to-market execution."
                },
                {
                    id: "sales-03",
                    title: "Team Coaching",
                    duration: "22 min",
                    completed: false,
                    content:
                        "Build a coaching and empowerment culture while maintaining accountability."
                },
                {
                    id: "sales-04",
                    title: "Performance Review",
                    duration: "18 min",
                    completed: false,
                    content:
                        "Use KPIs, gap analysis and action plans to improve sales performance."
                }
            ]
        },

        {
            id: "business-foundation",
            title: "Business Foundation",
            category: "business",
            categoryLabel: "BUSINESS",
            description:
                "Understand core business principles, profitability and decision making.",
            icon: "fa-solid fa-building",
            color: "purple",
            progress: 0,
            lessons: [
                {
                    id: "biz-01",
                    title: "Business Fundamentals",
                    duration: "15 min",
                    completed: false,
                    content:
                        "Understand revenue, cost, profit, customers and business models."
                },
                {
                    id: "biz-02",
                    title: "Profit & Margin",
                    duration: "20 min",
                    completed: false,
                    content:
                        "Understand gross profit, margin and pricing decisions."
                },
                {
                    id: "biz-03",
                    title: "Business Decision Making",
                    duration: "17 min",
                    completed: false,
                    content:
                        "Use numbers and practical analysis to make better business decisions."
                }
            ]
        },

        {
            id: "marketing-growth",
            title: "Marketing & Growth",
            category: "marketing",
            categoryLabel: "MARKETING",
            description:
                "Learn practical marketing strategies for customer and business growth.",
            icon: "fa-solid fa-bullhorn",
            color: "orange",
            progress: 0,
            lessons: [
                {
                    id: "mkt-01",
                    title: "Marketing Fundamentals",
                    duration: "15 min",
                    completed: false,
                    content:
                        "Understand customers, positioning, value propositions and marketing fundamentals."
                },
                {
                    id: "mkt-02",
                    title: "Customer Acquisition",
                    duration: "19 min",
                    completed: false,
                    content:
                        "Learn practical ways to attract, convert and retain customers."
                },
                {
                    id: "mkt-03",
                    title: "Growth Strategy",
                    duration: "21 min",
                    completed: false,
                    content:
                        "Build a practical growth strategy using customers, channels and execution."
                }
            ]
        }
    ],

    sales: {
        monthlyTarget: 100000000,
        actualSales: 72000000,
        priorities: [
            "Review sales target achievement",
            "Identify underperforming territories",
            "Coach sales team",
            "Visit top customers"
        ]
    },

    activity: [
        {
            icon: "fa-solid fa-user",
            title: "Welcome to Aung Business Academy",
            description: "Your V6 academy dashboard is ready.",
            time: "Today"
        },
        {
            icon: "fa-solid fa-graduation-cap",
            title: "Learning journey started",
            description: "You can now begin your first course.",
            time: "Today"
        }
    ],

    settings: {
        notifications: true,
        learningReminder: true,
        autoSave: true
    }
};


/* =========================================================
   STATE
========================================================= */

let state = loadState();

let selectedCourseId = null;
let selectedLessonId = null;


/* =========================================================
   DOM HELPER
========================================================= */

function $(selector) {
    return document.querySelector(selector);
}

function $$(selector) {
    return document.querySelectorAll(selector);
}


/* =========================================================
   STORAGE
========================================================= */

function loadState() {

    try {

        const saved = localStorage.getItem(STORAGE_KEY);

        if (!saved) {
            return structuredClone(defaultState);
        }

        const parsed = JSON.parse(saved);

        return mergeState(
            structuredClone(defaultState),
            parsed
        );

    } catch (error) {

        console.error("State loading error:", error);

        return structuredClone(defaultState);
    }
}


function mergeState(base, saved) {

    return {
        ...base,
        ...saved,

        user: {
            ...base.user,
            ...(saved.user || {})
        },

        dailyGoal: {
            ...base.dailyGoal,
            ...(saved.dailyGoal || {})
        },

        sales: {
            ...base.sales,
            ...(saved.sales || {})
        },

        settings: {
            ...base.settings,
            ...(saved.settings || {})
        },

        courses: saved.courses || base.courses,

        activity: saved.activity || base.activity
    };
}


function saveState() {

    try {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(state)
        );

    } catch (error) {

        console.error("State saving error:", error);
    }
}


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initializeApp();

});


function initializeApp() {

    updateCourseProgress();

    bindNavigation();

    bindDashboardEvents();

    bindCourseEvents();

    bindLessonEvents();

    bindSalesEvents();

    bindCalculator();

    bindAIEvents();

    bindSettingsEvents();

    bindGlobalSearch();

    bindModal();

    bindMobileSidebar();

    updateUserUI();

    renderDashboard();

    showPage(state.currentPage);

    console.log(
        `Aung Business Academy V${APP_VERSION} initialized.`
    );
}


/* =========================================================
   NAVIGATION
========================================================= */

function bindNavigation() {

    $$(".nav-item").forEach(button => {

        button.addEventListener("click", () => {

            const page = button.dataset.page;

            if (page) {
                showPage(page);
            }

            closeMobileSidebar();

        });

    });


    $$("[data-page]").forEach(element => {

        if (
            !element.classList.contains("nav-item")
        ) {

            element.addEventListener("click", () => {

                const page = element.dataset.page;

                if (page) {
                    showPage(page);
                }

            });

        }

    });

}


function showPage(page) {

    const validPage = document.querySelector(
        `[data-page-content="${page}"]`
    );

    if (!validPage) {
        page = "dashboard";
    }

    state.currentPage = page;

    saveState();

    $$(".page").forEach(section => {

        section.classList.remove("active");

    });

    const target = document.querySelector(
        `[data-page-content="${page}"]`
    );

    if (target) {
        target.classList.add("active");
    }


    $$(".nav-item").forEach(item => {

        item.classList.toggle(
            "active",
            item.dataset.page === page
        );

    });


    updateBreadcrumb(page);


    switch (page) {

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

        case "sales":
            renderSales();
            break;

        case "calculator":
            break;

        case "reports":
            renderReports();
            break;

        case "ai-coach":
            break;

        case "ai-tools":
            break;

        case "settings":
            renderSettings();
            break;
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   BREADCRUMB
========================================================= */

function updateBreadcrumb(page) {

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

    const current = $("#breadcrumbCurrent");

    if (current) {
        current.textContent =
            names[page] || "Dashboard";
    }
}


/* =========================================================
   USER UI
========================================================= */

function updateUserUI() {

    const name =
        state.user.name || "Aung Zar Ni Win";

    const role =
        state.user.role || "Business Manager";

    const firstName =
        name.split(" ")[0] || "Aung";


    const ids = [

        "#sidebarUserName",
        "#topbarUserName",
        "#settingsName"

    ];

    ids.forEach(selector => {

        const element = $(selector);

        if (element) {
            element.value !== undefined
                ? element.value = name
                : element.textContent = name;
        }

    });


    const sidebarRole =
        $("#sidebarUserRole");

    if (sidebarRole) {
        sidebarRole.textContent = role;
    }


    const settingsRole =
        $("#settingsRole");

    if (settingsRole) {
        settingsRole.value = role;
    }


    const welcome =
        $("#welcomeUserName");

    if (welcome) {
        welcome.textContent = firstName;
    }


    const settingsEmail =
        $("#settingsEmail");

    if (
        settingsEmail &&
        state.user.email
    ) {
        settingsEmail.value =
            state.user.email;
    }
}


/* =========================================================
   DASHBOARD
========================================================= */

function renderDashboard() {

    updateCourseProgress();

    const totalCourses =
        state.courses.length;

    const totalLessons =
        getTotalLessons();

    const completedLessons =
        getCompletedLessons();

    const progress =
        getOverallProgress();


    setText(
        "#dashboardCourseCount",
        totalCourses
    );

    setText(
        "#dashboardLessonCount",
        totalLessons
    );

    setText(
        "#completedLessonText",
        `${completedLessons} lessons`
    );

    setText(
        "#dashboardProgress",
        progress
    );

    setWidth(
        "#dashboardProgressBar",
        progress
    );

    setText(
        "#dashboardStreak",
        state.streak
    );


    const currentCourse =
        getCurrentCourse();

    if (currentCourse) {

        setText(
            "#currentCourseTitle",
            currentCourse.title
        );

        setText(
            "#currentCourseDescription",
            currentCourse.description
        );

        setText(
            "#currentCourseProgress",
            `${currentCourse.progress}%`
        );

        setText(
            "#currentCourseLesson",
            `${getCompletedCourseLessons(currentCourse)} / ${currentCourse.lessons.length} Lessons`
        );

        setWidth(
            "#currentCourseProgressBar",
            currentCourse.progress
        );

        const icon =
            document.querySelector(
                ".course-cover-icon"
            );

        if (icon) {

            icon.innerHTML =
                `<i class="${currentCourse.icon}"></i>`;
        }

    }


    renderRecentActivity();

    renderRecommendations();

    renderDailyGoal();

    updateCourseBadge();
}


function getCurrentCourse() {

    const inProgress =
        state.courses.find(
            course =>
                course.progress > 0 &&
                course.progress < 100
        );

    return (
        inProgress ||
        state.courses.find(
            course => course.progress === 0
        ) ||
        state.courses[0]
    );
}


function renderRecentActivity() {

    const container =
        $("#recentActivityList");

    if (!container) return;

    if (!state.activity.length) {

        container.innerHTML = `
            <div class="empty-state compact">
                <p>No recent activity yet.</p>
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
                        <i class="${item.icon}"></i>
                    </div>

                    <div class="activity-content">

                        <strong>
                            ${escapeHTML(item.title)}
                        </strong>

                        <span>
                            ${escapeHTML(item.description)}
                        </span>

                    </div>

                    <time>
                        ${escapeHTML(item.time)}
                    </time>

                </div>

            `)
            .join("");
}


function renderRecommendations() {

    const container =
        $("#recommendationList");

    if (!container) return;

    const recommendations =
        state.courses
            .filter(course => course.progress < 100)
            .slice(0, 3);


    if (!recommendations.length) {

        container.innerHTML = `
            <div class="empty-state compact">
                <p>All courses completed 🎉</p>
            </div>
        `;

        return;
    }


    container.innerHTML =
        recommendations
            .map(course => `

                <button
                    class="recommendation-item"
                    data-course-id="${course.id}"
                    type="button"
                >

                    <div class="recommendation-icon ${course.color}">
                        <i class="${course.icon}"></i>
                    </div>

                    <div class="recommendation-content">

                        <strong>
                            ${escapeHTML(course.title)}
                        </strong>

                        <span>
                            ${course.progress}% complete
                        </span>

                    </div>

                    <i class="fa-solid fa-chevron-right"></i>

                </button>

            `)
            .join("");


    $$(".recommendation-item").forEach(item => {

        item.addEventListener("click", () => {

            const course =
                state.courses.find(
                    c =>
                        c.id === item.dataset.courseId
                );

            if (course) {
                openCourse(course.id);
            }

        });

    });
}


function renderDailyGoal() {

    const completed =
        state.dailyGoal.completed;

    const target =
        state.dailyGoal.target || 1;

    const percent =
        Math.min(
            100,
            Math.round(
                (completed / target) * 100
            )
        );


    setText(
        "#dailyGoalPercent",
        `${percent}%`
    );

    setText(
        "#dailyGoalTitle",
        percent >= 100
            ? "Daily goal completed!"
            : "Today's learning goal"
    );

    setText(
        "#dailyGoalText",
        percent >= 100
            ? "Excellent work. Keep your momentum going."
            : `${completed} of ${target} lesson completed today.`
    );


    const circle =
        $("#dailyGoalCircle");

    if (circle) {

        circle.style.background =
            `conic-gradient(
                var(--primary, #2563eb)
                ${percent * 3.6}deg,
                #e5e7eb ${percent * 3.6}deg
            )`;
    }
}


function updateCourseBadge() {

    setText(
        "#courseCountBadge",
        state.courses.length
    );
}


/* =========================================================
   COURSE FUNCTIONS
========================================================= */

function bindCourseEvents() {

    const filters =
        $$(".filter-btn");

    filters.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                filters.forEach(
                    item =>
                        item.classList.remove("active")
                );

                button.classList.add("active");

                renderCourses(
                    button.dataset.courseFilter
                );

            }
        );

    });


    const viewAll =
        $("#viewAllCoursesBtn");

    if (viewAll) {

        viewAll.addEventListener(
            "click",
            () => showPage("courses")
        );
    }


    const resume =
        $("#resumeCourseBtn");

    if (resume) {

        resume.addEventListener(
            "click",
            () => {

                const course =
                    getCurrentCourse();

                if (course) {
                    openCourse(course.id);
                }

            }
        );
    }


    const continueBtn =
        $("#continueLearningBtn");

    if (continueBtn) {

        continueBtn.addEventListener(
            "click",
            () => {

                const course =
                    getCurrentCourse();

                if (course) {
                    openCourse(course.id);
                }

            }
        );
    }


    const goalBtn =
        $("#dailyGoalBtn");

    if (goalBtn) {

        goalBtn.addEventListener(
            "click",
            () => {

                const course =
                    getCurrentCourse();

                if (course) {
                    openCourse(course.id);
                }

            }
        );
    }


    const courseSearch =
        $("#courseSearchBtn");

    if (courseSearch) {

        courseSearch.addEventListener(
            "click",
            () => {

                showPage("courses");

                setTimeout(() => {

                    const search =
                        $("#globalSearch");

                    if (search) {
                        search.focus();
                    }

                }, 100);

            }
        );
    }
}


function renderCourses(filter = "all") {

    const grid =
        $("#coursesGrid");

    if (!grid) return;


    const courses =
        filter === "all"
            ? state.courses
            : state.courses.filter(
                course =>
                    course.category === filter
            );


    if (!courses.length) {

        grid.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">
                    <i class="fa-solid fa-book"></i>
                </div>
                <h3>No courses found</h3>
                <p>Try another category.</p>
            </div>
        `;

        return;
    }


    grid.innerHTML =
        courses
            .map(course => `

                <article
                    class="course-card"
                    data-course-id="${course.id}"
                >

                    <div class="course-card-cover ${course.color}">

                        <div class="course-card-icon">
                            <i class="${course.icon}"></i>
                        </div>

                        <span class="course-category-badge">
                            ${escapeHTML(course.categoryLabel)}
                        </span>

                    </div>


                    <div class="course-card-body">

                        <h3>
                            ${escapeHTML(course.title)}
                        </h3>

                        <p>
                            ${escapeHTML(course.description)}
                        </p>


                        <div class="course-card-meta">

                            <span>
                                <i class="fa-solid fa-book-open"></i>
                                ${course.lessons.length} Lessons
                            </span>

                            <span>
                                ${course.progress}%
                            </span>

                        </div>


                        <div class="progress-track">

                            <div
                                class="progress-fill"
                                style="width:${course.progress}%"
                            ></div>

                        </div>


                        <button
                            class="btn btn-secondary btn-small course-open-btn"
                            data-course-id="${course.id}"
                            type="button"
                        >

                            ${
                                course.progress >= 100
                                    ? "Review Course"
                                    : course.progress > 0
                                        ? "Continue Course"
                                        : "Start Course"
                            }

                            <i class="fa-solid fa-arrow-right"></i>

                        </button>

                    </div>

                </article>

            `)
            .join("");


    $$(".course-open-btn").forEach(button => {

        button.addEventListener(
            "click",
            () => {

                openCourse(
                    button.dataset.courseId
                );

            }
        );

    });
}


function openCourse(courseId) {

    selectedCourseId = courseId;

    const course =
        state.courses.find(
            item => item.id === courseId
        );

    if (!course) return;

    selectedLessonId =
        course.lessons.find(
            lesson => !lesson.completed
        )?.id ||
        course.lessons[0]?.id ||
        null;


    showPage("lessons");

    renderLessons();

    if (selectedLessonId) {
        renderLessonContent(
            course,
            selectedLessonId
        );
    }
}


/* =========================================================
   LESSONS
========================================================= */

function bindLessonEvents() {

    const sidebar =
        $("#lessonSidebar");

    if (!sidebar) return;
}


function renderLessons() {

    const sidebar =
        $("#lessonSidebar");

    if (!sidebar) return;


    const course =
        state.courses.find(
            item => item.id === selectedCourseId
        ) || getCurrentCourse();


    if (!course) {

        sidebar.innerHTML = `
            <div class="empty-state compact">
                <p>No course selected.</p>
            </div>
        `;

        return;
    }


    selectedCourseId = course.id;


    sidebar.innerHTML = `

        <div class="lesson-course-header">

            <div class="lesson-course-icon ${course.color}">
                <i class="${course.icon}"></i>
            </div>

            <div>

                <strong>
                    ${escapeHTML(course.title)}
                </strong>

                <span>
                    ${course.progress}% complete
                </span>

            </div>

        </div>


        <div class="lesson-course-progress">

            <div class="progress-track">

                <div
                    class="progress-fill"
                    style="width:${course.progress}%"
                ></div>

            </div>

        </div>


        <div class="lesson-list">

            ${course.lessons
                .map((lesson, index) => `

                    <button
                        class="lesson-item ${
                            lesson.id === selectedLessonId
                                ? "active"
                                : ""
                        }"
                        data-lesson-id="${lesson.id}"
                        type="button"
                    >

                        <span class="lesson-number">

                            ${
                                lesson.completed
                                    ? `<i class="fa-solid fa-check"></i>`
                                    : index + 1
                            }

                        </span>

                        <span class="lesson-info">

                            <strong>
                                ${escapeHTML(lesson.title)}
                            </strong>

                            <small>
                                ${escapeHTML(lesson.duration)}
                            </small>

                        </span>

                    </button>

                `)
                .join("")}

        </div>
    `;


    $$(".lesson-item").forEach(button => {

        button.addEventListener(
            "click",
            () => {

                selectedLessonId =
                    button.dataset.lessonId;

                renderLessons();

                renderLessonContent(
                    course,
                    selectedLessonId
                );

            }
        );

    });
}


function renderLessonContent(course, lessonId) {

    const container =
        $("#lessonContent");

    if (!container) return;


    const lesson =
        course.lessons.find(
            item => item.id === lessonId
        );

    if (!lesson) return;


    const nextLesson =
        getNextLesson(course, lesson.id);


    container.innerHTML = `

        <div class="lesson-view">

            <div class="lesson-view-header">

                <span class="card-eyebrow">
                    ${escapeHTML(course.categoryLabel)}
                </span>

                <h2>
                    ${escapeHTML(lesson.title)}
                </h2>

                <div class="lesson-meta">

                    <span>
                        <i class="fa-regular fa-clock"></i>
                        ${escapeHTML(lesson.duration)}
                    </span>

                    ${
                        lesson.completed
                            ? `
                                <span class="lesson-completed">
                                    <i class="fa-solid fa-circle-check"></i>
                                    Completed
                                </span>
                            `
                            : ""
                    }

                </div>

            </div>


            <div class="lesson-body">

                <div class="lesson-content-text">

                    <p>
                        ${escapeHTML(lesson.content)}
                    </p>


                    <h3>
                        Key Takeaways
                    </h3>

                    <ul>

                        <li>
                            Understand the core concept.
                        </li>

                        <li>
                            Apply the concept to your business.
                        </li>

                        <li>
                            Measure the result and improve execution.
                        </li>

                    </ul>

                </div>


                <div class="lesson-action-panel">

                    <div class="lesson-action-icon">
                        <i class="fa-solid fa-lightbulb"></i>
                    </div>

                    <strong>
                        Practical Action
                    </strong>

                    <p>
                        Apply this lesson to one real business situation today.
                    </p>

                </div>

            </div>


            <div class="lesson-footer">

                <button
                    class="btn ${
                        lesson.completed
                            ? "btn-secondary"
                            : "btn-primary"
                    }"
                    id="completeLessonBtn"
                    type="button"
                >

                    <i class="fa-solid ${
                        lesson.completed
                            ? "fa-rotate-left"
                            : "fa-check"
                    }"></i>

                    ${
                        lesson.completed
                            ? "Mark as Incomplete"
                            : "Mark as Complete"
                    }

                </button>


                ${
                    nextLesson
                        ? `
                            <button
                                class="btn btn-secondary"
                                id="nextLessonBtn"
                                type="button"
                            >

                                Next Lesson

                                <i class="fa-solid fa-arrow-right"></i>

                            </button>
                        `
                        : `
                            <button
                                class="btn btn-primary"
                                id="finishCourseBtn"
                                type="button"
                            >

                                Finish Course

                                <i class="fa-solid fa-trophy"></i>

                            </button>
                        `
                }

            </div>

        </div>
    `;


    const completeBtn =
        $("#completeLessonBtn");

    if (completeBtn) {

        completeBtn.addEventListener(
            "click",
            () => {

                toggleLessonCompletion(
                    course.id,
                    lesson.id
                );

            }
        );
    }


    const nextBtn =
        $("#nextLessonBtn");

    if (nextBtn && nextLesson) {

        nextBtn.addEventListener(
            "click",
            () => {

                selectedLessonId =
                    nextLesson.id;

                renderLessons();

                renderLessonContent(
                    course,
                    selectedLessonId
                );

            }
        );
    }


    const finishBtn =
        $("#finishCourseBtn");

    if (finishBtn) {

        finishBtn.addEventListener(
            "click",
            () => {

                showToast(
                    "Course completed! Great work.",
                    "success"
                );

                addActivity(
                    "fa-solid fa-trophy",
                    "Course completed",
                    course.title
                );

                renderDashboard();

            }
        );
    }
}


function toggleLessonCompletion(
    courseId,
    lessonId
) {

    const course =
        state.courses.find(
            item => item.id === courseId
        );

    if (!course) return;


    const lesson =
        course.lessons.find(
            item => item.id === lessonId
        );

    if (!lesson) return;


    lesson.completed =
        !lesson.completed;


    updateCourseProgress();


    if (lesson.completed) {

        state.dailyGoal.completed =
            Math.min(
                state.dailyGoal.target,
                state.dailyGoal.completed + 1
            );

        addActivity(
            "fa-solid fa-check",
            "Lesson completed",
            lesson.title
        );

        showToast(
            "Lesson completed successfully.",
            "success"
        );

    } else {

        state.dailyGoal.completed =
            Math.max(
                0,
                state.dailyGoal.completed - 1
            );

        showToast(
            "Lesson marked as incomplete.",
            "info"
        );
    }


    saveState();

    renderLessons();

    renderLessonContent(
        course,
        lesson.id
    );

    renderDashboard();

    renderProgress();
}


function getNextLesson(course, lessonId) {

    const index =
        course.lessons.findIndex(
            lesson => lesson.id === lessonId
        );

    if (
        index === -1 ||
        index >= course.lessons.length - 1
    ) {
        return null;
    }

    return course.lessons[index + 1];
}


/* =========================================================
   COURSE PROGRESS
========================================================= */

function updateCourseProgress() {

    state.courses.forEach(course => {

        const total =
            course.lessons.length;

        const completed =
            course.lessons.filter(
                lesson => lesson.completed
            ).length;


        course.progress =
            total === 0
                ? 0
                : Math.round(
                    (completed / total) * 100
                );

    });

    saveState();
}


function getCompletedCourseLessons(course) {

    return course.lessons.filter(
        lesson => lesson.completed
    ).length;
}


function getTotalLessons() {

    return state.courses.reduce(
        (total, course) =>
            total + course.lessons.length,
        0
    );
}


function getCompletedLessons() {

    return state.courses.reduce(
        (total, course) =>
            total +
            getCompletedCourseLessons(course),
        0
    );
}


function getOverallProgress() {

    const total =
        getTotalLessons();

    const completed =
        getCompletedLessons();

    if (!total) return 0;

    return Math.round(
        (completed / total) * 100
    );
}


/* =========================================================
   PROGRESS PAGE
========================================================= */

function renderProgress() {

    const progress =
        getOverallProgress();

    const completed =
        getCompletedLessons();


    setText(
        "#progressOverall",
        progress
    );

    setWidth(
        "#progressOverallBar",
        progress
    );

    setText(
        "#progressCompletedLessons",
        completed
    );

    setText(
        "#progressStreak",
        state.streak
    );


    const container =
        $("#progressCourseList");

    if (!container) return;


    container.innerHTML =
        state.courses
            .map(course => `

                <div class="progress-course-item">

                    <div class="progress-course-info">

                        <div class="progress-course-icon ${course.color}">
                            <i class="${course.icon}"></i>
                        </div>

                        <div>

                            <strong>
                                ${escapeHTML(course.title)}
                            </strong>

                            <span>
                                ${getCompletedCourseLessons(course)}
                                / ${course.lessons.length}
                                lessons
                            </span>

                        </div>

                    </div>


                    <div class="progress-course-bar">

                        <div class="progress-track">

                            <div
                                class="progress-fill"
                                style="width:${course.progress}%"
                            ></div>

                        </div>

                    </div>


                    <strong class="progress-percent">
                        ${course.progress}%
                    </strong>

                </div>

            `)
            .join("");
}


/* =========================================================
   SALES MANAGER
========================================================= */

function bindSalesEvents() {

    const addTarget =
        $("#salesAddTargetBtn");

    if (addTarget) {

        addTarget.addEventListener(
            "click",
            () => {

                openModal(
                    "Add Sales Target",
                    `
                        <form id="targetForm" class="business-form">

                            <div class="form-group">

                                <label>
                                    Monthly Target
                                </label>

                                <input
                                    type="number"
                                    id="newSalesTarget"
                                    value="${state.sales.monthlyTarget}"
                                    min="0"
                                >

                            </div>

                            <button
                                class="btn btn-primary"
                                type="submit"
                            >
                                Save Target
                            </button>

                        </form>
                    `
                );


                const form =
                    $("#targetForm");

                if (form) {

                    form.addEventListener(
                        "submit",
                        event => {

                            event.preventDefault();

                            const value =
                                Number(
                                    $("#newSalesTarget").value
                                );

                            if (
                                !Number.isFinite(value) ||
                                value < 0
                            ) {
                                showToast(
                                    "Please enter a valid target.",
                                    "error"
                                );

                                return;
                            }

                            state.sales.monthlyTarget =
                                value;

                            saveState();

                            closeModal();

                            renderSales();

                            showToast(
                                "Sales target updated.",
                                "success"
                            );

                        }
                    );

                }

            }
        );
    }
}


function renderSales() {

    const target =
        Number(
            state.sales.monthlyTarget
        ) || 0;

    const actual =
        Number(
            state.sales.actualSales
        ) || 0;

    const achievement =
        target === 0
            ? 0
            : Math.round(
                (actual / target) * 100
            );

    const gap =
        Math.max(
            0,
            target - actual
        );


    setText(
        "#salesMonthlyTarget",
        formatCurrency(target)
    );

    setText(
        "#salesActual",
        formatCurrency(actual)
    );

    setText(
        "#salesAchievement",
        achievement
    );

    setText(
        "#salesGap",
        formatCurrency(gap)
    );


    const list =
        $("#salesPriorityList");

    if (!list) return;


    list.innerHTML =
        state.sales.priorities
            .map(
                (item, index) => `

                    <div class="priority-item">

                        <span class="priority-number">
                            ${index + 1}
                        </span>

                        <span>
                            ${escapeHTML(item)}
                        </span>

                        <i class="fa-solid fa-chevron-right"></i>

                    </div>

                `
            )
            .join("");
}


/* =========================================================
   PRICING CALCULATOR
========================================================= */

function bindCalculator() {

    const form =
        $("#pricingCalculatorForm");

    if (!form) return;


    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            calculatePrice();

        }
    );
}


function calculatePrice() {

    const cost =
        Number(
            $("#costPrice")?.value
        ) || 0;

    const margin =
        Number(
            $("#targetMargin")?.value
        ) || 0;

    const discount =
        Number(
            $("#discountPercent")?.value
        ) || 0;


    if (cost <= 0) {

        showToast(
            "Please enter a valid cost price.",
            "error"
        );

        return;
    }


    if (
        margin < 0 ||
        margin >= 100
    ) {

        showToast(
            "Target margin must be between 0 and 99.9%.",
            "error"
        );

        return;
    }


    if (
        discount < 0 ||
        discount >= 100
    ) {

        showToast(
            "Discount must be between 0 and 99.9%.",
            "error"
        );

        return;
    }


    const recommendedPrice =
        cost /
        (1 - margin / 100);


    const netPrice =
        recommendedPrice *
        (1 - discount / 100);


    const profit =
        netPrice - cost;


    const calculatedMargin =
        netPrice === 0
            ? 0
            : (profit / netPrice) * 100;


    setText(
        "#recommendedPrice",
        formatCurrency(recommendedPrice)
    );

    setText(
        "#calculatedProfit",
        formatCurrency(profit)
    );

    setText(
        "#calculatedMargin",
        `${calculatedMargin.toFixed(1)}%`
    );

    setText(
        "#netSellingPrice",
        formatCurrency(netPrice)
    );


    showToast(
        "Pricing calculation completed.",
        "success"
    );
}


/* =========================================================
   REPORTS
========================================================= */

function renderReports() {

    const container =
        $("#reportsGrid");

    if (!container) return;


    const progress =
        getOverallProgress();

    const completed =
        getCompletedLessons();

    const total =
        getTotalLessons();

    const achievement =
        state.sales.monthlyTarget === 0
            ? 0
            : Math.round(
                state.sales.actualSales /
                state.sales.monthlyTarget *
                100
            );


    container.innerHTML = `

        <div class="report-card">

            <div class="report-icon blue">
                <i class="fa-solid fa-graduation-cap"></i>
            </div>

            <span>
                Learning Progress
            </span>

            <strong>
                ${progress}%
            </strong>

            <small>
                ${completed} of ${total} lessons completed
            </small>

        </div>


        <div class="report-card">

            <div class="report-icon green">
                <i class="fa-solid fa-bullseye"></i>
            </div>

            <span>
                Sales Achievement
            </span>

            <strong>
                ${achievement}%
            </strong>

            <small>
                Current monthly performance
            </small>

        </div>


        <div class="report-card">

            <div class="report-icon orange">
                <i class="fa-solid fa-fire"></i>
            </div>

            <span>
                Learning Streak
            </span>

            <strong>
                ${state.streak} days
            </strong>

            <small>
                Maintain your consistency
            </small>

        </div>


        <div class="report-card">

            <div class="report-icon purple">
                <i class="fa-solid fa-book"></i>
            </div>

            <span>
                Courses
            </span>

            <strong>
                ${state.courses.length}
            </strong>

            <small>
                Available learning programs
            </small>

        </div>

    `;
}


const exportReportButton =
    $("#exportReportBtn");

if (exportReportButton) {

    exportReportButton.addEventListener(
        "click",
        exportReport
    );
}


function exportReport() {

    const report = {

        generatedAt:
            new Date().toISOString(),

        user:
            state.user,

        learning: {

            courses:
                state.courses.length,

            lessons:
                getTotalLessons(),

            completedLessons:
                getCompletedLessons(),

            progress:
                getOverallProgress(),

            streak:
                state.streak

        },

        sales:
            state.sales

    };


    const blob =
        new Blob(
            [
                JSON.stringify(
                    report,
                    null,
                    2
                )
            ],
            {
                type:
                    "application/json"
            }
        );


    const url =
        URL.createObjectURL(blob);

    const link =
        document.createElement("a");

    link.href = url;

    link.download =
        "aung-business-academy-report.json";

    document.body.appendChild(link);

    link.click();

    link.remove();

    URL.revokeObjectURL(url);


    showToast(
        "Report exported successfully.",
        "success"
    );
}


/* =========================================================
   AI COACH
========================================================= */

function bindAIEvents() {

    const form =
        $("#aiChatForm");

    if (form) {

        form.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                sendAIMessage();

            }
        );

    }


    const input =
        $("#aiChatInput");

    if (input) {

        input.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter" &&
                    !event.shiftKey
                ) {

                    event.preventDefault();

                    sendAIMessage();

                }

            }
        );

    }


    $$(".ai-prompt").forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const prompt =
                    button.dataset.prompt;

                if (input) {
                    input.value = prompt;
                }

                sendAIMessage();

            }
        );

    });


    $$(".ai-tool-card").forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const tool =
                    button.dataset.aiTool;

                openAITool(tool);

            }
        );

    });
}


function sendAIMessage() {

    const input =
        $("#aiChatInput");

    const messages =
        $("#aiChatMessages");

    if (!input || !messages) return;


    const text =
        input.value.trim();

    if (!text) return;


    addAIMessage(
        "user",
        text
    );

    input.value = "";


    setTimeout(() => {

        const response =
            generateAIResponse(text);

        addAIMessage(
            "assistant",
            response
        );

    }, 500);
}


function addAIMessage(
    role,
    text
) {

    const messages =
        $("#aiChatMessages");

    if (!messages) return;


    const isUser =
        role === "user";


    const wrapper =
        document.createElement("div");

    wrapper.className =
        `ai-message ${role}`;


    wrapper.innerHTML = `

        <div class="message-avatar">
            ${isUser ? "A" : "AI"}
        </div>

        <div class="message-bubble">

            ${formatAIText(text)}

        </div>

    `;


    messages.appendChild(wrapper);

    messages.scrollTop =
        messages.scrollHeight;
}


function generateAIResponse(question) {

    const q =
        question.toLowerCase();


    if (
        q.includes("sales") ||
        q.includes("target") ||
        q.includes("achievement")
    ) {

        return `
            <strong>Sales Recommendation</strong>

            <p>
                Start with a gap analysis. Compare target vs actual,
                identify the biggest territory or customer gaps,
                then create a focused action plan.
            </p>

            <ul>
                <li>Review target achievement by territory.</li>
                <li>Identify top 20% customers and growth opportunities.</li>
                <li>Coach underperforming salespeople.</li>
                <li>Set weekly execution KPIs.</li>
            </ul>
        `;
    }


    if (
        q.includes("coach") ||
        q.includes("underperform")
    ) {

        return `
            <strong>Coaching Framework</strong>

            <p>
                Use a coaching approach instead of immediately applying pressure.
            </p>

            <ol>
                <li>Understand the performance gap.</li>
                <li>Identify the root cause.</li>
                <li>Agree on a clear action plan.</li>
                <li>Set measurable expectations.</li>
                <li>Review progress regularly.</li>
            </ol>
        `;
    }


    if (
        q.includes("customer") ||
        q.includes("distribution")
    ) {

        return `
            <strong>Customer & Distribution Strategy</strong>

            <p>
                Segment customers by value and growth potential.
                Then prioritize coverage, availability and execution.
            </p>

            <ul>
                <li>Classify customers by sales value.</li>
                <li>Improve numeric distribution.</li>
                <li>Focus on availability and visibility.</li>
                <li>Build customer-specific action plans.</li>
            </ul>
        `;
    }


    if (
        q.includes("marketing")
    ) {

        return `
            <strong>Marketing Recommendation</strong>

            <p>
                Start with customer needs and a clear value proposition.
                Then choose the right channel and measure conversion.
            </p>
        `;
    }


    return `
        <strong>Business Coach</strong>

        <p>
            A practical approach is to define the objective,
            analyze the current gap, identify the root cause,
            create an action plan and measure the result.
        </p>

        <p>
            For a stronger recommendation, structure the problem around
            <strong>People, Numbers and Execution.</strong>
        </p>
    `;
}


function formatAIText(text) {

    if (
        text.includes("<strong>") ||
        text.includes("<p>")
    ) {
        return text;
    }

    return escapeHTML(text)
        .replace(
            /\n/g,
            "<br>"
        );
}


/* =========================================================
   AI TOOLS
========================================================= */

function openAITool(tool) {

    const titles = {

        "sales-plan":
            "Sales Plan Generator",

        "customer-plan":
            "Customer Plan",

        marketing:
            "Marketing Ideas",

        swot:
            "SWOT Analysis",

        interview:
            "Interview Coach",

        email:
            "Business Email Writer"

    };


    const prompts = {

        "sales-plan":
            "Create a practical monthly sales action plan.",

        "customer-plan":
            "Create a customer development plan.",

        marketing:
            "Generate practical marketing ideas.",

        swot:
            "Create a SWOT analysis for my business.",

        interview:
            "Help me prepare for a Sales Manager interview.",

        email:
            "Write a professional business email."

    };


    openModal(
        titles[tool] || "AI Tool",
        `

            <div class="ai-tool-modal">

                <p>
                    ${prompts[tool] || "Use AI to improve your business decisions."}
                </p>

                <textarea
                    id="aiToolInput"
                    class="ai-tool-textarea"
                    rows="5"
                    placeholder="Add your business context..."
                ></textarea>

                <button
                    class="btn btn-primary full-width"
                    id="runAIToolBtn"
                    type="button"
                >

                    <i class="fa-solid fa-wand-magic-sparkles"></i>

                    Generate with AI

                </button>

                <div
                    id="aiToolResult"
                    class="ai-tool-result"
                ></div>

            </div>

        `
    );


    const button =
        $("#runAIToolBtn");

    if (button) {

        button.addEventListener(
            "click",
            () => {

                const input =
                    $("#aiToolInput")?.value.trim();

                const result =
                    $("#aiToolResult");

                if (!result) return;


                result.innerHTML = `

                    <strong>
                        AI Business Recommendation
                    </strong>

                    <p>
                        Based on your request, start by defining the objective,
                        current situation, target result and key constraints.
                        Then create a measurable action plan with owners and deadlines.
                    </p>

                    <ul>

                        <li>
                            Define the business objective.
                        </li>

                        <li>
                            Analyze the current performance gap.
                        </li>

                        <li>
                            Identify the root cause.
                        </li>

                        <li>
                            Create 3–5 practical actions.
                        </li>

                        <li>
                            Review KPI performance weekly.
                        </li>

                    </ul>

                    ${
                        input
                            ? `<p><strong>Your context:</strong> ${escapeHTML(input)}</p>`
                            : ""
                    }

                `;

            }
        );
    }
}


/* =========================================================
   SETTINGS
========================================================= */

function bindSettingsEvents() {

    const form =
        $("#profileForm");

    if (form) {

        form.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                state.user.name =
                    $("#settingsName")?.value.trim() ||
                    "Aung Zar Ni Win";

                state.user.role =
                    $("#settingsRole")?.value.trim() ||
                    "Business Manager";

                state.user.email =
                    $("#settingsEmail")?.value.trim() ||
                    "";

                saveState();

                updateUserUI();

                showToast(
                    "Profile saved successfully.",
                    "success"
                );

            }
        );

    }


    bindSettingToggle(
        "#notificationSetting",
        "notifications"
    );

    bindSettingToggle(
        "#learningReminderSetting",
        "learningReminder"
    );

    bindSettingToggle(
        "#autoSaveSetting",
        "autoSave"
    );
}


function bindSettingToggle(
    selector,
    key
) {

    const element =
        $(selector);

    if (!element) return;


    element.checked =
        Boolean(
            state.settings[key]
        );


    element.addEventListener(
        "change",
        () => {

            state.settings[key] =
                element.checked;

            saveState();

            showToast(
                "Setting updated.",
                "success"
            );

        }
    );
}


function renderSettings() {

    updateUserUI();

    const notification =
        $("#notificationSetting");

    if (notification) {
        notification.checked =
            state.settings.notifications;
    }


    const reminder =
        $("#learningReminderSetting");

    if (reminder) {
        reminder.checked =
            state.settings.learningReminder;
    }


    const autoSave =
        $("#autoSaveSetting");

    if (autoSave) {
        autoSave.checked =
            state.settings.autoSave;
    }
}


/* =========================================================
   GLOBAL SEARCH
========================================================= */

function bindGlobalSearch() {

    const search =
        $("#globalSearch");

    if (!search) return;


    search.addEventListener(
        "input",
        () => {

            const query =
                search.value.trim().toLowerCase();

            if (!query) return;


            if (
                state.currentPage === "courses"
            ) {

                searchCourses(query);

            }

        }
    );


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "/" &&
                document.activeElement.tagName !== "INPUT" &&
                document.activeElement.tagName !== "TEXTAREA"
            ) {

                event.preventDefault();

                search.focus();

            }

            if (
                event.key === "Escape"
            ) {

                search.blur();

            }

        }
    );
}


function searchCourses(query) {

    const grid =
        $("#coursesGrid");

    if (!grid) return;


    const results =
        state.courses.filter(
            course => {

                return (
                    course.title
                        .toLowerCase()
                        .includes(query) ||

                    course.description
                        .toLowerCase()
                        .includes(query) ||

                    course.category
                        .toLowerCase()
                        .includes(query)
                );

            }
        );


    grid.innerHTML =
        results
            .map(course => `

                <article class="course-card">

                    <div class="course-card-cover ${course.color}">

                        <div class="course-card-icon">
                            <i class="${course.icon}"></i>
                        </div>

                        <span class="course-category-badge">
                            ${escapeHTML(course.categoryLabel)}
                        </span>

                    </div>


                    <div class="course-card-body">

                        <h3>
                            ${escapeHTML(course.title)}
                        </h3>

                        <p>
                            ${escapeHTML(course.description)}
                        </p>

                        <div class="progress-track">

                            <div
                                class="progress-fill"
                                style="width:${course.progress}%"
                            ></div>

                        </div>

                        <button
                            class="btn btn-secondary btn-small course-open-btn"
                            data-course-id="${course.id}"
                            type="button"
                        >

                            Open Course

                            <i class="fa-solid fa-arrow-right"></i>

                        </button>

                    </div>

                </article>

            `)
            .join("");


    $$(".course-open-btn").forEach(button => {

        button.addEventListener(
            "click",
            () => {

                openCourse(
                    button.dataset.courseId
                );

            }
        );

    });
}


/* =========================================================
   MOBILE SIDEBAR
========================================================= */

function bindMobileSidebar() {

    const button =
        $("#mobileMenuBtn");

    const overlay =
        $("#sidebarOverlay");

    const sidebar =
        $("#sidebar");


    if (button) {

        button.addEventListener(
            "click",
            () => {

                sidebar?.classList.add("open");

                overlay?.classList.add("show");

            }
        );

    }


    if (overlay) {

        overlay.addEventListener(
            "click",
            closeMobileSidebar
        );

    }
}


function closeMobileSidebar() {

    $("#sidebar")?.classList.remove(
        "open"
    );

    $("#sidebarOverlay")?.classList.remove(
        "show"
    );
}


/* =========================================================
   MODAL
========================================================= */

function bindModal() {

    const close =
        $("#modalCloseBtn");

    const overlay =
        $("#modalOverlay");


    if (close) {

        close.addEventListener(
            "click",
            closeModal
        );

    }


    if (overlay) {

        overlay.addEventListener(
            "click",
            event => {

                if (
                    event.target === overlay
                ) {

                    closeModal();

                }

            }
        );

    }


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeModal();

            }

        }
    );
}


function openModal(
    title,
    body,
    footer = ""
) {

    const overlay =
        $("#modalOverlay");

    const titleElement =
        $("#modalTitle");

    const bodyElement =
        $("#modalBody");

    const footerElement =
        $("#modalFooter");


    if (!overlay) return;


    if (titleElement) {
        titleElement.textContent =
            title;
    }

    if (bodyElement) {
        bodyElement.innerHTML =
            body;
    }

    if (footerElement) {
        footerElement.innerHTML =
            footer;
    }


    overlay.classList.add(
        "show"
    );

    document.body.classList.add(
        "modal-open"
    );
}


function closeModal() {

    const overlay =
        $("#modalOverlay");

    if (!overlay) return;


    overlay.classList.remove(
        "show"
    );

    document.body.classList.remove(
        "modal-open"
    );
}


/* =========================================================
   TOAST
========================================================= */

function showToast(
    message,
    type = "info"
) {

    const container =
        $("#toastContainer");

    if (!container) return;


    const toast =
        document.createElement("div");

    toast.className =
        `toast ${type}`;


    let icon =
        "fa-solid fa-circle-info";

    if (type === "success") {
        icon =
            "fa-solid fa-circle-check";
    }

    if (type === "error") {
        icon =
            "fa-solid fa-circle-exclamation";
    }


    toast.innerHTML = `

        <div class="toast-icon">
            <i class="${icon}"></i>
        </div>

        <div class="toast-message">
            ${escapeHTML(message)}
        </div>

        <button
            class="toast-close"
            type="button"
        >

            <i class="fa-solid fa-xmark"></i>

        </button>

    `;


    container.appendChild(toast);


    const close =
        toast.querySelector(
            ".toast-close"
        );

    if (close) {

        close.addEventListener(
            "click",
            () => toast.remove()
        );

    }


    setTimeout(
        () => {

            toast.classList.add(
                "hide"
            );

            setTimeout(
                () => toast.remove(),
                300
            );

        },
        3500
    );
}


/* =========================================================
   ACTIVITY
========================================================= */

function addActivity(
    icon,
    title,
    description
) {

    state.activity.unshift({

        icon,
        title,
        description,
        time: "Just now"

    });


    state.activity =
        state.activity.slice(
            0,
            20
        );


    saveState();

    renderRecentActivity();
}


/* =========================================================
   HELPERS
========================================================= */

function setText(
    selector,
    value
) {

    const element =
        $(selector);

    if (element) {
        element.textContent =
            value;
    }
}


function setWidth(
    selector,
    value
) {

    const element =
        $(selector);

    if (element) {

        element.style.width =
            `${Math.max(
                0,
                Math.min(
                    100,
                    Number(value) || 0
                )
            )}%`;

    }
}


function formatCurrency(value) {

    const number =
        Number(value) || 0;

    return (
        "Ks " +
        Math.round(number)
            .toLocaleString("en-US")
    );
}


function escapeHTML(value) {

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


/* =========================================================
   PROFILE MENU
========================================================= */

const profileMenu =
    $("#profileMenuBtn");

if (profileMenu) {

    profileMenu.addEventListener(
        "click",
        () => {

            openModal(
                "Profile",
                `

                    <div class="profile-modal">

                        <div class="profile-modal-avatar">
                            A
                        </div>

                        <h3>
                            ${escapeHTML(state.user.name)}
                        </h3>

                        <p>
                            ${escapeHTML(state.user.role)}
                        </p>

                        <button
                            class="btn btn-primary full-width"
                            id="profileSettingsBtn"
                            type="button"
                        >

                            Open Settings

                        </button>

                    </div>

                `
            );


            const button =
                $("#profileSettingsBtn");

            if (button) {

                button.addEventListener(
                    "click",
                    () => {

                        closeModal();

                        showPage("settings");

                    }
                );

            }

        }
    );
}


/* =========================================================
   TOPBAR USER
========================================================= */

const topbarUser =
    $("#topbarUserBtn");

if (topbarUser) {

    topbarUser.addEventListener(
        "click",
        () => {

            openModal(
                "Account",
                `

                    <div class="profile-modal">

                        <div class="profile-modal-avatar">
                            A
                        </div>

                        <h3>
                            ${escapeHTML(state.user.name)}
                        </h3>

                        <p>
                            ${escapeHTML(state.user.role)}
                        </p>

                    </div>

                `
            );

        }
    );
}


/* =========================================================
   NOTIFICATION
========================================================= */

const notificationButton =
    $("#notificationBtn");

if (notificationButton) {

    notificationButton.addEventListener(
        "click",
        () => {

            openModal(
                "Notifications",
                `

                    <div class="notification-modal">

                        <div class="notification-row">

                            <div class="notification-icon">
                                <i class="fa-solid fa-graduation-cap"></i>
                            </div>

                            <div>

                                <strong>
                                    Keep learning
                                </strong>

                                <p>
                                    Complete one lesson today to maintain your momentum.
                                </p>

                            </div>

                        </div>


                        <div class="notification-row">

                            <div class="notification-icon">
                                <i class="fa-solid fa-chart-line"></i>
                            </div>

                            <div>

                                <strong>
                                    Business progress
                                </strong>

                                <p>
                                    Review your sales performance and action priorities.
                                </p>

                            </div>

                        </div>

                    </div>

                `
            );


            const dot =
                $("#notificationDot");

            if (dot) {
                dot.style.display =
                    "none";
            }

        }
    );
}


/* =========================================================
   REFRESH RECOMMENDATIONS
========================================================= */

const refreshRecommendations =
    $("#refreshRecommendationsBtn");

if (refreshRecommendations) {

    refreshRecommendations.addEventListener(
        "click",
        () => {

            renderRecommendations();

            showToast(
                "Recommendations refreshed.",
                "success"
            );

        }
    );
}


/* =========================================================
   QUICK ACTION
========================================================= */

const quickAction =
    $("#quickActionBtn");

if (quickAction) {

    quickAction.addEventListener(
        "click",
        () => {

            openModal(
                "Quick Action",
                `

                    <div class="quick-action-modal">

                        <button
                            class="quick-modal-action"
                            data-action-page="courses"
                            type="button"
                        >

                            <i class="fa-solid fa-graduation-cap"></i>

                            <span>
                                Start Learning
                            </span>

                        </button>


                        <button
                            class="quick-modal-action"
                            data-action-page="sales"
                            type="button"
                        >

                            <i class="fa-solid fa-bullseye"></i>

                            <span>
                                Sales Manager
                            </span>

                        </button>


                        <button
                            class="quick-modal-action"
                            data-action-page="calculator"
                            type="button"
                        >

                            <i class="fa-solid fa-calculator"></i>

                            <span>
                                Pricing Calculator
                            </span>

                        </button>


                        <button
                            class="quick-modal-action"
                            data-action-page="ai-coach"
                            type="button"
                        >

                            <i class="fa-solid fa-robot"></i>

                            <span>
                                Ask AI Coach
                            </span>

                        </button>

                    </div>

                `
            );


            $$(".quick-modal-action").forEach(
                button => {

                    button.addEventListener(
                        "click",
                        () => {

                            closeModal();

                            showPage(
                                button.dataset.actionPage
                            );

                        }
                    );

                }
            );

        }
    );
}


/* =========================================================
   ACTIVITY BUTTON
========================================================= */

const activityButton =
    $("#viewActivityBtn");

if (activityButton) {

    activityButton.addEventListener(
        "click",
        () => {

            openModal(
                "Recent Activity",
                `

                    <div class="activity-list">

                        ${
                            state.activity
                                .map(
                                    item => `

                                        <div class="activity-item">

                                            <div class="activity-icon">
                                                <i class="${item.icon}"></i>
                                            </div>

                                            <div class="activity-content">

                                                <strong>
                                                    ${escapeHTML(item.title)}
                                                </strong>

                                                <span>
                                                    ${escapeHTML(item.description)}
                                                </span>

                                            </div>

                                            <time>
                                                ${escapeHTML(item.time)}
                                            </time>

                                        </div>

                                    `
                                )
                                .join("")
                        }

                    </div>

                `
            );

        }
    );
}


/* =========================================================
   GLOBAL WINDOW API
========================================================= */

window.AungAcademy = {

    state,

    showPage,

    openCourse,

    calculatePrice,

    renderDashboard,

    renderCourses,

    renderProgress,

    renderSales,

    renderReports,

    resetData() {

        localStorage.removeItem(
            STORAGE_KEY
        );

        location.reload();

    }

};


/* =========================================================
   FINAL INITIAL DATA
========================================================= */

updateCourseProgress();
