export const ButtonWhite = ({
    className,
    type,
    text,
    ...props
  }: {
    className?: string
    type?: string
    text?: string
  }) => {
    return (
      <button className="aboutUsButtonBtn">
        {text}
  
        <style jsx>{`
          .aboutUsButtonBtn {
            background-color: white;
            color: blue;
            border-radius: 50px;
            width: auto;
            padding: 0 20px;
          }
        `}</style>
      </button>
    )
  }