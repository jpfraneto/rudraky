import Link from 'next/link';

const KriyaElementDisplay = ({ kriya }) => {
  return (
    <div>
      <h3>{kriya.name}</h3>
      <h5>Created by {kriya.author}</h5>
      <Link href={`/kriyas/${kriya._id}`}>
        <a>Go to Kriya</a>
      </Link>
    </div>
  );
};

export default KriyaElementDisplay;
