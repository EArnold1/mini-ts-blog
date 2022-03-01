import { FC } from 'react';

const Loader: FC = () => {
  return (
    <div className="container text-center">
      <img
        src="https://ershemug.sirv.com/mini-ts-blog/loader.gif"
        alt="loading....."
        className="img"
      />
    </div>
  );
};

export default Loader;
