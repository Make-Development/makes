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

                    <div className="mk-list mb-2">
                        <div className="mk-list_head d-none">
                            <div className="mk-justify_between border-bottom">
                                <div className="kt-items">
                                    <em>Collection</em>
                                </div>
                                <div className="kt-items">
                                    <a className="btn btn-sm "  >
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-bar-chart-2"><line x1={18} y1={20} x2={18} y2={10} /><line x1={12} y1={20} x2={12} y2={4} /><line x1={6} y1={20} x2={6} y2={14} /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mk-list_content ">
                            <div className="card border-0 mb-3" style={{ 'background-image': 'linear-gradient(-225deg, #B7F8DB 0%, #50A7C2 100%)', }}>
                                <div className="card-body">
                                    <h6 className="mb-4">Daily Data</h6>
                                    <div className="row d-flex align-items-center" style={{ 'color': '#fff' }}>
                                        <div className="col-9">
                                            <h3 className="f-w-300 d-flex align-items-center m-b-0">
                                                <svg width="20px" height="20px" viewBox="0 0 16 16" className="bi bi-clipboard-data" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillrule="evenodd" d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                                    <path fillrule="evenodd" d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                                                    <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z" />
                                                </svg>
                                                <small className="ml-2" style={{ 'font-size': '0.575em' }}> 50.20 Mb.</small>
                                            </h3>
                                        </div>
                                        <div className="col-3 text-right">
                                            <p className="m-b-0">38%</p>
                                        </div>
                                    </div>
                                    <div className="progress m-t-30" style={{ height: 7 }}>
                                        <div className="progress-bar progress-c-theme" role="progressbar"
                                            aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}
                                            style={{ width: '38%', backgroundColor: '#546173' }} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="mk-list">
                        <div className="mk-list_head">
                            <div className="mk-justify_between border-bottom">
                                <div className="kt-items">
                                    <em>Collection</em>
                                </div>
                                <div className="kt-items">
                                    <a className="btn btn-sm d-none"  >
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-bar-chart-2"><line x1={18} y1={20} x2={18} y2={10} />
                                            <line x1={12} y1={20} x2={12} y2={4} /><line x1={6} y1={20} x2={6} y2={14} /></svg>
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
                                                {e.firstName}
                                            </li>
                                        </>
                                    ))

                                }

                            </ul >
                        </div>
                    </div>
                </Tools>
                <ContentMain >

                    <div className="card mb-2">
                        <div className="card-body ">
                            <div className="card-title">
                                <div className="d-flex justify-content-between  flex-wrap flex-md-nowrap align-items-center  px-2 mb-2 border-bottom ">
                                    <h6>Collection</h6>
                                    <div className="btn-toolbar mb-2 mb-md-0">
                                    </div>
                                </div>
                            </div>

                            <div className="py-2 px-3">

                                <form>
                                    <div className="form-group row mt-1 mb-3">
                                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Select</label>
                                        <div className="col-sm-2">
                                            <select class="form-control mr-sm-2" id="inlineFormCustomSelect">
                                                <option selected>Api</option>
                                                <option value="1">Json</option>
                                                <option value="2">Text</option>
                                                <option value="3">Import</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row my-1">
                                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">URL</label>
                                        <div className="col-sm-10">
                                            <input type="email" className="form-control" id="inputEmail3" value="http://localhost:300/api/users" />
                                        </div>
                                    </div>
                                    <div className="form-group row my-1">
                                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Content</label>
                                        <div className="col-sm-10">
                                            <input type="email" className="form-control" id="inputEmail3" />
                                        </div>
                                    </div>


                                </form>



                            </div>
                        </div>
                    </div>



                    <div className="card mb-2">
                        <div className="card-body ">
                            <div className="card-title">
                                <div className="d-flex justify-content-between  flex-wrap flex-md-nowrap align-items-center  px-2 mb-2 border-bottom ">
                                    <h6>Body</h6>
                                    <div className="btn-toolbar mb-2 mb-md-0">
                                        <ul className="list-inline">
                                            <li className="list-inline-item">Status : <small style={{ color: '#dd8223' }}>200 OK</small></li>
                                            <li className="list-inline-item">Time : <small style={{ color: '#dd8223' }}>785 ms</small></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="py-1">
                                <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
                                    <li className="nav-item " role="presentation">
                                        <a className="nav-link active border-0" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Pretty</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link border-0 " id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Raw</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link border-0" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Preview</a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active py-1" id="home" role="tabpanel" aria-labelledby="home-tab">

                                        <div className="card" >
                                            <div className="card-body" style={{ height: '250px' }}>

                                                <div>
                                                    [
                                                    {'{'}"id":1, "name":"name1"{'}'},
                                                    {'{'}"id":2, "name":"name2", "salary":2000{'}'},
                                                    {'{'}"id":3, "name":"name3"{'}'},
                                                    {'{'}"id":4, "name":"name4", "bonus":3000{'}'},
                                                    {'{'}"id":5, "name":"name5", "salary":{'{'}"basic":2000, "extra":"500"{'}'}{'}'},
                                                    {'{'}"id":6, "name":"name6", "bonus":[{'{'}"quarter":1, "first":1000, "second":"500"{'}'},{'{'}"quarter":2, "first":1000, "second":"500"{'}'}]{'}'}
                                                    ]
                                                    </div>

                                            </div>
                                        </div>

                                    </div>
                                    <div className="tab-pane fade py-1" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div className="card" >
                                            <div className="card-body" style={{ height: '250px' }}>

                                                <div>
                                                    [
                                                        {'{'}"id":1, "name":"name1"{'}'},
                                                        {'{'}"id":2, "name":"name2", "salary":2000{'}'},
                                                        {'{'}"id":3, "name":"name3"{'}'},
                                                        {'{'}"id":4, "name":"name4", "bonus":3000{'}'},
                                                        {'{'}"id":5, "name":"name5", "salary":{'{'}"basic":2000, "extra":"500"{'}'}{'}'},
                                                        {'{'}"id":6, "name":"name6", "bonus":[{'{'}"quarter":1, "first":1000, "second":"500"{'}'},{'{'}"quarter":2, "first":1000, "second":"500"{'}'}]{'}'}
                                                        ]
                                                        </div>

                                            </div>
                                        </div>

                                    </div>
                                    <div className="tab-pane fade py-1" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                        <div className="card" >
                                            <div className="card-body" style={{ height: '250px' }}>

                                                <div>
                                                    [
                                                    {'{'}"id":1, "name":"name1"{'}'},
                                                    {'{'}"id":2, "name":"name2", "salary":2000{'}'},
                                                    {'{'}"id":3, "name":"name3"{'}'},
                                                    {'{'}"id":4, "name":"name4", "bonus":3000{'}'},
                                                    {'{'}"id":5, "name":"name5", "salary":{'{'}"basic":2000, "extra":"500"{'}'}{'}'},
                                                    {'{'}"id":6, "name":"name6", "bonus":[{'{'}"quarter":1, "first":1000, "second":"500"{'}'},{'{'}"quarter":2, "first":1000, "second":"500"{'}'}]{'}'}
                                                    ]
                                                    </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>






                            </div>
                        </div>
                    </div>


                </ContentMain>
            </div>

        </>
    )
}
export async function getStaticProps() {

    const resNotes = await fetch('http://localhost:300/api/users');

    const datas = await resNotes.json()

    return {
        props: {
            datas,
        },
    }
}

