import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { GrContact } from "react-icons/gr";



export default function Header() {
    const router = useRouter();
    const headerRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const [isActiveMenu, setisActiveMenu] = useState<boolean>(false)


    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current && buttonRef.current) {
                const header = headerRef.current as HTMLElement;
                const button = buttonRef.current as HTMLElement;

                header.style.backgroundColor = window.scrollY === 0 ? '#032127' : '#ffffff';

                button.style.backgroundColor = window.scrollY === 0 ? '#ffffff' : '#000000';
                button.style.color = window.scrollY === 0 ? '#032127' : '#ffffff';

                const links = header.querySelectorAll('a:not(.active-link)');
                links.forEach(link => {
                    (link as HTMLElement).style.color = window.scrollY === 0 ? '#ffffff' : '#032127';
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    useEffect(() => {
        if (isActiveMenu) {
            document.body.classList.add("fixed")
        } else {
            return document.body.classList.remove("fixed")
        }
    }, [isActiveMenu])

    return (
        <header ref={headerRef} className="fixed top-0 left-0 w-full z-40 bg-[#032127] px-3">
            <div className="max-w-screen-xl mx-auto flex py-5 items-center justify-between ">

                <div className="flex flex-col items-center">
                    <Link className="text-white font-Font1 text-4xl md:text-3xl" href="/" aria-label="go to homepage">-TWS-</Link>
                </div>

                <nav className={`${isActiveMenu && 'isActiveMenu'} flex-1 hidden md:flex`}>
                    <ul className="flex flex-1  justify-center items-center gap-x-3">
                        <li>
                            <Link href="/" className={`${router.pathname == '/' ? " active-link text-[#7ed6df]" : "text-white"}  text-2xl md:text-sm font-semibold transition-colors duration-200`}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className={`${router.pathname == '/about' ? "active-link text-[#7ed6df]" : "text-white"} text-2xl md:text-sm  font-semibold transition-colors duration-200`}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/service" className={`${router.pathname.startsWith('/service') ? "active-link text-[#7ed6df]" : "text-white"} text-2xl md:text-sm  font-semibold transition-colors duration-200`}>
                                Service
                            </Link>
                        </li>
                        <li>
                            <Link href="/reviews" className={`${router.pathname == '/reviews' ? "active-link text-[#7ed6df]" : "text-white"} text-2xl md:text-sm  font-semibold transition-colors duration-200`}>
                                Reviews
                            </Link>
                        </li>
                    </ul>
                    <div className="cursor-pointer text-center mt-10 md:mt-0">
                        <Link className="px-6 py-2 rounded-3xl bg-[#7ed6df] shadow-[0_0_10px_rgba(126,214,223,0.4),0_0_20px_rgba(126,214,223,0.2)] text-black active-link font-Font1 text-2xl md:text-sm  " href="/contact" aria-label="Contact">
                            Contact
                        </Link>
                    </div>
                </nav>
                {
                    isActiveMenu ? (
                        <button onClick={() => setisActiveMenu(false)} ref={buttonRef} className="block md:hidden text-xl p-2 rounded-lg font-Font1 outline-none  shadow-md shadow-black bg-white">
                            <IoClose />
                        </button>
                    ) : (
                        <button onClick={() => setisActiveMenu(true)} ref={buttonRef} className="block md:hidden text-xl p-2 rounded-lg font-Font1 outline-none  shadow-md shadow-black bg-white">
                            <RxHamburgerMenu />
                        </button>
                    )
                }
            </div>
            <div className={` ${router.pathname === '/contact' && 'hidden'} block md:hidden fixed bottom-4 right-4`}>
                <Link className=" text-black active-link text-center  shadow-sm shadow-black  font-Font1" href="/contact" aria-label="Contact">
                    <GrContact className="text-2xl w-12 h-12 p-2 rounded-full bg-[#7ed6df]" />
                </Link>
            </div>
        </header>
    )
}