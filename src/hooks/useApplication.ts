import { Form } from '@/app/application/step-1/step1.types'
import { applicationService } from '@/services/application.service'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

export function useApply() {
	return useMutation({
		mutationFn: (body: Form) => applicationService.apply(body),
		onError: (err: any) => {
			toast.error(`Failed to apply: ${err.response.data.error.message}`)
			console.log(err)
		},
		onSuccess: data => {
			sessionStorage.setItem('paymentLink', data.data.link)
			sessionStorage.setItem('applicationId', data.data.id)
			window.location.reload()
		},
	})
}

export function useDelete() {
	return useMutation({
		mutationFn: applicationService.remove,
		onError: err => console.log(err),
	})
}
