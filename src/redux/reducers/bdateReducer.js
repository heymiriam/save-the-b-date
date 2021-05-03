const initState={
bdate:[
    {
        id: 1,
        name: "Greg",
        birthday: "September 19th",
        tag:"family",
        img:"https://images.unsplash.com/photo-1611726613157-042898574982?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
        },
        {
        id:2, 
        name: "Mari Paz",
        birthday: "February 23rd",
        tag:"family",
        img:"https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1282&q=80",
        },
        {
        id:3,
        name: "Cristina",
        birthday: "December 21st",
        tag:"friends",
        img:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
        },
]
}
const bdateReducer=(state=initState, action) =>{
    switch(action.type){
        case 'CREATE_BDATE':
            console.log('bdate created', action.bdate);
            return state;
        case 'CREATE_BDATE_ERROR':
            console.log('create bdate error', action.err);
            return state;
        default:
            return state;
    }
   
}

export default bdateReducer