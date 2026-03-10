'use client'

import { useState, useEffect, useRef } from 'react'
import SplashScreen from '@/components/SplashScreen'
import HomeScreen from '@/components/HomeScreen'
import TransactionDetail from '@/components/TransactionDetail'

type Screen = 'splash' | 'home'

export default function App() {
  const [screen, setScreen] = useState<Screen>('splash')
  const [showTransaction, setShowTransaction] = useState(false)
  const [transactionMounted, setTransactionMounted] = useState(false)

  // Auto-advance from splash after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setScreen('home')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const openTransaction = () => {
    // Mount the panel first (offscreen), then trigger slide-in on next frame
    setTransactionMounted(true)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setShowTransaction(true)
      })
    })
  }

  const closeTransaction = () => {
    // Trigger slide-out, then unmount after animation completes
    setShowTransaction(false)
    setTimeout(() => {
      setTransactionMounted(false)
    }, 400)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      {/* Phone frame wrapper */}
      <div
        className="relative overflow-hidden shadow-2xl"
        style={{
          width: '100vw',
          height: '100vh',
          borderRadius: '0px',
          border: '1px solid #1a1a1a',
          boxShadow: '0 0 0 1px #333, 0 40px 80px rgba(0,0,0,0.8)',
        }}
      >
        {/* Base screen layer */}
        <div className="w-full h-full">
          {screen === 'splash' && (
            <SplashScreen onFinish={() => setScreen('home')} />
          )}
          {screen === 'home' && (
            <HomeScreen onSTBClick={openTransaction} />
          )}
        </div>

        {/* Transaction detail slide-up overlay */}
        {transactionMounted && (
          <>
            {/* Dim backdrop */}
            <div
              className="absolute inset-0"
              style={{
                background: 'rgba(0,0,0,0.5)',
                opacity: showTransaction ? 1 : 0,
                transition: 'opacity 400ms cubic-bezier(0.32, 0.72, 0, 1)',
              }}
              onClick={closeTransaction}
            />

            {/* Sliding panel — starts fully below, slides up to cover ~95% of screen */}
            <div
              className="absolute left-0 right-0 bottom-0 overflow-hidden"
              style={{
                height: '95%',
                borderTopLeftRadius: '28px',
                borderTopRightRadius: '28px',
                transform: showTransaction ? 'translateY(0%)' : 'translateY(100%)',
                transition: 'transform 400ms cubic-bezier(0.32, 0.72, 0, 1)',
              }}
            >
              <TransactionDetail onClose={closeTransaction} />
            </div>
          </>
        )}

        {/* Screen shine overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)',
            borderRadius: '36px',
          }}
        />
      </div>

      {/* Background label */}
      <div className="absolute bottom-6 text-gray-600 text-xs font-medium tracking-widest uppercase">
        
      </div>
    </div>
  )
}
