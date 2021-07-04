import React, { useState,useEffect } from "react";
import Nav from "./Nav"
import ShowEmployer from "./ShowEmployer"
import AddEmploye from "./AddEmploye";
import UpdateEmploye from "./UpdateEmploye"
import alertify from "alertifyjs"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'alertifyjs/build/css/alertify.css';

import { Container, Row, Col } from 'reactstrap';


export const ContextVeiris = React.createContext("Context verisi");

const Main = () => {


    //-----------------------------State'ler----------------------------------

    //Kişi verilerini tut
    const [musteriler, setMusteriler] = useState([{"isim":"ahmet","soyisim":"demir"}]);

    //Button Text
    const [btext,setBtext] = useState("Kayıt Ekle");

    //Ekle Panel Aç Kapa
    const [ekleGoster, setEkleGoster] = useState(false);

    //Güncelleme Panel Aç Kapa
    const [guncelGoster, setGuncelGoster] = useState(false);

    //Show Panel aç kapa
    const [showGoster,setShowGoster] = useState(true);


    //Güncelleme ve Silme için userİd i tut
    const [uid, setUid] = useState(null);

    //Guncelleme vs için kullanılacak verile.
    const [ad, setAd] = useState("Ahmet");
    const [soyad, setSoyad] = useState("");
    const [dt, setDt] = useState("");
    const [ud, setUd] = useState("");

    //Search State'i
    const [searh, setSearch] = useState("");


    //-----------------------------Fonksiyo'lar----------------------------------


    const getUser=()=>{

        fetch("http://localhost:3000/musteriler")
        .then(response => response.json())
        .then(data => setMusteriler(data))

    };

    const deleteUser=(id)=>{
       
        fetch("http://localhost:3000/musteriler/" + id, {
            method: "DELETE"
        }).then(res => res.json());

        getUser();
        

        alertify.error('Kayıt başarıyla silindi');


    }



     //-----------------------------Hook'lar----------------------------------

     useEffect(getUser,[musteriler])


 

    return (
        <div className="Main" >

            <Container>
                <Row>
                    <Nav btnText={btext} sbtnT={setBtext} ekleGoster={ekleGoster} setGoster={setEkleGoster} setSG={setShowGoster} />
                </Row>

                <Row>
                    <Col>
                        {ekleGoster ? <AddEmploye sbt={setBtext} sg={setShowGoster} eg={setEkleGoster}  sAd={setAd} ad={ad} sSoyad={setSoyad} soyad={soyad} sDt={setDt} dt={dt} sUd={setUd} ud={ud}  /> : <div></div>}
                    </Col>

                    <Col>
                        {showGoster?<ShowEmployer sbtnText={setBtext} suid={setUid} egoster={setEkleGoster} sgoster={setShowGoster} ggoster={setGuncelGoster} employe={musteriler} deleteU={deleteUser} />:<div></div>}
                    </Col>

                    <Col>
                        {guncelGoster ? <UpdateEmploye gg={setGuncelGoster} sg={setShowGoster}  sAd={setAd} ad={ad} sSoyad={setSoyad} soyad={soyad} sDt={setDt} dt={dt} sUd={setUd} ud={ud} uid={uid} suid={setUid} /> : <div></div>}

                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default Main;