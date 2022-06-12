import * as React from 'react'
import * as styles from '../../assets/styles.module.scss'
import SymbolNegative from '../../assets/vectors/symbol-negative.svg'
import Phone from '../../assets/vectors/icn-phone.svg'
import Mail from '../../assets/vectors/icn-mail.svg'
import Heart from '../../assets/vectors/heart.svg'

export default class Navbar extends React.Component<{}, {}> {
    render() {
        return (
            <footer className={styles.Footer}>
                <div  className={styles.Centered}>
                    <div className={styles.Symbol}>
                        <SymbolNegative />
                    </div>
                    <div className={styles.Copyright}>
                        <p>&copy; 2022 Fenix L.L.C.</p>
                        <p>All rights reserved.</p>
                    </div>
                    <div className={styles.Contact}>
                        <p><Phone /> +1 703-618-9727 </p>
                        <p><Mail /> alulushi@alumni.cmu.edu</p>
                    </div>
                </div>

                <div className={styles.BrewedWithLove}>
                    <p>Designed and executed by Anna Lulushi.</p>
                </div>
            </footer>
        )
    }
}
