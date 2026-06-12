import mascot from "../assets/mascot.png";

const navItems = [
  { label: "الرئيسية", href: "#home", icon: "⌂" },
  { label: "اختبار المستوى", href: "#assessment", icon: "✓" },
  { label: "المسارات", href: "#paths", icon: "◈" },
  { label: "تقدمي", href: "#progress", icon: "↗" },
];

function Navbar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">D</div>
        <div>
          <h2>Devora</h2>
          <p>تعلم · تدرب · أتقن</p>
        </div>
      </div>

      <nav className="nav-list">
        {navItems.map((item, index) => (
          <a className={index === 0 ? "nav-item active" : "nav-item"} href={item.href} key={item.label}>
            <span>{item.icon}</span>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="mascot-card">
        <img src={mascot} alt="Devora mascot" />
        <strong>جاهزة نبدأ؟</strong>
        <small>خطوة صغيرة اليوم تصنع فرق كبير</small>
      </div>
    </aside>
  );
}

export default Navbar;
