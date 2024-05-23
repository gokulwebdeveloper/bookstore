import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { updateContext, updateStore, newUser} from '../../store/actions';
import { checkEmailVaild } from '../../utilis/common';

const UserProfile = () =>{
  const { BookState,BookDispatch } = updateContext();
  const [formData, setFormData] = useState({
    id:'',
    email: '',
    first_name: '',
    last_name: '',
    joinDate: '',
    password: '',
    booksRead: '',
    avatar: ''
  });
  const [errMsg, setErrMsg] = useState("");
  const { isModal, selectedMemberId, members, mode } = BookState;
  useEffect(()=>{
    if(selectedMemberId!==''){
    const  selectedMember =  members.find(member => member.id === selectedMemberId);   
      setFormData({
        ...formData,
        ...selectedMember,
      });
    }else {
      setFormData({
        id: members.length+1,
        email: '',
        first_name: '',
        last_name: '',
        joinDate: '',
        password: '',
        booksRead: '',
        avatar: ''
      });
    }
  },[selectedMemberId])
 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const closeModal = () => {
    updateStore(BookDispatch,{isModal:false,selectedMemberId:''});
  }

  const onSave = () => {
    if(mode === 'edit'){
      const memberUpdate = members.map((member)=> {
       if(member.id === selectedMemberId) { 
        return {...member,...formData}
       } else { 
        return member
       };
      });
      updateStore(BookDispatch,{isModal:false,members:memberUpdate,selectedMemberId:''});
    } else {
       if(!checkEmailVaild(formData['email'])){
        setErrMsg('Invalid Email address');
        return false;
       }else {
        setErrMsg('');
       }
       newUser(BookDispatch,formData);
       updateStore(BookDispatch,{isModal:false,selectedMemberId:''});
       setFormData({
        id: '',
        email: '',
        first_name: '',
        last_name: '',
        joinDate: '',
        password: '',
        booksRead: '',
        avatar: ''
      });
    }
 
  }

  const customStyles = {
    content: {
      width: '347px', 
      margin: 'auto',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
    },
  };
  const isDisabled = mode === 'edit' ? true : false;
  const btnName = mode === 'edit' ? 'Edit' : 'Save';
    return (
        <Modal
        isOpen={isModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
       <form className="registration-form">
        <span className="err-msg">{errMsg}</span>
      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} disabled={isDisabled} />
      <input type="hidden" name="id" value={formData.id} />
      <label>First Name:</label>
      <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} />

      <label>Last Name:</label>
      <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} />

      <label>Join Date:</label>
      <input type="date" name="joinDate" value={formData.joinDate} onChange={handleChange} />

      <label>Password:</label>
      <input type="password" name="password" value={formData.password} onChange={handleChange} />

      <label>Books Read:</label>
      <input type="text" name="booksRead" value={formData.booksRead.toString()} onChange={handleChange} />

      <label>Avatar URL:</label>
      <input type="text" name="avatar" value={formData.avatar} onChange={handleChange} />

      <button type="button" onClick={()=>onSave()}>{btnName}</button>
      <button type="submit" className='cancel' onClick={()=>closeModal()}>Cancel</button>
    </form>
      </Modal>
    )
}

export default UserProfile;