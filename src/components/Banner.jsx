import BannerBackground from '../assets/bannerBackground.jpg';

const Banner = () => {
  return (
    <div className="banner">
        <div className="banner__img">
            <img src={ BannerBackground } alt="" />
        </div>
        <div className="banner__cover">
            <h1>
                Welcome to John's Market
            </h1>
            <h3>Every saturday & sunday at Zorrillo Avenue from <span>9am - 2pm</span></h3>
            <h2>The best quality products</h2>
        </div>
    </div>
  )
}

export default Banner