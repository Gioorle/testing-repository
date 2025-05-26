const Button = ({ children, className, variant = "default", ...props }) => {
  const baseStyles = "px-4 py-2 rounded-md font-medium transition-colors"

  const variantStyles = {
    default: "",
    outline: "border border-white",
  }

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button
