export const catching = {
  GET_TRACKING_BY_ID: 'GET_TRACKING_BY_ID'
}

export const compileURL = (url) => `${process.env.TRACKING_ENV}${url}`
console.log({ compileURL: compileURL('') })
