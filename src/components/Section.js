const Section = ({ id, className, children, ...props }) => {
  return (
    <section id={id} className={className} {...props}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  )
}

export default Section
