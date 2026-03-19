import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  note?: string
}

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
}

export function FormInput({ label, error, note, required, className = '', ...props }: FormInputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-sam-black">
        {label}
        {required && <span className="ml-1 text-sam-black">*</span>}
      </label>
      <input
        className={`
          w-full px-4 py-3 text-sm bg-white border border-sam-gray
          focus:outline-none focus:border-sam-yellow focus:ring-2 focus:ring-sam-yellow/20
          placeholder:text-gray-400 transition-all duration-200
          ${error ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : ''}
          ${className}
        `}
        required={required}
        {...props}
      />
      {note && <p className="text-xs text-gray-500 italic leading-relaxed">{note}</p>}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}

export function FormTextarea({ label, error, required, className = '', ...props }: FormTextareaProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-sam-black">
        {label}
        {required && <span className="ml-1 text-sam-black">*</span>}
      </label>
      <textarea
        className={`
          w-full px-4 py-3 text-sm bg-white border border-sam-gray
          focus:outline-none focus:border-sam-yellow focus:ring-2 focus:ring-sam-yellow/20
          placeholder:text-gray-400 transition-all duration-200 resize-none
          ${error ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : ''}
          ${className}
        `}
        required={required}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}
