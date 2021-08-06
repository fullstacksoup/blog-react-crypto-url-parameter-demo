import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import isEmail from 'validator/lib/isEmail';

export default function InputEmailField(props) {   
    const [value, setValue] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [dirty, setDirty] = useState(false);
    
    const handleChange = event => {
        const val = event.target.value;                
        
        if(isEmail(val)) {
            setIsValid(true);              
        } else {
            setIsValid(false);              
        }
        
        setValue(val);                
        props.handleChange(val, isValid);
    }

    return (
        <React.Fragment>
            <FormControl fullWidth={props.isFullWidth} >
                <TextField         
                    error={dirty && isValid === false}                                        
                    onBlur={() => setDirty(true)}
                    id={props.fieldName}                    
                    label={props.label}
                    name={props.fieldName}                    
                    variant="outlined" 
                    size={'small'}
                    helperText={props.helperText}
                    value={value}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => handleChange(e)}
                    style={{marginTop: 1}}
                />
                
            </FormControl>
        </React.Fragment>
    )
}
