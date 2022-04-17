import { auth, googleAuthProvider } from "../lib/firebase";
import Head from 'next/head';

export default function EnterPage({ }) {
    const user = null;
    const username = null;
    
    return (
        <main className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <head>
                <title>Sign in | TwitchChecker</title>
            </head>

            {user ? 
                !username ? <UsernameForm /> : <SignOutButton />
                :
                <SignInButton />
            }
        </main>
    );
}

// Sign In
function SignInButton() {
    const signInWithGoogle = async () => {
        await auth.signInWithPopup(googleAuthProvider);
    };

    return (
        <div className="divide-y divide-gray-200">
            <button className="flex flex-row items-center space-x-4 rounded-md shadow-md hover:shadow-lg transition duration-150 ease-in py-2 px-4" onClick={signInWithGoogle}>
                <img className="h-8 w-auto" src="/google-g-logo.png" alt="Google Logo" />
                <span className="text-lg text-gray-500 font-semibold">Sign in with Google</span>
            </button>
            <div className="my-4 py-4 flex flex-col space-y-4">
                <div>
                    <label for="email" className="sr-only">Email</label>
                    <input id="email" className="border border-gray-200 rounded-md w-full py-2 px-4" type="email" placeholder="Email"></input>
                </div>
                <div>
                    <label for="password" className="sr-only">Password</label>
                    <input id="password" className="border border-gray-200 rounded-md w-full py-2 px-4" type="password" placeholder="Password"></input>
                </div>
                <button className="rounded-md py-2 px-4 font-semibold text-lg bg-gray-300 hover:bg-gray-400 text-gray-700 hover:text-gray-800 transition duration-150 ease-in">
                    Sign in
                </button>
            </div>
        </div>
    );
}

// Sign Out
function SignOutButton() {

}

// Create Username
function UsernameForm() {

}