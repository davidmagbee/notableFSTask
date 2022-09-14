export default function Docs({
    physician = "Dev Doobay",
    // patients = ['me', 'you', 'them'],
    email = "devvy@email.com",
    listName = "Dr. Devesh Doobay"
  }) {
    return (
      <div className="doc">
        <h5>{physician}</h5>
        <h6>{email}</h6>
        {/* <p>{patients}</p> */}
        <p>{listName}</p>
      </div>
    );
  }