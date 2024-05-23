import { updateContext, updateStore } from '../../store/actions';

const Users = (props) => {
    const { BookState, BookDispatch } = updateContext();
    const {
        members
       } = BookState;
    const {
        id,
        email,
        first_name,
        last_name,
        joinDate,
        booksRead,
        avatar
    } = props.member;

    const onEdit = (id) =>{
        updateStore(BookDispatch,{isModal:true,selectedMemberId:id,mode:'edit'});
    }

    const onDelete = (id) => {
        const deleteUser = members.filter((member)=>{
            return member.id !== id;
        });
        updateStore(BookDispatch,{members:deleteUser});
        alert("user deleted");
    }
    return (
        <article>
            <div className="article-wrapper">
            <figure>
                <img src={avatar} alt="" />
            </figure>
            <div className="article-body">
                <h2>{`${first_name} ${last_name}`}</h2>
                <p>
                  <strong>User Name:</strong> {email}
                </p>
                <p>
                  Joined Date : {joinDate}
                </p>
                <p>
                <strong> Books read :  </strong>
                {booksRead.toString()}
                </p>
                <button onClick={()=> onEdit(id)}>
                     Edit
                </button>
                <button  onClick={()=> onDelete(id)} className="delete">
                    Delete
                </button>
            </div>
            </div>
        </article> 
  
    )
}

export default Users;