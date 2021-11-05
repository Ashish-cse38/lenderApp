const initState = {
  fundTransfer:'Pending',
  eKyc:'Pending',
  autoInvest: 'Pending',
  monthlyPlan: 'Pending',
  systematicPlan: 'Pending',
  nominee: 'Pending'
}

export const Reducer = (state = initState, action) => {
  if (action.type == "SET_FT") {
    return {
      ...state,
      fundTransfer: action.payload
    }
  }
  if (action.type == 'SET_EKYC') {
    return {
      ...state,
      eKyc: action.payload
    }
  }
  if (action.type == 'SET_AI') {
    return {
      ...state,
      autoInvest: action.payload
    }
  }
  if (action.type == 'SET_MIP') {
    return {
      ...state,
      monthlyPlan: action.payload
    }
  }
  if (action.type == 'SET_SIP') {
    return {
      ...state,
      systematicPlan: action.payload
    }
  }
  if (action.type == 'SET_ND') {
    return {
      ...state,
      nominee: action.payload
    }
  }
  return state;
}