import { useParams } from 'react-router-dom';
import Shop from './shop';
import Home from './home';

const Page = () => {
  // const { page } = useParams();

  return (
    <div>
      <h1>Hello from my shop!</h1>
      <hr />
      {/* {page === 'Shop' ? <Shop /> : page === 'Home'}; */}
    </div>
  );
};

export default Page;
