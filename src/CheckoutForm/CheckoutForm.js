import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
 // Створіть файл CheckoutForm.css для зберігання стилів

const CheckoutForm = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        // Перевірка, чи форма пройшла валідацію
        if (formik.isValid) {
            // Логіка для переходу на "/successMessage" тут
            navigate('/successMessage');
        } else {
            // Якщо форма не пройшла валідацію, можна вивести повідомлення або виконати інші дії
            console.log('Form validation failed. Cannot proceed to /successMessage.');
        }
    };
    const handleGoBackClick = () => {
        // Переадресація на /catalog при кліку на кнопку "Go Back"
        navigate('/catalog');
    };

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(50, 'Must be 50 characters or less')
                .required('the field is empty'),
            lastName: Yup.string()
                .max(50, 'Must be 50 characters or less')
                .required('the field is empty'),
            email: Yup.string().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email address').required('Required'),

            phone: Yup.string()
                .matches(/^\+.*$/, 'Invalid phone number')
                .min(13, 'phone must be at least 13 characters')
                .required('Required'),
            address: Yup.string(),
        }),
        onSubmit: (values) => {
            // Handle form submission logic here
            console.log(values);
            // Redirect to the success page if needed
            handleButtonClick();
        },
    });

    return (
        <div className="centered-form"> {/* Додайте клас для центрування форми */}
            <form onSubmit={formik.handleSubmit}>
                <h2 className="form-container">Checkout</h2>
                <div className="checkoutForm_left">
                    <div className={'ssssssss'}>
                        <div>
                            <div>
                                <label htmlFor="firstName"></label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="First Name"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.firstName}
                                />
                                {formik.touched.firstName && formik.errors.firstName ? (
                                    <div style={{ color: 'red' }}>{formik.errors.firstName}</div>
                                ) : null}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Last Name"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.lastName}
                                />
                                {formik.touched.lastName && formik.errors.lastName ? (
                                    <div style={{ color: 'red' }}>{formik.errors.lastName}</div>
                                ) : null}
                            </div>
                        </div>
                        <div>
                            <div>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <div style={{ color: 'red' }}>{formik.errors.email}</div>
                                ) : null}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    placeholder="Phone"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.phone}
                                />
                                {formik.touched.phone && formik.errors.phone ? (
                                    <div style={{ color: 'red' }}>{formik.errors.phone}</div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            placeholder="Address"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.address}
                        />
                        {formik.touched.address && formik.errors.address ? (
                            <div style={{ color: 'red' }}>{formik.errors.address}</div>
                        ) : null}
                    </div>
                </div>
                <button className={'leftbuttonbutton'} type="button" onClick={handleGoBackClick}>
                    Go Back
                </button>
                <button className={'raightbuttonbutton'} type="submit" disabled={!formik.dirty || !formik.isValid} onClick={handleButtonClick}>
                    Continue
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;
