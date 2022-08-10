interface Props {
    imageUrl: string
    title: string
    description: string
}

export const ServiceCard = ({imageUrl, title, description}: Props) => {
    return (
        <>
            <div className={'flex flex-col card-container'}>
                <div
                    className={
                        'my-img-card flex justify-center items-center rounded-t-3xl'
                    }
                >
                    <img src={imageUrl}/>
                </div>
                <div className={'flex flex-col h-1/2'}>
                    <div className={'my-title-card cursor-default'}>{title}</div>
                    <div className={'my-desc-card cursor-default'}>{description}</div>
                </div>
            </div>
            <style jsx>
                {`

                  @media only screen and (max-width: 500px) {

                    .card-container {
                      width: 275px;
                    }

                  }

                  .card-container {
                    height: 480px;
                    width: 338px;
                    left: 1324px;
                    top: 1895px;
                    border-radius: 31px;
                    background: white;
                    border: 2px solid #ffffff;
                    box-shadow: 0px 0px 4px 0px #00000040;
                  }

                  .my-img-card {
                    height: 50%;
                    background: #f4f3fd;
                  }

                  .my-title-card {
                    margin-top: 29px;
                    margin-right: 20px;
                    margin-left: 20px;
                    height: 37px;
                    width: 100%;
                    left: 1504px;
                    top: 2165px;
                    font-family: Assistant;
                    font-size: 28px;
                    font-weight: 700;
                    line-height: 37px;
                    color: #4e47f9;
                  }

                  .my-desc-card {
                    margin-top: 5px;
                    height: 136px;
                    width: 297px;
                    left: 981px;
                    top: 2207px;
                    font-family: Assistant;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 24px;
                    letter-spacing: 0em;
                    margin-right: 20px;
                    margin-left: 20px;
                    color: black;
                  }
                  
                  
                  @media only screen and (max-width: 500px) {

                    .card-container {
                      width: 244px;
                    }
                    
                    .my-desc-card {
                    width: 200px;
                    }

                  }
                  
                  

                `}
            </style>
        </>
    )
}
