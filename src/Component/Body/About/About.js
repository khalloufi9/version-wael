import React from 'react'
import Slider from "react-slick";
import './About.css'

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div>
    {/*scoop**/}
    <div style={{backgroundColor:"black",height:"400px",paddingTop:"50px"}}>
      <h2> Latest News</h2>
      <Slider {...settings}>
        <div >
         
          <img style={{width:"300px", height:"200px",marginLeft:"50px"}} src="https://i1.wp.com/dicodusport.fr/wp-content/uploads/2016/01/football.png?fit=1200%2C670&ssl=1"/>
          <p>It is a long established fact that a reader will be </p>
        </div>
        <div>
        <img style={{width:"300px",height:"200px",marginLeft:"50px"}}src="https://cdnuploads.aa.com.tr/uploads/Contents/2017/09/05/thumbs_b_c_4f7478117e0322f2cda77475cf746b33.jpg?v=234538"/>
        <p>It is a long established fact that a reader will be </p>
        </div>
        <div>
        <img style={{width:"300px",height:"200px",marginLeft:"50px"}}src="https://www.lequipe.fr/_medias/img-photo-jpg/michut-et-simons-symbolisent-de-la-difficile-integration-des-jeunes-au-psg-a-reau-l-equipe/1500000001640569/0:0,1998:1332-828-552-75/05e8e.jpg"/>
        <p>It is a long established fact that a reader will be </p>
        </div>
        <div>
        <img style={{width:"300px",height:"200px",marginLeft:"50px"}}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD4H83nKg2gE0-anIRwrRC6vOqJii02q3Zukaej_FnR-HZK1c4KpVltLsyM0ZWxIzfzQI&usqp=CAU"/>
        <p>It is a long established fact that a reader will be </p>
        </div>  
      </Slider>
    </div>
    {/**NEXT */}
    <div style={{height:"500px",paddingTop:"50px",backgroundColor:"black"}}>
      <h2>Next</h2>
    
      <div className='table' >
        <div className='team'>
      <img style={{width:"180px",height:"250px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGUj6lCd2sGyaV1XmVULFUGduSre1eOPJ2NIDj5lLW_kqJrxazzfdB_VtP2HwZgqGoZBo&usqp=CAU"/>
      
      <img style={{width:"180px",height:"250px"}} src="https://img.freepik.com/vecteurs-libre/logo-versus-vs-modele-titre-bataille-conception-foudre-etincelante_159025-56.jpg"/>

      <img style={{width:"180px",height:"250px"}} src="https://wallpaperaccess.com/full/3882158.jpg"/>
      </div>
      <div className='team'>
      <img  style={{width:"50px"}}src="https://i.pinimg.com/originals/8e/35/07/8e35072f9c083812e54cedaa7bf76e9f.jpg"></img>
      <h4 style={{color:"white"}}>May 21, 2022 - 16:00</h4>
      </div>
      </div>

    </div>

    </div>
    
  );
  
 
}

export default About