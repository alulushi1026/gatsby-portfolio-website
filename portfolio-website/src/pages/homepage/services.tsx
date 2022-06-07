import * as React from 'react'
import * as styles from '../../assets/styles.module.scss'
import Branding from '../../assets/vectors/branding.svg'
import Consulting from '../../assets/vectors/consulting.svg'
import Design from '../../assets/vectors/design.svg'
import Development from '../../assets/vectors/development.svg'
import Strategy from '../../assets/vectors/strategy.svg'
import Training from '../../assets/vectors/training.svg'

export default class Services extends React.Component<{}, {}> {
    render() {
        return (
            <div className={styles.Services} id="Services">
                <div className={styles.Centered}>
                    <h1>What have I done?</h1>

                    <p className={styles.Subtitle}>
                        Graduated from Carnegie Mellon University with a
                        B.S. in Math (Computational and Applied) and minors in
                        Computer Science and Creative Writing.
                        Received University Honors and the Senior Leadership
                        Recognition Award.
                    </p>
                </div>



            </div>
        )
    }
}
