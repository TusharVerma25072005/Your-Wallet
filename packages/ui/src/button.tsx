"use client";

interface ButtonProps {
  children: string;
  onClick?: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className= "bg-blue-700 text-white px-4 py-2 rounded-lg mt-4 font-bold hover:bg-blue-500 transition-colors" onClick={onClick} >
      {children}
    </button>
  );
};
