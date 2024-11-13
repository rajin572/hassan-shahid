import { FadeLoader } from "react-spinners";

const loading = () => {
  return (
    <div className=" isolate aspect-video h-screen bg-transparent backdrop-blur w-full flex justify-center items-center">
      <FadeLoader color="#FF6D5A" />
    </div>
  );
};

export default loading;
