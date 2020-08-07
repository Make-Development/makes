import { useState } from 'react';

import React from 'react';

const testinput = () => {

    const [contact, setContact] = useState({
        name: '',
        email: '',
        subject: 'StaticForms - Contact Form',
        honeypot: '', // if any value received in this field, form submission will be ignored.
        message: '',
        replyTo: '@', // this will set replyTo of email to email address entered in the form
        accessKey: 'you-access-key' // get your access key from https://www.staticforms.xyz
    });

    const [response, setResponse] = useState({
        type: '',
        message: ''
    });

    const handleChange = e =>
        setContact({ ...contact, [e.target.name]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();
        console.log(contact)
    };
    return (
        <>
            <form
                method='post'
                onSubmit={handleSubmit}
            >
                <input
                    className='input'
                    type='text'
                    placeholder='Name'
                    name='name'
                    onChange={handleChange}
                    required
                />
                <button className='button is-primary' type='submit'>
                    Submit
                        </button>
            </form>
        </>
    );


}

export default testinput;
