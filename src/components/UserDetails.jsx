import "../styles/UserDetails.css"
import PropTypes from 'prop-types';
const replacementIds = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const fallbackAvatar = "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/710.jpg";
function UserDetails({ user }) {
    
    const getAvatarSrc = (user) => {
        return replacementIds.includes(Number(user.id)) ? fallbackAvatar : user.avatar;
      };

  if (!user) {
    return <div className="user-details">Select a user to view details</div>;
  }

  return (
    <div className="user-details">
      <h2 className='userDetailsHeading'>{user.profile.firstName}</h2>
      <img src={getAvatarSrc(user)} alt={user.profile.firstName} width="200" height="200" />
      <div className='userDetailsComponent'>
        <p><strong>Name:</strong> {user.profile.firstName} {user.profile.lastName}</p>
        <p><strong>Email:</strong> {user.profile.email}</p>
        <p><strong>Job Title:</strong> {user.jobTitle}</p>
        <p><strong>Bio:</strong> {user.Bio}</p>
        <p><strong>ID:</strong> {user.id}</p>
      </div>

    </div>
  );
}

UserDetails.propTypes = {
    user: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      profile: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
      }).isRequired,
      jobTitle: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      id:PropTypes.string.isRequired
    }),
  };

export default UserDetails;


