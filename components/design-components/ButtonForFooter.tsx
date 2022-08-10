interface Props {
  text: string
}

export const ButtonForFooter = ({ text }: Props) => {
  return (
    <>
      <button className={'btn-footer'}>{text}</button>

      <style jsx>
        {`
          .btn-footer {
            height: 48px;
            width: 128px;
            left: 1003px;
            top: 3426px;
            border-radius: 34px;
            color: #4e47f9;
            border: 2px solid #4e47f9;
          }
        `}
      </style>
    </>
  )
}
