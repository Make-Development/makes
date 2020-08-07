

const Ui_nav = (props) => {
    return (
        <>

            <nav className=" d-none d-md-block bg-light mk-sidebar" >
                <div className="mk-sidebar_sticky">
                    <ul className="nav flex-column">
                        {props.children}
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Ui_nav;