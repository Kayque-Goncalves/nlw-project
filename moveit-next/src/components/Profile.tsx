import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengeContext)

    return (
        <div className={ styles.profileContainer }>
            <img src="https://avatars.githubusercontent.com/u/79108633?s=460&u=0b9b32d8c1b82b3f35f34812f2ce53358aae34fb&v=4" alt="Foto do usuario" />
            <div>
                <strong>Kayque Gonçalvaves</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level { level }
                </p>
            </div>
        </div>
    )
}