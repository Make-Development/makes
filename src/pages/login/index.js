
import React, { useState } from 'react';

export default function Home(props) {


  const [contact, setContact] = useState({
    email: '',
    password: '',
    chk: false
  });


  const handleChange = e => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  }
  const Changechk = e => {
    contact.chk = e.target.checked;
    console.log(contact);

    setContact({ ...contact, [e.target.name]: e.target.checked });
  }


  const handleSubmit = async e => {
    e.preventDefault();
    console.log(contact)


  };


  return (

    <>
      <div className="container-fluid pl-0 bg-white">
        <div className="row no-gutter">
          <div className="d-none d-md-flex col-md-4 col-lg-8 bg-pic" >
            <div className=""></div>
          </div>

          <div className="col-md-8 col-lg-4">
            <div className="mk-login ">
              <div className="container row">
                <form onSubmit={handleSubmit}>
                  <div className="col-md-9 col-lg-8 mx-auto">

                    <blockquote className="blockquote text-center">
                      <img src="../lg_make.png" alt="" width={200} height={200} />
                    </blockquote>

                    <div className="form-label-group">
                      <input type="text" id="inputEmail" name="email"
                        className="form-control" onChange={handleChange}
                        placeholder="Email & User" />
                      <label htmlFor="inputEmail">Email & User</label>
                    </div>
                    <div className="form-label-group">
                      <input type="password" id="inputPassword"
                        name="password" onChange={handleChange}
                        className="form-control" placeholder="Password" />
                      <label htmlFor="inputPassword">Password</label>
                    </div>
                    <div className="custom-control custom-checkbox mb-3 pl-2">
                      <input type="checkbox" checked={contact.chk}
                        name="chk" onChange={Changechk}
                        className="custom-control-input" id="customCheck1" />
                      <label className="custom-control-label ml-2" >Remember password</label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold coderatings-button mb-2" type="submit">Sign in</button>

                    <button className="btn btn-lg btn-primary btn-block btn-login  font-weight-bold auth-google-button mb-2 " type="submit">
                      Sign up  Google</button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
