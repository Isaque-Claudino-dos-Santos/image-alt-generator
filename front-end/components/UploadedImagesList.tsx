import { UploadedImagesListRow } from "@/hooks/use-uploaded-images-list";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

export type UploadedImagesListProps = {
    rows: UploadedImagesListRow[];
};

const columns: GridColDef<UploadedImagesListRow[][number]>[] = [
    {
        field: "",
        headerName: "Imagen",
        width: 200,
        renderCell: (params) => {
            const { imageLink } = params.row;
            return <img src={imageLink} alt="Uploaded Image" />;
        },
        filterable: false,
        sortable: false,
        hideable: false,
    },
    {
        field: "fileName",
        headerName: "File Name",
        width: 200,
    },
    {
        field: "fileSize",
        headerName: "File Size (bytes)",
        width: 150,
    },
];

export default function UploadedImagesList(props: UploadedImagesListProps) {
    const { rows } = props;

    return <DataGrid rows={rows} columns={columns} />;
}
