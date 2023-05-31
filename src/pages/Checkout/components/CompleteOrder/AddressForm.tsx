import { useFormContext } from 'react-hook-form'
import { AddressFormContainer } from './style'
import { z } from 'zod'

export const createAddressFormSchema = z.object({
  zipCode: z.string().nonempty('O cep é obrigatório'),
  road: z.string().nonempty('A Rua é obrigatório'),
  number: z.string().nonempty('O Número é obrigatório'),
  complement: z.string(),
  neighborhood: z.string().nonempty('O Bairro é obrigatório'),
  city: z.string().nonempty('A Cidade é obrigatório'),
  UF: z.string().nonempty('O UF é obrigatório'),
})

export function AddressForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <AddressFormContainer>
      <div className="cep">
        <input type="number" placeholder="CEP" {...register('zipCode')} />
        {errors.zipCode && <span>{errors.zipCode.message}</span>}
      </div>
      <div>
        <input type="text" placeholder="Rua" {...register('road')} />
        {errors.road && <span>{errors.road.message}</span>}
      </div>
      <div>
        <input type="text" placeholder="Bairro" {...register('neighborhood')} />
        {errors.neighborhood && <span>{errors.neighborhood.message}</span>}
      </div>
      <div>
        <input type="number" placeholder="Número" {...register('number')} />
        {errors.number && <span>{errors.number.message}</span>}
      </div>
      <div>
        <input type="text" placeholder="Cidade" {...register('city')} />
        {errors.city && <span>{errors.city.message}</span>}
      </div>
      <div className="complement">
        <input
          type="text"
          placeholder="Complemento"
          {...register('complement')}
        />
      </div>
      <div>
        <input type="text" placeholder="UF" {...register('UF')} />
        {errors.city && <span>{errors.city.message}</span>}
      </div>
    </AddressFormContainer>
  )
}
