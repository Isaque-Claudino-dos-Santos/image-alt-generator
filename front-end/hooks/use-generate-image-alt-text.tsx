import { Media } from '@/api/api-models'
import {
    apiGenerateImageAltText,
    ApiGenerateImageAltTextOptions,
    ApigetuploadedimagesResponse,
} from '@/api/api-service'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export type UseGenerateImageAltTextOptions = {
    onSuccess?: () => void
}

export default function useGenerateImageAltText(
    options: UseGenerateImageAltTextOptions = {},
) {
    const { onSuccess } = options
    const queryClient = useQueryClient()

    const handleUpdateAltImageFromListOfImages = (media: Media) => {
        queryClient.setQueryData(
            ['uploaded-images'],
            (oldData: ApigetuploadedimagesResponse) => {
                if (!oldData) return oldData

                return {
                    data: oldData.data.map((item) => {
                        if (item.id == media.id) {
                            return media
                        }
                        return item
                    }),
                }
            },
        )
    }

    const { mutate, isPending } = useMutation({
        mutationFn: (payload: ApiGenerateImageAltTextOptions) =>
            apiGenerateImageAltText(payload),
        onSuccess: (res) => {
            handleUpdateAltImageFromListOfImages(res.data)
            onSuccess?.()
        },
    })

    return { mutate, isPending }
}

