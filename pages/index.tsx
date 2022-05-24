import Head from 'next/head'
import type { NextPage } from 'next'
import { useTime } from 'react-timer-hook'
import useSound from 'use-sound';

let previousWork: boolean | null = null

const Home: NextPage = () => {
  const { minutes, seconds } = useTime({ format: '12-hour' })
  const [play] = useSound('/sounds/pling.mp3');



  const work = minutes % 30 < 25
  const minusOne = seconds == 0 ? 0 : 1
  const displayMin = work ? 25 - minusOne - (minutes % 30) : 30 - minusOne - (minutes % 30)

  const secondsLeft = (60 - seconds) % 60
  const displaySeconds = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft

  if (work != previousWork && previousWork != null) {
    play()
  }

  previousWork = work

  return (
    <div
      className="wholeScreen"
      style={{
        background: work ? 'rgb(66,70,169)' : '#EAFF7B',
        color: work ? '#F3ECFF' : '#595959',
      }}>
        <Head>
          <title>{work ? '🏋️': '🏖'} {displayMin}:{displaySeconds}</title>
        </Head>
      <div className="content">
        <p className="time">
          {displayMin}:{displaySeconds}
        </p>
        <div className="type">{work ? 'WORKING' : 'PAUSE'}</div>
      </div>
    </div>
  )
}

export default Home
