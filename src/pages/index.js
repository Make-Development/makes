import React from 'react';
import fetch from 'isomorphic-fetch';
import NavMain from '../components/layouts/navbar/NavMain'
import ContentMain from '../components/layouts/content/main'

export default function index(props) {

  return (
    <>
      <NavMain />
      <ContentMain>

        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Dashboard</h1>
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
        {

          props.notes.data.map( (e)=> (
            <>
              <div class="alert alert-primary" role="alert">
                  {e.title}
              </div>
            </>
          ))

        }

        <div className="row">
          {

            props.datas.map(({ show }) => (

              <div className="col-3" data-key={show._id}>
                <div className="card mb-3" style={{ maxWidth: 540 }}>
                  <div className="row no-gutters">
                    <div className="col-md-4 p-0">
                      <img src={show.image.medium} className="card-img-top" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h6 className="card-title">{show._id} {show.name}</h6>
                        <p className="card-text">This is a wider card</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            ))

          }
        </div>

      </ContentMain>


    </>
  )

}

export async function getStaticProps() {

  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const datas = await res.json()

  const resNotes = await fetch('http://localhost:300/api/notes');
  const notes = await resNotes.json()
  return {
    props: {
      datas, notes,
    },
  }
}


