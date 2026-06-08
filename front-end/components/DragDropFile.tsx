import { UploadCloud } from 'lucide-react'
import { ChangeEvent, DragEvent, useState } from 'react'

export type UploadFileProps = {
    onChange: (file: File) => void
}

export default function DragDropFile(props: UploadFileProps) {
    const { onChange } = props
    const [, setFile] = useState<File>()

    const notifyFileChange = (file: File) => {
        setFile(file)
        onChange(file)
    }

    const handleOnDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        const file = e.dataTransfer.files?.[0]
        if (!file) return

        notifyFileChange(file)
    }

    const handleChangeFile = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement
        const file = target.files?.[0]

        if (!file) return

        notifyFileChange(file)
    }

    return (
        <div
            className="flex w-full flex-col items-center justify-center gap-2 rounded-xl border p-4"
            onDragOver={(e) => {
                e.preventDefault()
            }}
            onDrop={(e) => {
                e.preventDefault()
                handleOnDrop(e)
            }}
        >
            <div className="rounded border bg-white/10 p-2">
                <UploadCloud />
            </div>

            <div className="flex items-center gap-1">
                <label className="flex cursor-pointer items-center gap-1 text-blue-300 hover:underline">
                    Click to upload
                    <input type="file" onChange={handleChangeFile} hidden />
                </label>
                <p>or drag and drop</p>
            </div>
        </div>
    )
}

