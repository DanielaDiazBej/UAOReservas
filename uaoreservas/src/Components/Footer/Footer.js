import React from 'react';
 
 
class Footer extends React.Component {
 
  render() {
 
    return (
 
        <footer className="footer mt-auto py-3 bg-light">
            <div className="container">
            <p className="float-right"><a href="#">Subir</a></p>
            <p> &copy; {(new Date().getFullYear())} UAO Reservas </p>
            </div>
        </footer>
    ) 
  }
}
 
export default Footer;