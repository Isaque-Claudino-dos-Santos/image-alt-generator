import wretch from 'wretch'
import FormDataAddon from 'wretch/addons/formData'
import QueryStringAddon from 'wretch/addons/queryString'
import ProgressAddon from 'wretch/addons/progress'

export const apiInstance = (path: string) =>
    wretch(`http://localhost:8000/api${path}`).addon([
        FormDataAddon,
        QueryStringAddon,
        ProgressAddon(),
    ])

