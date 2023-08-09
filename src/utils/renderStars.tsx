export const renderStars = (rating: number) => {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
          <path
            d="M4.54894 0.927052C4.8483 0.00574136 6.1517 0.0057404 6.45106 0.927051L6.95934 2.49139C7.09321 2.90341 7.47717 3.18237 7.9104 3.18237H9.55524C10.524 3.18237 10.9267 4.42199 10.143 4.99139L8.81232 5.9582C8.46183 6.21285 8.31518 6.66422 8.44905 7.07624L8.95733 8.64058C9.25669 9.56189 8.20221 10.328 7.41849 9.75861L6.08779 8.7918C5.7373 8.53715 5.2627 8.53715 4.91221 8.7918L3.58151 9.75861C2.7978 10.328 1.74331 9.56189 2.04267 8.64058L2.55095 7.07624C2.68483 6.66422 2.53817 6.21285 2.18768 5.9582L0.856976 4.99139C0.0732617 4.42199 0.476037 3.18237 1.44476 3.18237H3.0896C3.52283 3.18237 3.90678 2.90341 4.04066 2.49139L4.54894 0.927052Z"
            fill="#7fff00"
          />
        </svg>
      )
    } else {
      stars.push(
        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
          <path
            d="M5.02447 1.08156C5.17415 0.620903 5.82585 0.620906 5.97553 1.08156L6.48381 2.6459C6.68462 3.26393 7.26056 3.68237 7.9104 3.68237H9.55524C10.0396 3.68237 10.241 4.30218 9.84913 4.58688L8.51843 5.5537C7.9927 5.93566 7.77271 6.61271 7.97352 7.23075L8.48181 8.79508C8.63148 9.25574 8.10424 9.6388 7.71238 9.3541L6.38168 8.38729C5.85595 8.00532 5.14405 8.00532 4.61832 8.38729L3.28762 9.3541C2.89576 9.6388 2.36852 9.25574 2.5182 8.79508L3.02648 7.23075C3.22729 6.61271 3.0073 5.93566 2.48157 5.5537L1.15087 4.58688C0.75901 4.30218 0.960399 3.68237 1.44476 3.68237H3.0896C3.73944 3.68237 4.31538 3.26393 4.51619 2.6459L5.02447 1.08156Z"
            stroke="#7fff00"
          />
        </svg>
      )
    }
  }
  return stars
}
