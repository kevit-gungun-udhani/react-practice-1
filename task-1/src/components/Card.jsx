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
      <section className="self-center">
        <h2>User Details</h2>
        <p>
          Username: {userName} <span>{company}</span>
        </p>
        <p>email: {email} </p>
        <p>Phone: {phone} </p>
      </section>
    </>
  );
}