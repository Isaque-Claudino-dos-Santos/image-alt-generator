import { Media } from '@/api/api-models'
import {
    ApigetuploadedimagesResponse,
    apiUploadImages,
    ApiUploadImagesPayload,
} from '@/api/api-service'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export type UseUploadImageOptions = {
    onSucess?: (files: Media[]) => void
}

export default function useUploadImage(optinos: UseUploadImageOptions = {}) {
    const queryClient = useQueryClient()

    const handleUpdateStataUploadedImagesList = (item: Media) => {
        queryClient.setQueryData(
            ['uploaded-images'],
            (oldData: ApigetuploadedimagesResponse) =>
                oldData
                    ? {
                          data: [...oldData.data, item],
                      }
                    : oldData,
        )
    }

    const { onSucess } = optinos
    const { mutate, isSuccess } = useMutation({
        mutationFn: (payload: ApiUploadImagesPayload) =>
            apiUploadImages({ payload }).then((res) => res),
        onSuccess: (res) => {
            res.data.forEach(handleUpdateStataUploadedImagesList)
            onSucess?.(res.data)
        },
    })

    return {
        mutate,
        isSuccess,
    }
}

