import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function Taskpage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const navigate = useNavigate();

  function returnTaskClick() {
    navigate("/");
  }

  return (
    <div className="bg-slate-500 h-screen w-screen p-6">
      <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
        <div className="w-[500px] space-y-4">
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Detalhes da Tarefa
          </h1>

          <div className="bg-slate-200 p-4 rounded-md">
            <h2 className="text-xl font-bold text-slate-700">{title}</h2>
            <p className="text-slate-700">{description}</p>
          </div>
          <div className="flex justify-center mb-6">
            <button className="absolute top-0 left-0 mt-6 ml-6">
              <ChevronLeftIcon onClick={returnTaskClick} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Taskpage;
