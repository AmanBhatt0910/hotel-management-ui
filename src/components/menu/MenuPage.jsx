'use client';

import { motion } from 'framer-motion';
import MenuHeader from './MenuHeader';
import MenuCategory from './MenuCategory';

export default function MenuPage({ page, restaurant, index = 0 }) {
  // Determine layout: if 2+ categories, try to lay them out side by side
  const categories = page.categories;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="menu-page"
    >
      {/* Corner decorations */}
      <div className="menu-corner menu-corner--tl">
        <div className="vine vine-h" />
        <div className="vine vine-v" />
      </div>
      <div className="menu-corner menu-corner--tr">
        <div className="vine vine-h" />
        <div className="vine vine-v" />
      </div>
      <div className="menu-corner menu-corner--bl">
        <div className="vine vine-h" />
        <div className="vine vine-v" />
      </div>
      <div className="menu-corner menu-corner--br">
        <div className="vine vine-h" />
        <div className="vine vine-v" />
      </div>

      {/* Header */}
      <MenuHeader restaurant={restaurant} />

      {/* Categories */}
      {categories.length >= 2 ? (
        <div className="menu-page__grid menu-page__grid--2cols">
          <div className="menu-page__left">
            <MenuCategory category={categories[0]} />
          </div>
          <div className="menu-page__right">
            {categories.slice(1).map((cat, i) => (
              <MenuCategory key={i} category={cat} />
            ))}
          </div>
        </div>
      ) : (
        <div className="menu-page__grid menu-page__grid--1col">
          {categories.map((cat, i) => (
            <MenuCategory key={i} category={cat} />
          ))}
        </div>
      )}
    </motion.div>
  );
}
