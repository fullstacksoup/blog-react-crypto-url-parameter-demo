import React from 'react';
import Button from '@material-ui/core/Button';
import InputEmailField from './InputEmailField';

export default class OfferSupportForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            isValidEmail: false,
        };
        this.handleEmailChange.bind(this);
    }
 
    handleEmailChange = (value, isValid) => {      
        this.setState({ email: value, isValidEmail: isValid});                                         
        console.log(`${value} ${isValid}`);
    }
     
    handleSubmitForm = (event) => {
        console.log('handleSubmitForm  ', event);
    }

    render() {
        return (
            <div style={{ marginTop: '40px' }}>
                
                <InputEmailField placeholder=""
                    helperText="(Required)"
                    label="Email"
                    fieldName="Email"
                    handleChange={this.handleEmailChange}
                />

                {this.state.isValidEmail ?
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
