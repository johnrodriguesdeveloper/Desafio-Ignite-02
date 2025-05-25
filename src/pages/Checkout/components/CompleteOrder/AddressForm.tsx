import { useFormContext } from 'react-hook-form'
import { AddressFormContainer } from './style'
import { z } from 'zod'

export const createAddressFormSchema = z.object({
  zipCode: z.string().nonempty('O cep é obrigatório'),
  road: z.string().nonempty('A Rua é obrigatória'),
  number: z.string().nonempty('O Número é obrigatório'),
  complement: z.string(),
  neighborhood: z.string().nonempty('O Bairro é obrigatório'),
  city: z.string().nonempty('A Cidade é obrigatória'),
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
        {errors.zipCode?.message && <span>{String(errors.zipCode.message)}</span>}
      </div>
      <div>
        <input type="text" placeholder="Rua" {...register('road')} />
        {errors.road?.message && <span>{String(errors.road.message)}</span>}
      </div>
      <div>
        <input type="text" placeholder="Bairro" {...register('neighborhood')} />
        {errors.neighborhood?.message && <span>{String(errors.neighborhood.message)}</span>}
      </div>
      <div>
        <input type="number" placeholder="Número" {...register('number')} />
        {errors.number?.message && <span>{String(errors.number.message)}</span>}
      </div>
      <div>
        <input type="text" placeholder="Cidade" {...register('city')} />
        {errors.city?.message && <span>{String(errors.city.message)}</span>}
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
        {errors.UF?.message && <span>{String(errors.UF.message)}</span>}
      </div>
    </AddressFormContainer>
  )
}
