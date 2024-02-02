import './scss/index.scss'
import HeaderIntro from './components/articles/introduce/header_intro/header_intro';
import BannerSlider from './components/articles/banner_slider/banner_slider';
import WeddingSchedule from './components/articles/calendar_wedding/wedding-schedule';
// import LibraryImage from './components/articles/library_image/library_image';
import WeddingBox from './components/articles/wedding_box/wedding_box';
import ThankFor from './components/articles/thank_for/thank_for';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <HeaderIntro />
      <BannerSlider />
      <WeddingSchedule />
      {/* <LibraryImage /> */}
      <WeddingBox />
      <ThankFor />
    </div>
  );
}

export default App;
 