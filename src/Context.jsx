import { createContext, useState } from "react";


export const AdminContext = createContext();

const AdminContextGiver = (props) => {
    const [sidebar, setSidebar] = useState(true);
    const values = { sidebar, setSidebar }
    return (
        <AdminContext.Provider value={values}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextGiver;