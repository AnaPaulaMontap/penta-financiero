const database = require('../provider').database;
const fs = require("fs");
const xml2js = require('xml2js');
const argumentsUser = process.argv[2]; 
const parser = new xml2js.Parser();
let itemCount = 0;

fs.readdir(argumentsUser, (err, stats) => {
    if(err){
        return err
    }
    
    stats.map((item) =>{
        itemCount++
        return fs.readFile(argumentsUser +'/'+ item, (err, data) =>{
            if(err){
                return err
            }
            parser.parseString(data, (err, result) => {
                if(err){
                    return console.log(err.message)
                }
               
                let arr= result.dte.items[0].detalle

                let service = arr.map(element => {
                    return {
                        servicio: element._,
                        monto: element.$.monto,
                        iva: element.$.iva
                    }                     
                });                

                
                const bill = { 
                    emision: result.dte.$.emision,
                    tipo: result.dte.$.tipo,
                    folio: result.dte.$.folio,
                    emisor: result.dte.emisor[0].$,
                    receptor: result.dte.receptor[0].$,
                    detalle: service
                   
                   }; 
                   
                   let newPostKey = database.push().key;
                  
                 
                   let updates = {};
                   updates['PentaInformation/'+ newPostKey] = bill;
                 
                  
                   return database.update(updates,()=>{
                    if(itemCount === stats.length){
                        process.exit()
                
                    }
                   });
            });
        });
    })



})

