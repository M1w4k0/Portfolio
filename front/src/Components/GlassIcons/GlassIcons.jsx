import './GlassIcons.css';

const gradientMapping = {
  blue: 'linear-gradient(hsla(240, 37%, 38%, 1.00), hsla(249, 60%, 83%, 1.00))',
  purple: 'linear-gradient(hsla(83, 6%, 42%, 0.78), hsla(90, 2%, 60%, 1.00))'
};

const GlassIcons = ({ items, className }) => {
  const getBackgroundStyle = color => {
    if (gradientMapping[color]) {
      return { background: gradientMapping[color] };
    }
    return { background: color };
  };

  // ---- Fonction qui déclenche le téléchargement ----
  const handleDownload = (file) => {
    if (!file) return;

    const link = document.createElement('a');
    link.href = file;
    link.download = file.split('/').pop(); // nom déduit du chemin
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
  <div className={`icon-btns ${className || ''}`}>
    {items.map((item, index) => (
      <div key={index} className="icon-btn-wrapper">
        <p className="icon-language">{item.language}</p> {/* ⬅️ NOUVEAU */}
        
        <button
          className={`icon-btn ${item.customClass || ''}`}
          aria-label={item.label}
          type="button"
          onClick={() => handleDownload(item.file)}
        >
          <span className="icon-btn__back" style={getBackgroundStyle(item.color)}></span>
          <span className="icon-btn__front">
            <span className="icon-btn__icon" aria-hidden="true">
              {item.icon}
            </span>
          </span>
          <span className="icon-btn__label">{item.label}</span>
        </button>
      </div>
    ))}
  </div>
);

};

export default GlassIcons;
