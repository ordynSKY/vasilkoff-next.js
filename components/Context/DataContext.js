import React, {
    useContext,
    useLayoutEffect,
    useReducer,
    useState,
} from "react";
import { db } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";

export const DataContext = React.createContext();

export default function DataProvider({ children }) {
    const reducer = (a, b) => {
        console.log("reducer", a, b);
        return { ...a, ...b };
    };
    const [arrayData, setArrayData] = useReducer(reducer, {});

    const getCollection = async () => {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const data = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            data[doc.id] = doc.data();
        });
        console.log("push", data);
        return data;
    };

    useLayoutEffect(() => {
        getCollection().then((res) => {
            setArrayData(res);
        });
    }, []);

    return (
        <DataContext.Provider value={{ arrayData, setArrayData }}>
            {children}
        </DataContext.Provider>
    );
}
