type SkillCardProps = {
  icon: string;
  title: string;
  description: string;
  progress: number;
};

function SkillCard({ icon, title, description, progress }: SkillCardProps) {
  return (
    <article className="glass skill-card">
      <div className="skill-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="progress-line">
        <div style={{ width: `${progress}%` }} />
      </div>
      <small>{progress}% مكتمل</small>
    </article>
  );
}

export default SkillCard;
