import { ReactNode } from 'react';
import Header from './header'
import Footer from './footer'

import { useState } from 'react';
import { searchPhotos } from './searchPhotos'

import '../app/globals.css'

type LayoutProps = {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}