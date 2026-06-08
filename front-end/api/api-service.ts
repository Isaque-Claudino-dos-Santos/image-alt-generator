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

