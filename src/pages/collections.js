import React from 'react'
import fetch from 'isomorphic-fetch';
import NavMain from '../components/layouts/navbar/NavMain'
import ContentMain from '../components/layouts/content/main'
import Tools from '../components/layouts/content/Tools'


export default function Collection(props) {

    return (
        <>

            <NavMain />

            <div className="row mk-control mt-2" >
                <Tools>

                    <div className="mk-list">
                        <div className="mk-list_head">
                            <div className="mk-justify_between border-bottom">
                                <div className="kt-items">
                                    <em>Collection</em>
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
                                {

                                    props.datas.data.map((e) => (
                                        <>

                                            <li className="list-group-item py-1" >
                                                {e.title}
                                            </li>
                                        </>
                                    ))

                                }

                            </ul >
                        </div>
                    </div>

                </Tools>
                <ContentMain >

                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 mb-3 border-bottom">
                        <h6 >Collection</h6>
                        <div className="btn-toolbar mb-2 mb-md-0">

                            <form >
                                <div className="input-group mb-2 mr-sm-2">
                                    <input
                                        className='form-control form-control-sm'
                                        type='text'
                                        placeholder='Name'
                                        name='name'
                                        required />
                                    <div className="input-group-prepend">
                                        <input type="submit" value="Submit" className="btn btn-sm btn-outline-secondary " />
                                    </div>

                                </div>
                            </form>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <h1>asdfasdf</h1>
                        </div>
                    </div>
                </ContentMain>
            </div>

        </>
    )
}
export async function getStaticProps() {

    const resNotes = await fetch('http://localhost:300/api/notes');
    const datas = await resNotes.json()
    return {
        props: {
            datas,
        },
    }
}

