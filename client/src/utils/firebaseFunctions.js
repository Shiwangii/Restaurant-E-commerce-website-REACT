import axios from "axios"
import { doc, setDoc } from "firebase/firestore"
import { firestore } from "../firebase.config"

//Saving the New Item to Firebase Storage
//Object from and merge it of document 
export const saveProductItem = async(productData)=>{
    try {
    
    await setDoc(doc(firestore,"productItem",`${Date.now()}`),productData,{
        merge : true
    })
        
} catch (error) {
        
}
}


//getting all items 
export const getAllProductItems = async()=>{
    
    try {
        const res = await axios.get(process.env.REACT_APP_BACKEND_URL+'/product');
        // console.log(res)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}