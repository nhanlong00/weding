import React from 'react'

function IntroCommon(props) {
    return <div className='intro-common d-flex align-items-center justify-content-center'>
        <div className='line'></div>
        <div className='title-common'>{props.title}</div>
        <div className='line'></div>
    </div>
}

export default IntroCommon