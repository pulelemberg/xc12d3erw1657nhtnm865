'use client'

import Image from 'next/image'

interface HomeScreenProps {
  onSTBClick: () => void
}

export default function HomeScreen({ onSTBClick }: HomeScreenProps) {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden" style={{ background: 'linear-gradient(180deg, #1a1aff 0%, #0a0aaa 35%, #06065a 65%, #080820 100%)' }}>
      {/* Top bar */}
      <div className="flex items-center gap-3 px-4 pt-12 pb-4">
        {/* Avatar */}
        <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/20">
          <div className="w-full h-full bg-amber-700 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
          </div>
          {/* notification dot */}
          <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border border-white" />
        </div>

        {/* Search bar */}
        <div className="flex-1 flex items-center gap-2 bg-white/15 rounded-full px-4 py-2.5">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <span className="text-white/70 text-sm font-medium">Search</span>
        </div>

        {/* Analytics icon */}
        <button className="w-10 h-10 rounded-full bg-blue-600/60 flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <rect x="2" y="12" width="4" height="10" rx="1" />
            <rect x="9" y="7" width="4" height="15" rx="1" />
            <rect x="16" y="3" width="4" height="19" rx="1" />
          </svg>
        </button>

        {/* Card icon */}
        <button className="w-10 h-10 rounded-full bg-blue-600/60 flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
            <rect x="2" y="5" width="20" height="14" rx="2" />
            <path d="M2 10h20" />
          </svg>
        </button>
      </div>

      {/* Balance section */}
      <div className="flex flex-col items-center px-4 pt-6 pb-4">
        <p className="text-white/70 text-sm font-medium mb-1">Personal · RON</p>
        <div className="flex items-baseline gap-0">
          <span className="text-white font-bold" style={{ fontSize: '52px', lineHeight: 1.1 }}>113,</span>
          <span className="text-white font-bold" style={{ fontSize: '36px', lineHeight: 1.1 }}>33 lei</span>
        </div>

        {/* Accounts button */}
        <button className="mt-4 px-6 py-2.5 rounded-full bg-white/15 text-white text-sm font-medium">
          Accounts
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex items-center justify-center gap-1.5 py-3">
        <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
        <div className="w-2 h-2 rounded-full bg-white" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
      </div>

      {/* Action buttons */}
      <div className="flex items-start justify-around px-6 py-4">
        {[
          {
            icon: (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
            ),
            label: 'Add money',
          },
          {
            icon: (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 16l-4-4 4-4" />
                <path d="M3 12h11" />
                <path d="M17 8l4 4-4 4" />
                <path d="M21 12H10" />
              </svg>
            ),
            label: 'Move',
          },
          {
            icon: (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                <path d="M3 3h18v4H3z" />
                <path d="M3 7v14h18V7" />
                <path d="M9 11h6" />
                <path d="M9 15h4" />
              </svg>
            ),
            label: 'Details',
          },
          {
            icon: (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <circle cx="5" cy="12" r="2" />
                <circle cx="12" cy="12" r="2" />
                <circle cx="19" cy="12" r="2" />
              </svg>
            ),
            label: 'More',
          },
        ].map((action) => (
          <div key={action.label} className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full bg-white/15 flex items-center justify-center">
              {action.icon}
            </div>
            <span className="text-white text-xs font-medium">{action.label}</span>
          </div>
        ))}
      </div>

      {/* Transactions card */}
      <div className="mx-3 flex-1 rounded-2xl overflow-hidden" style={{ background: '#12123a', marginBottom: '10px' }}>
        {/* Vending Master */}
        <button
          onClick={onSTBClick}
          className="w-full flex items-center gap-3 px-4 py-4 border-b border-white/5 hover:bg-white/5 transition-colors active:bg-white/10"
        >
          <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0 bg-white">
            <Image src="/stb-logo.jpg" alt="STB Bucuresti" width={44} height={44} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0 text-left">
            <p className="text-white font-semibold text-sm">STB Bucuresti</p>
            <div className="flex items-center gap-1.5">
              <p className="text-white/50 text-xs">5 minutes ago</p>
              <span className="text-white/40 text-xs"></span>
            </div>
          </div>
          <span className="text-white font-semibold text-sm">-3 lei</span>
        </button>

        {/* STB Bucuresti - clickable */}
        <button
          onClick={onSTBClick}
          className="w-full flex items-center gap-3 px-4 py-4 border-b border-white/5 hover:bg-white/5 transition-colors active:bg-white/10"
        >
          <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
            <Image src="/vending-logo.jpg" alt="Vending Master" width={44} height={44} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0 text-left">
            <p className="text-white font-semibold text-sm">Vending Master</p>
            <div className="flex items-center gap-1.5">
              <p className="text-white/50 text-xs">40 minutes ago</p>
              <span className="text-white/40 text-xs"></span>
            </div>
          </div>
          <span className="text-white font-semibold text-sm">-12 lei</span>
        </button>

        {/* Razvan */}
        <div className="flex items-center gap-3 px-4 py-4">
          <div className="relative w-11 h-11 flex-shrink-0">
            <div className="w-11 h-11 rounded-full bg-blue-400 flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-gray-700 border border-[#12123a] flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold text-sm">Andreea</p>
            <p className="text-white/50 text-xs">50 minutes ago</p>
          </div>
          <span className="text-white font-semibold text-sm">-250 lei</span>
        </div>

        {/* See all */}
        <div className="flex items-center justify-center py-4">
          <button className="text-white font-medium text-sm">See all</button>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="flex-shrink-0 mx-3 mb-3 rounded-full overflow-hidden" style={{ background: '#1c1c4a' }}>
        <div className="flex items-center justify-around px-2 py-3">
          {[
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 3H3v7h7V3zm11 0h-7v7h7V3zm0 11h-7v7h7v-7zM10 14H3v7h7v-7z" />
                </svg>
              ),
              label: 'Home',
              active: true,
            },
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 3h4v4H3V3zm0 7h4v4H3v-4zm0 7h4v4H3v-4zm7-14h4v4h-4V3zm0 7h4v4h-4v-4zm0 7h4v4h-4v-4zm7-14h4v4h-4V3zm0 7h4v4h-4v-4zm0 7h4v4h-4v-4z" />
                </svg>
              ),
              label: 'Invest',
              active: false,
            },
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M7 16l-4-4 4-4M17 8l4 4-4 4M3 12h18" />
                </svg>
              ),
              label: 'Payments',
              active: false,
            },
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
                </svg>
              ),
              label: 'Crypto',
              active: false,
            },
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
                </svg>
              ),
              label: 'RevPoints',
              active: false,
            },
          ].map((tab) => (
            <button
              key={tab.label}
              className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-full ${tab.active ? 'bg-white/20' : ''
                }`}
            >
              <span className={tab.active ? 'text-white' : 'text-white/50'}>
                {tab.icon}
              </span>
              <span className={`text-xs font-medium ${tab.active ? 'text-white' : 'text-white/50'}`}>
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div >
  )
}
