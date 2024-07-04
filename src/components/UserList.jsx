import PropTypes from 'prop-types';
import "../styles/UserList.css"
const replacementIds = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const fallbackAvatar = "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/710.jpg";
function UserList({ users, onUserSelect, selectedUser }) {



    const getAvatarSrc = (user) => {
        return replacementIds.includes(Number(user.id)) ? fallbackAvatar : user.avatar;
      };
        return (
            <div className='userListmain'>
                <h2 className='UserListHeading'>Users</h2>
                <div className="user-list">
                
                
                {users.length === 0 ? (
                    <p>No users to show</p>
                ) : (
                    <ul>
                    {users.map((user) => (
                        <li key={user.createdAt}                      
                            
                            onClick={() => onUserSelect(user) } 
                            
                            className={selectedUser && selectedUser.id === user.id ? 'selected' : ''}
                        >
                        <img src={getAvatarSrc(user)} alt={user.profile.username} />
                        <span>{user.profile.firstName} {user.profile.lastName}</span>
                        
                        </li>
                    ))}
                    </ul>
                )}
                </div>
            </div>
        );
}

UserList.propTypes = {
    users: PropTypes.arrayOf(
      PropTypes.shape({
        createdAt: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        id:PropTypes.string.isRequired,
        profile: PropTypes.shape({
          username: PropTypes.string.isRequired,
          firstName: PropTypes.string.isRequired,
          lastName: PropTypes.string.isRequired,
        }).isRequired,
      })
    ).isRequired,
    onUserSelect: PropTypes.func.isRequired,
    selectedUser:PropTypes.arrayOf(
        PropTypes.shape({
            createdAt: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            id:PropTypes.string.isRequired,
            profile: PropTypes.shape({
              username: PropTypes.string.isRequired,
              firstName: PropTypes.string.isRequired,
              lastName: PropTypes.string.isRequired,
            }).isRequired,
          })
    )
  };

export default UserList;

// import PropTypes from 'prop-types';
// import { useRef } from 'react';
// import '../styles/UserList.css';

// const replacementIds = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// const fallbackAvatar = "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/710.jpg";

// function UserList({ users, onUserSelect, selectedUser }) {
//   const listItemRefs = useRef([]);

//   const getAvatarSrc = (user) => {
//     return replacementIds.includes(Number(user.id)) ? fallbackAvatar : user.avatar;
//   };

//   const handleClick = (user, index) => {
//     const position = listItemRefs.current[index].getBoundingClientRect();
//     onUserSelect(user, position);
//   };

//   return (
//     <div className="user-list">
//       <h2 className="UserListHeading">Users</h2>
//       {users.length === 0 ? (
//         <p>No users to show</p>
//       ) : (
//         <ul>
//           {users.map((user, index) => (
//             <li
//               key={user.createdAt}
//               ref={(el) => (listItemRefs.current[index] = el)}
//               onClick={() => handleClick(user, index)}
//               className={selectedUser && selectedUser.id === user.id ? 'selected' : ''}
//             >
//               <img src={getAvatarSrc(user)} alt={user.profile.username} />
//               <span>{user.profile.firstName} {user.profile.lastName}</span>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// UserList.propTypes = {
//   users: PropTypes.arrayOf(
//     PropTypes.shape({
//       createdAt: PropTypes.string.isRequired,
//       avatar: PropTypes.string.isRequired,
//       profile: PropTypes.shape({
//         username: PropTypes.string.isRequired,
//         firstName: PropTypes.string.isRequired,
//         lastName: PropTypes.string.isRequired,
//       }).isRequired,
//     })
//   ).isRequired,
//   onUserSelect: PropTypes.func.isRequired,
//   selectedUser: PropTypes.object
// };

// export default UserList;
