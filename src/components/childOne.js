import React, { useContext } from 'react'
import { MyContext } from '../myContext'
import './block.css'

const ChildOne = () => {
    const { commonData, setCommonData } = useContext(MyContext) // Implement useContext
    return (
        <div className='block' style={{ background: "#f99595" }}>
            <div>
                <h3>Child One</h3>
                <p>Has access to common data</p>
            </div>
            {/* Calling the setter exposed by context */}
            <button style={{ background: "#ff5d5d" }} onClick={() => setCommonData('Pink')}>Change content</button>
        </div>
    )
}

export default ChildOne