import { useState, useEffect } from 'react'
import catImage from '../assets/images/cat.svg'
import '../styles/DancingCat.css'

function DancingCat() {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleToggle = () => {
    setIsAnimating(!isAnimating)
  }

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === 'Space' && e.target === document.body) {
        e.preventDefault()
        setIsAnimating(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  return (
    <div className="dancing-cat-container">
      <div
        className={`cat-wrapper ${isAnimating ? 'dancing' : ''}`}
        role="img"
        aria-label={isAnimating ? '춤추는 고양이' : '고양이'}
      >
        <img src={catImage} alt="고양이" className="cat-image" />
      </div>

      <button
        className="control-button"
        onClick={handleToggle}
        aria-label={isAnimating ? '애니메이션 멈추기' : '애니메이션 시작하기'}
      >
        {isAnimating ? '멈추기' : '춤추기 시작!'}
      </button>

      <p className="keyboard-hint">
        스페이스바를 눌러서도 제어할 수 있어요!
      </p>
    </div>
  )
}

export default DancingCat
