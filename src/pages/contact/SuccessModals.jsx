import "./SucessModals.css";

const SuccessModals = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-950/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 text-center max-w-md w-full relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
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

        {/* Success Icon */}
        <img
          src="https://res.cloudinary.com/dgde8cwjk/image/upload/v1742550701/TrainStation%20Pictures/Success_Icon_k7jgso.png"
          alt="Success"
          className="w-20 h-20 mb-4 mx-auto"
        />

        {/* Success Message */}
        <h2 className="text-2xl font-bold mb-2">Success!</h2>
        <p className="text-gray-600">
          Your message has been sent successfully. Our team will get back to you
          as soon as possible.
        </p>
      </div>
    </div>
  );
};

export default SuccessModals;
