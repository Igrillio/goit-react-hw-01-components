import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import FriendListItem from './FriendListItem';


const FriendList = ({ friends }) => {
    return (
      <ul className={s.friendList}>
        {friends.map(el => (
          <FriendListItem key={el.id} {...el} />
        ))}
      </ul>
    );
  };
  
  FriendList.prototype = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      })
    ),
  };
  
  export default FriendList;