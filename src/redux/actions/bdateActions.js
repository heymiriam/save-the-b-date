export const createBdate=(bdate)=>{
    return(dispatch, getState, {getFirebase, getFirestore})=>{
        const firestore = getFirestore();
        firestore.collection('bdate').add({
            ...bdate
        }).then(()=>{
            dispatch({type:'CREATE_BDATE',bdate});
        }).catch((err)=>{
            dispatch({type:'CREATE_BDATE_ERROR', err});
        })
        
    }
};

export const removeBdate = ({id}) => {
    return{
        type: "REMOVE_BDATE",
        id
    }
};

export const startRemoveBdate = ({id}) => {
    return (dispatch, {getFirebase, getFirestore})=> {
        const firestore = getFirestore();
        return firestore.ref(`bdate/${id}`).remove().then(()=>{
            dispatch(removeBdate({id}));
        })
    }
}
/*export const startRemoveBdate=(bdate, {id})=>{
    return(dispatch, getState, {getFirebase, getFirestore})=>{
        const firestore = getFirestore();
        firestore.collection('bdate').remove({
            ...bdate
        }).then(()=>{
            dispatch({type:'DELTE_BDATE',bdate});
        }).catch((err)=>{
            dispatch({type:'DELETE_BDATE_ERROR', err});
        })
        
    }
};*/
