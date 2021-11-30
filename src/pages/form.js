import React, { useState } from 'react';
import { Button, Navbar, Container, Nav, ProgressBar, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CountryDropdown, } from 'react-country-region-selector';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import './form.css';
import TextField from '../components/textField'
import { date } from 'yup/lib/locale';
const FormPage = (props) => {
    const [country, setCountry] = useState('')
    const [promo, setPromo] = useState('')
    const [other, setOther] = useState('')
    const selectCountry = (val) => {
        setCountry(val)
    }
    const [startDate, setStartDate] = useState("");

    const Validate = yup.object({

        name: yup.string()
            .required('This field is required'),
        telephone: yup.string()
            .required('This field is required'),
        email: yup.string()
            .email('Email is Invalid')
            .required('This field is required'),
        email2: yup.string()
            .email('Email is Invalid')
            .required('This field is required'),
    
        telephone: yup.string()
            .required('This field is required'),
    
        aqiqah: yup.string()
            .required('This field is required'),
        address1: yup.string()
            .required('This field is required. Please enter a complete address.'),
           
        picked: yup.string()
            .required('This field is required.'),
           
    })

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (
        <Formik
            initialValues={{
                name: '',
                telephone: '',
                address: '',
                email: '',
                email2: '',
                email3: '',
                contact: '',
                tarikh: startDate,
                aqiqah: '',
                picked: '',
                country: '',
                address1: '',
                address2: '',
                address3: '',
                address4: '',
                telephone2: '',
            }}
            onSubmit={values => {

                console.log(values)


            }}

            validationSchema={Validate}

        >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                handleReset,
                values,
                setFieldValue,
                touched,
                isValid,
                errors,
            }) => (
                <>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand className="logo-img">
                                <img src="https://aqiqahcentre.com/wp-content/uploads/2021/05/logo2-01.png" />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">

                                <Nav>
                                    <Nav.Link className="navbar-link active">DAFTAR AQIQAH</Nav.Link>
                                    <Nav.Link className="navbar-link">DAFTAR QURBAN</Nav.Link>
                                    <Nav.Link className="navbar-link">
                                        011-1437 4843
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <div className="carousel-container">
                        <Carousel
                            swipeable={false}
                            draggable={true}
                            showDots={true}
                            responsive={responsive}
                            infinite={true}
                            autoPlaySpeed={3000}
                            keyBoardControl={true}
                            transitionDuration={500}
                            autoPlay={true}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                        >
                            <div className="img-carousel">
                                <img draggable={false} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQazrw1YVBQ-fVmxbDJ4tA4mZBTmi32oaVfiA&usqp=CAU" />
                            </div>
                            <div className="img-carousel">

                                <img draggable={false} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnjDa1Akz-ccS1frdlQBnEHX_R87K6XYrZAw&usqp=CAU" />
                            </div >
                            <div className="img-carousel">
                                <img draggable={false} src="https://opimedia.azureedge.net/-/media/images/men/editorial/blogs/homesteading-and-livestock/21-things-to-know-before-starting-a-goat-farm/goat-math-sq-jpg.jpg" />
                            </div>
                            <div className="img-carousel">

                                <img draggable={false} src="https://media.gettyimages.com/photos/vendors-gather-their-goats-and-sheep-for-sale-at-a-ground-ahead-of-picture-id1227753533?s=612x612" />
                            </div>
                            <div className="img-carousel">

                                <img draggable={false} src="https://media.gettyimages.com/photos/vendors-gather-their-goats-and-sheep-for-sale-at-a-ground-ahead-of-picture-id1227753448?s=612x612" />
                            </div >
                            <div className="img-carousel">
                                <img draggable={false} src="https://www.somersetcountygazette.co.uk/resources/images/11391869/" />
                            </div>
                            <div className="img-carousel">

                                <img draggable={false} src="https://i0.wp.com/triangleonthecheap.com/wordpress/wp-content/uploads/2020/08/goat-Depositphotos_4887277_s-2019.jpg?fit=1000%2C670&ssl=1" />
                            </div>
                            <div className="img-carousel">

                                <img draggable={false} src="https://www.treehugger.com/thmb/fGg_RwFZubTQtoJitvz2eL-FeEI=/3115x2336/smart/filters:no_upscale()/county-fair-89207576-58757e3d3df78c17b6f8d039.jpg" />
                            </div>

                        </Carousel>
                        <div className="progress-bar-container">
                            <p className="borang">Borang Pendaftaran Aqiqah Mekah</p>
                            <p className="steps">Step 1 of 2</p>
                            <ProgressBar>
                                <ProgressBar striped variant="" now={50} label="50%" />
                            </ProgressBar>
                        </div>
                        <div className="mt-4 mb-2">
                            <h5>Maklumat Pendaftar</h5>
                            <p className="smaller-text">“Berserta anak itu ada aqiqah, maka alirkanlah darah untuknya, dan singkirkanlah sesuatu yang membahayakan daripadanya.” Hadis riwayat Tirmidzi</p>
                        </div>
                        <hr />
                    </div>

                    <div className="form-container">
                        <Form noValidate onSubmit={handleSubmit}
                            onReset={handleReset}
                        >


                            <Form.Group className="mb-4 mt-4 " controlId="formBasicEmail">
                                <TextField errorClass="error-class" labelclass="label-class" smalltextclass="small-input-text" classValue="class-input" smalltext="Nama Penuh" label="Nama Pendaftar (Ibu/Ayah/Penjaga)*" type="text" name="name" placeholder="" />

                            </Form.Group>
                            <Form.Group className="mb-4 mt-4 " controlId="formBasicEmail">
                                <TextField errorClass="error-class" labelclass="label-class" smalltextclass="small-input-text" classValue="class-input" smalltext="Nombor Boleh Terima Whatsapp" label="No Telefon*" type="text" name="telephone" placeholder="0129991212" />

                            </Form.Group>
                            <Form.Group className="mb-4 mt-4 " controlId="formBasicEmail">
                                <TextField errorClass="error-class" labelclass="label-class" smalltextclass="small-input-text" classValue="class-input" smalltext="Nombor Boleh Terima Whatsapp" label="No Telefon Alternatif" type="text" name="telephone2" placeholder="0129991212" />

                            </Form.Group>
                            <Form.Group className="mb-4 mt-4 " controlId="formBasicEmail">
                                <TextField errorClass="error-class" labelclass="label-class" smalltextclass="small-input-text" classValue="class-input" smalltext="" label="Email*" type="email" name="email" placeholder="" />

                            </Form.Group>

                            <p className="label-class">
                                Alamat Penghantaran Sijil Penyertaan (Rumah/Pejabat/ PO Box)*
                            </p>
                            <Form.Group className="mb-4 " controlId="formBasicEmail">
                                <TextField errorClass="no-display" labelclass="small-input-text" smalltextclass="small-input-text" classValue="class-input" smalltext="" label="Alamat" type="text" name="address1" placeholder="Contoh: Lot 826, Jalan Masjid Besar" />

                            </Form.Group>
                            <div className="two-inputs">
                                <Form.Group className="two-inputs-each " controlId="formBasicEmail">
                                    <TextField errorClass="error-class" labelclass="small-input-text-for-small" smalltextclass="no-display" classValue="class-input" smalltext="" label="Alamat" type="text" name="address2" placeholder="Contoh: Lot 826, Jalan Masjid Besar" />

                                </Form.Group>
                                <Form.Group className=" two-inputs-each " controlId="formBasicEmail">
                                    <TextField errorClass="error-class" labelclass="small-input-text-for-small" smalltextclass="no-display" classValue="class-input" smalltext="" label="Negeri" type="text" name="address3" placeholder="Contoh:Negari Sembilan / Selengor / Pahang" />

                                </Form.Group>
                            </div>
                            <div className="two-inputs">
                                <Form.Group className="mb-4  two-inputs-each " controlId="formBasicEmail">
                                    <TextField errorClass="error-class" labelclass="small-input-text-for-small" smalltextclass="no-display" classValue="class-input" smalltext="" label="Poskod" type="text" name="address4" placeholder="Contoh: 40000" />

                                </Form.Group>

                                <Form.Group className="mb-4  two-inputs-each drop-down " controlId="formBasicEmail">

                                    <CountryDropdown
                                        name="country"
                                        value={country}
                                        onChange={(val) => selectCountry(val)} />
                                </Form.Group>

                            </div>
                            {errors.address1 &&
                                touched.address1 &&
                                <div className="input-feedback error-class mb-4">
                                    {errors.address1}
                                </div>}

                            <h5>Maklumat Anak</h5>
                            <p className="smaller-text">"Sesiapa yang dikurniakan anak dan ingin melakukan ibadat untuknya, maka lakukanlah ibadah aqiqah bagi anak lelaki dua ekor kambing dan bagi anak perempuan pula seekor kambing." – Riwayat Abu Daud (2842)</p>
                            <hr />

                            <p className="label-class">Nama Penuh Anak / Nama Penuh Peserta Beserta Bin / Binti*</p>

                            <div className="input-div">
                                <div className="two-inputs">
                                    <label className="label-class email-two-inputs">
                                        Nama Anak / Nama Peserta
                                        <Field  name="email2" >
                                            {({
                                                field,
                                                form: { touched, errors },
                                                meta,
                                            }) => (
                                                <div >
                                                    <input type="text" placeholder="Email" {...field} className="class-input  input-list" />
                                                    
                                                </div>
                                            )}
                                        </Field>
                                    </label>
                                    <label className="label-class">
                                        Bilangan Kambing
                                        <Field name="email3" >
                                            {({
                                                field,
                                                form: { touched, errors },
                                                meta,
                                            }) => (
                                                <div>
                                                    <input type="text" placeholder="Email" {...field} className="class-input  input-list-2" />
                                                    
                                                </div>
                                            )}
                                        </Field>
                                    </label>
                                    <img className="add-input" src="https://aqiqahcentre.com/wp-content/plugins/gravityforms/images/list-add.svg" />

                                </div>
                            </div>
                            <p className="smaller-text mt-1">Sekiranya anda mendaftar lebih dari satu nama, sila tekan butang ( + ) untuk mengisi nama-nama peserta lain. Isikan bilangan kambing sembelihan bagi memudahkan pembahagian kuantiti setiap peserta.</p>
                            {errors.email2 &&
                                touched.email2 &&
                                <div className="input-feedback error-class mb-4">
                                    {errors.email2}
                                </div>}
                            
                            <p className="label-class mb-1">Tarikh Sembelihan*</p>
                            <div className="calender-div">
                                <DatePicker className="class-input"  value={startDate} selected={startDate} onChange={(date) => setStartDate(date)} /><img src="https://aqiqahcentre.com/wp-content/plugins/gravityforms/images/calendar.png" />
                            </div>
                            <p className="smaller-text mt-3 mb-3">Video akan dihantar dalam tempoh dua hari berkerja dari tarikh sembelihan.</p>
                          
                            <label className="label-class mb-1" >
                                Bilangan Kambing Aqiqah*
                            </label>
                            <select
                                name="aqiqah"
                                className="selector-aqiqah mt-2 mb-3"
                                value={values.aqiqah}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                style={{ display: 'block' }}
                            >
                                <option className="ekor-class" value="1 ekor" label="1 ekor" />
                                <option className="ekor-class" value="2 ekor" label="2 ekor" />
                                <option className="ekor-class" value="3 ekor" label="3 ekor" />
                                <option className="ekor-class" value="4 ekor" label="4 ekor" />
                                <option className="ekor-class" value="5 ekor" label="5 ekor" />
                                <option className="ekor-class" value="6 ekor" label="6 ekor" />
                                <option className="ekor-class" value="7 ekor" label="7 ekor" />
                                <option className="ekor-class" value="8 ekor" label="8 ekor" />
                                <option className="ekor-class" value="9 ekor" label="9 ekor" />
                                <option className="ekor-class" value="10 ekor" label="10 ekor" />
                                <option className="ekor-class" value="11 ekor" label="11 ekor" />
                                <option className="ekor-class" value="12 ekor" label="12 ekor" />
                                <option className="ekor-class" value="13 ekor" label="13 ekor" />
                                <option className="ekor-class" value="14 ekor" label="14 ekor" />
                                <option className="ekor-class" value="15 ekor" label="15 ekor" />
                            </select>
                           

                            <p className="label-class">Dari Mana Anda Tahu Tentang Aqiqahcentre.com?*</p>
                            <Row>
                                <Col sm={4}>
                                    <label className="ratio-input">
                                        <Field type="radio" name="picked" value="Billboard" />
                                        Billboard
                                    </label><br />
                                    <label className="ratio-input">
                                        <Field type="radio" name="picked" value="Radio Sinar" />
                                        Radio Sinar
                                    </label><br />
                                    <label className="ratio-input">
                                        <Field type="radio" name="picked" value="Iklan Instagram" />
                                        Iklan Instagram
                                    </label><br />
                                    <label className="ratio-input">
                                        <Field type="radio" name="picked" value={other} />
                                        <input className="class-input " value={other} onChange={(e)=>setOther(e.target.value)} placeholder="other" name="pciked" />

                                    </label>

                                </Col>
                                <Col sm={4}>
                                    <label className="ratio-input">
                                        <Field type="radio" name="picked" value="d" />
                                        Radio IKIM
                                    </label><br />
                                    <label className="ratio-input">
                                        <Field type="radio" name="picked" value="e" />
                                        Carian Google
                                    </label><br />
                                    <label className="ratio-input">
                                        <Field type="radio" name="picked" value="f" />
                                        Pendaftaran Manual
                                    </label>

                                </Col>
                                <Col sm={4}>
                                    <label className="ratio-input">
                                        <Field type="radio" name="picked" value="g" />
                                        Radio THR
                                    </label><br />
                                    <label className="ratio-input">
                                        <Field type="radio" name="picked" value="h" />
                                        Iklan Facebook
                                    </label><br />
                                    <label className="ratio-input">
                                        <Field type="radio" name="picked" value="i" />
                                        Kawan / Keluarga
                                    </label>


                                </Col>
                            </Row>
                            <p className="label-class mt-4 mb-2">Kod Promo</p>
                            <input className="class-input " placeholder="" value={promo} onChange={(e) => setPromo(e.target.value)} />
                            <button type="button" className="promo-btn">Apply</button>
                            <p className="smaller-text mt-4 mb-4">Isikan Kod Promo sekiranya ada</p>
                            <h5>Lafaz Niat & Akad Aqiqah</h5>
                            <p className="smaller-text mt-4 mb-4">"Saya/Kami dengan ini mewakilkan kepada pihak Aqiqah Centre di bawah kelolaan syarikat AC AGROTECH (1366280-T) dan/atau wakilnya untuk menyempurnakan ibadah Aqiqah bagi nama-nama seperti di atas pada tahun 1443 Hijrah/2021 Masehi kerana ALLAH TAALA, lebihan selepas kos pengendalian aqiqah adalah upah wakalah(pewakilan) bagi pihak Aqiqah Centre”</p>
                            <hr />
                            <p className="label-class mt-4 mb-4">Jumlah Bayaran (RM)</p>
                            <p>RM 4,990.00</p>
                            <hr />
                            <button type="submit" className="next-btn ">Next</button>
                        </Form>
                    </div>

                </>
            )}

        </Formik>
    );
}

export default FormPage;