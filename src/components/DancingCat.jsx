import CatImage from '../assets/images/cat.svg'
import AnimationControls from './AnimationControls'
import { useAnimation } from '../hooks/useAnimation'
import './DancingCat.css'

function DancingCat() {
  const {
    isPlaying,
    animationSpeed,
    toggleAnimation,
    changeSpeed
  } = useAnimation()

  return (
    <div className="dancing-cat-container">
      <div
        className={`cat-wrapper ${isPlaying ? 'dancing' : ''}`}
        style={{
          '--animation-speed': `${2 / animationSpeed}s`
        }}
      >
        <img src={CatImage} alt="Dancing Cat" className="cat-image" />
      </div>
      <AnimationControls
        isPlaying={isPlaying}
        onToggle={toggleAnimation}
        onSpeedChange={changeSpeed}
        animationSpeed={animationSpeed}
      />
    </div>
  )
}

export default DancingCat