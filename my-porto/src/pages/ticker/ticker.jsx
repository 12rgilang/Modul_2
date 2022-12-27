import './ticker.css'

function Ticker(){
    return(
        <>
        <div className="word flex ticker-container items-center h-24 w-fit lg:w-screen  ">
            <div className="ticker flex w-auto text-5xl items-center lg:text-7xl ">
                <div className="sql px-5 flex ">
                    MY SQL
                </div>
                <div className="Eexpress flex">
                    EXPRESS JS
                </div>
                <div className="react px-5 flex">
                    REACT JS
                </div>
                <div className="node flex">
                    NODE JS
                </div>

            </div>
           
        </div>
        
        </>
    )
}

export default Ticker