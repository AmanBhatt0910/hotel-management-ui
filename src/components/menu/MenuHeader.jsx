'use client';

import Image from 'next/image';
import { FiPhone, FiGlobe, FiMapPin } from 'react-icons/fi';

export default function MenuHeader({ restaurant }) {
  return (
    <div className="menu-header">
      {/* Hotel Logo */}
      <div className="menu-header__logo">
        <Image
          src="/home-logo.png"
          alt="Parth Hotel and Restaurant"
          width={280}
          height={180}
          className="menu-header__logo-img"
        />
      </div>

      <p className="menu-header__tagline">{restaurant.tagline}</p>

      <div className="menu-header__contact">
        <span className="menu-header__contact-item">
          <span className="menu-header__contact-icon">
            <FiPhone size={10} />
          </span>
          {restaurant.phone}
        </span>
        <span className="menu-header__divider" />
        <span className="menu-header__contact-item">
          <span className="menu-header__contact-icon">
            <FiGlobe size={10} />
          </span>
          {restaurant.website}
        </span>
      </div>
      <div className="menu-header__contact" style={{ marginTop: 8 }}>
        <span className="menu-header__contact-item">
          <span className="menu-header__contact-icon">
            <FiMapPin size={10} />
          </span>
          {restaurant.address}
        </span>
      </div>
    </div>
  );
}
