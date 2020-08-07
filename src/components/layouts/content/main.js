const main = (props) => {
    return (
        <>
            <main role="main" className=" col-md-9 ml-md-auto col-lg-11 mk-control_main mr-3">
                {props.children}
            </main>
        </>
    );
}

export default main;

