import React, {useEffect} from 'react'
import './main.css'
//images==============
import img from '../../Assets/srinagar.jpg'
import img2 from '../../Assets/ladakh.jpg'
import img3 from '../../Assets/manali.jpg'
import img4 from '../../Assets/kedarnath.jpg'
import img5 from '../../Assets/redfort.jpg'
import img6 from '../../Assets/kutch.jpg'
import img7 from '../../Assets/jaipur.jpg'
import img8 from '../../Assets/Tajmahal.jpg'
import img9 from '../../Assets/varanasi.jpg'
import img10 from '../../Assets/darjeeling.jpg'
import img11 from '../../Assets/goa.jpg'
import img12 from '../../Assets/ooty.jpg'
import img13 from '../../Assets/kerala.jpg'
import img14 from '../../Assets/lakshadweep.jpg'
import {HiOutlineClipboardCheck, HiOutlineLocationMarker} from 'react-icons/hi'

import Aos from 'aos'
import 'aos/dist/aos.css'

//informmation of places=====================
const Data = [
//first jammu field====================================
  {
    id:1,
    imgSrc: img,
    destTitle: 'Srinagar',
    location: 'Jammu and Kashmir',
    grade:'4Days/3Night ',
    fees:'₹20000',
    description:'If there is heaven on earth, it is here. The "Land of Lakes and Gardens" Kashmir the magnificent beauty will surely steal your heart. Every place here is filled with the splendid gorgeousness of nature.'
  },

//second ladakh field=========================
  {
    id:2,
    imgSrc: img2,
    destTitle: 'Leh-Ladakh',
    location: 'Jammu and Kashmir',
    grade:'3Days/2Night ',
    fees:'₹15000',
    description:'The Land of High Passes. Snowcapped peaks, clear blue skies, barren mountains with meandering rivers, Ladakh is picturesque! It is also for some of the most difficult treks. Bike lovers enjoy this trail of rugged mountains.'
  },

//third manali field==========================
{
  id:3,
  imgSrc: img3,
  destTitle: 'Manali',
  location: 'Himachal Pradesh',
  grade:'4Days/3Night ',
  fees:'₹23000',
  description:'A gift of the Himalayas to the world. Manali is a beautiful township nestled in the picturesque Beas River valley. The hill resort is very popular among honeymooners making it a Lovers paradise. '
},

//forth kedarnath field==========================
{
  id:4,
  imgSrc: img4,
  destTitle: 'Kedarnath Temple',
  location: 'Uttarakhand',
  grade:'3Days/2Night ',
  fees:'₹13000',
  description:'It is popular for its ancient Shiva Temple, shrines, Himalayan ranges and near Chorabari Glacier, the area is flanked by the Kedarnath peaks and countless more ranges with peaks silver with snow.'
},

//fifth redfort field==========================
{
  id:5,
  imgSrc: img5,
  destTitle: 'Red Fort',
  location: 'Delhi',
  grade:'3Days/2Night ',
  fees:'₹8000',
  description:'There are many historical structures in Delhi. Red Fort is not only a building but a true witness of the national movement of Indian freedom. Thus, it is a symbol of the great and golden history of India.'
},

//sixth kutch field==========================
{
  id:6,
  imgSrc: img6,
  destTitle: 'Rann of Kutch',
  location: 'Gujarat',
  grade:'3Days/2Night ',
  fees:'₹12000',
  description:'The Great Rann of Kutch is a salt marsh in the Thar Desert in the Kutch District of Gujarat. "Kutch nahin dekha to kuch nahin dekha” so goes the tagline made famous by Amitabh Bachchan.'
},

//seventh jaipur field==========================
{
  id:7,
  imgSrc: img7,
  destTitle: 'Jaipur',
  location: 'Rajasthan',
  grade:'3Days/2Night ',
  fees:'₹16000',
  description:'Jaipur is popular as “Pink City” and situated in the royal deserts of the Rajasthan state which is also part of golden triangle tour packages India. Jaipur has many beautiful places like marvelous palaces, magnificent forts, museums, havelis, colorful bazaars and temples.'
},

//eight tajmahal field==========================
{
  id:8,
  imgSrc: img8,
  destTitle: 'Taj Mahal',
  location: 'Uttar Pradesh',
  grade:'2Days/1Night ',
  fees:'₹7000',
  description:'The beauty and unique charm of the Taj Mahal attracts millions of Indian as well as foreign tourists each year. Furthermore, the white dome at the centre of the mausoleum is beautiful and it is 35 meters in height.'
},

//ninth varanasi field==========================
{
  id:9,
  imgSrc: img9,
  destTitle: 'Varanasi',
  location: 'Uttar Pradesh',
  grade:'3Days/2Night ',
  fees:'₹7000',
  description:'Varanasi is one of the holiest and the oldest cities in the world, which makes it rich with cultural heritage. The city is home to ghats, temples, museums, and many Puranic places. The Kashi Vishwanath temple is widely recognized as Jyotirlinga of Shiva, Vishveshvara, or Vishvanath.'
},

//tenth darjeeling field==========================
{
  id:10,
  imgSrc: img10,
  destTitle: 'Darjeeling',
  location: 'West Bengal',
  grade:'3Days/2Night ',
  fees:'₹11000',
  description:'Darjeeling is known for its beautiful tea gardens, colonial architecture, and stunning views of the Himalayas. Start your day by visiting some of the famous tea gardens that Darjeeling is known for.'
},

//eleventh goa field==========================
{
  id:11,
  imgSrc: img11,
  destTitle: 'Goa',
  location: 'Goa',
  grade:'3Days/2Night ',
  fees:'₹16000',
  description:'Goa known for its beaches, Goa can be the perfect destination for a short holiday. Its sandy beaches and sunny weather attract people from across the globe. Moreover, it has multiple options for entertainment, like parties and nightlife, which also add to an exquisite holiday.'
},

//twelwe ooty field==========================
{
  id:12,
  imgSrc: img12,
  destTitle: 'Ooty',
  location: 'Tamil Nadu',
  grade:'3Days/2Night ',
  fees:'₹17000',
  description:'Nature loving tourists can go to Ooty Lake and enjoy its beauty or take a boat ride. There are many other lakeside tourist spots in Ooty like Avalanche Lake, Pykarak Lake and Bellikkal Lake. Botanical Garden is another haven for nature enthusiasts.'
},

//thirteen kerela field==========================
{
  id:13,
  imgSrc: img13,
  destTitle: 'Wayanad',
  location: 'Kerala',
  grade:'3Days/2Night ',
  fees:'₹16000',
  description:'Popularly known as “Gods own country”. Kerala is a coastal state in India, known for its distinctive tradition and culture. Its lush unspoiled tropical beauty, exotic locales and tranquil backwaters attract travelers from across the world who seeks leisurely vacation.'
},

//fourteen lakshadweep field==========================
{
  id:14,
  imgSrc: img14,
  destTitle: 'Maldives',
  location: 'Lakshadweep Island',
  grade:'3Days/2Night ',
  fees:'₹27000',
  description:'It is known for sun-kissed beaches, lush green landscape and  its luxurious overwater villas, white sandy beaches, vibrant coral reefs, and clear turquoise waters. The white sandy coastlines, abundant scenic charm and tranquil surroundings make Lakshadweep a popular family as well as honeymooning destination. It is visited by tourists from all around the globe.'
},



]

//============MAIN=====================================
const Main = () => {

//react hook to add scroll animation=============
    useEffect(()=>{
      Aos.init({duration: 2000})
    }, [])


  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-up" className="title">
          Destinations to visit
        </h3>
      </div>

      <div className="secContent grid">
        {/* using maps array*/} 

        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
            return(
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                
                <div className='cardInfo'>
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon'/>
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small> Couple</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    DETAILS <HiOutlineClipboardCheck className='icon'/>
                  </button>
                </div>
              </div>
            )
          })
        }     

      </div>

    </section>
  )
}

export default Main