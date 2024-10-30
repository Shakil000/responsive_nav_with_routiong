import PropTypes from 'prop-types';
const User = ({user}) => {

    const {albumId, id, title, url, thumbnailUrl} = user;

    return (
        <div className='border bg-slate-300 p-2 rounded-xl mb-3'>
            <p>User Id: {id}</p>
            <h1>Album Id: {albumId}</h1>
            <h1>Title: {title}</h1>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired
}

export default User;