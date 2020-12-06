import React from 'react'
import './Home.css';
import Product from './Product';
const Home = () => {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image'
                    src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='cover photo'
                />
                <div className='home__row'>
                    <Product title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
                        price={19.99}
                        rating={3}
                        img='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'
                    />
                    <Product
                        title='Kenwood kMix Stand Mixer for baking Stylish Kitchen Mixer with k-Beater'
                        price={239.0}
                        rating={4}
                        img='https://m.media-amazon.com/images/I/81O+GNdkzKL._AC_SX180_SY120_QL70_.jpg' />
                </div>
                <div className='home__row'>
                    <Product title="Samsung C24F390 24-Inch Curved LED Monitor - HDMI, VGA , Black"
                        price={199.99}
                        rating={4}
                        img='https://m.media-amazon.com/images/I/914KVrXKtyL._AC_UY218_.jpg' />
                    <Product
                        title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal Fabric"
                        price={39.99}
                        rating={4}
                        img="https://m.media-amazon.com/images/I/6182S7MYC2L._AC_UY218_.jpg"
                    />
                    <Product
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={949.99}
                        rating={5}
                        img="https://m.media-amazon.com/images/I/81FH2j7EnJL._AC_UY218_.jpg"
                    />
                </div>
                <div className='home__row'>
                    <Product title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440, 120Hz, Freesync, Gsync Compatible, HDMI, 2 x Displayport, USB"
                        price={1155.15}
                        rating={4}
                        img="https://m.media-amazon.com/images/I/6125mFrzr6L._AC_UY218_.jpg"
                    />
                </div>


            </div>
        </div>
    )
}

export default Home
