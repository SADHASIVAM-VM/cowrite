import { createContext, useContext, useState } from "react";

const MyContext = createContext();

export function ContextApp({children}){
    const [editBlog, setEditBlog] = useState();
    const [MenuSwitch, setMenuSwitch] = useState('newpost');


    console.log(editBlog)




    // values provider
    const ContextValues ={
        editBlog, setEditBlog,
        MenuSwitch, setMenuSwitch
    }



    return(
        <MyContext.Provider value={ContextValues}>
            {children}
        </MyContext.Provider>
    )
}
export const useMyContext =()=>{
    return useContext(MyContext);
};