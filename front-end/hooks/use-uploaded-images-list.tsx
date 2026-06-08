import { useState } from "react";

export type UploadedImagesListRow = {
    id: number;
    imageLink: string;
    file: File;
    fileName: string;
    fileSize: number;
};

export default function useUploadedImagesList() {
    const [rows, setRows] = useState<UploadedImagesListRow[]>([]);

    const addRow = (file: File) => {
        const row: UploadedImagesListRow = {
            id: Date.now(),
            imageLink: URL.createObjectURL(file),
            file: file,
            fileName: file.name,
            fileSize: file.size,
        };
        setRows((prevRows) => [...prevRows, row]);
    };

    return { rows, addRow };
}
