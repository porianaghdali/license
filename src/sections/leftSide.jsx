import { Edit, BadgeCheck } from "lucide-react";
import { useState } from "react";
import Modal from "../components/ui/modal";
import Button from "../components/ui/button";
import "../App.css"
export default function LeftSide() {
  const [open, setOpen] = useState(false);

  const list = [
    { title: "مشتری", id: 1, key: "customer" },
    { title: "زمان انقضاء", id: 2, key: "expire" },
    { title: "زمان ایجاد", id: 3, key: "created" },
    { title: "زمان اپدیت", id: 4, key: "updated" },
    { title: "ماژول های فعال", id: 5, key: "module" },
    { title: "عملگر", id: 6, key: "operator" },
  ];
function handlePopUp() {
  setOpen(true);
}
  const data = [
    {
      customer: "1",
      expire: "1402/02/12",
      created: "1402/02/12",
      updated: "1402/02/12",
      module: "ماژول های فعال",
      operator: "-",
    },
    {
      customer: "2",
      expire: "1402/02/12",
      created: "1402/02/12",
      updated: "1402/02/12",
      module: "ماژول های فعال",
      operator: "-",
    },
    {
      customer: "3",
      expire: "1402/02/12",
      created: "1402/02/12",
      updated: "1402/02/12",
      module: "ماژول های فعال",
      operator: "-",
    },
  ];
  console.log(open);
  return (
    <div className="col-span-2 border rounded-2xl h-[calc(100vh-4vw)] border-[#e9e9e9] shadow-xl overflow-y-auto">
      {/* Header */}
      <div className="p-4 bg-gray-500 text-2xl font-semibold text-white rounded-t-2xl">
        لیست مشتریان
      </div>

      {/* Table Wrapper */}
      <div className="grid grid-cols-6 border-t border-l border-gray-300">
        {/* Table Header */}
        {list.map((item) => (
          <div
            key={item.id}
            className="p-3 text-center text-lg font-semibold bg-gray-100 border-b border-r border-gray-300"
          >
            {item.title}
          </div>
        ))}

        {/* Table Rows */}
        {data.map((row, index) => (
          <div
            key={index}
            className={`contents ${
              index % 2 === 0 ? "bg-white" : "bg-gray-50"
            }`}
          >
            {list.map((col) => (
              <div
                key={col.id}
                className="p-3 text-center text-base font-medium border-b border-r border-gray-300 text-gray-600"
              >
                {/* If operator column -> show buttons */}
                {col.key === "operator" ? (
                  <div className="flex flex-col  items-center justify-center gap-2 ">
                    {/* Edit */}
                    <Button
                      text="ویرایش"
                      icon={<Edit size={18} />}
                      color="oklch(79.5% 0.184 86.047)"
                      onClick={() => setOpen(true)}
                    />

                    {/* License */}

                    <Button
                      text="لایسنس"
                      icon={<BadgeCheck size={18} />}
                      color="oklch(52.7% 0.154 150.069)"
                     Function={handlePopUp} 
                    />
                  </div>
                ) : (
                  row[col.key]
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Modal (اختیاری) */}
      <Modal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}
