import React from "react";
import TableCalendar from "./table_calendar";
import CountdownTimer from "../countdown/countdown_timer";
import WeddingImg from '../../../assets/anhwedding1.jpg'

function WeddingSchedule() {
    const THREE_DAYS_IN_MS = 17 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime()
    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

    return <div className="wedding-schedule">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <div className="invitation-box left">
                        <div className="left-vec"></div>
                        <div className="inner-box">
                            <img className="image-banner" src={WeddingImg} alt={WeddingImg} />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="invitation-box right">
                        <div className="right-vec"></div>
                        <div className="inner-box">
                            <div className="box-calendar">
                                <TableCalendar />
                                <div className="line-bottom"></div>
                                 <CountdownTimer targetDate={dateTimeAfterThreeDays} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default WeddingSchedule