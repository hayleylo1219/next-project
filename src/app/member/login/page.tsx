import { redirect } from 'next/navigation'
import { useFormState } from 'react-dom'
import { encrypt, decrypt, deleteSession, getSession, loginForm } from '@/app/libs/session'
import { cookies } from 'next/headers'

export default async function login() {
  // login

  const session = await getSession()
  return (
    <>
      <form
        action={async formData => {
          'use server'
          await loginForm(formData)
          //   redirect('/')
        }}
      >
        <input type='text' name='uid' placeholder='name' />
        <br />
        <button type='submit'>submit</button>
      </form>
      <p>{JSON.stringify(session, null, 2)}</p>
    </>
  )
}
