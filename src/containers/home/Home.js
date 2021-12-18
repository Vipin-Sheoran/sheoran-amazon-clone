import React from 'react'
import './Home.css'
import Product from '../../components/product/Product'

function Home() {
    
    return (
        <div className='home'>
            <div className='home__container'>
                
               {/* <Slideshow className="home__image"/> */}
                {/* <img className="home__image" src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/BestOfTech/September/Bes_of-tech_Sept_1500x600._CB405702641_.jpg' alt=''></img> */}
                    <div className='product__row'>
                    <Product title={'The Lean Startup: How Constant Innovation Creates Radically Successful Businesses' }
                    price={615}
                    rating={3}
                    id={'DCZFVVTSTGSTVRWsvsfsfvfdnhgjmki,kiy,up.iopynfgfgfbhmj'}
                    image={'https://3.bp.blogspot.com/-nc64-eLzumM/Vx-O3m5AZaI/AAAAAAAAATE/zD5ffSYIMOMBixIADInSEH7XRns6UHm_gCLcB/s1600/IqXcCwAAQBAJ.jpg'}/>
                   <Product title={'Lifelong Power Pro 500-Watt Mixer Grinder with 3 Jars (White/Grey)'}
                    image={'https://m.media-amazon.com/images/I/612Wn2npFkL._AC_UY327_FMwebp_QL65_.jpg'}
                    rating={3}
                    price={1249}
                    id='avgngyumui,o;uijfhc'
                    />
                    
                   <Product title={'Samsung 23.5 inch (59.8 cm) Curved LED Backlit Computer Monitor - Full HD, VA Panel with VGA, HDMI, Audio Ports - LC24F390FHWXXL (Black)'}
                    image={'https://m.media-amazon.com/images/I/71nplbAMwzL._AC_UY327_FMwebp_QL65_.jpg'}
                    rating={3}
                    price={9699}
                    id={'zxcfdvdssadcascfvx'}
                    />
                    
                      </div>

                    <div className='product__row'>
                    <Product title={'Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)'}
                    image={'https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY327_FMwebp_QL65_.jpg'}
                    rating={4}
                    price={3499}
                    id={'ascrewgtbfd'}
                    />
                    
                    <Product title={'SkyTree Scratch Proof Tempered Glass Screen Protector for Apple iPad Pro 12.9 (2015)'}
                    image={'https://m.media-amazon.com/images/I/41KEVOC4ofL._AC_UY327_FMwebp_QL65_.jpg'}
                    rating={4}
                    price={19999}
                    id={'aacajfvsnvhb'}
                    />
                    <Product image={'https://m.media-amazon.com/images/I/61bTR1wJ9dL._AC_UL480_FMwebp_QL65_.jpg'}
                    title={'Analogue - Digital Black Dial Mens & Boys Watch'}
                    rating={4}
                    price={580}
                    id={'asmxjanada'}
                    />
                    <Product image={'https://m.media-amazon.com/images/I/816rruNShkL._AC_UY327_FMwebp_QL65_.jpg'}
                    title={'Zebronics Computer Multimedia 2.1 Speaker with Bluetooth, SD Card, USB, AUX, FM and Remote Control - BT2490RUCF'}
                    rating={4}
                    price={2649}
                    id={'kasncjsbauvsbvusdgbvysgbvytvbyb'}
                    />
                    
                    </div> 
                    <div className='product__row'>
                     <Product title={'Apple iPhone 7 Plus (32GB) - Black'}
                    image={'https://m.media-amazon.com/images/I/41DvAKt7CaL._AC_UY327_FMwebp_QL65_.jpg'}
                    rating={5}
                    price={35999}
                    id={'ajdcnvuoavh'}
                    /> 
                    <Product image={'https://m.media-amazon.com/images/I/51Bqi57q73L._AC_UL480_FMwebp_QL65_.jpg'}
                    title={'ReebokWomens Zpump Fusion  Multisport Training Shoes'}
                    rating={4}
                    price={6119}
                    id='msiocsdofnvjsnvjnvg'
                    />
                    
                   </div>
            </div>
        </div>
    )
}

export default Home
