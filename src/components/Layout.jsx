import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div className="container mx-auto max-w-100">
            <div className="flex justify-between bg-lime-400 ">
                <div className="font-bold px-1">Logo</div>
                <div className="italic px-1">Navbar</div>
            </div>
            <div className="bg-slate-200 shadow-md">
                <Outlet />
            </div>
        </div>
    )
}
