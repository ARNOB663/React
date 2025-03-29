export default function Food({item,isHot}){

 return isHot? <li>{item}</li> : <li> cold {item}</li>
}