const btn = document.querySelector('.btn');
const url = './api/people.json';

btn.addEventListener('click', ()=>{
 fetch(url)
   .then((resp) => {
     return resp.json()
   })
   .then((data) => {
     displayItems(data)
   })
   .catch((err) => {
     console.log(err)
   })
})

const displayItems = (items)=>{
  const displayData = items.map((item)=>{
   // const {name} = item;
   return `<p>${item.name}<p/>`
  }).join('');
  const element = document.createElement("div")
  element.innerHTML = displayData
  document.body.appendChild(element)}