import { useEffect, useState } from "react";
import { database } from "../firebase/config";

const useFirestore = (collection) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        let documents = [];
        const unsub = database.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                snap.docChanges().forEach((change) => {
                    if (change.type === 'added') {
                        // console.log('listner: add');
                        documents.push({ ...change.doc.data(), id: change.doc.id });
                    } else if (change.type === 'removed') {
                        // console.log('listner: remove');
                        const update = documents.filter((document) => {
                            return document.id !== change.doc.id;
                        });
                        documents = update;
                    };
                });
                setProducts(documents);
            });

        return () => { unsub() };
    }, [collection]);

    return { products };
};

export default useFirestore;