"use client"

import PhoneInput from "react-phone-number-input"
import type { Value } from "react-phone-number-input"
import flags from "react-phone-number-input/flags"
import "react-phone-number-input/style.css"

interface PhoneFieldProps {
  id: string
  name: string
  value?: Value
  onChange: (value?: Value) => void
  required?: boolean
  "aria-invalid"?: boolean
  "aria-describedby"?: string
}

function PhoneField({ id, name, value, onChange, required, ...accessibilityProps }: PhoneFieldProps) {
  return (
    <PhoneInput
      id={id}
      name={name}
      countries={["IN"]}
      defaultCountry="IN"
      flags={flags}
      international
      withCountryCallingCode
      countryCallingCodeEditable={false}
      required={required}
      value={value}
      onChange={onChange}
      className="phone-field"
      {...accessibilityProps}
    />
  )
}

export { PhoneField }
