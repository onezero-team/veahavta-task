export default function Input({ name, className, ...props }: any) {
  return (
    <div className={`w-full ${className}`}>
      <p className="pb-4 font-bold">{props.text}</p>
      <input
        className={`rounded-2xl px-2 shadow-4xl min-w-[260px] w-full ${
          props.type === 'textarea' ? 'min-h-[120px]' : 'min-h-[60px]'
        } $`}
        name={name}
        type={props.type}
        onBlur={props.onBlur}
        onChange={props.onChange}
        {...props}
      />
    </div>
  )
}
