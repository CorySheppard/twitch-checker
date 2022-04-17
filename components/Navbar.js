import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
    const user = null;
    const username = null;
    const { asPath } = useRouter();

    return (
        <nav className="p-4 bg-gray-200 border-b border-gray-100">
            <ul className="max-w-7xl mx-auto flex flex-row items-center justify-between">
                <li>
                    <Link className="cursor-pointer" href="/">
                        <button className="flex flex-row space-x-2 items-center text-white text-2xl font-semibold bg-black rounded-md py-2 px-4">
                            <img className="h-8 w-auto" src="/TwitchGlitchPurple.png" alt="Twitch Purple Logo" />
                            <span>TwitchChecker</span>
                        </button>
                    </Link>
                </li>

                {/* User is signed-in and has a username */}
                {username && (
                    <li>
                        <Link href={'/${username}'}>
                            <img className="rounded-full h-12 w-12 object-cover" src={user?.photoURL} alt="User's Profile Photo" />
                        </Link>
                    </li>
                )}

                {/* User is not signed-in OR has not created a username */}
                {!username && asPath !== '/enter' && (
                    <li>
                        <Link href="/enter">
                            <button className="font-semibold bg-gray-300 rounded-md py-2 px-4 text-2xl text-gray-700 hover:text-gray-800 hover:bg-gray-400 transition duration-150 ease-in">/enter</button>
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}