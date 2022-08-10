interface Props {
  text: string
  type: string
  refBtn?: any
}

export const Button = ({ text, type, refBtn }: Props) => {
  function getClass() {
    if (type === 'big') {
      return 'my-font-size-big'
    } else {
      return 'my-font-size-small'
    }
  }

  function onClickBtn() {
    if (refBtn !== null && refBtn !== undefined) {
      refBtn?.current.scrollIntoView()
    } else {
    }
  }

  return (
    <>
      <button
        onClick={() => {
          onClickBtn()
        }}
        className={'my-button'}
      >
        <div className={getClass()}>{text}</div>
      </button>
      <style jsx>
        {`
          .my-button {
            z-index: 5;
            cursor: pointer;
            height: 60px;
            width: 185px;
            left: 868px;
            top: 579px;
            border-radius: 51px;
            background: #4e47f9;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .my-font-size-big {
            text-align: center;
            font-family: Assistant;
            font-size: 28px;
            font-weight: 700;
            line-height: 37px;
            color: white;
          }

          .my-font-size-small {
            font-family: Assistant;
            font-size: 22px;
            font-weight: 700;
            line-height: 29px;
            letter-spacing: 0em;
            text-align: center;
            color: white;
          }
        `}
      </style>
    </>
  )
}
