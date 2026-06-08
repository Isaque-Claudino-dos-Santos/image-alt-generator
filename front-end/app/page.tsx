"use client";

import { apiInstance } from "@/api/api-instance";
import UploadedImagesList from "@/components/UploadedImagesList";
import UploadFile from "@/components/UploadFIle";
import useUploadedImagesList from "@/hooks/use-uploaded-images-list";
import { useMutation } from "@tanstack/react-query";
export default function Home() {
    const { rows, addRow } = useUploadedImagesList();

    return (
        <div>
            <UploadFile
                onChange={(file) => {
                    addRow(file);
                }}
            />

            <UploadedImagesList rows={rows} />
        </div>
    );
}
