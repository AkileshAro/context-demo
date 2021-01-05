import React, { useContext } from 'react'
import { MyContext } from '../myContext'
import './block.css'
const ChildThree = () => {
    const { commonData, setCommonData } = useContext(MyContext)

    return (
        <div className='block' style={{ background: "#4caf50" }}>
            <div>
                <h3>Child Three</h3>
                <p>Has access to common data</p>
            </div>

            <button style={{ background: "#28632a" }} onClick={() => setCommonData('Green')}>Change content</button>
        </div>
    )
}
export default ChildThree
