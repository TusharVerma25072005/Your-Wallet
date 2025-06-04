"use client";

interface ButtonProps {
  children: string;
  onClick?: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className= "bg-white text-blue-700 px-4 py-2 rounded-lg mt-4 font-bold transform hover:scale-105 transition-transform" onClick={onClick} >
      {children}
    </button>
  );
};
