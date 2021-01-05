import React, { useContext } from 'react'
import { MyContext } from '../myContext'
import './block.css'

const ChildTwo = () => {
    const { commonData, setCommonData } = useContext(MyContext)

    return (
        <div className='block' style={{ background: "#03a9f4" }}>
            <div>
                <h3>Child Two</h3>
                <p>Has access to common data</p>
            </div>
            <button style={{ background: "#1368ab" }} onClick={() => setCommonData('Blue')}>Change content</button>
        </div>
    )
}

export default ChildTwo