import { BASE_URL } from '~~/const'

export default defineEventHandler(async (event: any) => {
  const body = JSON.stringify(await readBody(event))
  const res = await $fetch(
    `${BASE_URL}/java/auth/mail/sendIt`,
    {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body
    }
  )
  return res
})


