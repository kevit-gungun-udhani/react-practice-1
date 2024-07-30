import userImage from '../assest/user-image.jpg'
export default function Card({ userName, company, fullName, email, phone }) {
  return (
    <>
      <div className="self-center">
        <img
          src={userImage}
          alt="A image of girl"
          className="w-32 rounded-full "
        />
      </div>
      <section className="self-center text-center text-gray-600">
        <h2 className=' text-gray-400 text-center'>User Details</h2>
        <p className=' '>Name
          <br/>
          {fullName} 
        </p>
        <p>email: {email} </p>
        <p>Phone: {phone} </p>
      </section>
    </>
  );
}