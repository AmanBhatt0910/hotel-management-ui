'use client';

export default function MenuCategory({ category }) {
  const isMultiCol = category.columns === 2;
  const isDetailed = category.columns === 1 && category.items.some(item => item.subtitle && item.subtitle.length > 20);
  const isFullWidth = category.name === 'MAIN COURSE' || category.name === 'THALI';

  return (
    <div className={`menu-category-card ${isFullWidth ? 'menu-category-card--full' : ''}`}>
      {/* Header */}
      <div className="menu-category-card__header">
        <div className="menu-category-card__icon-wrap">
          {category.icon}
        </div>
        <span className="menu-category-card__title">{category.name}</span>
        <span className="menu-category-card__count">{category.items.length} items</span>
      </div>
      <div className="menu-category-card__divider" />

      {/* Items */}
      {isDetailed ? (
        <div className="menu-items-list">
          {category.items.map((item, index) => (
            <div key={index} className="menu-item menu-item--detailed">
              <div className="menu-item__top-row">
                <span className="menu-item__name">{item.name}</span>
                <span className="menu-item__dots" />
                <span className="menu-item__price">{item.price}</span>
              </div>
              {item.subtitle && (
                <span className="menu-item__description">{item.subtitle}</span>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className={`menu-items-list ${isMultiCol ? 'menu-items-list--cols-2' : ''}`}>
          {category.items.map((item, index) => (
            <div key={index} className="menu-item">
              <span className="menu-item__name">
                {item.name}
                {item.subtitle && (
                  <span className="menu-item__subtitle">({item.subtitle})</span>
                )}
              </span>
              <span className="menu-item__dots" />
              <span className="menu-item__price">{item.price}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
