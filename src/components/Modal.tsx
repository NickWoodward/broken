import { createPortal } from "react-dom";

import { cn } from "../utils/utils";

interface Props {
  className?: string,
  close: () => void
}

export const Modal = ({className, close}: Props) => {
  const closeModal = () => {
    document.body.style.overflow = 'auto';
    close();
  }

  const classes = cn(className);
  document.body.style.overflow = 'hidden';
  return (
    createPortal(
      <div 
        onClick={closeModal} 
        className="fixed inset-0 bg-white z-50"
      >
        <p>Modal</p>
      </div>,
      document.body
    )
  )
}