'use client';

import {
  Coffee, Egg, Sandwich, Salad, Flame, Soup,
  Leaf, Mountain, Wheat, CircleDot, UtensilsCrossed,
  CupSoda, IceCreamCone
} from 'lucide-react';

const iconMap = {
  Coffee, Egg, Sandwich, Salad, Flame, Soup,
  Leaf, Mountain, Wheat, CircleDot, UtensilsCrossed,
  CupSoda, IceCreamCone
};

function CategoryIcon({ name, size = 20, color = '#f5ebd5' }) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon size={size} color={color} strokeWidth={1.8} />;
}

export default function MenuCategory({ category }) {
  const isMultiCol = category.columns === 2;
  const isDetailed = category.columns === 1 && category.items.some(item => item.subtitle && item.subtitle.length > 20);
  const isFullWidth = category.name === 'MAIN COURSE' || category.name === 'THALI';

  return (
    <div className={`menu-category-card ${isFullWidth ? 'menu-category-card--full' : ''}`}>
      {/* Header */}
      <div className="menu-category-card__header">
        <div className="menu-category-card__icon-wrap">
          <CategoryIcon name={category.icon} />
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
