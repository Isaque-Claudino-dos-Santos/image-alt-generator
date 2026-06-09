import { apiGetUploadedImages } from '@/api/api-service'
import { useQuery } from '@tanstack/react-query'

export default function useUploadedImages() {
    const { data, isFetching } = useQuery({
        queryKey: ['uploaded-images'],
        queryFn: () => apiGetUploadedImages(),
        select: (data) => data.data,
        refetchOnWindowFocus:false,
        refetchOnMount: false,
        refetchInterval: false
    })

    return {
        data: data ?? [],
        isFetching,
    }
}

