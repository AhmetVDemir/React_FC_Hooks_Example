import React from 'react'
import { Badge, Button, Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ShowEmployer = (props) => {


    function guncellemeGoster(guid){

        props.ggoster(true);
        props.egoster(false);
        props.sgoster(false);
        props.suid(guid);
    }



    return (
        <div className="AddEmp">

            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>İsim</th>
                        <th>Soyisim</th>
                        <th>D.Tarihi</th>
                        <th>Ü.Durumu</th>
                    </tr>
                </thead>
                <tbody>
                    {props.employe.map(kisi => (
                        <tr key={kisi.id}>
                            <td>{kisi.id}</td>
                            <td>{kisi.Ad}</td>
                            <td>{kisi.Soyad}</td>
                            <td>{kisi.DogumT}</td>
                            <td> {kisi.Durum === "Aktif" ? <Badge color="success">{kisi.Durum}</Badge> : <Badge class="btn-danger">{kisi.Durum}</Badge>} </td>
                            <td> <Button color="danger" onClick={()=>{props.deleteU(kisi.id)}} >Sil</Button> </td>
                            <td><Button color="warning" onClick={()=>{guncellemeGoster(kisi.id)}} >Güncelle</Button></td>

                        </tr>

                    ))}

                </tbody>
            </Table>





        </div>
    )
}
export default ShowEmployer;