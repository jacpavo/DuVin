import {useState, useEffect } from 'react'
// import {getProducts} from '../mock/products'
import { getDocs, collection, query, where, connectFirestoreEmulator } from 'firebase/firestore'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { firestoreDb } from '../../services/firebase/index'



const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const [title, setTitle] = useState()

    const { categoriaId } = useParams()

    useEffect(() => {
        //getProducts(categoriaId).then(prods => {
        //    setProducts(prods)
        //}).catch(error => {
        //    console.log(error)
        //})

        const collectionRef = categoriaId
            ? query(collection(firestoreDb, 'products'), where('categoria', '==', categoriaId))
            : collection(firestoreDb, 'products')

        getDocs(collectionRef).then(response => {
            console.log(response)
            const products = response.docs.map(doc => {
                return{ id: doc.id, ...doc.data()}
            })
            setProducts(products)
            console.log(products)
        })

    }, [categoriaId]) 

   useEffect(() => {
       setTimeout(() => {
           setTitle('Productos')
       }, 4000)
   })
    

    return(
        <div className='ItemListContainer'> 
        <h1>{title}</h1>
        <ItemList products={products} />
        </div>
        )
    }
    
    export default ItemListContainer
    
    