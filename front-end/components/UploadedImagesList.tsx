import { Media } from '@/api/api-models'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Wand2 } from 'lucide-react'
import Image from 'next/image'

export type UploadedImagesListProps = {
    rows: Media[]
    isLoading?: boolean
}

export default function UploadedImagesList(props: UploadedImagesListProps) {
    const { rows, isLoading = false } = props

    const columns: GridColDef<Media[][number]>[] = [
        {
            field: '',
            headerName: 'Imagen',
            width: 200,
            renderCell: (params) => {
                const { link } = params.row
                return (
                    <Image
                        src={link}
                        alt="Uploaded Image"
                        width={200}
                        height={200}
                    />
                )
            },
            disableColumnMenu: true,
            hideSortIcons: true,
            maxWidth: 200,
        },
        {
            field: 'file_name',
            headerName: 'File Name',
            width: 300,
        },
        {
            field: 'size',
            headerName: 'File Size (bytes)',
            width: 150,
        },
        {
            field: 'alternativeText',
            headerName: 'Texto Alternativo (alt)',
            width: 200,
        },
        {
            field: 'generateAltText',
            headerName: '',
            width: 100,
            renderCell: (params) => {
                const { id } = params.row

                // request generate image alt text by id of media
                return (
                    <div className="flex h-full cursor-pointer items-center justify-center">
                        <Wand2 />
                    </div>
                )
            },
            disableColumnMenu: true,
            hideSortIcons: true,
        },
    ]

    return <DataGrid rows={rows} columns={columns} loading={isLoading} />
}

