import { Button, Text, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { Form, FormAnnotation } from './styles'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
// import { useRouter, useSearchParams } from 'next/navigation'

const clasimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Min de 3 letras' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'Apenas letras e hifens',
    })
    .transform((value) => value.toLowerCase()),
})

type ClaimUsernameFormData = z.infer<typeof clasimUsernameFormSchema>
export function ClaimUsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(clasimUsernameFormSchema),
  })

  const router = useRouter()
  async function handlePreRegister(data: ClaimUsernameFormData) {
    const { username } = data
    await router.push(`/register?username=${username}`)
    console.log(data)
  }
  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handlePreRegister)}>
        <TextInput
          size="sm"
          prefix="ignite.com/"
          placeholder="seu-usuário"
          {...register('username')}
        />

        <Button size="sm" type="submit" disabled={isSubmitting}>
          Reservar
          <ArrowRight />
        </Button>
      </Form>
      <FormAnnotation>
        <Text size="sm">
          {errors.username
            ? errors.username.message
            : 'Digite o nome do usuário desejado'}
        </Text>
      </FormAnnotation>
    </>
  )
}
