import { useField, ErrorMessage } from 'formik';
import React from 'react';
import { Form } from 'react-bootstrap'
const TextField = ({ ...props }) => {
    const [field, meta] = useField(props)
    return (
        <div >
            <Form.Group  controlId="formBasicPassword" >
            <Form.Label className={`${props.labelclass}`}>{props.label}</Form.Label>
                <Form.Control onKeyPress={props.functionPhone}  type="text" name={props.name} placeholder={props.name}
                    {...field} {...props}
                    autoComplete="off"
                    className={`form-control shadow-none ${props.classValue} ${meta.touched && meta.error }`}
                />
                <div className={`${props.errorClass}`}>
                    <p className={props.smalltextclass}>{props.smalltext}</p>
                  <ErrorMessage  name={field.name} />
                    </div>
            </Form.Group>
        </div>
    );
}

export default TextField;