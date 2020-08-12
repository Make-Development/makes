import React from 'react'
import App from 'next/app';
import Link from 'next/link'
import Head from 'next/head'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import '../../assets/css/style.main.css';



export default class MKApp extends App {

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }


    render() {
        const { Component, pageProps } = this.props;

        return (
            <>

                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                    <title>Make</title>

                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

                    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
                    <link rel="shortcut icon" href="../lg_make128x128.ico" />

                </Head>

                <Component {...pageProps} />


                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" ></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" ></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" ></script>


            </>
        )

    }


    componentDidMount() {
       
    }

}




