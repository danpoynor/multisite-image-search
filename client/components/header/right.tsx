import Link from 'next/link';
import ThemeChooser from './theme-chooser';

export default function HeaderRight() {
    return (
        <div className='right'>
            <Link href="/login" passHref>
                Login
            </Link>
            <Link href="/sign-up" passHref>
                Sign Up
            </Link>
            <ThemeChooser />
        </div>
    );
}