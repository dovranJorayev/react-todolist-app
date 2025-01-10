const Container = ({children, className, custom}: {children: React.ReactNode; className?: string, custom?: boolean}) => {
  return (
    <section className={`${className} ${custom ? className : "relative w-[95%] mx-auto"}`}>
      {children}
    </section>
  )
}

export default Container
// NOTE: Why used default imports most of the time?
