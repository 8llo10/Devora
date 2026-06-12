const topics = [
    {
        title: "Arrays",
        desc: "تعلمي كيف تبحثين، ترتبين، وتحسبين داخل القوائم.",
        level: "Beginner",
        progress: 20,
    },
    {
        title: "Strings",
        desc: "عكس كلمة، Palindrome، وعدّ الحروف والتكرارات.",
        level: "Beginner",
        progress: 10,
    },
    {
        title: "Loops",
        desc: "أساس التفكير البرمجي وتكرار الحلول.",
        level: "Beginner",
        progress: 35,
    },
    {
        title: "Hash Map",
        desc: "أقوى طريقة لحل أسئلة التكرار والبحث بسرعة.",
        level: "Intermediate",
        progress: 0,
    },
    {
        title: "Two Pointers",
        desc: "تقنية مهمة جدًا في المقابلات.",
        level: "Intermediate",
        progress: 0,
    },
    {
        title: "Big O",
        desc: "تعرفين هل حلك سريع أو بطيء.",
        level: "Core",
        progress: 5,
    },
];

function ProblemSolving() {
    return (
        <section className="problem-page">
            <div className="problem-hero glass">
                <div>
                    <p className="eyebrow">Problem Solving + Algorithms</p>
                    <h1>
                        من الصفر إلى <span>حل أسئلة المقابلات</span>
                    </h1>
                    <p>
                        هذا المسار يبني تفكيرك البرمجي خطوة خطوة: نفهم السؤال، نحلله،
                        نكتب الحل، وبعدها نعرف هل الحل ممتاز أو يحتاج تحسين.
                    </p>

                    <div className="hero-actions">
                        <button>ابدأ المسار</button>
                        <button className="outline">اختبر مستواك</button>
                    </div>
                </div>

                <div className="challenge-card">
                    <span className="level">سهل</span>
                    <h3>تحدي اليوم</h3>
                    <p>اكتبي دالة ترجع أكبر رقم في Array.</p>

                    <pre>{`function findMax(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}`}</pre>
                </div>
            </div>

            <h2 className="section-heading">خطة التأسيس</h2>

            <div className="topics-grid">
                {topics.map((topic) => (
                    <div className="topic-card glass" key={topic.title}>
                        <div className="topic-top">
                            <h3>{topic.title}</h3>
                            <span>{topic.level}</span>
                        </div>

                        <p>{topic.desc}</p>

                        <div className="progress-line">
                            <div style={{ width: `${topic.progress}%` }} />
                        </div>

                        <small>{topic.progress}% مكتمل</small>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProblemSolving;