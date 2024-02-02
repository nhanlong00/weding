import React from 'react'
import IntroCommon from '../../../common/intro_common';
import { CiHeart } from "react-icons/ci";

function HeaderIntro() {
    return <div className='introduction line-bottom'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 d-flex align-items-center justify-content-center'>
                    <h3 className='title'>{'Thái Ninh'}</h3>
                    <CiHeart className='heart-icon' />
                    <h3 className='title'>{'Thùy Linh'}</h3>
                </div>
                <IntroCommon title={'Chuyến tàu mang tên hạnh phúc đã cập bến'} />
            </div>
        </div>
    </div>
}

export default HeaderIntro