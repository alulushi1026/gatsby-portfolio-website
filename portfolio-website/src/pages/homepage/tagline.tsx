import * as React from 'react'
import * as styles from '../../assets/styles.module.scss'
import CorettaSymbol from '../../assets/vectors/symbol-positive.svg'

export default class Tagline extends React.Component<{}, {}> {
    render() {
        return (
            <div className={styles.Tagline} id="Me">
                <div className={styles.Centered}>
                    <div className={styles.Block}>
                        <h2>INTENT</h2>
                        <h1>
                            I believe that building a world with precise,
                            equitable, and accessible technology is something everyone
                            will benefit from.
                        </h1>
                    </div><div className={styles.Block}>
                        <CorettaSymbol className={styles.Symbol} />
                    </div>
                </div>
            </div>
        )
    }
}
