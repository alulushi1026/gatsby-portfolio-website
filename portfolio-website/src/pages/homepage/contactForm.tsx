import * as React from 'react'
import axios from 'axios'
import * as styles from '../../assets/styles.module.scss'

import {
    Row,
    Col,
    FormGroup,
    ControlLabel,
    Button
} from 'react-bootstrap'

interface Props {
    name?: String,
    email?: String,
    phone?: String,
    company?: String,
    message?: String,
    successMessage?: boolean,
    errorMessage?: boolean,
    emptyMessage?: boolean,
    wrongEmail?: boolean
}

export default class ContactForm extends React.Component<Props, {}> {

    constructor(props: any) {
        super(props)

        this.state = {
            name: this.props.name,
            email: this.props.email,
            phone: this.props.phone,
            company: this.props.company,
            message: this.props.message,
            successMessage: this.props.successMessage,
            errorMessage: this.props.errorMessage,
            emptyMessage: this.props.emptyMessage,
            wrongEmail: this.props.wrongEmail
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e: Event) {

        e.preventDefault()

        if (!this.validateForm()) {
            this.setState({emptyMessage: true})
            this.refs.name.focus()
            return
        }

        const {
            name,
            email,
            phone,
            company,
            message
        } = this.state

        const url = 'mailto:anna@lulushi.xyz'
        const params = {
            name,
            email,
            phone,
            company,
            message
        }

        axios.post(url, params)
         .then((result: any) => {
            this.refs.name.value = ''
            this.refs.email.value = ''
            this.refs.phone.value = ''
            this.refs.company.value = ''
            this.refs.message.value = ''
            this.refs.name.focus()

            this.setState({successMessage: true})
         }).catch((error) => {
             console.log(error)
             this.setState({errorMessage: true})
         })
    }

    onChangeEmail(event: Event) {
        this.setState({
            email: event.target.value,
            wrongEmail: false
        })

        if (!this.validateEmail(event.target.value)) {
            this.setState({wrongEmail: true})
        }
    }

    validateForm() {
        if (this.state.name === undefined) { return false }
        if (this.state.company === undefined) { return false }
        if (this.state.phone === undefined) { return false }
        if (this.state.email === undefined) { return false }
        if (this.state.message === undefined) { return false }

        return true
    }

    validateEmail(element: string) {

        // tslint:disable-next-line:max-line-length
        var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

        if (emailRegex.test(element)) { return true }

        return false
    }

    renderSuccessMessage() {
        return (
            <div className={styles.ContactSuccess}>
                Thank you!
            </div>
        )
    }

    renderErrorMessage() {
        return (
            <div className={styles.ContactError}>
                There was a problem sending your message, please try again.
            </div>
        )
    }

    renderEmptyMessage() {
        return (
            <div className={styles.ContactEmpty}>
                Don't forget to fill an input.
            </div>
        )
    }

    renderWrongEmailMessage() {
        return (
            <div className={styles.ContactEmpty}>
                I need a valid email.
            </div>
        )
    }

    render() {
        const renderSuccessMessage = (this.state.successMessage && this.renderSuccessMessage())
        const renderErrorMessage = (this.state.errorMessage && this.renderErrorMessage())
        const renderEmptyMessage = (this.state.emptyMessage && this.renderEmptyMessage())
        const renderWrongEmailMessage = (this.state.wrongEmail && this.renderWrongEmailMessage())

        return (
            <div className={styles.ContactForm} onSubmit={ this.handleSubmit }>
                <form name="contact" method="post">
                    <input type="hidden" name="bot-field" />
                    <Row>
                        <Col xs={ 12 } md={6}>
                            <FormGroup>
                                <ControlLabel>Full Name</ControlLabel>
                                <input
                                    className="form-control"
                                    type="text"
                                    ref="name"
                                    onChange={event => this.setState({name: event.target.value})}
                                    placeholder="Susana Hernandez" />
                            </FormGroup>
                        </Col>

                        <Col xs={ 12 } md={6}>
                            <FormGroup>
                                <ControlLabel>E-Mail</ControlLabel>
                                <input
                                    className="form-control"
                                    type="text"
                                    ref="email"
                                    onBlur={event => this.onChangeEmail(event)}
                                    placeholder="hi@example.com" />
                            </FormGroup>
                        </Col>

                        <Col xs={ 12 } md={6}>
                            <FormGroup>
                                <ControlLabel>Phone</ControlLabel>
                                <input
                                    className="form-control"
                                    type="text"
                                    ref="phone"
                                    onChange={event => this.setState({phone: event.target.value})}
                                    placeholder="331-032-0163" />
                            </FormGroup>
                        </Col>

                        <Col xs={ 12 } md={6}>
                            <FormGroup>
                                <ControlLabel>Company</ControlLabel>
                                <input
                                    className="form-control"
                                    type="text"
                                    ref="company"
                                    onChange={event => this.setState({company: event.target.value})}
                                    placeholder="Example Company" />
                            </FormGroup>
                        </Col>

                        <Col xs={ 12 } md={12}>
                            <FormGroup>
                                <ControlLabel>Message</ControlLabel>
                                <textarea
                                    className="form-control"
                                    ref="message"
                                    onChange={e => this.setState({message: e.target.value})}
                                    placeholder="Tell me why you are reaching out..."
                                    rows="5"
                                ></textarea>
                            </FormGroup>
                        </Col>

                        <Col xs={12} md={12}>
                            <Button type="submit" bsStyle="success" block>Send</Button>
                        </Col>
                    </Row>
                </form>
                {renderSuccessMessage}
                {renderErrorMessage}
                {renderEmptyMessage}
                {renderWrongEmailMessage}
            </div>
        )
    }
}
