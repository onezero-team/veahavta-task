import React from 'react'

interface Props {
  imageIcon: string
}

export const RoundButton = ({ imageIcon }: Props) => {
  return (
    <>
      <div
        className={
          'my-round-icon flex justify-center cursor-pointer items-center'
        }
      >
        <img src={imageIcon} />
      </div>

      <style jsx>
        {`
          .my-round-icon {
            height: 44px;
            width: 44px;
            left: 1525px;
            top: 536px;
            background: #4e47f9;
            border-radius: 50%;
          }
        `}
      </style>
    </>
  )
}
