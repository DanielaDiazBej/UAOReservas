import React from 'react';
import "./User.css";
import ButModal from '../ButModal/ButModal.js';
import Button from 'react-bootstrap/Button';


function User() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className="o-usCont">
            <Button variant="danger" onClick={() => setModalShow(true)}>
                Ingresar
            </Button>

            <ButModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
};


export default User;