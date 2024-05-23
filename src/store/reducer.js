import { membersData } from '../utilis/members';

export const BookInitalState = {
    members:membersData,
    logged:false,
    isModal:false,
    selectedMemberId:'',
    mode:''
}
export const BookReducer = (state,action) => {
    switch (action.type) {
        case 'bookActionState':
            return {...state,...action['payload']}
        case 'addMembers':
           return {
                ...state,
                members: [...state.members, action.payload]
              };
        default :
            return {...state}
    }
}