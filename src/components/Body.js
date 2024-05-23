import Gallery from './Gallery';
import { updateContext } from '../store/actions';

const Body = () => {
   const { BookState } = updateContext();
   const {
    members
   } = BookState;
    const sortedMembers = [...members].sort((a, b) => new Date(a.joinDate) - new Date(b.joinDate));
    return (
      <main className='membergallery'>
        <h2>Total Members: {sortedMembers.length}</h2>
        <Gallery members={sortedMembers} />
      </main>
    );
}

export default Body;

