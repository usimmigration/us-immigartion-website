import { Form } from '@/app/application/step-1/step1.types'
import { api } from '@/lib/axios'

class ApplicationService {
	async apply(
		body: Omit<Omit<Form, 'passportFileBase64'>, 'passportFile'> & {
			passportFile: string | null
		}
	) {
		return await api.post('/application', body)
	}

	async remove(id: string) {
		return await api.delete(`/application/${id}`)
	}
}

export const applicationService = new ApplicationService()
