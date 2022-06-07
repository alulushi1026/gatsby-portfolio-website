import React from 'react'
import * as styles from '../../assets/styles.module.scss'
import { default as ContactForm } from './contactForm'

export default ({ data }: any) => (
    <div className={styles.Contact} id="Contact">
        <header>
            <h1>Have feedback for me?</h1>
            <p className={styles.Subtitle}>
                Submit feedback here. I will reach out on a rolling basis
                as I am able.
            </p>
        </header>
        <ContactForm />
    </div>
)
