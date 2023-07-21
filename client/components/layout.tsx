import { ReactNode } from 'react';
import React from 'react';
import Header from './header/header'
import Footer from './footer'

import '../app/globals.css'

type LayoutProps = {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex grow">{children}</main>
            <Footer />
        </div>
    )
}