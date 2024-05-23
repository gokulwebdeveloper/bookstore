import React from 'react';
import Users from './Users';
import UserProfile from './UserProfile';
import { updateContext,updateStore } from '../../store/actions';
import './admin.css';

const MemberList = () => {
    const { BookState,BookDispatch } = updateContext();
    const { members } = BookState;
    console.log(members);
    const addNewMember = () => {
        updateStore(BookDispatch,{isModal:true,mode:'add',selectedMemberId:''});
    }
    return (
        <>
        <div className="header">
             <button onClick={()=>addNewMember()} className='add-new'>Add New</button>
        </div>
      
        <section className="articles">
          
           {members.map(member => (
             <Users key={member.first_name} member={member}  />
           ))}
           <UserProfile />
        </section>
        </>
    )
}

export default MemberList;