import {useState} from 'react'

let Skill = () => {
    const [data, setData] = useState([
        { language: 'React Js', company: 'Purwadhika' },
        { language: 'Express Js', company: 'Telkomsel' },
        { language: 'Node Js', company: 'Telkomsel' },
        { language: 'MySql Js', company: 'Telkomsel' },
        { language: 'Next Js', company: 'Telkomsel' }
      ])
    
      const [idx, setIdx] = useState(0)
    
      let getData = (idx) => {
        setIdx(idx)
      }

      let onDisplay = () => {
      return data.map((value, index) => {
          return(
            <div onClick={() => getData(index)}>
                {value.language}
            </div>
          )
      })
    }

        return(
        <>
        <div className="worked">
        <div className="title">
            <h1 >
                Skill i've learn
            </h1>
            <div className="line">
                
            </div>
        </div>
        <div className="sidebar">
            {onDisplay()}
        </div>
        <div className="description">
            {
             <div>
             <p className="title">
                 {data[idx].company}
             </p>
             <p className="desc">
               {data[idx].language}
             </p>
           </div>
            }
            </div>
        </div>
        </>
        )
    }

export default Skill