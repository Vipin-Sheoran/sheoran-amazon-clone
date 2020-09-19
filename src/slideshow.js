import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './slideshow.css'
 
const slideImages=['https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/BestOfTech/September/Bes_of-tech_Sept_1500x600._CB405702641_.jpg',
'https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/Wearables/Mi/Band5/MI-Xiaomi_get-in-the-zone-_GW_TollHero_1500x600._CB403875125_.jpg',
'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/Banners/XCM_Manual_ORIGIN_1262629_1338382_IN_1_3354545_1500x600_1X_en_IN._CB405622018_.jpg',
'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/MonsterSeries/V203057508_SamsungM_M21_M31_GW_tall_hero_1500x600._CB410822764_.jpg',
'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/WLA/September/Headsets/HeadsetDays/V250146967_WLA-Headset_Days_TallHero_1500x600._CB403722192_.jpg']
 
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
          
              <img className='slide__image' src={slideImages[2]} alt=''/>
            
          </div>
          <div className="each-slide">
            
            <img className='slide__image' src={slideImages[1]} alt=''/>
           
          </div>
          <div className="each-slide">
            
            <img className='slide__image' src={slideImages[0]} alt=''/>
           
          </div>
          <div className="each-slide">
            
            <img className='slide__image' src={slideImages[3]} alt=''/>
           
          </div>
          <div className="each-slide">
            
            <img className='slide__image' src={slideImages[4]} alt=''/>
           
          </div>
        </Slide>
      </div>
    )
}
export default Slideshow