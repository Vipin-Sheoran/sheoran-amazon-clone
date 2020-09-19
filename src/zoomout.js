import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
 
const images=['https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/BestOfTech/September/Bes_of-tech_Sept_1500x600._CB405702641_.jpg',
'https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/Wearables/Mi/Band5/MI-Xiaomi_get-in-the-zone-_GW_TollHero_1500x600._CB403875125_.jpg',
'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/Banners/XCM_Manual_ORIGIN_1262629_1338382_IN_1_3354545_1500x600_1X_en_IN._CB405622018_.jpg',
'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/MonsterSeries/V203057508_SamsungM_M21_M31_GW_tall_hero_1500x600._CB410822764_.jpg',
'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/WLA/September/Headsets/HeadsetDays/V250146967_WLA-Headset_Days_TallHero_1500x600._CB403722192_.jpg']
 
const SlideZoom = () => {
    return (
      <div className="slide-container">
        <Zoom scale={0.4}>
          {
            images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
          }
          </Zoom>
      </div>
    )
}

export default SlideZoom