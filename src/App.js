import { createContext,useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from './actions/userAction';
import './App.css';
import Router from './routers/Router'
 const keywordContext=createContext()
 const cartnoContext=createContext()
 const categoryContext=createContext()
 const orderListContext=createContext()

function App() {
 
  const [keyword,setKeyword]=useState(null)
  const [cartno,setCartno]=useState(0)
   const [category, setCategory] = useState(null)
   const [order_list, setOrderList] = useState([])
     const userData = useSelector(state => state.userData)
    const dispatch=useDispatch()
    
    useEffect(() => {
        dispatch(loadUser(localStorage.getItem('access')))
        
      //   if(localStorage.getItem("order_list")){
      //     let array_list=localStorage.getItem("order_list").split("},{")
      //   array_list[0]=array_list[0]+"}"
      //  for(let i=1;i<array_list.length-1;i++){
      //    array_list[i]="{"+array_list[i]
      //  }
        
      //   setOrderList(array_list)
      //   }

    }, [dispatch])
    console.log(order_list)
  return (
    <div className="app">
      <orderListContext.Provider value={{order_list,setOrderList}}>
      <categoryContext.Provider value={{category,setCategory}}>
      <keywordContext.Provider value={{keyword,setKeyword}}>
        <cartnoContext.Provider value={{cartno,setCartno}}>
        <Router/>
        </cartnoContext.Provider>
      </keywordContext.Provider>
      </categoryContext.Provider>
      </orderListContext.Provider>
      
    </div>
  );
}
export {keywordContext,cartnoContext,categoryContext,orderListContext}
export default App;
