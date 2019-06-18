import React, {Component} from 'react';
import {database} from './provider'
import './App.css';
import logo from './assets/Marcador de texto.png'

class App extends Component {
    constructor(){
    super ()
    this.state={
        firebase : false,
    }
  }
  componentDidMount(){

    database.child('PentaInformation').on('value', (snapshot) => {
      const key = snapshot.val();
      const billComplete = [];
      for (let read in key) {
          let item = key[read]
          item.id = read
          billComplete.push(item)
      }
        
        this.setState({
          firebase: billComplete.sort((arr1,arr2)=>{return (arr2.emision - arr1.emision)})
        })
    })
   

}

  render (){
    let bill = this.state.firebase ? this.state.firebase.map((element)=>{
      let date1 = new Date()
        date1.setTime(element.emision)
      let day = date1.getDate()
      let month = date1.getMonth()
      let year= date1.getFullYear()
      let hours = date1.getHours()
      let minutes = date1.getMinutes()
      let seconds = date1.getSeconds()

      return (

      <tr className="body" key={element.id} >
        <td key={element.folio} >N°{element.folio}</td>
        <td key={element.emisor.rut} ><p>{element.emisor.razonSocial}</p><p>{element.emisor.rut}</p></td>
        <td key={element.receptor.rut}><p>{element.receptor.razonSocial}</p><p>{element.receptor.rut}</p></td>
        <td key={element.emision}> <p>{ day+'/'+Number(month)+1 +'/'+ year }</p><p>{ hours +':'+ minutes+':'+ seconds}</p></td>
        <td key={element.tipo}>{element.tipo}</td>        
        <td key={element.id} >{element.detalle.map((item)=>{
          return (
            <div>
                  <p className="details">{item.servicio}</p>
                  <p><span>-Monto:${item.monto}</span></p>  
                  <p><span>-Iva: ${item.iva}</span></p>  
                  
            </div>
            )
        })}</td>
      </tr>

      )
    }):null
  return (
    <div className="App">
      <header><img src={logo} alt='logo' className='logo'/></header>
      <table>
								<thead className="head">
									<tr>
                    <th className="column6">Folio</th>
										<th className="column2">Emisor </th>
										<th className="column3">Receptor</th>
										<th className="column4">Fecha</th>
										<th className="column5">Tipo</th>
										<th className="column7">Contenido</th>
									</tr>
								</thead>
								<tbody>
										{bill}						
								</tbody>
			</table>
        <div className="footer">
          <p>Total de Documentos: {this.state.firebase.length}</p>
        </div>
      
    </div>
  );
}
}

export default App;

