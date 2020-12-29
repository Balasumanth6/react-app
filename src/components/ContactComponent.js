import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Form, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => !(val) || (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {

    constructor(props) {
        
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleBlur = this.handleBlur.bind(this);
    }

    // handleInputChange(event) {
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;

    //     this.setState({
    //         [name]: value
    //     });
    // }

    handleSubmit(values) {
        this.props.postFeedback(values);
        this.props.resetFeedbackForm();   
    }

    // handleBlur = (field) => (evt) => {
    //     this.setState({
    //         touched: { ...this.state.touched, [field]: true }
    //     });
    // }

    // validate(firstname, lastname, telnum, email) {

    //     const errors = {
    //         firstname: '',
    //         lastname: '',
    //         telnum: '',
    //         email: ''
    //     };

    //     if (this.state.touched.firstname && firstname.length < 3)
    //         errors.firstname = 'FirstName should be greater than 3 charaters';
    //     else if (this.state.touched.firstname && firstname.length > 10)
    //         errors.firstname = 'FirstName should be less than 10 charaters';

    //     if (this.state.touched.lastname && lastname.length < 3)
    //         errors.lastname = 'LastName should be greater than 3 charaters';
    //     else if (this.state.touched.lastname && lastname.length > 10)
    //         errors.lastname = 'LastName should be less than 10 charaters';

    //     const reg = /^\d+$/;
    //     if (this.state.touched.telnum && !reg.test(telnum))
    //         errors.telnum = 'TelNum should contain only numbers';

    //     if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
    //         errors.email = 'Email should contain an @ sign';

    //     return errors;
    // }

    render () {

        return(

            <div className="container">

                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'> Home </Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3> Contact Us </h3>
                        <hr />
                    </div>
                </div>

                <div className="row row-content">

                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>

                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>

                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>

                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info" href='/#'><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>    
                </div>

                <div className='row row-content'>

                    <div className='col-12'>
                        <h3>Send us your feedback</h3>
                    </div>

                    <div className='col-12 col-md-9'>
                        <br className='d-none d-md-block'/>

                        <Form model='feedback' onSubmit={(values) => this.handleSubmit(values)}>

                            <Row className='form-group'>
                                <Label htmlFor='firstname' md={2}> First Name </Label>
                                <Col md={10}>
                                    <Control.text model='.firstname' id='firstname' 
                                        className='form-control'
                                        name='firstname' 
                                        placeholder='Type Here'
                                        validators={{
                                            required, 
                                            minLength: minLength(3), 
                                            maxLength: maxLength(15)
                                        }} /> 
                                    <Errors className='text-danger' 
                                        model='.firstname' 
                                        show='touched' 
                                        messages={{
                                            required: 'Required ', 
                                            minLength: 'Must be greater than 2 charaters',
                                            maxLength: 'Must be 15 charaters or less'
                                        }} />
                                </Col>  
                            </Row>

                            <Row className='form-group'>
                                <Label htmlFor='lastname' md={2}> Last Name </Label>
                                <Col md={10}>
                                    <Control.text model='.lastname' id='lastname' 
                                        className='form-control'
                                        name='lastname' 
                                        placeholder='Type Here' 
                                        validators={{
                                            required, 
                                            minLength: minLength(3), 
                                            maxLength: maxLength(15)
                                        }} /> 
                                    <Errors className='text-danger' 
                                        model='.lastname' 
                                        show='touched' 
                                        messages={{
                                            required: 'Required ', 
                                            minLength: 'Must be greater than 2 charaters',
                                            maxLength: 'Must be 15 charaters or less'
                                        }} />
                                </Col>
                            </Row>

                            <Row className='form-group'>
                                <Label htmlFor='telnum' md={2}> Contact Tel. </Label>
                                <Col md={10}>
                                    <Control.text model='.telnum' id='telnum' 
                                        className='form-control'
                                        name='telnum' 
                                        placeholder='Type Here'
                                        validators={{
                                            required, 
                                            minLength: minLength(3), 
                                            maxLength: maxLength(15),
                                            isNumber
                                        }}  /> 
                                    <Errors className='text-danger' 
                                        model='.telnum' 
                                        show='touched' 
                                        messages={{
                                            required: 'Required ', 
                                            minLength: 'Must be greater than 2 numbers',
                                            maxLength: 'Must be 15 numbers or less',
                                            isNumber: 'Must be a number'
                                        }} />
                                </Col>
                            </Row>

                            <Row className='form-group'>
                                <Label htmlFor='email' md={2}> Email </Label>
                                <Col md={10}>
                                    <Control.text model='.email' id='email' 
                                        className='form-control'
                                        name='email' 
                                        placeholder='Type Here'
                                        validators={{
                                            required,
                                            validEmail
                                        }} /> 
                                    <Errors className='text-danger'
                                        model='.email'
                                        show='touched'
                                        messages={{
                                            required: 'Required ',
                                            validEmail: 'Invalid Email Address'
                                        }}  />                                      
                                </Col>
                            </Row>

                            <Row className='form-group'>
                                <Col md={{size:6, offset:2}}>
                                    <div className='form-check'>
                                        <Label check>
                                            <Control.checkbox model='.agree' name='agree' 
                                                    className='form-check-input' /> {' '}
                                            <strong> May we contact you? </strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size:3, offset:1}}>
                                    <Control.select model='.contactType' name='contactType' 
                                             className='form-control'>
                                        <option> Tel. </option>
                                        <option> Email </option>
                                    </Control.select>
                                </Col>
                            </Row>

                            <Row className='form-group'>
                                <Label htmlFor='message' md={2}> Your Feedback </Label>
                                <Col md={10}>
                                    <Control.textarea model='.message' id='message' name='message' 
                                            rows='12' className='form-control' /> 
                                </Col>
                            </Row>

                            <Row className='form-group'>
                                <Col md={{size:10, offset:2}}>
                                    <Button type='submit' color='primary'> Send Feedback </Button>
                                </Col>
                            </Row>
                            
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;