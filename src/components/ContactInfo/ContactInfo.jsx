import PropTypes from 'prop-types';
const ContactInfo = ({contact}) => {

    const {userId,id,title,body} = contact;
    return (
        <div className='border bg-slate-300 p-2 rounded-xl mb-3'>
            <h1>User Id: {userId}</h1>
            <h1>Id: {id}</h1>
            <h1>Title: {title}</h1>
            <h1>body: {body}</h1>
        </div>
    );
};

ContactInfo.propTypes = {
    contact: PropTypes.object.isRequired
}
export default ContactInfo;