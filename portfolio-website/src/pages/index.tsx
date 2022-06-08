import * as React from 'react'
import * as styles from '../assets/styles.module.scss'
import { default as Navbar } from './common/navbar'
import { default as Heroshot } from './common/heroshot'
import { default as Tagline } from './homepage/tagline'
import { default as Services } from './homepage/services'
import { default as Portfolio } from './homepage/portfolio'
import { default as Contact } from './homepage/contacto'
import { default as Footer } from './common/footer'
import { Helmet } from 'react-helmet'
import favicon from '../assets/vectors/favicon.svg'

interface IndexPageProps {}

export default class IndexPage extends React.Component<IndexPageProps, {}> {

    constructor(props: any) {
        super(props)
    }

    public render() {
        return (
            <section className={styles.Container}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Anna Lulushi | Portfolio Website</title>
                    <link rel="canonical" href="https://fenix.eth/" />
                    <link rel="icon" type="vector/svg" hrf={favicon} />
                </Helmet>
                <Navbar />
                <Heroshot
                    title="Hi there. I am Anna Lulushi."
                    subtitle="I work to design products that work for the many, not the few."
                />
                <div className={styles.Homepage}>
                    <Tagline />
                    <Services />
                    <Portfolio />
                    <Contact />
                </div>
                <Footer />
            </section>
        )
    }
}
