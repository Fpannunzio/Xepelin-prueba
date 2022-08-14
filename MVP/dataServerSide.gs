function verifyUser(form) {
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const ws = ss.getSheetByName("Usuarios")
  const dataUsers = ws.getRange(2,1,2,2).getValues()

  for (var i in dataUsers) {
    if (dataUsers[i][0] == form.user && dataUsers[i][1] == form.password) {
      return form.user
    }
  }
   throw new Error("Usuario o contraseña incorrecta.")
}

function getData() {
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const ws = ss.getSheetByName("Sheet1")
  const data = ws.getRange("A1").getDataRegion().getDisplayValues()

  const headers = data.shift()

  const jsData = data.map(r => {
    const tempObject = {}

    headers.forEach((header, i) => {
      tempObject[header] = r[i]
    })
    return tempObject  
  })
  return jsData
}
    
function editField(props){
   const ss = SpreadsheetApp.getActiveSpreadsheet()
   const ws = ss.getSheetByName("Sheet1")
   const idCellMatched = ws.getRange("A2:A").createTextFinder(props.id).matchEntireCell(true).findNext()
   const columnCellMatched = ws.getRange("1:1").createTextFinder(props.modified_field).matchEntireCell(true).findNext()

   if (idCellMatched === null) throw new Error("No matching Record")
   if (columnCellMatched === null) throw new Error("No field matched")

   const recordRowNumber = idCellMatched.getRow()

   const recordColumnNumber = columnCellMatched.getColumn()

   ws.getRange(recordRowNumber, recordColumnNumber).setValue(props.newValue)
    
 }

function sendEmail(props) {
   var url = "https://hooks.zapier.com/hooks/catch/6872019/oahrt5g/";
   var options = {
     "method": "post",
     "payload": {
         "idOp" : props.id, //opId
         "tasa" : props.newValue, //tasa modificada
         "email" :props.email
     }
  };
   return UrlFetchApp.fetch(url, options);
}

//   Opcion enviar el mail directamente desde GMAIL, en primer instancia pensaba que tenia que ocuparme yo de mandar el mail
// function sendGmail(props) {
//   GmailApp.sendEmail(props.email, "Aviso de cambio de tasa", 
//   "Hola, enviamos este mail para avisarte que tu tasa ha sido cambiado a " 
//   + props.newValue + ". Saludos!")
// }
