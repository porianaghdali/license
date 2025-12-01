
import Input from "../components/ui/input";
import TextArea from "../components/ui/textArea";
import { Save } from "lucide-react";
import { X } from "lucide-react";
import Button from "../components/ui/button";
import Switch from "../components/ui/switch";


export default function RightSide() {
    return (
        <div className="col-span-1 border rounded-2xl h-[calc(100vh-4vw)] border-[#e9e9e9] shadow-xl  overflow-y-scroll">
            <div className="p-4 bg-blue-400 text-2xl font-semibold text-white">
                افزودن مشتری جدید
            </div>
            <div className="p-4 flex flex-col gap-4">
                <Input label="مشتری:" placeholder="" />
                <TextArea label="توضیحات مشتری:" placeholder="اختیاری" />
                <Input label="دامنه/IP:" placeholder="اختیاری" />
                <Input label="تاریخ انقضا (شمسی):" placeholder="1402/02/12" />
                <Switch label="مانیتورینگ سیستم ها" />
                <Switch label="  دیجیتال توین" />
                <p>ماژول های اطلاع رسانی</p>
                <Switch label="نود" />
                <Switch label="پیامک" />
                <Switch label="تماس" />
                <Switch label="ایمیل" />
                <Switch label="ربات" />
                <Input label="تعداد نود:" placeholder="اختیاری" />
                <Input label="wmicUUID:" placeholder="CMD:wmic csproduct get uuid" />
                <div className="flex gap-4">
                    <Button text="ذخیره" icon={<Save />} color="oklch(62.3% 0.214 259.815)" />
                    <Button text="انصراف" icon={<X />} color="oklch(63.7% 0.237 25.331)" />
                </div>
            </div>
        </div>
    );
}