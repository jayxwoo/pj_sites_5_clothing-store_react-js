import { useEffect, useState } from "react";
import { database } from "../firebase/config";

const useFirestore = (collection) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const unsub = database.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let documents = [];
                snap.docChanges().forEach((change) => {
                    if (change.type === 'added') {
                        documents.push({ ...change.doc.data(), id: change.doc.id });
                    } else if (change.type === 'removed') {
                        documents.filter((document) => {
                            return document.id !== change.doc.id;
                        });
                    };
                });
                setProducts(documents);
            });

            return () => { unsub() };
    }, [collection, products]);

    return { products };
};

export default useFirestore;