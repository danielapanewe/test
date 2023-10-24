import bannerimg from '../assets/bannerhome.png';

function Banner() {
    return (
        <div
            className="w-full h-[100vh] flex  items-center justify-center  "
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.4)) ,url(${bannerimg})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <div className='containers flex flex-col gap-4 text-left sm:text-center'>
            <p className='text-primarycolor paragraph before:w-8 before:h-[3px] before:mr-2 before:bg-primarycolor before:inline-block before:align-middle'>Nous vous proposons</p>
            <h2 className="tracking-tight heading lg:text-5xl  text-white uppercase">Des bons poissons braisés où que vous soyez</h2>
            <p className='text-white  paragraph '>Délicieux, savoureux et frais comme vous les aimez!</p>
            </div>
           
        </div>
    );
}

export default Banner;
