import fetch from 'isomorphic-fetch'

export const TYPE_1 = 'TYPE_1'

export function action_1(data){
  return{
    type: TYPE_1,
    data
  }
}
