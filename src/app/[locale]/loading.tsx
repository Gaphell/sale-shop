import Developer from "@/components/common/developer";
import Thinking from "@/components/common/thinking";

const Loader = () => {
  return (
    <div className="h-96 w-full">
      <div className="flex flex-row justify-center items-center h-full">
        <Thinking />
        <Developer />
      </div>
    </div>
  );
};

export default Loader;
