import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import alertify from "alertifyjs"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'alertifyjs/build/css/alertify.css';


const AddEmploye = (props) => {


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

    const onSubmitHandler = (event) => {
        event.preventDefault();

        fetch("http://localhost:3000/musteriler",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                    "Ad": props.ad,
                    "Soyad": props.soyad,
                    "DogumT": props.dt,
                    "Durum": props.ud
                })
            })
            .then(function (res) { console.log(res) })
            .catch(function (res) { console.log(res) })

            props.eg(false);
            props.sg(true);
            props.sbt("Kayıt Ekle")

            alertify.success("Kayıtlar Başarıyla eklendi")


    }



    return (
        <div className="AddEmp">

            <Form onSubmit={onSubmitHandler}>
                <FormGroup>
                    <Label for="isim">İsim</Label>
                    <Input onChange={nameChange} type="text" name="ad" id="ad" />
                    <Label for="soyisim">Soy İsim</Label>
                    <Input type="text" onChange={soyadChange} name="soyad" placeholder="Soyisim" />
                    <Label for="DTarigi">Dogum Tarihi</Label>
                    <Input type="text" onChange={dtChange} name="dtarihi" placeholder="Doğum Tarihi" />
                    <Label for="DTarigi">Üyelik Durumu</Label>
                    <Input type="select" onChange={udChange} name="udurumu" >
                    <option>Seçiniz</option>
                        <option>Aktif</option>
                        <option>Pasif</option>
                    </Input>
                    <br/>

                    <Button  type="submit" size="lg" color="success">Kaydet</Button>



                </FormGroup>
            </Form>


        </div>
    )
}

export default AddEmploye;
