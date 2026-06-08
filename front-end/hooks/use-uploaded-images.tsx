import { apiGetUploadedImages } from '@/api/api-service'
import { useQuery } from '@tanstack/react-query'

export default function useUploadedImages() {
    const { data, isFetching } = useQuery({
        queryKey: ['uploaded-images'],
        queryFn: () => apiGetUploadedImages(),
        select: (data) => data.data,
    })

    return {
        data: data ?? [],
        isFetching,
    }
}

