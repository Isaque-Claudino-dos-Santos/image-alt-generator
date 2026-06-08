'use client'

import DragDropFile from '@/components/DragDropFile'
import UploadedImagesList from '@/components/UploadedImagesList'
import useUploadImage from '@/hooks/use-upload-image'
import useUploadedImages from '@/hooks/use-uploaded-images'

export default function Home() {
    const { data: images, isFetching } = useUploadedImages()
    const { mutate: UploadImage } = useUploadImage({
        onSucess: (files) => {},
    })

    return (
        <div className="flex flex-col gap-4 p-4">
            <DragDropFile
                onChange={(file) => {
                    UploadImage({
                        images: [file],
                    })
                }}
            />

            <UploadedImagesList rows={images} isLoading={isFetching} />
        </div>
    )
}

