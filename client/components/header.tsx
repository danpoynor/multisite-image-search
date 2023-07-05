import HeaderNavbar from './navbar-header'

export default function Header() {
  return (
    <header className="bg-gray-800 text-white w-full">
        <div className="flex items-center justify-between max-w-4xl mx-auto p-4">
            <HeaderNavbar />
        </div>
    </header>
  );
}