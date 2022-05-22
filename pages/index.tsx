import type { NextPage } from 'next'
import { useTime } from 'react-timer-hook'

const Home: NextPage = () => {
  const { minutes, seconds } = useTime({ format: '12-hour' })

  const work = minutes % 30 < 25
  const minusOne = seconds == 0 ? 0 : 1
  const displayMin = work ? 25 - minusOne - (minutes % 30) : 30 - minusOne - (minutes % 30)

  const secondsLeft = (60 - seconds) % 60
  const displaySeconds = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft

  return (
    <div
      className="wholeScreen"
      style={{
        background: work ? 'rgb(66,70,169)' : '#EAFF7B',
        color: work ? '#F3ECFF' : '#595959'
      }}>
      <div className="content">
        <div className="time">
          {displayMin}:{displaySeconds}
        </div>
        <div className="type">{work ? 'WORKING' : 'PAUSE'}</div>
      </div>
    </div>
  )
}

export default Home
