import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "reactstrap";



const Nav=(props)=>{



    const arama=()=>{
        alert("arandı");
    }


    return (
        <div className="Nav" >


            <div className="Ara">
                <input onChange={arama} class="form-control me-2" type="search" placeholder="Ara" aria-label="Ara" />
            </div>

            <div className="Menu">
                <Button className="btn btn-success" onClick={()=>{
                    if(props.ekleGoster===true){
                        props.setGoster(false)
                        props.setSG(true)
                        props.sbtnT("Kayıt Ekle");
                    }else if(props.ekleGoster===false){
                        props.setGoster(true)
                        props.setSG(false)
                        props.sbtnT("Kişileri-Göster");
                    }
                    console.log(props.ekleGoster)
                }}>{props.btnText}</Button>
            </div>

        

            
           
        </div>
    )
}


export default Nav;