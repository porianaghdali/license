export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
      />

      {/* Modal */}
      <div className="p-4 relative z-10 w-full max-w-lg bg-white rounded-xl ">
        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-2xl">
          <div className="bg-amber-300 p-2 text-white font-semibold">
            اطلاعات لایسنس
          </div>
          <div className="p-4 flex flex-col gap-4">
            <div className="flex gap-1">
              <p>مشتری:</p>
              <p className="font-bold ">منشی</p>
            </div>
            <div className="grid gap-1">
              <div className="flex gap-2 items-center">
                <label className="text-sm mr-2 font-semibold" htmlFor="sign">
                  امضای دیجیتال:
                </label>{" "}
                <button className="text-white bg-blue-700 p-2 rounded-lg text-xs">
                  کپی
                </button>
              </div>
              <textarea
                name="sign"
                className="w-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-xl
         text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                id="sign"
              ></textarea>
            </div>
            <div className="grid gap-1">
              <div className="flex gap-2 items-center">
                <label className="text-sm mr-2 font-semibold" htmlFor="sign">
                  کد تنظیم:
                </label>{" "}
                <button className="text-white bg-blue-700 p-2 rounded-lg text-xs">
                  کپی
                </button>
              </div>
              <textarea
                name="sign"
                className="w-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-xl
         text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                id="sign"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
