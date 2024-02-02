import React from "react";
import QRNinh from '../../../assets/ninh.jpg';
import QRLinh from '../../../assets/linh.jpg';
import IntroCommonSecondary from '../../common/intro_common_secondary'

function WeddingBox() {
    return <div className="wedding-box">
        <div className="container">
            <div className="row">
                <div>
                    <IntroCommonSecondary title="Hộp mừng cưới" />
                </div>
                <div className="col-md-6 col-sm-12 donate-card d-flex justify-content-center">
                    <div className="item">
                        <h3 className="donate-title">{'Mừng cưới tới chú rể'}</h3>
                        <img className="qr-code-image" src={QRNinh} alt={QRNinh} />
                        <div className="bank-owner">
                            <span>{'Chú Rể: '}</span>
                            <span className="donate-own">{'Lưu Ngọc Thái Ninh'}</span>
                        </div>
                        <div className="donate-bank">
                            <span>{'Ngân hàng: '}</span>
                            <span className="donate-own">{'TP Bank'}</span>
                        </div>
                        <div className="bank-account">
                            <span>{'Số tài khoản'}: </span>
                            <span>{'8070 5593 986'}</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 donate-card d-flex justify-content-center">
                    <div className="item">
                        <h3 className="donate-title">{'Mừng cưới tới cô dâu'}</h3>
                        <img className="qr-code-image" src={QRLinh} alt={QRLinh} />
                        <div className="bank-owner">
                            <span>{'Cô Dâu: '}</span>
                            <span>{'Trần Thị Thùy Linh'}</span>
                        </div>
                        <div className="donate-bank">
                            <span>{'Ngân hàng: '}</span>
                            <span>{'Vietinbank'}</span>
                        </div>
                        <div className="bank-account">
                            <span>{'Số tài khoản'}: </span>
                            <span>{'1088 6932 8670'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default WeddingBox