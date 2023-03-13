import React from 'react'

const Global = ({data}) => {
  return (
    <>
     <div className="infra">
          <h5 >{data.title}</h5>
          <p>
            {data.para}
          </p>
          <div className="item">
            <img src="./img1/i1.jpg" alt="" />
            <img src="./img1/i2.jpg" alt="" />
            <img src="./img1/i3.jpg" alt="" />
          </div>
        </div>
    </>
  )
}

export default Global