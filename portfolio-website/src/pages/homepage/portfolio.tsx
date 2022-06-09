import React from 'react'
import * as styles from '../../assets/styles.module.scss'
import TimbratApp from '../../assets/images/timbrat-app.png'
import resume from '../../assets/pdf/resume.pdf'

export default ({ data }: any) => (
    <section className={styles.Portfolio} id="Portfolio">
        <section className={styles.Centered}>
            <header>
                <h1>Portfolio</h1>
                <p className={styles.Subtitle}>
                    <a href="https://drive.google.com/file/d/1_KzPf4h_qSy3YFjoLCMAgTS7H1O-iQgH/view?usp=sharing">
                    View Resume on Google Drive
                    </a>
                    <br />
                    <a href = "https://drive.google.com/file/d/10vtNJQqPysh921RCh0eSC6Qqf9NmtgIG/view?usp=sharing">
                    View CV Draft on Google Drive
                    </a>
                    <br />
                    <a href="https://ipfs.io/ipfs/QmTkpQCMv3Z7eoPChQo6AYVebvAdGiBBTQiNyiyKzBebL1?filename=Anna%20Lulushi%20-%20Resume.pdf">
                    View Resume on IPFS (beta)
                    </a>

                </p>
            </header>


        </section>
    </section>
)
