
import NavTop from '../navbar/top/Nav_top'
import NavLeft from '../navbar/lefts/Ui_nav'
import LiItem from '../navbar/lefts/Li_items'

const NavMain = (props) => {
    return (
        <>

            <NavTop>
                <a className="px-3 py-2 text-dark" href="#">
                    <svg viewBox="0 0 28 28" className="a8c37x1j ms05siws hwsy1cff b7h9ocf4 fzdkajry" height={20} width={20}>
                        <path d="M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z" /></svg>
                </a>
                <a className="px-3 py-2 text-dark" href="/login">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-three-dots-vertical" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    </svg>
                </a>
            </NavTop>
            <NavLeft>
                <LiItem>
                    <a className="nav-link" href="/" >
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-layers">
                            <polygon points="12 2 2 7 12 12 22 7 12 2" />
                            <polyline points="2 17 12 22 22 17" />
                            <polyline points="2 12 12 17 22 12" /></svg>
                    </a>
                </LiItem>
                <LiItem>
                    <a className="nav-link " href="/collections" data-tools="true" >
                        <svg width="24" height="24" viewBox="0 0 16 16" className="feather feather-layers" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                        </svg>
                    </a>
                </LiItem>
                <LiItem>
                    <a className="nav-link " href="/setting" data-tools="true"   >
                        <svg width={24} height={24} viewBox="0 0 16 16" className="feather feather-layers" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019L13 11l-.471.242-.529.026-.287.445-.445.287-.026.529L11 13l.242.471.026.529.445.287.287.445.529.026L13 15l.471-.242.529-.026.287-.445.445-.287.026-.529L15 13l-.242-.471-.026-.529-.445-.287-.287-.445-.529-.026z" />
                        </svg>
                    </a>
                </LiItem>

            </NavLeft>
        </>
    );
}

export default NavMain;

