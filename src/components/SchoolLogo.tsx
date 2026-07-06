import React from 'react';

interface SchoolLogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export default function SchoolLogo({ size = 80, className = "", showText = false }: SchoolLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        className="drop-shadow-md select-none transition-transform duration-300 hover:scale-105"
        aria-label="Sudanese Community School Al-Ajami Logo"
      >
        <defs>
          {/* Path for Top Arabic Text - Clockwise Arc */}
          <path
            id="top-text-path"
            d="M 32 100 A 68 68 0 0 1 168 100"
            fill="none"
          />
          {/* Path for Bottom English Text - Counter-Clockwise Arc (to make it upright) */}
          <path
            id="bottom-text-path"
            d="M 168 100 A 68 68 0 0 1 32 100"
            fill="none"
          />
          {/* Linear Gradient for Gold Elements */}
          <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DFBA6B" />
            <stop offset="50%" stopColor="#F5E4B3" />
            <stop offset="100%" stopColor="#C59E4E" />
          </linearGradient>
          {/* Linear Gradient for Book Shading */}
          <linearGradient id="book-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#555555" />
            <stop offset="100%" stopColor="#222222" />
          </linearGradient>
        </defs>

        {/* Outer White Background */}
        <circle cx="100" cy="100" r="99" fill="#FFFFFF" stroke="#000000" strokeWidth="1" />

        {/* Thick Blue Ring */}
        <circle cx="100" cy="100" r="96" fill="#1E40AF" stroke="#000000" strokeWidth="1.5" />

        {/* Inner White Circle with Double Border */}
        <circle cx="100" cy="100" r="60" fill="#FFFFFF" stroke="#000000" strokeWidth="1" />
        <circle cx="100" cy="100" r="58" fill="none" stroke="#000000" strokeWidth="1.5" />

        {/* Gold Dots (Left & Right Dividers) */}
        <circle cx="23" cy="100" r="5.5" fill="url(#gold-grad)" stroke="#000000" strokeWidth="0.5" />
        <circle cx="177" cy="100" r="5.5" fill="url(#gold-grad)" stroke="#000000" strokeWidth="0.5" />

        {/* Top Text - Arabic: مدارس الجالية السودانية بالعجمي */}
        {/* Adjusted spacing to fit beautifully in the arc */}
        <text fill="#FFFFFF" fontSize="13.5" fontWeight="bold" fontFamily="system-ui, sans-serif" letterSpacing="0.2">
          <textPath href="#top-text-path" startOffset="50%" textAnchor="middle">
            مدارس الجالية السودانية بالعجمي
          </textPath>
        </text>

        {/* Bottom Text - English: SUDANESE COMMUNITY AL-AJAMI */}
        <text fill="#FFFFFF" fontSize="11" fontWeight="800" fontFamily="'Impact', 'Arial Black', sans-serif" letterSpacing="1.2">
          <textPath href="#bottom-text-path" startOffset="50%" textAnchor="middle">
            SUDANESE COMMUNITY AL-AJAMI
          </textPath>
        </text>

        {/* Core Emblems inside Inner Circle */}
        <g transform="translate(100, 100) scale(0.9) translate(-100, -100)">
          {/* OPEN BOOK (Left Side) */}
          <g transform="translate(2, 0)">
            {/* Left Page Outer Backing */}
            <path
              d="M 90,135 C 75,120 62,120 48,124 L 54,72 C 68,68 81,68 90,78 Z"
              fill="#E5E7EB"
              stroke="#4B5563"
              strokeWidth="0.5"
            />
            {/* Right Page Outer Backing (behind student, barely visible but added for symmetry) */}
            <path
              d="M 110,135 C 125,120 138,120 152,124 L 146,72 C 132,68 119,68 110,78 Z"
              fill="#F3F4F6"
              stroke="#D1D5DB"
              strokeWidth="0.5"
              opacity="0.1"
            />
            
            {/* Front Left Pages (Layered) */}
            <path
              d="M 90,132 C 77,118 64,118 51,121 L 56,69 C 69,66 82,66 90,75 Z"
              fill="url(#book-grad)"
              stroke="#111111"
              strokeWidth="1.2"
            />
            <path
              d="M 90,129 C 79,116 66,116 54,118 L 58,66 C 70,64 83,64 90,72 Z"
              fill="#FFFFFF"
              stroke="#333333"
              strokeWidth="0.8"
            />
            <path
              d="M 90,126 C 81,114 68,114 57,115 L 61,63 C 72,62 84,62 90,69 Z"
              fill="url(#book-grad)"
              stroke="#111111"
              strokeWidth="1"
            />

            {/* Book Spine Center Highlight */}
            <line x1="90" y1="75" x2="90" y2="132" stroke="#4B5563" strokeWidth="1" />
          </g>

          {/* GRADUATING STUDENT (Right Side) */}
          <g transform="translate(-1, 0)">
            {/* Student's Body Silhouette (Curved elegant shape reaching up) */}
            <path
              d="M 105,135 C 114,128 126,118 132,100 C 138,82 130,76 128,75 C 129,79 128,95 118,110 C 111,120 106,128 105,135 Z"
              fill="url(#gold-grad)"
              stroke="#8B6B22"
              strokeWidth="0.5"
            />
            <path
              d="M 105,135 C 115,132 125,123 133,108 C 131,114 122,126 105,135 Z"
              fill="#8B6B22"
              opacity="0.2"
            />
            
            {/* Student's Head / Graduation Cap */}
            {/* Head Circle */}
            <circle cx="120" cy="85" r="8" fill="url(#gold-grad)" stroke="#8B6B22" strokeWidth="0.5" />
            
            {/* Mortarboard Hat */}
            {/* Cap Diamond */}
            <polygon
              points="108,74 120,68 132,74 120,80"
              fill="url(#gold-grad)"
              stroke="#8B6B22"
              strokeWidth="0.5"
            />
            {/* Cap Base */}
            <path
              d="M 114,76 L 114,79 C 114,81 126,81 126,79 L 126,76"
              fill="url(#gold-grad)"
              stroke="#8B6B22"
              strokeWidth="0.5"
            />
            {/* Tassel */}
            <path
              d="M 120,74 L 110,79 L 109,83"
              fill="none"
              stroke="#8B6B22"
              strokeWidth="0.5"
            />
          </g>

          {/* THE GOLD STAR (Reaching Towards) */}
          <polygon
            points="120,50 123,56 129,57 125,62 126,68 120,65 114,68 115,62 111,57 117,56"
            fill="url(#gold-grad)"
            stroke="#8B6B22"
            strokeWidth="0.5"
          />
        </g>
      </svg>

      {showText && (
        <div className="flex flex-col select-none">
          <h1 className="text-blue-900 font-extrabold text-base md:text-lg leading-tight tracking-tight">
            Sudanese Community School
          </h1>
          <span className="text-amber-600 text-xs md:text-sm font-semibold tracking-wider font-mono">
            AL-AJAMI, ALEXANDRIA • مدارس الجالية السودانية
          </span>
        </div>
      )}
    </div>
  );
}
