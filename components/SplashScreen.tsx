'use client'

interface SplashScreenProps {
  onFinish: () => void
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center bg-white cursor-pointer"
      onClick={onFinish}
    >
      {/* Revolut Logo */}
      <div className="flex items-center justify-center">
        <svg width="220" height="60" viewBox="0 0 220 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* R icon */}
          <path
            d="M0 0h22c12 0 20 7 20 17 0 7-4 12-10 15l12 18H30L19 33H14v17H0V0zm14 22h7c4 0 7-2 7-6s-3-6-7-6h-7v12z"
            fill="#1a1a1a"
          />
          {/* evolut text */}
          <text x="50" y="50" fontFamily="Geist, sans-serif" fontSize="38" fontWeight="700" fill="#1a1a1a" letterSpacing="-1">
            evolut
          </text>
        </svg>
      </div>

      {/* Home indicator */}
      <div className="absolute bottom-8 w-32 h-1 bg-gray-900 rounded-full" />
    </div>
  )
}
