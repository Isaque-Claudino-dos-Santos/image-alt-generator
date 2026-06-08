import { UploadedImagesListRow } from "@/hooks/use-uploaded-images-list";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

export type UploadedImagesListProps = {
    rows: UploadedImagesListRow[];
};

const columns: GridColDef<UploadedImagesListRow[][number]>[] = [
    {
        field: "",
        headerName: "",
        width: 200,
        filterable: false,
        renderCell: (params) => {
            const { imageLink } = params.row;
            return <img src={imageLink} alt="Uploaded Image" />;
        },
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
