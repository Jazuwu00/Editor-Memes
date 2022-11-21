import React,{useState} from 'react';
import html2canvas from 'html2canvas';
export default function Imgmeme(){

    const [Textomeme,setTextoMemes]=useState();
    const [imgmemes,setImgmemes]=useState(1);
    const seleccionarImg=(e)=>{
       setImgmemes(e.target.value);
    }
    
    const textoIngresado =(e)=>{
        setTextoMemes(e.target.value);
    }
    const exportar =(e)=>{
        html2canvas(document.querySelector("#exportarImg")).then(function(canvas){
            // {docuement.body.appendChild(canvas);}
            // ubicacion de la imagen
            let img= canvas.toDataURL("meme/jpg");
            let link= document.createElement("a");
            // nombre cuando se descarga
            link.download="memepropio.jpg";
            link.href= img;

            link.click();
        });
       
    }
    return(
      <div className="m-2 text-center " >
          <div className="mt-3 ">
            <h1 className="mt-2">Editor de Memes</h1>
            <h4 className="mt-4"> Ingresa tu texto para el meme</h4>
            <input onChange={textoIngresado} className="form-control w-50 m-auto d-block" type="text" placeholder="Ingresa el texto" name="memetexto" arial-label="default input example"></input>
        </div>
          <h3 className="mt-3 mb-3 ">Eligi un meme</h3>
          <select onChange={seleccionarImg} className="form-select form-select-lg mb-3 w-50 m-auto">
              <option  value={1}>Homero</option>
              <option value={2}>Piel de gallina</option>
              <option value={3}>Puño de ira</option>
          </select>
          <figure className="text-center w-50 m-auto " id="exportarImg" >
              <p className=" text-center   px-30 position-absolute top-40 p-3  h1  text-dark">{Textomeme}</p>
              <img  src={`./meme/${imgmemes}.jpg`} className="w-100 figure-img img-fluid mt-3 d-block m-auto" alt="meme"/>
          </figure>
          <button onClick={exportar} type="button" className="btn btn-dark mt-4 mb-4 m-auto">Descargar Meme </button>
      </div>
    );
  }

