import { z } from 'zod'
import { CompleteOrder } from './components/CompleteOrder'
import { SelectedCafes } from './components/SelectedCafes'

import { CheckoutContainer } from './style'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createAddressFormSchema } from './components/CompleteOrder/AddressForm'

type CreateAddressFormData = z.infer<typeof createAddressFormSchema>

export function Checkout() {
  const createAddressForm = useForm<CreateAddressFormData>({
    resolver: zodResolver(createAddressFormSchema),
  })
  return (
    <FormProvider {...createAddressForm}>
      <CheckoutContainer>
        <CompleteOrder />
        <SelectedCafes />
      </CheckoutContainer>
    </FormProvider>
  )
}
