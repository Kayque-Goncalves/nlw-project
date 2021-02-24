import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const contextData = useContext(ChallengeContext)

    console.log(contextData)
    
    const hasActiveChallenge = true
    
    return (
        <div className={ styles.challengeBoxContainer }>
            { hasActiveChallenge ? (
                <div className={ styles.challengeActive }>
                    <header> Win 400 xp </header>

                    <main>
                        <img src="icons/body.svg" />
                        <strong> New Challenge! </strong>
                        <p> Get up and take a 3 minutes walk. </p>
                    </main>

                    <footer>
                        <button 
                            type="button"
                            className={ styles.challengeFailedButton }
                        > 
                            Failed 
                        </button>

                        <button 
                            type="button"
                            className={ styles.challengeSucceededButton }
                        > 
                            Completed 
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={ styles.challengeNotActive }>
                    <strong> Complete a full cycle to recieve a challenge. </strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        Level up by completing challenges. 
                    </p>
                </div>
            ) }
        </div>
    )
}