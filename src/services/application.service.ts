import { Form } from '@/app/application/step-1/step1.types'
import { api } from '@/lib/axios'

class ApplicationService {
	async apply(body: Form) {
		const formData = new FormData()

		for (const key in body) {
			if (Object.prototype.hasOwnProperty.call(body, key)) {
				const value = (body as any)[key]

				if (key === 'passportFile' && value && value.length > 0) {
					formData.append('passportFile', value[0])
				} else if (value !== undefined && value !== null) {
					formData.append(key, value.toString())
				}

				if (key === 'passportFileBase64') continue
			}
		}

		return await api.post('/application', formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
	}

	async remove(id: string) {
		return await api.delete(`/application/${id}`)
	}
}

export const applicationService = new ApplicationService()
