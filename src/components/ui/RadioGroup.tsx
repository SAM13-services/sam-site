interface RadioGroupProps {
  name: string
  label: string
  value: string
  onChange: (value: string) => void
  required?: boolean
  note?: string
  options?: string[]
}

export default function RadioGroup({
  name,
  label,
  value,
  onChange,
  required,
  note,
  options = ['Oui', 'Non'],
}: RadioGroupProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-sam-black">
        {label}
        {required && <span className="text-sam-black ml-1">*</span>}
      </label>
      <div className="flex flex-wrap gap-3">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`
              flex items-center gap-2.5 px-5 py-2.5 text-sm font-medium border transition-all duration-200
              ${
                value === option
                  ? 'bg-sam-yellow border-sam-yellow text-sam-black'
                  : 'bg-white border-sam-gray text-sam-black hover:border-sam-black'
              }
            `}
          >
            <span
              className={`
                w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0
                ${value === option ? 'border-sam-black' : 'border-sam-gray'}
              `}
            >
              {value === option && (
                <span className="w-2 h-2 rounded-full bg-sam-black block" />
              )}
            </span>
            {option}
          </button>
        ))}
      </div>
      {note && (
        <p className="text-xs text-gray-500 leading-relaxed italic mt-0.5">
          {note}
        </p>
      )}
    </div>
  )
}
