import { useLoaderData } from "react-router-dom";
import ContactInfo from "../ContactInfo/ContactInfo";


const Contact = () => {

    const contacts = useLoaderData();
    return (
        <div className="font-bold lg:grid lg:grid-cols-3 w-10/12 mx-auto gap-4">
            {/* <h1 className="text-center font-bold items-center justify-center bg-red-400 mt-36">I am contact</h1> */}
            {
                contacts.map(contact => <ContactInfo key={contact.id} contact={contact}></ContactInfo>)
            }
        </div>
    );
};

export default Contact;