import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import NavLink from '@/Components/NavLink';

export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {


    return (
        <div className='min-h-screen'>
            <Head title="Welcome" />
            <TopBar />
            <main className='flex flex-col items-center justify-center'>
                <p>Manpower Version 2</p>
            </main>
            <footer className="py-16 text-center text-sm">
                Laravel v{laravelVersion} (PHP v{phpVersion})
            </footer>
        </div>
    );
}

const TopBar = () => {
    return (<div className='flex flex-row justify-end space-x-4 px-8 py-4'>
        <NavLink href='login' active={false}>Sign In</NavLink>
        <NavLink href='register' active={false}>Sign Up</NavLink>
    </div>)
}
