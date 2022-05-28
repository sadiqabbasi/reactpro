import React, { createContext, useState } from 'react'
export const happy=createContext()
const Api = (props) => {

    const [data,setData]=useState([
      {
        "Title" : " Katrina Kaif And Vicky Kaushal Might Share Screen Space In Jee Le Zaraa: Report - NDTV Movies",
        "CategoryName"  : "Bollywood",
        "PublishedDate" : "  January  / 15    2022",
        "ImageAsset"    : "https://c.ndtvimg.com/2022-01/qtklueco_katrina-kaif-_625x300_13_January_22.jpg  ",
        "BlogContent"   : "The film will also star Priyanka Chopra and Alia Bhatt in the lead roles along with Katrina Kaif",
        
    },
    {
        "Title" : " Tabu to star in Ajay Devgn's 'Bholaa' - the remake of Tamil blockbuster 'Kaithi' - Exclusive! - Times of India",
        "CategoryName"  : "Bollywood",
        "PublishedDate" : "Januaury  / 14 2022",
        "ImageAsset"    : "https://static.toiimg.com/thumb/msid-88872893,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-46584/88872893.jpg",
        "BlogContent"   : "The Hindi remake of Tamil blockbuster movie ‘Kaithi’ starring Ajay Devg"
    },
    {
      "Title" : "These six countries are about to go to the Moon — here’s why",
      "CategoryName"  : "Space",
      "PublishedDate" : "Januaury  / 14 2020",
      "ImageAsset"    : "https://media.nature.com/w260h146/magazine-assets/d41586-022-01252-7/d41586-022-01252-7_20373972.jpg",
      "BlogContent"   : "The Moon will be one of the most popular destinations in the Solar System in the next year. No fewer than seven missions are headed there from India, Japan, Russia, South Korea, the United Arab Emirates and the United States"
  }

    ])
  return (
    <div>
      <happy.Provider value={[data,setData]}>
        {props.children }
      </happy.Provider>
    </div>
  )
}

export default Api