import { challenges } from '../data/challenges'
import ChallengeCard from './ChallengeCard'

function ChallengeGrid() {
  return (
    <div className="row g-4 challenge-grid">
      {challenges.map((challenge) => (
        <div className="col-md-6 col-lg-4" key={challenge.title}>
          <ChallengeCard challenge={challenge} />
        </div>
      ))}
    </div>
  )
}

export default ChallengeGrid
