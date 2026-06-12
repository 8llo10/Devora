function Home() {
    return (
        <section className="page hero">
            <div>
                <p className="tag">DEVORA</p>
                <h1>
                    أهلاً بك في رحلتك <span>للاحتراف</span>
                </h1>
                <p>
                    تعلم، اختبر، تدرب، وطور مهاراتك البرمجية بخطة ذكية تناسب مستواك.
                </p>

                <div className="actions">
                    <button>ابدأ اختبار المستوى</button>
                    <button className="outline">استكشف المسارات</button>
                </div>
            </div>

            <div className="hero-card">
                <div className="code-icon">&lt;/&gt;</div>
            </div>
        </section>
    );
}

export default Home;