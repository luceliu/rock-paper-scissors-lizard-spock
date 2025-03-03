import { ReactNode, useEffect, useRef, useCallback } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  className?: string;
  ariaDescribedBy?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className = "",
  ariaDescribedBy,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const titleId = `modal-title-${Math.random().toString(36).substring(2, 9)}`;
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousActiveElement = useRef<Element | null>(null);

  // handle tab and shift+tab navigation
  const handleTabKey = useCallback((e: KeyboardEvent) => {
    if (!modalRef.current) return;

    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "Tab") {
        handleTabKey(event);
      }
    };

    if (isOpen) {
      previousActiveElement.current = document.activeElement;
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);

      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);

      if (
        previousActiveElement.current &&
        "focus" in previousActiveElement.current
      ) {
        (previousActiveElement.current as HTMLElement).focus();
      }
    };
  }, [isOpen, onClose, handleTabKey]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
      role="presentation"
    >
      <div
        ref={modalRef}
        className={`bg-white rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-auto pointer-events-auto ${className}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={ariaDescribedBy}
      >
        <div className="flex justify-between items-center p-4 pb-0">
          <h2 id={titleId} className="text-lg font-semibold">
            {title}
          </h2>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
            aria-label="Close modal"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
