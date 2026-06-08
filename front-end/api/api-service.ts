import { apiInstance } from './api-instance'
import { Media } from './api-models'

export type ApiUploadImagesPayload = {
    images: File[]
}

export type ApiUploadImagesOptinos = {
    payload: ApiUploadImagesPayload
}

export type ApiUploadImagesResponse = {
    data: Media[]
}

export const apiUploadImages = (options: ApiUploadImagesOptinos) => {
    const { payload } = options

    const data = new FormData()

    payload.images.forEach((image, index) => {
        data.append(`images[${index}]`, image)
    })

    return apiInstance('/upload-images')
        .post(data)
        .json<ApiUploadImagesResponse>()
}

// ------------------------------------------------------------------------------------------

export type ApigetuploadedimagesResponse = {
    data: Media[]
}

export const apiGetUploadedImages = () => {
    return apiInstance('/upload-images')
        .get()
        .json<ApigetuploadedimagesResponse>()
}

// ------------------------------------------------------------------------------------------

export type ApiGenerateImageAltTextResponse = {
    data: Media
}
export type ApiGenerateImageAltTextOptions = {
    id: number
}
export const apiGenerateImageAltText = (
    options: ApiGenerateImageAltTextOptions,
) => {
    const { id } = options
    return apiInstance('/generate-alt-text')
        .post({ id })
        .json<ApiGenerateImageAltTextResponse>()
}

