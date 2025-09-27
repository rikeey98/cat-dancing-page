import './AnimationControls.css'

function AnimationControls({ isPlaying, onToggle, onSpeedChange, animationSpeed }) {
  const handleSpeedChange = (event) => {
    onSpeedChange(parseFloat(event.target.value))
  }

  return (
    <div className="animation-controls">
      <div className="control-group">
        <button
          className={`main-control-button ${isPlaying ? 'playing' : 'paused'}`}
          onClick={onToggle}
          aria-label={isPlaying ? '애니메이션 일시정지' : '애니메이션 시작'}
        >
          {isPlaying ? '일시정지' : '춤추기 시작!'}
        </button>
      </div>

      <div className="control-group">
        <label htmlFor="speed-control" className="speed-label">
          애니메이션 속도: {animationSpeed.toFixed(1)}x
        </label>
        <input
          id="speed-control"
          type="range"
          min="0.5"
          max="3"
          step="0.1"
          value={animationSpeed}
          onChange={handleSpeedChange}
          className="speed-slider"
          aria-label="애니메이션 속도 조절"
        />
        <div className="speed-indicators">
          <span>0.5x</span>
          <span>1x</span>
          <span>2x</span>
          <span>3x</span>
        </div>
      </div>

      <div className="keyboard-hint">
        <small>💡 팁: 스페이스바를 눌러도 애니메이션을 제어할 수 있어요!</small>
      </div>
    </div>
  )
}

export default AnimationControls