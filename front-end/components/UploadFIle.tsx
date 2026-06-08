import { Upload, UploadCloud } from "lucide-react";
import { ChangeEvent, DragEvent, useState } from "react";

export type UploadFileProps = {
    onChange: (file: File) => void;
};

export default function UploadFile(props: UploadFileProps) {
    const { onChange } = props;
    const [file, setFile] = useState<File>();

    const notifyFileChange = (file: File) => {
        setFile(file);
        onChange(file);
    };

    const handleOnDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const file = e.dataTransfer.files?.[0];
        if (!file) return;

        notifyFileChange(file);
    };

    const handleChangeFile = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        const file = target.files?.[0];

        if (!file) return;

        notifyFileChange(file);
    };

    return (
        <div
            className="border rounded-xl p-4 flex justify-center items-center flex-col gap-2 w-full"
            onDragOver={(e) => {
                e.preventDefault();
            }}
            onDrop={(e) => {
                e.preventDefault();
                handleOnDrop(e);
            }}
        >
            <div className="p-2 border rounded bg-white/10">
                <UploadCloud />
            </div>

            <div className="flex items-center gap-1">
                <label className="flex items-center gap-1 cursor-pointer text-blue-300 hover:underline">
                    Click to upload
                    <input type="file" onChange={handleChangeFile} hidden />
                </label>
                <p>or drag and drop</p>
            </div>

        </div>
    );
}
