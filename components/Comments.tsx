import React, { useRef } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { FormInput } from '../typings'
import { Toast } from 'primereact/toast'

const style = {
  input:
    'form-input mt-1 w-full rounded-xl border py-3 px-3 shadow outline-none ring-sky-300 focus:ring ',
  textArea:
    'form-textarea mt-1 w-full rounded-xl border py-3 px-3 shadow outline-none ring-sky-300 focus:ring',
  submit:
    'bg-green-600 text-white rounded-xl px-4 py-3 shadow-lg outline-none ring-sky-300 focus:ring cursor-pointer',
}
const Comments = ({ id, submit, setSubmit }: any) => {
  // To NotifyError
  const toast = useRef(null)
  const NotifyError = (error: string): void => {
    toast.current.show({
      severity: 'error',
      summary: 'Error',
      detail: error,
    })
  }
  const NotifyPostStatus = (status: string): void => {
    console.log(status)
    toast.current.show({
      severity: 'success',
      summary: 'Success Message',
      detail: 'Message Content',
    })
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>()
  //! track submit

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    fetch('/api/createComment', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(() => {
        setSubmit(true)
      })
      .catch((err) => console.log(err))
    NotifyPostStatus('Comment Posted')
  }

  return (
    <div>
      <Toast ref={toast} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto mb-10 flex max-w-2xl flex-col p-5"
      >
        <h3 className="text-base font-semibold text-[#ffc017]">
          Enjoyed the article?
        </h3>
        <h4 className="text-2xl font-bold">Leave a comment below!</h4>
        <hr className="mt-2 py-3" />
        <input type="hidden" {...register('_id')} name="_id" value={id} />
        {/* user name */}
        <label className="mb-5 ">
          <span className="text-xl font-bold">Name</span>
          <input
            {...register('name', { required: true })}
            placeholder="Enter your name"
            type="text"
            className={style.input}
          />
        </label>
        {/* Email */}
        <label>
          <span className="text-xl font-bold">Email</span>
          <input
            {...register('email', { required: true })}
            placeholder="Enter your email"
            type="email"
            className={style.input}
          />
        </label>
        {/* comment */}
        <label>
          <span className="text-xl font-bold">Comment</span>
          <textarea
            {...register('comment', { required: true })}
            className={style.textArea}
            placeholder="Enter your comment"
            rows={8}
          />
        </label>
        {/* it will send notification if we missed any filed */}
        <div></div>
        {/* Submit */}
        <input
          onClick={() => {
            console.log('fuck')
            if (errors.comment && errors.name && errors.email) {
              NotifyError('Fill all the fields')
            } else if (errors.name) {
              NotifyError('Fill the name field')
            } else if (errors.email) {
              NotifyError('Fill the email field')
            } else if (errors.comment) {
              NotifyError('Fill the comment field')
            }
          }}
          type="submit"
          className={style.submit}
        />
      </form>
    </div>
  )
}

export default Comments
