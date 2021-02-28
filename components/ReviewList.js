app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
        /*html*/
        `
  <div class="review-container">
  <h3>Reviews:</h3>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
        {{ review.name }} gave this {{ review.rating }} stars
        <br/>
        "{{ review.review }}"
        <br/>
        <p v-if="review.recommendation === 'yes'">{{ review.name }} would recommend this product</p>
        <p v-else>{{ review.name }} would not recommend this product</p>
      </li>
    </ul>
  </div>
`
})