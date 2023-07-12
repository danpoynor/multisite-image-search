import { ReactNode, useEffect } from 'react';
import React from 'react';
import Header from './header/header'
import Footer from './footer'

import '../app/globals.css'

type LayoutProps = {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-grow">{children}</main>
            <Footer />
        </div>
    )
}