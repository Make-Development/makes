import React from 'react'

import ContentMain from '../components/layouts/content/main'

export default function Setting() {
    return (
        <>
            <nav className="navbar navbar-light bg-light fixed-top  flex-md-nowrap pl-4 pr-3 py-0 shadow-sm">
                <a className="navbar-brand" href="#"><span className="navbar-toggler-icon" />
                    <span className="sr-only">(current)</span></a>
                <nav className="my-2 my-md-0 mr-md-3">
                    <a className="px-3 py-2 text-dark" href="#">
                        <svg viewBox="0 0 28 28" className="a8c37x1j ms05siws hwsy1cff b7h9ocf4 fzdkajry" height={20} width={20}>
                            <path d="M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z" /></svg>
                    </a>
                    <a className="px-3 py-2 text-dark" href="#">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-three-dots-vertical" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                        </svg>
                    </a>
                </nav>
            </nav>


            {/* Body */}

            <div className="container-fluid ">
                <nav className=" d-none d-md-block bg-light mk-sidebar" >
                    <div className="mk-sidebar_sticky">

                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link" href="/" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-layers">
                                        <polygon points="12 2 2 7 12 12 22 7 12 2" />
                                        <polyline points="2 17 12 22 22 17" />
                                        <polyline points="2 12 12 17 22 12" /></svg>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " data-tools="true"   >
                                    <svg width={24} height={24} viewBox="0 0 16 16" className="feather feather-layers" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019L13 11l-.471.242-.529.026-.287.445-.445.287-.026.529L11 13l.242.471.026.529.445.287.287.445.529.026L13 15l.471-.242.529-.026.287-.445.445-.287.026-.529L15 13l-.242-.471-.026-.529-.445-.287-.287-.445-.529-.026z" />
                                    </svg>

                                </a>
                            </li>
                        </ul>

                    </div>
                </nav>
           
                <div className="row mk-control" >
                    <div className="   mk-control_tools ml-md-auto" >
                        <div className="mk-list">
                            <div className="mk-list_head">
                                <div className="mk-justify_between border-bottom">
                                    <div className="kt-items">
                                        <em>Setting</em>
                                    </div>
                                    <div className="kt-items">
                                        <a className="btn btn-sm"  >
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-bar-chart-2"><line x1={18} y1={20} x2={18} y2={10} /><line x1={12} y1={20} x2={12} y2={4} /><line x1={6} y1={20} x2={6} y2={14} /></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="mk-list_content">
                                <ul className="list-group">
                                    <li className="list-group-item" >Cras justo odio</li>
                                    <li className="list-group-item" >Dapibus ac facilisis in</li>
                                    <li className="list-group-item" >Morbi leo risus</li>
                                    <li className="list-group-item" >Porta ac consectetur ac</li>
                                    <li className="list-group-item" >Vestibulum at eros</li>
                                </ul >
                            </div>
                        </div>
                    </div>

                    <ContentMain>
                        <h5 className="">Setting</h5>

                        <div className="btn-toolbar mb-2 mb-md-0">

                        </div>


                    </ContentMain>

                </div >

            </div >


        </ >
    )

}
