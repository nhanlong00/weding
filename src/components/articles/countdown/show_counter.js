import DateTimeDisplay from './datetime_display'

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className='countdown-box'>
      <div className="show-counter">
        <DateTimeDisplay value={days} type={'Ngày'} isDanger={days <= 3} />
        <p className='colon'>:</p>
        <DateTimeDisplay value={hours} type={'Giờ'} isDanger={false} />
        <p className='colon'>:</p>
        <DateTimeDisplay value={minutes} type={'Phút'} isDanger={false} />
        <p className='colon'>:</p>
        <DateTimeDisplay value={seconds} type={'Giây'} isDanger={false} />
      </div>
    </div>
  );
};

export default ShowCounter