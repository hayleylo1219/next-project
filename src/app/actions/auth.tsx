import { SignupFormSchema, FormState } from '@/app/libs/definitions'
import { createSession } from '@/app/libs/session'
import { redirect } from 'next/navigation'

export async function signup(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  })

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // 3. Insert the user into the database or call an Auth Library's API
  // const data = await db
  //   .insert(users)
  //   .values({
  //     name,
  //     email,
  //     password: hashedPassword,
  //   })
  //   .returning({ id: users.id })

  // const user = data[0]

  // if (!user) {
  //   return {
  //     message: 'An error occurred while creating your account.',
  //   }
  // }
  // 4. Create user session
  //  await createSession(user.id)
  // 5. Redirect user
  redirect('/profile')
}
