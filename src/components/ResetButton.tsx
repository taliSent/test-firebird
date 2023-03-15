import { ButtonHTMLAttributes, FC } from "react";
import useResetLogic from "../hooks/useResetLogic";

interface ResetButtonT extends ButtonHTMLAttributes<HTMLButtonElement> {}

const ResetButton: FC<ResetButtonT> = ({}: ResetButtonT) => {
  const { handleClearFilter } = useResetLogic();

  return (
    <button
      aria-label='reset filter'
      onClick={handleClearFilter}
      className='bg-indigo-700 px-6 py-4 text-white tracking-wider hover:bg-indigo-600'
    >
      Reset
    </button>
  );
};
export default ResetButton;
