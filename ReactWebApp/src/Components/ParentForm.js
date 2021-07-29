import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputPhoneField from './InputPhoneField';

export default class OfferSupportForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Phone: '',
            IsValidPhone: false,
        };
        this.handlePhoneNumberChange.bind(this);
    }

    handlePhoneNumberChange = (value, isValid) => {

        console.log(value);
        console.log(isValid);

        this.setState({ Phone: value, IsValidPhone: isValid });
    }

    handleSubmitForm = (event) => {
        console.log('handleSubmitForm  ', event);
    }

    render() {
        return (
            <div style={{ marginTop: '40px' }}>

                <InputPhoneField placeholder=""
                    helperText="(Required)"
                    label="Phone"
                    fieldName="Phone"
                    handleChange={this.handlePhoneNumberChange}
                    value={this.state.Phone} />
                {this.state.IsValidPhone === true ?
                    <Button variant="contained" color="primary" onClick={this.handleSubmitForm}>
                        Submit
                    </Button>
                    :
                    <Button variant="contained" color="primary" disabled>
                        Submit
                    </Button>
                }


            </div>
        );
    }
}
