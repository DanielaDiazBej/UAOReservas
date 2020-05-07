
import React from 'react';
//import './Slider.css';
 
class Slider extends React.Component {
 
  render() {
 
   return (
 
   <div id="slider" className="carousel slide" data-ride="carousel">
     <ol className="carousel-indicators">
         <li data-target="#slider" data-slide-to="0" className="active"></li>
         <li data-target="#slider" data-slide-to="1"></li>
         <li data-target="#slider" data-slide-to="2"></li>
     </ol>
     <div className="carousel-inner">
         <div className="carousel-item active">
             <img className="img-fluid" src="https://scontent.fclo5-1.fna.fbcdn.net/v/t1.0-9/14344928_1256991414345116_8998968711895749828_n.png?_nc_cat=109&_nc_sid=05277f&_nc_eui2=AeGGsIz6CwEJ-OWgF-YExe6r68bc7gArMr7rxtzuACsyvn0_CPQR7t1Qq9mGZr_mlkmSo3GUAtkdZG4Cbh1TfgR-&_nc_oc=AQkVxxU64haLFC6aWk5wH0FsnIATPf5Qw0DzYTWVEoWh0L0-f8TC20bovNbDK2_8RXQ&_nc_ht=scontent.fclo5-1.fna&oh=1aa6a5b30d1fffb50bd3a168b3f6087c&oe=5EDA3497" />      
         </div>
         <div className="carousel-item">
             <img className="img-fluid" src="https://scontent.fclo5-1.fna.fbcdn.net/v/t1.0-9/14479635_1273068186070772_401221531515020703_n.png?_nc_cat=110&_nc_sid=05277f&_nc_eui2=AeGpipoeNirf3X8JDsR5DOi_EktWZgTO7twSS1ZmBM7u3AmEisUemCvD7D3S5ljo34QTO3KGT3D8flmaDZgpO-B8&_nc_oc=AQksV8ABxSx9_7xbVGpAV3IUT0CDPg9ZzDRWTBlELZRipyB6tfuQpclSgx-fXRFF-Fo&_nc_ht=scontent.fclo5-1.fna&oh=b84ebb304f178a188bf3bc11c346f793&oe=5EDBDB5C" />         
         </div>
         <div className="carousel-item">
             <img className="img-fluid" src="https://scontent.fclo5-1.fna.fbcdn.net/v/t1.0-9/11264437_953082251402702_5860834777659389807_n.png?_nc_cat=105&_nc_sid=05277f&_nc_eui2=AeGDNK2wzV0nx64n9P0TcrybG2JXa-MixtkbYldr4yLG2YHepbAKdn_dfzzmgBZE6CwTKHFD8n28MrUMB3iQkRs1&_nc_oc=AQm0vStQZPHPr0uUvn2pgj2I2qVUnZ_lp80_lWACLSOT2rv_EbDQX32TvI0xm2XCoMw&_nc_ht=scontent.fclo5-1.fna&oh=d07d33c6da7a76f8cd7601d25eb73047&oe=5EDB1A4A" />        
         </div>
     </div>
     <a className="carousel-control-prev" href="#slider" role="button" data-slide="prev">
         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
         <span className="sr-only">Previous</span>
     </a>
     <a className="carousel-control-next" href="#slider" role="button" data-slide="next">
         <span className="carousel-control-next-icon" aria-hidden="true"></span>
         <span className="sr-only">Next</span>
     </a>
 </div>
 
   )
    
  }
 
}
 
export default Slider;