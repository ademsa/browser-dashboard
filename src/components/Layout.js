import React from 'react';
import Nav from './Nav'
import Footer from './Footer';

export default function Layout({ children }) {
    return (
        <React.Fragment>
            <Nav />
            {children}
            <Footer />
        </React.Fragment>
    );
}
