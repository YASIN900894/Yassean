// بيانات القصص
const categories = {
    hackers: [
        { title: "قصة هكر 1", content: "تفاصيل قصة الهكر 1..." },
        { title: "قصة هكر 2", content: "تفاصيل قصة الهكر 2..." },
        { title: "قصة هكر 3", content: "تفاصيل قصة الهكر 3..." },
        // أضف المزيد من القصص هنا
    ],
    crimes: [
        { title: "قصة جريمة 1", content: "تفاصيل جريمة 1..." },
        { title: "قصة جريمة 2", content: "تفاصيل جريمة 2..." },
        { title: "قصة جريمة 3", content: "تفاصيل جريمة 3..." },
        // أضف المزيد من القصص هنا
    ],
    mysteries: [
        { title: "قصة غامضة 1", content: "تفاصيل القصة الغامضة 1..." },
        { title: "قصة غامضة 2", content: "تفاصيل القصة الغامضة 2..." },
        { title: "قصة غامضة 3", content: "تفاصيل القصة الغامضة 3..." },
        // أضف المزيد من القصص هنا
    ]
};

// وظيفة لعرض القصص بناءً على الفئة المختارة
function loadCategory(category) {
    const container = document.getElementById('latest-stories');
    container.innerHTML = ''; // مسح المحتوى الحالي

    categories[category].forEach(story => {
        const storyCard = document.createElement('div');
        storyCard.classList.add('story-card');

        const title = document.createElement('h3');
        title.textContent = story.title;
        storyCard.appendChild(title);

        const content = document.createElement('p');
        content.textContent = story.content;
        storyCard.appendChild(content);

        container.appendChild(storyCard);
    });
}

// إضافة أحداث التنقل لكل الروابط في القائمة
document.getElementById('home-link').addEventListener('click', () => loadCategory('hackers'));
document.getElementById('hackers-link').addEventListener('click', () => loadCategory('hackers'));
document.getElementById('crimes-link').addEventListener('click', () => loadCategory('crimes'));
document.getElementById('mysteries-link').addEventListener('click', () => loadCategory('mysteries'));

// تحميل القصص الافتراضية عند تحميل الصفحة
window.onload = () => loadCategory('hackers');
