type Props = {
    params: {
          productId : string
          reviewId: string
    }
  }
  
  export default function ReviewDetails({ params }: Props) {
    return (
          <h1>Details about product {params.productId} and the no {params.reviewId} Review</h1>
    )
  }