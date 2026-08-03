"use client"

import PhoneInput from "react-phone-number-input"
import type { Value } from "react-phone-number-input"
import "react-phone-number-input/style.css"

interface PhoneFieldProps {
  id: string
  name: string
  value?: Value
  onChange: (value?: Value) => void
  required?: boolean
}

function PhoneField({ id, name, value, onChange, required }: PhoneFieldProps) {
  return (
    <PhoneInput
      id={id}
      name={name}
      countries={["IN"]}
      defaultCountry="IN"
      international
      withCountryCallingCode
      countryCallingCodeEditable={false}
      required={required}
      value={value}
      onChange={onChange}
      className="phone-field"
    />
  )
}

export { PhoneField }
