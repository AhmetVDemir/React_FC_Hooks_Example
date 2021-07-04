import React, { useState } from "react";
import { Form, FormGroup, Label, Input,ButtonGroup,Button } from 'reactstrap';
import 'alertifyjs/build/css/alertify.css';
import alertify from "alertifyjs"
import 'bootstrap/dist/css/bootstrap.min.css';



const UpdateEmploye = (props) => {


    const nameChange = (event) => {

        props.sAd(event.target.value);
        console.log(event.target.value);
    }
    const soyadChange = (event) => {

        props.sSoyad(event.target.value);
        console.log(event.target.value);
    }

    const dtChange = (event) => {

        props.sDt(event.target.value);
        console.log(event.target.value);
    }

    const udChange = (event) => {

        props.sUd(event.target.value);
        console.log(event.target.value);
    }

        
        let isim="";
        let soyisim="";
        let dt="";
        let ud = "";

   


    const onSubmitHandler=(event)=>{


        event.preventDefault();


        fetch("http://localhost:3000/musteriler/" + props.uid,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "PATCH",
                body: JSON.stringify({
                    "Ad": props.ad,
                    "Soyad": props.soyad,
                    "DogumT": props.dt,
                    "Durum": props.ud
                })
            })
            .then(function (res) { console.log(res) })
            .catch(function (res) { console.log(res) })

        alertify.warning("Kayıt Başarıyla güncellendi")
        
        props.gg(false);
        props.sg(true);


    }

    const iptal=()=>{
        props.gg(false);
        props.sg(true);
        isim="";
        soyisim="";
        dt="";
        ud="";
    }


    return (
        <div>


            <br />
            <h2>{}</h2>


            <Form onSubmit={onSubmitHandler}>
                <FormGroup>
                    <Label>İsim</Label>
                    <Input onChange={nameChange} defaultValue={isim} type="text" name="ad" id="ad" />
                    <Label>Soy İsim</Label>
                    <Input onChange={soyadChange} defaultValue={soyisim} type="text" name="soyad" id="soyad" />
                    <Label>Doğum Tarihi</Label>
                    <Input onChange={dtChange} defaultValue={dt} type="text" name="dt" id="dt" />
                    <Label>Üyelik Durumu</Label>
                    <Input onChange={udChange} defaultValue={ud} type="select" name="ud" id="ud">
                        <option>Seçiniz</option>
                        <option >Aktif</option>
                        <option >Pasif</option>
                    </Input>
                </FormGroup>
                <ButtonGroup>
                    <Button color="warning" onChange={iptal} >İptal</Button>
                    <Input type="submit" className={"btn btn-success"} value="Güncelle" />
                </ButtonGroup>
            </Form>


        </div>
    )
}

export default UpdateEmploye;