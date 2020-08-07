const Nav_top = (props) => {
    return (
        <>
            <nav className="navbar navbar-light bg-light fixed-top  flex-md-nowrap pl-4 pr-3 py-0 shadow-sm">
                <a className="navbar-brand" href="#"><span className="navbar-toggler-icon" />
                    <span className="sr-only">(current)</span>
                </a>
                <nav className="my-2 my-md-0 mr-md-3">
                    {props.children}
                </nav>
            </nav>
        </>
    );
}

export default Nav_top;
