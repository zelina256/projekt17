function kontakt(event){
     event.preventDefault()
     let emri = document.getElementById("emri").value
     let mbiemri = document.getElementById("mbiemri").value
     let email = document.getElementById("email").value
     let komenti = document.getElementById("komenti").value
     let sms = document.getElementById("sms")

    if(emri ==="" || mbiemri==="" || email===""||komenti===""){
      sms.textContent =
      `Ploteso fushat`
      sms.style.display ="block"
      sms.classList.add("alert-danger")
      return  
    }
//     if(emri.length < 8){
// sms.textContent =
//       `Password me me shume se 8 karaktere`
//       sms.style.display ="block"
//       sms.classList.add("alert-danger")
//       return  
//     }
//         if(emri === mbiemri){
// sms.textContent =
//       `Password me me shume se 8 karaktere`
//       sms.style.display ="block"
//       sms.classList.add("alert-danger")
//       return  
//     }
if(!/^[a-zA-Z]/.test(emri) || !/^[a-zA-Z]/.test(mbiemri)){
    sms.textContent =
      `Emri dhe Mbiemri duhet te kene vetem germa`
      sms.style.display ="block"
      sms.classList.add("alert-danger")
      return  
}
     sms.textContent =
      `Faleminderi per mesazhin ${emri} ${mbiemri}.`
      sms.style.display ="block"
      sms.classList.add("alert-success")
      sms.classList.remove("alert-danger")
}