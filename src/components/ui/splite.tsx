import { Suspense, lazy, useState, useEffect, Component, type ReactNode } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
  timeoutMs?: number
}

interface ErrorBoundaryProps {
  children: ReactNode
  fallback: ReactNode
}

class SplineErrorBoundary extends Component<ErrorBoundaryProps, { hasError: boolean }> {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) return this.props.fallback
    return this.props.children
  }
}

function SplineFallback() {
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      aria-label="3D-Szene nicht verfügbar"
    >
      <img
        src="/images/capygator-logo.png"
        alt="Capygator Logo"
        style={{ maxWidth: '180px', opacity: 0.75, filter: 'drop-shadow(0 0 32px #00e5a050)' }}
      />
    </div>
  )
}

export function SplineScene({ scene, className, timeoutMs = 10000 }: SplineSceneProps) {
  const [timedOut, setTimedOut] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (loaded) return
    const timer = setTimeout(() => setTimedOut(true), timeoutMs)
    return () => clearTimeout(timer)
  }, [timeoutMs, loaded])

  if (timedOut) return <SplineFallback />

  return (
    <SplineErrorBoundary fallback={<SplineFallback />}>
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <span className="loader"></span>
          </div>
        }
      >
        <Spline
          scene={scene}
          className={className}
          onLoad={() => setLoaded(true)}
        />
      </Suspense>
    </SplineErrorBoundary>
  )
}
