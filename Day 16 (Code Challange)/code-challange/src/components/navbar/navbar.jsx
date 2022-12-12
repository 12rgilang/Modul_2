import './../../supports/mycss/mycss.css'



let Navbar= () => {
    return(
        <>
        <div className="navbar-main flex h-15 my-bg-main">
            <div className="flex left basis-1/2 items-center mx-2 ">
            Code Challange
            </div>
            <div className="right flex justify-end basis-1/2 my-2">
                <div className="item-1 border-2 rounded-full h-fit py-2 px-2 ">
                Login
                </div>
                <div className="items-2 mx-4 border-2 rounded-full h-fit py-2 px-2">
                Register
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Navbar;