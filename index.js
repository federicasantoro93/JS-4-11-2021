/**
 * Wraps the document.querySelector method
 */
 const q = (selector) => document.querySelector(selector);


 const render = (container, items) => {
   const elements = items.map((element) => 
     `<li>
       <h3>${element.name}</h3>
       <p><strong>Phone:</strong> <a href="tel:${element.phone}">${element.phone}</a></p>
       <p><strong>Email:</strong> <a href="mailto:${element.email}">${element.email}</a></p>
     </li>`
   );
   
   const content = elements.join('');
 
   container.innerHTML = content;
 }
 
 document.addEventListener('DOMContentLoaded', () => {
   const form = q('form');
   const input = q('form input');
   const list = q('ul');
   
   render(list, data);
 
   // VERSIONE ORIGINALE CON IL SUBMIT
   // form.addEventListener('submit', (event) => {
   //   event.preventDefault();
   //   const value = input.value.toLowerCase();
 
   //   const results = data.filter((element) => 
   //     element.name.toLowerCase().search(value) > -1);
 
   //   render(list, results);
   // });

 
   input.addEventListener('keyup', (event) => {
     const value = input.value.toLowerCase();
 
     const results = data.filter((element) => 
       element.name.toLowerCase().search(value) > -1 ||
       element.email.toLowerCase().search(value) > -1
     );
 
     render(list, results);
   });
 });
 


 /* 

 PROVA FALLITA
 
 //SELEZIONO GLI ELEMENTI CHE MI INTERESSANO
 const contactForm = q('.contantForm');
 const nameInput = q('.nameInput');
 const telInput =q('.telInput');
 const emailInput = q('.emailInput');
 const list = q('ul');
 

 //ESTRAGGO I VALORI DEGLI INPUT
 
 const valueNameInput = nameInput.value;
 const valueTelInput = telInput.value;
 const valueEmailInut = emailInput.value;



 

//CREO UN NUOVO OGGETTO

 const newContact = {
      name: "valueNameInput",
      phone: "valueTelInput",
      email: "valueEmailInput"
    }


//METODO PER PUSHARE L'OGGETTO NELL'ARRAY

list.push(newContact);


//EVENTO CHE AL CLICK DEL BOTTONE INSERISCE NELL'ARRAY ESISTENTE (DATA?) L'OGGETTO NEW CONTACT

const contactForm = q('.contactForm')
const nameInput = q('.nameInput');
const telInput =q('.telInput');
const emailInput = q('.emailInput');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const contactForm = q('.contactForm')
    const nameInput = q('.nameInput');
    const telInput =q('.telInput');
    const emailInput = q('.emailInput');
    

    console.log(nameInput);
    console.log(telInput);
    
    
    const newContact = {
      name: "nameInput.value",
      phone: "telInput.value",
      email: "emailInput.value"
    }
    
  
list.push(newContact);      
    
});

*/